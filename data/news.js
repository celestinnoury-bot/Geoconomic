// Fil d'actu quotidien.
// Une entrée = un événement du jour, expliqué simplement. Les plus récentes en premier.
//
// Sources : chaque fait chiffré ou rapporté est suivi de [n], qui renvoie à la n-ième
// source de la liste `sources` (en partant de 1). L'appli affiche « (Nom court) » dans
// le texte, avec un lien, et la liste complète en bas de page.
//
// `visuals` : cartes ("map") et graphiques ("chart") interactifs, voir viz.js.
// `image` (facultatif) : { src, alt, credit } pour une photo en tête d'article.
// `geo` : lieux [longitude, latitude] où l'actu apparaît sur le globe de l'accueil ;
//         `label` (facultatif) = nom court affiché sur le globe, `name` = nom complet dans la fiche.
// `routes` (facultatif) : arcs tracés sur le globe depuis le premier lieu.
// `region` (facultatif) : Afrique, Asie, Europe, Amériques, Moyen-Orient (filtre de la page Actu).

window.GEOCO = window.GEOCO || {};
window.GEOCO.news = [
  {
    id: "2026-10-07-gazole-reserves",
    date: "2026-10-07",
    region: "Europe",
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
    region: "Moyen-Orient",
    theme: "geo",
    geo: [{ name: "Détroit d'Ormuz", label: "Ormuz", coords: [56.4, 26.5] }],
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
    region: "Amériques",
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
    id: "2026-10-07-zone-euro-inflation",
    date: "2026-10-07",
    region: "Europe",
    theme: "eco",
    title: "Zone euro : l'inflation bondit à 3,8 %, tirée par l'énergie",
    summary: "La hausse des prix s'accélère nettement en septembre dans les pays de l'euro. Le choc pétrolier venu d'Ormuz se diffuse à toute l'économie.",
    geo: [{ name: "Francfort (BCE)", coords: [8.68, 50.11] }],
    points: [
      "Selon la première estimation d'Eurostat publiée le 2 octobre, les prix ont augmenté de 3,8 % sur un an en septembre, contre 3,2 % en août [1].",
      "L'énergie s'envole : +18,8 % sur un an, après +14,3 % en août [1].",
      "Certains pays sont plus touchés : 5,1 % en Grèce, 4,9 % en Espagne, 4,2 % en Italie [2][3]."
    ],
    why: [
      "L'objectif de la Banque centrale européenne est une inflation proche de 2 %. On en est presque au double. La BCE, installée à Francfort, pourrait être tentée de relever ses taux, comme la Fed américaine l'a fait en septembre [1].",
      "Le dilemme est difficile : monter les taux freine les prix, mais aussi une économie déjà fragile, surtout en Allemagne. Les services (+3,2 %) et l'alimentation (+1,4 %) accélèrent aussi, signe que la hausse de l'énergie commence à se transmettre au reste des prix [1]."
    ],
    forMe: "Le carburant et le chauffage coûtent plus cher, et si la BCE remonte ses taux, les crédits immobiliers aussi. En revanche, les livrets d'épargne pourraient mieux rapporter.",
    figures: [
      { value: "3,8 %", label: "l'inflation en zone euro en septembre 2026", src: 1 },
      { value: "+18,8 %", label: "la hausse des prix de l'énergie sur un an", src: 1 },
      { value: "2 %", label: "l'objectif de la BCE", src: 1 }
    ],
    culture: [],
    dossiers: ["inflation-taux"],
    sources: [
      { short: "Eurostat via Asianet", name: "Asianet Newsable, « Euro area inflation jumps to 3.8% in September, driven by energy » (estimation rapide d'Eurostat, 2 oct. 2026)", url: "https://newsable.asianetnews.com/business/euro-area-inflation-jumps-to-3-8-in-september-driven-by-energy-articleshow-hzzngdy" },
      { short: "To Vima", name: "To Vima, « Inflation in Greece jumps to 5.1% in September »", url: "https://www.tovima.com/finance/inflation-in-greece-jumps-to-5-1-in-september/" },
      { short: "Trading Economics", name: "Trading Economics, inflation des pays du G20", url: "https://tradingeconomics.com/country-list/inflation-rate?continent=g20" }
    ]
  },
  {
    id: "2026-10-07-allemagne",
    date: "2026-10-07",
    region: "Europe",
    theme: "eco",
    title: "Allemagne : le moteur de l'Europe cale sous le choc de l'énergie",
    summary: "Première économie européenne, l'Allemagne frôle la récession. Son industrie, très gourmande en énergie, souffre de la flambée des prix.",
    geo: [{ name: "Berlin", coords: [13.4, 52.52] }],
    points: [
      "Le FMI ne prévoit plus que 0,7 % de croissance en Allemagne cette année [1].",
      "L'institut économique DIW a averti en juin d'une possible récession technique (deux trimestres de recul), à cause du choc énergétique lié à la guerre en Iran [2].",
      "En juillet, la production industrielle a nettement reculé, selon la Bundesbank, qui cite aussi le faible niveau de l'eau dans les fleuves [3]."
    ],
    why: [
      "L'industrie allemande (chimie, acier, automobile) consomme énormément d'énergie. Quand le gaz et le pétrole flambent, ses coûts explosent et elle devient moins compétitive face à la Chine ou aux États-Unis [2].",
      "Le faible niveau du Rhin, autoroute fluviale de l'industrie allemande, oblige les péniches à charger moins, ce qui renchérit le transport du charbon, des produits chimiques ou de l'acier [3]."
    ],
    forMe: "Quand l'Allemagne ralentit, toute l'Europe le sent : c'est le premier client et le premier fournisseur de la France. Moins de commandes allemandes, c'est moins d'activité pour les entreprises françaises.",
    figures: [
      { value: "0,7 %", label: "la croissance prévue en Allemagne en 2026 (FMI)", src: 1 },
      { value: "3,3 %", label: "l'inflation en Allemagne en septembre", src: 4 }
    ],
    culture: [],
    dossiers: ["inflation-taux"],
    sources: [
      { short: "Euronews", name: "Euronews, prévisions du FMI pour l'Europe (8 juil. 2026)", url: "https://www.euronews.com/business/2026/07/08/economy-imf-forecasts-modest-growth-for-italy-cuts-estimates-for-france-and-germany" },
      { short: "MarketScreener", name: "MarketScreener, « Germany risks recession as Iran energy shock hits growth, DIW economists say »", url: "https://uk.marketscreener.com/news/germany-risks-recession-as-iran-energy-shock-hits-growth-diw-economists-say-ce7f5cdad089f321" },
      { short: "Bundesbank", name: "Bundesbank, « German economy: recovery slowing temporarily, energy prices driving inflation »", url: "https://www.bundesbank.de/en/tasks/topics/german-economy-recovery-slowing-temporarily-energy-prices-driving-inflation-1008384" },
      { short: "Trading Economics", name: "Trading Economics, inflation des pays du G20", url: "https://tradingeconomics.com/country-list/inflation-rate?continent=g20" }
    ]
  },
  {
    id: "2026-10-07-suez",
    date: "2026-10-07",
    region: "Moyen-Orient",
    theme: "geo",
    title: "Le canal de Suez profite de la crise d'Ormuz",
    summary: "Ormuz bloqué, le pétrole saoudien passe par la mer Rouge. Résultat : le trafic et les recettes du canal de Suez remontent en flèche.",
    geo: [{ name: "Canal de Suez", label: "Suez", coords: [32.34, 30.6] }],
    points: [
      "En juillet, le canal a rapporté 505 millions de dollars à l'Égypte, soit 42 % de plus qu'un an plus tôt, un record depuis fin 2023 [1].",
      "1 340 navires l'ont traversé ce mois-là, 27 % de plus qu'en juillet 2025, dont 526 pétroliers [1].",
      "L'Autorité du canal vise 5,8 à 6 milliards de dollars de recettes en 2026, contre 4,1 milliards en 2025 [2]."
    ],
    why: [
      "Avec la fermeture d'Ormuz, l'Arabie saoudite exporte davantage par son oléoduc Est-Ouest, qui débouche sur la mer Rouge. Une partie de ces pétroliers remonte ensuite vers l'Europe par Suez [2].",
      "C'est un retournement pour l'Égypte : depuis fin 2023, les attaques des Houthis en mer Rouge avaient fait fuir les navires et coûté des milliards au pays. Mais le trafic reste encore inférieur à son niveau d'avant la crise [3]."
    ],
    forMe: "Ce qui est une catastrophe pour l'un est une aubaine pour l'autre : les crises redessinent les routes commerciales, et donc les gagnants et les perdants de l'économie mondiale.",
    figures: [
      { value: "505 M$", label: "de recettes du canal en juillet 2026", src: 1 },
      { value: "+42 %", label: "sur un an", src: 1 },
      { value: "≈ 6 Md$", label: "de recettes visées pour 2026", src: 2 }
    ],
    culture: [],
    dossiers: ["routes-maritimes"],
    sources: [
      { short: "gCaptain", name: "gCaptain, « Suez Canal revival gathers pace as Hormuz crisis reroutes ships »", url: "https://gcaptain.com/suez-canal-revival-gathers-pace-as-hormuz-crisis-reroutes-ships/" },
      { short: "Al-Monitor", name: "Al-Monitor, « Suez Canal traffic soars as Hormuz disruptions reroute energy trade » (juin 2026)", url: "https://www.al-monitor.com/originals/2026/06/suez-canal-traffic-soars-hormuz-disruptions-reroute-energy-trade" },
      { short: "The New Arab", name: "The New Arab, « Hormuz disruption proves Egypt's 'silver lining' as Suez Canal traffic rises »", url: "https://www.newarab.com/news/egypt-sees-silver-lining-hormuz-closure-suez-traffic-rises" }
    ]
  },
  {
    id: "2026-10-07-opep",
    date: "2026-10-07",
    region: "Moyen-Orient",
    theme: "geo",
    title: "OPEP+ : les producteurs de pétrole marquent une pause",
    summary: "Après quatre mois de hausse, les grands producteurs ont gelé leur production pour octobre. Mais avec Ormuz bloqué, leur pouvoir sur les prix s'est réduit.",
    geo: [{ name: "Riyad", label: "Arabie saoudite", coords: [46.68, 24.71] }],
    points: [
      "Le 6 septembre, sept pays de l'OPEP+ (Arabie saoudite, Russie, Irak, Koweït, Kazakhstan, Algérie, Oman) ont décidé de maintenir leur production d'octobre au niveau de septembre [1][2].",
      "Ils venaient de terminer l'annulation d'une baisse de production de 1,65 million de barils par jour décidée en 2023 [3].",
      "Les Émirats arabes unis, qui participaient à ces décisions, ont quitté l'OPEP en mai [3]."
    ],
    why: [
      "Normalement, l'OPEP+ fait varier sa production pour influencer les prix. Mais tant que le détroit d'Ormuz est perturbé, une partie de son pétrole ne peut tout simplement pas sortir du Golfe : produire plus ne change pas grand-chose [3].",
      "Le départ des Émirats affaiblit le cartel. Les sept pays restants se réunissent chaque mois ; la réunion du 4 octobre devait fixer la production de novembre [2]."
    ],
    forMe: "Les décisions prises à Riyad et à Vienne se retrouvent sur ton ticket de caisse à la station-service, quelques semaines plus tard.",
    figures: [
      { value: "≈ 31 M", label: "de barils par jour : la production d'octobre des sept pays", src: 3 },
      { value: "1,65 M", label: "de barils par jour de baisse de 2023 entièrement annulée", src: 3 }
    ],
    culture: [],
    dossiers: ["routes-maritimes"],
    sources: [
      { short: "OPEP", name: "OPEP, communiqué du 6 septembre 2026", url: "https://www.opec.org/pr-detail/613-6-september-2026.html" },
      { short: "Gulf News", name: "Gulf News, « OPEC+ keeps October oil output quota unchanged from September levels »", url: "https://gulfnews.com/business/energy/opec-keeps-october-oil-output-quota-unchanged-from-september-levels-1.500665366" },
      { short: "Nairametrics", name: "Nairametrics, « OPEC+ pauses oil output hikes after four straight monthly increases » (6 sept. 2026)", url: "https://nairametrics.com/2026/09/06/opec-pauses-oil-output-hikes-after-four-straight-monthly-increases/" }
    ]
  },
  {
    id: "2026-10-07-turquie",
    date: "2026-10-07",
    region: "Moyen-Orient",
    theme: "eco",
    title: "Turquie : l'inflation reste autour de 30 %",
    summary: "Les prix augmentent encore de près d'un tiers en un an. La banque centrale garde son taux directeur à 37 %.",
    geo: [{ name: "Ankara", label: "Turquie", coords: [32.85, 39.93] }],
    points: [
      "L'inflation turque est passée de 31,5 % en août à 29,7 % en septembre [1][2].",
      "Le 10 septembre, la banque centrale a laissé son taux directeur à 37 %, pour la cinquième fois de suite [3].",
      "Elle prévoit encore 28 % d'inflation à la fin de l'année [3]."
    ],
    why: [
      "Un taux à 37 % paraît énorme, mais il faut le comparer à l'inflation : si les prix montent de 30 %, prêter à 37 % ne rapporte « que » 7 % en réalité. C'est ce qu'on appelle le taux d'intérêt réel.",
      "La Turquie paie encore les années où elle baissait ses taux malgré l'inflation. Sa monnaie, la livre, a perdu énormément de valeur, ce qui renchérit tout ce qu'elle importe, à commencer par l'énergie."
    ],
    forMe: "Pour un touriste européen, la Turquie paraît bon marché. Pour les Turcs, c'est l'inverse : leurs salaires peinent à suivre les prix d'une année sur l'autre.",
    figures: [
      { value: "29,7 %", label: "l'inflation en Turquie en septembre 2026", src: 2 },
      { value: "37 %", label: "le taux directeur de la banque centrale", src: 3 }
    ],
    culture: [],
    dossiers: ["inflation-taux"],
    sources: [
      { short: "Trading Economics", name: "Trading Economics, inflation en Turquie", url: "https://tradingeconomics.com/turkey/inflation-cpi" },
      { short: "Trading Economics (G20)", name: "Trading Economics, inflation des pays du G20", url: "https://tradingeconomics.com/country-list/inflation-rate?continent=g20" },
      { short: "bne IntelliNews", name: "bne IntelliNews, « Turkish central bank sticks to 37% policy rate for fifth straight time »", url: "https://new.intellinews.com/articles/turkish-central-bank-sticks-to-37-policy-rate-for-fifth-straight-time-467058" }
    ]
  },
  {
    id: "2026-10-07-philippines",
    date: "2026-10-07",
    region: "Asie",
    theme: "eco",
    title: "Philippines : l'inflation grimpe à 7,2 %, au plus haut depuis trois ans",
    summary: "Le riz et le carburant font flamber les prix dans l'archipel, très dépendant des importations d'énergie.",
    geo: [{ name: "Manille", label: "Philippines", coords: [120.98, 14.6] }],
    points: [
      "L'inflation a atteint 7,2 % en septembre aux Philippines, son niveau le plus élevé depuis trois ans [1][2].",
      "En août, elle était de 6,1 %, avec un prix du riz en hausse de 19,4 % sur un an [3].",
      "Les transports (+13,5 % en août) souffrent de la hausse des carburants [3]."
    ],
    why: [
      "Les Philippines importent presque tout leur pétrole, en grande partie du Golfe. Quand Ormuz est bloqué, le pays est en première ligne.",
      "Le riz est l'aliment de base de 115 millions de Philippins. Quand son prix augmente de près de 20 %, ce sont les ménages les plus modestes qui trinquent le plus, car l'alimentation pèse lourd dans leur budget."
    ],
    forMe: "C'est l'autre visage de la crise d'Ormuz : en Europe on parle du prix du plein, en Asie du Sud-Est c'est le prix du riz qui inquiète.",
    figures: [
      { value: "7,2 %", label: "l'inflation aux Philippines en septembre 2026", src: 1 },
      { value: "+19,4 %", label: "le prix du riz sur un an en août", src: 3 }
    ],
    culture: [],
    dossiers: ["inflation-taux"],
    sources: [
      { short: "Philstar", name: "Philstar, « Philippine inflation jumps to 7.2% in September 2026 » (6 oct. 2026)", url: "https://www.philstar.com/business/2026/10/06/2561305/philippine-inflation-jumps-72-september-2026" },
      { short: "Rappler", name: "Rappler, « Inflation soars to 7.2% as food, fuel prices climb in September 2026 »", url: "https://www.rappler.com/business/inflation-rate-philippines-september-2026/" },
      { short: "Daily Tribune", name: "Daily Tribune, « Inflation eases to 6.1% as rice prices surge » (4 sept. 2026)", url: "https://tribune.net.ph/2026/09/04/inflation-eases-to-61-as-rice-prices-surge" }
    ]
  },
  {
    id: "2026-10-07-canada",
    date: "2026-10-07",
    region: "Amériques",
    theme: "eco",
    title: "Washington interdit près d'un milliard de dollars de produits canadiens",
    summary: "Alcools, produits laitiers, motos : les États-Unis bloquent certaines importations canadiennes en représailles. Une escalade entre voisins et alliés.",
    geo: [{ name: "Ottawa", label: "Canada", coords: [-75.7, 45.42] }],
    points: [
      "Depuis le 29 septembre, les États-Unis interdisent l'importation de près d'un milliard de dollars de produits canadiens [1].",
      "87 % de cette somme concerne des boissons alcoolisées : Washington répond ainsi aux provinces canadiennes qui ont retiré l'alcool américain de leurs rayons [1].",
      "Sont aussi visés certains produits laitiers et les motos Can-Am de Bombardier [1]."
    ],
    why: [
      "Le montant est faible face aux 880 milliards de dollars d'échanges annuels entre les deux pays. Mais le symbole est fort : le Canada est le premier partenaire commercial des États-Unis et un allié historique [1].",
      "C'est la logique de la guerre commerciale : une taxe entraîne une riposte, qui entraîne une contre-riposte. Les consommateurs des deux côtés finissent par payer plus cher ou par avoir moins de choix."
    ],
    forMe: "L'Europe connaît la même logique avec les États-Unis. Comprendre ce bras de fer, c'est comprendre pourquoi le prix de certains produits importés peut changer du jour au lendemain.",
    figures: [
      { value: "≈ 1 Md$", label: "de produits canadiens interdits", src: 1 },
      { value: "87 %", label: "de boissons alcoolisées", src: 1 },
      { value: "880 Md$", label: "d'échanges annuels entre les deux pays", src: 1 }
    ],
    culture: [],
    dossiers: ["droits-de-douane"],
    sources: [
      { short: "AP via ABC News", name: "Associated Press via ABC News, « US ban on $1 billion worth of Canadian imports goes into effect » (29 sept. 2026)", url: "https://abcnews.com/Business/wireStory/motorcycles-booze-us-ban-1-billion-worth-canadian-136843738" }
    ]
  },
  {
    id: "2026-10-07-chine",
    date: "2026-10-07",
    region: "Asie",
    theme: "eco",
    title: "Chine : les exportations tiennent, l'immobilier s'enfonce",
    summary: "La deuxième économie mondiale croît plus vite que prévu grâce à ses exportations, mais la crise immobilière et la faible consommation pèsent toujours.",
    geo: [{ name: "Shanghai", coords: [121.47, 31.23] }],
    points: [
      "Le FMI a relevé en juillet sa prévision de croissance chinoise pour 2026, de 4,4 % à 4,6 % [1].",
      "Les indicateurs de l'immobilier (mises en chantier, ventes, investissements) sont 50 à 80 % sous leurs sommets de 2020-2021, selon Goldman Sachs [2].",
      "Les prix à la consommation n'augmentent que de 0,8 % sur un an, signe d'une demande intérieure faible [3]."
    ],
    why: [
      "L'immobilier a longtemps été le moteur de la Chine et le principal placement des ménages. Quand les prix des logements baissent, les familles se sentent plus pauvres et consomment moins [2].",
      "Pour compenser, la Chine mise sur ses exportations, notamment de produits high-tech (voitures électriques, panneaux solaires, batteries). Cela crée des tensions avec ses partenaires, qui accusent Pékin d'inonder leurs marchés [4]."
    ],
    forMe: "Les produits chinois bon marché aident à contenir l'inflation en Europe, mais ils mettent aussi en difficulté certaines usines européennes, notamment dans l'automobile.",
    figures: [
      { value: "4,6 %", label: "la croissance prévue en Chine en 2026 (FMI)", src: 1 },
      { value: "-50 à -80 %", label: "l'immobilier par rapport aux sommets de 2020-2021", src: 2 },
      { value: "0,8 %", label: "l'inflation en Chine", src: 3 }
    ],
    culture: [],
    dossiers: ["droits-de-douane"],
    sources: [
      { short: "FMI", name: "FMI, conférence de presse de la mise à jour de juillet 2026", url: "https://www.imf.org/en/news/articles/2026/07/08/tr070826-weo-press-briefing-transcript-july-8-2026" },
      { short: "Goldman Sachs", name: "Goldman Sachs, « China's economy is forecast to grow faster than expected in 2026 »", url: "https://www.goldmansachs.com/insights/articles/chinas-economy-is-forecast-to-grow-faster-than-expected-in-2026" },
      { short: "Trading Economics", name: "Trading Economics, inflation des pays du G20", url: "https://tradingeconomics.com/country-list/inflation-rate?continent=g20" },
      { short: "OCDE", name: "OCDE, Perspectives économiques, juin 2026 : Chine", url: "https://www.oecd.org/en/publications/2026/06/oecd-economic-outlook-volume-2026-issue-1_8be0dba6/full-report/china_6526c66b.html" }
    ]
  },
  {
    id: "2026-10-07-niger-uranium",
    date: "2026-10-07",
    theme: "geo",
    region: "Afrique",
    title: "Niger : la junte garde l'uranium que la France exploitait",
    summary: "Le Niger a confié à une société d'État la grande mine d'uranium que le groupe français Orano exploitait depuis des décennies.",
    geo: [{ name: "Arlit (Niger)", label: "Niger", coords: [7.39, 18.74] }],
    points: [
      "En juin 2025, la junte au pouvoir à Niamey a nationalisé la mine de la Somaïr, dont Orano détenait 63,4 % [2].",
      "En août 2026, le permis minier a été attribué à Tsumco, une société d'État créée après la nationalisation [1].",
      "Un tribunal d'arbitrage international a demandé au Niger de ne pas vendre cet uranium, mais Niamey affirme son « droit légitime » à le mettre sur le marché [3]."
    ],
    why: [
      "L'uranium sert de combustible aux centrales nucléaires. Le Niger en a longtemps été l'un des grands fournisseurs pour la France et l'Europe. Depuis le coup d'État de 2023, la junte s'est éloignée de Paris et rapprochée de la Russie [3].",
      "C'est un exemple de « nationalisme des ressources » : de plus en plus de pays pauvres mais riches en minerais veulent garder davantage de la valeur de leur sous-sol, au lieu de la laisser aux entreprises étrangères."
    ],
    forMe: "Près de 70 % de l'électricité française vient du nucléaire. La France diversifie ses achats d'uranium (Kazakhstan, Canada, Australie), mais la perte du Niger montre que l'énergie dépend aussi de la géopolitique.",
    figures: [
      { value: "63,4 %", label: "la part d'Orano dans la mine avant la nationalisation", src: 2 },
      { value: "2025", label: "nationalisation de la Somaïr", src: 2 }
    ],
    culture: [],
    dossiers: ["sanctions"],
    sources: [
      { short: "Bloomberg", name: "Bloomberg, « Niger awards former Orano-operated uranium mine to state company » (22 août 2026)", url: "https://www.bloomberg.com/news/articles/2026-08-22/niger-awards-former-orano-operated-uranium-mine-to-state-company" },
      { short: "Mining.com", name: "Mining.com, « Niger ready to return Orano-produced uranium after mine takeover » (fév. 2026)", url: "https://www.mining.com/web/niger-ready-to-return-orano-produced-uranium-after-mine-takeover/" },
      { short: "bne IntelliNews", name: "bne IntelliNews, « Niger puts nationalised Somair uranium on global market amid standoff with France's Orano »", url: "https://www.intellinews.com/niger-puts-nationalised-somair-uranium-on-global-market-amid-standoff-with-france-s-orano-414385/" }
    ]
  },
  {
    id: "2026-10-07-rdc-cobalt",
    date: "2026-10-07",
    theme: "geo",
    region: "Afrique",
    title: "RDC : le pays du cobalt ferme le robinet pour faire monter les prix",
    summary: "La République démocratique du Congo, premier producteur mondial de cobalt, limite ses exportations. Le métal des batteries a flambé.",
    geo: [{ name: "Kolwezi (RDC)", label: "RD Congo", coords: [25.47, -10.71] }],
    points: [
      "Après avoir suspendu ses exportations en 2025, la RDC les plafonne à 87 000 tonnes par an en 2026 et 2027, soit 7 250 tonnes par mois [1].",
      "Fin juin, l'autorité congolaise a même supprimé les quotas du deuxième trimestre non utilisés, retirant 15 000 à 20 000 tonnes du marché [3].",
      "Le cobalt a commencé 2026 au-dessus de 56 000 dollars la tonne, un niveau plus vu depuis 2022 [2]."
    ],
    why: [
      "Le cobalt est indispensable aux batteries des téléphones et de nombreuses voitures électriques. La RDC en produit plus de la moitié du monde. En limitant l'offre, Kinshasa a réussi à faire remonter des prix qui s'étaient effondrés [1].",
      "C'est le paradoxe de la RDC : un sous-sol parmi les plus riches de la planète (cobalt, cuivre, coltan), mais une population parmi les plus pauvres, et un est du pays déchiré par la guerre autour des mines."
    ],
    forMe: "Ton smartphone contient probablement du cobalt congolais. Quand son prix monte, celui des batteries suit, et la course aux voitures électriques devient une course aux minerais.",
    figures: [
      { value: "87 000 t", label: "de cobalt exportables par an en 2026-2027", src: 1 },
      { value: "≈ 56 400 $", label: "la tonne de cobalt début 2026", src: 2 }
    ],
    culture: [],
    dossiers: ["semi-conducteurs"],
    sources: [
      { short: "Benchmark", name: "Benchmark Mineral Intelligence, « DRC to lift cobalt export ban and impose quotas through 2027 »", url: "https://source.benchmarkminerals.com/article/drc-to-lift-cobalt-export-ban-and-impose-quotas-through-2027" },
      { short: "SunSirs", name: "SunSirs, « Cobalt prices surged in 2025, and here's the outlook for 2026 »", url: "https://www.sunsirs.com/m/page/commodity-news-detail/commodity-news-detail-29434.html" },
      { short: "Fastmarkets", name: "Fastmarkets, « DRC may reduce cobalt quota if market needs rebalancing, ARECOMS says »", url: "https://www.fastmarkets.com/insights/drc-may-reduce-cobalt-quota-if-market-needs-rebalancing-arecoms-says-exclusive/" }
    ]
  },
  {
    id: "2026-10-07-zambie-cuivre",
    date: "2026-10-07",
    theme: "eco",
    region: "Afrique",
    title: "Zambie : le cuivre au plus haut, le pays rêve d'un million de tonnes",
    summary: "Le cuivre bat des records de prix, porté par l'électrification du monde. La Zambie veut en profiter pour relancer une économie fragile.",
    geo: [{ name: "Copperbelt (Zambie)", label: "Zambie", coords: [28.2, -12.8] }],
    points: [
      "La Zambie a produit un record de 890 346 tonnes de cuivre en 2025, en hausse de 8 % [1].",
      "Au premier semestre 2026, la production n'a progressé que de 0,45 %, à 447 182 tonnes : l'objectif d'un million de tonnes cette année sera difficile à atteindre [2].",
      "Le cuivre a atteint un prix record à Londres à la mi-septembre [2]."
    ],
    why: [
      "Le cuivre est le métal de l'électricité : câbles, réseaux, moteurs, éoliennes, voitures électriques. Plus le monde s'électrifie, plus il en faut. La Zambie vise 3 millions de tonnes d'ici 2031 [1].",
      "Le pays a fait défaut sur sa dette en 2020 et dépend énormément du cuivre, qui représente l'essentiel de ses exportations. Ses mines souffrent aussi des coupures d'électricité liées aux sécheresses, car son courant vient surtout des barrages."
    ],
    forMe: "Les prix du cuivre se retrouvent dans le coût des installations électriques, des voitures et des bornes de recharge. C'est l'un des métaux les plus surveillés par les industriels.",
    figures: [
      { value: "890 346 t", label: "de cuivre produites en 2025, un record", src: 1 },
      { value: "3 Mt", label: "l'objectif de production en 2031", src: 1 }
    ],
    culture: [],
    dossiers: [],
    sources: [
      { short: "Bloomberg", name: "Bloomberg, « Zambia restates copper ambition after posting record output » (27 janv. 2026)", url: "https://www.bloomberg.com/news/articles/2026-01-27/zambia-restates-copper-ambition-after-posting-record-output" },
      { short: "Zambia Monitor", name: "Zambia Monitor, « Copper production edges up in first half of 2026 »", url: "https://www.zambiamonitor.com/copper-production-edges-up-in-first-half-of-2026-zambia-ministry-official-says/" }
    ]
  },
  {
    id: "2026-10-07-guinee-simandou",
    date: "2026-10-07",
    theme: "eco",
    region: "Afrique",
    title: "Guinée : Simandou, la montagne de fer qui fait trembler l'Australie",
    summary: "Le plus grand gisement de fer inexploité du monde exporte enfin vers la Chine. Un tournant pour la Guinée et pour le marché de l'acier.",
    geo: [{ name: "Simandou (Guinée)", label: "Guinée", coords: [-8.9, 8.6] }],
    points: [
      "La première cargaison de minerai de Simandou est partie début décembre 2025 [3].",
      "En mai 2026, les exportations ont atteint environ 2,2 millions de tonnes sur le mois, un record [2].",
      "Wood Mackenzie prévoit environ 16 millions de tonnes exportées en 2026, pour une capacité finale de 120 millions de tonnes par an [1]."
    ],
    why: [
      "Le projet, porté notamment par Rio Tinto et des groupes chinois, a nécessité plus de 600 km de voie ferrée et un nouveau port. Son minerai très riche intéresse la Chine, qui veut moins dépendre du fer australien [1].",
      "Pour la Guinée, l'un des pays les plus pauvres du monde, c'est une chance historique, à condition que les revenus profitent vraiment à la population."
    ],
    forMe: "Le fer sert à faire l'acier de nos voitures, immeubles et ponts. Une nouvelle source géante peut faire baisser son prix mondial et changer les rapports de force entre la Chine et l'Australie.",
    figures: [
      { value: "120 Mt", label: "de capacité annuelle visée", src: 1 },
      { value: "≈ 16 Mt", label: "d'exportations prévues en 2026", src: 1 }
    ],
    culture: [],
    dossiers: ["routes-maritimes"],
    sources: [
      { short: "Wood Mackenzie", name: "Wood Mackenzie, « Simandou iron ore 2026 »", url: "https://www.woodmac.com/press-releases/simandou-iron-ore-2026/" },
      { short: "Miningmx", name: "Miningmx, « Simandou iron ore exports surge in ramp-up milestone »", url: "https://www.miningmx.com/news/ferrous-metals/65528-simandou-iron-ore-exports-surge-in-ramp-up-milestone/" },
      { short: "S&P Global", name: "S&P Global, première cargaison de Simandou arrivée en Chine (janv. 2026)", url: "https://www.spglobal.com/energy/en/news-research/latest-news/metals/011926-simandous-first-shipment-with-200000-mt-high-grade-iron-ore-arrives-in-china" }
    ]
  },
  {
    id: "2026-10-07-mali-or",
    date: "2026-10-07",
    theme: "eco",
    region: "Afrique",
    title: "Mali : la grande mine d'or repart après deux ans de bras de fer",
    summary: "Le géant canadien Barrick et la junte malienne ont fait la paix. La mine de Loulo-Gounkoto tourne de nouveau, et un accord vient d'éviter une grève.",
    geo: [{ name: "Loulo (Mali)", label: "Mali", coords: [-11.48, 13.0] }],
    points: [
      "Le 27 septembre, Barrick a signé un accord avec les syndicats de la mine, écartant une menace de grève [1].",
      "En février 2026, le Mali avait renouvelé le permis de la mine pour dix ans, après un an et demi de conflit [3].",
      "Barrick prévoit d'y produire 260 000 à 290 000 onces d'or en 2026 [2]."
    ],
    why: [
      "Le Mali a adopté en 2023 un nouveau code minier pour récupérer une plus grande part des richesses. Barrick a refusé, l'État a saisi de l'or et la mine a été fermée en janvier 2025, avant un accord en novembre 2025 [2].",
      "L'or représente environ 80 % des exportations du Mali [2]. Avec un prix de l'or très élevé, chaque mois d'arrêt coûtait très cher à l'un des pays les plus pauvres du monde."
    ],
    forMe: "L'or est une valeur refuge : quand le monde est instable, son prix monte. Il fait vivre des pays entiers comme le Mali, mais attise aussi les convoitises et les conflits.",
    figures: [
      { value: "≈ 80 %", label: "des exportations du Mali viennent de l'or", src: 2 },
      { value: "10 ans", label: "durée du permis renouvelé en 2026", src: 3 }
    ],
    culture: [],
    dossiers: [],
    sources: [
      { short: "Bloomberg", name: "Bloomberg, « Barrick Mining reaches deal with Mali unions, averting strikes » (27 sept. 2026)", url: "https://www.bloomberg.com/news/articles/2026-09-27/barrick-mining-reaches-deal-with-mali-unions-averting-strikes" },
      { short: "Ecofin", name: "Agence Ecofin, « Barrick confirms gold production restart at Mali's Loulo-Gounkoto mine in 2026 »", url: "https://www.ecofinagency.com/news-industry/0602-52638-barrick-confirms-gold-production-restart-at-mali-s-loulo-gounkoto-mine-in-2026" },
      { short: "Semafor", name: "Semafor, « Mali agrees gold mining deal extension after standoff with Barrick » (16 fév. 2026)", url: "https://www.semafor.com/article/02/16/2026/mali-agrees-gold-mining-deal-extension-after-standoff-with-barrick" }
    ]
  },
  {
    id: "2026-10-07-senegal-dette",
    date: "2026-10-07",
    theme: "eco",
    region: "Afrique",
    title: "Sénégal : la dette cachée qui fait trembler le pays",
    summary: "Après la découverte d'une dette dissimulée par l'ancien gouvernement, le Sénégal négocie avec le FMI et ses créanciers pour éviter l'asphyxie.",
    geo: [{ name: "Dakar", label: "Sénégal", coords: [-17.45, 14.69] }],
    points: [
      "Un audit a révélé que la dette atteignait 99,7 % du PIB fin 2023, et non 74,4 % comme annoncé [2].",
      "Le 1er septembre, le Sénégal et le FMI ont conclu un accord préliminaire pour un prêt d'environ 2,2 milliards de dollars sur trois ans [1].",
      "Le pays va restructurer sa dette extérieure. L'agence S&P a abaissé sa note à « CC », proche du défaut de paiement [4]."
    ],
    why: [
      "Quand un État découvre qu'il doit beaucoup plus que prévu, les investisseurs prennent peur et ne prêtent plus qu'à des taux très élevés. Le pays doit alors couper des dépenses ou négocier des délais avec ses créanciers [1].",
      "Le gouvernement veut allonger la durée de remboursement plutôt qu'effacer une partie de la dette. Mais la population ressent déjà la crise : des manifestations contre la vie chère ont eu lieu début septembre [3]."
    ],
    forMe: "La France a aussi une dette élevée (plus de 110 % du PIB). La différence : elle emprunte dans sa propre monnaie, l'euro, et inspire plus confiance. L'histoire du Sénégal montre pourquoi cette confiance vaut de l'or.",
    figures: [
      { value: "99,7 %", label: "la dette réelle du Sénégal, en % du PIB, fin 2023", src: 2 },
      { value: "2,2 Md$", label: "le prêt négocié avec le FMI", src: 1 }
    ],
    culture: [],
    dossiers: ["dollar"],
    sources: [
      { short: "Bloomberg", name: "Bloomberg, « Senegal to rework debt as it reaches new IMF deal » (1er sept. 2026)", url: "https://www.bloomberg.com/news/articles/2026-09-01/senegal-imf-reach-staff-agreement-on-2-2-billion-loan-program" },
      { short: "CNBC Africa", name: "CNBC Africa, « Senegal's hidden debt crisis and attempts to resolve it »", url: "https://www.cnbcafrica.com/2026/senegals-hidden-debt-crisis-and-attempts-to-resolve-it-3" },
      { short: "Semafor", name: "Semafor, « Senegal seeks more time to pay off debt » (9 sept. 2026)", url: "https://www.semafor.com/article/09/09/2026/senegal-seeks-more-time-to-pay-off-debt" },
      { short: "Pan African Visions", name: "Pan African Visions, « Senegal's $2.2 billion IMF lifeline comes with a $13 billion debt shadow »", url: "https://panafricanvisions.com/2026/09/senegals-2-2-billion-imf-lifeline-comes-with-a-13-billion-debt-shadow/" }
    ]
  },
  {
    id: "2026-10-07-nigeria-dangote",
    date: "2026-10-07",
    theme: "eco",
    region: "Afrique",
    title: "Nigeria : la raffinerie géante qui inverse le commerce du carburant",
    summary: "Grand producteur de pétrole, le Nigeria importait pourtant son essence. Grâce à la raffinerie Dangote, il en exporte désormais, jusqu'en Europe.",
    geo: [{ name: "Lagos", label: "Nigeria", coords: [3.4, 6.45] }],
    points: [
      "En mars 2026, le Nigeria est devenu pour la première fois exportateur net d'essence, grâce à la raffinerie Dangote [2].",
      "Ses exportations de produits pétroliers vers l'Europe ont bondi de 767 % depuis 2023, à 130 000 barils par jour au deuxième trimestre 2026, selon l'agence américaine de l'énergie [1].",
      "La raffinerie, près de Lagos, peut traiter environ 650 000 barils de pétrole brut par jour, l'une des plus grandes du monde [1]."
    ],
    why: [
      "Pendant des décennies, le Nigeria exportait son pétrole brut puis rachetait l'essence raffinée à l'étranger, plus chère. Raffiner sur place permet de garder cette valeur et d'économiser des devises [2].",
      "Avec la crise d'Ormuz, l'Europe cherche d'autres fournisseurs de carburant : le timing est idéal. Mais la raffinerie peine parfois à obtenir assez de pétrole brut nigérian et de dollars [3]."
    ],
    forMe: "Une partie du gazole et de l'essence vendus en Europe pourrait bientôt venir d'Afrique de l'Ouest. C'est une nouvelle route de l'énergie qui se dessine.",
    figures: [
      { value: "+767 %", label: "d'exportations de carburants vers l'Europe depuis 2023", src: 1 },
      { value: "≈ 650 000", label: "barils de brut raffinés par jour (capacité)", src: 1 }
    ],
    culture: [],
    dossiers: ["routes-maritimes"],
    sources: [
      { short: "Nairametrics", name: "Nairametrics, « Dangote refinery drives 767% surge in Nigeria's petroleum exports to Europe » (25 août 2026)", url: "https://nairametrics.com/2026/08/25/dangote-refinery-drives-767-surge-in-nigerias-petroleum-exports-to-europe/" },
      { short: "News Ghana", name: "News Ghana, « Dangote refinery turns Nigeria into net petrol exporter for first time »", url: "https://www.newsghana.com.gh/dangote-refinery-turns-nigeria-into-net-petrol-exporter-for-first-time/" },
      { short: "Ground News", name: "Ground News, « Dangote refinery ramps up fuel exports as crude shortages, forex squeeze bite »", url: "https://ground.news/article/dangote-refinery-ramps-up-fuel-exports-as-crude-shortages-forex-squeeze-bite" }
    ]
  },
  {
    id: "2026-10-07-kazakhstan-uranium",
    date: "2026-10-07",
    theme: "eco",
    region: "Asie",
    title: "Kazakhstan : le roi de l'uranium dose sa production",
    summary: "Premier producteur mondial d'uranium, le Kazakhstan augmente sa production, mais refuse d'« inonder le marché d'uranium bon marché ».",
    geo: [{ name: "Kazakhstan", coords: [68.3, 44.0] }],
    points: [
      "Kazatomprom, la compagnie nationale, a produit 13 291 tonnes d'uranium au premier semestre 2026, 9 % de plus qu'un an plus tôt [1].",
      "Elle vise 27 500 à 29 000 tonnes sur l'année [1].",
      "Mais elle a abaissé son plafond de production de 32 777 à 29 697 tonnes, pour ne pas faire chuter les prix [2]."
    ],
    why: [
      "Avec la relance du nucléaire dans le monde (pour le climat et l'indépendance énergétique), la demande d'uranium augmente. Le Kazakhstan, coincé entre la Russie et la Chine, est un fournisseur clé, y compris pour l'Europe.",
      "Comme l'OPEP avec le pétrole, il préfère vendre un peu moins mais plus cher. Son patron l'a dit clairement : pas question d'« inonder le marché d'uranium bon marché » [1]."
    ],
    forMe: "Après la perte du Niger, le Kazakhstan est devenu encore plus important pour faire tourner les centrales nucléaires européennes, donc pour notre électricité.",
    figures: [
      { value: "13 291 t", label: "d'uranium produites au 1er semestre 2026", src: 1 },
      { value: "+9 %", label: "sur un an", src: 1 }
    ],
    culture: [],
    dossiers: [],
    sources: [
      { short: "World Nuclear News", name: "World Nuclear News, « Mid-year updates from major uranium producers » (août 2026)", url: "https://www.world-nuclear-news.org/articles/mid-year-updates-from-major-uranium-producers" },
      { short: "World Nuclear News", name: "World Nuclear News, « Kazatomprom to lower uranium production in 2026 »", url: "https://www.world-nuclear-news.org/articles/kazatomprom-to-lower-uranium-production-in-2026" }
    ]
  },
  {
    id: "2026-10-07-chine-terres-rares",
    date: "2026-10-07",
    theme: "geo",
    region: "Asie",
    title: "Terres rares : la Chine tient le monde entier, échéance le 10 novembre",
    summary: "Pékin a suspendu pour un an ses restrictions les plus dures sur les terres rares. La trêve expire dans un mois.",
    geo: [{ name: "Baotou (Chine)", label: "Chine", coords: [109.84, 40.66] }],
    points: [
      "Annoncées en octobre 2025, les nouvelles restrictions chinoises à l'export de terres rares sont suspendues jusqu'au 10 novembre 2026 [1].",
      "En juin 2026, la Chine a ajouté dix entreprises américaines à sa liste noire, dont le principal producteur de terres rares des États-Unis [2].",
      "Les contrôles plus anciens sur le tungstène, le bismuth ou l'indium restent en vigueur [1]."
    ],
    why: [
      "Les terres rares sont 17 métaux indispensables aux aimants des moteurs électriques, des éoliennes, des smartphones et des missiles. La Chine domine l'essentiel du raffinage mondial, ce qui lui donne un énorme moyen de pression [3].",
      "C'est la réponse de Pékin aux restrictions américaines sur les puces électroniques : chacun bloque ce dont l'autre a besoin. Le sommet Trump-Xi du 24 septembre n'a pas encore réglé la question [3]."
    ],
    forMe: "Sans terres rares, pas de voitures électriques ni d'éoliennes en Europe. Les industriels européens surveillent la date du 10 novembre de très près.",
    figures: [
      { value: "17", label: "métaux forment la famille des terres rares" },
      { value: "10 nov.", label: "fin de la suspension des restrictions chinoises", src: 1 }
    ],
    culture: [],
    dossiers: ["semi-conducteurs", "droits-de-douane"],
    sources: [
      { short: "Clark Hill", name: "Clark Hill, « China hits pause on rare-earth export controls and what it means for supply chains »", url: "https://www.clarkhill.com/news-events/news/china-hits-pause-on-rare-earth-export-controls-and-what-it-means-for-supply-chains/" },
      { short: "Al Jazeera", name: "Al Jazeera, « China adds 10 US firms, including rare-earth miner, to export control list » (22 juin 2026)", url: "https://www.aljazeera.com/news/2026/6/22/china-adds-10-us-firms-including-rare-earth-miner-to-export-control-list" },
      { short: "Rare Earth Exchanges", name: "Rare Earth Exchanges, « China rare earth export controls: November 2026 deadline explained »", url: "https://rareearthexchanges.com/news/china-rare-earth-controls-trump-xi-deadline/" }
    ]
  },
  {
    id: "2026-10-07-birmanie-terres-rares",
    date: "2026-10-07",
    theme: "geo",
    region: "Asie",
    title: "Birmanie : la guerre pour les mines de terres rares",
    summary: "Dans le nord de la Birmanie, l'armée tente de reprendre aux rebelles une région minière qui fournit une grande partie des terres rares lourdes du monde.",
    geo: [{ name: "Kachin (Birmanie)", label: "Birmanie", coords: [97.9, 25.8] }],
    points: [
      "En octobre 2024, l'Armée pour l'indépendance kachin a pris le contrôle de la ceinture minière près de la frontière chinoise [1].",
      "Depuis mai 2026, la junte birmane mène une offensive pour reprendre ces mines [1].",
      "Cette région produit environ la moitié des terres rares lourdes du monde, essentielles aux éoliennes et aux voitures électriques [1]."
    ],
    why: [
      "Les terres rares extraites en Birmanie partent presque toutes en Chine pour y être raffinées. Qui contrôle ces mines a donc un poids sur toute la chaîne mondiale [1].",
      "L'extraction, souvent illégale, pollue lourdement les rivières et les forêts. Des habitants manifestent pour exiger le départ des entreprises minières chinoises [2]."
    ],
    forMe: "La « transition verte » repose aussi sur des mines dans des zones de guerre, avec des dégâts environnementaux importants. C'est l'envers du décor des technologies propres.",
    figures: [
      { value: "≈ 50 %", label: "des terres rares lourdes du monde viennent de cette région", src: 1 }
    ],
    culture: [],
    dossiers: ["semi-conducteurs"],
    sources: [
      { short: "Asia News Network", name: "Asia News Network (Reuters), « Myanmar junta pushes to retake rare-earth belt near China border »", url: "https://asianews.network/myanmar-junta-pushes-to-retake-rare-earth-belt-near-china-border/" },
      { short: "BNI", name: "BNI Online, « Kachin residents demand Chinese rare-earth mining companies stop operations »", url: "https://www.bnionline.net/en/node/97753" }
    ]
  },
  {
    id: "2026-10-07-indonesie-nickel",
    date: "2026-10-07",
    theme: "eco",
    region: "Asie",
    title: "Indonésie : le pays du nickel serre la vis",
    summary: "Premier producteur mondial de nickel, l'Indonésie réduit sa production et contrôle davantage ses exportations. Les prix remontent.",
    geo: [{ name: "Sulawesi (Indonésie)", label: "Indonésie", coords: [121.9, -2.8] }],
    points: [
      "L'Indonésie a réduit d'environ un tiers son quota de production de minerai de nickel pour 2026 [1].",
      "À partir du 1er janvier 2027, certains produits du nickel ne pourront plus être exportés que par des entreprises d'État [2].",
      "Le prix du nickel a dépassé 18 000 dollars la tonne, au plus haut depuis deux ans [3]."
    ],
    why: [
      "Depuis 2020, l'Indonésie interdit d'exporter son minerai brut : elle oblige les industriels à construire des usines de transformation sur place, souvent avec des capitaux chinois. Le pays est ainsi devenu un géant du nickel [3].",
      "En limitant maintenant la production, Jakarta fait comme l'OPEP avec le pétrole : moins de volume pour des prix plus élevés."
    ],
    forMe: "Le nickel entre dans l'acier inoxydable de ta cuisine et dans beaucoup de batteries de voitures électriques. Quand l'Indonésie bouge, ces prix bougent.",
    figures: [
      { value: "≈ -1/3", label: "de quota de production de nickel en 2026", src: 1 },
      { value: "> 18 000 $", label: "la tonne de nickel, au plus haut depuis deux ans", src: 3 }
    ],
    culture: [],
    dossiers: [],
    sources: [
      { short: "Argus", name: "Argus Media, « Indonesia to cut nickel mining quota in 2026 »", url: "https://www.argusmedia.com/news-and-insights/latest-market-news/2787275-indonesia-to-cut-nickel-mining-quota-in-2026" },
      { short: "SMM", name: "SMM, « Indonesia government officially releases new export controls on FeNi and NPI » (juil. 2026)", url: "https://news.metal.com/newscontent/103996838-smm-tin-nhanh-niken-chính-phủ-indonesia-chính-thức-công-bố-các-biện-pháp-kiểm-soát-xuất-khẩu-mới-đối-với-feni-và-npi" },
      { short: "The Oregon Group", name: "The Oregon Group, « Can nickel prices hit $25,000 in 2026? »", url: "https://theoregongroup.com/commodities/nickel/can-nickel-prices-hit-25000-in-2026/" }
    ]
  },
  {
    id: "2026-10-07-pakistan",
    date: "2026-10-07",
    theme: "eco",
    region: "Asie",
    title: "Pakistan : 250 millions d'habitants face au choc pétrolier",
    summary: "Très dépendant du pétrole du Golfe et sous perfusion du FMI, le Pakistan est l'un des pays les plus exposés à la crise d'Ormuz.",
    geo: [{ name: "Islamabad", label: "Pakistan", coords: [73.05, 33.7] }],
    points: [
      "Le pays ne dispose que de 10 à 14 jours de réserves stratégiques de carburant [2].",
      "En mars, le gouvernement a augmenté l'essence et le diesel de 55 roupies par litre d'un coup [2].",
      "En mai, le FMI a versé 1,1 milliard de dollars dans le cadre de son programme d'aide de 7 milliards [1]."
    ],
    why: [
      "Le Pakistan importe l'essentiel de son énergie et a peu de devises en réserve. Chaque hausse de 10 dollars du baril alourdit sa facture d'importation d'environ 2 milliards de dollars par an [2].",
      "Le pays sert aussi de médiateur entre les États-Unis et l'Iran, son voisin. Mais les négociations piétinent, et avec elles l'espoir d'une baisse rapide des prix [1]."
    ],
    forMe: "Quand le pétrole flambe, les pays pauvres et importateurs souffrent bien plus que l'Europe : pour eux, c'est parfois une question de coupures d'électricité et de pénuries.",
    figures: [
      { value: "10-14 j", label: "de réserves stratégiques de carburant", src: 2 },
      { value: "7 Md$", label: "le programme d'aide du FMI", src: 1 }
    ],
    culture: [],
    dossiers: ["routes-maritimes"],
    sources: [
      { short: "SCMP", name: "South China Morning Post, « Pakistan's IMF-backed recovery under pressure as US-Iran mediation stalls »", url: "https://www.scmp.com/week-asia/economics/article/3352061/pakistans-imf-backed-recovery-under-pressure-us-iran-mediation-stalls" },
      { short: "Nukta", name: "Nukta, « Pakistan faces fresh economic shock as Hormuz closure drives oil surge »", url: "https://nukta.com/pakistan-faces-fresh-economic-shock-as-hormuz-closure-drives-oil-surge" },
      { short: "Arab News", name: "Arab News, « Pakistan warns prolonged Hormuz crisis could fuel inflation, hurt growth in developing countries »", url: "https://www.arabnews.pk/node/2641560" }
    ]
  },
  {
    id: "2026-10-07-fed",
    date: "2026-10-07",
    region: "Amériques",
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
