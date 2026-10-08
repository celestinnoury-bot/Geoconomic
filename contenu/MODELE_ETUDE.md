# Étude de cas : mode d'emploi

La rubrique **Étude de cas** est en tête de la page Actu. Elle a deux parties, toutes deux dans `data/etudes.js` :

1. **Le podcast** (`podcast`) : tes épisodes enregistrés, postés au fur et à mesure. Un épisode peut traiter une **actu du jour** (`news`), une **étude de cas** (`cas`), ou les deux. Il apparaît alors aussi sur la page de l'actu, et la carte de l'actu porte la mention « 🎙️ En podcast ».
2. **Les études de cas** (`cas`) : tes analyses écrites, qui décortiquent une actu de A à Z.

Le plus récent va **en premier** dans chaque liste.

**Offre du podcast :** chaque lecteur peut écouter **2 épisodes offerts** au choix (`offre.freeListens` dans `data/etudes.js`), ensuite il faut l'abonnement Géoconomic+ (page `#/abonnement`). Un épisode avec `free: true` reste toujours gratuit (bande-annonce, épisode spécial). Pour l'instant le compteur est gardé sur l'appareil du lecteur : un vrai blocage demandera des comptes et un paiement (au lancement public). Après chaque ajout, lance `node tools/check-content.mjs`.

---

## Poster un épisode de podcast

1. Enregistre-toi (téléphone, Audacity, GarageBand…), exporte en **MP3** (96 à 128 kbit/s suffisent pour la voix : environ 1 Mo par minute).
2. Copie le fichier dans `assets/podcast/`, par exemple `assets/podcast/ep01-ormuz.mp3`.
3. Ajoute l'épisode en tête de `podcast` :

```js
{
  id: "ep01-ormuz",                 // unique, sans espace ni accent
  number: 1,
  title: "Ormuz : comment un détroit fait flamber ton plein",
  date: "2026-10-10",               // AAAA-MM-JJ
  duration: "12 min",
  audio: "assets/podcast/ep01-ormuz.mp3",   // ou une adresse https:// (Spotify, Ausha…)
  summary: "Une ou deux phrases sur ce dont tu parles.",
  cas: "ormuz-plein",               // facultatif : l'étude de cas écrite qui va avec
  news: ["2026-10-07-ormuz"]        // facultatif : les actus traitées dans l'épisode
}
```

Pour un épisode sur l'actu seulement, enlève la ligne `cas` et mets les identifiants des actus dans `news` (l'identifiant est la fin de l'adresse de l'actu, après `#/actu/`).

Si tu n'as pas encore le son, mets `audio: null` : l'épisode s'affiche avec « Audio bientôt disponible ».

Astuce : si tu me donnes simplement le fichier audio et le titre, je m'occupe du reste.

---

## Écrire une étude de cas

Écris-la comme tu veux (texte, notes, liens vers tes sources) : je la mets en forme. Le format est le suivant :

```js
{
  id: "mon-etude",
  author: "Ton nom",
  date: "2026-10-12",
  theme: "eco",                     // eco, geo ou mix
  title: "Le titre",
  hook: "Deux phrases qui donnent envie de lire.",
  question: "La question à laquelle l'étude répond ?",
  chain: [                          // la chaîne de cause à effet, étape par étape
    { label: "Le choc", text: "Ce qui s'est passé [1]." },
    { label: "La conséquence", text: "Ce que ça a provoqué [2]." }
  ],
  sections: [
    { title: "Le contexte", paragraphs: ["…", "…"] },
    { title: "Gagnants et perdants", paragraphs: ["…"] }
  ],
  takeaways: ["Leçon 1", "Leçon 2", "Leçon 3"],   // « Ce qu'il faut retenir »
  news: ["2026-10-07-ormuz"],       // facultatif : les actus liées
  sources: [
    { short: "Nom court", name: "Nom complet de la source", url: "https://…" }
  ]
}
```

Règles :
- Chaque chiffre et chaque fait précis porte sa source : `[1]` renvoie à la première source de la liste, `[2]` à la deuxième…
- La première phrase de chaque paragraphe s'affiche en gras : fais-en l'idée principale.
- L'étude d'exemple (« Du détroit d'Ormuz à ton plein de gazole », signée « exemple ») est à remplacer par les tiennes.
