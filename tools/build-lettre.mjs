// Fabrique « La lettre du matin » : une page A4 en PDF avec les actus du jour,
// le chiffre du jour, le point conflits et les derniers chiffres.
// Usage : node tools/build-lettre.mjs [AAAA-MM-JJ] [--style=nom] [--out=fichier.pdf]
//   date  : par défaut, la date la plus récente des actus
//   style : classique (par défaut), journal, keynote, blanc, magazine, briefing (voir tools/lettre-styles.mjs)
//   out   : par défaut lettres/AAAA-MM-JJ.pdf (et la liste des lettres est mise à jour dans data/lettres.js)
// Nécessite Playwright et Chromium (déjà installés dans l'environnement cloud).
import fs from "fs";
import vm from "vm";
import path from "path";
import { createRequire } from "module";
import { execSync } from "child_process";
import { STYLES } from "./lettre-styles.mjs";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
process.chdir(ROOT);

// Playwright : installation locale ou globale.
let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch (e) {
  const globalRoot = execSync("npm root -g").toString().trim();
  ({ chromium } = createRequire(path.join(globalRoot, "noop.js"))("playwright"));
}

const ctx = { window: {} };
vm.createContext(ctx);
for (const f of ["data/news.js", "data/indicators.js", "data/conflits.js", "data/world.js"]) {
  if (fs.existsSync(f)) vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
}
const G = ctx.window.GEOCO;
const news = G.news || [];
const args = process.argv.slice(2);
const opt = (k) => { const a = args.find((x) => x.startsWith(`--${k}=`)); return a && a.slice(k.length + 3); };
const style = opt("style") || "classique";
if (style !== "classique" && !STYLES[style]) { console.error(`Style inconnu : ${style}`); process.exit(1); }
const day = args.find((x) => /^\d{4}-\d{2}-\d{2}$/.test(x)) || (news[0] && news[0].date);
if (!day) { console.error("Aucune actu."); process.exit(1); }
const todays = news.filter((n) => n.date === day);
if (!todays.length) { console.error(`Aucune actu le ${day}.`); process.exit(1); }

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const strip = (s) => String(s).replace(/\s*\[\d+\]/g, "");
const THEMES = { eco: "Économie", geo: "Géopolitique", mix: "Éco & Géopo" };
const longDate = new Date(day + "T12:00:00").toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

// Les actus : jusqu'à 7, dans l'ordre du fichier (la rédaction met les plus importantes en premier).
const items = todays.slice(0, 7);
const lead = items[0];
const fig = (lead.figures || [])[0];
const figSrc = fig && fig.src && lead.sources[fig.src - 1];
const C = G.conflits;
const latest = (G.indicators && G.indicators.latest) || [];

const dateCap = longDate.charAt(0).toUpperCase() + longDate.slice(1);
const data = { day, dateCap, items, fig, figSrc, C, latest, THEMES, strip, world: ctx.window.GEOCO_WORLD };
const html = style !== "classique" ? STYLES[style](data) : `<!doctype html><html lang="fr"><head><meta charset="utf-8"><style>
@page { size: A4; margin: 0; }
* { box-sizing: border-box; }
body { margin: 0; font-family: "Tinos", "Liberation Serif", "Times New Roman", serif; color: #161616; background: #fff; }
.page { width: 210mm; min-height: 297mm; padding: 13mm 14mm 11mm; display: flex; flex-direction: column; }
.sans { font-family: "Helvetica Neue", Arial, "Liberation Sans", sans-serif; }
header { text-align: center; border-bottom: 2.5px solid #161616; padding-bottom: 3mm; }
.mast { font-size: 34pt; font-weight: 700; letter-spacing: -.01em; line-height: 1; }
.sub { margin-top: 2mm; font-size: 9pt; letter-spacing: .12em; text-transform: uppercase; color: #555; }
.dateline { display: flex; justify-content: space-between; font-size: 8.5pt; color: #444; padding: 2mm 0; border-bottom: .5px solid #bbb; }
.cols { display: grid; grid-template-columns: 1fr 58mm; gap: 7mm; margin-top: 5mm; flex: 1; }
h2 { font-size: 8.5pt; letter-spacing: .1em; text-transform: uppercase; margin: 0 0 2.5mm; padding-bottom: 1.5mm; border-bottom: .5px solid #161616; }
.item { padding: 2.6mm 0; border-bottom: .5px solid #d6d6d6; }
.item:last-child { border-bottom: 0; }
.kick { font-size: 7.5pt; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #b4472a; }
.item h3 { margin: 1mm 0 0; font-size: 12.5pt; line-height: 1.18; }
.item.lead h3 { font-size: 17pt; }
.item p { margin: 1.2mm 0 0; font-size: 9.8pt; line-height: 1.38; color: #2a2a2a; }
.src { font-size: 7.5pt; color: #777; margin-top: 1mm; }
aside > div { margin-bottom: 6mm; }
.big { font-size: 30pt; font-weight: 700; line-height: 1; }
.lbl { font-size: 9.5pt; line-height: 1.35; margin-top: 1.5mm; }
.baro { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2mm; text-align: center; margin-bottom: 2mm; }
.baro b { display: block; font-size: 18pt; }
.baro span { font-size: 7pt; color: #555; }
.small { font-size: 8.8pt; line-height: 1.38; }
table { width: 100%; border-collapse: collapse; font-size: 8.5pt; }
td { padding: 1.3mm 0; border-bottom: .5px solid #ddd; vertical-align: top; }
td.v { text-align: right; font-weight: 700; white-space: nowrap; padding-left: 2mm; }
footer { margin-top: 4mm; padding-top: 2.5mm; border-top: .5px solid #161616; font-size: 7.8pt; color: #555; display: flex; justify-content: space-between; gap: 6mm; }
</style></head><body><div class="page" id="page">
<header><div class="mast">Géoconomic</div><div class="sub sans">La lettre du matin · l'économie et la géopolitique, expliquées</div></header>
<div class="dateline sans"><span>${esc(longDate.charAt(0).toUpperCase() + longDate.slice(1))}</span><span>${items.length} actus · lecture 5 min</span></div>
<div class="cols">
  <main>
    <h2 class="sans">Ce qu'il faut savoir ce matin</h2>
    ${items.map((n, i) => `
    <div class="item${i === 0 ? " lead" : ""}">
      <div class="kick sans">${esc(THEMES[n.theme] || "")}${n.region ? " · " + esc(n.region) : ""}</div>
      <h3>${esc(n.title)}</h3>
      <p>${esc(strip(n.summary))}</p>
      <div class="src sans">Sources : ${esc((n.sources || []).map((s) => s.short || s.name).join(", "))}</div>
    </div>`).join("")}
  </main>
  <aside>
    ${fig ? `<div><h2 class="sans">Le chiffre du jour</h2><div class="big">${esc(fig.value)}</div><div class="lbl">${esc(fig.label)}</div><div class="src sans">${figSrc ? "Source : " + esc(figSrc.short || figSrc.name) : ""}</div></div>` : ""}
    ${C ? `<div><h2 class="sans">Le point conflits</h2>
      <div class="baro sans"><div><b>${C.barometre.counts.worse}</b><span>s'aggravent</span></div><div><b>${C.barometre.counts.better}</b><span>s'améliorent</span></div><div><b>${C.barometre.counts.alerts}</b><span>alertes</span></div></div>
      <div class="small">${esc(C.barometre.month)} : ${esc(C.barometre.worse.map((x) => x.name).join(", "))}.</div>
      <div class="src sans">Source : CrisisWatch</div></div>` : ""}
    ${latest.length ? `<div><h2 class="sans">Les derniers chiffres</h2><table class="sans">${latest.map((x) => `<tr><td>${esc(x.label)}<br><span style="color:#888">${esc(x.date)} · ${esc(x.source.short)}</span></td><td class="v">${esc(x.value)}</td></tr>`).join("")}</table></div>` : ""}
  </aside>
</div>
<footer class="sans"><span>Chaque actu est expliquée en détail, avec toutes ses sources, dans l'application Géoconomic.</span><span>Lettre n° ${esc(day)}</span></footer>
</div></body></html>`;

const browser = await chromium.launch(fs.existsSync("/opt/pw-browsers/chromium") ? { executablePath: "/opt/pw-browsers/chromium" } : {});
const page = await browser.newPage({ viewport: { width: 794, height: 1123 } });
// La page est écrite à la racine du projet pour que polices et images (assets/…) se chargent.
const tmp = path.join(ROOT, ".lettre-tmp.html");
fs.writeFileSync(tmp, html);
await page.goto("file://" + tmp, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
fs.unlinkSync(tmp);
// Tout doit tenir sur une page : si ça déborde, on réduit légèrement l'ensemble.
const A4 = 1120;
const fit = await page.evaluate((max) => {
  const el = document.getElementById("page");
  el.style.minHeight = "0";
  const natural = el.getBoundingClientRect().height;
  const z = natural > max ? Math.floor((max / natural) * 100) / 100 : 1;
  el.style.zoom = z;
  el.style.minHeight = (297 / z) + "mm"; // le pied de page reste en bas de la feuille
  return z;
}, A4);
const h = fit < 1 ? A4 + 1 : A4;
const out = opt("out") || `lettres/${day}.pdf`;
fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
await page.pdf({ path: out, format: "A4", printBackground: true, pageRanges: "1" });
await browser.close();

if (opt("out")) { console.log(`Lettre (${style}) prête : ${out}.`); process.exit(0); }

// Liste des lettres (la plus récente en premier).
const list = fs.readdirSync("lettres").filter((f) => /^\d{4}-\d{2}-\d{2}\.pdf$/.test(f)).sort().reverse();
const entries = list.map((f) => {
  const d = f.slice(0, 10);
  const titles = news.filter((n) => n.date === d).slice(0, 3).map((n) => n.title);
  return { date: d, file: `lettres/${f}`, titles };
});
fs.writeFileSync("data/lettres.js",
  "// Liste des lettres du matin en PDF, générée par tools/build-lettre.mjs : ne pas modifier à la main.\n" +
  "window.GEOCO = window.GEOCO || {};\nwindow.GEOCO.lettres = " + JSON.stringify(entries, null, 2) + ";\n");
console.log(`Lettre prête : ${out} (${items.length} actus${h > A4 ? ", réduite pour tenir sur une page" : ""}).`);
