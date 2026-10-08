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

const doc = (css, body) => `<!doctype html><html lang="fr"><head><meta charset="utf-8"><style>${FONTS}${css}</style></head><body>${body}</body></html>`;
const srcList = (n) => esc((n.sources || []).map((s) => s.short || s.name).join(", "));
const kicker = (d, n) => `${esc(d.THEMES[n.theme] || "")}${n.region ? " · " + esc(n.region) : ""}`;

// ---------------------------------------------------------------------------
// 1. Le Journal : une de quotidien, colonnes et filets, noir sur blanc.
function journal(d) {
  const [lead, ...rest] = d.items;
  return doc(`
body { background: #fff; color: #121212; font-family: "Serif4", serif; }
.page { padding: 10mm 12mm 9mm; }
.top { display: flex; justify-content: space-between; font: 600 7.5pt "Franklin", sans-serif; letter-spacing: .06em; text-transform: uppercase; color: #333; }
.mast { text-align: center; font: 900 50pt/1 "Playfair", serif; letter-spacing: -.01em; margin: 3mm 0 1.5mm; }
.tag { text-align: center; font: italic 400 10pt "Serif4", serif; color: #444; }
.rule2 { border-top: 2.5px solid #121212; border-bottom: .6px solid #121212; height: 3px; margin: 3mm 0 1.6mm; }
.bar { display: flex; justify-content: space-between; font: 600 7.5pt "Franklin", sans-serif; color: #333; padding-bottom: 1.6mm; border-bottom: .6px solid #121212; }
.leadrow { display: grid; grid-template-columns: 2fr 1fr; gap: 0; margin-top: 4mm; border-bottom: .6px solid #121212; padding-bottom: 4mm; }
.lead { padding-right: 5mm; border-right: .6px solid #bbb; }
.k { font: 700 7pt "Franklin", sans-serif; letter-spacing: .09em; text-transform: uppercase; color: #6b6b6b; }
.lead h1 { font: 700 27pt/1.07 "Serif4", serif; margin: 1.5mm 0 2.5mm; letter-spacing: -.01em; }
.lead p { font-size: 10.5pt; line-height: 1.45; margin: 0; }
.src { font: 400 6.8pt "Franklin", sans-serif; color: #7a7a7a; margin-top: 1.5mm; }
.side { padding-left: 5mm; }
.big { font: 700 34pt/1 "Serif4", serif; margin: 2mm 0 1.5mm; }
.side p { font-size: 9.5pt; line-height: 1.4; margin: 0; }
.cols { display: grid; margin-top: 4mm; }
.story { padding: 0 4mm 3.5mm; border-left: .6px solid #bbb; }
.story.first { border-left: 0; padding-left: 0; }
.story.last { padding-right: 0; }
.story h2 { font: 700 13pt/1.15 "Serif4", serif; margin: 1.2mm 0 1.5mm; }
.story p { font-size: 9.2pt; line-height: 1.42; margin: 0; }
.band { display: grid; grid-template-columns: 1fr 1.4fr; gap: 6mm; margin-top: auto; padding-top: 3.5mm; border-top: 2px solid #121212; }
.band h3 { font: 800 7.5pt "Franklin", sans-serif; letter-spacing: .1em; text-transform: uppercase; margin: 0 0 2mm; }
.band p { font-size: 9pt; line-height: 1.4; margin: 0; }
table { width: 100%; border-collapse: collapse; font: 400 7.8pt "Franklin", sans-serif; }
td { padding: .9mm 0; border-bottom: .5px solid #ddd; } td.v { text-align: right; font-weight: 700; }
.foot { margin-top: 3mm; padding-top: 2mm; border-top: .6px solid #121212; display: flex; justify-content: space-between; font: 400 7pt "Franklin", sans-serif; color: #555; }
`, `<div class="page" id="page">
<div class="top"><span>${esc(d.dateCap)}</span><span>Édition du matin</span></div>
<div class="mast">Géoconomic</div>
<div class="tag">L'économie et la géopolitique, expliquées chaque matin</div>
<div class="rule2"></div>
<div class="bar"><span>${d.items.length} actus · lecture 5 min</span><span>Chaque fait est sourcé</span></div>
<div class="leadrow">
  <div class="lead"><div class="k">${kicker(d, lead)}</div><h1>${esc(lead.title)}</h1><p>${esc(d.strip(lead.summary))}</p><div class="src">Sources : ${srcList(lead)}</div></div>
  <div class="side">${d.fig ? `<div class="k">Le chiffre du jour</div><div class="big">${esc(d.fig.value)}</div><p>${esc(d.fig.label)}</p><div class="src">${d.figSrc ? "Source : " + esc(d.figSrc.short) : ""}</div>` : ""}</div>
</div>
<div class="cols" style="grid-template-columns: repeat(${rest.length <= 4 ? Math.max(1, rest.length) : 3}, 1fr)">${rest.map((n, i, a) => { const c = a.length <= 4 ? a.length : 3; return `<div class="story${i % c === 0 ? " first" : ""}${i % c === c - 1 ? " last" : ""}"><div class="k">${kicker(d, n)}</div><h2>${esc(n.title)}</h2><p>${esc(d.strip(n.summary))}</p><div class="src">${srcList(n)}</div></div>`; }).join("")}</div>
<div class="band">
  ${d.C ? `<div><h3>Le point conflits · ${esc(d.C.barometre.month)}</h3><p><b>${d.C.barometre.counts.worse}</b> situations s'aggravent, <b>${d.C.barometre.counts.better}</b> s'améliorent, <b>${d.C.barometre.counts.alerts}</b> alertes : ${esc(d.C.barometre.worse.map((x) => x.name).join(", "))}.</p><div class="src">Source : CrisisWatch</div></div>` : "<div></div>"}
  <div><h3>Les derniers chiffres</h3><table>${d.latest.slice(0, 6).map((x) => `<tr><td>${esc(x.label)} <span style="color:#888">· ${esc(x.date)}, ${esc(x.source.short)}</span></td><td class="v">${esc(x.value)}</td></tr>`).join("")}</table></div>
</div>
<div class="foot"><span>Toutes les actus, expliquées et sourcées, dans l'application Géoconomic.</span><span>${esc(d.day)}</span></div>
</div>`);
}

// ---------------------------------------------------------------------------
// 2. Keynote : fond noir, très grands titres, dégradés, cartes arrondies.
function keynote(d) {
  const [lead, ...rest] = d.items;
  return doc(`
body { background: #000; color: #f5f5f7; font-family: "Inter", sans-serif; }
.page { padding: 13mm 13mm 10mm; background: #000; }
.top { display: flex; justify-content: space-between; font: 600 8.5pt "Inter"; color: #86868b; }
.top b { color: #f5f5f7; font-weight: 700; }
h1 { font: 800 50pt/1.02 "Inter"; letter-spacing: -.035em; margin: 9mm 0 0; }
.grad { background: linear-gradient(90deg, #5ac8fa, #a78bfa 55%, #ff6b9a); -webkit-background-clip: text; background-clip: text; color: transparent; }
.lede { margin-top: 4mm; font: 400 12pt/1.45 "Inter"; color: #a1a1a6; max-width: 150mm; }
.hero { display: grid; grid-template-columns: 1.35fr 1fr; gap: 7mm; margin-top: 9mm; align-items: end; }
.k { font: 600 8pt "Inter"; color: #86868b; letter-spacing: .02em; }
.hero h2 { font: 700 21pt/1.12 "Inter"; letter-spacing: -.02em; margin: 2mm 0; }
.hero p { font: 400 10pt/1.5 "Inter"; color: #a1a1a6; margin: 0; }
.stat { font: 800 58pt/1 "Inter"; letter-spacing: -.04em; }
.statl { font: 500 9.5pt/1.4 "Inter"; color: #a1a1a6; margin-top: 2mm; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; margin-top: 9mm; }
.card { background: #1c1c1e; border-radius: 16px; padding: 5mm; }
.card h3 { font: 700 12pt/1.2 "Inter"; letter-spacing: -.01em; margin: 1.5mm 0 1.5mm; }
.card p { font: 400 8.6pt/1.45 "Inter"; color: #a1a1a6; margin: 0; }
.nums { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4mm; margin-top: auto; padding-top: 7mm; }
.num { border-top: 1px solid #333; padding-top: 3mm; }
.num b { display: block; font: 800 22pt/1 "Inter"; letter-spacing: -.03em; }
.num span { display: block; font: 400 8pt/1.35 "Inter"; color: #86868b; margin-top: 1.5mm; }
.src { font: 400 6.8pt "Inter"; color: #6e6e73; margin-top: 2mm; }
.foot { margin-top: 6mm; font: 400 7pt "Inter"; color: #6e6e73; display: flex; justify-content: space-between; }
`, `<div class="page" id="page">
<div class="top"><span><b>Géoconomic</b> · La lettre du matin</span><span>${esc(d.dateCap)}</span></div>
<h1>Le monde.<br><svg width="150mm" height="20mm" viewBox="0 0 567 76" style="display:block;margin-top:-1mm"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#5ac8fa"/><stop offset=".55" stop-color="#a78bfa"/><stop offset="1" stop-color="#ff6b9a"/></linearGradient></defs><text x="0" y="62" fill="url(#g)" style="font: 800 66.5px Inter; letter-spacing: -2.3px">Ce matin.</text></svg></h1>
<div class="lede">${d.items.length} actus qui comptent, expliquées simplement. Chaque fait est sourcé.</div>
<div class="hero">
  <div><div class="k">${kicker(d, lead)}</div><h2>${esc(lead.title)}</h2><p>${esc(d.strip(lead.summary))}</p><div class="src">Sources : ${srcList(lead)}</div></div>
  ${d.fig ? `<div><div class="stat" style="color:#a78bfa">${esc(d.fig.value)}</div><div class="statl">${esc(d.fig.label)}</div><div class="src">${d.figSrc ? "Source : " + esc(d.figSrc.short) : ""}</div></div>` : "<div></div>"}
</div>
<div class="grid">${rest.slice(0, 6).map((n) => `<div class="card"><div class="k">${kicker(d, n)}</div><h3>${esc(n.title)}</h3><p>${esc(d.strip(n.summary))}</p></div>`).join("")}</div>
<div class="nums">${d.latest.filter((x, i) => [0, 3, 5].includes(i)).map((x, i) => `<div class="num"><b style="color:${["#5ac8fa", "#a78bfa", "#ff6b9a"][i]}">${esc(x.value)}</b><span>${esc(x.label)} · ${esc(x.source.short)}</span></div>`).join("")}</div>
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
.it { display: grid; grid-template-columns: 17mm 1fr; gap: 3mm; padding: 3.6mm 0; border-top: 1px solid #e5e5ea; }
.no { font: 800 22pt/1 "Inter"; color: #d2d2d7; letter-spacing: -.03em; }
.k { font: 600 7.5pt "Inter"; color: #0071e3; letter-spacing: .02em; }
.it h2 { font: 700 13.5pt/1.22 "Inter"; letter-spacing: -.015em; margin: 1mm 0 1.2mm; }
.it p { font: 400 9.6pt/1.5 "Serif4", serif; color: #424245; margin: 0; }
.src { font: 400 6.8pt "Inter"; color: #86868b; margin-top: 1.2mm; }
.nums { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6mm; margin-top: auto; padding-top: 6mm; border-top: 1px solid #1d1d1f; }
.nums b { display: block; font: 800 24pt/1 "Inter"; letter-spacing: -.03em; color: #1d1d1f; }
.nums span { display: block; font: 400 8pt/1.35 "Inter"; color: #6e6e73; margin-top: 1.5mm; }
.foot { margin-top: 6mm; font: 400 7pt "Inter"; color: #86868b; display: flex; justify-content: space-between; }
`, `<div class="page" id="page">
<div class="top"><b>Géoconomic</b><span>La lettre du matin · ${esc(d.dateCap)}</span></div>
<h1>L'essentiel.</h1>
<div class="sub">L'économie et la géopolitique, en ${d.items.length} points.</div>
<div class="list">${d.items.map((n, i) => `<div class="it"><div class="no">${String(i + 1).padStart(2, "0")}</div><div><div class="k">${kicker(d, n)}</div><h2>${esc(n.title)}</h2><p>${esc(d.strip(n.summary))}</p><div class="src">${srcList(n)}</div></div></div>`).join("")}</div>
<div class="nums">${[d.fig && { value: d.fig.value, label: d.fig.label + (d.figSrc ? " · " + d.figSrc.short : "") }, ...d.latest.filter((x, i) => [3, 5].includes(i)).map((x) => ({ value: x.value, label: x.label + " · " + x.source.short }))].filter(Boolean).map((x) => `<div><b>${esc(x.value)}</b><span>${esc(x.label)}</span></div>`).join("")}</div>
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
  <div>${rest.filter((x, i) => i % 2 === 0).map((n) => `<div class="st"><div class="k">${kicker(d, n)}</div><h3>${esc(n.title)}</h3><p>${esc(d.strip(n.summary))}</p></div>`).join("")}</div>
  <div>${rest.filter((x, i) => i % 2 === 1).map((n) => `<div class="st"><div class="k">${kicker(d, n)}</div><h3>${esc(n.title)}</h3><p>${esc(d.strip(n.summary))}</p></div>`).join("")}</div>
  <div class="side">${d.fig ? `<div class="k">Le chiffre</div><div class="big">${esc(d.fig.value)}</div><p>${esc(d.fig.label)}</p>` : ""}
    ${d.C ? `<div class="k" style="margin-top:6mm">Conflits · ${esc(d.C.barometre.month)}</div><p style="margin-top:1.5mm">${d.C.barometre.counts.worse} situations s'aggravent : ${esc(d.C.barometre.worse.map((x) => x.name).join(", "))}.</p>` : ""}</div>
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
body { background: #fbfaf7; color: #1a1a1a; font-family: "Serif4", serif; }
.page { padding: 14mm 0 10mm; align-items: center; background: #fbfaf7; }
.col { width: 138mm; display: flex; flex-direction: column; flex: 1; }
.top { display: flex; justify-content: space-between; font: 700 7.5pt "Franklin", sans-serif; letter-spacing: .12em; text-transform: uppercase; border-bottom: 1.5px solid #1a1a1a; padding-bottom: 2mm; }
h1 { font: 700 30pt/1.05 "Serif4", serif; margin: 7mm 0 2mm; letter-spacing: -.01em; }
.hello { font: italic 400 12.5pt/1.5 "Serif4", serif; color: #444; margin: 0 0 4mm; }
.lead { font-size: 11pt; line-height: 1.55; margin: 0 0 3mm; }
.lead b, .it b { font-weight: 700; }
.sec { font: 800 7.5pt "Franklin", sans-serif; letter-spacing: .12em; text-transform: uppercase; color: #b4472a; margin: 4mm 0 1.5mm; }
.it { font-size: 10pt; line-height: 1.52; margin: 0 0 2.6mm; padding-left: 4.5mm; position: relative; }
.it::before { content: ""; position: absolute; left: 0; top: 2.2mm; width: 1.6mm; height: 1.6mm; background: #1a1a1a; border-radius: 50%; }
.src { font: 400 6.8pt "Franklin", sans-serif; color: #8a8a8a; }
.box { border-top: .6px solid #1a1a1a; border-bottom: .6px solid #1a1a1a; padding: 3mm 0; margin: 3mm 0; display: grid; grid-template-columns: auto 1fr; gap: 5mm; align-items: center; }
.box b { font: 700 28pt/1 "Serif4", serif; }
.box span { font-size: 10pt; line-height: 1.4; }
.sign { margin-top: auto; padding-top: 4mm; font: italic 400 10.5pt "Serif4", serif; color: #444; }
.foot { margin-top: 3mm; padding-top: 2mm; border-top: .6px solid #ccc; font: 400 6.8pt "Franklin", sans-serif; color: #888; display: flex; justify-content: space-between; }
`, `<div class="page" id="page"><div class="col">
<div class="top"><span>Géoconomic · Le Briefing</span><span>${esc(d.dateCap)}</span></div>
<h1>${esc(lead.title)}</h1>
<p class="hello">Bonjour. Voici ce qu'il faut savoir ce ${esc(wd)} matin.</p>
<p class="lead">${esc(d.strip(lead.summary))} <span class="src">(${srcList(lead)})</span></p>
${d.fig ? `<div class="box"><b>${esc(d.fig.value)}</b><span>${esc(d.fig.label)}${d.figSrc ? ` <span class="src">(${esc(d.figSrc.short)})</span>` : ""}</span></div>` : ""}
<div class="sec">Ailleurs dans le monde</div>
${rest.map((n) => `<p class="it"><b>${esc(n.title)}.</b> ${esc(d.strip(n.summary))} <span class="src">(${srcList(n)})</span></p>`).join("")}
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
