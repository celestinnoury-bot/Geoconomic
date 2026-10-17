# Géoconomic : mémoire du projet

Application web (PWA) qui vulgarise l'actualité économique et géopolitique, autour d'un globe 3D.
Auteur : Célestin Noury (étudiant en économie). On lui parle **en français**, simplement, en le tutoyant.

## Où on en est

- Branche de travail : `claude/geoeconomic-news-app-9exkx9` (ne jamais pousser ailleurs, pas de pull request sans demande).
- Aperçu privé publié sur claude.ai : https://claude.ai/artifact/UxRba3w8oMS1KWe774hciT
  (`python3 tools/build-preview.py` puis republier `.preview/index.html` avec `root` = `.preview` et les fichiers modifiés dans `files`).
- Routine du matin (6 h 54, Paris) : trigger `trig_01TDbguMTo7mm9kg35hg2jQX`, consigne dans `contenu/ROUTINE_ACTU.md`.
  **Son push est refusé (403)** tant que l'auteur n'a pas ajouté le dépôt `celestinnoury-bot/geoconomic` à la routine sur claude.ai ;
  elle publie quand même l'aperçu, et ses actus se récupèrent depuis l'aperçu (`data/news.js`, `data/i18n/*.js`, `lettres/*.pdf`).
  Les actus du 10 octobre 2026 ont été perdues (seule la lettre PDF reste).

## Architecture (JS sans framework, pas de build)

- `index.html` charge `i18n.js`, les données `data/*.js` (`window.GEOCO.*`), puis `viz.js`, `globe.js`, `app.js` (routeur par `#/…`).
- `globe.js` : globe.gl. Accueil (`mount`, repères d'actus, vue sur la région du lecteur) et choroplèthes (`mountIndicators` ;
  le toucher choisit le pays sous le doigt via `toGlobeCoords`, pas le « survol » de globe.gl).
- Pages : accueil (globe + bandeau défilant qu'on peut faire glisser), Actu, Focus (Toyota Supra GT300 en 3D de vecarz, CC BY 4.0 : `assets/models/supra/` (json + géométrie binaire « -geo.wasm » (l'aperçu refuse .bin) + textures webp, fichiers séparés : les data:/blob: sont bloqués dans l'aperçu), converti de l'USDZ avec usd-core puis gltf-transform weld/simplify/quantize), Conflits (3 couches), Cours,
  Articles, Chiffres, Recherche (`#/recherche`), Focus : schéma « De la mine au client » (`chain` dans data/focus.js, globe aux flux animés `mountFlows` de globe.js, modes « L'essentiel » (`essentials`), « Tout voir » et visite guidée) avant la carte ; carte à couches (`map.layers` : lieux, `flows` fléchés, concurrence ; viz.js) et « face-à-face » (`rivals`) ; Enjeux passés (`#/enjeux`, depuis `pastWeekly` de data/focus.js), Langue et région (`#/reglages`), Géoconomic+ (`#/abonnement`), lettres, anecdotes.
- Liens directs : `#/chiffres/<indicateur>/<pays ISO num>`, `#/conflits/<couche>/<pays>`.

## Contenu et règles éditoriales

- Faits **sourcés** `[n]` → `sources`, jamais de chiffre de mémoire ; ton neutre ; sujets « sous la surface du glacier ».
- Actus : **faits marquants**, au plus 2 actus « chiffres » (inflation, taux…) par jour ; ids en minuscules sans accent.
- Une actu sur les taux/douane/détroits/puces/sanctions/dollar renvoie au cours lié (encadré « Le cours pour comprendre »).
- `node tools/check-content.mjs` doit afficher « Contenu OK » avant chaque commit.

## Langues

- Langue du téléphone (fr, en, es, de, it, pt), région déduite du fuseau horaire (ses actus d'abord).
- Interface : `contenu/traductions/<langue>/ui.json` ; contenu (en, es) : `contenu/traductions/<langue>/contenu-*.json`.
- `node tools/i18n-build.mjs --missing=en` liste ce qui reste à traduire ; `node tools/i18n-build.mjs` régénère `data/i18n/*.js`.
- Tout nouveau texte d'interface doit être ajouté dans les 5 `ui.json`.

## La lettre du matin (PDF)

- `node tools/build-lettre.mjs [date]` → `lettres/<date>.pdf` (« Le Journal ») + `lettres/<date>-sombre.pdf`, et `data/lettres.js`.
- Style **validé par l'auteur** : quotidien sur papier crème, lieu en tête d'article (« BANGKOK — »), texte justifié,
  une illustration par actu (petit graphique de presse, chiffres clés, ou silhouette du pays avec repère rouge),
  **un seul rouge d'accent** pour les infos importantes, colonne de droite : chiffre du jour, actus par région, point conflits ;
  derniers chiffres en bas. **Pas** de « Et toi, dans tout ça ? » ni de « Le saviez-vous ? » dans la lettre (le but : informer).
- Code : `tools/lettre-styles.mjs` (`journal`, `keynote`) et `tools/lettre-illus.mjs`.

## Géoconomic+ (prototype d'abonnement)

- 3,99 €/mois ou 39,99 €/an ; offre « Membres fondateurs » (50 premiers : 2 mois offerts puis 2,99 €/mois à vie).
- Réservé : cours d'approfondissement (`plus: true` dans `data/content.js`), archives (Focus et études de cas sauf le plus récent, enjeux des semaines passées,
  lettres au-delà des 7 dernières), un article sur deux, podcast au-delà de 2 épisodes. Toujours un aperçu gratuit.
- Codes et proches invités : `node tools/plus.mjs …` (empreintes SHA-256 dans `data/plus.js`). Codes : FAMILLE2026, FONDATEUR2026.
- Paiement et comptes pas encore branchés : voir `contenu/ABONNEMENT.md`.

## Prototypes

- `prototypes/jeu-nation.html` : prototype de jeu « Géoconomic Nations » (tirer un dirigeant du passé, bâtir son pays, aléas économiques à comprendre, cartes savoir, classement et crise du jour partagés au Sommet), publié à part : https://claude.ai/artifact/64FpMtQuNDyXxs1iX6Kk1b (capacités db + user). Pas dans l'appli.
- **Géoconomic Duel dans l'appli** : page à part `duel.html` (lien « Lancer un duel » dans « À toi de jouer » à l'accueil, flèche de retour vers l'appli). Elle est **générée** depuis le prototype : modifier `prototypes/jeu-quiz.html` puis `node tools/build-duel.mjs`. Un seul classement commun : celui du prototype publié (sa base db). Quand l'appli tourne sur claude.ai (`window.claude` présent), les liens vers `duel.html` ouvrent ce prototype en ligne dans un nouvel onglet (`DUEL_ONLINE` dans app.js) ; sinon `duel.html` s'ouvre et, sans base partagée, renvoie vers la version en ligne (`ONLINE_URL`, bouton « Voir le classement en direct »).
- **Duel du jour** (en tête des quiz du monde) : chaque jour un quiz du monde tiré au sort (`dayQuiz`, même pour tous, sauf « Tous les pays du monde »), joué une fois par 24 h, au choix seul, contre un ami (code) ou un adversaire au hasard ; meilleur pourcentage gagne, à égalité le plus rapide ; victoire +30, égalité +10 (`QD_PTS`) ; collection `qduels` (doc `code` {code, day, quiz, host, open, at}, doc `code-uid` {code, pct, secs, at}) ; pas de pause en duel. Ailleurs : bouton pause (le chrono s'arrête, les réponses sont floutées) et option « Sans chrono » (mêmes points ; hors duel, quand le temps est écoulé on peut aussi « Continuer sans chrono » ou voir son score ; en duel contre quelqu'un, le chrono reste obligatoire) ; globe zoomable (pincer, molette, boutons + / − / ⤢, jusqu'à ×10).
- **Quiz du monde** (façon JetPunk, dans l'onglet Jouer du Duel, `QUIZZES`) : listes à écrire (les noms se placent tout seuls, alias dans `ALIASES`) ou à cliquer sur un globe d3 (OPEP à 11, UE, voisins de la Chine, Afrique sans mer, capitales en B, Caspienne, bassin du Nil), « Les pays de l'actu » (placer sur le globe le pays d'actus récentes), classements à reconstituer (uranium WNA 2023 ; inflation et croissance tirées de l'onglet Chiffres, 5 pays tirés chaque jour), QCM (capitales piégeuses, monnaies/sièges/matières premières, histoire de Charles de Gaulle), « Tous les pays du monde » (195 : ONU + Vatican + Palestine, rangés par continent, 15 min ; liste `WORLD` et alias dans tools/build-quiz-data.mjs), « Toutes les réponses commencent par P / U / M » (type `clues` : définitions, la réponse se range en face) ; un nom qui est le début d'un autre encore à trouver (Niger/Nigeria) n'est validé qu'après une pause ou Entrée ; filtres Tous/Écrire/Globe/Classer/QCM ; indices (−2 points chacun) ; jusqu'à 20 points par quiz, une fois par jour. Données dans le bloc `#quiz-data` : `node tools/build-quiz-data.mjs` (à relancer quand les actus ou les chiffres changent) ; d3 7.8.5 depuis cdnjs.
- `prototypes/jeu-quiz.html` : prototype « Géoconomic Duel », **deux modes seulement** (choix de l'auteur) : 1) le 1 contre 1 en différé, 7 manches : 3 « avant ou après » et 2 questions « culture du monde » (QCM tirés des quiz du monde et `QS_LETTRES`, id `c` + empreinte du texte ; 1 point si juste) et 2 années à écrire (3e et 6e manches, le point au plus proche, à écart égal chacun marque ; réponses stockées en `res` : booléen ou écart en années), entre faits datés de niche (`FACTS`, ~100 faits, paires à 1–30 ans d'écart, jamais les mêmes), par code ou adversaire au hasard (collection `matchs`, champ `open`), celui qui gagne le plus de manches l'emporte : victoire 58 points, égalité 7, défaite 0 (« Bah alors ? On a perdu ? », textes de fin traduisibles dans `TXT`), match retour après 4 h ; 2) le défi du jour, 5 questions identiques pour tous (2 avant/après et 1 « culture du monde » à 15 points, 2 années à écrire : 15 pile puis 3 de moins par année d'écart, toujours entier ; 75 au maximum). Pas de direct, pas de parcours, pas de mort subite. Points partagés (`joueurs`), titres du top 5 du classement des points (`TITLES`) : 1er « Empereur des ténèbres de la mort éternelle », 2e « Sultan de puissance extrême, attention danger », 3e « Monarque nocif du savoir lumineux », 4e « Suzerain millénaire féroce et galvanisé », 5e « Potentat extrême, lucide présomption » ; puis un titre par place de la 6e à la 20e (`MORE_TITLES`, ex. « Archiduc ardent, mélancolie supersonique » ; style voulu : peu de sens mais stylé) ; pas de titre après la 20e place (choix de l'auteur, plus de tranches `BANDS`) ; logo et bordure dorés pour le top 5, couronne et bordure animée pour le 1er, en bleu marine et violet (au lieu de l'or : bordure, logo, pastille du titre, encadré du champion, 1re marche du podium) ; le 2e en rouge « attention danger » (bordure à rayures de chantier qui défilent, logo qui clignote), le 3e en vert toxique phosphorescent (« nocif » et « lumineux », bordure qui respire) ; 4e et 5e restent dorés ; le podium du classement garde le style de la capture de l'auteur (indigo façon Kahoot, médailles or/argent/bronze, noms blancs, 1er en violet clair) et la liste dessous est épurée (rang, nom, titre, points ; 4e et 5e en doré, sans pastille ni colonnes V/N) ; aperçus Normal / 4e-5e / 3e / 2e / 1er ; style : la famille de l'appli mais plus chaleureuse et humaine, pour se distinguer des actus (brun nuit, dégradé « éco » ambre-corail au lieu du bleu, Fraunces pour les titres, Figtree pour le texte, léger grain, trait fait main sous « après », pastilles colorées par joueur, phrases comme « Bien vu ! », « Ah, c'était serré ! ») ; podium du top 3 façon Kahoot (colonnes qui montent 3e, 2e puis 1er, médailles or/argent/bronze, rayons derrière, `.kpodium`), podium compact, puis tableau compact façon MPP (`.mtable` : en-tête Joueurs / V / N / Points, une ligne fine par joueur avec pastille, nom et titre en petit), 4e et 5e un peu plus hauts avec titre aux couleurs qui changent doucement. Planche des directions comparées (Paddock = course automobile façon chronométrage F1, Journal = style de la lettre, que l'auteur a aimé, Globe = style de l'appli) : `prototypes/jeu-directions.html`, https://claude.ai/artifact/Pjg7r57ZxmyKXdacFE9yjw. Publié à part : https://claude.ai/artifact/Kg6VKz8e5mH1mDVf3Uu3dK (capacités db + user).
- L'auteur a fait retirer toute page « Album » de l'appli (ni cartes à collectionner, ni album des lieux) : ne pas en remettre.

## En attente de l'auteur

- Ajouter le dépôt à la routine (sinon le push échoue chaque matin).
- Adresse e-mail pro pour le formulaire d'idées (`data/auteur.js`, `contact` vide).
- Hébergement public, prestataire de paiement, statut micro-entreprise.
