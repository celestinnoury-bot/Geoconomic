// Gère l'accès à Géoconomic+ (data/plus.js) : codes à offrir et proches invités.
// Les codes et les e-mails ne sont jamais écrits en clair : seulement leur empreinte (SHA-256).
// Usage :
//   node tools/plus.mjs code FAMILLE2026 "Famille et amis" [AAAA-MM-JJ]   ajoute un code (date de fin facultative)
//   node tools/plus.mjs invite prenom.nom@exemple.fr "Maman"              ajoute un proche (seuls l'empreinte de l'e-mail et le libellé sont publiés)
//   node tools/plus.mjs retirer FAMILLE2026 | prenom.nom@exemple.fr       retire un code ou un proche
//   node tools/plus.mjs liste                                              affiche les libellés
//   node tools/plus.mjs paiement mensuel https://…  |  annuel https://…   lien de paiement (Stripe, Lemon Squeezy…)
import fs from "fs";
import vm from "vm";
import path from "path";
import crypto from "crypto";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const FILE = path.join(ROOT, "data/plus.js");
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(FILE, "utf8"), ctx);
const P = ctx.window.GEOCO.plus;
// Même règle que dans l'appli : un code en majuscules sans espaces, un e-mail en minuscules.
const hashCode = (c) => crypto.createHash("sha256").update("code:" + String(c).trim().toUpperCase().replace(/\s+/g, "")).digest("hex");
const hashMail = (m) => crypto.createHash("sha256").update("mail:" + String(m).trim().toLowerCase()).digest("hex");

const [cmd, a, b, c] = process.argv.slice(2);
if (cmd === "code" && a) {
  P.codes = P.codes.filter((x) => x.h !== hashCode(a));
  P.codes.push(Object.assign({ h: hashCode(a), label: b || "Code offert" }, c ? { jusqua: c } : {}));
  console.log(`Code ajouté : « ${b || "Code offert"} »${c ? ` jusqu'au ${c}` : ""}. À donner tel quel : ${a.trim().toUpperCase()}`);
} else if (cmd === "invite" && a) {
  P.invites = P.invites.filter((x) => x.h !== hashMail(a));
  P.invites.push({ h: hashMail(a), label: b || "Proche" });
  console.log(`Proche ajouté (« ${b || "Proche"} ») : il ou elle tape son e-mail sur la page Géoconomic+.`);
} else if (cmd === "retirer" && a) {
  const n = P.codes.length + P.invites.length;
  P.codes = P.codes.filter((x) => x.h !== hashCode(a));
  P.invites = P.invites.filter((x) => x.h !== hashMail(a));
  console.log(n === P.codes.length + P.invites.length ? "Rien trouvé à retirer." : "Retiré.");
} else if (cmd === "paiement" && (a === "mensuel" || a === "annuel") && b) {
  P.paiement[a] = b;
  console.log(`Lien de paiement ${a} enregistré.`);
} else if (cmd === "liste") {
  console.log("Codes :", P.codes.map((x) => x.label + (x.jusqua ? ` (jusqu'au ${x.jusqua})` : "")).join(", ") || "aucun");
  console.log("Proches :", P.invites.map((x) => x.label).join(", ") || "aucun");
  process.exit(0);
} else {
  console.log(fs.readFileSync(new URL(import.meta.url), "utf8").split("\n").slice(0, 9).join("\n"));
  process.exit(1);
}
fs.writeFileSync(FILE, `// Géoconomic+ : prix, liens de paiement, codes offerts et proches invités.
// Ne pas modifier les listes à la main : utiliser node tools/plus.mjs (les codes et e-mails n'y sont qu'en empreinte).
// Prototype : tant que le paiement et les comptes ne sont pas branchés, l'accès est mémorisé sur l'appareil.
window.GEOCO = window.GEOCO || {};
window.GEOCO.plus = ${JSON.stringify(P, null, 2)};
`);
