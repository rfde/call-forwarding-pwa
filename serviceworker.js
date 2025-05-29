const cacheName = 'cfw-app-cache-v1';
const filesToCache = [
    "index.html",
    "icon.svg",
    "icon192.png",
    "icon512.png",
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});