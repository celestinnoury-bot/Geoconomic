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
  "empty": "Situation « plutôt bonne » ou « bonne », ou non classé",
  "legend": [
   {
    "v": 2,
    "label": "Situation très grave (RSF)",
    "color": "#d93a3a"
   },
   {
    "v": 1,
    "label": "Situation difficile (RSF, liste partielle)",
    "color": "#f0a04b"
   }
  ],
  "countries": {
   "646": {
    "v": 2,
    "name": "Rwanda",
    "t": "139e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 139e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "344": {
    "v": 2,
    "name": "Hong Kong",
    "t": "140e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 140e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "760": {
    "v": 2,
    "name": "Syrie",
    "t": "141e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 141e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "400": {
    "v": 2,
    "name": "Jordanie",
    "t": "142e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 142e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "222": {
    "v": 2,
    "name": "Salvador",
    "t": "143e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 143e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "604": {
    "v": 2,
    "name": "Pérou",
    "t": "144e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 144e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "012": {
    "v": 2,
    "name": "Algérie",
    "t": "145e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 145e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "417": {
    "v": 2,
    "name": "Kirghizistan",
    "t": "146e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 146e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "860": {
    "v": 2,
    "name": "Ouzbékistan",
    "t": "147e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 147e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "231": {
    "v": 2,
    "name": "Éthiopie",
    "t": "148e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 148e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "398": {
    "v": 2,
    "name": "Kazakhstan",
    "t": "149e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 149e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "064": {
    "v": 2,
    "name": "Bhoutan",
    "t": "150e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 150e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "116": {
    "v": 2,
    "name": "Cambodge",
    "t": "151e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 151e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "050": {
    "v": 2,
    "name": "Bangladesh",
    "t": "152e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 152e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "586": {
    "v": 2,
    "name": "Pakistan",
    "t": "153e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 153e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "418": {
    "v": 2,
    "name": "Laos",
    "t": "154e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 154e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "762": {
    "v": 2,
    "name": "Tadjikistan",
    "t": "155e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 155e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "275": {
    "v": 2,
    "name": "Palestine",
    "t": "156e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 156e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "356": {
    "v": 2,
    "name": "Inde",
    "t": "157e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 157e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "784": {
    "v": 2,
    "name": "Émirats arabes unis",
    "t": "158e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 158e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "862": {
    "v": 2,
    "name": "Venezuela",
    "t": "159e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 159e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "192": {
    "v": 2,
    "name": "Cuba",
    "t": "160e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 160e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "729": {
    "v": 2,
    "name": "Soudan",
    "t": "161e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 161e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "368": {
    "v": 2,
    "name": "Irak",
    "t": "162e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 162e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "792": {
    "v": 2,
    "name": "Turquie",
    "t": "163e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 163e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "887": {
    "v": 2,
    "name": "Yémen",
    "t": "164e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 164e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "112": {
    "v": 2,
    "name": "Biélorussie",
    "t": "165e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 165e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "104": {
    "v": 2,
    "name": "Birmanie",
    "t": "166e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 166e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "262": {
    "v": 2,
    "name": "Djibouti",
    "t": "167e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 167e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "558": {
    "v": 2,
    "name": "Nicaragua",
    "t": "168e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 168e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "818": {
    "v": 2,
    "name": "Égypte",
    "t": "169e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 169e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "048": {
    "v": 2,
    "name": "Bahreïn",
    "t": "170e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 170e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "031": {
    "v": 2,
    "name": "Azerbaïdjan",
    "t": "171e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 171e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "643": {
    "v": 2,
    "name": "Russie",
    "t": "172e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 172e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "795": {
    "v": 2,
    "name": "Turkménistan",
    "t": "173e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 173e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "704": {
    "v": 2,
    "name": "Viêt Nam",
    "t": "174e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 174e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "004": {
    "v": 2,
    "name": "Afghanistan",
    "t": "175e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 175e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "682": {
    "v": 2,
    "name": "Arabie saoudite",
    "t": "176e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 176e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "364": {
    "v": 2,
    "name": "Iran",
    "t": "177e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 177e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "156": {
    "v": 2,
    "name": "Chine",
    "t": "178e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 178e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "408": {
    "v": 2,
    "name": "Corée du Nord",
    "t": "179e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 179e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "232": {
    "v": 2,
    "name": "Érythrée",
    "t": "180e sur 180 · situation très grave",
    "text": "Classement RSF 2026 : 180e sur 180, en « situation très grave » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "764": {
    "v": 1,
    "name": "Thaïlande",
    "t": "92e sur 180 · situation difficile",
    "text": "Classement RSF 2026 : 92e sur 180, en « situation difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "148": {
    "v": 1,
    "name": "Tchad",
    "t": "93e sur 180 · situation difficile",
    "text": "Classement RSF 2026 : 93e sur 180, en « situation difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "458": {
    "v": 1,
    "name": "Malaisie",
    "t": "95e sur 180 · situation difficile",
    "text": "Classement RSF 2026 : 95e sur 180, en « situation difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "096": {
    "v": 1,
    "name": "Brunei",
    "t": "96e sur 180 · situation difficile",
    "text": "Classement RSF 2026 : 96e sur 180, en « situation difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "032": {
    "v": 1,
    "name": "Argentine",
    "t": "98e sur 180 · situation difficile",
    "text": "Classement RSF 2026 : 98e sur 180, en « situation difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "688": {
    "v": 1,
    "name": "Serbie",
    "t": "104e sur 180 · situation difficile",
    "text": "Classement RSF 2026 : 104e sur 180, en « situation difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "854": {
    "v": 1,
    "name": "Burkina Faso",
    "t": "110e sur 180 · situation difficile",
    "text": "Classement RSF 2026 : 110e sur 180, en « situation difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "204": {
    "v": 1,
    "name": "Bénin",
    "t": "113e sur 180 · situation difficile",
    "text": "Classement RSF 2026 : 113e sur 180, en « situation difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "608": {
    "v": 1,
    "name": "Philippines",
    "t": "114e sur 180 · situation difficile",
    "text": "Classement RSF 2026 : 114e sur 180, en « situation difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "422": {
    "v": 1,
    "name": "Liban",
    "t": "115e sur 180 · situation difficile",
    "text": "Classement RSF 2026 : 115e sur 180, en « situation difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "376": {
    "v": 1,
    "name": "Israël",
    "t": "116e sur 180 · situation difficile",
    "text": "Classement RSF 2026 : 116e sur 180, en « situation difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "562": {
    "v": 1,
    "name": "Niger",
    "t": "120e sur 180 · situation difficile",
    "text": "Classement RSF 2026 : 120e sur 180, en « situation difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "466": {
    "v": 1,
    "name": "Mali",
    "t": "121e sur 180 · situation difficile",
    "text": "Classement RSF 2026 : 121e sur 180, en « situation difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "702": {
    "v": 1,
    "name": "Singapour",
    "t": "123e sur 180 · situation difficile",
    "text": "Classement RSF 2026 : 123e sur 180, en « situation difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "512": {
    "v": 1,
    "name": "Oman",
    "t": "127e sur 180 · situation difficile",
    "text": "Classement RSF 2026 : 127e sur 180, en « situation difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "360": {
    "v": 1,
    "name": "Indonésie",
    "t": "129e sur 180 · situation difficile",
    "text": "Classement RSF 2026 : 129e sur 180, en « situation difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "268": {
    "v": 1,
    "name": "Géorgie",
    "t": "135e sur 180 · situation difficile",
    "text": "Classement RSF 2026 : 135e sur 180, en « situation difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "788": {
    "v": 1,
    "name": "Tunisie",
    "t": "137e sur 180 · situation difficile",
    "text": "Classement RSF 2026 : 137e sur 180, en « situation difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
     }
    ]
   },
   "434": {
    "v": 1,
    "name": "Libye",
    "t": "138e sur 180 · situation difficile",
    "text": "Classement RSF 2026 : 138e sur 180, en « situation difficile » [1].",
    "sources": [
     {
      "short": "RSF",
      "name": "RSF – Classement 2026 : la liberté de la presse au plus bas depuis 25 ans",
      "url": "https://rsf.org/fr/classement-2026-la-libert%C3%A9-de-la-presse-au-plus-bas-depuis-25-ans"
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
