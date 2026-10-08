# Mise à jour quotidienne de l'actu

Consigne suivie chaque matin pour ajouter les actus du jour dans `data/news.js`.
Elle peut être modifiée librement : la mise à jour automatique relit ce fichier à chaque fois.

## Ce qu'on cherche

- **8 à 10 actus** du jour ou de la veille, **économie et géopolitique** (elles sont liées).
- **Partout dans le monde**, pas seulement l'Occident : chaque jour au moins une actu en **Afrique**, une en **Asie**, une en **Amérique latine**, une au **Moyen-Orient** et une en **Europe ou Asie centrale**.
- **De nouveaux pays sur le globe** : au moins **4 actus sur des pays qui n'ont pas eu d'actu depuis 14 jours** (regarder les `geo` des actus existantes). On cherche « sous la surface du glacier » : ce dont les grands médias français parlent peu.
- **Le dimanche** : en plus, un « tour du monde » de 4 à 6 pays rarement traités (Asie centrale, Pacifique, Caraïbes, Afrique australe, Balkans…).
- Priorité aux sujets qui ont un **impact concret** : prix (énergie, alimentation), emploi, monnaies, dettes, matières premières (pétrole, gaz, uranium, cobalt, cuivre, terres rares, nickel, or…), commerce, sanctions, conflits qui touchent l'économie.
- On évite le fait divers et la politique intérieure sans enjeu économique.

## Fiabilité (le plus important)

- Chaque fait chiffré ou rapporté est suivi de `[n]`, qui renvoie à la n-ième source de la liste `sources`.
- Sources de préférence : agences (Reuters, AFP, AP), grands médias économiques, institutions (FMI, Banque mondiale, banques centrales, instituts statistiques comme l'Insee ou Eurostat).
- **Jamais de chiffre inventé ni « de mémoire »**. Si un chiffre n'est pas trouvé dans une source, on ne l'écrit pas.
- Si les sources se contredisent, on prend la plus officielle et on reste prudent dans la formulation.
- Les liens doivent être ceux des articles réellement consultés.

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
- `sources` : `{ short, name, url }`

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

## Publier l'aperçu

Aperçu privé de l'appli : https://claude.ai/artifact/UxRba3w8oMS1KWe774hciT

1. `python3 tools/build-preview.py` prépare le dossier `.preview/`.
2. Republier ce dossier sur la même adresse (outil Artifact, `url` ci-dessus, `root` = `.preview`, page = `.preview/index.html`, et tous les autres fichiers du dossier dans `files`).
