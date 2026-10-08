// Rubrique « Conflits » : guerre, paix et économie de la défense.
// Quatre sources, chacune avec son rythme de mise à jour :
//  - CrisisWatch (International Crisis Group) : chaque mois, ce qui s'aggrave, s'améliore, et les alertes ;
//  - UCDP (université d'Uppsala) : chaque année (juin), tous les conflits armés depuis 1946 ;
//  - ACLED : chaque semaine les événements, chaque année (décembre) l'indice et la liste à surveiller ;
//  - SIPRI : chaque année, dépenses militaires (avril) et ventes d'armes (mars).
// Les [n] renvoient à `sources`. Codes pays : ISO 3166 numérique (comme data/indicators.js).

window.GEOCO = window.GEOCO || {};
window.GEOCO.conflits = {
  updated: "2026-10-08",

  // ---------- Baromètre du mois (CrisisWatch) ----------
  barometre: {
    month: "Septembre 2026",
    published: "début octobre 2026",
    counts: { worse: 5, better: 0, alerts: 7 },
    intro: "En septembre, CrisisWatch n'a relevé aucune amélioration dans le monde, mais cinq situations qui s'aggravent et sept alertes pour octobre [1].",
    worse: [
      { iso: "231", name: "Éthiopie", text: "Le Front de libération du peuple du Tigré (TPLF) a lancé une offensive contre l'armée fédérale, replongeant le pays dans la guerre. L'armée a contre-attaqué le 28 septembre et repris la ville d'Alamata [1]." },
      { iso: "887", name: "Yémen", text: "Les Houthis ont infligé une lourde défaite aux forces gouvernementales soutenues par Riyad, lors d'une avancée éclair le long de la côte de la mer Rouge [1]." },
      { iso: "682", name: "Arabie saoudite", text: "Le 8 septembre, les Houthis ont frappé plusieurs sites en Arabie saoudite, dont des installations pétrolières d'Aramco : 73 blessés, leur attaque la plus lourde depuis la reprise du conflit [11]." },
      { iso: "586", name: "Pakistan", text: "Après un attentat meurtrier à Kohat le 18 septembre, Islamabad a bombardé des cibles en Afghanistan les 21 et 24 septembre, ses premières frappes depuis juin [12]." },
      { iso: "004", name: "Afghanistan", text: "Les frappes pakistanaises ont relancé les affrontements directs avec les talibans au pouvoir à Kaboul, après près de trois mois d'accalmie [12]." }
    ],
    alerts: [
      { iso: "232", name: "Érythrée", text: "Risque d'être entraînée dans la guerre qui a repris dans le nord de l'Éthiopie, à sa frontière [1]." },
      { iso: "364", name: "Iran", text: "Placé sous alerte pour octobre par CrisisWatch [1]." }
    ],
    economy: "Pourquoi ça compte pour l'économie : quatre de ces points chauds (Yémen, Arabie saoudite, Iran, Érythrée) bordent la mer Rouge ou le golfe Persique, par où passe une grande partie du pétrole et du commerce entre l'Asie et l'Europe."
  },

  // ---------- Carte : couches du globe ----------
  // v : 3 = s'aggrave ce mois-ci, 2 = alerte pour le mois suivant, 1 = guerre ou conflit entre États en 2025 (UCDP).
  map: {
    legend: [
      { v: 3, label: "S'aggrave en septembre (CrisisWatch)", color: "#e5484d" },
      { v: 2, label: "Alerte pour octobre (CrisisWatch)", color: "#f5a524" },
      { v: 1, label: "Guerre ou conflit entre États en 2025 (UCDP)", color: "#8e6bd8" }
    ],
    countries: {
      "231": { v: 3, t: "S'aggrave : reprise de la guerre au Tigré" },
      "887": { v: 3, t: "S'aggrave : offensive houthie sur la côte" },
      "682": { v: 3, t: "S'aggrave : frappes houthies sur Aramco" },
      "586": { v: 3, t: "S'aggrave : frappes en Afghanistan" },
      "004": { v: 3, t: "S'aggrave : affrontements avec le Pakistan" },
      "232": { v: 2, t: "Alerte : risque d'extension de la guerre en Éthiopie" },
      "364": { v: 2, t: "Alerte pour octobre ; guerre avec Israël en 2025" },
      "643": { v: 1, t: "Guerre Russie-Ukraine" },
      "804": { v: 1, t: "Guerre Russie-Ukraine" },
      "376": { v: 1, t: "Guerre avec l'Iran, conflit avec la Syrie" },
      "760": { v: 1, t: "Conflit avec Israël" },
      "356": { v: 1, t: "Conflit avec le Pakistan" },
      "729": { v: 1, t: "Guerre entre l'armée et les FSR" }
    },
    names: {
      "231": "Éthiopie", "887": "Yémen", "682": "Arabie saoudite", "586": "Pakistan", "004": "Afghanistan",
      "232": "Érythrée", "364": "Iran", "643": "Russie", "804": "Ukraine", "376": "Israël", "760": "Syrie",
      "356": "Inde", "729": "Soudan"
    }
  },

  // ---------- Depuis 1946 (UCDP) ----------
  ucdp: {
    statement: "En 2025, l'UCDP a recensé 65 conflits impliquant des États : un record depuis le début de ses données, en 1946 [2].",
    figures: [
      { value: "65", label: "conflits impliquant des États en 2025, un record depuis 1946", src: 2 },
      { value: "13", label: "guerres (plus de 1 000 morts au combat dans l'année)", src: 2 },
      { value: "8", label: "conflits entre États, un nombre qui double pour la deuxième année", src: 2 },
      { value: "≈ 244 600", label: "morts dans des violences organisées en 2025, le plus haut depuis 1994", src: 3 }
    ],
    text: [
      "Parmi les conflits entre États de 2025 : la Russie contre l'Ukraine, l'Iran contre Israël, l'Inde contre le Pakistan, Israël contre la Syrie [2].",
      "Le précédent record datait de l'année d'avant : 61 conflits en 2024, après 59 en 2023 [4].",
      "La guerre Russie-Ukraine a causé à elle seule 62 % des morts au combat dans le monde [3].",
      "La hausse des morts vient surtout des violences contre les civils, qui ont plus que quadruplé, en grande partie au Soudan, notamment à El Fasher [3]."
    ],
    chart: {
      kind: "chart", type: "bar",
      title: "Toujours plus de conflits",
      subtitle: "Nombre de conflits impliquant au moins un État, chaque année",
      xLabel: "Année", unit: "Conflits", suffix: "", decimals: 0,
      data: [["2023", 59], ["2024", 61], ["2025", 65]],
      source: "UCDP, université d'Uppsala"
    }
  },

  // ---------- À surveiller (ACLED) ----------
  acled: {
    intro: "Chaque décembre, ACLED publie son indice des conflits et une liste des zones à surveiller pour l'année suivante. Pour 2026 [5] :",
    watchlist: ["Israël et Moyen-Orient", "Birmanie", "Syrie", "Équateur", "Soudan", "Pakistan", "Amérique latine et Caraïbes", "Ukraine", "Mer Rouge", "Sahel"],
    note: "ACLED classe chaque pays selon quatre critères : le nombre de morts, le danger pour les civils, l'étendue des violences sur le territoire et le nombre de groupes armés [5]."
  },

  // ---------- Guerre et économie (SIPRI) ----------
  sipri: {
    statement: "En 2025, le monde a dépensé 2 887 milliards de dollars pour ses armées, un record et la onzième hausse d'affilée [6].",
    figures: [
      { value: "2 887 Md$", label: "de dépenses militaires mondiales en 2025", src: 6 },
      { value: "2,5 %", label: "du PIB mondial", src: 6 },
      { value: "+14 %", label: "en Europe, à 864 milliards de dollars", src: 8 },
      { value: "40 %", label: "de son PIB : l'effort de guerre de l'Ukraine", src: 8 }
    ],
    text: [
      "Les États-Unis restent de très loin le premier budget militaire, avec 954 milliards de dollars, un tiers du total mondial, même s'ils ont réduit leurs dépenses de 7,5 % [6].",
      "L'Europe réarme à un rythme inédit : l'Allemagne a augmenté ses dépenses de 24 %, à 114 milliards de dollars, et dépasse 2 % de son PIB pour la première fois depuis 1990 [8].",
      "Côté ventes d'armes, les États-Unis fournissent 42 % des exportations mondiales sur 2021-2025. La France est deuxième, devant la Russie, dont les ventes s'effondrent [9][10]."
    ],
    // « Pour se rendre compte » : les dépenses militaires mondiales comparées à d'autres montants.
    compare: [
      "Les 2 887 milliards de dollars dépensés en 2025 pour les armées représentent près de 90 fois l'appel humanitaire mondial de l'ONU pour 2026 (33 milliards de dollars pour aider 135 millions de personnes) [13].",
      "C'est plus que toute la richesse produite en un an par l'Italie (environ 2 400 milliards de dollars de PIB en 2025), et presque autant que celle de la France (environ 3 300 milliards) [15].",
      "C'est environ un tiers de ce que le monde consacre à la santé : 9 800 milliards de dollars en 2021, dernier total publié par l'Organisation mondiale de la santé [14]."
    ],
    spendChart: {
      kind: "chart", type: "bar",
      title: "Les plus gros budgets militaires",
      subtitle: "Dépenses militaires en 2025, en milliards de dollars",
      xLabel: "Pays", unit: "Milliards de dollars", suffix: " Md$", decimals: 0,
      data: [["États-Unis", 954], ["Chine", 336], ["Russie", 190], ["Allemagne", 114], ["Inde", 92], ["Royaume-Uni", 89], ["Ukraine", 84.1], ["France", 68]],
      source: "SIPRI, avril 2026 (Chine et Russie : estimations)"
    },
    armsChart: {
      kind: "chart", type: "bar",
      title: "Qui vend des armes au monde ?",
      subtitle: "Part des exportations mondiales d'armes lourdes, 2021-2025",
      xLabel: "Pays", unit: "Part (%)", suffix: " %",
      data: [["États-Unis", 42], ["France", 9.8], ["Russie", 6.8], ["Allemagne", 5.7], ["Chine", 5.6]],
      source: "SIPRI, mars 2026"
    }
  },

  sources: [
    { short: "CrisisWatch", name: "International Crisis Group, « CrisisWatch: September Trends and October Alerts 2026 »", url: "https://www.crisisgroup.org/crisiswatch/september-trends-and-october-alerts-2026" },
    { short: "UCDP", name: "Université d'Uppsala, « UCDP: record number of conflicts between states » (9 juin 2026)", url: "https://www.uu.se/en/press/press-releases/2026/2026-06-09-ucdp-record-number-of-conflicts-between-states" },
    { short: "Journal of Peace Research", name: "UCDP, « Organized violence 1989–2025 », Journal of Peace Research (2026)", url: "https://academic.oup.com/jpr/article/63/4/705/8703754" },
    { short: "Journal of Peace Research", name: "UCDP, « Organized violence 1989–2024 », Journal of Peace Research (2025)", url: "https://academic.oup.com/jpr/article/62/4/1223/8324565" },
    { short: "ACLED", name: "ACLED, « Conflict Index & 2026 Watchlist »", url: "https://acleddata.com/conflict-index-2026-watchlist" },
    { short: "SIPRI", name: "SIPRI, « Global military spending rise continues as European and Asian expenditures surge » (27 avril 2026)", url: "https://www.sipri.org/media/press-release/2026/global-military-spending-rise-continues-european-and-asian-expenditures-surge" },
    { short: "Al Jazeera", name: "Al Jazeera, « Five charts that show the rise of global militarisation » (29 avril 2026), d'après le SIPRI", url: "https://www.aljazeera.com/news/2026/4/29/five-charts-that-show-the-rise-of-global-militarisation" },
    { short: "WAM", name: "WAM, « Europe drives increase in global military spending in 2025 », d'après le SIPRI", url: "https://www.wam.ae/en/article/bzxeepm-europe-drives-increase-global-military-spending" },
    { short: "SIPRI", name: "SIPRI, « Trends in International Arms Transfers, 2025 » (mars 2026)", url: "https://www.sipri.org/sites/default/files/2026-03/fs_2603_at_2025.pdf" },
    { short: "Defaiya", name: "Defaiya, « SIPRI: US, France, Russia Top Global Arms Exporters in 2021-2025 » (12 mars 2026)", url: "https://www.defaiya.com/news/Defense%20News/North%20America/2026/03/12/sipri-us-france-russia-top-global-arms-exporters-in-2021-2025" },
    { short: "NPR", name: "NPR, « Houthi attacks on Saudi Arabia ignite fires at oil facilities and wound 73 people » (8 sept. 2026)", url: "https://www.npr.org/2026/09/08/g-s1-142296/houthi-attacks-saudi-arabia" },
    { short: "Long War Journal", name: "FDD's Long War Journal, « Fighting between Pakistan and the Taliban persists into second week » (sept. 2026)", url: "https://www.longwarjournal.org/archives/2026/09/fighting-between-pakistan-and-the-taliban-persists-into-second-week.php" },
    { short: "ONU Info", name: "ONU Info, lancement de l'appel humanitaire mondial 2026 de 33 milliards de dollars (8 déc. 2025)", url: "https://news.un.org/en/story/2025/12/1166526" },
    { short: "OMS", name: "Organisation mondiale de la santé, Global health expenditure report 2023 (dépenses de 2021), via P4H", url: "https://p4h.world/en/documents/global-health-expenditure-report-2023/" },
    { short: "StatRanker", name: "StatRanker, « Largest Economies by Nominal GDP 2025 » (données du FMI)", url: "https://statranker.org/economy/top-10-largest-economies-by-nominal-gdp-2025/" }
  ]
};
