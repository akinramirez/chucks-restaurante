const CACHE_NAME = "restaurant-v1"
const cacheUrls = ["/offline/view.html","/offline/style.css","/offline/map.png"];

self.addEventListener('install', function(ev) {
    // console.log("SW instalado");
    caches.open(CACHE_NAME)
        .then(function(cache) {
        //   console.log('Cache abierto');
          return cache.addAll(cacheUrls);
        });
  });
  
self.addEventListener('activate', function(ev) {
    ev.waitUntil(
        caches.keys().then(function(cache_names){
            // console.log(cache_names)
            return Promise.all(
                cache_names.map(function(cache_name){
                    if(CACHE_NAME!==cache_name){
                        return caches.delete(cache_name)
                    }
                })
            )
        })
    )
})

self.addEventListener('fetch', function(ev) {
    // console.log(ev.request)    
    ev.respondWith(
        caches.match(ev.request)
            .then(function(response) {
                if (response) {
                    // console.log("Estoy en el cache y te ahorre una peticion")
                    return response; // Devolviendo del cache
                }
                    // console.log("No estoy en el cache")
                    return fetch(ev.request)
            }).catch(function (err) {
                if(ev.request.mode=="navigate"){
                    return caches.match("/offline/view.html")
                }
            })
    )
});
