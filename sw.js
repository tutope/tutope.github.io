/* Service worker — hace que la app abra sin internet */
const CACHE = "plata-v1";
const ASSETS = [
  "./", "./index.html", "./config.js", "./manifest.json",
  "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png", "./favicon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // La API de tu Supabase: siempre a la red, nunca del caché
  if (/\.supabase\.co$/.test(url.hostname)) {
    e.respondWith(fetch(req));
    return;
  }

  // Librerías y fuentes: caché primero, y se guardan la primera vez (para que abra sin internet)
  if (url.origin !== location.origin) {
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return res;
      }).catch(() => hit))
    );
    return;
  }

  // Archivos propios: red primero, caché de respaldo (así una versión nueva entra sola)
  e.respondWith(
    fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
      return res;
    }).catch(() => caches.match(req).then(r => r || caches.match("./index.html")))
  );
});
