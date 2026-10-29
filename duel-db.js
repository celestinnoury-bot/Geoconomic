// Base partagée du Duel sur le site public, avec Supabase (scores, matchs, duels du jour, classement).
// Imite la petite API « db » de claude.ai utilisée par le prototype (collection().doc().get/set/update,
// where().orderBy().limit().get/onSnapshot) et son « user » (id, profiles), pour que jeu-quiz.html
// marche pareil des deux côtés. Table et règles d'accès : contenu/supabase.sql.
// Chaque appareil est un joueur anonyme de Supabase ; son nom dans le classement est un pseudo choisi dans la page.
(function () {
  // Adresse du projet et clé publique (anon / publishable) : faites pour être publiques, les règles d'accès
  // de contenu/supabase.sql protègent les données. Jamais la clé « service_role » ni « secret » ici.
  const CFG = { url: "https://xnwaiyhquydhpcqnovtc.supabase.co", key: "sb_publishable_paIqtOPDAYGDFnq7DTFQyA_VpZKx33t" };
  const SDK = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.49.4/+esm";
  const PSEUDO_KEY = "geoco.duel.pseudo";
  // Le pseudo ne se change qu'une fois toutes les 3 semaines (demande de l'auteur) ; le premier choix est libre.
  const PSEUDO_AT_KEY = "geoco.duel.pseudo.at";
  const PSEUDO_EVERY = 21 * 24 * 3600 * 1000;
  const TABLE = "docs";

  const pseudo = {
    get() { try { return (localStorage.getItem(PSEUDO_KEY) || "").trim(); } catch (e) { return ""; } },
    // Date à partir de laquelle on peut le changer à nouveau (0 = tout de suite).
    nextChange() { let at = 0; try { at = Number(localStorage.getItem(PSEUDO_AT_KEY)) || 0; } catch (e) {} return this.get() && at ? at + PSEUDO_EVERY : 0; },
    set(v) {
      v = String(v || "").replace(/\s+/g, " ").trim().slice(0, 20);
      if (!v || v === this.get() || this.nextChange() > Date.now()) return this.get();
      try { localStorage.setItem(PSEUDO_KEY, v); localStorage.setItem(PSEUDO_AT_KEY, String(Date.now())); } catch (e) {}
      return v;
    },
  };

  const snapOf = (rows) => ({ docs: rows.map((r) => ({ id: r.id, exists: true, data: () => r.data })), empty: !rows.length });

  function adapter(sb, uid) {
    const docRef = (coll, id) => ({
      id,
      async get() {
        const { data, error } = await sb.from(TABLE).select("id,data").eq("collection", coll).eq("id", id).maybeSingle();
        if (error) throw error;
        return { id, exists: !!data, data: () => (data ? data.data : undefined) };
      },
      async set(obj) {
        const { error } = await sb.from(TABLE).upsert({ collection: coll, id, data: obj, updated_at: new Date().toISOString() }, { onConflict: "collection,id" });
        if (error) throw error;
      },
      async update(patch) {
        // Fermer un match « ouvert » d'un autre joueur : seule exception permise, par une fonction dédiée.
        const keys = Object.keys(patch || {});
        if (keys.length === 1 && keys[0] === "open" && patch.open === false && (coll === "matchs" || coll === "qduels")) {
          const { error } = await sb.rpc("fermer_ouvert", { coll, doc_id: id });
          if (error) throw error;
          return;
        }
        const cur = await this.get();
        await this.set(Object.assign({}, cur.exists ? cur.data() : {}, patch));
      },
    });

    function query(coll, wh, ord, lim) {
      const run = async () => {
        let q = sb.from(TABLE).select("id,data").eq("collection", coll);
        wh.forEach(([f, v]) => { q = q.eq(`data->>${f}`, String(v)); });
        if (ord) q = q.order(`data->${ord[0]}`, { ascending: ord[1] !== "desc", nullsFirst: false });
        q = q.limit(lim || 1000);
        const { data, error } = await q;
        if (error) throw error;
        return snapOf(data || []);
      };
      return {
        where: (f, op, v) => query(coll, wh.concat([[f, v]]), ord, lim),
        orderBy: (f, dir) => query(coll, wh, [f, dir], lim),
        limit: (n) => query(coll, wh, ord, n),
        get: run,
        // Mises à jour en direct : chaque changement de la collection relance la requête ;
        // une relance toutes les 20 s couvre une connexion temps réel coupée.
        onSnapshot(cb, onErr) {
          let alive = true, timer = null;
          const refresh = () => { if (!alive) return; clearTimeout(timer); timer = setTimeout(() => run().then((s) => alive && cb(s), (e) => onErr && onErr(e)), 250); };
          run().then((s) => alive && cb(s), (e) => onErr && onErr(e));
          const ch = sb.channel(`docs-${coll}-${Math.random().toString(36).slice(2)}`)
            .on("postgres_changes", { event: "*", schema: "public", table: TABLE, filter: `collection=eq.${coll}` }, refresh)
            .subscribe();
          const poll = setInterval(() => { if (!document.hidden) refresh(); }, 20000);
          return () => { alive = false; clearTimeout(timer); clearInterval(poll); sb.removeChannel(ch); };
        },
      };
    }

    const db = { collection: (coll) => Object.assign(query(coll, [], null, 0), { doc: (id) => docRef(coll, id) }) };
    const user = {
      id: async () => uid,
      // Les noms viennent du pseudo enregistré dans la fiche « joueurs » de chacun.
      async profiles(ids) {
        const out = {};
        if (!ids.length) return out;
        const { data } = await sb.from(TABLE).select("id,data").eq("collection", "joueurs").in("id", ids);
        (data || []).forEach((r) => { out[r.id] = { name: (r.data && r.data.name) || "" }; });
        return out;
      },
    };
    return { db, user };
  }

  let ready = null;
  window.GeocoDuelDB = {
    configured: !!(CFG.url && CFG.key),
    pseudo,
    // Connexion (une fois) : session anonyme gardée sur l'appareil, créée au premier passage.
    connect() {
      if (!this.configured) return Promise.resolve(null);
      if (ready) return ready;
      ready = import(SDK).then(async ({ createClient }) => {
        const sb = createClient(CFG.url, CFG.key, { auth: { persistSession: true, autoRefreshToken: true, storageKey: "geoco.duel.auth" } });
        let { data: { session } } = await sb.auth.getSession();
        if (!session) {
          const r = await sb.auth.signInAnonymously();
          if (r.error) throw r.error;
          session = r.data.session;
        }
        return adapter(sb, session.user.id);
      }).catch((e) => { console.warn("Duel : connexion à Supabase impossible", e); return null; });
      return ready;
    },
  };
})();
