# Géoco : comprendre le monde en 3 minutes

Une application qui **vulgarise l'actualité économique et géopolitique** pour la rendre accessible à tout le monde, sans jargon.

## Le concept

Chaque sujet est un **dossier court** construit toujours de la même façon :

1. **L'essentiel en 30 secondes** : 3 points à retenir
2. **Le contexte** en quelques sections courtes
3. **Et moi, dans tout ça ?** : l'impact concret sur ta vie (prix, emploi, voyages…)
4. **Les chiffres à retenir**
5. **Les mots pour comprendre**, reliés au lexique
6. **Un mini-quiz** pour vérifier ce qu'on a retenu

## Ce que contient le prototype

- 6 dossiers : inflation et taux, droits de douane, routes maritimes, semi-conducteurs et Taïwan, sanctions, dollar
- Un lexique de 23 mots avec recherche
- Des quiz par dossier et un « grand quiz »
- Suivi des dossiers lus (enregistré sur l'appareil)
- Design inspiré des pages produit d'Apple : fond noir, grande typo (SF Pro sur iPhone/iPad/Mac), barre flottante translucide, apparitions au défilement
- **PWA** : installable sur l'écran d'accueil du téléphone et utilisable hors connexion

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
