// Rubrique « Articles » : analyses, recherches et Culture G.
// Pour ajouter un article, voir contenu/MODELE_FICHE.md.
// `author` : signature affichée ; `kind` : type d'article (Culture G, Analyse, Enquête…).

window.GEOCO = window.GEOCO || {};
window.GEOCO.culture = [
  {
    id: "reserves-strategiques",
    author: "Rédaction Géoconomic (exemple)",
    kind: "Culture G",
    theme: "eco",
    title: "Les réserves stratégiques de pétrole : l'assurance-vie des pays",
    hook: "La France a des millions de barils cachés dans des cuves, prêts à servir en cas de crise. D'où vient cette idée ?",
    sections: [
      {
        title: "Né d'un traumatisme : 1973",
        paragraphs: [
          "En octobre 1973, pendant la guerre du Kippour, les pays arabes producteurs de pétrole décrètent un embargo contre les pays qui soutiennent Israël. Le prix du baril est multiplié par quatre en quelques mois : c'est le premier choc pétrolier [1].",
          "Les pays occidentaux découvrent alors à quel point ils dépendent du pétrole importé. En 1974, ils créent l'Agence internationale de l'énergie (AIE) pour se coordonner face aux crises [1]."
        ]
      },
      {
        title: "La règle des 90 jours",
        paragraphs: [
          "Chaque pays membre de l'AIE doit garder en stock l'équivalent d'au moins 90 jours de ses importations nettes de pétrole. En cas de crise, ces stocks peuvent être libérés de façon coordonnée [1].",
          "En France, une partie de ces stocks est détenue par un organisme spécialisé, financé par une petite part du prix que tu paies à la pompe."
        ]
      },
      {
        title: "Une arme rarement utilisée",
        paragraphs: [
          "Les libérations coordonnées restent exceptionnelles : guerre du Golfe en 1991, ouragan Katrina en 2005, guerre civile en Libye en 2011, invasion de l'Ukraine en 2022… et la crise d'Ormuz en 2026 [1][2].",
          "Leur limite : un stock ne remplace pas une production. Il sert à gagner du temps, pas à résoudre la crise."
        ]
      }
    ],
    didYouKnow: "Les réserves stratégiques des États-Unis sont stockées dans d'immenses cavités creusées dans des dômes de sel souterrains, au Texas et en Louisiane.",
    sources: [
      { short: "AIE", name: "Agence internationale de l'énergie, « Oil security »", url: "https://www.iea.org/topics/oil-security" },
      { short: "The National", name: "The National, accord du G7 sur les réserves (2 oct. 2026)", url: "https://www.thenationalnews.com/business/energy/2026/10/02/g7-members-agree-to-release-100-million-barrels-of-diesel-and-other-reserves/" }
    ],
    visuals: [
      {
        kind: "chart",
        type: "bar",
        title: "Les grandes libérations coordonnées de l'AIE",
        subtitle: "Volume total décidé, en millions de barils",
        xLabel: "Crise",
        unit: "Millions de barils",
        decimals: 0,
        data: [["Golfe 1991", 17.3], ["Katrina 2005", 60], ["Libye 2011", 60], ["Ukraine 2022", 182.7]],
        source: "Agence internationale de l'énergie (cumul des deux actions de mars et avril 2022 pour l'Ukraine)"
      }
    ]
  },
  {
    id: "cables-sous-marins",
    author: "Rédaction Géoconomic (exemple)",
    kind: "Culture G",
    theme: "geo",
    title: "Les câbles sous-marins : l'internet mondial tient à un fil",
    hook: "Tu penses que tes messages passent par des satellites ? En réalité, l'immense majorité traverse les océans dans des câbles posés au fond de la mer.",
    sections: [
      {
        title: "L'autoroute invisible",
        paragraphs: [
          "Environ 99 % des données échangées entre continents passent par des câbles sous-marins en fibre optique [1]. Il y en a plusieurs centaines, qui font au total plus d'un million de kilomètres [1].",
          "Un câble moderne n'est pas plus épais qu'un tuyau d'arrosage dans les grands fonds. Il est souvent posé à même le sol, à plusieurs kilomètres de profondeur."
        ]
      },
      {
        title: "Un nouveau terrain de rivalité",
        paragraphs: [
          "Les géants du numérique (Google, Meta, Microsoft, Amazon) financent désormais une grande partie des nouveaux câbles. Et les États surveillent de près qui les construit : les États-Unis ont écarté des entreprises chinoises de plusieurs projets [2].",
          "Les câbles passent aussi par les mêmes points stratégiques que le pétrole : mer Rouge, canal de Suez, détroit de Malacca."
        ]
      },
      {
        title: "Fragiles et difficiles à protéger",
        paragraphs: [
          "En 2024, plusieurs câbles ont été endommagés en mer Rouge, sans doute par l'ancre d'un cargo coulé après une attaque des Houthis. En mer Baltique, des câbles ont été sectionnés à plusieurs reprises en 2024 et 2025, et des navires soupçonnés de sabotage [2].",
          "Le problème : il est presque impossible de surveiller des milliers de kilomètres de câbles au fond de l'eau, et prouver un sabotage est très difficile."
        ]
      }
    ],
    didYouKnow: "Chaque année, des dizaines de câbles sont endommagés, la plupart du temps par accident : ancres de bateaux et chalutiers de pêche en sont les premières causes [1].",
    sources: [
      { short: "TeleGeography", name: "TeleGeography, Submarine Cable Map et FAQ", url: "https://www.submarinecablemap.com/" },
      { short: "CSIS", name: "CSIS, travaux sur la sécurité des câbles sous-marins", url: "https://www.csis.org/" }
    ],
    visuals: [
      {
        kind: "map",
        title: "Trois points chauds des câbles sous-marins",
        intro: "Touche un lieu pour zoomer.",
        points: [
          { name: "Marseille", coords: [5.37, 43.3], zoom: 16, text: "Un des plus grands carrefours de câbles au monde : plus d'une quinzaine de câbles y arrivent et relient l'Europe à l'Afrique, au Moyen-Orient et à l'Asie." },
          { name: "Mer Rouge", coords: [42.5, 14.5], zoom: 22, text: "Passage obligé des câbles entre l'Europe et l'Asie. En 2024, plusieurs y ont été endommagés, probablement par l'ancre d'un cargo coulé après une attaque des Houthis." },
          { name: "Mer Baltique", coords: [24.5, 59.4], zoom: 16, text: "Entre la Finlande, l'Estonie et la Suède, plusieurs câbles et gazoducs ont été endommagés en 2023, 2024 et 2025. Des navires ont été soupçonnés d'avoir raclé le fond avec leur ancre." }
        ],
        source: "TeleGeography ; presse internationale"
      }
    ]
  },
  {
    id: "barrage-renaissance",
    author: "Rédaction Géoconomic (exemple)",
    kind: "Culture G",
    theme: "geo",
    title: "Le barrage de la Renaissance : la guerre de l'eau sur le Nil",
    hook: "L'Éthiopie a construit le plus grand barrage d'Afrique. Pour l'Égypte, c'est une question de survie.",
    sections: [
      {
        title: "Un barrage géant",
        paragraphs: [
          "Le Grand barrage de la Renaissance éthiopienne a été construit sur le Nil Bleu, près de la frontière avec le Soudan. Lancé en 2011, il a été inauguré en septembre 2025 [1].",
          "Pour l'Éthiopie, c'est un symbole de fierté nationale et une source d'électricité énorme pour un pays où une grande partie de la population n'y a pas encore accès."
        ]
      },
      {
        title: "Pourquoi l'Égypte s'inquiète",
        paragraphs: [
          "L'Égypte tire l'essentiel de son eau douce du Nil. Or la majorité de l'eau du Nil vient des hauts plateaux éthiopiens, par le Nil Bleu [1].",
          "Le Caire craint que l'Éthiopie puisse contrôler le débit du fleuve, surtout en période de sécheresse. Des années de négociations n'ont abouti à aucun accord contraignant."
        ]
      },
      {
        title: "Un conflit qui en annonce d'autres",
        paragraphs: [
          "Avec le réchauffement climatique et la hausse de la population, l'eau devient une ressource stratégique. Le Nil n'est pas un cas isolé : le Tigre et l'Euphrate (Turquie, Syrie, Irak) ou le Mékong (Chine et Asie du Sud-Est) connaissent des tensions similaires."
        ]
      }
    ],
    didYouKnow: "Le Nil traverse ou borde onze pays. C'est l'un des plus longs fleuves du monde, avec l'Amazone.",
    sources: [
      { short: "Britannica", name: "Encyclopædia Britannica, « Grand Ethiopian Renaissance Dam »", url: "https://www.britannica.com/topic/Grand-Ethiopian-Renaissance-Dam" }
    ],
    visuals: [
      {
        kind: "map",
        title: "Le Nil, de l'Éthiopie à la Méditerranée",
        view: { center: [33, 20], span: 32 },
        aspect: 3 / 4,
        highlight: ["Ethiopia", "Sudan", "Egypt"],
        intro: "Le Nil Bleu naît en Éthiopie, rejoint le Nil Blanc à Khartoum, puis traverse le Soudan et l'Égypte. Touche un lieu pour zoomer.",
        points: [
          { name: "Barrage de la Renaissance", coords: [35.09, 11.21], zoom: 8, text: "Sur le Nil Bleu, à une quinzaine de kilomètres de la frontière soudanaise. Le plus grand barrage hydroélectrique d'Afrique." },
          { name: "Khartoum", coords: [32.53, 15.6], zoom: 8, text: "La capitale du Soudan, au confluent du Nil Bleu et du Nil Blanc. C'est ici que naît le Nil proprement dit." },
          { name: "Assouan", coords: [32.88, 23.97], zoom: 8, text: "Le haut barrage d'Assouan, construit dans les années 1960, est la grande réserve d'eau de l'Égypte : le lac Nasser." },
          { name: "Le Caire", coords: [31.24, 30.04], zoom: 8, text: "Plus de 20 millions d'habitants dans l'agglomération. Presque toute la population égyptienne vit le long du Nil et dans son delta." }
        ],
        source: "Encyclopædia Britannica"
      }
    ]
  }
];
