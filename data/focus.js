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
        "Ce n'est pas la première fois que la batterie freine la voiture électrique. En 1914, Henry Ford annonçait déjà une Ford T électrique, avec des batteries de Thomas Edison. Trop lentes à charger et trop chères, elles l'ont fait renoncer à la fin de l'année, après 1,5 million de dollars dépensés [40].",
        "Le prix reste le grand frein. Une analyse de France Stratégie, faite avec les prix de 2022, chiffrait le surcoût d'une citadine électrique à environ 16 000 euros à l'achat, contre environ 1 200 euros d'économies par an à l'usage [39].",
        "Et les aides publiques, qui compensaient alors la moitié à la totalité de ce surcoût, profitaient peu aux usines françaises : la plupart des voitures électriques achetées en France étaient fabriquées à l'étranger [39].",
        "L'enjeu est là : l'Europe veut fabriquer ses propres batteries pour garder ses usines et ses emplois. Mais face aux géants chinois, qui produisent environ 70 % des batteries du monde [5], chaque retard laisse la place aux importations."
      ],
      refs: [
        { p: 3, article: "voiture-champ-de-bataille", part: 1 },
        { p: 4, article: "voiture-electrique-cout", part: 2 },
        { p: 5, article: "voiture-electrique-cout", part: 6 }
      ],
      articles: ["voiture-champ-de-bataille", "voiture-electrique-cout"],
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
      // « L'essentiel » : les grands mouvements, une étiquette courte chacun (at = bout où elle s'affiche).
      keyIntro: "Les grands mouvements de la voiture électrique : les métaux filent vers les usines de batteries chinoises, les voitures chinoises vers le Mexique, la Russie et le Golfe, les pièces mexicaines vers les États-Unis, les occasions japonaises vers l'Afrique.",
      essentials: [
        { from: [25.47, -10.71], to: [119.55, 26.66], color: "#f5a524", label: "Chine : 70 % des batteries", at: "to" },
        { from: [-68.2, -23.5], to: [119.55, 26.66], color: "#f5a524" },
        { from: [121.9, -2.8], to: [119.55, 26.66], color: "#f5a524" },
        { from: [120.97, 24.8], to: [10.78, 52.42], color: "#8e6bd8", label: "Puces de Taïwan", at: "from" },
        { from: [121.47, 31.23], to: [-99.13, 19.43], color: "#30a46c", label: "Mexique : 625 000", at: "to" },
        { from: [121.47, 31.23], to: [37.62, 55.75], color: "#30a46c", label: "Russie : 583 000", at: "to" },
        { from: [121.47, 31.23], to: [55.27, 25.2], color: "#30a46c", label: "Émirats : 572 000", at: "to" },
        { from: [-100.31, 25.67], to: [-83.05, 42.33], color: "#5be7ff", label: "États-Unis : 44 % des pièces", at: "to" },
        { from: [139.64, 35.44], to: [39.67, -4.04], color: "#c08cff", label: "Kenya : occasions japonaises", at: "to" }
      ],
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
          title: "Exporter… surtout hors d'Europe",
          text: "En 2025, les premiers clients des voitures chinoises ne sont pas européens : Mexique (625 000), Russie (583 000), Émirats arabes unis (572 000), Brésil (322 000), Arabie saoudite (302 000), Philippines (257 000), Kazakhstan (212 000) [33]. En Afrique du Sud, les marques chinoises ont pris 16,8 % du marché, contre 11,2 % un an plus tôt [34]. En Asie du Sud-Est, elles font 63 % des ventes de voitures électriques [35]. Et en Europe, les voitures électriques chinoises paient de 7,8 % à 35,3 % de taxe en plus des 10 % de droit de douane [6].",
          links: [["cours", "droits-de-douane", "Cours : les droits de douane"]],
          places: [
            { name: "Mexique", coords: [-99.13, 19.43] }, { name: "Russie", coords: [37.62, 55.75] },
            { name: "Émirats", coords: [55.27, 25.2] }, { name: "Brésil", coords: [-46.63, -23.55] },
            { name: "Arabie saoudite", coords: [46.72, 24.71] }, { name: "Philippines", coords: [120.98, 14.6] },
            { name: "Kazakhstan", coords: [76.89, 43.24] }, { name: "Afrique du Sud", coords: [28.05, -26.2] },
            { name: "Union européenne", coords: [4.4, 51.22] }
          ],
          flows: [
            [[121.47, 31.23], [-99.13, 19.43]], [[121.47, 31.23], [37.62, 55.75]], [[121.47, 31.23], [55.27, 25.2]],
            [[121.47, 31.23], [-46.63, -23.55]], [[121.47, 31.23], [46.72, 24.71]], [[121.47, 31.23], [120.98, 14.6]],
            [[121.47, 31.23], [76.89, 43.24]], [[121.47, 31.23], [28.05, -26.2]], [[121.47, 31.23], [4.4, 51.22]]
          ]
        },
        {
          id: "ombre", label: "Hors radar", color: "#c08cff",
          title: "Les routes dont on parle peu",
          text: "Des voitures neuves chinoises sont immatriculées un instant en Chine puis exportées comme « occasions zéro kilomètre », surtout vers la Russie, l'Asie centrale et le Moyen-Orient : environ 6 % des exportations chinoises de 2024 [36]. Les droits de douane étant plus bas au Kirghizistan qu'en Russie, le pays est devenu depuis 2022 le deuxième fournisseur de voitures de la Russie, derrière la Chine [37]. Plus au sud, l'Afrique de l'Est roule japonais d'occasion : 94 % des voitures d'occasion importées au Kenya venaient du Japon (12 mois jusqu'à juin 2023) [38].",
          places: [
            { name: "Bichkek (Kirghizistan)", coords: [74.59, 42.87] }, { name: "Moscou", coords: [37.62, 55.75] },
            { name: "Yokohama", coords: [139.64, 35.44] }, { name: "Mombasa (Kenya)", coords: [39.67, -4.04] },
            { name: "Dar es Salaam (Tanzanie)", coords: [39.28, -6.79] }
          ],
          flows: [
            [[121.47, 31.23], [74.59, 42.87]], [[74.59, 42.87], [37.62, 55.75]],
            [[139.64, 35.44], [39.67, -4.04]], [[139.64, 35.44], [39.28, -6.79]]
          ]
        }
      ]
    },
    // Carte à couches : usines et mines, flux de pièces et de voitures, concurrence entre marchés.
    // `flows` : { name, from, to, text } (coordonnées [longitude, latitude]). Les [n] renvoient à `sources`.
    map: {
      kind: "map",
      title: "La carte de la voiture électrique",
      layers: [
        {
          id: "sites", label: "Usines et mines", color: "#f5c86b",
          intro: "Usines géantes et mines stratégiques. Touche un lieu pour zoomer.",
          points: [
            { name: "Shenzhen", coords: [114.06, 22.54], zoom: 14, text: "Siège de BYD, devenu en 2025 le premier vendeur mondial de voitures 100 % électriques [3]." },
            { name: "Ningde", coords: [119.55, 26.66], zoom: 14, text: "Siège de CATL, le premier fabricant mondial de batteries pour voitures électriques (environ 39 % du marché en 2025) [5]." },
            { name: "Austin", coords: [-97.62, 30.22], zoom: 14, text: "La « Gigafactory Texas » de Tesla, l'une des plus grandes usines automobiles du monde." },
            { name: "Wolfsburg", coords: [10.78, 52.42], zoom: 12, text: "Siège de Volkswagen, premier constructeur européen, confronté à la concurrence chinoise." },
            { name: "Douai", coords: [3.08, 50.37], zoom: 12, text: "Le pôle « ElectriCity » de Renault, où sont assemblées la Renault 5 et la Renault 4 électriques [10]." },
            { name: "Kolwezi", coords: [25.47, -10.71], zoom: 14, text: "Cœur de la production de cobalt en RD Congo, premier producteur mondial de ce métal des batteries." },
            { name: "Sulawesi", coords: [121.9, -2.8], zoom: 14, text: "Île indonésienne du nickel, transformé sur place dans des usines souvent financées par des capitaux chinois." },
            { name: "Atacama", coords: [-68.2, -23.5], zoom: 14, text: "Le désert chilien abrite d'immenses réserves de lithium, extrait de saumures dans les salars." }
          ]
        },
        {
          id: "flux", label: "Flux de pièces", color: "#5be7ff",
          intro: "Une voiture traverse plusieurs frontières avant d'être vendue. Ces flux montrent qui fournit qui. Touche une flèche.",
          view: { center: [20, 30], span: 300 },
          flows: [
            { name: "Mexique → États-Unis", from: [-100.31, 25.67], to: [-83.05, 42.33], text: "Le Mexique est le premier fournisseur de pièces automobiles des États-Unis : de janvier à octobre 2025, il a fourni 43,8 % de leurs importations de pièces, un record selon l'association mexicaine des pièces automobiles (INA) [17]." },
            { name: "Slovaquie → Europe", from: [17.11, 48.15], to: [8.68, 50.11], text: "La Slovaquie fabrique plus de voitures par habitant que tout autre pays : près de 1,1 million de véhicules en 2025, soit 196 pour 1 000 habitants, contre 22 en Chine. Volkswagen, Stellantis, Kia et Jaguar Land Rover y ont leurs usines [19]." },
            { name: "Maroc → Europe", from: [-5.81, 35.76], to: [2.35, 48.86], text: "Le Maroc a produit un million de voitures en 2025 : Renault à Tanger, Stellantis à Kénitra. À 14 km de l'Europe, le pays est devenu une base d'assemblage tournée vers l'exportation [18]." },
            { name: "Allemagne → monde", from: [10.78, 52.42], to: [-74.0, 40.71], text: "Plus de trois voitures sur quatre produites en Allemagne partent à l'étranger : 3,17 millions de voitures exportées en 2025, pour une production de 4,15 millions [20][21]." },
            { name: "Chine → monde", from: [121.47, 31.23], to: [-99.13, 19.43], text: "La Chine a exporté 7,1 millions de véhicules en 2025 (+21 %), dont 2,6 millions électriques ou hybrides rechargeables, deux fois plus qu'en 2024 [22]. Premier client : le Mexique, devant la Russie et les Émirats [33]." },
            { name: "Kirghizistan → Russie", from: [74.59, 42.87], to: [37.62, 55.75], color: "#c08cff", text: "Droits de douane plus bas qu'en Russie : depuis 2022, le Kirghizistan est devenu le deuxième fournisseur de voitures de la Russie, derrière la Chine. Une route de réexportation dont on parle peu [37]." },
            { name: "Japon → Afrique de l'Est", from: [139.64, 35.44], to: [39.67, -4.04], color: "#c08cff", text: "L'Afrique de l'Est roule japonais d'occasion : 94 % des voitures d'occasion importées au Kenya venaient du Japon (12 mois jusqu'à juin 2023) [38]." }
          ]
        },
        {
          id: "concurrence", label: "Concurrence", color: "#ff5c6c",
          intro: "Pour éviter les taxes européennes, les constructeurs chinois viennent produire sur place. En Chine, la guerre des prix pousse à exporter. Touche un lieu.",
          view: { center: [30, 30], span: 260 },
          points: [
            { name: "Szeged (BYD)", coords: [20.15, 46.25], zoom: 18, text: "Première usine européenne de BYD, en Hongrie. Elle doit lancer la production en série au 4e trimestre 2026, avec la petite Dolphin Surf, pour vendre en Europe sans payer les droits de douane sur les voitures chinoises [23]." },
            { name: "Manisa (BYD)", coords: [27.43, 38.61], zoom: 18, text: "Le projet d'usine de BYD en Turquie a été mis en pause en 2026 : la Hongrie reste sa priorité en Europe [23]." },
            { name: "Saragosse (Leapmotor)", coords: [-1.17, 41.77], zoom: 18, text: "Stellantis, allié au chinois Leapmotor, va assembler le SUV électrique B10 dans son usine de Figueruelas, près de Saragosse : la première grande usine Leapmotor hors de Chine [24]." },
            { name: "Barcelone (Chery)", coords: [2.15, 41.35], zoom: 18, text: "Dans l'ancienne usine Nissan de Barcelone, Chery assemble des modèles Omoda et Jaecoo sous la marque espagnole Ebro [25]." },
            { name: "Camaçari (BYD)", coords: [-38.32, -12.7], zoom: 18, text: "Au Brésil, BYD produit depuis juillet 2025 dans l'ancienne usine Ford de Camaçari, à Bahia [26]." },
            { name: "Union européenne", coords: [4.35, 50.85], zoom: 30, text: "Les marques chinoises ont doublé leur part du marché européen : environ 6 % des immatriculations de janvier à avril 2026, contre 3,2 % un an plus tôt [27]." },
            { name: "Chine : la guerre des prix", coords: [116.4, 39.9], zoom: 40, text: "Les usines chinoises peuvent produire 55,5 millions de véhicules par an, près des deux tiers des 91,7 millions de voitures vendues dans le monde. Le prix moyen d'une voiture y a baissé de 19 % en deux ans : trop d'usines, pas assez d'acheteurs, d'où la course à l'export [28]." }
          ]
        }
      ],
      source: "Sites des entreprises ; SNE Research ; INA ; VDA ; CAAM ; presse spécialisée (voir les sources)"
    },
    // « Face-à-face » : des voitures du même segment, qui visent les mêmes clients.
    rivals: {
      title: "Même segment, mêmes clients : le face-à-face",
      intro: "Sur un même marché, des voitures venues de pays différents se disputent les mêmes acheteurs. Comparer leurs prix montre où se joue la concurrence.",
      groups: [
        {
          title: "Les petites électriques",
          concept: "Concurrence dans une même branche",
          text: "Trois citadines électriques, trois pays d'origine, une même cible : les acheteurs qui veulent une électrique abordable. Prix catalogue au Royaume-Uni comparés par What Car? [29].",
          unit: "£", items: [
            { name: "BYD Dolphin Surf", origin: "Chine", value: 18650, label: "dès 18 650 £" },
            { name: "Citroën ë-C3 Max", origin: "France (Stellantis)", value: 23795, label: "23 795 £" },
            { name: "Renault 5 Urban Range Techno", origin: "France (Renault)", value: 24995, label: "24 995 £" }
          ]
        },
        {
          title: "La même voiture, deux prix",
          concept: "Discrimination par les prix entre marchés",
          text: "La BYD Seagull vendue en Chine et la Dolphin Surf vendue en Europe sont la même petite voiture, mais la version européenne est plus grande et plus puissante. Normes plus strictes, transport, taxes et marges : en Europe, elle coûte environ trois fois plus cher [30][31].",
          unit: "€", items: [
            { name: "BYD Seagull (Chine)", origin: "56 800 yuans", value: 7000, label: "≈ 7 000 €" },
            { name: "BYD Dolphin Surf (Europe)", origin: "prix de lancement", value: 22990, label: "22 990 €" }
          ]
        },
        {
          title: "Le choc des leaders",
          concept: "Un marché disputé",
          text: "Le Tesla Model Y reste l'électrique la plus vendue en Europe en 2026, avec plus de 34 000 ventes en juin, son meilleur mois depuis mars 2023 [32]. Mais BYD avance vite : ses ventes européennes ont bondi de 270 % en 2025, à près de 188 000 voitures [23].",
          unit: "", items: []
        }
      ]
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
      { short: "Boursorama", name: "Boursorama, « Trois usines françaises de Stellantis au chômage partiel en octobre » (29 sept. 2026)", url: "https://www.boursorama.com/bourse/actualites/trois-usines-francaises-de-stellantis-au-chomage-partiel-en-octobre-ee5cb3d3341f1bd725eb0425f8c70024" },
      { short: "Mexico Business News", name: "Mexico Business News, « Mexico Leads US Auto Parts Imports » (2025), d'après l'INA", url: "https://mexicobusiness.news/automotive/news/mexico-leads-us-auto-parts-imports-4625-share-2025" },
      { short: "AGBI", name: "AGBI, « Morocco hits 2025 production target of one million cars » (déc. 2025)", url: "https://www.agbi.com/manufacturing/2025/12/morocco-hits-2025-production-target-of-one-million-cars/" },
      { short: "ICE", name: "Agence italienne pour le commerce extérieur (ICE), note sur l'industrie automobile slovaque (mars 2026)", url: "https://www.ice.it/it/news/notizie-dal-mondo/300364" },
      { short: "VDA", name: "VDA (constructeurs allemands), « Passenger car production in 2025 slightly above previous year's level » (janv. 2026)", url: "https://www.vda.de/en/press/press-releases/2026/260106_Passenger-car-production-in-2025-slightly-above-previous-year-s-level" },
      { short: "Eurometal", name: "Eurometal (Kallanish), « Electric vehicles increase German production share in 2025 »", url: "https://eurometal.net/electric-vehicles-increase-german-production-share-in-2025/" },
      { short: "AP", name: "Associated Press, « China's car exports surged in 2025, but domestic demand slowed » (janv. 2026), d'après la CAAM", url: "https://abcnews.go.com/Business/wireStory/chinas-car-exports-surged-2025-domestic-demand-slowed-129193352" },
      { short: "EV Wire", name: "EV Wire, « BYD Hungary plant Q4 2026 production, Turkey update » (juin 2026)", url: "https://evwire.com/p/byd-hungary-plant-q4-2026-production-turkey-update" },
      { short: "New Mobility", name: "New Mobility, « Stellantis confirms Leapmotor B10 production in Zaragoza » (4 mars 2026)", url: "https://newmobility.news/2026/03/04/stellantis-confirms-leapmotor-b10-production-in-zaragoza/" },
      { short: "ClubAlfa", name: "ClubAlfa, « Stellantis hits the brakes in Spain: can Chinese EVs save the day? » (2026)", url: "https://www.clubalfa.it/en/stellantis-hits-the-brakes-in-spain-can-chinese-evs-save-the-day-42680" },
      { short: "Ford Authority", name: "Ford Authority, « BYD production at former Ford plant in Brazil has begun » (juil. 2025)", url: "https://fordauthority.com/2025/07/byd-production-at-former-ford-plant-in-brazil-has-begun/" },
      { short: "Euronews", name: "Euronews, « Chinese carmakers double EU market share as EVs drive sales growth » (27 mai 2026), d'après l'ACEA", url: "https://www.euronews.com/business/2026/05/27/chinese-carmakers-double-eu-market-share-as-evs-drive-sales-growth" },
      { short: "The Economist", name: "The Economist, « Chinese EV makers outpace BMW and Mercedes as brutal price war reshapes car industry » (repris par The Nightly)", url: "https://thenightly.com.au/business/the-economist-chinese-ev-makers-outpace-bmw-and-mercedes-as-brutal-price-war-reshapes-car-industry-c-20034651" },
      { short: "What Car?", name: "What Car?, « New BYD Dolphin Surf vs Citroën e-C3 vs Renault 5 »", url: "https://www.whatcar.com/news/new-byd-dolphin-surf-versus-citroen-e-c3-and-renault-5-video/n27830" },
      { short: "Netzwelt", name: "Netzwelt, « E-Auto für 7.000 Euro: Günstigster BYD wurde gerade noch günstiger »", url: "https://www.netzwelt.de/news/240923-e-auto-7000-euro-guenstigste-byd-wurde-gerade-noch-guenstiger.html" },
      { short: "Electrek", name: "Electrek, « BYD's cheapest EV heads to Europe with new name and more » (19 mars 2025)", url: "https://electrek.co/2025/03/19/byds-cheapest-ev-heads-to-europe-with-new-name-and-more/" },
      { short: "Best Selling Cars Blog", name: "Best Selling Cars Blog, « Europe June 2026: Tesla (+50.6%), Chinese (+130.8%) pull market up 12.9% » (juil. 2026)", url: "https://bestsellingcarsblog.com/2026/07/europe-june-2026-tesla-50-6-chinese-130-8-pull-market-up-12-9/" },
      { short: "Battery-Tech (CPCA)", name: "Battery-Tech, « China's 2025 Vehicle Exports Surge 30% Led by NEVs », d'après l'association chinoise des voitures particulières (CPCA)", url: "https://battery-tech.net/battery-markets-news/chinas-2025-vehicle-exports-surge-30-led-by-nevs/" },
      { short: "Reuters", name: "Reuters, « Chinese automakers gain ground in South Africa as competitive pricing spurs demand » (mai 2026), d'après Naamsa", url: "https://www.ajot.com/news/chinese-automakers-gain-ground-in-south-africa-as-competitive-pricing-spurs-demand" },
      { short: "Counterpoint", name: "Counterpoint Research, « Southeast Asia electric vehicle market Q2 2025 »", url: "https://counterpointresearch.com/cn/insights/sea-electric-vehicle-market-q2-2025" },
      { short: "Kun.uz", name: "Kun.uz, « The grey market loophole: how China's 'zero-kilometer' cars reach Central Asia » (25 juin 2025)", url: "https://live.kun.uz/en/news/2025/06/25/the-grey-market-loophole-how-chinas-zero-kilometer-cars-reach-central-asia" },
      { short: "Carnegie", name: "Carnegie Endowment, « China, Central Asia and electric cars » (août 2025)", url: "https://carnegieendowment.org/russia-eurasia/politika/2025/08/china-central-asia-electric-cars?lang=en" },
      { short: "Business Daily", name: "Business Daily Africa, « Kenya buys 94pc of used vehicles from Japan »", url: "https://www.businessdailyafrica.com/bd/markets/market-news/kenya-buys-94pc-of-used-vehicles-from-japan--4336552" },
      { short: "France Stratégie", name: "France Stratégie, « Voiture électrique : à quel coût ? », La Note d'analyse n° 115, novembre 2022", url: "https://shs.cairn.info/revue-la-note-d-analyse-2022-10-page-1?lang=fr" },
      { short: "Fridenson", name: "Patrick Fridenson, « Les conflits comme moteurs de la première croissance de l'industrie automobile », dans Les sciences sociales face à l'automobile, 2026", url: "https://shs.cairn.info/les-sciences-sociales-face-a-lautomobile--9791031808581-page-31?lang=fr" }
    ]
  }
];
