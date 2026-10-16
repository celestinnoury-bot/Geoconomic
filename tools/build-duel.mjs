// Copie le prototype « Géoconomic Duel » (prototypes/jeu-quiz.html) en page de l'appli : duel.html.
// Ajoute le doctype, le viewport et un lien de retour vers l'appli.
// Usage : node tools/build-duel.mjs (à relancer après chaque changement du prototype).
import fs from "fs";

let html = fs.readFileSync("prototypes/jeu-quiz.html", "utf8");
const head = `<!doctype html>
<html lang="fr">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#16110d">
<link rel="icon" href="assets/icon.svg">
`;
const back = `<a class="back-app" href="./" aria-label="Retour à Géoconomic" title="Retour à Géoconomic"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></a>`;
const css = `.back-app { display: grid; place-items: center; width: 32px; height: 32px; margin-right: 2px; border-radius: 50%; color: var(--text); background: rgba(255, 255, 255, .07); flex: none; }
.back-app:hover { background: rgba(255, 255, 255, .14); }
</style>`;
const once = (s, a, b) => { if (s.split(a).length !== 2) throw new Error("introuvable : " + a); return s.replace(a, b); };
html = once(html, `<meta charset="utf-8">\n`, head + `<meta charset="utf-8">\n`);
html = once(html, `    <div class="brand">\n`, `    <div class="brand">\n      ${back}\n`);
html = html.replace(/<\/style>(?![\s\S]*<\/style>)/, css);
fs.writeFileSync("duel.html", html.replace("<html lang=\"fr\">\n", "<html lang=\"fr\">\n<!-- Généré par tools/build-duel.mjs depuis prototypes/jeu-quiz.html : ne pas modifier à la main. -->\n"));
console.log("duel.html prêt.");
