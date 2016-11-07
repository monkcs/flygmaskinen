var version = 'v1::';

self.addEventListener("install", function(event) {
  console.log('ServiceWorker: install event in progress');
  event.waitUntil(
    caches
      /* You can open a cache by name, and this method returns a promise. We use
         a versioned cache name here so that we can remove old cache entries in
         one fell swoop later, when phasing out an older service worker.
      */
      .open(version + 'fundamentals')
      .then(function(cache) {
        /* After the cache is opened, we can fill it with the offline fundamentals.
           The method below will add all resources we've indicated to the cache,
           after making HTTP requests for each of them.
        */
        return cache.addAll([
          '/',
          '/css/global.css',
          '/js/global.js'
        ]);
      })
      .then(function() {
        console.log('WORKER: install completed');
      })
  );
});
/*// Setup Service Worker
function setupServiceWorker() {
    if ('serviceWorker' in navigator) {
        console.log('Javascript: service worker registration in progress');
        navigator.serviceWorker.register('/serviceworker.js').then(function () {
            console.log('Javascript: service worker registration complete');
        }, function () {
            console.log('Javascript: service worker registration failure');
        });
    }
    else {
        console.log('Javascript: service worker is not supported');
    }
}*/