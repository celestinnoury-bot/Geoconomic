// Couches du globe de la page Conflits : conflits armés, liberté de la presse, peuples et religions.
// Chaque pays : v (niveau de couleur), t (résumé au survol), text (avec [n]) et ses propres sources.
window.GEOCO = window.GEOCO || {};
window.GEOCO.conflits = window.GEOCO.conflits || {};
window.GEOCO.conflits.layers = [
 {
  "id": "conflits",
  "label": "Conflits armés",
  "intro": "Les pays touchés par un conflit armé en 2025-2026, d'après l'UCDP, ACLED, l'International Crisis Group, l'ONU et la presse. En rouge vif, les situations qui se sont aggravées en septembre selon CrisisWatch.",
  "empty": "Pas de conflit armé recensé ici",
  "legend": [
   {
    "v": 3,
    "label": "S'aggrave ce mois-ci (CrisisWatch)",
    "color": "#ff3b30"
   },
   {
    "v": 2,
    "label": "Guerre",
    "color": "#c2410c"
   },
   {
    "v": 1,
    "label": "Conflit armé",
    "color": "#f5a524"
   }
  ],
  "countries": {
   "275": {
    "v": 2,
    "name": "Palestine",
    "t": "Guerre",
    "text": "Malgré le cessez-le-feu d'octobre 2025 à Gaza, le ministère de la Santé de Gaza, administré par le Hamas, indique que les opérations israéliennes y ont tué plus de 1 000 Palestiniens depuis la trêve, chaque camp accusant l'autre de la violer [1]. En Cisjordanie, les raids israéliens se poursuivent en septembre 2026, avec des affrontements armés quasi quotidiens et des attaques de colons comme de Palestiniens [2].",
    "sources": [
     {
      "short": "Asharq Al-Awsat",
      "name": "Asharq Al-Awsat – More Than 1,000 People Have Been Killed in Gaza During Ceasefire, Health Ministry Says (2026)",
      "url": "https://english.aawsat.com/node/5285341"
     },
     {
      "short": "Crisis Group",
      "name": "International Crisis Group – CrisisWatch: September Trends and October Alerts 2026 (oct. 2026)",
      "url": "https://www.crisisgroup.org/crisiswatch/september-trends-and-october-alerts-2026"
     }
    ]
   },
   "376": {
    "v": 2,
    "name": "Israël",
    "t": "Guerre",
    "text": "Israël est en guerre à Gaza depuis octobre 2023 et a lancé avec les États-Unis, le 28 février 2026, des frappes contre l'Iran, qui a riposté par des tirs de missiles et de drones sur le territoire israélien [1]. L'UCDP compte la guerre Iran-Israël et le conflit Israël-Syrie parmi les huit conflits entre États recensés en 2025 [2].",
    "sources": [
     {
      "short": "House of Commons Library",
      "name": "House of Commons Library – Israel/US-Iran conflict 2026: Background and UK response (2026)",
      "url": "https://commonslibrary.parliament.uk/research-briefings/cbp-10521/"
     },
     {
      "short": "UCDP",
      "name": "Uppsala University / UCDP – Record number of conflicts between states (9 juin 2026)",
      "url": "https://www.uu.se/en/press/press-releases/2026/2026-06-09-ucdp-record-number-of-conflicts-between-states"
     }
    ]
   },
   "422": {
    "v": 2,
    "name": "Liban",
    "t": "Guerre",
    "text": "Israël poursuivait des frappes régulières au Liban début 2026 malgré le cessez-le-feu de novembre 2024 [2]. Le Hezbollah est entré le 2 mars 2026 dans la guerre régionale liée à l'Iran et Israël a répondu par une vaste campagne aérienne : selon le ministère libanais de la Santé, 1 039 personnes ont été tuées en un mois [1].",
    "sources": [
     {
      "short": "L'Orient Today",
      "name": "L'Orient Today – Israeli strikes have killed 1,039 and wounded 2,876 in Lebanon since March 2 (mars 2026)",
      "url": "https://today.lorientlejour.com/article/1500493/israeli-strikes-have-killed-1039-and-wounded-2876-in-lebanon-since-march-2-.html"
     },
     {
      "short": "Khaleej Times",
      "name": "Khaleej Times – Lebanon says 12 dead in Israeli strikes on east, south (févr. 2026)",
      "url": "https://www.khaleejtimes.com/world/mena/lebanon-12-dead-israeli-strikes-east-south"
     }
    ]
   },
   "760": {
    "v": 2,
    "name": "Syrie",
    "t": "Guerre",
    "text": "En juillet 2025, des affrontements dans la province de Soueïda ont fait au moins 1 700 morts selon l'ONU, Israël frappant les forces gouvernementales [1]. En janvier 2026, les forces du gouvernement de transition ont combattu les Forces démocratiques syriennes (FDS) à Alep puis à Raqqa, avant un cessez-le-feu [2].",
    "sources": [
     {
      "short": "EUAA",
      "name": "Agence de l'Union européenne pour l'asile (EUAA) – Syrie : situation sécuritaire (2026)",
      "url": "https://www.euaa.europa.eu/print/pdf/node/31862"
     },
     {
      "short": "ecoi.net / ACCORD",
      "name": "ecoi.net (ACCORD) – Compilation sur les affrontements gouvernement-FDS, janvier 2026",
      "url": "https://www.ecoi.net/en/document/2135744.html"
     }
    ]
   },
   "887": {
    "v": 3,
    "name": "Yémen",
    "t": "S'aggrave en septembre",
    "text": "Le 3 septembre 2026, les Houthis ont lancé une offensive contre le gouvernement reconnu par l'ONU et soutenu par l'Arabie saoudite, d'abord à Taëz puis vers Marib, ce qui constitue les combats les plus meurtriers depuis la fin de la trêve de 2022 [1][2]. CrisisWatch classe la situation parmi celles qui se sont aggravées en septembre 2026 [3].",
    "sources": [
     {
      "short": "Al Jazeera",
      "name": "Al Jazeera – Houthis, Yemeni forces engaged in fierce battles: Why each front matters (10 sept. 2026)",
      "url": "https://www.aljazeera.com/news/2026/9/10/houthis-yemeni-forces-engaged-in-fierce-battles-why-each-front-matters"
     },
     {
      "short": "CNN",
      "name": "CNN – As US steers clear of Yemen fight, the Iran-backed Houthis launch next phase of campaign (21 sept. 2026)",
      "url": "https://www.cnn.com/2026/09/21/middleeast/yemen-houthis-offensive-intl"
     },
     {
      "short": "CrisisWatch",
      "name": "International Crisis Group, « CrisisWatch: September Trends and October Alerts 2026 »",
      "url": "https://www.crisisgroup.org/crisiswatch/september-trends-and-october-alerts-2026"
     }
    ]
   },
   "682": {
    "v": 3,
    "name": "Arabie saoudite",
    "t": "S'aggrave en septembre",
    "text": "Engagée militairement au Yémen, l'Arabie saoudite est visée par des attaques de missiles et de drones houthistes : le 8 septembre 2026, des frappes sur Abha, Khamis Mushait, Jazan et Najran ont fait au moins 73 blessés selon la coalition menée par Riyad [1]. CrisisWatch classe la situation parmi celles qui se sont aggravées en septembre 2026 [2].",
    "sources": [
     {
      "short": "Al-Monitor",
      "name": "Al-Monitor – Houthi attacks disrupt Saudi energy facilities, wound 73, authorities say (sept. 2026)",
      "url": "https://www.al-monitor.com/originals/2026/09/houthi-attacks-disrupt-saudi-energy-facilities-wound-73-authorities-say"
     },
     {
      "short": "CrisisWatch",
      "name": "International Crisis Group, « CrisisWatch: September Trends and October Alerts 2026 »",
      "url": "https://www.crisisgroup.org/crisiswatch/september-trends-and-october-alerts-2026"
     }
    ]
   },
   "368": {
    "v": 1,
    "name": "Irak",
    "t": "Conflit armé",
    "text": "L'Irak a été entraîné dans la guerre de 2026 contre l'Iran : des milices pro-iraniennes ont attaqué des intérêts américains, tandis que des frappes attribuées aux États-Unis et à l'Iran ont visé respectivement des factions armées et le Kurdistan irakien [1].",
    "sources": [
     {
      "short": "The New Arab",
      "name": "The New Arab – Deadly strikes in Iraq blamed on US and Iran (2026)",
      "url": "https://www.newarab.com/news/deadly-strikes-iraq-blamed-us-and-iran"
     }
    ]
   },
   "364": {
    "v": 2,
    "name": "Iran",
    "t": "Guerre",
    "text": "Après la « guerre des douze jours » avec Israël en juin 2025, l'Iran a été frappé le 28 février 2026 par les États-Unis et Israël ; malgré un cessez-le-feu et un accord en juin, des frappes limitées se poursuivaient en septembre 2026 [1]. L'ONG HRANA a recensé 1 701 civils tués en Iran, selon le CFR [1]. CrisisWatch l'a placé sous alerte pour octobre 2026 [3].",
    "sources": [
     {
      "short": "CFR",
      "name": "Council on Foreign Relations – Global Conflict Tracker : Conflict With Iran (2026)",
      "url": "https://www.cfr.org/global-conflict-tracker/conflict/confrontation-between-united-states-and-iran"
     },
     {
      "short": "UCDP",
      "name": "Uppsala University / UCDP – Record number of conflicts between states (9 juin 2026)",
      "url": "https://www.uu.se/en/press/press-releases/2026/2026-06-09-ucdp-record-number-of-conflicts-between-states"
     },
     {
      "short": "CrisisWatch",
      "name": "International Crisis Group, « CrisisWatch: September Trends and October Alerts 2026 »",
      "url": "https://www.crisisgroup.org/crisiswatch/september-trends-and-october-alerts-2026"
     }
    ]
   },
   "729": {
    "v": 2,
    "name": "Soudan",
    "t": "Guerre",
    "text": "Depuis avril 2023, l'armée et les Forces de soutien rapide (FSR) s'affrontent ; les FSR ont pris El-Fasher (Darfour) en octobre 2025 et le front s'est déplacé vers le Kordofan [1]. Début octobre 2026, une frappe de drone sur une résidence universitaire d'El-Obeid a fait 5 morts selon un réseau de médecins soudanais [2].",
    "sources": [
     {
      "short": "Al Jazeera",
      "name": "Al Jazeera – Sudan army withdraws from Darfur's el-Fasher, UN warns of RSF atrocities (28 oct. 2025)",
      "url": "https://www.aljazeera.com/news/2025/10/28/sudan-army-announces-withdrawal-from-el-fasher-un-warns-of-rsf-atrocities"
     },
     {
      "short": "Sudan Tribune",
      "name": "Sudan Tribune – Drone strike kills five at university dorm in Sudan's El Obeid (oct. 2026)",
      "url": "https://sudantribune.com/article/319476"
     }
    ]
   },
   "728": {
    "v": 1,
    "name": "Soudan du Sud",
    "t": "Conflit armé",
    "text": "Depuis fin décembre 2025, l'armée (SSPDF) et l'opposition armée (SPLA-IO) se combattent dans l'État du Jonglei, avec des frappes aériennes ; l'ONU estimait début février 2026 à environ 280 000 le nombre de personnes déplacées [1].",
    "sources": [
     {
      "short": "OCHA",
      "name": "OCHA – South Sudan: Conflict in Jonglei State, Flash Update No. 5 (6 févr. 2026)",
      "url": "https://reliefweb.int/report/south-sudan/south-sudan-conflict-jonglei-state-flash-update-no-5-6-february-2026"
     }
    ]
   },
   "231": {
    "v": 3,
    "name": "Éthiopie",
    "t": "S'aggrave en septembre",
    "text": "Le 23 septembre 2026, les forces tigréennes, alliées à d'autres groupes armés dont des milices Fano en Amhara, ont lancé une offensive contre l'armée fédérale ; les combats se sont étendus au Tigré, à l'Amhara et à l'Afar [1][2]. CrisisWatch classe la situation parmi celles qui se sont aggravées en septembre 2026 [3].",
    "sources": [
     {
      "short": "Al Jazeera",
      "name": "Al Jazeera – Fighting widens across Ethiopia as Tigray clashes escalate (24 sept. 2026)",
      "url": "https://www.aljazeera.com/news/2026/9/24/fighting-widens-across-ethiopia-as-tigray-clashes-escalate"
     },
     {
      "short": "Chatham House",
      "name": "Chatham House – War has returned to Tigray. This time it may not stay in Ethiopia (oct. 2026)",
      "url": "https://www.chathamhouse.org/2026/10/war-has-returned-tigray-time-it-may-not-stay-ethiopia"
     },
     {
      "short": "CrisisWatch",
      "name": "International Crisis Group, « CrisisWatch: September Trends and October Alerts 2026 »",
      "url": "https://www.crisisgroup.org/crisiswatch/september-trends-and-october-alerts-2026"
     }
    ]
   },
   "232": {
    "v": 1,
    "name": "Érythrée",
    "t": "Conflit armé",
    "text": "Pas de combats directs signalés sur son sol, mais un risque élevé : l'Éthiopie accuse l'Érythrée de soutenir les groupes rebelles et lui a demandé en février 2026 de retirer ses troupes de son territoire, ce qu'Asmara dément [1]. Les analystes craignent que la guerre au Tigré ne déborde [2]. CrisisWatch l'a placé sous alerte pour octobre 2026 [3].",
    "sources": [
     {
      "short": "Africanews",
      "name": "Africanews – Ethiopia-Eritrea tensions: Fears of armed confrontation grow (9 févr. 2026)",
      "url": "https://www.africanews.com/amp/2026/02/09/ethiopia-eritrea-tensions-fears-of-armed-confontation-grow/"
     },
     {
      "short": "Chatham House",
      "name": "Chatham House – War has returned to Tigray. This time it may not stay in Ethiopia (oct. 2026)",
      "url": "https://www.chathamhouse.org/2026/10/war-has-returned-tigray-time-it-may-not-stay-ethiopia"
     },
     {
      "short": "CrisisWatch",
      "name": "International Crisis Group, « CrisisWatch: September Trends and October Alerts 2026 »",
      "url": "https://www.crisisgroup.org/crisiswatch/september-trends-and-october-alerts-2026"
     }
    ]
   },
   "706": {
    "v": 2,
    "name": "Somalie",
    "t": "Guerre",
    "text": "L'armée somalienne et ses partenaires combattent le groupe djihadiste al-Shabaab ; selon les données ACLED reprises par l'EUAA, les violences ont fait environ 8 750 morts entre avril 2025 et mars 2026 [1]. Les opérations militaires se poursuivent en 2026, notamment dans le Bas-Djouba [2].",
    "sources": [
     {
      "short": "EUAA / ACLED",
      "name": "EUAA – Somalia: Security situation, recent overall security trends (2026, données ACLED)",
      "url": "https://www.euaa.europa.eu/somalia-security-situation/14-recent-overall-security-trends"
     },
     {
      "short": "Dawan Africa",
      "name": "Dawan Africa – Somalia says 16 al-Shabaab fighters killed in Lower Juba operation (juil. 2026)",
      "url": "https://www.dawan.africa/news/somalia-says-16-al-shabaab-fighters-killed-in-lower-juba-operation"
     }
    ]
   },
   "180": {
    "v": 2,
    "name": "RD Congo",
    "t": "Guerre",
    "text": "Dans l'est du pays, le groupe armé M23, soutenu par le Rwanda selon de nombreuses sources, continue d'affronter les forces pro-gouvernementales au Nord et au Sud-Kivu [1]. Un accord sur une feuille de route pour des pourparlers de paix a été conclu le 23 août 2026 en Suisse [2].",
    "sources": [
     {
      "short": "Critical Threats",
      "name": "Critical Threats (AEI) – Congo War Security Review (12 juin 2026)",
      "url": "https://www.criticalthreats.org/briefs/congo-war-security-review/june-12-2026"
     },
     {
      "short": "Oman Observer",
      "name": "Oman Observer – DR Congo, M23 fighters agree road map for peace talks (23 août 2026)",
      "url": "https://www.omanobserver.om/article/1194955/world/europe/dr-congo-m23-fighters-agree-road-map-for-peace-talks"
     }
    ]
   },
   "854": {
    "v": 2,
    "name": "Burkina Faso",
    "t": "Guerre",
    "text": "Le groupe djihadiste JNIM, lié à al-Qaïda, multiplie les attaques contre l'armée et les civils ; le 14 février 2026, il a exécuté au moins 34 civils lors d'une attaque à Titao selon Human Rights Watch [1]. Les données ACLED comptent 1 720 morts sur le seul deuxième trimestre 2025 [2].",
    "sources": [
     {
      "short": "HRW",
      "name": "Human Rights Watch – Burkina Faso: Islamist Armed Group Commits New Atrocities (12 mars 2026)",
      "url": "https://www.hrw.org/news/2026/03/12/burkina-faso-islamist-armed-group-commits-new-atrocities"
     },
     {
      "short": "ACCORD / ACLED",
      "name": "ACCORD – ACLED data briefing Burkina Faso, Q2 2025",
      "url": "https://www.ecoi.net/en/file/local/2129187/2025q2BurkinaFaso_en.pdf"
     }
    ]
   },
   "466": {
    "v": 2,
    "name": "Mali",
    "t": "Guerre",
    "text": "Depuis le 25 avril 2026, le JNIM et le Front de libération de l'Azawad (FLA) mènent une offensive conjointe : ils ont pris plusieurs villes du nord, dont Kidal, et installé des points de contrôle autour de Bamako [1].",
    "sources": [
     {
      "short": "Al Jazeera",
      "name": "Al Jazeera – Rebel checkpoints reported around Mali's capital, northern town seized (1er mai 2026)",
      "url": "https://www.aljazeera.com/news/2026/5/1/rebel-checkpoints-reported-mali-capital-town-seized"
     }
    ]
   },
   "562": {
    "v": 2,
    "name": "Niger",
    "t": "Guerre",
    "text": "Des groupes djihadistes multiplient les attaques, surtout dans la région de Tillabéri : en janvier 2026, une attaque y a tué au moins 31 civils [1], et un militant cité par AllAfrica estime à au moins 223 le nombre de morts en juin 2026 dans le pays [2].",
    "sources": [
     {
      "short": "Channels TV",
      "name": "Channels TV – Suspected jihadist attack kills 31 civilians in Niger Republic (20 janv. 2026)",
      "url": "https://www.channelstv.com/2026/01/20/suspected-jihadist-attack-kills-31-civilians-in-niger-republic/"
     },
     {
      "short": "AllAfrica",
      "name": "AllAfrica – Niger : la junte de plus en plus sous pression des groupes armés rebelles (22 juil. 2026)",
      "url": "https://fr.allafrica.com/stories/202607220261.html"
     }
    ]
   },
   "566": {
    "v": 2,
    "name": "Nigeria",
    "t": "Guerre",
    "text": "Le pays fait face à plusieurs violences armées : Boko Haram et l'État islamique (ISWAP) dans le nord-est, des « bandits » armés auteurs de massacres et d'enlèvements dans le nord-ouest, et des violences intercommunautaires [1][2]. En février 2026, une attaque a fait au moins 38 morts dans l'État de Zamfara [2].",
    "sources": [
     {
      "short": "ICIR",
      "name": "ICIR Nigeria – Mass atrocities worsen as Nigeria records over 30,000 deaths in 6 years (2026)",
      "url": "https://www.icirnigeria.org/?p=277253"
     },
     {
      "short": "The Peninsula",
      "name": "The Peninsula (Qatar) – 38 killed in armed attack in northwestern Nigeria (21 févr. 2026)",
      "url": "https://thepeninsulaqatar.com/article/21/02/2026/38-killed-in-armed-attack-in-northwestern-nigeria"
     }
    ]
   },
   "120": {
    "v": 1,
    "name": "Cameroun",
    "t": "Conflit armé",
    "text": "Dans les régions anglophones du Nord-Ouest et du Sud-Ouest, le conflit entre l'armée et des groupes séparatistes se poursuit : le 14 janvier 2026, une attaque a tué au moins 14 civils, dont sept enfants, dans le département de Donga-Mantung [1][2].",
    "sources": [
     {
      "short": "Tchadinfos",
      "name": "Tchadinfos – Cameroun : une attaque des séparatistes fait une dizaine de morts dans la région du Nord-Ouest (14 janv. 2026)",
      "url": "https://tchadinfos.com/2026/01/14/cameroun-une-attaque-des-separatistes-fait-une-dizaine-de-morts-dans-la-region-du-nord-ouest/"
     },
     {
      "short": "AllAfrica",
      "name": "AllAfrica – Cameroun : Nord-Ouest du pays - 15 membres d'une même famille tués (15 janv. 2026)",
      "url": "https://fr.allafrica.com/stories/202601150382.html"
     }
    ]
   },
   "148": {
    "v": 1,
    "name": "Tchad",
    "t": "Conflit armé",
    "text": "Dans la province du Lac, Boko Haram a attaqué une position de l'armée à Barka Tolorom dans la nuit du 4 au 5 mai 2026, tuant 23 soldats selon l'état-major [1][2].",
    "sources": [
     {
      "short": "Tchadinfos",
      "name": "Tchadinfos – Attaque terroriste dans le Lac : l'ONU exprime son indignation (7 mai 2026)",
      "url": "https://tchadinfos.com/2026/05/07/attaque-terroriste-dans-le-lac-lonu-exprime-son-indignation-et-reaffirme-son-soutien-au-tchad/"
     },
     {
      "short": "Koaci",
      "name": "Koaci – Tchad : 23 soldats tués dans une attaque de Boko Haram contre une base militaire (6 mai 2026)",
      "url": "https://www.koaci.com/article/2026/05/06/afrique/politique/tchad-23-soldats-tues-dans-une-attaque-de-boko-haram-contre-une-base-militaire_196410.html"
     }
    ]
   },
   "204": {
    "v": 1,
    "name": "Bénin",
    "t": "Conflit armé",
    "text": "Le nord du pays subit des attaques du JNIM venu du Sahel : le 4 mars 2026, l'attaque d'un camp militaire à Kofouno a tué 15 soldats selon l'armée [1][2].",
    "sources": [
     {
      "short": "Africanews",
      "name": "Africanews – 15 soldiers killed in jihadist attack in northern Benin (6 mars 2026)",
      "url": "https://africanews.com/2026/03/06/15-soldiers-killed-in-jihadist-attack-in-northern-benin"
     },
     {
      "short": "ACLED",
      "name": "ACLED – Africa Overview: April 2026",
      "url": "https://acleddata.com/update/africa-overview-april-2026"
     }
    ]
   },
   "508": {
    "v": 1,
    "name": "Mozambique",
    "t": "Conflit armé",
    "text": "Dans la province de Cabo Delgado, une insurrection djihadiste active depuis 2017 a fait 6 632 morts jusqu'à mi-2026 selon les données ACLED citées par un rapporteur spécial de l'ONU, qui juge qu'une victoire militaire n'est pas imminente [1].",
    "sources": [
     {
      "short": "Africanews",
      "name": "Africanews – UN calls for negotiations to end the conflict in Mozambique (15 août 2026)",
      "url": "https://www.africanews.com/2026/08/15/un-calls-for-negotiations-to-end-the-conflict-in-mozambique/"
     }
    ]
   },
   "434": {
    "v": 1,
    "name": "Libye",
    "t": "Conflit armé",
    "text": "Le pays reste divisé entre un gouvernement à Tripoli et une administration à l'est ; en mai 2025, trois jours de combats entre groupes armés rivaux ont secoué Tripoli après la mort du chef d'une milice, avant une trêve fragile [1].",
    "sources": [
     {
      "short": "Médias24 / AFP",
      "name": "Médias24 (AFP) – Libye : trêve fragile dans la capitale après trois jours de combats (mai 2025)",
      "url": "https://medias24.com/agence-presse/libye-treve-fragile-dans-la-capitale-apres-trois-jours-de-combats/"
     }
    ]
   },
   "804": {
    "v": 2,
    "name": "Ukraine",
    "t": "Guerre",
    "text": "La guerre déclenchée par l'invasion russe se poursuit : l'ONU a vérifié 15 280 civils tués ou blessés en Ukraine sur les huit premiers mois de 2026, soit 55 % de plus qu'à la même période de 2025 [1]. Selon l'UCDP, la guerre Russie-Ukraine fait partie des conflits entre États de 2025 [2].",
    "sources": [
     {
      "short": "Kyiv Independent",
      "name": "Kyiv Independent – At least 15,000 civilian casualties documented in Ukraine in 2026, UN report finds (oct. 2026)",
      "url": "https://kyivindependent.com/at-least-15-000-civilian-casualties-documented-in-ukraine-in-2026-un-report-finds/"
     },
     {
      "short": "UCDP",
      "name": "Uppsala University / UCDP – Record number of conflicts between states (9 juin 2026)",
      "url": "https://www.uu.se/en/press/press-releases/2026/2026-06-09-ucdp-record-number-of-conflicts-between-states"
     }
    ]
   },
   "643": {
    "v": 2,
    "name": "Russie",
    "t": "Guerre",
    "text": "La Russie mène la guerre en Ukraine et son territoire est visé par des frappes de drones ukrainiennes, notamment dans les régions frontalières comme Belgorod ou à Voronej, où une frappe a fait un mort en janvier 2026 selon le gouverneur [1][2].",
    "sources": [
     {
      "short": "Novaya Gazeta Europe",
      "name": "Novaya Gazeta Europe – One dead and three injured in drone strike on Voronezh as Ukrainian attacks leave Belgorod in dark (11 janv. 2026)",
      "url": "https://novayagazeta.eu/amp/en/articles/2026/01/11/one-dead-and-three-injured-in-drone-strike-on-voronezh-as-ukrainian-attacks-leave-belgorod-in-dark-en-news"
     },
     {
      "short": "UCDP",
      "name": "Uppsala University / UCDP – Record number of conflicts between states (9 juin 2026)",
      "url": "https://www.uu.se/en/press/press-releases/2026/2026-06-09-ucdp-record-number-of-conflicts-between-states"
     }
    ]
   },
   "104": {
    "v": 2,
    "name": "Birmanie (Myanmar)",
    "t": "Guerre",
    "text": "La guerre civile oppose la junte militaire à de nombreux groupes armés ; l'UCDP y recense cinq conflits distincts en 2025 [1]. Un organe d'enquête de l'ONU constate une hausse des frappes aériennes de l'armée autour des élections de décembre 2025-janvier 2026, qui se sont poursuivies ensuite [2].",
    "sources": [
     {
      "short": "UCDP",
      "name": "Uppsala University / UCDP – Record number of conflicts between states (9 juin 2026)",
      "url": "https://www.uu.se/en/press/press-releases/2026/2026-06-09-ucdp-record-number-of-conflicts-between-states"
     },
     {
      "short": "AP / Inquirer",
      "name": "The Philadelphia Inquirer (AP) – Myanmar's military has escalated airstrikes against civilians, UN investigation finds (11 août 2026)",
      "url": "https://inquirer.com/news/nation-world/myanmar-civil-war-escalate-airstrikes-civilians-arakan-army-united-nations-report-20260811.html"
     }
    ]
   },
   "586": {
    "v": 3,
    "name": "Pakistan",
    "t": "S'aggrave en septembre",
    "text": "Le Pakistan affronte des insurrections armées au Khyber Pakhtunkhwa et au Baloutchistan : juillet 2026 a été le mois le plus meurtrier de l'année avec au moins 606 morts selon le centre PICSS [1]. Depuis le 18 septembre 2026, il mène aussi des frappes aériennes en Afghanistan contre les talibans, qu'il accuse d'abriter des militants [2]. CrisisWatch classe la situation parmi celles qui se sont aggravées en septembre 2026 [3].",
    "sources": [
     {
      "short": "Dunya News / PICSS",
      "name": "Dunya News – Militant attacks, security operations make July deadliest month of 2026 (août 2026)",
      "url": "https://dunyanews.tv/en/Pakistan/965813-militant-attacks-security-operations-make-july-deadliest-month-of-202"
     },
     {
      "short": "Long War Journal",
      "name": "FDD's Long War Journal – Pakistan launches new strikes as conflict with Taliban persists into third week (oct. 2026)",
      "url": "https://www.longwarjournal.org/archives/2026/10/pakistan-launches-new-strikes-as-conflict-with-taliban-persist-into-third-week.php"
     },
     {
      "short": "CrisisWatch",
      "name": "International Crisis Group, « CrisisWatch: September Trends and October Alerts 2026 »",
      "url": "https://www.crisisgroup.org/crisiswatch/september-trends-and-october-alerts-2026"
     }
    ]
   },
   "004": {
    "v": 3,
    "name": "Afghanistan",
    "t": "S'aggrave en septembre",
    "text": "Les autorités talibanes affrontent le Pakistan à la frontière depuis février 2026 ; après une reprise des combats le 18 septembre 2026, des frappes pakistanaises ont visé plusieurs provinces afghanes, dont Kandahar, Khost, Kunar et Helmand [1][2]. CrisisWatch classe la situation parmi celles qui se sont aggravées en septembre 2026 [3].",
    "sources": [
     {
      "short": "CFR",
      "name": "Council on Foreign Relations – Global Conflict Tracker : Conflict Between Afghanistan and Pakistan (2026)",
      "url": "https://www.cfr.org/global-conflict-tracker/conflict/war-afghanistan"
     },
     {
      "short": "Long War Journal",
      "name": "FDD's Long War Journal – Pakistan launches new strikes as conflict with Taliban persists into third week (oct. 2026)",
      "url": "https://www.longwarjournal.org/archives/2026/10/pakistan-launches-new-strikes-as-conflict-with-taliban-persist-into-third-week.php"
     },
     {
      "short": "CrisisWatch",
      "name": "International Crisis Group, « CrisisWatch: September Trends and October Alerts 2026 »",
      "url": "https://www.crisisgroup.org/crisiswatch/september-trends-and-october-alerts-2026"
     }
    ]
   },
   "356": {
    "v": 1,
    "name": "Inde",
    "t": "Conflit armé",
    "text": "En mai 2025, l'Inde et le Pakistan se sont affrontés pendant environ quatre jours (frappes de missiles, drones, artillerie) après un attentat au Cachemire indien, avant un cessez-le-feu le 10 mai [1]. Au Manipur, les violences entre communautés meitei et kuki ont fait environ 260 morts depuis mai 2023 et ont repris en avril 2026 selon Reuters [2].",
    "sources": [
     {
      "short": "USIP",
      "name": "United States Institute of Peace – The May 2025 Border Conflict (2025)",
      "url": "https://www.usip.org/india-pakistan/"
     },
     {
      "short": "Reuters / AOL",
      "name": "Reuters (via AOL) – Four killed after violence flares in India's Manipur state (avr. 2026)",
      "url": "https://www.aol.com/articles/four-killed-violence-flares-indias-141117640.html"
     }
    ]
   },
   "764": {
    "v": 1,
    "name": "Thaïlande",
    "t": "Conflit armé",
    "text": "En 2025, un différend frontalier avec le Cambodge a dégénéré en combats en juillet puis en décembre (artillerie, chars, drones, avions), faisant au moins 47 morts selon l'AFP ; un cessez-le-feu a été conclu le 27 décembre 2025 [1].",
    "sources": [
     {
      "short": "Philstar / AFP",
      "name": "Philstar (AFP) – Thailand and Cambodia agree 'immediate' ceasefire (27 déc. 2025)",
      "url": "https://www.philstar.com/world/2025/12/27/2497091/thailand-and-cambodia-agree-immediate-ceasefire/amp/"
     }
    ]
   },
   "116": {
    "v": 1,
    "name": "Cambodge",
    "t": "Conflit armé",
    "text": "En 2025, le Cambodge et la Thaïlande se sont affrontés à leur frontière en juillet puis en décembre, faisant au moins 47 morts selon l'AFP ; les deux pays ont signé un cessez-le-feu le 27 décembre 2025 [1].",
    "sources": [
     {
      "short": "Philstar / AFP",
      "name": "Philstar (AFP) – Thailand and Cambodia agree 'immediate' ceasefire (27 déc. 2025)",
      "url": "https://www.philstar.com/world/2025/12/27/2497091/thailand-and-cambodia-agree-immediate-ceasefire/amp/"
     }
    ]
   },
   "170": {
    "v": 1,
    "name": "Colombie",
    "t": "Conflit armé",
    "text": "Depuis janvier 2025, la guérilla de l'ELN et des dissidences des FARC s'affrontent dans la région du Catatumbo pour le contrôle des cultures de coca, provoquant d'importants déplacements de population [1]. Les combats et prises d'otages s'y poursuivaient en juin 2026 [2].",
    "sources": [
     {
      "short": "JURIST",
      "name": "JURIST – Rights group demands urgent action amid escalating violence in Catatumbo region of Colombia (2025)",
      "url": "https://www.jurist.org/news/?p=277343"
     },
     {
      "short": "Vanguardia",
      "name": "Vanguardia – Operación humanitaria en el Catatumbo: ELN liberó a 13 integrantes de las disidencias de las FARC (6 juin 2026)",
      "url": "https://www.vanguardia.com/colombia/2026/06/06/operacion-humanitaria-en-el-catatumbo-eln-libero-a-13-integrantes-de-las-disidencias-de-las-farc/"
     }
    ]
   },
   "484": {
    "v": 1,
    "name": "Mexique",
    "t": "Conflit armé",
    "text": "Les cartels de la drogue s'affrontent entre eux et avec les forces de l'État ; dans l'État de Sinaloa, la guerre entre factions du cartel de Sinaloa a fait plus de 3 000 morts en deux ans selon l'AFP [1]. Le gouvernement affirme que le nombre moyen d'homicides a baissé de 53 % au niveau national entre septembre 2024 et août 2026 [2].",
    "sources": [
     {
      "short": "eNCA / AFP",
      "name": "eNCA (AFP) – Thousands march against Sinaloa cartel violence (14 sept. 2026)",
      "url": "https://www.enca.com/opinion/fed-thousands-march-against-sinaloa-cartel-violence"
     },
     {
      "short": "Telemundo",
      "name": "Telemundo – Cárteles mexicanos bajan perfil ante presión de México y EE.UU. (sept. 2026)",
      "url": "https://www.telemundo51.com/noticias/mexico/carteles-mexicanos-bajan-perfil-presion-mexico-eeuu/2823599/"
     }
    ]
   },
   "332": {
    "v": 1,
    "name": "Haïti",
    "t": "Conflit armé",
    "text": "Les gangs armés contrôlent une partie du pays : selon l'ONU, leurs violences ont fait au moins 5 700 morts et blessés en 2026 (jusqu'au 11 septembre), plus de la moitié lors d'opérations des forces de sécurité [1].",
    "sources": [
     {
      "short": "Africanews / ONU",
      "name": "Africanews – At least 5,700 killed, wounded in Haiti gang crisis this year: UN (2 oct. 2026)",
      "url": "https://www.africanews.com/amp/2026/10/02/at-least-5700-killed-wounded-in-haiti-gang-crisis-this-year-un/"
     }
    ]
   },
   "218": {
    "v": 1,
    "name": "Équateur",
    "t": "Conflit armé",
    "text": "Le gouvernement mène une offensive militaire contre des groupes criminels liés au narcotrafic qu'il qualifie de « terroristes » ; le président Daniel Noboa a fait état de 1 800 homicides début avril 2026 [1]. L'ACLED note que le pays est devenu plus meurtrier en 2025 [2].",
    "sources": [
     {
      "short": "El Diario",
      "name": "El Diario (Équateur) – Presidente Noboa reporta 1 800 homicidios en Ecuador en 2026 y cuestiona a la ONU (9 avr. 2026)",
      "url": "https://www.eldiario.ec/seguridad/presidente-noboa-reporta-1-800-homicidios-en-ecuador-en-2026-y-cuestiona-a-la-onu-09042026/"
     },
     {
      "short": "ACLED / Newsweek",
      "name": "Newsweek – World map shows deadliest wars of 2025 (ACLED Conflict Index, déc. 2025)",
      "url": "https://newsweek.com/world-map-shows-deadliest-wars-2025-11179539"
     }
    ]
   },
   "076": {
    "v": 1,
    "name": "Brésil",
    "t": "Conflit armé",
    "text": "L'indice des conflits de l'ACLED (décembre 2024-novembre 2025) classe le Brésil parmi les pays où le niveau de violence politique est « extrême », aux côtés notamment du Mexique et de l'Équateur [1].",
    "sources": [
     {
      "short": "ACLED / Newsweek",
      "name": "Newsweek – World map shows deadliest wars of 2025 (ACLED Conflict Index, déc. 2025)",
      "url": "https://newsweek.com/world-map-shows-deadliest-wars-2025-11179539"
     }
    ]
   }
  }
 },
 {
  "id": "presse",
  "label": "Liberté de la presse",
  "intro": "Classement mondial de la liberté de la presse de Reporters sans frontières, édition 2026 : la France est 25e sur 180. Pour la première fois en 25 ans, plus de la moitié des pays évalués (52,2 %) sont en situation « difficile » ou « très grave », contre 13,7 % lors du lancement du Classement en 2002 [1][2]. Selon RSF, la part de la population mondiale vivant dans un pays où la situation de la presse est « bonne » est passée de 20 % en 2002 à moins de 1 % en 2026 [1]. L'indicateur légal est celui qui recule le plus : il se dégrade dans 110 des 180 pays, RSF pointant notamment l'usage abusif des lois pour poursuivre des journalistes (procédures-bâillons) [1][3].",
  "sources": [
   {
    "short": "RSF",
    "name": "RSF – 2026 RSF Index: press freedom at a 25-year low",
    "url": "https://rsf.org/en/2026-rsf-index-press-freedom-25-year-low"
   },
   {
    "short": "RSF",
    "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
    "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
   },
   {
    "short": "CB News",
    "name": "CB News – Classement mondial de la liberté de la presse 2026 : une dégradation générale selon RSF",
    "url": "https://www.cbnews.fr/medias/classement-mondial-liberte-presse-2026-degradation-generale-rsf"
   },
   {
    "short": "RSF",
    "name": "RSF – 2026 RSF Index by region: press freedom in decline in 100 out of 180 countries",
    "url": "https://rsf.org/en/classement-mondial-2026-par-r%C3%A9gions-une-d%C3%A9gradation-de-la-libert%C3%A9-de-la-presse-dans-100-pays-sur"
   },
   {
    "short": "RSF",
    "name": "RSF – World Press Freedom Index 2025: economic fragility a leading threat to press freedom",
    "url": "https://rsf.org/en/rsf-world-press-freedom-index-2025-economic-fragility-leading-threat-press-freedom"
   },
   {
    "short": "RSF Suisse",
    "name": "RSF Suisse – Communiqué Classement mondial 2026 (PDF)",
    "url": "https://rsf-ch.ch/wp-content/uploads/2026/04/RSF_Communique-Global_Website_FR_2026.pdf"
   },
   {
    "short": "RSF",
    "name": "RSF – Classement 2026, Afrique",
    "url": "https://rsf.org/en/classement/2026/africa"
   },
   {
    "short": "Kashmir Times",
    "name": "Kashmir Times – Press freedom falls to a 25-year low worldwide",
    "url": "https://kashmirtimes.com/news/press-freedom-falls-to-a-25-year-low-worldwide"
   },
   {
    "short": "Vision Times",
    "name": "Vision Times – Hong Kong lands at 140 in World Press Freedom Index",
    "url": "https://www.visiontimes.com/2026/05/06/hong-kong-lands-at-140-in-world-press-freedom-index-putting-it-between-rwanda-and-syria.html"
   },
   {
    "short": "LJR",
    "name": "LatAm Journalism Review – Press freedom in Americas drops sharply",
    "url": "https://latamjournalismreview.org/articles/press-freedom-in-americas-drops-sharply-amid-global-crackdown-rsf-report-finds/"
   },
   {
    "short": "The Vietnamese",
    "name": "The Vietnamese Magazine – Việt Nam ranks last in Southeast Asia",
    "url": "https://thevietnamese.org/2026/04/viet-nam-ranks-last-in-southeast-asia-2026-world-press-freedom-index/"
   },
   {
    "short": "Kun.uz",
    "name": "Kun.uz – Press Freedom Index: situation in Uzbekistan remains very serious",
    "url": "https://kun.uz/en/news/2026/04/30/press-freedom-index-situation-in-uzbekistan-remains-very-serious"
   },
   {
    "short": "State Media Monitor",
    "name": "State Media Monitor – Algeria",
    "url": "https://statemediamonitor.com/algeria/"
   },
   {
    "short": "Euronews",
    "name": "Euronews (TR) – Türkiye 163. sıraya geriledi",
    "url": "https://tr.euronews.com/2026/04/30/dunya-basin-ozgurlugu-son-25-yilin-en-dusuk-seviyesinde-turkiye-163-siraya-geriledi"
   },
   {
    "short": "FMT",
    "name": "Free Malaysia Today – Malaysia ranks 95th in press freedom index",
    "url": "https://www.freemalaysiatoday.com/category/nation/2026/04/30/malaysia-ranks-95th-in-press-freedom-index"
   },
   {
    "short": "Thai PBS",
    "name": "Thai PBS World – Thai press freedom on the slide",
    "url": "https://www.thaipbsworld.com/news/thai-press-freedom-on-the-slide"
   },
   {
    "short": "Afrique-sur7",
    "name": "Afrique-sur7 – Liberté de la presse : où se situe l'AES en 2026 ?",
    "url": "https://www.afrique-sur7.fr/liberte-de-la-presse-ou-se-situe-laes-en-2026"
   },
   {
    "short": "Business News",
    "name": "Business News (Tunisie) – Classement RSF : la Tunisie en recul",
    "url": "https://businessnews.com.tn/2026/04/30/classement-rsf-la-tunisie-en-recul-la-liberte-de-la-presse-sous-pression-croissante/1399323/"
   },
   {
    "short": "N1",
    "name": "N1 – 2026 RSF Index: Serbia ranks worst in the region",
    "url": "https://n1info.rs/english/news/2026-rsf-index-press-freedom-at-a-25-year-low-serbia-ranks-worst-in-the-region/"
   },
   {
    "short": "Tchadinfos",
    "name": "Tchadinfos – Classement 2026 : le Tchad est 93e sur 180 pays",
    "url": "https://tchadinfos.com/2026/04/30/classement-mondial-de-la-liberte-de-la-presse-2026-le-tchad-est-93eme-sur-180-pays/"
   }
  ],
  "empty": "Non classé par RSF",
  "legend": [
   {
    "v": 5,
    "label": "Très grave",
    "color": "#c62828"
   },
   {
    "v": 4,
    "label": "Difficile",
    "color": "#ef6c3a"
   },
   {
    "v": 3,
    "label": "Problématique",
    "color": "#f2c14e"
   },
   {
    "v": 2,
    "label": "Plutôt bonne",
    "color": "#7cc47f"
   },
   {
    "v": 1,
    "label": "Bonne",
    "color": "#2e9e5b"
   }
  ],
  "countries": {
   "578": {
    "v": 1,
    "name": "Norvège",
    "t": "1e sur 180 · bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 1e sur 180 (score 92,72), situation « bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "528": {
    "v": 1,
    "name": "Pays-Bas",
    "t": "2e sur 180 · bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 2e sur 180 (score 88,92), situation « bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "233": {
    "v": 1,
    "name": "Estonie",
    "t": "3e sur 180 · bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 3e sur 180 (score 88,54), situation « bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "208": {
    "v": 1,
    "name": "Danemark",
    "t": "4e sur 180 · bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 4e sur 180 (score 88,47), situation « bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "752": {
    "v": 1,
    "name": "Suède",
    "t": "5e sur 180 · bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 5e sur 180 (score 87,61), situation « bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "246": {
    "v": 1,
    "name": "Finlande",
    "t": "6e sur 180 · bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 6e sur 180 (score 86,22), situation « bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "372": {
    "v": 1,
    "name": "Irlande",
    "t": "7e sur 180 · bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 7e sur 180 (score 85,93), situation « bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "756": {
    "v": 2,
    "name": "Suisse",
    "t": "8e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 8e sur 180 (score 84,83), situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "442": {
    "v": 2,
    "name": "Luxembourg",
    "t": "9e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 9e sur 180 (score 84,14), situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "620": {
    "v": 2,
    "name": "Portugal",
    "t": "10e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 10e sur 180 (score 83,71), situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "203": {
    "v": 2,
    "name": "Tchéquie",
    "t": "11e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 11e sur 180 (score 83,01), situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "352": {
    "v": 2,
    "name": "Islande",
    "t": "12e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 12e sur 180 (score 82,77), situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "438": {
    "v": 2,
    "name": "Liechtenstein",
    "t": "13e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 13e sur 180 (score 82,62), situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "276": {
    "v": 2,
    "name": "Allemagne",
    "t": "14e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 14e sur 180 (score 82,17), situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "440": {
    "v": 2,
    "name": "Lituanie",
    "t": "15e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 15e sur 180 (score 81,34), situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "056": {
    "v": 2,
    "name": "Belgique",
    "t": "16e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 16e sur 180 (score 81,17), situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "428": {
    "v": 2,
    "name": "Lettonie",
    "t": "17e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 17e sur 180 (score 81,0), situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "826": {
    "v": 2,
    "name": "Royaume-Uni",
    "t": "18e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 18e sur 180 (score 79,45), situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "040": {
    "v": 2,
    "name": "Autriche",
    "t": "19e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 19e sur 180 (score 79,43), situation « plutôt bonne » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "124": {
    "v": 2,
    "name": "Canada",
    "t": "20e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 20e sur 180 (score 78,76), situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "710": {
    "v": 2,
    "name": "Afrique du Sud",
    "t": "21e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 21e sur 180 (score 77,95), situation « plutôt bonne » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "554": {
    "v": 2,
    "name": "Nouvelle-Zélande",
    "t": "22e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 22e sur 180 (score 77,38), situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "516": {
    "v": 2,
    "name": "Namibie",
    "t": "23e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 23e sur 180 (score 76,97), situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "242": {
    "v": 2,
    "name": "Fidji",
    "t": "24e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 24e sur 180 (score 76,76), situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "250": {
    "v": 2,
    "name": "France",
    "t": "25e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 25e sur 180 (score 76,68), situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "388": {
    "v": 2,
    "name": "Jamaïque",
    "t": "26e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 26e sur 180, situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "23degrees",
      "name": "Graphique « Rangliste der Pressefreiheit 2026 » (source RSF/ROG)",
      "url": "https://app.23degrees.io/view/iG1lwLhsaMIyMizP-bar-horizontal-rangliste-der-pressefreiheit"
     }
    ]
   },
   "616": {
    "v": 2,
    "name": "Pologne",
    "t": "27e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 27e sur 180, situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "23degrees",
      "name": "Graphique « Rangliste der Pressefreiheit 2026 » (source RSF/ROG)",
      "url": "https://app.23degrees.io/view/iG1lwLhsaMIyMizP-bar-horizontal-rangliste-der-pressefreiheit"
     }
    ]
   },
   "158": {
    "v": 2,
    "name": "Taïwan",
    "t": "28e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 28e sur 180, situation « plutôt bonne » [1].",
    "sources": [
     {
      "short": "23degrees",
      "name": "Graphique « Rangliste der Pressefreiheit 2026 » (source RSF/ROG)",
      "url": "https://app.23degrees.io/view/iG1lwLhsaMIyMizP-bar-horizontal-rangliste-der-pressefreiheit"
     }
    ]
   },
   "724": {
    "v": 2,
    "name": "Espagne",
    "t": "29e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 29e sur 180, situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "23degrees",
      "name": "Graphique « Rangliste der Pressefreiheit 2026 » (source RSF/ROG)",
      "url": "https://app.23degrees.io/view/iG1lwLhsaMIyMizP-bar-horizontal-rangliste-der-pressefreiheit"
     }
    ]
   },
   "626": {
    "v": 2,
    "name": "Timor oriental",
    "t": "30e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 30e sur 180, situation « plutôt bonne » [1].",
    "sources": [
     {
      "short": "23degrees",
      "name": "Graphique « Rangliste der Pressefreiheit 2026 » (source RSF/ROG)",
      "url": "https://app.23degrees.io/view/iG1lwLhsaMIyMizP-bar-horizontal-rangliste-der-pressefreiheit"
     }
    ]
   },
   "498": {
    "v": 2,
    "name": "Moldavie",
    "t": "31e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 31e sur 180, situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "23degrees",
      "name": "Graphique « Rangliste der Pressefreiheit 2026 » (source RSF/ROG)",
      "url": "https://app.23degrees.io/view/iG1lwLhsaMIyMizP-bar-horizontal-rangliste-der-pressefreiheit"
     }
    ]
   },
   "780": {
    "v": 2,
    "name": "Trinité-et-Tobago",
    "t": "32e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 32e sur 180, situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "23degrees",
      "name": "Graphique « Rangliste der Pressefreiheit 2026 » (source RSF/ROG)",
      "url": "https://app.23degrees.io/view/iG1lwLhsaMIyMizP-bar-horizontal-rangliste-der-pressefreiheit"
     }
    ]
   },
   "036": {
    "v": 2,
    "name": "Australie",
    "t": "33e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 33e sur 180, situation « plutôt bonne » [1].",
    "sources": [
     {
      "short": "23degrees",
      "name": "Graphique « Rangliste der Pressefreiheit 2026 » (source RSF/ROG)",
      "url": "https://app.23degrees.io/view/iG1lwLhsaMIyMizP-bar-horizontal-rangliste-der-pressefreiheit"
     }
    ]
   },
   "740": {
    "v": 2,
    "name": "Suriname",
    "t": "34e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 34e sur 180, situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "23degrees",
      "name": "Graphique « Rangliste der Pressefreiheit 2026 » (source RSF/ROG)",
      "url": "https://app.23degrees.io/view/iG1lwLhsaMIyMizP-bar-horizontal-rangliste-der-pressefreiheit"
     }
    ]
   },
   "690": {
    "v": 2,
    "name": "Seychelles",
    "t": "35e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 35e sur 180, situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "23degrees",
      "name": "Graphique « Rangliste der Pressefreiheit 2026 » (source RSF/ROG)",
      "url": "https://app.23degrees.io/view/iG1lwLhsaMIyMizP-bar-horizontal-rangliste-der-pressefreiheit"
     }
    ]
   },
   "705": {
    "v": 2,
    "name": "Slovénie",
    "t": "36e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 36e sur 180, situation « plutôt bonne » [1].",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "703": {
    "v": 2,
    "name": "Slovaquie",
    "t": "37e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 37e sur 180, situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "188": {
    "v": 2,
    "name": "Costa Rica",
    "t": "38e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 38e sur 180, situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "288": {
    "v": 2,
    "name": "Ghana",
    "t": "39e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 39e sur 180, situation « plutôt bonne » [1].",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "132": {
    "v": 2,
    "name": "Cap-Vert",
    "t": "40e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 40e sur 180 (score 71,98), situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "499": {
    "v": 2,
    "name": "Monténégro",
    "t": "41e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 41e sur 180 (score 71,8), situation « plutôt bonne » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "480": {
    "v": 2,
    "name": "Maurice",
    "t": "42e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 42e sur 180 (score 70,92), situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "266": {
    "v": 2,
    "name": "Gabon",
    "t": "43e sur 180 · plutôt bonne",
    "text": "Classement RSF 2026 de la liberté de la presse : 43e sur 180 (score 70,57), situation « plutôt bonne » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "214": {
    "v": 3,
    "name": "République dominicaine",
    "t": "44e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 44e sur 180 (score 69,73), situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "807": {
    "v": 3,
    "name": "Macédoine du Nord",
    "t": "45e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 45e sur 180 (score 69,49), situation « problématique » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "270": {
    "v": 3,
    "name": "Gambie",
    "t": "46e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 46e sur 180 (score 69,42), situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "410": {
    "v": 3,
    "name": "Corée du Sud",
    "t": "47e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 47e sur 180 (score 69,12), situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "858": {
    "v": 3,
    "name": "Uruguay",
    "t": "48e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 48e sur 180 (score 68,72), situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "642": {
    "v": 3,
    "name": "Roumanie",
    "t": "49e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 49e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "051": {
    "v": 3,
    "name": "Arménie",
    "t": "50e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 50e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "23degrees",
      "name": "Graphique « Rangliste der Pressefreiheit 2026 » (source RSF/ROG)",
      "url": "https://app.23degrees.io/view/iG1lwLhsaMIyMizP-bar-horizontal-rangliste-der-pressefreiheit"
     }
    ]
   },
   "776": {
    "v": 3,
    "name": "Tonga",
    "t": "51e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 51e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "23degrees",
      "name": "Graphique « Rangliste der Pressefreiheit 2026 » (source RSF/ROG)",
      "url": "https://app.23degrees.io/view/iG1lwLhsaMIyMizP-bar-horizontal-rangliste-der-pressefreiheit"
     }
    ]
   },
   "076": {
    "v": 3,
    "name": "Brésil",
    "t": "52e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 52e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "23degrees",
      "name": "Graphique « Rangliste der Pressefreiheit 2026 » (source RSF/ROG)",
      "url": "https://app.23degrees.io/view/iG1lwLhsaMIyMizP-bar-horizontal-rangliste-der-pressefreiheit"
     }
    ]
   },
   "191": {
    "v": 3,
    "name": "Croatie",
    "t": "53e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 53e sur 180, situation « problématique » [1].",
    "sources": [
     {
      "short": "23degrees",
      "name": "Graphique « Rangliste der Pressefreiheit 2026 » (source RSF/ROG)",
      "url": "https://app.23degrees.io/view/iG1lwLhsaMIyMizP-bar-horizontal-rangliste-der-pressefreiheit"
     }
    ]
   },
   "384": {
    "v": 3,
    "name": "Côte d'Ivoire",
    "t": "54e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 54e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "23degrees",
      "name": "Graphique « Rangliste der Pressefreiheit 2026 » (source RSF/ROG)",
      "url": "https://app.23degrees.io/view/iG1lwLhsaMIyMizP-bar-horizontal-rangliste-der-pressefreiheit"
     }
    ]
   },
   "804": {
    "v": 3,
    "name": "Ukraine",
    "t": "55e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 55e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "23degrees",
      "name": "Graphique « Rangliste der Pressefreiheit 2026 » (source RSF/ROG)",
      "url": "https://app.23degrees.io/view/iG1lwLhsaMIyMizP-bar-horizontal-rangliste-der-pressefreiheit"
     }
    ]
   },
   "380": {
    "v": 3,
    "name": "Italie",
    "t": "56e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 56e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "23degrees",
      "name": "Graphique « Rangliste der Pressefreiheit 2026 » (source RSF/ROG)",
      "url": "https://app.23degrees.io/view/iG1lwLhsaMIyMizP-bar-horizontal-rangliste-der-pressefreiheit"
     }
    ]
   },
   "430": {
    "v": 3,
    "name": "Liberia",
    "t": "58e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 58e sur 180 (score 64,54), situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "882": {
    "v": 3,
    "name": "Samoa",
    "t": "59e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 59e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "23degrees",
      "name": "Graphique « Rangliste der Pressefreiheit 2026 » (source RSF/ROG)",
      "url": "https://app.23degrees.io/view/iG1lwLhsaMIyMizP-bar-horizontal-rangliste-der-pressefreiheit"
     }
    ]
   },
   "020": {
    "v": 3,
    "name": "Andorre",
    "t": "60e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 60e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "23degrees",
      "name": "Graphique « Rangliste der Pressefreiheit 2026 » (source RSF/ROG)",
      "url": "https://app.23degrees.io/view/iG1lwLhsaMIyMizP-bar-horizontal-rangliste-der-pressefreiheit"
     }
    ]
   },
   "478": {
    "v": 3,
    "name": "Mauritanie",
    "t": "61e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 61e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "392": {
    "v": 3,
    "name": "Japon",
    "t": "62e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 62e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "072": {
    "v": 3,
    "name": "Botswana",
    "t": "63e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 63e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "840": {
    "v": 3,
    "name": "États-Unis",
    "t": "64e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 64e sur 180 (score 62,61), situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "591": {
    "v": 3,
    "name": "Panama",
    "t": "65e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 65e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "084": {
    "v": 3,
    "name": "Belize",
    "t": "66e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 66e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "470": {
    "v": 3,
    "name": "Malte",
    "t": "67e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 67e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "178": {
    "v": 3,
    "name": "Congo",
    "t": "68e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 68e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "454": {
    "v": 3,
    "name": "Malawi",
    "t": "69e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 69e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "152": {
    "v": 3,
    "name": "Chili",
    "t": "70e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 70e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "100": {
    "v": 3,
    "name": "Bulgarie",
    "t": "71e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 71e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "174": {
    "v": 3,
    "name": "Comores",
    "t": "72e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 72e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "598": {
    "v": 3,
    "name": "Papouasie-Nouvelle-Guinée",
    "t": "73e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 73e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "348": {
    "v": 3,
    "name": "Hongrie",
    "t": "74e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 74e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "634": {
    "v": 3,
    "name": "Qatar",
    "t": "75e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 75e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "328": {
    "v": 3,
    "name": "Guyana",
    "t": "76e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 76e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "894": {
    "v": 3,
    "name": "Zambie",
    "t": "77e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 77e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "686": {
    "v": 3,
    "name": "Sénégal",
    "t": "78e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 78e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "694": {
    "v": 3,
    "name": "Sierra Leone",
    "t": "79e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 79e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "196": {
    "v": 3,
    "name": "Chypre",
    "t": "80e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 80e sur 180 (score 56,91), situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "140": {
    "v": 3,
    "name": "République centrafricaine",
    "t": "81e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 81e sur 180 (score 56,73), situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "008": {
    "v": 3,
    "name": "Albanie",
    "t": "83e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 83e sur 180 (score 56,52), situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "496": {
    "v": 3,
    "name": "Mongolie",
    "t": "85e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 85e sur 180 (score 55,79), situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "300": {
    "v": 3,
    "name": "Grèce",
    "t": "86e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 86e sur 180, situation « problématique » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "524": {
    "v": 3,
    "name": "Népal",
    "t": "87e sur 180 · problématique",
    "text": "Classement RSF 2026 de la liberté de la presse : 87e sur 180, situation « problématique » [1].",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "600": {
    "v": 4,
    "name": "Paraguay",
    "t": "88e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 88e sur 180 (score 54,67), situation « difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "426": {
    "v": 4,
    "name": "Lesotho",
    "t": "89e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 89e sur 180 (score 54,37), situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "070": {
    "v": 4,
    "name": "Bosnie-Herzégovine",
    "t": "90e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 90e sur 180 (score 54,29), situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "068": {
    "v": 4,
    "name": "Bolivie",
    "t": "91e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 91e sur 180 (score 54,25), situation « difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "764": {
    "v": 4,
    "name": "Thaïlande",
    "t": "92e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 92e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "148": {
    "v": 4,
    "name": "Tchad",
    "t": "93e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 93e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "226": {
    "v": 4,
    "name": "Guinée équatoriale",
    "t": "94e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 94e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "458": {
    "v": 4,
    "name": "Malaisie",
    "t": "95e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 95e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "096": {
    "v": 4,
    "name": "Brunei",
    "t": "96e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 96e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "768": {
    "v": 4,
    "name": "Togo",
    "t": "97e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 97e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "032": {
    "v": 4,
    "name": "Argentine",
    "t": "98e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 98e sur 180, situation « difficile » [1].",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "508": {
    "v": 4,
    "name": "Mozambique",
    "t": "99e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 99e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "624": {
    "v": 4,
    "name": "Guinée-Bissau",
    "t": "100e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 100e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "748": {
    "v": 4,
    "name": "Eswatini",
    "t": "101e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 101e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "170": {
    "v": 4,
    "name": "Colombie",
    "t": "102e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 102e sur 180, situation « difficile » [1].",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "450": {
    "v": 4,
    "name": "Madagascar",
    "t": "103e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 103e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "688": {
    "v": 4,
    "name": "Serbie",
    "t": "104e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 104e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "504": {
    "v": 4,
    "name": "Maroc",
    "t": "105e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 105e sur 180 (score 50,55), situation « difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "404": {
    "v": 4,
    "name": "Kenya",
    "t": "106e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 106e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "332": {
    "v": 4,
    "name": "Haïti",
    "t": "107e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 107e sur 180, situation « difficile » [1].",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "462": {
    "v": 4,
    "name": "Maldives",
    "t": "108e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 108e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "024": {
    "v": 4,
    "name": "Angola",
    "t": "109e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 109e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "854": {
    "v": 4,
    "name": "Burkina Faso",
    "t": "110e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 110e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "324": {
    "v": 4,
    "name": "Guinée",
    "t": "111e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 111e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "566": {
    "v": 4,
    "name": "Nigeria",
    "t": "112e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 112e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "204": {
    "v": 4,
    "name": "Bénin",
    "t": "113e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 113e sur 180 (score 47,39), situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "608": {
    "v": 4,
    "name": "Philippines",
    "t": "114e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 114e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "422": {
    "v": 4,
    "name": "Liban",
    "t": "115e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 115e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "376": {
    "v": 4,
    "name": "Israël",
    "t": "116e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 116e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "834": {
    "v": 4,
    "name": "Tanzanie",
    "t": "117e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 117e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "728": {
    "v": 4,
    "name": "Soudan du Sud",
    "t": "118e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 118e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "108": {
    "v": 4,
    "name": "Burundi",
    "t": "119e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 119e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "562": {
    "v": 4,
    "name": "Niger",
    "t": "120e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 120e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "466": {
    "v": 4,
    "name": "Mali",
    "t": "121e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 121e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "484": {
    "v": 4,
    "name": "Mexique",
    "t": "122e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 122e sur 180 (score 45,23), situation « difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "702": {
    "v": 4,
    "name": "Singapour",
    "t": "123e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 123e sur 180 (score 44,57), situation « difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "716": {
    "v": 4,
    "name": "Zimbabwe",
    "t": "124e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 124e sur 180 (score 44,37), situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "218": {
    "v": 4,
    "name": "Équateur",
    "t": "125e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 125e sur 180, situation « difficile » [1].",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "706": {
    "v": 4,
    "name": "Somalie",
    "t": "126e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 126e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "512": {
    "v": 4,
    "name": "Oman",
    "t": "127e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 127e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "320": {
    "v": 4,
    "name": "Guatemala",
    "t": "128e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 128e sur 180, situation « difficile » [1].",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "360": {
    "v": 4,
    "name": "Indonésie",
    "t": "129e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 129e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "180": {
    "v": 4,
    "name": "RD Congo",
    "t": "130e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 130e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "800": {
    "v": 4,
    "name": "Ouganda",
    "t": "131e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 131e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "340": {
    "v": 4,
    "name": "Honduras",
    "t": "132e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 132e sur 180, situation « difficile » [1].",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "120": {
    "v": 4,
    "name": "Cameroun",
    "t": "133e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 133e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "144": {
    "v": 4,
    "name": "Sri Lanka",
    "t": "134e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 134e sur 180, situation « difficile » [1].",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "268": {
    "v": 4,
    "name": "Géorgie",
    "t": "135e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 135e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "414": {
    "v": 4,
    "name": "Koweït",
    "t": "136e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 136e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "788": {
    "v": 4,
    "name": "Tunisie",
    "t": "137e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 137e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "434": {
    "v": 4,
    "name": "Libye",
    "t": "138e sur 180 · difficile",
    "text": "Classement RSF 2026 de la liberté de la presse : 138e sur 180, situation « difficile » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "646": {
    "v": 5,
    "name": "Rwanda",
    "t": "139e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 139e sur 180, situation « très grave » [1].",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "344": {
    "v": 5,
    "name": "Hong Kong",
    "t": "140e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 140e sur 180, situation « très grave » [1].",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "760": {
    "v": 5,
    "name": "Syrie",
    "t": "141e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 141e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "400": {
    "v": 5,
    "name": "Jordanie",
    "t": "142e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 142e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "222": {
    "v": 5,
    "name": "Salvador",
    "t": "143e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 143e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "604": {
    "v": 5,
    "name": "Pérou",
    "t": "144e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 144e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "012": {
    "v": 5,
    "name": "Algérie",
    "t": "145e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 145e sur 180, situation « très grave » [1].",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "417": {
    "v": 5,
    "name": "Kirghizistan",
    "t": "146e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 146e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "860": {
    "v": 5,
    "name": "Ouzbékistan",
    "t": "147e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 147e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "231": {
    "v": 5,
    "name": "Éthiopie",
    "t": "148e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 148e sur 180, situation « très grave » [1].",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "398": {
    "v": 5,
    "name": "Kazakhstan",
    "t": "149e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 149e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "064": {
    "v": 5,
    "name": "Bhoutan",
    "t": "150e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 150e sur 180, situation « très grave » [1].",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "116": {
    "v": 5,
    "name": "Cambodge",
    "t": "151e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 151e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "050": {
    "v": 5,
    "name": "Bangladesh",
    "t": "152e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 152e sur 180, situation « très grave » [1].",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "586": {
    "v": 5,
    "name": "Pakistan",
    "t": "153e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 153e sur 180, situation « très grave » [1].",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "418": {
    "v": 5,
    "name": "Laos",
    "t": "154e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 154e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "762": {
    "v": 5,
    "name": "Tadjikistan",
    "t": "155e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 155e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "275": {
    "v": 5,
    "name": "Palestine",
    "t": "156e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 156e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "356": {
    "v": 5,
    "name": "Inde",
    "t": "157e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 157e sur 180 (score 31,96), situation « très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "784": {
    "v": 5,
    "name": "Émirats arabes unis",
    "t": "158e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 158e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "862": {
    "v": 5,
    "name": "Venezuela",
    "t": "159e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 159e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "192": {
    "v": 5,
    "name": "Cuba",
    "t": "160e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 160e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "729": {
    "v": 5,
    "name": "Soudan",
    "t": "161e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 161e sur 180, situation « très grave » [1].",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "368": {
    "v": 5,
    "name": "Irak",
    "t": "162e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 162e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "792": {
    "v": 5,
    "name": "Turquie",
    "t": "163e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 163e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "887": {
    "v": 5,
    "name": "Yémen",
    "t": "164e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 164e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "112": {
    "v": 5,
    "name": "Biélorussie",
    "t": "165e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 165e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "104": {
    "v": 5,
    "name": "Myanmar",
    "t": "166e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 166e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "262": {
    "v": 5,
    "name": "Djibouti",
    "t": "167e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 167e sur 180, situation « très grave » [1].",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "558": {
    "v": 5,
    "name": "Nicaragua",
    "t": "168e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 168e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "818": {
    "v": 5,
    "name": "Égypte",
    "t": "169e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 169e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "048": {
    "v": 5,
    "name": "Bahreïn",
    "t": "170e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 170e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "031": {
    "v": 5,
    "name": "Azerbaïdjan",
    "t": "171e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 171e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "643": {
    "v": 5,
    "name": "Russie",
    "t": "172e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 172e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "795": {
    "v": 5,
    "name": "Turkménistan",
    "t": "173e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 173e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "704": {
    "v": 5,
    "name": "Viêt Nam",
    "t": "174e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 174e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "004": {
    "v": 5,
    "name": "Afghanistan",
    "t": "175e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 175e sur 180, situation « très grave » [1].",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "682": {
    "v": 5,
    "name": "Arabie saoudite",
    "t": "176e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 176e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "364": {
    "v": 5,
    "name": "Iran",
    "t": "177e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 177e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "156": {
    "v": 5,
    "name": "Chine",
    "t": "178e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 178e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "408": {
    "v": 5,
    "name": "Corée du Nord",
    "t": "179e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 179e sur 180, situation « très grave » [1]. La catégorie est déduite du rang.",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "232": {
    "v": 5,
    "name": "Érythrée",
    "t": "180e sur 180 · très grave",
    "text": "Classement RSF 2026 de la liberté de la presse : 180e sur 180, situation « très grave » [1].",
    "sources": [
     {
      "short": "RSF/ROG",
      "name": "Reporter ohne Grenzen – Rangliste der Pressefreiheit 2026 (PDF, 180 rangs)",
      "url": "https://media.reporter-ohne-grenzen.de/production/6135/RSF-Rangliste-der-Pressefreiheit-2026-A4.pdf"
     }
    ]
   },
   "028": {
    "v": 3,
    "name": "Antigua-et-Barbuda",
    "t": "57e sur 180 (OECS) · problématique",
    "text": "RSF classe ensemble les États de la Caraïbe orientale (OECS) : 57e sur 180 (score 64,60), situation « problématique » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "212": {
    "v": 3,
    "name": "Dominique",
    "t": "57e sur 180 (OECS) · problématique",
    "text": "RSF classe ensemble les États de la Caraïbe orientale (OECS) : 57e sur 180 (score 64,60), situation « problématique » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "308": {
    "v": 3,
    "name": "Grenade",
    "t": "57e sur 180 (OECS) · problématique",
    "text": "RSF classe ensemble les États de la Caraïbe orientale (OECS) : 57e sur 180 (score 64,60), situation « problématique » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "659": {
    "v": 3,
    "name": "Saint-Kitts-et-Nevis",
    "t": "57e sur 180 (OECS) · problématique",
    "text": "RSF classe ensemble les États de la Caraïbe orientale (OECS) : 57e sur 180 (score 64,60), situation « problématique » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "662": {
    "v": 3,
    "name": "Sainte-Lucie",
    "t": "57e sur 180 (OECS) · problématique",
    "text": "RSF classe ensemble les États de la Caraïbe orientale (OECS) : 57e sur 180 (score 64,60), situation « problématique » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   },
   "670": {
    "v": 3,
    "name": "Saint-Vincent-et-les-Grenadines",
    "t": "57e sur 180 (OECS) · problématique",
    "text": "RSF classe ensemble les États de la Caraïbe orientale (OECS) : 57e sur 180 (score 64,60), situation « problématique » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement mondial de la liberté de la presse 2026 (page Index, scores globaux)",
      "url": "https://rsf.org/en/index"
     }
    ]
   }
  }
 },
 {
  "id": "peuples",
  "label": "Peuples et religions",
  "intro": "Des peuples et des croyants visés par des persécutions documentées par l'ONU, des ONG de défense des droits humains et la Commission américaine sur la liberté religieuse internationale (USCIRF). Les gouvernements concernés contestent souvent ces conclusions ; chaque fiche cite ses sources.",
  "empty": "Aucun cas retenu ici pour l'instant",
  "legend": [
   {
    "v": 2,
    "label": "Persécutions documentées (ONU, ONG, USCIRF)",
    "color": "#8e6bd8"
   },
   {
    "v": 1,
    "label": "Liste des pays préoccupants de l'USCIRF 2026",
    "color": "#5b8def"
   }
  ],
  "countries": {
   "156": {
    "v": 2,
    "name": "Chine",
    "t": "Ouïghours et autres musulmans du Xinjiang · Tibétains (bouddhistes tibétains)",
    "text": "Ouïghours et autres musulmans du Xinjiang : Selon l'évaluation du Haut-Commissariat de l'ONU aux droits de l'homme (31 août 2022), l'ampleur de la détention arbitraire et discriminatoire des Ouïghours et d'autres groupes musulmans « peut constituer » des crimes internationaux, notamment des crimes contre l'humanité ; Pékin rejette ces conclusions [1]. L'USCIRF, qui recommande de redésigner la Chine comme pays particulièrement préoccupant, décrit dans son rapport 2026 une surveillance de masse, des restrictions à l'enseignement religieux et le remodelage de mosquées [2]. Tibétains (bouddhistes tibétains) : En février 2023, trois rapporteurs spéciaux de l'ONU se sont dits préoccupés par un système d'internats concernant près d'un million d'enfants tibétains, qui semble selon eux viser à les assimiler à la culture han majoritaire [3]. Le rapport 2026 de l'USCIRF dénonce la campagne de « sinisation » de la religion et l'ingérence de Pékin dans la succession du dalaï-lama [4].",
    "sources": [
     {
      "short": "Amnesty",
      "name": "Amnesty International – China: Anniversary of UN's damning Xinjiang report must be 'wake-up call' to action",
      "url": "https://www.amnesty.org/en/latest/news/2023/08/china-anniversary-of-uns-damning-xinjiang-report-must-be-wake-up-call-to-action/"
     },
     {
      "short": "ChinaAid",
      "name": "ChinaAid – USCIRF 2026 Annual Report: Redesignate China as a CPC",
      "url": "https://chinaaid.org/news/uscirf-2026-annual-report-redesignate-china-as-a-country-of-particular-concern-and-impose-sanctions/"
     },
     {
      "short": "ONU",
      "name": "ONU Genève – China: Tibetan children forced to assimilate, say independent rights experts",
      "url": "https://ungeneva.org/en/news-media/news/2023/02/77614/china-tibetan-children-forced-assimilate-independent-rights-experts"
     },
     {
      "short": "ICT",
      "name": "International Campaign for Tibet – USCIRF decries PRC campaign against Tibetan Buddhism in annual report",
      "url": "https://savetibet.org/uscirf-decries-prc-campaign-against-tibetan-buddhism-in-annual-report/"
     }
    ]
   },
   "104": {
    "v": 2,
    "name": "Birmanie",
    "t": "Rohingyas",
    "text": "Rohingyas : Selon un rapport du Haut-Commissariat de l'ONU publié en août 2026 (période juin 2025 – mai 2026), les Rohingyas subissent des abus généralisés et systématiques de la part de l'armée birmane comme de l'Armée d'Arakan, dont travail et recrutement forcés, détentions arbitraires et déplacements [1]. L'USCIRF recommande de désigner la Birmanie comme pays particulièrement préoccupant [2].",
    "sources": [
     {
      "short": "ONU",
      "name": "ONU Info – Myanmar (août 2026)",
      "url": "https://news.un.org/en/story/2026/08/1168200"
     },
     {
      "short": "USCIRF",
      "name": "USCIRF – 2026 Recommendations",
      "url": "https://www.uscirf.gov/countries/2026-recommendations"
     }
    ]
   },
   "364": {
    "v": 2,
    "name": "Iran",
    "t": "Bahaïs",
    "text": "Bahaïs : Le 29 juillet 2026, des experts de l'ONU, dont le rapporteur spécial sur l'Iran, ont exprimé leur vive inquiétude face à des allégations d'arrestations arbitraires, de disparitions forcées et de torture visant des membres de la minorité bahaïe [1]. L'Iran figure parmi les pays dont l'USCIRF recommande la désignation comme pays particulièrement préoccupant [2].",
    "sources": [
     {
      "short": "Jurist",
      "name": "Jurist – UN experts raise concern over Iran's intensified persecution of Bahá'ís",
      "url": "https://www.jurist.org/news/2026/07/un-experts-raise-concerns-over-irans-intensified-persecution-of-bahais-amid-the-us-iran-conflict/"
     },
     {
      "short": "USCIRF",
      "name": "USCIRF – 2026 Recommendations",
      "url": "https://www.uscirf.gov/countries/2026-recommendations"
     }
    ]
   },
   "004": {
    "v": 2,
    "name": "Afghanistan",
    "t": "Femmes et filles",
    "text": "Femmes et filles : Le rapporteur spécial de l'ONU sur l'Afghanistan et le groupe de travail de l'ONU sur la discrimination à l'égard des femmes ont conclu en 2025 que les violations massives et systématiques des droits des femmes et des filles par les talibans constituent une persécution fondée sur le genre et un cadre institutionnalisé d'« apartheid de genre » ; les talibans rejettent ces conclusions [1][2].",
    "sources": [
     {
      "short": "HRW",
      "name": "Human Rights Watch – HRC63: Renew Mandate of Special Rapporteur on Afghanistan (sept. 2026)",
      "url": "https://www.hrw.org/news/2026/09/18/hrc63-renew-mandate-of-special-rapporteur-on-afghanistan-and-maintain-dedicated"
     },
     {
      "short": "ONU",
      "name": "OHCHR via GlobalSecurity – Taliban weaponising justice sector to entrench gender persecution: UN expert (juin 2025)",
      "url": "https://www.globalsecurity.org/military/library/news/2025/06/mil-250616-ohchr01.htm"
     }
    ]
   },
   "408": {
    "v": 2,
    "name": "Corée du Nord",
    "t": "Chrétiens et croyants de toutes religions",
    "text": "Chrétiens et croyants de toutes religions : Selon l'USCIRF (décembre 2025), la liberté de religion est « de fait inexistante » en Corée du Nord et les conditions s'y sont encore dégradées ces dernières années ; la commission recommande de longue date sa désignation comme pays particulièrement préoccupant [1].",
    "sources": [
     {
      "short": "USCIRF",
      "name": "USCIRF – The Degrading Freedom of Religion or Belief Conditions in North Korea",
      "url": "https://www.uscirf.gov/news-room/releases-statements/degrading-freedom-religion-or-belief-conditions-north-korea"
     }
    ]
   },
   "586": {
    "v": 2,
    "name": "Pakistan",
    "t": "Ahmadis",
    "text": "Ahmadis : Amnesty International accuse le Pakistan de persécution systématique des ahmadis, citant attaques contre leurs cimetières, meurtres ciblés et accusations de blasphème fondées sur les articles 295 et 298 du Code pénal [1] ; en 2025, des experts de l'ONU ont appelé Islamabad à abroger ses lois sur le blasphème et à protéger les minorités religieuses [2].",
    "sources": [
     {
      "short": "Tribune India",
      "name": "The Tribune – Amnesty International accuses Pakistan of systematic persecution of Ahmadis",
      "url": "https://www.tribuneindia.com/news/world/amnesty-international-accuses-pakistan-of-systematic-persecution-of-ahmadis/"
     },
     {
      "short": "Jurist",
      "name": "Jurist – UN experts call for Pakistan to repeal blasphemy laws, protect religious minorities",
      "url": "https://www.jurist.org/news/2025/07/un-experts-call-for-pakistan-to-repeal-blasphemy-laws-protect-religious-minorities/"
     }
    ]
   },
   "566": {
    "v": 2,
    "name": "Nigeria",
    "t": "Chrétiens et musulmans (violences religieuses)",
    "text": "Chrétiens et musulmans (violences religieuses) : Le rapport 2026 de l'USCIRF décrit une grave crise de violences religieuses imputées à des militants non étatiques se réclamant d'une interprétation violente de l'islam, et reproche au gouvernement de ne pas y répondre sérieusement ; il évoque près de 53 000 morts depuis 2009 [1]. Le Nigeria a été désigné pays particulièrement préoccupant par les États-Unis en octobre 2025 [1].",
    "sources": [
     {
      "short": "OSV News",
      "name": "OSV News – Religious freedom watchdog annual report spotlights 'terrifying crisis of religious violence' in Nigeria",
      "url": "https://www.osvnews.com/religious-freedom-watchdog-annual-report-spotlights-terrifying-crisis-of-religious-violence-in-nigeria/"
     }
    ]
   },
   "232": {
    "v": 2,
    "name": "Érythrée",
    "t": "Témoins de Jéhovah et chrétiens non reconnus",
    "text": "Témoins de Jéhovah et chrétiens non reconnus : Selon le rapport 2026 de l'USCIRF, 64 témoins de Jéhovah restaient détenus en 2025, souvent sans inculpation, ainsi que des responsables chrétiens, dont un prêtre orthodoxe détenu depuis 2004 ; la commission recommande de redésigner l'Érythrée comme pays particulièrement préoccupant [1].",
    "sources": [
     {
      "short": "USCIRF",
      "name": "USCIRF 2026 Annual Report – Eritrea (via ecoi.net)",
      "url": "https://www.ecoi.net/en/file/local/2137787/USCIRF+2026+Annual+Report+Eritrea.pdf"
     }
    ]
   },
   "558": {
    "v": 2,
    "name": "Nicaragua",
    "t": "Église catholique et autres Églises chrétiennes",
    "text": "Église catholique et autres Églises chrétiennes : Le Groupe d'experts de l'ONU sur le Nicaragua a dénoncé des mesures visant les institutions religieuses, en particulier l'Église catholique, et un rapport onusien de mars 2026 a appelé le gouvernement Ortega-Murillo à cesser de persécuter les Églises [1][2]. L'USCIRF a condamné l'expulsion de prêtres détenus arbitrairement [3].",
    "sources": [
     {
      "short": "EWTN",
      "name": "EWTN News – UN human rights report on Nicaragua cites attacks on Catholic Church",
      "url": "https://www.ewtnnews.com/world/americas/un-human-rights-report-on-nicaragua-cites-attacks-on-catholic-church"
     },
     {
      "short": "ICC",
      "name": "International Christian Concern – U.N. report highlights widespread abuses by Nicaraguan government",
      "url": "https://persecution.org/2026/03/25/u-n-report-highlights-widespread-abuses-by-nicaraguan-government/"
     },
     {
      "short": "USCIRF",
      "name": "USCIRF – USCIRF Condemns Nicaragua's Expulsion of Arbitrarily Detained Priests",
      "url": "https://www.uscirf.gov/news-room/releases-statements/uscirf-condemns-nicaraguas-expulsion-arbitrarily-detained-priests"
     }
    ]
   },
   "760": {
    "v": 2,
    "name": "Syrie",
    "t": "Alaouites",
    "text": "Alaouites : La Commission d'enquête de l'ONU sur la Syrie a conclu en août 2025 que les violences de mars 2025 sur la côte, qui ont fait environ 1 400 morts, surtout des civils alaouites, constituent probablement des crimes de guerre, commis par des membres de forces liées au gouvernement intérimaire comme par des fidèles de l'ancien régime ; elle n'a pas trouvé de preuve qu'elles aient été ordonnées par le pouvoir central [1].",
    "sources": [
     {
      "short": "Al-Monitor",
      "name": "Al-Monitor – War crimes likely committed by both sides in Syria sectarian violence: UN commission",
      "url": "https://www.al-monitor.com/originals/2025/08/war-crimes-likely-committed-both-sides-syria-sectarian-violence-un-commission"
     }
    ]
   },
   "643": {
    "v": 2,
    "name": "Russie",
    "t": "Témoins de Jéhovah",
    "text": "Témoins de Jéhovah : Selon le chapitre Russie du rapport 2026 de l'USCIRF, environ 190 témoins de Jéhovah étaient en détention provisoire, emprisonnés, assignés à résidence ou astreints au travail forcé pour leurs activités religieuses en 2025 [1].",
    "sources": [
     {
      "short": "USCIRF",
      "name": "USCIRF 2026 Annual Report – Russia",
      "url": "https://www.uscirf.gov/sites/default/files/2026-03/USCIRF%202026%20Annual%20Report%20Russia.pdf"
     }
    ]
   },
   "356": {
    "v": 2,
    "name": "Inde",
    "t": "Musulmans, chrétiens et dalits",
    "text": "Musulmans, chrétiens et dalits : L'USCIRF recommande de désigner l'Inde comme pays particulièrement préoccupant, évoquant le durcissement de lois anti-conversion et des attaques contre chrétiens, dalits et musulmans restées largement impunies ; New Delhi rejette historiquement les conclusions de la commission [1].",
    "sources": [
     {
      "short": "USCIRF",
      "name": "USCIRF – 2026 India Country Brief",
      "url": "https://www.uscirf.gov/sites/default/files/2026-08/2026%20India%20Country%20Brief.pdf"
     }
    ]
   },
   "192": {
    "v": 1,
    "name": "Cuba",
    "t": "Liste USCIRF 2026",
    "text": "La Commission américaine sur la liberté religieuse internationale (USCIRF) recommande de le désigner comme « pays particulièrement préoccupant » dans son rapport 2026, pour des violations graves de la liberté de religion [1].",
    "sources": [
     {
      "short": "USCIRF",
      "name": "USCIRF – 2026 Recommendations",
      "url": "https://www.uscirf.gov/countries/2026-recommendations"
     }
    ]
   },
   "434": {
    "v": 1,
    "name": "Libye",
    "t": "Liste USCIRF 2026",
    "text": "La Commission américaine sur la liberté religieuse internationale (USCIRF) recommande de le désigner comme « pays particulièrement préoccupant » dans son rapport 2026, pour des violations graves de la liberté de religion [1].",
    "sources": [
     {
      "short": "USCIRF",
      "name": "USCIRF – 2026 Recommendations",
      "url": "https://www.uscirf.gov/countries/2026-recommendations"
     }
    ]
   },
   "682": {
    "v": 1,
    "name": "Arabie saoudite",
    "t": "Liste USCIRF 2026",
    "text": "La Commission américaine sur la liberté religieuse internationale (USCIRF) recommande de le désigner comme « pays particulièrement préoccupant » dans son rapport 2026, pour des violations graves de la liberté de religion [1].",
    "sources": [
     {
      "short": "USCIRF",
      "name": "USCIRF – 2026 Recommendations",
      "url": "https://www.uscirf.gov/countries/2026-recommendations"
     }
    ]
   },
   "762": {
    "v": 1,
    "name": "Tadjikistan",
    "t": "Liste USCIRF 2026",
    "text": "La Commission américaine sur la liberté religieuse internationale (USCIRF) recommande de le désigner comme « pays particulièrement préoccupant » dans son rapport 2026, pour des violations graves de la liberté de religion [1].",
    "sources": [
     {
      "short": "USCIRF",
      "name": "USCIRF – 2026 Recommendations",
      "url": "https://www.uscirf.gov/countries/2026-recommendations"
     }
    ]
   },
   "795": {
    "v": 1,
    "name": "Turkménistan",
    "t": "Liste USCIRF 2026",
    "text": "La Commission américaine sur la liberté religieuse internationale (USCIRF) recommande de le désigner comme « pays particulièrement préoccupant » dans son rapport 2026, pour des violations graves de la liberté de religion [1].",
    "sources": [
     {
      "short": "USCIRF",
      "name": "USCIRF – 2026 Recommendations",
      "url": "https://www.uscirf.gov/countries/2026-recommendations"
     }
    ]
   },
   "704": {
    "v": 1,
    "name": "Viêt Nam",
    "t": "Liste USCIRF 2026",
    "text": "La Commission américaine sur la liberté religieuse internationale (USCIRF) recommande de le désigner comme « pays particulièrement préoccupant » dans son rapport 2026, pour des violations graves de la liberté de religion [1].",
    "sources": [
     {
      "short": "USCIRF",
      "name": "USCIRF – 2026 Recommendations",
      "url": "https://www.uscirf.gov/countries/2026-recommendations"
     }
    ]
   }
  }
 }
];
