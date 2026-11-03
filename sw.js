
const CACHE_NAME = "goldcheck-v04";

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
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Serve saved app files when offline
self.addEventListener("fetch", event => {
  const request = event.request;

  if (request.method !== "GET") return;

  // Never cache external gold or currency API responses
  if (new URL(request.url).origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});
