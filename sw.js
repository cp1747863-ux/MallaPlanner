const CACHE_NAME = 'mallaplanner-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './js/mallas.js',
  './js/app.js',
  'https://cdn.tailwindcss.com'
];

// Instalación: guardar archivos esenciales en caché
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activación: limpiar cachés antiguas si se actualiza la versión
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estrategia de respuesta: Buscar en caché primero, si no hay red, servir desde caché
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        // Retorno de contingencia en caso de estar offline y pedir una ruta nueva
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
