# Mise à jour quotidienne de l'actu

Consigne suivie chaque matin pour ajouter les actus du jour dans `data/news.js`.
Elle peut être modifiée librement : la mise à jour automatique relit ce fichier à chaque fois.

## Ce qu'on cherche

- **5 à 8 actus** du jour ou de la veille, **économie et géopolitique** (elles sont liées).
- **Partout dans le monde**, pas seulement l'Occident : au moins une en **Afrique** et une en **Asie**, et autant que possible des pays dont on parle peu.
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

## Avant de publier

1. `node tools/check-content.mjs` doit afficher « Contenu OK ».
2. Si un chiffre de l'onglet Chiffres (`data/indicators.js`) a été publié officiellement depuis (inflation, chômage), le mettre à jour avec sa date et sa source.
3. On garde les actus des 14 derniers jours ; les plus anciennes peuvent être retirées.

## Publier l'aperçu

Aperçu privé de l'appli : https://claude.ai/artifact/UxRba3w8oMS1KWe774hciT

1. `python3 tools/build-preview.py` prépare le dossier `.preview/`.
2. Republier ce dossier sur la même adresse (outil Artifact, `url` ci-dessus, `root` = `.preview`, page = `.preview/index.html`, et tous les autres fichiers du dossier dans `files`).
