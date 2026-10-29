-- Base de données du jeu Geonomix Duel sur Supabase (scores, matchs, duels du jour, classement).
-- À coller une seule fois dans Supabase : SQL Editor > New query > coller > Run.
-- Une seule table « docs » qui imite les collections du prototype (joueurs, defi, matchs, qduels, qstats).
-- Chaque joueur est un utilisateur anonyme de Supabase : il lit tout, mais n'écrit que ses propres documents.

create table if not exists public.docs (
  collection text not null,
  id text not null,
  data jsonb not null default '{}'::jsonb,
  owner uuid not null default auth.uid(),
  updated_at timestamptz not null default now(),
  primary key (collection, id)
);
create index if not exists docs_collection_idx on public.docs (collection);

alter table public.docs enable row level security;

drop policy if exists "lecture pour tous" on public.docs;
create policy "lecture pour tous" on public.docs for select using (true);

drop policy if exists "créer ses documents" on public.docs;
create policy "créer ses documents" on public.docs for insert to authenticated
  with check (owner = auth.uid() and collection in ('joueurs', 'defi', 'matchs', 'qduels', 'qstats') and octet_length(data::text) < 20000);

drop policy if exists "modifier ses documents" on public.docs;
create policy "modifier ses documents" on public.docs for update to authenticated
  using (owner = auth.uid()) with check (owner = auth.uid() and octet_length(data::text) < 20000);

drop policy if exists "supprimer ses documents" on public.docs;
create policy "supprimer ses documents" on public.docs for delete to authenticated using (owner = auth.uid());

-- Quand un joueur prend un match ou un duel « ouvert » (adversaire au hasard), il le ferme pour les autres.
-- Ce document appartient à l'hôte : on passe par cette fonction, qui ne touche qu'au champ « open ».
create or replace function public.fermer_ouvert(coll text, doc_id text)
returns void language sql security definer set search_path = public as $$
  update public.docs set data = jsonb_set(data, '{open}', 'false'::jsonb), updated_at = now()
  where collection = coll and id = doc_id and coll in ('matchs', 'qduels') and auth.uid() is not null;
$$;
revoke all on function public.fermer_ouvert(text, text) from public, anon;
grant execute on function public.fermer_ouvert(text, text) to authenticated;

-- Mises à jour en direct (résultat d'un match qui tombe, classement qui bouge).
do $$ begin
  alter publication supabase_realtime add table public.docs;
exception when duplicate_object then null; end $$;
