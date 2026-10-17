// Données des « Quiz du monde » de Geonomix Duel, écrites dans prototypes/jeu-quiz.html
// (bloc <script type="application/json" id="quiz-data">) : contours des pays pour le globe,
// noms en français, inflation et croissance de l'onglet Chiffres, pays des dernières actus.
// Usage : node tools/build-quiz-data.mjs (puis node tools/build-duel.mjs pour la page de l'appli).
import fs from "fs";

global.window = {};
await import("../data/countries.js");
await import("../data/indicators.js");
await import("../data/news.js");
await import("../data/iso2.js");
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

// Les 193 pays de l'ONU, plus le Vatican et la Palestine (observateurs), par continent.
const WORLD = {
  "Afrique": "DZ AO BJ BW BF BI CV CM CF TD KM CG CD CI DJ EG GQ ER SZ ET GA GM GH GN GW KE LS LR LY MG MW ML MR MU MA MZ NA NE NG RW ST SN SC SL SO ZA SS SD TZ TG TN UG ZM ZW",
  "Europe": "AL AD AT BY BE BA BG HR CY CZ DK EE FI FR DE GR HU IS IE IT LV LI LT LU MT MD MC ME NL MK NO PL PT RO RU SM RS SK SI ES SE CH UA GB VA",
  "Asie": "AF AM AZ BH BD BT BN KH CN GE IN ID IR IQ IL JP JO KZ KW KG LA LB MY MV MN MM NP KP OM PK PS PH QA SA SG KR LK SY TJ TH TL TR TM AE UZ VN YE",
  "Amériques": "AG AR BS BB BZ BO BR CA CL CO CR CU DM DO EC SV GD GT GY HT HN JM MX NI PA PY PE KN LC VC SR TT US UY VE",
  "Océanie": "AU FJ KI MH FM NR NZ PW PG WS SB TO TV VU",
};
const NUM = Object.fromEntries(Object.entries(window.GEOCO_ISO2).map(([n, a]) => [a, pad(n)]));
NUM.PS = NUM.PS || "275"; NUM.VA = NUM.VA || "336";
const FR = new Intl.DisplayNames(["fr"], { type: "region" });
const NICE = { VA: "Vatican", PS: "Palestine", FM: "Micronésie", MH: "Îles Marshall", SB: "Îles Salomon", ST: "Sao Tomé-et-Principe", CV: "Cap-Vert", TL: "Timor oriental", MK: "Macédoine du Nord", MD: "Moldavie", BA: "Bosnie-Herzégovine", KN: "Saint-Kitts-et-Nevis", VC: "Saint-Vincent-et-les-Grenadines", LC: "Sainte-Lucie", AG: "Antigua-et-Barbuda", TT: "Trinité-et-Tobago", CD: "RD Congo", CG: "Congo", CF: "Centrafrique", CZ: "Tchéquie", KP: "Corée du Nord", KR: "Corée du Sud", LA: "Laos", SY: "Syrie", RU: "Russie", IR: "Iran", BO: "Bolivie", VE: "Venezuela", TZ: "Tanzanie", VN: "Vietnam", BN: "Brunei", MM: "Birmanie", SZ: "Eswatini", GB: "Royaume-Uni", US: "États-Unis" };
const ALIAS = { BA: ["bosnie"], CV: ["cap vert"], ST: ["sao tome", "sao tome et principe"], TL: ["timor oriental", "timor leste", "timor"], MK: ["macedoine", "macedoine du nord"], MD: ["moldavie", "moldova"], VA: ["vatican", "saint siege", "cite du vatican"], PS: ["palestine", "etat de palestine"], KN: ["saint kitts", "saint kitts et nevis", "saint christophe et nieves"], VC: ["saint vincent", "saint vincent et les grenadines"], LC: ["sainte lucie"], AG: ["antigua", "antigua et barbuda"], TT: ["trinite et tobago", "trinidad", "trinite"], DO: ["republique dominicaine"], DM: ["dominique"], FM: ["micronesie"], MH: ["iles marshall", "marshall"], SB: ["iles salomon", "salomon"], PG: ["papouasie", "papouasie nouvelle guinee"], GW: ["guinee bissau"], PW: ["palaos", "palau"], WS: ["samoa"], KM: ["comores"], SC: ["seychelles"], MV: ["maldives"], BS: ["bahamas"], CI: ["cote d ivoire"], GB: ["royaume uni", "uk", "angleterre", "grande bretagne"], NZ: ["nouvelle zelande"], ZA: ["afrique du sud"], SA: ["arabie saoudite", "arabie"], AE: ["emirats arabes unis", "emirats", "eau"], US: ["etats unis", "usa", "us", "amerique"], CD: ["rdc", "rd congo", "congo kinshasa", "republique democratique du congo"], CG: ["congo", "congo brazzaville", "republique du congo"], KP: ["coree du nord"], KR: ["coree du sud"], MM: ["birmanie", "myanmar"], SZ: ["eswatini", "swaziland"], CZ: ["tchequie", "republique tcheque"], CF: ["centrafrique", "rca", "republique centrafricaine"], NL: ["pays bas", "hollande"], BY: ["bielorussie", "belarus"], KG: ["kirghizistan", "kirghizie"], SV: ["salvador", "el salvador"], GQ: ["guinee equatoriale"], SS: ["soudan du sud"], LR: ["liberia"] };
const world = [], alias = {};
for (const [cont, list] of Object.entries(WORLD)) for (const a2 of list.split(" ")) {
  const id = NUM[a2];
  if (!id) throw new Error("Code inconnu : " + a2);
  world.push([id, cont]);
  if (NICE[a2]) names[id] = NICE[a2]; else if (!names[id]) names[id] = FR.of(a2);
  if (ALIAS[a2]) alias[id] = ALIAS[a2];
}
if (world.length !== 195) throw new Error("Liste des pays : " + world.length + " au lieu de 195");

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

const data = JSON.stringify({ updated: I.updated, names, alias, world, geo, ind, news });
const file = "prototypes/jeu-quiz.html";
const html = fs.readFileSync(file, "utf8");
const re = /(<script type="application\/json" id="quiz-data">)[\s\S]*?(<\/script>)/;
if (!re.test(html)) throw new Error("Bloc quiz-data introuvable dans " + file);
fs.writeFileSync(file, html.replace(re, (_, a, b) => a + data.replace(/</g, "\\u003c") + b));
console.log(`quiz-data : ${geo.length} pays, ${news.length} actus, ${Math.round(data.length / 1024)} Ko.`);
