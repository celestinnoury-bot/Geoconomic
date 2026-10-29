// Fil d'actu quotidien.
// Une entrée = un événement du jour, expliqué simplement. Les plus récentes en premier.
//
// Sources : chaque fait chiffré ou rapporté est suivi de [n], qui renvoie à la n-ième
// source de la liste `sources` (en partant de 1). L'appli affiche « (Nom court) » dans
// le texte, avec un lien, et la liste complète en bas de page.
//
// `visuals` : cartes ("map") et graphiques ("chart") interactifs, voir viz.js.
// `verify` (facultatif) : actu qui n'a qu'une source, ou une source fragile : la raison, affichée sous le titre
//         avec « Source à vérifier » (badge ⚠️ dans les listes).
// `image` (facultatif) : { src, alt, credit } pour une photo en tête d'article.
// `geo` : lieux [longitude, latitude] où l'actu apparaît sur le globe de l'accueil ;
//         `label` (facultatif) = nom court affiché sur le globe, `name` = nom complet dans la fiche.
// `routes` (facultatif) : arcs tracés sur le globe depuis le premier lieu.
// `region` (facultatif) : Afrique, Asie, Europe, Amériques, Moyen-Orient (filtre de la page Actu).

window.GEOCO = window.GEOCO || {};
window.GEOCO.news = [
  {
    "id": "2026-10-29-cuba-onu-embargo-vote",
    "date": "2026-10-29",
    "region": "Amériques",
    "theme": "geo",
    "geo": [
      {
        "name": "La Havane, Cuba",
        "label": "Cuba",
        "coords": [
          -82.37,
          23.13
        ]
      }
    ],
    "title": "L'ONU condamne encore l'embargo américain contre Cuba, mais Cuba perd 35 voix en un an",
    "summary": "Le 28 octobre, l'Assemblée générale a voté 130 voix contre l'embargo, 17 pour son maintien et 25 abstentions. L'an dernier, 165 pays avaient soutenu Cuba.",
    "points": [
      "Le 28 octobre, l'Assemblée générale de l'ONU a demandé la fin de l'embargo américain contre Cuba par 130 voix pour, 17 contre et 25 abstentions, pour la 34e année de suite [1][2][3].",
      "En 2025, le vote avait été de 165 voix pour, 7 contre et 12 abstentions : Cuba perd donc 35 voix de soutien en un an [1][2]. Les États-Unis, Israël, l'Ukraine, l'Argentine et les Émirats arabes unis font partie des 17 pays qui ont voté contre [1].",
      "La veille, le débat a été tendu : le ministre cubain des Affaires étrangères, Bruno Rodríguez, a interrompu l'ambassadeur américain Mike Waltz, et la séance a été brièvement suspendue [1]. Washington soutient que la crise cubaine vient de son propre gouvernement, pas de l'embargo [1]."
    ],
    "why": [
      "À retenir : le texte n'oblige personne, mais il mesure chaque année combien de pays acceptent encore de s'opposer publiquement à Washington [1][2].",
      "Cette fois, Washington met en avant la hausse des abstentions pour dire que sa pression pour isoler Cuba commence à payer [1]. La résolution cite aussi la loi américaine Helms-Burton de 1996 et demande un rapport au secrétaire général de l'ONU pour la prochaine session [1]."
    ],
    "forMe": "Le vote ne change rien tout de suite à ton quotidien : il montre surtout où en est le rapport de forces diplomatique autour de Cuba [1][2].",
    "figures": [
      {
        "value": "130 voix",
        "label": "pour la fin de l'embargo (contre 165 en 2025)",
        "src": 1
      },
      {
        "value": "17 contre",
        "label": "dont les États-Unis, Israël et l'Argentine",
        "src": 1
      },
      {
        "value": "34e année",
        "label": "de vote consécutif sur le sujet",
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
        "name": "Al Jazeera, « UN votes to condemn embargo of Cuba despite US lobbying push » (28 octobre 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/28/un-votes-to-condemn-embargo-of-cuba-despite-us-lobbying-push"
      },
      {
        "short": "UPI",
        "name": "UPI, « Cuba loses some previous support in U.N. vote on U.S. embargo » (28 octobre 2026)",
        "url": "https://www.upi.com/Top_News/World-News/2026/10/28/latam-cuba-united-nations-vote-us-embargo/1411793211989"
      },
      {
        "short": "ONU Info",
        "name": "ONU Info, « General Assembly weighs US embargo against Cuba ahead of 34th vote » (octobre 2026)",
        "url": "https://news.un.org/en/story/2026/10/1168686"
      }
    ]
  },
  {
    "id": "2026-10-29-colombie-amazonie-reserve-revoquee",
    "date": "2026-10-29",
    "region": "Amériques",
    "theme": "mix",
    "geo": [
      {
        "name": "Leticia, Amazonie colombienne",
        "label": "Colombie",
        "coords": [
          -69.94,
          -4.21
        ]
      }
    ],
    "title": "La Colombie retire à l'Amazonie sa protection contre les mines et le pétrole",
    "summary": "Le ministère de l'Environnement a révoqué la réserve créée en août, qui couvrait environ 42 % du pays. Les opposants y voient un feu vert aux industries extractives.",
    "points": [
      "Le ministère colombien de l'Environnement a révoqué la résolution 0961 de 2026, qui faisait de l'Amazonie une réserve « définitive » fermée aux nouvelles concessions minières et aux nouveaux contrats pétroliers [1][2].",
      "La zone concernée couvrait environ 483 283 km², soit à peu près 42 % du territoire continental du pays [1]. Le ministère explique que le texte a été pris sans finir la consultation préalable des communautés noires, afro-colombiennes, raizales et palenqueras [1].",
      "Révoquer ne veut pas dire que tout est autorisé : les projets doivent encore respecter les autres règles, comme la loi de 1959 sur les réserves forestières ou le système des parcs nationaux [1]. L'ancienne ministre Irene Vélez, qui défendait le texte, critique la décision et évoque un intérêt pour les terres rares, ce qui reste son accusation, pas un fait établi [2][3]."
    ],
    "why": [
      "À retenir : la protection de l'Amazonie colombienne tenait à un seul texte, signé à la fin du mandat de Gustavo Petro, et un nouveau gouvernement a pu le défaire en quelques semaines [1][3].",
      "Le ministre de l'Environnement, Fabio Arjona, défend un problème de procédure, tandis que ses opposants parlent de recul pour la forêt [3]. Le dossier va se jouer sur les règles qui restent en vigueur et sur d'éventuels recours en justice [1]."
    ],
    "forMe": "Rien ne change à court terme pour toi : la décision ouvre simplement la possibilité de nouveaux projets miniers et pétroliers dans une zone jusque-là fermée [1].",
    "figures": [
      {
        "value": "483 283 km²",
        "label": "de forêt amazonienne concernés par la réserve révoquée",
        "src": 1
      },
      {
        "value": "42 %",
        "label": "environ du territoire continental colombien",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "El Colombiano",
        "name": "El Colombiano, « MinAmbiente revocó resolución que declaraba la Amazonía libre de concesiones mineras » (octobre 2026)",
        "url": "https://www.elcolombiano.com/colombia/por-que-minambiente-revoca-resolucion-reserva-amazonia-DM42825565"
      },
      {
        "short": "Infobae",
        "name": "Infobae, « Gobierno revocó la resolución que protegía a la Amazonía » (28 octobre 2026)",
        "url": "https://www.infobae.com/colombia/2026/10/28/gobierno-de-abelardo-de-la-espriella-revoco-la-resolucion-que-protegia-a-la-amazonia-exministra-irene-velez-alerto-sobre-presunto-interes-en-la-apropiacion-de-tierras-raras/"
      },
      {
        "short": "Vanguardia",
        "name": "Vanguardia, « Gobierno revoca protección de la Amazonía y desata polémica » (27 octobre 2026)",
        "url": "https://www.vanguardia.com/colombia/2026/10/27/gobierno-revoca-proteccion-de-la-amazonia-y-desata-polemica-entre-arjona-e-irene-velez/"
      }
    ]
  },
  {
    "id": "2026-10-29-irak-syrie-visite-oleoduc-baniyas",
    "date": "2026-10-29",
    "region": "Moyen-Orient",
    "theme": "mix",
    "geo": [
      {
        "name": "Damas, Syrie",
        "label": "Syrie",
        "coords": [
          36.29,
          33.51
        ]
      },
      {
        "name": "Bagdad, Irak",
        "label": "Irak",
        "coords": [
          44.37,
          33.31
        ]
      }
    ],
    "title": "Un Premier ministre irakien à Damas pour la première fois depuis la chute d'Assad, avec le pétrole en tête de l'agenda",
    "summary": "Ali al-Zaidi a rencontré le président syrien Ahmed al-Sharaa le 28 octobre. Le bureau du Premier ministre irakien parle d'exporter du pétrole par l'oléoduc de Baniyas, jusqu'à 2 millions de barils par jour.",
    "points": [
      "Le 28 octobre, le Premier ministre irakien Ali al-Zaidi a été accueilli à l'aéroport de Damas par le président syrien Ahmed al-Sharaa [1][2]. Selon une source, c'est la première visite d'un chef de gouvernement irakien depuis la chute de Bachar al-Assad en décembre 2024 [2].",
      "Le bureau du Premier ministre irakien dit avoir parlé d'exporter du pétrole irakien par l'oléoduc de Baniyas, qui pourrait faire passer jusqu'à 2 millions de barils par jour, ainsi que de commerce, d'agriculture et de sécurité aux frontières [1].",
      "Aucun accord signé n'a été rapporté [1]. Les autorités du Kurdistan irakien ont, de leur côté, protesté contre des accords passés par Bagdad sans les consulter [4]."
    ],
    "why": [
      "À retenir : la guerre a perturbé les exportations de pétrole de l'Irak ; en juin, il avait déjà commencé à en envoyer un peu via la Syrie [3].",
      "Pour la Syrie, devenir le couloir de l'or noir irakien serait une façon de retrouver un rôle économique ; al-Sharaa a insisté sur l'importance de ce rôle de route commerciale pour l'Irak [1][2]."
    ],
    "forMe": "Une route de pétrole qui évite le Golfe peut aider à approvisionner le marché pendant que la guerre perturbe les exportations, mais celle-ci n'existe encore que sur le papier [1][3].",
    "figures": [
      {
        "value": "2 millions",
        "label": "de barils par jour : capacité citée pour l'oléoduc de Baniyas",
        "src": 1
      },
      {
        "value": "Décembre 2024",
        "label": "chute de Bachar al-Assad, avant cette première visite",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Kuwait Times",
        "name": "Kuwait Times, « Iraqi PM talks economy, energy on Syria visit » (28 octobre 2026)",
        "url": "https://kuwaittimes.com/article/52564/world/iraqi-pm-talks-economy-energy-on-syria-visit"
      },
      {
        "short": "Arab News",
        "name": "Arab News, « Syria and Iraq pledge stronger security cooperation as leaders meet in Damascus » (28 octobre 2026)",
        "url": "https://www.arabnews.com/middle-east/syria-and-iraq-pledge-stronger-security-cooperation-as-leaders-meet-in-damascus-3008663"
      },
      {
        "short": "Ahram Online",
        "name": "Ahram Online (AFP), « Iraqi FM makes first visit to Syria since Assad's fall » (juin 2026)",
        "url": "https://english.ahram.org.eg/News/571862.aspx"
      },
      {
        "short": "Syriac Press",
        "name": "Syriac Press, « Iraqi Prime Minister visits Damascus amid dispute with Erbil over Sinjar arrangements » (28 octobre 2026)",
        "url": "https://syriacpress.com/blog/2026/10/28/iraqi-prime-minister-visits-daramsuq-damascus-amid-dispute-with-arbailo-erbil-over-shigur-sinjar-arrangements/"
      }
    ]
  },
  {
    "id": "2026-10-29-azerbaidjan-turquie-voile-ecoles",
    "date": "2026-10-29",
    "region": "Europe",
    "theme": "geo",
    "geo": [
      {
        "name": "Bakou, Azerbaïdjan",
        "label": "Azerbaïdjan",
        "coords": [
          49.87,
          40.41
        ]
      }
    ],
    "title": "Le voile à l'école brouille Bakou et Ankara : Erdogan limoge un conseiller, l'Azerbaïdjan interdit l'entrée à 31 Turcs",
    "summary": "Une règle sur l'uniforme scolaire, appliquée depuis le 12 octobre, a déclenché des manifestations en Azerbaïdjan, puis une dispute ouverte avec la Turquie.",
    "points": [
      "Le 21 septembre, Bakou a adopté des règles d'uniforme qui interdisent aux élèves et aux enseignants des écoles publiques les vêtements contraires à la laïcité, sans citer le voile [1][2]. Depuis le 12 octobre environ, des élèves et des enseignantes voilées se voient refuser l'entrée des écoles [1].",
      "Le ministère de l'Intérieur dit avoir arrêté 37 personnes pour trouble à l'ordre public ; Amnesty évoque de son côté des arrestations de manifestants pacifiques [1][2][4].",
      "Oktay Saral, conseiller du président turc, a demandé sur X que l'Azerbaïdjan revienne sur cette « erreur » ; Recep Tayyip Erdogan l'a ensuite limogé [3]. Bakou a aussi interdit l'entrée du pays à 31 Turcs, des politiques et des personnalités qui avaient critiqué la règle, et Ilham Aliyev a averti qu'on ne devait pas « s'immiscer dans notre mode de vie » [3][5]."
    ],
    "why": [
      "À retenir : un sujet intérieur, l'école, a pris une dimension diplomatique entre Bakou et Ankara [3][5].",
      "Le parti au pouvoir à Bakou rejette toute ingérence et défend des règles fondées, selon lui, sur l'égalité et la laïcité [4]. Les ONG, elles, parlent d'atteinte au droit à l'éducation [4]."
    ],
    "forMe": "Rien ne change à ton quotidien, mais l'épisode montre qu'une simple règle scolaire peut suffire à froisser deux gouvernements voisins [3][5].",
    "figures": [
      {
        "value": "37",
        "label": "personnes arrêtées selon le ministère de l'Intérieur",
        "src": 1
      },
      {
        "value": "31",
        "label": "Turcs interdits d'entrée en Azerbaïdjan",
        "src": 3
      },
      {
        "value": "21 septembre",
        "label": "date des nouvelles règles d'uniforme",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Tensions with teachers, pupils and Türkiye: Inside Azerbaijan's hijab row » (14 octobre 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/14/tensions-with-teachers-pupils-and-turkiye-inside-azerbaijans-hijab-row"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Azerbaijan's school hijab ban: what's behind it, and what's next? » (12 octobre 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/12/azerbaijans-school-hijab-ban-whats-behind-it-and-whats-next"
      },
      {
        "short": "The New Arab",
        "name": "The New Arab, « Erdogan sacks senior adviser amid Turkey-Azerbaijan hijab row » (octobre 2026)",
        "url": "https://www.newarab.com/news/erdogan-sacks-senior-adviser-amid-turkey-azerbaijan-hijab-row"
      },
      {
        "short": "Amnesty",
        "name": "Amnesty International, « Azerbaijan: Stop denying access to education through discriminatory hijab restrictions and release peaceful protesters » (octobre 2026)",
        "url": "https://www.amnesty.org/en/latest/news/2026/10/azerbaijan-stop-denying-access-to-education-through-discriminatory-hijab-restrictions-and-release-peaceful-protesters/"
      },
      {
        "short": "Eurasia Review",
        "name": "Eurasia Review, « Baku's Hijab Ban Sparks Protests In Azerbaijan And Creates Problems With Turkey » (26 octobre 2026)",
        "url": "https://www.eurasiareview.com/26102026-bakus-hijab-ban-sparks-protests-in-azerbaijan-and-creates-problems-with-turkey-analysis/"
      }
    ]
  },
  {
    "id": "2026-10-29-gabon-reseaux-sociaux-rouverts",
    "date": "2026-10-29",
    "region": "Afrique",
    "theme": "mix",
    "geo": [
      {
        "name": "Libreville, Gabon",
        "label": "Gabon",
        "coords": [
          9.45,
          0.39
        ]
      }
    ],
    "title": "Le Gabon rouvre les réseaux sociaux après huit mois, mais il faudra montrer une pièce d'identité",
    "summary": "La suspension, imposée le 17 février, avait été critiquée par l'opposition, des jeunes et des entreprises. Beaucoup de Gabonais la contournaient avec des VPN.",
    "points": [
      "L'autorité de régulation de la communication (HAC) a annoncé samedi la levée de la suspension des réseaux sociaux, en place depuis le 17 février, officiellement parce que des contenus en ligne alimentaient les tensions [1][2].",
      "Elle explique sa décision par des discussions avec les grandes entreprises technologiques sur la modération des plateformes [2].",
      "La réouverture a une condition : les utilisateurs devront fournir une pièce d'identité officielle pour s'inscrire, ce qui met fin de fait à l'anonymat en ligne [2]. Pendant la coupure, beaucoup avaient utilisé des VPN, et l'opposition dénonçait un abus de pouvoir [2][3]."
    ],
    "why": [
      "À retenir : la coupure a duré huit mois et a été critiquée par des jeunes et des entreprises [3].",
      "Exiger une identité pour utiliser ces plateformes est une façon de réduire l'anonymat, ce qui inquiète les défenseurs des libertés [2]."
    ],
    "forMe": "Quand un pays coupe les réseaux, ses habitants et ses entreprises le ressentent vite : c'est un risque à connaître avant de travailler avec lui [3].",
    "figures": [
      {
        "value": "8 mois",
        "label": "de suspension des réseaux sociaux",
        "src": 1
      },
      {
        "value": "17 février",
        "label": "début de la suspension",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Anadolu",
        "name": "Agence Anadolu, « Gabon lifts ban on social media networks after 8 months » (octobre 2026)",
        "url": "https://www.aa.com.tr/en/world/gabon-lifts-ban-on-social-media-networks-after-8-months/4100419"
      },
      {
        "short": "Developing Telecoms",
        "name": "Developing Telecoms, « Gabon lifts social media ban after eight months » (octobre 2026)",
        "url": "https://www.developingtelecoms.com/telecom-business/telecom-regulation/21035-gabon-lifts-social-media-ban-after-eight-months.html"
      },
      {
        "short": "allAfrica",
        "name": "allAfrica, « All of Africa Today » (26 octobre 2026)",
        "url": "https://allafrica.com/stories/202610260104.html"
      }
    ]
  },
  {
    "id": "2026-10-29-nepal-fonds-pertes-dommages",
    "date": "2026-10-29",
    "region": "Asie",
    "theme": "mix",
    "geo": [
      {
        "name": "Katmandou, Népal",
        "label": "Népal",
        "coords": [
          85.32,
          27.71
        ]
      }
    ],
    "title": "Après les inondations, le fonds climat de l'ONU verse ses 20 premiers millions au Népal, pour 4,7 milliards de dollars de besoins",
    "summary": "C'est la première fois que le fonds « pertes et dommages » réserve de l'argent à un pays. Le Népal doit encore déposer un projet avant de toucher quoi que ce soit.",
    "points": [
      "Le 22 octobre, le conseil du Fonds de l'ONU pour les pertes et dommages liés au climat a réservé 20 millions de dollars au Népal, après les inondations meurtrières d'août [1][2].",
      "C'est le premier versement du fonds à un pays [2][3]. Le gouvernement népalais estime la reconstruction à environ 4,7 milliards de dollars, ce qui place ces 20 millions sous 1 % des besoins [1][2].",
      "L'argent n'est pas encore débloqué : le Népal doit d'abord déposer une proposition de projet [1]. Les inondations ont fait plus de 1 400 morts, selon les sources, avec des bilans qui varient autour de 1 500 [2]."
    ],
    "why": [
      "À retenir : c'est le premier test d'un fonds créé pour aider les pays touchés par des dégâts climatiques, et l'écart avec les besoins est énorme [2][3].",
      "Des militants et des experts jugent la somme très insuffisante et disent que les pays riches ont répondu froidement à la demande du Népal [2]."
    ],
    "forMe": "Ce débat sur qui paie les dégâts climatiques revient à chaque grand sommet sur le climat ; ici, l'aide couvre moins de 1 % des besoins estimés [1][2].",
    "figures": [
      {
        "value": "20 M$",
        "label": "réservés par le fonds de l'ONU",
        "src": 2
      },
      {
        "value": "4,7 Md$",
        "label": "de reconstruction estimés par le Népal",
        "src": 1
      },
      {
        "value": "< 1 %",
        "label": "des besoins couverts",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Kathmandu Post",
        "name": "The Kathmandu Post, « Loss and Damage Fund allocates $20 million to Nepal » (22 octobre 2026)",
        "url": "https://kathmandupost.com/national/2026/10/22/loss-and-damage-fund-allocates-20-million-to-nepal"
      },
      {
        "short": "AP",
        "name": "AP via News4Jax, « UN climate fund promises $20 million for Nepal flood recovery, far short of billions needed » (23 octobre 2026)",
        "url": "https://www.news4jax.com/news/world/2026/10/23/un-climate-fund-promises-20-million-for-nepal-flood-recovery-far-short-of-billions-needed/"
      },
      {
        "short": "SCMP",
        "name": "South China Morning Post, « Nepal set to receive first-ever US$20 million payout from UN climate damage fund » (octobre 2026)",
        "url": "https://scmp.com/news/asia/south-asia/article/3371840/nepal-set-receive-first-ever-us20-million-payout-un-climate-damage-fund"
      }
    ]
  },
  {
    "id": "2026-10-29-singapour-indonesie-brume-task-force",
    "date": "2026-10-29",
    "region": "Asie",
    "theme": "geo",
    "geo": [
      {
        "name": "Jakarta, Indonésie",
        "label": "Indonésie",
        "coords": [
          106.85,
          -6.21
        ]
      },
      {
        "name": "Singapour",
        "label": "Singapour",
        "coords": [
          103.82,
          1.35
        ]
      }
    ],
    "title": "Singapour et l'Indonésie vont suivre l'argent des entreprises derrière la brume toxique",
    "summary": "Les deux ministres des Affaires étrangères ont annoncé le 27 octobre une équipe commune pour poursuivre les sociétés liées aux feux de forêt.",
    "points": [
      "Le 27 octobre, à Jakarta, Singapour et l'Indonésie ont décidé de créer une équipe commune pour poursuivre les entreprises liées aux feux de forêt qui provoquent la brume toxique [1].",
      "Elle doit partager des informations, suivre les flux financiers, réunir des preuves de part et d'autre de la frontière et, quand c'est possible, récupérer des avoirs, a expliqué le ministre indonésien Arrmanatha Nasir [1].",
      "Singapour a déjà adressé des avis de prévention à 10 entreprises liées aux feux en Indonésie et demandé des informations à 10 sociétés basées chez elle ; son ministre Vivian Balakrishnan promet d'utiliser « chaque pouvoir légal » contre les responsables, y compris à Singapour [1]. Bloomberg y voit aussi un moyen de calmer les tensions, après une coupure inattendue de gaz [2]."
    ],
    "why": [
      "À retenir : au lieu d'accuser l'État voisin, les deux gouvernements visent les entreprises et leur argent, ce qui est plus difficile à ignorer [1].",
      "Cet épisode de brume est l'un des plus graves depuis plus de dix ans dans la région [1]."
    ],
    "forMe": "La brume ne s'arrête pas aux frontières : c'est pourquoi les deux pays veulent s'attaquer aux entreprises plutôt que de se renvoyer la faute [1].",
    "figures": [
      {
        "value": "10 + 10",
        "label": "entreprises visées ou interrogées par Singapour (en Indonésie et à Singapour)",
        "src": 1
      },
      {
        "value": "Plus de 10 ans",
        "label": "depuis un épisode de brume aussi grave dans la région",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "The Star",
        "name": "The Star, « Singapore, Indonesia to set up joint task force to hold firms accountable for forest fires » (28 octobre 2026)",
        "url": "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/10/28/singapore-indonesia-to-set-up-joint-task-force-to-hold-firms-accountable-for-forest-fires"
      },
      {
        "short": "Bloomberg",
        "name": "Bloomberg, « Singapore, Indonesia Seek to Ease Tensions With Fires Taskforce » (27 octobre 2026)",
        "url": "https://www.bloomberg.com/news/articles/2026-10-27/singapore-s-top-envoy-visits-indonesia-after-natural-gas-cuts"
      }
    ]
  },
  {
    "id": "2026-10-29-afrique-pib-reevalue-guinee",
    "verify": "Une seule source (BusinessDay), qui compare elle-même les prévisions d'avril et d'octobre du FMI : chiffres à confirmer dans les données du FMI.",
    "date": "2026-10-29",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Conakry, Guinée",
        "label": "Guinée",
        "coords": [
          -13.68,
          9.64
        ]
      }
    ],
    "title": "Le FMI a revu la richesse de l'Afrique à la hausse de 99 milliards de dollars en six mois, la Guinée en tête",
    "summary": "En comparant ses prévisions d'avril et d'octobre, le FMI a relevé le PIB estimé de 34 pays africains sur 52 ; la Guinée gagne 15 milliards de dollars.",
    "points": [
      "Entre les éditions d'avril et d'octobre 2026 des Perspectives de l'économie mondiale du FMI, le PIB estimé des économies africaines a été relevé de 99,44 milliards de dollars au total [1].",
      "Les estimations montent dans 34 des 52 pays étudiés et baissent dans 18 : 121,38 milliards de hausses, contre 21,94 milliards de baisses [1].",
      "La Guinée a la plus forte révision, de 15,38 milliards de dollars à 45,31 milliards ; l'Algérie gagne 14,65 milliards et l'Égypte 13,24 milliards, l'Éthiopie étant estimée à environ 127,15 milliards [1]."
    ],
    "why": [
      "À retenir : ces révisions ne prouvent pas que la guerre en Iran a aidé ou freiné ces économies, précise l'article qui les a calculées [1].",
      "Le FMI prévoit tout de même +4,5 % de croissance en Afrique subsaharienne en 2026 et en 2027, en avertissant que les pays importateurs de pétrole subissent plus de pression [1]."
    ],
    "forMe": "Ces révisions changent surtout la taille affichée des économies ; elles ne disent pas si les habitants vivent mieux [1].",
    "figures": [
      {
        "value": "+99,44 Md$",
        "label": "révision nette du PIB africain entre avril et octobre",
        "src": 1
      },
      {
        "value": "34 sur 52",
        "label": "pays dont le PIB estimé augmente",
        "src": 1
      },
      {
        "value": "+15,38 Md$",
        "label": "pour la Guinée, la plus forte hausse",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "BusinessDay",
        "name": "BusinessDay, « African economies see $99.4bn GDP upgrade amid renewed Iran war shocks » (26 octobre 2026)",
        "url": "https://businessday.ng/africa/article/african-economies-see-99-4bn-gdp-upgrade-amid-renewed-iran-war-shocks/"
      }
    ]
  },
  {
    "id": "2026-10-28-ouganda-quarantaine-retour-rdc",
    "date": "2026-10-28",
    "region": "Afrique",
    "theme": "geo",
    "geo": [
      {
        "name": "Kampala, Ouganda",
        "label": "Ouganda",
        "coords": [
          32.58,
          0.35
        ]
      }
    ],
    "title": "L'Ouganda impose 21 jours de quarantaine, payés par les voyageurs, à ceux qui reviennent de RD Congo",
    "summary": "Le ministère de la Santé a durci les règles le 25 octobre : les voyageurs passés par le Congo ne peuvent plus transiter par le pays. Deux malades passés par l'aéroport d'Entebbe ont été testés positifs au Kenya et au Nigeria.",
    "points": [
      "Le 25 octobre, le ministère ougandais de la Santé a annoncé que les citoyens qui reviennent de RD Congo doivent passer 21 jours en quarantaine, à leurs propres frais [1][2].",
      "Les voyageurs qui ont séjourné au Congo ne peuvent plus transiter par l'Ouganda, y compris sur des vols affrétés [1].",
      "L'Ouganda n'a enregistré aucun cas confirmé depuis qu'il a déclaré son épidémie terminée le 28 juillet, mais deux personnes passées par chez lui ont ensuite été testées positives, au Kenya et au Nigeria ; selon l'Africa CDC, les deux ont transité par l'aéroport d'Entebbe le 3 octobre [1][2]."
    ],
    "why": [
      "À retenir : un pays sans malade peut quand même fermer sa porte, parce que le virus voyage avec les passagers [1][2].",
      "L'épidémie en RD Congo a fait des milliers de morts, et l'Ouganda préfère payer le prix de la prudence (voyages ralentis, transit interdit) plutôt que de rouvrir un foyer chez lui [1]. Les enquêtes sur le cas détecté au Nigeria sont toujours en cours [1]."
    ],
    "forMe": "Si tu prépares un voyage en Afrique de l'Est, une escale par Entebbe peut être refusée ou compliquée pour qui a séjourné au Congo : vérifie les règles avant de partir [1].",
    "figures": [
      {
        "value": "21 jours",
        "label": "de quarantaine, aux frais du voyageur",
        "src": 1
      },
      {
        "value": "28 juillet",
        "label": "date où l'Ouganda a déclaré son épidémie terminée",
        "src": 1
      },
      {
        "value": "3 octobre",
        "label": "passage par l'aéroport d'Entebbe des deux malades testés ailleurs",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "AJC",
        "name": "The Atlanta Journal-Constitution, « Uganda tightens Ebola border controls and requires returnees from Congo to pay for quarantine » (octobre 2026)",
        "url": "https://www.ajc.com/news/2026/10/uganda-tightens-ebola-border-controls-and-requires-returnees-from-congo-to-pay-for-quarantine/"
      },
      {
        "short": "WHTC",
        "name": "WHTC, « Uganda imposes 21-day quarantine on citizens returning from Congo », dépêche d'Elias Biryabarema (25 octobre 2026)",
        "url": "https://whtc.com/2026/10/25/uganda-imposes-21-day-quarantine-on-citizens-returning-from-congo/"
      }
    ]
  },
  {
    "id": "2026-10-28-hongrie-bloque-moldavie-ukraine-ue",
    "date": "2026-10-28",
    "region": "Europe",
    "theme": "geo",
    "geo": [
      {
        "name": "Budapest, Hongrie",
        "label": "Hongrie",
        "coords": [
          19.04,
          47.5
        ]
      },
      {
        "name": "Chișinău, Moldavie",
        "label": "Moldavie",
        "coords": [
          28.86,
          47.01
        ]
      }
    ],
    "title": "La Hongrie bloque encore les deux dernières étapes de l'entrée de la Moldavie et de l'Ukraine dans l'UE",
    "summary": "Après avoir laissé passer deux chapitres de négociation le 13 octobre, Budapest a refusé le 20 octobre d'ouvrir les deux derniers, et son blocage a été réaffirmé le 27.",
    "points": [
      "Le 13 octobre, à Luxembourg, l'Union a débloqué deux nouveaux groupes de négociation pour l'Ukraine et la Moldavie [1].",
      "Le 20 octobre, la Hongrie a de nouveau refusé d'approuver l'ouverture des deux derniers « chapitres » sur six, sans explication donnée, selon la presse ukrainienne [1][2].",
      "Ce blocage a été réaffirmé le 27 octobre ; la Commission européenne doit présenter le 4 novembre ses feuilles de route d'élargissement pour l'Ukraine et la Moldavie [3]."
    ],
    "why": [
      "À retenir : l'adhésion à l'UE se joue chapitre par chapitre, et il suffit qu'un pays dise non pour qu'une étape soit bloquée [1][2].",
      "Début octobre, la presse bruxelloise écrivait que Budapest pourrait lever son blocage si Kyiv adoptait une loi sur les écoles des minorités, mais que le veto de principe sur l'adhésion elle-même restait posé [4]."
    ],
    "forMe": "Rien ne change tout de suite pour toi. Mais chaque chapitre ouvert rapproche deux pays du marché européen, et aucune date d'entrée n'est fixée dans les sources [1][3].",
    "figures": [
      {
        "value": "2 sur 6",
        "label": "chapitres encore bloqués par la Hongrie",
        "src": 2
      },
      {
        "value": "13 octobre",
        "label": "deux groupes de négociation débloqués à Luxembourg",
        "src": 1
      },
      {
        "value": "4 novembre",
        "label": "présentation des feuilles de route par la Commission",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "European Interest",
        "name": "European Interest, « Hungary again blocks Ukraine and Moldova's EU path, angering other EU member states » (octobre 2026)",
        "url": "https://www.europeaninterest.eu/hungary-again-blocks-ukraine-and-moldovas-eu-path-angering-other-eu-member-states/"
      },
      {
        "short": "Kyiv Independent",
        "name": "Kyiv Independent, « Hungary blocks final 2 of 6 membership to-do lists for Ukraine and Moldova, no explanation given » (octobre 2026)",
        "url": "https://kyivindependent.com/hungary-blocks-final-2-of-6-membership-to-do-lists-for-ukraine-and-moldova-no-explanation-given/"
      },
      {
        "short": "112.ua",
        "name": "112.ua, « EU Commission to unveil enlargement roadmaps for Ukraine and Moldova on November 4 » (27 octobre 2026)",
        "url": "https://112.ua/en/evrokomisia-predstavit-dorozni-karti-dla-ukraini-ta-moldovi-v-mezah-rozsirenna-es-4-listopada-194180"
      },
      {
        "short": "Brussels Signal",
        "name": "Brussels Signal, « Hungary set to lift block on next stage of Ukraine and Moldova EU talks » (octobre 2026)",
        "url": "https://brusselssignal.eu/2026/10/hungary-set-to-lift-block-on-next-stage-of-ukraine-and-moldova-eu-talks/"
      }
    ]
  },
  {
    "id": "2026-10-28-fmi-moyen-orient-recul-oman",
    "date": "2026-10-28",
    "region": "Moyen-Orient",
    "theme": "eco",
    "geo": [
      {
        "name": "Mascate, Oman",
        "label": "Oman",
        "coords": [
          58.41,
          23.59
        ]
      }
    ],
    "title": "La guerre fait reculer l'économie du Moyen-Orient de 1,3 % en 2026 : dans le Golfe, seul Oman y échappe",
    "summary": "Dans ses prévisions d'octobre, le FMI voit la région Moyen-Orient, Afrique du Nord et Pakistan se contracter cette année, avant un rebond en 2027.",
    "points": [
      "Le FMI prévoit que l'économie de la région Moyen-Orient, Afrique du Nord et Pakistan reculera de 1,3 % en 2026, après une croissance de 3,3 % en 2025, puis rebondira de 6,6 % en 2027 [1][2].",
      "Il attribue ce recul aux effets de la guerre sur la production d'énergie, le transport maritime, le tourisme, le commerce et la confiance [2][3].",
      "Les économies du Golfe (CCG) devraient toutes se contracter en 2026, sauf Oman ; d'après la dépêche reprise par Polity, les pays exportateurs de pétrole sont plus touchés que les importateurs [1][3]."
    ],
    "why": [
      "À retenir : la région qui vend l'énergie du monde est celle qui recule, parce que la guerre touche justement l'énergie, les bateaux et les touristes [2][3].",
      "Le FMI prévient que la poursuite de la guerre, ou de nouvelles coupures de production, de routes maritimes ou d'infrastructures, pourraient encore aggraver ce tableau [2]."
    ],
    "forMe": "Quand la région du pétrole et du gaz souffre, l'énergie reste chère et fragile, ce qui peut peser sur ton budget carburant et chauffage [1][2].",
    "figures": [
      {
        "value": "−1,3 %",
        "label": "croissance prévue en 2026 (Moyen-Orient, Afrique du Nord, Pakistan)",
        "src": 1
      },
      {
        "value": "+3,3 %",
        "label": "croissance de 2025",
        "src": 2
      },
      {
        "value": "+6,6 %",
        "label": "rebond prévu en 2027",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Polity",
        "name": "Polity, « IMF sees 1.3% contraction in Middle East, North Africa and Pakistan in 2026 » (22 octobre 2026)",
        "url": "https://www.polity.org.za/article/imf-sees-13-contraction-in-middle-east-north-africa-and-pakistan-in-2026-2026-10-22"
      },
      {
        "short": "Devdiscourse",
        "name": "Devdiscourse, « Middle East, North Africa and Pakistan GDP to contract 1.3% in 2026, IMF says » (octobre 2026)",
        "url": "https://www.devdiscourse.com/article/international/3996345-middle-east-north-africa-and-pakistan-gdp-to-contract-13-in-2026-imf-says"
      },
      {
        "short": "Gulf Times",
        "name": "Gulf Times, « Middle East, North Africa and Pakistan GDP to contract 1.3% in 2026: IMF » (octobre 2026)",
        "url": "https://www.gulf-times.com/article/736657/business/middle-east-north-africa-and-pakistan-gdp-to-contract-13-in-2026-imf"
      }
    ]
  },
  {
    "id": "2026-10-28-philippines-ministres-defense-cebu",
    "date": "2026-10-28",
    "region": "Asie",
    "theme": "geo",
    "geo": [
      {
        "name": "Cebu, Philippines",
        "label": "Philippines",
        "coords": [
          123.89,
          10.32
        ]
      }
    ],
    "title": "Aux Philippines, l'Inde et le Japon envoient leurs ministres de la Défense à une grande réunion régionale",
    "summary": "Les 28 et 29 octobre, Cebu accueille la réunion des ministres de la Défense de l'ASEAN et de leurs partenaires, présidée cette année par Manille.",
    "points": [
      "La 13e réunion des ministres de la Défense de l'ASEAN et de leurs partenaires (ADMM-Plus) se tient les 28 et 29 octobre à Cebu ; les Philippines la président en 2026 [1][2].",
      "Le ministre indien de la Défense, Rajnath Singh, est parti pour Cebu afin d'« explorer de nouvelles pistes pour renforcer les partenariats stratégiques » [1][3].",
      "Le ministre japonais de la Défense, Shinjiro Koizumi, est attendu dès le 28 octobre, avec des entretiens bilatéraux prévus avec ses homologues américain, philippin et sud-coréen [4]."
    ],
    "why": [
      "À retenir : ces rencontres servent surtout à se parler et à nouer des partenariats de défense avant qu'une crise n'éclate [1][3].",
      "Le fait que l'Inde et le Japon fassent le déplacement montre qu'ils veulent compter dans la sécurité de l'Asie du Sud-Est, une région par où passent de nombreux navires de commerce [1][4]."
    ],
    "forMe": "La sécurité des mers d'Asie touche indirectement tes achats (électronique, vêtements), qui voyagent en grande partie par bateau : c'est pourquoi ces réunions comptent, même quand rien n'est signé.",
    "figures": [
      {
        "value": "13e",
        "label": "édition de la réunion ADMM-Plus",
        "src": 2
      },
      {
        "value": "28–29 octobre",
        "label": "dates de la réunion à Cebu",
        "src": 2
      },
      {
        "value": "3",
        "label": "entretiens bilatéraux prévus pour le ministre japonais",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "IANS",
        "name": "IANS, « Rajnath Singh arrives in Philippines for Asean Defence Ministers' meeting » (27 octobre 2026)",
        "url": "https://ianslive.in/rajnath-singh-arrives-in-philippines-for-asean-defence-ministes-meeting--20261027210805"
      },
      {
        "short": "The Hans India",
        "name": "The Hans India, « Rajnath Singh leaves for Philippines to attend 13th ASEAN Defence Ministers' Meeting Plus » (octobre 2026)",
        "url": "https://www.thehansindia.com/news/national/rajnath-singh-leaves-for-philippines-to-attend-13th-asean-defence-ministers-meeting-plus-1136263"
      },
      {
        "short": "The Tribune",
        "name": "The Tribune, « Explore new avenues to strengthen strategic partnerships: Rajnath Singh leaves for ASEAN Defence Ministers' Meeting-Plus in Philippines » (octobre 2026)",
        "url": "https://www.tribuneindia.com/news/admm-plus/explore-new-avenues-to-strengthen-strategic-partnerships-rajnath-singh-leaves-for-asean-defence-ministers-meeting-plus-in-philippines"
      },
      {
        "short": "Rio Times",
        "name": "The Rio Times, « Asia Intelligence Brief for Tuesday, October 27, 2026 »",
        "url": "https://www.riotimesonline.com/asia-intelligence-brief-tuesday-october-27-2026/"
      }
    ]
  },
  {
    "id": "2026-10-28-iran-poutine-moscou-sommet-gaz",
    "date": "2026-10-28",
    "region": "Moyen-Orient",
    "theme": "geo",
    "geo": [
      {
        "name": "Moscou, Russie",
        "label": "Russie",
        "coords": [
          37.62,
          55.75
        ]
      },
      {
        "name": "Téhéran, Iran",
        "label": "Iran",
        "coords": [
          51.39,
          35.69
        ]
      }
    ],
    "title": "Le président iranien à Moscou pour un sommet des pays exportateurs de gaz et un tête-à-tête avec Poutine",
    "summary": "Masoud Pezeshkian devait rencontrer Vladimir Poutine le 27 octobre, en marge du sommet du Forum des pays exportateurs de gaz. À l'heure d'écrire, aucun compte rendu n'était disponible.",
    "points": [
      "Le président iranien Masoud Pezeshkian devait participer le 27 octobre à Moscou au 8e sommet du Forum des pays exportateurs de gaz (GECF), consacré aux marchés du gaz et à la coopération entre exportateurs [1][2].",
      "Selon le ministre iranien des Affaires étrangères Abbas Araghchi, il devait y rencontrer Vladimir Poutine ; coopération économique et questions « géopolitiques » étaient au programme [2][3].",
      "Les deux hommes s'étaient déjà vus à Bichkek début septembre : Pezeshkian avait alors remercié Poutine pour la position de la Russie pendant la guerre contre les États-Unis [4]."
    ],
    "why": [
      "À retenir : deux grands producteurs d'énergie se parlent au moment où la guerre perturbe le gaz et le pétrole du Golfe [2][4].",
      "À l'heure d'écrire, aucun compte rendu de la rencontre n'était disponible : c'est une actu à suivre, et on ne sait pas encore si elle débouchera sur un accord."
    ],
    "forMe": "Les prix de l'énergie que tu paies dépendent en partie de ces producteurs : à suivre si cette rencontre débouche sur quelque chose de concret.",
    "figures": [
      {
        "value": "8e",
        "label": "sommet du Forum des pays exportateurs de gaz",
        "src": 2
      },
      {
        "value": "27 octobre",
        "label": "date du sommet et de la rencontre prévue avec Poutine",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "UNI",
        "name": "UNI, « Energy: Iran, Putin meet on Oct 27 » (24 octobre 2026)",
        "url": "https://www.uniindia.com/world/energy-iran-putin-meet-on-oct-27/224024"
      },
      {
        "short": "Tasnim",
        "name": "Tasnim, « Pezeshkian to Visit Russia for Gas Exporters' Summit » (24 octobre 2026)",
        "url": "https://www.tasnimnews.ir/en/news/2026/10/24/3730538/pezeshkian-to-visit-russia-for-gas-exporters-summit"
      },
      {
        "short": "Connaissance des énergies (AFP)",
        "name": "Connaissance des énergies (AFP), « Le président iranien rencontrera Poutine mardi à Moscou » (24 octobre 2026)",
        "url": "https://www.connaissancedesenergies.org/afp/le-president-iranien-rencontrera-poutine-mardi-a-moscou-media-261024"
      },
      {
        "short": "Ahram",
        "name": "Ahram Online, « Iran president thanks Putin for Russia's stance during war with US » (septembre 2026)",
        "url": "https://english.ahram.org.eg/News/575714.aspx"
      }
    ]
  },
  {
    "id": "2026-10-28-nigeria-aide-transport-syndicats",
    "date": "2026-10-28",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Abuja, Nigeria",
        "label": "Nigeria",
        "coords": [
          7.49,
          9.06
        ]
      }
    ],
    "title": "Au Nigeria, l'État évite le bras de fer avec les syndicats : 70 000 nairas d'aide au transport pendant six mois",
    "summary": "Le gouvernement et la centrale syndicale NLC ont trouvé un accord le 27 octobre, mais pas sur la date d'un nouveau salaire minimum.",
    "points": [
      "Le 27 octobre, lors d'une réunion de conciliation au ministère du Travail, le gouvernement fédéral a approuvé une aide au transport de 70 000 nairas pour les salariés de tous niveaux, pendant six mois à partir de novembre 2026 [1].",
      "Le paiement d'arriérés de primes, à effet du 1er mai 2026, est aussi approuvé, par versements à partir de novembre ; un accord porte aussi sur 19 mois d'arriérés pour les agents de santé [1][2].",
      "Les deux parties ne se sont pas entendues sur la date d'entrée en vigueur d'un nouveau salaire minimum [1]. Le 9 octobre, le syndicat avait donné deux semaines au gouvernement pour baisser le prix de l'essence et rouvrir la négociation sur le salaire minimum [3]."
    ],
    "why": [
      "À retenir : le gouvernement répond à la colère sur le coût de la vie par une aide temporaire plutôt que par une hausse durable du salaire minimum [1][3].",
      "Le syndicat estime que l'inflation et le prix des transports ont rogné la valeur du salaire minimum actuel de 70 000 nairas ; un haut responsable du ministère du Travail a dit qu'un nouveau salaire minimum était en discussion, sans date de négociation fixée [3]."
    ],
    "forMe": "C'est le même mécanisme que chez nous quand le carburant monte : les salariés qui payent leur trajet voient leur pouvoir d'achat fondre, et l'État choisit entre aider ou augmenter les salaires.",
    "figures": [
      {
        "value": "70 000 nairas",
        "label": "aide au transport pour les salariés",
        "src": 1
      },
      {
        "value": "6 mois",
        "label": "durée de l'aide, à partir de novembre 2026",
        "src": 1
      },
      {
        "value": "19 mois",
        "label": "d'arriérés des agents de santé couverts par l'accord",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Channels TV",
        "name": "Channels Television, « FG Approves Six-Month ₦70,000 Transport Support For Workers » (27 octobre 2026)",
        "url": "https://www.channelstv.com/2026/10/27/fg-approves-six-month-%e2%82%a670000-transport-support-for-workers/"
      },
      {
        "short": "allAfrica",
        "name": "allAfrica, « Nigeria: Govt, NLC Reach Deal On N70,000 Transport Allowance, 19-Month Health Workers' Arrears » (28 octobre 2026)",
        "url": "https://allafrica.com/stories/202610280135.html"
      },
      {
        "short": "Nairametrics",
        "name": "Nairametrics, « NLC gives FG two-week ultimatum to reduce petrol prices, renegotiate minimum wage » (9 octobre 2026)",
        "url": "https://nairametrics.com/2026/10/09/nlc-gives-fg-two-week-ultimatum-to-reduce-petrol-prices-renegotiate-minimum-wage/"
      }
    ]
  },
  {
    "id": "2026-10-28-perou-or-illegal-tambopata",
    "date": "2026-10-28",
    "region": "Amériques",
    "theme": "eco",
    "geo": [
      {
        "name": "Réserve de Tambopata, Madre de Dios, Pérou",
        "label": "Pérou",
        "coords": [
          -69.19,
          -12.59
        ]
      }
    ],
    "title": "Au Pérou, les autorités détruisent des dizaines de camps d'or illégal en Amazonie, mais les mineurs reviennent",
    "summary": "Plus de 30 camps d'orpaillage illégal près de la réserve de Tambopata ont été détruits, selon la presse économique latino-américaine.",
    "points": [
      "Les autorités péruviennes ont détruit plus de 30 camps d'orpaillage illégal près de la réserve nationale de Tambopata, dans l'Amazonie [1].",
      "En août, une opération conduite par le parquet, avec l'appui de l'ONG américaine Global Conservation, avait déjà détruit pour près de 1,7 million de dollars de matériel de mine dans la réserve [2].",
      "Un procureur cité par la presse reconnaît que « l'exploitation minière est en train de gagner » : les mineurs reviennent en quelques jours après chaque raid [2]."
    ],
    "why": [
      "À retenir : détruire des camps ne suffit pas tant que l'or illégal rapporte beaucoup plus que ce que coûte la prise de risque [1][2].",
      "Selon un rapport cité par la presse, les exportations d'or illégal du Pérou auraient atteint environ 11,5 milliards de dollars en 2025, et les changements fréquents de président ont empêché une stratégie suivie contre ce trafic [2]."
    ],
    "forMe": "L'or que tu retrouves dans les bijoux ou les placements vient en partie de mines dont l'origine est difficile à contrôler : c'est pourquoi la traçabilité de l'or devient un enjeu.",
    "figures": [
      {
        "value": "30+",
        "label": "camps d'or illégal détruits près de Tambopata",
        "src": 1
      },
      {
        "value": "≈ 1,7 M$",
        "label": "de matériel détruit lors de l'opération d'août",
        "src": 2
      },
      {
        "value": "≈ 11,5 Md$",
        "label": "d'exportations d'or illégal estimées en 2025",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Rio Times",
        "name": "The Rio Times, « Peru Destroys Over 30 Illegal Gold Camps » (octobre 2026)",
        "url": "https://riotimesonline.com/peru-tambopata-illegal-gold-camps-destroyed"
      },
      {
        "short": "Mining Reporters",
        "name": "Mining Reporters, « Peru illegal gold mining Tambopata reserve military raids » (août 2026)",
        "url": "https://www.miningreporters.com/noticia/news/2026/08/peru-illegal-gold-mining-tambopata-reserve-military-raids"
      }
    ]
  },
  {
    "id": "2026-10-27-serbie-liste-etudiants-vucic-defaite",
    "date": "2026-10-27",
    "region": "Europe",
    "theme": "geo",
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
    "title": "En Serbie, le mouvement étudiant bat Vučić aux législatives, après quatorze ans de pouvoir",
    "summary": "La Liste des étudiants a gagné les législatives anticipées du 25 octobre et Aleksandar Vučić a reconnu sa défaite. Elle devrait avoir seule la majorité au Parlement.",
    "points": [
      "Le 25 octobre, la Liste des étudiants a remporté les législatives anticipées en Serbie et Aleksandar Vučić, au pouvoir depuis quatorze ans, a reconnu sa défaite : « La Liste des étudiants a gagné » [1][2].",
      "Selon des résultats encore provisoires de la Commission électorale (8 077 bureaux sur 8 392 dépouillés), la Liste des étudiants a obtenu 52,54 % des voix, contre 39,29 % pour la liste de Vučić ; Euronews donne un écart un peu différent pour le second [1][2]. Vučić lui-même estime que les étudiants auront entre 135 et 140 sièges sur 250, et son camp environ 105 [2].",
      "Le mouvement est né de près de deux ans de manifestations menées par des jeunes, après la mort de 16 personnes dans l'effondrement de l'auvent de la gare de Novi Sad en 2024. Vučić a dénoncé les médias indépendants et des ingérences étrangères ; aucun nom de Premier ministre n'a encore été avancé par les étudiants [2][3]."
    ],
    "why": [
      "À retenir : une liste portée par des étudiants, dont aucun n'était candidat, vient de priver de sa majorité un dirigeant qui tenait la Serbie depuis quatorze ans [1][2].",
      "Le plus dur commence : le nouveau pouvoir doit former un gouvernement, choisir un Premier ministre et dire ce qu'il fera du budget et des grands contrats. Les sources consultées ne détaillent pas encore son programme économique, et les résultats ne sont pas définitifs [2]."
    ],
    "forMe": "La Serbie est un pays européen, voisin de plusieurs pays de l'Union. Ce que fera le nouveau gouvernement (budget, relations avec Bruxelles et avec Moscou) pèsera sur la stabilité des Balkans et sur les entreprises qui y investissent.",
    "figures": [
      {
        "value": "52,54 %",
        "label": "des voix pour la Liste des étudiants (résultats provisoires)",
        "src": 2
      },
      {
        "value": "135 à 140",
        "label": "sièges sur 250 estimés pour les étudiants par Vučić lui-même",
        "src": 2
      },
      {
        "value": "16",
        "label": "morts à Novi Sad en 2024, point de départ du mouvement",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Euronews",
        "name": "Euronews, « Student List wins Serbian election in political earthquake as Vučić concedes defeat » (25 octobre 2026)",
        "url": "https://www.euronews.com/2026/10/25/vucic-concedes-defeat-in-pivotal-serbian-elections-says-student-movement-has-won"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Serbia after Vucic: Who will be PM and when will a government be formed? » (26 octobre 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/26/serbia-after-vucic-who-will-be-pm-and-when-will-a-government-be-formed"
      },
      {
        "short": "NPR",
        "name": "NPR, « 'The smell of freedom': Serbia's student movement celebrates election triumph » (26 octobre 2026)",
        "url": "https://www.npr.org/2026/10/26/nx-s1-6016298/serbia-student-list-vucic-election"
      }
    ]
  },
  {
    "id": "2026-10-27-bresil-lula-reelu-bourse-s-effondre",
    "date": "2026-10-27",
    "region": "Amériques",
    "theme": "mix",
    "geo": [
      {
        "name": "Brasília, Brésil",
        "label": "Brésil",
        "coords": [
          -47.88,
          -15.79
        ]
      }
    ],
    "title": "Lula réélu pour un quatrième mandat : la Bourse du Brésil s'effondre de près de 14 % en une séance",
    "summary": "Les marchés avaient parié sur la victoire de Flávio Bolsonaro. Lula l'a emporté d'environ 4,4 millions de voix, et la Bourse et la monnaie ont chuté lundi.",
    "points": [
      "Le 25 octobre, Lula a gagné le second tour avec 51,79 % des voix contre 48,21 % pour Flávio Bolsonaro, soit environ 4,4 millions de voix d'avance. Son adversaire refuse de reconnaître le résultat et veut demander son annulation à la justice [1].",
      "Lundi 26 octobre, l'indice Ibovespa, la Bourse de São Paulo, a perdu jusqu'à 17 % en séance avant de clôturer en baisse de 13,9 %, tandis que le real, la monnaie brésilienne, plongeait face au dollar [2][3]. Les sources divergent sur l'ampleur exacte de la chute du real.",
      "Selon Bloomberg, les investisseurs s'étaient massivement placés sur une victoire de Bolsonaro ; ils craignent aussi des dépenses publiques en hausse, alors que le déficit approche 10 % du PIB après les dépenses d'avant-élection [2][4]."
    ],
    "why": [
      "À retenir : ce n'est pas seulement l'élection qui a fait chuter la Bourse, c'est la surprise : le marché avait parié sur l'autre camp [2][4].",
      "Quand une monnaie baisse, les produits importés (carburant, engrais, blé) coûtent plus cher en reais, et les dettes en dollars deviennent plus lourdes. À l'inverse, les exportateurs de soja, de viande ou de minerai y gagnent. Reste à voir si la contestation de Flávio Bolsonaro devant les tribunaux, jugée peu probable d'aboutir vu l'écart, prolonge les turbulences [1]."
    ],
    "forMe": "Le Brésil est un grand fournisseur de soja, de café et de viande. Une monnaie qui chute rend ses produits moins chers à acheter pour l'étranger, et les grands fonds qui ont des actions brésiliennes, y compris dans des placements européens, ont pu perdre de la valeur.",
    "figures": [
      {
        "value": "51,79 %",
        "label": "des voix pour Lula, contre 48,21 % pour Flávio Bolsonaro",
        "src": 1
      },
      {
        "value": "−13,9 %",
        "label": "clôture de l'Ibovespa lundi 26 octobre (jusqu'à −17 % en séance)",
        "src": 3
      },
      {
        "value": "≈ 10 %",
        "label": "du PIB : le déficit public, selon Americas Quarterly",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [
      "dollar"
    ],
    "sources": [
      {
        "short": "CBS News",
        "name": "CBS News, « Lula wins 4th term as Brazil's president, beating Flávio Bolsonaro in runoff, but Bolsonaro rejects results » (26 octobre 2026)",
        "url": "https://www.cbsnews.com/news/brazil-presidential-runoff-lula-flavio-bolsonaro/"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Brazil's real sinks after Lula's re-election victory » (26 octobre 2026)",
        "url": "https://www.aljazeera.com/economy/2026/10/26/brazils-real-sinks-after-lulas-re-election-victory"
      },
      {
        "short": "The Rio Times",
        "name": "The Rio Times, « Latin American Pulse for Monday, October 26, 2026 »",
        "url": "https://www.riotimesonline.com/latin-american-pulse-for-monday-october-26-2026/"
      },
      {
        "short": "Americas Quarterly",
        "name": "Americas Quarterly, « REACTION: Lula Wins Brazil's Presidency in Historic Comeback » (octobre 2026)",
        "url": "https://americasquarterly.org/article/reaction-lula-wins-brazils-presidency-in-historic-comeback/"
      }
    ]
  },
  {
    "id": "2026-10-27-cisjordanie-hebron-familles-deplacees",
    "date": "2026-10-27",
    "region": "Moyen-Orient",
    "theme": "geo",
    "geo": [
      {
        "name": "Hébron, Cisjordanie",
        "label": "Cisjordanie",
        "coords": [
          35.1,
          31.53
        ]
      }
    ],
    "title": "À Hébron, l'armée israélienne déplace des centaines de familles après la mort de deux soldats, à la veille des élections",
    "summary": "Après l'attaque d'un point de contrôle le 23 octobre, l'armée a bouclé la ville et fait partir des familles d'un quartier ; les chiffres vont de 150 familles à 2 000 personnes. Israël vote le 27.",
    "points": [
      "Le 23 octobre, deux soldats israéliens ont été tués à un point de contrôle près d'Hébron, en Cisjordanie ; l'armée a lancé une grande opération dans la ville, d'environ 200 000 habitants [1][2][3].",
      "Le ministre de la Défense Israël Katz parle d'environ 2 000 personnes déplacées samedi soir ; la mairie compte 370 familles, le gouverneur environ 150 et le maire environ 250 [1][2]. Le gouverneur Khaled Dudin dénonce une punition collective et l'état d'urgence a été déclaré dans la province [2].",
      "Des bâtiments proches du lieu de l'attaque ont été démolis, et Benyamin Netanyahou a annoncé que d'autres le seraient. L'opération se déroule à quelques jours d'élections très disputées, que le maire d'Hébron qualifie de manœuvre politique [3]."
    ],
    "why": [
      "À retenir : les chiffres de déplacés varient du simple au décuple selon qui les donne, signe d'une situation encore floue sur le terrain [1][2].",
      "Israël vote le 27 octobre, et les derniers sondages donnent un blocage : ni le camp de Netanyahou ni l'opposition n'atteindraient les 61 sièges de majorité, ce qui rend les petits partis décisifs [4]. Le coût économique d'un conflit qui dure est l'un des grands thèmes de la campagne [4]."
    ],
    "forMe": "Les violences en Cisjordanie et la campagne israélienne entretiennent l'incertitude dans toute la région, et donc le prix du pétrole et des assurances de transport. Le résultat du vote déterminera la suite de la guerre à Gaza et les relations avec l'Iran.",
    "figures": [
      {
        "value": "2",
        "label": "soldats israéliens tués le 23 octobre près d'Hébron",
        "src": 1
      },
      {
        "value": "≈ 2 000",
        "label": "personnes déplacées selon le ministre Katz (150 à 370 familles selon les autres sources)",
        "src": 1
      },
      {
        "value": "61",
        "label": "sièges nécessaires pour une majorité à la Knesset ; aucun camp n'y est en vue dans les sondages",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Times of Israel",
        "name": "The Times of Israel, « IDF op in Hebron after soldiers' killing displaces 2,000, Katz says; PM vows 'big surprise' for PA » (octobre 2026)",
        "url": "https://www.timesofisrael.com/idf-op-in-hebron-after-soldiers-killing-said-to-displace-1500-pm-vows-big-surprise-for-pa/"
      },
      {
        "short": "Euronews",
        "name": "Euronews, « Israel removes around 250 Palestinian families from West Bank city of Hebron after soldier deaths » (24 octobre 2026)",
        "url": "https://www.euronews.com/2026/10/24/israel-removes-around-250-palestinian-families-from-west-bank-city-of-hebron-after-soldier"
      },
      {
        "short": "The New Arab",
        "name": "The New Arab, « Israeli forces displace Palestinian families after troops killed » (octobre 2026)",
        "url": "https://www.newarab.com/news/israeli-forces-displace-palestinian-families-after-troops-killed"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Israeli elections: What are the possible outcomes? » (25 octobre 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/25/israeli-elections-what-are-the-possible-outcomes"
      }
    ]
  },
  {
    "id": "2026-10-27-niger-penurie-carburant-export-interdit",
    "date": "2026-10-27",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Niamey, Niger",
        "label": "Niger",
        "coords": [
          2.11,
          13.51
        ]
      }
    ],
    "title": "Le Niger produit du pétrole mais manque d'essence : Niamey interdit d'en exporter",
    "summary": "Des files d'attente sont apparues dans les stations de la capitale. Un arrêté du 12 octobre interdit d'exporter le diesel et l'essence, sauf autorisation.",
    "points": [
      "Le ministre du Commerce a signé le 12 octobre un arrêté qui interdit l'exportation de diesel et d'essence « premium » ; seules les sociétés publiques SONIDEP et SORAZ peuvent vendre un surplus à l'étranger, avec l'accord du ministre pour chaque cargaison [1][2].",
      "Le 18 octobre, de longues files se sont formées dans les stations de Niamey ; le carburant nigérian de contrebande, moins cher, a presque disparu [3].",
      "Le pays extrait environ 90 000 barils de brut par jour à Agadem, mais sa raffinerie de Zinder n'en traite qu'environ 20 000, trop peu pour la demande nationale ; des dettes croisées entre l'État, les sociétés pétrolières et l'électricien Nigelec compliquent la situation [2][3]."
    ],
    "why": [
      "À retenir : un pays qui a du pétrole peut manquer d'essence s'il n'a pas assez de raffineries pour le transformer [2].",
      "Interdire l'export garde le carburant dans le pays mais n'en crée pas : le problème de fond est le manque de capacité de raffinage et les dettes. Un manque de carburant peut aussi gêner les transports, les mines et l'électricité, et la presse économique le lie aux perturbations venues du conflit avec l'Iran [1][3]."
    ],
    "forMe": "Le Niger est aussi un pays d'uranium. Un pays à court de carburant a du mal à faire rouler ses camions et ses mines, ce qui peut retarder certaines livraisons de minerais [3].",
    "figures": [
      {
        "value": "≈ 90 000",
        "label": "barils de brut extraits par jour à Agadem",
        "src": 2
      },
      {
        "value": "≈ 20 000",
        "label": "barils par jour traités par la raffinerie de Zinder",
        "src": 2
      },
      {
        "value": "12 octobre",
        "label": "date de l'arrêté interdisant l'export de diesel et d'essence",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Nairametrics",
        "name": "Nairametrics, « Niger bans petrol, diesel exports to prioritise domestic fuel supply » (18 octobre 2026)",
        "url": "https://nairametrics.com/2026/10/18/niger-bans-petrol-diesel-exports-to-prioritise-domestic-fuel-supply/"
      },
      {
        "short": "Ecofin Agency",
        "name": "Ecofin Agency, « Niger Restricts Fuel Exports to Ease Domestic Gasoline and Diesel Shortages » (octobre 2026)",
        "url": "https://www.ecofinagency.com/news-industry/1910-59903-niger-restricts-fuel-exports-to-ease-domestic-gasoline-and-diesel-shortages"
      },
      {
        "short": "The Rio Times",
        "name": "The Rio Times, « Niger Fuel Shortage Reaches Niamey, What It Means » (octobre 2026)",
        "url": "https://www.riotimesonline.com/niger-fuel-shortage-niamey-2026/"
      }
    ]
  },
  {
    "id": "2026-10-27-mozambique-etat-vingt-pour-cent-mines",
    "date": "2026-10-27",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Nacala, Mozambique",
        "label": "Mozambique",
        "coords": [
          40.67,
          -14.54
        ]
      }
    ],
    "title": "Le Mozambique veut devenir actionnaire à 20 % de toutes ses grandes mines",
    "summary": "Le président Daniel Chapo a annoncé le 20 octobre qu'une société d'État détiendrait 20 % des projets miniers, au-delà des 15 % déjà prévus par la loi de juin.",
    "points": [
      "Le 20 octobre, à Nacala, le président Daniel Chapo a annoncé qu'une société minière nationale, détenue par l'État, prendrait 20 % des projets miniers, alors que la loi signée le 3 juin prévoit déjà une participation de 15 % [1][2].",
      "Lors de la même conférence, le gouvernement a signé des accords d'intention portant sur 4,2 milliards de dollars de projets de transformation de minerais sur place [2].",
      "Les règles restent floues : on ne sait pas quels projets seront concernés, si les mines existantes sont incluses, ni comment s'articulent les 15 % de la loi et les 20 % annoncés. Une des sources précise que le texte officiel de la loi n'a pas été consulté, il faut donc rester prudent sur les chiffres exacts [3]."
    ],
    "why": [
      "À retenir : le Mozambique veut garder une part plus grande de ses minerais et en transformer une partie chez lui, plutôt que de tout exporter à l'état brut [1][2].",
      "Une participation de 20 % ne donne pas 20 % des recettes : l'État touche une part des bénéfices, mais doit parfois aussi payer sa part des coûts. Pour les groupes miniers, tout dépend des détails du texte, d'où l'attention des investisseurs [3]."
    ],
    "forMe": "Les minerais servent à fabriquer des batteries, des appareils et des pièces industrielles. Si les conditions deviennent plus strictes pour les groupes miniers, certains projets peuvent coûter plus cher ou être retardés, ce qui peut finir par peser sur les prix.",
    "figures": [
      {
        "value": "20 %",
        "label": "part de l'État dans les projets miniers annoncée par le président",
        "src": 1
      },
      {
        "value": "15 %",
        "label": "part déjà prévue par la loi signée le 3 juin",
        "src": 1
      },
      {
        "value": "4,2 Md$",
        "label": "d'accords d'intention sur la transformation de minerais",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Club of Mozambique",
        "name": "Club of Mozambique, « Mozambique: Chapo announces 20% state stake in mining projects through new state-owned company » (octobre 2026)",
        "url": "https://clubofmozambique.com/news/mozambique-chapo-announces-20-state-stake-in-mining-projects-through-new-state-owned-company/"
      },
      {
        "short": "Trade Finance Global",
        "name": "Trade Finance Global, « Mozambique looks to raise state mining stake to 20% and invest $4.2bn in mineral processing deals » (octobre 2026)",
        "url": "https://www.tradefinanceglobal.com/posts/mozambique-looks-to-raise-state-mining-stake-to-20-percent/"
      },
      {
        "short": "The Rio Times",
        "name": "The Rio Times, « Mozambique State Stake in Mining Projects Eyes 20% » (octobre 2026)",
        "url": "https://www.riotimesonline.com/mozambique-state-stake-mining-20-percent-2026/"
      }
    ]
  },
  {
    "id": "2026-10-27-mexique-camionneurs-bloquent-routes",
    "date": "2026-10-27",
    "region": "Amériques",
    "theme": "eco",
    "geo": [
      {
        "name": "Mexico, Mexique",
        "label": "Mexique",
        "coords": [
          -99.13,
          19.43
        ]
      }
    ],
    "title": "Mexique : des routiers et des agriculteurs bloquent les autoroutes « sans limite de durée » pour dénoncer l'insécurité et les péages",
    "summary": "Depuis le 26 octobre, des blocages touchent l'entrée de Mexico, Veracruz et Oaxaca. Les manifestants réclament de la sécurité, la fin du racket et des péages moins lourds.",
    "points": [
      "Depuis lundi 26 octobre, des routiers et des agriculteurs bloquent des routes dans une vingtaine d'États, notamment aux entrées de la capitale et dans les États de Veracruz et d'Oaxaca ; les organisateurs parlent d'une action « sans limite de durée » [1][2].",
      "Ils demandent plus de sécurité contre les vols, enlèvements et extorsions sur les routes, la fin du racket exigé par des groupes criminels, et des péages et taxes qu'ils jugent trop lourds pour des routes dangereuses ; l'autoroute 135D entre Tehuacán et Oaxaca a été complètement fermée [1][2][3].",
      "Le ministère de l'Intérieur dit que la plupart des organisations ont accepté une table de dialogue, mais aucun accord n'avait été annoncé ; la confédération Conatram affirme qu'aucun de ses membres ne participe, et les sources se contredisent sur qui bloque vraiment [1][3]."
    ],
    "why": [
      "À retenir : le blocage vise les routes par lesquelles circulent les marchandises, et les organisateurs le disent sans limite de durée [1][2].",
      "Le mouvement part d'une insécurité très concrète sur les routes, que les transporteurs disent subir tous les jours, plus que d'un mot d'ordre politique. Si le dialogue échoue, le blocage peut durer, comme le promettent les organisateurs [1][2]."
    ],
    "forMe": "Le Mexique fabrique et exporte beaucoup de produits qui circulent par la route. Un blocage long peut retarder des livraisons et renchérir certains produits.",
    "figures": [
      {
        "value": "≈ 20",
        "label": "États mexicains concernés par des blocages ou des rassemblements",
        "src": 1
      },
      {
        "value": "26 octobre",
        "label": "début de l'action, annoncée sans limite de durée",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "The Rio Times",
        "name": "The Rio Times, « Mexico Truckers Strike Hits Roads on 26 Oct » (26 octobre 2026)",
        "url": "https://www.riotimesonline.com/mexico-truckers-strike-roads-26-october-2026/"
      },
      {
        "short": "Mexico News Daily",
        "name": "Mexico News Daily, « Blockades reported in Oaxaca, central Mexico and Veracruz as truckers protest insecurity, steep fees » (octobre 2026)",
        "url": "https://mexiconewsdaily.com/travel/blockades-oaxaca-central-mexico-veracruz-truckers/"
      },
      {
        "short": "The Yucatan Times",
        "name": "The Yucatan Times, « National Transport Strike Sparks Rallies and Highway Protests Across Mexico » (octobre 2026)",
        "url": "https://theyucatantimes.com/2026/10/national-transport-strike-sparks-rallies-and-highway-protests-across-mexico/"
      }
    ]
  },
  {
    "id": "2026-10-27-asean-reseau-electrique-cable-sous-marin-laos",
    "date": "2026-10-27",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Vientiane, Laos",
        "label": "Laos",
        "coords": [
          102.6,
          17.97
        ]
      },
      {
        "name": "Singapour",
        "label": "Singapour",
        "coords": [
          103.82,
          1.35
        ]
      }
    ],
    "title": "Asie du Sud-Est : Singapour veut relier les pays par des câbles électriques sous la mer, avec le Laos au centre",
    "summary": "Pour sa présidence de l'ASEAN en 2027, Singapour veut faire adopter des règles communes pour échanger de l'électricité par câbles sous-marins. Le Laos, riche en barrages, est le maillon central.",
    "points": [
      "Singapour, qui présidera l'ASEAN en 2027, veut faire avancer le « réseau électrique de l'ASEAN », avec un cadre commun pour les câbles électriques sous-marins ; l'objectif est que les pays membres l'adoptent en 2027 [1][2].",
      "Aujourd'hui, l'ASEAN n'a pas de règles uniques pour vendre de l'électricité d'un pays à l'autre, et ceux qui doivent inspecter, entretenir ou réparer ces câbles ne sont pas clairement désignés ; les investisseurs, qui récupèrent leur mise en 20 à 30 ans, demandent de la stabilité [1].",
      "Le Laos est au cœur du projet : la liaison Laos–Thaïlande–Malaisie–Singapour doit passer de 100 à 200 mégawatts [1]. Singapour et le Laos ont aussi signé le 4 septembre un accord sur les crédits carbone, avec 58 méthodes approuvées d'avance, dont 5 % des recettes versées au Laos pour son adaptation au climat [3]. La Thaïlande prendra la présidence en 2028 [4]."
    ],
    "why": [
      "À retenir : Singapour, petite île sans fleuves ni barrages, cherche à acheter de l'électricité propre à ses voisins comme le Laos [1][3].",
      "Pour que cela marche, il faut des règles communes sur les prix, la propriété et la réparation des câbles, et des garanties pour les investisseurs. Les barrages laotiens produisent beaucoup d'électricité, mais le Laos ne peut la vendre que si les lignes et les règles suivent [1][3]."
    ],
    "forMe": "Les centres de données et les usines d'Asie du Sud-Est consomment de plus en plus d'électricité. Le coût de l'énergie dans cette région influence le prix des puces, des téléphones et des produits fabriqués là-bas.",
    "figures": [
      {
        "value": "100 → 200 MW",
        "label": "capacité prévue de la liaison Laos–Thaïlande–Malaisie–Singapour",
        "src": 1
      },
      {
        "value": "2027",
        "label": "année visée pour un cadre commun sur les câbles sous-marins",
        "src": 1
      },
      {
        "value": "58",
        "label": "méthodes de crédits carbone approuvées par l'accord Singapour-Laos",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "The Star",
        "name": "The Star, « Singapore to advance Asean power grid, subsea cable framework during 2027 chairmanship » (25 octobre 2026)",
        "url": "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/10/25/singapore-to-advance-asean-power-grid-subsea-cable-framework-during-2027-chairmanship"
      },
      {
        "short": "The Edge Malaysia",
        "name": "The Edge Malaysia, « Singapore to advance Asean power grid, subsea cable framework during 2027 chairmanship » (octobre 2026)",
        "url": "https://theedgemalaysia.com/node/823171"
      },
      {
        "short": "Carbon Credits",
        "name": "CarbonCredits.com, « Singapore and Laos Build Article 6 Carbon Credit Pipeline With 58 Approved Methodologies » (2026)",
        "url": "https://carboncredits.com/singapore-laos-58-article-6-carbon-credit-methodologies/"
      },
      {
        "short": "Eco-Business",
        "name": "Eco-Business, « Asean Power Grid: Singapore, Thailand launch two-year push to clear hurdles by 2028 » (2026)",
        "url": "https://www.eco-business.com/news/asean-power-grid-singapore-thailand-launch-two-year-push-to-clear-hurdles-by-2028/"
      }
    ]
  },
  {
    "id": "2026-10-27-ebola-rdc-deuxieme-plus-grande-epidemie",
    "date": "2026-10-27",
    "region": "Afrique",
    "theme": "geo",
    "geo": [
      {
        "name": "Bunia, Ituri, RD Congo",
        "label": "RD Congo",
        "coords": [
          30.25,
          1.57
        ]
      }
    ],
    "title": "Ebola en RD Congo : près de 10 000 cas confirmés, la deuxième plus grande épidémie jamais recensée",
    "summary": "Partie de l'Ituri, l'épidémie due au virus Bundibugyo a fait 4 687 morts selon le dernier bilan européen. Des cas sont aussi signalés au Kenya et au Nigeria.",
    "points": [
      "Au 21 octobre, la RD Congo comptait 9 704 cas confirmés d'Ebola, dont 4 687 décès, selon le Centre européen de prévention et de contrôle des maladies (ECDC) ; l'Ituri est la province la plus touchée, avec 7 003 cas et 3 242 décès dans 28 de ses 36 zones de santé [1].",
      "Le CDC américain parlait de 9 235 cas confirmés le 15 octobre et la qualifiait de deuxième plus grande épidémie d'Ebola jamais enregistrée [2]. Elle est due au virus Bundibugyo [1].",
      "Le virus a franchi des frontières : le Kenya compte 9 cas confirmés, tous liés à un premier cas importé, et le Nigeria a signalé un cas le 20 octobre ; quatre cas ont été évacués ou importés en Europe depuis mai. Les chiffres de l'Ouganda sont contestés selon les sources [1]."
    ],
    "why": [
      "À retenir : le bilan officiel s'approche de 10 000 cas confirmés, et l'épidémie n'est pas limitée à une seule région du pays [1][2].",
      "Les épidémies pèsent sur l'économie : écoles et marchés fermés, voyageurs refusés aux frontières, mines et transports ralentis dans une région déjà fragilisée par les conflits. Les deux sources ne s'appuient pas sur la même date de relevé, donc les chiffres exacts peuvent différer [1][2]."
    ],
    "forMe": "Le risque pour la France reste limité, mais les cas évacués vers l'Europe montrent que les pays suivent la situation de près. Pour l'économie, une épidémie longue en RD Congo, premier producteur mondial de cobalt, peut gêner les transports de minerais.",
    "figures": [
      {
        "value": "9 704",
        "label": "cas confirmés en RD Congo au 21 octobre",
        "src": 1
      },
      {
        "value": "4 687",
        "label": "décès liés à l'épidémie au 21 octobre",
        "src": 1
      },
      {
        "value": "7 003",
        "label": "cas confirmés dans la seule province d'Ituri",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "ECDC",
        "name": "ECDC, « Ebola disease: Multi-country outbreak 2026 » (mise à jour du 21 octobre 2026)",
        "url": "https://www.ecdc.europa.eu/en/ebola-disease-multi-country-outbreak-2026"
      },
      {
        "short": "Contagion Live",
        "name": "Contagion Live, « Ebola outbreak in DRC tops 9,235 confirmed cases, CDC reports » (17 octobre 2026)",
        "url": "https://www.contagionlive.com/view/ebola-outbreak-in-drc-tops-9235-confirmed-cases-cdc-reports"
      }
    ]
  },
  {
    "id": "2026-10-26-libye-accord-maritime-turquie-grece",
    "date": "2026-10-26",
    "region": "Afrique",
    "theme": "mix",
    "geo": [
      {
        "name": "Benghazi, Libye",
        "label": "Libye",
        "coords": [
          20.07,
          32.12
        ]
      }
    ],
    "title": "La Libye de l'Est valide un accord maritime avec la Turquie, et la Grèce crie à la nullité",
    "summary": "Le 20 octobre, le Parlement de l'est de la Libye a approuvé à l'unanimité l'accord de 2019 qui trace une frontière maritime entre la Libye et la Turquie. Athènes, Nicosie et Bruxelles protestent.",
    "points": [
      "Le 20 octobre, la Chambre des représentants, le Parlement basé dans l'est de la Libye et proche du maréchal Khalifa Haftar, a approuvé à l'unanimité l'accord signé en novembre 2019 entre la Turquie et l'ancien gouvernement libyen de Tripoli ; elle a aussi annulé deux résolutions de 2020 qui le rejetaient [1][2].",
      "La Grèce juge l'accord nul, car la Turquie et la Libye n'ont pas de côtes qui se font face ou se touchent, et il ignore les îles grecques situées entre les deux ; Chypre parle d'un texte « illégal, nul et non avenu », et la présidente de la Commission européenne, Ursula von der Leyen, dit qu'il viole les droits d'États tiers [1][2][3].",
      "La Turquie salue la décision. Selon la presse spécialisée, l'approbation de Benghazi pourrait ouvrir la voie à des forages turcs de pétrole et de gaz à l'est de la Crète [1][4]."
    ],
    "why": [
      "À retenir : un vote de Parlement libyen peut déplacer une frontière en mer et donc décider qui a le droit de forer pour du gaz en Méditerranée [1][4].",
      "Cet accord n'avait jamais été validé par l'est de la Libye, rival du gouvernement de Tripoli, qui est proche d'Ankara. En le ratifiant, Benghazi se rapproche de la Turquie. La Grèce et l'Égypte, elles, ont signé en 2020 un accord concurrent sur leurs zones économiques en mer, que la Turquie refuse [1]. Chacun trace sa frontière à son avantage, et ce qui se joue, ce sont les futurs gisements."
    ],
    "forMe": "Le gaz de Méditerranée orientale intéresse l'Europe, qui cherche à moins dépendre de la Russie. Si ces eaux deviennent un terrain de conflit juridique, les projets de forage et de gazoducs peuvent être retardés.",
    "figures": [
      {
        "value": "2019",
        "label": "année de signature de l'accord Turquie-Libye, validé seulement maintenant par l'est du pays",
        "src": 1
      },
      {
        "value": "2",
        "label": "résolutions de 2020 qui rejetaient l'accord, annulées le 20 octobre",
        "src": 1
      },
      {
        "value": "Unanimité",
        "label": "vote du Parlement de l'est de la Libye",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Al-Monitor",
        "name": "Al-Monitor, « Eastern Libya parliament approves maritime deal with Turkey, drawing Greek rejection » (octobre 2026)",
        "url": "https://www.al-monitor.com/originals/2026/10/eastern-libya-parliament-approves-maritime-deal-turkey-drawing-greek-rejection"
      },
      {
        "short": "Al-Ahram",
        "name": "Ahram Online, « EU slams Libya approval of Turkey maritime deal, backs Greece and Cyprus » (octobre 2026)",
        "url": "https://english.ahram.org.eg/News/580514.aspx"
      },
      {
        "short": "The National Herald",
        "name": "The National Herald, « Libya approves contentious Turkey deal over Mediterranean waters » (octobre 2026)",
        "url": "https://www.thenationalherald.com/libya-approves-contentious-turkey-deal-over-mediterranean-waters/"
      },
      {
        "short": "Rigzone",
        "name": "Rigzone, « Libyan Deal Paves Way for Broader Turkish Drilling in Mediterranean » (22 octobre 2026)",
        "url": "https://www.rigzone.com/news/wire/libyan_deal_paves_way_for_broader_turkish_drilling_in_mediterranean-22-oct-2026-184902-article/"
      }
    ]
  },
  {
    "id": "2026-10-26-roumanie-gouvernement-niculescu-six-mois-crise",
    "date": "2026-10-26",
    "region": "Europe",
    "theme": "mix",
    "geo": [
      {
        "name": "Bucarest, Roumanie",
        "label": "Roumanie",
        "coords": [
          26.1,
          44.43
        ]
      }
    ],
    "title": "La Roumanie retrouve un gouvernement après six mois de crise, et un gros déficit à régler",
    "summary": "Un diplomate sans parti, Luca Niculescu, est devenu Premier ministre le 20 octobre. Son équipe est minoritaire et doit d'abord s'attaquer au déficit du budget.",
    "points": [
      "Le 20 octobre, le Parlement roumain a investi Luca Niculescu, un diplomate indépendant, comme Premier ministre ; son gouvernement de 18 ministres a prêté serment devant le président Nicușor Dan [1][2].",
      "Le pays n'avait qu'un gouvernement par intérim depuis presque six mois, depuis la chute du Premier ministre Ilie Bolojan par une motion de censure en mai ; Niculescu est le quatrième choix du président, après l'échec de trois autres [1][2].",
      "Le Parti social-démocrate (PSD) détient 11 postes, sept ministres sont indépendants, et le ministère des Finances revient à Alexandru Nazare. Le gouvernement est minoritaire, appuyé pour six mois par plusieurs partis, et le déficit du budget est en tête de ses priorités [1][2]. Côté énergie, le pays vise 90 % de gaz en stock pour l'hiver (87 % aujourd'hui) et pourrait aider la Moldavie voisine en cas de pénurie [3]."
    ],
    "why": [
      "À retenir : la Roumanie, sans gouvernement stable depuis mai, doit maintenant corriger un déficit parmi les plus lourds de l'Union européenne [1][2].",
      "Un pays sans gouvernement ne peut pas voter de budget ni lancer de réformes, ce qui inquiète les prêteurs et les entreprises. Cette fin de crise rassure, mais le soutien au gouvernement n'est promis que pour six mois [2]. L'hiver arrive aussi : l'État prévoit des mesures du 1er novembre au 31 mars et peut épauler la Moldavie en gaz et en électricité [3]."
    ],
    "forMe": "La Roumanie est un partenaire commercial et un pays où de nombreuses entreprises françaises sont implantées. Un budget qui dérape pèse sur sa monnaie et sur l'économie de toute la région.",
    "figures": [
      {
        "value": "≈ 6 mois",
        "label": "de gouvernement par intérim avant l'investiture de Niculescu",
        "src": 1
      },
      {
        "value": "18",
        "label": "ministres dans le nouveau gouvernement (11 postes pour le PSD, 7 pour des indépendants)",
        "src": 1
      },
      {
        "value": "87 %",
        "label": "de remplissage des stockages de gaz, pour un objectif de 90 % avant l'hiver",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Euronews",
        "name": "Euronews, « New Romanian Prime Minister Luca Niculescu and cabinet members sworn in » (21 octobre 2026)",
        "url": "https://www.euronews.com/2026/10/21/new-romanian-prime-minister-luca-niculescu-and-cabinet-members-sworn-in"
      },
      {
        "short": "Il Post",
        "name": "Il Post, « Romania fiducia nuovo governo, fine crisi politica » (20 octobre 2026)",
        "url": "https://www.ilpost.it/2026/10/20/romania-fiducia-nuovo-governo-fine-crisi-politica/"
      },
      {
        "short": "Romania Insider",
        "name": "Romania Insider / Ro Times, « Ministry of Energy plans winter support for Moldova » (23 octobre 2026)",
        "url": "https://rotimes.ro/en/article/2026-10-23-ministry-of-energy-plans-winter-support-for-moldova"
      }
    ]
  },
  {
    "id": "2026-10-26-zimbabwe-lithium-interdiction-export-2027",
    "date": "2026-10-26",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Harare, Zimbabwe",
        "label": "Zimbabwe",
        "coords": [
          31.05,
          -17.83
        ]
      }
    ],
    "title": "Le Zimbabwe refuse de repousser l'interdiction d'exporter son lithium brut",
    "summary": "Harare maintient l'arrêt des exportations de lithium non raffiné pour janvier 2027. Le pays veut que les batteries se fabriquent chez lui, pas seulement que ses mines alimentent la Chine.",
    "points": [
      "Le 9 octobre, le gouvernement du Zimbabwe a déclaré qu'il n'y avait aucune raison de retarder l'interdiction d'exporter du lithium sous forme de concentré, prévue pour janvier 2027 ; le ministre de l'Information Nick Mangwana estime que les mineurs ont eu assez de temps pour se préparer à le traiter sur place [1].",
      "Depuis février 2026, le pays a déjà suspendu toutes ses exportations de minerais bruts et de concentrés de lithium, officiellement pour contrôler des pratiques frauduleuses à l'exportation [2].",
      "Les exportations de minerais vendues par l'organisme public de commercialisation ont plus que doublé sur les neuf premiers mois de 2026, à 4,73 milliards de dollars [3]."
    ],
    "why": [
      "À retenir : le Zimbabwe, l'un des grands producteurs africains de lithium, veut garder sur son sol la partie qui rapporte le plus [1][4].",
      "Le concentré de lithium est une roche enrichie, vendue à bas prix à des usines étrangères qui en tirent le produit utilisé dans les batteries. En interdisant son export, Harare force les entreprises à bâtir des raffineries chez lui. Le risque : si elles ne sont pas prêtes en janvier, les ventes peuvent s'arrêter et les mines ralentir [1][4]."
    ],
    "forMe": "Le lithium sert aux batteries des voitures électriques et des téléphones. Quand un pays producteur durcit ses règles, l'offre mondiale peut se resserrer et rendre les batteries plus chères à moyen terme.",
    "figures": [
      {
        "value": "Janv. 2027",
        "label": "date de l'interdiction d'exporter du lithium sous forme de concentré",
        "src": 1
      },
      {
        "value": "4,73 Md$",
        "label": "de ventes de minerais à l'export sur les neuf premiers mois de 2026",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "SMM",
        "name": "SMM Lithium News, « Zimbabwe: No Reason to Delay Lithium Concentrates Export Ban » (octobre 2026)",
        "url": "https://news.metal.com/newscontent/104149017-smm-lithium-news-zimbabwe-no-reason-to-delay-lithium-concentrates-export-ban"
      },
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Zimbabwe imposes ban on exports of all raw minerals and lithium concentrate » (25 février 2026)",
        "url": "https://www.aljazeera.com/news/2026/2/25/zimbabwe-imposes-ban-on-exports-of-all-raw-minerals-and-lithium-concentrate"
      },
      {
        "short": "The Financial Gazette",
        "name": "The Financial Gazette, « Mineral exports fly after raw ban » (15 octobre 2026)",
        "url": "https://fingaz.co.zw/2026/10/15/mineral-exports-fly-after-raw-ban/"
      },
      {
        "short": "Further Africa",
        "name": "Further Africa, « Zimbabwe lithium export ban locks in 2027 » (13 octobre 2026)",
        "url": "https://furtherafrica.com/2026/10/13/zimbabwe-lithium-export-ban-locks-in-2027/"
      }
    ]
  },
  {
    "id": "2026-10-26-chili-lithium-appels-offres-prives",
    "date": "2026-10-26",
    "region": "Amériques",
    "theme": "eco",
    "geo": [
      {
        "name": "Santiago, Chili",
        "label": "Chili",
        "coords": [
          -70.65,
          -33.45
        ]
      }
    ],
    "title": "Le Chili veut plus que doubler son lithium en misant sur les entreprises privées",
    "summary": "Le ministre chilien des Mines annonce cinq nouveaux appels d'offres pour des projets de lithium en 2027. L'objectif : passer d'environ 300 000 à 700 000 tonnes par an.",
    "points": [
      "Lors de la semaine du marché des métaux de Londres (LME Week), le ministre chilien des Mines, Daniel Mas, a annoncé que le Chili prévoit d'ouvrir des appels d'offres pour environ cinq nouveaux projets de lithium en 2027 [1].",
      "Ces projets pourraient faire passer la production du pays d'environ 300 000 tonnes par an à 700 000 tonnes dans cinq à dix ans ; cinq projets en attente d'autorisation seront exploités entièrement par le privé, et l'État espère les approuver début 2027 [1].",
      "Le Chili, l'Argentine, la Bolivie et le Pérou cherchent aussi à négocier leur lithium et leur cuivre en bloc plutôt que chacun de son côté ; le texte signé fin août à Santiago ne crée pas encore d'alliance [2]."
    ],
    "why": [
      "À retenir : le Chili, déjà géant du lithium, veut plus que doubler sa production en laissant plus de place aux entreprises privées [1].",
      "Le lithium est le métal des batteries. Le pays dépend beaucoup de son cuivre, et le lithium est son second pari. Plus d'appels d'offres, c'est plus de concurrence entre acheteurs, mais aussi plus de pression sur l'eau des salars, ces déserts de sel d'où l'on pompe la saumure [1]. Réunir quatre voisins en bloc permettrait de peser sur les prix, mais ils sont aussi concurrents [2]."
    ],
    "forMe": "Si la production de lithium double, le prix des batteries de voitures électriques peut baisser à terme. Mais cela dépend d'abord des autorisations, qui restent à obtenir.",
    "figures": [
      {
        "value": "5",
        "label": "nouveaux projets de lithium à mettre en appel d'offres en 2027",
        "src": 1
      },
      {
        "value": "300 000 → 700 000 t",
        "label": "production annuelle visée dans cinq à dix ans",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Mining Weekly",
        "name": "Mining Weekly (Reuters), « Chile plans five new lithium tenders in push to double output » (21 octobre 2026)",
        "url": "https://www.miningweekly.com/article/chile-plans-five-new-lithium-tenders-in-push-to-double-output-2026-10-21"
      },
      {
        "short": "La Razón",
        "name": "La Razón, « Chile, Argentina, Bolivia y Perú buscan negociar como bloque su litio y su cobre » (21 octobre 2026)",
        "url": "https://www.larazon.cl/2026/10/21/chile-argentina-bolivia-y-peru-buscan-negociar-como-bloque-su-litio-y-su-cobre/"
      }
    ]
  },
  {
    "id": "2026-10-26-pacifique-japon-micronesie-australie-papouasie",
    "date": "2026-10-26",
    "region": "Asie",
    "theme": "geo",
    "geo": [
      {
        "name": "Palikir, Micronésie",
        "label": "Micronésie",
        "coords": [
          158.16,
          6.92
        ]
      },
      {
        "name": "Port Moresby, Papouasie-Nouvelle-Guinée",
        "label": "Papouasie-N.-Guinée",
        "coords": [
          147.18,
          -9.44
        ]
      }
    ],
    "title": "Pacifique : le Japon reçoit la Micronésie pendant que l'Australie s'installe en Papouasie",
    "summary": "Le 26 octobre, Tokyo a reçu le président micronésien, et Canberra a dit appliquer déjà son traité de défense avec la Papouasie-Nouvelle-Guinée. Les grandes puissances se disputent l'influence dans le Pacifique.",
    "points": [
      "Le 26 octobre à Tokyo, le Premier ministre japonais et le président des États fédérés de Micronésie ont réaffirmé l'unité du Pacifique et décidé de préparer le prochain sommet Japon-îles du Pacifique (PALM 11), prévu à Yokohama l'été prochain [1].",
      "Le même jour, l'Australie a affirmé appliquer déjà le traité de défense mutuelle Pukpuk signé avec la Papouasie-Nouvelle-Guinée : formation de policiers, aide au système judiciaire et recrutement de Papouasiens dans l'armée australienne [1].",
      "Ces annonces tombent alors qu'un chercheur français alerte sur l'activité chinoise en Micronésie, en Polynésie française, en Nouvelle-Calédonie et à Guam, tout en jugeant le risque militaire faible [2]."
    ],
    "why": [
      "À retenir : de minuscules États du Pacifique, riches de leurs immenses zones de pêche, sont courtisés par le Japon, l'Australie et la Chine [1][2].",
      "Ces pays ont peu d'habitants mais contrôlent de très vastes zones maritimes, avec leurs poissons et leurs câbles sous-marins. Celui qui y a des amis y gagne des voix dans les votes internationaux et des ports amis pour ses navires [1][2]."
    ],
    "forMe": "Ce qui se joue dans le Pacifique concerne la pêche (le thon) et les câbles par lesquels passent nos données. La rivalité entre grandes puissances pèse sur les routes commerciales de l'Asie.",
    "figures": [
      {
        "value": "PALM 11",
        "label": "prochain sommet Japon-îles du Pacifique, à Yokohama l'été prochain",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Islands Business",
        "name": "Islands Business, « PACNEWS Two, 26 October 2026 »",
        "url": "https://islandsbusiness.com/pacnews/pacnews-two-26-october-2026"
      },
      {
        "short": "Modern Diplomacy",
        "name": "Modern Diplomacy, « Can APEC's New Economic Coordination Plan Shield Asia-Pacific From Global Risks? » (21 octobre 2026)",
        "url": "https://moderndiplomacy.eu/2026/10/21/can-apecs-new-economic-coordination-plan-shield-asia-pacific-from-global-risks/"
      }
    ]
  },
  {
    "id": "2026-10-26-etats-unis-interdit-deepseek-administrations",
    "date": "2026-10-26",
    "region": "Amériques",
    "theme": "mix",
    "geo": [
      {
        "name": "Washington, États-Unis",
        "label": "États-Unis",
        "coords": [
          -77.04,
          38.91
        ]
      }
    ],
    "title": "Washington interdit DeepSeek, l'IA chinoise, dans toutes ses administrations civiles",
    "summary": "Le département de la Sécurité intérieure a ordonné aux agences fédérales civiles de retirer les produits DeepSeek et d'arrêter d'en acheter, par crainte d'envois de données vers la Chine.",
    "points": [
      "Le département américain de la Sécurité intérieure (DHS) a ordonné aux agences civiles fédérales de retirer DeepSeek de leurs systèmes et de ne plus en acheter, ainsi que les outils d'autres entreprises qui l'intègrent ; l'ordre est fondé sur une loi de 2018 sur la sécurité des chaînes d'approvisionnement [1][2][3].",
      "Le DHS invoque le risque que des employés ou prestataires envoient des données sensibles en Chine, et cite des logiciels malveillants et des failles dans l'application DeepSeek sur iPhone [1][3].",
      "L'ordre ne touche ni les entreprises privées ni les particuliers ; selon un média, l'armée et les services de renseignement en sont exemptés, et des dérogations peuvent être demandées sous 60 jours [1]. Les sources divergent sur la date de signature, fin juillet, l'ordre ayant été rendu public ces derniers jours [1][3]."
    ],
    "why": [
      "À retenir : les États-Unis ferment l'accès de leur administration à une IA chinoise qui s'était fait connaître en rivalisant avec les modèles américains [1][2].",
      "Les logiciels d'IA lisent ce qu'on leur écrit. Si le texte part vers des serveurs d'un pays rival, des secrets peuvent fuir. Washington applique ici à l'IA la méthode déjà utilisée pour les équipements de télécommunications chinois [1][3]. Le Commerce, New York, le Tennessee et la Virginie avaient déjà posé des interdictions plus étroites [1]."
    ],
    "forMe": "Ces règles ne s'appliquent pas à toi, mais elles montrent que l'IA devient un terrain de rivalité entre la Chine et les États-Unis, comme l'ont été les puces. Cela peut limiter les produits d'IA que les entreprises ont le droit d'utiliser.",
    "figures": [
      {
        "value": "60 jours",
        "label": "délai pour demander une dérogation à l'interdiction",
        "src": 1
      },
      {
        "value": "2018",
        "label": "année de la loi sur la sécurité des chaînes d'approvisionnement qui sert de base à l'ordre",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Cybernews",
        "name": "Cybernews, « US bans DeepSeek AI products from federal agencies »",
        "url": "https://cybernews.com/tech/us-bans-deepseek-from-federal-agencies/"
      },
      {
        "short": "The Standard (AFP)",
        "name": "The Standard HK, « US bans use of China's DeepSeek by govt agencies »",
        "url": "https://www.thestandard.com.hk/china/article/345932/US-bans-use-of-Chinas-DeepSeek-by-govt-agencies"
      },
      {
        "short": "ProPakistani",
        "name": "ProPakistani, « US bans DeepSeek across federal civilian agencies over security risks » (21 octobre 2026)",
        "url": "https://propakistani.pk/2026/10/21/us-bans-deepseek-across-federal-civilian-agencies-over-security-risks/"
      }
    ]
  },
  {
    "id": "2026-10-26-liban-israel-tampa-negociations-hezbollah",
    "date": "2026-10-26",
    "region": "Moyen-Orient",
    "theme": "geo",
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
    "title": "Liban et Israël négocient à Tampa : un cessez-le-feu d'un côté, le désarmement du Hezbollah de l'autre",
    "summary": "Des délégations libanaise et israélienne se sont retrouvées aux États-Unis le 20 octobre. Beyrouth veut que les frappes cessent, Israël veut voir l'armée libanaise désarmer le Hezbollah.",
    "points": [
      "Une délégation militaire libanaise devait défendre le 20 octobre à Tampa, en Floride, une demande d'arrêt des attaques israéliennes, lors d'une réunion à trois avec les États-Unis ; une source américaine parle d'une rencontre « technique » les 20 et 21 octobre [1][2].",
      "Beyrouth veut un engagement de cessez-le-feu et un meilleur mécanisme de vérification, lié à une zone pilote où l'armée libanaise se déploierait [1].",
      "Dans le cadre défini par les États-Unis, le Liban doit désarmer le Hezbollah et Israël se retirer progressivement ; le Hezbollah refuse de désarmer tant que l'armée israélienne reste, et Israël continue de frapper le sud du Liban [1]. Les sources consultées ne donnaient pas encore les résultats de la rencontre."
    ],
    "why": [
      "À retenir : chacun veut que l'autre bouge en premier, et la rencontre de Tampa ne dit pas qui cédera [1].",
      "Le Premier ministre israélien Benjamin Netanyahu aurait dit qu'Israël pousserait l'armée libanaise à prouver, dans deux zones pilotes, qu'elle sait écarter la menace du Hezbollah, faute de quoi Israël agirait lui-même [1]. Sans accord, les frappes continuent, et le pays, déjà en crise, ne peut pas reconstruire ni attirer d'investisseurs."
    ],
    "forMe": "Le Liban est un pays francophone proche de la France. Sa stabilité compte pour les prix de l'énergie en Méditerranée et pour les réfugiés qui peuvent arriver en Europe.",
    "figures": [
      {
        "value": "2",
        "label": "zones pilotes où l'armée libanaise devrait prouver qu'elle contrôle le Hezbollah, selon Netanyahu",
        "src": 1
      },
      {
        "value": "20-21 oct.",
        "label": "dates des discussions à Tampa, selon une source américaine",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Times of Israel (Reuters)",
        "name": "Times of Israel, « Lebanon says military delegation will press for halt to Israeli attacks at US talks » (17 octobre 2026)",
        "url": "https://www.timesofisrael.com/liveblog_entry/lebanon-says-military-delegation-will-press-for-halt-to-israeli-attacks-at-us-talks/"
      },
      {
        "short": "La Nazione",
        "name": "La Nazione, « Media, colloqui a livello tecnico » (octobre 2026)",
        "url": "https://www.lanazione.it/ultimaora/media-colloqui-a-livello-tecnico-ed3da4d1"
      }
    ]
  },
  {
    "id": "2026-10-25-georgie-proces-interdire-opposition",
    "date": "2026-10-25",
    "region": "Europe",
    "theme": "geo",
    "geo": [
      {
        "name": "Batumi, Géorgie",
        "label": "Géorgie",
        "coords": [
          41.64,
          41.65
        ]
      }
    ],
    "title": "En Géorgie, le parti au pouvoir demande à la justice d’interdire cinq partis d’opposition",
    "summary": "La Cour constitutionnelle géorgienne a tenu à Batumi trois jours d’audience sur une demande d’interdire les cinq principaux partis d’opposition. Elle a jusqu’à juin 2027 pour trancher, sans appel possible.",
    "points": [
      "Du 21 au 23 octobre, la Cour constitutionnelle a examiné à Batumi la demande de 88 députés du parti au pouvoir, Rêve géorgien, qui veulent faire interdire cinq formations d’opposition : le Mouvement national uni, Coalition pour le changement, Géorgie forte–Lelo, les Fédéralistes et Gakharia pour la Géorgie [1][2].",
      "Les députés accusent ces partis d’avoir violé l’article 23 de la Constitution, qui interdit les partis cherchant à renverser ou à changer par la force l’ordre constitutionnel ; quatre partis se défendent devant la cour, un cinquième boycotte la procédure [2].",
      "La cour, qui ne compte que 7 juges en poste sur 9, doit rendre sa décision d’ici juin 2027 ; elle sera définitive et sans appel en Géorgie [2]. L’opposition parle d’une manœuvre pour écarter ses principaux concurrents avant les prochaines élections [1][2]."
    ],
    "why": [
      "À retenir : si la cour suit le pouvoir, la Géorgie, candidate à l’Union européenne, se retrouverait sans ses principaux partis d’opposition [1][2].",
      "Le pays est aussi un maillon du « couloir du milieu » qui relie l’Asie centrale à l’Europe sans passer par la Russie : le jour même, les ministres des Affaires étrangères de cinq pays d’Asie centrale étaient à Batumi pour parler de transport et de transit vers la mer Noire [3][4]. Un pays qui veut attirer ces routes et ces investissements est observé de près par ses partenaires."
    ],
    "forMe": "Pour toi, pas d’effet direct à court terme. Mais la décision pèsera sur les relations entre la Géorgie et l’Union européenne, et donc sur les routes commerciales qui passent par le Caucase.",
    "figures": [
      {
        "value": "88",
        "label": "députés du parti au pouvoir qui demandent l’interdiction",
        "src": 2
      },
      {
        "value": "5",
        "label": "partis d’opposition visés",
        "src": 1
      },
      {
        "value": "juin 2027",
        "label": "date limite pour la décision de la cour, sans appel possible",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Reuters",
        "name": "Reuters, « Georgian court begins hearing lawsuit seeking ban on major opposition parties » (21 octobre 2026)",
        "url": "https://www.internazionale.it/ultime-notizie-reuters/2026/10/21/georgian-court-begins-hearing-lawsuit-seeking-ban-on-major-opposition-parties"
      },
      {
        "short": "Arab News",
        "name": "Arab News, « Georgia’s top court hears lawsuit to ban main opposition parties in latest crackdown on dissent » (octobre 2026)",
        "url": "https://www.arabnews.pk/world/georgias-top-court-hears-lawsuit-to-ban-main-opposition-parties-in-latest-crackdown-on-dissent-3004877"
      },
      {
        "short": "Georgia Today",
        "name": "Georgia Today, « Batumi to host meeting of Central Asian foreign ministers »",
        "url": "https://georgiatoday.ge/batumi-to-host-meeting-of-central-asian-foreign-ministers"
      },
      {
        "short": "OC Media",
        "name": "OC Media, « Friday, 23 October 2026 »",
        "url": "https://oc-media.org/friday-23-october-2026/"
      }
    ]
  },
  {
    "id": "2026-10-25-albanie-flamants-roses-lagune",
    "date": "2026-10-25",
    "region": "Europe",
    "theme": "mix",
    "geo": [
      {
        "name": "Tirana, Albanie",
        "label": "Albanie",
        "coords": [
          19.82,
          41.33
        ]
      }
    ],
    "title": "Albanie : cinq mois de manifestations pour sauver une lagune et ses flamants roses",
    "summary": "Depuis le 23 mai, des Albanais manifestent contre un méga-projet touristique près de la lagune de Narta. Le 24 octobre, la police a de nouveau affronté les manifestants à Tirana.",
    "points": [
      "Le mouvement, surnommé la « révolution des flamants roses », est né le 23 mai dans le village de Zvërnec, près de la lagune de Narta, contre des projets de complexes de luxe auxquels l’investisseur américain Jared Kushner est associé [2][3].",
      "La plus grande manifestation, le 20 juin, aurait rassemblé plus de 250 000 personnes selon les médias albanais [3].",
      "Le 24 octobre, la police a utilisé des canons à eau et des gaz lacrymogènes contre des manifestants qui réclament la démission du Premier ministre Edi Rama [1]."
    ],
    "why": [
      "À retenir : un projet d’investissement étranger est devenu en Albanie la plus longue contestation de la rue de ces dernières années [1][2].",
      "Le Premier ministre présente ces projets comme une chance d’attirer des investisseurs et de faire du pays une destination de tourisme haut de gamme ; ses opposants y voient des terres protégées offertes à des investisseurs riches sans vrai débat public. La zone abrite des espèces menacées comme le phoque moine et plus de 200 espèces d’oiseaux, et la structure anticorruption albanaise (SPAK) enquête sur les contrats de vente des terrains [2][3]."
    ],
    "forMe": "Si tu pars en vacances sur la côte albanaise, la région de Vlora est directement concernée par ces projets de tourisme de luxe.",
    "figures": [
      {
        "value": "23 mai",
        "label": "début du mouvement, à Zvërnec",
        "src": 2
      },
      {
        "value": "250 000+",
        "label": "manifestants le 20 juin, selon les médias albanais",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "ANSA",
        "name": "ANSA, « Clashes broke out in Tirana between police and protesters » (24 octobre 2026)",
        "url": "https://ansa.it/nuova_europa/en/news/countries/albania/2026/10/24/clashes-broke-out-in-tirana-between-police-and-protesters_3d80ad2f-6ccc-466e-a18f-e19f4acb2613.html"
      },
      {
        "short": "Wanted in Rome",
        "name": "Wanted in Rome, « Thousands rally across Albania in “Flamingo Revolution” against the Kushner resort project »",
        "url": "https://www.wantedinrome.com/news/hundreds-of-thousands-rally-across-albania-in-flamingo-revolution-against-kushner-resort-project.html"
      },
      {
        "short": "Rosa-Luxemburg-Stiftung",
        "name": "Rosa-Luxemburg-Stiftung, « Understanding Albania’s Flamingo Revolution »",
        "url": "https://www.rosalux.de/en/news/id/54893/understanding-albanias-flamingo-revolution"
      }
    ]
  },
  {
    "id": "2026-10-25-somalie-inondations-874000-deplaces",
    "date": "2026-10-25",
    "region": "Afrique",
    "theme": "mix",
    "geo": [
      {
        "name": "Beledweyne, Somalie",
        "label": "Somalie",
        "coords": [
          45.2,
          4.74
        ]
      }
    ],
    "title": "Somalie : jusqu’à 874 000 personnes pourraient fuir des inondations, et l’aide manque",
    "summary": "L’agence de l’ONU pour les migrations craint que près de 874 000 Somaliens soient déplacés d’ici la fin de l’année, surtout par des crues liées à El Niño. Elle n’a réuni que 14 % des fonds nécessaires.",
    "points": [
      "L’OIM et le Conseil danois pour les réfugiés estiment que 874 319 personnes pourraient être déplacées entre octobre et décembre, dont 92 % à cause des inondations [1].",
      "Les zones les plus menacées sont Beledweyne, avec près de 229 000 personnes à risque, et Galkayo, avec environ 82 000 [1][2].",
      "L’OIM n’a obtenu que 14 % des 16,62 millions de dollars dont elle a besoin pour se préparer aux crues liées à El Niño ; son responsable en Somalie prévient que la fenêtre pour réduire l’impact se referme [1]."
    ],
    "why": [
      "À retenir : on sait où l’eau va frapper, mais l’argent pour s’y préparer n’est pas là [1].",
      "Une crue qui chasse des familles de leurs champs et de leurs villes détruit aussi les récoltes, le bétail et les routes. Cela fait monter les prix de la nourriture et pousse davantage de gens à dépendre de l’aide."
    ],
    "forMe": "Pas d’effet direct pour toi. Mais les chocs climatiques en Afrique de l’Est pèsent sur les prix alimentaires et sur les migrations dans la région.",
    "figures": [
      {
        "value": "874 319",
        "label": "personnes qui pourraient être déplacées d’octobre à décembre",
        "src": 1
      },
      {
        "value": "14 %",
        "label": "part des 16,62 millions de dollars nécessaires déjà obtenue par l’OIM",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Anadolu",
        "name": "Anadolu, « UN agency warns nearly 874,000 could be displaced by floods in Somalia » (21 octobre 2026)",
        "url": "https://www.anews.com.tr/world/2026/10/21/un-agency-warns-nearly-874000-could-be-displaced-by-floods-in-somalia/amp"
      },
      {
        "short": "Arab News",
        "name": "Arab News, « 800,000 Somalis threatened by flooding displacement: UN »",
        "url": "https://www.arabnews.pk/world/800000-somalis-threatened-by-flooding-displacement-un-3004894"
      }
    ]
  },
  {
    "id": "2026-10-25-thailande-cambodge-frontiere-maritime",
    "date": "2026-10-25",
    "region": "Asie",
    "theme": "geo",
    "geo": [
      {
        "name": "Golfe de Thaïlande",
        "label": "Thaïlande",
        "coords": [
          101.2,
          10.8
        ]
      }
    ],
    "title": "Thaïlande et Cambodge : un médiateur de l’ONU tente de tracer leur frontière en mer",
    "summary": "À La Haye, les deux pays ont accepté de ne plus s’accuser en public pendant la médiation sur leur frontière maritime. La troisième réunion est prévue du 24 au 27 novembre à Kuala Lumpur.",
    "points": [
      "Le Cambodge a lancé en juin une procédure de conciliation prévue par la Convention des Nations unies sur le droit de la mer, après que la Thaïlande a annulé un accord de 2001 sur la frontière maritime et l’exploitation commune des ressources de la zone disputée [1].",
      "À la deuxième réunion, du 14 au 18 octobre à La Haye, les deux pays ont convenu de mesures de confiance, dont le droit de répondre aux informations jugées fausses [1].",
      "Le ministre thaïlandais des Affaires étrangères, Sihasak Phuangketkeow, veut que le processus reste limité au tracé de la frontière ; la commission a rappelé que certains engagements pris n’ont pas été pleinement tenus [1][2]."
    ],
    "why": [
      "À retenir : deux voisins qui ont connu des tensions ont choisi une médiation internationale plutôt que la confrontation [1][2].",
      "Une frontière en mer décide qui peut forer, pêcher et poser des câbles dans la zone. Tant qu’elle n’est pas tracée, les ressources du fond marin restent bloquées. La prochaine étape est la réunion de novembre à Kuala Lumpur [1][3]."
    ],
    "forMe": "Pas d’effet direct pour toi, mais c’est un exemple de règlement d’un différend sans passer par la force.",
    "figures": [
      {
        "value": "14-18 oct.",
        "label": "deuxième réunion de la commission, à La Haye",
        "src": 1
      },
      {
        "value": "24-27 nov.",
        "label": "troisième réunion prévue, à Kuala Lumpur",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Asia News Network",
        "name": "Asia News Network, « Cambodia, Thailand agree on UNCLOS “confidence-building measures” »",
        "url": "https://asianews.network/?p=309084"
      },
      {
        "short": "Khaosod English",
        "name": "Khaosod English, « Thailand insists sea boundary talks with Cambodia must stay within UNCLOS scope » (18 octobre 2026)",
        "url": "https://www.khaosodenglish.com/politics/2026/10/18/thailand-insists-sea-boundary-talks-with-cambodia-must-stay-within-unclos-scope/"
      },
      {
        "short": "Malay Mail",
        "name": "Malay Mail, « Second Cambodia-Thailand conciliation meeting set for Oct 14-18 in The Hague » (10 octobre 2026)",
        "url": "https://malaymail.com/news/world/2026/10/10/second-cambodia-thailand-conciliation-meeting-set-for-oct-14-18-in-the-hague/238526"
      }
    ]
  },
  {
    "id": "2026-10-25-zambie-minerais-contre-sante-washington",
    "date": "2026-10-25",
    "region": "Afrique",
    "theme": "geo",
    "geo": [
      {
        "name": "Lusaka, Zambie",
        "label": "Zambie",
        "coords": [
          28.28,
          -15.39
        ]
      }
    ],
    "title": "Zambie : Lusaka refuse de payer sa santé avec ses minerais et négocie à part avec Washington",
    "summary": "La Zambie a signé un accord de santé avec les États-Unis puis séparé de ce texte la négociation sur ses minerais critiques, qui se poursuit.",
    "points": [
      "À la cérémonie de signature de l’accord de santé, qui apporte 1,5 milliard de dollars de financement américain, le ministre zambien des Affaires étrangères, Mulambo Haimbe, a déclaré que les textes sur la santé et sur les minerais critiques « devaient être dissociés, et cela a été fait » [1][2].",
      "L’accord sur les minerais est encore en cours de négociation ; le ministre n’a pas donné de détails [1][2].",
      "En mai, la Zambie avait accusé Washington de conditionner l’accès à ses minerais à la conclusion de l’accord de santé, ce que l’ambassadeur américain de l’époque avait qualifié de faux [1][3]."
    ],
    "why": [
      "À retenir : le pays du cuivre refuse que son sous-sol serve de monnaie d’échange pour une aide sanitaire [1][3].",
      "La Zambie est un grand producteur de cuivre, un métal clé pour les câbles, les batteries et les moteurs électriques. Les États-Unis cherchent à sécuriser ce type de ressources face à la Chine. Cette actu date du 8 octobre ; nous la signalons ici car la négociation reste ouverte."
    ],
    "forMe": "Le cuivre sert à fabriquer presque tous les appareils électriques : ce qui se décide en Zambie peut influencer, à long terme, leur prix.",
    "figures": [
      {
        "value": "1,5 milliard $",
        "label": "financement américain prévu par l’accord de santé",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Mining Weekly (Reuters)",
        "name": "Mining Weekly (Reuters), « Zambia says it is negotiating US minerals deal after decoupling from health pact » (8 octobre 2026)",
        "url": "https://www.miningweekly.com/article/zambia-says-it-is-negotiating-us-minerals-deal-after-decoupling-from-health-pact-2026-10-08-1"
      },
      {
        "short": "Kitco (Reuters)",
        "name": "Kitco (Reuters), « Zambia says it is negotiating US minerals deal after “decoupling” from health pact » (8 octobre 2026)",
        "url": "https://www.kitco.com/news/off-the-wire/2026-10-08/zambia-says-it-negotiating-us-minerals-deal-after-decoupling-health"
      },
      {
        "short": "ADN",
        "name": "ADN, « Zambia blasts the US over a health deal in exchange for critical minerals » (5 mai 2026)",
        "url": "https://www.adn.com/nation-world/2026/05/05/zambia-blasts-the-us-over-a-2-billion-health-deal-in-exchange-for-critical-minerals/"
      }
    ]
  },
  {
    "id": "2026-10-25-bresil-second-tour-taxe-essence",
    "date": "2026-10-25",
    "region": "Amériques",
    "theme": "mix",
    "geo": [
      {
        "name": "Brasília, Brésil",
        "label": "Brésil",
        "coords": [
          -47.93,
          -15.78
        ]
      }
    ],
    "title": "Brésil : le jour du second tour, l’essence est sans taxe fédérale",
    "summary": "Avant le second tour de dimanche, Lula a supprimé pour 30 jours la taxe fédérale sur l’essence. Le pays vote pour choisir entre Lula et Flávio Bolsonaro.",
    "points": [
      "Le gouvernement a supprimé pendant 30 jours, avec prolongation possible, la taxe fédérale sur l’essence de 0,89 real par litre ; il a aussi prolongé l’exonération sur l’éthanol et augmenté ses aides [1][2].",
      "Les importateurs de diesel reçoivent 1,40 real de plus par litre pendant 30 jours [1][3]. La présidence dit que le coût sera compensé par des « recettes extraordinaires » tirées des exportations de pétrole [1].",
      "Les prix des carburants ont grimpé depuis que la guerre avec l’Iran a commencé fin février [1]. Flávio Bolsonaro accuse Lula d’« irresponsabilité » et prévient que le diesel pourrait monter après l’élection [1]."
    ],
    "why": [
      "À retenir : un pays producteur de pétrole utilise ses recettes pétrolières pour faire baisser le prix à la pompe juste avant de voter [1].",
      "Quand le pétrole monte, les gouvernements sont tentés de baisser les taxes pour protéger le pouvoir d’achat. Cela coûte cher à l’État, et les prix peuvent remonter quand la mesure s’arrête."
    ],
    "forMe": "Le Brésil est un grand fournisseur de soja, de café et de pétrole : l’élection influencera les prix de ce que tu achètes.",
    "figures": [
      {
        "value": "0,89 real",
        "label": "taxe fédérale par litre d’essence supprimée pendant 30 jours",
        "src": 1
      },
      {
        "value": "1,40 real",
        "label": "aide supplémentaire par litre de diesel importé, pendant 30 jours",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "Arab News",
        "name": "Arab News, « Brazil’s Lula scraps gasoline tax ahead of runoff election » (octobre 2026)",
        "url": "https://www.arabnews.pk/world/brazils-lula-scraps-gasoline-tax-ahead-of-runoff-election-3003773"
      },
      {
        "short": "Qatar Tribune",
        "name": "Qatar Tribune, « Brazil expands fuel subsidies before presidential vote »",
        "url": "https://www.qatar-tribune.com/article/258630/business/brazil-expands-fuel-subsidies-before-presidential-vote"
      },
      {
        "short": "Arise News",
        "name": "Arise News, « Brazil cuts fuel taxes ahead of Lula’s presidential runoff »",
        "url": "https://www.arise.tv/brazil-cuts-fuel-taxes-ahead-of-lulas-presidential-runoff/"
      }
    ]
  },
  {
    "id": "2026-10-25-petrole-116-dollars-hormuz-deux-versions",
    "date": "2026-10-25",
    "region": "Moyen-Orient",
    "theme": "geo",
    "geo": [
      {
        "name": "Détroit d’Ormuz",
        "label": "Ormuz",
        "coords": [
          56.5,
          26.5
        ]
      }
    ],
    "title": "Pétrole à 116 dollars : Washington dit que le Golfe exporte plus qu’avant la guerre, les relevés de navires disent le contraire",
    "summary": "Le baril de Brent a clôturé vendredi autour de 116,7 dollars. Le Trésor américain affirme que les exportations du Golfe dépassent leur niveau d’avant-guerre, mais un suivi des navires compte quatre passages en un jour à Ormuz.",
    "points": [
      "Le Brent a terminé vendredi autour de 116,7 à 116,9 dollars, en hausse d’environ 3 % ; depuis le début de l’année, il a pris environ 80 % [2][3][1].",
      "Le secrétaire au Trésor américain, Scott Bessent, affirme que les exportations de pétrole du Golfe ont dépassé leur niveau d’avant-guerre, autour de 17 à 18 millions de barils par jour, en comptant les routes par Ormuz, le golfe d’Oman et la mer Rouge [3]. Le 20 octobre, le secrétaire à l’Énergie Chris Wright parlait d’environ 80 % du niveau d’avant-guerre [1].",
      "Un site de suivi n’a relevé que 4 passages de navires commerciaux à Ormuz le 18 octobre, contre environ 85 par jour avant la crise ; les Gardiens de la Révolution disent que deux superpétroliers ont heurté des mines, sans confirmation indépendante [2]."
    ],
    "why": [
      "À retenir : les chiffres officiels et les relevés de navires ne racontent pas la même histoire, et le prix du pétrole reste très haut [2][3].",
      "Au moins 18 navires ont été attaqués en deux semaines selon la société Kpler, ce qui maintient une prime de risque dans les prix [1]. Les chiffres du gouvernement américain mélangent plusieurs routes, alors que le suivi ne compte que les passages à Ormuz : les deux peuvent être vrais en même temps, mais pas comparables."
    ],
    "forMe": "Un pétrole cher fait monter le prix de l’essence, du diesel et, à terme, de nombreux produits transportés par camion ou par bateau.",
    "figures": [
      {
        "value": "~116,7 $",
        "label": "prix du baril de Brent à la clôture de vendredi",
        "src": 3
      },
      {
        "value": "+80 %",
        "label": "hausse du Brent depuis le début de l’année",
        "src": 1
      },
      {
        "value": "4 / 85",
        "label": "passages à Ormuz le 18 octobre, contre environ 85 par jour avant la crise",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Energy Connects",
        "name": "Energy Connects, « Oil wavers near five-month high as Iran threats vie with flows » (octobre 2026)",
        "url": "https://www.energyconnects.com/news/oil/2026/october/oil-wavers-near-five-month-high-as-iran-threats-vie-with-flows/"
      },
      {
        "short": "Straits Daily Brief",
        "name": "Straits Daily Brief, « Strait of Hormuz News, October 24, 2026 »",
        "url": "https://straits.live/briefs/2026-10-24"
      },
      {
        "short": "Fox News",
        "name": "Fox News, « Netanyahu calls for US and Israel to overthrow Iran as Brent crude hits five-month high » (23 octobre 2026)",
        "url": "https://www.foxnews.com/live-news/us-iran-war-israel-netanyahu-oil-prices-10-23-26"
      }
    ]
  },
  {
    "id": "2026-10-25-inde-jio-record-introduction-en-bourse",
    "date": "2026-10-25",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Mumbai, Inde",
        "label": "Inde",
        "coords": [
          72.88,
          19.08
        ]
      }
    ],
    "title": "Inde : l’introduction en Bourse de Jio bat le record du pays",
    "summary": "Jio Platforms, le géant des télécoms du milliardaire Mukesh Ambani, lève 30 213 crores de roupies, la plus grosse introduction en Bourse de l’histoire de l’Inde. Sa cotation est attendue le 28 octobre.",
    "points": [
      "L’opération, d’un montant de 30 213 crores de roupies, dépasse le précédent record, celui de Hyundai Motor India en 2024 avec 27 800 crores ; la fourchette de prix est de 1 065 à 1 119 roupies l’action [1].",
      "Selon l’AFP, les 197,5 premiers millions d’actions ont été demandés en 100 minutes ; Bloomberg, cité par la Börsen-Zeitung, parle de demandes dépassant 20 milliards de dollars [2][3].",
      "L’attribution des actions est attendue le 26 octobre et la cotation à Bourse le 28 octobre, des dates indicatives [1][3]."
    ],
    "why": [
      "À retenir : l’Inde dispose désormais d’un marché capable d’avaler la plus grosse introduction de son histoire, malgré les doutes sur la valorisation [1][2].",
      "Une introduction en Bourse permet à une entreprise de vendre des parts au public pour financer sa croissance. Le succès de celle-ci sert de test de l’appétit des investisseurs pour l’Inde, alors que le pétrole cher pèse sur beaucoup de pays émergents [2]."
    ],
    "forMe": "Pas d’effet direct pour toi, sauf si tu possèdes des fonds qui investissent en Inde ; mais c’est un signal sur la confiance des investisseurs dans les pays émergents.",
    "figures": [
      {
        "value": "30 213 crores",
        "label": "montant de l’opération, en roupies : un record indien",
        "src": 1
      },
      {
        "value": "100 min",
        "label": "temps pour demander les 197,5 premiers millions d’actions",
        "src": 2
      },
      {
        "value": "20 Md$",
        "label": "demandes selon Bloomberg, citées par la Börsen-Zeitung",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Chittorgarh",
        "name": "Chittorgarh, « Jio Platforms IPO Details »",
        "url": "https://www.chittorgarh.com/ipo/jio-platforms-ipo/"
      },
      {
        "short": "Techniques de l’Ingénieur (AFP)",
        "name": "AFP, « Inde : succès de la souscription pour Jio avant introduction en Bourse »",
        "url": "https://www.techniques-ingenieur.fr/actualite/breves-afp/inde-succes-de-la-souscription-pour-jio-avant-introduction-en-bourse-165158/"
      },
      {
        "short": "Börsen-Zeitung",
        "name": "Börsen-Zeitung, « IPO von Jio Platforms stellt Indiens Kapitalmarkt auf die Probe »",
        "url": "https://www.boersen-zeitung.de/unternehmen-branchen/ipo-von-jio-platforms-stellt-indiens-kapitalmarkt-auf-die-probe"
      }
    ]
  },
  {
    "id": "2026-10-24-france-taux-5-pourcent-premiere-fois-depuis-2002",
    "date": "2026-10-24",
    "region": "Europe",
    "theme": "eco",
    "geo": [
      {
        "name": "Paris, France",
        "label": "France",
        "coords": [
          2.35,
          48.86
        ]
      }
    ],
    "title": "La France emprunte à plus de 5 % pour la première fois depuis 2002",
    "summary": "Le taux auquel l'État français emprunte sur dix ans a franchi les 5 %, un niveau qu'on n'avait plus vu depuis vingt-quatre ans. L'écart avec l'Allemagne est le plus large depuis 2011.",
    "points": [
      "Le 22 octobre, le taux des obligations françaises à dix ans a dépassé 5 % pour la première fois depuis 2002, au niveau de celui des États-Unis, autour de 5,1 % [1][2].",
      "L'écart avec l'Allemagne, le meilleur élève de la zone euro, a dépassé 160 points de base, son plus haut depuis novembre 2011 ; le 23 octobre, la France empruntait à environ 5,05 % contre 3,33 % pour l'Allemagne, soit un écart de 1,72 point [1][3].",
      "Cette tension arrive avant la décision de la Banque centrale européenne : elle a relevé ses taux deux fois cette année, à 2,5 %, et l'inflation de la zone euro a atteint 3,8 % en septembre. Les syndicats appellent à une grande mobilisation le 5 novembre [4]."
    ],
    "why": [
      "La première phrase à retenir : prêter à la France coûte désormais aussi cher que prêter aux États-Unis, ce qui pèse sur le budget de l'État pour des années [1].",
      "Quand les investisseurs réclament plus d'intérêts pour prêter à un pays, c'est qu'ils craignent pour ses finances ou sa stabilité politique. Les sources citent l'inquiétude sur le budget et sur l'agitation sociale [2][4]. Plus la dette coûte cher, plus l'État doit payer d'intérêts, et moins il lui reste pour les écoles, les hôpitaux ou les routes."
    ],
    "forMe": "Les taux de l'État servent de référence aux banques : si la France emprunte plus cher, les crédits immobiliers et ceux des entreprises ont tendance à suivre.",
    "figures": [
      {
        "value": "5 %",
        "label": "seuil franchi par le taux français à dix ans, une première depuis 2002",
        "src": 1
      },
      {
        "value": "1,72 point",
        "label": "écart entre le taux français (5,05 %) et allemand (3,33 %) au 23 octobre",
        "src": 3
      },
      {
        "value": "3,8 %",
        "label": "inflation de la zone euro en septembre",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [
      "inflation-taux"
    ],
    "sources": [
      {
        "short": "FXStreet",
        "name": "FXStreet, « France's 10-year yield moves above 5.10% level » (22 octobre 2026)",
        "url": "https://www.fxstreet.com/analysis/frances-10-year-yield-moves-above-510-level-202610220948"
      },
      {
        "short": "Yahoo Finance",
        "name": "Yahoo Finance, « Euro zone bond yields rise as French borrowing costs hit 24-year high » (2026)",
        "url": "https://finance.yahoo.com/markets/world-indices/articles/french-bonds-lead-euro-zone-092141406.html"
      },
      {
        "short": "Ideal Investisseur",
        "name": "Ideal Investisseur, « OAT / Bund spread today » (23 octobre 2026)",
        "url": "https://www.ideal-investisseur.fr/en/markets/oat-bund-spread.html"
      },
      {
        "short": "Euronews",
        "name": "Euronews, « France's bond drama takes centre stage ahead of ECB rate decision » (23 octobre 2026)",
        "url": "https://www.euronews.com/2026/10/23/frances-bond-drama-takes-centre-stage-ahead-of-ecb-rate-decision"
      }
    ]
  },
  {
    "id": "2026-10-24-bresil-chine-moitie-petrole-ormuz",
    "date": "2026-10-24",
    "region": "Amériques",
    "theme": "mix",
    "geo": [
      {
        "name": "Brasília, Brésil",
        "label": "Brésil",
        "coords": [
          -47.93,
          -15.78
        ]
      }
    ],
    "title": "Quand Ormuz s'est fermé, la Chine a acheté la moitié du pétrole brésilien",
    "summary": "Privée d'une partie du pétrole du Golfe par la guerre en Iran, la Chine s'est tournée vers le Brésil : ses achats de brut brésilien ont atteint un record, tout comme les échanges entre les deux pays.",
    "points": [
      "D'après les données du Conseil d'affaires Brésil-Chine pour janvier-septembre, la Chine a pris la moitié de tout le brut exporté par le Brésil, près de sept fois la part de l'Inde, deuxième acheteur [1][2].",
      "Les ventes de pétrole brésilien à la Chine ont bondi de 49 % pour atteindre 21,8 milliards de dollars : 27 % de volume en plus et des prix en hausse de 16,8 % [1].",
      "Les échanges entre les deux pays ont atteint un record de 143 milliards de dollars en neuf mois (142 selon d'autres médias qui citent les mêmes données). La hausse ralentit depuis que les pétroliers du Golfe naviguent de nouveau [1][2][3]."
    ],
    "why": [
      "La première phrase à retenir : la fermeture d'un détroit au Moyen-Orient a enrichi un pays d'Amérique du Sud, parce que les acheteurs ont cherché du pétrole ailleurs [1].",
      "L'avenir reste ouvert : si l'Iran attaque de nouveau les navires dans le détroit, la Chine pourrait de nouveau se tourner vers le Brésil [3]. Le pays est aussi en pleine campagne : le second tour de la présidentielle a lieu dimanche 25 octobre [4]."
    ],
    "forMe": "Le pétrole que la Chine n'achète plus au Golfe, d'autres le paient plus cher. Les routes du pétrole se redessinent et cela finit par se voir sur le prix du plein.",
    "figures": [
      {
        "value": "50 %",
        "label": "part du brut brésilien acheté par la Chine (janvier-septembre)",
        "src": 1
      },
      {
        "value": "21,8 Md$",
        "label": "ventes de pétrole brésilien à la Chine, en hausse de 49 %",
        "src": 1
      },
      {
        "value": "143 Md$",
        "label": "échanges Brésil-Chine en neuf mois, un record",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "SCMP",
        "name": "South China Morning Post, « China bought half of Brazil's oil exports as Iran war shut Hormuz, driving sales to record » (2026)",
        "url": "https://scmp.com/news/china/article/3371064/china-bought-half-brazils-oil-exports-iran-war-shut-hormuz-driving-sales-record"
      },
      {
        "short": "The Star",
        "name": "The Star, « China bought half of Brazil's oil exports as Iran war shut Hormuz, driving sales to record » (23 octobre 2026)",
        "url": "https://thestar.com.my/aseanplus/aseanplus-news/2026/10/23/china-bought-half-of-brazils-oil-exports-as-iran-war-shut-hormuz-driving-sales-to-record"
      },
      {
        "short": "ChinaPulse",
        "name": "ChinaPulse, « Brazil Logs Record Oil Sales to China After Strait of Hormuz Crisis » (17 octobre 2026)",
        "url": "https://www.chinapulse.com/data-news/2026/10/17/brazil-logs-record-oil-sales-to-china-after-strait-of-hormuz-crisis/"
      },
      {
        "short": "Gulf News",
        "name": "Gulf News, « 'Never again Bolsonaro': thousands march ahead of Brazil election runoff » (2026)",
        "url": "https://gulfnews.com/world/americas/never-again-bolsonaro-thousands-march-ahead-of-brazil-election-runoff-1.500702397"
      }
    ]
  },
  {
    "id": "2026-10-24-fidji-drones-de-mer-australie",
    "date": "2026-10-24",
    "region": "Asie",
    "theme": "geo",
    "geo": [
      {
        "name": "Suva, Fidji",
        "label": "Fidji",
        "coords": [
          178.44,
          -18.14
        ]
      }
    ],
    "title": "L'Australie offre des drones de mer à Fidji pour surveiller son océan",
    "summary": "Canberra va donner à l'armée fidjienne des bateaux sans équipage qui restent des mois en mer. Objectif affiché : traquer les trafics de drogue dans le Pacifique.",
    "points": [
      "L'Australie va offrir à l'armée de Fidji des drones de surface « Bluebottle », dans le cadre du partenariat Waqa Moana, un effort mené par le Pacifique contre le crime organisé et le trafic de drogue [1][2].",
      "Ces navires sans équipage fonctionnent aux énergies renouvelables et peuvent rester plus de 180 jours en mer ; ils doivent arriver à Fidji début 2027 [1][2].",
      "L'annonce a été répétée à Suva le 23 octobre par le haut-commissaire d'Australie, Peter Roberts, aux côtés du ministre fidjien de la Défense, Pio Tikoduadua [3]. En 2025, la marine néo-zélandaise avait déjà fait patrouiller deux Bluebottle dans les eaux fidjiennes pendant trois mois [4]."
    ],
    "why": [
      "La première phrase à retenir : un petit archipel obtient des yeux sur un océan immense grâce à des bateaux sans équipage, offerts par un voisin [1].",
      "Les pays du Pacifique ont de très grandes zones maritimes mais peu de moyens pour les surveiller. Les drones offerts par l'Australie renforcent aussi son influence dans une région où les grandes puissances se disputent les alliances [2]."
    ],
    "forMe": "Les routes de la drogue et du commerce passent aussi par le Pacifique ; les surveiller coûte cher, et ces drones montrent comment les pays s'y prennent désormais.",
    "figures": [
      {
        "value": "180 jours",
        "label": "durée possible d'une mission en mer, sans équipage",
        "src": 1
      },
      {
        "value": "début 2027",
        "label": "arrivée prévue des drones à Fidji",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "The Star",
        "name": "The Star, « Fiji to deploy solar-powered Australian military drones at sea » (16 octobre 2026)",
        "url": "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/10/16/fiji-to-deploy-solar-powered-australian-military-drones-at-sea"
      },
      {
        "short": "PINA",
        "name": "Pacific Islands News Association, « Australian sea drones to combat Pacific drug crime » (16 octobre 2026)",
        "url": "https://pina.com.fj/2026/10/16/australian-sea-drones-to-combat-pacific-drug-crime/"
      },
      {
        "short": "Islands Business",
        "name": "Islands Business, « PACNEWS THREE, 23 OCTOBER 2026 »",
        "url": "https://islandsbusiness.com/pacnews/pacnews-three-23-october-2026/"
      },
      {
        "short": "NZDF",
        "name": "Force de défense néo-zélandaise, « Navy trio work alongside Fiji in piloting uncrewed vessels »",
        "url": "https://www.nzdf.mil.nz/navy/navy-news/navy-trio-work-alongside-fiji-in-piloting-uncrewed-vessels/"
      }
    ]
  },
  {
    "id": "2026-10-24-jordanie-fusillade-eglise-karak",
    "date": "2026-10-24",
    "region": "Moyen-Orient",
    "theme": "geo",
    "geo": [
      {
        "name": "Karak, Jordanie",
        "label": "Jordanie",
        "coords": [
          35.7,
          31.18
        ]
      }
    ],
    "title": "Jordanie : des hommes armés ouvrent le feu dans une église du sud, au moins sept morts",
    "summary": "Une fusillade a frappé une église du gouvernorat de Karak pendant des funérailles. Le bilan est d'au moins sept morts et 34 blessés.",
    "points": [
      "Le 23 octobre, des hommes armés ont ouvert le feu dans une église du gouvernorat de Karak, dans le sud de la Jordanie, pendant des funérailles : au moins sept personnes sont mortes et 34 ont été blessées [1].",
      "L'Arabie saoudite a condamné une attaque « lâche » contre l'église [2].",
      "Les sources consultées ne disent pas encore qui est derrière l'attaque ni pourquoi [1][2]."
    ],
    "why": [
      "La première phrase à retenir : un pays qui passe pour un îlot de calme dans une région en guerre vient d'être frappé sur son sol [1].",
      "Pour l'économie jordanienne, la sécurité compte : plus un pays semble sûr, plus les touristes et les investisseurs viennent. Les enquêteurs n'ont pas encore dit qui était responsable, il est donc trop tôt pour mesurer les conséquences [1][2]."
    ],
    "forMe": "Si tu prépares un voyage au Moyen-Orient, consulte les conseils aux voyageurs du ministère des Affaires étrangères avant de réserver.",
    "figures": [
      {
        "value": "7 morts",
        "label": "au moins, selon le dernier bilan connu",
        "src": 1
      },
      {
        "value": "34",
        "label": "blessés",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « At least seven killed after gunmen open fire at church in Jordan » (23 octobre 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/23/at-least-seven-killed-after-gunmen-open-fire-at-church-in-jordan"
      },
      {
        "short": "Arab News",
        "name": "Arab News, « Saudi Arabia condemns cowardly Jordan church attack amid international outcry »",
        "url": "https://arabnews.com/saudi-arabia/saudi-arabia-condemns-cowardly-jordan-church-attack-amid-international-outcry-3007957"
      }
    ]
  },
  {
    "id": "2026-10-24-ukraine-starshield-satellites-propres",
    "date": "2026-10-24",
    "region": "Europe",
    "theme": "mix",
    "geo": [
      {
        "name": "Kyiv, Ukraine",
        "label": "Ukraine",
        "coords": [
          30.52,
          50.45
        ]
      }
    ],
    "title": "Ukraine : après la coupure de Starshield, Kyiv veut son propre réseau de satellites",
    "summary": "Depuis la restriction du réseau militaire américain Starshield, l'armée ukrainienne se sait dépendante d'un outil qu'elle ne contrôle pas. Kyiv prépare un système indépendant.",
    "points": [
      "Starshield, la version militaire de Starlink, est partagée avec l'Ukraine par le Pentagone depuis 2024, ce qui lui a coûté des milliards de dollars [1][2].",
      "Mi-octobre, la connexion a été restreinte pour les systèmes qui vont au-dessus d'une certaine vitesse, ce qui a touché les drones et la défense antiaérienne autour de Kyiv. Une source du ministère ukrainien de la Défense dit qu'elle est rétablie, mais Volodymyr Zelensky affirme qu'elle ne l'est pas entièrement [2][3].",
      "Volodymyr Zelensky accuse Washington, Elon Musk répond que Starshield appartient au gouvernement américain, et Donald Trump nie être intervenu. Des sénateurs demandent une enquête de l'inspecteur général du Pentagone. Le 23 octobre, l'Ukraine a annoncé préparer un système satellitaire indépendant [1][2][3]."
    ],
    "why": [
      "La première phrase à retenir : l'Ukraine a découvert qu'une partie de sa défense dépend d'un réseau dont d'autres tiennent l'interrupteur [3].",
      "Plus un pays dépend d'une technologie étrangère pour se défendre, plus ses alliés peuvent peser sur lui. C'est ce qui pousse Kyiv à vouloir ses propres satellites, comme d'autres pays cherchent à produire eux-mêmes leurs puces ou leur énergie [1][3]."
    ],
    "forMe": "Les satellites guident aussi ton téléphone, tes paiements et les avions. Qui les contrôle a un pouvoir énorme, et l'Europe réfléchit elle aussi à ne plus dépendre d'un seul fournisseur.",
    "figures": [
      {
        "value": "2024",
        "label": "année où le Pentagone a commencé à partager Starshield avec l'Ukraine",
        "src": 2
      },
      {
        "value": "des milliards",
        "label": "de dollars coûtés au Pentagone depuis, selon NPR",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Ukraine plans independent satellite system as Starlink issues persist » (23 octobre 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/23/ukraine-plans-independent-satellite-system-as-starlink-issues-persist"
      },
      {
        "short": "NPR / OPB",
        "name": "NPR via OPB, « Ukraine and the U.S. are at odds over Starshield. Here's what to know » (18 octobre 2026)",
        "url": "https://www.opb.org/article/2026/10/18/ukraine-and-the-u-s-are-at-odds-over-starshield-here-s-what-to-know/"
      },
      {
        "short": "Al Jazeera (Starshield)",
        "name": "Al Jazeera, « What is Starshield, and who limited Ukraine's access to it? » (15 octobre 2026)",
        "url": "https://www.aljazeera.com/news/2026/10/15/what-is-starshield-and-who-limited-ukraines-access-to-it"
      }
    ]
  },
  {
    "id": "2026-10-24-coree-du-sud-propose-pourparlers-frontiere",
    "date": "2026-10-24",
    "region": "Asie",
    "theme": "geo",
    "geo": [
      {
        "name": "Séoul, Corée du Sud",
        "label": "Corée du Sud",
        "coords": [
          126.98,
          37.57
        ]
      }
    ],
    "title": "Séoul propose à Pyongyang de tracer enfin la frontière et de rétablir les lignes directes",
    "summary": "Après l'explosion d'une mine nord-coréenne côté sud de la frontière, Séoul propose des pourparlers militaires. Un précédent appel est resté sans réponse.",
    "points": [
      "Le 23 octobre, le ministère sud-coréen de la Défense a proposé officiellement des pourparlers militaires pour vérifier ensemble l'emplacement exact de la ligne de démarcation, rétablir les lignes de communication militaires et éviter les accrochages accidentels [1][2].",
      "Séoul cite une explosion du 21 septembre, où un militaire sud-coréen a été gravement blessé par une mine nord-coréenne posée au sud de la ligne ; Pyongyang dément [1][3].",
      "Les discussions pourraient se tenir à Panmunjom, éventuellement avec le Commandement de l'ONU. Séoul avait déjà fait une offre semblable en novembre 2025, restée sans réponse ; aucune réponse du Nord n'était connue au moment de la rédaction [1][3]."
    ],
    "why": [
      "La première phrase à retenir : sur l'une des frontières les plus armées du monde, il n'y a même pas d'accord sur l'emplacement exact de la ligne [1].",
      "Sans lignes directes entre les armées, un incident minime peut devenir un affrontement. La presse locale doute que le Nord accepte [2][3]."
    ],
    "forMe": "Une tension durable dans la péninsule coréenne inquiète les marchés et les entreprises installées en Corée du Sud ; c'est pourquoi chaque tentative de dialogue compte.",
    "figures": [
      {
        "value": "21 sept.",
        "label": "explosion de mine qui a déclenché la proposition",
        "src": 1
      },
      {
        "value": "nov. 2025",
        "label": "date de l'offre précédente, restée sans réponse",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Malay Mail",
        "name": "Malay Mail, « South Korea proposes military talks with North to ease border tensions after DMZ blast » (23 octobre 2026)",
        "url": "https://www.malaymail.com/news/world/2026/10/23/south-korea-proposes-military-talks-with-north-to-ease-border-tensions-after-dmz-blast/240305"
      },
      {
        "short": "Seoul Economic Daily",
        "name": "Seoul Economic Daily, « Seoul Proposes Military Talks With North Korea on Border Line, Hotlines » (23 octobre 2026)",
        "url": "https://en.sedaily.com/politics/2026/10/23/seoul-proposes-military-talks-with-north-korea-on-border"
      },
      {
        "short": "JoongAng",
        "name": "Korea JoongAng Daily, « South Korea proposes military talks with North Korea over disputed border line »",
        "url": "https://www.koreajoongangdaily.com/korea/seoul-proposes-talks-with-pyongyang-over-disputed-mdl-but-response-unlikely/12935843"
      }
    ]
  },
  {
    "id": "2026-10-24-etats-unis-budget-defense-1500-milliards",
    "date": "2026-10-24",
    "region": "Amériques",
    "theme": "mix",
    "geo": [
      {
        "name": "Washington, États-Unis",
        "label": "États-Unis",
        "coords": [
          -77.04,
          38.91
        ]
      }
    ],
    "title": "Le Pentagone demande 1 500 milliards de dollars pour rattraper la Chine dans les drones et l'IA",
    "summary": "Le ministre américain de la Défense, Pete Hegseth, défend cette demande comme un « investissement d'une génération » pour rattraper la Chine dans les drones, la robotique et l'intelligence artificielle.",
    "points": [
      "Devant l'association de l'armée de terre américaine, Pete Hegseth a présenté la demande d'environ 1 500 milliards de dollars comme « critique » pour ne pas prendre de retard sur la Chine en autonomie, robotique et intelligence artificielle [1][2].",
      "Le détail publié par un site spécialisé : 756 milliards pour de nouvelles capacités, 100 milliards pour l'aviation, 18 milliards pour le bouclier antimissile « Golden Dome » et 10 milliards pour les navires. Le Pentagone prévoit aussi un commandement de la guerre autonome d'ici octobre 2027 [1][3].",
      "Le budget doit encore être voté par le Congrès. Un sondage cité par une association estime que près de 60 % des Américains le jugent trop grand [4]."
    ],
    "why": [
      "La première phrase à retenir : Washington demande une somme gigantesque pour ses armées, et la Chine est désignée comme la raison [1].",
      "Un tel budget peut tirer vers le haut les commandes d'armes, de drones et de puces, et pousse les autres pays à dépenser davantage. Des experts critiquent toutefois un budget décidé par le montant plutôt que par une stratégie [3]."
    ],
    "forMe": "Quand Washington dépense plus pour ses armées, ses alliés en Europe sont poussés à suivre, et ces dépenses se paient avec les impôts ou la dette.",
    "figures": [
      {
        "value": "1 500 Md$",
        "label": "budget de défense demandé par le Pentagone",
        "src": 1
      },
      {
        "value": "18 Md$",
        "label": "prévus pour le bouclier antimissile Golden Dome",
        "src": 3
      },
      {
        "value": "~60 %",
        "label": "des Américains qui jugent le budget trop grand, selon un sondage cité par Common Dreams",
        "src": 4
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "SCMP",
        "name": "South China Morning Post, « Hegseth calls US$1.5 trillion defence budget 'critical' to counter China » (2026)",
        "url": "https://scmp.com/news/us/politics/article/3370924/hegseth-calls-us15-trillion-defence-budget-critical-to-counter-china"
      },
      {
        "short": "The Star",
        "name": "The Star, « Hegseth calls US$1.5 trillion defence budget 'critical' to counter China » (23 octobre 2026)",
        "url": "https://thestar.com.my/aseanplus/aseanplus-news/2026/10/23/hegseth-calls-us15-trillion-defence-budget-critical-to-counter-china"
      },
      {
        "short": "Defence Blog",
        "name": "Defence Blog, « Hegseth calls $1.5T defense budget a 'generational down payment' »",
        "url": "https://defence-blog.com/hegseth-calls-1-5t-defense-budget-a-generational-down-payment/"
      },
      {
        "short": "Common Dreams",
        "name": "Common Dreams, « Hegseth Pentagon budget video »",
        "url": "https://www.commondreams.org/news/hegseth-pentagon-budget-video"
      }
    ]
  },
  {
    "id": "2026-10-24-kenya-dangote-oleoduc-raffinerie-lamu",
    "date": "2026-10-24",
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
    "title": "Dangote s'offre un quart de l'oléoduc du Kenya, avant sa raffinerie géante",
    "summary": "L'homme le plus riche d'Afrique achète près de 25 % de Kenya Pipeline Company pour 327 millions de dollars, quelques semaines après le lancement de sa raffinerie à Lamu.",
    "points": [
      "Aliko Dangote a annoncé le 21 octobre à Londres qu'il prenait environ 25 % (24,76 % selon un journal kényan) de Kenya Pipeline Company pour 42,5 milliards de shillings, soit 327,4 millions de dollars [1][2].",
      "Les actions viennent d'investisseurs liés à l'État, dont le fonds de sécurité sociale NSSF et des caisses de retraite ; Dangote n'a pas dit laquelle de ses sociétés les achète [1][2].",
      "L'entreprise, 100 % publique, a vendu 65 % de son capital en Bourse plus tôt cette année. Les travaux de la raffinerie de 16 milliards de dollars de Lamu ont commencé le 30 septembre : 700 000 barils par jour et 1 000 mégawatts d'électricité [2][3][4]."
    ],
    "why": [
      "La première phrase à retenir : Dangote veut contrôler à la fois le raffinage et le transport du pétrole en Afrique de l'Est [1][2].",
      "Le Kenya privatise peu à peu un bien stratégique. Le projet de Lamu doit à terme produire du carburant sur place [3][4]. Dangote pourrait obtenir une place au conseil de l'oléoduc et un mot à dire sur ses investissements [2]."
    ],
    "forMe": "Si l'Afrique raffine elle-même son pétrole, elle achète moins de carburant importé : cela peut réduire la pression sur les prix mondiaux.",
    "figures": [
      {
        "value": "24,76 %",
        "label": "part de Kenya Pipeline achetée par Dangote",
        "src": 2
      },
      {
        "value": "327 M$",
        "label": "prix de la participation",
        "src": 1
      },
      {
        "value": "16 Md$",
        "label": "coût de la raffinerie de Lamu",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Africanews",
        "name": "Africanews, « Nigeria's Dangote group buys stake in Kenya's oil pipeline network » (21 octobre 2026)",
        "url": "https://www.africanews.com/2026/10/21/nigerias-dangote-group-buys-stake-in-kenyas-oil-pipeline-network/"
      },
      {
        "short": "Nation",
        "name": "Nation, « Dangote widens energy bet with 24.76pc KPC stake »",
        "url": "https://nation.africa/kenya/business/dangote-widens-energy-bet-with-24-76pc-kpc-stake-5640832"
      },
      {
        "short": "Nairametrics",
        "name": "Nairametrics, « Dangote acquires 25% stake in Kenya Pipeline Company for $327 million » (21 octobre 2026)",
        "url": "https://nairametrics.com/2026/10/21/dangote-acquires-25-stake-in-kenya-pipeline-company-for-327-million/"
      },
      {
        "short": "The Kenya Times",
        "name": "The Kenya Times, « Ruto Lamu address at the Dangote refinery groundbreaking » (30 septembre 2026)",
        "url": "https://thekenyatimes.com/latest-kenya-times-news/ruto-lamu-address-at-the-dangote-refinery-groundbreaking/"
      }
    ]
  },
  {
    "id": "2026-10-24-nigeria-ebola-premier-cas-abuja",
    "date": "2026-10-24",
    "region": "Afrique",
    "theme": "mix",
    "geo": [
      {
        "name": "Abuja, Nigeria",
        "label": "Nigeria",
        "coords": [
          7.49,
          9.08
        ]
      }
    ],
    "title": "Ebola arrive à Abuja : le Nigeria confirme son premier cas et suit 44 contacts",
    "summary": "Une femme venue d'Ouganda a été testée positive à Abuja. L'épidémie, partie du Congo en mai, touche désormais l'ouest de l'Afrique.",
    "points": [
      "Le 20 octobre, le Nigeria a confirmé à Abuja son premier cas de l'épidémie : une femme arrivée d'Ouganda, dont les symptômes ont commencé le 7 octobre et qui est isolée depuis son admission dans une clinique privée le 11 octobre [1][2].",
      "Le ministre de la Santé, Muhammad Pate, dit suivre 44 personnes qui ont été en contact avec elle. L'Ouganda répond n'avoir aucun cas actif confirmé et que la femme n'y a fait que passer en venant du Congo ; le lieu de contamination reste à établir [1][2].",
      "Le virus en cause est la souche Bundibugyo, déclarée au Congo en mai. Le Kenya a signalé neuf cas, l'Africa CDC réunit un sommet extraordinaire le 28 octobre, et l'OMS parle d'une épidémie « complexe » [1][3][4]."
    ],
    "why": [
      "La première phrase à retenir : le virus a franchi une nouvelle frontière et atteint désormais la capitale d'un pays d'Afrique de l'Ouest [2].",
      "Quand une épidémie s'étend, les contrôles dans les aéroports et les alertes de voyage peuvent freiner les déplacements et le commerce de la région. L'OMS conseille à tous les pays voisins de rester prêts [3][4]."
    ],
    "forMe": "Le risque pour la France reste faible à ce stade, mais les voyageurs doivent suivre les recommandations officielles et signaler tout symptôme au retour d'une zone touchée.",
    "figures": [
      {
        "value": "44",
        "label": "contacts du premier cas suivis par les autorités nigérianes",
        "src": 1
      },
      {
        "value": "9",
        "label": "cas signalés au Kenya",
        "src": 1
      },
      {
        "value": "28 oct.",
        "label": "sommet extraordinaire de l'Africa CDC",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "AP via NY1",
        "name": "Associated Press via NY1, « Nigeria records first Ebola case, health authorities say » (20 octobre 2026)",
        "url": "https://ny1.com/nyc/all-boroughs/ap-top-news/2026/10/20/nigeria-records-first-ebola-case-health-authorities-say"
      },
      {
        "short": "Africanews",
        "name": "Africanews, « Nigeria confirms first Ebola case as outbreak spreads across Africa » (21 octobre 2026)",
        "url": "https://www.africanews.com/2026/10/21/nigeria-confirms-first-ebola-case-as-outbreak-spreads-across-africa/"
      },
      {
        "short": "Africanews (OMS)",
        "name": "Africanews, « WHO: Africa facing 'complex' Ebola outbreak after Nigeria reports first case » (23 octobre 2026)",
        "url": "https://www.africanews.com/2026/10/23/who-africa-facing-complex-ebola-outbreak-after-nigeria-reports-first-case/"
      },
      {
        "short": "Boston 25",
        "name": "Associated Press via Boston 25 News, « Africa CDC calls an Ebola crisis summit as Nigeria records its first case »",
        "url": "https://www.boston25news.com/news/health/africa-cdc-calls-an/UTIISPM2SU4CNDI3RCU3E6KP3I/"
      }
    ]
  },
  {
    "id": "2026-10-23-afrique-du-sud-taxe-carburant-croissance",
    "date": "2026-10-23",
    "region": "Afrique",
    "theme": "mix",
    "geo": [
      {
        "name": "Pretoria, Afrique du Sud",
        "label": "Afrique du Sud",
        "coords": [
          28.19,
          -25.75
        ]
      }
    ],
    "title": "L'Afrique du Sud rogne sa taxe sur l'essence et le diesel, mais abaisse sa prévision de croissance",
    "summary": "Le ministre des Finances annonce un allègement temporaire de la taxe sur les carburants, d'environ 10 milliards de rands. Dans le même discours, le Trésor revoit sa croissance 2026 à la baisse.",
    "points": [
      "Le 21 octobre, le ministre des Finances Enoch Godongwana a présenté son budget de mi-année avec un allègement temporaire de la taxe sur les carburants, d'environ 10 milliards de rands [1][3].",
      "La taxe baisse de 1,50 rand par litre pour l'essence et de 3 rands pour le diesel du 4 novembre au 1er décembre ; des baisses plus petites durent ensuite jusqu'au 5 janvier 2027 [3][4].",
      "Le Trésor ramène sa prévision de croissance pour 2026 à 1,2 %, contre 1,6 % en février, en citant les prix du carburant, les tensions géopolitiques et le phénomène El Niño [1][5]."
    ],
    "why": [
      "La première phrase à retenir : un État choisit de renoncer à de l'argent public pour que le plein coûte moins cher, au moment même où il admet que son économie ralentit [1][4].",
      "Le coût de la mesure est compensé par de l'argent qui allait au Fonds central de l'énergie et qui retourne au budget de l'État [2]. La dette publique, elle, s'est stabilisée à 78,4 % du PIB en 2025/26 et doit redescendre à 76,6 % d'ici 2030, selon le ministre [3]."
    ],
    "forMe": "Quand le pétrole renchérit, un pays doit arbitrer entre aider les automobilistes et garder ses comptes en ordre. C'est le dilemme de tout État face à un pétrole cher.",
    "figures": [
      {
        "value": "10 Md rands",
        "label": "coût de l'allègement temporaire de la taxe sur les carburants",
        "src": 1
      },
      {
        "value": "1,2 %",
        "label": "croissance prévue en 2026 (contre 1,6 % prévu en février)",
        "src": 5
      },
      {
        "value": "78,4 %",
        "label": "dette publique en % du PIB en 2025/26, selon le ministre",
        "src": 3
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "Mail & Guardian",
        "name": "Mail & Guardian, « Budget 2026: Godongwana announces R10bn in temporary fuel relief » (2026)",
        "url": "https://mg.co.za/news/south-africa/2026-10-21-budget-2026-godongwana-announces-r10bn-in-temporary-fuel-relief/"
      },
      {
        "short": "EWN",
        "name": "EWN, « MTBPS 2026: Treasury cuts 2026 growth forecast to 1.2%, unveils R5.1bn for GBV and temporary fuel relief » (2026)",
        "url": "https://www.ewn.co.za/mtbps-2026-treasury-cuts-2026-growth-forecast-to-12-unveils-r51bn-for-gbv-and-temporary-fuel-relief"
      },
      {
        "short": "Daily Maverick",
        "name": "Daily Maverick, « Rising revenue allows for fuel levy relief, El Niño readiness in Godongwana's mini-budget » (2026)",
        "url": "https://www.dailymaverick.co.za/article/2026-10-21-rising-revenue-allows-for-fuel-levy-relief-el-nino-readiness-in-godongwanas-mini-budget/"
      },
      {
        "short": "Mail & Guardian",
        "name": "Mail & Guardian, « Fuel relief buys time but growth runs on empty » (2026)",
        "url": "https://mg.co.za/news/south-africa/2026-10-22-fuel-relief-buys-time-but-growth-runs-on-empty/"
      },
      {
        "short": "Africa Insider",
        "name": "Africa Insider, « 2026 Medium-Term Budget: Fuel levy cuts, debt and key changes you need to know » (2026)",
        "url": "https://www.africaninsider.com/business/2026-medium-term-budget-fuel-levy-cuts-debt-and-key-changes-you-need-to-know/"
      }
    ]
  },
  {
    "id": "2026-10-23-senegal-greve-generale-senelec",
    "date": "2026-10-23",
    "region": "Afrique",
    "theme": "eco",
    "geo": [
      {
        "name": "Dakar, Sénégal",
        "label": "Sénégal",
        "coords": [
          -17.47,
          14.69
        ]
      }
    ],
    "title": "Au Sénégal, une grève générale de trois jours touche jusqu'à l'électricien public",
    "summary": "Un front de syndicats arrête le travail les 21, 22 et 23 octobre. Chez Senelec, ils refusent la découpe de l'entreprise en filiales et réclament que l'État paie ce qu'il lui doit.",
    "points": [
      "Le Front syndical pour la défense du travail (FSDT) a lancé une grève générale de 72 heures, les 21, 22 et 23 octobre, dans le public, le privé et l'informel [1].",
      "À Senelec, l'électricien public, le syndicat SUTELEC rejoint le mouvement. Il refuse que l'entreprise soit divisée en filiales, réclame une prime (la PRAB, près de 3 milliards de francs CFA selon les syndicats) et demande que l'État règle une dette que les syndicats chiffrent à plus de 600 milliards de francs CFA [1][3].",
      "La direction de Senelec dit n'avoir reçu aucun préavis formel et appelle au dialogue [2]. Début octobre, le ministre de l'Énergie avait indiqué que l'entreprise deviendrait une société holding (maison mère) d'ici fin 2027 [1]."
    ],
    "why": [
      "La première phrase à retenir : quand l'électricité d'un pays est au cœur d'un bras de fer entre syndicats et État, c'est toute l'économie qui peut ralentir [1][2].",
      "Les chiffres de la dette de l'État envers Senelec viennent des syndicats et n'ont pas été confirmés par une source officielle. L'ampleur réelle de la grève n'est pas confirmée par une source indépendante [1]."
    ],
    "forMe": "Une entreprise d'électricité en difficulté financière, c'est des coupures possibles et des investissements retardés. Cela touche aussi les entreprises françaises ou européennes qui produisent ou investissent au Sénégal.",
    "figures": [
      {
        "value": "72 h",
        "label": "durée de la grève générale, du 21 au 23 octobre",
        "src": 1
      },
      {
        "value": "600 Md FCFA",
        "label": "dette de l'État envers Senelec selon les syndicats (non confirmé)",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Financial Afrik",
        "name": "Financial Afrik, « Sénégal : à la Senelec, trois jours de grève dans le cadre d'une grève générale du FSDT » (2026)",
        "url": "https://www.financialafrik.com/2026/10/19/senegal-a-la-senelec-trois-jours-de-greve-dans-le-cadre-dune-greve-generale-du-fsdt/"
      },
      {
        "short": "Senego",
        "name": "Senego, « Senelec : la direction dit n'avoir reçu aucun préavis formel et appelle au dialogue » (2026)",
        "url": "https://senego.com/senelec-la-direction-dit-navoir-recu-aucun-preavis-formel-et-appelle-au-dialogue_2015412.html"
      },
      {
        "short": "Senego",
        "name": "Senego, « Senelec : le SUTELEC rejoint la grève de 72 heures du FSDT » (2026)",
        "url": "https://senego.com/senelec-le-sutelec-rejoint-la-greve-de-72-heures-du-fsdt_2015028.html"
      }
    ]
  },
  {
    "id": "2026-10-23-badr-pacte-defense-qatar-pakistan-turquie-indonesie",
    "date": "2026-10-23",
    "region": "Moyen-Orient",
    "theme": "geo",
    "geo": [
      {
        "name": "Doha, Qatar",
        "label": "Qatar",
        "coords": [
          51.53,
          25.29
        ]
      }
    ],
    "title": "Qatar, Pakistan, Turquie et Indonésie mettent leurs usines d'armement en commun",
    "summary": "Quatre pays de régions très différentes signent à Doha le pacte « Badr » pour produire et former ensemble. Ce n'est pas une alliance militaire : personne ne promet de défendre l'autre.",
    "points": [
      "Le 21 octobre à Doha, le Qatar, le Pakistan, la Turquie et l'Indonésie ont signé le protocole d'accord « Badr » sur l'industrie de défense [1][2].",
      "Il prévoit de la production militaire commune, des formations techniques et militaires communes et de la recherche, pour que chaque pays puisse utiliser les capacités de défense des trois autres [1].",
      "Les comptes rendus insistent : c'est une coopération industrielle et non un pacte de défense mutuelle, distinct de l'accord séparé entre la Turquie, le Pakistan et l'Arabie saoudite. Le texte complet n'est pas public [1][4]."
    ],
    "why": [
      "La première phrase à retenir : quatre pays veulent produire des armes ensemble plutôt que seulement en acheter, en partageant technologies et chaînes d'approvisionnement [3][4].",
      "L'agence turque des achats de défense (SSB) explique que le pacte transforme des projets déjà existants entre deux pays en un cadre à quatre. Parmi eux : des drones et blindés turcs pour le Qatar, des corvettes construites pour la marine pakistanaise et un char développé avec l'Indonésie [3]. Le ministre qatari a aussi dit que le Qatar annoncerait bientôt un site de production de défense [1]."
    ],
    "forMe": "Quand de nouveaux pays fabriquent leurs armes eux-mêmes, le marché mondial change : moins de commandes pour les vendeurs traditionnels, plus de concurrence, et des budgets de défense qui se tournent vers d'autres fournisseurs.",
    "figures": [
      {
        "value": "4",
        "label": "pays signataires : Qatar, Pakistan, Turquie, Indonésie",
        "src": 1
      },
      {
        "value": "21 oct.",
        "label": "date de signature à Doha du protocole « Badr »",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "AzerNews",
        "name": "AzerNews, « Türkiye, Qatar, Pakistan and Indonesia sign 'Badr' defense cooperation agreement » (2026)",
        "url": "https://www.azernews.az/region/265954.html"
      },
      {
        "short": "TRT World",
        "name": "TRT World, « Türkiye, Qatar, Indonesia and Pakistan sign 'Badr' defence cooperation accord » (2026)",
        "url": "https://www.trtworld.com/article/57751af983b2"
      },
      {
        "short": "A News",
        "name": "A News, « Türkiye, Qatar, Pakistan and Indonesia to ink defense industry pact » (2026)",
        "url": "https://www.anews.com.tr/world/2026/10/20/turkiye-qatar-pakistan-and-indonesia-to-ink-defense-industry-pact"
      },
      {
        "short": "IR-IA",
        "name": "IR-IA, « Turkiye, Qatar, Pakistan and Indonesia sign Badr defense industry cooperation pact » (2026)",
        "url": "https://www.ir-ia.com/news/turkiye-qatar-pakistan-and-indonesia-sign-badr-defense-industry-cooperation-pact/"
      }
    ]
  },
  {
    "id": "2026-10-23-canada-turquie-partenariat-strategique",
    "date": "2026-10-23",
    "region": "Amériques",
    "theme": "mix",
    "geo": [
      {
        "name": "Ottawa, Canada",
        "label": "Canada",
        "coords": [
          -75.7,
          45.42
        ]
      },
      {
        "name": "Ankara, Turquie",
        "label": "Ankara",
        "coords": [
          32.86,
          39.93
        ]
      }
    ],
    "title": "Le Canada cherche en Turquie du gaz, du nucléaire et des armes pour moins dépendre des États-Unis",
    "summary": "À Ankara, le Premier ministre Mark Carney et Recep Tayyip Erdoğan lancent un « partenariat stratégique » avec un plan d'action de trois ans. Des négociations de libre-échange s'ouvrent le mois prochain.",
    "points": [
      "Le 22 octobre à Ankara, Mark Carney et Recep Tayyip Erdoğan ont lancé le partenariat stratégique Canada-Turquie, bâti sur quatre piliers : commerce et investissement, défense et sécurité, énergie, liens entre les peuples, avec un plan d'action de trois ans [1][2].",
      "Ils veulent avancer sur le gaz naturel liquéfié, le nucléaire civil, les énergies renouvelables et les minerais critiques. Carney a dit vouloir vendre à la Turquie des réacteurs Candu, des minerais critiques et du gaz liquéfié [1].",
      "Les agences de crédit à l'exportation des deux pays, EDC et Türk Eximbank, signent un accord pour des projets communs dans des pays tiers, et les négociations d'un accord de libre-échange commenceront le mois prochain [1]."
    ],
    "why": [
      "La première phrase à retenir : le Canada cherche d'autres clients et partenaires pour réduire sa dépendance aux États-Unis, et il se tourne vers la Turquie [4].",
      "Avant la visite, la presse annonçait de grands contrats. Les textes officiels parlent surtout d'engagements à coopérer, et aucun contrat précis sur un réacteur n'y figure [1][3]."
    ],
    "forMe": "Quand deux alliés de l'OTAN se rapprochent sur le gaz et le nucléaire, cela dessine de nouvelles routes de l'énergie et de nouveaux marchés d'armement, qui touchent aussi les prix en Europe.",
    "figures": [
      {
        "value": "4",
        "label": "piliers du partenariat : commerce, défense, énergie, liens entre les peuples",
        "src": 1
      },
      {
        "value": "3 ans",
        "label": "durée du plan d'action commun",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "Al Jazeera",
        "name": "Al Jazeera, « Carney, Erdogan launch 'strong and resilient' Canada-Türkiye partnership » (2026)",
        "url": "https://www.aljazeera.com/news/2026/10/22/carney-and-erdogan-launch-strong-and-resilient-canada-turkiye-partnership"
      },
      {
        "short": "Premier ministre du Canada",
        "name": "Cabinet du Premier ministre du Canada, « Statement by Prime Minister Carney and President Recep Tayyip Erdoğan » (2026)",
        "url": "https://www.pm.gc.ca/en/news/statements/2026/10/22/statement-prime-minister-carney-and-president-recep-tayyip-erdogan"
      },
      {
        "short": "The Globe and Mail",
        "name": "The Globe and Mail, « Canada, Turkey announce strategic partnership to deepen energy, defence and trade ties » (2026)",
        "url": "https://www.theglobeandmail.com/canada/article-canada-turkey-carney-strategic-partnership-defence-energy-trade/"
      },
      {
        "short": "The Print",
        "name": "The Print, « Canada, Turkey sign 'strategic partnership' as part of Carney push to cut reliance on US » (2026)",
        "url": "https://theprint.in/world/canada-turkey-sign-strategic-partnership-as-part-of-carney-push-to-cut-reliance-on-us/3079179/"
      }
    ]
  },
  {
    "id": "2026-10-23-equateur-colombie-petrole-oleoducs-reprise",
    "date": "2026-10-23",
    "region": "Amériques",
    "theme": "mix",
    "geo": [
      {
        "name": "Quito, Équateur",
        "label": "Équateur",
        "coords": [
          -78.47,
          -0.18
        ]
      },
      {
        "name": "Bogotá, Colombie",
        "label": "Colombie",
        "coords": [
          -74.07,
          4.71
        ]
      }
    ],
    "title": "L'Équateur laisse de nouveau passer le pétrole colombien dans ses oléoducs, après neuf mois de guerre commerciale",
    "summary": "Petroecuador reprend le transport du brut colombien, interrompu depuis janvier. Les deux voisins s'étaient affrontés à coups de droits de douane.",
    "points": [
      "Petroecuador a repris le transport du brut d'Ecopetrol et d'Amerisur dans ses oléoducs, après une suspension commencée en janvier [1][3].",
      "Les livraisons avaient été arrêtées le 23 janvier, après une décision qui faisait passer le tarif de transport du pétrole étranger sur l'oléoduc SOTE de 3 à 30 dollars [1][5].",
      "L'Équateur transporte en moyenne 11 900 barils par jour de brut colombien, ce qui doit lui rapporter environ 1,4 million de dollars par mois, soit 16,8 millions de dollars par an [1][2]."
    ],
    "why": [
      "La première phrase à retenir : un oléoduc peut devenir une arme commerciale, et la réouverture marque la fin d'une bataille entre deux voisins andins [1][3].",
      "Le conflit a aussi touché les droits de douane : l'Équateur a annoncé des droits de 30 % sur les produits colombiens, et la Colombie a riposté [4]. Après des mois de tarifs et une décision de la Communauté andine, Quito et Bogotá se parlent de nouveau [4]."
    ],
    "forMe": "Les routes du pétrole ne passent pas que par de grands détroits : un tuyau entre deux petits pays peut aussi bloquer des exportations. Cela rappelle pourquoi les prix de l'énergie dépendent de la politique.",
    "figures": [
      {
        "value": "11 900",
        "label": "barils par jour de brut colombien transportés en moyenne",
        "src": 1
      },
      {
        "value": "16,8 M$",
        "label": "revenu annuel attendu pour l'Équateur",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [
      "droits-de-douane"
    ],
    "sources": [
      {
        "short": "Vanguardia",
        "name": "Vanguardia, « Ecuador reinicia el paso de petróleo colombiano por oleoductos tras suspensión por aranceles » (2026)",
        "url": "https://www.vanguardia.com/colombia/2026/10/17/ecuador-reinicia-el-paso-de-petroleo-colombiano-por-oleoductos-tras-suspension-por-aranceles/"
      },
      {
        "short": "El Universo",
        "name": "El Universo, « Ecuador retoma el transporte de crudo colombiano y prevé ingresos por $ 16,8 millones anuales » (2026)",
        "url": "https://www.eluniverso.com/economia/produccion/reactivacion-transporte-crudo-oleoductos-sote-osla-ingresos-anuales-168-millones-colombia-ecuador-2026-nota/"
      },
      {
        "short": "Portafolio",
        "name": "Portafolio, « Ecuador reanuda transporte de petróleo colombiano, tras nueve meses de suspensión por guerra arancelaria » (2026)",
        "url": "https://www.portafolio.co/energia/ecuador-reanuda-transporte-de-petroleo-colombiano-tras-nueve-meses-de-suspension-por-guerra-arancelaria-504648"
      },
      {
        "short": "Rio Times",
        "name": "The Rio Times, « Ecuador and Its Neighbours in the Andes » (2026)",
        "url": "https://www.riotimesonline.com/ecuador-in-andes-explained-2026/"
      },
      {
        "short": "France 24",
        "name": "France 24, « Ecuador sube un 900% la tarifa de transporte del crudo colombiano y crece la guerra arancelaria » (2026)",
        "url": "https://www.france24.com/es/am%C3%A9rica-latina/20260127-ecuador-sube-un-900-la-tarifa-de-transporte-del-crudo-colombiano-en-medio-de-la-disputa-arancelaria"
      }
    ]
  },
  {
    "id": "2026-10-23-taiwan-micron-greve-puces-memoire",
    "date": "2026-10-23",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Taoyuan, Taïwan",
        "label": "Taïwan",
        "coords": [
          121.3,
          24.99
        ]
      }
    ],
    "title": "À Taïwan, les ouvriers de Micron, un géant des puces d'IA, se mettent en grève pour partager les bénéfices",
    "summary": "Le syndicat de l'usine de Taoyuan a annoncé un arrêt de travail jeudi 22 octobre. Il demande un partage des bénéfices permanent. L'usine fabrique des mémoires pour l'intelligence artificielle.",
    "points": [
      "Le syndicat de Micron à Taoyuan avait annoncé qu'il ferait grève jeudi 22 octobre, en soutien au syndicat de Taichung qui négocie avec la direction [1].",
      "Un bulletin cite Nikkei Asia : les salariés ont quitté l'usine à 9 h pour un arrêt de 24 heures [3].",
      "Au vote, 1 994 adhérents, soit 99 % des votants, ont approuvé la grève. Micron avait proposé une prime de 1 million de dollars taïwanais (environ 31 400 dollars) par salarié, mais le syndicat veut un mécanisme permanent de partage des profits [1]."
    ],
    "why": [
      "La première phrase à retenir : une grève dans une usine de mémoires, ces puces au cœur des serveurs d'intelligence artificielle, peut peser sur toute la chaîne mondiale [1].",
      "L'administration du parc scientifique du centre de Taïwan a averti que la grève pourrait toucher l'économie du pays, et le président Lai Ching-te a appelé les deux camps à négocier « sincèrement » [1]. La durée de la grève n'avait pas été annoncée à la date du 20 octobre [1]."
    ],
    "forMe": "Les mémoires de Micron (DRAM et HBM) se retrouvent dans les serveurs d'IA, les ordinateurs et les téléphones. Un blocage durable pourrait rendre certains composants plus rares et plus chers.",
    "figures": [
      {
        "value": "99 %",
        "label": "des votants (1 994 adhérents) pour la grève",
        "src": 1
      },
      {
        "value": "1 M TWD",
        "label": "prime proposée par Micron (≈ 31 400 $), jugée insuffisante par le syndicat",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "semi-conducteurs"
    ],
    "sources": [
      {
        "short": "The Star",
        "name": "The Star (Reuters), « Micron union in Taiwan to launch strike as bonus dispute escalates » (2026)",
        "url": "https://www.thestar.com.my/tech/tech-news/2026/10/20/micron-union-in-taiwan-to-launch-strike-as-bonus-dispute-escalates"
      },
      {
        "short": "The Standard",
        "name": "The Standard (Hong Kong), « Micron union in Taiwan to launch strike as bonus dispute escalates » (2026)",
        "url": "https://www.thestandard.com.hk/china/article/345911/Micron-union-in-Taiwan-to-launch-strike-as-bonus-dispute-escalates"
      },
      {
        "short": "AI Weekly",
        "name": "AI Weekly, « AI News for October 22, 2026 — Daily Edition » (2026)",
        "url": "https://aiweekly.co/ai-news-today/edition/2026-10-22"
      }
    ]
  },
  {
    "id": "2026-10-23-pakistan-afghanistan-commerce-frontiere-fermee",
    "date": "2026-10-23",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Torkham, frontière Pakistan-Afghanistan",
        "label": "Pakistan",
        "coords": [
          71.09,
          34.11
        ]
      }
    ],
    "title": "Pakistan-Afghanistan : un an de frontière fermée, et le commerce entre les deux pays s'effondre de 74 %",
    "summary": "Le Pakistan a stoppé tout commerce avec l'Afghanistan en octobre 2025. Les échanges sont tombés de 1,3 milliard à 358 millions de dollars, et les exportateurs pakistanais perdent des millions chaque mois.",
    "points": [
      "Selon les données officielles pakistanaises publiées le 19 octobre, les échanges avec l'Afghanistan ont chuté d'environ 74 % en 2025-26, de 1,3 milliard à environ 358 millions de dollars [1][3].",
      "Le Pakistan a stoppé toute activité commerciale avec l'Afghanistan depuis le 10 octobre 2025 ; le point de passage de Torkham est fermé depuis des affrontements meurtriers [2][3].",
      "Les exportateurs pakistanais perdent environ 50 milliards de roupies (≈ 177 millions de dollars) par mois, selon Arab News. Un cessez-le-feu a été annoncé le 19 octobre, mais le commerce reste suspendu [2]."
    ],
    "why": [
      "La première phrase à retenir : une frontière fermée coûte cher aux deux côtés, et le Pakistan risque de perdre durablement les marchés afghan et d'Asie centrale [2].",
      "Les responsables pakistanais disent que les routes commerciales resteront fermées tant que les problèmes de sécurité ne seront pas réglés [2]. Le cessez-le-feu n'est signalé que par une seule source, il est donc à prendre avec prudence [2]."
    ],
    "forMe": "Quand un grand couloir commercial se ferme, les échanges se déplacent vers d'autres routes plus longues et plus chères. C'est un exemple de plus de la fragilité des routes de l'Asie centrale.",
    "figures": [
      {
        "value": "−74 %",
        "label": "baisse des échanges Pakistan-Afghanistan en 2025-26",
        "src": 1
      },
      {
        "value": "358 M$",
        "label": "échanges en 2025-26 (1,3 Md$ l'année d'avant)",
        "src": 3
      },
      {
        "value": "177 M$",
        "label": "pertes mensuelles estimées des exportateurs pakistanais",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "Minute Mirror",
        "name": "Minute Mirror, « Pakistan-Afghanistan trade plunges 74% as crossings stay shut » (2026)",
        "url": "https://minutemirror.com.pk/pakistan-afghanistan-trade-plunges-74-647312/"
      },
      {
        "short": "Arab News Pakistan",
        "name": "Arab News Pakistan, « Industry leaders say prolonged shutdown risks long-term loss of Afghan, Central Asian markets » (2026)",
        "url": "https://www.arabnews.pk/node/2628600/pakistan"
      },
      {
        "short": "UNI",
        "name": "UNI, « Af-Pak trade: drastic decline » (2026)",
        "url": "https://www.uniindia.com/world/af-pak-trade-drastic-decline/219503"
      }
    ]
  },
  {
    "id": "2026-10-23-bulgarie-deficit-eurostat-doutes-euro",
    "date": "2026-10-23",
    "region": "Europe",
    "theme": "eco",
    "geo": [
      {
        "name": "Sofia, Bulgarie",
        "label": "Bulgarie",
        "coords": [
          23.32,
          42.7
        ]
      }
    ],
    "title": "Bulgarie : Eurostat relève le déficit de 2025 à 4 % et doute des chiffres du nouveau pays de l'euro",
    "summary": "L'office européen de statistiques a revu à la hausse le déficit bulgare de 2025 et pose des questions sur la qualité des données. La Bulgarie est déjà sous procédure européenne pour déficit excessif.",
    "points": [
      "Le 21 octobre, Eurostat a relevé de 0,5 point le déficit public bulgare de 2025, à 4 % du PIB, et a mis en doute la qualité des données transmises par Sofia [1].",
      "L'Union européenne a ouvert une procédure pour déficit excessif contre la Bulgarie sept mois après son entrée dans la zone euro [2].",
      "Le Conseil de l'UE avait demandé à la Bulgarie de présenter des mesures correctives avant le 15 octobre 2026 [3]. On ne sait pas encore si elle l'a fait."
    ],
    "why": [
      "La première phrase à retenir : un pays qui vient d'entrer dans l'euro se voit reprocher à la fois un déficit trop grand et des chiffres peu fiables [1][2].",
      "Dans la zone euro, les règles budgétaires sont partagées : un déficit jugé excessif peut déclencher une procédure et des demandes de corrections [2][3]."
    ],
    "forMe": "Quand un membre de la zone euro dérape, cela concerne tous ceux qui partagent la monnaie : la confiance des marchés et les règles budgétaires se discutent ensemble.",
    "figures": [
      {
        "value": "4 %",
        "label": "déficit public bulgare 2025 selon Eurostat (révisé de +0,5 point)",
        "src": 1
      },
      {
        "value": "7 mois",
        "label": "entre l'entrée dans l'euro et l'ouverture de la procédure",
        "src": 2
      }
    ],
    "culture": [],
    "dossiers": [],
    "sources": [
      {
        "short": "SeeNews",
        "name": "SeeNews, « EU revises Bulgaria's 2025 budget gap to 4% of GDP » (2026)",
        "url": "https://seenews.com/news/eu-revises-bulgarias-2025-budget-gap-to-4-percent-of-gdp-1303438"
      },
      {
        "short": "EU Alive",
        "name": "EU Alive, « EU opens excessive deficit procedure against Bulgaria seven months after eurozone accession » (2026)",
        "url": "https://eualive.net/eu-opens-excessive-deficit-procedure-against-bulgaria-as-new-budget-comes-under-scrutiny/"
      },
      {
        "short": "Conseil de l'UE",
        "name": "Conseil de l'Union européenne, « Excessive deficit procedure » (2026)",
        "url": "https://www.consilium.europa.eu/en/policies/excessive-deficit-procedure/"
      }
    ]
  },
  {
    "id": "2026-10-23-kazakhstan-azerbaidjan-couloir-du-milieu-rail",
    "date": "2026-10-23",
    "region": "Asie",
    "theme": "eco",
    "geo": [
      {
        "name": "Astana, Kazakhstan",
        "label": "Kazakhstan",
        "coords": [
          71.43,
          51.17
        ]
      },
      {
        "name": "Bakou, Azerbaïdjan",
        "label": "Azerbaïdjan",
        "coords": [
          49.87,
          40.41
        ]
      }
    ],
    "title": "Kazakhstan et Azerbaïdjan s'accordent sur un « couloir du milieu » plus simple entre la Chine et l'Europe",
    "summary": "Les deux pays signent un accord pour que trains et bateaux sur la route Chine-Europe via la mer Caspienne se coordonnent mieux. D'autres pays pourront les rejoindre.",
    "points": [
      "Le 20 octobre, le Kazakhstan et l'Azerbaïdjan ont signé un accord pour simplifier l'exploitation ferroviaire du « couloir du milieu », la route de marchandises entre la Chine et l'Europe [1].",
      "Les deux pays s'engagent sur une capacité minimale garantie, dont le chiffre n'est pas publié, et sur la priorité donnée aux navires de l'autre dans leurs ports [1].",
      "L'accord prévoit un document de transport unique pour le trajet train-bateau, et d'autres pays pourront le rejoindre [1]."
    ],
    "why": [
      "La première phrase à retenir : un seul papier et des priorités garanties, c'est ce qui rend une route de transport vraiment utilisable pour les entreprises [1].",
      "Le montant garanti n'est pas public, donc on ne peut pas encore mesurer l'effet sur les volumes [1]."
    ],
    "forMe": "Plus cette route est simple et prévisible, plus elle peut servir d'alternative aux routes maritimes, aujourd'hui perturbées par les tensions autour d'Ormuz.",
    "figures": [
      {
        "value": "1",
        "label": "document de transport unique prévu pour le trajet train-bateau",
        "src": 1
      }
    ],
    "culture": [],
    "dossiers": [
      "routes-maritimes"
    ],
    "sources": [
      {
        "short": "RailFreight",
        "name": "RailFreight, « New agreement standardises Middle Corridor operations, more countries can join » (2026)",
        "url": "https://www.railfreight.com/railfreight/2026/10/20/new-agreement-standardises-middle-corridor-operations-more-countries-can-join/"
      }
    ]
  },
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
      },
      {
        "short": "USITC",
        "name": "Commission du commerce international des États-Unis (USITC), « Nickel and Indonesia, part 1 » (note d'information)",
        "url": "https://www.usitc.gov/publications/332/executive_briefings/ebot_nickel_and_indonesia_part_1.pdf"
      },
      {
        "short": "AIE",
        "name": "Agence internationale de l'énergie (AIE), « Prohibition of the export of nickel ore » (fiche de politique publique)",
        "url": "https://www.iea.org/policies/16084-prohibition-of-the-export-of-nickel-ore"
      },
      {
        "short": "Commission européenne",
        "name": "Commission européenne, « WT/DS592 – Indonesia – Export restrictions on raw materials for the production of stainless steel »",
        "url": "https://policy.trade.ec.europa.eu/enforcement-and-protection/dispute-settlement/wto-dispute-settlement/wto-disputes-cases-involving-eu/wtds592-indonesia-export-restrictions-raw-materials-production-stainless-steel-and-subsidies-new_en"
      },
      {
        "short": "The Conversation",
        "name": "The Conversation, « Indonesia's claim that banning nickel exports spurs downstreaming is questionable » (2022)",
        "url": "https://theconversation.com/indonesias-claim-that-banning-nickel-exports-spurs-downstreaming-is-questionable-180229"
      },
      {
        "short": "AP / Manufacturing.net",
        "name": "Associated Press (repris par Manufacturing.net), « Indonesia Tightens Control on World's Largest Nickel Supply as U.S. Scrambles for Critical Minerals »",
        "url": "https://www.manufacturing.net/supply-chain/news/22960938/indonesia-tightens-control-on-worlds-largest-nickel-supply-as-us-scrambles-for-critical-minerals"
      },
      {
        "short": "MyJoyOnline",
        "name": "MyJoyOnline, « President Mahama puts mining firms on notice over 2030 raw mineral ore export ban » (oct. 2026)",
        "url": "https://www.myjoyonline.com/president-mahama-puts-mining-firms-on-notice-over-2030-raw-mineral-ore-export-ban/"
      },
      {
        "short": "Graphic Online",
        "name": "Graphic Online, « GIADEC makes significant progress towards developing an integrated aluminium industry » (2022)",
        "url": "https://www.graphic.com.gh/business/business-news/giadec-makes-significant-progress-towards-developing-an-integrated-aluminium-industry.html"
      },
      {
        "short": "SMM",
        "name": "Shanghai Metals Market (SMM), « Import of Ghana Manganese Ore Under Dual Squeeze » (2026)",
        "url": "https://news.metal.com/newscontent/104089301-smm-analysisimport-of-ghana-manganese-ore-under-dual-squeeze-resonance-of-price-signals-and-policy-uncertainties"
      },
      {
        "short": "News Ghana",
        "name": "News Ghana, « Ghana Manganese Company unveils US$450 million refinery plan » (2024)",
        "url": "https://www.newsghana.com.gh/ghana-manganese-company-unveils-us450-million-refinery-plan/"
      },
      {
        "short": "Mining Weekly",
        "name": "Mining Weekly, « Ghana's Parliament ratifies Atlantic Lithium's Ewoyaa mining lease » (20 mars 2026)",
        "url": "https://www.miningweekly.com/article/ghanas-parliament-ratifies-atlantic-lithiums-ewoyaa-mining-lease-2026-03-20"
      },
      {
        "short": "Ecofin",
        "name": "Agence Ecofin, « Ghana greenlights $185 million Ewoyaa lithium project » (mars 2026)",
        "url": "https://www.ecofinagency.com/news-industry/2303-53985-ghana-greenlights-185-million-ewoyaa-lithium-project"
      },
      {
        "short": "MyJoyOnline",
        "name": "MyJoyOnline, « Why Ghana has banned unrefined gold exports – GoldBod official provides details » (2026)",
        "url": "https://www.myjoyonline.com/why-ghana-has-banned-unrefined-gold-exports-goldbod-official-provides-details/"
      },
      {
        "short": "MyJoyOnline",
        "name": "MyJoyOnline, « Govt must put its skin in the game – Chamber of Mines demands tax, power relief for local gold refining » (2026)",
        "url": "https://www.myjoyonline.com/govt-must-put-its-skin-in-the-game-chamber-of-mines-demands-tax-power-relief-for-local-gold-refining/"
      }
    ],
    "deep": {
      "context": {
        "title": "Le précédent indonésien : six ans sans nickel brut",
        "paragraphs": [
          "L'idée n'est pas neuve. L'Indonésie a appliqué dès 2014 une loi de 2009 qui interdisait d'exporter le minerai non transformé, dont le nickel [5]. Elle a rouvert la porte en 2017 au minerai pauvre (moins de 1,7 % de nickel), puis a tout refermé le 1er janvier 2020 [6].",
          "Le résultat est spectaculaire. Selon S&P Global Market Intelligence, la part de l'Indonésie dans l'offre mondiale de nickel est passée de 31,5 % en 2020 à environ 60 % en 2024 [9]. Les fonderies se sont multipliées, financées en grande partie par des capitaux étrangers [8].",
          "Le bilan reste discuté. Le président Joko Widodo affirmait que les exportations liées au nickel étaient passées de 2,1 à 30 milliards de dollars ; des économistes notent que ces chiffres n'ont pas été détaillés et qu'un métal transformé contient aussi le prix de l'énergie et des autres intrants [8]. L'Union européenne a porté plainte à l'OMC : le panel lui a donné raison le 30 novembre 2022, mais l'Indonésie a fait appel le 8 décembre devant un organe d'appel qui ne fonctionne plus, ce qui bloque l'affaire [7]."
        ]
      },
      "explainer": {
        "title": "Comment ça marche : « transformer sur place »",
        "text": "Un minerai passe par plusieurs étapes avant de devenir un métal. Pour l'aluminium : on extrait la bauxite, une raffinerie en tire l'alumine (une poudre blanche), puis une fonderie la transforme en métal grâce à beaucoup d'électricité. Le Ghana possède le début et la fin de la chaîne, mais pas le milieu : une mine de bauxite à Awaso et la fonderie VALCO à Tema, sans raffinerie. En 2022, toute la bauxite d'Awaso partait donc à l'étranger, pendant que VALCO importait son alumine [11]. Une interdiction d'exporter le brut oblige à construire le maillon manquant sur place. Pour le manganèse, l'entreprise qui exploite la mine de Nsuta, filiale du groupe chinois Tianyuan, a présenté un projet de raffinerie d'environ 450 millions de dollars [13]. Pour l'or, c'est déjà fait : depuis le 1er septembre 2026, l'or « doré » des négociants agréés doit être raffiné au Ghana avant l'export [16]."
      },
      "numbers": {
        "title": "Les chiffres de fond",
        "items": [
          {
            "value": "5,3 Mt",
            "label": "minerai de manganèse importé du Ghana par la Chine en 2025, 16 % de ses achats de ce minerai (douanes chinoises citées par SMM) [12]"
          },
          {
            "value": "185 M$",
            "label": "coût annoncé de la mine de lithium d'Ewoyaa, où l'État ghanéen détient 13 % (Ecofin) [15]"
          },
          {
            "value": "≈ 60 %",
            "label": "part de l'Indonésie dans l'offre mondiale de nickel en 2024, contre 31,5 % en 2020 (S&P Global) [9]"
          }
        ]
      },
      "watch": {
        "title": "Les étapes à surveiller",
        "items": [
          {
            "when": "Au Parlement",
            "what": "Le projet de loi minière déposé au Parlement permettrait au ministre d'interdire l'export de minerais bruts, mais seulement par un règlement à part, et sans date butoir [10]."
          },
          {
            "when": "Décision d'investissement à Ewoyaa",
            "what": "Le Parlement a ratifié le bail de la première mine de lithium du pays le 20 mars 2026 ; reste à boucler le financement avant la décision finale d'investissement [14]."
          },
          {
            "when": "Janvier 2029",
            "what": "Fin du mandat de John Mahama, qui ne peut pas se représenter : l'échéance de 2030 reviendra à son successeur [10]."
          },
          {
            "when": "D'ici là",
            "what": "Les compagnies minières demandent déjà des baisses de taxes et une électricité plus sûre pour raffiner l'or sur place ; les mêmes demandes reviendront pour les autres minerais [17]."
          }
        ]
      }
    }
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
      },
      {
        "short": "Euroclear",
        "name": "Euroclear, « Euroclear delivers Q1 2026 results » (communiqué, 8 mai 2026)",
        "url": "https://www.euroclear.com/newsandinsights/en/press/2026/mr-12-euroclear-delivers-q1-2026-results.html"
      },
      {
        "short": "Euroclear",
        "name": "Euroclear, « Euroclear delivers strong 2025 results » (communiqué, 4 févr. 2026)",
        "url": "https://www.euroclear.com/newsandinsights/en/press/2026/mr-06-euroclear-delivers-strong-2025-results.html"
      },
      {
        "short": "Financial Forum",
        "name": "Revue bancaire et financière (Financial Forum), « The impact of the sanctions against Russia and Russian countermeasures »",
        "url": "https://financialforum.be/fr/articles/the-impact-of-the-sanctions-against-russia-and-russian-countermeasures"
      },
      {
        "short": "bne IntelliNews",
        "name": "bne IntelliNews, « EU outlines structure of reparations loan backed by frozen Russian assets for Ukraine » (déc. 2025)",
        "url": "https://www.intellinews.com/eu-outlines-structure-of-reparations-loan-backed-by-frozen-russian-assets-for-ukraine-415282"
      },
      {
        "short": "APA",
        "name": "APA, « Commission unveils €165B loan to Ukraine using Russian frozen assets » (3 déc. 2025)",
        "url": "https://en.apa.az/europe/commission-unveils-eur165b-loan-to-ukraine-using-russian-frozen-assets-485346"
      },
      {
        "short": "NV",
        "name": "The New Voice of Ukraine (NV), « EU chooses joint borrowing for Ukraine, puts Russian assets on ice » (19 déc. 2025)",
        "url": "https://english.nv.ua/amp/eu-chooses-joint-borrowing-for-ukraine-puts-russian-assets-on-ice-50569735.html"
      },
      {
        "short": "The Star",
        "name": "The Star (dépêche), « Belgium rejects renewed push on frozen Russian assets » (3 sept. 2026)",
        "url": "https://www.thestar.com.my/news/world/2026/09/03/belgium-rejects-renewed-push-on-frozen-russian-assets"
      },
      {
        "short": "Interfax-Ukraine",
        "name": "Interfax-Ukraine, « Zelenskyy urges EU to resolve issue of Russia's frozen assets to prevent them from being returned to Russia » (oct. 2026)",
        "url": "https://en.interfax.com.ua/news/general/1221570.html"
      },
      {
        "short": "Courthouse News",
        "name": "Courthouse News Service, « Zelenskyy asks for $78 billion in European aid for Ukraine » (oct. 2026)",
        "url": "https://www.courthousenews.com/zelenskyy-asks-for-78-billion-in-european-aid-for-ukraine/"
      },
      {
        "short": "Meduza",
        "name": "Meduza, « Moscow court orders Belgian depositary Euroclear to pay massive damages to Russia's central bank » (15 mai 2026)",
        "url": "https://meduza.io/en/news/2026/05/15/moscow-court-orders-belgian-depositary-euroclear-to-pay-massive-damages-to-russia-s-central-bank"
      },
      {
        "short": "Interfax-Ukraine",
        "name": "Interfax-Ukraine, « Belgian PM convinced EU won't revive plan to use frozen Russian assets for Ukraine » (oct. 2026)",
        "url": "https://en.interfax.com.ua/news/general/1224317.html"
      },
      {
        "short": "A News",
        "name": "A News, « Belgian premier says EU will not propose using frozen Russian assets for Ukraine » (21 oct. 2026)",
        "url": "https://anews.com.tr/world/2026/10/21/belgian-premier-says-eu-will-not-propose-using-frozen-russian-assets-for-ukraine"
      },
      {
        "short": "Kyiv Post",
        "name": "Kyiv Post, « EU Leaders Stall Reparation Loan Talks as Belgium Insists on Legal Guarantees » (2025)",
        "url": "https://www.kyivpost.com/post/62907"
      }
    ],
    "deep": {
      "explainer": {
        "title": "Comment ça marche : de l'argent gelé qui rapporte",
        "text": "Euroclear est un dépositaire central de titres : une sorte de coffre-fort où les banques centrales et les investisseurs du monde entier gardent leurs obligations. Quand les sanctions ont bloqué la Banque centrale de Russie en 2022, ses titres sont restés chez Euroclear. En arrivant à échéance, ils ne remboursent pas la Russie : l'argent reste sur les comptes d'Euroclear Bank, qui devra le rendre le jour où les sanctions seront levées [6]. Euroclear replace cet argent, ce qui lui rapporte des intérêts : 5 milliards d'euros de revenus en 2025, en baisse de 26 % avec la baisse des taux [5]. Depuis 2024, une règle européenne oblige à reverser ces bénéfices exceptionnels à un fonds pour l'Ukraine : 6,6 milliards d'euros versés à fin mars 2026, le reste étant gardé en réserve contre les risques [4]. Fin mars 2026, sur les 237 milliards d'euros du bilan d'Euroclear Bank, 200 milliards étaient des avoirs russes sous sanctions [4]. Le « prêt de réparation », proposé par la Commission le 3 décembre 2025 pour 165 milliards d'euros [8], allait plus loin : il s'agissait d'échanger cet argent contre des obligations émises par l'UE et de le prêter à l'Ukraine, qui ne l'aurait remboursé que si la Russie payait des réparations [7]."
      },
      "sides": {
        "title": "Qui dit quoi",
        "items": [
          {
            "who": "La Belgique",
            "says": "Bart De Wever exigeait que les 26 autres pays garantissent tout le prêt pour que la Belgique ne paie pas seule en cas de procès [16]. En septembre 2026, son ministre des Affaires étrangères Maxime Prévot jugeait encore qu'utiliser ces avoirs « par un procédé proche de la confiscation » comportait « des risques importants » [10]."
          },
          {
            "who": "Les partisans de l'utilisation",
            "says": "La Pologne, les Pays-Bas, l'Espagne et la Suède ont écrit à la Commission fin août 2026 pour lui demander d'étudier de nouvelles façons d'utiliser ces avoirs ; la cheffe de la diplomatie de l'UE, Kaja Kallas, a dit que la discussion continuerait [10]."
          },
          {
            "who": "L'Ukraine",
            "says": "Volodymyr Zelensky demande que la totalité des avoirs reste protégée et puisse servir, de peur qu'ils ne soient un jour rendus à la Russie [11]. Il a demandé aux Européens environ 78 milliards de dollars pour l'an prochain [12]."
          },
          {
            "who": "La Russie",
            "says": "Sa banque centrale a attaqué Euroclear à Moscou. Le 15 mai 2026, un tribunal moscovite lui a accordé environ 18 170 milliards de roubles (200 milliards d'euros) ; Euroclear ne reconnaît pas ce tribunal et a annoncé faire appel [13]."
          }
        ]
      },
      "watch": {
        "title": "Ce qui peut encore bouger",
        "items": [
          {
            "when": "Budget ukrainien de 2027",
            "what": "Le prêt de 90 milliards couvre 2026 et 2027 [3] ; la nouvelle demande de Kiev pose la question d'un financement supplémentaire, et donc des avoirs russes [12]."
          },
          {
            "when": "Prochains sommets européens",
            "what": "Selon De Wever, la Commission s'est engagée à ne pas rouvrir le dossier, mais il n'exclut pas qu'un autre pays le remette sur la table [14][15]."
          },
          {
            "when": "Appel d'Euroclear",
            "what": "Euroclear conteste le jugement de Moscou et a annoncé faire appel ; la Banque centrale russe elle-même juge la décision non définitive [13]."
          },
          {
            "when": "Fin de la guerre",
            "what": "Les dirigeants européens ont prévu que les avoirs restent immobilisés jusqu'à ce que la Russie cesse la guerre et indemnise l'Ukraine [9]."
          }
        ]
      }
    }
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
