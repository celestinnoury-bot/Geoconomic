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
  },
  {
    "id": "2026-10-02-haiti-gangs-onu",
    "date": "2026-10-02",
    "region": "Amériques",
    "theme": "geo",
    "title": "Haïti : l'ONU alerte, les gangs « s'adaptent et s'étendent » malgré la force internationale",
    "summary": "Le Haut-Commissaire de l'ONU aux droits de l'homme, Volker Türk, a dressé un bilan très sombre de la violence des gangs en Haïti. La force internationale chargée de les combattre n'a qu'une fraction des effectifs prévus.",
    "geo": [
      {
        "name": "Port-au-Prince, Haïti",
        "label": "Haïti",
        "coords": [
          -72.34,
          18.54
        ]
      }
    ],
    "points": [
      "Selon Volker Türk, les gangs ont été en partie contenus dans la capitale Port-au-Prince, mais continuent de « s'adapter et de s'étendre », réapparaissent dans de nouvelles zones et se réarment sans cesse [1].",
      "Son bureau a recensé au moins 5 700 personnes tuées ou blessées entre le 1er janvier et le 11 septembre 2026, plus de 230 enlèvements et plus de 1 000 femmes et filles violées, des chiffres probablement sous-estimés [2].",
      "La Force de répression des gangs, mandatée par l'ONU, doit compter 5 500 personnes mais n'en a qu'environ 1 500 sur place [2]."
    ],
    "why": [
      "Haïti n'a ni président élu ni Parlement en fonction, et l'ONU estime que le pays reste loin des conditions nécessaires à des élections crédibles [3]. Tant que les gangs contrôlent des routes et des quartiers, l'État ne peut ni organiser un vote sûr, ni relancer l'économie.",
      "Volker Türk demande aux États de financer et d'équiper rapidement la force internationale, de maintenir et d'élargir les sanctions contre les chefs de gangs et leurs soutiens, et de couper le trafic d'armes vers Haïti [1]. Il s'inquiète aussi des violences commises par des « groupes d'autodéfense », qui auraient tué ou blessé environ 280 personnes cette année [2]."
    ],
    "forMe": "Haïti partage la mer des Caraïbes avec la Guadeloupe et la Martinique, et une diaspora haïtienne vit en France. Une crise qui dure, c'est plus de familles poussées à partir, y compris vers les territoires français de la région.",
    "figures": [
      {
        "value": "5 700",
        "label": "personnes tuées ou blessées (1er janv.–11 sept. 2026)",
        "src": 2
      },
      {
        "value": "1 500 / 5 500",
        "label": "effectifs déployés / prévus de la force anti-gangs",
        "src": 2
      },
      {
        "value": "230+",
        "label": "enlèvements recensés depuis janvier",
        "src": 2
      }
    ],
    "dossiers": [
      "sanctions"
    ],
    "sources": [
      {
        "short": "HCDH",
        "name": "Haut-Commissariat de l'ONU aux droits de l'homme, « High Commissioner Türk: We need all eyes on Haiti » (octobre 2026)",
        "url": "https://www.ohchr.org/en/statements-and-speeches/2026/10/high-commissioner-turk-we-need-all-eyes-haiti"
      },
      {
        "short": "Courthouse News / AFP",
        "name": "Courthouse News (AFP), « At least 5,700 killed, wounded in Haiti gang crisis this year: UN » (octobre 2026)",
        "url": "https://www.courthousenews.com/at-least-5700-killed-wounded-in-haiti-gang-crisis-this-year-un/"
      },
      {
        "short": "Caribbean National Weekly",
        "name": "Caribbean National Weekly, « UN rights chief warns Haiti remains far from conditions for credible elections » (octobre 2026)",
        "url": "https://www.caribbeannationalweekly.com/posts/un-rights-chief-warns-haiti-remains-far-from-conditions-for-credible-elections"
      }
    ]
  },
  {
    "id": "2026-10-02-taiwan-f16v",
    "date": "2026-10-02",
    "region": "Asie",
    "theme": "geo",
    "title": "Taïwan reçoit enfin ses premiers F-16V américains, avec des années de retard",
    "summary": "Les deux premiers des 66 chasseurs F-16V Block 70 commandés aux États-Unis ont atterri à Taïwan le 2 octobre. Une livraison prévue à l'origine pour 2023, et qui arrive dans un contexte de doutes sur le soutien américain.",
    "geo": [
      {
        "name": "Base aérienne de Chihhang, Taitung, Taïwan",
        "label": "Taïwan",
        "coords": [
          121.1,
          22.75
        ]
      }
    ],
    "points": [
      "Taïwan a reçu le 2 octobre les deux premiers de ses 66 F-16V Block 70, sur la base aérienne de Chihhang dans le comté de Taitung, avec environ un mois de retard sur le calendrier attendu [1][2].",
      "La vente, approuvée par Washington en 2019 pour environ 8 milliards de dollars, devait être livrée à partir de 2023, mais des problèmes techniques ont repoussé le calendrier [1].",
      "Le ministre de la Défense Wellington Koo a indiqué que plus de deux appareils seraient livrés cette année et que les dates suivantes seraient fixées avec les États-Unis [2]."
    ],
    "why": [
      "Ces avions de combat modernes doivent renforcer la capacité de Taïwan à dissuader une attaque de la Chine [3]. Pékin a réaffirmé son « opposition ferme » aux ventes d'armes américaines à Taïwan [3].",
      "Les appareils sont restés plus d'un mois à Hawaï, alors que Donald Trump préparait une rencontre avec Xi Jinping [2]. La livraison intervient alors qu'à Taïwan grandit l'inquiétude sur l'engagement de l'administration Trump à armer l'île, même si Washington affirme que sa politique n'a pas changé [4]."
    ],
    "forMe": "Taïwan est au cœur de la rivalité entre la Chine et les États-Unis, et l'île est un maillon clé de l'industrie des puces électroniques. Tout ce qui touche à sa sécurité compte donc pour tes appareils électroniques et pour la stabilité de l'économie mondiale.",
    "figures": [
      {
        "value": "2 sur 66",
        "label": "F-16V livrés à Taïwan",
        "src": 1
      },
      {
        "value": "~8 Md$",
        "label": "montant de la commande approuvée en 2019",
        "src": 1
      }
    ],
    "dossiers": [],
    "sources": [
      {
        "short": "Focus Taiwan",
        "name": "Focus Taiwan (CNA), « Taiwan receives first 2 F-16V Block 70s » (2 octobre 2026)",
        "url": "https://focustaiwan.tw/politics/202610020006"
      },
      {
        "short": "Taipei Times",
        "name": "Taipei Times, « Taiwan receives first 2 F-16V Block 70s » (3 octobre 2026)",
        "url": "https://www.taipeitimes.com/News/front/archives/2026/10/03/2003865308"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « US delivers F-16V fighter jets to Taiwan as island eyes threat from China » (2 octobre 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/2/us-delivers-f-16v-fighter-jets-to-taiwan-as-island-eyes-threat-from-china"
      },
      {
        "short": "Defense News",
        "name": "Defense News, « Taiwan's first two F-16V fighter jets arrive to bolster defenses against China » (2 octobre 2026)",
        "url": "https://www.defensenews.com/global/asia-pacific/2026/10/02/taiwans-first-two-f-16v-fighter-jets-arrive-to-bolster-defenses-against-china/"
      }
    ]
  },
  {
    "id": "2026-10-02-gaza-aide-financement",
    "date": "2026-10-02",
    "region": "Moyen-Orient",
    "theme": "mix",
    "title": "Gaza : faute d'argent, l'aide alimentaire va diminuer à l'approche de l'hiver",
    "summary": "Selon le dernier rapport du bureau humanitaire de l'ONU (OCHA), les repas chauds et les colis alimentaires distribués à Gaza vont nettement baisser à partir d'octobre, faute de financement. Près de 280 000 personnes vivent dans des camps exposés aux inondations.",
    "geo": [
      {
        "name": "Gaza, Territoires palestiniens",
        "label": "Gaza",
        "coords": [
          34.47,
          31.5
        ]
      }
    ],
    "points": [
      "Les organisations chargées de l'aide alimentaire préviennent que la production quotidienne de repas chauds et les distributions mensuelles de colis aux familles vont « nettement diminuer » à partir d'octobre, faute de financements [1].",
      "Environ 279 000 personnes vivent dans 400 sites de déplacés exposés aux inondations, et plus de 2 300 dans des bâtiments dangereux à démolir, soit plus de 13 % de la population de Gaza [1].",
      "Le manque d'argent et les restrictions à l'entrée d'huile moteur, de pièces détachées et d'équipements réduisent le dessalement de l'eau dans le sud de Gaza [1]."
    ],
    "why": [
      "À Gaza, l'aide humanitaire dépend de l'argent que les pays donateurs versent à l'ONU et aux ONG : or l'appel de fonds 2026 pour Gaza et la Cisjordanie (environ 4 milliards de dollars) n'était financé qu'à 40 % fin août, selon OCHA [2][3]. Près de 92 % de cette somme est destinée à Gaza [3].",
      "Le calendrier compte : la saison froide et pluvieuse approche, ce qui augmente le risque d'inondation dans des sites de déplacés déjà fragiles [1]. Moins de colis et moins d'eau dessalée, c'est une population encore plus dépendante d'une aide qui se réduit."
    ],
    "forMe": "Et moi, dans tout ça ? L'aide humanitaire est financée en partie par tes impôts, via la France et l'Union européenne, qui comptent parmi les donateurs de l'ONU. Quand les budgets d'aide se resserrent dans le monde, ce sont des crises comme celle de Gaza qui trinquent en premier : c'est un bon exemple de la façon dont des décisions budgétaires prises loin du terrain se traduisent concrètement en repas en moins.",
    "figures": [
      {
        "value": "279 000",
        "label": "personnes dans des sites de déplacés exposés aux inondations",
        "src": 1
      },
      {
        "value": "40 %",
        "label": "part financée de l'appel humanitaire 2026 (fin août)",
        "src": 2
      },
      {
        "value": "~4 Md$",
        "label": "montant demandé par l'ONU pour Gaza et la Cisjordanie en 2026",
        "src": 3
      }
    ],
    "dossiers": [],
    "sources": [
      {
        "short": "OCHA",
        "name": "OCHA (bureau humanitaire de l'ONU), oPt : Humanitarian Situation Report (2 octobre 2026)",
        "url": "https://www.ochaopt.org/content/humanitarian-situation-report-2-october-2026"
      },
      {
        "short": "OCHA",
        "name": "OCHA, oPt : Humanitarian Situation Report (28 août 2026)",
        "url": "https://www.unocha.org/publications/report/occupied-palestinian-territory/opt-humanitarian-situation-report-28-august-2026"
      },
      {
        "short": "ONU",
        "name": "ONU (UNISPAL), OCHA : la communauté humanitaire lance un appel de 4 milliards de dollars pour Gaza et la Cisjordanie (décembre 2025)",
        "url": "https://www.un.org/unispal/document/ocha-humanitarian-community-launches-us4-billion-flash-appeal-for-gaza-and-the-west-bank/"
      }
    ]
  },
  {
    "id": "2026-10-01-chili-cuivre-production",
    "date": "2026-10-01",
    "region": "Amériques",
    "theme": "eco",
    "title": "Chili : la production de cuivre tombe à son plus bas niveau depuis plus de 15 ans",
    "summary": "Le Chili, géant du cuivre, a extrait en août sa plus faible quantité mensuelle depuis 2011. Des menaces de grève dans de grandes mines pourraient aggraver la situation.",
    "geo": [
      {
        "name": "Santiago, Chili",
        "label": "Chili",
        "coords": [
          -70.67,
          -33.45
        ]
      }
    ],
    "points": [
      "La production chilienne de cuivre a chuté de 12,8 % sur un an en août, à environ 369 500 tonnes, son plus bas niveau mensuel depuis plus de 15 ans [1].",
      "Les tempêtes de l'hiver austral, des perturbations dans les ports et une teneur en minerai plus faible dans plusieurs mines expliquent ce recul [1].",
      "Des syndicats de la mine de Centinela (groupe Antofagasta) ont rejeté l'offre de la direction et des superviseurs d'Escondida (BHP), plus grande mine de cuivre du monde, ont voté en faveur d'une grève [2][3]."
    ],
    "why": [
      "Le cuivre est le premier produit d'exportation du Chili et une source majeure de recettes pour l'État : moins de tonnes extraites, c'est moins d'argent public. Une grève à Centinela pourrait encore réduire l'offre [2].",
      "Sur les marchés, la tonne de cuivre se maintenait autour de 14 417 dollars à Londres, soutenue par ces difficultés chiliennes [3]. Le cuivre est indispensable aux réseaux électriques, aux voitures électriques et aux centres de données."
    ],
    "forMe": "Le cuivre est partout : câbles, moteurs, éoliennes, voitures électriques. Quand le Chili produit moins, les prix montent, et à terme cela peut renchérir les travaux électriques, l'électroménager ou les équipements pour la transition énergétique en France.",
    "figures": [
      {
        "value": "-12,8 %",
        "label": "production de cuivre en août sur un an",
        "src": 1
      },
      {
        "value": "369 500 t",
        "label": "cuivre extrait en août 2026",
        "src": 1
      },
      {
        "value": "14 417 $",
        "label": "prix de la tonne de cuivre à Londres (1er oct.)",
        "src": 3
      }
    ],
    "dossiers": [],
    "sources": [
      {
        "short": "Mining.com.au",
        "name": "Mining.com.au, « Chile's monthly copper output sinks to 15-year low » (octobre 2026)",
        "url": "https://mining.com.au/chiles-monthly-copper-output-sinks-to-15-year-low/"
      },
      {
        "short": "Latin Times",
        "name": "Latin Times, « Chile's Copper Hits 15-Year Low — and a Mine Strike Could Make It Worse » (octobre 2026)",
        "url": "https://www.latintimes.com/chiles-copper-hits-15-year-low-mine-strike-could-make-it-worse-599774"
      },
      {
        "short": "Rio Times",
        "name": "The Rio Times, « Copper Steady at US$14,417 as Chile Output Hits 15-Year Low » (1er octobre 2026)",
        "url": "https://www.riotimesonline.com/copper-markets-latam-thursday-october-1-2026/"
      }
    ]
  },
  {
    "id": "2026-10-01-chine-carburants",
    "date": "2026-10-01",
    "region": "Asie",
    "theme": "eco",
    "title": "Chine : les raffineurs gèlent leurs exportations de carburants en octobre",
    "summary": "Selon des sources citées par Reuters, les grands raffineurs chinois ont suspendu presque toutes leurs exportations d'essence, de diesel et de kérosène pour octobre, le temps de reconstituer les stocks du pays. Une mauvaise nouvelle pour un marché mondial du diesel déjà très tendu.",
    "geo": [
      {
        "name": "Zhoushan, Zhejiang, Chine",
        "label": "Zhejiang",
        "coords": [
          122.2,
          30.0
        ]
      }
    ],
    "points": [
      "Les raffineurs chinois ont suspendu leurs exportations de produits pétroliers hors Hong Kong et Macao jusqu'à nouvel ordre de Pékin, après la « Golden Week » qui s'achevait le 7 octobre [1].",
      "PetroChina, géant public, a annulé plusieurs cargaisons d'essence et de kérosène prévues en octobre, et le raffineur privé Zhejiang Petrochemical n'a programmé aucune expédition pendant la semaine fériée [1].",
      "Pékin avait restreint ces exportations dès mars, après le déclenchement de la guerre en Iran qui a perturbé l'approvisionnement en brut du Moyen-Orient, avant de les assouplir en juillet puis de les gérer mois par mois [1][2]."
    ],
    "why": [
      "La Chine fait passer son marché intérieur avant ses clients étrangers : selon le cabinet Kpler, ses stocks commerciaux de diesel sont environ 20 millions de barils sous le niveau visé par Pékin, et ceux d'essence environ 9 millions de barils en dessous [2]. Les autorités doivent examiner les stocks et le rythme des raffineries avant de décider d'une reprise [1].",
      "Selon les analystes, ce retrait risque d'aggraver la pénurie de diesel en Asie et au-delà, alors que les prix mondiaux atteignent des records [2]. La décision n'a toutefois pas été annoncée officiellement par Pékin et repose sur des sources anonymes [1]."
    ],
    "forMe": "Le diesel est un marché mondial : quand un gros vendeur comme la Chine ferme le robinet, les acheteurs asiatiques se tournent vers d'autres fournisseurs, notamment ceux qui livrent aussi l'Europe. Résultat possible : un gazole qui reste cher à la pompe en France, et des coûts de transport (camions, livraisons) qui se répercutent sur les prix.",
    "figures": [
      {
        "value": "~20 millions",
        "label": "barils de diesel manquants dans les stocks chinois (estimation Kpler)",
        "src": 2
      },
      {
        "value": "~9 millions",
        "label": "barils d'essence manquants dans les stocks chinois",
        "src": 2
      }
    ],
    "dossiers": [],
    "sources": [
      {
        "short": "Reuters / Business Recorder",
        "name": "Business Recorder (Reuters), « Chinese refiners suspend Oct fuel exports, PetroChina cancels cargoes, sources say » (1er octobre 2026)",
        "url": "https://www.brecorder.com/news/40442157/chinese-refiners-suspend-oct-fuel-exports-petrochina-cancels-cargoes-sources-say"
      },
      {
        "short": "Oilprice",
        "name": "Oilprice.com, « China Halts October Fuel Exports as Global Diesel Crunch Deepens » (octobre 2026)",
        "url": "https://oilprice.com/Latest-Energy-News/World-News/China-Halts-October-Fuel-Exports-as-Global-Diesel-Crunch-Deepens.html"
      }
    ]
  },
  {
    "id": "2026-10-01-ethiopie-erythree-rupture",
    "date": "2026-10-01",
    "region": "Afrique",
    "theme": "geo",
    "title": "Éthiopie-Érythrée : rupture diplomatique en pleine reprise des combats au Tigré",
    "summary": "L'Érythrée a rompu ses relations diplomatiques avec l'Éthiopie, qui venait d'expulser ses diplomates. En parallèle, l'armée éthiopienne a repris Mekele, capitale du Tigré.",
    "geo": [
      {
        "name": "Asmara, Érythrée",
        "label": "Érythrée",
        "coords": [
          38.93,
          15.32
        ]
      },
      {
        "name": "Mekele, Tigré, Éthiopie",
        "label": "Tigré",
        "coords": [
          39.47,
          13.5
        ]
      }
    ],
    "points": [
      "L'Éthiopie a déclaré « persona non grata » 10 diplomates érythréens en poste à Addis-Abeba et leur a donné 48 heures pour partir, en accusant l'Érythrée d'« actes d'hostilité » [1].",
      "L'Érythrée a répondu en rompant toutes ses relations diplomatiques, et accuse l'Éthiopie de vouloir s'emparer d'un accès à la mer Rouge [1].",
      "Le 4 octobre, les forces gouvernementales éthiopiennes ont repris Mekele, la capitale du Tigré, après le retrait du Front de libération du peuple du Tigré (TPLF) [2]."
    ],
    "why": [
      "Cette rupture efface le rapprochement de 2018 entre les deux pays, qui avait rétabli les liens après la guerre frontalière de 1998-2000 [1]. Elle intervient alors que les combats ont repris fin septembre au Tigré, où le TPLF s'était emparé des aéroports de Mekele, Aksoum et Shire [1].",
      "Les États-Unis ont averti le 3 octobre que la Corne de l'Afrique « ne peut pas supporter un nouveau conflit militaire et une nouvelle crise humanitaire » et appelé les deux pays à revenir au cadre de paix de 2018 [3]. Les accusations sont réciproques : l'Éthiopie reproche à l'Érythrée de soutenir une nouvelle alliance rebelle, ce qu'Asmara dément, tandis que l'Érythrée accuse l'Éthiopie d'armer des opposants érythréens [1]."
    ],
    "forMe": "Et moi, dans tout ça ? La mer Rouge est l'une des routes maritimes les plus importantes du monde : une partie des marchandises entre l'Asie et l'Europe passe au large de l'Érythrée. Une guerre dans la région pourrait encore perturber ce trafic, avec à la clé des délais et des coûts de transport plus élevés pour ce que tu achètes.",
    "figures": [
      {
        "value": "10",
        "label": "diplomates érythréens expulsés d'Éthiopie",
        "src": 1
      },
      {
        "value": "48 h",
        "label": "délai donné pour quitter le pays",
        "src": 1
      }
    ],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, Eritrea severs diplomatic ties with Ethiopia in tit-for-tat move (1er octobre 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/1/eritrea-severs-diplomatic-ties-with-ethiopia-in-tit-for-tat-move"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, Ethiopian government forces seize Tigray capital Mekelle as TPLF withdraws (4 octobre 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/4/government-forces-seize-capital-of-ethiopias-tigray-region-from-rebels"
      },
      {
        "short": "Département d'État",
        "name": "Département d'État américain, U.S. Statement on Increased Tensions Between Ethiopia and Eritrea (octobre 2026)",
        "url": "https://www.state.gov/releases/office-of-the-spokesman/2026/10/u-s-statement-on-increased-tensions-between-ethiopia-and-eritrea"
      }
    ]
  },
  {
    "id": "2026-10-01-serbie-nis-sanctions",
    "date": "2026-10-01",
    "region": "Europe",
    "theme": "eco",
    "title": "Serbie : la seule raffinerie du pays obtient un nouveau sursis d'un mois",
    "summary": "Washington a prolongé jusqu'au 30 octobre la licence qui permet à NIS, compagnie pétrolière serbe à capitaux russes, de continuer à fonctionner malgré les sanctions. Le hongrois MOL négocie toujours le rachat de la part russe.",
    "geo": [
      {
        "name": "Pančevo, Serbie",
        "label": "Serbie",
        "coords": [
          20.64,
          44.87
        ]
      }
    ],
    "points": [
      "Le Trésor américain (OFAC) a prolongé jusqu'au 30 octobre 2026 la licence d'exploitation de NIS, ce qui permet à la raffinerie de Pančevo de continuer à tourner, selon la ministre serbe de l'Énergie Dubravka Djedovic Handanovic [1].",
      "Le 30 septembre, le groupe hongrois MOL a reçu une licence pour poursuivre jusqu'au 30 octobre les négociations sur le rachat de la participation majoritaire de NIS [2].",
      "MOL négocie avec Gazprom Neft pour acquérir sa part de 56,15 % ; l'État serbe détient 29,9 % de l'entreprise [2][3]."
    ],
    "why": [
      "Les sanctions américaines visent NIS parce qu'elle est contrôlée par des groupes russes ; elles sont entrées en vigueur en octobre 2025 et la raffinerie avait dû s'arrêter fin novembre 2025 faute de pétrole brut [3]. Depuis, la Serbie vit au rythme de licences de courte durée accordées par Washington [3].",
      "L'enjeu est simple : Pančevo est la seule raffinerie de Serbie [1]. Tant que la part russe n'est pas vendue à un acheteur accepté par les États-Unis, l'approvisionnement en carburant du pays dépend d'une prolongation renouvelée chaque mois [2]."
    ],
    "forMe": "Et moi, dans tout ça ? Ce feuilleton montre comment les sanctions contre la Russie touchent aussi des pays tiers, ici un candidat à l'Union européenne. Si tu voyages dans les Balkans, c'est aussi ce qui se joue derrière le prix du plein en Serbie.",
    "figures": [
      {
        "value": "30 oct.",
        "label": "nouvelle date limite de la licence américaine",
        "src": 1
      },
      {
        "value": "56,15 %",
        "label": "part de Gazprom Neft que MOL veut racheter",
        "src": 2
      },
      {
        "value": "29,9 %",
        "label": "part détenue par l'État serbe",
        "src": 3
      }
    ],
    "dossiers": [
      "sanctions"
    ],
    "sources": [
      {
        "short": "TASS",
        "name": "TASS, US extends license for Serbia's NIS until October 30 — Serbian Energy Ministry (octobre 2026)",
        "url": "https://tass.com/economy/2195305"
      },
      {
        "short": "EWB",
        "name": "European Western Balkans, MOL receives a new license extension to continue talks on acquisition of Russian stake in NIS (1er octobre 2026)",
        "url": "https://europeanwesternbalkans.com/2026/10/01/mol-receives-a-new-license-extension-to-continue-talks-on-acquisition-of-russian-stake-in-nis/"
      },
      {
        "short": "bne IntelliNews",
        "name": "bne IntelliNews, US sanctions on Serbian oil company NIS take effect",
        "url": "https://www.intellinews.com/us-sanctions-on-serbian-oil-company-nis-take-effect-405546/"
      }
    ]
  },
  {
    "id": "2026-10-01-armenie-budget-2027",
    "date": "2026-10-01",
    "region": "Europe",
    "theme": "eco",
    "title": "Arménie : un budget 2027 en déficit pour viser 6 % de croissance par an",
    "summary": "Le gouvernement arménien a adopté son projet de budget 2027, avec un déficit financé par l'emprunt. Le Premier ministre vise une croissance moyenne de 6 % par an sur cinq ans.",
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
    "points": [
      "Le 1er octobre, le gouvernement a approuvé le projet de budget 2027, qui prévoit un déficit de 468,2 milliards de drams ; il doit encore être voté par le Parlement [1].",
      "Le projet table sur une croissance de 5,8 % en 2027 [2].",
      "Le 6 octobre, le Premier ministre Nikol Pachinian a fixé l'objectif d'une croissance moyenne de 6 % par an pendant les cinq prochaines années [3]."
    ],
    "why": [
      "Le ministre des Finances Vahe Hovhannisyan assure que la dette publique restera sous 50 % du PIB à moyen terme ; elle atteint 13,9 milliards de dollars [4]. Le budget prévoit de financer le déficit par l'emprunt, avec une dette autour de 47 % du PIB en 2027-2028 [1].",
      "Une partie de l'optimisme arménien repose sur la « route Trump » (TRIPP), un projet de corridor de transport entre l'Azerbaïdjan et son enclave du Nakhitchevan à travers le sud de l'Arménie. Mais aucun chantier n'a commencé : les études de faisabilité sont en cours et les grands contrats ne sont pas attendus avant fin 2026 ou début 2027 [5]."
    ],
    "forMe": "Et moi, dans tout ça ? L'Arménie, petit pays du Caucase sans accès à la mer, cherche à devenir un lieu de passage pour le commerce entre l'Asie et l'Europe. Si ces nouvelles routes voient le jour, elles pourraient un jour diversifier les chemins par lesquels arrivent les marchandises jusqu'en Europe.",
    "figures": [
      {
        "value": "468,2 Md drams",
        "label": "déficit prévu dans le budget 2027",
        "src": 1
      },
      {
        "value": "5,8 %",
        "label": "croissance prévue en 2027",
        "src": 2
      },
      {
        "value": "< 50 %",
        "label": "dette publique visée (en % du PIB)",
        "src": 4
      }
    ],
    "dossiers": [],
    "sources": [
      {
        "short": "Armenpress",
        "name": "Armenpress, Armenian government approves draft 2027 state budget (1er octobre 2026)",
        "url": "https://armenpress.am/en/article/1261743"
      },
      {
        "short": "PAN.am",
        "name": "PAN.am, Armenia expects 5.8% growth in 2027 budget draft (octobre 2026)",
        "url": "https://www.pan.am/en/625807"
      },
      {
        "short": "ArmBanks",
        "name": "ArmBanks.am, Armenia targets 6% annual GDP growth (6 octobre 2026)",
        "url": "https://armbanks.am/en/2026/10/06/280884/"
      },
      {
        "short": "ArmBanks",
        "name": "ArmBanks.am, Armenia's public debt to remain below 50% of GDP in the medium term (7 octobre 2026)",
        "url": "https://armbanks.am/en/2026/10/07/280984/"
      },
      {
        "short": "RFE/RL",
        "name": "Radio Free Europe/Radio Liberty, US Pushes To Turn Armenia-Azerbaijan Transit Deal Into Investment Opportunity (septembre 2026)",
        "url": "https://www.rferl.org/a/tripp-armenia-azerbaijan-us-investment-transit-corridor/33863442.html"
      }
    ]
  }
];
