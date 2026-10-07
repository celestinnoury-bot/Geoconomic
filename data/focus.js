// « Focus industrie » : chaque semaine, une industrie décryptée, avec un objet 3D en ouverture.
// Le plus récent en premier. Même système de sources que les actus : [n] renvoie à `sources`.
//
// `model` : modèle 3D (glTF) et crédit obligatoire.
// `hotspots` : points cliquables sur l'objet 3D. `part` = nom de la pièce dans le modèle,
//              `offset` = décalage [x, y, z] (en demi-longueurs de voiture), `links` = actus ou cours liés.

window.GEOCO = window.GEOCO || {};
window.GEOCO.focus = [
  {
    id: "automobile",
    week: "Semaine du 5 octobre 2026",
    industry: "Automobile",
    title: "La voiture électrique, nouvelle bataille mondiale.",
    hook: "Une voiture, c'est des métaux d'Afrique et d'Asie, des puces de Taïwan, des batteries chinoises et des millions d'emplois en Europe. Fais-la tourner, touche ses pièces : chacune raconte un morceau de géopolitique.",
    model: {
      src: "assets/models/car-concept.json",
      credit: "Modèle 3D « Car Concept » d'Eric Chadwick (Darmstadt Graphics Group), d'après un modèle de Unity Fan, licence CC BY 4.0, Khronos glTF Sample Assets."
    },
    paints: [["rouge", "Rouge"], ["nacre", "Nacré"], ["graphite", "Graphite"]],
    hotspots: [
      {
        id: "batterie", label: "Batterie", part: "InteriorFloor", offset: [0, -0.05, 0],
        title: "La batterie, le cœur (et le coût) de l'électrique",
        text: "C'est la pièce la plus chère d'une voiture électrique. Elle contient du lithium, du nickel, du cobalt et du graphite. En 2025, les fabricants chinois ont fourni environ 70 % des batteries installées dans les véhicules électriques du monde, avec en tête CATL (39 %) et BYD (16 %) [5].",
        links: [["actu", "2026-10-07-rdc-cobalt", "Le cobalt de RD Congo"], ["actu", "2026-10-07-indonesie-nickel", "Le nickel d'Indonésie"]]
      },
      {
        id: "moteur", label: "Moteur", part: "Engine",
        title: "Le moteur électrique et ses aimants",
        text: "La plupart des moteurs électriques utilisent des aimants très puissants, fabriqués avec des terres rares comme le néodyme. La Chine domine leur raffinage : c'est l'un de ses principaux moyens de pression sur les constructeurs du monde entier.",
        links: [["actu", "2026-10-07-chine-terres-rares", "Terres rares : l'échéance du 10 novembre"]]
      },
      {
        id: "puces", label: "Puces", part: "InteriorDashMid", offset: [0, 0.16, 0],
        title: "Une voiture, c'est un ordinateur sur roues",
        text: "Écran, aide à la conduite, gestion de la batterie : une voiture moderne contient des centaines de puces. En 2021, la pénurie de semi-conducteurs a arrêté des usines automobiles dans le monde entier.",
        links: [["cours", "semi-conducteurs", "Cours : pourquoi Taïwan est au cœur du monde"]]
      },
      {
        id: "carrosserie", label: "Carrosserie", part: "BodyRoofPanel", offset: [0, 0.06, 0],
        title: "Acier et aluminium",
        text: "La carrosserie et le châssis sont surtout faits d'acier et d'aluminium. L'acier vient du minerai de fer, dont de nouveaux géants apparaissent, comme le gisement de Simandou en Guinée. Ces métaux sont aussi visés par les droits de douane américains.",
        links: [["actu", "2026-10-07-guinee-simandou", "Simandou, la montagne de fer"], ["cours", "droits-de-douane", "Cours : les droits de douane"]]
      },
      {
        id: "pneus", label: "Pneus", part: "WheelRear",
        title: "Le caoutchouc naturel",
        text: "Les pneus contiennent beaucoup de caoutchouc naturel, issu de l'hévéa, un arbre cultivé surtout en Asie du Sud-Est. La Thaïlande en est le premier producteur mondial. Une sécheresse ou une maladie des plantations là-bas peut se retrouver dans le prix de tes pneus.",
        links: []
      }
    ],
    figures: [
      { value: "> 20 M", label: "de voitures électriques vendues dans le monde en 2025", src: 1 },
      { value: "25 %", label: "des voitures neuves vendues en 2025 étaient électriques", src: 1 },
      { value: "13,6 M", label: "d'emplois liés à l'automobile dans l'Union européenne", src: 4 },
      { value: "2,26 M", label: "de voitures 100 % électriques vendues par BYD en 2025, contre 1,64 M pour Tesla", src: 3 }
    ],
    sections: [
      {
        title: "Ce que pèse l'automobile",
        paragraphs: [
          "En Europe, l'automobile fait vivre environ 13,6 millions de personnes, soit 8,1 % des emplois industriels, et représente plus de 8 % du PIB de l'Union européenne, selon l'association des constructeurs [4]. Elle dépense aussi 84,6 milliards d'euros par an en recherche et développement, plus que tout autre secteur [4].",
          "La France, elle, produit beaucoup moins qu'avant : 1,35 million de voitures en 2024, un million de moins qu'en 2020 [9]. La tendance repart à la hausse grâce aux modèles électriques, comme la Renault 5 fabriquée à Douai [10]."
        ]
      },
      {
        title: "L'électrique décolle, surtout en Chine",
        paragraphs: [
          "Plus de 20 millions de voitures électriques ont été vendues dans le monde en 2025, soit une voiture neuve sur quatre [1]. En Chine, elles représentent désormais plus de la moitié des ventes [2]. En Europe, leur part est montée à 28 % [1].",
          "L'Agence internationale de l'énergie prévoit 23 millions de ventes en 2026, près de 30 % du marché. La crise du pétrole liée au détroit d'Ormuz pousse encore plus de pays et de ménages vers l'électrique [1]."
        ]
      },
      {
        title: "La Chine a pris la tête",
        paragraphs: [
          "En 2025, le chinois BYD a vendu plus de voitures 100 % électriques que Tesla pour la première fois : 2,26 millions contre 1,64 million [3]. L'écart se creuse en 2026 : au troisième trimestre, BYD a écoulé environ 762 000 voitures électriques, contre 487 000 livraisons pour Tesla [11].",
          "La force de la Chine, c'est toute la chaîne : les mines et le raffinage des métaux, les batteries, les logiciels et des usines géantes. Résultat : des voitures souvent moins chères que leurs concurrentes européennes."
        ]
      },
      {
        title: "La géopolitique de la voiture",
        paragraphs: [
          "Pour protéger ses constructeurs, l'Union européenne taxe depuis 2024 les voitures électriques chinoises de 7,8 % à 35,3 % en plus du droit de douane normal de 10 %. Depuis janvier 2026, un constructeur chinois peut éviter cette taxe en s'engageant à respecter un prix minimum [6].",
          "Les États-Unis taxent les voitures importées à 25 % depuis avril 2025. Les voitures venant de l'Union européenne, du Japon et de la Corée du Sud bénéficient d'un taux réduit de 15 % grâce à des accords [7].",
          "Et l'Europe hésite sur son calendrier : la Commission a proposé fin 2025 de renoncer à l'interdiction totale des voitures thermiques neuves en 2035, remplacée par une baisse de 90 % des émissions. Le vote en commission au Parlement européen a été reporté début octobre [8]."
        ]
      }
    ],
    chart: {
      kind: "chart",
      type: "bar",
      title: "Les ventes mondiales de voitures électriques",
      subtitle: "En millions de voitures par an (électriques et hybrides rechargeables) ; 2026 = prévision",
      xLabel: "Année",
      unit: "Millions de voitures",
      decimals: 1,
      data: [["2020", 3.0], ["2021", 6.6], ["2022", 10.5], ["2023", 14.0], ["2024", 17.3], ["2025", 20.0], ["2026 (p)", 23.0]],
      source: "Agence internationale de l'énergie, Global EV Outlook 2025 et 2026 (2025 : « plus de 20 millions » ; 2026 : prévision)"
    },
    map: {
      kind: "map",
      title: "La carte de la voiture électrique",
      intro: "Usines géantes et mines stratégiques. Touche un lieu pour zoomer.",
      points: [
        { name: "Shenzhen", coords: [114.06, 22.54], zoom: 14, text: "Siège de BYD, devenu en 2025 le premier vendeur mondial de voitures 100 % électriques." },
        { name: "Ningde", coords: [119.55, 26.66], zoom: 14, text: "Siège de CATL, le premier fabricant mondial de batteries pour voitures électriques (environ 39 % du marché en 2025)." },
        { name: "Austin", coords: [-97.62, 30.22], zoom: 14, text: "La « Gigafactory Texas » de Tesla, l'une des plus grandes usines automobiles du monde." },
        { name: "Wolfsburg", coords: [10.78, 52.42], zoom: 12, text: "Siège de Volkswagen, premier constructeur européen, confronté à la concurrence chinoise." },
        { name: "Douai", coords: [3.08, 50.37], zoom: 12, text: "Le pôle « ElectriCity » de Renault, où sont assemblées la Renault 5 et la Renault 4 électriques." },
        { name: "Kolwezi", coords: [25.47, -10.71], zoom: 14, text: "Cœur de la production de cobalt en RD Congo, premier producteur mondial de ce métal des batteries." },
        { name: "Sulawesi", coords: [121.9, -2.8], zoom: 14, text: "Île indonésienne du nickel, transformé sur place dans des usines souvent financées par des capitaux chinois." },
        { name: "Atacama", coords: [-68.2, -23.5], zoom: 14, text: "Le désert chilien abrite d'immenses réserves de lithium, extrait de saumures dans les salars." }
      ],
      source: "Sites des entreprises ; SNE Research ; presse spécialisée"
    },
    forMe: "Si tu achètes une voiture dans les prochaines années, son prix dépendra autant des décisions de Bruxelles, Pékin et Washington que de la technologie. Et si tu travailles dans l'industrie, la bataille de l'électrique, c'est aussi celle de l'emploi en Europe.",
    quiz: [
      {
        q: "Quel constructeur a vendu le plus de voitures 100 % électriques en 2025 ?",
        options: ["Tesla", "Volkswagen", "BYD", "Toyota"],
        answer: 2,
        explain: "Le chinois BYD a dépassé Tesla pour la première fois en 2025, avec environ 2,26 millions de voitures 100 % électriques."
      },
      {
        q: "Quelle part des voitures neuves vendues dans le monde étaient électriques en 2025 ?",
        options: ["Environ 5 %", "Environ 10 %", "Environ 25 %", "Plus de 50 %"],
        answer: 2,
        explain: "Une voiture neuve sur quatre était électrique en 2025 selon l'Agence internationale de l'énergie. En Chine, c'est plus d'une sur deux."
      }
    ],
    sources: [
      { short: "AIE", name: "Agence internationale de l'énergie, Global EV Outlook 2026 : tendances des voitures électriques", url: "https://www.iea.org/reports/global-ev-outlook-2026/trends-in-electric-cars" },
      { short: "AIE", name: "Agence internationale de l'énergie, Global Energy Review 2026 : véhicules électriques", url: "https://www.iea.org/reports/global-energy-review-2026/technology-electric-vehicles" },
      { short: "CnEVPost", name: "CnEVPost, « Tesla loses BEV crown to BYD in 2025 » (2 janv. 2026)", url: "https://cnevpost.com/2026/01/02/tesla-q4-2025-global-deliveries/" },
      { short: "ACEA", name: "ACEA (association des constructeurs européens), « Auto industry remains the backbone of the European economy »", url: "https://www.acea.auto/message-dg/auto-industry-remains-the-backbone-of-the-european-economy-new-pocket-guide-confirms/" },
      { short: "SNE Research", name: "Classement SNE Research 2025 des fabricants de batteries, repris par Mezha", url: "https://mezha.ua/en/news/china-ev-battery-makers-lead-309527/" },
      { short: "electrive", name: "electrive, « Good-bye tariffs: EU publishes guidance on minimum price mechanism with China » (12 janv. 2026)", url: "https://www.electrive.com/2026/01/12/good-bye-tariffs-eu-publishes-guidance-on-minimum-price-mechanism-with-china/" },
      { short: "CRS", name: "Congressional Research Service, « Section 232 Automotive Tariffs: Issues for Congress » (mai 2026)", url: "https://www.everycrsreport.com/reports/IN12545.html" },
      { short: "electrive", name: "electrive, « EU Transport Committee postpones 'Auto Package' vote » (2 oct. 2026)", url: "https://www.electrive.com/2026/10/02/eu-transport-committee-postpones-auto-package-vote/" },
      { short: "Assemblée nationale", name: "Assemblée nationale, rapport de la commission des affaires économiques sur l'industrie automobile", url: "https://www.assemblee-nationale.fr/dyn/17/documents/cion-eco/l17n977630962_document" },
      { short: "L'argus", name: "L'argus, « Industrie : quels modèles sont produits en France en 2026 ? »", url: "https://www.largus.fr/actualite-automobile/industrie-quels-modeles-sont-produits-en-france-en-2026-40006411.html" },
      { short: "CnEVPost", name: "CnEVPost, « Tesla beats Q3 delivery expectations but falls further behind BYD in BEV sales » (2 oct. 2026)", url: "https://cnevpost.com/2026/10/02/tesla-q3-delivery-byd-bev-sales/" }
    ]
  }
];
