// Illustrations variées pour « La lettre du matin » : une seule carte au plus, et surtout
// des graphiques tirés des chiffres de l'actu, des pictogrammes par thème, des grands chiffres
// et la silhouette du pays. Tout est en SVG ou en CSS : rien à télécharger.
// Chaque fonction reçoit une palette P (couleurs de la page) pour marcher sur fond clair ou sombre.

// Largeur : un nombre en mm, ou une valeur CSS (« 100% »).
const W = (w) => (typeof w === "number" ? `${w}mm` : w);
const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const fold = (s) => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

// « −0,5 % » → { v: -0.5, unit: "%" } ; null si ce n'est pas un nombre simple.
export function parseFig(value) {
  const m = String(value).replace(/ | /g, " ").match(/^([+\-−]?)\s*(\d[\d ]*(?:,\d+)?)\s*(%|€|\$|pts?)?$/);
  if (!m) return null;
  const v = Number(m[2].replace(/ /g, "").replace(",", ".")) * (m[1] === "−" || m[1] === "-" ? -1 : 1);
  return Number.isFinite(v) ? { v, unit: m[3] || "" } : null;
}

// ---------- Thème de l'actu → pictogramme ----------
const TOPICS = [
  ["coins", "Monnaie", /shilling|monnaie|devise|dinar|taux de change|devalu|roupie|naira|cedi|kwacha|\bpeso\b/],
  ["bank", "Taux d'intérêt", /banque centrale|taux directeur|\btaux\b|politique monetaire/],
  ["barrel", "Énergie", /petrole|gazole|carburant|energie|raffin|baril|gaz\b|opep/],
  ["mine", "Matières premières", /mine|cuivre|\bor\b|uranium|cobalt|terres rares|nickel|minerai|\bfer\b/],
  ["shield", "Sécurité", /guerre|conflit|arme|attaque|combat|militaire|gangs?\b|offensive|f-16/],
  ["ship", "Commerce", /exportation|importation|commerce|douane|canal|port\b|navire|libre-echange/],
  ["ballot", "Politique", /election|vote|president|gouvernement|premiere ministre|tour\b|parlement/],
  ["coins", "Finances publiques", /dette|fmi|pret\b|budget|deficit|devalu|fonds/],
  ["bolt", "Électricité", /electricite|coupure|courant\b|generateur/],
  ["chart", "Croissance", /croissance|pib|recession|contract|reprise|ralenti/],
  ["tag", "Prix", /inflation|prix|cherte/],
];
export function topicOf(n) {
  const t = fold(n.title + " " + n.summary);
  // Le titre prime : « Thaïlande : l'inflation grimpe… » → Prix, même si la banque centrale est citée.
  const inTitle = TOPICS.find(([, , re]) => re.test(fold(n.title)));
  return inTitle || TOPICS.find(([, , re]) => re.test(t)) || ["globe", "Monde", null];
}

// Pictogrammes au trait (grille 24 × 24).
const ICONS = {
  bank: '<path d="M3 9.5 12 4l9 5.5"/><path d="M4.5 10v8M9 10v8M15 10v8M19.5 10v8"/><path d="M3 20.5h18"/>',
  barrel: '<path d="M12 3c3 4.5 6 8 6 11.5a6 6 0 0 1-12 0C6 11 9 7.5 12 3z"/><path d="M9.5 15.5a2.6 2.6 0 0 0 2.5 2.4"/>',
  mine: '<path d="M4 20 14 10"/><path d="M10.5 5.5c3.5-1.8 7-1.3 9 .5-1.6 1-3.6 1.3-5.6 1"/><path d="M13 9l2 2"/><path d="M15 20l2.5-4.5L20 20z"/>',
  shield: '<path d="M12 3 5 6v5.5c0 4.3 3 7.8 7 9.5 4-1.7 7-5.2 7-9.5V6z"/><path d="M9 12l2 2 4-4"/>',
  ship: '<path d="M3 15h18l-2.5 5h-13z"/><path d="M6 15V9h12v6"/><path d="M9 9V6h6v3"/><path d="M8.5 12h2M13.5 12h2"/>',
  ballot: '<path d="M4 11h16v9H4z"/><path d="M8 11V4h8v7"/><path d="M10 7.5l1.5 1.5L14 6"/><path d="M8 15h8"/>',
  coins: '<ellipse cx="9" cy="7" rx="5" ry="2.2"/><path d="M4 7v4c0 1.2 2.2 2.2 5 2.2s5-1 5-2.2V7"/><ellipse cx="15" cy="14" rx="5" ry="2.2"/><path d="M10 14v4c0 1.2 2.2 2.2 5 2.2s5-1 5-2.2v-4"/>',
  bolt: '<path d="M13 3 5 13.5h6L10 21l8-10.5h-6z"/>',
  chart: '<path d="M4 20h16"/><path d="M6.5 20v-5M11 20v-8M15.5 20v-6"/><path d="M5 11l5-4 3.5 2.5L19 5"/><path d="M15.5 5H19v3.5"/>',
  tag: '<path d="M3.5 12.5V4h8.5l8.5 8.5-8.5 8.5z"/><circle cx="8" cy="8.5" r="1.6"/><path d="M11 15.5l4-4"/>',
  globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.5 3.5 5.5 3.5 8.5s-1 6-3.5 8.5c-2.5-2.5-3.5-5.5-3.5-8.5s1-6 3.5-8.5z"/>',
};
export function icon(kind, size, color, width = 1.6) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round" style="display:block">${ICONS[kind] || ICONS.globe}</svg>`;
}

// ---------- Silhouette d'un pays (fond Natural Earth, Mercator) ----------
// On retrouve le pays par son nom français (data/indicators.js) → code ISO → nom anglais du fond de carte.
let shapeIndex = null;
function findShape(d, n) {
  if (!d.world || !d.names || !d.iso2) return null;
  if (!shapeIndex) {
    shapeIndex = new Map(d.world.countries.map((c) => [fold(c.n), c]));
    const en = (() => { try { return new Intl.DisplayNames(["en"], { type: "region" }); } catch (e) { return null; } })();
    const ALIAS = { "united states": "united states of america", "democratic republic of the congo": "dem. rep. congo", "congo - kinshasa": "dem. rep. congo",
      "congo - brazzaville": "congo", "czechia": "czech republic", "myanmar (burma)": "myanmar", "cote d'ivoire": "cote d'ivoire", "bosnia & herzegovina": "bosnia and herz.",
      "dominican republic": "dominican rep.", "central african republic": "central african rep.", "south sudan": "s. sudan", "north macedonia": "macedonia",
      "eswatini": "eswatini", "palestinian territories": "palestine", "turkiye": "turkey" };
    shapeIndex.byFr = new Map();
    for (const [num, fr] of Object.entries(d.names)) {
      const a2 = d.iso2[num];
      let name = en && a2 ? fold(en.of(a2)) : "";
      name = ALIAS[name] || name;
      const c = shapeIndex.get(name);
      if (c) shapeIndex.byFr.set(fold(fr), c);
    }
  }
  for (const g of n.geo || []) {
    const c = shapeIndex.byFr.get(fold(g.label)) || shapeIndex.byFr.get(fold(g.name));
    if (c) return c;
  }
  return null;
}
// Boîte englobante du plus grand morceau du pays (on ignore les îles lointaines).
function bboxOf(pathD) {
  const parts = pathD.split("M").filter(Boolean).map((p) => p.split(/L|Z/).filter(Boolean).map((xy) => xy.split(",").map(Number)));
  let best = null, area = -1;
  for (const pts of parts) {
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    pts.forEach(([x, y]) => { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); });
    const a = (x1 - x0) * (y1 - y0);
    if (a > area) { area = a; best = [x0, y0, x1, y1]; }
  }
  return best;
}
export function hasShape(d, n) { return !!findShape(d, n); }
export function silhouette(d, n, wmm, hmm, P) {
  const c = findShape(d, n);
  if (!c) return "";
  const [x0, y0, x1, y1] = bboxOf(c.d);
  const pad = Math.max(x1 - x0, y1 - y0) * 0.12;
  const vb = `${x0 - pad} ${y0 - pad} ${x1 - x0 + 2 * pad} ${y1 - y0 + 2 * pad}`;
  const sw = Math.max(x1 - x0, y1 - y0) / 140;
  return `<svg width="${wmm}mm" height="${hmm}mm" viewBox="${vb}" preserveAspectRatio="xMidYMid meet" style="display:block"><path d="${c.d}" fill="${P.shape}" stroke="${P.shapeStroke || "none"}" stroke-width="${sw}"/></svg>`;
}

// ---------- Les blocs illustrés ----------
// Grand chiffre sur aplat de couleur.
export function figBlock(fig, wmm, hmm, P, color) {
  return `<div style="width:${W(wmm)};height:${hmm}mm;background:${color};color:${P.onColor};border-radius:${P.radius}px;padding:3mm 3.5mm;display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden">
    <div style="font:${P.bigFont};font-size:${Math.min(30, hmm * 1.05)}pt;line-height:1;letter-spacing:-.02em;white-space:nowrap">${esc(fig.value)}</div>
    <div style="font:500 7pt/1.3 ${P.sans};margin-top:1.5mm;opacity:.92;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${esc(fig.label)}</div></div>`;
}
// Barres comparant les chiffres de l'actu (mêmes unités).
export function canBars(n) {
  const f = (n.figures || []).map((x) => ({ x, p: parseFig(x.value) })).filter((o) => o.p);
  return f.length >= 2 && f.every((o) => o.p.unit === f[0].p.unit) ? f.slice(0, 3) : null;
}
const short = (s, k = 46) => { s = String(s).replace(/\s*\(.*?\)\s*/g, " ").trim(); return s.length > k ? s.slice(0, k - 1).replace(/\s+\S*$/, "") + "…" : s; };
export function bars(n, wmm, hmm, P) {
  let f = canBars(n);
  if (!f) return "";
  if (hmm < 30) f = f.slice(0, 2); // petit cadre : deux barres au plus
  const max = Math.max(...f.map((o) => Math.abs(o.p.v)), 0.001);
  return `<div style="width:${W(wmm)};height:${hmm}mm;display:flex;flex-direction:column;justify-content:center;gap:2.2mm;padding:2.5mm 3mm;background:${P.panel};border-radius:${P.radius}px;overflow:hidden">
    ${f.map((o, i) => `<div>
      <div style="display:flex;align-items:center;gap:2mm">
        <div style="height:4.2mm;width:${Math.max(4, (Math.abs(o.p.v) / max) * 72)}%;background:${o.p.v < 0 ? P.neg : P.bar[i % P.bar.length]};border-radius:${P.radius ? 3 : 0}px"></div>
        <b style="font:700 9.5pt ${P.sans};white-space:nowrap;color:${P.ink}">${esc(o.x.value)}</b>
      </div>
      <div style="font:400 7pt/1.25 ${P.sans};color:${P.muted};margin-top:.7mm;display:-webkit-box;-webkit-line-clamp:${f.length > 2 || hmm < 30 ? 1 : 2};-webkit-box-orient:vertical;overflow:hidden">${esc(short(o.x.label, 90))}</div>
    </div>`).join("")}</div>`;
}
// Pictogramme du thème, avec le thème et le lieu.
export function picto(n, wmm, hmm, P, color) {
  const [kind, label] = topicOf(n);
  const place = (n.geo && n.geo[0] && (n.geo[0].label || n.geo[0].name)) || "";
  const s = Math.min(hmm * 0.62, 16);
  return `<div style="width:${W(wmm)};height:${hmm}mm;display:flex;align-items:center;gap:3.5mm;padding:0 3.5mm;background:${P.panel};border-radius:${P.radius}px;overflow:hidden">
    <div style="flex:none;width:${s}mm;height:${s}mm;border-radius:50%;background:${color};display:flex;align-items:center;justify-content:center">${icon(kind, `${s * 0.58}mm`, P.onColor, 1.7)}</div>
    <div style="min-width:0"><div style="font:700 6.8pt ${P.sans};letter-spacing:.08em;text-transform:uppercase;color:${color}">${esc(label)}</div>
    <div style="font:${P.placeFont};color:${P.ink};margin-top:.6mm;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(place)}</div></div></div>`;
}
// Silhouette du pays sur un panneau, avec son nom.
export function shapeBlock(d, n, wmm, hmm, P) {
  const place = (n.geo && n.geo[0] && (n.geo[0].label || n.geo[0].name)) || "";
  return `<div style="width:${W(wmm)};height:${hmm}mm;display:flex;align-items:center;gap:3mm;padding:1.5mm 3.5mm;background:${P.panel};border-radius:${P.radius}px;overflow:hidden">
    ${silhouette(d, n, hmm * 0.95, hmm - 3, P)}
    <div style="min-width:0"><div style="font:700 6.8pt ${P.sans};letter-spacing:.08em;text-transform:uppercase;color:${P.muted}">${esc(n.region || "")}</div>
    <div style="font:${P.placeFont};color:${P.ink};margin-top:.6mm">${esc(place)}</div></div></div>`;
}

// Choisit une illustration différente pour chaque actu : pas deux fois de suite la même,
// et au plus deux silhouettes et deux grands chiffres par lettre.
export function planIllustrations(d, items) {
  const LIMIT = { shape: 2, fig: 2, bars: 3, picto: 3 };
  const used = {};
  let last = null;
  return items.map((n, i) => {
    const ok = {
      bars: !!canBars(n),
      shape: hasShape(d, n),
      fig: !!(n.figures && n.figures[0]),
      picto: true,
    };
    const order = ["bars", "picto", "shape", "fig"];
    const rot = order.slice(i % 4).concat(order.slice(0, i % 4));
    const pick = rot.find((k) => ok[k] && k !== last && (used[k] || 0) < LIMIT[k]) || rot.find((k) => ok[k] && k !== last) || "picto";
    used[pick] = (used[pick] || 0) + 1;
    last = pick;
    return pick;
  });
}
export function illustration(kind, d, n, wmm, hmm, P, i) {
  const color = P.accents[i % P.accents.length];
  if (kind === "bars") return bars(n, wmm, hmm, P);
  if (kind === "shape") return shapeBlock(d, n, wmm, hmm, P);
  if (kind === "fig") return figBlock(n.figures[0], wmm, hmm, P, color);
  return picto(n, wmm, hmm, P, color);
}

// Petite barre empilée : combien d'actus par région aujourd'hui.
export function regionStrip(items, wmm, P) {
  const counts = {};
  items.forEach((n) => { counts[n.region || "Monde"] = (counts[n.region || "Monde"] || 0) + 1; });
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const total = items.length;
  return `<div style="width:${W(wmm)}">
    <div style="display:flex;height:4mm;border-radius:${P.radius ? 4 : 0}px;overflow:hidden">${entries.map(([r, k], i) => `<div style="width:${(k / total) * 100}%;background:${P.accents[i % P.accents.length]}"></div>`).join("")}</div>
    <div style="display:flex;flex-wrap:wrap;gap:1mm 3mm;margin-top:1.8mm;font:400 7pt ${P.sans};color:${P.muted}">${entries.map(([r, k], i) => `<span style="white-space:nowrap"><i style="display:inline-block;width:2.2mm;height:2.2mm;border-radius:50%;background:${P.accents[i % P.accents.length]};margin-right:1mm;vertical-align:-.2mm"></i>${esc(r)} ${k}</span>`).join("")}</div></div>`;
}

// Sources sans doublon (« Rio Times, Rio Times (ouverture) » → « Rio Times »).
export function sourcesOf(n) {
  const seen = new Set();
  return (n.sources || []).map((s) => (s.short || s.name).replace(/\s*\(.*?\)\s*$/, "").trim()).filter((s) => !seen.has(s) && seen.add(s)).join(", ");
}
