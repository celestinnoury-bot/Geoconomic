// Service worker : met l'application en cache pour qu'elle marche hors connexion.
// Pense à changer la version quand tu modifies des fichiers, pour forcer la mise à jour.
const CACHE = "geoco-v2";
const FILES = [
  "./",
  "index.html",
  "styles.css",
  "app.js",
  "data/content.js",
  "manifest.webmanifest",
  "assets/icon.svg"
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
