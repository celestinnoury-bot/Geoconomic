// Contenu de l'application.
// Chaque dossier suit le même format pour rester digeste :
//   tldr (l'essentiel en 30 s) → sections courtes → « Et moi ? » → chiffres clés → quiz.
// Les termes listés dans `terms` renvoient vers le lexique (par leur `id`).

window.GEOCO = {
  dossiers: [
    {
      id: "inflation-taux",
      emoji: "🔥",
      theme: "eco",
      title: "Inflation : pourquoi les prix montent et comment on les calme",
      hook: "Ton panier de courses a pris 20 % en quelques années ? Voici ce qui s'est passé, et pourquoi la BCE a touché aux taux d'intérêt.",
      minutes: 3,
      level: "Débutant",
      tldr: [
        "L'inflation, c'est la hausse générale et durable des prix : avec le même billet, on achète moins.",
        "En 2022, elle a dépassé 5 % en France, du jamais vu depuis le milieu des années 1980 [1].",
        "Pour la freiner, les banques centrales augmentent leurs taux d'intérêt : emprunter coûte plus cher, on dépense moins, les prix ralentissent."
      ],
      sections: [
        {
          title: "D'où vient l'inflation ?",
          paragraphs: [
            "Deux grandes causes. Soit les coûts de production montent (énergie, matières premières, salaires) et les entreprises répercutent sur les prix. Soit la demande est plus forte que ce que l'économie peut produire, et les prix grimpent.",
            "En 2021-2022, les deux se sont cumulées : la reprise après le Covid a fait exploser la demande, les chaînes d'approvisionnement étaient désorganisées, puis la guerre en Ukraine a fait flamber le gaz, le pétrole et les céréales."
          ]
        },
        {
          title: "Le rôle de la banque centrale",
          paragraphs: [
            "Dans la zone euro, c'est la Banque centrale européenne (BCE) qui veille sur les prix. Son objectif : une inflation proche de 2 % par an [2]. Ni trop (on s'appauvrit), ni trop peu (l'économie s'endort).",
            "Son outil principal, ce sont les taux directeurs : le prix auquel les banques empruntent de l'argent. Entre 2022 et 2023, la BCE les a fait passer d'un niveau négatif à 4 %, la hausse la plus rapide de son histoire [2]."
          ]
        },
        {
          title: "Pourquoi monter les taux calme les prix",
          paragraphs: [
            "Quand les taux montent, les crédits immobiliers, auto ou d'entreprise deviennent plus chers. Les ménages et les entreprises empruntent et dépensent moins, la demande ralentit, et les prix avec elle.",
            "Le revers : moins d'investissement, un marché immobilier qui se grippe et un risque de ralentir trop fort l'économie. C'est un réglage délicat, un peu comme freiner une voiture sans la faire caler."
          ]
        }
      ],
      forMe: "Si l'inflation est à 5 % et que ton salaire augmente de 2 %, ton pouvoir d'achat baisse. Et quand les taux montent, ton futur crédit immobilier coûte plus cher, mais ton livret d'épargne rapporte un peu plus.",
      figures: [
        { value: "2 %", label: "l'objectif d'inflation de la BCE", src: 2 },
        { value: "+5,2 %", label: "l'inflation en France en 2022", src: 1 },
        { value: "4 %", label: "le taux de dépôt de la BCE fin 2023", src: 2 }
      ],
      terms: ["inflation", "banque-centrale", "taux-directeur", "pouvoir-achat", "chaine-appro"],
      quiz: [
        {
          q: "Quel est l'objectif d'inflation de la BCE ?",
          options: ["0 %", "Environ 2 %", "5 %", "Aucun, elle ne s'en occupe pas"],
          answer: 1,
          explain: "La BCE vise une inflation proche de 2 % : assez pour que l'économie tourne, pas assez pour ronger le pouvoir d'achat."
        },
        {
          q: "Pour freiner l'inflation, une banque centrale…",
          options: ["baisse ses taux", "imprime plus de billets", "augmente ses taux", "bloque les prix dans les magasins"],
          answer: 2,
          explain: "En augmentant les taux, elle rend le crédit plus cher : on emprunte et on dépense moins, ce qui ralentit la hausse des prix."
        }
      ],
      sources: [
        { short: "Insee", name: "Insee, indice des prix à la consommation (moyennes annuelles)", url: "https://www.insee.fr" },
        { short: "BCE", name: "Banque centrale européenne, taux directeurs", url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/key_ecb_interest_rates/html/index.en.html" }
      ],
      visuals: [
        {
          kind: "chart",
          type: "bar",
          title: "L'inflation en France depuis 2015",
          subtitle: "Hausse moyenne des prix à la consommation sur l'année",
          xLabel: "Année",
          unit: "Inflation (%)",
          suffix: " %",
          data: [["2015", 0.0], ["2016", 0.2], ["2017", 1.0], ["2018", 1.8], ["2019", 1.1], ["2020", 0.5], ["2021", 1.6], ["2022", 5.2], ["2023", 4.9], ["2024", 2.0]],
          source: "Insee, indice des prix à la consommation"
        }
      ]
    },

    {
      id: "droits-de-douane",
      emoji: "🚧",
      theme: "mix",
      title: "Droits de douane : comprendre la guerre commerciale",
      hook: "Les États-Unis taxent les produits chinois, la Chine riposte, l'Europe est prise entre les deux. Qui paie vraiment l'addition ?",
      minutes: 3,
      level: "Débutant",
      tldr: [
        "Un droit de douane est une taxe sur un produit importé. Il rend les produits étrangers plus chers que les produits locaux.",
        "En 2025, les États-Unis ont fortement relevé leurs droits de douane, contre la Chine mais aussi contre leurs alliés, dont l'Union européenne.",
        "La taxe est payée par l'importateur, et souvent répercutée sur le consommateur final."
      ],
      sections: [
        {
          title: "Pourquoi un pays taxe-t-il les importations ?",
          paragraphs: [
            "Pour protéger ses entreprises de la concurrence étrangère, pour relocaliser des usines, pour faire rentrer de l'argent dans les caisses de l'État, ou pour faire pression sur un autre pays dans une négociation.",
            "C'est ce qu'on appelle le protectionnisme, l'inverse du libre-échange qui a dominé le monde depuis les années 1990."
          ]
        },
        {
          title: "Qui paie vraiment ?",
          paragraphs: [
            "Contrairement à une idée reçue, ce n'est pas le pays exportateur qui verse la taxe. C'est l'entreprise qui importe le produit, au moment où il passe la frontière.",
            "Elle a alors trois choix : augmenter ses prix (le consommateur paie), réduire sa marge (l'entreprise paie) ou changer de fournisseur. Dans les faits, c'est souvent un mélange des trois."
          ]
        },
        {
          title: "Le risque de l'escalade",
          paragraphs: [
            "Quand un pays taxe, l'autre riposte souvent par ses propres taxes. C'est l'engrenage de la guerre commerciale.",
            "L'histoire sert d'avertissement : en 1930, la loi américaine Smoot-Hawley a augmenté les droits de douane sur des milliers de produits. Les représailles qui ont suivi ont fait chuter le commerce mondial et aggravé la Grande Dépression."
          ]
        }
      ],
      forMe: "Ton smartphone, tes vêtements ou les pièces de ta voiture traversent souvent plusieurs frontières avant d'arriver chez toi. Chaque nouvelle taxe peut se retrouver dans le prix final, et les entreprises européennes qui exportent (vin, luxe, aéronautique) peuvent perdre des clients.",
      figures: [
        { value: "1930", label: "Smoot-Hawley, le contre-exemple historique" },
        { value: "≈ 15 %", label: "le taux américain négocié avec l'UE à l'été 2025 sur la plupart des produits" }
      ],
      terms: ["droits-de-douane", "protectionnisme", "libre-echange", "mondialisation"],
      quiz: [
        {
          q: "Qui verse concrètement un droit de douane ?",
          options: ["Le pays qui exporte", "L'entreprise qui importe", "L'Organisation mondiale du commerce", "Personne, c'est symbolique"],
          answer: 1,
          explain: "C'est l'importateur qui paie à la frontière. Il peut ensuite répercuter tout ou partie de la taxe sur ses clients."
        },
        {
          q: "Le contraire du protectionnisme, c'est…",
          options: ["le libre-échange", "le communisme", "l'inflation", "l'embargo"],
          answer: 0,
          explain: "Le libre-échange consiste à réduire au maximum les barrières (taxes, quotas) entre pays pour faciliter le commerce."
        }
      ],
      sources: [
        { short: "OMC", name: "Organisation mondiale du commerce, les droits de douane", url: "https://www.wto.org" },
        { short: "Commission européenne", name: "Commission européenne, relations commerciales UE–États-Unis", url: "https://policy.trade.ec.europa.eu" }
      ]
    },

    {
      id: "routes-maritimes",
      emoji: "🚢",
      theme: "geo",
      title: "Ormuz, Suez, Malacca : ces passages étroits qui tiennent l'économie mondiale",
      hook: "Quelques dizaines de kilomètres de mer suffisent à faire bondir le prix du pétrole. Voici pourquoi.",
      minutes: 4,
      level: "Débutant",
      tldr: [
        "Environ 80 % des marchandises échangées dans le monde voyagent par bateau [1].",
        "Beaucoup de ces navires doivent passer par quelques détroits et canaux très étroits : Ormuz, Bab-el-Mandeb, Suez, Malacca, Panama.",
        "Si l'un d'eux est bloqué ou menacé, les délais s'allongent, l'assurance et le transport coûtent plus cher, et les prix montent."
      ],
      sections: [
        {
          title: "Le détroit d'Ormuz, le robinet du pétrole",
          paragraphs: [
            "Entre l'Iran et la péninsule arabique, le détroit d'Ormuz voit passer environ un cinquième du pétrole consommé dans le monde [2], venu d'Arabie saoudite, d'Irak, des Émirats, du Koweït ou du Qatar (pour le gaz).",
            "La moindre tension dans la région fait réagir les marchés : même sans blocage réel, la simple menace suffit à faire grimper le prix du baril.",
            "En 2026, le scénario redouté est devenu réalité : après les frappes américaines et israéliennes contre l'Iran, Téhéran a bloqué le détroit pendant des mois. Le baril a dépassé 100 dollars et le gazole a battu des records en Europe [3]."
          ]
        },
        {
          title: "La mer Rouge et le canal de Suez",
          paragraphs: [
            "Le canal de Suez, en Égypte, relie la Méditerranée à la mer Rouge : c'est le raccourci entre l'Europe et l'Asie. Pour y accéder par le sud, il faut passer le détroit de Bab-el-Mandeb, au large du Yémen.",
            "Fin 2023, les rebelles houthis du Yémen ont commencé à attaquer des navires marchands. Beaucoup d'armateurs ont préféré contourner l'Afrique par le cap de Bonne-Espérance, soit environ 10 à 14 jours de trajet en plus."
          ]
        },
        {
          title: "Malacca et Panama",
          paragraphs: [
            "Le détroit de Malacca, entre la Malaisie et l'Indonésie, est la grande autoroute entre l'océan Indien et le Pacifique. Une large part du commerce et du pétrole à destination de la Chine, du Japon et de la Corée y transite.",
            "Le canal de Panama, lui, fonctionne grâce à de l'eau douce venue d'un lac. Lors de la sécheresse de 2023, les autorités ont dû limiter le nombre de passages : une preuve que le climat aussi peut perturber le commerce."
          ]
        }
      ],
      forMe: "Quand un détroit est menacé, le prix du plein d'essence peut monter en quelques jours. Et quand les cargos font le tour de l'Afrique, certains produits importés d'Asie arrivent plus tard et plus cher.",
      figures: [
        { value: "≈ 80 %", label: "du commerce mondial (en volume) se fait par la mer", src: 1 },
        { value: "≈ 1/5", label: "du pétrole mondial passait par Ormuz avant 2026", src: 2 },
        { value: "+10 à 14 j", label: "pour contourner l'Afrique au lieu de Suez" }
      ],
      terms: ["detroit", "chaine-appro", "opep", "mondialisation"],
      quiz: [
        {
          q: "Quel détroit est surnommé « le robinet du pétrole mondial » ?",
          options: ["Gibraltar", "Ormuz", "Le Bosphore", "La Manche"],
          answer: 1,
          explain: "Environ un cinquième du pétrole consommé dans le monde passe par le détroit d'Ormuz, entre l'Iran et la péninsule arabique."
        },
        {
          q: "Pourquoi de nombreux navires ont-ils évité la mer Rouge à partir de fin 2023 ?",
          options: ["Le canal de Suez était fermé pour travaux", "À cause d'attaques des Houthis du Yémen", "À cause d'une sécheresse", "Parce que l'Égypte avait doublé les tarifs"],
          answer: 1,
          explain: "Les attaques des Houthis contre des navires marchands ont poussé beaucoup d'armateurs à contourner l'Afrique, plus long mais plus sûr."
        }
      ],
      sources: [
        { short: "CNUCED", name: "CNUCED, Review of Maritime Transport", url: "https://unctad.org/topic/transport-and-trade-logistics/review-of-maritime-transport" },
        { short: "EIA", name: "Agence américaine d'information sur l'énergie, « World Oil Transit Chokepoints »", url: "https://www.eia.gov/international/analysis/special-topics/World_Oil_Transit_Chokepoints" },
        { short: "House of Commons Library", name: "House of Commons Library, crise d'Ormuz 2026", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10636/" }
      ],
      visuals: [
        {
          kind: "map",
          title: "Les passages qui tiennent le commerce mondial",
          intro: "Touche un passage pour zoomer dessus.",
          points: [
            { name: "Ormuz", coords: [56.4, 26.5], zoom: 10, text: "Entre l'Iran et Oman. Environ un cinquième du pétrole consommé dans le monde y passait avant la crise de 2026 (EIA)." },
            { name: "Bab-el-Mandeb", coords: [43.33, 12.6], zoom: 10, text: "Entre le Yémen et Djibouti, l'entrée sud de la mer Rouge. Zone des attaques houthies depuis fin 2023." },
            { name: "Suez", coords: [32.35, 30.6], zoom: 10, text: "Le canal égyptien relie la Méditerranée à la mer Rouge : le raccourci entre l'Europe et l'Asie." },
            { name: "Cap de Bonne-Espérance", coords: [18.47, -34.36], zoom: 16, text: "Le détour par le sud de l'Afrique quand la mer Rouge est trop dangereuse : environ 10 à 14 jours de mer en plus." },
            { name: "Malacca", coords: [100.9, 2.6], zoom: 14, text: "Entre la Malaisie et l'Indonésie : l'autoroute entre l'océan Indien et le Pacifique, vitale pour la Chine, le Japon et la Corée." },
            { name: "Panama", coords: [-79.7, 9.1], zoom: 10, text: "Le canal relie l'Atlantique au Pacifique. Il fonctionne avec l'eau douce du lac Gatún : la sécheresse de 2023 a forcé à limiter les passages." }
          ],
          source: "EIA ; CNUCED"
        }
      ]
    },

    {
      id: "semi-conducteurs",
      emoji: "💾",
      theme: "mix",
      title: "Puces électroniques : pourquoi Taïwan est au cœur du monde",
      hook: "Ton téléphone, ta voiture et l'intelligence artificielle dépendent de minuscules puces fabriquées en grande partie sur une seule île.",
      minutes: 4,
      level: "Intermédiaire",
      tldr: [
        "Les semi-conducteurs (ou puces) sont le « cerveau » de presque tous les objets électroniques.",
        "Les puces les plus avancées sont fabriquées en très grande majorité à Taïwan, par l'entreprise TSMC.",
        "États-Unis, Chine et Europe se livrent une course pour sécuriser cette technologie devenue stratégique."
      ],
      sections: [
        {
          title: "Une chaîne mondiale ultra-spécialisée",
          paragraphs: [
            "Fabriquer une puce mobilise plusieurs pays : la conception est souvent américaine (Nvidia, Apple, Qualcomm), les machines les plus pointues sont néerlandaises (ASML est le seul fabricant au monde des machines de lithographie EUV), et la fabrication des puces les plus fines se fait à Taïwan.",
            "Cette spécialisation est très efficace, mais elle crée des points de fragilité : si un maillon casse, toute la chaîne s'arrête. La pénurie de puces de 2021 a par exemple bloqué des usines automobiles dans le monde entier."
          ]
        },
        {
          title: "Pourquoi Taïwan est si sensible",
          paragraphs: [
            "La Chine considère Taïwan comme une partie de son territoire et n'exclut pas d'en reprendre le contrôle. Les États-Unis, eux, soutiennent l'île sur le plan militaire.",
            "Une crise autour de Taïwan ne serait donc pas seulement un conflit régional : elle pourrait priver le monde de la majorité de ses puces avancées. Certains parlent de « bouclier de silicium » : l'importance de TSMC protégerait l'île, car personne n'a intérêt à ce que sa production s'arrête."
          ]
        },
        {
          title: "La course à la souveraineté",
          paragraphs: [
            "Depuis 2022, les États-Unis limitent l'exportation de puces et de machines avancées vers la Chine, pour freiner ses progrès, notamment en intelligence artificielle. La Chine investit massivement pour produire ses propres puces.",
            "Les États-Unis (CHIPS Act) comme l'Union européenne (European Chips Act) subventionnent aussi la construction d'usines sur leur sol pour être moins dépendants de l'Asie."
          ]
        }
      ],
      forMe: "Une seule usine à l'arrêt peut retarder la livraison de ta voiture, faire monter le prix de ta console ou ralentir le développement des outils d'IA que tu utilises.",
      figures: [
        { value: "≈ 90 %", label: "des puces les plus avancées sont produites à Taïwan" },
        { value: "1", label: "seul fabricant de machines EUV au monde : ASML (Pays-Bas)" }
      ],
      terms: ["semi-conducteur", "souverainete", "dependance", "chaine-appro"],
      quiz: [
        {
          q: "Quelle entreprise fabrique la majorité des puces les plus avancées ?",
          options: ["Apple", "TSMC", "Samsung", "Intel"],
          answer: 1,
          explain: "TSMC, basée à Taïwan, fabrique les puces conçues par Apple, Nvidia et beaucoup d'autres. Apple conçoit ses puces mais ne les fabrique pas."
        },
        {
          q: "Que désigne le « bouclier de silicium » ?",
          options: [
            "Un système de défense antimissile",
            "L'idée que l'importance mondiale des puces taïwanaises protège l'île",
            "Une protection d'écran de téléphone",
            "Une alliance militaire en Asie"
          ],
          answer: 1,
          explain: "Comme le monde entier dépend des puces taïwanaises, une attaque contre l'île aurait un coût énorme pour tous, y compris pour la Chine."
        }
      ],
      sources: [
        { short: "SIA", name: "Semiconductor Industry Association", url: "https://www.semiconductors.org/" },
        { short: "Commission européenne", name: "Commission européenne, European Chips Act", url: "https://digital-strategy.ec.europa.eu/fr/policies/european-chips-act" }
      ],
      visuals: [
        {
          kind: "map",
          title: "Une puce, trois continents",
          intro: "Les étapes clés de la fabrication d'une puce avancée. Touche un lieu pour zoomer.",
          points: [
            { name: "Santa Clara", coords: [-121.96, 37.35], zoom: 12, text: "La Silicon Valley, en Californie : c'est ici que Nvidia (entre autres) conçoit ses puces. Mais elle ne les fabrique pas." },
            { name: "Veldhoven", coords: [5.4, 51.42], zoom: 12, text: "Aux Pays-Bas, siège d'ASML, seul fabricant au monde des machines de lithographie EUV indispensables aux puces les plus fines." },
            { name: "Hsinchu", coords: [120.97, 24.8], zoom: 12, text: "Au nord de Taïwan, siège de TSMC, qui fabrique la très grande majorité des puces les plus avancées du monde." },
            { name: "Détroit de Taïwan", coords: [119.6, 24.3], zoom: 9, text: "Environ 130 km au plus étroit séparent Taïwan de la Chine continentale." }
          ],
          source: "SIA ; sites des entreprises"
        }
      ]
    },

    {
      id: "sanctions",
      emoji: "🔒",
      theme: "geo",
      title: "Sanctions économiques : faire la guerre sans armes ?",
      hook: "Depuis l'invasion de l'Ukraine, la Russie est visée par des milliers de sanctions. Comment ça marche, et est-ce que ça fonctionne ?",
      minutes: 4,
      level: "Intermédiaire",
      tldr: [
        "Une sanction économique est une mesure qui coupe ou limite les échanges avec un pays, une entreprise ou une personne pour faire pression.",
        "Après l'invasion de l'Ukraine en 2022, l'Occident a gelé environ 300 milliards de dollars de réserves de la banque centrale russe et exclu plusieurs banques russes du système SWIFT [1].",
        "Les sanctions affaiblissent une économie, mais le pays visé trouve souvent des contournements."
      ],
      sections: [
        {
          title: "La boîte à outils",
          paragraphs: [
            "Il existe plusieurs types de sanctions : l'embargo (interdire d'acheter ou de vendre certains produits), le gel des avoirs (bloquer l'argent placé à l'étranger), l'interdiction de voyager pour certaines personnalités, ou l'exclusion du système financier international.",
            "Elles peuvent viser un pays entier ou des cibles précises : des oligarques, des entreprises d'armement, des banques."
          ]
        },
        {
          title: "Le cas de la Russie",
          paragraphs: [
            "Après février 2022, l'Union européenne, les États-Unis et leurs alliés ont adopté des sanctions sans précédent : gel des réserves de la banque centrale russe, exclusion de banques de SWIFT (la messagerie qui permet les virements internationaux), embargo sur le pétrole russe transporté par mer et plafonnement de son prix.",
            "L'Europe a aussi fortement réduit ses achats de gaz russe, dont elle dépendait beaucoup, ce qui a contribué à la flambée des prix de l'énergie."
          ]
        },
        {
          title: "Est-ce que ça marche ?",
          paragraphs: [
            "Oui et non. La Russie a perdu l'accès à des technologies et à une partie de ses revenus. Mais elle a redirigé ses ventes de pétrole vers la Chine et l'Inde, et utilise une « flotte fantôme » de vieux pétroliers pour contourner les règles.",
            "C'est la limite des sanctions : elles sont d'autant plus efficaces que beaucoup de pays les appliquent. Et elles ont aussi un coût pour ceux qui les imposent."
          ]
        }
      ],
      forMe: "La hausse des factures d'énergie en Europe en 2022 est en partie liée à la rupture avec le gaz russe : les sanctions ont un prix, aussi pour ceux qui les décident.",
      figures: [
        { value: "≈ 300 Md$", label: "de réserves russes immobilisées par l'Occident" },
        { value: "2022", label: "début des sanctions massives contre la Russie" }
      ],
      terms: ["sanctions", "embargo", "swift", "g7", "dependance"],
      quiz: [
        {
          q: "À quoi sert SWIFT ?",
          options: [
            "C'est une monnaie numérique",
            "C'est la messagerie qui permet aux banques de faire des virements internationaux",
            "C'est une agence de notation",
            "C'est un accord militaire"
          ],
          answer: 1,
          explain: "SWIFT relie plus de 11 000 institutions financières. En être exclu complique fortement les paiements avec l'étranger."
        },
        {
          q: "Comment la Russie a-t-elle contourné une partie des sanctions sur son pétrole ?",
          options: [
            "En arrêtant de produire",
            "En vendant davantage à la Chine et à l'Inde",
            "En rejoignant l'Union européenne",
            "En payant uniquement en euros"
          ],
          answer: 1,
          explain: "Elle a réorienté ses exportations vers l'Asie, notamment la Chine et l'Inde, souvent à prix réduit."
        }
      ],
      sources: [
        { short: "Conseil de l'UE", name: "Conseil de l'Union européenne, sanctions contre la Russie", url: "https://www.consilium.europa.eu/fr/policies/sanctions-against-russia/" },
        { short: "SWIFT", name: "SWIFT, à propos", url: "https://www.swift.com/about-us" }
      ]
    },

    {
      id: "dollar",
      emoji: "💵",
      theme: "eco",
      title: "Pourquoi le dollar domine le monde",
      hook: "Le pétrole se vend en dollars, les banques centrales stockent des dollars… Comment une monnaie nationale est devenue la monnaie de la planète ?",
      minutes: 3,
      level: "Intermédiaire",
      tldr: [
        "Le dollar est la principale monnaie de réserve : près de 60 % des réserves de change des banques centrales sont en dollars [1].",
        "Cette domination remonte aux accords de Bretton Woods (1944), qui ont placé le dollar au centre du système monétaire mondial.",
        "Elle donne aux États-Unis un « privilège exorbitant » : emprunter moins cher et pouvoir sanctionner d'autres pays via leur système financier."
      ],
      sections: [
        {
          title: "Une histoire qui commence en 1944",
          paragraphs: [
            "À la fin de la Seconde Guerre mondiale, 44 pays se réunissent à Bretton Woods, aux États-Unis. Ils décident que leurs monnaies seront rattachées au dollar, lui-même convertible en or.",
            "En 1971, le président Nixon met fin à la convertibilité du dollar en or. Mais l'habitude est prise : le dollar reste la monnaie de référence pour le commerce et la finance."
          ]
        },
        {
          title: "Le « privilège exorbitant »",
          paragraphs: [
            "L'expression vient du ministre français Valéry Giscard d'Estaing dans les années 1960. Comme tout le monde a besoin de dollars, les États-Unis peuvent s'endetter à moindre coût et financer leurs déficits plus facilement.",
            "Autre avantage : presque tous les paiements en dollars passent, à un moment, par des banques américaines. Cela donne à Washington un levier puissant pour sanctionner des pays ou des entreprises."
          ]
        },
        {
          title: "La fin du dollar roi ?",
          paragraphs: [
            "La Chine, la Russie et d'autres pays des BRICS cherchent à commercer davantage dans leurs propres monnaies, notamment pour échapper aux sanctions américaines. Certaines banques centrales achètent aussi beaucoup d'or.",
            "Mais remplacer le dollar est difficile : il faut une monnaie librement échangeable, des marchés financiers immenses et la confiance des investisseurs. Pour l'instant, aucune alternative ne réunit tout cela, l'euro restant loin derrière."
          ]
        }
      ],
      forMe: "Quand le dollar se renforce face à l'euro, ton voyage aux États-Unis coûte plus cher, tout comme le pétrole, qui s'achète en dollars. À l'inverse, un dollar faible rend les produits européens moins compétitifs à l'export.",
      figures: [
        { value: "≈ 58 %", label: "des réserves de change mondiales sont en dollars", src: 1 },
        { value: "≈ 20 %", label: "pour l'euro, deuxième monnaie de réserve", src: 1 },
        { value: "1971", label: "fin de la convertibilité du dollar en or" }
      ],
      terms: ["monnaie-reserve", "banque-centrale", "brics", "sanctions"],
      quiz: [
        {
          q: "Quels accords ont placé le dollar au centre du système monétaire mondial ?",
          options: ["Le traité de Versailles", "Les accords de Bretton Woods", "Le traité de Maastricht", "Les accords de Paris"],
          answer: 1,
          explain: "En 1944, à Bretton Woods, 44 pays ont rattaché leurs monnaies au dollar, lui-même convertible en or."
        },
        {
          q: "Qui a inventé l'expression « privilège exorbitant » ?",
          options: ["Donald Trump", "Karl Marx", "Valéry Giscard d'Estaing", "Christine Lagarde"],
          answer: 2,
          explain: "Valéry Giscard d'Estaing, alors ministre des Finances, dénonçait dans les années 1960 l'avantage que le dollar donnait aux États-Unis."
        }
      ],
      sources: [
        { short: "FMI", name: "FMI, COFER : composition des réserves de change", url: "https://data.imf.org" },
        { short: "BRI", name: "Banque des règlements internationaux, enquête triennale sur les changes", url: "https://www.bis.org/statistics/rpfx22.htm" }
      ],
      visuals: [
        {
          kind: "chart",
          type: "line",
          title: "La part du dollar dans les réserves mondiales",
          subtitle: "Part des réserves de change déclarées détenue en dollars, en fin d'année",
          xLabel: "Année",
          unit: "Part (%)",
          suffix: " %",
          yMin: 0,
          data: [["1999", 71.0], ["2005", 66.5], ["2010", 62.2], ["2015", 65.7], ["2020", 59.0], ["2024", 57.8]],
          source: "FMI, COFER"
        }
      ]
    }
  ],

  glossary: [
    { id: "inflation", term: "Inflation", def: "Hausse générale et durable des prix. Avec la même somme d'argent, on peut acheter moins de choses.", example: "Si l'inflation est de 3 %, un produit à 100 € coûte 103 € un an plus tard." },
    { id: "banque-centrale", term: "Banque centrale", def: "Institution qui gère la monnaie d'un pays ou d'une zone, veille à la stabilité des prix et prête aux banques.", example: "La BCE pour la zone euro, la Fed pour les États-Unis." },
    { id: "taux-directeur", term: "Taux directeur", def: "Taux d'intérêt fixé par la banque centrale. Il influence tous les autres taux : crédits immobiliers, prêts aux entreprises, livrets d'épargne.", example: "Quand la BCE monte ses taux, ton crédit immobilier coûte plus cher." },
    { id: "pouvoir-achat", term: "Pouvoir d'achat", def: "Quantité de biens et services qu'on peut acheter avec ses revenus. Il baisse si les prix montent plus vite que les salaires.", example: "Salaire +2 % et prix +5 % : le pouvoir d'achat recule." },
    { id: "pib", term: "PIB", def: "Produit intérieur brut : la valeur de tout ce qui est produit dans un pays en un an. C'est l'indicateur le plus utilisé pour mesurer la taille d'une économie.", example: "Quand le PIB augmente, on parle de croissance." },
    { id: "recession", term: "Récession", def: "Période où l'activité économique recule. On parle souvent de récession quand le PIB baisse deux trimestres de suite.", example: "La crise de 2008 a plongé de nombreux pays en récession." },
    { id: "droits-de-douane", term: "Droits de douane", def: "Taxe payée sur un produit importé quand il passe la frontière.", example: "Un droit de douane de 25 % sur une voiture à 20 000 € ajoute 5 000 € à son coût d'importation." },
    { id: "protectionnisme", term: "Protectionnisme", def: "Politique qui protège les entreprises nationales de la concurrence étrangère, via des taxes, des quotas ou des normes.", example: "Taxer l'acier importé pour aider les aciéries locales." },
    { id: "libre-echange", term: "Libre-échange", def: "Commerce entre pays avec le moins de barrières possibles (taxes, quotas).", example: "Au sein de l'Union européenne, les marchandises circulent sans droits de douane." },
    { id: "mondialisation", term: "Mondialisation", def: "Intensification des échanges de biens, de capitaux, d'informations et de personnes à l'échelle de la planète.", example: "Un jean dessiné en Europe, cousu au Bangladesh avec du coton indien." },
    { id: "chaine-appro", term: "Chaîne d'approvisionnement", def: "Toutes les étapes, souvent réparties dans plusieurs pays, pour fabriquer et livrer un produit : matières premières, pièces, assemblage, transport.", example: "Une voiture contient des milliers de pièces venues du monde entier." },
    { id: "detroit", term: "Détroit", def: "Passage maritime étroit entre deux terres, qui relie deux mers. Certains sont des points de passage obligés pour le commerce mondial.", example: "Ormuz, Malacca, Gibraltar, Bab-el-Mandeb." },
    { id: "opep", term: "OPEP", def: "Organisation des pays exportateurs de pétrole. Ses membres (Arabie saoudite, Irak, Iran…) se coordonnent pour influencer le prix du baril. Avec la Russie et d'autres alliés, on parle d'OPEP+.", example: "Quand l'OPEP+ réduit sa production, le prix du pétrole tend à monter." },
    { id: "semi-conducteur", term: "Semi-conducteur", def: "Matériau (surtout le silicium) qui sert à fabriquer les puces électroniques, cœur de tous les appareils numériques.", example: "Un smartphone contient des dizaines de puces." },
    { id: "souverainete", term: "Souveraineté", def: "Capacité d'un État à décider par lui-même. En économie, on parle de souveraineté industrielle ou énergétique quand un pays veut produire lui-même ce qui est essentiel.", example: "Construire des usines de puces en Europe pour moins dépendre de l'Asie." },
    { id: "dependance", term: "Dépendance stratégique", def: "Situation où un pays a besoin d'un autre pour un produit essentiel (énergie, médicaments, puces…), ce qui peut devenir un moyen de pression.", example: "La dépendance de l'Europe au gaz russe avant 2022." },
    { id: "sanctions", term: "Sanctions économiques", def: "Mesures qui limitent les échanges avec un pays, une entreprise ou une personne pour la pousser à changer de comportement.", example: "Le gel des avoirs d'oligarques russes." },
    { id: "embargo", term: "Embargo", def: "Interdiction totale ou partielle de commercer certains produits avec un pays.", example: "L'embargo européen sur le pétrole russe transporté par mer." },
    { id: "swift", term: "SWIFT", def: "Réseau de messagerie sécurisé utilisé par plus de 11 000 banques dans le monde pour s'échanger des ordres de paiement internationaux.", example: "Être exclu de SWIFT, c'est comme perdre son adresse mail bancaire." },
    { id: "g7", term: "G7", def: "Groupe de sept grandes économies démocratiques : États-Unis, Japon, Allemagne, Royaume-Uni, France, Italie, Canada. L'UE participe aussi aux réunions.", example: "Le G7 coordonne souvent les sanctions occidentales." },
    { id: "brics", term: "BRICS", def: "Groupe de pays émergents formé à l'origine par le Brésil, la Russie, l'Inde, la Chine et l'Afrique du Sud, élargi depuis 2024 à d'autres pays comme l'Égypte, l'Éthiopie, l'Iran ou les Émirats arabes unis.", example: "Les BRICS veulent peser davantage face aux pays occidentaux." },
    { id: "monnaie-reserve", term: "Monnaie de réserve", def: "Monnaie que les banques centrales du monde entier conservent en grande quantité pour payer leurs importations ou stabiliser leur propre monnaie.", example: "Le dollar, puis l'euro, sont les principales monnaies de réserve." },
    { id: "dette-publique", term: "Dette publique", def: "Ensemble des emprunts accumulés par l'État et les administrations publiques. On l'exprime souvent en pourcentage du PIB.", example: "Une dette de 110 % du PIB : l'État doit plus que ce que le pays produit en un an." }
  ]
};
