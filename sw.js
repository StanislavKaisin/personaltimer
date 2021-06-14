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

/*
General
Request URL: https://stanislavkaisin.github.io/personaltimer/Bells2.mp3
Request Method: GET
Status Code: 407 authenticationrequired (from disk cache)
Referrer Policy: strict-origin-when-cross-origin

Response Headers
Content-Length: 4010
Proxy-Authenticate: NTLM
Proxy-Authenticate: Basic realm="KOVALSKY PROXY"
Proxy-Connection: Keep-Alive

Request headers
Accept-Encoding: identity;q=1, *;q=0
Range: bytes=0-
Referer: https://stanislavkaisin.github.io/personaltimer/
sec-ch-ua: " Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"
sec-ch-ua-mobile: ?1
User-Agent: Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36
*/
