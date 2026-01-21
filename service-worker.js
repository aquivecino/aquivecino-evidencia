const CACHE = "av-evidencia-v4";

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c =>
      c.addAll([
        "/aquivecino-evidencia/",
        "/aquivecino-evidencia/index.html",
        "/aquivecino-evidencia/manifest.json",
        "/aquivecino-evidencia/icon-192.png",
        "/aquivecino-evidencia/icon-512.png"
      ])
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

