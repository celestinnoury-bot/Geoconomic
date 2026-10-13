// Mises en page de « La lettre du matin ». Chaque style reçoit les mêmes données (d)
// et renvoie une page HTML A4 ; tools/build-lettre.mjs la transforme en PDF.
// Polices libres (licence OFL) dans assets/fonts : Inter, Source Serif 4, Playfair Display, Libre Franklin.

const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const FONTS = `
@font-face { font-family: "Inter"; font-weight: 400; src: url(assets/fonts/inter-latin-400-normal.woff2); }
@font-face { font-family: "Inter"; font-weight: 600; src: url(assets/fonts/inter-latin-600-normal.woff2); }
@font-face { font-family: "Inter"; font-weight: 700; src: url(assets/fonts/inter-latin-700-normal.woff2); }
@font-face { font-family: "Inter"; font-weight: 800; src: url(assets/fonts/inter-latin-800-normal.woff2); }
@font-face { font-family: "Serif4"; font-weight: 400; src: url(assets/fonts/source-serif-4-latin-400-normal.woff2); }
@font-face { font-family: "Serif4"; font-weight: 400; font-style: italic; src: url(assets/fonts/source-serif-4-latin-400-italic.woff2); }
@font-face { font-family: "Serif4"; font-weight: 600; src: url(assets/fonts/source-serif-4-latin-600-normal.woff2); }
@font-face { font-family: "Serif4"; font-weight: 600; font-style: italic; src: url(assets/fonts/source-serif-4-latin-600-italic.woff2); }
@font-face { font-family: "Serif4"; font-weight: 700; src: url(assets/fonts/source-serif-4-latin-700-normal.woff2); }
@font-face { font-family: "Serif4"; font-weight: 700; font-style: italic; src: url(assets/fonts/source-serif-4-latin-700-italic.woff2); }
@font-face { font-family: "Playfair"; font-weight: 700; src: url(assets/fonts/playfair-display-latin-700-normal.woff2); }
@font-face { font-family: "Playfair"; font-weight: 700; font-style: italic; src: url(assets/fonts/playfair-display-latin-700-italic.woff2); }
@font-face { font-family: "Playfair"; font-weight: 900; src: url(assets/fonts/playfair-display-latin-900-normal.woff2); }
@font-face { font-family: "Playfair"; font-weight: 900; font-style: italic; src: url(assets/fonts/playfair-display-latin-900-italic.woff2); }
@font-face { font-family: "Franklin"; font-weight: 400; src: url(assets/fonts/libre-franklin-latin-400-normal.woff2); }
@font-face { font-family: "Franklin"; font-weight: 600; src: url(assets/fonts/libre-franklin-latin-600-normal.woff2); }
@font-face { font-family: "Franklin"; font-weight: 700; src: url(assets/fonts/libre-franklin-latin-700-normal.woff2); }
@font-face { font-family: "Franklin"; font-weight: 800; src: url(assets/fonts/libre-franklin-latin-800-normal.woff2); }
@page { size: A4; margin: 0; }
* { box-sizing: border-box; }
html, body { margin: 0; }
body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.page { width: 210mm; min-height: 297mm; display: flex; flex-direction: column; }
`;

import { parseFig, topicOf, icon, hasShape, silhouette, figBlock, canBars, bars, picto, planIllustrations, illustration, regionStrip, sourcesOf,
  pressChart, pressNumber, pressShape, planPress, pressIllustration, dateline, figuresPanel, shapePlan } from "./lettre-illus.mjs";

const doc = (css, body) => `<!doctype html><html lang="fr"><head><meta charset="utf-8"><style>${FONTS}${css}</style></head><body>${body}</body></html>`;
const srcList = (n) => esc((n.sources || []).map((s) => s.short || s.name).join(", "));
const kicker = (d, n) => `${esc(d.THEMES[n.theme] || "")}${n.region ? " · " + esc(n.region) : ""}`;

// ---------- Illustrations ----------
const MM = 3.7795; // pixels par millimètre (96 dpi)
const coordsOf = (n) => (n.geo && n.geo[0] && n.geo[0].coords) || [10, 30];
const placeOf = (n) => (n.geo && n.geo[0] && (n.geo[0].label || n.geo[0].name)) || "";
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

// Image satellite (NASA Blue Marble) recadrée sur le lieu de l'actu, avec un repère.
// span : nombre de degrés de longitude visibles (plus petit = plus zoomé).
function sat(n, wmm, hmm, { span = 40, radius = 0, pin = true, num = null, pinColor = "#ff5a3c", cls = "" } = {}) {
  const [lon, lat] = coordsOf(n);
  const W = wmm * MM, H = hmm * MM;
  const Wi = Math.max(W * 360 / span, H * 2 * 1.02), Hi = Wi / 2;
  const fx = (lon + 180) / 360, fy = (90 - lat) / 180;
  const bx = clamp(W / 2 - fx * Wi, W - Wi, 0), by = clamp(H / 2 - fy * Hi, H - Hi, 0);
  const px = fx * Wi + bx, py = fy * Hi + by;
  const marker = pin ? `<span style="position:absolute;left:${px}px;top:${py}px;width:9px;height:9px;margin:-4.5px 0 0 -4.5px;border-radius:50%;background:${pinColor};box-shadow:0 0 0 3px rgba(255,255,255,.85),0 0 12px 4px ${pinColor}"></span>` : "";
  const badge = num != null ? `<span style="position:absolute;left:2mm;top:2mm;min-width:5.5mm;height:5.5mm;padding:0 1.2mm;border-radius:3mm;background:rgba(0,0,0,.65);color:#fff;font:700 7.5pt Inter,sans-serif;display:flex;align-items:center;justify-content:center">${num}</span>` : "";
  return `<div class="sat ${cls}" style="position:relative;overflow:hidden;width:${wmm}mm;height:${hmm}mm;border-radius:${radius}px;background:#0b1a2e url(assets/earth/earth-blue-marble.jpg) no-repeat;background-size:${Wi}px ${Hi}px;background-position:${bx}px ${by}px">${marker}${badge}</div>`;
}

// Carte du monde (Natural Earth, Mercator) avec un point numéroté par actu.
function worldMap(d, wmm, { land = "#d9d4c7", bg = "transparent", dot = "#c8402a", text = "#fff", stroke = "none", glow = false } = {}) {
  const Wd = d.world.w, k = Wd / (2 * Math.PI);
  const proj = ([lon, lat]) => [Wd / 2 + k * lon * Math.PI / 180, Wd / 2 - k * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))];
  const top = proj([0, 76])[1], bottom = proj([0, -56])[1];
  const vb = `0 ${top} ${Wd} ${bottom - top}`;
  const hmm = wmm * (bottom - top) / Wd;
  const path = d.world.countries.map((c) => c.d).join("");
  const r = Wd * 0.011;
  const dots = d.items.map((n, i) => {
    const [x, y] = proj(coordsOf(n));
    return `${glow ? `<circle cx="${x}" cy="${y}" r="${r * 2.2}" fill="${dot}" opacity=".25"/>` : ""}<circle cx="${x}" cy="${y}" r="${r}" fill="${dot}" stroke="#fff" stroke-width="${r * 0.18}"/><text x="${x}" y="${y + r * 0.42}" text-anchor="middle" font-family="Inter, sans-serif" font-weight="700" font-size="${r * 1.15}" fill="${text}">${i + 1}</text>`;
  }).join("");
  return `<svg width="${wmm}mm" height="${hmm}mm" viewBox="${vb}" style="display:block;background:${bg}"><path d="${path}" fill="${land}" stroke="${stroke}" stroke-width="1"/>${dots}</svg>`;
}

// ---------------------------------------------------------------------------
// Illustrations partagées par le Journal et sa version sombre (voir lettre-illus.mjs).
// Panneau de l'actu principale : silhouette du pays (ou pictogramme) + ses chiffres.
function leadPanel(d, n, wmm, hmm, P) {
  const left = hasShape(d, n) ? `<div style="flex:none;width:${wmm * 0.36}mm;height:${hmm}mm;background:${P.panel};border-radius:${P.radius}px;display:flex;align-items:center;justify-content:center">${silhouette(d, n, wmm * 0.3, hmm - 8, P)}</div>`
    : `<div style="flex:none;width:${wmm * 0.36}mm;height:${hmm}mm;background:${P.accents[0]};border-radius:${P.radius}px;display:flex;align-items:center;justify-content:center">${icon(topicOf(n)[0], `${hmm * 0.45}mm`, P.onColor, 1.4)}</div>`;
  const right = canBars(n) ? bars(n, "100%", hmm, P) : n.figures && n.figures[0] ? figBlock(n.figures[0], "100%", hmm, P, P.accents[1]) : picto(n, "100%", hmm, P, P.accents[1]);
  return `<div style="display:flex;gap:3mm;width:100%"><div style="flex:none">${left}</div><div style="flex:1;min-width:0">${right}</div></div>`;
}
// Le chiffre du jour : le plus frappant des autres actus (un signe + ou −, sinon le plus grand).
function dayFigure(d) {
  const all = d.items.slice(1).flatMap((n) => (n.figures || []).map((f) => ({ f, n, p: parseFig(f.value) })));
  const signed = all.find((o) => /^[+\-−]/.test(String(o.f.value).trim()));
  const best = signed || all.filter((o) => o.p).sort((a, b) => Math.abs(b.p.v) - Math.abs(a.p.v))[0] || all[0];
  if (!best) return d.fig ? { value: d.fig.value, label: d.fig.label, src: d.figSrc && d.figSrc.short } : null;
  const s = best.f.src && best.n.sources[best.f.src - 1];
  return { value: best.f.value, label: best.f.label, src: s && (s.short || s.name), place: (best.n.geo && best.n.geo[0] && (best.n.geo[0].label || best.n.geo[0].name)) || "" };
}
// Renvoi vers le cours de l'appli qui explique le mécanisme (taux, douane, détroits…).
const COURSE_SHORT = { "inflation-taux": "Inflation et taux d'intérêt", "droits-de-douane": "Droits de douane", "routes-maritimes": "Les détroits stratégiques",
  "semi-conducteurs": "Les puces électroniques", sanctions: "Les sanctions économiques", dollar: "La domination du dollar" };
const RATE_RE = /taux directeur|banque centrale|inflation/i;
function courseOf(n) {
  const ids = (n.dossiers || []).slice();
  if (RATE_RE.test(n.title + " " + n.summary) && !ids.includes("inflation-taux")) ids.unshift("inflation-taux");
  const id = RATE_RE.test(n.title) ? "inflation-taux" : ids[0];
  return id && COURSE_SHORT[id] ? COURSE_SHORT[id] : "";
}
const courseLine = (n, color) => courseOf(n) ? `<div style="font:600 6.8pt 'Franklin','Inter',sans-serif;color:${color};margin-top:1.2mm">→ Pour comprendre : le cours « ${esc(courseOf(n))} » dans l'appli</div>` : "";

// Les derniers chiffres, sans répéter ce que dit déjà le point conflits.
const latestRows = (d) => d.latest.filter((x) => !(d.C && /crisiswatch/i.test(x.source.short || ""))).slice(0, 5);
// « Et toi, dans tout ça ? » : la première phrase de ce que l'actu change pour le lecteur.
// (deux phrases si la première est trop courte pour dire quelque chose).
const firstWhy = (d, n) => {
  const parts = d.strip(n.forMe || (n.why || [])[0] || "").split(/(?<=[.!?])\s/);
  return parts[0] && parts[0].length < 70 && parts[1] ? parts[0] + " " + parts[1] : parts[0] || "";
};

// ---------------------------------------------------------------------------
// 1. Le Journal : une de quotidien sur papier journal. Texte justifié, lettrine, lieux en tête
// d'article, petits graphiques de presse ; certaines brèves sans image, comme dans un vrai journal.
function journal(d) {
  const [lead, ...rest] = d.items;
  const P = { ink: "#161412", muted: "#6f685d", rule: "#cfc4ae", shape: "#2a2622", barInk: "#2b2723", neg: "#a3402a", panel: "#ebe4d4",
    accents: ["#b5452c", "#2f6670"], bar: ["#b5452c", "#2f6670", "#c79a3a"], regionColors: ["#b5452c", "#2f6670", "#c79a3a", "#4f5a8a", "#6b7d4f"],
    sans: "'Franklin', sans-serif", serif: "'Serif4', serif" };
  const shapes = shapePlan(d, rest);
  const c = rest.length <= 4 ? Math.max(1, rest.length) : 3;
  const df = dayFigure(d);
  const pts = (lead.points || []).slice(0, 2).map((t) => esc(d.strip(t)));
  const leadArt = figuresPanel(d, lead, P, { shape: true, big: true });
  const an = d.anecdote;
  const seenCourse = new Set();
  const read = (n) => { const k = courseOf(n); if (!k || seenCourse.has(k)) return ""; seenCourse.add(k); return `<div class="also">Pour comprendre, le cours « ${esc(k)} » dans l'application.</div>`; };
  return doc(`
html, body { background: #f7f3ea; } body { color: ${P.ink}; font-family: "Serif4", serif; }
.page { padding: 10mm 12mm 9mm; background: #f7f3ea; }
.top { display: flex; justify-content: space-between; font: 600 7.5pt "Franklin", sans-serif; letter-spacing: .06em; text-transform: uppercase; color: #3d3831; }
.mast { text-align: center; font: 900 50pt/1 "Playfair", serif; letter-spacing: -.01em; margin: 3mm 0 1.5mm; }
.tag { text-align: center; font: italic 400 10pt "Serif4", serif; color: #4a443b; }
.rule2 { border-top: 2.5px solid ${P.ink}; border-bottom: .6px solid ${P.ink}; height: 3px; margin: 3mm 0 1.6mm; }
.bar { display: flex; justify-content: space-between; font: 600 7.5pt "Franklin", sans-serif; color: #3d3831; padding-bottom: 1.6mm; border-bottom: .6px solid ${P.ink}; }
.leadrow { display: grid; grid-template-columns: 128mm 1fr; margin-top: 4mm; border-bottom: .6px solid ${P.ink}; padding-bottom: 4mm; }
.lead { padding-right: 5mm; border-right: .6px solid ${P.rule}; }
.k { font: 700 7pt "Franklin", sans-serif; letter-spacing: .09em; text-transform: uppercase; color: #a3402a; }
.k.gray { color: ${P.muted}; }
.lead h1 { font: 700 27pt/1.06 "Serif4", serif; margin: 1.5mm 0 2mm; letter-spacing: -.01em; }
.deck { font: italic 400 12pt/1.4 "Serif4", serif; color: #3b362f; margin: 0 0 3mm; }
.body { column-count: 2; column-gap: 5mm; column-rule: .5px solid ${P.rule}; font-size: 9.6pt; line-height: 1.45; text-align: justify; hyphens: auto; }
.body p { margin: 0 0 1.6mm; }
.dl { font: 700 7.6pt "Franklin", sans-serif; letter-spacing: .05em; }
.art { margin-top: 2.5mm; }
.src { font: 400 6.8pt "Franklin", sans-serif; color: #857c6e; margin-top: 1.5mm; }
.also { font: italic 400 7.6pt/1.3 "Serif4", serif; color: #5a5348; margin-top: 1.2mm; }
.side { padding-left: 5mm; display: flex; flex-direction: column; gap: 4.5mm; }
.side h4 { font: 800 7pt "Franklin", sans-serif; letter-spacing: .1em; text-transform: uppercase; margin: 0; padding-bottom: 1.2mm; border-bottom: 1.5px solid ${P.ink}; }
.big { font: 700 32pt/1 "Serif4", serif; margin: 2mm 0 1.2mm; white-space: nowrap; }
.side p { font-size: 9.2pt; line-height: 1.4; margin: 0; }
.quote { font: italic 400 10.5pt/1.4 "Serif4", serif; margin-top: 1.8mm !important; }
.cols { display: grid; grid-template-columns: repeat(${c}, 1fr); margin-top: 4mm; row-gap: 3mm; }
.story { padding: 0 4mm 2mm; border-left: .6px solid ${P.rule}; }
.story.first { border-left: 0; padding-left: 0; }
.story.last { padding-right: 0; }
.story h2 { font: 700 12.5pt/1.15 "Serif4", serif; margin: 1.2mm 0 1.8mm; }
.story p { font-size: 9.1pt; line-height: 1.42; margin: 0; text-align: justify; hyphens: auto; }
.story .art { margin: 0 0 2mm; }
.band { display: grid; grid-template-columns: 1fr 1.4fr; gap: 6mm; margin-top: auto; padding-top: 3.5mm; border-top: 2px solid ${P.ink}; }
.band h3 { font: 800 7.5pt "Franklin", sans-serif; letter-spacing: .1em; text-transform: uppercase; margin: 0 0 2mm; }
.band p { font-size: 9pt; line-height: 1.4; margin: 0; }
.counts { display: flex; gap: 4mm; margin-bottom: 2mm; }
.counts div { font: 400 7pt "Franklin", sans-serif; color: ${P.muted}; }
.counts b { display: block; font: 700 18pt/1 "Serif4", serif; color: ${P.ink}; }
table { width: 100%; border-collapse: collapse; font: 400 7.8pt "Franklin", sans-serif; }
td { padding: 1mm 0; border-bottom: .5px solid ${P.rule}; vertical-align: top; } td.v { text-align: right; font-weight: 700; white-space: nowrap; padding-left: 3mm; }
.foot { margin-top: 3mm; padding-top: 2mm; border-top: .6px solid ${P.ink}; display: flex; justify-content: space-between; font: 400 7pt "Franklin", sans-serif; color: #5c554a; }
`, `<div class="page" id="page">
<div class="top"><span>${esc(d.dateCap)}</span><span>Édition du matin · N° ${d.number}</span></div>
<div class="mast">Géoconomic</div>
<div class="tag">L'économie et la géopolitique, expliquées chaque matin</div>
<div class="rule2"></div>
<div class="bar"><span>${d.items.length} actus</span><span>Toutes les sources sont dans l'application</span></div>
<div class="leadrow">
  <div class="lead"><div class="k">${kicker(d, lead)}</div><h1>${esc(lead.title)}</h1><p class="deck">${esc(d.strip(lead.summary))}</p>
    <div class="body">${pts.map((t, i) => `<p>${i === 0 && dateline(lead) ? `<span class="dl">${esc(dateline(lead))} —</span> ` : ""}${t}</p>`).join("")}</div>
    ${leadArt ? `<div class="art">${leadArt}</div>` : ""}
    <div class="src">Sources : ${esc(sourcesOf(lead))}</div>${read(lead)}</div>
  <div class="side">
    ${df ? `<div><h4>Le chiffre du jour</h4><div class="big">${esc(df.value)}</div><p>${esc(df.label)}${df.place ? ` (${esc(df.place)})` : ""}.</p>${df.src ? `<div class="src">Source : ${esc(df.src)}</div>` : ""}</div>` : ""}
    ${firstWhy(d, lead) ? `<div><h4>Et toi, dans tout ça ?</h4><p class="quote">${esc(firstWhy(d, lead))}</p></div>` : ""}
    <div><h4>Les actus du jour, par région</h4><div style="margin-top:2mm">${regionStrip(d.items, "100%", Object.assign({}, P, { accents: P.regionColors, radius: 0 }))}</div></div>
    ${an ? `<div><h4>Le saviez-vous ?</h4><p style="margin-top:1.8mm">${esc(an.text)}</p><div class="src">${esc(an.era || "")}${an.source ? ` · ${esc(an.source.short || an.source.name)}` : ""}</div></div>` : ""}
  </div>
</div>
<div class="cols">${rest.map((n, i) => { const art = figuresPanel(d, n, P, { shape: shapes[i] }); return `<div class="story${i % c === 0 ? " first" : ""}${i % c === c - 1 ? " last" : ""}"><div class="k gray">${kicker(d, n)}</div><h2>${esc(n.title)}</h2>${art ? `<div class="art">${art}</div>` : ""}<p>${dateline(n) ? `<span class="dl">${esc(dateline(n))} —</span> ` : ""}${esc(d.strip(n.summary))}${n.points && n.points[0] && d.strip(n.points[0]).length < 260 ? " " + esc(d.strip(n.points[0])) : ""}</p><div class="src">${esc(sourcesOf(n))}</div>${read(n)}</div>`; }).join("")}</div>
<div class="band">
  ${d.C ? `<div><h3>Le point conflits · ${esc(d.C.barometre.month)}</h3><div class="counts"><div><b>${d.C.barometre.counts.worse}</b>s'aggravent</div><div><b>${d.C.barometre.counts.better}</b>s'améliorent</div><div><b>${d.C.barometre.counts.alerts}</b>alertes</div></div><p>${esc(d.C.barometre.worse.map((x) => x.name).join(", "))}.</p><div class="src">Source : CrisisWatch</div></div>` : "<div></div>"}
  <div><h3>Les derniers chiffres</h3><table>${latestRows(d).map((x) => `<tr><td>${esc(x.label)} <span style="color:#8a8173">· ${esc(x.date)}, ${esc(x.source.short)}</span></td><td class="v">${esc(x.value)}</td></tr>`).join("")}</table></div>
</div>
<div class="foot"><span>Chaque actu est expliquée en détail, avec toutes ses sources, dans l'application Géoconomic.</span><span>${esc(d.day)}</span></div>
</div>`);
}

// ---------------------------------------------------------------------------
// 2. Keynote : la version sombre, très grands titres, cartes arrondies, illustrations variées.
function keynote(d) {
  const [lead, ...rest] = d.items;
  const P = { ink: "#f5f5f7", muted: "#98989d", rule: "#3a3a3c", shape: "#c7c7cc", barInk: "#f5f5f7", neg: "#ff6961", panel: "#2c2c2e",
    accents: ["#ff9f0a", "#64d2ff"], bar: ["#64d2ff", "#bf5af2", "#ff9f0a"],
    sans: "'Inter', sans-serif", serif: "'Inter', sans-serif" };
  const shapes = shapePlan(d, rest);
  const an = d.anecdote;
  const seenCourse = new Set();
  const read = (n) => { const k = courseOf(n); if (!k || seenCourse.has(k)) return ""; seenCourse.add(k); return `<div class="src" style="color:#a1a1a6">Pour comprendre, le cours « ${esc(k)} » dans l'application.</div>`; };
  const df = dayFigure(d);
  return doc(`
html, body { background: #000; } body { color: #f5f5f7; font-family: "Inter", sans-serif; }
.page { padding: 13mm 13mm 10mm; background: #000; }
.top { display: flex; justify-content: space-between; font: 600 8.5pt "Inter"; color: #86868b; }
.top b { color: #f5f5f7; font-weight: 700; }
h1 { font: 800 46pt/1.02 "Inter"; letter-spacing: -.035em; margin: 6mm 0 0; }
.lede { margin-top: 4mm; font: 400 12pt/1.45 "Inter"; color: #a1a1a6; max-width: 150mm; }
.hero { display: grid; grid-template-columns: 1.35fr 1fr; gap: 7mm; margin-top: 5mm; align-items: end; }
.k { font: 600 8pt "Inter"; color: #86868b; letter-spacing: .02em; }
.no { color: #a78bfa; font-weight: 800; margin-right: 1.5mm; }
.hero h2 { font: 700 21pt/1.12 "Inter"; letter-spacing: -.02em; margin: 2mm 0; }
.hero p { font: 400 10pt/1.5 "Inter"; color: #a1a1a6; margin: 0; }
.stat { font: 800 52pt/1 "Inter"; letter-spacing: -.04em; white-space: nowrap; }
.statl { font: 500 9.5pt/1.4 "Inter"; color: #a1a1a6; margin-top: 2mm; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; margin-top: 7mm; }
.card { background: #1c1c1e; border-radius: 16px; padding: 5mm; }
.card h3 { font: 700 12pt/1.2 "Inter"; letter-spacing: -.01em; margin: 1.5mm 0 1.5mm; }
.card p { font: 400 8.6pt/1.45 "Inter"; color: #a1a1a6; margin: 0; }
.bottom { display: grid; grid-template-columns: 1fr 1fr; gap: 8mm; margin-top: 8mm; align-items: end; }
.nums { display: grid; grid-template-columns: 1fr; gap: 3mm; }
.num { border-top: 1px solid #333; padding-top: 3mm; }
.num b { display: block; font: 800 20pt/1 "Inter"; letter-spacing: -.03em; white-space: nowrap; }
.num span { display: block; font: 400 8pt/1.35 "Inter"; color: #86868b; margin-top: 1.5mm; }
.src { font: 400 6.8pt "Inter"; color: #6e6e73; margin-top: 2mm; }
.foot { margin-top: auto; padding-top: 6mm; font: 400 7pt "Inter"; color: #6e6e73; display: flex; justify-content: space-between; }
`, `<div class="page" id="page">
<div class="top"><span><b>Géoconomic</b> · La lettre du matin</span><span>${esc(d.dateCap)}</span></div>
<h1>Le monde.<br><span style="color:#6e6e73">Ce matin.</span></h1>
<div class="lede">${d.items.length} actus, expliquées simplement. Toutes les sources sont dans l'application.</div>
<div class="hero">
  <div><div class="k">${kicker(d, lead)}</div><h2>${esc(lead.title)}</h2><p>${esc(d.strip(lead.summary))}</p><div style="margin-top:3mm">${figuresPanel(d, lead, P, { shape: true, big: true })}</div><div class="src">Sources : ${esc(sourcesOf(lead))}</div>${read(lead)}</div>
  ${df ? `<div><div class="k">Le chiffre du jour${df.place ? " · " + esc(df.place) : ""}</div><div class="stat">${esc(df.value)}</div><div class="statl">${esc(df.label)}</div>${df.src ? `<div class="src">Source : ${esc(df.src)}</div>` : ""}</div>` : "<div></div>"}
</div>
<div class="grid">${rest.map((n, i) => { const art = figuresPanel(d, n, P, { shape: shapes[i] }); return `<div class="card"><div class="k">${kicker(d, n)}</div><h3>${esc(n.title)}</h3>${art ? `<div style="margin:2mm 0 2.5mm">${art}</div>` : ""}<p>${dateline(n) ? `<b style="color:#f5f5f7;font-weight:600">${esc(dateline(n))} —</b> ` : ""}${esc(d.strip(n.summary))}</p>${read(n)}</div>`; }).join("")}</div>
<div class="bottom"><div>${an ? `<div class="k" style="margin-bottom:2mm">Le saviez-vous ?</div><p style="font:400 10pt/1.5 Inter;color:#f5f5f7;margin:0">${esc(an.text)}</p><div class="src">${esc(an.era || "")}${an.source ? " · " + esc(an.source.short || an.source.name) : ""}</div>` : ""}</div><div class="nums">${latestRows(d).filter((x, i) => i < 3).map((x, i) => `<div class="num"><b>${esc(x.value)}</b><span>${esc(x.label)} · ${esc(x.source.short)}</span></div>`).join("")}</div></div>
<div class="foot"><span>Toutes les actus dans l'application Géoconomic.</span><span>${esc(d.day)}</span></div>
</div>`);
}

// ---------------------------------------------------------------------------
// 3. Édition blanche : blanc, grands chiffres numérotés, beaucoup d'air.
function blanc(d) {
  return doc(`
body { background: #fff; color: #1d1d1f; font-family: "Inter", sans-serif; }
.page { padding: 13mm 15mm 10mm; }
.top { display: flex; justify-content: space-between; align-items: baseline; padding-bottom: 3mm; border-bottom: 1px solid #d2d2d7; }
.top b { font: 700 13pt "Inter"; letter-spacing: -.02em; }
.top span { font: 500 8.5pt "Inter"; color: #6e6e73; }
h1 { font: 800 44pt/1.02 "Inter"; letter-spacing: -.035em; margin: 8mm 0 1mm; }
.sub { font: 500 12pt "Inter"; color: #6e6e73; }
.list { margin-top: 7mm; }
.it { display: grid; grid-template-columns: 15mm 1fr 36mm; gap: 4mm; padding: 3.4mm 0; border-top: 1px solid #e5e5ea; align-items: start; }
.no { font: 800 22pt/1 "Inter"; color: #d2d2d7; letter-spacing: -.03em; }
.k { font: 600 7.5pt "Inter"; color: #0071e3; letter-spacing: .02em; }
.it h2 { font: 700 13.5pt/1.22 "Inter"; letter-spacing: -.015em; margin: 1mm 0 1.2mm; }
.it p { font: 400 9.6pt/1.5 "Serif4", serif; color: #424245; margin: 0; }
.src { font: 400 6.8pt "Inter"; color: #86868b; margin-top: 1.2mm; }
.bottom { display: grid; grid-template-columns: 78mm 1fr; gap: 8mm; margin-top: auto; padding-top: 5mm; border-top: 1px solid #1d1d1f; align-items: center; }
.nums { display: grid; grid-template-columns: 1fr; gap: 3.5mm; }
.nums b { display: block; font: 800 24pt/1 "Inter"; letter-spacing: -.03em; color: #1d1d1f; }
.nums span { display: block; font: 400 8pt/1.35 "Inter"; color: #6e6e73; margin-top: 1.5mm; }
.foot { margin-top: 6mm; font: 400 7pt "Inter"; color: #86868b; display: flex; justify-content: space-between; }
`, `<div class="page" id="page">
<div class="top"><b>Géoconomic</b><span>La lettre du matin · ${esc(d.dateCap)}</span></div>
<h1>L'essentiel.</h1>
<div class="sub">L'économie et la géopolitique, en ${d.items.length} points.</div>
<div class="list">${d.items.map((n, i) => `<div class="it"><div class="no">${String(i + 1).padStart(2, "0")}</div><div><div class="k">${kicker(d, n)}</div><h2>${esc(n.title)}</h2><p>${esc(d.strip(n.summary))}</p><div class="src">${srcList(n)}</div></div>${sat(n, 36, 25, { span: 36, radius: 12, pinColor: "#0071e3" })}</div>`).join("")}</div>
<div class="bottom"><div>${worldMap(d, 78, { land: "#e3e3e8", dot: "#0071e3" })}<div class="src">Les lieux des ${d.items.length} actus du jour.</div></div><div class="nums">${[d.fig && { value: d.fig.value, label: d.fig.label + (d.figSrc ? " · " + d.figSrc.short : "") }, ...d.latest.filter((x, i) => [3, 5].includes(i)).map((x) => ({ value: x.value, label: x.label + " · " + x.source.short }))].filter(Boolean).map((x) => `<div><b>${esc(x.value)}</b><span>${esc(x.label)}</span></div>`).join("")}</div></div>
<div class="foot"><span>Toutes les actus, expliquées et sourcées, dans l'application Géoconomic.</span><span>${esc(d.day)}</span></div>
</div>`);
}

// ---------------------------------------------------------------------------
// 4. Le Magazine : couverture sur image satellite du lieu de l'actu principale.
function magazine(d) {
  const [lead, ...rest] = d.items;
  const coords = (lead.geo && lead.geo[0] && lead.geo[0].coords) || [10, 30];
  // Recadrage de la Terre (texture 2:1) centré sur le lieu : environ 60° de longitude visibles.
  const W = 210 * 3.7795, H = 150 * 3.7795;
  const Wi = W * 6, Hi = Wi / 2;
  const fx = (coords[0] + 180) / 360, fy = (90 - coords[1]) / 180;
  const bx = Math.min(0, Math.max(W - Wi, W / 2 - fx * Wi)), by = Math.min(0, Math.max(H - Hi, H / 2 - fy * Hi));
  return doc(`
body { background: #fff; color: #111; font-family: "Serif4", serif; }
.cover { position: relative; height: 150mm; background: #000 url(assets/earth/earth-blue-marble.jpg) no-repeat; background-size: ${Wi}px ${Hi}px; background-position: ${bx}px ${by}px; color: #fff; }
.cover::after { content: ""; position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,.55), rgba(0,0,0,0) 30%, rgba(0,0,0,0) 45%, rgba(0,0,0,.85)); }
.cover > * { position: relative; z-index: 1; }
.mast { text-align: center; padding-top: 9mm; font: 900 46pt/1 "Playfair", serif; letter-spacing: -.01em; }
.under { text-align: center; font: 600 7.5pt "Franklin", sans-serif; letter-spacing: .18em; text-transform: uppercase; margin-top: 2.5mm; opacity: .9; }
.cl { position: absolute; left: 14mm; right: 14mm; bottom: 10mm; }
.cl .k { font: 700 7.5pt "Franklin", sans-serif; letter-spacing: .14em; text-transform: uppercase; color: #ffd27a; }
.cl h1 { font: 700 italic 30pt/1.08 "Playfair", serif; margin: 2mm 0 2.5mm; }
.cl p { font: 400 10.5pt/1.45 "Serif4", serif; margin: 0; max-width: 150mm; opacity: .92; }
.place { font: 600 6.5pt "Franklin", sans-serif; letter-spacing: .12em; text-transform: uppercase; opacity: .75; margin-bottom: 3mm; }
.inside { padding: 8mm 14mm 9mm; display: grid; grid-template-columns: 1fr 1fr 52mm; gap: 6mm; flex: 1; align-content: start; }
.inside h4 { grid-column: 1 / -1; margin: 0; font: 800 7.5pt "Franklin", sans-serif; letter-spacing: .14em; text-transform: uppercase; border-bottom: 1.5px solid #111; padding-bottom: 2mm; }
.st h3 { font: 700 12.5pt/1.18 "Playfair", serif; margin: 0 0 1.5mm; }
.st p { font-size: 9pt; line-height: 1.42; margin: 0 0 1mm; color: #333; }
.st .k { font: 700 6.5pt "Franklin", sans-serif; letter-spacing: .1em; text-transform: uppercase; color: #b4472a; margin-bottom: 1mm; }
.st { margin-bottom: 4mm; }
.side { border-left: .6px solid #ccc; padding-left: 5mm; }
.side .big { font: 900 30pt/1 "Playfair", serif; margin: 2mm 0; }
.side p { font-size: 9pt; line-height: 1.4; margin: 0; }
.side .k { font: 700 6.5pt "Franklin", sans-serif; letter-spacing: .1em; text-transform: uppercase; color: #777; }
.foot { padding: 0 14mm 7mm; font: 400 6.8pt "Franklin", sans-serif; color: #777; display: flex; justify-content: space-between; }
`, `<div class="page" id="page">
<div class="cover">
  <div class="mast">Géoconomic</div>
  <div class="under">Le magazine du matin · ${esc(d.dateCap)}</div>
  <div class="cl"><div class="place">${esc((lead.geo && lead.geo[0] && (lead.geo[0].label || lead.geo[0].name)) || "")} · vu du ciel</div><div class="k">${kicker(d, lead)}</div><h1>${esc(lead.title)}</h1><p>${esc(d.strip(lead.summary))}</p></div>
</div>
<div class="inside">
  <h4>Aussi ce matin</h4>
  <div>${rest.map((n, i) => [n, i]).filter(([x, i]) => i % 2 === 0).map(([n, i]) => `<div class="st">${sat(n, 59, 20, { span: 40, num: i + 2 })}<div class="k" style="margin-top:2mm">${kicker(d, n)}</div><h3>${esc(n.title)}</h3><p>${esc(d.strip(n.summary))}</p></div>`).join("")}</div>
  <div>${rest.map((n, i) => [n, i]).filter(([x, i]) => i % 2 === 1).map(([n, i]) => `<div class="st">${sat(n, 59, 20, { span: 40, num: i + 2 })}<div class="k" style="margin-top:2mm">${kicker(d, n)}</div><h3>${esc(n.title)}</h3><p>${esc(d.strip(n.summary))}</p></div>`).join("")}</div>
  <div class="side">${d.fig ? `<div class="k">Le chiffre</div><div class="big">${esc(d.fig.value)}</div><p>${esc(d.fig.label)}</p>` : ""}
    ${d.C ? `<div class="k" style="margin-top:6mm">Conflits · ${esc(d.C.barometre.month)}</div><p style="margin-top:1.5mm">${d.C.barometre.counts.worse} situations s'aggravent : ${esc(d.C.barometre.worse.map((x) => x.name).join(", "))}.</p>` : ""}
    <div class="k" style="margin-top:6mm">Les lieux du jour</div><div style="margin-top:2mm">${worldMap(d, 46, { land: "#e0dbcf", dot: "#b4472a" })}</div></div>
</div>
<div class="foot"><span>Image : NASA, Blue Marble. Sources complètes de chaque actu dans l'application Géoconomic.</span><span>${esc(d.day)}</span></div>
</div>`);
}

// ---------------------------------------------------------------------------
// 5. Le Briefing : une colonne, ton de lettre, comme une newsletter du matin.
function briefing(d) {
  const [lead, ...rest] = d.items;
  const wd = d.dateCap.split(" ")[0].toLowerCase();
  return doc(`
html, body { background: #fbfaf7; } body { color: #1a1a1a; font-family: "Serif4", serif; }
.page { padding: 14mm 0 10mm; align-items: center; background: #fbfaf7; }
.col { width: 138mm; display: flex; flex-direction: column; flex: 1; }
.top { display: flex; justify-content: space-between; font: 700 7.5pt "Franklin", sans-serif; letter-spacing: .12em; text-transform: uppercase; border-bottom: 1.5px solid #1a1a1a; padding-bottom: 2mm; }
h1 { font: 700 27pt/1.05 "Serif4", serif; margin: 6mm 0 2mm; letter-spacing: -.01em; }
.hello { font: italic 400 12.5pt/1.5 "Serif4", serif; color: #444; margin: 0 0 4mm; }
.lead { font-size: 11pt; line-height: 1.55; margin: 0 0 3mm; }
.lead b, .it b { font-weight: 700; }
.sec { font: 800 7.5pt "Franklin", sans-serif; letter-spacing: .12em; text-transform: uppercase; color: #b4472a; margin: 4mm 0 1.5mm; }
.it { font-size: 10pt; line-height: 1.52; margin: 0 0 2.6mm; padding-left: 4.5mm; position: relative; }
.it::before { content: ""; position: absolute; left: 0; top: 2.2mm; width: 1.6mm; height: 1.6mm; background: #1a1a1a; border-radius: 50%; }
.src { font: 400 6.8pt "Franklin", sans-serif; color: #8a8a8a; }
.cap { font: italic 400 7.5pt "Serif4", serif; color: #888; margin: 1.2mm 0 3mm; }
.it2 { display: grid; grid-template-columns: 17mm 1fr; gap: 4mm; align-items: center; margin: 0 0 2.6mm; }
.it2 p { font-size: 10pt; line-height: 1.5; margin: 0; }
.box { border-top: .6px solid #1a1a1a; border-bottom: .6px solid #1a1a1a; padding: 3mm 0; margin: 3mm 0; display: grid; grid-template-columns: auto 1fr; gap: 5mm; align-items: center; }
.box b { font: 700 28pt/1 "Serif4", serif; }
.box span { font-size: 10pt; line-height: 1.4; }
.sign { margin-top: auto; padding-top: 4mm; font: italic 400 10.5pt "Serif4", serif; color: #444; }
.foot { margin-top: 3mm; padding-top: 2mm; border-top: .6px solid #ccc; font: 400 6.8pt "Franklin", sans-serif; color: #888; display: flex; justify-content: space-between; }
`, `<div class="page" id="page"><div class="col">
<div class="top"><span>Géoconomic · Le Briefing</span><span>${esc(d.dateCap)}</span></div>
<h1>${esc(lead.title)}</h1>
<p class="hello">Bonjour. Voici ce qu'il faut savoir ce ${esc(wd)} matin.</p>
${sat(lead, 138, 44, { span: 30, radius: 4 })}<div class="cap">${esc(placeOf(lead))}, vu par satellite. Image : NASA, Blue Marble</div>
<p class="lead">${esc(d.strip(lead.summary))} <span class="src">(${srcList(lead)})</span></p>
${d.fig ? `<div class="box"><b>${esc(d.fig.value)}</b><span>${esc(d.fig.label)}${d.figSrc ? ` <span class="src">(${esc(d.figSrc.short)})</span>` : ""}</span></div>` : ""}
<div class="sec">Ailleurs dans le monde</div>
${rest.map((n, i) => `<div class="it2">${sat(n, 17, 17, { span: 30, radius: 999, num: null })}<p><b>${esc(n.title)}.</b> ${esc(d.strip(n.summary))} <span class="src">(${srcList(n)})</span></p></div>`).join("")}
<div class="sec">Où ça se passe</div>${worldMap(d, 138, { land: "#e6e1d6", dot: "#b4472a" })}
${d.C ? `<div class="sec">Le point conflits</div><p class="it"><b>${esc(d.C.barometre.month)} :</b> ${d.C.barometre.counts.worse} situations s'aggravent (${esc(d.C.barometre.worse.map((x) => x.name).join(", "))}), ${d.C.barometre.counts.better} s'améliorent, ${d.C.barometre.counts.alerts} alertes. <span class="src">(CrisisWatch)</span></p>` : ""}
<div class="sign">Bonne journée, et à demain matin.<br>La rédaction de Géoconomic</div>
<div class="foot"><span>Chaque actu est expliquée en détail, avec ses sources, dans l'application.</span><span>${esc(d.day)}</span></div>
</div></div>`);
}

export const STYLES = { journal, keynote, blanc, magazine, briefing };
export const STYLE_NAMES = {
  classique: "Classique",
  journal: "Le Journal",
  keynote: "Keynote",
  blanc: "Édition blanche",
  magazine: "Le Magazine",
  briefing: "Le Briefing"
};
