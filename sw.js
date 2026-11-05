
const CACHE_NAME = "goldcheck-v05";

const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

// Save the app files for offline use
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      cache.addAll(APP_FILES)
    )
  );
  self.skipWaiting();
});

// Remove old app caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key =>
  key.startsWith("goldcheck-") &&
  key !== CACHE_NAME
)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});


/* ===== START: NETWORK-FIRST OFFLINE CACHE ===== */

// Serve fresh files when online and cached files when offline.
self.addEventListener("fetch", event => {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Never intercept external gold or currency APIs.
  if (url.origin !== self.location.origin) return;

  // Only cache GoldCheck's own app files.
  const appURLs = APP_FILES.map(path =>
    new URL(path, self.registration.scope).href
  );

  if (!appURLs.includes(url.href)) return;

  event.respondWith((async () => {
    try {
      const response = await fetch(request);

      // Update the offline copy after a successful request.
      if (response.ok) {
        try {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(request, response.clone());
        } catch (cacheError) {
          console.warn("Cache update failed:", cacheError);
        }
      }

      return response;

    } catch (error) {
      // Network unavailable: use the saved app file.
      const cached = await caches.match(request);

      if (cached) return cached;

      return Response.error();
    }
  })());
});

/* ===== END: NETWORK-FIRST OFFLINE CACHE ===== */
