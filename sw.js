self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Biarkan request diteruskan ke jaringan
  e.respondWith(fetch(e.request));
});
