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
    "id": "2026-10-17-petrole-110-dollars-ormuz-ukraine",
    "date": "2026-10-17",
    "region": "Moyen-Orient",
    "theme": "mix",
    "geo": [
      {
        "name": "Détroit d'Ormuz",
        "label": "Ormuz",
        "coords": [
          56.5,
          26.5
        ]
      }
    ],
    "title": "Le pétrole retouche 110 dollars : Ormuz s'embrase et la « trêve de l'énergie » en Ukraine vole en éclats",
    "summary": "Le baril de Brent a touché 110 dollars, pour la première fois depuis mai. Des navires sont attaqués autour d'Ormuz, et Kiev a repris ses frappes sur les raffineries russes.",
    "points": [
      "Le Brent a touché 110 dollars en séance, un niveau jamais revu depuis mai, avant de clôturer à 109,86 dollars (+ 3,7 %). Le pétrole américain WTI a fini à 101,41 dollars [1].",
      "Au moins neuf pétroliers et cargos ont été attaqués depuis dimanche autour d'Ormuz. Le Commandement central américain affirme que l'Iran a coulé le porte-conteneurs GFS Pride mercredi. Selon Kpler, 9,4 millions de barils par jour ont franchi le détroit la semaine passée, environ 70 % du niveau d'avant la guerre [1].",
      "La trêve de l'énergie annoncée par Donald Trump s'est effondrée : Volodymyr Zelensky dit avoir repris les frappes sur les raffineries russes parce que Moscou n'a pas respecté le cessez-le-feu. Trump a qualifié cette décision de « honte ». Une attaque de drones aurait arrêté l'unité principale de la raffinerie de Riazan [1]."
    ],
    "why": [
      "Deux sources d'approvisionnement sont touchées en même temps : le pétrole du Golfe, qui passe par un détroit de plus en plus risqué, et le pétrole et les produits raffinés russes, visés par les drones ukrainiens. Quand l'offre inquiète, les prix montent vite [1].",
      "Cette annonce montre aussi la fragilité des « trêves » proclamées sans détails : celle de l'énergie n'aura tenu que quelques jours [1]."
    ],
    "forMe": "Un baril plus cher se paie à la pompe et sur la facture de chauffage, avec un petit délai. Si le prix reste autour de 110 dollars, l'essence et le gazole peuvent repartir à la hausse dans les semaines qui viennent.",
    "figures": [
      {
        "value": "110 $",
        "label": "plus haut du baril de Brent en séance, une première depuis mai",
        "src": 1
      },
      {
        "value": "9",
        "label": "navires attaqués depuis dimanche autour d'Ormuz, au moins",
        "src": 1
      },
      {
        "value": "≈ 70 %",
        "label": "du trafic pétrolier d'avant-guerre qui passe encore par Ormuz",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "CNBC",
        "name": "CNBC, « Brent oil touches $110 as Iran escalates Hormuz attacks, Ukraine vows to hit Russian refineries »",
        "url": "https://www.cnbc.com/2026/10/16/oil-price-today-iran-strait-hormuz-ukraine-russia.html"
      }
    ]
  },
  {
    "id": "2026-10-17-chili-bolivie-visite-kast",
    "date": "2026-10-17",
    "region": "Amériques",
    "theme": "geo",
    "geo": [
      {
        "name": "La Paz, Bolivie",
        "label": "Bolivie",
        "coords": [
          -68.15,
          -16.5
        ]
      }
    ],
    "title": "Le Chili et la Bolivie se parlent enfin : première visite d'État depuis 71 ans, mais toujours pas de mer",
    "summary": "Le président chilien José Antonio Kast est à La Paz. Les deux pays, brouillés depuis 1978, signent des accords sur les mines, l'électricité et la frontière, mais pas sur l'accès à la mer.",
    "points": [
      "Le président chilien José Antonio Kast a fait à La Paz la première visite d'État d'un dirigeant chilien en Bolivie depuis 71 ans. Les deux pays ont rompu leurs relations diplomatiques en 1978 et n'ont pas annoncé le retour des ambassades [1][2].",
      "Les ministres ont signé des accords sur l'intégration minière, l'interconnexion électrique, des corridors reliant l'Atlantique au Pacifique, la sécurité à la frontière et le statut des Boliviens installés au Chili. Les deux pays vont aussi négocier la mise à jour d'un accord commercial [1][2].",
      "L'accès souverain à la mer, que la Bolivie a perdu devant la Cour internationale de justice en 2018, n'était pas à l'ordre du jour. Le président Rodrigo Paz a rappelé que cette revendication figure dans la Constitution bolivienne, tout en disant que le passé ne doit pas freiner le développement [1][3]."
    ],
    "why": [
      "Enclavée depuis la guerre du Pacifique (1879-1884), la Bolivie fait passer environ 70 % de son commerce extérieur par les ports du nord du Chili. Normaliser la relation, c'est donc d'abord faciliter ce passage [3].",
      "Les responsables ont aussi évoqué la remise en service du chemin de fer Arica–La Paz, prévu par le traité de 1904, et un passage de frontière ouvert 24 heures sur 24 à Tambo Quemado–Chungará [1]. Kast a invité Paz au Chili en 2027 [1]."
    ],
    "forMe": "Tu n'es pas concerné au quotidien, mais c'est un bon exemple d'une idée simple : deux pays voisins, fâchés depuis près de cinquante ans, recommencent à commercer parce que leurs intérêts économiques l'emportent sur la querelle historique.",
    "figures": [
      {
        "value": "71 ans",
        "label": "depuis la dernière visite d'État d'un président chilien en Bolivie",
        "src": 3
      },
      {
        "value": "≈ 70 %",
        "label": "du commerce extérieur de la Bolivie qui passe par des ports du nord du Chili",
        "src": 3
      },
      {
        "value": "1978",
        "label": "année de la rupture des relations diplomatiques",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "MercoPress",
        "name": "MercoPress, « Kast and Paz open the way in La Paz to normalising Chile-Bolivia relations »",
        "url": "https://en.mercopress.com/2026/10/16/kast-and-paz-open-the-way-in-la-paz-to-normalising-chile-bolivia-relations"
      },
      {
        "short": "UPI",
        "name": "UPI, « Chilean, Bolivian presidents meet in La Paz for first time in 71 years »",
        "url": "https://www.upi.com/Top_News/World-News/2026/10/16/latam-bolivia-chile-kast-Paz-meet/5351792172829/"
      },
      {
        "short": "AP (Washington Times)",
        "name": "AP, « Chile's president makes first state visit to Bolivia in 71 years as region shifts right »",
        "url": "https://www.washingtontimes.com/news/2026/oct/16/chilean-president-makes-first-state-visit-bolivia-71-years-region/"
      }
    ]
  },
  {
    "id": "2026-10-17-indonesie-bourse-msci",
    "date": "2026-10-17",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Jakarta, Indonésie",
        "label": "Indonésie",
        "coords": [
          106.85,
          -6.21
        ]
      }
    ],
    "title": "La Bourse d'Indonésie perd près de 12 % en un jour, sa pire chute depuis 1998",
    "summary": "L'indice MSCI envisage de rétrograder l'Indonésie hors du club des marchés émergents. La Bourse de Jakarta s'est effondrée vendredi.",
    "points": [
      "L'indice de la Bourse de Jakarta a perdu 11,57 % vendredi et a fini à 5 185 points, son plus bas niveau de l'année. Bloomberg parle de la plus forte baisse en une séance depuis janvier 1998 [1][2].",
      "Le fournisseur d'indices MSCI a ouvert jeudi une consultation sur un possible passage de l'Indonésie du statut de marché émergent à celui de « marché autonome ». Il invoque le manque de transparence sur qui détient les actions et des soupçons de manœuvres coordonnées sur les cours [1][2].",
      "Ce n'est pas la première alerte de l'année : fin janvier, un avertissement similaire de MSCI avait déjà fait perdre environ 12 % à la Bourse et plus de 80 milliards de dollars de valeur en une semaine environ [3]."
    ],
    "why": [
      "MSCI fabrique des indices que suivent de très gros fonds. Quand un pays en sort ou est rétrogradé, ces fonds peuvent devoir vendre ses actions, ce qui explique la panique des investisseurs.",
      "La décision n'est pas prise : il s'agit d'une consultation, mais la simple menace suffit à faire chuter le marché [1][2]."
    ],
    "forMe": "Tu n'es probablement pas touché directement. C'est surtout un rappel que la confiance des investisseurs étrangers dans une Bourse peut s'évaporer en une journée quand les règles ou la transparence sont mises en doute.",
    "figures": [
      {
        "value": "− 11,57 %",
        "label": "chute de l'indice de Jakarta vendredi, à 5 185 points",
        "src": 1
      },
      {
        "value": "1998",
        "label": "dernière fois qu'une séance avait été aussi mauvaise, selon Bloomberg",
        "src": 2
      },
      {
        "value": "80 Md$",
        "label": "de valeur boursière perdue lors de l'alerte précédente de MSCI, fin janvier",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Jakarta Globe",
        "name": "Jakarta Globe, « Indonesian Stocks End at 2026 Low After Losing 11.57% on MSCI Warning »",
        "url": "https://jakartaglobe.id/business/indonesian-stocks-end-at-2026-low-after-losing-1157-on-msci-warning"
      },
      {
        "short": "Bloomberg",
        "name": "Bloomberg, « Indonesia Stocks Sink Most in 28 Years on MSCI Downgrade Warning »",
        "url": "https://www.bloomberg.com/news/articles/2026-10-15/indonesia-s-emerging-market-status-under-consultation-msci-says"
      },
      {
        "short": "Malay Mail",
        "name": "Malay Mail, « Indonesian stocks shed US$80 billion on MSCI warning »",
        "url": "https://malaymail.com/news/money/2026/02/02/gorenggoreng-saham-and-state-meddling-leave-indonesia-trailing-in-emerging-market-rally-after-us80b-wipeout/207779"
      }
    ]
  },
  {
    "id": "2026-10-17-armenie-onu-guterres-route-tripp",
    "date": "2026-10-17",
    "region": "Europe",
    "theme": "geo",
    "geo": [
      {
        "name": "Erevan, Arménie",
        "label": "Arménie",
        "coords": [
          44.51,
          40.18
        ]
      }
    ],
    "title": "Arménie : le chef de l'ONU à Erevan, une route à travers le pays pour relier l'Azerbaïdjan à son enclave, et un traité de paix toujours pas signé",
    "summary": "Antonio Guterres rencontre le Premier ministre Pachinian pendant un sommet de l'ONU sur la nature. La paix avec l'Azerbaïdjan et le projet de route TRIPP sont au menu.",
    "points": [
      "Le secrétaire général de l'ONU, Antonio Guterres, est à Erevan pour le sommet des dirigeants de la COP17, la conférence de l'ONU sur la biodiversité. Il a rencontré jeudi le Premier ministre Nikol Pachinian ; c'est le deuxième patron de l'ONU à visiter l'Arménie [1][2].",
      "Le traité de paix avec l'Azerbaïdjan, paraphé à Washington en août 2025, n'est toujours pas signé. Bakou réclame des changements dans la Constitution arménienne, et des prisonniers arméniens restent détenus en Azerbaïdjan [3].",
      "Les deux hommes ont aussi parlé de TRIPP, une route et des infrastructures qui relieraient l'Azerbaïdjan à son enclave du Nakhitchevan en traversant le sud de l'Arménie. Un accord américano-arménien prévoit une société chargée de les construire, et des études techniques ont commencé [2][3]."
    ],
    "why": [
      "L'Arménie n'a pas d'accès à la mer. Une route qui traverse son sud peut changer la carte des transports de la région, et c'est pour cela que ce projet est surveillé de près [3].",
      "En marge du sommet, le président iranien Massoud Pezeshkian a rencontré le Premier ministre géorgien et plaidé pour un calendrier de coopération plus étroit. Tbilissi avait coupé ses liaisons aériennes avec l'Iran après des sanctions américaines contre des compagnies iraniennes [4]."
    ],
    "forMe": "Une paix durable dans le Caucase rendrait les routes entre l'Asie centrale, la Turquie et l'Europe plus sûres, donc les marchandises et l'énergie qui les empruntent plus fiables. Tu ne le verras pas dans ton quotidien, mais c'est l'un des chantiers qui redessinent le commerce eurasiatique.",
    "figures": [
      {
        "value": "2e",
        "label": "secrétaire général de l'ONU à visiter l'Arménie",
        "src": 2
      },
      {
        "value": "Août 2025",
        "label": "paraphe du traité de paix à Washington, toujours non signé",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Armradio",
        "name": "Armradio, « Pashinyan, Guterres discuss Armenia-Azerbaijan peace process, TRIPP project »",
        "url": "https://en.armradio.am/2026/10/15/pashinyan-guterres-discuss-armenia-azerbaijan-peace-process-tripp-project/"
      },
      {
        "short": "Report.az",
        "name": "Report.az, « Pashinyan, Guterres discuss Armenia-Azerbaijan peace process and TRIPP »",
        "url": "https://report.az/en/region/pashinyan-guterres-discuss-armenia-azerbaijan-peace-process-and-tripp"
      },
      {
        "short": "Horizon Weekly",
        "name": "Horizon Weekly, « Guterres backs Armenia-Azerbaijan peace process as Armenian prisoners remain in Baku »",
        "url": "https://horizonweekly.ca/en/guterres-backs-armenia-azerbaijan-peace-process-as-armenian-prisoners-remain-in-baku/"
      },
      {
        "short": "Korea Times",
        "name": "Korea Times, « Iran denies nuclear ambitions, says ready for talks »",
        "url": "https://www.koreatimes.co.kr/world/20261017/iran-denies-nuclear-ambitions-says-ready-for-talks"
      }
    ]
  },
  {
    "id": "2026-10-17-kenya-ebola-deuxieme-cas",
    "date": "2026-10-17",
    "region": "Afrique",
    "theme": "mix",
    "geo": [
      {
        "name": "Nairobi, Kenya",
        "label": "Kenya",
        "coords": [
          36.82,
          -1.29
        ]
      }
    ],
    "title": "Ebola arrive au Kenya : deuxième cas confirmé chez un proche du premier patient",
    "summary": "Un homme de 39 ans, déjà isolé, est positif au virus Bundibugyo. Les autorités disent qu'il n'y a pas de transmission dans la population.",
    "points": [
      "Le ministère kényan de la Santé a confirmé le 14 octobre un deuxième cas d'Ebola : un homme de 39 ans, proche du premier malade, tombé malade le 13 octobre alors qu'il était déjà en quarantaine [1][2].",
      "Deux laboratoires, dont celui de KEMRI-CDC, ont chacun confirmé la maladie à virus Bundibugyo. Le premier patient, un Kényan de 40 ans, est mort le 5 octobre à Nairobi [1][2].",
      "Sur 128 contacts identifiés, 113 avaient été retrouvés, dont 108 en quarantaine au Kenya. Le ministère dit que les deux cas sont liés et qu'il n'y a pas de preuve de transmission plus large [1][2]."
    ],
    "why": [
      "Le Kenya est touché par une épidémie venue de République démocratique du Congo, où se concentre l'essentiel des cas. L'organisation CARE la décrit comme la deuxième plus grande épidémie d'Ebola jamais enregistrée, avec plus de 9 000 cas [3].",
      "Repérer et isoler les contacts très vite, comme le fait le Kenya, est ce qui permet de limiter la propagation [1][2]."
    ],
    "forMe": "Le risque pour toi est très faible : les cas kényans sont suivis et isolés. Mais une épidémie dans un grand pays d'Afrique de l'Est peut peser sur le tourisme, les vols et le commerce de la région.",
    "figures": [
      {
        "value": "2",
        "label": "cas confirmés au Kenya, dont 1 décès",
        "src": 1
      },
      {
        "value": "128",
        "label": "contacts identifiés par les autorités kényanes",
        "src": 1
      },
      {
        "value": "> 9 000",
        "label": "cas dans l'épidémie, presque tous en RD Congo, selon CARE",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "AP (ABC News)",
        "name": "AP, « Kenya confirms second Ebola case, a relative of first patient »",
        "url": "https://abcnews.com/International/wireStory/kenya-confirms-ebola-case-relative-patient-137261113"
      },
      {
        "short": "CBC",
        "name": "CBC, « Kenya confirms 2nd case of Ebola in relative of patient who died earlier this month »",
        "url": "https://www.cbc.ca/news/world/kenya-second-case-ebola-confirmed-9.7380626"
      },
      {
        "short": "CARE",
        "name": "CARE, « Kenya confirms second case of Ebola, as cases surpass 9,000 »",
        "url": "https://www.care.org/news-and-stories/kenya-confirms-second-case-ebola-bulletin-care-2026/"
      }
    ]
  },
  {
    "id": "2026-10-17-tanzanie-gaz-42-milliards",
    "date": "2026-10-17",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Dar es Salaam, Tanzanie",
        "label": "Tanzanie",
        "coords": [
          39.28,
          -6.82
        ]
      }
    ],
    "title": "Tanzanie : le plus gros projet de gaz du pays, 42 milliards de dollars, attend toujours sa signature",
    "summary": "Le ministre des Finances dit qu'un accord est proche avec Shell et Equinor, mais il devait être signé avant juin et ne l'est toujours pas.",
    "points": [
      "Le ministre des Finances, Khamis Mussa Omar, a dit le 13 octobre que la Tanzanie était proche d'un accord sur son projet de gaz naturel liquéfié (GNL) de 42 milliards de dollars. Les accords définitifs ne sont pas signés [1].",
      "L'objectif de les signer avant juin 2026 n'a pas été tenu. Une loi spéciale sur les investissements dans le GNL pourrait être prête d'ici la fin de 2026, selon un vice-ministre cité par bne IntelliNews [1].",
      "Le projet vise 47,13 mille milliards de pieds cubes de gaz. Equinor et Shell le pilotent, avec ExxonMobil, Pavilion Energy, Medco Energi et la société d'État TPDC [2]."
    ],
    "why": [
      "À 42 milliards de dollars, c'est le plus gros investissement jamais envisagé dans le pays, ce qui explique que le gouvernement veuille un cadre légal particulier avant de signer [2].",
      "La production ne commencerait qu'environ huit ans après la signature : l'effet économique se joue donc sur le long terme [2]."
    ],
    "forMe": "Un projet de cette taille ne se voit pas à la pompe avant des années. Mais il montre pourquoi l'Afrique de l'Est attire les géants de l'énergie, et pourquoi leurs négociations avec les États prennent si longtemps.",
    "figures": [
      {
        "value": "42 Md$",
        "label": "coût du projet de GNL, le plus gros du pays",
        "src": 2
      },
      {
        "value": "47,13",
        "label": "mille milliards de pieds cubes de gaz que le projet permettrait d'exploiter",
        "src": 2
      },
      {
        "value": "≈ 8 ans",
        "label": "entre la signature et le début de la production",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "bne IntelliNews",
        "name": "bne IntelliNews, « Tanzania nears agreement on $42bn LNG project after years of delays »",
        "url": "https://www.intellinews.com/tanzania-nears-agreement-on-42bn-lng-project-after-years-of-delays-475624"
      },
      {
        "short": "Hydrocarbon Processing",
        "name": "Hydrocarbon Processing, « Tanzania expects to sign $42-B mega LNG project before June »",
        "url": "https://hydrocarbonprocessing.com/news/2026/01/tanzania-expects-to-sign-42-b-mega-lng-project-before-june/"
      }
    ]
  },
  {
    "id": "2026-10-17-yemen-houthis-mer-rouge-aden",
    "date": "2026-10-17",
    "region": "Moyen-Orient",
    "theme": "geo",
    "geo": [
      {
        "name": "Aden, Yémen",
        "label": "Yémen",
        "coords": [
          45.03,
          12.79
        ]
      }
    ],
    "title": "Yémen : les Houthis frappent le palais du gouvernement à Aden, le Conseil de sécurité s'alarme pour la mer Rouge",
    "summary": "Après avoir pris le port de Moka le mois dernier, les rebelles attaquent la ville où siège le gouvernement. L'ONU condamne les attaques contre les aéroports, l'énergie et la navigation.",
    "points": [
      "Jeudi, une attaque contre le palais d'Al-Maashiq, à Aden, a fait 5 morts et 16 blessés selon le ministre yéménite de la Santé. Les médias proches des Houthis disent avoir visé le quartier général des opérations, dirigé par des officiers saoudiens [2].",
      "Les Houthis ont pris le port de Moka le 10 septembre, puis l'île de Perim le lendemain, au bord du détroit de Bab-el-Mandeb. Le gouvernement parle d'un « repli tactique » ; des médias yéménites ont depuis dit l'avoir repris, ce que les Houthis démentent et que nous n'avons pas pu vérifier [3].",
      "Le Conseil de sécurité de l'ONU a condamné le 15 octobre les attaques houthies contre des civils, des aéroports et des installations énergétiques, ainsi que les menaces sur la navigation en mer Rouge et dans le détroit de Bab-el-Mandeb [4]."
    ],
    "why": [
      "Bab-el-Mandeb est la porte sud de la mer Rouge : les bateaux qui vont vers le canal de Suez passent par là. Celui qui tient la côte peut menacer le passage [3][4].",
      "La guerre du Yémen se mêle à celle du Golfe : l'Arabie saoudite accuse l'Iran d'armer et d'entraîner les Houthis [2]."
    ],
    "forMe": "Si les navires évitent la mer Rouge, ils font le tour de l'Afrique : plus long et plus cher. Cela peut renchérir certains produits venus d'Asie et le transport des carburants.",
    "figures": [
      {
        "value": "5",
        "label": "morts dans l'attaque du palais d'Al-Maashiq à Aden, selon le ministre de la Santé",
        "src": 2
      },
      {
        "value": "16",
        "label": "blessés",
        "src": 2
      },
      {
        "value": "10 sept.",
        "label": "date de la prise de Moka par les Houthis",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Fighting in Yemen intensifies: What's the latest on the battlefield? »",
        "url": "https://www.aljazeera.com/news/2026/10/15/fighting-in-yemen-intensifies-whats-the-latest-on-the-battlefield"
      },
      {
        "short": "Manila Times",
        "name": "Manila Times, « Houthis attack Yemeni presidential palace »",
        "url": "https://www.manilatimes.net/2026/10/17/world/americas-emea/houthis-attack-yemeni-presidential-palace/2447502"
      },
      {
        "short": "Al Jazeera (Moka)",
        "name": "Al Jazeera, « Yemen's Houthis seize strategic Red Sea city of Mocha »",
        "url": "https://www.aljazeera.com/news/2026/9/10/yemens-houthis-seize-strategic-red-sea-city-of-mocha"
      },
      {
        "short": "Yemen Monitor",
        "name": "Yemen Monitor, « Yemen Welcomes UN Security Council's Position on Houthi Attacks on Its Territory and Saudi Arabia »",
        "url": "https://www.yemenmonitor.com/en/Details/ArtMID/908/ArticleID/185034"
      }
    ]
  },
  {
    "id": "2026-10-17-singapour-brume-poursuites-entreprises",
    "date": "2026-10-17",
    "region": "Asie",
    "theme": "mix",
    "geo": [
      {
        "name": "Singapour",
        "label": "Singapour",
        "coords": [
          103.82,
          1.35
        ]
      }
    ],
    "title": "Brume toxique : Singapour menace de poursuivre les entreprises derrière les incendies indonésiens",
    "summary": "Le Premier ministre Lawrence Wong dit chercher quelles sociétés sont responsables et évoque des poursuites. L'air est le plus pollué de l'année.",
    "points": [
      "Dans un message publié jeudi soir, le Premier ministre Lawrence Wong a dit que Singapour cherchait quelles entreprises pouvaient être responsables des incendies de forêts et de tourbières en Indonésie, et pourrait agir en vertu de sa loi contre la pollution transfrontalière [1][2].",
      "L'indice de pollution du centre de l'île a atteint jusqu'à 229 vendredi, le plus haut de l'année. Singapour vit 12 jours d'affilée d'air malsain depuis le 5 octobre, sa plus longue série depuis la crise de 2015 [3].",
      "L'Indonésie accepte l'aide étrangère, approuvée par le président Prabowo Subianto. Quatre personnes sont mortes à Java en combattant les feux [1][4]."
    ],
    "why": [
      "Poursuivre des entreprises pour une fumée qui traverse les frontières est difficile : les enquêtes dépendent de la coopération des autorités étrangères, préviennent des juristes [1].",
      "Le gouvernement singapourien a aussi accéléré la distribution de masques N95 à la population, signe que la situation est prise au sérieux [3]."
    ],
    "forMe": "Si tu voyages ou travailles en Asie du Sud-Est, la brume peut peser sur la santé et le quotidien : l'air est malsain à Singapour depuis près de deux semaines. C'est aussi un test pour savoir si les entreprises peuvent être tenues responsables de feux qui polluent d'autres pays.",
    "figures": [
      {
        "value": "229",
        "label": "indice de pollution (24 h) au centre de Singapour, record de l'année",
        "src": 3
      },
      {
        "value": "12 jours",
        "label": "d'air malsain d'affilée, la plus longue série depuis 2015",
        "src": 3
      },
      {
        "value": "4",
        "label": "morts à Java en luttant contre les incendies",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "CNBC",
        "name": "CNBC, « Gasping for clean air: Singapore battles relentless haze as Prime Minister Wong warns of action »",
        "url": "https://www.cnbc.com/2026/10/16/singapore-haze-wong-warning-indonesia.html"
      },
      {
        "short": "Japan Times",
        "name": "Japan Times, « Singapore probing firms over haze-causing Indonesian fires »",
        "url": "https://www.japantimes.co.jp/news/2026/10/16/asia-pacific/science-health/singapore-probe-haze-firms/"
      },
      {
        "short": "The Online Citizen",
        "name": "The Online Citizen, « Singapore haze: Central region's 24-hour PSI hits 229 at 3pm on 16 October, highest in 2026 »",
        "url": "https://news.theonlinecitizen.com/2026/10/16/singapore-haze-central-region-s-24-hour-psi-hits-229-at-3pm-on-16-october-highest-in-2026"
      },
      {
        "short": "Manila Times",
        "name": "Manila Times, « Indonesia fires kill 4 as haze cloaks SEA »",
        "url": "https://www.manilatimes.net/2026/10/17/world/asia-oceania/indonesia-fires-kill-4-as-haze-cloaks-sea/2447506"
      }
    ]
  },
  {
    "id": "2026-10-17-chine-ue-hybrides-terres-rares",
    "date": "2026-10-17",
    "region": "Asie",
    "theme": "mix",
    "geo": [
      {
        "name": "Pékin, Chine",
        "label": "Chine",
        "coords": [
          116.4,
          39.9
        ]
      }
    ],
    "title": "La Chine accepte de vendre deux fois moins de voitures hybrides à l'Europe, et promet une « voie rapide » pour les terres rares",
    "summary": "Après deux jours de négociations à Pékin, l'UE annonce un accord de principe sur les hybrides. Pékin dit que les terres rares continueront d'arriver en Europe.",
    "points": [
      "Le commissaire européen au Commerce, Maroš Šefčovič, a annoncé le 9 octobre que la Chine réduirait ses exportations de voitures hybrides vers l'UE, après deux jours de discussions à Pékin avec le ministre du Commerce Wang Wentao. Cela concerne les hybrides classiques et rechargeables [1][2].",
      "La « moitié » est calculée par rapport aux ventes prévues, pas aux ventes actuelles. Selon Šefčovič, cela éviterait l'arrivée de plusieurs millions de véhicules chinois en quatre ans par rapport à un scénario sans accord. Le dispositif (quotas ou engagements des constructeurs) n'est pas précisé, et l'accord doit encore être approuvé par l'UE [2].",
      "Selon CNBC, la Chine a dit le 15 octobre rester prête à faciliter par une « voie rapide » les licences d'exportation de terres rares et d'aimants vers l'Europe, même à l'approche de l'échéance de l'accord commercial avec les États-Unis. Elle demande en échange à l'UE de soutenir certaines de ses exportations dans des secteurs à double usage [3]."
    ],
    "why": [
      "Pour l'Europe, l'accord limiterait l'arrivée de véhicules chinois tout en lui faisant économiser des droits de douane [2].",
      "Les sources divergent sur ce qui est réellement acquis : les gains de droits de douane sont chiffrés différemment selon les médias, et Pékin n'a pas promis de volumes de licences de terres rares [2][3]."
    ],
    "forMe": "Si tu cherches une voiture hybride, l'offre de modèles chinois pourrait se réduire. Les terres rares, elles, servent aux aimants des voitures électriques, des éoliennes et de nombreux appareils.",
    "figures": [
      {
        "value": "÷ 2",
        "label": "exportations chinoises d'hybrides vers l'UE par rapport aux prévisions",
        "src": 2
      },
      {
        "value": "2 jours",
        "label": "de négociations à Pékin entre Šefčovič et Wang Wentao",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "CNBC (hybrides)",
        "name": "CNBC, « China, Europe agree to cut Chinese hybrid vehicle exports by over half »",
        "url": "https://www.cnbc.com/2026/10/09/china-europe-hybrid-vehicle-exports-deal.html"
      },
      {
        "short": "EU Perspectives",
        "name": "EU Perspectives, « China agrees to half hybrid exports as EU secures tariff savings »",
        "url": "https://euperspectives.eu/2026/10/china-eu-hybrid-exports-tariff-deal/"
      },
      {
        "short": "CNBC (terres rares)",
        "name": "CNBC, « China indicates rare earths will keep flowing to EU, regardless of U.S. trade deal expiration »",
        "url": "https://www.cnbc.com/2026/10/15/china-rare-earth-exports-europe.html"
      }
    ]
  },
  {
    "id": "2026-10-16-ethiopie-erythree-rupture",
    "date": "2026-10-16",
    "region": "Afrique",
    "theme": "geo",
    "geo": [
      {
        "name": "Adigrat, Tigré (nord de l'Éthiopie), près de la frontière érythréenne",
        "label": "Éthiopie",
        "coords": [
          39.46,
          14.28
        ]
      }
    ],
    "title": "L'Érythrée rompt avec l'Éthiopie, qui répète vouloir un accès à la mer Rouge",
    "summary": "Après l'expulsion de 10 diplomates érythréens, Asmara a rompu ses relations. Addis-Abeba affirme que des soldats érythréens sont entrés dans le Tigré ; l'Érythrée dément.",
    "points": [
      "L'Éthiopie a dit au Conseil de sécurité de l'ONU que des soldats érythréens avaient avancé jusqu'à 60 kilomètres à l'intérieur du Tigré, sa région du nord. L'Érythrée dément et y voit un prétexte pour faire la guerre. Reuters n'a pas pu vérifier l'incursion de façon indépendante [1][2].",
      "Les forces éthiopiennes et leurs alliés sont revenus à Adigrat, à environ 30 kilomètres de la frontière, après le retrait des troupes érythréennes. Selon ACLED, l'Éthiopie a utilisé des drones contre elles [2].",
      "L'Érythrée a annoncé rompre ses relations diplomatiques après que l'Éthiopie a expulsé 10 de ses diplomates et fermé son ambassade à Asmara [1][2]."
    ],
    "why": [
      "Un pays de plus de cent millions d'habitants sans accès à la mer menace de se brouiller avec le voisin qui a des ports. Le Premier ministre Abiy Ahmed répète que l'Éthiopie doit accéder à la mer Rouge ; il dit vouloir l'obtenir par la paix et le dialogue, mais l'Érythrée l'accuse de préparer une guerre d'agression [2].",
      "Les deux pays s'étaient réconciliés en 2018 et avaient rouvert leurs postes-frontières, puis les relations se sont à nouveau dégradées. Les combats ont aussi repris entre l'armée éthiopienne et une alliance d'opposition qui inclut le TPLF, ce qui fragilise l'accord de paix de novembre 2022 [2]."
    ],
    "forMe": "Tu n'es pas touché directement, mais la mer Rouge est une route du commerce mondial. Un nouveau conflit dans la Corne de l'Afrique ajoute un risque de plus dans une région déjà tendue.",
    "figures": [
      {
        "value": "60 km",
        "label": "avancée affirmée de soldats érythréens dans le Tigré, selon l'Éthiopie (non vérifiée)",
        "src": 2
      },
      {
        "value": "10",
        "label": "diplomates érythréens expulsés par l'Éthiopie",
        "src": 2
      },
      {
        "value": "≈ 30 km",
        "label": "distance entre Adigrat et la frontière érythréenne",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "AP (KSAT)",
        "name": "AP, « Eritrean forces seen entering towns in Ethiopia's Tigray region after crossing border »",
        "url": "https://www.ksat.com/news/world/2026/10/08/eritrean-forces-seen-entering-towns-in-ethiopias-tigray-region-after-crossing-border/"
      },
      {
        "short": "Reuters (The Star)",
        "name": "Reuters, « Ethiopian forces regain control of border city after reported Eritrean incursion »",
        "url": "https://www.thestar.com.my/news/world/2026/10/10/ethiopian-forces-regain-control-of-border-city-after-reported-eritrean-incursion"
      }
    ]
  },
  {
    "id": "2026-10-16-namibie-boeuf-europe-fievre-aphteuse",
    "date": "2026-10-16",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Karasburg, sud de la Namibie",
        "label": "Namibie",
        "coords": [
          18.75,
          -28
        ]
      }
    ],
    "title": "L'Europe ferme sa porte au bœuf namibien à cause de la fièvre aphteuse",
    "summary": "Depuis le 6 octobre, l'Union européenne a suspendu une partie des importations de viande de Namibie, après une épidémie dans le sud du pays.",
    "points": [
      "Un règlement européen adopté le 2 octobre est entré en vigueur le 6 octobre : il suspend les importations de bœuf frais, de viande de mouton et de chèvre, de certains animaux à sabots d'élevage ou sauvages, et de produits comme le biltong [1][3].",
      "La fièvre aphteuse a été confirmée dans une ferme commerciale du district de Karasburg ; l'épidémie a été déclarée le 22 septembre et touchait 11 fermes [1][2].",
      "Des exceptions existent : la viande ayant subi le traitement européen le plus strict contre le risque peut entrer, et la viande fraîche certifiée avant le 23 septembre peut encore arriver pendant 90 jours. L'accès préférentiel de la Namibie au marché européen reste inchangé [3]."
    ],
    "why": [
      "L'Union européenne est de loin le premier client de la viande de bœuf namibienne : plus de 80 % de ses exportations de bœuf [1].",
      "Le secteur était déjà fragile : les exportations de bœuf ont reculé de 41,1 % entre 2024 et 2025, de 22,7 millions à 13,4 millions de kilos, selon la Namibia Meat Board [1]. Des acheteurs européens se tournent déjà vers d'autres fournisseurs [2]."
    ],
    "forMe": "Si tu achètes de la viande importée, il se peut que d'autres pays prennent la place de la Namibie dans les rayons. Pour les éleveurs namibiens, c'est une perte de revenus immédiate.",
    "figures": [
      {
        "value": "> 80 %",
        "label": "part de l'Union européenne dans les exportations de bœuf de la Namibie",
        "src": 1
      },
      {
        "value": "− 41,1 %",
        "label": "baisse des exportations de bœuf namibien entre 2024 et 2025",
        "src": 1
      },
      {
        "value": "11",
        "label": "fermes touchées par l'épidémie",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Africanews",
        "name": "Africanews, « EU suspends imports of meat from Namibia over FMD fears »",
        "url": "https://www.africanews.com/2026/10/06/eu-suspends-imports-of-meat-from-namibia-over-fmd-fears/"
      },
      {
        "short": "The Namibian",
        "name": "The Namibian, « EU beef buyers turn to other suppliers amid FMD »",
        "url": "https://www.namibian.com.na/eu-beef-buyers-turn-to-other-suppliers-amid-fmd/"
      },
      {
        "short": "UE (SEAE)",
        "name": "Délégation de l'UE en Namibie, « EU Statement on the foot and mouth disease outbreak in Namibia »",
        "url": "https://www.eeas.europa.eu/delegations/namibia/eu-statement-foot-and-mouth-disease-outbreak-namibia_en"
      }
    ]
  },
  {
    "id": "2026-10-16-afghanistan-route-wakhan-chine",
    "date": "2026-10-16",
    "region": "Asie",
    "theme": "mix",
    "geo": [
      {
        "name": "Corridor du Wakhan, de Broghil à la frontière chinoise (Afghanistan)",
        "label": "Afghanistan",
        "coords": [
          73.8,
          37
        ]
      }
    ],
    "title": "Les talibans ouvrent une route vers la Chine pour ne plus dépendre du Pakistan",
    "summary": "Une route de 121 kilomètres relie désormais le couloir du Wakhan, dans le nord-est de l'Afghanistan, à la frontière chinoise. Elle ne fait pas encore un vrai passage commercial.",
    "points": [
      "Le gouvernement taliban a inauguré le 4 octobre une route de 121 kilomètres qui va de Broghil, en face du district pakistanais de Chitral, jusqu'au « point zéro » de la frontière chinoise [1][2].",
      "Elle a coûté environ 365 millions d'afghanis, soit près de 5,5 millions de dollars, et a été construite par des ingénieurs afghans, sans conseillers étrangers [1]. Selon un commentateur pakistanais, elle n'est pas goudronnée [2].",
      "Pour Asia Times, ouvrir la route ne signifie pas qu'un passage commercial fonctionne déjà [1]."
    ],
    "why": [
      "Jusqu'ici, l'Afghanistan, pays sans mer, dépend du Pakistan pour ses marchandises : elles passent par Karachi et par les postes de Torkham et de Chaman [2]. Cette route donne un chemin vers la Chine qui évite le territoire pakistanais [1][2].",
      "Le contexte pèse : l'Afghanistan se plaint de frappes aériennes pakistanaises, que le Pakistan dit viser des militants, et la Chine s'inquiète de groupes armés près du Xinjiang [1]. Pour Pékin, c'est aussi une manière de moins dépendre du Pakistan et du corridor CPEC [1]."
    ],
    "forMe": "Cela n'a pas d'effet direct sur tes courses, mais c'est un exemple clair : quand un pays est coincé, il construit une route ailleurs pour changer ses dépendances.",
    "figures": [
      {
        "value": "121 km",
        "label": "longueur de la route, de Broghil à la frontière chinoise",
        "src": 1
      },
      {
        "value": "≈ 5,5 M$",
        "label": "coût de la route (365 millions d'afghanis)",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Asia Times",
        "name": "Asia Times, « Afghan road to China tests Pakistan's power and leverage »",
        "url": "https://asiatimes.com/2026/10/afghan-road-to-china-tests-pakistans-power-and-leverage/"
      },
      {
        "short": "Pakistan Observer",
        "name": "Pakistan Observer, « Road through Wakhan: Turning a bypass into a bridge »",
        "url": "https://pakobserver.net/?p=781142"
      }
    ]
  },
  {
    "id": "2026-10-16-venezuela-fmi-pas-de-dollar",
    "date": "2026-10-16",
    "region": "Amériques",
    "theme": "eco",
    "geo": [
      {
        "name": "Caracas, Venezuela",
        "label": "Venezuela",
        "coords": [
          -66.9,
          10.5
        ]
      }
    ],
    "title": "Le Venezuela dit non au dollar et présente au FMI son plan pétrole et mines",
    "summary": "Le 14 octobre, à Bangkok, le vice-président à l'Économie a promis plus de pétrole et de minerais pour réparer l'eau et l'électricité, et a écarté la dollarisation.",
    "points": [
      "Le vice-président à l'Économie, Calixto Ortega, a présenté le 14 octobre aux réunions annuelles du FMI et de la Banque mondiale, à Bangkok, un plan pour augmenter la production de pétrole et de minerais et en réinvestir les recettes dans l'eau et l'électricité, négligées depuis une dizaine d'années [3].",
      "Il a écarté d'adopter le dollar américain comme monnaie du pays : le bolívar doit, à terme, servir pour toute l'économie intérieure. La banque centrale parle d'une « remonétisation progressive » du bolívar et vise à moyen terme un objectif d'inflation [1][2][3].",
      "Le FMI dit discuter d'un bureau technique dans le pays, mais le Venezuela n'a pas demandé de programme de financement [3]."
    ],
    "why": [
      "Le Venezuela essaie de rouvrir sa porte à la finance mondiale. Le FMI prévoit +5 % de croissance en 2026 et +7 % en 2027, mais une inflation de 467,9 % fin 2026 : le prix de tout continue d'exploser [3][4].",
      "Refuser le dollar est un choix politique autant qu'économique : cela garde une monnaie nationale, mais il faudra la rendre crédible. Selon le Rio Times, la présidente par intérim Delcy Rodríguez dirige le pays depuis la capture de Nicolás Maduro par les forces américaines en janvier 2026 [3]."
    ],
    "forMe": "Le Venezuela a de très grandes réserves de pétrole. Plus il produit, plus l'offre mondiale peut augmenter, ce qui pèse sur le prix à la pompe, mais le chemin est encore long.",
    "figures": [
      {
        "value": "+ 5 %",
        "label": "croissance prévue par le FMI au Venezuela en 2026 (+ 7 % en 2027)",
        "src": 4
      },
      {
        "value": "467,9 %",
        "label": "inflation prévue par le FMI pour fin 2026",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "dollar",
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Descifrado",
        "name": "Descifrado, « BCV dice ante el FMI que busca “una remonetización progresiva” del bolívar »",
        "url": "https://www.descifrado.com/2026/10/14/bcv-dice-ante-el-fmi-que-busca-una-remonetizacion-progresiva-del-bolivar/"
      },
      {
        "short": "Última Hora",
        "name": "Diario Última Hora, « Venezuela presenta al FMI cuatro pilares para consolidar estabilidad macroeconómica »",
        "url": "https://www.diarioultimahoradigital.com.ve/2026/10/15/venezuela-presenta-al-fmi-cuatro-pilares-para-consolidar-estabilidad-macroeconomica/"
      },
      {
        "short": "Rio Times",
        "name": "The Rio Times, « Venezuela Pitches Oil and Mining Plan to the IMF in Bangkok »",
        "url": "https://www.riotimesonline.com/venezuela-oil-and-mining-plan-imf-2026"
      },
      {
        "short": "Últimas Noticias",
        "name": "Últimas Noticias, « IMF projects that Venezuela's economy will grow by 5% in 2026 »",
        "url": "https://en.ultimasnoticias.com.ve/actualidad/fmi-proyecta-que-la-economia-de-venezuela-crecera-5-en-2026/"
      }
    ]
  },
  {
    "id": "2026-10-16-costa-rica-megaprison",
    "date": "2026-10-16",
    "region": "Amériques",
    "theme": "geo",
    "geo": [
      {
        "name": "La Reforma, San Rafael de Alajuela (Costa Rica)",
        "label": "Costa Rica",
        "coords": [
          -84.25,
          10.03
        ]
      }
    ],
    "title": "Le Costa Rica prévoyait d'ouvrir une mégaprison de 5 100 places, copiée sur celle du Salvador",
    "summary": "Le centre de haute sécurité contre le crime organisé devait ouvrir le 14 octobre. Il s'inspire de la prison géante de Nayib Bukele au Salvador.",
    "points": [
      "Le Costa Rica a annoncé l'ouverture, prévue le mercredi 14 octobre à 12 h 30, de son Centre de haute contention contre le crime organisé (CACCO), dans le complexe pénitentiaire de La Reforma [1]. Nous n'avons pas trouvé de compte rendu de la cérémonie elle-même.",
      "La prison a une capacité de 5 100 détenus et s'inspire du CECOT, la méga-prison salvadorienne ; le Salvador a donné les plans. Son coût tourne autour de 35 millions de dollars [2][3].",
      "Les médias costaricains annonçaient la présence de Nayib Bukele et du président colombien, sans confirmation de la présidence. Des organisations de défense des droits humains dénoncent des abus au CECOT, ce que le gouvernement salvadorien nie [1][2]."
    ],
    "why": [
      "Le Costa Rica, longtemps connu pour sa tranquillité, copie une méthode dure venue de son voisin face à la montée du crime organisé. La nouvelle présidente Laura Fernández assume ce modèle [4].",
      "Le projet doit augmenter de 40 % la capacité des prisons du pays [3]. Reste à voir si ce choix réduira vraiment la violence."
    ],
    "forMe": "Tu verras peut-être ce modèle cité dans d'autres pays : la sécurité devient un sujet central pour les élections en Amérique latine.",
    "figures": [
      {
        "value": "5 100",
        "label": "places dans la nouvelle prison",
        "src": 2
      },
      {
        "value": "+ 40 %",
        "label": "hausse de la capacité carcérale du Costa Rica prévue par le projet",
        "src": 3
      },
      {
        "value": "≈ 35 M$",
        "label": "coût estimé",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "El Mundo (Salvador)",
        "name": "Diario El Mundo, « Costa Rica inaugurará el 14 de octubre su megacárcel inspirada en el CECOT »",
        "url": "https://diario.elmundo.sv/el-mundo/costa-rica-inaugurara-el-14-de-octubre-su-megacarcel-inspirada-en-el-cecot"
      },
      {
        "short": "Bloomberg Línea",
        "name": "Bloomberg Línea, « Costa Rica está por inaugurar su “megacárcel” : así es la prisión inspirada en el Cecot de Bukele »",
        "url": "https://www.bloomberglinea.com/latinoamerica/costa-rica/costa-rica-esta-por-inaugurar-su-megacarcel-asi-es-la-prision-inspirada-en-el-cecot-de-bukele/"
      },
      {
        "short": "Reuters (Internazionale)",
        "name": "Reuters, « Costa Rica, weeks before election, hosts El Salvador President Bukele to inaugurate new mega-prison »",
        "url": "https://www.internazionale.it/ultime-notizie-reuters/2026/01/15/costa-rica-weeks-before-election-hosts-el-salvador-president-bukele-to-inaugurate-new-mega-prison"
      },
      {
        "short": "Artículo 14",
        "name": "Artículo 14, « La presidenta de Costa Rica, Laura Fernández, abraza el modelo Bukele con una megacárcel »",
        "url": "https://www.articulo14.es/internacional/la-presidenta-de-costa-rica-laura-fernandez-abraza-el-modelo-bukele-con-una-megacarcel-para-combatir-el-crimen-organizado-20261008.html"
      }
    ]
  },
  {
    "id": "2026-10-16-grece-un-milliard-energie-clause-derogation",
    "date": "2026-10-16",
    "region": "Europe",
    "theme": "eco",
    "geo": [
      {
        "name": "Athènes, Grèce",
        "label": "Grèce",
        "coords": [
          23.73,
          37.98
        ]
      }
    ],
    "title": "Bruxelles autorise la Grèce à dépenser un milliard d'euros pour son énergie hors du plafond de dépenses",
    "summary": "L'Union européenne a accepté d'étendre à l'énergie la « clause de sauvegarde » grecque : batteries, pompes à chaleur et trains financés par le pays lui-même.",
    "points": [
      "Le 9 octobre, l'Union européenne a accepté, pour la Grèce seulement, d'étendre la clause de dérogation nationale existante aux dépenses de résilience énergétique [1][2].",
      "La Grèce prévoit environ un milliard d'euros d'investissements : stockage d'énergie, équipements des ménages, bâtiments publics et transports. Elle les finance avec ses propres ressources, pas par une nouvelle subvention européenne [1][2].",
      "Parmi les projets : 200 millions d'euros pour des batteries associées aux énergies renouvelables, 200 millions pour des pompes à chaleur et des chauffe-eau solaires, et 320 millions pour la sécurité et l'extension du réseau ferré [2]."
    ],
    "why": [
      "Normalement, un pays européen doit limiter la hausse de ses dépenses. Ici, la Grèce peut dépasser cette limite jusqu'à 0,3 % du PIB par an, et 0,6 % au total jusqu'en 2028, pour ces dépenses d'énergie [1][2].",
      "Attention : ces sommes comptent quand même dans le déficit et dans la dette [1][2]. L'exception fait aussi de l'énergie un sujet de souveraineté : les États européens veulent mieux se protéger quand les prix s'envolent."
    ],
    "forMe": "Si tu paies tes factures d'énergie, c'est le genre de décision qui, à terme, peut aider à les stabiliser. Pour l'instant, c'est un signal que Bruxelles assouplit ses règles pour l'énergie.",
    "figures": [
      {
        "value": "≈ 1 Md€",
        "label": "investissements énergétiques grecs concernés",
        "src": 1
      },
      {
        "value": "0,3 % du PIB",
        "label": "dépassement annuel autorisé, jusqu'à 0,6 % au total en 2028",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Greek Reporter",
        "name": "Greek Reporter, « EU Gives Green Light for Greece's €1 Billion Energy Investment Plan »",
        "url": "https://greekreporter.com/2026/10/10/energy-investment-greece-eu/"
      },
      {
        "short": "To Vima",
        "name": "To Vima, « Greece Wins EU Approval to Spend More on Energy Resilience »",
        "url": "https://www.tovima.com/finance/greece-wins-eu-approval-to-spend-more-on-energy-resilience/"
      }
    ]
  },
  {
    "id": "2026-10-16-irak-syrie-petrole-contourner-ormuz",
    "date": "2026-10-16",
    "region": "Moyen-Orient",
    "theme": "mix",
    "geo": [
      {
        "name": "Baniyas, côte syrienne",
        "label": "Syrie",
        "coords": [
          35.95,
          35.18
        ]
      }
    ],
    "title": "Pour contourner Ormuz, l'Irak se tourne vers la Syrie : de l'essence en camion, un oléoduc en projet",
    "summary": "Un terminal syrien reçoit de l'essence destinée à l'Irak, et un oléoduc irakien traversant la Syrie est à l'étude.",
    "points": [
      "La Syrie a commencé à acheminer de l'essence importée vers l'Irak par son terminal pétrolier de Baniyas, dans le cadre d'un accord de trois mois renouvelable, selon l'agence officielle syrienne rapportée par des analystes. Le passage frontalier entre les deux pays sert déjà au commerce de pétrole et de gaz [2][3].",
      "Un réseau irakien d'oléoducs irait de Haditha à Baniyas en traversant la Syrie, avec une capacité initiale d'environ deux millions de barils par jour, ce qui permettrait à l'Irak d'exporter sans passer par le détroit d'Ormuz [1].",
      "Le FMI attribue la contraction de l'économie du Moyen-Orient en 2026 à la fermeture prolongée d'Ormuz [4]."
    ],
    "why": [
      "Quand un détroit se ferme, il faut une autre porte de sortie. L'Irak, très dépendant du pétrole, cherche une sortie par la Méditerranée, via un pays qui sort à peine de la guerre civile [1].",
      "Rien n'est encore construit : les analystes parlent d'une opportunité plus que d'un fait accompli, avec de grandes difficultés de sécurité et de financement [1]. Les chiffres du trafic viennent surtout des médias d'État syriens et des analyses, donc ils restent à prendre avec prudence [2][3]."
    ],
    "forMe": "Plus il y a de routes pour sortir le pétrole du Golfe, moins un blocage d'Ormuz fait grimper le prix de l'essence en France. Ces solutions restent pourtant partielles.",
    "figures": [
      {
        "value": "≈ 2 M b/j",
        "label": "capacité initiale envisagée pour l'oléoduc Haditha–Baniyas",
        "src": 1
      },
      {
        "value": "3 mois",
        "label": "durée, renouvelable, de l'accord sur l'essence transitant par Baniyas",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Chatham House",
        "name": "Chatham House, « New energy and trade routes could bypass Hormuz and change the Middle East. But major challenges remain »",
        "url": "https://www.chathamhouse.org/2026/09/new-energy-and-trade-routes-could-bypass-hormuz-and-change-middle-east-major-challenges"
      },
      {
        "short": "Jerusalem Post",
        "name": "The Jerusalem Post, « Iraq-Syria border becoming the Middle East's most important new energy corridor »",
        "url": "https://www.jpost.com/middle-east/article-909969"
      },
      {
        "short": "Centre Alma",
        "name": "Alma Research and Education Center, « The New Oil Route from Iraq to Syria »",
        "url": "https://israel-alma.org/the-new-oil-route-from-iraq-to-syria-an-economic-corridor-becoming-an-operational-opportunity-for-iran/"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Middle East and Central Asia's economy to shrink in 2026 amid war, IMF says »",
        "url": "https://www.aljazeera.com/economy/2026/10/13/middle-east-and-central-asias-economy-to-shrink-in-2026-amid-war-imf-says"
      }
    ]
  },
  {
    "id": "2026-10-16-casca-plus-rail-asie-centrale-europe",
    "date": "2026-10-16",
    "region": "Asie",
    "theme": "mix",
    "geo": [
      {
        "name": "Tachkent, Ouzbékistan (réunion des chemins de fer)",
        "label": "Corridor CASCA+",
        "coords": [
          69.24,
          41.3
        ]
      }
    ],
    "title": "Six chemins de fer d'Asie centrale et du Caucase s'allient pour faire passer plus de marchandises de Chine vers l'Europe",
    "summary": "Réunis à Tachkent, les opérateurs ferroviaires de six pays ont signé un protocole pour accélérer le fret sur la route « CASCA+ ».",
    "points": [
      "Les 7 et 8 octobre, à Tachkent, les chemins de fer de l'Azerbaïdjan, du Kirghizistan, de l'Ouzbékistan, du Turkménistan, de la Géorgie et de la Turquie ont signé un protocole sur la route CASCA+ [1][2].",
      "À l'ordre du jour : augmenter les volumes de fret, proposer des tarifs compétitifs pour les conteneurs réfrigérés, garantir un approvisionnement régulier en wagons porte-conteneurs et réduire le temps d'attente des conteneurs dans les ports [1].",
      "Le « plus » de CASCA+ signifie que d'autres pays intéressés pourront rejoindre la route. L'objectif est d'augmenter le trafic venant d'Asie, en particulier de Chine, vers l'Europe [1][3]."
    ],
    "why": [
      "Aujourd'hui, une grande partie des échanges Chine–Europe passe par la mer ou par la Russie. Ces pays veulent faire de leurs voies ferrées une alternative qui passe par le sud, via la Caspienne et le Caucase.",
      "Les sources consultées ne donnent ni objectif de volume ni tarifs précis : c'est un accord de méthode, pas encore une preuve de résultats [1]."
    ],
    "forMe": "Beaucoup d'objets que tu achètes viennent d'Asie. Plus il existe de routes pour les transporter, moins un blocage sur l'une d'elles pèse sur les délais et les prix.",
    "figures": [
      {
        "value": "6",
        "label": "réseaux ferroviaires signataires du protocole",
        "src": 1
      },
      {
        "value": "7-8 oct.",
        "label": "dates de la réunion de Tachkent",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Caspian Post",
        "name": "Caspian Post, « Six Countries Sign Deal to Expand CASCA+ Transport Corridor »",
        "url": "https://caspianpost.com/azerbaijan/six-countries-sign-deal-to-expand-casca-transport-corridor"
      },
      {
        "short": "Kun.uz",
        "name": "Kun.uz, « Uzbekistan and partner countries sign protocol to expand CASCA+ rail corridor »",
        "url": "https://kun.uz/en/04742370"
      },
      {
        "short": "Trend",
        "name": "Trend, « Uzbekistan, five countries sign protocol to develop CASCA+ route »",
        "url": "https://www.trend.az/casia/uzbekistan/4232753.html"
      }
    ]
  },
  {
    "id": "2026-10-15-pont-yalou-coree-du-nord",
    "date": "2026-10-15",
    "region": "Asie",
    "theme": "mix",
    "geo": [
      {
        "name": "Sinuiju et Dandong, sur le fleuve Yalou",
        "label": "Corée du Nord",
        "coords": [
          124.4,
          40.1
        ]
      }
    ],
    "title": "La Chine et la Corée du Nord ouvrent enfin leur pont neuf, fermé pendant douze ans",
    "summary": "Un pont à quatre voies de plus de 3 kilomètres, terminé côté chinois en 2014, a accueilli ses premiers camions le 15 octobre. Il doit désengorger la frontière entre les deux pays.",
    "points": [
      "Le nouveau pont du Yalou, entre Dandong (Chine) et Sinuiju (Corée du Nord), a ouvert le 15 octobre 2026 : des camions aux couleurs des deux pays ont commencé à rouler dans les deux sens en fin de matinée, selon des reporters de l'AFP [2].",
      "C'est un pont à quatre voies d'environ 3 026 mètres. La Chine a fini sa partie en 2014 ; officiellement, il manquait côté nord-coréen des routes d'accès et des installations de douane [2][3].",
      "Jusqu'ici, le fret passait surtout par l'ancien « pont de l'Amitié », bâti en 1943, qui n'a que deux voies. Les négociants espèrent que le trafic va se répartir, et que le volume de marchandises pourrait presque doubler, même si les sanctions contre Pyongyang limitent ce qu'on peut vraiment y échanger [2][3]."
    ],
    "why": [
      "Ce pont répond à une question simple : par où passent les marchandises d'un pays très isolé ? Ce couloir porte environ 70 % des échanges entre la Chine et la Corée du Nord, donc une seconde route change vraiment la capacité de commerce [3].",
      "Le moment compte aussi : les relations entre Pékin et Pyongyang se sont réchauffées depuis 2018 et Xi Jinping s'est rendu à Pyongyang en juin [2]. L'ouverture a eu lieu un jour après un tir de missiles de croisière depuis un sous-marin, annoncé par l'agence nord-coréenne KCNA [2]. L'agence de presse officielle nord-coréenne n'avait pas, au départ, rendu compte de l'ouverture [2]."
    ],
    "forMe": "Tu n'achètes rien qui vienne de Corée du Nord, mais ce pont montre comment un pays sous sanctions garde un accès à son voisin géant. Plus cette porte s'ouvre, plus les sanctions occidentales pèsent moins lourd dans les faits.",
    "figures": [
      {
        "value": "≈ 3 km",
        "label": "longueur du pont, à quatre voies (l'ancien pont de l'Amitié n'en a que deux)",
        "src": 2
      },
      {
        "value": "≈ 70 %",
        "label": "part de ce couloir dans les échanges entre la Chine et la Corée du Nord",
        "src": 3
      },
      {
        "value": "12 ans",
        "label": "entre la fin des travaux côté chinois (2014) et l'ouverture",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "sanctions"
    ],
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « China and North Korea to open New Yalu River Bridge, state media reports »",
        "url": "https://www.aljazeera.com/news/2026/10/14/china-and-north-korea-to-open-new-yalu-river-bridge-state-media-reports"
      },
      {
        "short": "Manila Times",
        "name": "Manila Times (AFP), « New bridge between China, North Korea opens »",
        "url": "https://www.manilatimes.net/2026/10/15/world/new-bridge-between-china-north-korea-opens/2446180"
      },
      {
        "short": "Seoul Economic Daily",
        "name": "Seoul Economic Daily, « New Yalu River Bridge Opens After 12-Year Delay »",
        "url": "https://en.sedaily.com/international/2026/10/14/new-yalu-river-bridge-opens-after-12-year-delay"
      }
    ]
  },
  {
    "id": "2026-10-15-nord-stream-proces-hambourg",
    "date": "2026-10-15",
    "region": "Europe",
    "theme": "geo",
    "geo": [
      {
        "name": "Hambourg",
        "label": "Allemagne",
        "coords": [
          9.99,
          53.55
        ]
      }
    ],
    "title": "Qui a fait sauter Nord Stream ? Un ex-soldat ukrainien est jugé à Hambourg",
    "summary": "Le procès de l'unique accusé du sabotage des gazoducs de 2022 s'est ouvert le 14 octobre en Allemagne. Il nie les faits et garde le silence.",
    "points": [
      "Le procès s'est ouvert mercredi 14 octobre 2026 devant la cour régionale supérieure de Hambourg. Le seul accusé est Serhii K., ancien soldat ukrainien (écrit aussi Kuznetsov ou Kuznietsov), poursuivi pour complicité de crime de guerre, explosion et destruction de biens ; il risque jusqu'à 15 ans de prison [1][2].",
      "Selon l'accusation, il serait entré en Allemagne en septembre 2022 avec un faux passeport ukrainien, puis aurait loué un yacht avec six complices pour poser les explosifs. L'acte d'accusation affirme que l'opération aurait été menée pour le compte d'organismes d'État ukrainiens [1][2].",
      "L'accusé nie, a choisi de se taire à l'audience, et sa défense juge les preuves « indirectes » : ses empreintes n'ont pas été retrouvées sur le yacht. Il avait été arrêté en Italie en août 2025, puis envoyé en Allemagne ; les audiences doivent durer jusqu'au début de l'an prochain [1][2][3]."
    ],
    "why": [
      "Ce procès est le premier à examiner en justice qui a détruit des gazoducs par lesquels le gaz russe arrivait en Allemagne. Quatre ans après les explosions, la justice allemande met enfin un nom sur l'enquête, mais un seul homme est jugé [1][3].",
      "Le dossier est aussi un test pour les lois de la guerre : un soldat qui agit sur ordre peut-il être jugé comme un criminel de guerre pour avoir visé une infrastructure civile ? Et l'enquête allemande évoque un ordre venu de l'État ukrainien, un sujet délicat pour un allié de Berlin [1][2]."
    ],
    "forMe": "Ces gazoducs ont longtemps fait venir du gaz russe bon marché en Europe, et leur destruction fait partie de ce qui a fait monter les factures d'énergie en 2022. Savoir qui les a visés, c'est aussi savoir si les réseaux d'énergie en mer sont protégés.",
    "figures": [
      {
        "value": "15 ans",
        "label": "peine maximale encourue par l'accusé",
        "src": 2
      },
      {
        "value": "6",
        "label": "complices présumés, selon l'accusation, à bord du yacht",
        "src": 1
      },
      {
        "value": "Août 2025",
        "label": "arrestation de l'accusé en Italie",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "CNN",
        "name": "CNN, « Nord Stream sabotage trial is getting underway. Here's a refresher »",
        "url": "https://www.cnn.com/2026/10/14/europe/nord-stream-sabotage-trial-ukraine-russia-intl"
      },
      {
        "short": "Courthouse News",
        "name": "Courthouse News, « Nord Stream sabotage trial opens against ex-Ukrainian officer »",
        "url": "https://www.courthousenews.com/nord-stream-sabotage-trial-opens-against-ex-ukrainian-officer/"
      },
      {
        "short": "Kyiv Independent",
        "name": "Kyiv Independent, « Germany puts Ukrainian on trial over Nord Stream sabotage »",
        "url": "https://kyivindependent.com/germany-puts-ukrainian-on-trial-over-nord-stream-sabotage/"
      }
    ]
  },
  {
    "id": "2026-10-15-soudan-frappe-mine-or",
    "date": "2026-10-15",
    "region": "Afrique",
    "theme": "geo",
    "geo": [
      {
        "name": "Nord du Soudan, près de la frontière égyptienne",
        "label": "Soudan",
        "coords": [
          33.5,
          21.8
        ]
      }
    ],
    "title": "Soudan : une frappe aérienne sur une mine d'or près de l'Égypte tue 72 personnes, selon une ONG",
    "summary": "Le chef de l'armée soudanaise a ouvert une enquête sur une frappe survenue le 10 octobre près de la frontière avec l'Égypte. Une organisation accuse Le Caire ; l'Égypte n'a pas commenté.",
    "points": [
      "Le samedi 10 octobre, une frappe aérienne a touché un site d'extraction d'or dans la zone de Jabal al-Uqaydat, près de la frontière égyptienne, et tué 72 personnes selon l'organisation Emergency Lawyers, qui accuse l'Égypte d'en être l'auteur [1][2].",
      "Le lundi 12 octobre, le général Abdel Fattah al-Burhan a créé un comité d'enquête réunissant magistrats, procureurs et représentants des forces de sécurité [1][2].",
      "L'AFP n'a pas pu vérifier ces accusations. L'Égypte n'a fait aucun commentaire officiel ; son ministre des Affaires étrangères a appelé son homologue soudanais pour rappeler le respect de l'intégrité territoriale de chaque pays [2]."
    ],
    "why": [
      "Cette zone borde le triangle de Halaïb, que le Soudan et l'Égypte revendiquent tous les deux : une frappe sur une mine d'or à cet endroit peut transformer un conflit interne en crise entre deux pays voisins [2].",
      "Les chiffres restent très incertains : d'autres groupes, dont le parti Oumma, avancent un bilan de 200 morts, bien au-dessus des 72 annoncés [3]. Tant que l'enquête n'a pas rendu ses conclusions, il faut surtout retenir qu'il s'agit d'accusations non prouvées."
    ],
    "forMe": "L'or est une valeur refuge que beaucoup d'épargnants achètent quand le monde s'inquiète. Une partie vient de mines artisanales, parfois dans des zones en guerre : chaque frappe sur un site minier rappelle que le métal brillant a aussi une origine très concrète.",
    "figures": [
      {
        "value": "72",
        "label": "morts annoncés par Emergency Lawyers (d'autres groupes parlent de 200)",
        "src": 1
      },
      {
        "value": "10 octobre",
        "label": "date de la frappe, sur le site de Jabal al-Uqaydat",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Africanews",
        "name": "Africanews, « Sudan army chief al-Burhan orders probe into airstrike that killed 72 »",
        "url": "https://www.africanews.com/2026/10/13/sudan-army-chief-al-burhan-orders-probe-into-airstrike-that-killed-72/"
      },
      {
        "short": "Kuwait Times",
        "name": "Kuwait Times (AFP), « Sudan army orders probe into border airstrike that killed 72 »",
        "url": "https://kuwaittimes.com/article/51475/world/africa/sudan-army-orders-probe-into-border-airstrike-that-killed-72/"
      },
      {
        "short": "Asharq Al-Awsat",
        "name": "Asharq Al-Awsat, « Sudan's al-Burhan orders investigation into deadly airstrike on gold mine »",
        "url": "https://english.aawsat.com/node/5328978"
      }
    ]
  },
  {
    "id": "2026-10-15-egypte-canal-de-suez-sur-rails",
    "date": "2026-10-15",
    "region": "Afrique",
    "theme": "mix",
    "geo": [
      {
        "name": "Aïn Sokhna, mer Rouge",
        "label": "Égypte",
        "coords": [
          32.35,
          29.6
        ]
      }
    ],
    "title": "L'Égypte construit un « canal de Suez sur rails » pour relier la mer Rouge à la Méditerranée",
    "summary": "Face aux perturbations en mer Rouge, Le Caire mise sur une ligne à grande vitesse de 2 000 km et huit couloirs logistiques. La capacité restera petite à côté du canal.",
    "points": [
      "Le ministre égyptien de l'Économie, Ahmed Rostom, présente le rail et les infrastructures comme un moyen pour les négociants de faire passer des marchandises entre la mer Rouge et la Méditerranée [1].",
      "Le projet central est une ligne électrifiée à grande vitesse d'environ 2 000 km, estimée à 8,7 milliards de dollars et surnommée « Suez Canal on Rails » [1]. L'Égypte a aussi commencé huit couloirs logistiques entre les deux mers [2].",
      "Les autorités comptent sur environ 15 millions de tonnes de fret par an, soit à peu près 3 % du volume qui a transité par le canal de Suez l'an dernier [3]."
    ],
    "why": [
      "L'idée est de ne plus dépendre d'une seule voie d'eau. Les armateurs ont évité la mer Rouge à cause des attaques, et l'Égypte, qui vit en partie des péages du canal, cherche un moyen de garder les marchandises sur son territoire [1].",
      "Il faut pourtant relativiser : 15 millions de tonnes, c'est bien peu à côté du canal [3]. Un autre média décrit d'ailleurs ce train comme un complément du canal, pas un remplaçant [4]. C'est une assurance, pas une alternative complète."
    ],
    "forMe": "Ce que tu achètes en ligne qui vient d'Asie passe très souvent par Suez. Quand cette route est bloquée, les trajets s'allongent et les prix du transport montent ; chaque nouvelle voie, même petite, réduit un peu ce risque.",
    "figures": [
      {
        "value": "≈ 2 000 km",
        "label": "longueur de la ligne à grande vitesse, électrifiée",
        "src": 1
      },
      {
        "value": "8,7 Md$",
        "label": "coût estimé du projet",
        "src": 1
      },
      {
        "value": "≈ 3 %",
        "label": "part du trafic du canal de Suez que le rail pourrait absorber (15 Mt par an)",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Africanews",
        "name": "Africanews, « Egypt to build a rail link as an alternative to the blocked Suez Canal »",
        "url": "https://www.africanews.com/2026/10/14/egypt-to-build-a-rail-link-as-an-alternative-to-the-blocked-suez-canal/"
      },
      {
        "short": "RailFreight",
        "name": "RailFreight, « Egypt plans new corridors to create a 'Suez Canal on rails' »",
        "url": "https://www.railfreight.com/intermodal/2026/10/14/egypt-plans-new-corridors-to-create-a-suez-canal-on-rails/"
      },
      {
        "short": "Hürriyet Daily News",
        "name": "Hürriyet Daily News, « Egypt high-speed trains to connect Red Sea, Mediterranean »",
        "url": "https://www.hurriyetdailynews.com/amp/egypt-high-speed-trains-to-connect-red-sea-mediterranean-217138"
      },
      {
        "short": "Newsweek",
        "name": "Newsweek, « Egypt's Megaproject That Will Rival Suez Canal »",
        "url": "https://www.newsweek.com/egypts-megaproject-that-will-rival-suez-canal-11265842"
      }
    ]
  },
  {
    "id": "2026-10-15-rdc-kabila-front-rebelle",
    "date": "2026-10-15",
    "region": "Afrique",
    "theme": "geo",
    "geo": [
      {
        "name": "Goma",
        "label": "RD Congo",
        "coords": [
          29.22,
          -1.68
        ]
      }
    ],
    "title": "RD Congo : l'ancien président Kabila prend la tête d'un mouvement armé qui remplace l'AFC/M23",
    "summary": "Joseph Kabila préside le nouveau « Front pour la refondation de la nation », annoncé à Goma le 12 octobre. Le gouvernement n'a pas encore réagi.",
    "points": [
      "Le 12 octobre 2026, à Goma, Joseph Kabila a été nommé président du Front pour la refondation de la nation (FRN), un mouvement politico-militaire qui succède à l'alliance AFC/M23 [1][2].",
      "Corneille Nangaa et Bertrand Bisimwa en sont vice-présidents, et Sultani Makenga chef d'état-major de la défense [1][3].",
      "Le mouvement dit vouloir mettre fin à ce qu'il appelle la « tyrannie » par tous les moyens, y compris la force. Kabila avait été condamné à mort par contumace il y a un an pour complicité avec le M23, ce qu'il a toujours nié ; le gouvernement de Félix Tshisekedi n'avait pas encore réagi [1][2]."
    ],
    "why": [
      "Un ancien chef d'État qui prend officiellement la tête d'une rébellion, c'est un tournant : le conflit de l'est du Congo cesse d'être seulement une affaire de groupes armés pour devenir un affrontement politique ouvert contre le pouvoir de Kinshasa [1][2].",
      "Reste une inconnue : la déclaration ne dit pas clairement ce que devient le M23 en tant que mouvement [3]. C'est l'un des points à suivre dans les prochains jours."
    ],
    "forMe": "L'est du Congo est une région minière dont les métaux se retrouvent dans l'électronique. Un conflit qui se durcit ajoute de l'incertitude sur ces approvisionnements, sans qu'on puisse chiffrer l'effet à ce stade.",
    "figures": [
      {
        "value": "12 octobre",
        "label": "annonce du FRN à Goma",
        "src": 1
      },
      {
        "value": "1 an",
        "label": "depuis la condamnation à mort de Kabila par contumace",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Africanews",
        "name": "Africanews, « Former DRC president Kabila to lead new group replacing AFC/M23 »",
        "url": "https://www.africanews.com/2026/10/13/former-drc-president-kabila-to-lead-new-group-replacing-afcm23/"
      },
      {
        "short": "EWN",
        "name": "Eyewitness News, « Former DR Congo president Kabila forms new force with M23 armed group »",
        "url": "https://www.ewn.co.za/2026/10/13/former-dr-congo-president-kabila-forms-new-force-with-m23-armed-group"
      },
      {
        "short": "The New Times",
        "name": "The New Times, « DR Congo: Kabila leads new movement with ex-AFC/M23 leaders as deputies »",
        "url": "https://www.newtimes.co.rw/article/39623/news/africa/dr-congo-kabila-leads-new-movement-with-ex-afcm23-leaders-as-deputies/amp"
      }
    ]
  },
  {
    "id": "2026-10-15-ormuz-cargo-coule-mine",
    "date": "2026-10-15",
    "region": "Moyen-Orient",
    "theme": "geo",
    "geo": [
      {
        "name": "Détroit d'Ormuz",
        "label": "Ormuz",
        "coords": [
          56.3,
          26.55
        ]
      }
    ],
    "title": "Ormuz : les Gardiens de la Révolution disent qu'un cargo a coulé sur une mine, une première dans cette guerre",
    "summary": "Les attaques dans le détroit seraient à un niveau record : 15 incidents recensés entre le 6 et le 14 octobre, dont 11 en quatre jours. Macron prépare une tournée dans le Golfe.",
    "points": [
      "Le centre britannique UKMTO a recensé 15 attaques dans le détroit d'Ormuz entre le 6 et le 14 octobre, dont 11 au cours des quatre derniers jours [1].",
      "Les Gardiens de la Révolution iraniens affirment qu'un cargo a coulé après avoir heurté une mine navale ; ce serait le premier naufrage de ce type annoncé depuis le début de la guerre. Il s'agit de leur version, pas d'un constat indépendant [1].",
      "Emmanuel Macron doit se rendre au Koweït, aux Émirats, à Bahreïn et au Qatar du 19 au 21 octobre pour parler d'Ormuz et du prix de l'énergie [2]."
    ],
    "why": [
      "Une mine est plus dangereuse qu'un tir : elle reste dans l'eau et menace tous les navires, même longtemps après. C'est pourquoi un naufrage de ce genre, s'il est confirmé, pèse sur les assureurs et les armateurs bien au-delà du jour de l'incident [1].",
      "Le détroit est une route clé pour le pétrole du Golfe. Chaque incident de plus fait craindre des flux qui s'effondrent à nouveau, comme le suggère le titre d’Al Jazeera [1]."
    ],
    "forMe": "Quand le trafic baisse dans ce détroit, le pétrole devient plus cher et ça finit à la pompe et sur les factures de transport. La visite de Macron montre que Paris s'en inquiète pour de vrai.",
    "figures": [
      {
        "value": "15",
        "label": "attaques recensées par l'UKMTO entre le 6 et le 14 octobre",
        "src": 1
      },
      {
        "value": "11",
        "label": "de ces attaques, survenues au cours des quatre derniers jours",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Iran steps up Hormuz surveillance: Attacks soar, oil flows crash again »",
        "url": "https://www.aljazeera.com/news/2026/10/14/iran-steps-up-hormuz-surveillance-attacks-soar-oil-flows-crash-again"
      },
      {
        "short": "The National",
        "name": "The National, « Middle East latest: Saudi Arabia intercepts Houthi drone in eastern region »",
        "url": "https://thenationalnews.com/news/mena/2026/10/15/live-saudi-arabia-drone-houthis-yemen"
      }
    ]
  },
  {
    "id": "2026-10-15-fmi-moyen-orient-recession",
    "date": "2026-10-15",
    "region": "Moyen-Orient",
    "theme": "eco",
    "geo": [
      {
        "name": "Koweït",
        "label": "Koweït",
        "coords": [
          47.98,
          29.37
        ]
      },
      {
        "name": "Manama",
        "label": "Bahreïn",
        "coords": [
          50.58,
          26.23
        ]
      }
    ],
    "title": "Le FMI prévoit que l'économie du Moyen-Orient va reculer, avec des chutes à deux chiffres au Koweït, en Irak, au Qatar et à Bahreïn",
    "summary": "Le FMI table désormais sur un recul de 0,3 % pour le Moyen-Orient et l'Asie centrale, contre une croissance de 1,9 % annoncée il y a six mois, à cause de la fermeture plus longue d'Ormuz.",
    "points": [
      "Dans ses prévisions d'octobre, le FMI annonce que l'économie du Moyen-Orient et de l'Asie centrale va se contracter de 0,3 % en 2026, alors qu'il prévoyait une croissance de 1,9 % six mois plus tôt [1][2].",
      "Il explique ce changement par une fermeture du détroit d'Ormuz plus longue que dans son scénario d'avril. Irak, Koweït, Qatar et Bahreïn sont les plus touchés : des contractions à deux chiffres en 2026, suivies de rebonds à deux chiffres en 2027 [1][3].",
      "L'Arabie saoudite devrait reculer de 3,3 %, un des pays les moins touchés grâce à des routes d'exportation plus variées, mais cette prévision date d'avant les récentes attaques contre l'aéroport de Riyad [1]."
    ],
    "why": [
      "Un recul de l'économie dans une région qui vend l'énergie du monde est rare : il montre à quel point la guerre et le blocage du détroit coûtent cher, même à des pays très riches [1][3].",
      "Le FMI parie sur un grand rebond en 2027 à condition que le détroit rouvre. Si la crise dure, ces chiffres seront révisés à la baisse : tout dépend donc de la fin du conflit [1]."
    ],
    "forMe": "Tu ne le vois pas dans ton porte-monnaie du jour au lendemain, mais une région qui produit autant de pétrole et de gaz qui s'affaiblit, c'est un risque pour les prix de l'énergie et pour les exportations françaises vers le Golfe.",
    "figures": [
      {
        "value": "-0,3 %",
        "label": "prévision du FMI pour le Moyen-Orient et l'Asie centrale en 2026 (contre +1,9 % il y a six mois)",
        "src": 1
      },
      {
        "value": "-3,3 %",
        "label": "prévision pour l'Arabie saoudite en 2026",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Oman Observer",
        "name": "Oman Observer, « IMF cuts Middle East growth outlook due to disruptions »",
        "url": "https://www.omanobserver.om/article/1197709/business/economy/imf-cuts-middle-east-growth-outlook-due-to-disruptions"
      },
      {
        "short": "Al-Ahram",
        "name": "Al-Ahram (AFP), « IMF slashes Middle East growth outlook due to war disruptions »",
        "url": "https://english.ahram.org.eg/News/578816.aspx"
      },
      {
        "short": "Kuwait Times",
        "name": "Kuwait Times, « IMF slashes Middle East growth outlook due to war disruptions »",
        "url": "https://kuwaittimes.com/article/51536/business/imf-slashes-middle-east-growth-outlook-due-to-war-disruptions/"
      }
    ]
  },
  {
    "id": "2026-10-15-alberta-referendum-separation",
    "date": "2026-10-15",
    "region": "Amériques",
    "theme": "mix",
    "geo": [
      {
        "name": "Edmonton, Alberta",
        "label": "Alberta",
        "coords": [
          -113.49,
          53.55
        ]
      }
    ],
    "title": "Alberta : la province pétrolière du Canada vote lundi sur la voie de l'indépendance",
    "summary": "Le 19 octobre, les Albertains répondent à dix questions. La dernière ne ferait qu'ouvrir la porte à un futur référendum, mais le pétrole et les pipelines sont en jeu.",
    "points": [
      "Le référendum a lieu le lundi 19 octobre 2026. Les questions 1 à 9 portent sur des politiques publiques ; la question 10 demande si la province doit lancer le processus vers un éventuel référendum contraignant sur la séparation [1][3].",
      "Un « oui » ne ferait donc pas sortir l'Alberta du Canada : il ouvrirait seulement la voie à un autre référendum, après une évaluation d'Ottawa dans le cadre de la loi sur la clarté. Les sondages montrent depuis longtemps que l'indépendance est loin de convaincre la grande majorité des Albertains [1][3].",
      "La première ministre Danielle Smith défend une « Alberta souveraine dans un Canada uni » ; le premier ministre Mark Carney parle d'un « bluff dangereux » et compare à l'épisode du Brexit [1][2]."
    ],
    "why": [
      "L'Alberta envoie plus des deux tiers de ses exportations de pétrole aux États-Unis, et ce brut arrive souvent aux raffineries américaines par des oléoducs qui traversent d'autres provinces. Les analystes jugent qu'un « oui » ne perturberait pas les flux tout de suite, mais poserait des questions durables sur le transit, les règles de commerce et la confiance des investisseurs [3].",
      "Une étude de l'université de Calgary estime le coût initial de l'indépendance entre 50 et 170 milliards de dollars sur cinq ans [3]. Le résultat dira surtout à quel point la colère contre Ottawa, notamment sur les règles environnementales, pèse dans les urnes [3]."
    ],
    "forMe": "Le Canada est un grand fournisseur de pétrole de ses voisins américains. Une crise politique là-bas pourrait un jour peser sur le prix du brut et sur les accords commerciaux nord-américains, dont les droits de douane sont déjà un sujet chaud.",
    "figures": [
      {
        "value": "19 octobre",
        "label": "date du référendum en Alberta",
        "src": 1
      },
      {
        "value": "> 2/3",
        "label": "part des exportations de pétrole de l'Alberta qui vont aux États-Unis",
        "src": 3
      },
      {
        "value": "50 à 170 Md$",
        "label": "coût initial estimé de l'indépendance sur cinq ans (étude de l'université de Calgary)",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "Lethbridge Herald",
        "name": "Lethbridge Herald (La Presse canadienne), « Alberta is to vote on holding a separation referendum. A timeline on how we got here »",
        "url": "https://lethbridgeherald.com/news/national-news/2026/10/10/alberta-is-to-vote-on-holding-a-separation-referendum-a-timeline-on-how-we-got-here/"
      },
      {
        "short": "CBC",
        "name": "CBC, « The Alberta question: How separatists took hold of the province's governing party »",
        "url": "https://www.cbc.ca/news/canada/the-alberta-question-9.7371294"
      },
      {
        "short": "Rio Times",
        "name": "The Rio Times, « Alberta's 19 October Referendum Explained »",
        "url": "https://www.riotimesonline.com/alberta-referendum-explained-2026/"
      }
    ]
  },
  {
    "id": "2026-10-14-botswana-de-beers",
    "date": "2026-10-14",
    "region": "Afrique",
    "theme": "mix",
    "geo": [
      {
        "name": "Gaborone",
        "label": "Botswana",
        "coords": [
          25.91,
          -24.65
        ]
      }
    ],
    "title": "Diamants : le Botswana s'apprête à peser plus lourd dans De Beers, le géant que son propriétaire veut vendre",
    "summary": "Selon Bloomberg, le Botswana serait près de monter de 15 % à environ 25 % du capital de De Beers. L'accord n'est pas signé, mais il lèverait un obstacle majeur à la vente du groupe.",
    "points": [
      "Le Botswana et le Global Diamond Consortium (GDC) seraient près d'un accord qui ferait passer la part de l'État dans De Beers de 15 % à environ 25 %, selon des sources citées par Bloomberg ; rien n'est encore signé, et les termes précis restent flous [1][2].",
      "Le GDC, mené par l'ancien patron de De Beers Gareth Penny, a été choisi en juillet comme candidat préféré pour racheter De Beers à Anglo American, qui en détient environ 85 % [2].",
      "Le GDC compte aussi la Namibie et l'Angola : les trois États réunis auraient moins de 50 %, et des investisseurs privés garderaient le contrôle, alors que le président botswanais Duma Boko avait dit vouloir une majorité [1]."
    ],
    "why": [
      "Le diamant fait vivre le Botswana : la part que l'État détient dans De Beers pèse donc bien plus qu'un simple placement. Tant que le pays n'était pas d'accord, la vente du groupe restait bloquée [2].",
      "Si l'accord se confirme, le Botswana n'obtiendrait pas le contrôle qu'il réclamait, mais une place plus grande à la table. Ce serait aussi un rare cas où trois pays africains producteurs s'allient pour racheter ensemble un géant mondial de leur propre ressource [1]."
    ],
    "forMe": "Les bagues et les bijoux en diamant que tu vois en vitrine passent presque tous par De Beers. Qui possède ce groupe influence l'offre de diamants, donc leur prix, et décide de la part qui reste dans les pays producteurs.",
    "figures": [
      {
        "value": "15 % → ~25 %",
        "label": "part du Botswana dans De Beers, selon Bloomberg (pas encore signé)",
        "src": 1
      },
      {
        "value": "~85 %",
        "label": "part d'Anglo American dans De Beers, vendeur",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Moneyweb",
        "name": "Moneyweb, « Botswana said to near agreement on size of its De Beers stake »",
        "url": "https://www.moneyweb.co.za/news/companies-and-deals/botswana-said-to-near-agreement-on-size-of-its-de-beers-stake/"
      },
      {
        "short": "bne IntelliNews",
        "name": "bne IntelliNews, « Botswana reportedly nears deal for 25% De Beers stake as Anglo American sale advances »",
        "url": "https://www.intellinews.com/botswana-reportedly-nears-deal-for-25-de-beers-stake-as-anglo-american-sale-advances-475658/"
      }
    ]
  },
  {
    "id": "2026-10-14-coree-puces-chute-bourse",
    "date": "2026-10-14",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Séoul",
        "label": "Corée du Sud",
        "coords": [
          126.98,
          37.57
        ]
      }
    ],
    "title": "Séoul : la Bourse s'effondre de plus de 5 % en une séance, à cause d'un fabricant chinois de mémoires",
    "summary": "Le Kospi a perdu 5,5 % mardi. Les investisseurs craignent qu'un concurrent chinois de Samsung et SK hynix fasse baisser les prix des puces mémoire.",
    "points": [
      "Le Kospi, l'indice de la Bourse de Séoul, a clôturé mardi 13 octobre à 6 035,35 points, en baisse de 5,46 %, après avoir perdu jusqu'à 7,41 % en séance [1][2].",
      "La chute a suivi l'annonce du chinois CXMT, qui prévoit de lancer d'ici la fin de l'année une mémoire DRAM pour serveurs d'un nouveau type ; les analystes y voient un risque de pression sur les prix pour les fabricants sud-coréens [1].",
      "Les investisseurs étrangers ont vendu pour 4 530 milliards de wons (environ 3,4 milliards de dollars) d'actions, et l'indice a perdu près de 14 % en cinq séances [1]."
    ],
    "why": [
      "La Corée du Sud vit en grande partie de ses puces mémoire : Samsung et SK hynix pèsent très lourd à la Bourse. Quand la crainte d'un rival chinois apparaît, tout l'indice vacille [1].",
      "Les États-Unis ont longtemps cherché à freiner la Chine sur les puces. Cette séance montre que Pékin avance quand même dans la mémoire, et que les marchés le prennent au sérieux. Le recul de l'enthousiasme pour l'IA et un pétrole proche d'un plus haut de deux semaines ont aussi joué, selon la presse [1]."
    ],
    "forMe": "Les puces mémoire sont dans ton téléphone, ton ordinateur et les serveurs de l'IA. Si un nouveau fabricant fait baisser leurs prix, tes appareils peuvent coûter moins cher à terme, mais l'économie d'un pays comme la Corée du Sud en souffre.",
    "figures": [
      {
        "value": "−5,46 %",
        "label": "chute du Kospi le 13 octobre, à 6 035,35 points",
        "src": 1
      },
      {
        "value": "3,4 Md$",
        "label": "actions vendues par les investisseurs étrangers en une séance",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "semi-conducteurs"
    ],
    "sources": [
      {
        "short": "KED Global",
        "name": "KED Global, « Kospi tumbles as chip rout deepens, briefly breaking below 6,000 »",
        "url": "https://www.kedglobal.com/korean-stock-market/newsView/ked202610130001"
      },
      {
        "short": "Ajupress",
        "name": "Ajupress, « KOSPI plunges over 5% as foreign selloff batters chip giants »",
        "url": "https://www.ajupress.com/view/20261013171446394"
      }
    ]
  },
  {
    "id": "2026-10-14-chine-sanctions-belize-paraguay",
    "date": "2026-10-14",
    "region": "Amériques",
    "theme": "geo",
    "geo": [
      {
        "name": "Asunción",
        "label": "Paraguay",
        "coords": [
          -57.58,
          -25.28
        ]
      },
      {
        "name": "Belmopan",
        "label": "Belize",
        "coords": [
          -88.77,
          17.25
        ]
      }
    ],
    "title": "Pékin sanctionne deux ministres d'Amérique latine parce que leurs pays gardent Taïwan comme allié",
    "summary": "La Chine a visé le ministre de la Communication du Paraguay et le ministre des Affaires étrangères du Belize. Washington dénonce de la « coercition ».",
    "points": [
      "Lundi 12 octobre, la Chine a sanctionné Gustavo Villate, ministre paraguayen de la Communication, et Francis Fonseca, chef de la diplomatie du Belize : leurs avoirs en Chine sont gelés, ils sont interdits d'entrée à Hong Kong et Macao, et les Chinois ne peuvent plus traiter avec eux [1].",
      "Pékin accuse certains « politiciens anti-chinois » de pousser leur pays à garder des relations diplomatiques avec Taïwan [1].",
      "Le département d'État américain a répondu que Washington s'oppose à la « coercition » de la Chine contre des pays de l'hémisphère ; Taïwan parle de « répression transnationale » [1][2]."
    ],
    "why": [
      "Paraguay et Belize font partie des 12 seuls pays qui reconnaissent encore officiellement Taïwan [1]. Pékin leur envoie un message : garder Taïwan a un prix, y compris pour leurs dirigeants.",
      "C'est une façon de faire pression sans droits de douane ni armée, en visant des personnes. Elle s'ajoute à la rivalité entre Washington et Pékin pour influencer l'Amérique latine."
    ],
    "forMe": "Ce genre de bras de fer décide qui construit les ports, les routes et les réseaux 5G d'un pays. Plus la Chine et les États-Unis se disputent l'Amérique latine, plus les entreprises européennes doivent choisir leurs partenaires avec prudence.",
    "figures": [
      {
        "value": "12",
        "label": "pays seulement ont encore des relations diplomatiques officielles avec Taïwan, dont le Paraguay et le Belize",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "sanctions"
    ],
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « China sanctions Paraguay, Belize ministers over Taiwan ties » (12 oct. 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/12/china-sanctions-paraguay-belize-ministers-over-taiwan-ties"
      },
      {
        "short": "US News",
        "name": "US News, « US says it opposes Chinese \"coercion\" after Belize, Paraguay ministers sanctioned »",
        "url": "https://www.usnews.com/news/world/articles/2026-10-12/us-says-it-opposes-chinese-coercion-after-belize-paraguay-ministers-sanctioned"
      }
    ]
  },
  {
    "id": "2026-10-14-ukraine-treve-energetique",
    "date": "2026-10-14",
    "region": "Europe",
    "theme": "geo",
    "geo": [
      {
        "name": "Kiev",
        "label": "Ukraine",
        "coords": [
          30.52,
          50.45
        ]
      }
    ],
    "title": "Trump annonce une « trêve de l'énergie » en Ukraine, mais les frappes continuent",
    "summary": "Donald Trump dit qu'un cessez-le-feu sur l'énergie est en vigueur. Kiev affirme que la Russie a déjà frappé au moins six sites énergétiques depuis, et l'Europe doute.",
    "points": [
      "Dimanche 11 octobre, Trump a annoncé sur Truth Social un « cessez-le-feu énergétique » ; Volodymyr Zelensky dit que les forces russes ont frappé au moins six installations énergétiques ukrainiennes depuis, et Trump reconnaît des violations des deux côtés [1].",
      "Le Kremlin dit que des discussions sont en cours, mais rejette la proposition de Zelensky d'une trêve de 60 jours pour organiser des élections [1][3].",
      "L'annonce est venue deux jours après un assouplissement temporaire des sanctions américaines sur le diesel russe ; le chancelier allemand Friedrich Merz maintient les sanctions, et l'UE a ajouté 1 600 personnes et entités à sa liste [3]. Berlin et Kiev jugent la trêve trop étroite : elle devrait aussi protéger le réseau électrique ukrainien [2]."
    ],
    "why": [
      "Les raffineries et les centrales sont devenues des cibles : les frapper fait monter les prix du carburant et plonge des villes dans le noir. Une trêve sur l'énergie serait donc utile à tout le monde, si elle tenait [1].",
      "Mais elle montre aussi un désaccord entre Washington, qui assouplit des sanctions, et l'Europe, qui les durcit. Les deux camps ne parlent pas de la même chose : Trump vise surtout les raffineries, Kiev et Berlin veulent aussi protéger l'électricité [2][3]."
    ],
    "forMe": "Le diesel et le gaz que tu paies dépendent aussi de ce que la guerre fait aux raffineries. Une vraie trêve pourrait calmer les prix ; une trêve de façade, non.",
    "figures": [
      {
        "value": "6",
        "label": "installations énergétiques ukrainiennes frappées depuis l'annonce, selon Kiev",
        "src": 1
      },
      {
        "value": "1 600",
        "label": "personnes et entités ajoutées à la liste de sanctions de l'UE",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "sanctions"
    ],
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Trump insists energy ceasefire holds as Ukraine reports new Russian strikes » (13 oct. 2026)",
        "url": "https://www.aljazeera.com/economy/2026/10/13/trump-insists-energy-ceasefire-holds-as-ukraine-reports-new-russian-strikes"
      },
      {
        "short": "Bloomberg",
        "name": "Bloomberg, « Germany and Ukraine See Trump's Refinery Energy Truce As Too Narrow » (13 oct. 2026)",
        "url": "https://www.bloomberg.com/news/newsletters/2026-10-13/germany-and-ukraine-see-trump-s-refinery-energy-truce-as-too-narrow"
      },
      {
        "short": "Euronews",
        "name": "Euronews, « No respite for Ukraine despite Trump's energy truce announcement » (13 oct. 2026)",
        "url": "https://www.euronews.com/2026/10/13/no-respite-for-ukraine-despite-trumps-energy-truce-announcement"
      }
    ]
  },
  {
    "id": "2026-10-14-wang-yi-bakou-balkans",
    "date": "2026-10-14",
    "region": "Europe",
    "theme": "geo",
    "geo": [
      {
        "name": "Bakou",
        "label": "Azerbaïdjan",
        "coords": [
          49.87,
          40.41
        ]
      },
      {
        "name": "Podgorica",
        "label": "Monténégro",
        "coords": [
          19.26,
          42.44
        ]
      }
    ],
    "title": "Le grand diplomate chinois part pour Bakou puis les Balkans, jusqu'au Monténégro",
    "summary": "Wang Yi assiste au sommet de la CICA à Bakou, puis visite la Croatie, le Monténégro et la Bulgarie du 14 au 20 octobre. Pékin cherche des appuis sur la route de l'Europe.",
    "points": [
      "Le ministère chinois des Affaires étrangères a annoncé le 12 octobre que Wang Yi représentera Xi Jinping au 7e sommet de la CICA à Bakou, le 15 octobre, dans un voyage qui court du 14 au 20 octobre [1][2].",
      "Il visitera aussi la Croatie, le Monténégro et la Bulgarie ; c'est sa première visite officielle en Azerbaïdjan depuis sept ans [2].",
      "Selon le South China Morning Post, ce serait la première visite d'un chef de la diplomatie chinoise au Monténégro depuis l'indépendance du pays il y a vingt ans, une information que je n'ai pas pu recouper [3]. La porte-parole chinoise cite l'autoroute Nord-Sud du Monténégro comme projet phare commun [1]."
    ],
    "why": [
      "La CICA réunit 28 pays d'Asie, dont la Chine, l'Inde, l'Iran, la Russie et la Turquie [2]. Bakou, sur la route entre la Chine et l'Europe, est un lieu clé pour Pékin.",
      "Les Balkans sont à l'entrée de l'Union européenne. Y envoyer son ministre, c'est montrer qu'on peut financer des routes et des chantiers là où l'UE hésite, ce qui inquiète certains Européens."
    ],
    "forMe": "Les routes, les ports et les voies ferrées que la Chine finance autour de l'Europe décident par où passeront demain les marchandises que tu achètes en ligne.",
    "figures": [
      {
        "value": "28",
        "label": "pays membres de la CICA, dont la Chine, l'Inde, l'Iran, la Russie et la Turquie",
        "src": 2
      },
      {
        "value": "7 ans",
        "label": "depuis la dernière visite officielle de Wang Yi en Azerbaïdjan",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Ambassade de Chine",
        "name": "Ambassade de Chine, « Wang Yi to Attend CICA Summit... and Visit Azerbaijan, Croatia, Montenegro and Bulgaria » (12 oct. 2026)",
        "url": "https://ki.china-embassy.gov.cn/eng/zgywx/202610/t20261012_12038574.htm"
      },
      {
        "short": "Anadolu",
        "name": "Anadolu, « China's top diplomat to visit Azerbaijan, Croatia, Montenegro, Bulgaria, attend CICA summit in Baku »",
        "url": "https://aa.com.tr/en/asia-pacific/china-s-top-diplomat-to-visit-azerbaijan-croatia-montenegro-bulgaria-attend-cica-summit-in-baku/4086246"
      },
      {
        "short": "SCMP via ua.news",
        "name": "South China Morning Post (relayé par ua.news), « Wang Yi to visit Azerbaijan and three Balkan countries »",
        "url": "https://ua.news/en/world/van-yi-vidvidaie-azerbaidzhan-i-tri-balkanski-krayini-south-china-morning-post"
      }
    ]
  },
  {
    "id": "2026-10-14-gazoduc-asie-centrale-explosion",
    "date": "2026-10-14",
    "region": "Europe",
    "theme": "mix",
    "geo": [
      {
        "name": "Volchkovo, région de Penza",
        "label": "Russie",
        "coords": [
          45,
          53.2
        ]
      }
    ],
    "title": "Une explosion touche le gazoduc qui relie l'Asie centrale à la Russie, avec des flammes de 70 mètres",
    "summary": "Le gazoduc « Asie centrale–Centre » a explosé mardi dans la région de Penza, en Russie. Il a été fermé ; la cause est inconnue et l'information n'est pas vérifiée de façon indépendante.",
    "points": [
      "Une explosion a touché mardi 13 octobre le gazoduc « Asie centrale–Centre » près du village de Volchkovo, dans la région de Penza ; les flammes ont atteint environ 70 mètres et la conduite a été coupée [1][2].",
      "D'après les premières informations, il n'y a ni mort ni blessé ; la cause est inconnue et aucun délai de reprise n'est annoncé [1][2].",
      "Le réseau relie le Turkménistan, l'Ouzbékistan et le Kazakhstan à la Russie ; depuis octobre 2023, une partie sert à acheminer du gaz russe vers l'Ouzbékistan via le Kazakhstan [1]. L'alerte initiale vient de la filiale de Gazprom Transgaz Saratov, citée par Kommersant ; elle n'est pas vérifiée de façon indépendante [1][3]."
    ],
    "why": [
      "Ce gazoduc est un fil qui relie trois pays d'Asie centrale à la Russie. Si la conduite reste fermée, le gaz qui y circule doit être remplacé ou réduit [1].",
      "Reste la question de la cause : accident, sabotage ou autre. Les sources que j'ai pu consulter ne la donnent pas, et il vaut mieux attendre les enquêtes avant de conclure [1][3]."
    ],
    "forMe": "Le gaz passe par de longs tuyaux que la guerre et les tensions rendent fragiles. Chaque incident sur ces conduites rappelle que l'énergie dépend de routes que personne ne contrôle entièrement.",
    "figures": [
      {
        "value": "70 m",
        "label": "hauteur des flammes après l'explosion près de Volchkovo",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Caspian Post",
        "name": "Caspian Post, « Explosion Hits Central Asia–Center Gas Pipeline in Russia's Penza »",
        "url": "https://caspianpost.com/central-asia/explosion-hits-central-asia-center-gas-pipeline-in-russia-s-penza"
      },
      {
        "short": "1news.az",
        "name": "1news.az, « Explosion hits the Central Asia–Center gas pipeline in Russia » (13 oct. 2026)",
        "url": "https://1news.az/en/news/20261013162505730-Explosion-hits-the-Central-Asia-Center-gas-pipeline-in-Russia"
      },
      {
        "short": "EADaily",
        "name": "EADaily, « Mash: Explosion on a gas pipeline from Russia to Kazakhstan and Uzbekistan » (13 oct. 2026)",
        "url": "https://eadaily.com/en/news/2026/10/13/mash-explosion-on-a-gas-pipeline-from-russia-to-kazakhstan-and-uzbekistan"
      }
    ]
  },
  {
    "id": "2026-10-14-liban-mission-ue-armee",
    "date": "2026-10-14",
    "region": "Moyen-Orient",
    "theme": "geo",
    "geo": [
      {
        "name": "Beyrouth",
        "label": "Liban",
        "coords": [
          35.5,
          33.89
        ]
      }
    ],
    "title": "L'Union européenne va former l'armée libanaise, alors que les casques bleus préparent leur départ",
    "summary": "Lundi, les ministres européens des Affaires étrangères ont créé une mission de trois ans pour conseiller et entraîner l'armée et les forces de sécurité du Liban.",
    "points": [
      "Le lundi 12 octobre, les ministres des Affaires étrangères de l'UE ont créé une mission d'appui au Liban, avec un premier mandat de trois ans, à la fois civile et militaire [1][2].",
      "Le volet militaire conseillera et formera l'armée libanaise sur la sécurité des frontières et de la mer ; le volet civil formera les forces de sécurité intérieure, notamment contre la cybercriminalité et la contrebande [1][2].",
      "Selon Kaja Kallas, plus de dix États membres sont prêts à y contribuer ; la mission ne remplace pas la force de l'ONU, la FINUL, dont le mandat s'achève en décembre [1][2]."
    ],
    "why": [
      "Quand les casques bleus partiront, quelqu'un devra aider l'armée libanaise à tenir le sud du pays. L'UE veut y avoir sa place plutôt que de laisser le vide [1].",
      "Le calendrier reste flou : il faut encore de la planification, et les sources ne s'accordent pas sur la date de début. Le nombre de soldats et de pays n'est pas fixé [1][2]."
    ],
    "forMe": "Un Liban qui tient son territoire coûte moins cher en réfugiés et en crises à l'Europe voisine. C'est le calcul derrière cet envoi.",
    "figures": [
      {
        "value": "3 ans",
        "label": "durée du premier mandat de la mission européenne",
        "src": 2
      },
      {
        "value": "> 10",
        "label": "États de l'UE prêts à y contribuer, selon Kaja Kallas",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Euronews",
        "name": "Euronews, « EU agrees new security mission in Lebanon as UN peacekeepers prepare to leave » (12 oct. 2026)",
        "url": "https://www.euronews.com/2026/10/12/eu-agrees-new-security-mission-in-lebanon-as-un-peacekeepers-prepare-to-leave"
      },
      {
        "short": "Asharq Al-Awsat",
        "name": "Asharq Al-Awsat, « EU Establishes New Lebanon Support Mission »",
        "url": "https://english.aawsat.com/arab-world/5328942-eu-establishes-new-lebanon-support-mission"
      }
    ]
  },
  {
    "id": "2026-10-14-ormuz-navires-touches",
    "date": "2026-10-14",
    "region": "Moyen-Orient",
    "theme": "geo",
    "geo": [
      {
        "name": "Détroit d'Ormuz",
        "label": "Ormuz",
        "coords": [
          56.5,
          26.5
        ]
      }
    ],
    "title": "Ormuz : un porte-conteneurs et un pétrolier touchés par des projectiles, pendant que Washington escorte le pétrole",
    "summary": "Deux navires ont été touchés mardi dans le détroit, sans que l'auteur soit connu. Les États-Unis disent avoir aidé à faire passer plus de 19 millions de barils la veille.",
    "points": [
      "L'agence britannique de sécurité maritime UKMTO a signalé mardi 13 octobre qu'un porte-conteneurs avait été touché par un projectile inconnu dans le détroit d'Ormuz ; une autre alerte faisait état d'un pétrolier touché [1][2].",
      "Le commandement américain CENTCOM affirme avoir aidé ses partenaires du Golfe à faire passer plus de 19 millions de barils de brut lundi 12 octobre, et rejette la prétention des Gardiens de la révolution iraniens de contrôler le détroit [3].",
      "Selon l'Iran, la réponse américaine à sa proposition pour rouvrir le détroit est « insuffisante » ; Washington veut parler du nucléaire dès le début, Téhéran veut d'abord rouvrir Ormuz [4]."
    ],
    "why": [
      "Le détroit d'Ormuz est la porte de sortie du pétrole du Golfe. Tant que des navires y sont touchés, les assureurs et les armateurs hésitent, et les prix de l'énergie restent tendus.",
      "Le chiffre de 19 millions de barils vient de l'armée américaine elle-même et n'est pas vérifié de façon indépendante [3]. L'auteur des tirs sur les navires n'est pas identifié dans les sources consultées [1][2]."
    ],
    "forMe": "Quand le pétrole peine à sortir du Golfe, ça se voit à la pompe et sur les prix de l'électricité en Europe, comme ces derniers mois.",
    "figures": [
      {
        "value": "19 millions",
        "label": "de barils escortés lundi par les États-Unis, selon CENTCOM (non vérifié)",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Deccan Herald",
        "name": "Deccan Herald, « Container ship hit by projectile within Hormuz strait, UKMTO says »",
        "url": "https://www.deccanherald.com/world/middle-east/container-ship-hit-by-projectile-within-hormuz-strait-ukmto-says-4181778"
      },
      {
        "short": "MarineLink",
        "name": "MarineLink, « Tanker Hit by Projectile in Strait of Hormuz, UKMTO Reports »",
        "url": "https://www.marinelink.com/news/tanker-hit-projectile-strait-hormuz-ukmto-543118"
      },
      {
        "short": "Jerusalem Post",
        "name": "Jerusalem Post, « Live updates » (13 oct. 2026)",
        "url": "https://jpost.com/middle-east/iran-news/2026-10-13/live-updates-911493"
      },
      {
        "short": "Iran International",
        "name": "Iran International, « Iran says US response on reopening Hormuz insufficient » (direct)",
        "url": "https://www.iranintl.com/en/liveblog/202610105959"
      }
    ]
  },
  {
    "id": "2026-10-13-cuba-solaire-blocus",
    "date": "2026-10-13",
    "region": "Amériques",
    "theme": "mix",
    "geo": [
      {
        "name": "La Havane",
        "label": "Cuba",
        "coords": [
          -82.37,
          23.13
        ]
      }
    ],
    "title": "Privée de pétrole par Washington, Cuba se couvre de panneaux solaires chinois",
    "summary": "Avec le blocus pétrolier américain, Cuba n'a plus assez de carburant pour ses centrales. L'île mise sur le soleil, avec l'aide de la Chine, mais le solaire ne couvre pas encore ses besoins.",
    "points": [
      "Selon des données du centre de recherche Ember, les exportations chinoises de panneaux solaires vers Cuba seraient passées d'environ 3 millions de dollars en 2023 à 117 millions en 2025 [1].",
      "Un accord avec la Chine prévoit 92 parcs solaires dans le pays d'ici 2028 ; environ 50 fonctionnaient déjà à la mi-2026, et Cuba s'est engagée à atteindre au moins 24 % d'énergies renouvelables d'ici 2030 [1]. Le solaire fournirait environ 10 % de l'électricité, contre près de 3 % en 2024 [1].",
      "Cette course au solaire répond à un décret signé le 29 janvier 2026 par Donald Trump, qui ouvre la voie à des droits de douane contre les pays qui fournissent du pétrole à Cuba [3]. Cuba a aussi réduit les transports et les horaires des écoles et des lieux de travail [2]."
    ],
    "why": [
      "Quand un pays ne peut plus acheter son carburant, il doit produire son énergie lui-même. Cuba le fait avec les moyens qu'elle a : des panneaux chinois bon marché, installés à toute vitesse.",
      "Mais les parcs sont petits et dispersés dans l'île, le soleil ne brille pas tous les jours et le stockage manque : les experts estiment que le solaire ne peut pas encore couvrir les pics de consommation, et le pays dépend toujours largement des énergies fossiles [1].",
      "C'est aussi un exemple de la façon dont une sanction américaine peut pousser un pays vers la Chine : Pékin fournit les panneaux, Washington coupe le pétrole."
    ],
    "forMe": "Cuba est un cas extrême, mais il montre ce qui arrive quand l'énergie devient une arme : chacun cherche une source qu'il contrôle. Le même raisonnement pousse l'Europe à miser sur le solaire et l'éolien, et il explique pourquoi la Chine vend tant de panneaux dans le monde.",
    "figures": [
      {
        "value": "3 → 117 millions $",
        "label": "panneaux solaires chinois exportés vers Cuba, de 2023 à 2025 (Ember)",
        "src": 1
      },
      {
        "value": "92",
        "label": "parcs solaires prévus à Cuba d'ici 2028, environ 50 déjà en service à la mi-2026",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "sanctions",
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "CTV News",
        "name": "CTV News, « As the US starves it of oil, Cuba is pulling off one of the fastest solar revolutions on the planet with China's help »",
        "url": "https://www.ctvnews.ca/world/article/as-the-us-starves-it-of-oil-cuba-is-pulling-off-one-of-the-fastest-solar-revolutions-on-the-planet-with-chinas-help/"
      },
      {
        "short": "Mezha",
        "name": "Mezha, « US oil blockade pushes Cuba to accelerate solar rollout with Chinese backing »",
        "url": "https://mezha.net/eng/news/5130cea3_us_oil_blockade/"
      },
      {
        "short": "PBS NewsHour",
        "name": "PBS NewsHour, « Trump threatens tariffs on any country that sells oil to Cuba, putting pressure on Mexico » (30 janv. 2026)",
        "url": "https://www.pbs.org/newshour/amp/politics/trump-threatens-tariffs-on-any-country-that-sells-oil-to-cuba-putting-pressure-on-mexico"
      }
    ]
  },
  {
    "id": "2026-10-13-afrique-agence-notation",
    "date": "2026-10-13",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Port-Louis",
        "label": "Maurice",
        "coords": [
          57.5,
          -20.16
        ]
      }
    ],
    "title": "L'Afrique lance sa propre agence de notation pour juger ses dettes autrement",
    "summary": "Inaugurée à Maurice le 7 octobre, l'Agence de notation de crédit africaine veut contester les notes des géants occidentaux, qui, selon les États africains, leur coûtent trop cher en intérêts.",
    "points": [
      "L'Africa Credit Rating Agency (AfCRA) a été inaugurée le mercredi 7 octobre 2026 à Balaclava, au nord de Port-Louis, à Maurice, où se trouve son siège [1].",
      "Elle doit donner des avis de crédit sur des États, des entreprises, des collectivités et des institutions, en se concentrant surtout sur les dettes en monnaie locale ; elle n'appartiendra pas aux gouvernements africains [1].",
      "Les gouvernements africains reprochent aux agences existantes d'imposer une « prime de préjugé » qui renchérit leurs emprunts ; le Ghana et la Zambie disent que des dégradations de note ont aggravé leurs crises de dette [1]. Le président de la Commission de l'Union africaine, Mahmoud Ali Youssouf, a prévenu qu'il ne fallait pas attendre de baisse immédiate du coût de l'argent [1]."
    ],
    "why": [
      "La note d'une agence décide du taux auquel un pays peut emprunter : plus la note est basse, plus les intérêts sont élevés. Pour des pays déjà endettés, quelques points de pourcentage pèsent lourd.",
      "L'idée de l'AfCRA est de proposer un autre regard, plus proche du terrain. La difficulté sera de convaincre les investisseurs : une agence n'a de valeur que si ses notes sont crues par ceux qui prêtent.",
      "Le lancement suit une dispute publique entre le Mécanisme africain d'évaluation par les pairs et l'agence Fitch, après la dégradation de la banque Afreximbank ; Fitch défend sa méthode [1]."
    ],
    "forMe": "Les notes des agences influencent les taux de la dette de tous les pays, y compris la France. Voir l'Afrique créer la sienne montre que ce pouvoir, longtemps réservé à quelques entreprises occidentales, est de plus en plus contesté.",
    "figures": [
      {
        "value": "7 octobre 2026",
        "label": "inauguration de l'agence à Maurice, après un an de retard sur le calendrier prévu",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Business Day",
        "name": "Business Day, « Africa launches credit ratings agency to tackle risk bias » (8 oct. 2026)",
        "url": "https://www.businessday.co.za/economy/2026-10-08-africa-launches-credit-ratings-agency-to-tackle-risk-bias/"
      },
      {
        "short": "Semafor",
        "name": "Semafor, « Africa's first credit rating agency set to launch » (7 oct. 2026)",
        "url": "https://www.semafor.com/article/10/07/2026/africas-first-credit-rating-agency-set-to-launch"
      }
    ]
  },
  {
    "id": "2026-10-13-nigeria-opay-bourse-new-york",
    "date": "2026-10-13",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Lagos",
        "label": "Nigeria",
        "coords": [
          3.38,
          6.52
        ]
      }
    ],
    "title": "Nigeria : OPay, la fintech passée du déficit au profit, vise la Bourse de New York",
    "summary": "Le paiement mobile OPay a déposé son dossier d'introduction à New York le 9 octobre. Il montre des bénéfices en hausse, mais aussi des risques sur ses placements.",
    "points": [
      "OPay a déposé le 9 octobre auprès du régulateur américain (SEC) un dossier d'introduction en Bourse (formulaire F-1) pour coter ses actions à New York sous le code OPAY, avec une valorisation visée d'environ 4 milliards de dollars ; aucune date de cotation n'est confirmée [1][2].",
      "Selon ce dossier, le bénéfice net atteint 90,9 millions de dollars au premier semestre 2026, contre 21,7 millions un an plus tôt, pour 467,1 millions de dollars de revenus [2]. En 2025, la société a gagné 72,47 millions de dollars, après une perte de 50,98 millions en 2024 [3].",
      "Le dossier signale aussi un portefeuille de placements à court terme de 532,9 millions de dollars au 30 juin 2026, qui comporte des risques de liquidité et de contrepartie [1]."
    ],
    "why": [
      "OPay est l'une des applications qui remplacent la banque pour des millions de Nigérians : paiements, transferts, petits prêts. Son entrée à New York serait un signal fort pour la finance africaine.",
      "Mais ces chiffres viennent d'un dossier de la société elle-même et de la presse, et le bénéfice net diffère de la perte attribuée aux actionnaires ordinaires à cause d'éléments non monétaires [3]. Les investisseurs vont donc regarder de près."
    ],
    "forMe": "Quand une application de paiement née à Lagos peut lever des milliards à New York, cela montre que la finance mobile africaine pèse désormais dans l'économie mondiale. C'est le même mouvement que celui des paiements par téléphone qui ont grandi en Chine ou en Inde.",
    "figures": [
      {
        "value": "90,9 millions $",
        "label": "bénéfice net d'OPay au premier semestre 2026",
        "src": 2
      },
      {
        "value": "≈ 4 milliards $",
        "label": "valorisation visée à New York",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Nairametrics",
        "name": "Nairametrics, « OPay discloses $532.9 million short-term investment portfolio ahead of US IPO » (11 oct. 2026)",
        "url": "https://nairametrics.com/2026/10/11/opay-discloses-532-9-million-short-term-investment-portfolio-ahead-of-us-ipo/"
      },
      {
        "short": "EdgeX",
        "name": "EdgeX News, « OPay Reports $90.9 Million Six-Month Profit as It Files for US IPO »",
        "url": "https://pro.edgex.exchange/en-US/news/article/opay-nyse-listing-90-9-million-profit"
      },
      {
        "short": "Nairametrics",
        "name": "Nairametrics, « OPay swings to profit in FY2025 as revenue surges 161% to $536.3 million » (13 août 2026)",
        "url": "https://nairametrics.com/2026/08/13/opay-swings-to-profit-in-fy2025-as-revenue-surges-161-to-536-3-million"
      }
    ]
  },
  {
    "id": "2026-10-13-turquie-bulgarie-chemin-de-fer",
    "date": "2026-10-13",
    "region": "Europe",
    "theme": "mix",
    "geo": [
      {
        "name": "Kapıkule (frontière bulgare)",
        "label": "Turquie",
        "coords": [
          26.36,
          41.72
        ]
      }
    ],
    "title": "Un train neuf jusqu'à la frontière bulgare : l'Europe a payé 275 millions d'euros pour ouvrir la route vers l'Asie centrale",
    "summary": "La Turquie a inauguré le 9 octobre un tronçon de voie ferrée vers la Bulgarie, financé en partie par l'Union européenne. Il doit fluidifier le « corridor du milieu » entre l'Europe et l'Asie centrale.",
    "points": [
      "Le 9 octobre, le président turc Recep Tayyip Erdoğan et la commissaire européenne à l'élargissement Marta Kos ont inauguré le tronçon Çerkezköy–Kapıkule, d'environ 153 km, qui fait partie de la ligne Halkalı–Kapıkule vers la frontière avec la Bulgarie [1][2].",
      "L'Union européenne a apporté une subvention de 275 millions d'euros, via son instrument d'aide aux pays candidats (IPA II) ; la Commission parle du plus grand projet d'infrastructure à ce jour de la coopération UE-Turquie [1]. La subvention avait été annoncée en 2019 [3].",
      "La Commission en attend une réduction des temps de transit sur le « corridor du milieu », la route de marchandises entre l'Europe et l'Asie centrale via le Caucase ; l'Astana Times parle d'une meilleure capacité de fret à l'ouest de ce corridor [2]."
    ],
    "why": [
      "Le corridor du milieu est la route de marchandises qui relie l'Asie centrale à l'Europe en traversant la mer Caspienne, le Caucase puis la Turquie. Chaque maillon trop lent freine tout le reste.",
      "La Commission présente cette ligne comme le premier résultat concret de son programme de connexions avec l'Asie centrale par le Caucase du Sud [2].",
      "Les chiffres varient selon les sources : la longueur annoncée va de 153 à 189 km selon le tronçon pris en compte, et le coût total n'est pas toujours le même [1][3]."
    ],
    "forMe": "Quand une route plus rapide s'ouvre entre l'Asie et l'Europe, c'est le prix et le délai de livraison de certains produits qui peuvent changer. La Turquie, déjà un pays-clé du commerce entre les deux continents, y gagne encore en poids face à Bruxelles.",
    "figures": [
      {
        "value": "275 millions €",
        "label": "subvention de l'Union européenne pour la ligne",
        "src": 1
      },
      {
        "value": "≈ 153 km",
        "label": "longueur du tronçon Çerkezköy–Kapıkule inauguré",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Commission européenne (EEAS)",
        "name": "EEAS, « Commissioner Kos attends inauguration of key railway project at the border between Türkiye and Bulgaria »",
        "url": "https://www.eeas.europa.eu/delegations/turkiye/commissioner-kos-attends-inauguration-key-railway-project-border-between-turkiye-and-bulgaria_en"
      },
      {
        "short": "Astana Times",
        "name": "The Astana Times, « Türkiye Opens EU-Backed Railway Link to Boost Europe-Central Asia Connectivity » (oct. 2026)",
        "url": "https://astanatimes.com/2026/10/turkiye-opens-eu-backed-railway-link-to-boost-europe-central-asia-connectivity/"
      },
      {
        "short": "Turkish Minute",
        "name": "Turkish Minute, « EU grants Turkey €275 million to build railway from Istanbul to Bulgarian border » (11 juin 2019)",
        "url": "https://turkishminute.com/2019/06/11/eu-grants-turkey-e275-million-to-build-railway-from-istanbul-to-bulgarian-border/"
      }
    ]
  },
  {
    "id": "2026-10-13-kazakhstan-cable-caspienne",
    "date": "2026-10-13",
    "region": "Asie",
    "theme": "mix",
    "geo": [
      {
        "name": "Aktau",
        "label": "Kazakhstan",
        "coords": [
          51.17,
          43.65
        ]
      },
      {
        "name": "Sumqayit",
        "label": "Azerbaïdjan",
        "coords": [
          49.67,
          40.59
        ]
      }
    ],
    "title": "Un câble internet au fond de la mer Caspienne relie le Kazakhstan à l'Azerbaïdjan",
    "summary": "Le câble est posé entre Aktau et Sumqayit. Il doit offrir une capacité de plus de 400 térabits par seconde, mais sa date de mise en service reste floue.",
    "points": [
      "Le Kazakhstan et l'Azerbaïdjan ont fini de poser le câble de fibre optique sur le fond de la mer Caspienne ; il a atteint la côte kazakhe début août 2026, et les travaux se poursuivent à terre [1].",
      "Il est conçu pour plus de 400 térabits par seconde et exploité par la société commune CaspiLink B.V. ; sa longueur est donnée à 380 km côté azerbaïdjanais et 390 km côté kazakh [1].",
      "Selon le ministre kazakh de l'Intelligence artificielle et du Développement numérique, il doit entrer en service en octobre 2026 [2], alors que JAM News parle d'une exploitation commerciale d'ici la fin de l'année [3]."
    ],
    "why": [
      "Internet passe par des câbles. Relier les deux rives de la Caspienne ouvre une nouvelle voie directe entre l'Asie centrale et le Caucase.",
      "Des analystes y voient un changement de la géographie numérique de l'Eurasie [3].",
      "Il faut rester prudent : au moment des dernières informations, la mise en service n'était pas confirmée."
    ],
    "forMe": "Les services que tu utilises (vidéo, cloud, jeux) transitent par des câbles de ce type. Plus il y en a, plus le réseau est solide en cas de panne.",
    "figures": [
      {
        "value": "400 Tbit/s",
        "label": "capacité prévue du câble transcaspien",
        "src": 1
      },
      {
        "value": "≈ 380 km",
        "label": "longueur du câble, côté azerbaïdjanais",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Telecom Review Asia",
        "name": "Telecom Review Asia, « Trans-Caspian Fiber-Optic Cable Successfully Installed »",
        "url": "https://www.telecomreviewasia.com/news/industry-news/29988-trans-caspian-fiber-optic-cable-successfully-installed/"
      },
      {
        "short": "Caspian Post",
        "name": "Caspian Post, « Trans-Caspian Fiber-Optic Link Between Kazakhstan and Azerbaijan Nears Launch »",
        "url": "https://caspianpost.com/kazakhstan/trans-caspian-fiber-optic-link-between-kazakhstan-and-azerbaijan-nears-launch"
      },
      {
        "short": "JAM News",
        "name": "JAM News, « First digital bridge beneath Caspian Sea: How Sumqayit-Aktau cable reshapes Eurasia's geostrategic landscape »",
        "url": "https://jam-news.net/first-digital-bridge-beneath-caspian-sea-how-sumqayit-aktau-cable-reshapes-eurasias-geostrategic-landscape/"
      }
    ]
  },
  {
    "id": "2026-10-13-arabie-forum-energie-riyad",
    "date": "2026-10-13",
    "region": "Moyen-Orient",
    "theme": "mix",
    "geo": [
      {
        "name": "Riyad",
        "label": "Arabie saoudite",
        "coords": [
          46.68,
          24.71
        ]
      }
    ],
    "title": "Riyad réunit les ministres de l'énergie du monde malgré les bombes sur son aéroport",
    "summary": "Le Forum international de l'énergie s'est tenu à Riyad le 11 octobre, alors que l'aéroport de la ville venait d'être visé. L'Égypte et l'Arabie ont signé un accord sur le pétrole et le gaz.",
    "points": [
      "La 17e réunion ministérielle du Forum international de l'énergie (IEF17) s'est tenue le dimanche 11 octobre à Riyad, sur le thème « Sécurité énergétique et objectifs communs dans une ère nouvelle » ; elle ouvrait une semaine de l'énergie qui comprend aussi le Congrès mondial du pétrole [1][2].",
      "Selon un compte rendu irakien, la conférence s'est tenue malgré des bombardements sur l'aéroport international King Khalid de Riyad, que les responsables saoudiens attribuent aux Houthis du Yémen, et elle a salué l'annonce du retour des États-Unis au Forum [2].",
      "À l'issue de la réunion, le ministre égyptien du Pétrole, Karim Badawi, et le ministre saoudien de l'Énergie, le prince Abdulaziz ben Salmane, ont signé un protocole d'accord sur le commerce, le transport, le stockage et la distribution de pétrole brut, de produits pétroliers et de gaz [3]."
    ],
    "why": [
      "Quand le détroit d'Ormuz est menacé, la question n'est plus seulement le prix du pétrole mais sa sécurité : par où il passe, qui peut le protéger, qui peut le stocker.",
      "Que la réunion ait lieu malgré les attaques montre que l'Arabie saoudite veut se présenter comme un pôle stable de l'énergie mondiale. Le retour annoncé des États-Unis dans l'enceinte la renforce, mais il repose sur un seul compte rendu, à confirmer."
    ],
    "forMe": "Les décisions prises dans ces réunions pèsent sur le prix du carburant et du gaz en France. Les accords entre pays producteurs et pays consommateurs sont la face discrète de ce qui se joue aussi dans le détroit d'Ormuz.",
    "figures": [
      {
        "value": "11 octobre",
        "label": "date de la réunion ministérielle IEF17 à Riyad",
        "src": 1
      },
      {
        "value": "11–13 octobre",
        "label": "semaine de l'énergie à Riyad (Congrès mondial du pétrole, ministériel Énergie propre)",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Asharq Al-Awsat",
        "name": "Asharq Al-Awsat, « Riyadh Kicks off Energy Week with Ministerial Meeting on Supply Security, Market Stability »",
        "url": "https://english.aawsat.com/node/5328271"
      },
      {
        "short": "Iraqi News",
        "name": "Iraqi News, « Iraq attends Riyadh energy summit as Saudi minister declares city capital of energy security » (11 oct. 2026)",
        "url": "https://www.iraqinews.com/iraq/iraq-attends-riyadh-energy-summit-as-saudi-minister-declares-city-capital-of-energy-security/"
      },
      {
        "short": "Egypt Oil & Gas",
        "name": "Egypt Oil & Gas, « Egypt, Saudi Arabia Sign MoU to Expand Cooperation in Oil, Gas »",
        "url": "https://egyptoil-gas.com/news/egypt-saudi-arabia-sign-mou-to-expand-cooperation-in-oil-gas/"
      }
    ]
  },
  {
    "id": "2026-10-13-cambodge-croissance-tourisme",
    "date": "2026-10-13",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Phnom Penh",
        "label": "Cambodge",
        "coords": [
          104.92,
          11.56
        ]
      }
    ],
    "title": "Cambodge : les touristes désertent et la croissance tombe à 3,5 %",
    "summary": "La Banque mondiale a abaissé le 6 octobre sa prévision pour le Cambodge. Moins de visiteurs étrangers et un carburant plus cher pèsent sur les ménages.",
    "points": [
      "Le 6 octobre, la Banque mondiale a ramené sa prévision de croissance du Cambodge pour 2026 à 3,5 %, contre 5,3 % l'an dernier ; elle l'avait fixée à 3,9 % en avril et 4,3 % en janvier [1][3]. Elle cite la chute des arrivées de touristes étrangers, la baisse des envois d'argent des migrants et la hausse des prix du pétrole [1].",
      "Les arrivées de touristes auraient reculé de 44 % à 2,25 millions sur les huit premiers mois de 2026, ce que la presse relie aux arnaques en ligne, aux tensions à la frontière avec la Thaïlande et aux conflits en Asie de l'Ouest [2].",
      "Fin septembre, le FMI prévoyait 3 % de croissance et 5,6 % d'inflation pour 2026 ; la Banque mondiale attend un rebond à 4 % en 2027 puis 5 % en 2028 [1][2]."
    ],
    "why": [
      "Le Cambodge vit en grande partie du tourisme et de l'habillement. Quand les visiteurs reviennent moins, ce sont les hôtels, les restaurants et les petits commerces qui souffrent.",
      "Les exportations de vêtements, chaussures et articles de voyage résistent : elles ont progressé de 7,2 % sur un an, à 11,76 milliards de dollars sur huit mois [2]. L'économie ne s'effondre pas, mais elle repose sur peu de moteurs.",
      "Le scénario de reprise suppose que les prix de l'énergie se calment et que le tourisme revienne [1]."
    ],
    "forMe": "Si tu portes un vêtement fabriqué au Cambodge, c'est l'un des produits qui continue à tenir l'économie du pays. Et l'idée qu'une crise de l'énergie à l'autre bout du monde fasse reculer le tourisme en Asie du Sud-Est te touche si tu voyages.",
    "figures": [
      {
        "value": "3,5 %",
        "label": "croissance prévue en 2026 par la Banque mondiale (5,3 % en 2025)",
        "src": 1
      },
      {
        "value": "− 44 %",
        "label": "arrivées de touristes, huit premiers mois de 2026 (selon la presse)",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "The Star",
        "name": "The Star, « World Bank cuts Cambodia's 2026 growth forecast to 3.5% amid tourism slump, high fuel costs » (7 oct. 2026)",
        "url": "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/10/07/world-bank-cuts-cambodia039s-2026-growth-forecast-to-35-amid-tourism-slump-high-fuel-costs"
      },
      {
        "short": "The Star",
        "name": "The Star, « Cambodia's economic growth projected to slow to 3% in 2026 amid rising costs: IMF » (30 sept. 2026)",
        "url": "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/09/30/cambodia039s-economic-growth-projected-to-slow-to-3-in-2026-amid-rising-costs-imf"
      },
      {
        "short": "Vietstock",
        "name": "Vietstock, « WB moderates Cambodia's 2026 GDP growth forecast to 3.9% » (avril 2026)",
        "url": "https://en.vietstock.vn/2026/04/wb-moderates-cambodias-2026-gdp-growth-forecast-to-39-52000-630357.htm"
      }
    ]
  },
  {
    "id": "2026-10-13-panama-seisme-canal",
    "date": "2026-10-13",
    "region": "Amériques",
    "theme": "geo",
    "geo": [
      {
        "name": "Tonosí",
        "label": "Panama",
        "coords": [
          -80.44,
          7.4
        ]
      }
    ],
    "title": "Séisme de 7,7 au Panama : le canal tient bon, mais les pertes pourraient atteindre 10 % du PIB",
    "summary": "Un tremblement de terre a frappé le sud du pays vendredi 9 octobre. La grande voie du commerce mondial n'a pas été interrompue, mais le pays a subi des coupures et des fermetures.",
    "points": [
      "Un séisme de magnitude 7,7 a frappé le sud du Panama le vendredi 9 octobre, à environ 12,6 km de profondeur, selon l'USGS (l'institut géologique américain) ; des alertes au tsunami ont été émises pour la côte Pacifique de plusieurs pays d'Amérique centrale et du Sud [1][3].",
      "L'Autorité du canal a indiqué que le canal fonctionnait normalement et que les navires passaient sans interruption ; environ 90 navires attendaient aux deux extrémités, selon des données LSEG, ce qui suggère un trafic ralenti plutôt qu'arrêté [1].",
      "L'électricité a été coupée dans six provinces et l'aéroport international de Tocumen a suspendu ses vols avant de rouvrir [2]. L'USGS estime que les pertes économiques pourraient représenter de 1 % à 10 % du PIB du Panama [1]."
    ],
    "why": [
      "Le canal de Panama voit passer une partie du commerce mondial. Un séisme aussi violent aurait pu l'arrêter ; ce n'est pas le cas, ce qui rassure les armateurs.",
      "Reste le choc pour le pays lui-même : bâtiments abîmés, courant coupé, vols suspendus. La fourchette de l'USGS est très large, de 1 % à 10 % du PIB, ce qui montre l'incertitude sur l'ampleur réelle des dégâts.",
      "Les premières informations restent partielles : aucun bilan officiel des dégâts n'était publié."
    ],
    "forMe": "Beaucoup de produits que tu achètes (voitures, électronique, énergie) passent par le canal. S'il avait fermé, les délais et les prix auraient pu monter ; son bon fonctionnement évite pour l'instant un nouvel embouteillage mondial.",
    "figures": [
      {
        "value": "7,7",
        "label": "magnitude du séisme du 9 octobre (USGS)",
        "src": 1
      },
      {
        "value": "1 à 10 % du PIB",
        "label": "pertes économiques possibles, estimation de l'USGS",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "KSL / Reuters",
        "name": "KSL, « Powerful quake hits Panama, damages homes; canal operations normal »",
        "url": "https://www.ksl.com/article/51634589/76-magnitude-earthquake-felt-in-panama--usgs"
      },
      {
        "short": "KSL / Reuters",
        "name": "KSL, « Strong Panama quake damages buildings, disrupts power and air travel »",
        "url": "https://www.ksl.com/article/51634588/strong-panama-quake-damages-buildings-disrupts-power-and-air-travel"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Panama earthquake: Tsunami warnings issued after magnitude 7.7 quake » (9 oct. 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/9/tsunami-warnings-across-latin-america-after-7-7-magnitude-earthquake-hits"
      }
    ]
  },
  {
    "id": "2026-10-12-ormuz-navette-petroliere",
    "date": "2026-10-12",
    "region": "Moyen-Orient",
    "theme": "mix",
    "geo": [
      {
        "name": "Fujaïrah",
        "label": "Émirats arabes unis",
        "coords": [
          56.34,
          25.12
        ]
      },
      {
        "name": "Détroit d'Ormuz",
        "label": "Iran",
        "coords": [
          56.25,
          26.57
        ]
      }
    ],
    "title": "Ormuz : l'Iran menace la « navette » secrète qui fait sortir le pétrole du Golfe",
    "summary": "Pour contourner le détroit d'Ormuz bloqué, les Émirats font passer leur pétrole sur de petits pétroliers qui font l'aller-retour. Téhéran annonce qu'il en fait désormais une cible.",
    "points": [
      "Dimanche soir, le responsable iranien Mohsen Rezaï a déclaré que la « navette » pétrolière organisée par les États-Unis et les Émirats arabes unis à travers le détroit d'Ormuz était désormais une cible explicite de l'Iran. Il affirme que l'Iran frappe déjà cinq ou six de ces navires chaque nuit depuis des semaines, ce qui n'a pas été vérifié de façon indépendante [1].",
      "La veille, les attaques autour du détroit avaient repris de plus belle, alors que la médiation pour arrêter la guerre contre l'Iran est bloquée ; l'armée américaine a diffusé une vidéo d'un avion de chasse bombardant un cargo sous pavillon panaméen dans le golfe d'Oman pour faire respecter son blocus des ports iraniens [2].",
      "Le système : depuis avril, le groupe pétrolier émirati ADNOC utilise des pétroliers « navettes » qui emportent le brut jusqu'au golfe d'Oman, où il est transféré sur de gros tankers ; environ 2,5 millions de barils par jour devaient passer ainsi en septembre, soit près de 40 % des volumes qui franchissent encore Ormuz [3]. Chaque rotation coûterait 30 à 40 millions de dollars, soit 15 à 20 dollars de plus par baril avant assurance [4]."
    ],
    "why": [
      "Le détroit d'Ormuz est la porte de sortie du pétrole du Golfe : avant la guerre, environ un cinquième du pétrole et du gaz mondiaux y passait, et il est en grande partie fermé depuis les frappes américaines et israéliennes sur l'Iran du 28 février [1].",
      "La « navette » est une parade inventée pour continuer à exporter malgré tout. En la désignant comme cible, l'Iran vise le dernier tuyau qui fonctionne encore. Si ce système s'arrête, une partie de l'offre mondiale de pétrole disparaît à nouveau du marché.",
      "Cette histoire montre aussi qu'une guerre peut se jouer sur la logistique : des petits bateaux, des transferts en pleine mer, des primes d'assurance. Chaque étape ajoute un coût que l'acheteur final finit par payer."
    ],
    "forMe": "Le prix de l'essence en France dépend du prix mondial du pétrole. Si l'Iran réussit à couper cette navette, le baril peut remonter, et le plein avec, quelques semaines plus tard. Même si rien ne se passe, ce détour coûteux fait déjà partie du prix que tu paies.",
    "figures": [
      {
        "value": "2,5 millions de barils/jour",
        "label": "pétrole transféré via les navettes du golfe d'Oman en septembre (estimation Kpler)",
        "src": 3
      },
      {
        "value": "30 à 40 millions $",
        "label": "coût estimé d'une rotation de navette",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes",
      "sanctions"
    ],
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Iran sets crosshairs on ‘US-UAE’ oil shuttle out of Strait of Hormuz » (12 oct. 2026)",
        "url": "https://www.aljazeera.com/economy/2026/10/12/iran-sets-crosshairs-on-us-uae-oil-shuttle-out-of-strait-of-hormuz"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Hormuz attacks intensify as efforts to end war on Iran stall » (11 oct. 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/11/hormuz-attacks-intensify-as-efforts-to-end-war-on-iran-stall"
      },
      {
        "short": "gCaptain / Reuters",
        "name": "gCaptain (chronique Reuters de Ron Bousso), « Hormuz Shuttles Keep Oil Flowing, But At a High Cost » (21 sept. 2026)",
        "url": "https://gcaptain.com/hormuz-shuttles-keep-oil-flowing-but-at-a-high-cost/"
      },
      {
        "short": "Seoul Economic Daily",
        "name": "Seoul Economic Daily, « Gulf Producers Pay $40 Million for Risky Hormuz Shuttle Runs » (6 oct. 2026)",
        "url": "https://en.sedaily.com/international/2026/10/06/gulf-producers-pay-40-million-for-risky-hormuz-shuttle-runs"
      }
    ]
  },
  {
    "id": "2026-10-12-algerie-maroc-61-arrestations",
    "date": "2026-10-12",
    "region": "Afrique",
    "theme": "geo",
    "geo": [
      {
        "name": "Oran",
        "label": "Algérie",
        "coords": [
          -0.64,
          35.7
        ]
      }
    ],
    "title": "Algérie : 61 Marocains arrêtés pour un « sabotage », la guerre froide du Maghreb s'envenime",
    "summary": "Alger affirme avoir démantelé un réseau de 61 Marocains entrés clandestinement pour commettre des sabotages. Aucune cible ni arme n'a été présentée, et la frontière entre les deux voisins est fermée depuis 1994.",
    "points": [
      "La police algérienne a annoncé dimanche l'arrestation de 61 Marocains, dont un ancien militaire, soupçonnés de préparer des « actes de sabotage » ; selon elle, ils sont arrivés à Tunis en avion, puis sont entrés clandestinement en Algérie par les forêts et montagnes d'El Kala avant de rejoindre Oran [1].",
      "La police dit avoir saisi des passeports marocains et de l'argent en dirhams et en euros, mais le communiqué ne précise ni les cibles visées ni la nature des actions prévues, et ne mentionne pas d'armes [1]. Des médias marocains mettent en doute les preuves [4].",
      "En août déjà, l'Algérie avait annoncé l'arrestation de quatre Marocains accusés de vouloir saboter ses élections législatives du 2 juillet ; la frontière terrestre est fermée depuis 1994 et Alger a rompu ses relations diplomatiques avec Rabat en 2021 [2]. Plusieurs analyses évoquent un rôle des Émirats arabes unis, sans preuve publiée, alors qu'Alger a aussi rompu avec Abou Dhabi le 10 septembre [3]."
    ],
    "why": [
      "L'Algérie et le Maroc, les deux poids lourds du Maghreb, sont en guerre froide depuis des décennies, surtout à cause du Sahara occidental, un territoire que le Maroc contrôle en grande partie et que l'Algérie veut voir devenir indépendant [2].",
      "Cette rivalité coûte cher : les deux pays ne commercent presque pas entre eux, et l'Algérie a cessé en 2021 de faire passer son gaz par le Maroc vers l'Espagne, en laissant expirer le contrat du gazoduc Maghreb-Europe [5].",
      "Une affaire de « sabotage » sans détails publics ajoute de la tension au moment où l'Algérie se brouille aussi avec les Émirats. Le risque : des expulsions, des représailles, et encore moins de chances de coopération régionale."
    ],
    "forMe": "La France entretient des liens forts avec les deux pays, et des millions de personnes en France ont des familles des deux côtés. Quand Alger et Rabat se fâchent, Paris est souvent pris entre deux feux, y compris sur le gaz algérien et les questions de visas.",
    "figures": [
      {
        "value": "61",
        "label": "Marocains arrêtés en Algérie, selon la police algérienne",
        "src": 1
      },
      {
        "value": "1994",
        "label": "année de fermeture de la frontière terrestre entre l'Algérie et le Maroc",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "La Libre / AFP",
        "name": "La Libre Belgique (dépêche AFP), « Algérie: arrestation de 61 Marocains soupçonnés de préparer des \"actes de sabotage\" » (11 oct. 2026)",
        "url": "https://www.lalibre.be/dernieres-depeches/2026/10/11/algerie-arrestation-de-61-marocains-soupconnes-de-preparer-des-actes-de-sabotage-7VZD4FLASBDQPOIV5JM7PHCYXE/"
      },
      {
        "short": "Morocco World News",
        "name": "Morocco World News, « Algeria Claims Arrest of 61 Moroccans Over Suspicions of ‘Sabotage’ » (oct. 2026)",
        "url": "https://www.moroccoworldnews.com/2026/10/341699/algeria-claims-arrest-of-61-moroccans-over-suspicions-of-sabotage/"
      },
      {
        "short": "Afrik.com",
        "name": "Afrik.com, « 61 Marocains arrêtés à Oran : la question du commanditaire » (oct. 2026)",
        "url": "https://www.afrik.com/sabotage-dejoue-a-oran-de-rabat-a-abou-dhabi-la-question-du-commanditaire"
      },
      {
        "short": "Hespress",
        "name": "Hespress, « Algeria arrests 61 Moroccans over alleged sabotage plot as questions surround evidence » (oct. 2026)",
        "url": "https://en.hespress.com/147180-algeria-arrests-61-moroccans-over-alleged-sabotage-plot-as-questions-surround-evidence.html"
      },
      {
        "short": "Morocco World News",
        "name": "Morocco World News, « End of Maghreb-Europe Pipeline Contract Will Have No Immediate Impact on Morocco » (nov. 2021)",
        "url": "https://www.moroccoworldnews.com/2021/11/345279/end-of-maghreb-europe-pipeline-contract-will-have-no-immediate-impact-on-morocco"
      }
    ]
  },
  {
    "id": "2026-10-12-malaisie-brume-indonesie",
    "date": "2026-10-12",
    "region": "Asie",
    "theme": "mix",
    "geo": [
      {
        "name": "Johor Bahru",
        "label": "Malaisie",
        "coords": [
          103.76,
          1.49
        ]
      },
      {
        "name": "Kalimantan central",
        "label": "Indonésie",
        "coords": [
          113.92,
          -2.21
        ]
      }
    ],
    "title": "Brume toxique : plus de 600 000 élèves privés d'école en Malaisie à cause des feux indonésiens",
    "summary": "Les incendies de forêts et de tourbières en Indonésie envoient une fumée épaisse sur la Malaisie et Singapour. Les voisins mettent la pression sur Jakarta.",
    "points": [
      "L'État malaisien de Johor, voisin de Singapour, a prolongé la fermeture de toutes ses écoles du 12 au 16 octobre, car l'indice de pollution de l'air reste bloqué entre 170 et 180, un niveau jugé mauvais pour la santé [2]. Lors de la première fermeture, cela concernait 1 198 écoles et 617 258 élèves [3].",
      "L'Indonésie fait face à une pression croissante pour punir les pollueurs et accepter davantage d'aide étrangère contre les feux de forêts et de tourbières à Kalimantan et Sumatra ; à Singapour, une aide publique contre la brume entre en vigueur le 13 octobre après une hausse des passages aux urgences [1].",
      "Jakarta dit avoir mobilisé 60 000 personnes contre les feux, tandis que la Malaisie a proposé un avion, trois hélicoptères et 52 agents et attend toujours la réponse indonésienne [4]. Le nombre de foyers d'incendie a encore augmenté, à 909, selon un décompte publié le 12 octobre [6]."
    ],
    "why": [
      "La fumée ne connaît pas les frontières : des feux allumés en Indonésie ferment des écoles en Malaisie et remplissent les urgences à Singapour. Selon Bloomberg, l'épisode s'annonce comme le pire depuis plus de dix ans, et les foyers repérés par satellite en septembre étaient au plus haut depuis 2015 [5].",
      "Ces feux sont souvent liés au brûlis, une technique qui consiste à brûler la végétation pour défricher des terres agricoles, par exemple pour des plantations [1]. Les tourbières, des sols gorgés de matière végétale, brûlent longtemps et dégagent énormément de fumée et de CO2.",
      "C'est un test pour l'ASEAN, le club des pays d'Asie du Sud-Est : la Malaisie réclame une réunion d'urgence des ministres de l'Environnement, mais l'Indonésie tient à garder la main sur sa propre crise."
    ],
    "forMe": "Tu ne respires pas cette fumée, mais tu consommes peut-être des produits liés à ces terres : huile de palme, papier, bois. Cette crise rappelle que la déforestation à l'autre bout du monde a des effets très concrets sur la santé de millions de personnes et sur le climat de tous.",
    "figures": [
      {
        "value": "617 258",
        "label": "élèves touchés par la fermeture des écoles de Johor",
        "src": 3
      },
      {
        "value": "60 000",
        "label": "personnes mobilisées par l'Indonésie contre les incendies",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "The Star / Jakarta Post",
        "name": "The Star (article du Jakarta Post), « Pressure intensifies on Indonesia as regional haze worsens » (12 oct. 2026)",
        "url": "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/10/12/pressure-intensifies-on-indonesia-as-regional-haze-worsens"
      },
      {
        "short": "Malay Mail",
        "name": "Malay Mail, « Johor extends school closures until Oct 16 as haze worsens » (11 oct. 2026)",
        "url": "https://www.malaymail.com/news/malaysia/2026/10/11/johor-extends-school-closures-until-oct-16-as-haze-worsens/238614"
      },
      {
        "short": "Malay Mail",
        "name": "Malay Mail, « Haze: All Johor schools to close for two days starting tomorrow by Regent's decree over unhealthy API » (7 oct. 2026)",
        "url": "https://www.malaymail.com/news/malaysia/2026/10/07/haze-all-johor-schools-to-close-for-two-days-starting-tomorrow-by-regents-decree-over-unhealthy-api/238152"
      },
      {
        "short": "Malay Mail",
        "name": "Malay Mail, « Malaysia, Indonesia in high-level contact over haze as Jakarta deploys 60,000 to fight fires » (11 oct. 2026)",
        "url": "https://www.malaymail.com/amp/news/malaysia/2026/10/11/malaysia-indonesia-in-high-level-contact-over-haze-as-jakarta-deploys-60000-to-fight-fires-says-indonesian-minister/238683"
      },
      {
        "short": "Bloomberg",
        "name": "Bloomberg, « Why Haze Crisis Hitting Indonesia, Malaysia, Singapore Is So Bad This Year » (9 oct. 2026)",
        "url": "https://www.bloomberg.com/news/articles/2026-10-09/why-haze-crisis-hitting-indonesia-malaysia-singapore-is-so-bad-this-year"
      },
      {
        "short": "Media Selangor",
        "name": "Media Selangor, « Forest fires continue to plague Indonesia as regional haze concerns persist » (12 oct. 2026)",
        "url": "https://mediaselangor.com/en/2026/10/400730"
      }
    ]
  },
  {
    "id": "2026-10-12-mexique-ouragan-simon-ports",
    "date": "2026-10-12",
    "region": "Amériques",
    "theme": "eco",
    "geo": [
      {
        "name": "Manzanillo",
        "label": "Mexique",
        "coords": [
          -104.32,
          19.05
        ]
      }
    ],
    "title": "Ouragan Simon : le Mexique ferme neuf ports, dont sa grande porte vers l'Asie",
    "summary": "Face à un puissant ouragan sur la côte Pacifique, la Marine mexicaine a fermé Manzanillo, le premier port à conteneurs du pays. Les échanges avec l'Asie sont à l'arrêt.",
    "points": [
      "Dimanche 11 octobre, la Marine mexicaine a fermé neuf ports du Pacifique, dont Manzanillo et Lázaro Cárdenas, au passage de l'ouragan Simon ; 579 personnes ont été mises à l'abri dans les États de Jalisco, Colima et Nayarit [1].",
      "Les principaux terminaux à conteneurs de Manzanillo, dont Contecon, SSA Marine et Hutchison Ports, avaient déjà suspendu leurs opérations et reporté les rendez-vous de chargement au lundi 12 octobre [3]. Les aéroports de Puerto Vallarta et de Manzanillo ont aussi été fermés [5].",
      "L'œil de l'ouragan est resté au large et Simon s'est affaibli, mais sa pluie et sa houle ont suffi à fermer les plus grands ports du Pacifique mexicain ; aucun décès n'était signalé lundi matin [2]."
    ],
    "why": [
      "Manzanillo est le premier port à conteneurs du Mexique et sa principale porte d'entrée pour les marchandises venues d'Asie [2]. En 2025, il a traité près de 3,9 millions de conteneurs « équivalent vingt pieds » (EVP, l'unité de mesure des boîtes métalliques du commerce mondial) [4].",
      "Quand un tel port s'arrête même deux ou trois jours, des navires attendent au large, des pièces n'arrivent pas dans les usines et les retards se propagent. Le Mexique est devenu un atelier clé pour l'industrie américaine, notamment automobile.",
      "Avec des océans plus chauds, les ouragans intenses deviennent plus fréquents. Les ports, souvent construits en bord de mer exposé, sont en première ligne."
    ],
    "forMe": "L'impact direct pour toi est faible : Manzanillo sert surtout le commerce entre l'Asie et l'Amérique du Nord. Mais cette histoire montre à quel point nos objets dépendent de quelques grands ports, et qu'une seule tempête peut gripper une chaîne d'approvisionnement à l'autre bout du monde.",
    "figures": [
      {
        "value": "9",
        "label": "ports du Pacifique fermés par la Marine mexicaine",
        "src": 1
      },
      {
        "value": "3,9 millions",
        "label": "conteneurs (EVP) traités par Manzanillo en 2025",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Rio Times",
        "name": "The Rio Times, « Hurricane Simon: Manzanillo Port Shut, 579 Moved to Safety » (11-12 oct. 2026)",
        "url": "https://www.riotimesonline.com/mexico-hurricane-simon-ports-closed-evacuations-2026/"
      },
      {
        "short": "HNGN",
        "name": "HNGN, « Hurricane Simon Crawls Past Jalisco Offshore, Shutting Mexico's Biggest Pacific Ports » (12 oct. 2026)",
        "url": "https://www.hngn.com/articles/273488/20261012/hurricane-simon-crawls-past-jalisco-offshore-shutting-mexicos-biggest-pacific-ports.htm"
      },
      {
        "short": "DataPortuaria",
        "name": "DataPortuaria, « Hurricane Simon Halts Operations at Manzanillo Terminals » (oct. 2026)",
        "url": "https://dataportuaria.com/en/mexico/logistics/hurricane-simon-halts-operations-at-manzanillo-terminals-9153a9"
      },
      {
        "short": "Cluster Industrial",
        "name": "Cluster Industrial, « Manzanillo cierra 2025 como líder portuario con casi 4 millones de TEUs » (janv. 2026)",
        "url": "https://clusterindustrial.com.mx/manzanillo-cierra-2025-como-lider-portuario-con-casi-4-millones-de-teus/"
      },
      {
        "short": "Infobae",
        "name": "Infobae, « Cerrados los aeropuertos mexicanos de Puerto Vallarta y Manzanillo ante el huracán Simón » (11 oct. 2026)",
        "url": "https://www.infobae.com/america/agencias/2026/10/11/cerrados-los-aeropuertos-mexicanos-de-puerto-vallarta-y-manzanillo-ante-el-huracan-simon/"
      }
    ]
  },
  {
    "id": "2026-10-12-bresil-paris-sportifs-interdits",
    "date": "2026-10-12",
    "region": "Amériques",
    "theme": "mix",
    "geo": [
      {
        "name": "Rio de Janeiro (Maracanã)",
        "label": "Brésil",
        "coords": [
          -43.23,
          -22.91
        ]
      }
    ],
    "title": "Brésil : Lula interdit les paris sportifs, Flamengo et Fluminense jouent avec un slogan de protestation",
    "summary": "Au Brésil, les paris sportifs en ligne sont interdits depuis le 6 octobre. Au derby de Rio, les deux clubs ont remplacé leur sponsor par « Interdire n'est pas protéger ».",
    "points": [
      "Dimanche 11 octobre, au stade Maracanã, Flamengo et Fluminense ont remplacé sur leur maillot le logo de leur ancien sponsor de paris (Betano et Superbet) par le slogan « Proibir não é proteger » (« Interdire n'est pas protéger »), contre la mesure provisoire 1.394/2026 qui interdit les paris sportifs à cote fixe [1].",
      "Signé par Lula le 25 septembre, ce texte a bloqué les nouveaux dépôts et fait fermer les sites et applications de paris le 6 octobre ; le Congrès doit l'approuver dans les 120 jours pour qu'il reste en vigueur [3]. Les fédérations de football de São Paulo et de Rio ont parlé d'un « coup fatal pour le football brésilien », et Lula a répondu que les clubs « devront se débrouiller » [4].",
      "Le derby a eu lieu deux semaines avant le second tour de l'élection présidentielle du 25 octobre, ce qui transforme ce match en moment politique [2]."
    ],
    "why": [
      "Le gouvernement justifie l'interdiction par l'addiction au jeu et le surendettement des familles : selon le ministère des Finances, les ménages brésiliens dépensent environ 60 milliards de reais par an en paris en ligne, alors que le secteur rapporte environ 10 milliards de reais d'impôts [3].",
      "Les opérateurs répondent que l'interdiction va pousser plus de 30 millions de parieurs vers des sites illégaux, sans protection ni impôts [3]. Le football, lui, perd d'un coup ses plus gros sponsors.",
      "C'est un vrai choix de société, en pleine campagne : protéger les ménages ou défendre une industrie qui finance le sport. La décision finale reviendra au Congrès."
    ],
    "forMe": "En France, les paris sportifs en ligne sont autorisés et encadrés par l'Autorité nationale des jeux (ANJ), et leurs publicités sont partout pendant les matchs. Le Brésil montre qu'un pays peut décider de tout arrêter d'un coup : un débat qui pourrait un jour arriver chez nous.",
    "figures": [
      {
        "value": "60 milliards de reais",
        "label": "dépensés chaque année par les ménages brésiliens en paris en ligne (estimation du ministère des Finances)",
        "src": 3
      },
      {
        "value": "30 millions",
        "label": "parieurs qui risquent de partir vers des sites illégaux, selon l'association de l'industrie ANJL",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Inside World Football",
        "name": "Inside World Football, « Flu-Fla derby sees ‘Proibir não é proteger’ shirt protest over Brazil's betting ban » (12 oct. 2026)",
        "url": "https://www.insideworldfootball.com/2026/10/12/flu-fla-derby-sees-proibir-nao-e-proteger-shirt-protest-over-brazils-betting-ban"
      },
      {
        "short": "Latin Times",
        "name": "Latin Times, « Fla-Flu Protest: Lula's Sudden Betting Ban Put Brazil's Football Season on a Collision Course With the Election » (oct. 2026)",
        "url": "https://www.latintimes.com/fla-flu-protest-lulas-sudden-betting-ban-put-brazils-football-season-collision-course-600064"
      },
      {
        "short": "Reuters / US News",
        "name": "Reuters via US News, « Brazil's Lula Bans Online Betting, Unveils Debt Relief Plan as Reelection Race Tightens » (25 sept. 2026)",
        "url": "https://www.usnews.com/news/world/articles/2026-09-25/brazils-lula-bans-online-betting-operations-as-reelection-race-tightens"
      },
      {
        "short": "Reuters / Investing.com",
        "name": "Reuters via Investing.com, « Brazilian soccer teams cry foul at Lula's online betting ban » (30 sept. 2026)",
        "url": "https://www.investing.com/news/stock-market-news/brazilian-soccer-teams-cry-foul-at-lulas-online-betting-ban-4925519"
      }
    ]
  },
  {
    "id": "2026-10-12-danemark-robots-supermarche",
    "date": "2026-10-12",
    "region": "Europe",
    "theme": "eco",
    "geo": [
      {
        "name": "Copenhague",
        "label": "Danemark",
        "coords": [
          12.57,
          55.68
        ]
      }
    ],
    "title": "Danemark : des robots humanoïdes apprennent à remplir les rayons du supermarché la nuit",
    "summary": "Un supermarché près de Copenhague teste des robots à forme humaine pour réassortir les rayons. Objectif : qu'ils travaillent seuls la nuit dès début 2027.",
    "points": [
      "Le groupe danois Salling teste des robots humanoïdes dans un supermarché Føtex près de Copenhague ; ils sont développés par la start-up danoise Hive Robots sur une base fabriquée par le chinois Unitree [1].",
      "L'entraînement a commencé en juin 2026 : des opérateurs humains guident chaque mouvement pour que l'intelligence artificielle apprenne à saisir et ranger les produits, avec l'objectif d'un réassort autonome, surtout la nuit, d'ici début 2027 [1].",
      "Selon Føtex, ses employés passent 40 à 50 % de leur temps à remplir les rayons ; mais les robots restent plus lents que les humains, et la loi danoise devrait changer avant qu'ils puissent travailler seuls au milieu des clients [2]."
    ],
    "why": [
      "Après les usines, les robots humanoïdes commencent à entrer dans des métiers de service du quotidien. Remplir les rayons est une tâche répétitive et pénible, que les supermarchés ont du mal à faire assurer la nuit.",
      "Plus tard, ces robots pourraient aussi vérifier les dates de péremption, repérer les rayons vides ou les produits mal rangés [2]. Le groupe Salling compte plus de 2 000 magasins dans six pays européens, donc un succès pourrait vite se diffuser [1].",
      "L'expérience montre aussi une dépendance : le « corps » du robot est chinois, seule l'intelligence logicielle est européenne. C'est un enjeu de souveraineté industrielle."
    ],
    "forMe": "Les emplois de mise en rayon sont souvent des jobs étudiants ou des premiers emplois. Si ces robots marchent, ces postes pourraient changer, avec moins de tâches physiques et plus de surveillance de machines. Rien n'est prêt avant 2027, mais c'est une tendance à suivre.",
    "figures": [
      {
        "value": "40 à 50 %",
        "label": "du temps des employés de Føtex passé à remplir les rayons",
        "src": 2
      },
      {
        "value": "2 000",
        "label": "magasins du groupe Salling dans six pays européens",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Euronews",
        "name": "Euronews, « Denmark tests humanoid robots in supermarkets to help to ease staff workload at night » (11 oct. 2026)",
        "url": "https://www.euronews.com/video/2026/10/11/denmark-tests-humanoid-robots-in-supermarkets-to-help-to-ease-staff-workload-at-night"
      },
      {
        "short": "Euro Weekly News",
        "name": "Euro Weekly News, « Humanoid robots enter Danish supermarkets to transform night shifts forever » (12 oct. 2026)",
        "url": "https://euroweeklynews.com/2026/10/12/humanoid-robots-enter-danish-supermarkets-to-transform-night-shifts-forever/"
      }
    ]
  },
  {
    "id": "2026-10-12-ouzbekistan-inflation",
    "date": "2026-10-12",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Tachkent",
        "label": "Ouzbékistan",
        "coords": [
          69.24,
          41.3
        ]
      }
    ],
    "title": "Ouzbékistan : l'inflation ralentit à 6,4 %, la banque centrale garde son taux à 14 %",
    "summary": "Les prix montent moins vite qu'il y a un an en Ouzbékistan. La banque centrale reste prudente et ne baisse pas encore ses taux.",
    "points": [
      "En septembre, l'inflation ouzbèke est de 6,4 % sur un an, contre 8 % un an plus tôt [1].",
      "Hors fruits et légumes, elle atteint 6,8 % sur un an [1].",
      "Le 16 septembre, la banque centrale a gardé son taux directeur à 14 % ; elle veut ramener l'inflation à 5 % d'ici fin 2027, et son prochain rendez-vous est le 28 octobre [2]."
    ],
    "why": [
      "L'inflation, c'est la hausse générale des prix. Un taux directeur élevé, comme ici 14 %, rend le crédit cher et freine les prix. Tant que l'inflation reste au-dessus de la cible de 5 %, la banque centrale ne veut pas relâcher.",
      "L'Ouzbékistan est un pays d'Asie centrale. Tant que les prix montent plus vite que la cible, la banque centrale garde un taux élevé, ce qui rend les crédits chers pour les entreprises."
    ],
    "forMe": "Tu n'es pas touché directement. Mais c'est un exemple de pays qui lutte contre la hausse des prix avec des taux très hauts, une recette que beaucoup d'économies émergentes utilisent.",
    "figures": [
      {
        "value": "6,4 %",
        "label": "l'inflation en Ouzbékistan en septembre 2026, sur un an",
        "src": 1
      },
      {
        "value": "14 %",
        "label": "le taux directeur, inchangé depuis le 16 septembre",
        "src": 2
      },
      {
        "value": "5 %",
        "label": "la cible d'inflation, visée pour fin 2027",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Daryo",
        "name": "Daryo, « Uzbekistan's annual inflation slows to 6.4% in September, down from 8% in 2025 » (6 oct. 2026)",
        "url": "https://daryo.uz/en/2026/10/06/uzbekistans-annual-inflation-slows-to-6-4-in-september-down-from-8-in-2025/"
      },
      {
        "short": "Daryo",
        "name": "Daryo, « Uzbekistan's central bank keeps key rate unchanged at 14% as inflation slows » (16 sept. 2026)",
        "url": "https://daryo.uz/en/2026/09/16/uzbekistans-central-bank-keeps-key-rate-unchanged-at-14-as-inflation-slows/"
      }
    ]
  },
  {
    "id": "2026-10-12-ouganda-shilling",
    "date": "2026-10-12",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Kampala",
        "label": "Ouganda",
        "coords": [
          32.58,
          0.35
        ]
      }
    ],
    "title": "Ouganda : le shilling tombe à un plus bas historique, au-dessus de 4 000 pour un dollar",
    "summary": "La monnaie ougandaise n'a jamais valu aussi peu. Les importateurs de carburant achètent des dollars, et la banque centrale laisse faire.",
    "points": [
      "Début octobre, le shilling ougandais a dépassé 4 000 pour un dollar, son niveau le plus bas jamais enregistré ; il atteignait 4 025 en début de séance lundi [1][2].",
      "Il a perdu environ 10 % depuis janvier, la deuxième plus mauvaise performance d'Afrique cette année après le cedi du Ghana [1].",
      "Les cambistes pointent les achats de dollars par les industriels, les importateurs d'énergie et les commerçants qui préparent les importations de fin d'année, dans un contexte de pétrole cher. La banque centrale n'est pas intervenue et dit que la valeur de la monnaie dépend de l'offre et de la demande [2]."
    ],
    "why": [
      "Une monnaie qui baisse rend tout ce qu'on importe plus cher. L'Ouganda doit acheter son carburant en dollars : plus le dollar est cher, plus l'essence, le transport et la nourriture coûtent en shillings.",
      "La banque centrale pourrait vendre des dollars pour freiner la chute, mais elle garde ses réserves et laisse le marché décider. C'est un choix : ne pas dépenser ses réserves, au risque de voir les prix monter."
    ],
    "forMe": "Tu ne paies pas en shillings. Mais l'Ouganda exporte du café et de l'or, et une monnaie faible change les prix qu'il peut proposer. Ça concerne aussi les Ougandais de la diaspora qui envoient de l'argent au pays.",
    "figures": [
      {
        "value": "4 025",
        "label": "shillings pour un dollar, un record, en début de séance lundi",
        "src": 1
      },
      {
        "value": "−10 %",
        "label": "la baisse du shilling depuis le début de l'année",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "dollar"
    ],
    "sources": [
      {
        "short": "Market Briefs",
        "name": "Market Briefs, « Ugandan shilling sinks to record low as dollar demand builds »",
        "url": "https://www.briefs.co/news/ugandan-shilling-sinks-to-record-low-as-dollar-demand-builds/"
      },
      {
        "short": "Daily Monitor",
        "name": "Daily Monitor (Ouganda), « Shilling hits record low as seasonal demand piles pressure »",
        "url": "https://www.monitor.co.ug/uganda/news/national/shilling-hits-record-low-as-seasonal-demand-piles-pressure-5620526"
      }
    ]
  },
  {
    "id": "2026-10-12-arabie-houthis-aeroports",
    "date": "2026-10-12",
    "region": "Moyen-Orient",
    "theme": "mix",
    "geo": [
      {
        "name": "Riyad",
        "label": "Arabie saoudite",
        "coords": [
          46.72,
          24.71
        ]
      }
    ],
    "title": "Arabie saoudite : quatre jours de frappes houthies sur les aéroports clouent des centaines de vols",
    "summary": "Les rebelles houthis du Yémen visent les aéroports saoudiens, dont celui de Riyad. Le risque pour le pétrole du Golfe fait réagir les marchés.",
    "points": [
      "Selon Enterprise (citant Reuters), quatre jours de frappes houthies sur des aéroports saoudiens ont fait trois morts et cloué au sol des centaines de vols [1].",
      "Les Houthis disent avoir tiré un missile sur l'aéroport international Roi-Khaled de Riyad, un jour après une attaque sur le même aéroport qui avait fait un mort. La coalition affirme avoir intercepté deux missiles au-dessus de la capitale ; des débris ont touché une école maternelle et une clinique [1].",
      "Fin septembre déjà, le pétrole avait bondi après des attaques revendiquées par les Houthis contre des sites saoudiens [2]. Début octobre, le Brent dépassait 102 dollars le baril [3]."
    ],
    "why": [
      "Les Houthis sont un groupe armé du Yémen, soutenu par l'Iran. Frapper les aéroports d'un pays, c'est viser sa vie économique : voyageurs, fret, image pour les investisseurs.",
      "L'Arabie saoudite est un des plus gros producteurs de pétrole au monde. Chaque attaque sur ses sites fait craindre pour l'approvisionnement, et les prix réagissent même si la production n'est pas touchée."
    ],
    "forMe": "Quand le pétrole monte, l'essence et le gazole montent aussi à la pompe en France, avec quelques semaines de décalage. Si tu prévois un voyage avec escale dans le Golfe, regarde aussi l'état du trafic aérien.",
    "figures": [
      {
        "value": "3",
        "label": "morts en quatre jours de frappes sur des aéroports saoudiens",
        "src": 1
      },
      {
        "value": "> 102 $",
        "label": "le baril de Brent le 5 octobre",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Enterprise",
        "name": "Enterprise (Égypte), « Four days of Houthi strikes on Saudi airports kill three and ground hundreds of flights » (9 oct. 2026)",
        "url": "https://enterpriseam.com/menaplus/2026/10/09/four-days-of-houthi-strikes-on-saudi-airports-kill-three-and-ground-hundreds-of-flights/"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Oil prices jump after Yemen's Houthis claim attacks on Saudi facilities » (25 sept. 2026)",
        "url": "https://aljazeera.com/economy/2026/9/25/oil-prices-jump-after-yemens-houthis-claim-attacks-on-saudi-facilities"
      },
      {
        "short": "Gulf News",
        "name": "Gulf News, « Oil prices split as Brent tops $102 » (5 oct. 2026)",
        "url": "https://gulfnews.com/world/americas/oil-prices-split-as-brent-tops-102-murban-hits-110-per-barrel-on-oct-5-2026-1.500698305"
      }
    ]
  },
  {
    "id": "2026-10-11-azerbaidjan-banque-mondiale",
    "date": "2026-10-11",
    "region": "Europe",
    "theme": "eco",
    "geo": [
      {
        "name": "Bakou",
        "label": "Azerbaïdjan",
        "coords": [
          49.87,
          40.41
        ]
      }
    ],
    "title": "Azerbaïdjan : la Banque mondiale ramène sa prévision de croissance à 1,2 %",
    "summary": "Le pays du Caucase, qui vit du pétrole et du gaz, va croître moins que prévu en 2026. Le déclin des champs pétroliers pèse, et l'État dépense moins pour ses chantiers.",
    "points": [
      "Dans sa mise à jour d'octobre, la Banque mondiale prévoit une croissance de 1,2 % en 2026 pour l'Azerbaïdjan, puis 1,8 % en 2027 et 1,9 % en 2028 [1].",
      "Elle explique ce ralentissement par le déclin structurel du secteur pétrolier et par une activité hors pétrole plus faible qu'attendu, après des coupes dans les dépenses d'investissement de l'État [1].",
      "C'est une baisse par rapport à avril, où la banque tablait sur 2 % pour 2026 [2]. La banque centrale azerbaïdjanaise, elle, prévoyait 1,1 % en mai [1]."
    ],
    "why": [
      "Un pays qui dépend du pétrole voit ses revenus fondre quand ses puits produisent moins. L'Azerbaïdjan essaie donc de faire grandir les autres secteurs (commerce, construction, services), mais cela prend du temps.",
      "Le pays est aussi une pièce du puzzle énergétique européen : il envoie du gaz vers l'Europe par gazoduc. Son économie compte donc au-delà du Caucase."
    ],
    "forMe": "Ça ne change pas ton quotidien tout de suite. Mais c'est un rappel : le gaz qui chauffe une partie de l'Europe vient de pays dont l'économie est fragile et très dépendante de cette seule ressource.",
    "figures": [
      {
        "value": "1,2 %",
        "label": "la croissance prévue en 2026 pour l'Azerbaïdjan, selon la Banque mondiale",
        "src": 1
      },
      {
        "value": "2 %",
        "label": "la prévision de la même banque en avril",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Trend",
        "name": "Trend.az, « World Bank forecasts Azerbaijan's GDP to grow in 2027-28 » (6 octobre 2026)",
        "url": "https://www.trend.az/azerbaijan/4231517.html"
      },
      {
        "short": "Caliber.az",
        "name": "Caliber.az, « World Bank raises Azerbaijan's growth forecast for 2026-2027 »",
        "url": "https://caliber.az/en/post/world-bank-raises-azerbaijan-s-growth-forecast-for-2026-2027"
      }
    ]
  },
  {
    "id": "2026-10-11-angola-banque-mondiale",
    "date": "2026-10-11",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Luanda",
        "label": "Angola",
        "coords": [
          13.23,
          -8.84
        ]
      }
    ],
    "title": "Angola : le pétrole cher fait grimper la croissance prévue à 4,5 %",
    "summary": "La Banque mondiale relève nettement sa prévision pour l'Angola. Le pays exporte du pétrole, donc il profite de la hausse des prix plutôt que d'en souffrir.",
    "points": [
      "La Banque mondiale a relevé sa prévision de croissance de l'Angola pour 2026 à 4,5 %, contre 3,1 % en 2025. Elle attend ensuite 3,3 % en 2027 et 3,1 % en 2028 [1].",
      "Elle met cette hausse sur le compte des exportations de pétrole et de prix du brut élevés [1].",
      "Le pays est moins exposé que d'autres au choc énergétique lié au conflit au Moyen-Orient, car il vend du pétrole au lieu d'en acheter [1]. La banque attend une inflation en baisse, à 10,3 % cette année [1]."
    ],
    "why": [
      "Quand le pétrole monte, les pays qui en achètent paient plus cher, et ceux qui en vendent encaissent plus. L'Angola est dans le deuxième camp : son budget dépend en grande partie du brut.",
      "Même avec 4,5 %, une inflation à plus de 10 % reste lourde pour les habitants : les prix montent vite, donc le pouvoir d'achat ne suit pas toujours la croissance."
    ],
    "forMe": "Le plein de ta voiture coûte plus cher, mais pour certains pays producteurs, c'est une bonne nouvelle. Le même événement fait des gagnants et des perdants selon que le pays vend ou achète du pétrole.",
    "figures": [
      {
        "value": "4,5 %",
        "label": "la croissance prévue en Angola en 2026",
        "src": 1
      },
      {
        "value": "10,3 %",
        "label": "l'inflation attendue en Angola cette année",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Ver Angola",
        "name": "Ver Angola, « Economic dynamism prompts World Bank to revise upward forecast for Angola » (octobre 2026)",
        "url": "https://www.verangola.net/va/en/102026/Economy/50341/Economic-dynamism-prompts-World-Bank-to-revise-upward-forecast-for-Angola.htm"
      }
    ]
  },
  {
    "id": "2026-10-11-mongolie-bad",
    "date": "2026-10-11",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Oulan-Bator",
        "label": "Mongolie",
        "coords": [
          106.92,
          47.92
        ]
      }
    ],
    "title": "Mongolie : la Banque asiatique de développement prévoit 1,3 milliard de dollars d'ici 2027",
    "summary": "Le patron de la banque est venu à Oulan-Bator. Trois prêts de 455 millions de dollars au total ont été signés pour la santé, l'école et les catastrophes naturelles.",
    "points": [
      "Le président de la Banque asiatique de développement (BAD), Masato Kanda, a annoncé une enveloppe prévue de 1,3 milliard de dollars pour la Mongolie d'ici 2027, lors d'une visite début octobre [1].",
      "Trois accords de prêt ont été signés, pour 455 millions de dollars en tout : 225 millions pour les services de santé des provinces, 130 millions pour l'éducation en période de difficultés économiques, et 100 millions pour mieux faire face aux catastrophes [1].",
      "Il a aussi rencontré le président mongol et le ministre des Finances, et rendu visite à une famille d'éleveurs à environ 54 kilomètres de la capitale [1]."
    ],
    "why": [
      "La Mongolie est un grand pays peu peuplé, coincé entre la Russie et la Chine. Elle compte sur des partenaires financiers extérieurs pour moderniser ses services publics.",
      "Les 1,3 milliard sont un plan jusqu'en 2027, pas un virement déjà fait : seuls les 455 millions sont signés pour l'instant."
    ],
    "forMe": "Pas d'effet direct sur ton portefeuille. Mais c'est un exemple de la façon dont les banques de développement financent écoles, hôpitaux et prévention des catastrophes dans des pays que les médias évoquent rarement.",
    "figures": [
      {
        "value": "1,3 Md $",
        "label": "l'enveloppe prévue pour la Mongolie d'ici 2027",
        "src": 1
      },
      {
        "value": "455 M$",
        "label": "les trois prêts signés pendant la visite",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "BAD",
        "name": "Banque asiatique de développement, « ADB President Announces $1.3 Billion Planned Financing for Mongolia » (1er octobre 2026)",
        "url": "https://www.adb.org/news/adb-president-announces-1-3-billion-planned-financing-mongolia"
      }
    ]
  },
  {
    "id": "2026-10-11-oman-sp-croissance",
    "date": "2026-10-11",
    "region": "Moyen-Orient",
    "theme": "mix",
    "geo": [
      {
        "name": "Mascate",
        "label": "Oman",
        "coords": [
          58.41,
          23.59
        ]
      }
    ],
    "title": "Oman : le pays qui exporte sans passer par Ormuz voit sa croissance prévue à 3,5 %",
    "summary": "L'agence S&P relève fortement sa prévision pour Oman. Ses ports donnent sur la mer d'Arabie, pas sur le détroit bloqué.",
    "points": [
      "L'agence S&P Global Ratings a relevé sa prévision de croissance d'Oman pour 2026 à 3,5 %, contre 1,6 % auparavant, et confirmé la note du pays à BBB- avec une perspective stable [1][2].",
      "Une grande partie des infrastructures d'export de brut, de gaz naturel liquéfié et de produits raffinés d'Oman donne directement sur le golfe d'Oman ou la mer d'Arabie, ce qui réduit sa dépendance au passage par Ormuz [1].",
      "S&P attend une production moyenne de 1,1 million de barils par jour en 2026. Elle prévient que ses prévisions seraient revues à la baisse si l'Iran intensifiait ses attaques contre les infrastructures omanaises [1][2]."
    ],
    "why": [
      "Le détroit d'Ormuz est le goulet par lequel passe une grande partie du pétrole du Golfe. Quand il est bloqué, les pays qui n'ont pas d'autre sortie perdent leurs revenus.",
      "Oman a la chance de la géographie. À titre de comparaison, un sondage Reuters de juillet voyait le Koweït et le Qatar, entièrement dépendants d'Ormuz, se contracter de 8,1 % cette année [3]."
    ],
    "forMe": "Quand une route maritime se ferme, le pétrole et le gaz coûtent plus cher partout. Les pays qui ont une autre sortie, comme Oman, deviennent des fournisseurs plus précieux pour les acheteurs, dont l'Europe.",
    "figures": [
      {
        "value": "3,5 %",
        "label": "la croissance prévue d'Oman en 2026, contre 1,6 % avant la révision",
        "src": 1
      },
      {
        "value": "1,1 M",
        "label": "barils de pétrole par jour attendus en moyenne en 2026",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "The National",
        "name": "The National, « Oman's economy to grow 3.5% in 2026 on favourable trade logistics, S&P says » (26 septembre 2026)",
        "url": "https://www.thenationalnews.com/business/economy/2026/09/26/omans-economy-to-grow-35-in-2026-on-favourable-trade-logistics-sp-says/"
      },
      {
        "short": "Muscat Daily",
        "name": "Muscat Daily, « S&P affirms Oman rating, lifts growth forecast to 3.5% » (26 septembre 2026)",
        "url": "https://www.muscatdaily.com/2026/09/26/sp-affirms-oman-rating-lifts-growth-forecast-to-3-5/"
      },
      {
        "short": "Enterprise",
        "name": "Enterprise, « Oman, KSA stay insulated from Hormuz shutdown as Kuwait, Qatar contract sharply » (22 juillet 2026)",
        "url": "https://enterpriseam.com/menaplus/2026/07/22/oman-ksa-stay-insulated-from-hormuz-shutdown-as-kuwait-qatar-contract-sharply/"
      }
    ]
  },
  {
    "id": "2026-10-11-ouzbekistan-envois-argent",
    "date": "2026-10-11",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Tachkent",
        "label": "Ouzbékistan",
        "coords": [
          69.24,
          41.3
        ]
      }
    ],
    "title": "Ouzbékistan : les migrants ont envoyé 9,3 milliards de dollars en six mois",
    "summary": "L'argent envoyé par les Ouzbeks qui travaillent à l'étranger pèse lourd dans l'économie du pays. Il vient de plus en plus du Royaume-Uni et de l'Union européenne.",
    "points": [
      "Selon la banque centrale, les virements venus de l'étranger vers l'Ouzbékistan ont atteint 9,3 milliards de dollars de janvier à juin 2026, soit 13 % de plus qu'un an plus tôt [1].",
      "Les envois depuis le Royaume-Uni ont bondi de 62 %, ceux depuis l'Union européenne de 27 % et ceux depuis les États-Unis de 19 % [1].",
      "Les virements de carte à carte ont progressé de 32 % pour atteindre 4,8 milliards de dollars, soit un peu plus de la moitié du total [2]."
    ],
    "why": [
      "Beaucoup d'Ouzbeks partent travailler à l'étranger et envoient de l'argent à leur famille. Pour le pays, c'est une source de devises très importante, qui fait vivre des millions de foyers.",
      "Le fait que les envois progressent vite depuis le Royaume-Uni et l'Union européenne montre que les Ouzbeks partent travailler dans un plus grand nombre de pays."
    ],
    "forMe": "Si tu envoies ou reçois de l'argent d'un proche à l'étranger, tu fais partie de ce mouvement mondial : ces envois pèsent souvent plus que l'aide officielle au développement dans de nombreux pays.",
    "figures": [
      {
        "value": "9,3 Md $",
        "label": "les envois vers l'Ouzbékistan de janvier à juin 2026",
        "src": 1
      },
      {
        "value": "+13 %",
        "label": "la hausse par rapport au premier semestre 2025",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "dollar"
    ],
    "sources": [
      {
        "short": "Banque centrale d'Ouzbékistan",
        "name": "Banque centrale d'Ouzbékistan, communiqué sur les virements transfrontaliers (janvier-juin 2026)",
        "url": "https://cbu.uz/en/press_center/releases/4359624/"
      },
      {
        "short": "Daryo",
        "name": "Daryo, « Remittances to Uzbekistan rise 13% to $9.3bn in 1H26 » (15 août 2026)",
        "url": "https://daryo.uz/en/2026/08/15/remittances-to-uzbekistan-rise-13-to-93bn-in-1h26/"
      }
    ]
  },
  {
    "id": "2026-10-11-uruguay-recul-pib",
    "date": "2026-10-11",
    "region": "Amériques",
    "theme": "eco",
    "geo": [
      {
        "name": "Montevideo",
        "label": "Uruguay",
        "coords": [
          -56.19,
          -34.9
        ]
      }
    ],
    "title": "Uruguay : l'économie recule de 0,8 % au deuxième trimestre, la sécheresse en cause",
    "summary": "Le petit pays d'Amérique du Sud, souvent cité pour sa stabilité, voit son activité reculer. L'agriculture a souffert du manque d'eau.",
    "points": [
      "La banque centrale uruguayenne indique que l'activité a baissé de 0,8 % au deuxième trimestre 2026 par rapport au trimestre précédent, et de 0,5 % sur un an [1].",
      "La forte baisse de l'agriculture est attribuée à la sécheresse qui a touché les cultures d'été lors de la dernière récolte [1].",
      "Le ministère de l'Économie garde une prévision de croissance de 1,6 % pour 2026, déjà réduite depuis 2,2 %, tandis que la médiane des analystes privés tombe à 1 % [1][2]."
    ],
    "why": [
      "Quand un pays vit beaucoup de ses exportations agricoles, la météo pèse directement sur son économie : moins de récolte, c'est moins de ventes et moins de croissance.",
      "L'écart entre la prévision du gouvernement et celle des analystes montre qu'il reste de l'incertitude sur la suite de l'année."
    ],
    "forMe": "L'Uruguay exporte de la viande, du soja et des produits laitiers. Une mauvaise récolte là-bas peut un jour se voir sur certains prix à l'étranger, même si l'effet est modeste pour toi.",
    "figures": [
      {
        "value": "−0,8 %",
        "label": "l'activité uruguayenne au 2e trimestre 2026, sur trois mois",
        "src": 1
      },
      {
        "value": "1,6 %",
        "label": "la prévision de croissance 2026 du gouvernement, réduite depuis 2,2 %",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "La República",
        "name": "La República, « Economía uruguaya cayó 0,8 % en el segundo trimestre del año y complica la meta de crecimiento »",
        "url": "https://www.larepublica.co/globoeconomia/economia-uruguaya-cayo-0-8-en-el-segundo-trimestre-del-ano-y-complica-la-meta-de-crecimiento-4482864"
      },
      {
        "short": "La República (2)",
        "name": "La República, « Nuevos datos sugieren que la economía uruguaya se frenó en el segundo trimestre »",
        "url": "https://www.larepublica.co/globoeconomia/nuevos-datos-sugieren-que-la-economia-uruguaya-se-freno-en-el-segundo-trimestre-4473702"
      }
    ]
  },
  {
    "id": "2026-10-11-honduras-inflation-taux",
    "date": "2026-10-11",
    "region": "Amériques",
    "theme": "eco",
    "geo": [
      {
        "name": "Tegucigalpa",
        "label": "Honduras",
        "coords": [
          -87.2,
          14.07
        ]
      }
    ],
    "title": "Honduras : inflation à 6,2 %, la banque centrale relève son taux",
    "summary": "Honduras a l'inflation la plus élevée d'Amérique centrale. Sa banque centrale a augmenté son taux directeur de 0,25 point.",
    "points": [
      "En août 2026, l'inflation du Honduras a atteint 6,20 % sur un an, la plus haute de la région, devant la République dominicaine (5,13 %) et le Guatemala (3,37 %) [1]. Le Costa Rica est le cas inverse : ses prix ont baissé de 0,17 % sur un an [1].",
      "Le 18 septembre, la banque centrale du Honduras a relevé son taux directeur de 5,75 % à 6 %, avec effet le 21 septembre. Son objectif d'inflation est de 4 % [2].",
      "Elle cite la hausse du pétrole et des prix alimentaires dans le monde, aggravée par les conflits et les droits de douane. Elle présente la mesure comme préventive [2]."
    ],
    "why": [
      "Un taux directeur plus haut rend le crédit plus cher : les prêts aux ménages et aux entreprises coûtent plus, ce qui freine la hausse des prix mais aussi l'activité.",
      "Le contraste avec le Costa Rica, voisin où les prix baissent, montre que l'inflation n'est pas la même partout, même dans une petite région."
    ],
    "forMe": "Le pétrole cher ne touche pas que l'Europe : il pousse les prix vers le haut dans des pays aux revenus bien plus modestes, où l'essence et la nourriture pèsent plus lourd dans le budget.",
    "figures": [
      {
        "value": "6,20 %",
        "label": "l'inflation du Honduras en août 2026, sur un an",
        "src": 1
      },
      {
        "value": "6 %",
        "label": "le nouveau taux directeur, contre 5,75 % avant",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "elDinero",
        "name": "elDinero, « Honduras y República Dominicana a la cabeza por inflación en agosto 2026 »",
        "url": "https://eldinero.com.do/381726/honduras-y-republica-dominica-a-la-cabeza-por-inflacion-en-agosto-2026/"
      },
      {
        "short": "El Heraldo",
        "name": "El Heraldo, « BCH sube Tasa de Política Monetaria de 5.75% a 6% para bajar inflación »",
        "url": "https://elheraldo.hn/economia/bch-sube-tasa-de-politica-monetaria-de-575-a-6-para-bajar-inflacion-AG32075995"
      }
    ]
  },
  {
    "id": "2026-10-11-pologne-croatie-inflation",
    "date": "2026-10-11",
    "region": "Europe",
    "theme": "eco",
    "geo": [
      {
        "name": "Varsovie",
        "label": "Pologne",
        "coords": [
          21.01,
          52.23
        ]
      },
      {
        "name": "Zagreb",
        "label": "Croatie",
        "coords": [
          15.98,
          45.81
        ]
      }
    ],
    "title": "Pologne et Croatie : l'inflation remonte en septembre, tirée par les carburants",
    "summary": "En Pologne, les prix grimpent de 4,0 % sur un an. En Croatie, l'estimation rapide donne 4,7 %. Dans les deux cas, l'énergie est en cause.",
    "points": [
      "En Pologne, l'inflation est passée à 4,0 % sur un an en septembre. Les carburants pour le transport privé ont augmenté de 36,1 %, et l'électricité, le gaz et les autres combustibles de 4,9 % [1].",
      "En Croatie, l'estimation rapide de l'inflation de septembre est de 4,7 % sur un an [1]. Elle était de 4,2 % en août, et la hausse vient surtout de l'énergie, en hausse de 20,5 % [2].",
      "Le plus haut récent croate remonte à mai, avec 5,2 % [2]. Attention : l'estimation rapide peut être corrigée quand le chiffre définitif sort."
    ],
    "why": [
      "L'inflation est la hausse générale des prix. Quand le carburant devient beaucoup plus cher, tout ce qui se transporte augmente aussi, et la hausse s'étend peu à peu au reste.",
      "La Croatie, membre de la zone euro, et la Pologne, qui garde sa monnaie, ont des banques centrales différentes. Mais elles subissent le même choc venu de l'énergie."
    ],
    "forMe": "Si tu pars en vacances en Croatie ou en Pologne, les prix locaux sont plus élevés qu'il y a un an. Le chiffre rappelle aussi que le carburant cher touche toute l'Europe, pas seulement la France.",
    "figures": [
      {
        "value": "4,0 %",
        "label": "l'inflation en Pologne en septembre 2026, sur un an",
        "src": 1
      },
      {
        "value": "4,7 %",
        "label": "l'estimation rapide de l'inflation en Croatie, en septembre",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "FXStreet",
        "name": "FXStreet, « Energy prices push inflation higher » (5 octobre 2026)",
        "url": "https://www.fxstreet.com/analysis/energy-prices-push-inflation-higher-202610050553"
      },
      {
        "short": "RTTNews",
        "name": "RTTNews, inflation en Croatie, estimation rapide de septembre 2026",
        "url": "https://www.rttnews.com/story.aspx?Id=3696106"
      }
    ]
  },
  {
    "id": "2026-10-09-thailande-inflation",
    "date": "2026-10-09",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Bangkok",
        "label": "Thaïlande",
        "coords": [
          100.5,
          13.75
        ]
      }
    ],
    "title": "Thaïlande : l'inflation grimpe à 2,82 %, tirée par l'énergie",
    "summary": "Les prix thaïlandais montent un peu plus vite en septembre, surtout à cause du carburant. La banque centrale, elle, ne bouge pas.",
    "points": [
      "En septembre, l'inflation thaïlandaise est passée à 2,82 % sur un an, contre 2,53 % en août, un peu moins que les 3,10 % attendus par les marchés [1].",
      "L'énergie explique à elle seule 1,85 point de cette hausse, soit plus de 60 % de l'accélération [1].",
      "Le ministère du Commerce s'attend à une nouvelle hausse au dernier trimestre et table sur 1,8 % à 2,2 % sur l'année [1]. La banque centrale garde son taux à 1 % depuis sa baisse de février, alors que celles de Corée du Sud, d'Indonésie et des Philippines ont déjà relevé les leurs [2]."
    ],
    "why": [
      "L'inflation, c'est la hausse générale des prix. Quand le pétrole est cher, tout ce qui se transporte coûte plus cher : carburant, nourriture, billets.",
      "La Thaïlande est dans une situation à part : sa croissance reste faible, donc sa banque centrale hésite à relever ses taux et risquer de la freiner encore. D'autres pays d'Asie ont fait le choix inverse."
    ],
    "forMe": "Si tu pars en Thaïlande, les prix locaux montent un peu, mais le pays reste dans sa zone de confort (entre 1 et 3 %). Le vrai signal est ailleurs : le pétrole cher touche aussi les économies asiatiques qui fabriquent ce que tu achètes.",
    "figures": [
      {
        "value": "2,82 %",
        "label": "l'inflation en Thaïlande en septembre 2026, sur un an",
        "src": 1
      },
      {
        "value": "1 %",
        "label": "le taux directeur de la banque centrale, inchangé depuis février",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "The Nation",
        "name": "The Nation (Thaïlande), « Fuel and fresh food lift Thai September inflation to 2.82% as 2026 forecast narrows to 1.8–2.2% »",
        "url": "https://www.nationthailand.com/business/economy/40071923"
      },
      {
        "short": "The Star",
        "name": "The Star, « Thai central bank keeps key interest rate unchanged » (26 août 2026)",
        "url": "https://www.thestar.com.my/business/business-news/2026/08/26/thai-central-bank-keeps-key-interest-rate-unchanged"
      }
    ]
  },
  {
    "id": "2026-10-09-perou-taux",
    "date": "2026-10-09",
    "region": "Amériques",
    "theme": "eco",
    "geo": [
      {
        "name": "Lima",
        "label": "Pérou",
        "coords": [
          -77.04,
          -12.05
        ]
      }
    ],
    "title": "Pérou : la banque centrale garde son taux à 4,25 %, l'inflation dépasse la cible",
    "summary": "À Lima, les prix montent plus vite que ce que vise la banque centrale. Elle choisit pourtant de ne pas relever son taux.",
    "points": [
      "La banque centrale du Pérou a maintenu son taux directeur à 4,25 % [1].",
      "À Lima, l'inflation a atteint 4,55 % en septembre, au-dessus de la fourchette visée par la banque, de 1 % à 3 % [1].",
      "La Bourse de Lima était fermée le 8 octobre pour un jour férié (bataille d'Angamos) [1]."
    ],
    "why": [
      "Une banque centrale a un objectif : ici, des prix qui montent de 1 à 3 % par an. Quand l'inflation dépasse cette zone, elle peut relever son taux pour freiner le crédit. Là, elle attend et observe.",
      "Le pétrole au-dessus de 100 dollars le baril pèse sur les prix de nombreux pays d'Amérique latine importateurs de carburant [2]."
    ],
    "forMe": "Tu n'es pas touché directement, mais le Pérou fait partie des pays où la hausse du coût de la vie s'installe à cause de l'énergie : un signe de plus que le choc pétrolier se diffuse partout.",
    "figures": [
      {
        "value": "4,25 %",
        "label": "le taux directeur de la banque centrale du Pérou",
        "src": 1
      },
      {
        "value": "4,55 %",
        "label": "l'inflation à Lima en septembre 2026 (cible : 1 à 3 %)",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Rio Times",
        "name": "The Rio Times, « Latin American Pulse for Thursday, October 8, 2026 »",
        "url": "https://riotimesonline.com/latin-american-pulse-for-thursday-october-8-2026"
      },
      {
        "short": "Rio Times (ouverture)",
        "name": "The Rio Times, « Mexican Peso Slides 1.2% as LatAm Opens » (9 oct. 2026)",
        "url": "https://www.riotimesonline.com/latam-pre-open-friday-october-9-2026"
      }
    ]
  },
  {
    "id": "2026-10-09-colombie-inflation",
    "date": "2026-10-09",
    "region": "Amériques",
    "theme": "eco",
    "geo": [
      {
        "name": "Bogotá",
        "label": "Colombie",
        "coords": [
          -74.07,
          4.71
        ]
      }
    ],
    "title": "Colombie : l'inflation atteint 6,29 % en septembre",
    "summary": "Les prix colombiens ont augmenté de plus de 6 % en un an, ce qui devient la principale inquiétude du pays.",
    "points": [
      "La Colombie a publié mercredi son inflation de septembre : 6,29 % sur un an [1].",
      "Les analystes de la région y voient la première inquiétude économique du pays [1].",
      "Le baril de Brent, au-dessus de 100 dollars, soutient le Mexique et la Colombie, mais pèse sur les importateurs de carburant comme le Brésil [2]."
    ],
    "why": [
      "Plus de 6 %, c'est un coût de la vie qui grimpe vite : ton salaire peut perdre du pouvoir d'achat si on ne l'augmente pas autant.",
      "Pour un pays qui vend du pétrole, un baril cher rapporte des devises, mais n'empêche pas les prix intérieurs de monter."
    ],
    "forMe": "L'inflation colombienne ne change pas directement tes prix en France : c'est un repère pour voir que la poussée des prix de l'énergie touche aussi l'Amérique latine.",
    "figures": [
      {
        "value": "6,29 %",
        "label": "l'inflation en Colombie sur un an, en septembre 2026",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Rio Times",
        "name": "The Rio Times, « Latin American Pulse for Thursday, October 8, 2026 »",
        "url": "https://riotimesonline.com/latin-american-pulse-for-thursday-october-8-2026"
      },
      {
        "short": "Rio Times (ouverture)",
        "name": "The Rio Times, « Mexican Peso Slides 1.2% as LatAm Opens » (9 oct. 2026)",
        "url": "https://www.riotimesonline.com/latam-pre-open-friday-october-9-2026"
      }
    ]
  },
  {
    "id": "2026-10-09-uemoa-croissance",
    "date": "2026-10-09",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Dakar (siège de la BCEAO)",
        "label": "UEMOA",
        "coords": [
          -17.44,
          14.69
        ]
      }
    ],
    "title": "UEMOA : la croissance se maintient à 6 % au deuxième trimestre",
    "summary": "Les huit pays d'Afrique de l'Ouest qui partagent le franc CFA continuent de croître vite, à peine moins que le trimestre précédent.",
    "points": [
      "Au deuxième trimestre 2026, l'UEMOA a enregistré une croissance de 6 %, en léger ralentissement par rapport aux 6,1 % du trimestre précédent [1].",
      "Les résultats ont été présentés à Dakar le 2 octobre [1]."
    ],
    "why": [
      "L'UEMOA est l'union économique de plusieurs pays d'Afrique de l'Ouest qui partagent une même monnaie, le franc CFA. Une croissance de 6 % est élevée comparée à l'Europe.",
      "Cela ne veut pas dire que chaque habitant s'enrichit au même rythme : la population augmente vite aussi."
    ],
    "forMe": "Une zone qui croît à ce rythme devient un partenaire commercial de plus en plus important pour la France et l'Europe, qui en sont des clients et fournisseurs historiques.",
    "figures": [
      {
        "value": "6 %",
        "label": "la croissance de l'UEMOA au 2e trimestre 2026 (6,1 % au trimestre précédent)",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Africa24",
        "name": "Africa24, « Afrique : la croissance se maintient à 6 % à fin juin 2026 dans l'UEMOA »",
        "url": "https://africa24tv.com/afrique-la-croissance-se-maintient-a-6-a-fin-juin-2026-dans-lumeoa/"
      }
    ]
  },
  {
    "id": "2026-10-09-georgie-inflation",
    "date": "2026-10-09",
    "region": "Europe",
    "theme": "eco",
    "geo": [
      {
        "name": "Tbilissi",
        "label": "Géorgie",
        "coords": [
          44.79,
          41.72
        ]
      }
    ],
    "title": "Géorgie : l'inflation reste à 5,6 %, portée par les transports",
    "summary": "Les prix géorgiens montent toujours aussi vite en septembre : les transports coûtent près d'un cinquième de plus qu'il y a un an.",
    "points": [
      "En Géorgie, l'inflation annuelle est restée à 5,6 % en septembre 2026, comme en août [1].",
      "Sur un mois, les prix ont augmenté de 0,4 % [1].",
      "Les transports sont le principal moteur : +18,7 % sur un an contre +15,2 % en août, alors que les prix de l'alimentation ralentissent (+3,4 % contre +5,0 %) [1]."
    ],
    "why": [
      "La Géorgie, au bord de la mer Noire, est un petit pays de transit entre l'Europe et l'Asie. Quand le carburant monte, ses transports le ressentent tout de suite.",
      "Que l'alimentation ralentisse est une bonne nouvelle pour les ménages, mais les transports la compensent."
    ],
    "forMe": "Tu en entends peu parler, mais la Géorgie illustre un effet très concret du pétrole cher : se déplacer et transporter des marchandises coûte nettement plus cher, partout.",
    "figures": [
      {
        "value": "5,6 %",
        "label": "l'inflation annuelle en Géorgie, septembre 2026",
        "src": 1
      },
      {
        "value": "+18,7 %",
        "label": "la hausse des prix des transports sur un an",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Trading Economics",
        "name": "Trading Economics, « Georgia Inflation Holds Steady in September »",
        "url": "https://tradingeconomics.com/georgia/inflation-cpi/news/589036"
      }
    ]
  },
  {
    "id": "2026-10-09-islande-taux",
    "date": "2026-10-09",
    "region": "Europe",
    "theme": "eco",
    "geo": [
      {
        "name": "Reykjavik",
        "label": "Islande",
        "coords": [
          -21.94,
          64.15
        ]
      }
    ],
    "title": "Islande : la banque centrale garde son taux à 8 %, l'inflation monte à 5,9 %",
    "summary": "Même avec un taux très élevé, les prix islandais accélèrent : c'est leur plus haut niveau depuis deux ans.",
    "points": [
      "Le 7 octobre, la banque centrale d'Islande a maintenu son taux directeur à 8 % [1].",
      "L'inflation atteint 5,9 %, son plus haut niveau en deux ans [1].",
      "Tous les membres du comité de politique monétaire ont voté pour garder ce taux, en invoquant l'incertitude sur l'économie mondiale et le marché du travail [1]."
    ],
    "why": [
      "Un taux de 8 % est très élevé en Europe. Pourtant, il ne suffit pas à faire reculer les prix : la banque centrale garde donc une politique stricte plutôt que de la desserrer.",
      "C'est un exemple de ce que vivent beaucoup de petites économies ouvertes : elles dépendent des prix mondiaux de l'énergie et ne peuvent pas les contrôler."
    ],
    "forMe": "Si tu voyages en Islande, tout y est déjà cher, et ça continue de grimper. Pour les Islandais, emprunter pour acheter un logement coûte très cher.",
    "figures": [
      {
        "value": "8 %",
        "label": "le taux directeur de la banque centrale d'Islande",
        "src": 1
      },
      {
        "value": "5,9 %",
        "label": "l'inflation, la plus haute depuis deux ans",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Iceland Review",
        "name": "Iceland Review, « Iceland Holds Key Interest Rate at 8% in October 2026 »",
        "url": "https://www.icelandreview.com/news/iceland-interest-rate-8-percent-october-2026/"
      }
    ]
  },
  {
    "id": "2026-10-09-roumanie-banque-mondiale",
    "date": "2026-10-09",
    "region": "Europe",
    "theme": "eco",
    "geo": [
      {
        "name": "Bucarest",
        "label": "Roumanie",
        "coords": [
          26.1,
          44.43
        ]
      }
    ],
    "title": "Roumanie : l'économie devrait reculer d'environ 0,5 % en 2026",
    "summary": "La Banque mondiale voit l'Europe de l'Est ralentir. La Roumanie, qui doit réduire ses déficits, est la plus touchée.",
    "points": [
      "Selon un compte rendu du 8 octobre de la prévision de la Banque mondiale, la Roumanie devrait se contracter d'environ 0,5 %, à cause des économies budgétaires et du coût de l'énergie [1].",
      "La Pologne tient mieux, avec environ 3,6 % de croissance portée par l'investissement public (défense, infrastructures) et les fonds européens [1].",
      "La Roumanie et la Hongrie seraient les seuls pays d'Europe centrale et orientale à réduire leur déficit public l'an prochain [2]."
    ],
    "why": [
      "Un déficit, c'est quand un État dépense plus qu'il ne gagne. Le réduire est utile à long terme, mais cela freine l'économie à court terme : moins de dépenses publiques, moins de commandes, moins d'emplois.",
      "L'énergie chère aggrave le problème, car elle renchérit la production sans que l'État puisse compenser."
    ],
    "forMe": "La Roumanie fait partie de l'Union européenne : quand un pays membre ralentit, la conjoncture n'est pas la même partout en Europe, et ce que tu lis sur « l'économie européenne » cache de grands écarts entre pays.",
    "figures": [
      {
        "value": "−0,5 %",
        "label": "la contraction attendue de l'économie roumaine",
        "src": 1
      },
      {
        "value": "3,6 %",
        "label": "la croissance de la Pologne selon le même compte rendu",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Montenapo Daily",
        "name": "Montenapo Daily, « Banca Mondiale : l'Europa orientale e l'Asia centrale rallentano nel 2026 » (8 oct. 2026)",
        "url": "https://montenapodaily.com/en/2026/10/08/banca-mondiale-leuropa-orientale-e-lasia-centrale-rallentano-nel-2026"
      },
      {
        "short": "FXStreet",
        "name": "FXStreet (ING), « Fiscal discipline varies across CEE » (8 oct. 2026)",
        "url": "https://fxstreet.com/analysis/fiscal-discipline-varies-across-cee-202610080619"
      }
    ]
  },
  {
    "id": "2026-10-09-egypte-banque-mondiale",
    "date": "2026-10-09",
    "region": "Moyen-Orient",
    "theme": "eco",
    "geo": [
      {
        "name": "Le Caire",
        "label": "Égypte",
        "coords": [
          31.24,
          30.04
        ]
      }
    ],
    "title": "Égypte : l'une des rares économies de la région qui devrait croître",
    "summary": "Alors que le Moyen-Orient se contracte à cause de la guerre en Iran, la Banque mondiale prévoit environ 5,1 % de croissance pour l'Égypte.",
    "points": [
      "La Banque mondiale prévoit une contraction de 2,1 % pour la région Moyen-Orient et Afrique du Nord en 2026, et de 4,3 % en moyenne pour les pays du Golfe [1].",
      "L'Égypte fait exception : elle devrait croître de 5,1 % [1].",
      "L'inflation urbaine égyptienne a ralenti à 14,5 % en août, contre 14,9 % en juillet [2]."
    ],
    "why": [
      "La guerre autour de l'Iran et la fermeture d'Ormuz ont fait chuter la production de pétrole du Golfe. L'Égypte, qui n'est pas un grand exportateur, est moins exposée, et profite de certains flux comme le canal de Suez.",
      "Une croissance forte avec une inflation encore élevée, c'est une économie qui avance, mais dont les habitants sentent toujours le prix des produits de base."
    ],
    "forMe": "L'Égypte est un pays clé pour les routes maritimes vers l'Europe et une destination de vacances populaire : sa stabilité économique compte pour les voyages comme pour les prix du transport.",
    "figures": [
      {
        "value": "5,1 %",
        "label": "la croissance prévue de l'Égypte par la Banque mondiale",
        "src": 1
      },
      {
        "value": "14,5 %",
        "label": "l'inflation urbaine en Égypte en août 2026",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes",
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "The National",
        "name": "The National, « World Bank says Middle East economy to contract 2.1% in 2026 on Iran war » (6 oct. 2026)",
        "url": "https://www.thenationalnews.com/business/economy/2026/10/06/world-bank-says-middle-east-economy-to-contract-21-in-2026-on-iran-war/"
      },
      {
        "short": "Trading Economics",
        "name": "Trading Economics, « Egypt Inflation Rate Below Forecasts » (août 2026)",
        "url": "https://tradingeconomics.com/egypt/inflation-cpi/news/582605"
      }
    ]
  },
  {
    "id": "2026-10-08-inde-taux",
    "date": "2026-10-08",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Mumbai (Banque centrale d'Inde)",
        "label": "Inde",
        "coords": [
          72.88,
          19.07
        ]
      }
    ],
    "title": "L'Inde relève ses taux pour la première fois en près de quatre ans",
    "summary": "La banque centrale indienne passe son taux directeur de 5,25 % à 5,50 % pour contenir l'inflation, alors que le pétrole reste cher.",
    "points": [
      "Le 7 octobre, la banque centrale d'Inde (RBI) a relevé son taux directeur de 0,25 point, à 5,50 %, sa première hausse en près de quatre ans [1][2].",
      "Le comité a voté à l'unanimité et adopte une posture de « resserrement calibré » : il serre la vis, mais par petites touches [2].",
      "Pour l'exercice 2026-2027, la RBI prévoit une croissance de 7,1 % ; selon la presse indienne, les baisses de taux ne sont plus à l'ordre du jour à court terme [1]."
    ],
    "why": [
      "Le taux directeur est le prix auquel la banque centrale prête aux banques. En le relevant, elle rend le crédit plus cher : on emprunte et on dépense moins, ce qui freine la hausse des prix.",
      "L'Inde importe l'essentiel de son pétrole. Quand le baril reste cher, les prix montent et la banque centrale réagit, comme d'autres le font dans le monde. Les analystes cités par la presse y voient une réponse aux risques d'inflation, au pétrole cher et aux pressions sur la monnaie [2]."
    ],
    "forMe": "Tu ne verras pas l'effet directement, mais l'Inde est l'un des moteurs de la croissance mondiale. Des taux plus élevés là-bas peuvent ralentir un peu sa demande, et la crise énergétique pèse sur beaucoup de pays à la fois.",
    "figures": [
      {
        "value": "5,50 %",
        "label": "le nouveau taux directeur de la banque centrale d'Inde (contre 5,25 %)",
        "src": 1
      },
      {
        "value": "7,1 %",
        "label": "la croissance prévue par la RBI pour l'exercice 2026-2027",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Business Standard",
        "name": "Business Standard, « RBI MPC hikes repo rate by 25 bps to 5.5%, near-term cuts 'off the table' » (7 oct. 2026)",
        "url": "https://www.business-standard.com/finance/news/rbi-mpc-october-2026-repo-rate-hike-inflation-growth-gdp-sanjay-malhotra-126100700222_1.html"
      },
      {
        "short": "Upstox",
        "name": "Upstox, « RBI MPC October Meeting 2026 Highlights » (7 oct. 2026)",
        "url": "https://upstox.com/news/market-news/economy/rbi-mpc-meeting-october-7-2026-live-updates-governor-sanjay-malhotra-speech-repo-rate-hike-key-highlights/liveblog-201398/"
      }
    ]
  },
  {
    "id": "2026-10-08-kenya-taux",
    "date": "2026-10-08",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Nairobi",
        "label": "Kenya",
        "coords": [
          36.82,
          -1.29
        ]
      }
    ],
    "title": "Kenya : la banque centrale garde son taux à 8,75 %, l'énergie reste la menace",
    "summary": "Avec une inflation proche du haut de sa cible, la banque centrale kényane ne bouge pas et garde la possibilité de durcir.",
    "points": [
      "Le 7 octobre, le comité de politique monétaire de la banque centrale du Kenya a laissé son taux directeur à 8,75 % [1][2].",
      "L'inflation est remontée à 6,8 % en septembre, près du haut de la fourchette visée (2,5 % à 7,5 %) [3].",
      "La banque centrale table sur une croissance de 5 % et dit garder ses options ouvertes si les pressions sur les prix s'intensifient [2]."
    ],
    "why": [
      "Tenir son taux, c'est dire : « ni plus cher, ni moins cher pour le moment ». La banque centrale ne veut pas baisser, car l'inflation approche de sa limite haute, mais elle ne veut pas non plus freiner une économie qui avance.",
      "Le Kenya importe son carburant : le prix de l'énergie est le principal risque cité. Le dernier changement de taux remonte à février 2026, quand il avait été baissé [2]."
    ],
    "forMe": "Si tu consommes du thé ou du café kényan, ou si tu as des proches dans la diaspora, c'est le pouvoir d'achat des Kényans qui est en jeu : le carburant cher renchérit transports et alimentation.",
    "figures": [
      {
        "value": "8,75 %",
        "label": "le taux directeur du Kenya, inchangé",
        "src": 1
      },
      {
        "value": "6,8 %",
        "label": "l'inflation au Kenya en septembre 2026",
        "src": 3
      },
      {
        "value": "5 %",
        "label": "la croissance projetée par la banque centrale",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Banque centrale du Kenya",
        "name": "Central Bank of Kenya, « MPC retains the CBR at 8.75 percent » (7 oct. 2026)",
        "url": "https://www.centralbank.go.ke/2026/10/07/mpc-retains-the-cbr-at-8-75-percent-3/"
      },
      {
        "short": "People Daily",
        "name": "People Daily, « CBK holds interest rate at 8.75% as Kenya growth forecast rises to 5% »",
        "url": "https://peopledaily.digital/business/cbk-holds-interest-rate-at-8-75-as-kenya-growth-forecast-rises-to-5"
      },
      {
        "short": "Rio Times",
        "name": "The Rio Times, « Kenya Holds Interest Rate at 8.75% » (oct. 2026)",
        "url": "https://www.riotimesonline.com/kenya-central-bank-holds-rate-8-75-october-2026"
      }
    ]
  },
  {
    "id": "2026-10-08-bresil-election",
    "date": "2026-10-08",
    "region": "Amériques",
    "theme": "mix",
    "geo": [
      {
        "name": "Brasilia",
        "label": "Brésil",
        "coords": [
          -47.93,
          -15.78
        ]
      }
    ],
    "title": "Brésil : un second tour serré, les marchés réagissent",
    "summary": "Flávio Bolsonaro devance de peu Lula au premier tour de la présidentielle ; le duel final aura lieu le 25 octobre.",
    "points": [
      "Au premier tour, Flávio Bolsonaro a obtenu 47,03 % des voix et Lula 45,16 % ; aucun n'atteint la majorité, il y aura un second tour [1][3].",
      "Les marchés brésiliens se sont envolés après le scrutin, puis la Bourse de São Paulo (Ibovespa) a reculé de 0,7 % à 204 302 points lors de la séance suivante [1][2].",
      "Le dollar reste sous la barre des 5 réais et le second tour est prévu le 25 octobre [1]."
    ],
    "why": [
      "Le Brésil est la plus grande économie d'Amérique latine et un géant agricole et minier (soja, minerai de fer, pétrole). Ses choix économiques comptent bien au-delà de ses frontières.",
      "Les marchés financiers réagissent aux résultats parce que les deux candidats défendent des politiques différentes sur les dépenses de l'État et les impôts. Nous ne prenons pas parti : nous expliquons pourquoi les investisseurs surveillent ce vote de près."
    ],
    "forMe": "Le Brésil exporte du soja, du café et du minerai de fer. Une secousse sur sa monnaie ou sa Bourse peut jouer sur les prix de certaines matières premières, jusque dans ton assiette.",
    "figures": [
      {
        "value": "47,03 %",
        "label": "Flávio Bolsonaro au premier tour",
        "src": 1
      },
      {
        "value": "45,16 %",
        "label": "Lula au premier tour",
        "src": 1
      },
      {
        "value": "-0,7 %",
        "label": "l'Ibovespa lors de la séance suivante",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "dollar"
    ],
    "sources": [
      {
        "short": "Rio Times",
        "name": "The Rio Times, « Latin American Pulse for Wednesday, October 7, 2026 »",
        "url": "https://www.riotimesonline.com/latin-american-pulse-for-wednesday-october-7-2026/"
      },
      {
        "short": "Rio Times (Bourse)",
        "name": "The Rio Times, « LatAm Opens After Ibovespa's 0.7% Drop » (8 oct. 2026)",
        "url": "https://www.riotimesonline.com/latam-pre-open-thursday-october-8-2026/"
      },
      {
        "short": "Ground News",
        "name": "Ground News, « Brazil election goes to run-off as right-wing Flávio Bolsonaro wins first round »",
        "url": "https://ground.news/article/79efcb62-170d-4be3-b25d-011b374d584f"
      }
    ]
  },
  {
    "id": "2026-10-08-mozambique-bad",
    "date": "2026-10-08",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Maputo",
        "label": "Mozambique",
        "coords": [
          32.57,
          -25.97
        ]
      }
    ],
    "title": "Mozambique : l'économie s'est contractée en 2025, la reprise sera lente",
    "summary": "La Banque africaine de développement estime que le PIB a reculé de 0,2 % en 2025 et ne prévoit qu'un rebond modeste.",
    "points": [
      "Selon la Banque africaine de développement (BAD), l'économie mozambicaine a reculé de 0,2 % en 2025, après +2,1 % en 2024 [1].",
      "La BAD prévoit une croissance de 0,5 % en 2026 puis 1,5 % en 2027 [1].",
      "Elle signale un risque d'inflation lié à la hausse du carburant et des transports, notamment à cause des perturbations dans le détroit d'Ormuz [1]."
    ],
    "why": [
      "Quand la croissance est inférieure à celle de la population, chacun s'appauvrit en moyenne. Avec 0,5 % de croissance prévue en 2026, la reprise reste très fragile.",
      "Le Mozambique est loin du Golfe, mais il subit la crise énergétique : le carburant importé coûte plus cher, et cela se répercute sur le transport des marchandises et sur les prix."
    ],
    "forMe": "C'est un exemple de ce que la crise d'Ormuz fait à des pays dont on parle peu : le choc touche aussi ceux qui sont très loin de la zone de conflit.",
    "figures": [
      {
        "value": "-0,2 %",
        "label": "la croissance du Mozambique en 2025 (estimation BAD)",
        "src": 1
      },
      {
        "value": "+0,5 %",
        "label": "la croissance prévue en 2026",
        "src": 1
      },
      {
        "value": "+1,5 %",
        "label": "la croissance prévue en 2027",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "BAD",
        "name": "Banque africaine de développement, « Country Focus Report 2026 – Mozambique » (7 oct. 2026)",
        "url": "https://www.afdb.org/en/documents/country-focus-report-2026-mozambique-mobilizing-97343"
      }
    ]
  },
  {
    "id": "2026-10-08-coree-exports",
    "date": "2026-10-08",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Séoul",
        "label": "Corée du Sud",
        "coords": [
          126.98,
          37.57
        ]
      }
    ],
    "title": "Corée du Sud : des exportations record grâce aux puces de l'IA",
    "summary": "Les ventes à l'étranger ont bondi de 83,5 % en septembre, et la Banque mondiale relève sa prévision pour l'Asie de l'Est, tout en alertant sur la dépendance à l'IA.",
    "points": [
      "En septembre, les exportations sud-coréennes ont atteint un record de 120,9 milliards de dollars, +83,5 % sur un an [1][2].",
      "Les puces électroniques ont à elles seules rapporté 60,3 milliards de dollars, plus de 260 % de hausse sur un an [1][2].",
      "La Banque mondiale a relevé à 4,5 % sa prévision de croissance 2026 pour l'Asie de l'Est et le Pacifique, mais prévient que les produits liés à l'IA tirent l'essentiel des exportations de la région [3]."
    ],
    "why": [
      "Les puces servent à entraîner et faire tourner l'intelligence artificielle. La Corée du Sud en fabrique une grande part, donc elle profite à plein de cette demande.",
      "Mais c'est un risque : si tout repose sur un seul produit, un ralentissement de l'IA frapperait fort. C'est ce que souligne la Banque mondiale, qui note que les échanges hors IA sont faibles dans la région [3]."
    ],
    "forMe": "Les puces coréennes sont dans ton téléphone, ton ordinateur et de plus en plus dans les voitures. Leur prix et leur disponibilité peuvent influencer ce que tu paies pour ces appareils.",
    "figures": [
      {
        "value": "120,9 Md$",
        "label": "les exportations sud-coréennes en septembre (record)",
        "src": 1
      },
      {
        "value": "+83,5 %",
        "label": "leur hausse sur un an",
        "src": 1
      },
      {
        "value": "4,5 %",
        "label": "la croissance 2026 prévue par la Banque mondiale pour l'Asie de l'Est et le Pacifique",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "semi-conducteurs"
    ],
    "sources": [
      {
        "short": "Korea Times",
        "name": "The Korea Times, « Korea's Sept. exports hit record $120.9 bil. on robust chip sales » (1er oct. 2026)",
        "url": "https://www.koreatimes.co.kr/economy/20261001/koreas-sept-exports-hit-record-1209-bil-on-robust-chip-sales"
      },
      {
        "short": "The Standard",
        "name": "The Standard (Hong Kong), « South Korea's monthly exports top US$120 billion for the first time on record chip sales »",
        "url": "https://www.thestandard.com.hk/finance/article/344355/South-Koreas-monthly-exports-top-US120-billion-for-the-first-time-on-record-chip-sales"
      },
      {
        "short": "CNBC",
        "name": "CNBC, « World Bank warns of AI concentration risks as it lifts East Asia and Pacific growth outlook to 4.5% » (6 oct. 2026)",
        "url": "https://www.cnbc.com/2026/10/06/world-bank-east-asia-growth-inflation-ai-exports-.html"
      }
    ]
  },
  {
    "id": "2026-10-08-madagascar-russie-electricite",
    "date": "2026-10-08",
    "region": "Afrique",
    "theme": "mix",
    "title": "Madagascar : face aux coupures de courant, des générateurs russes achetés sans appel d'offres",
    "summary": "Pour lutter contre les délestages, le gouvernement malgache autorise la compagnie publique Jirama à acheter 18 groupes électrogènes à une société russe sans mise en concurrence, sur fond de rapprochement avec Moscou.",
    "geo": [
      {
        "name": "Antananarivo, Madagascar",
        "label": "Madagascar",
        "coords": [
          47.52,
          -18.88
        ]
      }
    ],
    "points": [
      "Un décret adopté le 6 octobre 2026 permet à la Jirama d'acheter directement 18 générateurs diesel à la société russe Malmekhservice, sans appel d'offres [1].",
      "Le ministère de l'Énergie n'a précisé ni le montant de la transaction ni la puissance des machines [1] ; selon une source proche du dossier, chaque groupe ferait 1 MW, soit 18 MW au total [2].",
      "Ce choix découle de la prolongation de l'état d'urgence énergétique décidée en Conseil des ministres le 29 septembre, qui permet d'alléger les procédures d'achat [2].",
      "Sur le réseau d'Antananarivo, les coupures tournantes durent désormais trois heures [2]."
    ],
    "why": [
      "Madagascar manque cruellement d'électricité et la Jirama peine à suivre : les délestages pèsent sur les ménages comme sur les entreprises [2]. L'état d'urgence permet d'acheter vite, mais pose la question de la transparence des dépenses publiques [2].",
      "L'opération s'inscrit dans un rapprochement diplomatique entre Madagascar et la Russie [1][2]. En parallèle, le pays cherche à lever jusqu'à 5 milliards de dollars avec le gestionnaire d'actifs Gemcorp pour financer énergie, infrastructures et mines [3]."
    ],
    "forMe": "Et moi, dans tout ça ? Madagascar est un partenaire historique de la France, qui y a de nombreuses entreprises et une forte diaspora. Le choix de fournisseurs russes illustre la concurrence d'influence qui se joue en Afrique, y compris dans l'océan Indien, près de La Réunion et Mayotte.",
    "figures": [
      {
        "value": "18",
        "label": "Générateurs diesel achetés à une société russe",
        "src": 1
      },
      {
        "value": "3 h",
        "label": "Durée des coupures tournantes à Antananarivo",
        "src": 2
      },
      {
        "value": "5 Md$",
        "label": "Financement recherché avec Gemcorp",
        "src": 3
      }
    ],
    "dossiers": [],
    "sources": [
      {
        "short": "Bloomberg",
        "name": "Madagascar Skips Tender for Power Equipment as Russia Ties Grow (8 octobre 2026)",
        "url": "https://www.bloomberg.com/news/articles/2026-10-08/madagascar-skips-tender-for-power-equipment-as-russia-ties-grow"
      },
      {
        "short": "Newsmada",
        "name": "Pénurie d'électricité : Malmekhservice, le fournisseur russe imposé à la Jirama (8 octobre 2026)",
        "url": "https://newsmada.com/2026/10/08/penurie-delectricite-malmekhservice-le-fournisseur-russe-impose-a-la-jirama/"
      },
      {
        "short": "Bloomberg",
        "name": "Gemcorp Joins Madagascar to Raise $5 Billion for Energy, Mining (6 octobre 2026)",
        "url": "https://www.bloomberg.com/news/articles/2026-10-06/gemcorp-joins-madagascar-to-raise-5-billion-for-energy-mining"
      }
    ]
  },
  {
    "id": "2026-10-07-gazole-reserves",
    "date": "2026-10-07",
    "region": "Europe",
    "theme": "eco",
    "geo": [
      {
        "name": "Paris",
        "coords": [
          2.35,
          48.86
        ]
      }
    ],
    "title": "La France ouvre ses réserves de gazole pour faire baisser les prix à la pompe",
    "summary": "Le Premier ministre Sébastien Lecornu annonce la mise sur le marché de 10 millions de barils de gazole stockés par l'État, sur trois mois.",
    "points": [
      "Le gazole coûte en moyenne 2,37 € le litre en France, un niveau record lié à la guerre au Moyen-Orient [4].",
      "L'État va puiser dans ses stocks stratégiques : 10 millions de barils, vendus à prix coûtant pendant trois mois [1].",
      "Objectif affiché : une baisse de 12 à 18 centimes par litre à la pompe [1]."
    ],
    "why": [
      "Ce gazole a été acheté avant la flambée des prix. En le revendant à son prix d'achat, l'État injecte du carburant moins cher sur le marché, ce qui fait mécaniquement baisser les prix [1].",
      "La France n'agit pas seule. Le 2 octobre, les pays du G7 se sont mis d'accord pour libérer ensemble 100 millions de barils de pétrole et de gazole sur quatre mois, en coordination avec l'Agence internationale de l'énergie [3]. Selon Goldman Sachs, cela ne compenserait qu'environ la moitié de la flambée du gazole [3]."
    ],
    "forMe": "Si tu roules au diesel, le plein d'un réservoir de 50 litres pourrait coûter 6 à 9 € de moins. Mais c'est une mesure temporaire : tant que le détroit d'Ormuz reste perturbé, les prix restent sous pression.",
    "figures": [
      {
        "value": "10 M",
        "label": "de barils de gazole libérés par la France",
        "src": 1
      },
      {
        "value": "2,37 €",
        "label": "le prix moyen du litre de gazole en France début octobre",
        "src": 4
      },
      {
        "value": "-12 à -18 c",
        "label": "la baisse attendue par litre",
        "src": 1
      },
      {
        "value": "100 M",
        "label": "de barils libérés par l'ensemble du G7",
        "src": 3
      }
    ],
    "visuals": [
      {
        "kind": "chart",
        "type": "bar",
        "title": "Les barils libérés, à l'échelle",
        "subtitle": "En millions de barils",
        "xLabel": "Qui",
        "unit": "Millions de barils",
        "decimals": 0,
        "data": [
          [
            "France",
            10
          ],
          [
            "Tout le G7",
            100
          ]
        ],
        "source": "Boursorama ; The National (octobre 2026)"
      }
    ],
    "culture": [
      "reserves-strategiques"
    ],
    "dossiers": [
      "routes-maritimes",
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Boursorama",
        "name": "Boursorama, « La France va libérer 10 millions de barils de gazole de ses réserves » (7 oct. 2026)",
        "url": "https://www.boursorama.com/actualite-economique/actualites/la-france-va-liberer-10-million-de-barils-de-gazole-de-ses-reserves-dit-lecornu-5d78402d6440a6dedbd1248647cdd411"
      },
      {
        "short": "franceinfo",
        "name": "franceinfo, allocution du Premier ministre (7 oct. 2026)",
        "url": "https://www.franceinfo.fr/politique/gouvernement-de-sebastien-lecornu/direct-lycees-carburants-budget-suivez-l-allocution-du-premier-ministre-sebastien-lecornu_8227246.html"
      },
      {
        "short": "The National",
        "name": "The National, « G7 members agree to release 100 million barrels » (2 oct. 2026)",
        "url": "https://www.thenationalnews.com/business/energy/2026/10/02/g7-members-agree-to-release-100-million-barrels-of-diesel-and-other-reserves/"
      },
      {
        "short": "AFP",
        "name": "AFP via La DH, « Gazole : nouveau record du prix moyen à la pompe dans l'UE » (1er oct. 2026)",
        "url": "https://www.dhnet.be/dernieres-depeches/2026/10/01/gazole-nouveau-record-du-prix-moyen-a-la-pompe-dans-lue-analyse-afp-de-donnees-officielles-DWX2HN25IRGE5BAFEKWZKVOPAI/"
      }
    ]
  },
  {
    "id": "2026-10-07-ormuz",
    "date": "2026-10-07",
    "region": "Moyen-Orient",
    "theme": "geo",
    "geo": [
      {
        "name": "Détroit d'Ormuz",
        "label": "Ormuz",
        "coords": [
          56.4,
          26.5
        ]
      }
    ],
    "routes": [
      {
        "to": [
          121.5,
          31.2
        ],
        "name": "vers la Chine"
      },
      {
        "to": [
          139.7,
          35.6
        ],
        "name": "vers le Japon"
      },
      {
        "to": [
          72.9,
          19
        ],
        "name": "vers l'Inde"
      },
      {
        "to": [
          4.4,
          51.9
        ],
        "name": "vers l'Europe"
      }
    ],
    "title": "Ormuz : le pétrole repasse, mais la menace iranienne pèse toujours",
    "summary": "Les exportations du Golfe repartent, mais l'Iran veut contrôler le détroit et faire payer les navires. Le baril de Brent reste au-dessus de 100 dollars.",
    "points": [
      "Depuis les frappes américaines et israéliennes contre l'Iran à partir du 28 février 2026, Téhéran a bloqué ou menacé le détroit d'Ormuz [2].",
      "Un cessez-le-feu (avril) puis un accord en juin devaient rouvrir le passage, mais l'Iran veut désormais encaisser des « frais de passage » [2].",
      "Début octobre, le Brent dépasse encore 100 dollars le baril, même si les exportations du Golfe reprennent [3]."
    ],
    "why": [
      "Avant le conflit, près de 20 millions de barils de pétrole passaient chaque jour par ce détroit, soit environ un cinquième de la consommation mondiale [1]. Au plus fort de la crise, le nombre de pétroliers desservant le Golfe s'est effondré de 95 % selon l'Organisation mondiale du commerce [2].",
      "Même quand les bateaux repassent, le risque coûte cher : les assurances explosent, les pétroliers manquent et les trajets s'allongent. C'est cette « prime de risque » qui maintient les prix hauts [3]."
    ],
    "forMe": "C'est la cause directe des prix records à la pompe, et une des raisons pour lesquelles l'inflation repart. Tant qu'Ormuz n'est pas sécurisé, ton budget carburant et chauffage reste exposé.",
    "figures": [
      {
        "value": "> 100 $",
        "label": "le prix du baril de Brent début octobre 2026",
        "src": 3
      },
      {
        "value": "≈ 20 M",
        "label": "de barils par jour passaient par Ormuz avant la guerre",
        "src": 1
      },
      {
        "value": "-95 %",
        "label": "de pétroliers vers le Golfe au plus fort de la crise",
        "src": 2
      }
    ],
    "visuals": [
      {
        "kind": "map",
        "title": "Le détroit d'Ormuz et les routes de contournement",
        "view": {
          "center": [
            52,
            25.5
          ],
          "span": 26
        },
        "highlight": [
          "Iran",
          "Oman",
          "United Arab Emirates",
          "Saudi Arabia",
          "Qatar",
          "Kuwait",
          "Iraq",
          "Bahrain"
        ],
        "intro": "Touche un lieu pour zoomer. Les pays en couleur bordent le golfe Persique.",
        "points": [
          {
            "name": "Détroit d'Ormuz",
            "coords": [
              56.4,
              26.5
            ],
            "zoom": 6,
            "text": "Une quarantaine de kilomètres de large au plus étroit, entre l'Iran et la péninsule omanaise de Musandam. Les navires y empruntent deux couloirs de circulation d'environ 3 km chacun."
          },
          {
            "name": "Fujaïrah",
            "coords": [
              56.33,
              25.12
            ],
            "zoom": 8,
            "text": "Port des Émirats situé après le détroit. Un oléoduc depuis Habshan permet d'y exporter une partie du pétrole émirien sans passer par Ormuz."
          },
          {
            "name": "Yanbu",
            "coords": [
              38.06,
              24.09
            ],
            "zoom": 14,
            "text": "Terminal saoudien sur la mer Rouge, au bout de l'oléoduc Est-Ouest qui traverse l'Arabie. C'est l'autre grande porte de sortie qui évite Ormuz… mais elle débouche près de Bab-el-Mandeb, une autre zone à risque."
          },
          {
            "name": "Ras Tanura",
            "coords": [
              50.16,
              26.64
            ],
            "zoom": 8,
            "text": "L'un des plus grands terminaux pétroliers du monde, sur la côte saoudienne du Golfe. Le pétrole chargé ici doit passer par Ormuz."
          }
        ],
        "source": "Congressional Research Service ; Agence américaine d'information sur l'énergie (EIA)"
      }
    ],
    "culture": [
      "cables-sous-marins"
    ],
    "dossiers": [
      "routes-maritimes",
      "sanctions"
    ],
    "sources": [
      {
        "short": "CRS",
        "name": "Congressional Research Service, « The Strait of Hormuz: Security Developments and Impacts on Oil, Gas, and Other Commodities »",
        "url": "https://www.congress.gov/crs-product/R45281"
      },
      {
        "short": "House of Commons Library",
        "name": "House of Commons Library, « Israel/US-Iran conflict 2026: Reopening the Strait of Hormuz »",
        "url": "https://commonslibrary.parliament.uk/research-briefings/cbp-10636/"
      },
      {
        "short": "Gulf News",
        "name": "Gulf News, « Oil prices split as Brent tops $102 » (5 oct. 2026)",
        "url": "https://gulfnews.com/world/americas/oil-prices-split-as-brent-tops-102-murban-hits-110-per-barrel-on-oct-5-2026-1.500698305"
      }
    ]
  },
  {
    "id": "2026-10-07-droits-de-douane",
    "date": "2026-10-07",
    "region": "Amériques",
    "theme": "eco",
    "title": "Droits de douane : le déficit commercial américain au plus haut depuis 2025",
    "summary": "Malgré les droits de douane de Donald Trump, les États-Unis n'ont jamais autant importé depuis mars 2025. Et Washington rembourse des milliards aux importateurs.",
    "geo": [
      {
        "name": "Washington",
        "coords": [
          -77.04,
          38.9
        ]
      },
      {
        "name": "Pékin",
        "coords": [
          116.4,
          39.9
        ]
      }
    ],
    "points": [
      "En août, le déficit commercial des États-Unis a atteint 105,6 milliards de dollars, son plus haut niveau depuis mars 2025, juste avant les grandes hausses de droits de douane [1].",
      "En cause, notamment : les importations de matériel pour l'intelligence artificielle, qui ont fait grimper les achats à l'étranger de 4,3 % en un mois [1].",
      "Le 6 octobre, l'administration a ouvert une nouvelle phase de remboursement des droits de douane jugés illégaux par la Cour suprême [2]."
    ],
    "why": [
      "Les droits de douane devaient réduire le déficit commercial. Le 20 février 2026, la Cour suprême a jugé, par 6 voix contre 3, que la loi utilisée par Donald Trump (IEEPA) ne lui permettait pas d'imposer ces taxes [2]. Environ 122 milliards de dollars de remboursements ont déjà été validés pour les importateurs [2].",
      "Les droits de douane n'ont pas disparu pour autant : d'autres lois permettent de taxer l'acier, l'automobile ou les médicaments. Le taux moyen appliqué aux importations américaines tourne autour de 11 %, ce qui coûterait environ 1 100 dollars par an à chaque ménage américain selon le Yale Budget Lab [3].",
      "Avec la Chine, la trêve tient : le 27 septembre, les deux pays se sont mis d'accord pour baisser les droits de douane sur 77 catégories de produits, comme les jouets, les fours à micro-ondes ou le linge de maison [2]."
    ],
    "forMe": "Les règles changent sans cesse : des taxes sont annulées, d'autres apparaissent. Cette incertitude pèse sur les entreprises françaises qui vendent aux États-Unis (vins, cosmétiques, luxe, aéronautique), et donc sur les emplois qui en dépendent.",
    "figures": [
      {
        "value": "105,6 Md$",
        "label": "le déficit commercial américain en août 2026",
        "src": 1
      },
      {
        "value": "≈ 122 Md$",
        "label": "de droits de douane remboursés aux importateurs",
        "src": 2
      },
      {
        "value": "≈ 11 %",
        "label": "le taux moyen des droits de douane américains",
        "src": 3
      },
      {
        "value": "6-3",
        "label": "le vote de la Cour suprême contre les droits de douane IEEPA",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "droits-de-douane",
      "dollar"
    ],
    "sources": [
      {
        "short": "CNBC",
        "name": "CNBC, « Trade deficit hits $105.6 billion, widest since just before Trump tariffs » (6 oct. 2026)",
        "url": "https://www.cnbc.com/2026/10/06/trade-deficit-hits-105point6-billion-widest-since-just-before-trump-tariffs-enacted-last-year.html"
      },
      {
        "short": "CalChamber",
        "name": "California Chamber of Commerce, « Trade Update – October 6, 2026 »",
        "url": "https://advocacy.calchamber.com/2026/10/06/trade-update-october-6-2026/"
      },
      {
        "short": "CFR",
        "name": "Council on Foreign Relations, « Before the Midterms: What Americans Think About Trade and Tariffs »",
        "url": "https://cfr.org/articles/before-the-midterms-what-americans-think-about-trade-and-tariffs"
      }
    ]
  },
  {
    "id": "2026-10-07-zone-euro-inflation",
    "date": "2026-10-07",
    "region": "Europe",
    "theme": "eco",
    "title": "Zone euro : l'inflation bondit à 3,8 %, tirée par l'énergie",
    "summary": "La hausse des prix s'accélère nettement en septembre dans les pays de l'euro. Le choc pétrolier venu d'Ormuz se diffuse à toute l'économie.",
    "geo": [
      {
        "name": "Francfort (BCE)",
        "coords": [
          8.68,
          50.11
        ]
      }
    ],
    "points": [
      "Selon la première estimation d'Eurostat publiée le 2 octobre, les prix ont augmenté de 3,8 % sur un an en septembre, contre 3,2 % en août [1].",
      "L'énergie s'envole : +18,8 % sur un an, après +14,3 % en août [1].",
      "Certains pays sont plus touchés : 5,1 % en Grèce, 4,9 % en Espagne, 4,2 % en Italie [2][3]."
    ],
    "why": [
      "L'objectif de la Banque centrale européenne est une inflation proche de 2 %. On en est presque au double. La BCE, installée à Francfort, pourrait être tentée de relever ses taux, comme la Fed américaine l'a fait en septembre [1].",
      "Le dilemme est difficile : monter les taux freine les prix, mais aussi une économie déjà fragile, surtout en Allemagne. Les services (+3,2 %) et l'alimentation (+1,4 %) accélèrent aussi, signe que la hausse de l'énergie commence à se transmettre au reste des prix [1]."
    ],
    "forMe": "Le carburant et le chauffage coûtent plus cher, et si la BCE remonte ses taux, les crédits immobiliers aussi. En revanche, les livrets d'épargne pourraient mieux rapporter.",
    "figures": [
      {
        "value": "3,8 %",
        "label": "l'inflation en zone euro en septembre 2026",
        "src": 1
      },
      {
        "value": "+18,8 %",
        "label": "la hausse des prix de l'énergie sur un an",
        "src": 1
      },
      {
        "value": "2 %",
        "label": "l'objectif de la BCE",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Eurostat via Asianet",
        "name": "Asianet Newsable, « Euro area inflation jumps to 3.8% in September, driven by energy » (estimation rapide d'Eurostat, 2 oct. 2026)",
        "url": "https://newsable.asianetnews.com/business/euro-area-inflation-jumps-to-3-8-in-september-driven-by-energy-articleshow-hzzngdy"
      },
      {
        "short": "To Vima",
        "name": "To Vima, « Inflation in Greece jumps to 5.1% in September »",
        "url": "https://www.tovima.com/finance/inflation-in-greece-jumps-to-5-1-in-september/"
      },
      {
        "short": "Trading Economics",
        "name": "Trading Economics, inflation des pays du G20",
        "url": "https://tradingeconomics.com/country-list/inflation-rate?continent=g20"
      }
    ]
  },
  {
    "id": "2026-10-07-allemagne",
    "date": "2026-10-07",
    "region": "Europe",
    "theme": "eco",
    "title": "Allemagne : le moteur de l'Europe cale sous le choc de l'énergie",
    "summary": "Première économie européenne, l'Allemagne frôle la récession. Son industrie, très gourmande en énergie, souffre de la flambée des prix.",
    "geo": [
      {
        "name": "Berlin",
        "coords": [
          13.4,
          52.52
        ]
      }
    ],
    "points": [
      "Le FMI ne prévoit plus que 0,7 % de croissance en Allemagne cette année [1].",
      "L'institut économique DIW a averti en juin d'une possible récession technique (deux trimestres de recul), à cause du choc énergétique lié à la guerre en Iran [2].",
      "En juillet, la production industrielle a nettement reculé, selon la Bundesbank, qui cite aussi le faible niveau de l'eau dans les fleuves [3]."
    ],
    "why": [
      "L'industrie allemande (chimie, acier, automobile) consomme énormément d'énergie. Quand le gaz et le pétrole flambent, ses coûts explosent et elle devient moins compétitive face à la Chine ou aux États-Unis [2].",
      "Le faible niveau du Rhin, autoroute fluviale de l'industrie allemande, oblige les péniches à charger moins, ce qui renchérit le transport du charbon, des produits chimiques ou de l'acier [3]."
    ],
    "forMe": "Quand l'Allemagne ralentit, toute l'Europe le sent : c'est le premier client et le premier fournisseur de la France. Moins de commandes allemandes, c'est moins d'activité pour les entreprises françaises.",
    "figures": [
      {
        "value": "0,7 %",
        "label": "la croissance prévue en Allemagne en 2026 (FMI)",
        "src": 1
      },
      {
        "value": "3,3 %",
        "label": "l'inflation en Allemagne en septembre",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Euronews",
        "name": "Euronews, prévisions du FMI pour l'Europe (8 juil. 2026)",
        "url": "https://www.euronews.com/business/2026/07/08/economy-imf-forecasts-modest-growth-for-italy-cuts-estimates-for-france-and-germany"
      },
      {
        "short": "MarketScreener",
        "name": "MarketScreener, « Germany risks recession as Iran energy shock hits growth, DIW economists say »",
        "url": "https://uk.marketscreener.com/news/germany-risks-recession-as-iran-energy-shock-hits-growth-diw-economists-say-ce7f5cdad089f321"
      },
      {
        "short": "Bundesbank",
        "name": "Bundesbank, « German economy: recovery slowing temporarily, energy prices driving inflation »",
        "url": "https://www.bundesbank.de/en/tasks/topics/german-economy-recovery-slowing-temporarily-energy-prices-driving-inflation-1008384"
      },
      {
        "short": "Trading Economics",
        "name": "Trading Economics, inflation des pays du G20",
        "url": "https://tradingeconomics.com/country-list/inflation-rate?continent=g20"
      }
    ]
  },
  {
    "id": "2026-10-07-suez",
    "date": "2026-10-07",
    "region": "Moyen-Orient",
    "theme": "geo",
    "title": "Le canal de Suez profite de la crise d'Ormuz",
    "summary": "Ormuz bloqué, le pétrole saoudien passe par la mer Rouge. Résultat : le trafic et les recettes du canal de Suez remontent en flèche.",
    "geo": [
      {
        "name": "Canal de Suez",
        "label": "Suez",
        "coords": [
          32.34,
          30.6
        ]
      }
    ],
    "points": [
      "En juillet, le canal a rapporté 505 millions de dollars à l'Égypte, soit 42 % de plus qu'un an plus tôt, un record depuis fin 2023 [1].",
      "1 340 navires l'ont traversé ce mois-là, 27 % de plus qu'en juillet 2025, dont 526 pétroliers [1].",
      "L'Autorité du canal vise 5,8 à 6 milliards de dollars de recettes en 2026, contre 4,1 milliards en 2025 [2]."
    ],
    "why": [
      "Avec la fermeture d'Ormuz, l'Arabie saoudite exporte davantage par son oléoduc Est-Ouest, qui débouche sur la mer Rouge. Une partie de ces pétroliers remonte ensuite vers l'Europe par Suez [2].",
      "C'est un retournement pour l'Égypte : depuis fin 2023, les attaques des Houthis en mer Rouge avaient fait fuir les navires et coûté des milliards au pays. Mais le trafic reste encore inférieur à son niveau d'avant la crise [3]."
    ],
    "forMe": "Ce qui est une catastrophe pour l'un est une aubaine pour l'autre : les crises redessinent les routes commerciales, et donc les gagnants et les perdants de l'économie mondiale.",
    "figures": [
      {
        "value": "505 M$",
        "label": "de recettes du canal en juillet 2026",
        "src": 1
      },
      {
        "value": "+42 %",
        "label": "sur un an",
        "src": 1
      },
      {
        "value": "≈ 6 Md$",
        "label": "de recettes visées pour 2026",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "gCaptain",
        "name": "gCaptain, « Suez Canal revival gathers pace as Hormuz crisis reroutes ships »",
        "url": "https://gcaptain.com/suez-canal-revival-gathers-pace-as-hormuz-crisis-reroutes-ships/"
      },
      {
        "short": "Al-Monitor",
        "name": "Al-Monitor, « Suez Canal traffic soars as Hormuz disruptions reroute energy trade » (juin 2026)",
        "url": "https://www.al-monitor.com/originals/2026/06/suez-canal-traffic-soars-hormuz-disruptions-reroute-energy-trade"
      },
      {
        "short": "The New Arab",
        "name": "The New Arab, « Hormuz disruption proves Egypt's 'silver lining' as Suez Canal traffic rises »",
        "url": "https://www.newarab.com/news/egypt-sees-silver-lining-hormuz-closure-suez-traffic-rises"
      }
    ]
  },
  {
    "id": "2026-10-07-opep",
    "date": "2026-10-07",
    "region": "Moyen-Orient",
    "theme": "geo",
    "title": "OPEP+ : les producteurs de pétrole marquent une pause",
    "summary": "Après quatre mois de hausse, les grands producteurs ont gelé leur production pour octobre. Mais avec Ormuz bloqué, leur pouvoir sur les prix s'est réduit.",
    "geo": [
      {
        "name": "Riyad",
        "label": "Arabie saoudite",
        "coords": [
          46.68,
          24.71
        ]
      }
    ],
    "points": [
      "Le 6 septembre, sept pays de l'OPEP+ (Arabie saoudite, Russie, Irak, Koweït, Kazakhstan, Algérie, Oman) ont décidé de maintenir leur production d'octobre au niveau de septembre [1][2].",
      "Ils venaient de terminer l'annulation d'une baisse de production de 1,65 million de barils par jour décidée en 2023 [3].",
      "Les Émirats arabes unis, qui participaient à ces décisions, ont quitté l'OPEP en mai [3]."
    ],
    "why": [
      "Normalement, l'OPEP+ fait varier sa production pour influencer les prix. Mais tant que le détroit d'Ormuz est perturbé, une partie de son pétrole ne peut tout simplement pas sortir du Golfe : produire plus ne change pas grand-chose [3].",
      "Le départ des Émirats affaiblit le cartel. Les sept pays restants se réunissent chaque mois ; la réunion du 4 octobre devait fixer la production de novembre [2]."
    ],
    "forMe": "Les décisions prises à Riyad et à Vienne se retrouvent sur ton ticket de caisse à la station-service, quelques semaines plus tard.",
    "figures": [
      {
        "value": "≈ 31 M",
        "label": "de barils par jour : la production d'octobre des sept pays",
        "src": 3
      },
      {
        "value": "1,65 M",
        "label": "de barils par jour de baisse de 2023 entièrement annulée",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "OPEP",
        "name": "OPEP, communiqué du 6 septembre 2026",
        "url": "https://www.opec.org/pr-detail/613-6-september-2026.html"
      },
      {
        "short": "Gulf News",
        "name": "Gulf News, « OPEC+ keeps October oil output quota unchanged from September levels »",
        "url": "https://gulfnews.com/business/energy/opec-keeps-october-oil-output-quota-unchanged-from-september-levels-1.500665366"
      },
      {
        "short": "Nairametrics",
        "name": "Nairametrics, « OPEC+ pauses oil output hikes after four straight monthly increases » (6 sept. 2026)",
        "url": "https://nairametrics.com/2026/09/06/opec-pauses-oil-output-hikes-after-four-straight-monthly-increases/"
      }
    ]
  },
  {
    "id": "2026-10-07-turquie",
    "date": "2026-10-07",
    "region": "Moyen-Orient",
    "theme": "eco",
    "title": "Turquie : l'inflation reste autour de 30 %",
    "summary": "Les prix augmentent encore de près d'un tiers en un an. La banque centrale garde son taux directeur à 37 %.",
    "geo": [
      {
        "name": "Ankara",
        "label": "Turquie",
        "coords": [
          32.85,
          39.93
        ]
      }
    ],
    "points": [
      "L'inflation turque est passée de 31,5 % en août à 29,7 % en septembre [1][2].",
      "Le 10 septembre, la banque centrale a laissé son taux directeur à 37 %, pour la cinquième fois de suite [3].",
      "Elle prévoit encore 28 % d'inflation à la fin de l'année [3]."
    ],
    "why": [
      "Un taux à 37 % paraît énorme, mais il faut le comparer à l'inflation : si les prix montent de 30 %, prêter à 37 % ne rapporte « que » 7 % en réalité. C'est ce qu'on appelle le taux d'intérêt réel.",
      "La Turquie paie encore les années où elle baissait ses taux malgré l'inflation. Sa monnaie, la livre, a perdu énormément de valeur, ce qui renchérit tout ce qu'elle importe, à commencer par l'énergie."
    ],
    "forMe": "Pour un touriste européen, la Turquie paraît bon marché. Pour les Turcs, c'est l'inverse : leurs salaires peinent à suivre les prix d'une année sur l'autre.",
    "figures": [
      {
        "value": "29,7 %",
        "label": "l'inflation en Turquie en septembre 2026",
        "src": 2
      },
      {
        "value": "37 %",
        "label": "le taux directeur de la banque centrale",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Trading Economics",
        "name": "Trading Economics, inflation en Turquie",
        "url": "https://tradingeconomics.com/turkey/inflation-cpi"
      },
      {
        "short": "Trading Economics (G20)",
        "name": "Trading Economics, inflation des pays du G20",
        "url": "https://tradingeconomics.com/country-list/inflation-rate?continent=g20"
      },
      {
        "short": "bne IntelliNews",
        "name": "bne IntelliNews, « Turkish central bank sticks to 37% policy rate for fifth straight time »",
        "url": "https://new.intellinews.com/articles/turkish-central-bank-sticks-to-37-policy-rate-for-fifth-straight-time-467058"
      }
    ]
  },
  {
    "id": "2026-10-07-philippines",
    "date": "2026-10-07",
    "region": "Asie",
    "theme": "eco",
    "title": "Philippines : l'inflation grimpe à 7,2 %, au plus haut depuis trois ans",
    "summary": "Le riz et le carburant font flamber les prix dans l'archipel, très dépendant des importations d'énergie.",
    "geo": [
      {
        "name": "Manille",
        "label": "Philippines",
        "coords": [
          120.98,
          14.6
        ]
      }
    ],
    "points": [
      "L'inflation a atteint 7,2 % en septembre aux Philippines, son niveau le plus élevé depuis trois ans [1][2].",
      "En août, elle était de 6,1 %, avec un prix du riz en hausse de 19,4 % sur un an [3].",
      "Les transports (+13,5 % en août) souffrent de la hausse des carburants [3]."
    ],
    "why": [
      "Les Philippines importent presque tout leur pétrole, en grande partie du Golfe. Quand Ormuz est bloqué, le pays est en première ligne.",
      "Le riz est l'aliment de base de 115 millions de Philippins. Quand son prix augmente de près de 20 %, ce sont les ménages les plus modestes qui trinquent le plus, car l'alimentation pèse lourd dans leur budget."
    ],
    "forMe": "C'est l'autre visage de la crise d'Ormuz : en Europe on parle du prix du plein, en Asie du Sud-Est c'est le prix du riz qui inquiète.",
    "figures": [
      {
        "value": "7,2 %",
        "label": "l'inflation aux Philippines en septembre 2026",
        "src": 1
      },
      {
        "value": "+19,4 %",
        "label": "le prix du riz sur un an en août",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Philstar",
        "name": "Philstar, « Philippine inflation jumps to 7.2% in September 2026 » (6 oct. 2026)",
        "url": "https://www.philstar.com/business/2026/10/06/2561305/philippine-inflation-jumps-72-september-2026"
      },
      {
        "short": "Rappler",
        "name": "Rappler, « Inflation soars to 7.2% as food, fuel prices climb in September 2026 »",
        "url": "https://www.rappler.com/business/inflation-rate-philippines-september-2026/"
      },
      {
        "short": "Daily Tribune",
        "name": "Daily Tribune, « Inflation eases to 6.1% as rice prices surge » (4 sept. 2026)",
        "url": "https://tribune.net.ph/2026/09/04/inflation-eases-to-61-as-rice-prices-surge"
      }
    ]
  },
  {
    "id": "2026-10-07-canada",
    "date": "2026-10-07",
    "region": "Amériques",
    "theme": "eco",
    "title": "Washington interdit près d'un milliard de dollars de produits canadiens",
    "summary": "Alcools, produits laitiers, motos : les États-Unis bloquent certaines importations canadiennes en représailles. Une escalade entre voisins et alliés.",
    "geo": [
      {
        "name": "Ottawa",
        "label": "Canada",
        "coords": [
          -75.7,
          45.42
        ]
      }
    ],
    "points": [
      "Depuis le 29 septembre, les États-Unis interdisent l'importation de près d'un milliard de dollars de produits canadiens [1].",
      "87 % de cette somme concerne des boissons alcoolisées : Washington répond ainsi aux provinces canadiennes qui ont retiré l'alcool américain de leurs rayons [1].",
      "Sont aussi visés certains produits laitiers et les motos Can-Am de Bombardier [1]."
    ],
    "why": [
      "Le montant est faible face aux 880 milliards de dollars d'échanges annuels entre les deux pays. Mais le symbole est fort : le Canada est le premier partenaire commercial des États-Unis et un allié historique [1].",
      "C'est la logique de la guerre commerciale : une taxe entraîne une riposte, qui entraîne une contre-riposte. Les consommateurs des deux côtés finissent par payer plus cher ou par avoir moins de choix."
    ],
    "forMe": "L'Europe connaît la même logique avec les États-Unis. Comprendre ce bras de fer, c'est comprendre pourquoi le prix de certains produits importés peut changer du jour au lendemain.",
    "figures": [
      {
        "value": "≈ 1 Md$",
        "label": "de produits canadiens interdits",
        "src": 1
      },
      {
        "value": "87 %",
        "label": "de boissons alcoolisées",
        "src": 1
      },
      {
        "value": "880 Md$",
        "label": "d'échanges annuels entre les deux pays",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "AP via ABC News",
        "name": "Associated Press via ABC News, « US ban on $1 billion worth of Canadian imports goes into effect » (29 sept. 2026)",
        "url": "https://abcnews.com/Business/wireStory/motorcycles-booze-us-ban-1-billion-worth-canadian-136843738"
      }
    ]
  },
  {
    "id": "2026-10-07-chine",
    "date": "2026-10-07",
    "region": "Asie",
    "theme": "eco",
    "title": "Chine : les exportations tiennent, l'immobilier s'enfonce",
    "summary": "La deuxième économie mondiale croît plus vite que prévu grâce à ses exportations, mais la crise immobilière et la faible consommation pèsent toujours.",
    "geo": [
      {
        "name": "Shanghai",
        "coords": [
          121.47,
          31.23
        ]
      }
    ],
    "points": [
      "Le FMI a relevé en juillet sa prévision de croissance chinoise pour 2026, de 4,4 % à 4,6 % [1].",
      "Les indicateurs de l'immobilier (mises en chantier, ventes, investissements) sont 50 à 80 % sous leurs sommets de 2020-2021, selon Goldman Sachs [2].",
      "Les prix à la consommation n'augmentent que de 0,8 % sur un an, signe d'une demande intérieure faible [3]."
    ],
    "why": [
      "L'immobilier a longtemps été le moteur de la Chine et le principal placement des ménages. Quand les prix des logements baissent, les familles se sentent plus pauvres et consomment moins [2].",
      "Pour compenser, la Chine mise sur ses exportations, notamment de produits high-tech (voitures électriques, panneaux solaires, batteries). Cela crée des tensions avec ses partenaires, qui accusent Pékin d'inonder leurs marchés [4]."
    ],
    "forMe": "Les produits chinois bon marché aident à contenir l'inflation en Europe, mais ils mettent aussi en difficulté certaines usines européennes, notamment dans l'automobile.",
    "figures": [
      {
        "value": "4,6 %",
        "label": "la croissance prévue en Chine en 2026 (FMI)",
        "src": 1
      },
      {
        "value": "-50 à -80 %",
        "label": "l'immobilier par rapport aux sommets de 2020-2021",
        "src": 2
      },
      {
        "value": "0,8 %",
        "label": "l'inflation en Chine",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "FMI",
        "name": "FMI, conférence de presse de la mise à jour de juillet 2026",
        "url": "https://www.imf.org/en/news/articles/2026/07/08/tr070826-weo-press-briefing-transcript-july-8-2026"
      },
      {
        "short": "Goldman Sachs",
        "name": "Goldman Sachs, « China's economy is forecast to grow faster than expected in 2026 »",
        "url": "https://www.goldmansachs.com/insights/articles/chinas-economy-is-forecast-to-grow-faster-than-expected-in-2026"
      },
      {
        "short": "Trading Economics",
        "name": "Trading Economics, inflation des pays du G20",
        "url": "https://tradingeconomics.com/country-list/inflation-rate?continent=g20"
      },
      {
        "short": "OCDE",
        "name": "OCDE, Perspectives économiques, juin 2026 : Chine",
        "url": "https://www.oecd.org/en/publications/2026/06/oecd-economic-outlook-volume-2026-issue-1_8be0dba6/full-report/china_6526c66b.html"
      }
    ]
  },
  {
    "id": "2026-10-07-niger-uranium",
    "date": "2026-10-07",
    "theme": "geo",
    "region": "Afrique",
    "title": "Niger : la junte garde l'uranium que la France exploitait",
    "summary": "Le Niger a confié à une société d'État la grande mine d'uranium que le groupe français Orano exploitait depuis des décennies.",
    "geo": [
      {
        "name": "Arlit (Niger)",
        "label": "Niger",
        "coords": [
          7.39,
          18.74
        ]
      }
    ],
    "points": [
      "En juin 2025, la junte au pouvoir à Niamey a nationalisé la mine de la Somaïr, dont Orano détenait 63,4 % [2].",
      "En août 2026, le permis minier a été attribué à Tsumco, une société d'État créée après la nationalisation [1].",
      "Un tribunal d'arbitrage international a demandé au Niger de ne pas vendre cet uranium, mais Niamey affirme son « droit légitime » à le mettre sur le marché [3]."
    ],
    "why": [
      "L'uranium sert de combustible aux centrales nucléaires. Le Niger en a longtemps été l'un des grands fournisseurs pour la France et l'Europe. Depuis le coup d'État de 2023, la junte s'est éloignée de Paris et rapprochée de la Russie [3].",
      "C'est un exemple de « nationalisme des ressources » : de plus en plus de pays pauvres mais riches en minerais veulent garder davantage de la valeur de leur sous-sol, au lieu de la laisser aux entreprises étrangères."
    ],
    "forMe": "Près de 70 % de l'électricité française vient du nucléaire. La France diversifie ses achats d'uranium (Kazakhstan, Canada, Australie), mais la perte du Niger montre que l'énergie dépend aussi de la géopolitique.",
    "figures": [
      {
        "value": "63,4 %",
        "label": "la part d'Orano dans la mine avant la nationalisation",
        "src": 2
      },
      {
        "value": "2025",
        "label": "nationalisation de la Somaïr",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "sanctions"
    ],
    "sources": [
      {
        "short": "Bloomberg",
        "name": "Bloomberg, « Niger awards former Orano-operated uranium mine to state company » (22 août 2026)",
        "url": "https://www.bloomberg.com/news/articles/2026-08-22/niger-awards-former-orano-operated-uranium-mine-to-state-company"
      },
      {
        "short": "Mining.com",
        "name": "Mining.com, « Niger ready to return Orano-produced uranium after mine takeover » (fév. 2026)",
        "url": "https://www.mining.com/web/niger-ready-to-return-orano-produced-uranium-after-mine-takeover/"
      },
      {
        "short": "bne IntelliNews",
        "name": "bne IntelliNews, « Niger puts nationalised Somair uranium on global market amid standoff with France's Orano »",
        "url": "https://www.intellinews.com/niger-puts-nationalised-somair-uranium-on-global-market-amid-standoff-with-france-s-orano-414385/"
      }
    ]
  },
  {
    "id": "2026-10-07-rdc-cobalt",
    "date": "2026-10-07",
    "theme": "geo",
    "region": "Afrique",
    "title": "RDC : le pays du cobalt ferme le robinet pour faire monter les prix",
    "summary": "La République démocratique du Congo, premier producteur mondial de cobalt, limite ses exportations. Le métal des batteries a flambé.",
    "geo": [
      {
        "name": "Kolwezi (RDC)",
        "label": "RD Congo",
        "coords": [
          25.47,
          -10.71
        ]
      }
    ],
    "points": [
      "Après avoir suspendu ses exportations en 2025, la RDC les plafonne à 87 000 tonnes par an en 2026 et 2027, soit 7 250 tonnes par mois [1].",
      "Fin juin, l'autorité congolaise a même supprimé les quotas du deuxième trimestre non utilisés, retirant 15 000 à 20 000 tonnes du marché [3].",
      "Le cobalt a commencé 2026 au-dessus de 56 000 dollars la tonne, un niveau plus vu depuis 2022 [2]."
    ],
    "why": [
      "Le cobalt est indispensable aux batteries des téléphones et de nombreuses voitures électriques. La RDC en produit plus de la moitié du monde. En limitant l'offre, Kinshasa a réussi à faire remonter des prix qui s'étaient effondrés [1].",
      "C'est le paradoxe de la RDC : un sous-sol parmi les plus riches de la planète (cobalt, cuivre, coltan), mais une population parmi les plus pauvres, et un est du pays déchiré par la guerre autour des mines."
    ],
    "forMe": "Ton smartphone contient probablement du cobalt congolais. Quand son prix monte, celui des batteries suit, et la course aux voitures électriques devient une course aux minerais.",
    "figures": [
      {
        "value": "87 000 t",
        "label": "de cobalt exportables par an en 2026-2027",
        "src": 1
      },
      {
        "value": "≈ 56 400 $",
        "label": "la tonne de cobalt début 2026",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "semi-conducteurs"
    ],
    "sources": [
      {
        "short": "Benchmark",
        "name": "Benchmark Mineral Intelligence, « DRC to lift cobalt export ban and impose quotas through 2027 »",
        "url": "https://source.benchmarkminerals.com/article/drc-to-lift-cobalt-export-ban-and-impose-quotas-through-2027"
      },
      {
        "short": "SunSirs",
        "name": "SunSirs, « Cobalt prices surged in 2025, and here's the outlook for 2026 »",
        "url": "https://www.sunsirs.com/m/page/commodity-news-detail/commodity-news-detail-29434.html"
      },
      {
        "short": "Fastmarkets",
        "name": "Fastmarkets, « DRC may reduce cobalt quota if market needs rebalancing, ARECOMS says »",
        "url": "https://www.fastmarkets.com/insights/drc-may-reduce-cobalt-quota-if-market-needs-rebalancing-arecoms-says-exclusive/"
      }
    ]
  },
  {
    "id": "2026-10-07-zambie-cuivre",
    "date": "2026-10-07",
    "theme": "eco",
    "region": "Afrique",
    "title": "Zambie : le cuivre au plus haut, le pays rêve d'un million de tonnes",
    "summary": "Le cuivre bat des records de prix, porté par l'électrification du monde. La Zambie veut en profiter pour relancer une économie fragile.",
    "geo": [
      {
        "name": "Copperbelt (Zambie)",
        "label": "Zambie",
        "coords": [
          28.2,
          -12.8
        ]
      }
    ],
    "points": [
      "La Zambie a produit un record de 890 346 tonnes de cuivre en 2025, en hausse de 8 % [1].",
      "Au premier semestre 2026, la production n'a progressé que de 0,45 %, à 447 182 tonnes : l'objectif d'un million de tonnes cette année sera difficile à atteindre [2].",
      "Le cuivre a atteint un prix record à Londres à la mi-septembre [2]."
    ],
    "why": [
      "Le cuivre est le métal de l'électricité : câbles, réseaux, moteurs, éoliennes, voitures électriques. Plus le monde s'électrifie, plus il en faut. La Zambie vise 3 millions de tonnes d'ici 2031 [1].",
      "Le pays a fait défaut sur sa dette en 2020 et dépend énormément du cuivre, qui représente l'essentiel de ses exportations. Ses mines souffrent aussi des coupures d'électricité liées aux sécheresses, car son courant vient surtout des barrages."
    ],
    "forMe": "Les prix du cuivre se retrouvent dans le coût des installations électriques, des voitures et des bornes de recharge. C'est l'un des métaux les plus surveillés par les industriels.",
    "figures": [
      {
        "value": "890 346 t",
        "label": "de cuivre produites en 2025, un record",
        "src": 1
      },
      {
        "value": "3 Mt",
        "label": "l'objectif de production en 2031",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Bloomberg",
        "name": "Bloomberg, « Zambia restates copper ambition after posting record output » (27 janv. 2026)",
        "url": "https://www.bloomberg.com/news/articles/2026-01-27/zambia-restates-copper-ambition-after-posting-record-output"
      },
      {
        "short": "Zambia Monitor",
        "name": "Zambia Monitor, « Copper production edges up in first half of 2026 »",
        "url": "https://www.zambiamonitor.com/copper-production-edges-up-in-first-half-of-2026-zambia-ministry-official-says/"
      }
    ]
  },
  {
    "id": "2026-10-07-guinee-simandou",
    "date": "2026-10-07",
    "theme": "eco",
    "region": "Afrique",
    "title": "Guinée : Simandou, la montagne de fer qui fait trembler l'Australie",
    "summary": "Le plus grand gisement de fer inexploité du monde exporte enfin vers la Chine. Un tournant pour la Guinée et pour le marché de l'acier.",
    "geo": [
      {
        "name": "Simandou (Guinée)",
        "label": "Guinée",
        "coords": [
          -8.9,
          8.6
        ]
      }
    ],
    "points": [
      "La première cargaison de minerai de Simandou est partie début décembre 2025 [3].",
      "En mai 2026, les exportations ont atteint environ 2,2 millions de tonnes sur le mois, un record [2].",
      "Wood Mackenzie prévoit environ 16 millions de tonnes exportées en 2026, pour une capacité finale de 120 millions de tonnes par an [1]."
    ],
    "why": [
      "Le projet, porté notamment par Rio Tinto et des groupes chinois, a nécessité plus de 600 km de voie ferrée et un nouveau port. Son minerai très riche intéresse la Chine, qui veut moins dépendre du fer australien [1].",
      "Pour la Guinée, l'un des pays les plus pauvres du monde, c'est une chance historique, à condition que les revenus profitent vraiment à la population."
    ],
    "forMe": "Le fer sert à faire l'acier de nos voitures, immeubles et ponts. Une nouvelle source géante peut faire baisser son prix mondial et changer les rapports de force entre la Chine et l'Australie.",
    "figures": [
      {
        "value": "120 Mt",
        "label": "de capacité annuelle visée",
        "src": 1
      },
      {
        "value": "≈ 16 Mt",
        "label": "d'exportations prévues en 2026",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Wood Mackenzie",
        "name": "Wood Mackenzie, « Simandou iron ore 2026 »",
        "url": "https://www.woodmac.com/press-releases/simandou-iron-ore-2026/"
      },
      {
        "short": "Miningmx",
        "name": "Miningmx, « Simandou iron ore exports surge in ramp-up milestone »",
        "url": "https://www.miningmx.com/news/ferrous-metals/65528-simandou-iron-ore-exports-surge-in-ramp-up-milestone/"
      },
      {
        "short": "S&P Global",
        "name": "S&P Global, première cargaison de Simandou arrivée en Chine (janv. 2026)",
        "url": "https://www.spglobal.com/energy/en/news-research/latest-news/metals/011926-simandous-first-shipment-with-200000-mt-high-grade-iron-ore-arrives-in-china"
      }
    ]
  },
  {
    "id": "2026-10-07-mali-or",
    "date": "2026-10-07",
    "theme": "eco",
    "region": "Afrique",
    "title": "Mali : la grande mine d'or repart après deux ans de bras de fer",
    "summary": "Le géant canadien Barrick et la junte malienne ont fait la paix. La mine de Loulo-Gounkoto tourne de nouveau, et un accord vient d'éviter une grève.",
    "geo": [
      {
        "name": "Loulo (Mali)",
        "label": "Mali",
        "coords": [
          -11.48,
          13
        ]
      }
    ],
    "points": [
      "Le 27 septembre, Barrick a signé un accord avec les syndicats de la mine, écartant une menace de grève [1].",
      "En février 2026, le Mali avait renouvelé le permis de la mine pour dix ans, après un an et demi de conflit [3].",
      "Barrick prévoit d'y produire 260 000 à 290 000 onces d'or en 2026 [2]."
    ],
    "why": [
      "Le Mali a adopté en 2023 un nouveau code minier pour récupérer une plus grande part des richesses. Barrick a refusé, l'État a saisi de l'or et la mine a été fermée en janvier 2025, avant un accord en novembre 2025 [2].",
      "L'or représente environ 80 % des exportations du Mali [2]. Avec un prix de l'or très élevé, chaque mois d'arrêt coûtait très cher à l'un des pays les plus pauvres du monde."
    ],
    "forMe": "L'or est une valeur refuge : quand le monde est instable, son prix monte. Il fait vivre des pays entiers comme le Mali, mais attise aussi les convoitises et les conflits.",
    "figures": [
      {
        "value": "≈ 80 %",
        "label": "des exportations du Mali viennent de l'or",
        "src": 2
      },
      {
        "value": "10 ans",
        "label": "durée du permis renouvelé en 2026",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Bloomberg",
        "name": "Bloomberg, « Barrick Mining reaches deal with Mali unions, averting strikes » (27 sept. 2026)",
        "url": "https://www.bloomberg.com/news/articles/2026-09-27/barrick-mining-reaches-deal-with-mali-unions-averting-strikes"
      },
      {
        "short": "Ecofin",
        "name": "Agence Ecofin, « Barrick confirms gold production restart at Mali's Loulo-Gounkoto mine in 2026 »",
        "url": "https://www.ecofinagency.com/news-industry/0602-52638-barrick-confirms-gold-production-restart-at-mali-s-loulo-gounkoto-mine-in-2026"
      },
      {
        "short": "Semafor",
        "name": "Semafor, « Mali agrees gold mining deal extension after standoff with Barrick » (16 fév. 2026)",
        "url": "https://www.semafor.com/article/02/16/2026/mali-agrees-gold-mining-deal-extension-after-standoff-with-barrick"
      }
    ]
  },
  {
    "id": "2026-10-07-senegal-dette",
    "date": "2026-10-07",
    "theme": "eco",
    "region": "Afrique",
    "title": "Sénégal : la dette cachée qui fait trembler le pays",
    "summary": "Après la découverte d'une dette dissimulée par l'ancien gouvernement, le Sénégal négocie avec le FMI et ses créanciers pour éviter l'asphyxie.",
    "geo": [
      {
        "name": "Dakar",
        "label": "Sénégal",
        "coords": [
          -17.45,
          14.69
        ]
      }
    ],
    "points": [
      "Un audit a révélé que la dette atteignait 99,7 % du PIB fin 2023, et non 74,4 % comme annoncé [2].",
      "Le 1er septembre, le Sénégal et le FMI ont conclu un accord préliminaire pour un prêt d'environ 2,2 milliards de dollars sur trois ans [1].",
      "Le pays va restructurer sa dette extérieure. L'agence S&P a abaissé sa note à « CC », proche du défaut de paiement [4]."
    ],
    "why": [
      "Quand un État découvre qu'il doit beaucoup plus que prévu, les investisseurs prennent peur et ne prêtent plus qu'à des taux très élevés. Le pays doit alors couper des dépenses ou négocier des délais avec ses créanciers [1].",
      "Le gouvernement veut allonger la durée de remboursement plutôt qu'effacer une partie de la dette. Mais la population ressent déjà la crise : des manifestations contre la vie chère ont eu lieu début septembre [3]."
    ],
    "forMe": "La France a aussi une dette élevée (plus de 110 % du PIB). La différence : elle emprunte dans sa propre monnaie, l'euro, et inspire plus confiance. L'histoire du Sénégal montre pourquoi cette confiance vaut de l'or.",
    "figures": [
      {
        "value": "99,7 %",
        "label": "la dette réelle du Sénégal, en % du PIB, fin 2023",
        "src": 2
      },
      {
        "value": "2,2 Md$",
        "label": "le prêt négocié avec le FMI",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "dollar"
    ],
    "sources": [
      {
        "short": "Bloomberg",
        "name": "Bloomberg, « Senegal to rework debt as it reaches new IMF deal » (1er sept. 2026)",
        "url": "https://www.bloomberg.com/news/articles/2026-09-01/senegal-imf-reach-staff-agreement-on-2-2-billion-loan-program"
      },
      {
        "short": "CNBC Africa",
        "name": "CNBC Africa, « Senegal's hidden debt crisis and attempts to resolve it »",
        "url": "https://www.cnbcafrica.com/2026/senegals-hidden-debt-crisis-and-attempts-to-resolve-it-3"
      },
      {
        "short": "Semafor",
        "name": "Semafor, « Senegal seeks more time to pay off debt » (9 sept. 2026)",
        "url": "https://www.semafor.com/article/09/09/2026/senegal-seeks-more-time-to-pay-off-debt"
      },
      {
        "short": "Pan African Visions",
        "name": "Pan African Visions, « Senegal's $2.2 billion IMF lifeline comes with a $13 billion debt shadow »",
        "url": "https://panafricanvisions.com/2026/09/senegals-2-2-billion-imf-lifeline-comes-with-a-13-billion-debt-shadow/"
      }
    ]
  },
  {
    "id": "2026-10-07-nigeria-dangote",
    "date": "2026-10-07",
    "theme": "eco",
    "region": "Afrique",
    "title": "Nigeria : la raffinerie géante qui inverse le commerce du carburant",
    "summary": "Grand producteur de pétrole, le Nigeria importait pourtant son essence. Grâce à la raffinerie Dangote, il en exporte désormais, jusqu'en Europe.",
    "geo": [
      {
        "name": "Lagos",
        "label": "Nigeria",
        "coords": [
          3.4,
          6.45
        ]
      }
    ],
    "points": [
      "En mars 2026, le Nigeria est devenu pour la première fois exportateur net d'essence, grâce à la raffinerie Dangote [2].",
      "Ses exportations de produits pétroliers vers l'Europe ont bondi de 767 % depuis 2023, à 130 000 barils par jour au deuxième trimestre 2026, selon l'agence américaine de l'énergie [1].",
      "La raffinerie, près de Lagos, peut traiter environ 650 000 barils de pétrole brut par jour, l'une des plus grandes du monde [1]."
    ],
    "why": [
      "Pendant des décennies, le Nigeria exportait son pétrole brut puis rachetait l'essence raffinée à l'étranger, plus chère. Raffiner sur place permet de garder cette valeur et d'économiser des devises [2].",
      "Avec la crise d'Ormuz, l'Europe cherche d'autres fournisseurs de carburant : le timing est idéal. Mais la raffinerie peine parfois à obtenir assez de pétrole brut nigérian et de dollars [3]."
    ],
    "forMe": "Une partie du gazole et de l'essence vendus en Europe pourrait bientôt venir d'Afrique de l'Ouest. C'est une nouvelle route de l'énergie qui se dessine.",
    "figures": [
      {
        "value": "+767 %",
        "label": "d'exportations de carburants vers l'Europe depuis 2023",
        "src": 1
      },
      {
        "value": "≈ 650 000",
        "label": "barils de brut raffinés par jour (capacité)",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Nairametrics",
        "name": "Nairametrics, « Dangote refinery drives 767% surge in Nigeria's petroleum exports to Europe » (25 août 2026)",
        "url": "https://nairametrics.com/2026/08/25/dangote-refinery-drives-767-surge-in-nigerias-petroleum-exports-to-europe/"
      },
      {
        "short": "News Ghana",
        "name": "News Ghana, « Dangote refinery turns Nigeria into net petrol exporter for first time »",
        "url": "https://www.newsghana.com.gh/dangote-refinery-turns-nigeria-into-net-petrol-exporter-for-first-time/"
      },
      {
        "short": "Ground News",
        "name": "Ground News, « Dangote refinery ramps up fuel exports as crude shortages, forex squeeze bite »",
        "url": "https://ground.news/article/dangote-refinery-ramps-up-fuel-exports-as-crude-shortages-forex-squeeze-bite"
      }
    ]
  },
  {
    "id": "2026-10-07-kazakhstan-uranium",
    "date": "2026-10-07",
    "theme": "eco",
    "region": "Asie",
    "title": "Kazakhstan : le roi de l'uranium dose sa production",
    "summary": "Premier producteur mondial d'uranium, le Kazakhstan augmente sa production, mais refuse d'« inonder le marché d'uranium bon marché ».",
    "geo": [
      {
        "name": "Kazakhstan",
        "coords": [
          68.3,
          44
        ]
      }
    ],
    "points": [
      "Kazatomprom, la compagnie nationale, a produit 13 291 tonnes d'uranium au premier semestre 2026, 9 % de plus qu'un an plus tôt [1].",
      "Elle vise 27 500 à 29 000 tonnes sur l'année [1].",
      "Mais elle a abaissé son plafond de production de 32 777 à 29 697 tonnes, pour ne pas faire chuter les prix [2]."
    ],
    "why": [
      "Avec la relance du nucléaire dans le monde (pour le climat et l'indépendance énergétique), la demande d'uranium augmente. Le Kazakhstan, coincé entre la Russie et la Chine, est un fournisseur clé, y compris pour l'Europe.",
      "Comme l'OPEP avec le pétrole, il préfère vendre un peu moins mais plus cher. Son patron l'a dit clairement : pas question d'« inonder le marché d'uranium bon marché » [1]."
    ],
    "forMe": "Après la perte du Niger, le Kazakhstan est devenu encore plus important pour faire tourner les centrales nucléaires européennes, donc pour notre électricité.",
    "figures": [
      {
        "value": "13 291 t",
        "label": "d'uranium produites au 1er semestre 2026",
        "src": 1
      },
      {
        "value": "+9 %",
        "label": "sur un an",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "World Nuclear News",
        "name": "World Nuclear News, « Mid-year updates from major uranium producers » (août 2026)",
        "url": "https://www.world-nuclear-news.org/articles/mid-year-updates-from-major-uranium-producers"
      },
      {
        "short": "World Nuclear News",
        "name": "World Nuclear News, « Kazatomprom to lower uranium production in 2026 »",
        "url": "https://www.world-nuclear-news.org/articles/kazatomprom-to-lower-uranium-production-in-2026"
      }
    ]
  },
  {
    "id": "2026-10-07-chine-terres-rares",
    "date": "2026-10-07",
    "theme": "geo",
    "region": "Asie",
    "title": "Terres rares : la Chine tient le monde entier, échéance le 10 novembre",
    "summary": "Pékin a suspendu pour un an ses restrictions les plus dures sur les terres rares. La trêve expire dans un mois.",
    "geo": [
      {
        "name": "Baotou (Chine)",
        "label": "Chine",
        "coords": [
          109.84,
          40.66
        ]
      }
    ],
    "points": [
      "Annoncées en octobre 2025, les nouvelles restrictions chinoises à l'export de terres rares sont suspendues jusqu'au 10 novembre 2026 [1].",
      "En juin 2026, la Chine a ajouté dix entreprises américaines à sa liste noire, dont le principal producteur de terres rares des États-Unis [2].",
      "Les contrôles plus anciens sur le tungstène, le bismuth ou l'indium restent en vigueur [1]."
    ],
    "why": [
      "Les terres rares sont 17 métaux indispensables aux aimants des moteurs électriques, des éoliennes, des smartphones et des missiles. La Chine domine l'essentiel du raffinage mondial, ce qui lui donne un énorme moyen de pression [3].",
      "C'est la réponse de Pékin aux restrictions américaines sur les puces électroniques : chacun bloque ce dont l'autre a besoin. Le sommet Trump-Xi du 24 septembre n'a pas encore réglé la question [3]."
    ],
    "forMe": "Sans terres rares, pas de voitures électriques ni d'éoliennes en Europe. Les industriels européens surveillent la date du 10 novembre de très près.",
    "figures": [
      {
        "value": "17",
        "label": "métaux forment la famille des terres rares"
      },
      {
        "value": "10 nov.",
        "label": "fin de la suspension des restrictions chinoises",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "semi-conducteurs",
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "Clark Hill",
        "name": "Clark Hill, « China hits pause on rare-earth export controls and what it means for supply chains »",
        "url": "https://www.clarkhill.com/news-events/news/china-hits-pause-on-rare-earth-export-controls-and-what-it-means-for-supply-chains/"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « China adds 10 US firms, including rare-earth miner, to export control list » (22 juin 2026)",
        "url": "https://www.aljazeera.com/news/2026/6/22/china-adds-10-us-firms-including-rare-earth-miner-to-export-control-list"
      },
      {
        "short": "Rare Earth Exchanges",
        "name": "Rare Earth Exchanges, « China rare earth export controls: November 2026 deadline explained »",
        "url": "https://rareearthexchanges.com/news/china-rare-earth-controls-trump-xi-deadline/"
      }
    ]
  },
  {
    "id": "2026-10-07-birmanie-terres-rares",
    "date": "2026-10-07",
    "theme": "geo",
    "region": "Asie",
    "title": "Birmanie : la guerre pour les mines de terres rares",
    "summary": "Dans le nord de la Birmanie, l'armée tente de reprendre aux rebelles une région minière qui fournit une grande partie des terres rares lourdes du monde.",
    "geo": [
      {
        "name": "Kachin (Birmanie)",
        "label": "Birmanie",
        "coords": [
          97.9,
          25.8
        ]
      }
    ],
    "points": [
      "En octobre 2024, l'Armée pour l'indépendance kachin a pris le contrôle de la ceinture minière près de la frontière chinoise [1].",
      "Depuis mai 2026, la junte birmane mène une offensive pour reprendre ces mines [1].",
      "Cette région produit environ la moitié des terres rares lourdes du monde, essentielles aux éoliennes et aux voitures électriques [1]."
    ],
    "why": [
      "Les terres rares extraites en Birmanie partent presque toutes en Chine pour y être raffinées. Qui contrôle ces mines a donc un poids sur toute la chaîne mondiale [1].",
      "L'extraction, souvent illégale, pollue lourdement les rivières et les forêts. Des habitants manifestent pour exiger le départ des entreprises minières chinoises [2]."
    ],
    "forMe": "La « transition verte » repose aussi sur des mines dans des zones de guerre, avec des dégâts environnementaux importants. C'est l'envers du décor des technologies propres.",
    "figures": [
      {
        "value": "≈ 50 %",
        "label": "des terres rares lourdes du monde viennent de cette région",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "semi-conducteurs"
    ],
    "sources": [
      {
        "short": "Asia News Network",
        "name": "Asia News Network (Reuters), « Myanmar junta pushes to retake rare-earth belt near China border »",
        "url": "https://asianews.network/myanmar-junta-pushes-to-retake-rare-earth-belt-near-china-border/"
      },
      {
        "short": "BNI",
        "name": "BNI Online, « Kachin residents demand Chinese rare-earth mining companies stop operations »",
        "url": "https://www.bnionline.net/en/node/97753"
      }
    ]
  },
  {
    "id": "2026-10-07-indonesie-nickel",
    "date": "2026-10-07",
    "theme": "eco",
    "region": "Asie",
    "title": "Indonésie : le pays du nickel serre la vis",
    "summary": "Premier producteur mondial de nickel, l'Indonésie réduit sa production et contrôle davantage ses exportations. Les prix remontent.",
    "geo": [
      {
        "name": "Sulawesi (Indonésie)",
        "label": "Indonésie",
        "coords": [
          121.9,
          -2.8
        ]
      }
    ],
    "points": [
      "L'Indonésie a réduit d'environ un tiers son quota de production de minerai de nickel pour 2026 [1].",
      "À partir du 1er janvier 2027, certains produits du nickel ne pourront plus être exportés que par des entreprises d'État [2].",
      "Le prix du nickel a dépassé 18 000 dollars la tonne, au plus haut depuis deux ans [3]."
    ],
    "why": [
      "Depuis 2020, l'Indonésie interdit d'exporter son minerai brut : elle oblige les industriels à construire des usines de transformation sur place, souvent avec des capitaux chinois. Le pays est ainsi devenu un géant du nickel [3].",
      "En limitant maintenant la production, Jakarta fait comme l'OPEP avec le pétrole : moins de volume pour des prix plus élevés."
    ],
    "forMe": "Le nickel entre dans l'acier inoxydable de ta cuisine et dans beaucoup de batteries de voitures électriques. Quand l'Indonésie bouge, ces prix bougent.",
    "figures": [
      {
        "value": "≈ -1/3",
        "label": "de quota de production de nickel en 2026",
        "src": 1
      },
      {
        "value": "> 18 000 $",
        "label": "la tonne de nickel, au plus haut depuis deux ans",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Argus",
        "name": "Argus Media, « Indonesia to cut nickel mining quota in 2026 »",
        "url": "https://www.argusmedia.com/news-and-insights/latest-market-news/2787275-indonesia-to-cut-nickel-mining-quota-in-2026"
      },
      {
        "short": "SMM",
        "name": "SMM, « Indonesia government officially releases new export controls on FeNi and NPI » (juil. 2026)",
        "url": "https://news.metal.com/newscontent/103996838-smm-tin-nhanh-niken-chính-phủ-indonesia-chính-thức-công-bố-các-biện-pháp-kiểm-soát-xuất-khẩu-mới-đối-với-feni-và-npi"
      },
      {
        "short": "The Oregon Group",
        "name": "The Oregon Group, « Can nickel prices hit $25,000 in 2026? »",
        "url": "https://theoregongroup.com/commodities/nickel/can-nickel-prices-hit-25000-in-2026/"
      }
    ]
  },
  {
    "id": "2026-10-07-pakistan",
    "date": "2026-10-07",
    "theme": "eco",
    "region": "Asie",
    "title": "Pakistan : 250 millions d'habitants face au choc pétrolier",
    "summary": "Très dépendant du pétrole du Golfe et sous perfusion du FMI, le Pakistan est l'un des pays les plus exposés à la crise d'Ormuz.",
    "geo": [
      {
        "name": "Islamabad",
        "label": "Pakistan",
        "coords": [
          73.05,
          33.7
        ]
      }
    ],
    "points": [
      "Le pays ne dispose que de 10 à 14 jours de réserves stratégiques de carburant [2].",
      "En mars, le gouvernement a augmenté l'essence et le diesel de 55 roupies par litre d'un coup [2].",
      "En mai, le FMI a versé 1,1 milliard de dollars dans le cadre de son programme d'aide de 7 milliards [1]."
    ],
    "why": [
      "Le Pakistan importe l'essentiel de son énergie et a peu de devises en réserve. Chaque hausse de 10 dollars du baril alourdit sa facture d'importation d'environ 2 milliards de dollars par an [2].",
      "Le pays sert aussi de médiateur entre les États-Unis et l'Iran, son voisin. Mais les négociations piétinent, et avec elles l'espoir d'une baisse rapide des prix [1]."
    ],
    "forMe": "Quand le pétrole flambe, les pays pauvres et importateurs souffrent bien plus que l'Europe : pour eux, c'est parfois une question de coupures d'électricité et de pénuries.",
    "figures": [
      {
        "value": "10-14 j",
        "label": "de réserves stratégiques de carburant",
        "src": 2
      },
      {
        "value": "7 Md$",
        "label": "le programme d'aide du FMI",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "SCMP",
        "name": "South China Morning Post, « Pakistan's IMF-backed recovery under pressure as US-Iran mediation stalls »",
        "url": "https://www.scmp.com/week-asia/economics/article/3352061/pakistans-imf-backed-recovery-under-pressure-us-iran-mediation-stalls"
      },
      {
        "short": "Nukta",
        "name": "Nukta, « Pakistan faces fresh economic shock as Hormuz closure drives oil surge »",
        "url": "https://nukta.com/pakistan-faces-fresh-economic-shock-as-hormuz-closure-drives-oil-surge"
      },
      {
        "short": "Arab News",
        "name": "Arab News, « Pakistan warns prolonged Hormuz crisis could fuel inflation, hurt growth in developing countries »",
        "url": "https://www.arabnews.pk/node/2641560"
      }
    ]
  },
  {
    "id": "2026-10-07-fed",
    "date": "2026-10-07",
    "region": "Amériques",
    "theme": "eco",
    "geo": [
      {
        "name": "Washington",
        "coords": [
          -77.04,
          38.9
        ]
      }
    ],
    "title": "La Fed remonte ses taux pour la première fois depuis trois ans",
    "summary": "Les marchés attendent cette semaine le compte rendu de la réunion de septembre, où la banque centrale américaine a relevé ses taux à l'unanimité.",
    "points": [
      "Le 16 septembre, la Réserve fédérale américaine (Fed) a relevé ses taux d'un quart de point, à 3,75 %-4 % [1].",
      "C'est sa première hausse depuis 2023, votée à l'unanimité (12 voix contre 0) [2].",
      "Raison principale : l'inflation reste trop élevée, poussée par la flambée du pétrole [2]."
    ],
    "why": [
      "« L'inflation est trop élevée, et depuis trop longtemps », a résumé le président de la Fed, Kevin Warsh [2]. L'indicateur d'inflation préféré de la Fed dépasse 3 % chaque mois depuis le début de l'année, loin de son objectif de 2 % [1].",
      "C'est un tournant : il y a un an, la Fed baissait encore ses taux. Le choc pétrolier a renversé la tendance. Ses responsables prévoient en moyenne une seule autre hausse cette année [1]."
    ],
    "forMe": "Quand la Fed monte ses taux, le dollar a tendance à se renforcer : les voyages aux États-Unis et le pétrole (payé en dollars) coûtent plus cher en euros. La BCE peut aussi être tentée de suivre, ce qui renchérirait les crédits en Europe.",
    "figures": [
      {
        "value": "3,75-4 %",
        "label": "le nouveau taux directeur de la Fed",
        "src": 1
      },
      {
        "value": "12-0",
        "label": "un vote unanime",
        "src": 2
      },
      {
        "value": "> 3 %",
        "label": "l'inflation sous-jacente (PCE) chaque mois de 2026",
        "src": 1
      }
    ],
    "visuals": [
      {
        "kind": "chart",
        "type": "line",
        "title": "Le taux directeur de la Fed",
        "subtitle": "Borne haute de la fourchette, en fin d'année (septembre pour 2026)",
        "xLabel": "Année",
        "unit": "Taux (%)",
        "suffix": " %",
        "decimals": 2,
        "data": [
          [
            "2021",
            0.25
          ],
          [
            "2022",
            4.5
          ],
          [
            "2023",
            5.5
          ],
          [
            "2024",
            4.5
          ],
          [
            "2025",
            3.75
          ],
          [
            "2026",
            4
          ]
        ],
        "source": "Réserve fédérale américaine ; CNBC (16 sept. 2026)"
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux",
      "dollar"
    ],
    "sources": [
      {
        "short": "CNBC",
        "name": "CNBC, « Fed rate decision September 2026 » (16 sept. 2026)",
        "url": "https://www.cnbc.com/2026/09/16/fed-rate-decision-september-2026.html"
      },
      {
        "short": "NPR",
        "name": "NPR, « The Fed raises interest rates for the first time in over three years » (16 sept. 2026)",
        "url": "https://www.npr.org/2026/09/16/nx-s1-5968724/federal-reserve-interest-rates-inflation-economy"
      }
    ]
  },
  {
    "id": "2026-10-07-venezuela-raffinerie-cardon",
    "date": "2026-10-07",
    "region": "Amériques",
    "theme": "mix",
    "title": "Venezuela : incendie dans une raffinerie géante, en pleine crise des coupures d'électricité",
    "summary": "La raffinerie de Cardón, deuxième du pays, a été mise à l'arrêt d'urgence après un incendie. Au même moment, les coupures de courant à répétition alimentent des manifestations dans plusieurs villes.",
    "geo": [
      {
        "name": "Punto Fijo, Venezuela",
        "label": "Venezuela",
        "coords": [
          -70.21,
          11.69
        ]
      }
    ],
    "points": [
      "La compagnie pétrolière publique PDVSA a confirmé un incendie et l'arrêt d'urgence de la raffinerie de Cardón, dans l'État de Falcón, le 6 octobre [1].",
      "Selon PDVSA, le feu est parti de la rupture d'une conduite de gaz naturel ; l'entreprise a suspendu ses unités pour des inspections et créé un comité chargé d'en établir les causes [2].",
      "Les coupures d'électricité, en partie organisées par le gouvernement pour rationner le courant, provoquent des concerts de casseroles et des blocages de routes, comme à Valencia le 2 octobre [4]."
    ],
    "why": [
      "Le Venezuela possède d'énormes réserves de pétrole, mais ses installations vieillissent : à Cardón, une unité de distillation et une unité de craquage étaient déjà arrêtées depuis septembre faute de pétrole brut à traiter, selon des informations attribuées à Reuters [3]. Chaque panne réduit la production de carburant pour le marché intérieur.",
      "Le gouvernement de la présidente par intérim Delcy Rodríguez attribue la crise électrique au phénomène climatique El Niño, aux sanctions étrangères et à des sabotages, des explications contestées par des ingénieurs interrogés par Al Jazeera [4]. Le mécontentement social pèse sur une transition politique encore sans date d'élection."
    ],
    "forMe": "Chaque incident sur ses raffineries rappelle à quel point l'offre mondiale reste fragile. Et une crise énergétique qui s'éternise pousse aussi des Vénézuéliens à émigrer, un mouvement qui touche déjà toute l'Amérique du Sud et l'Espagne.",
    "figures": [
      {
        "value": "2e",
        "label": "raffinerie du pays par la taille (Cardón)",
        "src": 1
      },
      {
        "value": "310 000",
        "label": "barils/jour de capacité installée",
        "src": 3
      }
    ],
    "dossiers": [
      "sanctions"
    ],
    "sources": [
      {
        "short": "El Impulso",
        "name": "El Impulso, « PDVSA confirma incendio y paralización de emergencia en la refinería Cardón » (7 octobre 2026)",
        "url": "https://www.elimpulso.com/2026/10/07/pdvsa-confirma-incendio-y-paralizacion-de-emergencia-en-la-refineria-cardon-7oct/"
      },
      {
        "short": "MVS / EFE",
        "name": "MVS Noticias (EFE), « Controlan incendio en la refinería Cardón tras fractura en tubería de gas en Venezuela » (6 octobre 2026)",
        "url": "https://mvsnoticias.com/mundo/2026/10/6/controlan-incendio-en-la-refineria-cardon-tras-fractura-en-tuberia-de-gas-en-venezuela-748856.html"
      },
      {
        "short": "Energy News Beat",
        "name": "Energy News Beat, « Venezuela's Cardón Refinery Halted After Fire, Taking 310,000 bpd Offline » (octobre 2026)",
        "url": "https://energynewsbeat.co/downstream/venezuelas-cardon-refinery-halted-after-fire-taking-310000-bpd-offline/"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « 'We are desperate': Venezuela's power cuts fuel growing public anger » (6 octobre 2026)",
        "url": "https://www.aljazeera.com/news/longform/2026/10/6/we-are-desperate-venezuelas-power-cuts-fuel-growing-public-anger"
      }
    ]
  },
  {
    "id": "2026-10-07-bolivie-inflation-fmi",
    "date": "2026-10-07",
    "region": "Amériques",
    "theme": "eco",
    "title": "Bolivie : fin de la subvention au diesel, prêt du FMI… la banque centrale maintient son objectif d'inflation",
    "summary": "Malgré la forte hausse du prix du diesel, la Banque centrale de Bolivie prévoit toujours 9,2 % d'inflation fin 2026. Le pays vient d'obtenir un prêt de 1,9 milliard de dollars du FMI.",
    "geo": [
      {
        "name": "La Paz, Bolivie",
        "label": "Bolivie",
        "coords": [
          -68.15,
          -16.5
        ]
      }
    ],
    "points": [
      "La Banque centrale de Bolivie a maintenu le 7 octobre sa prévision de 9,2 % d'inflation pour fin 2026, estimant que des hausses de prix plus faibles que prévu en août et septembre compensent l'effet du diesel [1].",
      "Après la suppression de la subvention, le litre de diesel est passé de 9,80 à 17,95 bolivianos ; l'inflation de septembre a pourtant été limitée à 0,85 % sur un mois [2].",
      "Le conseil du FMI a approuvé le 2 octobre un programme de 36 mois d'environ 1,9 milliard de dollars, avec un premier versement immédiat d'environ 214 millions [3]."
    ],
    "why": [
      "La Bolivie a longtemps vécu de ses exportations de gaz pour financer des carburants vendus à prix bas. Avec moins de dollars, l'État ne parvient plus à payer ses importations de carburant, d'où les pénuries et la fin des subventions : un sacrifice exigé dans le cadre du soutien du FMI, qui veut assainir les finances publiques [3].",
      "Le FMI espère que son programme entraînera environ 4 milliards de dollars de financements supplémentaires d'autres institutions [4]. Mais des économistes jugent la prévision de la banque centrale optimiste : l'un d'eux estime que l'inflation pourrait finir l'année entre 17 % et 20 % [2]."
    ],
    "forMe": "Ce qui se passe en Bolivie montre ce que coûte la fin des carburants subventionnés : le prix à la pompe peut presque doubler d'un coup. C'est aussi un test pour le FMI, dont les plans d'aide s'accompagnent souvent de mesures douloureuses pour la population.",
    "figures": [
      {
        "value": "9,2 %",
        "label": "inflation prévue fin 2026 par la banque centrale",
        "src": 1
      },
      {
        "value": "+83 %",
        "label": "hausse du prix du diesel (9,80 à 17,95 Bs/litre)",
        "src": 2
      },
      {
        "value": "1,9 Md$",
        "label": "programme du FMI sur 36 mois",
        "src": 3
      }
    ],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Red Uno",
        "name": "Red Uno de Bolivia, « BCB ratifica una inflación de 9,2% para el cierre de 2026 » (7 octobre 2026)",
        "url": "https://www.reduno.com.bo/economia/bcb-ratifica-una-inflacion-de-9-2-para-el-cierre-de-2026-2026107165242"
      },
      {
        "short": "Infobae",
        "name": "Infobae, « Bolivia registra 0,85% de inflación en septiembre pese al alza en el precio del diésel » (6 octobre 2026)",
        "url": "https://www.infobae.com/america/america-latina/2026/10/06/bolivia-registra-085-de-inflacion-en-septiembre-pese-al-alza-en-el-precio-del-diesel/"
      },
      {
        "short": "Mirage News / FMI",
        "name": "Mirage News (communiqué du FMI), « IMF Approves 36-Month Loan Program for Bolivia » (octobre 2026)",
        "url": "https://www.miragenews.com/imf-approves-36-month-loan-program-for-bolivia-1754669/"
      },
      {
        "short": "Latin Times",
        "name": "Latin Times, « IMF Deal Unlocks $1.9 Billion for Bolivia and Could Mobilize Another $4 Billion in Funding » (octobre 2026)",
        "url": "https://www.latintimes.com/imf-deal-unlocks-19-billion-bolivia-could-mobilize-another-4-billion-funding-599905"
      }
    ]
  },
  {
    "id": "2026-10-07-fidji-chine-corruption",
    "date": "2026-10-07",
    "region": "Asie",
    "theme": "geo",
    "title": "Fidji : Washington accuse un relais de Pékin d'avoir corrompu des Fidjiens",
    "summary": "Le département d'État américain a sanctionné Zhao Fugang, directeur d'un centre de services pour les Chinois d'outre-mer aux Fidji, l'accusant d'avoir versé des pots-de-vin au profit d'intérêts chinois. Il dément.",
    "geo": [
      {
        "name": "Suva, Fidji",
        "label": "Fidji",
        "coords": [
          178.44,
          -18.14
        ]
      }
    ],
    "points": [
      "Le 7 octobre, le département d'État a désigné publiquement Zhao Fugang, directeur de l'Overseas Chinese Service Center aux Fidji, pour « corruption significative » [1].",
      "Washington l'accuse d'avoir versé des pots-de-vin à des citoyens fidjiens pour servir des intérêts gouvernementaux, commerciaux et criminels basés en Chine ; lui et sa famille proche sont désormais en principe interdits d'entrée aux États-Unis [1].",
      "Zhao Fugang dément ces accusations, qu'il juge « non étayées », et souligne qu'aucune autorité fidjienne ne l'a interrogé ni inculpé [2]."
    ],
    "why": [
      "Les îles du Pacifique sont devenues un terrain de rivalité entre la Chine d'un côté, les États-Unis et l'Australie de l'autre. L'ambassade américaine à Suva estime que ces agissements ont exposé les Fidji à une « influence étrangère malveillante » d'acteurs gouvernementaux, commerciaux et criminels chinois [3].",
      "Pékin présente ses centres de services pour les Chinois d'outre-mer comme de simples guichets administratifs (renouvellement de permis de conduire, par exemple), tandis que des ONG de défense des droits humains les accusent de servir de relais à l'influence chinoise, y compris contre des dissidents [2]. Les accusations n'ont pas été prouvées devant un tribunal."
    ],
    "forMe": "La France est elle aussi une puissance du Pacifique, avec la Nouvelle-Calédonie, la Polynésie française et Wallis-et-Futuna. La compétition d'influence entre la Chine et les Occidentaux dans cette région touche donc directement des territoires français et leurs voisins.",
    "figures": [
      {
        "value": "7 octobre 2026",
        "label": "date de la désignation par le département d'État",
        "src": 1
      }
    ],
    "dossiers": [
      "sanctions"
    ],
    "sources": [
      {
        "short": "Département d'État",
        "name": "U.S. Department of State, « Designation of Fijian Resident for Involvement in Significant Corruption on Behalf of China-Based Actors » (7 octobre 2026)",
        "url": "https://www.state.gov/releases/office-of-the-spokesman/2026/10/designation-of-fijian-resident-for-involvement-in-significant-corruption-on-behalf-of-china-based-actors"
      },
      {
        "short": "ABC",
        "name": "ABC News (Australie), « US sanctions Fijian businessman over alleged corruption tied to China » (8 octobre 2026)",
        "url": "https://www.abc.net.au/news/2026-10-08/us-sanctions-fijian-businessman-alleged-corruption-china/107241542"
      },
      {
        "short": "HKFP / AFP",
        "name": "Hong Kong Free Press, « US says Fiji-based Chinese official paid bribes for Beijing » (8 octobre 2026)",
        "url": "https://hongkongfp.com/2026/10/08/us-says-fiji-based-chinese-official-paid-bribes-for-beijing/"
      }
    ]
  },
  {
    "id": "2026-10-07-irak-devaluation-dinar",
    "date": "2026-10-07",
    "region": "Moyen-Orient",
    "theme": "eco",
    "title": "Irak : le dinar dévalué de 13 % pour pouvoir payer les fonctionnaires",
    "summary": "La Banque centrale d'Irak a affaibli le dinar face au dollar, car les perturbations du détroit d'Ormuz ont fait chuter les recettes pétrolières. L'objectif : obtenir plus de dinars pour chaque dollar de pétrole vendu.",
    "geo": [
      {
        "name": "Bagdad, Irak",
        "label": "Irak",
        "coords": [
          44.37,
          33.31
        ]
      }
    ],
    "points": [
      "Le 7 octobre, la Banque centrale a fixé le taux officiel à 1 520 dinars pour un dollar, contre environ 1 320 depuis 2023, soit une dévaluation d'environ 13 % approuvée par le gouvernement [1].",
      "Selon le ministère des Finances, le déficit public a atteint environ 22 milliards de dollars sur les sept premiers mois de 2026 [2].",
      "Selon un économiste de Bagdad, les recettes de l'État n'ont couvert qu'environ 76 % des salaires publics et des aides sociales sur la même période [3]."
    ],
    "why": [
      "L'Irak vit presque entièrement du pétrole, vendu en dollars, alors que l'État paie ses fonctionnaires en dinars. Avec un dinar plus faible, chaque dollar de pétrole rapporte davantage de dinars, ce qui aide à financer les dépenses intérieures quand les exportations reculent à cause des perturbations dans le détroit d'Ormuz [1].",
      "Le revers de la médaille : les importations coûtent plus cher et le pouvoir d'achat des ménages baisse [1]. Un économiste de l'université Al-Iraqia estime que le changement de taux revient à réduire « d'environ 13 % » la valeur réelle des salaires des fonctionnaires [3]. La Banque centrale assure que ses réserves de devises restent suffisantes [1]."
    ],
    "forMe": "Et moi, dans tout ça ? Une dévaluation, c'est un peu comme si ton salaire restait le même mais que tout ce qui vient de l'étranger devenait plus cher. Cette décision montre aussi à quel point les tensions autour du détroit d'Ormuz, par où passe une grande partie du pétrole mondial, pèsent sur les pays producteurs… et sur le prix de l'énergie que tu paies.",
    "figures": [
      {
        "value": "1 520",
        "label": "dinars pour un dollar (contre ~1 320)",
        "src": 1
      },
      {
        "value": "~22 Md$",
        "label": "déficit public sur 7 mois en 2026",
        "src": 2
      },
      {
        "value": "76 %",
        "label": "part des salaires et aides couverte par les recettes",
        "src": 3
      }
    ],
    "dossiers": [
      "dollar",
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Al-Monitor",
        "name": "Al-Monitor, Iraq devalues dinar 13% as Hormuz disruption hits oil revenue (7 octobre 2026)",
        "url": "https://www.al-monitor.com/originals/2026/10/iraq-devalues-dinar-13-hormuz-disruption-hits-oil-revenue"
      },
      {
        "short": "AGBI",
        "name": "AGBI, Iraq devalues dinar to help meet spending commitments (octobre 2026)",
        "url": "https://www.agbi.com/finance/2026/10/iraq-devalues-dinar-to-help-meet-spending-commitments/"
      },
      {
        "short": "964media",
        "name": "964media, Economists warn devaluation will raise costs and dampen demand, question budget's export assumption (octobre 2026)",
        "url": "https://en.964media.com/53515/"
      }
    ]
  },
  {
    "id": "2026-10-07-norvege-budget",
    "date": "2026-10-07",
    "region": "Europe",
    "theme": "eco",
    "title": "Norvège : le pays va puiser 608 milliards de couronnes dans son fonds pétrolier en 2027",
    "summary": "Le gouvernement norvégien a présenté son projet de budget 2027, qui prévoit un prélèvement record sur le plus grand fonds souverain du monde, tout en restant sous la limite fixée par sa règle budgétaire.",
    "geo": [
      {
        "name": "Oslo, Norvège",
        "label": "Norvège",
        "coords": [
          10.75,
          59.91
        ]
      }
    ],
    "points": [
      "Le projet de budget 2027, présenté le 7 octobre 2026, prévoit de retirer 608,4 milliards de couronnes (environ 63,6 milliards de dollars) du fonds pétrolier, contre 583,4 milliards dans le budget révisé 2026 [1].",
      "Ce retrait représente 2,7 % de la valeur du fonds, le même taux que prévu pour 2026 [2].",
      "Le gouvernement table sur une croissance de 1,7 % en 2027, contre 1,1 % attendue en 2026 [2].",
      "Le budget doit encore être négocié avec quatre partis du centre et de gauche (SP, SV, Rødt et MDG) au Parlement [2]."
    ],
    "why": [
      "La Norvège vit en partie de la rente de son pétrole placée dans un gigantesque fonds souverain : chaque année, l'État y prélève de quoi financer plus d'un quart de ses dépenses [3]. Un fonds souverain est une sorte de « tirelire » publique investie en actions, obligations et immobilier dans le monde entier.",
      "Le pays s'impose une règle : ne pas dépenser plus de 3 % de la valeur du fonds par an, pour préserver la richesse des générations futures [2]. Avec 2,7 %, le gouvernement reste prudent, et estime que son budget aura un effet neutre sur l'activité économique [2]."
    ],
    "forMe": "Et moi, dans tout ça ? Le fonds norvégien détient des parts dans des milliers d'entreprises, y compris de grands groupes français du CAC 40. Sa gestion prudente est souvent citée en exemple dans les débats français sur la dette : la Norvège dépense les revenus de son épargne, pas l'épargne elle-même.",
    "figures": [
      {
        "value": "608,4 Md NOK",
        "label": "Prélèvement prévu sur le fonds en 2027",
        "src": 1
      },
      {
        "value": "2,7 %",
        "label": "Part de la valeur du fonds dépensée (plafond : 3 %)",
        "src": 2
      },
      {
        "value": "+1,7 %",
        "label": "Croissance prévue en 2027",
        "src": 2
      }
    ],
    "dossiers": [],
    "sources": [
      {
        "short": "OilPrice",
        "name": "Norway Plans to Tap $63.7 Billion From Its Oil Fund in 2027 (octobre 2026)",
        "url": "https://oilprice.com/Latest-Energy-News/World-News/Norway-Plans-to-Tap-637-Billion-From-Its-Oil-Fund-in-2027.html"
      },
      {
        "short": "Bytes Europe",
        "name": "Norway plans to spend $63.6 billion from wealth fund in 2027 (octobre 2026)",
        "url": "https://www.byteseu.com/2430778/"
      },
      {
        "short": "Mediabias",
        "name": "Norway proposes increased withdrawal from sovereign wealth fund (octobre 2026)",
        "url": "https://mediabias.news/politics/norway-proposes-increased-withdrawal-from-sovereign-wealth-fund"
      }
    ]
  },
  {
    "id": "2026-10-07-japon-taux",
    "date": "2026-10-07",
    "region": "Asie",
    "theme": "eco",
    "title": "Japon : les taux d'emprunt à 30 ans battent un record, la Première ministre Takaichi tente de rassurer",
    "summary": "Inquiets des projets de dépenses de Sanae Takaichi, les investisseurs ont poussé le taux de la dette japonaise à 30 ans à un sommet historique. La Première ministre promet de revoir ses plans si les marchés s'emballent.",
    "geo": [
      {
        "name": "Tokyo, Japon",
        "label": "Japon",
        "coords": [
          139.69,
          35.69
        ]
      }
    ],
    "points": [
      "Le 5 octobre 2026, le taux des obligations d'État japonaises à 30 ans a atteint le record de 4,235 % [1].",
      "Le même jour, le taux à 10 ans tournait autour de 3,08 % et celui à 2 ans autour de 1,9 % [2].",
      "Le 7 octobre, Sanae Takaichi a déclaré au Parlement qu'en cas de mouvement inattendu des taux, le gouvernement pourrait restructurer ses projets et revoir dépenses et recettes [3].",
      "Takaichi a indiqué que, lors de sa rencontre avec Donald Trump, on lui avait fait valoir que la faiblesse du yen pénalisait le commerce américain [4]."
    ],
    "why": [
      "Quand les investisseurs doutent de la capacité d'un État à tenir ses finances, ils exigent un intérêt plus élevé pour lui prêter, surtout sur de longues durées [2]. Or la dette publique japonaise représente environ deux fois la taille de son économie, la plus élevée des pays développés [1].",
      "Le contexte pèse aussi sur le yen : Tokyo et Washington ont mené une intervention commune sur le marché des changes pour soutenir la monnaie japonaise, une première en 28 ans [4]. La Première ministre veut baisser la taxe sur l'alimentation sans émettre de nouvelle dette, mais n'a pas détaillé comment [1]."
    ],
    "forMe": "Et moi, dans tout ça ? Les épargnants et les fonds japonais sont de gros prêteurs dans le monde entier, y compris à la France. Si les taux montent fortement au Japon, ils peuvent rapatrier leur argent, ce qui pousse à la hausse les taux d'emprunt ailleurs, et donc à terme le coût des crédits.",
    "figures": [
      {
        "value": "4,235 %",
        "label": "Taux record des obligations japonaises à 30 ans (5 oct.)",
        "src": 1
      },
      {
        "value": "≈ 3,08 %",
        "label": "Taux à 10 ans",
        "src": 2
      },
      {
        "value": "28 ans",
        "label": "Première intervention commune Japon-États-Unis sur le yen depuis",
        "src": 4
      }
    ],
    "dossiers": [
      "inflation-taux",
      "dollar"
    ],
    "sources": [
      {
        "short": "IndexBox",
        "name": "Takaichi Vows Fiscal Discipline as Japan's 30-Year Bond Yield Hits Record High (octobre 2026)",
        "url": "https://www.indexbox.io/blog/japan-pm-takaichi-pledges-bond-issuance-control-as-30-year-jgb-yield-hits-record-4235/"
      },
      {
        "short": "Finimize",
        "name": "Japan's 30-Year Bond Yield Hit A Record Ahead Of Takaichi's Speech (octobre 2026)",
        "url": "https://finimize.com/content/japans-30-year-bond-yield-hit-a-record-ahead-of-takaichis-speech"
      },
      {
        "short": "Bloomberg",
        "name": "Takaichi Says Japan May Review Spending if Yields Move Sharply (7 octobre 2026)",
        "url": "https://www.bloomberg.com/news/articles/2026-10-07/takaichi-says-japan-may-review-spending-if-yields-move-sharply"
      },
      {
        "short": "Japan Times",
        "name": "Takaichi told during Trump talks that weak yen was hurting U.S. trade (2 octobre 2026)",
        "url": "https://www.japantimes.co.jp/news/2026/10/02/japan/politics/takaichi-trump-talks-weak-yen/"
      }
    ]
  },
  {
    "id": "2026-10-06-bangladesh-banque-mondiale",
    "date": "2026-10-06",
    "region": "Asie",
    "theme": "eco",
    "title": "Bangladesh : la Banque mondiale abaisse sa prévision à 3,4 %, plombée par l'énergie et les banques",
    "summary": "Dans son rapport d'octobre, la Banque mondiale prévoit une croissance de seulement 3,4 % pour l'exercice 2026-2027 au Bangladesh, loin de sa moyenne passée. Pénuries de gaz et banques fragiles freinent l'économie.",
    "geo": [
      {
        "name": "Dacca, Bangladesh",
        "label": "Bangladesh",
        "coords": [
          90.41,
          23.81
        ]
      }
    ],
    "points": [
      "La Banque mondiale prévoit 3,4 % de croissance pour l'exercice 2026-2027 (juillet 2026 à juin 2027), soit 1,2 point de moins que sa précédente prévision, puis un léger rebond à 3,9 % en 2027-2028 [1].",
      "La croissance a déjà ralenti à 3,4 % lors de l'exercice 2025-2026, selon le rapport [2].",
      "Le gaz importé sous forme liquéfiée (GNL) couvre environ un tiers de la demande, et des pannes sur les terminaux flottants de Maheshkhali ont obligé de nombreuses usines à tourner au ralenti ou à s'arrêter [1]."
    ],
    "why": [
      "Le pays vit une crise de l'énergie : la production de gaz locale baisse, et les coupures de courant pénalisent l'industrie [1]. Le secteur bancaire, jugé fragile, prête peu : le crédit au secteur privé ne progresse plus que d'environ 4,5 %, au plus bas depuis des décennies [3].",
      "La Banque mondiale recommande des réformes dans trois domaines (banques, énergie, recettes fiscales), notamment des audits de la qualité des actifs bancaires pour déterminer quelles banques sont viables [1]. Ces prévisions restent très en dessous de l'objectif de 6,5 % fixé par le gouvernement [4]."
    ],
    "forMe": "Une bonne partie de tes t-shirts, jeans ou pulls vient sans doute du Bangladesh. Si les usines manquent de gaz et d'électricité, les délais de livraison et les coûts de production des marques de mode peuvent augmenter, avec un effet possible sur les prix en magasin.",
    "figures": [
      {
        "value": "3,4 %",
        "label": "croissance prévue en 2026-2027",
        "src": 1
      },
      {
        "value": "-1,2 point",
        "label": "révision par rapport à la prévision précédente",
        "src": 1
      },
      {
        "value": "~4,5 %",
        "label": "croissance du crédit au secteur privé",
        "src": 3
      }
    ],
    "dossiers": [],
    "sources": [
      {
        "short": "Daily Star",
        "name": "The Daily Star, « Growth to stay below 4% until FY28 on energy, banking woes » (octobre 2026)",
        "url": "https://www.thedailystar.net/business/economy/news/growth-stay-below-4-until-fy28-energy-banking-woes-4292321"
      },
      {
        "short": "Xinhua",
        "name": "Xinhua, « World Bank sees Bangladesh FY27 GDP growth at 3.4 pct » (6 octobre 2026)",
        "url": "https://www.xinhuanet.com/english/asiapacific/20261006/ebe71dfe05be4da3ae7cff29f19609bd/c.html"
      },
      {
        "short": "Financial Express",
        "name": "The Financial Express (Bangladesh), « WB lowers Bangladesh GDP growth to 3.4pc for FY27 » (octobre 2026)",
        "url": "https://today.thefinancialexpress.com.bd/first-page/wb-lowers-bangladesh-gdp-growth-to-34pc-for-fy27-1791309792"
      },
      {
        "short": "TBS",
        "name": "The Business Standard, « Bangladesh GDP projected to grow at 3.4%, second lowest in South Asia » (octobre 2026)",
        "url": "https://www.tbsnews.net/economy/bangladesh-see-lowest-gdp-growth-south-asia-after-afghanistan-wb-1564406"
      }
    ]
  },
  {
    "id": "2026-10-06-canada-etats-unis-guerre-commerciale",
    "date": "2026-10-06",
    "region": "Amériques",
    "theme": "eco",
    "title": "Canada–États-Unis : la guerre des droits de douane s'installe",
    "summary": "Depuis l'échec des négociations fin août, Washington taxe à 50 % une série de produits canadiens et interdit désormais certains d'entre eux, tandis qu'Ottawa riposte. Les exportateurs canadiens ont accéléré leurs envois avant la hausse, gonflant l'excédent commercial d'août.",
    "geo": [
      {
        "name": "Ottawa, Canada",
        "label": "Canada",
        "coords": [
          -75.7,
          45.42
        ]
      }
    ],
    "points": [
      "Le Premier ministre Mark Carney a suspendu les négociations commerciales avec les États-Unis le 21 août au soir, juste avant l'entrée en vigueur, le 22 août, de droits de douane de 50 % sur environ 28 milliards de dollars de produits canadiens [1].",
      "Ces taxes visent notamment les crosses de hockey, les matériaux de construction, les alcools et certains vêtements [1].",
      "Le Canada a riposté le 8 septembre avec des droits de 15 % à 50 % sur près de 20 milliards de dollars de produits américains, les taux les plus élevés frappant l'acier, l'aluminium et le fer, les meubles, les motos et les vêtements [2].",
      "Washington a répliqué en interdisant à partir du 29 septembre l'importation de certains produits canadiens : boissons alcoolisées, certains produits laitiers, mélasse, bières sans alcool et motos [3][4].",
      "Donald Trump a aussi promis de doubler, de 25 % à 50 %, les droits sur les voitures et pièces automobiles canadiennes à partir du 1er janvier 2027 [2].",
      "En août, les exportations canadiennes vers les États-Unis ont bondi de 8,1 % et l'excédent avec eux a atteint 11,2 milliards de dollars canadiens, un plus haut depuis 19 mois, sans doute gonflé par des envois anticipés avant la hausse [5]."
    ],
    "why": [
      "Ce conflit est la rupture la plus nette entre deux pays parmi les plus intégrés économiquement au monde. Carney reproche aux États-Unis d'avoir ajouté, dans les dernières heures, des exigences sur l'automobile, sur les autres partenariats commerciaux du Canada et sur la protection de la culture et de la langue française ; Washington accuse au contraire Ottawa d'être revenu sur ses engagements [1].",
      "Les droits américains « section 232 » de 50 % sur l'acier, l'aluminium et le cuivre continuent par ailleurs de s'appliquer sans exemption pour le Canada [6]. Le bois d'œuvre canadien cumule de son côté droits antidumping, droits compensateurs et nouveaux droits, pour des taux combinés dépassant 40 % [7].",
      "Le bond des exportations d'août pourrait n'être qu'un effet d'anticipation : Statistique Canada prévient qu'une partie de cette vigueur reflète le calendrier des échanges plutôt qu'une hausse durable de la demande, et les chiffres de septembre seront plus parlants [5]."
    ],
    "forMe": "Et moi, dans tout ça ? Le Canada cherche à vendre davantage ailleurs qu'aux États-Unis, et l'Europe fait partie des débouchés évidents grâce à l'accord de libre-échange UE-Canada. Pour les entreprises françaises, cela peut ouvrir des portes, mais aussi accroître la concurrence sur certains marchés. Pour toi, l'impact direct reste limité, sauf si tu travailles dans l'export ou dans des secteurs comme le vin ou les produits laitiers, où le jeu des taxes entre Ottawa et Washington rebat les cartes.",
    "figures": [
      {
        "value": "50 %",
        "label": "Droits américains sur environ 28 milliards de dollars de produits canadiens depuis le 22 août",
        "src": 1
      },
      {
        "value": "+8,1 %",
        "label": "Hausse des exportations canadiennes vers les États-Unis en août",
        "src": 5
      },
      {
        "value": "11,2 Md$ CA",
        "label": "Excédent commercial du Canada avec les États-Unis en août",
        "src": 5
      }
    ],
    "dossiers": [
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "NBC News",
        "name": "Canadian prime minister suspends trade talks with U.S., setting new 50% tariffs in motion (août 2026)",
        "url": "https://www.nbcnews.com/business/economy/trump-canada-tariffs-carney-rcna593510"
      },
      {
        "short": "Al Jazeera",
        "name": "As Canada's retaliatory tariffs on US goods take effect, tensions soar (8 septembre 2026)",
        "url": "https://www.aljazeera.com/news/2026/9/8/canadas-retaliatory-tariffs-on-20bn-of-us-goods-take-effect"
      },
      {
        "short": "Maison-Blanche",
        "name": "Fact Sheet: President Donald J. Trump Responds to Canada's Retaliation (septembre 2026)",
        "url": "https://www.whitehouse.gov/fact-sheets/2026/09/fact-sheet-president-donald-j-trump-responds-to-canadas-retaliation/"
      },
      {
        "short": "Dorsey & Whitney",
        "name": "White House Ups the Ante with Section 338 Import Bans Against Canadian Products (septembre 2026)",
        "url": "https://www.dorsey.com/newsresources/publications/client-alerts/2026/9/section-338-import-ban"
      },
      {
        "short": "BNN Bloomberg / Reuters",
        "name": "Canada's trade surplus surprisingly widens to over four-year high in August (6 octobre 2026)",
        "url": "https://www.bnnbloomberg.ca/business/economics/2026/10/06/canadas-trade-surplus-surprisingly-widens-to-over-four-year-high-in-august/"
      },
      {
        "short": "Congressional Research Service",
        "name": "U.S.-Canada Trade Relations (2026)",
        "url": "https://www.congress.gov/crs-product/IF12595"
      },
      {
        "short": "Daily Commercial News",
        "name": "A tariff exemption was Canada's salvation in 2025. It's 'absolutely' at risk in 2026 (janvier 2026)",
        "url": "https://canada.constructconnect.com/dcn/news/economic/2026/01/a-tariff-exemption-was-canadas-salvation-in-2025-its-absolutely-at-risk-in-2026"
      }
    ]
  },
  {
    "id": "2026-10-06-qatar-banque-mondiale",
    "date": "2026-10-06",
    "region": "Moyen-Orient",
    "theme": "mix",
    "title": "Qatar : l'économie devrait s'effondrer de 20,9 % en 2026, selon la Banque mondiale",
    "summary": "Frappé par la guerre avec l'Iran et le blocage du détroit d'Ormuz, le Qatar devrait connaître sa pire année économique depuis cinquante ans, d'après les nouvelles prévisions de la Banque mondiale.",
    "geo": [
      {
        "name": "Doha, Qatar",
        "label": "Qatar",
        "coords": [
          51.53,
          25.29
        ]
      }
    ],
    "points": [
      "La Banque mondiale prévoit une contraction de 20,9 % du PIB du Qatar en 2026, après une croissance de 1,8 % en 2025 : sa pire performance en cinq décennies [1].",
      "La production mensuelle moyenne de gaz du pays a chuté d'environ 67 % entre mars et juillet en raison des dégâts sur ses sites [1].",
      "Des frappes en mars ont mis hors service près de 17 % de la capacité d'exportation de gaz naturel liquéfié (GNL) du Qatar [2].",
      "À l'échelle de la région, l'économie devrait reculer de 2,1 % en 2026 et celle des pays du Golfe de 4,3 % [1][3]."
    ],
    "why": [
      "Le Qatar est l'un des grands exportateurs mondiaux de GNL, du gaz refroidi pour être transporté par bateau. Ses exportations passent par le détroit d'Ormuz, où le trafic reste quasi nul : en moyenne trois pétroliers par jour fin septembre selon l'outil PortWatch du FMI [2].",
      "La prévision suppose une réouverture progressive du détroit à partir du 31 décembre, ce qui permettrait un fort rebond en 2027 [2]. Mais certaines installations endommagées pourraient mettre des années à être entièrement réparées [3]."
    ],
    "forMe": "Et moi, dans tout ça ? Le Qatar fournit une partie du gaz liquéfié importé par l'Europe. Moins de gaz qatari sur le marché, c'est une pression à la hausse sur les prix de l'énergie, qui peut se retrouver sur ta facture de chauffage ou d'électricité.",
    "figures": [
      {
        "value": "-20,9 %",
        "label": "PIB du Qatar prévu en 2026",
        "src": 1
      },
      {
        "value": "-67 %",
        "label": "Production mensuelle de gaz (mars-juillet)",
        "src": 1
      },
      {
        "value": "-2,1 %",
        "label": "Économie de la région Moyen-Orient en 2026",
        "src": 1
      }
    ],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "The National",
        "name": "World Bank says Middle East economy to contract 2.1% in 2026 on Iran war (6 octobre 2026)",
        "url": "https://www.thenationalnews.com/business/economy/2026/10/06/world-bank-says-middle-east-economy-to-contract-21-in-2026-on-iran-war/"
      },
      {
        "short": "JFeed",
        "name": "Strait of Hormuz Blockade: Qatar's Gas Revenue Crisis (octobre 2026)",
        "url": "https://www.jfeed.com/middleeast/strait-hormuz-blockade-qatar"
      },
      {
        "short": "Economy Middle East",
        "name": "World Bank revises 2026 outlook for GCC economies (octobre 2026)",
        "url": "https://economymiddleeast.com/news/world-bank-revises-2026-outlook-for-gcc-economies-sees-uae-growth-rebounding-to-9-5-percent-in-2027-saudi-arabia-to-7-9-percent/"
      }
    ]
  },
  {
    "id": "2026-10-05-japon-quitte-chine",
    "date": "2026-10-05",
    "region": "Asie",
    "theme": "mix",
    "title": "Chine : les entreprises japonaises partent à un rythme record",
    "summary": "Le nombre d'entreprises japonaises présentes en Chine est tombé à son plus bas niveau depuis le début des relevés, selon l'institut Teikoku Databank. Tensions diplomatiques autour de Taïwan, ralentissement chinois et droits de douane américains poussent au départ.",
    "geo": [
      {
        "name": "Shanghai, Chine",
        "label": "Shanghai",
        "coords": [
          121.47,
          31.23
        ]
      }
    ],
    "points": [
      "Teikoku Databank a recensé 10 118 entreprises japonaises ayant une filiale, une usine ou un bureau en Chine en juin 2026, soit 22,4 % de moins qu'en 2024 [1][2].",
      "Entre 2024 et 2026, un record de 4 137 entreprises japonaises ont quitté la Chine, contre seulement 1 221 arrivées [1].",
      "Shanghai, premier pôle japonais en Chine, a perdu 1 085 implantations en deux ans, et certaines entreprises déplacent leur production vers le Vietnam, l'Asie du Sud-Est ou le Japon [1]."
    ],
    "why": [
      "Les relations sino-japonaises se sont dégradées depuis que la Première ministre Sanae Takaichi a déclaré au Parlement, en novembre 2025, que le Japon pourrait intervenir militairement en cas de crise autour de Taïwan [1]. S'y ajoutent le ralentissement de l'économie chinoise, les droits de douane américains, la hausse des salaires et l'effondrement de l'immobilier [1].",
      "Teikoku cite aussi la « coercition économique » comme les restrictions sur les terres rares, la loi chinoise anti-espionnage révisée et la concurrence de rivaux chinois soutenus par l'État [3]. Pékin a réagi par la voix du vice-Premier ministre He Lifeng, qui assure que la Chine « accueille toujours » les entreprises japonaises [1]."
    ],
    "forMe": "Ce mouvement illustre la « diversification » des chaînes d'approvisionnement hors de Chine que suivent aussi de nombreuses entreprises européennes. Pour toi, cela peut signifier des produits fabriqués de plus en plus au Vietnam ou en Asie du Sud-Est plutôt qu'en Chine, et un risque accru pour les entreprises trop dépendantes d'un seul pays.",
    "figures": [
      {
        "value": "10 118",
        "label": "entreprises japonaises présentes en Chine (juin 2026)",
        "src": 1
      },
      {
        "value": "-22,4 %",
        "label": "en deux ans",
        "src": 2
      },
      {
        "value": "4 137",
        "label": "retraits de Chine entre 2024 et 2026",
        "src": 1
      }
    ],
    "dossiers": [
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "CNBC",
        "name": "CNBC, « Why Japanese companies are retreating from China at a record pace » (5 octobre 2026)",
        "url": "https://www.cnbc.com/2026/10/05/japanese-companies-leaving-china-takaichi-comment-taiwan.html"
      },
      {
        "short": "Digitimes",
        "name": "Digitimes, « Japanese firms cut China presence 22.4% as trade risks mount » (2 octobre 2026)",
        "url": "https://www.digitimes.com/news/a20261002PD240/2026-production-sales-manufacturing-market.html"
      },
      {
        "short": "SCMP",
        "name": "South China Morning Post, « Japanese business presence in China down nearly 30% from peak in 2012: survey » (septembre 2026)",
        "url": "https://www.scmp.com/economy/china-economy/article/3369164/japanese-firms-pull-back-china-amid-geopolitical-tensions-supply-chains-shifts"
      }
    ]
  },
  {
    "id": "2026-10-05-aceum-revision-annuelle",
    "date": "2026-10-05",
    "region": "Amériques",
    "theme": "mix",
    "title": "Libre-échange nord-américain : l'ACEUM entre dans l'ère des révisions annuelles",
    "summary": "Faute d'accord pour prolonger le traité commercial entre États-Unis, Mexique et Canada en juillet, Washington lance la consultation publique pour la révision de 2027. Le pacte reste en vigueur, mais sous surveillance permanente.",
    "geo": [
      {
        "name": "Monterrey, Mexique",
        "label": "Mexique",
        "coords": [
          -100.32,
          25.69
        ]
      },
      {
        "name": "Toronto, Canada",
        "label": "Canada",
        "coords": [
          -79.38,
          43.65
        ]
      }
    ],
    "points": [
      "L'ACEUM (Accord Canada–États-Unis–Mexique, appelé USMCA en anglais) est le traité de libre-échange qui lie les trois pays ; un réexamen conjoint était prévu le 1er juillet 2026 [1].",
      "Ce jour-là, les États-Unis ont déclaré ne pas accepter de « renouveler l'accord dans sa forme actuelle » : l'accord reste en vigueur mais est désormais réexaminé chaque année [1].",
      "Sans renouvellement, l'accord prendra fin le 1er juillet 2036, au terme de sa durée de 16 ans [1].",
      "Le 5 octobre, le représentant américain au Commerce (USTR) a publié au Journal officiel américain un appel à commentaires pour la révision annuelle de 2027, sur l'application de l'accord, son respect et les mesures à proposer [2][3].",
      "Les contributions écrites sont attendues jusqu'au 12 janvier 2027 ; la date de l'audition publique n'est pas encore fixée [1].",
      "Le Mexique est le seul pays à faire avancer formellement des discussions de révision avec Washington, les négociations canadiennes étant suspendues depuis le 22 août [4]."
    ],
    "why": [
      "Le passage à des révisions annuelles crée une incertitude durable : les entreprises qui ont investi au Mexique ou au Canada pour profiter d'un accès privilégié au marché américain ne savent plus si ces règles tiendront jusqu'en 2036 [1][4].",
      "Cette incertitude pèse sur le « nearshoring », la relocalisation de production près des États-Unis, notamment au Mexique, que l'ACEUM devait encourager. L'USTR demande d'ailleurs des avis sur les conditions d'investissement en Amérique du Nord et sur la sécurité économique régionale [3].",
      "La révision devient aussi un levier de négociation pour Washington, qui discute en parallèle des baisses de droits de douane sectoriels (acier, automobile) avec Mexico et reste en conflit ouvert avec Ottawa [4]."
    ],
    "forMe": "Et moi, dans tout ça ? L'Amérique du Nord est l'un des plus grands marchés du monde, et beaucoup d'entreprises européennes y produisent, notamment au Mexique. Un accord révisé chaque année, c'est moins de visibilité pour elles, donc des investissements plus prudents. À terme, cela peut peser sur les prix de produits fabriqués là-bas, des voitures aux appareils électroniques.",
    "figures": [
      {
        "value": "12 janvier 2027",
        "label": "Date limite des commentaires publics pour la révision de 2027",
        "src": 1
      },
      {
        "value": "2036",
        "label": "Fin de l'accord en l'absence de renouvellement",
        "src": 1
      },
      {
        "value": "16 ans",
        "label": "Durée initiale de l'ACEUM",
        "src": 1
      }
    ],
    "dossiers": [
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "Expeditors",
        "name": "USTR Requests Public Comments on 2027 USMCA Joint Review (octobre 2026)",
        "url": "https://info.expeditors.com/newsflash/ustr-requests-public-comments-on-2027-usmca-joint-review"
      },
      {
        "short": "Federal Register",
        "name": "Request for Public Comments and Notice of Public Hearing Relating to the Operation of the USMCA (5 octobre 2026)",
        "url": "https://www.federalregister.gov/documents/2026/10/05/2026-20341/request-for-public-comments-and-notice-of-public-hearing-relating-to-the-operation-of-the-agreement"
      },
      {
        "short": "USTR",
        "name": "USTR Seeks Public Comment on the 2027 Joint Review of USMCA (octobre 2026)",
        "url": "https://ustr.gov/about/policy-offices/press-office/press-releases/2026/october/ustr-seeks-public-comment-2027-joint-review-usmca"
      },
      {
        "short": "Supply Chain Dive",
        "name": "USTR initiates next stage of USMCA review (octobre 2026)",
        "url": "https://supplychaindive.com/news/ustr-initiates-next-stage-of-usmca-review/832285"
      }
    ]
  },
  {
    "id": "2026-10-05-moldavie-ue",
    "date": "2026-10-05",
    "region": "Europe",
    "theme": "geo",
    "title": "Moldavie : l'UE débloque 157 millions d'euros et salue l'avancée des négociations d'adhésion",
    "summary": "Lors du 10e Conseil d'association UE-Moldavie à Bruxelles, l'Union a annoncé un nouveau versement à Chisinau et salué l'ouverture de deux premiers blocs de négociations, tout en insistant sur la réforme de la justice.",
    "geo": [
      {
        "name": "Chisinau, Moldavie",
        "label": "Moldavie",
        "coords": [
          28.86,
          47.01
        ]
      }
    ],
    "points": [
      "Le 10e Conseil d'association UE-Moldavie s'est tenu à Bruxelles le 5 octobre 2026, présidé par la cheffe de la diplomatie européenne Kaja Kallas, face au Premier ministre moldave Vasile Tofan [1].",
      "L'UE a annoncé le versement de 157 millions d'euros au titre de son plan de croissance pour la Moldavie [2].",
      "Les deux parties ont salué l'ouverture récente des « clusters » 1 (fondamentaux) et 6 (relations extérieures) des négociations d'adhésion [2].",
      "L'UE a insisté sur la nécessité d'une justice indépendante, notamment via le contrôle (« vetting ») des juges et procureurs [2]."
    ],
    "why": [
      "Ce petit pays coincé entre la Roumanie et l'Ukraine avance pas à pas vers l'Union européenne : les négociations sont découpées en grands blocs thématiques (« clusters »), et deux d'entre eux viennent d'être ouverts [2]. Chaque bloc impose d'aligner les lois moldaves sur les règles européennes.",
      "L'argent européen est conditionné aux réformes : justice, lutte contre la corruption, administration [3]. Les discussions ont aussi porté sur la sécurité, la résilience énergétique du pays et son intégration progressive au marché intérieur européen [3]."
    ],
    "forMe": "Et moi, dans tout ça ? Si la Moldavie rejoint un jour l'UE, une partie du budget européen, auquel la France contribue largement, servira à financer son rattrapage. C'est aussi un enjeu de sécurité à la frontière orientale de l'Europe.",
    "figures": [
      {
        "value": "157 M€",
        "label": "Versement européen annoncé",
        "src": 2
      },
      {
        "value": "2",
        "label": "Blocs de négociation d'adhésion ouverts (1 et 6)",
        "src": 2
      },
      {
        "value": "10e",
        "label": "Conseil d'association UE-Moldavie",
        "src": 1
      }
    ],
    "dossiers": [],
    "sources": [
      {
        "short": "SEAE",
        "name": "EU High Representative Kaja Kallas chairs 10th EU–Moldova Association Council in Brussels (5 octobre 2026)",
        "url": "https://www.eeas.europa.eu/eeas/eu-high-representative-kaja-kallas-chairs-10th-eu-moldova-association-council-brussels_en"
      },
      {
        "short": "Commission européenne",
        "name": "The EU and Moldova reiterate their strong partnership and announce the disbursement of €157 million (5 octobre 2026)",
        "url": "https://enlargement.ec.europa.eu/news/european-union-and-moldova-reiterate-their-strong-partnership-and-announce-disbursement-eur157-2026-10-05_en"
      },
      {
        "short": "DevelopmentAid",
        "name": "EU disburses €157 million to Moldova under Growth Plan at 10th Association Council (octobre 2026)",
        "url": "https://www.developmentaid.org/news-stream/post/211176/eu-disburses-e157-million-to-moldova-under-growth-plan-at-10th-association-council"
      }
    ]
  },
  {
    "id": "2026-10-05-kirghizistan-sanctions",
    "date": "2026-10-05",
    "region": "Asie",
    "theme": "mix",
    "title": "Kirghizistan : Bichkek ferme des dizaines d'entreprises pour éviter les sanctions internationales",
    "summary": "Les autorités kirghizes ont engagé la liquidation de 16 sociétés soupçonnées de servir au contournement de sanctions, et les banques ont fermé les comptes de plus de 220 entreprises.",
    "geo": [
      {
        "name": "Bichkek, Kirghizistan",
        "label": "Kirghizistan",
        "coords": [
          74.59,
          42.87
        ]
      }
    ],
    "points": [
      "Le 2 octobre 2026, après l'examen d'environ 40 entreprises, les dossiers de 16 d'entre elles ont été transmis à la justice en vue de leur liquidation [1].",
      "La banque ABank a rompu ses relations avec environ 100 entreprises et Eldik Bank a bloqué les comptes d'environ 126 sociétés [1][2].",
      "Les autorités préparent une « liste noire » de personnes et d'entreprises présentant un risque élevé de sanctions [2].",
      "Le ministère de l'Économie a par ailleurs lancé la liquidation forcée d'environ 35 autres entités [3]."
    ],
    "why": [
      "Le but affiché est d'empêcher que le système bancaire kirghiz soit utilisé pour contourner des sanctions internationales [1]. Pour un petit pays très dépendant du commerce extérieur, être lui-même visé par des « sanctions secondaires » (des punitions contre ceux qui aident un pays sanctionné à commercer) pourrait couper ses banques du système financier mondial.",
      "La future liste noire doit permettre de surveiller les échanges et les partenaires commerciaux avant que les transactions n'aient lieu [2]. Les tribunaux doivent encore se prononcer sur les liquidations [1]."
    ],
    "forMe": "Et moi, dans tout ça ? Les sanctions décidées par l'Europe et les États-Unis ne valent que si elles ne sont pas contournées via des pays tiers. Ce qui se passe à Bichkek montre comment ces règles s'appliquent jusqu'en Asie centrale, et pourquoi les entreprises françaises doivent vérifier qui sont leurs clients finaux.",
    "figures": [
      {
        "value": "16",
        "label": "Entreprises envoyées devant la justice pour liquidation",
        "src": 1
      },
      {
        "value": "220+",
        "label": "Entreprises dont les comptes ont été fermés",
        "src": 2
      },
      {
        "value": "35",
        "label": "Autres entités en liquidation forcée",
        "src": 3
      }
    ],
    "dossiers": [
      "sanctions"
    ],
    "sources": [
      {
        "short": "24.kg",
        "name": "Sanctions risks: Operations of 16 companies terminated in Kyrgyzstan (octobre 2026)",
        "url": "https://24.kg/en/article/sanctions-risks-operations-of-16-companies-terminated-in-kyrgyzstan"
      },
      {
        "short": "Open.kg",
        "name": "In Kyrgyzstan, accounts of over 220 companies have been closed and a blacklist is being prepared (octobre 2026)",
        "url": "https://open.kg/en/news/economy/127226-v-kyrgyzstane-zakryli-scheta-svyshe-220-kompanij-i-gotovjat-chernyj-spisok.html"
      },
      {
        "short": "AKIpress",
        "name": "Kyrgyzstan initiates forced liquidation of 35 companies over high sanctions risks (octobre 2026)",
        "url": "https://akipress.com/news:923300:Kyrgyzstan_initiates_forced_liquidation_of_35_companies_over_high_sanctions_risks/"
      }
    ]
  },
  {
    "id": "2026-10-04-argentine-bessent-soutien",
    "date": "2026-10-04",
    "region": "Amériques",
    "theme": "mix",
    "title": "Argentine : Washington se dit prêt à aider de nouveau Milei, alors que l'économie ralentit",
    "summary": "Le secrétaire américain au Trésor, Scott Bessent, n'exclut pas un nouveau soutien financier à l'Argentine. Les marchés s'inquiètent d'une activité en recul et des lourdes échéances de dette de 2027.",
    "geo": [
      {
        "name": "Buenos Aires, Argentine",
        "label": "Argentine",
        "coords": [
          -58.38,
          -34.6
        ]
      }
    ],
    "points": [
      "Interrogé par le média Axios, Scott Bessent a affirmé que les États-Unis pourraient de nouveau soutenir financièrement l'Argentine si nécessaire, comme en octobre 2025, sans annoncer de montant ni de conditions [1].",
      "Le « risque pays », qui mesure la prime exigée par les investisseurs pour prêter à l'Argentine, a atteint 655 points le 2 octobre, son plus haut depuis dix mois, avant de redescendre à 573 points le 6 octobre [2].",
      "L'activité économique a reculé de 2,9 % en juillet par rapport à juin, sa plus forte baisse mensuelle depuis la pandémie de 2020 [3]."
    ],
    "why": [
      "Le président Javier Milei a fortement réduit l'inflation, mais l'économie peine à repartir et le pays doit rembourser beaucoup en 2027 : un soutien américain rassure les marchés. Les réserves brutes de la banque centrale atteignaient environ 48,65 milliards de dollars le 5 octobre, mais les réserves « nettes », une fois les dettes déduites, ne seraient que d'environ 11,9 milliards selon des cabinets privés [4].",
      "Pour Washington, l'Argentine est aussi un enjeu géopolitique : Scott Bessent estime que sa stabilisation a provoqué « un changement d'ère » en Amérique latine et présente Milei comme un grand allié des États-Unis [1]."
    ],
    "forMe": "Ce qui se joue en Argentine, c'est l'influence des États-Unis en Amérique du Sud face à la Chine. Pour toi, l'impact direct est faible, mais c'est un bon exemple de la façon dont le dollar et le Trésor américain servent aussi d'outils d'influence politique.",
    "figures": [
      {
        "value": "655 pts",
        "label": "risque pays au 2 octobre, plus haut en 10 mois",
        "src": 2
      },
      {
        "value": "-2,9 %",
        "label": "activité en juillet par rapport à juin",
        "src": 3
      },
      {
        "value": "48,65 Md$",
        "label": "réserves brutes de la banque centrale (5 oct.)",
        "src": 4
      }
    ],
    "dossiers": [
      "dollar"
    ],
    "sources": [
      {
        "short": "Infobae",
        "name": "Infobae, « El secretario del Tesoro de EE.UU. afirmó que en caso de ser necesario volvería a apoyar financieramente a la Argentina » (4 octobre 2026)",
        "url": "https://www.infobae.com/economia/2026/10/04/el-secretario-del-tesoro-de-eeuu-afirmo-que-en-caso-de-ser-necesario-volveria-a-apoyar-financieramente-a-la-argentina/"
      },
      {
        "short": "Infobae",
        "name": "Infobae, « El riesgo país argentino volvió a caer con fuerza ante una mejoría del ánimo inversor » (6 octobre 2026)",
        "url": "https://www.infobae.com/economia/2026/10/06/mercados-vuelve-a-caer-fuerte-el-riesgo-pais-argentino-ante-una-mejoria-del-animo-inversor/"
      },
      {
        "short": "Infobae",
        "name": "Infobae, « La actividad económica registró una caída de 2,9% en julio » (24 septembre 2026)",
        "url": "https://www.infobae.com/economia/2026/09/24/la-actividad-economica-registro-una-caida-de-29-en-julio/"
      },
      {
        "short": "El Argentino Diario",
        "name": "El Argentino Diario, « Riesgo país en máximos y reservas en duda » (6 octobre 2026)",
        "url": "https://elargentinodiario.com.ar/politica/gremiales/06/10/2026/riesgo-pais-en-maximos-y-reservas-en-duda-la-bazuca-de-caputo/"
      }
    ]
  },
  {
    "id": "2026-10-04-vietnam-croissance",
    "date": "2026-10-04",
    "region": "Asie",
    "theme": "eco",
    "title": "Vietnam : près de 10 % de croissance au 3e trimestre, du jamais-vu depuis quatre ans",
    "summary": "L'économie vietnamienne a progressé de 9,95 % sur un an entre juillet et septembre, portée par l'industrie, les exportations et les investissements étrangers. Hanoï vise au moins 10 % sur l'année.",
    "geo": [
      {
        "name": "Hanoï, Vietnam",
        "label": "Vietnam",
        "coords": [
          105.85,
          21.03
        ]
      }
    ],
    "points": [
      "Le PIB du Vietnam a augmenté de 9,95 % sur un an au troisième trimestre, au-dessus de la prévision médiane de 8,65 % des économistes interrogés par Bloomberg [1][2].",
      "Sur les neuf premiers mois, la croissance atteint 9,01 %, avec une industrie et une construction en hausse de 12,5 % au troisième trimestre [1][3].",
      "Les exportations de biens ont bondi de 24,5 % sur neuf mois, à 434,3 milliards de dollars, et les investissements étrangers enregistrés ont atteint 50,36 milliards de dollars (+76,4 %) [4]."
    ],
    "why": [
      "Le Vietnam profite du déplacement des usines hors de Chine : les investissements étrangers effectivement versés (21,07 milliards de dollars) sont au plus haut depuis cinq ans [4]. Pour atteindre l'objectif officiel d'au moins 10 % sur 2026, la croissance devra dépasser 10 % au quatrième trimestre [2].",
      "Ce succès a un revers : l'excédent commercial avec les États-Unis, premier marché du Vietnam, a grimpé de 23,8 % à 122,6 milliards de dollars, ce qui pourrait raviver les tensions alors que Washington mène des enquêtes commerciales (dites « Section 301 ») susceptibles de déboucher sur des sanctions douanières [5]."
    ],
    "forMe": "Regarde les étiquettes de tes vêtements, chaussures ou de ton téléphone : « Made in Vietnam » y est de plus en plus fréquent. La santé de l'économie vietnamienne et ses relations commerciales avec les États-Unis influencent donc les prix et la disponibilité de nombreux produits du quotidien en France.",
    "figures": [
      {
        "value": "+9,95 %",
        "label": "croissance du PIB au 3e trimestre 2026",
        "src": 1
      },
      {
        "value": "434,3 Md$",
        "label": "exportations sur neuf mois (+24,5 %)",
        "src": 4
      },
      {
        "value": "122,6 Md$",
        "label": "excédent commercial avec les États-Unis",
        "src": 5
      }
    ],
    "dossiers": [
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "VietnamPlus",
        "name": "VietnamPlus, « Vietnam posts GDP growth of 9.95% in Q3 » (octobre 2026)",
        "url": "https://en.vietnamplus.vn/vietnam-posts-gdp-growth-of-995-in-q3-post353039.vnp"
      },
      {
        "short": "Nation Thailand",
        "name": "The Nation Thailand, « Vietnam GDP growth hits 9.95% in Q3 2026 beating forecasts » (octobre 2026)",
        "url": "https://www.nationthailand.com/news/asean/40071822"
      },
      {
        "short": "VnExpress",
        "name": "VnExpress International, « GDP expands 9.95% in Q3 » (octobre 2026)",
        "url": "https://e.vnexpress.net/news/business/economy/gdp-expands-9-95-in-q3-5127935.html"
      },
      {
        "short": "Fibre2Fashion",
        "name": "Fibre2Fashion, « Vietnam's GDP grows 9.95% in Q3 as goods trade rises » (octobre 2026)",
        "url": "https://www.fibre2fashion.com/news/economics/vietnam-s-gdp-grows-9-95-in-q3-as-goods-trade-rises-313941-newsdetails.htm"
      },
      {
        "short": "Briefs",
        "name": "Briefs, « Vietnam GDP Soars 9.95% in Q3 » (octobre 2026)",
        "url": "https://www.briefs.co/news/vietnam-gdp-jumps-9-95-in-q3-as-exports-and-investment-roar/"
      }
    ]
  },
  {
    "id": "2026-10-04-soudan-camions-pam",
    "date": "2026-10-04",
    "region": "Afrique",
    "theme": "mix",
    "title": "Soudan : un chauffeur de l'ONU tué, les convois de nourriture pris pour cible au Kordofan",
    "summary": "Une frappe aérienne a touché deux camions d'aide alimentaire de l'ONU dans le Kordofan du Sud, tuant un chauffeur. Le même week-end, le Conseil des droits de l'homme de l'ONU a prolongé d'un an son enquête sur la guerre au Soudan.",
    "geo": [
      {
        "name": "Kadugli, Kordofan du Sud, Soudan",
        "label": "Kordofan du Sud",
        "coords": [
          29.72,
          11.01
        ]
      }
    ],
    "points": [
      "Le 3 octobre, une attaque aérienne a frappé deux camions sous contrat avec le Programme alimentaire mondial (PAM) entre Dilling et Kadugli, tuant un chauffeur ; le PAM n'a pas désigné d'auteur et demande une enquête impartiale [1].",
      "Selon l'ONU, 17 camions de nourriture ont été détruits et 8 chauffeurs tués dans des attaques contre des convois humanitaires au Soudan en deux ans ; la coordinatrice humanitaire Denise Brown a jugé l'attaque « scandaleuse » [2].",
      "Le 5 octobre, le Conseil des droits de l'homme de l'ONU a prolongé d'un an sa mission d'enquête sur le Soudan, par 28 voix pour, 10 contre et 9 abstentions [3][4]."
    ],
    "why": [
      "Le Kordofan est la région où la guerre entre l'armée soudanaise et les Forces de soutien rapide (FSR, un groupe paramilitaire) fait le plus peser la menace de la faim : la famine y a été confirmée à Kadugli par l'IPC, l'organisme de référence sur l'insécurité alimentaire [5]. Quand les camions sont attaqués, c'est l'unique ligne de ravitaillement de villes assiégées qui est menacée [2].",
      "Sur le plan diplomatique, le vote à Genève montre un soutien plus large à l'enquête de l'ONU, avec pour la première fois la Gambie, Maurice et le Malawi parmi les pays favorables, selon Human Rights Watch [4]. Le gouvernement soudanais s'y est opposé au nom de sa souveraineté [3]."
    ],
    "forMe": "Et moi, dans tout ça ? Le Soudan vit l'une des pires crises humanitaires du monde, mais on en parle très peu en France. Ce qui s'y joue — la sécurité des convois d'aide, l'enquête de l'ONU sur les crimes de guerre — conditionne aussi les départs de réfugiés vers les pays voisins et, au-delà, vers l'Europe. Suivre ces petites nouvelles, c'est comprendre pourquoi la crise dure.",
    "figures": [
      {
        "value": "17",
        "label": "camions de nourriture détruits en deux ans",
        "src": 2
      },
      {
        "value": "8",
        "label": "chauffeurs tués en deux ans dans des attaques de convois",
        "src": 2
      },
      {
        "value": "28-10-9",
        "label": "vote pour / contre / abstentions à Genève",
        "src": 3
      }
    ],
    "dossiers": [],
    "sources": [
      {
        "short": "PAM",
        "name": "Programme alimentaire mondial, Sudan : WFP Strongly Condemns Attack on Trucks in South Kordofan, Killing One Driver, via allAfrica (4 octobre 2026)",
        "url": "https://allafrica.com/stories/202610040063.html"
      },
      {
        "short": "ONU Info",
        "name": "ONU Info, Sudan : Driver killed in aerial attack on aid trucks in South Kordofan (octobre 2026)",
        "url": "https://news.un.org/en/story/2026/10/1168519"
      },
      {
        "short": "QNA",
        "name": "Qatar News Agency, Human Rights Council Condemns Sudan Conflict, Extends Fact-Finding Mission (6 octobre 2026)",
        "url": "https://qna.org.qa/en/News-Area/News/2026-10/6/human-rights-council-condemns-sudan-conflict-extends-fact-finding-mission"
      },
      {
        "short": "HRW",
        "name": "Human Rights Watch, Countries Demonstrate Record Support for UN Sudan Probe Renewal (7 octobre 2026)",
        "url": "https://www.hrw.org/news/2026/10/07/countries-demonstrate-record-support-for-un-sudan-probe-renewal"
      },
      {
        "short": "FAO",
        "name": "FAO, Famine conditions confirmed in Sudan's El Fasher and Kadugli",
        "url": "https://www.fao.org/newsroom/detail/famine-conditions-confirmed-in-sudan-fasher-and-kadugli-as-hunger-and-malnutrition-ease-where-conflict-subsides/en"
      }
    ]
  },
  {
    "id": "2026-10-04-sri-lanka-fmi",
    "date": "2026-10-04",
    "region": "Asie",
    "theme": "eco",
    "title": "Sri Lanka : accord avec le FMI pour un nouveau versement de 345 millions de dollars",
    "summary": "Trois ans après sa faillite, le Sri Lanka a obtenu un accord technique avec le FMI sur la septième revue de son programme d'aide, à condition de présenter un budget 2027 conforme.",
    "geo": [
      {
        "name": "Colombo, Sri Lanka",
        "label": "Sri Lanka",
        "coords": [
          79.86,
          6.93
        ]
      }
    ],
    "points": [
      "Le FMI a annoncé le 4 octobre 2026 un accord au niveau des services sur la septième revue du programme d'aide au Sri Lanka [1].",
      "Une fois validé par le conseil d'administration du FMI, il débloquera environ 345 millions de dollars, portant l'aide totale versée à environ 2,7 milliards de dollars [1].",
      "L'activité a progressé de 4,2 % au deuxième trimestre 2026, onzième trimestre consécutif de croissance solide, et l'inflation était de 8 % sur un an en septembre [1].",
      "Les cinquième et sixième revues avaient été approuvées ensemble le 27 mai 2026, après un report lié au cyclone Ditwah [2]."
    ],
    "why": [
      "Le FMI prête par tranches, chacune conditionnée à des réformes vérifiées lors de « revues ». Pour ce versement, Colombo doit présenter au Parlement un budget 2027 conforme au programme, et ses partenaires doivent confirmer les financements et les progrès de la restructuration de la dette [1].",
      "Le FMI juge l'économie résiliente, mais cite comme risque l'incertitude sur l'intensité et la durée de la guerre au Moyen-Orient [1], qui renchérit l'énergie importée par l'île."
    ],
    "forMe": "Et moi, dans tout ça ? Le Sri Lanka est une destination touristique prisée des Français et un fournisseur de thé et de textile. Son redressement montre aussi comment fonctionne le FMI, dont la France est l'un des principaux actionnaires.",
    "figures": [
      {
        "value": "345 M$",
        "label": "Tranche débloquée après validation du FMI",
        "src": 1
      },
      {
        "value": "+4,2 %",
        "label": "Croissance au 2e trimestre 2026",
        "src": 1
      },
      {
        "value": "8 %",
        "label": "Inflation sur un an en septembre",
        "src": 1
      }
    ],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "FMI",
        "name": "IMF Reaches Staff-Level Agreement on the Seventh Review under the EFF with Sri Lanka (4 octobre 2026)",
        "url": "https://www.imf.org/en/news/articles/2026/10/04/pr26318-sri-lanka-imf-reaches-sla-on-7th-review-under-the-eff"
      },
      {
        "short": "Business News",
        "name": "IMF Reaches 07th Review Agreement as Sri Lanka Moves Into Next Growth Phase (5 octobre 2026)",
        "url": "https://businessnews.lk/2026/10/05/sri-lanka-imf-seventh-review-agreement/"
      }
    ]
  },
  {
    "id": "2026-10-03-equateur-coupures-industrie",
    "date": "2026-10-03",
    "region": "Amériques",
    "theme": "eco",
    "title": "Équateur : plus de 9 000 entreprises privées d'électricité 48 heures d'affilée",
    "summary": "Pour éviter que ses barrages hydroélectriques ne se vident pendant la saison sèche, l'Équateur impose des coupures de courant de 48 heures aux entreprises. Les PME du froid et de l'alimentaire souffrent.",
    "geo": [
      {
        "name": "Quito, Équateur",
        "label": "Équateur",
        "coords": [
          -78.47,
          -0.18
        ]
      }
    ],
    "points": [
      "Plus de 9 000 entreprises équatoriennes subissent des coupures d'électricité de 48 heures pendant deux semaines [1].",
      "La mesure vise à préserver le niveau d'eau des réservoirs qui alimentent les centrales hydroélectriques, dans un contexte lié au phénomène El Niño [1].",
      "Le dispositif a démarré le 22 septembre avec des coupures de 24 heures, avant d'être porté à 48 heures en octobre [2]."
    ],
    "why": [
      "L'Équateur produit l'essentiel de son électricité grâce à l'eau des barrages : quand la pluie manque, le pays doit choisir entre couper les ménages ou l'industrie. Le gouvernement a choisi de faire porter l'effort sur les entreprises [1].",
      "Les plus touchées sont les petites et moyennes industries qui doivent garder leurs produits au froid, comme les laiteries ou les fabricants de glaces et de charcuterie, car elles n'ont pas de groupes électrogènes capables de remplacer tout le réseau [2]. La demande d'électricité a baissé d'environ 300 mégawatts, mais le grand réservoir de Mazar reste sous pression [3]."
    ],
    "forMe": "Des usines et chambres froides à l'arrêt peuvent perturber des produits exportés jusqu'en Europe. Cette crise rappelle surtout que le changement climatique fragilise aussi la production d'énergie « propre » comme l'hydroélectricité.",
    "figures": [
      {
        "value": "9 000+",
        "label": "entreprises concernées par les coupures",
        "src": 1
      },
      {
        "value": "48 h",
        "label": "durée de chaque coupure",
        "src": 1
      },
      {
        "value": "300 MW",
        "label": "baisse de la demande d'électricité",
        "src": 3
      }
    ],
    "dossiers": [],
    "sources": [
      {
        "short": "Infobae / EFE",
        "name": "Infobae (EFE), « Más de 9.000 empresas en Ecuador tendrán cortes de energía de 48 horas durante dos semanas » (3 octobre 2026)",
        "url": "https://www.infobae.com/america/agencias/2026/10/03/mas-de-9000-empresas-en-ecuador-tendran-cortes-de-energia-de-48-horas-durante-dos-semanas/"
      },
      {
        "short": "El Comercio",
        "name": "El Comercio, « Ecuador expande los cortes de electricidad para industrias programados desde octubre » (octobre 2026)",
        "url": "https://www.elcomercio.com/actualidad/negocios/ecuador-expande-los-cortes-de-electricidad-para-industrias-programados-desde-octubre/"
      },
      {
        "short": "Expreso",
        "name": "Expreso, « La demanda eléctrica de Ecuador bajó 300 MW, pero Mazar sigue bajo presión » (octobre 2026)",
        "url": "https://www.expreso.ec/economia-y-negocios/demanda-electrica-ecuador-300-mw-mazar-sigue-presion-298280.html"
      }
    ]
  }
];
