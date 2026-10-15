// L'Album des lieux (page #/album) : les endroits réels, souvent peu connus, qui font tourner l'économie mondiale.
// On les découvre en explorant le globe (quelques sondes par jour) ou en vrai, en passant à moins de 50 km.
// - famille : passage (détroits, canaux, ports), sous-sol (mines, gisements), centre (usines, bourses, réserves).
// - rarete : à quel point le lieu est connu du grand public : connu, discret, cache, secret.
// - coords : [latitude, longitude] ; key : le chiffre clé (sourcé, comme le fait) ; route : id d'une route de window.GEOCO.lieuxRoutes.
// Les ids ne changent jamais : ils serviront aux échanges entre lecteurs quand les comptes seront branchés.
window.GEOCO = window.GEOCO || {};
window.GEOCO.lieuxRoutes = [
  { id: "petrole", name: "La route du pétrole vers l'Europe", text: "Du Golfe à l'Europe par la mer Rouge.", arcs: true, places: ["ormuz", "bab-el-mandeb", "rotterdam"] },
  { id: "puces", name: "La machine à puces", text: "La machine néerlandaise, l'usine taïwanaise, puis le détroit vers le monde.", arcs: true, places: ["veldhoven", "hsinchu", "malacca"] },
  { id: "metaux", name: "Les métaux des batteries et des aimants", text: "Cobalt, lithium, nickel, terres rares : le sous-sol de la transition.", places: ["kolwezi", "atacama", "morowali", "bayan-obo"] },
  { id: "soie", name: "Les nouvelles routes de la soie", text: "Les ports et les gares que la Chine a financés ou loués.", arcs: true, places: ["khorgos", "gwadar", "hambantota", "djibouti"] },
  { id: "plaques", name: "Les plaques tournantes", text: "Là où les marchandises changent de bateau.", places: ["panama", "tanger-med", "jebel-ali", "ras-laffan"] },
  { id: "geants", name: "Les géants du sous-sol", text: "Fer, or, cuivre, terres rares : des gisements hors normes.", places: ["simandou", "grasberg", "kiruna"] },
  { id: "coulisses", name: "Les coulisses du monde", text: "Des lieux discrets dont tout dépend.", places: ["svalbard", "cushing", "marseille"] }
];

window.GEOCO.lieux = [
  // ---------- Passages et ports ----------
  {
    id: "malacca", famille: "passage", rarete: "discret", route: "puces", coords: [2.5, 101.4],
    name: "Détroit de Malacca", where: "Malaisie, Indonésie, Singapour",
    key: { value: "≈ 22 %", label: "du commerce maritime mondial" },
    text: "Le raccourci entre l'océan Indien et le Pacifique. Le pétrole du Golfe y passe pour rejoindre la Chine, le Japon et la Corée.",
    fact: "Plus de 102 500 navires l'ont traversé en 2025 selon les autorités malaisiennes, et environ 23 millions de barils de pétrole par jour au premier semestre 2025.",
    source: { short: "WION", name: "WION, « 22% of world trade: what is Malacca Strait »", url: "https://www.wionews.com/photos/-22-of-world-trade-what-is-malacca-strait-why-this-largest-oil-transit-chokepoint-is-in-focus-amid-hormuz-tensions-1776958833015" }
  },
  {
    id: "bab-el-mandeb", famille: "passage", rarete: "discret", route: "petrole", coords: [12.6, 43.3],
    name: "Bab-el-Mandeb", where: "Yémen, Djibouti, Érythrée",
    key: { value: "÷ 2", label: "de pétrole en 2024, à cause des attaques" },
    text: "La porte sud de la mer Rouge. Fermée, elle coupe la route la plus courte entre l'Asie et l'Europe, par le canal de Suez.",
    fact: "Après les attaques des Houthis contre les navires, les flux sont tombés de 8,7 millions de barils par jour en 2023 à environ 4 millions sur les huit premiers mois de 2024 : les pétroliers contournent l'Afrique.",
    source: { short: "EIA", name: "U.S. Energy Information Administration, Today in Energy", url: "https://www.eia.gov/todayinenergy/detail.php?id=63446" }
  },
  {
    id: "ormuz", famille: "passage", rarete: "connu", route: "petrole", coords: [26.6, 56.4],
    name: "Détroit d'Ormuz", where: "Iran, Oman",
    key: { value: "20 %", label: "du pétrole consommé dans le monde" },
    text: "Le goulet par où sortent le pétrole et le gaz du Golfe : Arabie saoudite, Irak, Émirats, Koweït, Qatar, Iran.",
    fact: "En 2024, 20 millions de barils par jour y sont passés en moyenne, et 84 % du brut partait vers l'Asie.",
    source: { short: "EIA", name: "U.S. Energy Information Administration, « Amid regional conflict, the Strait of Hormuz remains critical »", url: "https://www.eia.gov/todayinenergy/detail.php?id=65504" }
  },
  {
    id: "panama", famille: "passage", rarete: "connu", route: "plaques", coords: [9.1, -79.7],
    name: "Canal de Panama", where: "Panama",
    key: { value: "31 → 25", label: "passages par jour, sécheresse de 2023" },
    text: "Le canal marche à l'eau de pluie : ses écluses sont remplies par un lac. Quand il ne pleut pas, moins de navires passent.",
    fact: "Avec la sécheresse liée à El Niño, l'autorité du canal a réduit les passages de 31 à 25 par jour en novembre 2023, puis prévu 18 en février 2024.",
    source: { short: "gCaptain", name: "gCaptain, « Panama Canal reduces daily transits »", url: "https://gcaptain.com/panama-canal-reduces-daily-transits/" }
  },
  {
    id: "tanger-med", famille: "passage", rarete: "discret", route: "plaques", coords: [35.88, -5.5],
    name: "Tanger Med", where: "Maroc",
    key: { value: "10,2 M", label: "de conteneurs (EVP) en 2024" },
    text: "Sur le détroit de Gibraltar, le Maroc a bâti un géant : les conteneurs y changent de navire entre l'Asie, l'Europe, l'Afrique et les Amériques.",
    fact: "17e port à conteneurs du monde selon Alphaliner, le seul de Méditerranée et d'Afrique dans le top 30.",
    source: { short: "Morocco World News", name: "Morocco World News, « Tanger Med rises to 17th in global port rankings »", url: "https://www.moroccoworldnews.com/2025/03/187628/tanger-med-rises-to-17th-in-global-port-rankings-outpaces-global-rivals/" }
  },
  {
    id: "djibouti", famille: "passage", rarete: "cache", route: "soie", coords: [11.6, 43.15],
    name: "Djibouti", where: "Djibouti",
    key: { value: "8 à 11", label: "bases militaires étrangères" },
    text: "Un petit pays posté sur Bab-el-Mandeb. Sa géographie est sa richesse : il loue son territoire aux grandes puissances.",
    fact: "États-Unis, Chine, France, Japon, Italie : tous y ont une base, sur quelques kilomètres de côte. C'est la première base militaire de la Chine à l'étranger.",
    source: { short: "Al Majalla", name: "Al Majalla, « Why do so many foreign powers have military bases in Djibouti? »", url: "https://en.majalla.com/node/288091/politics/why-do-so-many-foreign-powers-have-military-bases-djibouti" }
  },
  {
    id: "hambantota", famille: "passage", rarete: "cache", route: "soie", coords: [6.12, 81.11],
    name: "Port d'Hambantota", where: "Sri Lanka",
    key: { value: "99 ans", label: "de concession à un groupe chinois" },
    text: "Un grand port au sud du Sri Lanka, construit avec des prêts chinois, où peu de navires s'arrêtaient.",
    fact: "En 2017, faute de trafic pour rembourser, le Sri Lanka a cédé 85 % du port à China Merchants Port pour 1,12 milliard de dollars. Le pays a fait défaut sur sa dette en 2022.",
    source: { short: "AidData", name: "AidData, projet 33409 (port d'Hambantota)", url: "https://china.aiddata.org/projects/33409" }
  },
  {
    id: "gwadar", famille: "passage", rarete: "cache", route: "soie", coords: [25.12, 62.33],
    name: "Port de Gwadar", where: "Pakistan",
    key: { value: "40 ans", label: "de bail à une entreprise publique chinoise" },
    text: "Un port du Baloutchistan pakistanais, près du détroit d'Ormuz, au bout du corridor économique Chine-Pakistan.",
    fact: "Depuis 2017, China Overseas Port Holding garde plus de 90 % des revenus du port. Pour la Chine, c'est un accès à la mer d'Arabie qui permettrait d'éviter en partie le détroit de Malacca.",
    source: { short: "The Maritime Executive", name: "The Maritime Executive, « Pakistan gives China a 40-year lease for Gwadar port »", url: "https://maritime-executive.com/article/pakistan-gives-china-a-40-year-lease-for-gwadar-port" }
  },

  // ---------- Sous-sol ----------
  {
    id: "kolwezi", famille: "sous-sol", rarete: "discret", route: "metaux", coords: [-10.71, 25.47],
    name: "Kolwezi", where: "République démocratique du Congo",
    key: { value: "75 %", label: "du cobalt mondial vient de RDC (2024)" },
    text: "La capitale minière du Katanga. Son cobalt finit dans les batteries des téléphones et des voitures électriques.",
    fact: "Selon l'USGS, la RDC a produit environ 75 % du cobalt mondial en 2024 et détient environ 55 % des réserves.",
    source: { short: "USGS", name: "U.S. Geological Survey, Congo (Kinshasa)", url: "https://www.usgs.gov/centers/national-minerals-information-center/congo-kinshasa" }
  },
  {
    id: "atacama", famille: "sous-sol", rarete: "discret", route: "metaux", coords: [-23.5, -68.25],
    name: "Salar d'Atacama", where: "Chili",
    key: { value: "≈ 1/2", label: "des réserves connues de lithium du monde" },
    text: "Un désert de sel dans le nord du Chili. Sous la croûte, une eau très salée riche en lithium, qu'on fait évaporer au soleil.",
    fact: "Deux entreprises seulement y produisent, SQM et Albemarle, sous contrat avec l'agence publique chilienne Corfo, avec des coûts parmi les plus bas du monde.",
    source: { short: "The Northern Miner", name: "The Northern Miner, « Is Chile losing ground in the lithium space? »", url: "https://secure.northernminer.com/news/is-chile-losing-ground-in-the-lithium-space/1003809640" }
  },
  {
    id: "bayan-obo", famille: "sous-sol", rarete: "cache", route: "metaux", coords: [41.8, 109.97],
    name: "Bayan Obo", where: "Mongolie-Intérieure, Chine",
    key: { value: "n° 1", label: "plus grand gisement de terres rares connu" },
    text: "Ces métaux servent aux aimants des moteurs électriques, des éoliennes et des missiles. La Chine en tire l'essentiel de sa production.",
    fact: "Le gisement est d'abord exploité pour son fer : les terres rares sortent en sous-produit, ce qui les rend moins chères à extraire.",
    source: { short: "Mining.com", name: "Mining.com, « Chinese rare earth giant born »", url: "https://mining.com/chinese-rare-earth-giant-born-62354/" }
  },
  {
    id: "simandou", famille: "sous-sol", rarete: "secret", route: "geants", coords: [8.6, -8.9],
    name: "Simandou", where: "Guinée",
    key: { value: "120 Mt", label: "de fer par an à pleine capacité" },
    text: "Une chaîne de montagnes de Guinée qui cache un des plus grands gisements de fer inexploités du monde.",
    fact: "Après des décennies d'attente, le premier chargement est parti en novembre 2025 vers la Chine. Le gisement est estimé à environ 4 milliards de tonnes d'un minerai très riche (65 % de fer).",
    source: { short: "The Maritime Executive", name: "The Maritime Executive, « Guinea's giant iron ore mine begins loading its first shipment »", url: "https://news.maritime-executive.com/article/guinea-s-giant-iron-ore-mine-begins-loading-its-first-shipment" }
  },
  {
    id: "grasberg", famille: "sous-sol", rarete: "cache", route: "geants", coords: [-4.05, 137.11],
    name: "Grasberg", where: "Papouasie, Indonésie",
    key: { value: "808 t", label: "d'or en réserve (fin 2022)" },
    text: "Dans les montagnes de Papouasie, près du plus haut sommet d'Océanie, l'une des plus grandes mines d'or et de cuivre du monde.",
    fact: "S'y ajoutent 14 millions de tonnes de cuivre. L'État indonésien contrôle 51,24 % de la société qui l'exploite ; l'américain Freeport-McMoRan a le reste.",
    source: { short: "Wikipédia", name: "Wikipédia (en), « Grasberg mine »", url: "https://en.wikipedia.org/wiki/Grasberg_mine" }
  },
  {
    id: "morowali", famille: "sous-sol", rarete: "cache", route: "metaux", coords: [-2.83, 122.17],
    name: "Morowali", where: "Sulawesi, Indonésie",
    key: { value: "≈ 40 %", label: "du nickel mondial vient d'Indonésie (2023)" },
    text: "Un parc industriel de 2 000 hectares, avec son port, son aéroport et sa centrale à charbon, bâti autour du nickel.",
    fact: "Depuis que l'Indonésie interdit d'exporter son minerai brut, des groupes chinois comme Tsingshan y ont construit des fonderies. En décembre 2023, une explosion dans l'une d'elles a tué 21 ouvriers.",
    source: { short: "Foreign Policy", name: "Foreign Policy, « Indonesia's Nickel Business Is Boosting Development and Ruining Lives »", url: "https://foreignpolicy.com/2025/01/06/indonesia-nickel-industry-china-deaths-worker-safety-imip/" }
  },
  {
    id: "kiruna", famille: "sous-sol", rarete: "discret", route: "geants", coords: [67.85, 20.22],
    name: "Kiruna", where: "Laponie, Suède",
    key: { value: "> 1 Mt", label: "d'oxydes de terres rares (gisement Per Geijer)" },
    text: "Au-delà du cercle polaire, la ville du fer. L'Europe y cherche une alternative aux terres rares chinoises.",
    fact: "La société minière publique LKAB a annoncé en janvier 2023 le plus grand gisement de terres rares connu en Europe. L'extraction ne commencerait pas avant 10 à 15 ans.",
    source: { short: "LKAB", name: "LKAB, « Europe's largest deposit of rare earth metals is located in the Kiruna area »", url: "https://lkab.com/en/press/europes-largest-deposit-of-rare-earth-metals-is-located-in-the-kiruna-area/" }
  },
  {
    id: "ras-laffan", famille: "sous-sol", rarete: "secret", route: "plaques", coords: [25.9, 51.55],
    name: "Ras Laffan", where: "Qatar",
    key: { value: "77 → 110 Mt", label: "de gaz liquéfié par an (projet d'agrandissement)" },
    text: "La ville industrielle d'où le Qatar exporte son gaz naturel liquéfié vers l'Asie et l'Europe, par méthaniers.",
    fact: "Le gaz vient du North Field, le plus grand gisement de gaz non associé du monde, que le Qatar partage avec l'Iran, qui l'appelle South Pars.",
    source: { short: "EIA", name: "U.S. Energy Information Administration, Natural Gas Weekly Update (25 mars 2021)", url: "https://www.eia.gov/naturalgas/weekly/archivenew_ngwu/2021/03_25" }
  },

  // ---------- Centres névralgiques ----------
  {
    id: "hsinchu", famille: "centre", rarete: "connu", route: "puces", coords: [24.78, 121.0],
    name: "Hsinchu", where: "Taïwan",
    key: { value: "> 90 %", label: "des puces les plus avancées (estimation)" },
    text: "Le parc scientifique de Taïwan, cœur mondial des semi-conducteurs, où TSMC a son siège depuis sa création.",
    fact: "Par certaines estimations, TSMC fabrique plus de 90 % des puces les plus avancées du monde. C'est le « bouclier de silicium » de Taïwan.",
    source: { short: "NPR", name: "NPR, transcription « Political winds shift, top chipmaker TSMC looks beyond Taiwan »", url: "https://www.npr.org/transcripts/nx-s1-5620992" }
  },
  {
    id: "veldhoven", famille: "centre", rarete: "secret", route: "puces", coords: [51.41, 5.4],
    name: "Veldhoven", where: "Pays-Bas",
    key: { value: "1 seule", label: "entreprise au monde fait les machines EUV" },
    text: "Une petite ville du sud des Pays-Bas. Sans les machines qui y sont conçues, pas de puces dernier cri.",
    fact: "ASML est la seule entreprise capable de fabriquer les machines de lithographie EUV. Chacune coûte plus de 100 millions d'euros.",
    source: { short: "Tom's Hardware", name: "Tom's Hardware, « ASML's planned low-NA EUV machine price hikes reportedly frustrate TSMC »", url: "https://www.tomshardware.com/tech-industry/semiconductors/asmls-planned-low-na-euv-machine-price-hikes-reportedly-frustrate-tsmc-lithography-machine-maker-comes-knocking-to-make-bank-on-tsmcs-profitable-fabs-potentially-costing-the-taiwanese-chipmaker-billions" }
  },
  {
    id: "cushing", famille: "centre", rarete: "cache", route: "coulisses", coords: [35.98, -96.77],
    name: "Cushing", where: "Oklahoma, États-Unis",
    key: { value: "−40 $", label: "le baril, le 20 avril 2020" },
    text: "Une petite ville couverte de réservoirs. C'est là que se livre le pétrole américain de référence, le WTI.",
    fact: "Au printemps 2020, avec le confinement, les cuves se remplissaient : le prix est tombé jusqu'à −40,32 $ le baril, le premier prix négatif depuis le début des cotations en 1983.",
    source: { short: "EIA", name: "U.S. Energy Information Administration, Today in Energy (avril 2020)", url: "https://www.eia.gov/todayinenergy/detail.php?id=43495" }
  },
  {
    id: "jebel-ali", famille: "centre", rarete: "discret", route: "plaques", coords: [25.0, 55.06],
    name: "Jebel Ali", where: "Dubaï, Émirats arabes unis",
    key: { value: "≈ 9 500", label: "entreprises dans la zone franche" },
    text: "Un port et une zone franche sortis du désert : les marchandises y arrivent, sont stockées, puis repartent vers le Golfe, l'Afrique et l'Inde.",
    fact: "La zone franche, créée en 1985, accueille plus de 9 500 entreprises, dont environ 800 parmi les plus grandes du monde (Fortune 500).",
    source: { short: "UAE Inform", name: "UAE Inform, « Jafza »", url: "https://uaeinform.com/uae/jafza" }
  },
  {
    id: "rotterdam", famille: "centre", rarete: "connu", route: "petrole", coords: [51.95, 4.14],
    name: "Port de Rotterdam", where: "Pays-Bas",
    key: { value: "435,8 Mt", label: "de marchandises en 2024" },
    text: "Le grand port de l'Europe, à l'embouchure du Rhin : pétrole, conteneurs, céréales y entrent pour tout le continent.",
    fact: "Dont 13,8 millions de conteneurs (EVP). La légère baisse de 2024 vient surtout du charbon et du pétrole brut.",
    source: { short: "Port de Rotterdam", name: "Port of Rotterdam, « Throughput figures »", url: "https://www.portofrotterdam.com/en/pressroom/throughput-figures" }
  },
  {
    id: "svalbard", famille: "centre", rarete: "discret", route: "coulisses", coords: [78.24, 15.49],
    name: "Réserve mondiale de semences", where: "Svalbard, Norvège",
    key: { value: "> 860 000", label: "échantillons de graines (2015)" },
    text: "Un bunker creusé dans le permafrost d'une île de l'Arctique : la réserve de semences de secours de l'humanité.",
    fact: "La guerre en Syrie a provoqué le premier retrait, en 2015 : un centre de recherche agricole qui avait quitté Alep a récupéré ses graines. En 2017, il en a retiré 52 451 autres.",
    source: { short: "Crop Trust", name: "Crop Trust, « More than 50,000 seeds withdrawn from Seed Vault »", url: "https://www.croptrust.org/resources/more-than-50000-seeds-withdrawn-from-seed-vault" }
  },
  {
    id: "marseille", famille: "centre", rarete: "cache", route: "coulisses", coords: [43.33, 5.35],
    name: "Marseille, port d'internet", where: "France",
    key: { value: "16+", label: "câbles sous-marins internationaux" },
    text: "On le connaît pour son port ; on sait moins que des câbles d'internet venus de trois continents arrivent sur ses plages.",
    fact: "Ses câbles sous-marins relient l'Europe à l'Afrique, au Moyen-Orient et à l'Asie, et des centres de données se sont installés autour.",
    source: { short: "Datacentres.com", name: "Datacentres.com, « Brookfield acquires Marseille subsea hub »", url: "https://www.datacentres.com/deals/28" }
  },
  {
    id: "khorgos", famille: "centre", rarete: "secret", route: "soie", coords: [44.2, 80.35],
    name: "Khorgos", where: "Kazakhstan, frontière chinoise",
    key: { value: "49 %", label: "du port sec détenu par des groupes chinois" },
    text: "Au milieu de l'Asie centrale, un « port » sans mer, sur la route ferroviaire entre la Chine et l'Europe.",
    fact: "Les rails changent d'écartement à la frontière : les conteneurs passent des trains chinois aux trains kazakhs. COSCO et le port de Lianyungang détiennent 49 % du port sec.",
    source: { short: "Belt and Road Portal", name: "Belt and Road Portal, « Khorgos, where East meets West »", url: "https://eng.yidaiyilu.gov.cn/p/16151.html" }
  }
];
