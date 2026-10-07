// Fil d'actu quotidien.
// Une entrée = un événement du jour, expliqué simplement. Les plus récentes en premier.
//
// Sources : chaque fait chiffré ou rapporté est suivi de [n], qui renvoie à la n-ième
// source de la liste `sources` (en partant de 1). L'appli affiche « (Nom court) » dans
// le texte, avec un lien, et la liste complète en bas de page.
//
// `visuals` : cartes ("map") et graphiques ("chart") interactifs, voir viz.js.
// `image` (facultatif) : { src, alt, credit } pour une photo en tête d'article.
// `geo` : lieux [longitude, latitude] où l'actu apparaît sur le globe de l'accueil.
// `routes` (facultatif) : arcs tracés sur le globe depuis le premier lieu.

window.GEOCO = window.GEOCO || {};
window.GEOCO.news = [
  {
    id: "2026-10-07-gazole-reserves",
    date: "2026-10-07",
    theme: "eco",
    geo: [{ name: "Paris", coords: [2.35, 48.86] }],
    title: "La France ouvre ses réserves de gazole pour faire baisser les prix à la pompe",
    summary: "Le Premier ministre Sébastien Lecornu annonce la mise sur le marché de 10 millions de barils de gazole stockés par l'État, sur trois mois.",
    points: [
      "Le gazole coûte en moyenne 2,37 € le litre en France, un niveau record lié à la guerre au Moyen-Orient [4].",
      "L'État va puiser dans ses stocks stratégiques : 10 millions de barils, vendus à prix coûtant pendant trois mois [1].",
      "Objectif affiché : une baisse de 12 à 18 centimes par litre à la pompe [1]."
    ],
    why: [
      "Ce gazole a été acheté avant la flambée des prix. En le revendant à son prix d'achat, l'État injecte du carburant moins cher sur le marché, ce qui fait mécaniquement baisser les prix [1].",
      "La France n'agit pas seule. Le 2 octobre, les pays du G7 se sont mis d'accord pour libérer ensemble 100 millions de barils de pétrole et de gazole sur quatre mois, en coordination avec l'Agence internationale de l'énergie [3]. Selon Goldman Sachs, cela ne compenserait qu'environ la moitié de la flambée du gazole [3]."
    ],
    forMe: "Si tu roules au diesel, le plein d'un réservoir de 50 litres pourrait coûter 6 à 9 € de moins. Mais c'est une mesure temporaire : tant que le détroit d'Ormuz reste perturbé, les prix restent sous pression.",
    figures: [
      { value: "10 M", label: "de barils de gazole libérés par la France", src: 1 },
      { value: "2,37 €", label: "le prix moyen du litre de gazole en France début octobre", src: 4 },
      { value: "-12 à -18 c", label: "la baisse attendue par litre", src: 1 },
      { value: "100 M", label: "de barils libérés par l'ensemble du G7", src: 3 }
    ],
    visuals: [
      {
        kind: "chart",
        type: "bar",
        title: "Les barils libérés, à l'échelle",
        subtitle: "En millions de barils",
        xLabel: "Qui",
        unit: "Millions de barils",
        decimals: 0,
        data: [["France", 10], ["Tout le G7", 100]],
        source: "Boursorama ; The National (octobre 2026)"
      }
    ],
    culture: ["reserves-strategiques"],
    dossiers: ["routes-maritimes", "inflation-taux"],
    sources: [
      { short: "Boursorama", name: "Boursorama, « La France va libérer 10 millions de barils de gazole de ses réserves » (7 oct. 2026)", url: "https://www.boursorama.com/actualite-economique/actualites/la-france-va-liberer-10-million-de-barils-de-gazole-de-ses-reserves-dit-lecornu-5d78402d6440a6dedbd1248647cdd411" },
      { short: "franceinfo", name: "franceinfo, allocution du Premier ministre (7 oct. 2026)", url: "https://www.franceinfo.fr/politique/gouvernement-de-sebastien-lecornu/direct-lycees-carburants-budget-suivez-l-allocution-du-premier-ministre-sebastien-lecornu_8227246.html" },
      { short: "The National", name: "The National, « G7 members agree to release 100 million barrels » (2 oct. 2026)", url: "https://www.thenationalnews.com/business/energy/2026/10/02/g7-members-agree-to-release-100-million-barrels-of-diesel-and-other-reserves/" },
      { short: "AFP", name: "AFP via La DH, « Gazole : nouveau record du prix moyen à la pompe dans l'UE » (1er oct. 2026)", url: "https://www.dhnet.be/dernieres-depeches/2026/10/01/gazole-nouveau-record-du-prix-moyen-a-la-pompe-dans-lue-analyse-afp-de-donnees-officielles-DWX2HN25IRGE5BAFEKWZKVOPAI/" }
    ]
  },
  {
    id: "2026-10-07-ormuz",
    date: "2026-10-07",
    theme: "geo",
    geo: [{ name: "Détroit d'Ormuz", coords: [56.4, 26.5] }],
    // Routes du pétrole qui partent du Golfe (affichées en arcs sur le globe).
    routes: [
      { to: [121.5, 31.2], name: "vers la Chine" },
      { to: [139.7, 35.6], name: "vers le Japon" },
      { to: [72.9, 19.0], name: "vers l'Inde" },
      { to: [4.4, 51.9], name: "vers l'Europe" }
    ],
    title: "Ormuz : le pétrole repasse, mais la menace iranienne pèse toujours",
    summary: "Les exportations du Golfe repartent, mais l'Iran veut contrôler le détroit et faire payer les navires. Le baril de Brent reste au-dessus de 100 dollars.",
    points: [
      "Depuis les frappes américaines et israéliennes contre l'Iran à partir du 28 février 2026, Téhéran a bloqué ou menacé le détroit d'Ormuz [2].",
      "Un cessez-le-feu (avril) puis un accord en juin devaient rouvrir le passage, mais l'Iran veut désormais encaisser des « frais de passage » [2].",
      "Début octobre, le Brent dépasse encore 100 dollars le baril, même si les exportations du Golfe reprennent [3]."
    ],
    why: [
      "Avant le conflit, près de 20 millions de barils de pétrole passaient chaque jour par ce détroit, soit environ un cinquième de la consommation mondiale [1]. Au plus fort de la crise, le nombre de pétroliers desservant le Golfe s'est effondré de 95 % selon l'Organisation mondiale du commerce [2].",
      "Même quand les bateaux repassent, le risque coûte cher : les assurances explosent, les pétroliers manquent et les trajets s'allongent. C'est cette « prime de risque » qui maintient les prix hauts [3]."
    ],
    forMe: "C'est la cause directe des prix records à la pompe, et une des raisons pour lesquelles l'inflation repart. Tant qu'Ormuz n'est pas sécurisé, ton budget carburant et chauffage reste exposé.",
    figures: [
      { value: "> 100 $", label: "le prix du baril de Brent début octobre 2026", src: 3 },
      { value: "≈ 20 M", label: "de barils par jour passaient par Ormuz avant la guerre", src: 1 },
      { value: "-95 %", label: "de pétroliers vers le Golfe au plus fort de la crise", src: 2 }
    ],
    visuals: [
      {
        kind: "map",
        title: "Le détroit d'Ormuz et les routes de contournement",
        view: { center: [52, 25.5], span: 26 },
        highlight: ["Iran", "Oman", "United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Iraq", "Bahrain"],
        intro: "Touche un lieu pour zoomer. Les pays en couleur bordent le golfe Persique.",
        points: [
          { name: "Détroit d'Ormuz", coords: [56.4, 26.5], zoom: 6, text: "Une quarantaine de kilomètres de large au plus étroit, entre l'Iran et la péninsule omanaise de Musandam. Les navires y empruntent deux couloirs de circulation d'environ 3 km chacun." },
          { name: "Fujaïrah", coords: [56.33, 25.12], zoom: 8, text: "Port des Émirats situé après le détroit. Un oléoduc depuis Habshan permet d'y exporter une partie du pétrole émirien sans passer par Ormuz." },
          { name: "Yanbu", coords: [38.06, 24.09], zoom: 14, text: "Terminal saoudien sur la mer Rouge, au bout de l'oléoduc Est-Ouest qui traverse l'Arabie. C'est l'autre grande porte de sortie qui évite Ormuz… mais elle débouche près de Bab-el-Mandeb, une autre zone à risque." },
          { name: "Ras Tanura", coords: [50.16, 26.64], zoom: 8, text: "L'un des plus grands terminaux pétroliers du monde, sur la côte saoudienne du Golfe. Le pétrole chargé ici doit passer par Ormuz." }
        ],
        source: "Congressional Research Service ; Agence américaine d'information sur l'énergie (EIA)"
      }
    ],
    culture: ["cables-sous-marins"],
    dossiers: ["routes-maritimes", "sanctions"],
    sources: [
      { short: "CRS", name: "Congressional Research Service, « The Strait of Hormuz: Security Developments and Impacts on Oil, Gas, and Other Commodities »", url: "https://www.congress.gov/crs-product/R45281" },
      { short: "House of Commons Library", name: "House of Commons Library, « Israel/US-Iran conflict 2026: Reopening the Strait of Hormuz »", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10636/" },
      { short: "Gulf News", name: "Gulf News, « Oil prices split as Brent tops $102 » (5 oct. 2026)", url: "https://gulfnews.com/world/americas/oil-prices-split-as-brent-tops-102-murban-hits-110-per-barrel-on-oct-5-2026-1.500698305" }
    ]
  },
  {
    id: "2026-10-07-droits-de-douane",
    date: "2026-10-07",
    theme: "eco",
    title: "Droits de douane : le déficit commercial américain au plus haut depuis 2025",
    summary: "Malgré les droits de douane de Donald Trump, les États-Unis n'ont jamais autant importé depuis mars 2025. Et Washington rembourse des milliards aux importateurs.",
    geo: [
      { name: "Washington", coords: [-77.04, 38.9] },
      { name: "Pékin", coords: [116.4, 39.9] }
    ],
    points: [
      "En août, le déficit commercial des États-Unis a atteint 105,6 milliards de dollars, son plus haut niveau depuis mars 2025, juste avant les grandes hausses de droits de douane [1].",
      "En cause, notamment : les importations de matériel pour l'intelligence artificielle, qui ont fait grimper les achats à l'étranger de 4,3 % en un mois [1].",
      "Le 6 octobre, l'administration a ouvert une nouvelle phase de remboursement des droits de douane jugés illégaux par la Cour suprême [2]."
    ],
    why: [
      "Les droits de douane devaient réduire le déficit commercial. Le 20 février 2026, la Cour suprême a jugé, par 6 voix contre 3, que la loi utilisée par Donald Trump (IEEPA) ne lui permettait pas d'imposer ces taxes [2]. Environ 122 milliards de dollars de remboursements ont déjà été validés pour les importateurs [2].",
      "Les droits de douane n'ont pas disparu pour autant : d'autres lois permettent de taxer l'acier, l'automobile ou les médicaments. Le taux moyen appliqué aux importations américaines tourne autour de 11 %, ce qui coûterait environ 1 100 dollars par an à chaque ménage américain selon le Yale Budget Lab [3].",
      "Avec la Chine, la trêve tient : le 27 septembre, les deux pays se sont mis d'accord pour baisser les droits de douane sur 77 catégories de produits, comme les jouets, les fours à micro-ondes ou le linge de maison [2]."
    ],
    forMe: "Les règles changent sans cesse : des taxes sont annulées, d'autres apparaissent. Cette incertitude pèse sur les entreprises françaises qui vendent aux États-Unis (vins, cosmétiques, luxe, aéronautique), et donc sur les emplois qui en dépendent.",
    figures: [
      { value: "105,6 Md$", label: "le déficit commercial américain en août 2026", src: 1 },
      { value: "≈ 122 Md$", label: "de droits de douane remboursés aux importateurs", src: 2 },
      { value: "≈ 11 %", label: "le taux moyen des droits de douane américains", src: 3 },
      { value: "6-3", label: "le vote de la Cour suprême contre les droits de douane IEEPA", src: 2 }
    ],
    culture: [],
    dossiers: ["droits-de-douane", "dollar"],
    sources: [
      { short: "CNBC", name: "CNBC, « Trade deficit hits $105.6 billion, widest since just before Trump tariffs » (6 oct. 2026)", url: "https://www.cnbc.com/2026/10/06/trade-deficit-hits-105point6-billion-widest-since-just-before-trump-tariffs-enacted-last-year.html" },
      { short: "CalChamber", name: "California Chamber of Commerce, « Trade Update – October 6, 2026 »", url: "https://advocacy.calchamber.com/2026/10/06/trade-update-october-6-2026/" },
      { short: "CFR", name: "Council on Foreign Relations, « Before the Midterms: What Americans Think About Trade and Tariffs »", url: "https://cfr.org/articles/before-the-midterms-what-americans-think-about-trade-and-tariffs" }
    ]
  },
  {
    id: "2026-10-07-fed",
    date: "2026-10-07",
    theme: "eco",
    geo: [{ name: "Washington", coords: [-77.04, 38.9] }],
    title: "La Fed remonte ses taux pour la première fois depuis trois ans",
    summary: "Les marchés attendent cette semaine le compte rendu de la réunion de septembre, où la banque centrale américaine a relevé ses taux à l'unanimité.",
    points: [
      "Le 16 septembre, la Réserve fédérale américaine (Fed) a relevé ses taux d'un quart de point, à 3,75 %-4 % [1].",
      "C'est sa première hausse depuis 2023, votée à l'unanimité (12 voix contre 0) [2].",
      "Raison principale : l'inflation reste trop élevée, poussée par la flambée du pétrole [2]."
    ],
    why: [
      "« L'inflation est trop élevée, et depuis trop longtemps », a résumé le président de la Fed, Kevin Warsh [2]. L'indicateur d'inflation préféré de la Fed dépasse 3 % chaque mois depuis le début de l'année, loin de son objectif de 2 % [1].",
      "C'est un tournant : il y a un an, la Fed baissait encore ses taux. Le choc pétrolier a renversé la tendance. Ses responsables prévoient en moyenne une seule autre hausse cette année [1]."
    ],
    forMe: "Quand la Fed monte ses taux, le dollar a tendance à se renforcer : les voyages aux États-Unis et le pétrole (payé en dollars) coûtent plus cher en euros. La BCE peut aussi être tentée de suivre, ce qui renchérirait les crédits en Europe.",
    figures: [
      { value: "3,75-4 %", label: "le nouveau taux directeur de la Fed", src: 1 },
      { value: "12-0", label: "un vote unanime", src: 2 },
      { value: "> 3 %", label: "l'inflation sous-jacente (PCE) chaque mois de 2026", src: 1 }
    ],
    visuals: [
      {
        kind: "chart",
        type: "line",
        title: "Le taux directeur de la Fed",
        subtitle: "Borne haute de la fourchette, en fin d'année (septembre pour 2026)",
        xLabel: "Année",
        unit: "Taux (%)",
        suffix: " %",
        decimals: 2,
        data: [["2021", 0.25], ["2022", 4.5], ["2023", 5.5], ["2024", 4.5], ["2025", 3.75], ["2026", 4.0]],
        source: "Réserve fédérale américaine ; CNBC (16 sept. 2026)"
      }
    ],
    culture: [],
    dossiers: ["inflation-taux", "dollar"],
    sources: [
      { short: "CNBC", name: "CNBC, « Fed rate decision September 2026 » (16 sept. 2026)", url: "https://www.cnbc.com/2026/09/16/fed-rate-decision-september-2026.html" },
      { short: "NPR", name: "NPR, « The Fed raises interest rates for the first time in over three years » (16 sept. 2026)", url: "https://www.npr.org/2026/09/16/nx-s1-5968724/federal-reserve-interest-rates-inflation-economy" }
    ]
  }
];
