const staticCacheName = "PersonalTimer-v2";

const assetsUrls = [
  "index.html",
  "index.js",
  "5minTimer.js",
  "index.css",
  "Alarm1.mp3",
  "Bells1.mp3",
  "Bells2.mp3",
];

self.addEventListener("install", async (event) => {
  const cache = await caches.open(staticCacheName);
  await cache.addAll(assetsUrls);
});

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});

// cache strategy
async function cacheFirst(request) {
  const cached = await caches.match(request);
  // return cached ?? (await fetch(request));
  return cached;
}

// remove old sw
self.addEventListener("activate", async (event) => {
  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames
      .filter((name) => {
        return name !== staticCacheName;
      })
      .map((name) => caches.delete(name))
  );
});
