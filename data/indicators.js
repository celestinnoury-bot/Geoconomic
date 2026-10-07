// Indicateurs économiques par pays, affichés sur le globe de l'onglet « Chiffres ».
// Clés des valeurs : codes ISO 3166 numériques (les mêmes que data/countries.js).
// `d` = période de la donnée. À mettre à jour quand de nouveaux chiffres sortent.
//
// Couleurs : une seule teinte par indicateur, du plus sombre (faible) au plus clair (élevé).
// `bins` = seuils entre les classes de couleur.

window.GEOCO = window.GEOCO || {};
window.GEOCO.indicators = {
  updated: "2026-10-07",
  // Noms des pays en français (les autres s'affichent avec leur nom anglais Natural Earth).
  names: {
    "840": "États-Unis", "250": "France", "276": "Allemagne", "380": "Italie", "724": "Espagne", "300": "Grèce",
    "826": "Royaume-Uni", "124": "Canada", "484": "Mexique", "643": "Russie", "410": "Corée du Sud", "360": "Indonésie",
    "682": "Arabie saoudite", "710": "Afrique du Sud", "036": "Australie", "156": "Chine", "392": "Japon", "356": "Inde",
    "076": "Brésil", "792": "Turquie", "032": "Argentine", "608": "Philippines", "566": "Nigeria", "818": "Égypte",
    "364": "Iran", "784": "Émirats arabes unis", "804": "Ukraine", "616": "Pologne", "528": "Pays-Bas", "756": "Suisse"
  },
  list: [
    {
      id: "inflation",
      label: "Inflation",
      title: "L'inflation dans le monde",
      explain: "Hausse des prix sur un an : combien un même panier de courses coûte de plus qu'il y a douze mois.",
      unit: "%",
      bins: [2, 3, 4, 6],
      colors: ["#4a2c16", "#7d4419", "#b65d1f", "#ec8a3a", "#ffc47e"],
      note: "Dernier chiffre publié par chaque pays (inflation sur un an). En zone euro, l'inflation a atteint 3,8 % en septembre, tirée par l'énergie (+18,8 %).",
      sources: [
        { short: "Trading Economics", name: "Trading Economics, inflation des pays du G20 (compilation des instituts nationaux, consultée le 7 oct. 2026)", url: "https://tradingeconomics.com/country-list/inflation-rate?continent=g20" },
        { short: "Philstar", name: "Philstar, « Philippine inflation jumps to 7.2% in September 2026 » (6 oct. 2026)", url: "https://www.philstar.com/business/2026/10/06/2561305/philippine-inflation-jumps-72-september-2026" },
        { short: "To Vima", name: "To Vima, « Inflation in Greece jumps to 5.1% in September »", url: "https://www.tovima.com/finance/inflation-in-greece-jumps-to-5-1-in-september/" }
      ],
      values: {
        "840": { v: 3.4, d: "août 2026" },
        "250": { v: 3.0, d: "sept. 2026" },
        "276": { v: 3.3, d: "sept. 2026" },
        "380": { v: 4.2, d: "sept. 2026" },
        "724": { v: 4.9, d: "sept. 2026" },
        "300": { v: 5.1, d: "sept. 2026", s: 3 },
        "826": { v: 3.1, d: "août 2026" },
        "124": { v: 3.0, d: "août 2026" },
        "484": { v: 3.3, d: "août 2026" },
        "643": { v: 6.3, d: "août 2026" },
        "410": { v: 2.9, d: "sept. 2026" },
        "360": { v: 3.3, d: "sept. 2026" },
        "682": { v: 1.8, d: "août 2026" },
        "710": { v: 4.4, d: "août 2026" },
        "036": { v: 4.0, d: "août 2026" },
        "156": { v: 0.8, d: "août 2026" },
        "392": { v: 1.9, d: "août 2026" },
        "356": { v: 4.8, d: "août 2026" },
        "076": { v: 4.2, d: "août 2026" },
        "792": { v: 29.7, d: "sept. 2026" },
        "032": { v: 33.5, d: "août 2026" },
        "608": { v: 7.2, d: "sept. 2026", s: 2 }
      }
    },
    {
      id: "chomage",
      label: "Chômage",
      title: "Le chômage dans le monde",
      explain: "Part des personnes qui cherchent un emploi sans en trouver, parmi celles qui travaillent ou veulent travailler.",
      unit: "%",
      bins: [3, 5, 7, 10],
      colors: ["#2e2352", "#47367f", "#644dad", "#8f74dc", "#c3aeff"],
      note: "Dernier chiffre publié par chaque pays. Attention : chaque institut a sa méthode (l'Allemagne publie par exemple un taux « national » plus élevé que le taux au sens du BIT), les comparaisons sont donc approximatives.",
      sources: [
        { short: "Trading Economics", name: "Trading Economics, chômage des pays du G20 (compilation des instituts nationaux, consultée le 7 oct. 2026)", url: "https://tradingeconomics.com/country-list/unemployment-rate?continent=g20" }
      ],
      values: {
        "840": { v: 4.1, d: "juil. 2026" },
        "250": { v: 8.3, d: "juin 2026" },
        "276": { v: 6.4, d: "juil. 2026" },
        "380": { v: 6.2, d: "août 2026" },
        "724": { v: 9.9, d: "juin 2026" },
        "826": { v: 4.9, d: "juil. 2026" },
        "124": { v: 6.4, d: "août 2026" },
        "484": { v: 2.9, d: "juin 2026" },
        "643": { v: 2.2, d: "août 2026" },
        "410": { v: 2.8, d: "juil. 2026" },
        "360": { v: 4.7, d: "mars 2026" },
        "682": { v: 3.1, d: "mars 2026" },
        "710": { v: 33.6, d: "juin 2026" },
        "036": { v: 4.6, d: "août 2026" },
        "156": { v: 5.2, d: "juil. 2026" },
        "392": { v: 2.5, d: "juin 2026" },
        "356": { v: 5.0, d: "août 2026" },
        "076": { v: 5.4, d: "juin 2026" },
        "792": { v: 7.8, d: "août 2026" },
        "032": { v: 7.9, d: "juin 2026" }
      }
    },
    {
      id: "croissance",
      label: "Croissance",
      title: "La croissance dans le monde",
      explain: "Hausse prévue du PIB en 2026 : de combien la production de richesses du pays devrait augmenter sur l'année.",
      unit: "%",
      bins: [1, 2, 3, 5],
      colors: ["#123b37", "#1a5c54", "#22857a", "#3db7a1", "#8de6ce"],
      note: "Prévisions du FMI pour 2026 (mise à jour de juillet 2026). Croissance mondiale prévue : 3,0 %. Pour le Mexique, l'Afrique du Sud, l'Argentine et l'Indonésie, ce sont les prévisions d'avril 2026.",
      sources: [
        { short: "FMI", name: "FMI, Perspectives de l'économie mondiale, mise à jour de juillet 2026", url: "https://www.imf.org/en/news/articles/2026/07/08/tr070826-weo-press-briefing-transcript-july-8-2026" },
        { short: "Euronews", name: "Euronews, « IMF forecasts modest growth for Italy, cuts estimates for France and Germany » (8 juil. 2026)", url: "https://www.euronews.com/business/2026/07/08/economy-imf-forecasts-modest-growth-for-italy-cuts-estimates-for-france-and-germany" },
        { short: "FMI (avril)", name: "FMI, Perspectives de l'économie mondiale, avril 2026", url: "https://www.imf.org/en/publications/weo/issues/2026/04/14/world-economic-outlook-april-2026" }
      ],
      values: {
        "840": { v: 2.3, d: "prévision 2026" },
        "250": { v: 0.6, d: "prévision 2026", s: 2 },
        "276": { v: 0.7, d: "prévision 2026", s: 2 },
        "380": { v: 0.5, d: "prévision 2026", s: 2 },
        "724": { v: 2.1, d: "prévision 2026", s: 2 },
        "826": { v: 1.0, d: "prévision 2026" },
        "392": { v: 0.6, d: "prévision 2026" },
        "124": { v: 1.1, d: "prévision 2026" },
        "156": { v: 4.6, d: "prévision 2026" },
        "356": { v: 6.4, d: "prévision 2026" },
        "643": { v: 1.1, d: "prévision 2026" },
        "076": { v: 2.4, d: "prévision 2026" },
        "682": { v: 1.7, d: "prévision 2026" },
        "566": { v: 4.1, d: "prévision 2026" },
        "484": { v: 1.6, d: "prévision 2026 (avril)", s: 3 },
        "710": { v: 1.0, d: "prévision 2026 (avril)", s: 3 },
        "032": { v: 3.5, d: "prévision 2026 (avril)", s: 3 },
        "360": { v: 5.0, d: "prévision 2026 (avril)", s: 3 }
      }
    }
  ]
};
