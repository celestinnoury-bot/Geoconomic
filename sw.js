// Service worker : met l'application en cache pour qu'elle marche hors connexion.
// Pense à changer la version quand tu modifies des fichiers, pour forcer la mise à jour.
const CACHE = "geoconomic-v8";
const FILES = [
  "./",
  "index.html",
  "styles.css",
  "i18n.js",
  "app.js",
  "viz.js",
  "globe.js",
  "car3d.js",
  "data/content.js",
  "data/news.js",
  "data/culture.js",
  "data/etudes.js",
  "data/focus.js",
  "data/world.js",
  "data/countries.js",
  "data/indicators.js",
  "data/conflits.js",
  "data/couches.js",
  "data/lettres.js",
  "data/auteur.js",
  "data/anecdotes.js",
  "data/iso2.js",
  "manifest.webmanifest",
  "assets/icon.svg",
  "assets/icon-180.png",
  "assets/icon-192.png",
  "assets/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

// Réseau d'abord (pour avoir le contenu le plus frais), cache en secours.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});
