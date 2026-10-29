# Mise à jour quotidienne de l'actu

Consigne suivie chaque matin pour ajouter les actus du jour dans `data/news.js`.
Elle peut être modifiée librement : la mise à jour automatique relit ce fichier à chaque fois.

## Ce qu'on cherche

- **8 à 10 actus** du jour ou de la veille, **économie et géopolitique** (elles sont liées).
- **Partout dans le monde**, pas seulement l'Occident : chaque jour au moins une actu en **Afrique**, une en **Asie**, une en **Amérique latine**, une au **Moyen-Orient** et une en **Europe ou Asie centrale**.
- **De nouveaux pays sur le globe** : au moins **4 actus sur des pays qui n'ont pas eu d'actu depuis 14 jours** (regarder les `geo` des actus existantes). On cherche « sous la surface du glacier » : ce dont les grands médias français parlent peu.
- **Le dimanche** : en plus, un « tour du monde » de 4 à 6 pays rarement traités (Asie centrale, Pacifique, Caraïbes, Afrique australe, Balkans…).
- **Le globe change d'un jour à l'autre** : on évite de remettre les mêmes pays que la veille, sauf fait nouveau important. Les points se placent sur la capitale ou le lieu précis (pas toujours Washington ou Pékin).

## Des faits marquants, pas des statistiques (le plus important après la fiabilité)

Le lecteur doit apprendre quelque chose qu'il aurait envie de **raconter à table**. Une actu, c'est **un fait nouveau qui change quelque chose** : une décision, un accord, une rupture, une découverte, une crise, un record surprenant. Pas seulement « le chiffre du mois est sorti ».

- **Deux actus « chiffres » au plus par jour** : publication d'inflation, décision de taux d'une banque centrale, prévision de croissance (FMI, Banque mondiale…). Et seulement si le chiffre est vraiment frappant (record, retournement, crise) ou qu'il touche un grand pays. « L'inflation de X passe de 5,2 % à 5,6 % » ne suffit pas.
- **Au moins 6 actus « faits »**, en variant les catégories (pas deux fois la même dans la journée si possible) :
  - **diplomatie et alliances** : accords, ruptures, sommets, visites qui changent quelque chose ;
  - **conflits et sécurité**, avec leurs effets économiques (routes, prix, sanctions) ;
  - **ressources et énergie** : mines, pétrole, gaz, eau, terres rares, nationalisations, découvertes ;
  - **routes et infrastructures** : ports, canaux, chemins de fer, câbles sous-marins, oléoducs, barrages ;
  - **technologie et industrie** : puces, IA, voitures électriques, usines, rachats géants ;
  - **société et économie** : élections à enjeu économique, migrations, manifestations, alimentation, chocs climatiques.
- **Le test avant d'ajouter une actu** : « Qu'est-ce qui a changé aujourd'hui, et pourquoi c'est surprenant ou important ? » Si la réponse tient en « un chiffre a un peu bougé », on cherche autre chose.
- **Le titre donne envie de lire** : il dit le fait le plus frappant, sans jargon (« La Guinée exporte son premier fer de Simandou et bouscule l'Australie » plutôt que « Guinée : hausse des exportations »).
- **Une actu sur les taux, l'inflation, les droits de douane, les détroits, les puces, les sanctions ou le dollar** : mettre l'id du cours lié dans `dossiers` (l'appli affiche en haut de l'actu un lien « Le cours pour comprendre »).

## Dossiers géopolitiques à suivre

À vérifier régulièrement, et à traiter dès qu'il y a du nouveau (avec sources) :
- **Amériques** : droits de douane États-Unis–Canada et États-Unis–Mexique, révision de l'accord commercial nord-américain (ACEUM/USMCA), accord UE-Mercosur et tensions au sein du Mercosur, migrations et cartels, canal de Panama, pétrole du Guyana.
- **Europe** : guerre en Ukraine et son économie, réarmement, énergie, Balkans, Caucase.
- **Moyen-Orient** : Ormuz et l'Iran, Gaza et la Cisjordanie, Liban, Syrie, Yémen et la mer Rouge.
- **Afrique** : Sahel, Soudan, Éthiopie-Érythrée, RD Congo, dettes et matières premières.
- **Asie** : Chine et Taïwan, mer de Chine méridionale, Inde-Pakistan, Birmanie, Corée du Nord.
- Priorité aux sujets qui ont un **impact concret** : prix (énergie, alimentation), emploi, monnaies, dettes, matières premières (pétrole, gaz, uranium, cobalt, cuivre, terres rares, nickel, or…), commerce, sanctions, conflits qui touchent l'économie.
- On évite le fait divers et la politique intérieure sans enjeu économique.

## Fiabilité (le plus important)

- Chaque fait chiffré ou rapporté est suivi de `[n]`, qui renvoie à la n-ième source de la liste `sources`.
- Sources de préférence : agences (Reuters, AFP, AP), grands médias économiques, institutions (FMI, Banque mondiale, banques centrales, instituts statistiques comme l'Insee ou Eurostat).
- **Jamais de chiffre inventé ni « de mémoire »**. Si un chiffre n'est pas trouvé dans une source, on ne l'écrit pas.
- Si les sources se contredisent, on prend la plus officielle et on reste prudent dans la formulation.
- Les liens doivent être ceux des articles réellement consultés.
- **Plusieurs sources de qualité par actu** (demande de l'auteur, 29 oct. 2026) : au moins 2 sources indépendantes et sérieuses (agences, grands journaux, institutions, médias locaux reconnus), qui confirment les faits et les chiffres principaux. Un communiqué officiel compte comme une source, mais ce qu'il annonce s'écrit comme une annonce (« selon le gouvernement… »).
- **Sinon, on le dit** : si on ne trouve qu'une source, ou une source fragile (blog, média partisan, chiffre repris d'un seul article, date imprécise), l'actu reçoit un champ `verify` avec la raison en une phrase (ex. « Une seule source (BusinessDay) : chiffres à confirmer dans les données du FMI. »). L'appli affiche alors « ⚠️ Source à vérifier » sous le titre et dans les listes. À traduire en en/es comme le reste. `check-content` signale toute actu à une seule source sans `verify`.
- Si aucune source sérieuse ne confirme un fait, on ne publie pas l'actu.

## Format d'une actu

Copier une actu existante de `data/news.js` et remplir :

- `id` : `AAAA-MM-JJ-sujet-court`
- `date` : la date du jour (`AAAA-MM-JJ`)
- `theme` : `eco`, `geo` ou `mix`
- `region` : `Europe`, `Amériques`, `Moyen-Orient`, `Afrique` ou `Asie`
- `title` : titre clair, sans jargon
- `summary` : une ou deux phrases
- `geo` : `[{ name: "Nom complet", label: "Pays", coords: [longitude, latitude] }]` (le point sur le globe)
- `points` : 3 phrases « ce qui s'est passé », avec sources
- `why` : 1 à 3 paragraphes « pourquoi c'est important », la première phrase doit se lire seule
- `forMe` : « Et moi, dans tout ça ? », l'impact concret pour un lecteur français
- `figures` : 2 ou 3 chiffres clés avec `src`
- `dossiers` : les cours liés (ids de `data/content.js`)
- `sources` : `{ short, name, url }` (au moins 2)
- `verify` (facultatif) : la raison si la source est unique ou fragile (voir « Fiabilité »)

Les nouvelles actus se placent **en haut** du tableau. Le globe de l'accueil affiche les actus de la date la plus récente.

## Ton

- Tutoiement, phrases courtes, aucun mot technique sans explication.
- Neutre et factuel sur les sujets politiques : on explique, on ne prend pas parti.

## Rubrique Conflits (`data/conflits.js`)

- **Chaque début de mois** (du 1er au 7) : mettre à jour le baromètre avec la dernière édition de CrisisWatch (International Crisis Group) : le mois, le nombre de situations qui s'aggravent, qui s'améliorent et d'alertes, une phrase sourcée par pays, et les couleurs de la carte (`map.countries`).
- **Une fois par an**, quand les nouvelles données sortent : SIPRI ventes d'armes (mars) et dépenses militaires (avril), UCDP (juin), indice et liste à surveiller d'ACLED (décembre). Mettre à jour les chiffres, les graphiques et le tableau de bord (`latest` dans `data/indicators.js`).
- Mêmes règles de fiabilité : chaque chiffre avec sa source, rien de mémoire.

## Avant de publier

1. `node tools/check-content.mjs` doit afficher « Contenu OK ».
2. `node tools/build-lettre.mjs` fabrique la lettre du matin en PDF (`lettres/AAAA-MM-JJ.pdf`) et met à jour `data/lettres.js`. Vérifier qu'elle tient sur une page.
3. Si un chiffre de l'onglet Chiffres (`data/indicators.js`) a été publié officiellement depuis (inflation, chômage), le mettre à jour avec sa date et sa source.
4. On garde les actus des 14 derniers jours ; les plus anciennes peuvent être retirées.

## Traductions

L'appli s'affiche dans la langue du téléphone (français, anglais, espagnol, allemand, italien, portugais). Les actus sont traduites en **anglais et en espagnol** :

1. `node tools/i18n-build.mjs --missing=en > /tmp/a-traduire.json` liste les textes pas encore traduits (en général, les actus du jour).
2. Traduire chaque valeur (mêmes clés, mêmes [n], ton neutre, « you » / « tú », nombres au format de la langue) et enregistrer le résultat dans `contenu/traductions/en/contenu-AAAA-MM-JJ.json` ; idem pour `es`.
3. `node tools/i18n-build.mjs` régénère `data/i18n/*.js` (les traductions des actus retirées sont écartées automatiquement).
4. Les textes de l'interface sont dans `contenu/traductions/<langue>/ui.json` : en cas de nouveau bouton ou titre, ajouter sa traduction.

Une actu non traduite s'affiche en français : ce n'est pas bloquant, mais `check-content` le signale.

## Publier l'aperçu

Aperçu privé de l'appli : https://claude.ai/artifact/UxRba3w8oMS1KWe774hciT

1. `python3 tools/build-preview.py` prépare le dossier `.preview/`.
2. Republier ce dossier sur la même adresse (outil Artifact, `url` ci-dessus, `root` = `.preview`, page = `.preview/index.html`, et tous les autres fichiers du dossier dans `files`).
