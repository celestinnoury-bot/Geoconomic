// Rubrique « Étude de cas » (dans Actu), en deux parties :
//  1. `podcast` : tes épisodes enregistrés, du plus récent au plus ancien.
//  2. `cas` : tes études de cas écrites, qui décortiquent une actu de A à Z.
// Mode d'emploi : voir contenu/MODELE_ETUDE.md.

window.GEOCO = window.GEOCO || {};
window.GEOCO.etudes = {
  // Offre : chaque lecteur peut écouter gratuitement `freeListens` épisodes de son choix,
  // ensuite il faut l'abonnement. Un épisode avec `free: true` reste toujours gratuit.
  offre: { name: "Géoconomic+", freeListens: 2, price: null },

  // Exemple d'épisode (à copier) :
  // {
  //   id: "ep01-ormuz",
  //   number: 1,
  //   title: "Ormuz : comment un détroit fait flamber ton plein",
  //   date: "2026-10-10",
  //   duration: "12 min",
  //   audio: "assets/podcast/ep01-ormuz.mp3",
  //   summary: "Ce que j'ai compris de la crise d'Ormuz, et pourquoi elle se retrouve à la pompe.",
  //   cas: "ormuz-plein",              // facultatif : l'étude de cas liée
  //   news: ["2026-10-07-ormuz"],      // facultatif : les actus liées
  //   free: true                       // facultatif : épisode toujours gratuit (bande-annonce…)
  // }
  podcast: [],

  cas: [
    {
      id: "ormuz-plein",
      author: "Rédaction Géoconomic (exemple)",
      date: "2026-10-08",
      theme: "mix",
      title: "Du détroit d'Ormuz à ton plein de gazole",
      hook: "Un bras de mer de quelques dizaines de kilomètres, à 5 000 km de Paris, fait grimper le prix du diesel en France. Comment ? On remonte la chaîne, maillon par maillon.",
      question: "Pourquoi une crise au Moyen-Orient se retrouve-t-elle sur ton ticket de caisse ?",
      chain: [
        { label: "Le choc", text: "Depuis fin février 2026, l'Iran bloque ou menace le détroit d'Ormuz, par où passaient près de 20 millions de barils de pétrole par jour [1][2]." },
        { label: "Le marché", text: "Moins de pétrole disponible et plus de risques : le baril de Brent dépasse encore 100 dollars début octobre [3]." },
        { label: "La pompe", text: "Le gazole atteint un record de 2,37 € le litre en moyenne en France [4]." },
        { label: "Toute l'économie", text: "L'inflation monte à 3,8 % en zone euro, avec une énergie en hausse de 18,8 % sur un an [5]." },
        { label: "La réaction", text: "La France libère 10 millions de barils de gazole de ses réserves pour faire baisser les prix de 12 à 18 centimes par litre [6]." }
      ],
      sections: [
        {
          title: "Le contexte",
          paragraphs: [
            "Le détroit d'Ormuz relie le golfe Persique à l'océan. C'est le principal passage du pétrole exporté par l'Arabie saoudite, l'Irak, le Koweït ou les Émirats. Avant le conflit, environ un cinquième de la consommation mondiale de pétrole y passait chaque jour [1].",
            "Après les frappes américaines et israéliennes contre l'Iran à partir du 28 février 2026, Téhéran a bloqué ou menacé le passage. Au plus fort de la crise, le nombre de pétroliers desservant le Golfe s'est effondré de 95 % [2]."
          ]
        },
        {
          title: "Le mécanisme : la prime de risque",
          paragraphs: [
            "Même quand les navires repassent, le danger a un prix : les assurances explosent, les armateurs hésitent, les trajets s'allongent. Les acheteurs paient donc plus cher chaque baril, par précaution. C'est ce qu'on appelle la prime de risque [3].",
            "Ce surcoût se répercute tout au long de la chaîne, jusqu'à la station-service : début octobre, le gazole atteint en moyenne 2,37 € le litre en France, un record [4]."
          ]
        },
        {
          title: "Gagnants et perdants",
          paragraphs: [
            "Perdants : les automobilistes, les transporteurs, les agriculteurs, et tous les secteurs qui consomment beaucoup d'énergie. Plus largement, tous les ménages, car l'énergie se diffuse dans les autres prix [5].",
            "Gagnants inattendus : l'Égypte. Pour contourner Ormuz, du pétrole saoudien passe par la mer Rouge puis le canal de Suez, dont les recettes ont bondi de 42 % sur un an en juillet [7]."
          ]
        }
      ],
      takeaways: [
        "Une route maritime bloquée suffit à faire monter les prix dans le monde entier.",
        "Le prix ne dépend pas seulement de la quantité de pétrole, mais aussi du risque perçu.",
        "Les réserves stratégiques amortissent le choc, mais ne règlent pas sa cause."
      ],
      news: ["2026-10-07-ormuz", "2026-10-07-gazole-reserves", "2026-10-07-zone-euro-inflation", "2026-10-07-suez"],
      sources: [
        { short: "CRS", name: "Congressional Research Service, « The Strait of Hormuz: Security Developments and Impacts on Oil, Gas, and Other Commodities »", url: "https://www.congress.gov/crs-product/R45281" },
        { short: "House of Commons Library", name: "House of Commons Library, « Israel/US-Iran conflict 2026: Reopening the Strait of Hormuz »", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10636/" },
        { short: "Gulf News", name: "Gulf News, « Oil prices split as Brent tops $102 » (5 oct. 2026)", url: "https://gulfnews.com/world/americas/oil-prices-split-as-brent-tops-102-murban-hits-110-per-barrel-on-oct-5-2026-1.500698305" },
        { short: "AFP", name: "AFP via La DH, « Gazole : nouveau record du prix moyen à la pompe dans l'UE » (1er oct. 2026)", url: "https://www.dhnet.be/dernieres-depeches/2026/10/01/gazole-nouveau-record-du-prix-moyen-a-la-pompe-dans-lue-analyse-afp-de-donnees-officielles-DWX2HN25IRGE5BAFEKWZKVOPAI/" },
        { short: "Eurostat", name: "Asianet Newsable, « Euro area inflation jumps to 3.8% in September, driven by energy » (estimation rapide d'Eurostat, 2 oct. 2026)", url: "https://newsable.asianetnews.com/business/euro-area-inflation-jumps-to-3-8-in-september-driven-by-energy-articleshow-hzzngdy" },
        { short: "Boursorama", name: "Boursorama, « La France va libérer 10 millions de barils de gazole de ses réserves » (7 oct. 2026)", url: "https://www.boursorama.com/actualite-economique/actualites/la-france-va-liberer-10-million-de-barils-de-gazole-de-ses-reserves-dit-lecornu-5d78402d6440a6dedbd1248647cdd411" },
        { short: "gCaptain", name: "gCaptain, « Suez Canal revival gathers pace as Hormuz crisis reroutes ships »", url: "https://gcaptain.com/suez-canal-revival-gathers-pace-as-hormuz-crisis-reroutes-ships/" }
      ]
    }
  ]
};
