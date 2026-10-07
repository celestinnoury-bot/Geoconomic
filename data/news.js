// Fil d'actu quotidien.
// Une entrée = un événement du jour, expliqué simplement.
// Les plus récentes en premier. `culture` et `dossiers` renvoient vers des id existants.

window.GEOCO = window.GEOCO || {};
window.GEOCO.news = [
  {
    id: "2026-10-07-gazole-reserves",
    date: "2026-10-07",
    theme: "eco",
    title: "La France ouvre ses réserves de gazole pour faire baisser les prix à la pompe",
    summary: "Le Premier ministre Sébastien Lecornu annonce la mise sur le marché de 10 millions de barils de gazole stockés par l'État, sur trois mois.",
    points: [
      "Le gazole coûte en moyenne 2,37 € le litre en France, un niveau record lié à la guerre au Moyen-Orient.",
      "L'État va puiser dans ses stocks stratégiques : 10 millions de barils, vendus à prix coûtant pendant trois mois.",
      "Objectif affiché : une baisse de 12 à 18 centimes par litre à la pompe."
    ],
    why: [
      "Ce gazole a été acheté avant la flambée des prix. En le revendant à son prix d'achat, l'État injecte du carburant moins cher sur le marché, ce qui fait mécaniquement baisser les prix.",
      "La France n'agit pas seule. La semaine dernière, les pays du G7 se sont mis d'accord pour libérer ensemble 100 millions de barils de pétrole et de gazole sur quatre mois, en coordination avec l'Agence internationale de l'énergie."
    ],
    forMe: "Si tu roules au diesel, le plein d'un réservoir de 50 litres pourrait coûter 6 à 9 € de moins. Mais c'est une mesure temporaire : tant que le détroit d'Ormuz reste perturbé, les prix restent sous pression.",
    figures: [
      { value: "10 M", label: "de barils de gazole libérés par la France" },
      { value: "2,37 €", label: "le prix moyen du litre de gazole en France début octobre" },
      { value: "-12 à -18 c", label: "la baisse attendue par litre" }
    ],
    culture: ["reserves-strategiques"],
    dossiers: ["routes-maritimes", "inflation-taux"],
    sources: [
      { name: "Boursorama (7 oct. 2026)", url: "https://www.boursorama.com/actualite-economique/actualites/la-france-va-liberer-10-million-de-barils-de-gazole-de-ses-reserves-dit-lecornu-5d78402d6440a6dedbd1248647cdd411" },
      { name: "franceinfo, allocution du Premier ministre", url: "https://www.franceinfo.fr/politique/gouvernement-de-sebastien-lecornu/direct-lycees-carburants-budget-suivez-l-allocution-du-premier-ministre-sebastien-lecornu_8227246.html" },
      { name: "The National, accord du G7 (2 oct. 2026)", url: "https://www.thenationalnews.com/business/energy/2026/10/02/g7-members-agree-to-release-100-million-barrels-of-diesel-and-other-reserves/" }
    ]
  },
  {
    id: "2026-10-07-ormuz",
    date: "2026-10-07",
    theme: "geo",
    title: "Ormuz : le pétrole repasse, mais la menace iranienne pèse toujours",
    summary: "Les exportations du Golfe repartent, mais l'Iran veut contrôler le détroit et faire payer les navires. Le baril de Brent reste au-dessus de 100 dollars.",
    points: [
      "Depuis les frappes américaines et israéliennes contre l'Iran fin février 2026, Téhéran a bloqué ou menacé le détroit d'Ormuz.",
      "Un cessez-le-feu (avril) puis un accord en juin devaient rouvrir le passage, mais l'Iran veut désormais encaisser des « frais de passage ».",
      "Début octobre, le Brent dépasse encore 100 dollars le baril, même si les exportations du Golfe reprennent."
    ],
    why: [
      "Avant le conflit, près de 20 millions de barils de pétrole passaient chaque jour par ce détroit, soit environ un cinquième de la consommation mondiale. Au plus fort de la crise, le trafic de pétroliers vers le Golfe s'est effondré de 95 %.",
      "Même quand les bateaux repassent, le risque coûte cher : les assurances explosent, les pétroliers manquent et les trajets s'allongent. C'est cette « prime de risque » qui maintient les prix hauts."
    ],
    forMe: "C'est la cause directe des prix records à la pompe, et une des raisons pour lesquelles l'inflation repart. Tant qu'Ormuz n'est pas sécurisé, ton budget carburant et chauffage reste exposé.",
    figures: [
      { value: "> 100 $", label: "le prix du baril de Brent début octobre 2026" },
      { value: "≈ 20 M", label: "de barils par jour passaient par Ormuz avant la guerre" },
      { value: "-95 %", label: "de pétroliers vers le Golfe au plus fort de la crise (OMC)" }
    ],
    culture: ["cables-sous-marins"],
    dossiers: ["routes-maritimes", "sanctions"],
    sources: [
      { name: "House of Commons Library, réouverture du détroit d'Ormuz", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10636/" },
      { name: "Congressional Research Service, le détroit d'Ormuz", url: "https://www.congress.gov/crs-product/R45281" },
      { name: "Gulf News, prix du pétrole (5 oct. 2026)", url: "https://gulfnews.com/world/americas/oil-prices-split-as-brent-tops-102-murban-hits-110-per-barrel-on-oct-5-2026-1.500698305" }
    ]
  },
  {
    id: "2026-10-07-fed",
    date: "2026-10-07",
    theme: "eco",
    title: "La Fed remonte ses taux pour la première fois depuis trois ans",
    summary: "Les marchés attendent cette semaine le compte rendu de la réunion de septembre, où la banque centrale américaine a relevé ses taux à l'unanimité.",
    points: [
      "Le 16 septembre, la Réserve fédérale américaine (Fed) a relevé ses taux d'un quart de point, à 3,75 %-4 %.",
      "C'est sa première hausse depuis 2023, votée à l'unanimité (12 voix contre 0).",
      "Raison principale : l'inflation reste trop élevée, poussée par la flambée du pétrole."
    ],
    why: [
      "« L'inflation est trop élevée, et depuis trop longtemps », a résumé le président de la Fed, Kevin Warsh. L'indicateur d'inflation préféré de la Fed dépasse 3 % chaque mois depuis le début de l'année, loin de son objectif de 2 %.",
      "C'est un tournant : il y a un an, on parlait plutôt de baisses de taux. Le choc pétrolier a renversé la tendance. Les responsables de la Fed prévoient en moyenne une seule autre hausse cette année."
    ],
    forMe: "Quand la Fed monte ses taux, le dollar a tendance à se renforcer : les voyages aux États-Unis et le pétrole (payé en dollars) coûtent plus cher en euros. La BCE peut aussi être tentée de suivre, ce qui renchérirait les crédits en Europe.",
    figures: [
      { value: "3,75-4 %", label: "le nouveau taux directeur de la Fed" },
      { value: "12-0", label: "un vote unanime" },
      { value: "> 3 %", label: "l'inflation sous-jacente (PCE) chaque mois de 2026" }
    ],
    culture: [],
    dossiers: ["inflation-taux", "dollar"],
    sources: [
      { name: "CNBC, décision de la Fed (16 sept. 2026)", url: "https://www.cnbc.com/2026/09/16/fed-rate-decision-september-2026.html" },
      { name: "NPR, première hausse en trois ans", url: "https://www.npr.org/2026/09/16/nx-s1-5968724/federal-reserve-interest-rates-inflation-economy" }
    ]
  }
];
