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
    "id": "2026-10-22-arabie-saoudite-diplomates-americains-partent",
    "date": "2026-10-22",
    "region": "Moyen-Orient",
    "theme": "geo",
    "geo": [
      {
        "name": "Riyad, Arabie saoudite",
        "label": "Riyad",
        "coords": [
          46.68,
          24.71
        ]
      }
    ],
    "title": "Les États-Unis font partir leurs diplomates non essentiels d'Arabie saoudite, sous les frappes des Houthis",
    "summary": "Washington ordonne aux employés non urgents de son gouvernement et à leurs familles de quitter le royaume. Les attaques des Houthis (rebelles du Yémen) touchent des aéroports et un champ pétrolier.",
    "points": [
      "Le Département d'État a ordonné le 21 octobre le départ des employés non urgents du gouvernement américain et de leurs familles en Arabie saoudite, uniquement dans ce pays [1][3].",
      "Selon Reuters, l'ordre suit des attaques : au moins un mort et huit blessés à l'aéroport civil de Dammam, et deux morts dans une attaque de drone sur un champ pétrolier ; plus tôt ce mois-ci, une frappe sur l'aéroport de Riyad avait fait 12 morts et plus de 300 blessés [1][2].",
      "Quatre responsables américains disent que les représentations d'autres pays du Golfe vont aussi demander à des familles de partir [1]. Les employés américains doivent demander une autorisation spéciale pour utiliser un aéroport du pays [3]."
    ],
    "why": [
      "La première phrase à retenir : quand un pays retire ses diplomates, il dit que la situation de sécurité est pire que prévu, y compris dans un allié proche et grand producteur de pétrole [1][2].",
      "L'ambassade tournait déjà avec peu de monde depuis des mois, et l'armée américaine réduit discrètement sa présence dans la région, selon CBS [2][4]. Pour l'économie, un Golfe plus risqué veut dire des assurances plus chères et un pétrole plus nerveux."
    ],
    "forMe": "Le Golfe fournit une grande part du pétrole du monde. Si les voyages, les aéroports ou les champs pétroliers y sont menacés, le prix de l'essence peut remonter même en France.",
    "figures": [
      {
        "value": "12",
        "label": "morts lors de la frappe de début octobre sur l'aéroport de Riyad (plus de 300 blessés)",
        "src": 2
      },
      {
        "value": "8",
        "label": "blessés à l'aéroport de Dammam, avec au moins un mort",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "ABC News",
        "name": "ABC News (Australie), « US orders embassy staff, families to leave Saudi Arabia amid Houthi strikes » (22 oct. 2026)",
        "url": "https://www.abc.net.au/news/2026-10-22/us-diplomats-to-leave-saudi-arabia-amid-houthi-strikes/107295684"
      },
      {
        "short": "CBS News",
        "name": "CBS News, « U.S. ordering some government staff to depart Saudi Arabia, reducing military footprint in Middle East » (oct. 2026)",
        "url": "https://www.cbsnews.com/news/us-saudi-arabia-ordered-departure-houthis/"
      },
      {
        "short": "Washington Times",
        "name": "The Washington Times, « Non-essential U.S. personnel, families told to leave Saudi Arabia amid growing Houthi strikes » (21 oct. 2026)",
        "url": "https://www.washingtontimes.com/news/2026/oct/21/non-essential-us-personnel-families-told-leave-saudi-arabia-amid/"
      },
      {
        "short": "NewsNation",
        "name": "NewsNation, « US orders diplomats to leave Saudi Arabia » (oct. 2026)",
        "url": "https://www.newsnationnow.com/world/us-orders-diplomats-leave-saudi-arabia/"
      },
      {
        "short": "Al-Monitor (Reuters)",
        "name": "Al-Monitor (dépêche Reuters), « Saudi says it intercepted Houthi missiles fired south, test years-long truce » (juil. 2026)",
        "url": "https://www.al-monitor.com/originals/2026/07/saudi-says-it-intercepted-houthi-missiles-fired-south-test-years-long-truce"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Yemen fighting expands as Houthis attack Saudi airport: What to know » (11 oct. 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/11/yemen-fighting-expands-as-houthis-attack-saudi-airport-what-to-know"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Saudi Arabia says 12 killed, 300 wounded in Houthi attack on Riyadh airport » (10 oct. 2026)",
        "url": "https://www.aljazeera.com/amp/news/2026/10/10/attack-on-airport-in-saudi-capital-riyadh-leaves-several-injured"
      },
      {
        "short": "Département d'État",
        "name": "U.S. Department of State, Foreign Affairs Manual, 3 FAM 3770 (départs autorisés et ordonnés)",
        "url": "https://fam.state.gov/fam/03fam/03fam3770.html"
      },
      {
        "short": "US Navy",
        "name": "U.S. Naval Forces Central Command, fiche « Departure » (allocations en cas de départ autorisé ou ordonné)",
        "url": "https://www.cusnc.navy.mil/Portals/17/Departure%20Flyer%20%2811%20x%208_5%20in%29.pdf"
      },
      {
        "short": "The National",
        "name": "The National, « From fragile truce to new Houthi threats: how Yemen crisis reignited » (13 juil. 2026)",
        "url": "https://www.thenationalnews.com/news/mena/2026/07/13/from-fragile-truce-to-new-houthi-threats-how-yemen-crisis-reignited/"
      },
      {
        "short": "Hürriyet Daily News",
        "name": "Hürriyet Daily News, « Saudi Arabia faces further Houthi attacks after calls for halt » (oct. 2026)",
        "url": "https://www.hurriyetdailynews.com/saudi-arabia-faces-further-houthi-attacks-after-calls-for-halt-228002"
      }
    ],
    "deep": {
      "context": {
        "title": "Quatre ans de trêve, puis la rechute",
        "paragraphs": [
          "Depuis le printemps 2022, une trêve informelle tenait entre l'Arabie saoudite et les Houthis, après des années de guerre au Yémen et des attaques houthies contre des installations énergétiques saoudiennes [5]. Le 13 juillet 2026, les Houthis ont tiré des missiles vers l'aéroport d'Abha, dans le sud du royaume, en accusant Riyad d'avoir bombardé un aéroport qu'ils contrôlent. C'était la première attaque revendiquée contre le royaume depuis le début de la trêve [5].",
          "Le contexte s'était déjà tendu au sud du Yémen : fin 2025, un mouvement séparatiste soutenu par les Émirats arabes unis a pris le contrôle d'une grande partie du sud du pays [5]. En janvier 2026, les Émirats ont mis fin à leur présence antiterroriste au Yémen après une frappe saoudienne sur des véhicules de leurs forces [10]. Les deux alliés d'hier ne jouent donc plus la même partie.",
          "L'escalade a culminé le 10 octobre : la frappe sur l'aéroport King Khalid de Riyad était la troisième de la semaine contre cet aéroport. Parmi les 12 morts figuraient quatre Saoudiens et des victimes de sept autres nationalités, dont un Américain [7]. La coalition menée par Riyad a parlé de crime de guerre ; les Houthis, eux, n'ont pas revendiqué cette frappe [6]."
        ]
      },
      "explainer": {
        "title": "« Personnel non essentiel » : ce que dit vraiment l'ordre",
        "text": "Le Département d'État a deux crans avant la fermeture d'une ambassade. Le premier, le « départ autorisé », est volontaire : les employés et leurs familles peuvent partir aux frais de l'État, mais ceux qui le veulent restent [8]. Le second, choisi ici, est le « départ ordonné » : il est obligatoire et sert à réduire le nombre d'Américains présents sur place [8]. Les familles reçoivent alors des aides pour se loger et vivre ailleurs le temps de la crise [9]. L'ambassade, elle, reste ouverte : seuls les postes jugés indispensables (sécurité, consulat d'urgence, direction) restent pourvus. Passer d'un cran à l'autre est donc un signal : Washington juge que le risque ne se limite plus à quelques incidents."
      },
      "watch": {
        "title": "Ce qui peut se passer ensuite",
        "items": [
          {
            "when": "Dans les prochains jours",
            "what": "Selon quatre responsables américains, d'autres représentations dans le Golfe vont aussi demander à des familles de partir : la mesure pourrait s'étendre au-delà du royaume [1]."
          },
          {
            "when": "La riposte saoudienne",
            "what": "Après la frappe du 10 octobre, la coalition a promis de répondre « fermement » [7]. Une riposte d'ampleur pourrait relancer les tirs vers les villes saoudiennes."
          },
          {
            "when": "Les aéroports hors du conflit ?",
            "what": "Les Houthis se disent prêts à des mesures réciproques pour tenir les aéroports, les ports et les sites humanitaires à l'écart des combats [7]. Un accord limité de ce type serait un premier pas vers une désescalade."
          },
          {
            "when": "Les sites pétroliers",
            "what": "Les Houthis affirment avoir visé deux installations de Saudi Aramco, dont le complexe de Khurais au sud-est de Riyad ; ces affirmations n'ont pas été vérifiées [11]. Une attaque confirmée sur le pétrole serait suivie de près par les marchés."
          }
        ]
      }
    }
  },
  {
    "id": "2026-10-22-liban-qatar-centrales-electriques-gnl",
    "date": "2026-10-22",
    "region": "Moyen-Orient",
    "theme": "mix",
    "geo": [
      {
        "name": "Beyrouth, Liban",
        "label": "Liban",
        "coords": [
          35.5,
          33.89
        ]
      }
    ],
    "title": "Le Qatar propose au Liban deux centrales électriques et vingt ans de gaz pour sortir de ses coupures de courant",
    "summary": "Un projet de plan vu par Reuters prévoit deux centrales construites en trois ans. Rien n'est encore signé : les deux gouvernements doivent l'approuver.",
    "points": [
      "Le projet, vu par Reuters, prévoit que le Qatar construise deux centrales à gaz, à Deir Ammar (nord) et à Zahrani (sud), de 825 mégawatts chacune, en trois ans [1][2].",
      "QatarEnergy fournirait le gaz naturel liquéfié pendant 20 ans, par un navire-terminal flottant et par le gazoduc arabe qui passe par la Syrie. Le plan ajoute 800 MW de solaire et 440 MW d'éolien [1][2].",
      "Le financement viendrait de capitaux privés et non de l'argent public libanais ; les paiements restent à négocier. Le Premier ministre Nawaf Salam veut présenter le plan au gouvernement bientôt [1][3]."
    ],
    "why": [
      "La première phrase à retenir : le Liban, ruiné et souvent dans le noir, pourrait voir son électricité financée par le Qatar plutôt que par son État [1][3].",
      "C'est un projet de plan, pas un contrat : il doit être approuvé par Beyrouth et Doha, et les plans électriques libanais ont souvent buté sur les tarifs et la gestion de la compagnie publique [1]. La Banque mondiale prévoit que l'économie libanaise recule de 6,4 % cette année [4]."
    ],
    "forMe": "Quand un pays n'a pas d'électricité fiable, ses entreprises ferment et ses habitants partent. Le gaz du Qatar qui passe par la Syrie montre aussi que les routes de l'énergie se redessinent autour du détroit d'Ormuz.",
    "figures": [
      {
        "value": "2 × 825 MW",
        "label": "deux centrales à gaz prévues en trois ans",
        "src": 1
      },
      {
        "value": "20 ans",
        "label": "durée du contrat de gaz naturel liquéfié proposé par QatarEnergy",
        "src": 2
      },
      {
        "value": "−6,4 %",
        "label": "recul de l'économie libanaise prévu cette année par la Banque mondiale",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Devdiscourse (Reuters)",
        "name": "Devdiscourse (dépêche Reuters), « EXCLUSIVE-Qatari electricity lifeline for Lebanon includes two power plants, LNG supply deal » (oct. 2026)",
        "url": "https://www.devdiscourse.com/article/international/3994809-exclusive-qatari-electricity-lifeline-for-lebanon-includes-two-power-plantslng-supply-deal"
      },
      {
        "short": "OilPrice",
        "name": "OilPrice.com, « Qatar Offers Lebanon 2 Gas Plants and 20 Years of LNG Piped Through Syria » (oct. 2026)",
        "url": "https://oilprice.com/Latest-Energy-News/World-News/Qatar-Offers-Lebanon-2-Gas-Plants-and-20-Years-of-LNG-Piped-Through-Syria.html"
      },
      {
        "short": "Modern Diplomacy",
        "name": "Modern Diplomacy, « Qatar Offers Lebanon Energy Lifeline With Two Power Plants and LNG Supply Deal » (19 oct. 2026)",
        "url": "https://moderndiplomacy.eu/2026/10/19/qatar-offers-lebanon-energy-lifeline-with-two-power-plants-and-lng-supply-deal/"
      },
      {
        "short": "The National",
        "name": "The National, « World Bank says Middle East economy to contract 2.1% in 2026 on Iran war » (6 oct. 2026)",
        "url": "https://www.thenationalnews.com/business/economy/2026/10/06/world-bank-says-middle-east-economy-to-contract-21-in-2026-on-iran-war/"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Qatar announces ‘massive’ solar plant project in Lebanon » (16 oct. 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/16/qatar-announces-massive-solar-plant-project-in-lebanon"
      },
      {
        "short": "Ministère de l'Énergie (Liban)",
        "name": "Ministère libanais de l'Énergie et de l'Eau / EDL, présentation du plan électrique (31 mars 2022)",
        "url": "https://energyandwater.gov.lb/mediafiles/articles/doc-100777-2022_03_31_10_19_47.pdf"
      },
      {
        "short": "Banque mondiale",
        "name": "Banque mondiale, document de projet sur le secteur électrique libanais (avril 2023)",
        "url": "https://documents1.worldbank.org/curated/en/099050223040511121/pdf/P1805010e52d050b0a2420997c31f1dfe0.pdf"
      },
      {
        "short": "BLOMInvest",
        "name": "BLOMInvest Bank, « Turning the Lights On: Solutions for Lebanon's Electricity Crisis » (févr. 2026)",
        "url": "https://blog.blominvestbank.com/wp-content/uploads/2026/02/Turning-the-Lights-On-Solutions-for-Lebanons-Electricity-Crisis.pdf"
      },
      {
        "short": "L'Orient-Le Jour",
        "name": "L'Orient Today, « EDL to issue new tariffs in February 2023 »",
        "url": "https://today.lorientlejour.com/article/1318304/edl-to-issue-new-tariffs-in-february-2023.html"
      },
      {
        "short": "Power Technology",
        "name": "Power Technology, « Lebanon energy reform plan »",
        "url": "https://www.power-technology.com/comment/lebanon-energy-reform-plan/"
      },
      {
        "short": "Wikipédia",
        "name": "Wikipédia (en), « Arab Gas Pipeline »",
        "url": "https://en.wikipedia.org/wiki/Arab_Gas_Pipeline"
      },
      {
        "short": "Al Arabiya",
        "name": "Al Arabiya, « Egypt's natural gas to reach Lebanon by year end: Minister » (14 sept. 2021)",
        "url": "https://english.alarabiya.net/News/middle-east/2021/09/14/Egypt-s-natural-gas-to-reach-Lebanon-by-year-end-Minister"
      },
      {
        "short": "BNN Bloomberg (Reuters)",
        "name": "BNN Bloomberg (dépêche Reuters), « Egyptian gas to reach Lebanon by year-end, says minister » (14 sept. 2021)",
        "url": "https://www.bnnbloomberg.ca/egyptian-gas-to-reach-lebanon-by-year-end-says-minister-1.1652109"
      },
      {
        "short": "L'Orient-Le Jour",
        "name": "L'Orient Today, « Gas imports to Lebanon: Jordan gives green light, what happens next »",
        "url": "https://today.lorientlejour.com/article/1546905/gas-imports-to-lebanon-jordan-gives-green-light-what-happens-next.html"
      },
      {
        "short": "Libnanews",
        "name": "Libnanews, « L'électricité du Liban frappée par le choc pétrolier » (2026)",
        "url": "https://en.libnanews.com/l-electricity-from-lebanon-hit-by-oil-shock/"
      }
    ],
    "deep": {
      "numbers": {
        "title": "Une compagnie publique à bout de souffle",
        "items": [
          {
            "value": "2 à 3 h",
            "label": "d'électricité publique par jour en moyenne à partir de mi-2021, selon la Banque mondiale [7]"
          },
          {
            "value": "≈ 40 %",
            "label": "de l'électricité perdue sur le réseau en 2021 (pertes techniques et vols), selon le ministère de l'Énergie [6]"
          },
          {
            "value": "43 Md$",
            "label": "ajoutés à la dette publique par les subventions à Électricité du Liban de 1994 à 2020 [8]"
          },
          {
            "value": "1994",
            "label": "année du dernier changement de tarif avant la nouvelle grille annoncée par EDL pour février 2023 [9]"
          }
        ]
      },
      "context": {
        "title": "Le gazoduc qui devait déjà tout régler",
        "paragraphs": [
          "L'idée d'alimenter le Liban en gaz par la Syrie n'est pas neuve. Le gazoduc arabe, long d'environ 1 200 km, a été construit par étapes pour exporter le gaz égyptien vers la Jordanie, la Syrie et le Liban ; le gaz arrive régulièrement au Liban à partir d'octobre 2009 [11].",
          "Le flux s'est vite tari : l'Égypte, qui consommait de plus en plus, a réduit ses exportations, puis des attaques contre le tuyau pendant la guerre en Syrie ont coupé la route vers le Liban [13]. En 2021, les ministres de quatre pays ont voulu relancer le projet pour alimenter la centrale de Deir Ammar, d'une capacité de 450 MW [12]. La Banque mondiale devait financer l'accord, mais à condition que le Liban relève ses tarifs et crée une autorité de régulation de l'électricité ; faute de régulateur, elle n'a pas donné son feu vert [10].",
          "Dans l'intervalle, EDL a remonté sa production : fin février 2026, elle fournissait en moyenne 7 à 9 heures de courant par jour. Le choc pétrolier régional l'a de nouveau fait chuter, à environ deux heures par jour dans certaines zones comme Tripoli [15]. Selon L'Orient-Le Jour, le tronçon Syrie-Liban du gazoduc n'est toujours pas en service et sa remise en état se poursuit [14]."
        ]
      },
      "sides": {
        "title": "Qui veut quoi",
        "items": [
          {
            "who": "Doha",
            "says": "Le Premier ministre qatari, en visite à Beyrouth le 16 octobre, a annoncé une centrale solaire qu'il a qualifiée de « massive », développée par QatarEnergy avec le français TotalEnergies comme premier projet [5]. Le document vu par Reuters cherche à attirer des capitaux privés [1]."
          },
          {
            "who": "Le gouvernement de Nawaf Salam",
            "says": "Le Premier ministre affirme que le Qatar financera, construira et fera tourner le projet sans que le Trésor libanais avance d'argent, et veut le soumettre vite au Conseil des ministres [5]."
          },
          {
            "who": "La Banque mondiale et les bailleurs",
            "says": "Ils lient depuis des années leur aide à des réformes : hausse de tarifs restés bas pendant des décennies et autorité de régulation indépendante, chargée de fixer les prix et de surveiller les contrats avec le privé [10]. En 2022, le tarif moyen encaissé restait sous 1 centime le kWh, pour un coût d'environ 30 centimes [6]."
          }
        ]
      }
    }
  },
  {
    "id": "2026-10-22-ghana-fin-exportation-minerais-bruts-2030",
    "date": "2026-10-22",
    "region": "Afrique",
    "theme": "mix",
    "geo": [
      {
        "name": "Accra, Ghana",
        "label": "Ghana",
        "coords": [
          -0.19,
          5.6
        ]
      }
    ],
    "title": "Le Ghana veut cesser d'exporter ses minerais bruts d'ici 2030 : bauxite, manganèse, fer et lithium",
    "summary": "Le président Mahama l'a annoncé lundi à Accra. Les entreprises devront transformer sur place, mais aucune loi n'est encore publiée.",
    "points": [
      "Le président John Dramani Mahama a annoncé le 19 octobre, lors d'un sommet minier à Accra, que le Ghana supprimera d'ici 2030 les exportations de minerais non transformés [1][2].",
      "Cela concerne la bauxite (le minerai de l'aluminium), le manganèse, le fer et le lithium. Les investisseurs devront financer la transformation sur place, avec ces obligations inscrites dans leurs contrats [1][3].",
      "Aucune loi, aucun règlement ni aucune liste de minerais n'est encore publié ; Mahama promet des mesures juridiques et un calendrier transparent [1][3]. Le pays interdit déjà l'export de ferraille et de métaux non ferreux [3]."
    ],
    "why": [
      "La première phrase à retenir : le plus gros producteur d'or d'Afrique veut garder la valeur ajoutée chez lui, au lieu de vendre la roche brute [1][4].",
      "L'idée est d'avoir des usines, des emplois et plus de revenus, mais elle a un prix : transformer exige de l'électricité et des investisseurs prêts à attendre. Pour l'or, l'effet direct serait limité, car les grandes mines fondent déjà leur minerai en lingots (doré) avant l'export [4]."
    ],
    "forMe": "L'aluminium, le manganèse (acier) et le lithium (batteries) se retrouvent dans les voitures et les smartphones. Si plusieurs pays africains imitent le Ghana, ces matières peuvent coûter plus cher à importer brutes, mais viendraient plus souvent déjà raffinées.",
    "figures": [
      {
        "value": "2030",
        "label": "date visée pour la fin des exportations de minerais bruts",
        "src": 1
      },
      {
        "value": "4",
        "label": "minerais cités : bauxite, manganèse, fer, lithium",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Bloomberg",
        "name": "Bloomberg, « Ghana to End Unprocessed Mineral Exports by 2030, President Mahama Says » (19 oct. 2026)",
        "url": "https://www.bloomberg.com/news/articles/2026-10-19/ghana-plans-to-ban-raw-mineral-exports-by-2030-president-says"
      },
      {
        "short": "GNA",
        "name": "Agence de presse ghanéenne GNA, « Ghana targets 2030 to end raw mineral ore exports » (oct. 2026)",
        "url": "https://gna.org.gh/2026/10/ghana-targets-2030-to-end-raw-mineral-ore-exports/"
      },
      {
        "short": "Nairametrics",
        "name": "Nairametrics, « Ghana plans to ban exports of unprocessed minerals by 2030 » (20 oct. 2026)",
        "url": "https://nairametrics.com/2026/10/20/ghana-plans-to-ban-exports-of-unprocessed-minerals-by-2030/"
      },
      {
        "short": "Rio Times",
        "name": "The Rio Times, « Ghana Restates Plan to End Raw Ore Exports » (oct. 2026)",
        "url": "https://www.riotimesonline.com/ghana-2030-raw-mineral-export-ban/"
      }
    ]
  },
  {
    "id": "2026-10-22-burkina-faso-ghana-reduit-carburant",
    "date": "2026-10-22",
    "region": "Afrique",
    "theme": "mix",
    "geo": [
      {
        "name": "Ouagadougou, Burkina Faso",
        "label": "Burkina Faso",
        "coords": [
          -1.52,
          12.37
        ]
      }
    ],
    "title": "Le Burkina Faso et le Mali privés de moitié de leur carburant : le Ghana garde le sien",
    "summary": "Le distributeur public ghanéen réduit ses ventes de diesel et d'essence à ses voisins du Sahel, qui n'ont pas de mer. Le Burkina n'a reçu que la moitié de ce qu'il demandait.",
    "points": [
      "Le distributeur public ghanéen BOST réduit depuis août ses exportations de diesel et d'essence vers le Burkina Faso et le Mali, pour protéger l'approvisionnement du Ghana [1][2].",
      "Pour juillet et août, le Burkina n'a reçu que 40 000 tonnes de carburant sur les 80 000 demandées [3].",
      "Le directeur de BOST résume : « Le carburant est disponible, mais à un coût élevé » [2]."
    ],
    "why": [
      "La première phrase à retenir : deux pays du Sahel, qui se disent souverains, dépendent d'un voisin côtier pour faire rouler leurs camions et leurs générateurs [3].",
      "Le Burkina et le Mali ne sont pas reliés à la mer : quand un pays de transit garde son carburant, les prix montent et les coupures arrivent. Cette tension arrive dans un monde où le pétrole est plus cher à cause de la crise d'Ormuz [1][3]."
    ],
    "forMe": "Le carburant manquant ralentit les mines d'or et le transport de marchandises du Sahel. Cela pèse sur l'or et l'uranium qui sortent de la région, et sur les migrations quand l'économie locale s'étouffe.",
    "figures": [
      {
        "value": "40 000 t",
        "label": "carburant livré au Burkina Faso en juillet-août, sur 80 000 demandées",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Adom Online",
        "name": "Adom Online, « BOST cuts fuel exports to Burkina Faso and Mali to protect local supply » (2026)",
        "url": "https://www.adomonline.com/bost-cuts-fuel-exports-to-burkina-faso-and-mali-to-protect-local-supply/"
      },
      {
        "short": "MyJoyOnline",
        "name": "MyJoyOnline, « BOST cuts fuel exports to Burkina Faso and Mali to protect local supply » (2026)",
        "url": "https://www.myjoyonline.com/bost-cuts-fuel-exports-to-burkina-faso-and-mali-to-protect-local-supply/"
      },
      {
        "short": "Afrik.com",
        "name": "Afrik.com, « Mali et Burkina Faso : la souveraineté de l'AES rattrapée par sa dépendance au carburant » (2026)",
        "url": "https://www.afrik.com/mali-burkina-faso-souverainete-aes-carburant-ghana"
      }
    ]
  },
  {
    "id": "2026-10-22-haiti-soldats-salvadoriens-disparus",
    "date": "2026-10-22",
    "region": "Amériques",
    "theme": "geo",
    "geo": [
      {
        "name": "Croix-des-Bouquets, Haïti",
        "label": "Haïti",
        "coords": [
          -72.22,
          18.58
        ]
      }
    ],
    "title": "Haïti : quatre soldats salvadoriens de la force anti-gangs disparus après une embuscade",
    "summary": "Leur véhicule a brûlé près de Port-au-Prince. El Salvador cherche ses soldats sous le feu des gangs.",
    "points": [
      "Quatre militaires salvadoriens de la Force de répression des gangs, soutenue par l'ONU, ont fui leur véhicule en feu à Croix-des-Bouquets, au nord de Port-au-Prince, et sont portés disparus [1][2].",
      "L'armée salvadorienne dit avoir tenté plusieurs fois de les rejoindre par terre et par air ; ses hélicoptères ont essuyé des tirs [1][2].",
      "Le porte-parole de l'ONU, Stéphane Dujarric, a condamné l'attaque et demandé leur libération [1]. Une dépêche titrée sur le président Nayib Bukele rapporte qu'il annonce une opération militaire pour récupérer les soldats [3]."
    ],
    "why": [
      "La première phrase à retenir : la force internationale qui doit reprendre Haïti aux gangs perd déjà des hommes, et un pays d'Amérique centrale se retrouve en première ligne [1][2].",
      "Les sources ne disent pas encore si les quatre sont captifs ou cachés. Plus l'attaque dure, plus la capitale est coupée du reste du pays, ce qui bloque aide et marchandises [1][2]."
    ],
    "forMe": "Haïti est à deux heures d'avion de la Floride. Quand l'État s'effondre, la nourriture manque et les départs en bateau augmentent, ce qui nourrit les débats sur la migration jusqu'en Europe.",
    "figures": [
      {
        "value": "4",
        "label": "soldats salvadoriens portés disparus",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Search under way for four soldiers missing after gang attack in Haiti » (19 oct. 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/19/search-under-way-for-four-soldiers-missing-after-gang-attack-in-haiti"
      },
      {
        "short": "Devdiscourse",
        "name": "Devdiscourse, « Four Salvadoran air force members missing after gang ambush in Haiti » (oct. 2026)",
        "url": "https://www.devdiscourse.com/article/international/3994931-four-salvadoran-air-force-members-missing-after-gang-ambush-in-haiti"
      },
      {
        "short": "Daily Independent (AP)",
        "name": "Daily Independent, « El Salvador's Bukele announces military operation to rescue hostages held by gangs in Haiti » (oct. 2026)",
        "url": "https://yourvalley.net/stories/el-salvadors-bukele-announces-military-operation-to-rescue-hostages-held-by-gangs-in-haiti,731775"
      }
    ]
  },
  {
    "id": "2026-10-22-sri-lanka-chine-quitte-hub-colombo",
    "date": "2026-10-22",
    "region": "Asie",
    "theme": "mix",
    "geo": [
      {
        "name": "Colombo, Sri Lanka",
        "label": "Sri Lanka",
        "coords": [
          79.85,
          6.93
        ]
      }
    ],
    "title": "Sri Lanka : une entreprise d'État chinoise abandonne son grand centre logistique du port de Colombo",
    "summary": "Le projet de 392 millions de dollars continue, mais il faut trouver un autre investisseur.",
    "points": [
      "China Merchants Port Holdings se retire du centre logistique prévu au port de Colombo, a annoncé l'autorité portuaire du Sri Lanka le 19 octobre, selon l'AFP [1][2].",
      "Le projet de 392 millions de dollars, signé en 2023, donnait 70 % à China Merchants, 15 % à l'autorité portuaire et 15 % à une entreprise de construction sri-lankaise [1][3]. L'autorité cherche un nouvel investisseur pour le site de 150 000 m² et passera par un partenariat public-privé [1][2].",
      "Les chiffres divergent : un média sri-lankais parle d'environ 280 millions de dollars [2]. China Merchants dit que mettre fin au projet est dans l'intérêt des parties [1]."
    ],
    "why": [
      "La première phrase à retenir : un grand groupe chinois renonce à un projet au Sri Lanka, pays que la Chine avait aidé et où elle est très présente [1][3].",
      "C'était le premier grand investissement étranger annoncé après l'effondrement de l'économie sri-lankaise en 2022 [1][3]. China Merchants continue d'exploiter un terminal à conteneurs de 500 millions de dollars à Colombo [1]."
    ],
    "forMe": "Colombo est une escale importante des cargos entre l'Asie et l'Europe. Quand un projet de port s'arrête, la concurrence entre grandes puissances pour ces routes devient visible.",
    "figures": [
      {
        "value": "392 M$",
        "label": "valeur du centre logistique abandonné (un média local cite environ 280 M$)",
        "src": 3
      },
      {
        "value": "70 %",
        "label": "part prévue pour China Merchants",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Deccan Chronicle",
        "name": "Deccan Chronicle, « China Exits Sri Lanka Port Logistics Venture in Major Setback » (oct. 2026)",
        "url": "https://www.deccanchronicle.com/world/china-exits-sri-lanka-port-logistics-venture-in-major-setback-1997154"
      },
      {
        "short": "Ada Derana",
        "name": "Ada Derana, déclaration de l'autorité portuaire sur le centre logistique de Colombo (oct. 2026)",
        "url": "https://adaderana.lk/news/250181"
      },
      {
        "short": "Hellenic Shipping News",
        "name": "Hellenic Shipping News, « Sri Lanka, China to build $392mln logistics hub at Colombo Port » (2023)",
        "url": "https://www.hellenicshippingnews.com/sri-lanka-china-to-build-392mln-logistics-hub-at-colombo-port/"
      }
    ]
  },
  {
    "id": "2026-10-22-inde-nouvelle-zelande-accord-libre-echange",
    "date": "2026-10-22",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Wellington, Nouvelle-Zélande",
        "label": "Nouvelle-Zélande",
        "coords": [
          174.78,
          -41.29
        ]
      },
      {
        "name": "New Delhi, Inde",
        "label": "Inde",
        "coords": [
          77.21,
          28.61
        ]
      }
    ],
    "title": "L'Inde et la Nouvelle-Zélande ouvrent leurs marchés : laine et charbon sans droits de douane",
    "summary": "Leur accord de libre-échange devait entrer en vigueur le 20 octobre, après neuf mois de négociations.",
    "points": [
      "L'accord, signé à New Delhi le 27 avril et ratifié le 21 septembre, devait s'appliquer à partir du 20 octobre [1][2]. Les sources consultées datent d'avant cette date et ne confirment pas encore l'entrée en vigueur.",
      "L'Inde obtient un accès sans droits de douane pour toutes ses lignes de produits ; certains produits indiens payaient jusqu'à 10 % [1][3].",
      "La Nouvelle-Zélande dit que 57 % de ses exportations vers l'Inde, dont la laine et le charbon, seront sans droits dès le premier jour, avec un second palier au 1er janvier 2027 [3][4]."
    ],
    "why": [
      "La première phrase à retenir : l'Inde multiplie les accords commerciaux au moment où les droits de douane américains changent la donne [1][3].",
      "Les deux pays veulent à peu près doubler leurs échanges et se sont engagés à faire le point un an après l'entrée en vigueur [4]."
    ],
    "forMe": "Quand des pays se mettent d'accord sans passer par les États-Unis ni l'Europe, les routes du commerce se diversifient. À long terme, cela peut changer d'où viennent la laine, le bois ou les médicaments vendus en France.",
    "figures": [
      {
        "value": "57 %",
        "label": "exportations néo-zélandaises vers l'Inde sans droits de douane dès le premier jour",
        "src": 3
      },
      {
        "value": "100 %",
        "label": "lignes de produits indiens sans droits de douane en Nouvelle-Zélande",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "Deccan Herald",
        "name": "Deccan Herald, « India-New Zealand FTA comes into force on October 20 » (2026)",
        "url": "https://www.deccanherald.com/business/india-new-zealand-fta-comes-into-force-on-october-20-4188622"
      },
      {
        "short": "All India Radio",
        "name": "All India Radio / Newsonair, « India-New Zealand free trade agreement finalised, comes into force on Oct 20: Piyush Goyal » (21 sept. 2026)",
        "url": "https://newsonair.gov.in/india-new-zealand-free-trade-agreement-finalised-comes-into-force-on-oct-20-piyush-goyal/"
      },
      {
        "short": "Maritime Gateway",
        "name": "Maritime Gateway, « India-New Zealand FTA kicks in from October 20 with duty-free access for all Indian exports » (2026)",
        "url": "https://www.maritimegateway.com/india-new-zealand-fta-kicks-in-from-october-20-with-duty-free-access-for-all-indian-exports/"
      },
      {
        "short": "MFAT",
        "name": "Ministère néo-zélandais des Affaires étrangères et du Commerce, résumé de l'accord de libre-échange Nouvelle-Zélande–Inde (2026)",
        "url": "https://www.mfat.govt.nz/assets/Trade-agreements/NZ-India-FTA/New-Zealand-India-Free-Trade-Agreement-Summary.pdf"
      }
    ]
  },
  {
    "id": "2026-10-22-belgique-avoirs-russes-gel-ukraine",
    "date": "2026-10-22",
    "region": "Europe",
    "theme": "mix",
    "geo": [
      {
        "name": "Bruxelles, Belgique",
        "label": "Belgique",
        "coords": [
          4.35,
          50.85
        ]
      }
    ],
    "title": "Belgique : le Premier ministre assure que Bruxelles renonce à utiliser les avoirs russes gelés pour l'Ukraine",
    "summary": "Plus de 190 milliards d'euros russes dorment surtout en Belgique. Bart De Wever pense que la Commission européenne ne proposera plus de s'en servir.",
    "points": [
      "Devant le Parlement belge, après le dernier sommet européen, Bart De Wever a dit être confiant que la Commission ne proposera plus de financer l'Ukraine avec les avoirs russes, selon l'agence russe TASS [1]. Ce n'est pas une décision officielle de la Commission.",
      "Environ 193 milliards d'euros, fin septembre, sont conservés surtout chez Euroclear, une société financière belge [2].",
      "En décembre 2025, l'UE avait gelé ces avoirs sans limite de temps, et les dirigeants avaient choisi d'emprunter 90 milliards d'euros pour l'Ukraine sur deux ans [2][3]."
    ],
    "why": [
      "La première phrase à retenir : l'idée d'utiliser l'argent russe gelé pour l'Ukraine, qui divisait l'Europe, semble abandonnée au profit de l'emprunt [1][3].",
      "La Belgique craignait des représailles de la Russie, car l'argent est chez elle. L'information vient d'une seule dépêche, d'une agence d'État russe : à confirmer par une source belge ou européenne [1]."
    ],
    "forMe": "C'est de la dette européenne commune, donc de l'argent public européen, qui finance l'aide à l'Ukraine, plutôt que l'argent russe gelé.",
    "figures": [
      {
        "value": "193 Md€",
        "label": "avoirs russes gelés fin septembre, surtout chez Euroclear",
        "src": 2
      },
      {
        "value": "90 Md€",
        "label": "prêt européen à l'Ukraine décidé en décembre 2025, sur deux ans",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "sanctions"
    ],
    "sources": [
      {
        "short": "TASS",
        "name": "TASS, « Belgian PM expects European Commission to end calls for seizing Russian assets » (21 oct. 2026)",
        "url": "https://tass.com/world/2205825"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « EU indefinitely freezes hundreds of billions in Russian funds » (12 déc. 2025)",
        "url": "https://www.aljazeera.com/news/2025/12/12/eu-looks-set-to-indefinitely-freeze-hundreds-of-billions-in-russian-funds"
      },
      {
        "short": "Fortune",
        "name": "Fortune, « EU indefinitely freezes Russian assets to prevent Hungary and Slovakia blocking billions for Ukraine » (13 déc. 2025)",
        "url": "https://fortune.com/2025/12/13/eu-indefinitely-freezes-russian-assets-prevent-hungary-slovakia-billions-euros-ukraine/"
      }
    ]
  },
  {
    "id": "2026-10-21-samarkand-asie-centrale-minerais",
    "date": "2026-10-21",
    "region": "Asie",
    "theme": "mix",
    "geo": [
      {
        "name": "Samarcande, Ouzbékistan",
        "label": "Samarcande",
        "coords": [
          66.96,
          39.65
        ]
      },
      {
        "name": "Bichkek, Kirghizistan",
        "label": "Kirghizistan",
        "coords": [
          74.59,
          42.87
        ]
      },
      {
        "name": "Douchanbé, Tadjikistan",
        "label": "Tadjikistan",
        "coords": [
          68.78,
          38.56
        ]
      },
      {
        "name": "Achgabat, Turkménistan",
        "label": "Turkménistan",
        "coords": [
          58.38,
          37.95
        ]
      }
    ],
    "title": "Samarcande : Washington part chercher les minerais d'Asie centrale, là où la Chine est déjà installée",
    "summary": "Le chef de la diplomatie américaine a réuni cinq pays d'Asie centrale. Au menu : une route commerciale qui évite la Russie et les minerais critiques.",
    "points": [
      "Marco Rubio a lancé lundi à Samarcande (Ouzbékistan) des discussions avec les ministres des Affaires étrangères de l'Ouzbékistan, du Kazakhstan, du Kirghizistan, du Tadjikistan et du Turkménistan, avant de partir pour l'Inde [1][2].",
      "Les États-Unis et les cinq pays ont publié une déclaration commune qui soutient les investissements dans la route commerciale transcaspienne, une coopération industrielle plus étroite et des douanes simplifiées. Les parties voient aussi plus de possibilités pour extraire et transformer des minerais [2][3].",
      "L'Ouzbékistan a signé les accords Artemis (coopération spatiale), et Marco Rubio a rencontré le ministre kazakh des Affaires étrangères sur le commerce, l'énergie, les minerais critiques et la technologie [1]. Des entreprises chinoises ont déjà signé plusieurs accords dans l'énergie, que Washington cherche à contrebalancer [1]."
    ],
    "why": [
      "La première phrase à retenir : les États-Unis veulent leur part des minerais d'Asie centrale, une région enclavée où la Chine et la Russie pèsent depuis longtemps [1][3].",
      "La route transcaspienne passe par la mer Caspienne et le Caucase au lieu de la Russie : c'est ce qui la rend intéressante pour les pays enclavés qui veulent vendre ailleurs. Pour l'instant, la déclaration est un soutien politique : les chiffres des investissements ne sont pas annoncés dans les sources consultées [2][3]."
    ],
    "forMe": "Les minerais critiques entrent dans les batteries, les puces et les armes. Plus les grandes puissances se les disputent, plus leurs prix peuvent devenir instables, et cela finit par se voir sur le prix des voitures électriques et de l'électronique.",
    "figures": [
      {
        "value": "5",
        "label": "pays d'Asie centrale réunis autour du secrétaire d'État américain (Ouzbékistan, Kazakhstan, Kirghizistan, Tadjikistan, Turkménistan)",
        "src": 2
      },
      {
        "value": "100",
        "label": "entreprises américaines dans la délégation de Marco Rubio, selon Daryo (d'autres médias en citent plus de 200)",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [
      "sanctions"
    ],
    "sources": [
      {
        "short": "Manila Times",
        "name": "The Manila Times, « US looks to boost foothold in Central Asia » (20 oct. 2026)",
        "url": "https://www.manilatimes.net/2026/10/20/world/asia-oceania/us-looks-to-boost-foothold-in-central-asia/2449111"
      },
      {
        "short": "Département d'État",
        "name": "Département d'État américain, « C5+1: Historic Partnership, Prosperous Future » (oct. 2026)",
        "url": "https://www.state.gov/releases/office-of-the-spokesman/2026/10/c51-historic-partnership-prosperous-future/"
      },
      {
        "short": "Euronews",
        "name": "Euronews, « Rubio puts Trans-Caspian trade and critical minerals at centre of Central Asia talks » (19 oct. 2026)",
        "url": "https://www.euronews.com/2026/10/19/rubio-puts-trans-caspian-trade-and-critical-minerals-at-centre-of-central-asia-talks"
      },
      {
        "short": "Daryo",
        "name": "Daryo, « Marco Rubio to visit Uzbekistan with 100 company delegation » (28 sept. 2026)",
        "url": "https://daryo.uz/en/2026/09/28/marco-rubio-to-visit-uzbekistan-with-100-company-delegation/"
      }
    ]
  },
  {
    "id": "2026-10-21-inde-petrole-russe-droits-de-douane-rubio",
    "date": "2026-10-21",
    "region": "Asie",
    "theme": "mix",
    "geo": [
      {
        "name": "Bombay, Inde",
        "label": "Inde",
        "coords": [
          72.88,
          19.08
        ]
      },
      {
        "name": "Jamnagar, Inde",
        "label": "Jamnagar",
        "coords": [
          70.07,
          22.47
        ]
      }
    ],
    "title": "Pétrole russe : Washington suspend sa menace de droits de douane jusqu'à 100 % et envoie Rubio voir la plus grande raffinerie indienne",
    "summary": "Une loi américaine permettrait de taxer jusqu'à 100 % les produits des plus gros acheteurs de pétrole russe, dont l'Inde. Elle est en pause, le temps d'une visite à Bombay et Jamnagar.",
    "points": [
      "La loi sur les sanctions viserait les cinq plus gros importateurs de pétrole ou de gaz russes, dont l'Inde et la Chine, avec des droits de douane pouvant atteindre 100 % sur les produits qu'ils vendent aux États-Unis. Elle est pour l'instant suspendue [1][2].",
      "Marco Rubio, qui a qualifié l'Inde d'« allié important », explique que Donald Trump veut profiter d'une fenêtre de 60 jours pour mesurer l'effet de ces droits. L'ambassadeur américain Sergio Gor attend une décision d'ici une dizaine de jours [1][2].",
      "Le secrétaire d'État était attendu mardi à Bombay, puis à la raffinerie de Jamnagar, au programme de l'énergie ; il saute New Delhi, ce qui irrite en Inde [2][3]. Le ministre indien du Commerce affirme que la première phase de l'accord commercial est conclue et en cours de rédaction juridique [2]."
    ],
    "why": [
      "Washington tient dans sa main un outil très fort : taxer les pays qui achètent du pétrole russe. Mais s'en servir contre l'Inde, un partenaire de poids, risquerait de fâcher un allié et de renchérir les produits indiens [1][2].",
      "Les droits de douane américains sur les produits indiens ont déjà été relevés à 50 % en 2025 à cause du pétrole russe, puis ramenés à 18 % [2]. Le commerce entre les deux pays a crû de près de 12 % en 2025, à environ 240 milliards de dollars [3]. Les résultats des discussions de mardi ne figurent pas dans les sources consultées."
    ],
    "forMe": "Si des droits de douane de 100 % frappaient l'Inde ou la Chine, des produits comme les médicaments génériques, les textiles ou l'électronique pourraient coûter plus cher en magasin. La menace reste suspendue : une décision est attendue dans les prochains jours.",
    "figures": [
      {
        "value": "100 %",
        "label": "niveau maximal des droits de douane prévus par la loi sur les acheteurs de pétrole russe (suspendue)",
        "src": 1
      },
      {
        "value": "18 %",
        "label": "droits de douane américains sur les produits indiens, après 50 % en 2025",
        "src": 2
      },
      {
        "value": "240 Md$",
        "label": "commerce entre les États-Unis et l'Inde en 2025 (+12 %), selon un analyste cité par Al Jazeera",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "droits-de-douane",
      "sanctions"
    ],
    "sources": [
      {
        "short": "Open Magazine",
        "name": "Open The Magazine, « Rubio Leaves for India, Calls It an ‘Important Ally’ as US Pauses Russia-Linked Tariff Threat » (oct. 2026)",
        "url": "https://openthemagazine.com/world/rubio-leaves-for-india-calls-it-an-important-ally-as-us-pauses-russia-linked-tariff-threat"
      },
      {
        "short": "Republic",
        "name": "Republic World, « ‘India an Important Ally’: Rubio Says Trump Studying Impact of Possible Tariffs » (18 oct. 2026)",
        "url": "https://www.republicworld.com/india/india-an-important-ally-rubio-says-trump-studying-impact-of-possible-tariffs-on-countries-like-india-2026-10-18-139164"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Why Marco Rubio’s visit to Mumbai has ruffled feathers in India » (18 oct. 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/18/why-marco-rubios-visit-to-mumbai-has-ruffled-feathers-in-india"
      }
    ]
  },
  {
    "id": "2026-10-21-bangladesh-croissance-fmi-plus-faible-depuis-1989",
    "date": "2026-10-21",
    "region": "Asie",
    "theme": "eco",
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
    "title": "Bangladesh : la croissance pourrait tomber à son plus bas niveau en près de quarante ans",
    "summary": "Le FMI prévoit seulement 3,2 % de croissance pour l'exercice 2026-2027 et une inflation proche de 11 %.",
    "points": [
      "Dans ses prévisions d'octobre, publiées le 13 octobre aux réunions du FMI et de la Banque mondiale à Bangkok, le FMI table sur 3,2 % de croissance au Bangladesh pour l'exercice 2026-2027, contre 4,3 % annoncés en avril [1][2].",
      "Si cela se confirme, ce serait la croissance annuelle la plus faible depuis l'exercice 1988-1989 (3,11 %) [1].",
      "Le FMI prévoit aussi une inflation moyenne de 10,9 %, plus haute que les 8,6 % de la Banque mondiale. En septembre, l'inflation était de 8,34 % selon l'institut statistique du pays [1]. La Banque mondiale (3,4 %) et la Banque asiatique de développement (4 %) ont aussi revu leurs prévisions à la baisse [1][2]."
    ],
    "why": [
      "La première phrase à retenir : un pays qui a longtemps grandi vite se retrouve avec une croissance faible et des prix qui montent en même temps [1].",
      "Pour une économie qui habille une grande partie du monde, un tel ralentissement pèse sur les salaires, les emplois et les commandes [1]. Les trois grandes institutions s'accordent sur le sens (moins de croissance), mais pas sur l'ampleur : c'est pourquoi il faut lire ces chiffres comme des prévisions, pas des résultats [1][2]."
    ],
    "forMe": "Une grande part des vêtements vendus en France est cousue au Bangladesh. Un pays qui ralentit et dont les coûts montent peut, à terme, faire bouger les prix des vêtements ou les délais de livraison.",
    "figures": [
      {
        "value": "3,2 %",
        "label": "croissance prévue par le FMI en 2026-2027 (4,3 % en avril)",
        "src": 1
      },
      {
        "value": "10,9 %",
        "label": "inflation moyenne prévue par le FMI pour 2026-2027",
        "src": 1
      },
      {
        "value": "8,34 %",
        "label": "inflation observée en septembre 2026",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Dhaka Tribune",
        "name": "Dhaka Tribune, « IMF: Bangladesh's GDP growth may drop to 3.2% in FY27 »",
        "url": "https://www.dhakatribune.com/business/421987/imf-bangladesh-s-inflation-may-rise-to-10.9%25"
      },
      {
        "short": "Asia News Network",
        "name": "Asia News Network, « IMF joins World Bank, Asia Development Bank in lowering Bangladesh growth outlook »",
        "url": "https://asianews.network/?p=307720"
      },
      {
        "short": "Prothom Alo",
        "name": "Prothom Alo, « Inflation may rise to nearly 11pc this fiscal year, IMF forecasts »",
        "url": "https://en.prothomalo.com/business/local/gtiqn8o3y4"
      }
    ]
  },
  {
    "id": "2026-10-21-irak-kirkouk-bp-champs-petrole",
    "date": "2026-10-21",
    "region": "Moyen-Orient",
    "theme": "eco",
    "geo": [
      {
        "name": "Kirkouk, Irak",
        "label": "Irak",
        "coords": [
          44.39,
          35.47
        ]
      }
    ],
    "title": "Irak : BP revient aux commandes des quatre grands champs pétroliers de Kirkouk",
    "summary": "Les champs passent des sociétés d'État irakiennes à un organisme commun avec BP, qui vise 450 000 barils par jour.",
    "points": [
      "Jeudi 15 octobre, l'exploitation des quatre grands champs de Kirkouk est passée des sociétés d'État North Oil et North Gas à un organisme d'exploitation commun avec BP. Le ministre irakien du Pétrole a supervisé le transfert par visioconférence [1][2].",
      "L'objectif est de porter la production à 450 000 barils par jour. Le contrat avait été activé en octobre 2025, avec une production de départ d'environ 328 000 barils par jour [2][3].",
      "En mars, BP avait retiré son personnel pour des raisons de sécurité pendant la guerre régionale, et la société d'État North Oil Company avait repris l'exploitation des champs [3]. La prochaine étape comprend la formation du personnel du ministère et le transfert de savoir-faire [2]."
    ],
    "why": [
      "La première phrase à retenir : l'Irak fait revenir un géant occidental sur ses plus vieux champs, au moment où le pétrole se vend très cher [1][2].",
      "Le pays est un grand producteur, mais ses voies d'exportation dépendent du détroit d'Ormuz, aujourd'hui sous tension. Produire plus à Kirkouk n'a de sens que si le pétrole peut sortir [2]."
    ],
    "forMe": "Plus de pétrole irakien sur le marché peut aider à calmer les prix du carburant. Mais tant que le détroit d'Ormuz reste fragile, l'effet à la pompe reste incertain.",
    "figures": [
      {
        "value": "450 000",
        "label": "barils par jour visés à Kirkouk",
        "src": 2
      },
      {
        "value": "328 000",
        "label": "barils par jour de production de départ prévue au contrat de 2025",
        "src": 3
      },
      {
        "value": "4",
        "label": "grands champs de Kirkouk concernés",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Shafaq News",
        "name": "Shafaq News, « BP partnership takes over Kirkuk's four oilfields »",
        "url": "https://shafaq.com/en/Economy/BP-partnership-takes-over-Kirkuk-s-four-oilfields"
      },
      {
        "short": "Iraqi News",
        "name": "Iraqi News, 15 octobre 2026",
        "url": "https://www.iraqinews.com/?p=239949"
      },
      {
        "short": "Rudaw",
        "name": "Rudaw, « Energy giant BP withdraws from four Kirkuk oil, gas fields; NOC takes over amid regional war » (16 mars 2026)",
        "url": "https://www.rudaw.net/english/business/16032026"
      }
    ]
  },
  {
    "id": "2026-10-21-riyad-conference-investissement-houthis",
    "date": "2026-10-21",
    "region": "Moyen-Orient",
    "theme": "mix",
    "geo": [
      {
        "name": "Riyad, Arabie saoudite",
        "label": "Riyad",
        "coords": [
          46.72,
          24.71
        ]
      }
    ],
    "title": "Riyad : sous les missiles houthis, la vitrine des investisseurs passe en partie à distance",
    "summary": "L'Arabie saoudite laisse des dirigeants suivre sa grande conférence d'investissement en ligne, après des attaques sur la capitale.",
    "points": [
      "Selon des sources citées par The Standard, l'Arabie saoudite laisse des dirigeants assister à sa conférence d'investissement FII à distance, après des attaques [1]. Des patrons du pétrole se sont retirés, mais le forum reste prévu en personne [2].",
      "Les houthis ont touché le principal aéroport de Riyad, et l'Arabie saoudite a intercepté de nouvelles attaques de missiles houthis sur la capitale [2]. Le Misk Global Forum du mois prochain a été annulé, et la 6e édition du festival du film de la mer Rouge est repoussée au 4e trimestre 2027, sans que ses organisateurs invoquent la guerre [2][3].",
      "Dans sa note du 19 octobre, BNP Paribas prévoit pour 2026 une baisse de 2 % du PIB de la région Moyen-Orient–Afrique du Nord et de 4,8 % pour les pays du Golfe, seul Oman gardant une croissance positive (4,1 %) [4]."
    ],
    "why": [
      "La première phrase à retenir : même le pays qui veut devenir la vitrine économique du Golfe doit désormais adapter ses grands rendez-vous à la guerre [1][2].",
      "Ces événements servent à attirer les capitaux étrangers. Les voir réduits ou annulés montre que le risque sécuritaire pèse sur les projets de diversification de l'économie saoudienne [2][4]. Les chiffres de BNP sont une prévision d'une banque, pas un résultat."
    ],
    "forMe": "Quand le Golfe est instable, le pétrole reste cher. Le Brent s'échangeait autour de 108 dollars le baril le 19 octobre [4]. Cela finit par se voir dans le prix du carburant et des billets d'avion.",
    "figures": [
      {
        "value": "−4,8 %",
        "label": "baisse du PIB attendue en 2026 dans les pays du Golfe (BNP Paribas)",
        "src": 4
      },
      {
        "value": "−2 %",
        "label": "baisse du PIB attendue en 2026 au Moyen-Orient et en Afrique du Nord (BNP Paribas)",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "The Standard",
        "name": "The Standard (HK), « Saudi Arabia to let executives attend FII conference remotely after attacks, sources say »",
        "url": "https://www.thestandard.com.hk/world/article/345474/Saudi-Arabia-to-let-executives-attend-FII-conference-remotely-after-attacks-sources-say"
      },
      {
        "short": "Energy Connects",
        "name": "Energy Connects, « Saudi Arabia intercepts new Houthi missile attacks on Riyadh » (oct. 2026)",
        "url": "https://www.energyconnects.com/news/gas-lng/2026/october/saudi-arabia-intercepts-new-houthi-missile-attacks-on-riyadh/"
      },
      {
        "short": "Al-Monitor",
        "name": "Al-Monitor, « Saudi Arabia pauses star-studded Red Sea film festival as Houthis hit kingdom » (sept. 2026)",
        "url": "https://www.al-monitor.com/originals/2026/09/saudi-arabia-pauses-star-studded-red-sea-film-festival-houthis-hit-kingdom"
      },
      {
        "short": "BNP Paribas",
        "name": "BNP Paribas, EcoNews du 19 octobre 2026",
        "url": "https://economic-research.bnpparibas.com/html/en-US/EcoNews-19-October-2026-10/19/2026,53859"
      }
    ]
  },
  {
    "id": "2026-10-21-soudan-frappe-drone-frontiere-soudan-du-sud",
    "date": "2026-10-21",
    "region": "Afrique",
    "theme": "geo",
    "geo": [
      {
        "name": "Frontière Soudan – Soudan du Sud",
        "label": "Soudan",
        "coords": [
          29.5,
          10
        ]
      }
    ],
    "title": "Soudan : une frappe de drone fait plus de 150 morts près de la frontière du Soudan du Sud",
    "summary": "Un nouveau drame dans la guerre au Soudan, signalé par la revue de presse africaine d'OkayAfrica du 20 octobre.",
    "points": [
      "OkayAfrica rapporte, dans son tour d'horizon africain du 20 octobre, qu'une frappe de drone a tué plus de 150 personnes près de la frontière entre le Soudan et le Soudan du Sud [1].",
      "Les sources consultées ne permettent pas, à ce stade, de confirmer le lieu exact, l'auteur de la frappe ni le bilan définitif : ils sont à vérifier avant toute reprise [1]."
    ],
    "why": [
      "La première phrase à retenir : la guerre au Soudan continue de faire des victimes civiles par dizaines et par centaines, avec des drones [1].",
      "Les sources consultées ne donnent pas d'autres précisions sur les conséquences économiques de cette frappe : l'actu sera à compléter dès que des sources dédiées seront disponibles."
    ],
    "forMe": "Cette guerre est loin, mais elle touche l'un des pays les plus pauvres du monde et des routes de transport du pétrole africain. Elle rappelle que la sécurité d'un pays peut vite décider de ce qu'il peut vendre.",
    "figures": [
      {
        "value": "150+",
        "label": "morts dans la frappe de drone, bilan à confirmer",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "OkayAfrica",
        "name": "OkayAfrica, « Today in Africa — October 20, 2026 »",
        "url": "https://www.okayafrica.com/today-in-africa-october-20-2026-drone-strike-kills-more-than-150-near-sudan-south-sudan-border-dangote-plans-free-refinery-shares-for-nearly-778000-women/1440901"
      }
    ]
  },
  {
    "id": "2026-10-21-ue-sommet-gaz-140-pourcent-mesures-energie",
    "date": "2026-10-21",
    "region": "Europe",
    "theme": "eco",
    "geo": [
      {
        "name": "Bruxelles, Belgique",
        "label": "Bruxelles",
        "coords": [
          4.35,
          50.85
        ]
      }
    ],
    "title": "Le gaz coûte 140 % plus cher qu'en février : les Européens sortent leurs mesures d'urgence avant l'hiver",
    "summary": "Au sommet de mi-octobre, les dirigeants de l'UE ont décidé de premières mesures sur l'énergie, alors que le budget 2028-2034 divise.",
    "points": [
      "Ursula von der Leyen a indiqué que les prix du gaz dans l'UE ont augmenté de 140 % depuis février et que le gazole a doublé. Elle a cité des chèques énergie pour les familles modestes en France et en Roumanie [1].",
      "Les dirigeants ont convenu de mesures à court terme : prolonger le cadre temporaire des aides d'État, repousser d'un an certaines obligations du règlement sur le méthane, lancer un dialogue sur les capacités de raffinage et renforcer les achats groupés d'énergie [2][3].",
      "Les discussions sur le budget européen 2028-2034 restent tendues : le Conseil veut un accord avant la fin 2026 pour que l'argent circule sans interruption dès janvier 2028 [2][3]."
    ],
    "why": [
      "La première phrase à retenir : l'Europe entre dans l'hiver avec un gaz beaucoup plus cher et répond par des mesures de court terme plutôt que par une réforme profonde [1][2].",
      "Les aides d'État permettent aux gouvernements de soutenir leurs entreprises et leurs ménages, mais elles coûtent de l'argent public à un moment où le budget commun est disputé [2][3]."
    ],
    "forMe": "Un gaz plus cher se retrouve sur les factures de chauffage et d'électricité, et dans le prix de produits qui demandent beaucoup d'énergie. Les États peuvent compenser en partie avec des aides, financées par l'impôt.",
    "figures": [
      {
        "value": "+140 %",
        "label": "hausse des prix du gaz dans l'UE depuis février, selon Ursula von der Leyen",
        "src": 1
      },
      {
        "value": "×2",
        "label": "prix du gazole, doublé selon la présidente de la Commission",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Lovguiden (Commission)",
        "name": "Lovguiden, « Von der Leyen : gaspriser op 140 % » (6 oct. 2026)",
        "url": "https://lovguiden.dk/en/det-offentlige/europa-kommissionen-press-corner/2026-10-06-von-der-leyen-gaspriser-op-140-maalrettet-stoette-og-faelles-energiindkoeb"
      },
      {
        "short": "The Star",
        "name": "The Star, « EU summit exposes budget tensions as bloc outlines energy relief measures » (17 oct. 2026)",
        "url": "https://www.thestar.com.my/news/world/2026/10/17/eu-summit-exposes-budget-tensions-as-bloc-outlines-energy-relief-measures"
      },
      {
        "short": "Lovguiden (Conseil)",
        "name": "Lovguiden, Conseil de l'UE : sommet du 16 octobre 2026 (énergie, budget)",
        "url": "https://www.lovguiden.dk/en/det-offentlige/raadet-for-den-europaeiske-union/2026-10-16-eu-topmoede-energipriser-ets2-naeste-eu-budget-og-montenegro"
      }
    ]
  },
  {
    "id": "2026-10-19-chine-croissance-exports-t3",
    "date": "2026-10-19",
    "region": "Asie",
    "theme": "eco",
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
    "title": "La Chine accélère grâce à ses exportations, mais ses habitants dépensent toujours peu",
    "summary": "L'économie chinoise a progressé de 4,5 % entre juillet et septembre, mieux que prévu. Ce sont les ventes à l'étranger qui portent la croissance, pas la consommation des ménages.",
    "points": [
      "La Chine annonce 4,5 % de croissance sur un an pour le troisième trimestre, au-dessus des prévisions. Au deuxième trimestre, elle était à 4,3 %, la progression la plus lente en plus de trois ans [1][2].",
      "Ce sont les exportations qui ont tiré le trimestre. Selon l'analyse de l'agence AP, la Chine est en passe de dépasser son excédent commercial record de 1 200 milliards de dollars de l'an dernier [1].",
      "La demande intérieure reste faible, pesée par une crise de l'immobilier qui dure depuis des années. Un économiste cité par AP juge même ce chiffre de croissance « de moins en moins fiable » pour mesurer la santé de l'économie [1]."
    ],
    "why": [
      "Le chiffre est bon, mais il cache un déséquilibre : la Chine produit beaucoup et vend le surplus au reste du monde, alors que ses propres habitants consomment peu [1].",
      "Pékin s'est fixé une croissance de 4,5 % à 5 % pour 2026, et le FMI vient de ramener sa propre prévision à 4,5 %, tout juste le bas de la cible [1]. Plus la Chine exporte, plus ses partenaires, Europe en tête, s'inquiètent de voir leurs usines concurrencées."
    ],
    "forMe": "Quand la Chine vend plus qu'elle n'achète, ses produits arrivent en masse en Europe, à des prix bas : c'est bon pour ton porte-monnaie, mais cela met la pression sur les usines européennes et nourrit les débats sur les droits de douane.",
    "figures": [
      {
        "value": "4,5 %",
        "label": "croissance de la Chine au 3e trimestre, sur un an",
        "src": 1
      },
      {
        "value": "4,3 %",
        "label": "croissance du trimestre précédent, la plus faible en plus de trois ans",
        "src": 1
      },
      {
        "value": "1 200",
        "label": "milliards de dollars : excédent commercial record de l’an dernier, bientôt dépassé selon AP",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "AP / US News",
        "name": "AP via US News, « China's Economy Accelerates on Robust Exports as Domestic Weakness Persists »",
        "url": "https://www.usnews.com/news/business/articles/2026-10-18/chinas-economy-grew-4-5-in-the-previous-quarter-better-than-forecasts"
      },
      {
        "short": "AP / 1News",
        "name": "AP via 1News, « China's economy grew 4.5% in previous quarter, better than forecasts »",
        "url": "https://www.1news.co.nz/2026/10/19/chinas-economy-grew-45-in-previous-quarter-better-than-forecasts/"
      }
    ]
  },
  {
    "id": "2026-10-19-guyana-croissance-petrole",
    "date": "2026-10-19",
    "region": "Amériques",
    "theme": "eco",
    "geo": [
      {
        "name": "Georgetown, Guyana",
        "label": "Guyana",
        "coords": [
          -58.15,
          6.8
        ]
      }
    ],
    "title": "Guyana : le petit pays qui grandit de près de 24 % par an grâce à son pétrole",
    "summary": "La Banque mondiale relève sa prévision de croissance du Guyana à 23,7 % pour 2026, la plus rapide de la région, portée par le pétrole en mer.",
    "points": [
      "Dans sa mise à jour d'octobre sur l'Amérique latine et les Caraïbes, la Banque mondiale prévoit 23,7 % de croissance pour le Guyana en 2026. En avril, elle annonçait 16,3 % [1][2].",
      "Le pays avait déjà vu son économie grandir de 33,8 % en 2023 puis de 43,8 % en 2024, et la Banque estime 19,3 % pour 2025 [1].",
      "Le gouvernement est plus prudent : son budget 2026 table sur 16,2 % de croissance, avec un pétrole en hausse de 17,9 %, soit environ 840 000 barils par jour contre 715 000 en 2025 [3]."
    ],
    "why": [
      "Le moteur, c'est le pétrole extrait au large des côtes : la Banque mondiale estime que le Guyana tire à lui seul la croissance de toute la sous-région [1].",
      "L'écart entre 23,7 % (Banque mondiale) et 16,2 % (gouvernement) rappelle qu'une prévision n'est pas un résultat. Et un pays qui dépend autant d'une seule ressource reste exposé si le prix du baril ou la production baisse [1][3]."
    ],
    "forMe": "Quand le baril monte, comme en ce moment, certains petits pays producteurs s'enrichissent très vite. Mais ces revenus dépendent d'une seule ressource : si le prix ou la production baisse, la croissance retombe.",
    "figures": [
      {
        "value": "23,7 %",
        "label": "croissance prévue du Guyana en 2026 par la Banque mondiale (16,3 % en avril)",
        "src": 1
      },
      {
        "value": "43,8 %",
        "label": "croissance de l'économie du Guyana en 2024",
        "src": 1
      },
      {
        "value": "840 000",
        "label": "barils de pétrole par jour attendus en 2026 selon le budget (715 000 en 2025)",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Rio Times",
        "name": "The Rio Times, « World Bank Lifts Guyana Growth to 23.7% »",
        "url": "https://www.riotimesonline.com/guyana-world-bank-growth-forecast-23-7-percent-2026-2"
      },
      {
        "short": "Guyana Chronicle",
        "name": "Guyana Chronicle, « Guyana continues to lead regional growth » (6 oct. 2026)",
        "url": "https://guyanachronicle.com/2026/10/06/guyana-continues-to-lead-regional-growth/"
      },
      {
        "short": "OilNOW",
        "name": "OilNOW, « Oil to remain dominant driver of Guyana's 16.2% growth in 2026 – Finance Minister »",
        "url": "https://oilnow.gy/?p=91631"
      }
    ]
  },
  {
    "id": "2026-10-19-cacao-cote-divoire-ghana-prix",
    "date": "2026-10-19",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Abidjan, Côte d'Ivoire",
        "label": "Côte d'Ivoire",
        "coords": [
          -4.02,
          5.35
        ]
      },
      {
        "name": "Accra, Ghana",
        "label": "Ghana",
        "coords": [
          -0.19,
          5.6
        ]
      }
    ],
    "title": "Cacao : la Côte d'Ivoire baisse de 57 % le prix payé aux planteurs, le Ghana le relève",
    "summary": "Après l'effondrement des cours, les deux premiers producteurs mondiaux de cacao font des choix opposés. Les planteurs ivoiriens toucheront beaucoup moins, les ghanéens un peu plus.",
    "points": [
      "La Côte d'Ivoire a confirmé le 2 septembre que les planteurs recevraient 1 200 francs CFA le kilo pour la saison 2026-2027, soit 57 % de moins que les 2 800 francs du début de la saison précédente [1].",
      "Le Ghana fait l'inverse : il a légèrement relevé son prix, à 42 400 cédis la tonne, grâce à une nouvelle loi qui garantit aux producteurs au moins 70 % de la valeur à l'export de leurs fèves [1].",
      "Les deux pays subissent le même choc : le cacao avait atteint un record de 12 906 dollars la tonne en décembre 2024, puis est tombé sous 3 000 dollars en février 2026. Tous deux vendent aussi une grande partie de leur récolte à l'avance [1]."
    ],
    "why": [
      "L'explication habituelle est financière : la Côte d'Ivoire avait vendu une partie de sa récolte à l'avance à bas prix, alors que le Ghana avait déjà baissé son prix en février [1].",
      "L'auteur de l'analyse y ajoute une autre raison : le rapport de force entre planteurs, État et acheteurs n'est pas le même dans les deux pays [1]. Pour des millions de familles, c'est la différence entre un revenu qui tient et un revenu qui s'effondre."
    ],
    "forMe": "Le cacao est la matière première du chocolat. Quand les prix mondiaux s'envolent puis retombent, ce sont les planteurs d'Afrique de l'Ouest qui encaissent le choc, bien avant que le prix de ta tablette ne change.",
    "figures": [
      {
        "value": "− 57 %",
        "label": "baisse du prix payé aux planteurs ivoiriens (1 200 francs CFA le kilo)",
        "src": 1
      },
      {
        "value": "12 906 $",
        "label": "record du cacao en décembre 2024, la tonne",
        "src": 1
      },
      {
        "value": "70 %",
        "label": "part minimale de la valeur export garantie aux producteurs ghanéens par la nouvelle loi",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "African Arguments",
        "name": "African Arguments, « Same Cocoa Crash, Opposite Answers: what Ghana and Côte d'Ivoire Reveal about Power in Global Trade » (oct. 2026)",
        "url": "https://africanarguments.org/2026/10/same-cocoa-crash-opposite-answers-what-ghana-and-cote-divoire-reveal-about-power-in-global-trade/"
      }
    ]
  },
  {
    "id": "2026-10-19-serbie-nis-raffinerie-sanctions",
    "date": "2026-10-19",
    "region": "Europe",
    "theme": "mix",
    "geo": [
      {
        "name": "Belgrade, Serbie",
        "label": "Serbie",
        "coords": [
          20.46,
          44.82
        ]
      }
    ],
    "title": "Serbie : la seule raffinerie du pays tourne sous dérogation américaine, jusqu'au 30 octobre",
    "summary": "Le pétrolier serbe NIS, détenu par des Russes, est sous sanctions américaines. Washington lui permet de continuer à importer du brut jusqu'à la vente à un groupe hongrois.",
    "points": [
      "La Serbie a obtenu des États-Unis une nouvelle dérogation aux sanctions pour NIS : l'entreprise peut continuer à importer du pétrole brut jusqu'au 30 octobre, en attendant la vente de sa part russe majoritaire au hongrois MOL [1].",
      "NIS exploite l'unique raffinerie de Serbie, qui couvre environ 80 % des besoins du pays [1].",
      "Washington a sanctionné NIS en octobre 2025 pour frapper l'énergie russe, et exigé que Gazprom Neft et Gazprom cèdent leurs parts, soit 56 % au total. MOL a signé un accord provisoire en janvier et s'est engagé à garder la raffinerie de Pančevo ouverte [1][2]."
    ],
    "why": [
      "Le pétrole arrive par l'oléoduc Janaf, qui passe par la Croatie : sans autorisation américaine, ce robinet peut se fermer. Et l'on ne sait pas encore si la dérogation sera prolongée ni si la vente est conclue [1].",
      "C'est un exemple de la façon dont les sanctions visent une entreprise… et touchent tout un pays qui en dépend pour son carburant [1][2]."
    ],
    "forMe": "Les sanctions ne frappent pas que la Russie : elles se répercutent sur des pays tiers et sur leurs prix de carburant. C'est ce même type de chaîne qui relie des décisions prises à Washington au prix du plein dans toute l'Europe centrale.",
    "figures": [
      {
        "value": "30/10",
        "label": "date limite de la dérogation américaine accordée à NIS (30 octobre)",
        "src": 1
      },
      {
        "value": "≈ 80 %",
        "label": "des besoins de la Serbie couverts par sa seule raffinerie",
        "src": 1
      },
      {
        "value": "56 %",
        "label": "part de NIS détenue par les russes Gazprom Neft et Gazprom, à vendre à MOL",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "sanctions"
    ],
    "sources": [
      {
        "short": "SRN News",
        "name": "SRN News, « Serbia secures US sanctions waiver for its Russian-owned NIS oil firm, energy minister says »",
        "url": "https://srnnews.com/serbia-secures-us-sanctions-waiver-for-its-russian-owned-nis-oil-firm-energy-minister-says/"
      },
      {
        "short": "Hungarian Conservative",
        "name": "Hungarian Conservative, « Hungary's MOL Strikes Deal to Buy Russian Majority Stake in Serbia's Oil Firm NIS »",
        "url": "https://www.hungarianconservative.com/articles/current/nis-mol-gazprom-oil-company-energy-us-sanctions/"
      }
    ]
  },
  {
    "id": "2026-10-19-malaisie-ue-libre-echange-palme",
    "date": "2026-10-19",
    "region": "Asie",
    "theme": "geo",
    "geo": [
      {
        "name": "Kuala Lumpur, Malaisie",
        "label": "Malaisie",
        "coords": [
          101.69,
          3.14
        ]
      }
    ],
    "title": "Malaisie–Europe : l'accord de libre-échange est fait à 80 %, mais l'huile de palme bloque encore",
    "summary": "Kuala Lumpur vise une signature fin juin 2027 avec l'Union européenne. Les négociations durent depuis 2010, et l'accord ne s'appliquerait pas avant 2029.",
    "points": [
      "Le ministre malaisien du Commerce, Johari Abdul Ghani, a annoncé le 13 octobre que son pays veut signer l'accord avec l'Union européenne d'ici fin juin 2027. Près de 80 % des négociations sont terminées [1].",
      "Les discussions ont commencé en 2010, bloquées en 2012 après sept séries de négociations à cause de désaccords sur l'huile de palme, puis repris en 2025 après une annonce du Premier ministre Anwar Ibrahim et d'Ursula von der Leyen [1].",
      "Selon une analyse du MVO, l'accord ne s'appliquerait sans doute pas avant le second semestre 2029 : la relecture juridique, la traduction et la ratification prendront au moins 18 à 24 mois. Et l'accord UE-Indonésie donne déjà un accès préférentiel à l'huile de palme indonésienne [2]."
    ],
    "why": [
      "L'huile de palme est le nœud du dossier : l'Europe pose des règles environnementales et la Malaisie estime qu'elles pénalisent son produit phare [1][2].",
      "Chaque accord signé par un concurrent désavantage ceux qui n'en ont pas. La Malaisie se presse donc de conclure, sous peine de payer plus de droits de douane que l'Indonésie pendant la période de transition [2]."
    ],
    "forMe": "L'huile de palme est dans beaucoup de produits de tous les jours (biscuits, pâtes à tartiner, cosmétiques). Un accord pourrait faciliter ses échanges, mais il doit concilier commerce et protection des forêts, un sujet sur lequel les Européens sont très regardants.",
    "figures": [
      {
        "value": "≈ 80 %",
        "label": "des négociations Malaisie–UE déjà terminées",
        "src": 1
      },
      {
        "value": "06/2027",
        "label": "objectif de signature fixé par le ministre malaisien (fin juin 2027)",
        "src": 1
      },
      {
        "value": "2010",
        "label": "année du début des discussions, interrompues de 2012 à 2025",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "The Edge Malaysia",
        "name": "The Edge Malaysia, édition du 13 octobre 2026 (déclarations de Johari Abdul Ghani)",
        "url": "https://theedgemalaysia.com/node/821620"
      },
      {
        "short": "MVO",
        "name": "MVO, « EU–Malaysia: liberalising trade in palm oil »",
        "url": "https://mvoketenorganisatie.h5mag.com/mvo_magazine_3_2026_en/eu-malaysia_liberalising_trade_in_palm_oil"
      }
    ]
  },
  {
    "id": "2026-10-19-iran-plan-sept-jours-ormuz",
    "date": "2026-10-19",
    "region": "Moyen-Orient",
    "theme": "geo",
    "geo": [
      {
        "name": "Téhéran, Iran",
        "label": "Iran",
        "coords": [
          51.39,
          35.69
        ]
      }
    ],
    "title": "Iran : le plan en sept jours pour rouvrir Ormuz reste sur la table, Washington en doute",
    "summary": "Téhéran propose de rouvrir le détroit en échange de la fin du blocus naval américain et d'une levée des sanctions pétrolières. Le ministre iranien dit que l'offre tient toujours.",
    "points": [
      "L'Iran a présenté aux États-Unis, par des intermédiaires, un plan en sept jours : arrêt des combats, réouverture du détroit d'Ormuz et reprise des négociations sur le nucléaire [3].",
      "Selon le ministre Abbas Araghchi, les premières étapes prendraient quatre à cinq jours, le détroit rouvrirait le sixième jour et les discussions sur un accord final commenceraient le septième. Téhéran demande en échange la levée du blocus naval américain, une dérogation sur ses ventes de pétrole et le dégel d'environ 12 milliards de dollars d'avoirs [2][3].",
      "Le département d'État américain affirme que le détroit est déjà ouvert, et Mike Pompeo juge l'offre « probablement pas sérieuse ». Le Wall Street Journal a rapporté que Donald Trump l'aurait rejetée. Le 18 octobre, Abbas Araghchi a répété que la proposition restait sur la table [1][2][3]."
    ],
    "why": [
      "Les deux camps ne décrivent même pas la situation de la même façon : pour Washington, Ormuz est ouvert, pour Téhéran, il faut négocier pour le rouvrir [3]. Tant que ce désaccord dure, les pétroliers hésitent et le baril reste cher.",
      "Le plan lie trois sujets qui bloquent : le détroit, le nucléaire et les sanctions. Un accord sur l'un obligerait à avancer sur les deux autres [2][3]."
    ],
    "forMe": "Ormuz est un passage clé du pétrole du Golfe. Quand ce passage est incertain, le prix du carburant que tu paies en France peut monter quelques semaines plus tard.",
    "figures": [
      {
        "value": "7",
        "label": "jours : durée du plan iranien (détroit rouvert le 6e jour, négociations le 7e)",
        "src": 2
      },
      {
        "value": "≈ 12",
        "label": "milliards de dollars d’avoirs iraniens gelés que l’Iran demande de libérer",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes",
      "sanctions"
    ],
    "sources": [
      {
        "short": "Fox News",
        "name": "Fox News, suivi en direct de la guerre États-Unis–Iran du 18 octobre 2026",
        "url": "https://www.foxnews.com/live-news/us-iran-war-peace-talks-oil-strait-hormuz-trump-october-18"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Iran says it awaits US response on seven-day roadmap to end war » (25 sept. 2026)",
        "url": "https://www.aljazeera.com/news/2026/9/25/iran-says-it-awaits-us-response-on-seven-day-roadmap-to-end-war"
      },
      {
        "short": "ABC News (WJLA)",
        "name": "ABC News, « Iran pitches seven day roadmap for ceasefire, renewed nuclear talks »",
        "url": "https://wjla.com/news/nation-world/iran-pitches-seven-day-roadmap-for-ceasefire-renewed-nuclear-talks-strait-hormuz-tehran-nuclear-xi-jinping"
      }
    ]
  },
  {
    "id": "2026-10-19-ukraine-locomotives-ble-fer",
    "date": "2026-10-19",
    "region": "Europe",
    "theme": "mix",
    "geo": [
      {
        "name": "Kiev, Ukraine",
        "label": "Ukraine",
        "coords": [
          30.52,
          50.45
        ]
      }
    ],
    "title": "Ukraine : à court de locomotives, le pays peine à exporter son blé et son fer",
    "summary": "Les frappes russes sur les trains ont presque vidé la réserve de locomotives. Kiev cherche des machines auprès de pays européens qui utilisent le même écartement de rails.",
    "points": [
      "Selon le Financial Times, citant le ministre de l'Agriculture Taras Vyssotski, l'Ukraine a presque épuisé sa réserve de locomotives à cause des frappes russes. Kiev discute avec des pays européens qui ont le même écartement de rails [1][2].",
      "La Russie a intensifié ses attaques contre les trains qui transportent du blé et du minerai de fer, deux grandes exportations ukrainiennes. L'opérateur portuaire TIS a perdu trois locomotives près du port de Pivdennyi [1][2].",
      "Depuis le début de l'invasion, 533 locomotives d'Ukrzaliznytsia et 75 d'entreprises privées ont été endommagées, selon des données du ministère citées par Radio Liberty. La Slovaquie en propose trois et la Lituanie trois autres [3][1]."
    ],
    "why": [
      "Un champ de blé ne suffit pas : il faut des trains pour amener les grains jusqu'aux ports. Même si les ports de la mer Noire fonctionnent, le dernier maillon ferroviaire peut bloquer [1].",
      "Les autorités estiment que les machines disponibles peuvent assurer le fonctionnement normal du réseau pour l'instant, mais la réserve de secours est presque épuisée [1][2]."
    ],
    "forMe": "L'Ukraine est un grand exportateur de céréales. Si ses trains manquent, ses livraisons de blé et de maïs peuvent ralentir, ce qui pèse sur les prix mondiaux de l'alimentation.",
    "figures": [
      {
        "value": "533",
        "label": "locomotives d'Ukrzaliznytsia endommagées depuis le début de l'invasion",
        "src": 3
      },
      {
        "value": "6",
        "label": "locomotives proposées par la Slovaquie (3) et la Lituanie (3)",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Meduza",
        "name": "Meduza, « Russian strikes leave Ukraine with almost no spare locomotives, further complicating grain exports » (5 oct. 2026)",
        "url": "https://meduza.io/en/news/2026/10/05/russian-strikes-leave-ukraine-with-almost-no-spare-locomotives-further-complicating-grain-exports"
      },
      {
        "short": "Kurs / FT",
        "name": "Kurs, reprenant le Financial Times : « Ukraine has almost exhausted its locomotive reserve due to Russian strikes »",
        "url": "https://kurs.com.ua/en/novost/1482607-ukrayina-maizhe-vicherpala-rezerv-lokomotiviv-cherez-rosiiski-udari-ft"
      },
      {
        "short": "United24",
        "name": "United24 Media, « Russian strikes damage 533 Ukrainian rail locomotives, forcing Kyiv to seek replacements »",
        "url": "https://united24media.com/war-in-ukraine/russian-strikes-damage-533-ukrainian-rail-locomotives-forcing-kyiv-to-seek-replacements-23130"
      }
    ]
  },
  {
    "id": "2026-10-19-kenya-airways-sauvetage",
    "date": "2026-10-19",
    "region": "Afrique",
    "theme": "eco",
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
    "title": "Kenya sauve sa compagnie aérienne : 11 avions sur 34 sont cloués au sol",
    "summary": "Le gouvernement kényan accorde 350 millions de dollars à Kenya Airways et transforme une partie de sa dette en capital. La compagnie cherche encore un investisseur stratégique.",
    "points": [
      "Le gouvernement kényan a approuvé un prêt d'actionnaire de 350 millions de dollars pour Kenya Airways, remboursable sur dix ans maximum et convertible en capital. L'argent doit servir à payer des dettes urgentes et à remettre des avions en service [1][2].",
      "Il a aussi validé la conversion d'environ 122 milliards de shillings (près de 940 millions de dollars) de prêts publics en instrument assimilé à du capital. Cela n'apporte pas d'argent frais, mais allège la dette de la compagnie [1][2].",
      "Onze des 34 avions de la compagnie sont cloués au sol, dont deux Boeing 787-8, avec une remise en service visée début 2027. Elle cherche au moins 1,5 milliard de dollars auprès d'un investisseur stratégique, attendu au premier trimestre 2027 [1][2]."
    ],
    "why": [
      "Une compagnie nationale est un symbole, mais aussi un outil économique : elle relie le pays au monde pour le tourisme, les fleurs ou le café exportés. Sans avions, ces flux ralentissent [1].",
      "Les mesures restent soumises à des approbations d'actionnaires et de régulateurs : le sauvetage n'est donc pas encore terminé [1]."
    ],
    "forMe": "Les compagnies publiques en difficulté sont un classique, de l'Afrique à l'Europe. Cela montre pourquoi les États hésitent entre les soutenir avec l'argent public et les laisser trouver un partenaire privé.",
    "figures": [
      {
        "value": "350",
        "label": "millions de dollars : prêt d’actionnaire approuvé pour Kenya Airways",
        "src": 1
      },
      {
        "value": "11/34",
        "label": "avions de la compagnie actuellement cloués au sol",
        "src": 1
      },
      {
        "value": "1,5",
        "label": "milliard de dollars de capital frais recherché auprès d’un investisseur stratégique",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Zawya",
        "name": "Zawya, « Kenya approves $350mln in shareholder financing for Kenya Airways »",
        "url": "https://zawya.com/en/economy/kenyas-approves-350mln-in-shareholder-financing-for-kenya-airways-1587023"
      },
      {
        "short": "Business Daily",
        "name": "Business Daily Africa, « State approves Sh45bn financing for struggling KQ »",
        "url": "https://www.businessdailyafrica.com/bd/corporate/companies/state-approves-sh45bn-financing-for-struggling-kq-5626396"
      }
    ]
  },
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
  }
];
