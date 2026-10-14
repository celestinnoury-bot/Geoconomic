// « Focus industrie » : chaque semaine, une industrie décryptée, avec un objet 3D en ouverture.
// Le plus récent en premier. Même système de sources que les actus : [n] renvoie à `sources`.
//
// `model` : modèle 3D (glTF) et crédit obligatoire.
// `hotspots` : points cliquables sur l'objet 3D. `at` = position [largeur, hauteur, longueur] en fractions
//              de la voiture (0 à 1 ; longueur 1 = l'avant), ou `part` = nom d'une pièce du modèle
//              (+ `offset` éventuel, en demi-longueurs de voiture). `eco` / `geo` = ce que la pièce dit
//              de l'économie et de la géopolitique. `links` = actus ou cours liés.

window.GEOCO = window.GEOCO || {};
window.GEOCO.focus = [
  {
    id: "automobile",
    week: "Semaine du 5 octobre 2026",
    industry: "Automobile",
    title: "La voiture électrique, nouvelle bataille mondiale.",
    hook: "Une voiture, c'est des métaux d'Afrique et d'Asie, des puces de Taïwan, des batteries chinoises et des millions d'emplois en Europe. Fais-la tourner, touche ses pièces : chacune raconte un morceau de géopolitique.",
    model: {
      src: "assets/models/supra/supra-gt300.json",
      poster: "assets/models/supra-poster.webp",
      credit: "Modèle 3D « Toyota GR Supra GT300 » de vecarz (Sketchfab), licence CC BY 4.0. Allégé pour le web."
    },
    // « L'enjeu de la semaine » : l'angle d'actualité du focus, à renouveler chaque semaine.
    // Pour le renouveler : déplacer l'enjeu actuel en tête de `pastWeekly` (en lui ajoutant `week`),
    // puis écrire le nouveau ici et mettre à jour `week` plus haut. Les anciens enjeux vont dans « Enjeux passés » (#/enjeux).
    weekly: {
      label: "L'enjeu de la semaine",
      question: "Trop de clients, pas assez de batteries : l'Europe peut-elle rattraper la Chine ?",
      paragraphs: [
        "Stellantis va arrêter quatre usines françaises en octobre. À Sochaux et à Rennes, la raison est surprenante : il manque des batteries pour les versions « grande autonomie » de ses voitures électriques, alors que les commandes suivent [12][13].",
        "Ces batteries viennent d'ACC, la coentreprise européenne créée par Stellantis, Mercedes-Benz et Saft (filiale de TotalEnergies) justement pour moins dépendre de l'Asie [13]. Elle n'arrive pas encore à suivre le rythme.",
        "Car la demande décolle : entre janvier et août 2026, les ventes de voitures 100 % électriques ont bondi de 45 % dans l'Union européenne, à 1,64 million. Au deuxième trimestre, elles ont même dépassé les voitures à essence pour la première fois, avec 22 % du marché [14][15].",
        "L'enjeu est là : l'Europe veut fabriquer ses propres batteries pour garder ses usines et ses emplois. Mais face aux géants chinois, qui produisent environ 70 % des batteries du monde [5], chaque retard laisse la place aux importations."
      ],
      figures: [
        { value: "4", label: "usines Stellantis à l'arrêt en octobre", src: 12 },
        { value: "+45 %", label: "de ventes de voitures électriques dans l'UE (janv.-août 2026)", src: 14 },
        { value: "22 %", label: "de part de marché au 2e trimestre, devant l'essence", src: 15 }
      ],
      toWatch: [
        { when: "12 octobre", text: "Mondial de l'Auto à Paris : Renault y présente un Espace électrique (concept E-Space)." },
        { when: "15 au 30 octobre", text: "Arrêts de production chez Stellantis à Mulhouse, Poissy, Rennes et Sochaux [12]." },
        { when: "10 novembre", text: "Fin de la suspension des restrictions chinoises sur les terres rares, indispensables aux moteurs électriques." },
        { when: "À venir", text: "Vote reporté du Parlement européen sur l'assouplissement de l'objectif 2035 [8]." }
      ]
    },
    // Enjeux des semaines passées, le plus récent en premier : { week, question, paragraphs, figures, toWatch }.
    pastWeekly: [],
    hotspots: [
      {
        id: "batterie", label: "Batterie", at: [0.5, 0.18, 0.5],
        title: "La batterie, le cœur (et le coût) de l'électrique",
        eco: "C'est la pièce la plus chère d'une voiture électrique. Elle contient du lithium, du nickel, du cobalt et du graphite.",
        geo: "En 2025, les fabricants chinois ont fourni environ 70 % des batteries installées dans les véhicules électriques du monde, avec en tête CATL (39 %) et BYD (16 %) [5].",
        links: [["actu", "2026-10-07-rdc-cobalt", "Le cobalt de RD Congo"], ["actu", "2026-10-07-indonesie-nickel", "Le nickel d'Indonésie"]]
      },
      {
        id: "moteur", label: "Moteur", at: [0.5, 0.5, 0.8],
        title: "Le moteur électrique et ses aimants",
        eco: "La plupart des moteurs électriques utilisent des aimants très puissants, fabriqués avec des terres rares comme le néodyme.",
        geo: "La Chine domine leur raffinage : c'est l'un de ses principaux moyens de pression sur les constructeurs du monde entier.",
        links: [["actu", "2026-10-07-chine-terres-rares", "Terres rares : l'échéance du 10 novembre"]]
      },
      {
        id: "puces", label: "Puces", at: [0.32, 0.6, 0.57],
        title: "Une voiture, c'est un ordinateur sur roues",
        eco: "Écran, aide à la conduite, gestion de la batterie : une voiture moderne contient des centaines de puces.",
        geo: "En 2021, la pénurie de semi-conducteurs a arrêté des usines automobiles dans le monde entier.",
        links: [["cours", "semi-conducteurs", "Cours : pourquoi Taïwan est au cœur du monde"]]
      },
      {
        id: "carrosserie", label: "Carrosserie", at: [0.5, 0.86, 0.42],
        title: "Acier et aluminium",
        eco: "La carrosserie et le châssis sont surtout faits d'acier et d'aluminium. Ces métaux sont aussi visés par les droits de douane américains.",
        geo: "L'acier vient du minerai de fer, dont de nouveaux géants apparaissent, comme le gisement de Simandou en Guinée.",
        links: [["actu", "2026-10-07-guinee-simandou", "Simandou, la montagne de fer"], ["cours", "droits-de-douane", "Cours : les droits de douane"]]
      },
      {
        id: "pneus", label: "Pneus", at: [0.98, 0.24, 0.24],
        title: "Le caoutchouc naturel",
        eco: "Les pneus contiennent beaucoup de caoutchouc naturel, issu de l'hévéa. Une sécheresse ou une maladie des plantations peut se retrouver dans le prix de tes pneus.",
        geo: "L'hévéa est cultivé surtout en Asie du Sud-Est. La Thaïlande en est le premier producteur mondial.",
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
    // Schéma de la chaîne de production (avant la carte) : étapes, lieux et flux affichés en 3D sur un globe.
    // `flows` : [départ, arrivée] en [longitude, latitude] ; `places` : lieux marqués à cette étape.
    chain: {
      title: "De la mine au client : la chaîne de la voiture électrique",
      intro: "Schéma simplifié des grands flux. Touche une étape : ses flèches s'allument sur le globe.",
      steps: [
        {
          id: "mines", label: "Extraire", color: "#f5a524",
          title: "Les métaux sortent de terre",
          text: "Lithium du désert d'Atacama au Chili, cobalt de RD Congo (premier producteur mondial), nickel d'Indonésie, minerai de fer de Guinée, caoutchouc de Thaïlande. Une grande partie part vers les usines de batteries, surtout en Chine.",
          links: [["actu", "2026-10-07-rdc-cobalt", "Le cobalt de RD Congo"], ["actu", "2026-10-07-indonesie-nickel", "Le nickel d'Indonésie"], ["actu", "2026-10-07-guinee-simandou", "Simandou, la montagne de fer"]],
          places: [
            { name: "Atacama (lithium)", coords: [-68.2, -23.5] }, { name: "Kolwezi (cobalt)", coords: [25.47, -10.71] },
            { name: "Sulawesi (nickel)", coords: [121.9, -2.8] }, { name: "Simandou (fer)", coords: [8.9, 8.6] },
            { name: "Thaïlande (caoutchouc)", coords: [100.5, 13.7] }
          ],
          flows: [[[-68.2, -23.5], [119.55, 26.66]], [[25.47, -10.71], [119.55, 26.66]], [[121.9, -2.8], [119.55, 26.66]]]
        },
        {
          id: "batteries", label: "Batteries", color: "#e5484d",
          title: "Raffiner les métaux et fabriquer les batteries",
          text: "La Chine domine le raffinage des terres rares et fabrique la plupart des batteries : en 2025, les fabricants chinois ont fourni environ 70 % des batteries des véhicules électriques du monde, avec en tête CATL (39 %) et BYD (16 %) [5].",
          places: [{ name: "Ningde (CATL)", coords: [119.55, 26.66] }, { name: "Shenzhen (BYD)", coords: [114.06, 22.54] }],
          flows: [[[119.55, 26.66], [10.78, 52.42]], [[119.55, 26.66], [-97.62, 30.22]], [[119.55, 26.66], [114.06, 22.54]]]
        },
        {
          id: "puces", label: "Puces", color: "#8e6bd8",
          title: "Les puces, le cerveau de la voiture",
          text: "Écran, aide à la conduite, gestion de la batterie : une voiture moderne contient des centaines de puces. Les plus avancées viennent surtout de Taïwan, au cœur des tensions avec la Chine.",
          links: [["cours", "semi-conducteurs", "Cours : pourquoi Taïwan est au cœur du monde"]],
          places: [{ name: "Hsinchu (Taïwan)", coords: [120.97, 24.8] }],
          flows: [[[120.97, 24.8], [114.06, 22.54]], [[120.97, 24.8], [10.78, 52.42]], [[120.97, 24.8], [-97.62, 30.22]]]
        },
        {
          id: "usines", label: "Assembler", color: "#5be7ff",
          title: "Assembler la voiture",
          text: "Les grandes usines : BYD à Shenzhen, devenu en 2025 le premier vendeur mondial de voitures 100 % électriques [3], Tesla au Texas, Volkswagen à Wolfsburg, Renault à Douai, où sont assemblées les Renault 5 et 4 électriques.",
          places: [
            { name: "Shenzhen (BYD)", coords: [114.06, 22.54] }, { name: "Austin (Tesla)", coords: [-97.62, 30.22] },
            { name: "Wolfsburg (Volkswagen)", coords: [10.78, 52.42] }, { name: "Douai (Renault)", coords: [3.08, 50.37] }
          ],
          flows: []
        },
        {
          id: "export", label: "Exporter", color: "#30a46c",
          title: "Exporter… et payer les droits de douane",
          text: "Les voitures électriques chinoises vendues dans l'Union européenne paient de 7,8 % à 35,3 % de taxe en plus du droit de douane normal de 10 % [6]. Les États-Unis taxent les voitures importées à 25 %, et à 15 % celles de l'Union européenne, du Japon et de la Corée du Sud [7].",
          links: [["cours", "droits-de-douane", "Cours : les droits de douane"]],
          places: [{ name: "Union européenne", coords: [4.35, 50.85] }, { name: "États-Unis", coords: [-95, 38] }],
          flows: [[[114.06, 22.54], [4.35, 50.85]], [[10.78, 52.42], [-95, 38]], [[137.15, 35.08], [-95, 38]], [[129.31, 35.54], [-95, 38]]]
        }
      ]
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
      { short: "CnEVPost", name: "CnEVPost, « Tesla beats Q3 delivery expectations but falls further behind BYD in BEV sales » (2 oct. 2026)", url: "https://cnevpost.com/2026/10/02/tesla-q3-delivery-byd-bev-sales/" },
      { short: "L'Usine Nouvelle", name: "L'Usine Nouvelle, « Stellantis met ses usines de Sochaux, Rennes, Mulhouse et Poissy au chômage partiel en octobre »", url: "https://www.usinenouvelle.com/auto/constructeurs/stellantis/stellantis-met-ses-usines-de-sochaux-rennes-et-mulhouse-au-chomage-partiel-en-octobre.LFXXPKK7C5GFFBRSVG4C56CORI.html" },
      { short: "Automobile Propre", name: "Automobile Propre, « Stellantis va mettre plusieurs usines françaises à l'arrêt faute de batteries pour ses modèles électriques »", url: "https://www.automobile-propre.com/articles/stellantis-va-mettre-plusieurs-usines-francaises-a-larret-faute-de-batteries-pour-ses-modeles-electriques/" },
      { short: "L'Automobiliste", name: "L'Automobiliste, « La voiture électrique explose en Europe avec un record historique » (5 oct. 2026), d'après Transport & Environment", url: "https://lautomobiliste.fr/05/10/2026/voiture-electrique-explose-europe-record-historique/" },
      { short: "RSE Magazine", name: "RSE Magazine, « Voiture électrique : l'Europe franchit un cap historique en 2026 »", url: "https://www.rse-magazine.com/voiture-electrique-leurope-franchit-un-cap-historique-en-2026/" },
      { short: "Boursorama", name: "Boursorama, « Trois usines françaises de Stellantis au chômage partiel en octobre » (29 sept. 2026)", url: "https://www.boursorama.com/bourse/actualites/trois-usines-francaises-de-stellantis-au-chomage-partiel-en-octobre-ee5cb3d3341f1bd725eb0425f8c70024" }
    ]
  }
];
