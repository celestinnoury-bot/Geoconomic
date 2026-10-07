# Géoconomique

L’économie mondiale expliquée simplement : l’actu économique décodée et les notions de base (inflation, taux directeurs, commerce international, FMI, OMC, PIB), pour tout le monde.

C’est une application web installable (PWA) : elle s’ouvre dans n’importe quel navigateur, sur téléphone comme sur ordinateur, et peut s’ajouter à l’écran d’accueil.

## Modifier le contenu

Tout le texte est dans [`contenu.js`](contenu.js) :
- `TOPICS` : les fiches « Comprendre »
- `NEWS` : les actus décodées

## Fichiers

- `index.html` : la page
- `styles.css` : l’apparence (couleurs, polices, mise en page)
- `app.js` : la navigation entre les écrans
- `sw.js` : le fonctionnement hors connexion
- `manifest.webmanifest` et `icons/` : l’installation sur l’écran d’accueil

## Mise en ligne

Chaque modification envoyée sur la branche `main` est publiée automatiquement sur GitHub Pages.

Pour tester sur son ordinateur : `python3 -m http.server` puis ouvrir http://localhost:8000.
