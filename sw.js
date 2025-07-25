// sw.js
const CACHE_NAME = 'role-cache-v1';
const urlsToCache = [
  '/',
  '/estilo.css',
  '/images/logo-role.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});
