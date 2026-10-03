const CACHE_NAME = 'mallaplanner-v2';

// Lista exacta de archivos locales que existen en tu repositorio GitHub
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './js/mallas.js',
  './js/app.js'
];

// Instalación: Guardar recursos esenciales en caché
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activación: Limpiar cachés antiguas si cambias la versión
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

// Estrategia de respuesta: Buscar en caché, si no está pedir a la red
self.addEventListener('fetch', (event) => {
  // Ignorar peticiones que no sean GET (ej. formularios)
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        // Si no hay red y es navegación, entregar index.html
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
