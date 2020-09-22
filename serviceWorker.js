const scratch = "scratch-site";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js"
  //any other assets 
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(scratch).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})