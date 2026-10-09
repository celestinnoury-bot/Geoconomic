// Extrait les textes à traduire du contenu (actus, cours, lexique…) sous forme { chemin: texte }.
// Usage : node tools/i18n-extract.mjs [--since=AAAA-MM-JJ] > textes.json
// Le chemin repère l'élément par son id (ex. news.2026-10-09-thailande-inflation.points.0),
// pour que la traduction survive aux ajouts et suppressions d'actus.
import fs from "fs";
import vm from "vm";
import path from "path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const ctx = { window: {} };
vm.createContext(ctx);
for (const f of ["content", "news", "culture", "etudes", "focus", "anecdotes", "indicators", "conflits", "couches", "auteur"]) {
  const p = path.join(ROOT, "data", f + ".js");
  if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, "utf8"), ctx);
}
const G = ctx.window.GEOCO;
// culture.kind est un libellé d'interface (traduit avec l'interface), pas du contenu.
// Clés jamais traduites : identifiants, dates, liens, coordonnées, et les sources (titres d'origine).
export const SKIP = new Set(["id", "date", "theme", "region", "url", "coords", "dossiers", "culture", "news", "src", "sources",
  "link", "audio", "file", "fileDark", "photo", "cas", "icon", "color", "iso", "era", "source", "slug", "answer", "correct", "related", "see",
  "kind", "type", "highlight", "terms", "poster", "part",
  // Chiffres et Conflits : valeurs, couleurs et codes pays ne se traduisent pas.
  "s", "v", "d", "bins", "colors", "country", "contact", "names", "values", "freeListens", "price", "podcast", "counts"]);
// Listes d'éléments repérés par leur id.
export const SETS = { news: G.news, dossiers: G.dossiers, glossary: G.glossary, culture: G.culture, anecdotes: G.anecdotes, focus: G.focus, cas: (G.etudes || {}).cas };
// Objets uniques (chemins par clé, puis par position dans les listes).
export const OBJECTS = { indicators: G.indicators, conflits: G.conflits, auteur: G.auteur, offre: (G.etudes || {}).offre };

const since = (process.argv.find((a) => a.startsWith("--since=")) || "").slice(8);
const out = {};
function walk(o, p) {
  if (typeof o === "string") { if (/[A-Za-zÀ-ÿ]/.test(o) && !/\.(paints\.\d+\.0|links\.\d+\.[01])$/.test(p)) out[p] = o; return; }
  if (Array.isArray(o)) return o.forEach((x, i) => walk(x, `${p}.${i}`));
  if (o && typeof o === "object") for (const [k, v] of Object.entries(o)) if (!SKIP.has(k)) walk(v, `${p}.${k}`);
}
for (const [set, list] of Object.entries(SETS)) {
  (list || []).forEach((item) => {
    if (since && set === "news" && item.date < since) return;
    walk(item, `${set}.${item.id}`);
  });
}
for (const [name, obj] of Object.entries(OBJECTS)) if (obj) walk(obj, name);
if (import.meta.url === `file://${process.argv[1]}`) process.stdout.write(JSON.stringify(out, null, 1));
