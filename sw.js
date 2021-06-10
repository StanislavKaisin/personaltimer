const staticCacheName = "PersonalTimer";

const assetsUrls = [
  "index.html",
  "index.js",
  "5minTimer.js",
  "index.css",
  "Alarm1.mp3",
  "Bells1.mp3",
  "Bells2.mp3",
];

// self.addEventListener("install", async (event) => {
//   const cache = await caches.open(staticCacheName);
//   await cache.addAll(assetsUrls);
// });

self.addEventListener("install", (event) => {
  const cache = caches.open(staticCacheName);
  cache.addAll(assetsUrls);
});

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});

// cache strategy
async function cacheFirst(request) {
  // const cached = await caches.match(request);
  const cached = caches.match(request);
  
  // return cached ?? (await fetch(request));
  return cached;
}
