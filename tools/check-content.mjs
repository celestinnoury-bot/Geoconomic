// Vérifie la cohérence du contenu avant chaque publication.
// Usage : node tools/check-content.mjs   (code de sortie 1 s'il y a une erreur)
import fs from "fs";
import vm from "vm";

const ctx = { window: {} };
vm.createContext(ctx);
for (const f of ["data/content.js", "data/news.js", "data/culture.js", "data/indicators.js"]) {
  vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
}
const { dossiers, glossary, news, culture, indicators } = ctx.window.GEOCO;

const errors = [];
const warn = [];
const err = (where, msg) => errors.push(`${where} : ${msg}`);

const dossierIds = new Set(dossiers.map((d) => d.id));
const cultureIds = new Set(culture.map((c) => c.id));
const glossaryIds = new Set(glossary.map((g) => g.id));
const REGIONS = new Set(["Europe", "Amériques", "Moyen-Orient", "Afrique", "Asie"]);
const THEMES = new Set(["eco", "geo", "mix"]);

// Les [n] du texte doivent pointer vers une source existante.
function checkCites(where, text, sources) {
  for (const m of String(text).matchAll(/\[(\d+)\]/g)) {
    if (!sources || !sources[Number(m[1]) - 1]) err(where, `citation ${m[0]} sans source correspondante`);
  }
}
function checkSources(where, sources) {
  if (!Array.isArray(sources) || !sources.length) return err(where, "aucune source");
  sources.forEach((s, i) => {
    if (!s.name || !s.url) err(where, `source ${i + 1} incomplète (name et url obligatoires)`);
    else if (!/^https:\/\//.test(s.url)) err(where, `source ${i + 1} : l'URL doit commencer par https://`);
  });
}

// ---- Actus
const newsIds = new Set();
let prevDate = "9999-99-99";
news.forEach((n, i) => {
  const w = `news[${i}] ${n.id || "?"}`;
  if (!n.id) err(w, "id manquant");
  if (newsIds.has(n.id)) err(w, "id en double");
  newsIds.add(n.id);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(n.date || "")) err(w, "date au format AAAA-MM-JJ obligatoire");
  if (n.date > prevDate) err(w, "les actus doivent être triées de la plus récente à la plus ancienne");
  prevDate = n.date;
  if (!THEMES.has(n.theme)) err(w, `theme invalide « ${n.theme} »`);
  if (n.region && !REGIONS.has(n.region)) err(w, `region invalide « ${n.region} »`);
  if (!n.region) warn.push(`${w} : pas de region (filtre Actu)`);
  for (const k of ["title", "summary", "forMe"]) if (!n[k]) err(w, `${k} manquant`);
  if (!Array.isArray(n.points) || n.points.length < 2) err(w, "au moins 2 points");
  if (!Array.isArray(n.why) || !n.why.length) err(w, "why manquant");
  if (!Array.isArray(n.figures) || !n.figures.length) err(w, "au moins 1 chiffre");
  checkSources(w, n.sources);
  [...(n.points || []), ...(n.why || []), n.summary, n.forMe].forEach((t) => checkCites(w, t, n.sources));
  (n.figures || []).forEach((f) => { if (f.src && !n.sources[f.src - 1]) err(w, `chiffre « ${f.value} » : src ${f.src} inexistante`); });
  (n.dossiers || []).forEach((d) => { if (!dossierIds.has(d)) err(w, `cours inconnu « ${d} »`); });
  (n.culture || []).forEach((c) => { if (!cultureIds.has(c)) err(w, `article inconnu « ${c} »`); });
  (n.geo || []).forEach((g) => {
    const [lng, lat] = g.coords || [];
    if (!g.name || typeof lng !== "number" || typeof lat !== "number" || Math.abs(lng) > 180 || Math.abs(lat) > 90) err(w, `lieu invalide ${JSON.stringify(g)}`);
  });
  if (!n.geo || !n.geo.length) warn.push(`${w} : pas de lieu, n'apparaîtra pas sur le globe`);
});

// ---- Cours
dossiers.forEach((d) => {
  const w = `cours ${d.id}`;
  checkSources(w, d.sources);
  [...d.tldr, ...d.sections.flatMap((s) => s.paragraphs)].forEach((t) => checkCites(w, t, d.sources));
  d.terms.forEach((t) => { if (!glossaryIds.has(t)) err(w, `mot du lexique inconnu « ${t} »`); });
  d.quiz.forEach((q, i) => { if (!(q.answer >= 0 && q.answer < q.options.length)) err(w, `quiz ${i + 1} : réponse hors des choix`); });
});

// ---- Articles
culture.forEach((c) => {
  const w = `article ${c.id}`;
  checkSources(w, c.sources);
  c.sections.flatMap((s) => s.paragraphs).forEach((t) => checkCites(w, t, c.sources));
});

// ---- Indicateurs
(indicators.list || []).forEach((ind) => {
  Object.entries(ind.values).forEach(([iso, d]) => {
    if (!/^\d{3}$/.test(iso)) err(`chiffres ${ind.id}`, `code pays invalide « ${iso} »`);
    if (typeof d.v !== "number" || !d.d) err(`chiffres ${ind.id}`, `valeur invalide pour ${iso}`);
    if (d.s && !ind.sources[d.s - 1]) err(`chiffres ${ind.id}`, `source ${d.s} inexistante pour ${iso}`);
  });
});
(indicators.focus || []).forEach((z) => {
  checkSources(`zoom ${z.id}`, z.sources);
  [z.statement, ...z.text, z.compare && z.compare.text].filter(Boolean).forEach((t) => checkCites(`zoom ${z.id}`, t, z.sources));
});

const today = news.length ? news[0].date : "—";
console.log(`${news.length} actus (dernière date : ${today}, ${news.filter((n) => n.date === today).length} ce jour-là), ${dossiers.length} cours, ${culture.length} articles.`);
warn.forEach((w) => console.log("Attention : " + w));
if (errors.length) {
  errors.forEach((e) => console.error("ERREUR : " + e));
  process.exit(1);
}
console.log("Contenu OK.");
