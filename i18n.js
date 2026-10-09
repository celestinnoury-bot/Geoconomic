// Langue et région du lecteur.
// - Langue : celle du téléphone (navigator.languages), sinon le français ; modifiable en bas de page.
//   Les traductions sont dans data/i18n/<langue>.js : `ui` (textes de l'interface, « {n} » = partie
//   variable) et `content` (actus, cours… repérés par leur chemin, voir tools/i18n-extract.mjs).
// - Région : déduite du fuseau horaire du téléphone, pour mettre en avant les actus de sa zone.
// Ce fichier est chargé avant les données et app.js.
(function () {
  "use strict";

  const LANGS = { fr: "Français", en: "English", es: "Español", de: "Deutsch", it: "Italiano", pt: "Português" };
  const REGIONS = ["Europe", "Amériques", "Moyen-Orient", "Afrique", "Asie"];
  const LKEY = "geoco.lang", RKEY = "geoco.region";
  const get = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const put = (k, v) => { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch (e) {} };

  // ?lang=en dans l'adresse force une langue (pratique pour partager ou tester).
  try {
    const q = new URLSearchParams(location.search).get("lang");
    if (q && LANGS[q]) put(LKEY, q);
  } catch (e) {}

  const prefs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "fr"]).map(String);
  function detectLang() {
    const saved = get(LKEY);
    if (saved && LANGS[saved]) return saved;
    for (const l of prefs) { const b = l.slice(0, 2).toLowerCase(); if (LANGS[b]) return b; }
    return "fr";
  }
  const lang = detectLang();
  // Locale pour les dates et les nombres : celle du téléphone si elle correspond à la langue (en-US, pt-BR…).
  const DEFAULT_LOCALE = { fr: "fr-FR", en: "en-US", es: "es-ES", de: "de-DE", it: "it-IT", pt: "pt-PT" };
  const locale = prefs.find((l) => l.slice(0, 2).toLowerCase() === lang && l.length > 2) || DEFAULT_LOCALE[lang];

  // Région d'après le fuseau horaire (aucune autorisation de localisation demandée).
  const MIDDLE_EAST = /^Asia\/(Tehran|Riyadh|Dubai|Baghdad|Beirut|Jerusalem|Tel_Aviv|Damascus|Amman|Kuwait|Qatar|Bahrain|Muscat|Aden|Gaza|Hebron|Famagusta|Nicosia)$/;
  function detectRegion() {
    const saved = get(RKEY);
    if (saved && REGIONS.includes(saved)) return saved;
    let tz = "";
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) {}
    if (MIDDLE_EAST.test(tz)) return "Moyen-Orient";
    if (/^America\//.test(tz) || /^(Atlantic\/(Bermuda|Stanley|South_Georgia)|Pacific\/(Galapagos|Easter))$/.test(tz)) return "Amériques";
    if (/^(Africa\/|Indian\/(Reunion|Mayotte|Mauritius|Comoro|Antananarivo|Mahe)|Atlantic\/(Cape_Verde|St_Helena))/.test(tz)) return "Afrique";
    if (/^(Asia\/|Australia\/|Pacific\/|Indian\/)/.test(tz)) return "Asie";
    if (/^(Europe\/|Atlantic\/)/.test(tz)) return "Europe";
    // Sans fuseau : la région de la langue (es-MX, pt-BR, en-US… → Amériques).
    const r = (prefs[0].split("-")[1] || "").toUpperCase();
    if (/^(US|CA|MX|BR|AR|CO|CL|PE|VE|EC|BO|PY|UY|CU|DO|GT|HN|SV|NI|CR|PA|PR|HT)$/.test(r)) return "Amériques";
    if (/^(SA|AE|QA|KW|BH|OM|YE|IQ|IR|SY|LB|JO|IL|PS)$/.test(r)) return "Moyen-Orient";
    if (/^(MA|DZ|TN|EG|SN|CI|CM|NG|KE|ZA|ET|GH|ML|BF|NE|TD|CD|CG|GA|MG)$/.test(r)) return "Afrique";
    if (/^(CN|JP|KR|IN|ID|VN|TH|PH|MY|SG|PK|BD|AU|NZ|TW|HK)$/.test(r)) return "Asie";
    return "Europe";
  }
  let region = detectRegion();

  document.documentElement.lang = lang;
  // Le fichier de langue est chargé tout de suite, avant les données et app.js.
  if (lang !== "fr") document.write(`<script src="data/i18n/${lang}.js"><\/script>`);

  // ---------- Contenu : remplace les textes français par leur traduction, chemin par chemin ----------
  // Chemin : <liste>.<id>.<clé>.<position>… (news, dossiers…) ou <objet>.<clé>… (indicators, conflits…).
  const LISTS = { news: (G) => G.news, dossiers: (G) => G.dossiers, glossary: (G) => G.glossary, culture: (G) => G.culture,
    anecdotes: (G) => G.anecdotes, focus: (G) => G.focus, cas: (G) => G.etudes && G.etudes.cas };
  const OBJECTS = { indicators: (G) => G.indicators, conflits: (G) => G.conflits, auteur: (G) => G.auteur, offre: (G) => G.etudes && G.etudes.offre };
  function applyContent(G) {
    const T = window.GEOCO_I18N;
    if (!T || !T.content || !G) return 0;
    let n = 0;
    const byId = {};
    for (const [path, text] of Object.entries(T.content)) {
      const parts = path.split(".");
      let node;
      if (LISTS[parts[0]]) {
        const list = LISTS[parts[0]](G);
        if (!list) continue;
        const key = parts[0];
        byId[key] = byId[key] || new Map(list.map((x) => [x.id, x]));
        node = byId[key].get(parts[1]);
        parts.splice(0, 2);
      } else if (OBJECTS[parts[0]]) {
        node = OBJECTS[parts[0]](G);
        parts.splice(0, 1);
      }
      for (let i = 0; node && i < parts.length - 1; i++) node = node[parts[i]];
      const last = parts[parts.length - 1];
      if (node && typeof node[last] === "string") { node[last] = text; n++; }
    }
    // Les dates des chiffres (« août 2026 ») : mois traduits.
    if (T.months && G.indicators) {
      // Formules entières d'abord (« prévision 2026 (FMI, avril 2026) », « T2 2026 »), sinon mois par mois.
      const tr = (s) => translate(s) || String(s).replace(/[a-zéû]+\.?/gi, (w) => T.months[w.toLowerCase()] || w);
      (G.indicators.list || []).forEach((ind) => Object.values(ind.values || {}).forEach((d) => { if (d.d) d.d = tr(d.d); }));
      // Tableau de bord : dates (« septembre 2026 ») et nombres (« 3,8 % » → « 3.8% » en anglais).
      (G.indicators.latest || []).forEach((x) => {
        if (x.date) x.date = tr(x.date);
        if (lang === "en" && x.value) x.value = x.value.replace(/(\d),(\d)/g, "$1.$2").replace(/(\d) %/g, "$1%");
      });
    }
    return n;
  }

  // Noms de pays dans la langue du lecteur (Intl.DisplayNames + data/iso2.js).
  let displayNames = null;
  try { if (lang !== "fr" && Intl.DisplayNames) displayNames = new Intl.DisplayNames([locale, lang], { type: "region" }); } catch (e) {}
  function countryName(iso, fallback) {
    const a2 = window.GEOCO_ISO2 && window.GEOCO_ISO2[iso];
    if (displayNames && a2) { try { return displayNames.of(a2) || fallback; } catch (e) {} }
    return fallback;
  }

  // ---------- Interface : traduction des textes affichés ----------
  let exact = null, patterns = [];
  const norm = (s) => s.replace(/\s+/g, " ").trim();
  function prepare() {
    exact = new Map();
    patterns = [];
    const ui = (window.GEOCO_I18N && window.GEOCO_I18N.ui) || {};
    for (const [k, v] of Object.entries(ui)) {
      if (!/\{\w+\}/.test(k)) { exact.set(norm(k), v); continue; }
      const names = [];
      const src = k.split(/(\{\w+\})/).map((part) => {
        const m = part.match(/^\{(\w+)\}$/);
        if (m) { names.push(m[1]); return "(.+?)"; }
        return part.replace(/[.*+?^$()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
      }).join("");
      patterns.push({ re: new RegExp("^" + src + "$"), names, out: v });
    }
  }
  function translate(text) {
    if (lang === "fr") return null;
    if (!exact) prepare();
    const key = norm(text);
    if (!key || !/[A-Za-zÀ-ÿ]/.test(key)) return null;
    if (exact.has(key)) return exact.get(key);
    for (const p of patterns) {
      const m = key.match(p.re);
      if (m) return p.out.replace(/\{(\w+)\}/g, (_, name) => { const i = p.names.indexOf(name); return i >= 0 ? (translate(m[i + 1]) || m[i + 1]) : ""; });
    }
    return null;
  }
  const t = (s) => translate(s) || s;
  const ATTRS = ["aria-label", "placeholder", "title", "alt"];
  function translateTree(root) {
    if (lang === "fr" || !root) return;
    if (root.nodeType === 3) {
      const out = translate(root.nodeValue);
      if (out != null) {
        const lead = root.nodeValue.match(/^\s*/)[0], trail = root.nodeValue.match(/\s*$/)[0];
        root.nodeValue = lead + out + trail;
      }
      return;
    }
    if (root.nodeType !== 1 || root.tagName === "SCRIPT" || root.tagName === "STYLE") return;
    ATTRS.forEach((a) => { if (root.hasAttribute(a)) { const out = translate(root.getAttribute(a)); if (out != null) root.setAttribute(a, out); } });
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeType === 3) {
        const p = node.parentNode;
        if (p && (p.tagName === "SCRIPT" || p.tagName === "STYLE")) continue;
        const out = translate(node.nodeValue);
        if (out != null) {
          const lead = node.nodeValue.match(/^\s*/)[0], trail = node.nodeValue.match(/\s*$/)[0];
          node.nodeValue = lead + out + trail;
        }
      } else {
        ATTRS.forEach((a) => { if (node.hasAttribute(a)) { const out = translate(node.getAttribute(a)); if (out != null) node.setAttribute(a, out); } });
      }
    }
  }
  // Tout ce qui s'affiche ensuite (pages, fiches du globe, bulles…) est traduit au fil de l'eau.
  function watch() {
    if (lang === "fr" || !window.MutationObserver) return;
    translateTree(document.body);
    document.title = t(document.title);
    let queue = [];
    const obs = new MutationObserver((muts) => {
      muts.forEach((m) => {
        if (m.type === "characterData") queue.push(m.target);
        else m.addedNodes.forEach((n) => queue.push(n));
      });
      const list = queue; queue = [];
      list.forEach(translateTree);
    });
    obs.observe(document.body, { childList: true, subtree: true });
  }

  window.GeocoI18n = {
    LANGS, REGIONS, lang, locale,
    get region() { return region; },
    setLang(l) { put(LKEY, l === detectLangDefault() ? null : l); location.reload(); },
    setRegion(r) { region = r; put(RKEY, r); },
    applyContent, countryName, translate, t, watch,
    // Nom de la région dans la langue du lecteur.
    regionName: (r) => t(r)
  };
  function detectLangDefault() {
    for (const l of prefs) { const b = l.slice(0, 2).toLowerCase(); if (LANGS[b]) return b; }
    return "fr";
  }
})();
