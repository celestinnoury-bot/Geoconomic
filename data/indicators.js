// Indicateurs économiques par pays, affichés sur le globe de l'onglet « Chiffres ».
// Clés des valeurs : codes ISO 3166 numériques (les mêmes que data/countries.js).
// `d` = période de la donnée. À mettre à jour quand de nouveaux chiffres sortent.
//
// Couleurs : une seule teinte par indicateur, du plus sombre (faible) au plus clair (élevé).
// `bins` = seuils entre les classes de couleur.

window.GEOCO = window.GEOCO || {};
window.GEOCO.indicators = {
  "updated": "2026-10-08",
  "latest": [
    {
      "group": "Économie",
      "value": "3,8 %",
      "label": "Inflation dans la zone euro",
      "date": "septembre 2026",
      "link": "#/chiffres/inflation",
      "source": {
        "short": "Eurostat",
        "url": "https://newsable.asianetnews.com/business/euro-area-inflation-jumps-to-3-8-in-september-driven-by-energy-articleshow-hzzngdy"
      }
    },
    {
      "group": "Économie",
      "value": "> 100 $",
      "label": "Le baril de pétrole Brent",
      "date": "début octobre 2026",
      "link": "#/actu/2026-10-07-ormuz",
      "source": {
        "short": "Gulf News",
        "url": "https://gulfnews.com/world/americas/oil-prices-split-as-brent-tops-102-murban-hits-110-per-barrel-on-oct-5-2026-1.500698305"
      }
    },
    {
      "group": "Économie",
      "value": "3,0 %",
      "label": "Croissance mondiale prévue en 2026",
      "date": "prévision de juillet 2026",
      "link": "#/chiffres/croissance",
      "source": {
        "short": "FMI",
        "url": "https://www.imf.org/en/news/articles/2026/07/08/tr070826-weo-press-briefing-transcript-july-8-2026"
      }
    },
    {
      "group": "Conflits",
      "value": "65",
      "label": "Conflits impliquant des États, un record depuis 1946",
      "date": "année 2025",
      "link": "#/conflits",
      "source": {
        "short": "UCDP",
        "url": "https://www.uu.se/en/press/press-releases/2026/2026-06-09-ucdp-record-number-of-conflicts-between-states"
      }
    },
    {
      "group": "Conflits",
      "value": "5",
      "label": "Situations qui s'aggravent, aucune qui s'améliore",
      "date": "septembre 2026",
      "link": "#/conflits",
      "source": {
        "short": "CrisisWatch",
        "url": "https://www.crisisgroup.org/crisiswatch/september-trends-and-october-alerts-2026"
      }
    },
    {
      "group": "Défense",
      "value": "2 887 Md$",
      "label": "Dépenses militaires mondiales, un record",
      "date": "année 2025",
      "link": "#/conflits",
      "source": {
        "short": "SIPRI",
        "url": "https://www.sipri.org/media/press-release/2026/global-military-spending-rise-continues-european-and-asian-expenditures-surge"
      }
    }
  ],
  "names": {
    "100": "Bulgarie",
    "104": "Birmanie",
    "108": "Burundi",
    "112": "Biélorussie",
    "116": "Cambodge",
    "120": "Cameroun",
    "124": "Canada",
    "132": "Cap-Vert",
    "136": "Îles Caïmans",
    "140": "République Centrafricaine",
    "144": "Sri Lanka",
    "148": "Tchad",
    "152": "Chili",
    "156": "Chine",
    "158": "Taïwan",
    "170": "Colombie",
    "174": "Comores",
    "178": "Congo",
    "180": "RD Congo",
    "188": "Costa Rica",
    "191": "Croatie",
    "192": "Cuba",
    "196": "Chypre",
    "203": "République Tchèque",
    "204": "Bénin",
    "208": "Danemark",
    "212": "Dominique",
    "214": "République Dominicaine",
    "218": "Équateur",
    "222": "El Salvador",
    "226": "Guinée équatoriale",
    "231": "Éthiopie",
    "232": "Érythrée",
    "233": "Estonie",
    "234": "Îles Féroé",
    "242": "Fidji",
    "246": "Finlande",
    "250": "France",
    "262": "Djibouti",
    "266": "Gabon",
    "268": "Géorgie",
    "270": "Gambie",
    "275": "Palestine",
    "276": "Allemagne",
    "288": "Ghana",
    "300": "Grèce",
    "308": "Grenade",
    "320": "Guatemala",
    "324": "Guinée",
    "328": "Guyana",
    "332": "Haïti",
    "340": "Honduras",
    "344": "Hong Kong",
    "348": "Hongrie",
    "352": "Islande",
    "356": "Inde",
    "360": "Indonésie",
    "364": "Iran",
    "368": "Irak",
    "372": "Irlande",
    "376": "Israël",
    "380": "Italie",
    "384": "Côte d'Ivoire",
    "388": "Jamaïque",
    "392": "Japon",
    "398": "Kazakhstan",
    "400": "Jordanie",
    "404": "Kenya",
    "410": "Corée du Sud",
    "414": "Koweït",
    "417": "Kirghizistan",
    "418": "Laos",
    "422": "Liban",
    "426": "Lesotho",
    "428": "Lettonie",
    "430": "Libéria",
    "434": "Libye",
    "438": "Liechtenstein",
    "440": "Lituanie",
    "442": "Luxembourg",
    "446": "Macao",
    "450": "Madagascar",
    "454": "Malawi",
    "458": "Malaisie",
    "462": "Maldives",
    "466": "Mali",
    "470": "Malte",
    "478": "Mauritanie",
    "480": "Maurice",
    "484": "Mexique",
    "496": "Mongolie",
    "498": "Moldavie",
    "499": "Monténégro",
    "504": "Maroc",
    "508": "Mozambique",
    "512": "Oman",
    "516": "Namibie",
    "524": "Népal",
    "528": "Pays-Bas",
    "533": "Aruba",
    "540": "Nouvelle-Calédonie",
    "548": "Vanuatu",
    "554": "Nouvelle-Zélande",
    "558": "Nicaragua",
    "562": "Niger",
    "566": "Nigeria",
    "578": "Norvège",
    "586": "Pakistan",
    "591": "Panama",
    "598": "Papouasie-Nouvelle-Guinée",
    "600": "Paraguay",
    "604": "Pérou",
    "608": "Philippines",
    "616": "Pologne",
    "620": "Portugal",
    "624": "Guinée-Bissau",
    "626": "Timor-Leste",
    "630": "Porto Rico",
    "634": "Qatar",
    "642": "Roumanie",
    "643": "Russie",
    "646": "Rwanda",
    "670": "Saint-Vincent-et-les-Grenadines",
    "678": "São Tomé-et-Principe",
    "682": "Arabie saoudite",
    "686": "Sénégal",
    "688": "Serbie",
    "690": "Seychelles",
    "694": "Sierra Leone",
    "702": "Singapour",
    "703": "Slovaquie",
    "704": "Vietnam",
    "705": "Slovénie",
    "706": "Somalie",
    "710": "Afrique du Sud",
    "716": "Zimbabwe",
    "724": "Espagne",
    "728": "Soudan du Sud",
    "729": "Soudan",
    "740": "Suriname",
    "748": "Eswatini",
    "752": "Suède",
    "756": "Suisse",
    "760": "Syrie",
    "762": "Tadjikistan",
    "764": "Thaïlande",
    "768": "Togo",
    "776": "Tonga",
    "780": "Trinité-et-Tobago",
    "784": "Émirats arabes unis",
    "788": "Tunisie",
    "792": "Turquie",
    "795": "Turkménistan",
    "800": "Ouganda",
    "804": "Ukraine",
    "807": "Macédoine du Nord",
    "818": "Égypte",
    "826": "Royaume-Uni",
    "834": "République unie de Tanzanie",
    "840": "États-Unis",
    "854": "Burkina Faso",
    "858": "Uruguay",
    "860": "Ouzbékistan",
    "862": "Venezuela",
    "882": "Samoa",
    "887": "Yémen",
    "894": "Zambie",
    "036": "Australie",
    "076": "Brésil",
    "032": "Argentine",
    "004": "Afghanistan",
    "008": "Albanie",
    "012": "Algérie",
    "020": "Andorre",
    "024": "Angola",
    "028": "Antigua-et-Barbuda",
    "031": "Azerbaïdjan",
    "040": "Autriche",
    "044": "Bahamas",
    "048": "Bahreïn",
    "050": "Bangladesh",
    "051": "Arménie",
    "052": "Barbade",
    "056": "Belgique",
    "060": "Bermudes",
    "064": "Bhoutan",
    "068": "Bolivie",
    "070": "Bosnie-Herzégovine",
    "072": "Botswana",
    "084": "Belize",
    "090": "Îles Salomon",
    "096": "Brunei Darussalam"
  },
  "list": [
    {
      "id": "inflation",
      "label": "Inflation",
      "title": "L'inflation dans le monde",
      "explain": "Hausse des prix sur un an : combien un même panier de courses coûte de plus qu'il y a douze mois.",
      "unit": "%",
      "bins": [
        2,
        4,
        6,
        10
      ],
      "colors": [
        "#4a2c16",
        "#7d4419",
        "#b65d1f",
        "#ec8a3a",
        "#ffc47e"
      ],
      "note": "Dernier chiffre publié pour chaque pays (inflation sur un an), le plus souvent août ou septembre 2026, d'après les instituts nationaux compilés par Trading Economics et, quand elles sont plus récentes, les sources officielles. Les pays de la zone euro mêlent indice national et indice harmonisé d'Eurostat. Quelques chiffres extrêmes (Venezuela, Iran, Soudan, Palestine) sont à prendre avec prudence.",
      "sources": [
        {
          "short": "Trading Economics",
          "name": "Trading Economics, Inflation Rate – listes par continent (Afrique, Asie, Europe, Amérique, Océanie) (consulté le 8 oct. 2026)",
          "url": "https://tradingeconomics.com/country-list/inflation-rate"
        },
        {
          "short": "Eurostat",
          "name": "Eurostat, estimation rapide IPCH septembre 2026, communiqué du 2 oct. 2026 (consulté le 8 oct. 2026)",
          "url": "https://ec.europa.eu/eurostat/web/products-euro-indicators/w/2-02102026-ap"
        },
        {
          "short": "BCC / ACP",
          "name": "Banque Centrale du Congo / Agence Congolaise de Presse, inflation en glissement annuel (consulté le 8 oct. 2026)",
          "url": "https://acp.cd/anglais/drc-the-national-inflation-stands-at-0-192-in-the-second-week-of-august-2026/"
        },
        {
          "short": "Sudan Tribune",
          "name": "Sudan Tribune, « Sudan annual inflation hits 26.14% in August » (CBS Soudan) (consulté le 8 oct. 2026)",
          "url": "https://sudantribune.com/article/319156"
        },
        {
          "short": "TheGlobalEconomy",
          "name": "TheGlobalEconomy.com, Samoa inflation annuelle (d'après la Banque centrale de Samoa) (consulté le 8 oct. 2026)",
          "url": "https://www.theglobaleconomy.com/Samoa/inflation_annual/"
        },
        {
          "short": "NRBT / Matangi Tonga",
          "name": "National Reserve Bank of Tonga, décision d'août 2026, via Matangi Tonga (consulté le 8 oct. 2026)",
          "url": "https://matangitonga.to/2026/08/29/nrbt-maintains-neutral-stance"
        },
        {
          "short": "Banque mondiale / Tridge",
          "name": "Banque mondiale (rapport Myanmar juin 2026), relayé par Tridge (consulté le 8 oct. 2026)",
          "url": "https://www.tridge.com/news/the-inflation-rate-in-myanmar-is-approaching-uxhbqkec"
        },
        {
          "short": "BPS Indonésie",
          "name": "BPS-Statistics Indonesia, communiqué du 1er oct. 2026 (consulté le 8 oct. 2026)",
          "url": "https://www.bps.go.id/en/pressrelease/2026/10/01/2623/the-year-on-year--y-on-y--headline-inflation-in-september-2026-was-recorded-at-3-28-percent-.html"
        },
        {
          "short": "PSA / Philstar",
          "name": "Philippine Statistics Authority, via Philstar, 6 oct. 2026 (consulté le 8 oct. 2026)",
          "url": "https://www.philstar.com/business/2026/10/06/2561305/philippine-inflation-jumps-72-september-2026"
        },
        {
          "short": "Reuters",
          "name": "Reuters via Investing.com, « Thai September headline CPI rises 2.82% » (consulté le 8 oct. 2026)",
          "url": "https://www.investing.com/news/economy-news/thai-september-headline-cpi-rises-282-on-year-belowforecast-4933363"
        },
        {
          "short": "INEI / Investing",
          "name": "INEI (Lima métropolitaine), via Investing.com (consulté le 8 oct. 2026)",
          "url": "https://www.investing.com/news/world-news/peru-inflation-accelerates-to-455-in-september-on-energy-costs-4927863"
        },
        {
          "short": "PBS / Business Recorder",
          "name": "Pakistan Bureau of Statistics, via Business Recorder (consulté le 8 oct. 2026)",
          "url": "https://www.brecorder.com/news/40442129/pakistan-inflation-clocks-in-at-103-in-september-2026"
        },
        {
          "short": "CBSL",
          "name": "Central Bank of Sri Lanka, inflation IPCC sept. 2026 (consulté le 8 oct. 2026)",
          "url": "https://www.cbsl.gov.lk/en/news/ccpi-inflation-september-2026"
        },
        {
          "short": "BBS / TBS News",
          "name": "Bangladesh Bureau of Statistics, via The Business Standard (consulté le 8 oct. 2026)",
          "url": "https://www.tbsnews.net/economy/september-inflation-rises-slightly-834-1565311"
        },
        {
          "short": "Qazinform",
          "name": "Bureau national des statistiques du Kazakhstan, via Qazinform (consulté le 8 oct. 2026)",
          "url": "https://qazinform.com/news/kazakhstans-inflation-eases-to-93-yoy-in-sept-2026-666326"
        },
        {
          "short": "KNBS",
          "name": "Kenya National Bureau of Statistics, CPI septembre 2026 (consulté le 8 oct. 2026)",
          "url": "https://www.knbs.or.ke/reports/consumer-price-indices-and-inflation-rates-september-2026/"
        },
        {
          "short": "UBOS / IndexBox",
          "name": "Uganda Bureau of Statistics, via IndexBox (consulté le 8 oct. 2026)",
          "url": "https://www.indexbox.io/blog/uganda-annual-inflation-rises-to-46-percent-in-september-2026/"
        },
        {
          "short": "INE Uruguay / Infobae",
          "name": "INE Uruguay, via Infobae, 5 oct. 2026 (consulté le 8 oct. 2026)",
          "url": "https://www.infobae.com/america/agencias/2026/10/05/la-inflacion-interanual-en-uruguay-sube-al-468-en-septiembre/"
        },
        {
          "short": "BCP",
          "name": "Banco Central del Paraguay (consulté le 8 oct. 2026)",
          "url": "https://x.com/BCP_PY/status/2106027228312248811"
        },
        {
          "short": "INE Bolivie / Infobae",
          "name": "INE Bolivie, via Infobae, 6 oct. 2026 (consulté le 8 oct. 2026)",
          "url": "https://www.infobae.com/america/agencias/2026/10/06/bolivia-acumula-una-inflacion-del-388-entre-enero-y-septiembre-de-2026/"
        },
        {
          "short": "KSH / BBJ",
          "name": "Office central de statistique hongrois, via Budapest Business Journal (consulté le 8 oct. 2026)",
          "url": "https://bbj.hu/economy/statistics/figures/hungarys-inflation-at-1-6-in-september-2026/"
        },
        {
          "short": "Estadística Andorra",
          "name": "Département de la statistique d'Andorre, indicateur avancé IPC août 2026 (consulté le 8 oct. 2026)",
          "url": "https://www.altaveu.com/uploads/s1/26/17/01/0/ipc-agost-2026.pdf"
        },
        {
          "short": "Stats SVG",
          "name": "Statistical Office of St Vincent and the Grenadines, CPI juin 2026 (consulté le 8 oct. 2026)",
          "url": "https://stats.gov.vc/wp-content/uploads/2026/07/Consumer-Price-Index-for-June-2026.pdf"
        }
      ],
      "values": {
        "100": {
          "v": 5.6,
          "d": "sept. 2026",
          "s": 1
        },
        "104": {
          "v": 24.6,
          "d": "avr. 2026",
          "s": 7
        },
        "108": {
          "v": 8.4,
          "d": "août 2026",
          "s": 1
        },
        "112": {
          "v": 4.5,
          "d": "août 2026",
          "s": 1
        },
        "116": {
          "v": 4.8,
          "d": "août 2026",
          "s": 1
        },
        "120": {
          "v": 3.4,
          "d": "juil. 2026",
          "s": 1
        },
        "124": {
          "v": 3,
          "d": "août 2026",
          "s": 1
        },
        "132": {
          "v": 0.8,
          "d": "août 2026",
          "s": 1
        },
        "136": {
          "v": 2.8,
          "d": "mars 2026",
          "s": 1
        },
        "140": {
          "v": 5.1,
          "d": "avr. 2026",
          "s": 1
        },
        "144": {
          "v": 8,
          "d": "sept. 2026",
          "s": 13
        },
        "148": {
          "v": -2,
          "d": "juil. 2026",
          "s": 1
        },
        "152": {
          "v": 4.1,
          "d": "août 2026",
          "s": 1
        },
        "156": {
          "v": 0.8,
          "d": "août 2026",
          "s": 1
        },
        "158": {
          "v": 2,
          "d": "août 2026",
          "s": 1
        },
        "170": {
          "v": 6.2,
          "d": "août 2026",
          "s": 1
        },
        "174": {
          "v": 1.2,
          "d": "juil. 2026",
          "s": 1
        },
        "178": {
          "v": 4.4,
          "d": "août 2026",
          "s": 1
        },
        "180": {
          "v": 3.3,
          "d": "août 2026",
          "s": 3
        },
        "188": {
          "v": -0.2,
          "d": "août 2026",
          "s": 1
        },
        "191": {
          "v": 4.7,
          "d": "sept. 2026",
          "s": 1
        },
        "192": {
          "v": 20.7,
          "d": "juil. 2026",
          "s": 1
        },
        "196": {
          "v": 5.2,
          "d": "sept. 2026",
          "s": 2
        },
        "203": {
          "v": 1.9,
          "d": "août 2026",
          "s": 1
        },
        "204": {
          "v": 0.1,
          "d": "août 2026",
          "s": 1
        },
        "208": {
          "v": 2,
          "d": "août 2026",
          "s": 1
        },
        "212": {
          "v": 0.9,
          "d": "juin 2026",
          "s": 1
        },
        "214": {
          "v": 5.1,
          "d": "août 2026",
          "s": 1
        },
        "218": {
          "v": 1.1,
          "d": "août 2026",
          "s": 1
        },
        "222": {
          "v": 3.2,
          "d": "août 2026",
          "s": 1
        },
        "231": {
          "v": 15.1,
          "d": "août 2026",
          "s": 1
        },
        "233": {
          "v": 3,
          "d": "sept. 2026",
          "s": 2
        },
        "234": {
          "v": 2.5,
          "d": "sept. 2026",
          "s": 1
        },
        "242": {
          "v": 6.8,
          "d": "sept. 2026",
          "s": 1
        },
        "246": {
          "v": 2.6,
          "d": "sept. 2026",
          "s": 2
        },
        "250": {
          "v": 3,
          "d": "sept. 2026",
          "s": 1
        },
        "262": {
          "v": 1.9,
          "d": "août 2026",
          "s": 1
        },
        "266": {
          "v": 0.2,
          "d": "juil. 2026",
          "s": 1
        },
        "268": {
          "v": 5.6,
          "d": "août 2026",
          "s": 1
        },
        "270": {
          "v": 7.1,
          "d": "juil. 2026",
          "s": 1
        },
        "275": {
          "v": -34.2,
          "d": "août 2026",
          "s": 1
        },
        "276": {
          "v": 3.3,
          "d": "sept. 2026",
          "s": 1
        },
        "288": {
          "v": 5,
          "d": "août 2026",
          "s": 1
        },
        "300": {
          "v": 5.1,
          "d": "sept. 2026",
          "s": 2
        },
        "308": {
          "v": 2,
          "d": "juin 2026",
          "s": 1
        },
        "320": {
          "v": 3.4,
          "d": "août 2026",
          "s": 1
        },
        "324": {
          "v": 6.4,
          "d": "juil. 2026",
          "s": 1
        },
        "328": {
          "v": 3.6,
          "d": "août 2026",
          "s": 1
        },
        "332": {
          "v": 17,
          "d": "août 2026",
          "s": 1
        },
        "340": {
          "v": 6.2,
          "d": "août 2026",
          "s": 1
        },
        "344": {
          "v": 1.7,
          "d": "août 2026",
          "s": 1
        },
        "348": {
          "v": 1.6,
          "d": "sept. 2026",
          "s": 21
        },
        "352": {
          "v": 5.9,
          "d": "sept. 2026",
          "s": 1
        },
        "356": {
          "v": 4.8,
          "d": "août 2026",
          "s": 1
        },
        "360": {
          "v": 3.3,
          "d": "sept. 2026",
          "s": 8
        },
        "364": {
          "v": 87.9,
          "d": "juil. 2026",
          "s": 1
        },
        "368": {
          "v": 3.3,
          "d": "juil. 2026",
          "s": 1
        },
        "372": {
          "v": 3.8,
          "d": "sept. 2026",
          "s": 2
        },
        "376": {
          "v": 1.5,
          "d": "août 2026",
          "s": 1
        },
        "380": {
          "v": 4.2,
          "d": "sept. 2026",
          "s": 1
        },
        "384": {
          "v": 1.2,
          "d": "août 2026",
          "s": 1
        },
        "388": {
          "v": 7.9,
          "d": "août 2026",
          "s": 1
        },
        "392": {
          "v": 1.9,
          "d": "août 2026",
          "s": 1
        },
        "398": {
          "v": 9.3,
          "d": "sept. 2026",
          "s": 15
        },
        "400": {
          "v": 2.7,
          "d": "août 2026",
          "s": 1
        },
        "404": {
          "v": 6.8,
          "d": "sept. 2026",
          "s": 16
        },
        "410": {
          "v": 2.9,
          "d": "sept. 2026",
          "s": 1
        },
        "414": {
          "v": 2.2,
          "d": "juin 2026",
          "s": 1
        },
        "417": {
          "v": 12,
          "d": "août 2026",
          "s": 1
        },
        "418": {
          "v": 7.7,
          "d": "août 2026",
          "s": 1
        },
        "422": {
          "v": 16.7,
          "d": "août 2026",
          "s": 1
        },
        "426": {
          "v": 2.9,
          "d": "juil. 2026",
          "s": 1
        },
        "428": {
          "v": 2.9,
          "d": "sept. 2026",
          "s": 2
        },
        "430": {
          "v": 5,
          "d": "juin 2026",
          "s": 1
        },
        "434": {
          "v": 14.3,
          "d": "août 2026",
          "s": 1
        },
        "438": {
          "v": 0.8,
          "d": "août 2026",
          "s": 1
        },
        "440": {
          "v": 6.1,
          "d": "sept. 2026",
          "s": 2
        },
        "442": {
          "v": 5.2,
          "d": "sept. 2026",
          "s": 2
        },
        "446": {
          "v": 1.1,
          "d": "juil. 2026",
          "s": 1
        },
        "450": {
          "v": 8.6,
          "d": "mai 2026",
          "s": 1
        },
        "454": {
          "v": 20,
          "d": "août 2026",
          "s": 1
        },
        "458": {
          "v": 1.9,
          "d": "août 2026",
          "s": 1
        },
        "462": {
          "v": 2.3,
          "d": "juil. 2026",
          "s": 1
        },
        "466": {
          "v": 3.3,
          "d": "août 2026",
          "s": 1
        },
        "470": {
          "v": 2.4,
          "d": "sept. 2026",
          "s": 2
        },
        "478": {
          "v": 8.9,
          "d": "août 2026",
          "s": 1
        },
        "480": {
          "v": 4.9,
          "d": "août 2026",
          "s": 1
        },
        "484": {
          "v": 3.3,
          "d": "août 2026",
          "s": 1
        },
        "496": {
          "v": 12.5,
          "d": "août 2026",
          "s": 1
        },
        "498": {
          "v": 7,
          "d": "août 2026",
          "s": 1
        },
        "499": {
          "v": 4.5,
          "d": "août 2026",
          "s": 1
        },
        "504": {
          "v": -0.3,
          "d": "août 2026",
          "s": 1
        },
        "508": {
          "v": 6.5,
          "d": "août 2026",
          "s": 1
        },
        "512": {
          "v": 3.4,
          "d": "août 2026",
          "s": 1
        },
        "516": {
          "v": 5,
          "d": "août 2026",
          "s": 1
        },
        "524": {
          "v": 6,
          "d": "août 2026",
          "s": 1
        },
        "528": {
          "v": 3.4,
          "d": "sept. 2026",
          "s": 1
        },
        "533": {
          "v": 2.7,
          "d": "août 2026",
          "s": 1
        },
        "540": {
          "v": 0.5,
          "d": "août 2026",
          "s": 1
        },
        "548": {
          "v": 1.2,
          "d": "juin 2026",
          "s": 1
        },
        "554": {
          "v": 4.1,
          "d": "juin 2026",
          "s": 1
        },
        "558": {
          "v": 4,
          "d": "juil. 2026",
          "s": 1
        },
        "562": {
          "v": -0.9,
          "d": "août 2026",
          "s": 1
        },
        "566": {
          "v": 15.4,
          "d": "août 2026",
          "s": 1
        },
        "578": {
          "v": 3.3,
          "d": "août 2026",
          "s": 1
        },
        "586": {
          "v": 10.3,
          "d": "sept. 2026",
          "s": 12
        },
        "591": {
          "v": 2.2,
          "d": "août 2026",
          "s": 1
        },
        "598": {
          "v": 2.2,
          "d": "juin 2026",
          "s": 1
        },
        "600": {
          "v": 1.7,
          "d": "sept. 2026",
          "s": 19
        },
        "604": {
          "v": 4.6,
          "d": "sept. 2026",
          "s": 11
        },
        "608": {
          "v": 7.2,
          "d": "sept. 2026",
          "s": 9
        },
        "616": {
          "v": 4,
          "d": "sept. 2026",
          "s": 1
        },
        "620": {
          "v": 3.6,
          "d": "sept. 2026",
          "s": 1
        },
        "624": {
          "v": -1,
          "d": "juin 2026",
          "s": 1
        },
        "626": {
          "v": 0.5,
          "d": "juil. 2026",
          "s": 1
        },
        "630": {
          "v": 3.8,
          "d": "août 2026",
          "s": 1
        },
        "634": {
          "v": 2.2,
          "d": "juin 2026",
          "s": 1
        },
        "642": {
          "v": 6.2,
          "d": "août 2026",
          "s": 1
        },
        "643": {
          "v": 6.3,
          "d": "août 2026",
          "s": 1
        },
        "646": {
          "v": 15.9,
          "d": "août 2026",
          "s": 1
        },
        "670": {
          "v": 2,
          "d": "juin 2026",
          "s": 23
        },
        "678": {
          "v": 9.5,
          "d": "juil. 2026",
          "s": 1
        },
        "682": {
          "v": 1.8,
          "d": "août 2026",
          "s": 1
        },
        "686": {
          "v": 1.2,
          "d": "août 2026",
          "s": 1
        },
        "688": {
          "v": 2.2,
          "d": "août 2026",
          "s": 1
        },
        "690": {
          "v": 0.9,
          "d": "août 2026",
          "s": 1
        },
        "694": {
          "v": 15.7,
          "d": "août 2026",
          "s": 1
        },
        "702": {
          "v": 2.3,
          "d": "août 2026",
          "s": 1
        },
        "703": {
          "v": 3.1,
          "d": "sept. 2026",
          "s": 2
        },
        "704": {
          "v": 4.9,
          "d": "août 2026",
          "s": 1
        },
        "705": {
          "v": 3.3,
          "d": "sept. 2026",
          "s": 1
        },
        "706": {
          "v": 6.7,
          "d": "juil. 2026",
          "s": 1
        },
        "710": {
          "v": 4.4,
          "d": "août 2026",
          "s": 1
        },
        "716": {
          "v": 3.7,
          "d": "sept. 2026",
          "s": 1
        },
        "724": {
          "v": 4.9,
          "d": "sept. 2026",
          "s": 1
        },
        "728": {
          "v": 41.6,
          "d": "juil. 2026",
          "s": 1
        },
        "729": {
          "v": 26.1,
          "d": "août 2026",
          "s": 4
        },
        "740": {
          "v": 8,
          "d": "août 2026",
          "s": 1
        },
        "748": {
          "v": 2.5,
          "d": "juil. 2026",
          "s": 1
        },
        "752": {
          "v": 0.3,
          "d": "août 2026",
          "s": 1
        },
        "756": {
          "v": 1,
          "d": "sept. 2026",
          "s": 1
        },
        "760": {
          "v": 24.8,
          "d": "juil. 2026",
          "s": 1
        },
        "762": {
          "v": 4.1,
          "d": "août 2026",
          "s": 1
        },
        "764": {
          "v": 2.8,
          "d": "sept. 2026",
          "s": 10
        },
        "768": {
          "v": 0.7,
          "d": "août 2026",
          "s": 1
        },
        "776": {
          "v": 9.3,
          "d": "juil. 2026",
          "s": 6
        },
        "780": {
          "v": 0.3,
          "d": "juin 2026",
          "s": 1
        },
        "788": {
          "v": 5.4,
          "d": "août 2026",
          "s": 1
        },
        "792": {
          "v": 29.7,
          "d": "sept. 2026",
          "s": 1
        },
        "800": {
          "v": 4.6,
          "d": "sept. 2026",
          "s": 17
        },
        "804": {
          "v": 8.1,
          "d": "août 2026",
          "s": 1
        },
        "807": {
          "v": 2.6,
          "d": "août 2026",
          "s": 1
        },
        "818": {
          "v": 14.5,
          "d": "août 2026",
          "s": 1
        },
        "826": {
          "v": 3.1,
          "d": "août 2026",
          "s": 1
        },
        "834": {
          "v": 4.3,
          "d": "août 2026",
          "s": 1
        },
        "840": {
          "v": 3.4,
          "d": "août 2026",
          "s": 1
        },
        "854": {
          "v": 0.1,
          "d": "mai 2026",
          "s": 1
        },
        "858": {
          "v": 4.7,
          "d": "sept. 2026",
          "s": 18
        },
        "860": {
          "v": 6.2,
          "d": "août 2026",
          "s": 1
        },
        "862": {
          "v": 534,
          "d": "août 2026",
          "s": 1
        },
        "882": {
          "v": 5.7,
          "d": "juin 2026",
          "s": 5
        },
        "894": {
          "v": 6.1,
          "d": "sept. 2026",
          "s": 1
        },
        "004": {
          "v": 7.5,
          "d": "juil. 2026",
          "s": 1
        },
        "008": {
          "v": 3.2,
          "d": "août 2026",
          "s": 1
        },
        "012": {
          "v": 6.7,
          "d": "juil. 2026",
          "s": 1
        },
        "020": {
          "v": 4.8,
          "d": "août 2026",
          "s": 22
        },
        "024": {
          "v": 8.8,
          "d": "août 2026",
          "s": 1
        },
        "028": {
          "v": 5.5,
          "d": "août 2026",
          "s": 1
        },
        "031": {
          "v": 5.7,
          "d": "août 2026",
          "s": 1
        },
        "032": {
          "v": 33.5,
          "d": "août 2026",
          "s": 1
        },
        "036": {
          "v": 4,
          "d": "août 2026",
          "s": 1
        },
        "040": {
          "v": 3.6,
          "d": "sept. 2026",
          "s": 1
        },
        "044": {
          "v": 4.3,
          "d": "juin 2026",
          "s": 1
        },
        "048": {
          "v": 3,
          "d": "juil. 2026",
          "s": 1
        },
        "050": {
          "v": 8.3,
          "d": "sept. 2026",
          "s": 14
        },
        "051": {
          "v": 4.4,
          "d": "août 2026",
          "s": 1
        },
        "052": {
          "v": 2,
          "d": "mai 2026",
          "s": 1
        },
        "056": {
          "v": 4.7,
          "d": "sept. 2026",
          "s": 1
        },
        "060": {
          "v": 2.4,
          "d": "mars 2026",
          "s": 1
        },
        "064": {
          "v": 6.8,
          "d": "juil. 2026",
          "s": 1
        },
        "068": {
          "v": 5.7,
          "d": "sept. 2026",
          "s": 20
        },
        "070": {
          "v": 4.9,
          "d": "août 2026",
          "s": 1
        },
        "072": {
          "v": 9.3,
          "d": "août 2026",
          "s": 1
        },
        "076": {
          "v": 4.2,
          "d": "août 2026",
          "s": 1
        },
        "084": {
          "v": 4.1,
          "d": "juil. 2026",
          "s": 1
        },
        "090": {
          "v": 4.3,
          "d": "juil. 2026",
          "s": 1
        },
        "096": {
          "v": 0,
          "d": "juil. 2026",
          "s": 1
        }
      }
    },
    {
      "id": "chomage",
      "label": "Chômage",
      "title": "Le chômage dans le monde",
      "explain": "Part des personnes qui cherchent un emploi sans en trouver, parmi celles qui travaillent ou veulent travailler.",
      "unit": "%",
      "bins": [
        3,
        5,
        8,
        12
      ],
      "colors": [
        "#2e2352",
        "#47367f",
        "#644dad",
        "#8f74dc",
        "#c3aeff"
      ],
      "note": "Dernier chiffre publié pour chaque pays (2026, ou 2025 à défaut). Attention : les méthodes diffèrent. Pour une partie de l'Afrique et de l'Asie, ce sont des estimations modélisées de l'Organisation internationale du travail (OIT), souvent très basses car le travail informel n'est pas compté comme du chômage ; certains pays publient le chômage « inscrit » (Autriche, Suisse, Danemark). Les comparaisons sont donc approximatives.",
      "sources": [
        {
          "short": "Trading Economics",
          "name": "Unemployment Rate – listes par pays (Europe, Asie, Afrique, Amérique, monde) et pages pays (consultées le 8 oct. 2026)",
          "url": "https://tradingeconomics.com/country-list/unemployment-rate"
        },
        {
          "short": "Eurostat",
          "name": "Euro area unemployment at 6.4% – Euro indicators, août 2026 (via Destatis « Europe August 2026 ») (consulté le 8 oct. 2026)",
          "url": "https://ec.europa.eu/eurostat/web/products-euro-indicators/w/3-01102026-ap"
        },
        {
          "short": "Insee",
          "name": "Informations Rapides n°192 – Chômage au sens du BIT, T2 2026 (consulté le 8 oct. 2026)",
          "url": "https://www.insee.fr/fr/statistiques/9032359"
        },
        {
          "short": "ONS",
          "name": "UK labour market, mai-juil. 2026 (via House of Commons Library / FXStreet) (consulté le 8 oct. 2026)",
          "url": "https://commonslibrary.parliament.uk/research-briefings/cbp-9366/"
        },
        {
          "short": "ABS",
          "name": "Labour Force, Australia, August 2026 (consulté le 8 oct. 2026)",
          "url": "https://www.abs.gov.au/statistics/labour/employment-and-unemployment/labour-force-australia/latest-release"
        },
        {
          "short": "Stats NZ",
          "name": "Unemployment rate at 5.6 percent in the June 2026 quarter (consulté le 8 oct. 2026)",
          "url": "https://www.stats.govt.nz/news/unemployment-rate-at-5-6-percent-in-the-june-2026-quarter/"
        },
        {
          "short": "IBGE",
          "name": "PNAD Contínua – trimestre juin-août 2026 (via presse) (consulté le 8 oct. 2026)",
          "url": "https://agenciadenoticias.ibge.gov.br/"
        },
        {
          "short": "DANE",
          "name": "Desempleo en Colombia agosto 2026 (via El Universal) (consulté le 8 oct. 2026)",
          "url": "https://www.eluniversal.com.co/colombia/2026/09/30/desempleo-en-colombia-subio-al-94-en-agosto-de-2026-segun-el-dane/"
        },
        {
          "short": "INE Chile",
          "name": "La tasa de desocupación nacional fue 9,6% en el trimestre junio-agosto de 2026 (consulté le 8 oct. 2026)",
          "url": "https://www.ine.gob.cl/sala-de-prensa/prensa/general/noticia/2026/09/30/la-tasa-de-desocupaci%C3%B3n-nacional-fue-9-6-en-el-trimestre-junio---agosto-de-2026"
        },
        {
          "short": "INEI",
          "name": "Desempleo en Lima Metropolitana, juin-août 2026 (via Infobae/EFE) (consulté le 8 oct. 2026)",
          "url": "https://www.infobae.com/america/agencias/2026/09/15/el-desempleo-en-lima-fue-del-48-en-agosto-una-decima-mas-que-en-julio/"
        },
        {
          "short": "INEGI",
          "name": "Unemployment in Mexico Edges Up to 3% in August 2026 (Rio Times) (consulté le 8 oct. 2026)",
          "url": "https://www.riotimesonline.com/mexico-unemployment-rate-august-2026/"
        },
        {
          "short": "Istat",
          "name": "Taux de chômage italien août 2026 (via Eunews) (consulté le 8 oct. 2026)",
          "url": "https://www.eunews.it/en/2026/10/01/almost-350000-more-unemployed-people-in-the-eu-year-on-year/"
        },
        {
          "short": "Statistics Bureau of Japan",
          "name": "Japan's jobless rate ticks up to 2.5 pct in August (Xinhua) (consulté le 8 oct. 2026)",
          "url": "https://english.news.cn/asiapacific/20261002/dd66b1f28afb494995b6efcb416e422e/c.html"
        },
        {
          "short": "MoSPI (PLFS)",
          "name": "Monthly Bulletin of Periodic Labour Force Survey, août 2026 (consulté le 8 oct. 2026)",
          "url": "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2240676"
        },
        {
          "short": "NESDC",
          "name": "Thailand unemployment Q2 2026 (via The Thaiger) (consulté le 8 oct. 2026)",
          "url": "https://thethaiger.com/hot-news/economy/thailand-unemployment-rises-to-400000-as-real-wages-fall"
        },
        {
          "short": "DoS Jordanie",
          "name": "Statistics: unemployment rate falls to 16.1% in Q2 2026 (Petra) (consulté le 8 oct. 2026)",
          "url": "https://petra.gov.jo/index.php/en/news/statistics-unemployment-rate-falls-to-161-in-q2-2026"
        },
        {
          "short": "Centre statistique d'Iran",
          "name": "Taux de chômage printemps 1405 (2026) (via presse secondaire) (consulté le 8 oct. 2026)",
          "url": "https://www.iranintl.com/en/202607145906"
        },
        {
          "short": "INE Paraguay",
          "name": "EPHC T2 2026 (via Agencia IP / ABC Color) (consulté le 8 oct. 2026)",
          "url": "https://www.ip.gov.py/ip/2026/07/31/mas-de-114-000-personas-se-incorporaron-al-mercado-laboral-en-el-segundo-trimestre-de-2026/"
        },
        {
          "short": "BNS Moldavie",
          "name": "Labour force: Employment and unemployment in the II quarter of 2026 (consulté le 8 oct. 2026)",
          "url": "https://statistica.gov.md/en/labour-force-employment-and-unemployment-in-the-ii-quarter-of-9430_62612.html"
        },
        {
          "short": "TheGlobalEconomy",
          "name": "Unemployment rate in Africa / by country, 2025 (Banque mondiale, estimations modélisées OIT) (consulté le 8 oct. 2026)",
          "url": "https://www.theglobaleconomy.com/rankings/unemployment_rate/Africa/"
        },
        {
          "short": "Statista",
          "name": "Unemployment rate by country 2025/2026 (Fiji, EU août 2026) (consulté le 8 oct. 2026)",
          "url": "https://www.statista.com/statistics/1115276/unemployment-in-europe-by-country/"
        },
        {
          "short": "Macrotrends",
          "name": "Tonga Unemployment Rate 1991-2025 (Banque mondiale/OIT) (consulté le 8 oct. 2026)",
          "url": "https://www.macrotrends.net/global-metrics/countries/ton/tonga/unemployment-rate"
        },
        {
          "short": "Kun.uz",
          "name": "Uzbekistan labour market review (Banque centrale d'Ouzbékistan) (consulté le 8 oct. 2026)",
          "url": "https://kun.uz/en/news/2026/07/09/uzbekistan-sees-strong-labor-market-recovery-but-productivity-lags-behind-wages-central-bank-6e034c"
        },
        {
          "short": "Destatis",
          "name": "Europe August 2026: EU unemployment rate at 6.1% (données Eurostat) (consulté le 8 oct. 2026)",
          "url": "https://www.destatis.de/Europa/EN/Topic/Population-Labour-Social-Issues/Labour-market/EULabourMarketCrisis.html"
        }
      ],
      "values": {
        "100": {
          "v": 5.4,
          "d": "juil. 2026",
          "s": 1
        },
        "104": {
          "v": 3,
          "d": "2025",
          "s": 1
        },
        "108": {
          "v": 0.9,
          "d": "2025",
          "s": 1
        },
        "112": {
          "v": 3.4,
          "d": "2025",
          "s": 1
        },
        "116": {
          "v": 0.3,
          "d": "2025",
          "s": 1
        },
        "120": {
          "v": 3.6,
          "d": "2025",
          "s": 1
        },
        "124": {
          "v": 6.4,
          "d": "août 2026",
          "s": 1
        },
        "132": {
          "v": 11.9,
          "d": "2025",
          "s": 1
        },
        "140": {
          "v": 6.3,
          "d": "2025",
          "s": 1
        },
        "144": {
          "v": 3.7,
          "d": "T1 2026",
          "s": 1
        },
        "148": {
          "v": 1.1,
          "d": "2025",
          "s": 1
        },
        "152": {
          "v": 9.6,
          "d": "juin-août 2026",
          "s": 9
        },
        "156": {
          "v": 5.3,
          "d": "août 2026",
          "s": 1
        },
        "158": {
          "v": 3.3,
          "d": "août 2026",
          "s": 1
        },
        "170": {
          "v": 9.4,
          "d": "août 2026",
          "s": 8
        },
        "174": {
          "v": 3.8,
          "d": "2025",
          "s": 20
        },
        "178": {
          "v": 19.8,
          "d": "2024",
          "s": 1
        },
        "180": {
          "v": 4.4,
          "d": "2025",
          "s": 20
        },
        "188": {
          "v": 7.1,
          "d": "T1 2026",
          "s": 1
        },
        "191": {
          "v": 3.4,
          "d": "août 2026",
          "s": 1
        },
        "192": {
          "v": 1.7,
          "d": "2025",
          "s": 1
        },
        "196": {
          "v": 4.1,
          "d": "août 2026",
          "s": 1
        },
        "203": {
          "v": 3.2,
          "d": "août 2026",
          "s": 21
        },
        "204": {
          "v": 1.6,
          "d": "2025",
          "s": 1
        },
        "208": {
          "v": 2.7,
          "d": "août 2026",
          "s": 1
        },
        "214": {
          "v": 5,
          "d": "T1 2026",
          "s": 1
        },
        "218": {
          "v": 3.1,
          "d": "mai 2026",
          "s": 1
        },
        "222": {
          "v": 4.7,
          "d": "2025",
          "s": 1
        },
        "226": {
          "v": 8.3,
          "d": "2025",
          "s": 1
        },
        "231": {
          "v": 3.3,
          "d": "2025",
          "s": 1
        },
        "232": {
          "v": 6,
          "d": "2025",
          "s": 20
        },
        "233": {
          "v": 6.6,
          "d": "T2 2026",
          "s": 1
        },
        "242": {
          "v": 5.4,
          "d": "2025",
          "s": 21
        },
        "246": {
          "v": 9.9,
          "d": "août 2026",
          "s": 24
        },
        "250": {
          "v": 8.3,
          "d": "T2 2026",
          "s": 3
        },
        "262": {
          "v": 26,
          "d": "2025",
          "s": 1
        },
        "266": {
          "v": 20.2,
          "d": "2025",
          "s": 1
        },
        "268": {
          "v": 13.8,
          "d": "T2 2026",
          "s": 1
        },
        "270": {
          "v": 6.5,
          "d": "2025",
          "s": 20
        },
        "276": {
          "v": 4,
          "d": "août 2026",
          "s": 24
        },
        "288": {
          "v": 3,
          "d": "2025",
          "s": 1
        },
        "300": {
          "v": 7.4,
          "d": "août 2026",
          "s": 1
        },
        "320": {
          "v": 2.2,
          "d": "T1 2026",
          "s": 1
        },
        "324": {
          "v": 5.2,
          "d": "2025",
          "s": 1
        },
        "328": {
          "v": 11.9,
          "d": "2025",
          "s": 1
        },
        "332": {
          "v": 14.9,
          "d": "2025",
          "s": 1
        },
        "340": {
          "v": 4.9,
          "d": "2025",
          "s": 1
        },
        "344": {
          "v": 3.7,
          "d": "T2 2026",
          "s": 1
        },
        "348": {
          "v": 4.8,
          "d": "août 2026",
          "s": 1
        },
        "352": {
          "v": 5.8,
          "d": "août 2026",
          "s": 2
        },
        "356": {
          "v": 5,
          "d": "août 2026",
          "s": 14
        },
        "360": {
          "v": 4.7,
          "d": "T1 2026",
          "s": 1
        },
        "364": {
          "v": 9.1,
          "d": "T2 2026",
          "s": 17
        },
        "368": {
          "v": 15.5,
          "d": "2025",
          "s": 1
        },
        "372": {
          "v": 5,
          "d": "sept. 2026",
          "s": 1
        },
        "376": {
          "v": 2.9,
          "d": "T2 2026",
          "s": 1
        },
        "380": {
          "v": 6.2,
          "d": "août 2026",
          "s": 12
        },
        "384": {
          "v": 2.3,
          "d": "2025",
          "s": 1
        },
        "388": {
          "v": 3.7,
          "d": "T2 2026",
          "s": 1
        },
        "392": {
          "v": 2.5,
          "d": "août 2026",
          "s": 13
        },
        "398": {
          "v": 4.5,
          "d": "T2 2026",
          "s": 1
        },
        "400": {
          "v": 16.1,
          "d": "T2 2026",
          "s": 16
        },
        "404": {
          "v": 5.4,
          "d": "2025",
          "s": 1
        },
        "410": {
          "v": 2.7,
          "d": "août 2026",
          "s": 1
        },
        "414": {
          "v": 2.2,
          "d": "2025",
          "s": 1
        },
        "417": {
          "v": 1.3,
          "d": "juil. 2026",
          "s": 1
        },
        "418": {
          "v": 1.2,
          "d": "2025",
          "s": 1
        },
        "426": {
          "v": 16.3,
          "d": "2025",
          "s": 1
        },
        "428": {
          "v": 7,
          "d": "T2 2026",
          "s": 1
        },
        "430": {
          "v": 2.9,
          "d": "2025",
          "s": 1
        },
        "434": {
          "v": 18.8,
          "d": "2025",
          "s": 1
        },
        "440": {
          "v": 8,
          "d": "août 2026",
          "s": 1
        },
        "442": {
          "v": 6.5,
          "d": "août 2026",
          "s": 1
        },
        "446": {
          "v": 1.9,
          "d": "T2 2026",
          "s": 1
        },
        "450": {
          "v": 3,
          "d": "2025",
          "s": 1
        },
        "454": {
          "v": 5.1,
          "d": "2025",
          "s": 1
        },
        "458": {
          "v": 3,
          "d": "juil. 2026",
          "s": 1
        },
        "462": {
          "v": 4.5,
          "d": "2025",
          "s": 1
        },
        "466": {
          "v": 2.8,
          "d": "2025",
          "s": 1
        },
        "470": {
          "v": 3.4,
          "d": "août 2026",
          "s": 24
        },
        "478": {
          "v": 10.3,
          "d": "2025",
          "s": 20
        },
        "480": {
          "v": 5.7,
          "d": "T1 2026",
          "s": 1
        },
        "484": {
          "v": 3,
          "d": "août 2026",
          "s": 11
        },
        "496": {
          "v": 5.5,
          "d": "T2 2026",
          "s": 1
        },
        "498": {
          "v": 7.3,
          "d": "T2 2026",
          "s": 19
        },
        "499": {
          "v": 7.6,
          "d": "T2 2026",
          "s": 1
        },
        "504": {
          "v": 9.5,
          "d": "T2 2026",
          "s": 1
        },
        "508": {
          "v": 6.6,
          "d": "2025",
          "s": 20
        },
        "512": {
          "v": 3.3,
          "d": "2025",
          "s": 1
        },
        "516": {
          "v": 19.3,
          "d": "2025",
          "s": 1
        },
        "528": {
          "v": 4,
          "d": "août 2026",
          "s": 1
        },
        "548": {
          "v": 5.1,
          "d": "2025",
          "s": 20
        },
        "554": {
          "v": 5.6,
          "d": "T2 2026",
          "s": 6
        },
        "558": {
          "v": 3.1,
          "d": "juil. 2026",
          "s": 1
        },
        "562": {
          "v": 0.4,
          "d": "2025",
          "s": 1
        },
        "566": {
          "v": 3.1,
          "d": "2025",
          "s": 20
        },
        "578": {
          "v": 4.5,
          "d": "août 2026",
          "s": 1
        },
        "586": {
          "v": 5.4,
          "d": "2025",
          "s": 1
        },
        "591": {
          "v": 10.4,
          "d": "2025",
          "s": 1
        },
        "598": {
          "v": 2.6,
          "d": "2025",
          "s": 1
        },
        "600": {
          "v": 4.1,
          "d": "T2 2026",
          "s": 18
        },
        "604": {
          "v": 4.8,
          "d": "juin-août 2026",
          "s": 10
        },
        "608": {
          "v": 4.9,
          "d": "T2 2026",
          "s": 1
        },
        "616": {
          "v": 3.4,
          "d": "août 2026",
          "s": 24
        },
        "620": {
          "v": 5.7,
          "d": "août 2026",
          "s": 1
        },
        "624": {
          "v": 2.7,
          "d": "2025",
          "s": 1
        },
        "630": {
          "v": 6.8,
          "d": "juil. 2026",
          "s": 1
        },
        "634": {
          "v": 0.1,
          "d": "2025",
          "s": 1
        },
        "642": {
          "v": 6.4,
          "d": "août 2026",
          "s": 1
        },
        "643": {
          "v": 2.2,
          "d": "août 2026",
          "s": 1
        },
        "646": {
          "v": 13.4,
          "d": "mai 2026",
          "s": 1
        },
        "678": {
          "v": 9.1,
          "d": "2025",
          "s": 20
        },
        "682": {
          "v": 3,
          "d": "T2 2026",
          "s": 1
        },
        "686": {
          "v": 19.1,
          "d": "T2 2026",
          "s": 1
        },
        "688": {
          "v": 7.2,
          "d": "T2 2026",
          "s": 1
        },
        "690": {
          "v": 3.3,
          "d": "T1 2026",
          "s": 1
        },
        "694": {
          "v": 3.2,
          "d": "2025",
          "s": 1
        },
        "702": {
          "v": 1.9,
          "d": "T2 2026",
          "s": 1
        },
        "703": {
          "v": 5.2,
          "d": "août 2026",
          "s": 1
        },
        "704": {
          "v": 2.2,
          "d": "T2 2026",
          "s": 1
        },
        "705": {
          "v": 3.4,
          "d": "août 2026",
          "s": 24
        },
        "706": {
          "v": 19,
          "d": "2025",
          "s": 20
        },
        "710": {
          "v": 33.6,
          "d": "T2 2026",
          "s": 1
        },
        "716": {
          "v": 9.3,
          "d": "2025",
          "s": 1
        },
        "724": {
          "v": 10,
          "d": "août 2026",
          "s": 24
        },
        "740": {
          "v": 7.8,
          "d": "2025",
          "s": 1
        },
        "748": {
          "v": 34.2,
          "d": "2025",
          "s": 20
        },
        "752": {
          "v": 8.5,
          "d": "août 2026",
          "s": 1
        },
        "756": {
          "v": 3,
          "d": "sept. 2026",
          "s": 1
        },
        "760": {
          "v": 13.6,
          "d": "2025",
          "s": 1
        },
        "764": {
          "v": 1,
          "d": "T2 2026",
          "s": 15
        },
        "768": {
          "v": 2,
          "d": "2025",
          "s": 1
        },
        "776": {
          "v": 2,
          "d": "2025",
          "s": 22
        },
        "780": {
          "v": 5.4,
          "d": "T1 2026",
          "s": 1
        },
        "784": {
          "v": 2.2,
          "d": "2025",
          "s": 1
        },
        "788": {
          "v": 14.9,
          "d": "T2 2026",
          "s": 1
        },
        "792": {
          "v": 7.8,
          "d": "août 2026",
          "s": 1
        },
        "795": {
          "v": 4.3,
          "d": "2025",
          "s": 1
        },
        "800": {
          "v": 2.7,
          "d": "2025",
          "s": 1
        },
        "807": {
          "v": 11.3,
          "d": "T2 2026",
          "s": 1
        },
        "818": {
          "v": 5.8,
          "d": "T2 2026",
          "s": 1
        },
        "826": {
          "v": 4.9,
          "d": "mai-juil. 2026",
          "s": 4
        },
        "840": {
          "v": 4.2,
          "d": "sept. 2026",
          "s": 1
        },
        "854": {
          "v": 3.5,
          "d": "2025",
          "s": 1
        },
        "858": {
          "v": 7,
          "d": "juil. 2026",
          "s": 1
        },
        "860": {
          "v": 4.8,
          "d": "T4 2025",
          "s": 23
        },
        "862": {
          "v": 5.3,
          "d": "2025",
          "s": 1
        },
        "887": {
          "v": 17.3,
          "d": "2025",
          "s": 1
        },
        "894": {
          "v": 12.9,
          "d": "2024",
          "s": 1
        },
        "056": {
          "v": 6,
          "d": "juil. 2026",
          "s": 1
        },
        "040": {
          "v": 7.1,
          "d": "sept. 2026",
          "s": 1
        },
        "070": {
          "v": 12.2,
          "d": "T2 2026",
          "s": 1
        },
        "008": {
          "v": 8.3,
          "d": "T2 2026",
          "s": 1
        },
        "051": {
          "v": 13.7,
          "d": "T1 2026",
          "s": 1
        },
        "031": {
          "v": 5.5,
          "d": "2025",
          "s": 1
        },
        "076": {
          "v": 5.3,
          "d": "juin-août 2026",
          "s": 7
        },
        "032": {
          "v": 7.9,
          "d": "T2 2026",
          "s": 1
        },
        "068": {
          "v": 2.4,
          "d": "juin 2026",
          "s": 1
        },
        "052": {
          "v": 7.2,
          "d": "T4 2025",
          "s": 1
        },
        "044": {
          "v": 9.2,
          "d": "2025",
          "s": 1
        },
        "084": {
          "v": 2,
          "d": "2025",
          "s": 1
        },
        "064": {
          "v": 3.4,
          "d": "T1 2026",
          "s": 1
        },
        "096": {
          "v": 5.3,
          "d": "2025",
          "s": 1
        },
        "050": {
          "v": 3.8,
          "d": "2025",
          "s": 1
        },
        "004": {
          "v": 13.4,
          "d": "2025",
          "s": 1
        },
        "012": {
          "v": 11.6,
          "d": "2025",
          "s": 1
        },
        "072": {
          "v": 24.5,
          "d": "2025",
          "s": 1
        },
        "024": {
          "v": 21.5,
          "d": "T2 2026",
          "s": 1
        },
        "036": {
          "v": 4.6,
          "d": "août 2026",
          "s": 5
        }
      }
    },
    {
      "id": "croissance",
      "label": "Croissance",
      "title": "La croissance dans le monde",
      "explain": "Hausse prévue du PIB en 2026 : de combien la production de richesses du pays devrait augmenter sur l'année.",
      "unit": "%",
      "bins": [
        1,
        2,
        3,
        5
      ],
      "colors": [
        "#123b37",
        "#1a5c54",
        "#22857a",
        "#3db7a1",
        "#8de6ce"
      ],
      "note": "Prévisions du FMI pour 2026 (mise à jour de juillet 2026). Croissance mondiale prévue : 3,0 %. Pour le Mexique, l'Afrique du Sud, l'Argentine et l'Indonésie, ce sont les prévisions d'avril 2026.",
      "sources": [
        {
          "short": "FMI",
          "name": "FMI, Perspectives de l'économie mondiale, mise à jour de juillet 2026",
          "url": "https://www.imf.org/en/news/articles/2026/07/08/tr070826-weo-press-briefing-transcript-july-8-2026"
        },
        {
          "short": "Euronews",
          "name": "Euronews, « IMF forecasts modest growth for Italy, cuts estimates for France and Germany » (8 juil. 2026)",
          "url": "https://www.euronews.com/business/2026/07/08/economy-imf-forecasts-modest-growth-for-italy-cuts-estimates-for-france-and-germany"
        },
        {
          "short": "FMI (avril)",
          "name": "FMI, Perspectives de l'économie mondiale, avril 2026",
          "url": "https://www.imf.org/en/publications/weo/issues/2026/04/14/world-economic-outlook-april-2026"
        }
      ],
      "values": {
        "124": {
          "v": 1.1,
          "d": "prévision 2026"
        },
        "156": {
          "v": 4.6,
          "d": "prévision 2026"
        },
        "250": {
          "v": 0.6,
          "d": "prévision 2026",
          "s": 2
        },
        "276": {
          "v": 0.7,
          "d": "prévision 2026",
          "s": 2
        },
        "356": {
          "v": 6.4,
          "d": "prévision 2026"
        },
        "360": {
          "v": 5,
          "d": "prévision 2026 (avril)",
          "s": 3
        },
        "380": {
          "v": 0.5,
          "d": "prévision 2026",
          "s": 2
        },
        "392": {
          "v": 0.6,
          "d": "prévision 2026"
        },
        "484": {
          "v": 1.6,
          "d": "prévision 2026 (avril)",
          "s": 3
        },
        "566": {
          "v": 4.1,
          "d": "prévision 2026"
        },
        "643": {
          "v": 1.1,
          "d": "prévision 2026"
        },
        "682": {
          "v": 1.7,
          "d": "prévision 2026"
        },
        "710": {
          "v": 1,
          "d": "prévision 2026 (avril)",
          "s": 3
        },
        "724": {
          "v": 2.1,
          "d": "prévision 2026",
          "s": 2
        },
        "826": {
          "v": 1,
          "d": "prévision 2026"
        },
        "840": {
          "v": 2.3,
          "d": "prévision 2026"
        },
        "076": {
          "v": 2.4,
          "d": "prévision 2026"
        },
        "032": {
          "v": 3.5,
          "d": "prévision 2026 (avril)",
          "s": 3
        }
      }
    }
  ]
};

// « Zooms » : un fait marquant sur un pays, avec un graphique et ses sources.
// Pour en ajouter un, copier celui-ci. `country` = code ISO numérique (lien depuis le globe).
window.GEOCO.indicators.focus = [
  {
    id: "france-emploi",
    country: "250",
    eyebrow: "Zoom France · Emploi",
    title: "La France détruit plus d'emplois qu'elle n'en crée.",
    statement: "Au premier trimestre 2025, le secteur privé a perdu 27 600 emplois salariés : il y a eu plus de suppressions de postes que de créations [1].",
    text: [
      "Ce n'est pas un accident isolé. Depuis début 2024, le solde de l'emploi privé a été négatif lors de 7 trimestres sur 10, selon les chiffres de l'Insee [1][2].",
      "Les pertes se concentrent dans l'intérim et la construction, deux secteurs qui réagissent en premier quand l'activité ralentit : les entreprises arrêtent d'abord de prendre des intérimaires avant de toucher à leurs CDI [1].",
      "Le recul reste modeste, autour de 0,1 % par trimestre, mais il dure : c'est le signe d'un marché du travail qui s'essouffle, alors que la croissance française est l'une des plus faibles d'Europe [3]."
    ],
    chart: {
      kind: "chart",
      type: "bar",
      title: "Le solde de l'emploi privé, trimestre par trimestre",
      subtitle: "Emplois salariés créés moins emplois détruits dans le privé, en France",
      xLabel: "Trimestre",
      unit: "Solde d'emplois",
      decimals: 0,
      signed: true,
      highlight: [4],
      data: [["T1 24", 57500], ["T2 24", -28500], ["T3 24", 16800], ["T4 24", -68000], ["T1 25", -27600], ["T2 25", 40600], ["T3 25", -24200], ["T4 25", -19500], ["T1 26", -13900], ["T2 26", -19300]],
      source: "Insee, estimations trimestrielles d'emploi salarié (dernière version publiée de chaque trimestre ; T2 2026 = estimation flash, susceptible d'être révisée)"
    },
    compare: {
      title: "À ne pas confondre : les entreprises.",
      text: "Côté entreprises, c'est l'inverse. Au premier semestre 2025, 322 544 entreprises ont été créées en France [4], contre 34 431 défaillances (17 845 au premier trimestre et 16 586 au deuxième) [5]. Mais une grande partie des créations sont des micro-entreprises, souvent sans salarié, alors que les défaillances touchent de plus en plus de grandes entreprises (+28 % pour celles de plus de 100 salariés début 2025) [5]. On peut donc créer beaucoup d'entreprises et perdre quand même des emplois.",
      figures: [
        { value: "322 544", label: "créations d'entreprises au 1er semestre 2025", src: 4 },
        { value: "34 431", label: "défaillances d'entreprises au 1er semestre 2025", src: 5 }
      ]
    },
    sources: [
      { short: "Insee", name: "Insee, « Au premier trimestre 2025, l'emploi salarié est quasi stable (-0,1 %) », Informations rapides n° 135", url: "https://www.insee.fr/fr/statistiques/8576114" },
      { short: "Journal du Net", name: "Journal du Net, « L'emploi salarié du secteur privé recule de 0,1 % au deuxième trimestre 2026, soit 19 300 emplois perdus selon l'Insee »", url: "https://www.journaldunet.com/business/1553253-l-emploi-salarie-du-secteur-prive-en-france-recule-de-0-1-au-deuxieme-trimestre-2026-soit-19-300-emplois-perdus-selon-l-insee/" },
      { short: "Euronews", name: "Euronews, prévisions du FMI pour l'Europe (8 juil. 2026)", url: "https://www.euronews.com/business/2026/07/08/economy-imf-forecasts-modest-growth-for-italy-cuts-estimates-for-france-and-germany" },
      { short: "Infogreffe", name: "Infogreffe, « Le coût invisible des faillites : plus de 32 000 entreprises en difficulté au premier semestre 2025 »", url: "https://www.infogreffe.fr/actualites/le-cout-invisible-des-faillites---plus-de-32-000-entreprises-en-difficulte-au-premier-semestre-2025" },
      { short: "Altares", name: "Altares, défaillances d'entreprises en France, bilan 2025", url: "https://www.altares.com/fr/statistiques-defaillance-entreprises-france/bilan-2025/" }
    ]
  }
];
