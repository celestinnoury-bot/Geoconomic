# Géoconomic : comprendre le monde en 3 minutes

Une application qui **vulgarise l'actualité économique et géopolitique** pour la rendre accessible à tout le monde, sans jargon.

## Le concept

Chaque sujet est un **dossier court** construit toujours de la même façon :

1. **L'essentiel en 30 secondes** : 3 points à retenir
2. **Le contexte** en quelques sections courtes
3. **Et moi, dans tout ça ?** : l'impact concret sur ta vie (prix, emploi, voyages…)
4. **Les chiffres à retenir**
5. **Les mots pour comprendre**, reliés au lexique
6. **Un mini-quiz** pour vérifier ce qu'on a retenu

## L'accueil : le globe

En ouvrant l'appli, on arrive sur un **globe terrestre en 3D** (images satellite NASA) qui tourne lentement. Les actus du jour y sont des points lumineux : Ormuz, Washington, Paris… En touchant un point, la caméra s'envole vers le lieu et une fiche s'ouvre avec le résumé et le lien vers l'article. Les routes du pétrole partent d'Ormuz en arcs animés.

En faisant défiler vers le bas : l'actu du jour, les articles (Culture G), les dossiers pour comprendre, puis les quiz.

Pour qu'une actu apparaisse sur le globe, il suffit de lui donner un champ `geo` dans `data/news.js`.

## L'onglet Chiffres

Un second globe 3D colore chaque pays selon l'**inflation**, le **chômage** ou la **croissance** (sélecteur en haut). Plus la valeur est élevée, plus le pays est clair et en relief. On touche un pays pour voir son chiffre ; un classement en barres reprend toutes les valeurs, avec leur date et leurs sources.

Sous le classement, des **zooms** racontent un fait marquant avec un graphique, par exemple « La France détruit plus d'emplois qu'elle n'en crée » (solde trimestriel de l'emploi privé, Insee), comparé aux créations et défaillances d'entreprises. Ils sont dans `focus`, à la fin de `data/indicators.js`.

Les données sont dans `data/indicators.js` (clés = codes ISO numériques des pays, contours dans `data/countries.js`). Elles doivent être mises à jour à la main ou par la routine quotidienne.

## Les trois parties

L'appli est organisée en trois grandes parties, accessibles depuis la barre du haut :

1. **Actu** : l'actualité économique et géopolitique, traitée ensemble parce qu'elles sont liées. Chaque actu a un lieu sur le globe, une région (Europe, Amériques, Moyen-Orient, Afrique, Asie) et des filtres par thème et par région (`data/news.js`).
2. **Cours** : comprendre les enjeux (inflation, droits de douane, routes maritimes, puces, sanctions, dollar), avec quiz et lexique (`data/content.js`).
3. **Articles** : analyses, recherches et Culture G rédigées par l'auteur, signées (`data/culture.js`, modèle dans [`contenu/MODELE_FICHE.md`](contenu/MODELE_FICHE.md)).

En plus : le **Focus industrie** (`data/focus.js`), chaque semaine une industrie avec un objet 3D, des points cliquables et **« L'enjeu de la semaine »** (`weekly` : la question de la semaine, chiffres, explication et dates « À suivre ») ; et l'onglet **Chiffres** (inflation, chômage, croissance par pays sur un globe, et zooms comme l'emploi en France).

## Ce que contient le prototype

- 6 dossiers : inflation et taux, droits de douane, routes maritimes, semi-conducteurs et Taïwan, sanctions, dollar
- Un lexique de 23 mots avec recherche
- Des quiz par dossier et un « grand quiz »
- Suivi des dossiers lus (enregistré sur l'appareil)
- Design inspiré des pages produit d'Apple : fond noir, textes en Times New Roman, barre flottante translucide, apparitions au défilement
- **PWA** : installable sur l'écran d'accueil du téléphone et utilisable hors connexion

## Sources

Chaque fait est sourcé. Dans les fichiers de données, `[1]` après une phrase renvoie à la première source de la liste `sources` : l'appli affiche le nom de la source entre parenthèses, avec un lien, et la liste complète numérotée en bas de page. Les chiffres clés ont aussi leur source (`src`).

## Cartes et graphiques interactifs

Chaque dossier, actu ou fiche peut avoir des `visuals` (voir `viz.js`) :
- **carte** (`kind: "map"`) : lieux cliquables avec zoom animé, pays mis en valeur ; fond de carte Natural Earth (domaine public) généré par `tools/build-map.mjs`
- **graphique** (`kind: "chart"`, en barres ou en ligne) : valeurs au toucher, tableau des données consultable

Une photo d'en-tête peut aussi être ajoutée avec `image: { src, alt, credit }`.

## Lancer l'application

Aucune installation nécessaire :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

Pour l'installer sur un téléphone, il suffit de l'héberger (GitHub Pages, Netlify, Vercel…) puis, depuis le navigateur du téléphone, « Ajouter à l'écran d'accueil ».

## Ajouter un dossier

Tout le contenu est dans [`data/content.js`](data/content.js). Copier un dossier existant, changer son `id`, et remplir les champs. Les `terms` doivent correspondre à des `id` du lexique.

## Pistes pour la suite

- **Actu du jour** : un flux quotidien de 2-3 sujets brûlants (sources fiables → résumé assisté par IA → relecture humaine avant publication)
- **Cartes interactives** (détroits, alliances, sanctions)
- **Fiches pays** : économie, régime politique, alliances, ressources
- **Notifications** : « Ton explication du jour est prête »
- **Parcours** : séries de dossiers à suivre (ex. « Comprendre l'énergie en 5 étapes »)
- **Application native** (React Native / Expo) si besoin de passer par les stores

## Crédits

- Images de la Terre : NASA Blue Marble, relief et nuages (domaine public), via le paquet [three-globe](https://github.com/vasturiano/three-globe)
- Globe 3D : [globe.gl](https://github.com/vasturiano/globe.gl) (licence MIT), basé sur three.js
- Fonds de carte 2D et contours des pays : Natural Earth (domaine public)
- Indicateurs : FMI (prévisions de croissance), instituts statistiques nationaux via Trading Economics (inflation, chômage)
