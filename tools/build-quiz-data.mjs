// Données des « Quiz du monde » de Géoconomic Duel, écrites dans prototypes/jeu-quiz.html
// (bloc <script type="application/json" id="quiz-data">) : contours des pays pour le globe,
// noms en français, inflation et croissance de l'onglet Chiffres, pays des dernières actus.
// Usage : node tools/build-quiz-data.mjs (puis node tools/build-duel.mjs pour la page de l'appli).
import fs from "fs";

global.window = {};
await import("../data/countries.js");
await import("../data/indicators.js");
await import("../data/news.js");
const W = window.GEOCO_COUNTRIES, I = window.GEOCO.indicators, NEWS = window.GEOCO.news;
const pad = (id) => String(id).padStart(3, "0");

// Noms : ceux de l'onglet Chiffres, avec quelques formes plus courantes.
const names = {};
for (const [k, v] of Object.entries(I.names)) names[pad(k)] = v;
Object.assign(names, {
  "408": "Corée du Nord", "410": "Corée du Sud", "203": "Tchéquie", "140": "Centrafrique", "834": "Tanzanie",
  "096": "Brunei", "104": "Birmanie", "659": "Saint-Kitts-et-Nevis", "158": "Taïwan", "732": "Sahara occidental",
  "-99": "Kosovo", "010": "Antarctique", "238": "Malouines", "260": "Terres australes", "540": "Nouvelle-Calédonie",
  "630": "Porto Rico", "275": "Palestine", "304": "Groenland",
});

// Contours arrondis au dixième de degré (assez pour un globe de téléphone).
const r1 = (x) => Math.round(x * 10) / 10;
function ring(rg) {
  const out = [];
  for (const [x, y] of rg) { const p = [r1(x), r1(y)]; const q = out[out.length - 1]; if (!q || q[0] !== p[0] || q[1] !== p[1]) out.push(p); }
  return out.length >= 4 ? out : null;
}
const geo = [];
for (const f of W.features) {
  const polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
  const mp = polys.map((p) => p.map(ring).filter(Boolean)).filter((p) => p.length);
  if (mp.length) geo.push([pad(f.id), mp]);
  if (!names[pad(f.id)]) names[pad(f.id)] = f.properties.name;
}

// Point dans un pays (lancer de rayon), pour retrouver le pays d'une actu à partir de ses coordonnées.
function inRing([x, y], rg) {
  let c = false;
  for (let i = 0, j = rg.length - 1; i < rg.length; j = i++) {
    const [xi, yi] = rg[i], [xj, yj] = rg[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c;
  }
  return c;
}
const countryAt = (pt) => { for (const [id, mp] of geo) for (const p of mp) if (inRing(pt, p[0]) && !p.slice(1).some((h) => inRing(pt, h))) return id; return null; };
const news = [];
const seenIso = new Set();
for (const n of [...NEWS].sort((a, b) => (a.date < b.date ? 1 : -1))) {
  const g = n.geo && n.geo[0];
  if (!g || !g.coords) continue;
  const iso = countryAt(g.coords);
  if (!iso || seenIso.has(iso)) continue;
  seenIso.add(iso);
  news.push({ iso, title: n.title, date: n.date, id: n.id });
  if (news.length >= 40) break;
}

const ind = {};
for (const x of I.list.filter((x) => ["inflation", "croissance"].includes(x.id))) {
  const values = {};
  for (const [k, v] of Object.entries(x.values)) values[pad(k)] = [v.v, v.d];
  const s = x.sources[0];
  ind[x.id] = { title: x.title, unit: x.unit, src: { short: s.short, name: s.name, url: s.url }, values };
}

const data = JSON.stringify({ updated: I.updated, names, geo, ind, news });
const file = "prototypes/jeu-quiz.html";
const html = fs.readFileSync(file, "utf8");
const re = /(<script type="application\/json" id="quiz-data">)[\s\S]*?(<\/script>)/;
if (!re.test(html)) throw new Error("Bloc quiz-data introuvable dans " + file);
fs.writeFileSync(file, html.replace(re, (_, a, b) => a + data.replace(/</g, "\\u003c") + b));
console.log(`quiz-data : ${geo.length} pays, ${news.length} actus, ${Math.round(data.length / 1024)} Ko.`);
