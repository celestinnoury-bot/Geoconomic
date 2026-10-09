// Assemble les fichiers de langue data/i18n/<langue>.js à partir de contenu/traductions/<langue>/ :
//   ui.json              textes de l'interface et mois ({ "ui": {...}, "months": {...} })
//   contenu-*.json       textes du contenu, { chemin: traduction } (chemins : tools/i18n-extract.mjs)
// Les traductions d'éléments supprimés (vieilles actus…) sont écartées.
// Usage : node tools/i18n-build.mjs            (toutes les langues)
//         node tools/i18n-build.mjs --missing=en   (liste les textes pas encore traduits, en JSON)
import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
process.chdir(ROOT);
const source = JSON.parse(execFileSync("node", ["tools/i18n-extract.mjs"], { maxBuffer: 64e6 }).toString());
const DIR = "contenu/traductions";
const langs = fs.existsSync(DIR) ? fs.readdirSync(DIR).filter((l) => fs.statSync(path.join(DIR, l)).isDirectory()) : [];

function load(lang) {
  const dir = path.join(DIR, lang);
  const ui = fs.existsSync(path.join(dir, "ui.json")) ? JSON.parse(fs.readFileSync(path.join(dir, "ui.json"), "utf8")) : { ui: {}, months: {} };
  const content = {};
  fs.readdirSync(dir).filter((f) => /^contenu.*\.json$/.test(f)).sort().forEach((f) => Object.assign(content, JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"))));
  return { ui, content };
}

const missingArg = process.argv.find((a) => a.startsWith("--missing="));
if (missingArg) {
  const lang = missingArg.slice(10);
  const { content } = load(lang);
  const todo = Object.fromEntries(Object.entries(source).filter(([k]) => !(k in content)));
  process.stdout.write(JSON.stringify(todo, null, 1));
  process.exit(0);
}

fs.mkdirSync("data/i18n", { recursive: true });
for (const lang of langs) {
  const { ui, content } = load(lang);
  const kept = Object.fromEntries(Object.entries(content).filter(([k]) => k in source));
  const missing = Object.keys(source).filter((k) => !(k in content)).length;
  fs.writeFileSync(`data/i18n/${lang}.js`,
    `// Traduction (${lang}) générée par tools/i18n-build.mjs : ne pas modifier à la main, voir contenu/traductions/${lang}/.\n` +
    `window.GEOCO_I18N = ${JSON.stringify({ lang, ui: ui.ui || {}, months: ui.months || {}, content: Object.keys(kept).length ? kept : null })};\n`);
  console.log(`${lang} : ${Object.keys(ui.ui || {}).length} textes d'interface, ${Object.keys(kept).length} textes de contenu${missing ? `, ${missing} pas encore traduits` : ""}.`);
}
