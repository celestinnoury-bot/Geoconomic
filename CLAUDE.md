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
- `prototypes/jeu-quiz.html` : prototype « Géoconomic Duel », **deux modes seulement** (choix de l'auteur) : 1) le 1 contre 1 en différé, 7 duels « avant ou après » entre faits datés de niche (`FACTS`, ~100 faits, paires à 1–30 ans d'écart, jamais les mêmes), par code ou adversaire au hasard (collection `matchs`, champ `open`), celui qui en situe le plus gagne : victoire 17 points, égalité 7, défaite 0 (« Bah alors ? On a perdu ? », textes de fin traduisibles dans `TXT`), match retour après 4 h ; 2) le défi du jour, 5 questions identiques pour tous (3 avant/après à 3 points, 2 années à écrire : 3 pile, 2 à 2 ans, 1 à 5 ans). Pas de direct, pas de parcours, pas de mort subite. Points partagés (`joueurs`), grades : 1er « Maître du savoir », top 5 « Élite du savoir » (logo et bordure dorés). Publié à part : https://claude.ai/artifact/Kg6VKz8e5mH1mDVf3Uu3dK (capacités db + user).
- L'auteur a fait retirer toute page « Album » de l'appli (ni cartes à collectionner, ni album des lieux) : ne pas en remettre.

## En attente de l'auteur

- Ajouter le dépôt à la routine (sinon le push échoue chaque matin).
- Adresse e-mail pro pour le formulaire d'idées (`data/auteur.js`, `contact` vide).
- Hébergement public, prestataire de paiement, statut micro-entreprise.
