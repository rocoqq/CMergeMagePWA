self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('merge-mage-cache').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './index.js',
        './index.wasm',
        './index.pck',
        './index.icon.png',
        './index.apple-touch-icon.png',
        './index.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});