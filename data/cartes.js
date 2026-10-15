// L'Album : cartes à collectionner (principes éco, moments historiques, personnages), page #/album.
// Inspiré des jeux de cartes tirées de pages Wikipédia : chaque carte renvoie à sa page Wikipédia, qui sert de source.
// - rarete : commune, rare, epique, legendaire (pèse sur le tirage des paquets).
// - stats : valeurs de jeu de 1 à 99 (Influence, Portée, Durée), pour les défis et les duels. Ce ne sont pas des notes officielles.
// - serie : id d'une série de window.GEOCO.cartesSeries ; cours : ids des cours liés (data/content.js).
// - defi : seulement pour les crises qui servent de « défi du jour » (stat à réunir et puissance à battre).
// Les ids ne changent jamais : ils serviront aux échanges entre joueurs quand les comptes seront branchés.
window.GEOCO = window.GEOCO || {};
window.GEOCO.cartesSeries = [
  { id: "fondateurs", name: "Les grandes pensées", text: "Les idées qui ont fondé l'économie." },
  { id: "libre-echange", name: "Libre-échange ou protection ?", text: "Le vieux débat sur le commerce entre pays." },
  { id: "monnaie", name: "Quand la monnaie déraille", text: "Inflation, taux de change et banques centrales." },
  { id: "crises", name: "Bulles et krachs", text: "Quand les prix s'envolent puis s'effondrent." },
  { id: "apres-guerre", name: "Le monde d'après-guerre", text: "Les règles du jeu économique fixées après 1945." },
  { id: "ressources", name: "Le pouvoir des ressources", text: "Pétrole, pâturages, poissons : qui gère quoi ?" },
  { id: "developpement", name: "Sortir de la pauvreté", text: "Ce qui fait qu'un pays se développe, ou non." }
];

(function () {
const W = (page, titre) => ({ short: "Wikipédia", name: `Wikipédia, « ${titre} »`, url: `https://fr.wikipedia.org/wiki/${page}` });

window.GEOCO.cartes = [
  // ---------- Principes ----------
  {
    id: "avantage-comparatif", famille: "principe", rarete: "epique", icon: "⚖️", serie: "libre-echange", cours: ["droits-de-douane"],
    title: "Avantage comparatif", sub: "1817",
    text: "Chaque pays gagne à se spécialiser dans ce qu'il fait relativement le mieux, même s'il est moins bon que les autres en tout.",
    fact: "David Ricardo le démontre en 1817 avec deux pays et deux produits : le vin du Portugal et le drap de l'Angleterre.",
    stats: { influence: 88, portee: 90, duree: 92 }, source: W("Avantage_comparatif", "Avantage comparatif")
  },
  {
    id: "offre-demande", famille: "principe", rarete: "commune", icon: "✂️", serie: "fondateurs", cours: ["inflation-taux"],
    title: "Offre et demande", sub: "1890",
    text: "Le prix se fixe là où ce que les vendeurs proposent rencontre ce que les acheteurs veulent.",
    fact: "Dans ses Principes d'économie (1890), Alfred Marshall compare l'offre et la demande aux deux lames d'une paire de ciseaux : aucune ne coupe seule.",
    stats: { influence: 80, portee: 95, duree: 90 }, source: W("%C3%89conomie_politique", "Économie politique")
  },
  {
    id: "inflation", famille: "principe", rarete: "commune", icon: "🎈", serie: "monnaie", cours: ["inflation-taux"],
    title: "Inflation", sub: "Partout, tout le temps",
    text: "La hausse générale et durable des prix : avec la même somme, on achète moins de choses.",
    fact: "Pour la freiner, les banques centrales relèvent leurs taux d'intérêt : le crédit coûte plus cher, on dépense moins.",
    stats: { influence: 75, portee: 96, duree: 85 }, source: W("Inflation", "Inflation")
  },
  {
    id: "protectionnisme", famille: "principe", rarete: "commune", icon: "🛡️", serie: "libre-echange", cours: ["droits-de-douane"],
    title: "Protectionnisme", sub: "Droits de douane, quotas",
    text: "Protéger ses producteurs de la concurrence étrangère, avec des droits de douane, des quotas ou des normes.",
    fact: "Les économistes en débattent toujours : protéger une industrie peut sauver des emplois, mais fait souvent payer plus cher les consommateurs.",
    stats: { influence: 72, portee: 85, duree: 88 }, source: W("Protectionnisme", "Protectionnisme")
  },
  {
    id: "main-invisible", famille: "principe", rarete: "epique", icon: "🫳", serie: "fondateurs", cours: [],
    title: "La main invisible", sub: "1776",
    text: "L'idée qu'en cherchant chacun son intérêt, les gens peuvent servir l'intérêt général sans l'avoir voulu.",
    fact: "Célèbre, l'expression n'apparaît pourtant qu'une seule fois dans La Richesse des nations d'Adam Smith.",
    stats: { influence: 92, portee: 80, duree: 90 }, source: W("Main_invisible", "Main invisible")
  },
  {
    id: "tragedie-communs", famille: "principe", rarete: "rare", icon: "🐑", serie: "ressources", cours: [],
    title: "Tragédie des communs", sub: "1968",
    text: "Quand une ressource est à tout le monde, chacun a intérêt à en prendre un peu plus… jusqu'à l'épuiser.",
    fact: "Garrett Hardin la décrit en 1968 dans la revue Science avec un pâturage partagé : chaque éleveur ajoute une bête, et le pré meurt.",
    stats: { influence: 70, portee: 82, duree: 70 }, source: W("Trag%C3%A9die_des_biens_communs", "Tragédie des biens communs")
  },
  {
    id: "alea-moral", famille: "principe", rarete: "commune", icon: "🎲", serie: "crises", cours: [],
    title: "Aléa moral", sub: "Assurance, banques",
    text: "Quand on est protégé contre un risque, on peut être tenté de prendre plus de risques.",
    fact: "L'assureur ne voit pas les efforts de prudence de ses assurés : c'est le cas d'école. On retrouve l'idée pour les banques sauvées par l'État.",
    stats: { influence: 62, portee: 75, duree: 72 }, source: W("Al%C3%A9a_moral", "Aléa moral")
  },
  {
    id: "destruction-creatrice", famille: "principe", rarete: "rare", icon: "🔥", serie: "fondateurs", cours: ["semi-conducteurs"],
    title: "Destruction créatrice", sub: "1942",
    text: "Les innovations remplacent les anciennes façons de produire : des entreprises disparaissent, d'autres naissent.",
    fact: "Joseph Schumpeter popularise l'expression en 1942 dans Capitalisme, socialisme et démocratie.",
    stats: { influence: 78, portee: 84, duree: 80 }, source: W("Destruction_cr%C3%A9atrice", "Destruction créatrice")
  },
  {
    id: "triangle-incompatibilite", famille: "principe", rarete: "rare", icon: "🔺", serie: "monnaie", cours: ["dollar", "inflation-taux"],
    title: "Triangle d'incompatibilité", sub: "Années 1960",
    text: "Un pays ne peut pas avoir à la fois un change fixe, des capitaux libres et une politique monétaire à lui. Il doit en sacrifier un.",
    fact: "L'idée est attribuée à l'économiste Robert Mundell, qui la formule dans les années 1960.",
    stats: { influence: 68, portee: 78, duree: 66 }, source: W("Triangle_d'incompatibilit%C3%A9", "Triangle d'incompatibilité")
  },
  {
    id: "malediction-ressources", famille: "principe", rarete: "commune", icon: "🛢️", serie: "developpement", cours: [],
    title: "Malédiction des ressources", sub: "Pétrole, gaz, minerais",
    text: "Des pays très riches en ressources naturelles se développent parfois moins bien que des pays qui n'en ont pas.",
    fact: "Une de ses causes s'appelle la « maladie hollandaise » : dans les années 1960, le gaz des Pays-Bas a fait monter le florin et décliner l'industrie.",
    stats: { influence: 60, portee: 80, duree: 75 }, source: W("Mal%C3%A9diction_des_ressources_naturelles", "Malédiction des ressources naturelles")
  },

  // ---------- Moments historiques ----------
  {
    id: "tulipomanie", famille: "moment", rarete: "commune", icon: "🌷", serie: "crises", cours: [],
    title: "Tulipomanie", sub: "Pays-Bas, 1637",
    text: "Une des premières bulles spéculatives connues : le prix des bulbes de tulipe s'envole, puis s'effondre.",
    fact: "Au sommet, en février 1637, un bulbe s'échangeait contre jusqu'à dix fois le salaire annuel d'un artisan, selon certaines sources ; les prix chutent ensuite en trois semaines.",
    stats: { influence: 55, portee: 45, duree: 30 }, source: W("Tulipomanie", "Tulipomanie"),
    defi: { stat: "influence", power: 150, text: "Les prix des tulipes s'effondrent. Qui saura expliquer la bulle ?" }
  },
  {
    id: "weimar-1923", famille: "moment", rarete: "rare", icon: "💸", serie: "monnaie", cours: ["inflation-taux"],
    title: "Hyperinflation de Weimar", sub: "Allemagne, 1923",
    text: "En Allemagne, les prix doublent en quelques jours : les billets ne valent plus rien.",
    fact: "En novembre 1923, il fallait 4 200 milliards de marks pour un dollar. Une nouvelle monnaie, le Rentenmark, met fin à la crise.",
    stats: { influence: 74, portee: 60, duree: 50 }, source: W("Hyperinflation_de_la_r%C3%A9publique_de_Weimar", "Hyperinflation de la république de Weimar"),
    defi: { stat: "duree", power: 190, text: "La monnaie s'effondre. Il faut des idées qui tiennent dans la durée." }
  },
  {
    id: "krach-1929", famille: "moment", rarete: "legendaire", icon: "📉", serie: "crises", cours: ["inflation-taux"],
    title: "Krach de 1929", sub: "Wall Street, 24 octobre 1929",
    text: "La Bourse de New York s'effondre et ouvre la Grande Dépression, qui touche le monde entier.",
    fact: "Entre 1929 et juillet 1932, l'indice Dow Jones perd 89 % de sa valeur. Il ne retrouve son niveau qu'en 1959.",
    stats: { influence: 95, portee: 97, duree: 70 }, source: W("Krach_de_1929", "Krach de 1929"),
    defi: { stat: "portee", power: 230, text: "La crise part de Wall Street et gagne le monde. Il faut une équipe qui voit grand." }
  },
  {
    id: "smoot-hawley", famille: "moment", rarete: "rare", icon: "🧱", serie: "libre-echange", cours: ["droits-de-douane"],
    title: "Loi Hawley-Smoot", sub: "États-Unis, 1930",
    text: "En pleine crise, les États-Unis relèvent leurs droits de douane ; leurs partenaires répliquent.",
    fact: "Promulguée le 17 juin 1930, la loi relève les droits de douane sur plus de 20 000 produits. Son poids dans la chute du commerce reste débattu.",
    stats: { influence: 66, portee: 72, duree: 45 }, source: W("Loi_Hawley-Smoot", "Loi Hawley-Smoot"),
    defi: { stat: "influence", power: 200, text: "Une guerre commerciale éclate. Il faut convaincre les pays de rouvrir leurs frontières." }
  },
  {
    id: "bretton-woods", famille: "moment", rarete: "legendaire", icon: "🏨", serie: "apres-guerre", cours: ["dollar"],
    title: "Bretton Woods", sub: "Juillet 1944",
    text: "Les Alliés fixent les règles de la monnaie mondiale autour du dollar, lui-même rattaché à l'or.",
    fact: "Du 1er au 22 juillet 1944, 730 délégués de 44 pays créent le FMI et la future Banque mondiale.",
    stats: { influence: 96, portee: 94, duree: 82 }, source: W("Accords_de_Bretton_Woods", "Accords de Bretton Woods")
  },
  {
    id: "plan-marshall", famille: "moment", rarete: "rare", icon: "🏗️", serie: "apres-guerre", cours: [],
    title: "Plan Marshall", sub: "1948-1952",
    text: "Les États-Unis financent la reconstruction de l'Europe de l'Ouest après la guerre.",
    fact: "De 1948 à 1952, plus de 13 milliards de dollars sont distribués, aux cinq sixièmes sous forme de dons.",
    stats: { influence: 84, portee: 76, duree: 64 }, source: W("Guerre_froide", "Guerre froide")
  },
  {
    id: "nixon-1971", famille: "moment", rarete: "rare", icon: "🪙", serie: "apres-guerre", cours: ["dollar"],
    title: "Fin du dollar-or", sub: "15 août 1971",
    text: "Le président Nixon annonce qu'on ne peut plus échanger les dollars contre de l'or : la fin du système de Bretton Woods.",
    fact: "Jusque-là, une once d'or valait 35 dollars. La décision est prise sans consulter les partenaires des États-Unis.",
    stats: { influence: 86, portee: 88, duree: 90 }, source: W("%C3%89talon-or", "Étalon-or")
  },
  {
    id: "choc-petrolier-1973", famille: "moment", rarete: "epique", icon: "⛽", serie: "ressources", cours: ["routes-maritimes", "inflation-taux"],
    title: "Premier choc pétrolier", sub: "Octobre 1973",
    text: "Après la guerre du Kippour, les pays arabes producteurs augmentent le prix du pétrole et décrètent un embargo.",
    fact: "Entre octobre 1973 et mars 1974, le prix du baril est multiplié par quatre.",
    stats: { influence: 88, portee: 92, duree: 60 }, source: W("Premier_choc_p%C3%A9trolier", "Premier choc pétrolier"),
    defi: { stat: "portee", power: 210, text: "Le baril quadruple. Il faut une équipe capable d'agir partout à la fois." }
  },
  {
    id: "chine-omc", famille: "moment", rarete: "rare", icon: "🚢", serie: "libre-echange", cours: ["droits-de-douane", "routes-maritimes"],
    title: "La Chine entre à l'OMC", sub: "11 décembre 2001",
    text: "Après 15 ans de négociations, la Chine rejoint l'Organisation mondiale du commerce un tournant pour le commerce mondial.",
    fact: "La demande d'adhésion avait été déposée le 10 juillet 1986.",
    stats: { influence: 90, portee: 93, duree: 78 }, source: W("Organisation_mondiale_du_commerce", "Organisation mondiale du commerce")
  },
  {
    id: "lehman-2008", famille: "moment", rarete: "epique", icon: "🏦", serie: "crises", cours: ["inflation-taux"],
    title: "Faillite de Lehman Brothers", sub: "15 septembre 2008",
    text: "La banque américaine fait faillite : la crise des subprimes devient une crise financière mondiale.",
    fact: "C'est la plus grosse faillite de l'histoire financière des États-Unis, et le début de la crise bancaire la plus grave depuis 1929.",
    stats: { influence: 86, portee: 95, duree: 55 }, source: W("Crise_bancaire_et_financi%C3%A8re_de_l'automne_2008", "Crise bancaire et financière de l'automne 2008"),
    defi: { stat: "influence", power: 220, text: "Les banques ne se prêtent plus entre elles. Il faut des idées assez fortes pour rétablir la confiance." }
  },

  // ---------- Personnages ----------
  {
    id: "ibn-khaldoun", famille: "personnage", rarete: "rare", icon: "📜", serie: "fondateurs", cours: [],
    title: "Ibn Khaldoun", sub: "1332-1406 · Tunis",
    text: "Historien et penseur du Maghreb, il étudie la montée et le déclin des États, et le rôle de l'impôt.",
    fact: "Ses écrits du XIVe siècle sont cités comme les premières réflexions sur le lien entre le niveau des impôts et l'activité, bien avant la « courbe de Laffer ».",
    stats: { influence: 70, portee: 66, duree: 96 }, source: W("Courbe_de_Laffer", "Courbe de Laffer")
  },
  {
    id: "adam-smith", famille: "personnage", rarete: "legendaire", icon: "📕", serie: "fondateurs", cours: [],
    title: "Adam Smith", sub: "1723-1790 · Écosse",
    text: "On le présente souvent comme le père de l'économie moderne : il explique comment la division du travail enrichit les pays.",
    fact: "La Richesse des nations paraît le 9 mars 1776 à Londres. Son exemple célèbre : une manufacture d'épingles où chaque ouvrier fait une seule tâche.",
    stats: { influence: 98, portee: 90, duree: 97 }, source: W("Recherches_sur_la_nature_et_les_causes_de_la_richesse_des_nations", "Recherches sur la nature et les causes de la richesse des nations")
  },
  {
    id: "david-ricardo", famille: "personnage", rarete: "epique", icon: "🍷", serie: "libre-echange", cours: ["droits-de-douane"],
    title: "David Ricardo", sub: "1772-1823 · Angleterre",
    text: "Économiste anglais, il défend le libre-échange avec un raisonnement encore enseigné partout.",
    fact: "Il publie en 1817 Des principes de l'économie politique et de l'impôt, où il démontre l'avantage comparatif.",
    stats: { influence: 88, portee: 84, duree: 92 }, source: W("Des_principes_de_l'%C3%A9conomie_politique_et_de_l'imp%C3%B4t", "Des principes de l'économie politique et de l'impôt")
  },
  {
    id: "karl-marx", famille: "personnage", rarete: "epique", icon: "🏭", serie: "fondateurs", cours: [],
    title: "Karl Marx", sub: "1818-1883 · Allemagne",
    text: "Philosophe et économiste, il analyse le capitalisme industriel. Ses idées ont inspiré des mouvements politiques dans le monde entier.",
    fact: "Le livre I du Capital paraît en 1867 ; les livres II et III sont publiés après sa mort, en 1885 et 1894.",
    stats: { influence: 95, portee: 92, duree: 85 }, source: W("Chronologie_de_la_pens%C3%A9e_%C3%A9conomique", "Chronologie de la pensée économique")
  },
  {
    id: "keynes", famille: "personnage", rarete: "legendaire", icon: "🎩", serie: "apres-guerre", cours: ["inflation-taux"],
    title: "John Maynard Keynes", sub: "1883-1946 · Angleterre",
    text: "Pour lui, en temps de crise, l'État peut relancer l'économie en dépensant quand les ménages et les entreprises n'osent plus.",
    fact: "Sa Théorie générale (1936) fonde la macroéconomie. En 1944, il dirige la délégation britannique à Bretton Woods.",
    stats: { influence: 97, portee: 93, duree: 88 }, source: W("Th%C3%A9orie_g%C3%A9n%C3%A9rale_de_l'emploi,_de_l'int%C3%A9r%C3%AAt_et_de_la_monnaie", "Théorie générale de l'emploi, de l'intérêt et de la monnaie")
  },
  {
    id: "hayek", famille: "personnage", rarete: "epique", icon: "🧭", serie: "fondateurs", cours: [],
    title: "Friedrich Hayek", sub: "1899-1992 · Autriche",
    text: "Pour lui, les prix du marché transmettent une information qu'aucun planificateur ne peut réunir seul.",
    fact: "Il reçoit le prix Nobel d'économie en 1974, partagé avec Gunnar Myrdal, aux idées très différentes des siennes.",
    stats: { influence: 86, portee: 78, duree: 84 }, source: W("Prix_de_la_Banque_de_Su%C3%A8de_en_sciences_%C3%A9conomiques_en_m%C3%A9moire_d%27Alfred_Nobel", "Prix de la Banque de Suède en sciences économiques")
  },
  {
    id: "milton-friedman", famille: "personnage", rarete: "epique", icon: "🖨️", serie: "monnaie", cours: ["inflation-taux"],
    title: "Milton Friedman", sub: "1912-2006 · États-Unis",
    text: "Chef de file de l'école de Chicago, il voit dans la quantité de monnaie la clé de l'inflation : c'est le monétarisme.",
    fact: "Prix Nobel d'économie en 1976, notamment pour ses travaux sur la consommation et l'histoire monétaire.",
    stats: { influence: 90, portee: 85, duree: 76 }, source: W("%C3%89cole_de_Chicago_(%C3%A9conomie)", "École de Chicago (économie)")
  },
  {
    id: "amartya-sen", famille: "personnage", rarete: "rare", icon: "🌾", serie: "developpement", cours: [],
    title: "Amartya Sen", sub: "Né en 1933 · Inde",
    text: "Il montre que la pauvreté, ce n'est pas seulement le manque d'argent, mais le manque de libertés et de « capabilités ».",
    fact: "Prix Nobel d'économie en 1998, notamment pour ses travaux sur les famines. Ses idées ont inspiré l'indice de développement humain de l'ONU.",
    stats: { influence: 80, portee: 86, duree: 74 }, source: W("Liste_des_laur%C3%A9ats_indiens_du_Prix_Nobel", "Liste des lauréats indiens du prix Nobel")
  },
  {
    id: "elinor-ostrom", famille: "personnage", rarete: "rare", icon: "🎣", serie: "ressources", cours: [],
    title: "Elinor Ostrom", sub: "1933-2012 · États-Unis",
    text: "Elle montre que des communautés savent gérer ensemble une ressource partagée, sans la privatiser ni la confier à l'État.",
    fact: "En 2009, elle devient la première femme à recevoir le prix Nobel d'économie, pour ses travaux sur les biens communs.",
    stats: { influence: 76, portee: 74, duree: 72 }, source: W("La_Gouvernance_des_biens_communs_:_Pour_une_nouvelle_approche_des_ressources_naturelles", "La Gouvernance des biens communs")
  },
  {
    id: "esther-duflo", famille: "personnage", rarete: "rare", icon: "🧪", serie: "developpement", cours: [],
    title: "Esther Duflo", sub: "Née en 1972 · France",
    text: "Elle teste sur le terrain, comme en médecine, ce qui marche vraiment contre la pauvreté.",
    fact: "Prix Nobel d'économie en 2019 avec Abhijit Banerjee et Michael Kremer, pour leur approche expérimentale de la lutte contre la pauvreté.",
    stats: { influence: 74, portee: 80, duree: 62 }, source: W("Prix_de_la_Banque_de_Su%C3%A8de_en_sciences_%C3%A9conomiques_en_m%C3%A9moire_d%27Alfred_Nobel", "Prix de la Banque de Suède en sciences économiques")
  }
];
})();
