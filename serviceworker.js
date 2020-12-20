var CACHE_NAME = "zanes-apps-cache";
var urlsToCache = [
  //index
  "/",
  "/index",
  "/404",
  "/about",
  "/archive",
  //ui
  "/ui/christmaslights.js",
  //2048
  "/2048/",
  "/2048/index",
  "/2048/style/main.scss",
  "/2048/style/main.css",
  "/2048/style/helpers.scss",
  "/2048/js/animframe_polyfill.js",
  "/2048/js/application.js",
  "/2048/js/bind_polyfill.js",
  "/2048/js/classlist_polyfill.js",
  "/2048/js/game_manager.js",
  "/2048/js/grid.js",
  "/2048/js/html_actuator.js",
  "/2048/js/keyboard_input_manager.js",
  "/2048/js/local_storage_manager.js",
  "/2048/js/tile.js",
  //ChromeDino
  "/chromedino",
  "/chromedino/index",
  "/chromedino/dino.js",
  "/chromedino/100-error-offline.png",
  "/chromedino/100-offline-sprite.png",
  "/chromedino/200-error-offline.png",
  "/chromedino/200-offline-sprite.png",
  //Colorsplosion
  "/colorsplosion",
  "/colorsplosion/index",
  "/colorsplosion/colorsplosion",
  "/colorsplosion/blob",
  "/colorsplosion/trail",
  //ColorSwirl
  "/colorswirl/colorswirl",
  "/colorswirl/colorswirl.js",
  "/colorswirl/dat.gui.min.js",
  "/colorswirl/paint-drops.jpg",
  "/colorswirl/privacy",
  //Corey (virtual assisstant)
  "/corey",
  "/corey/index",
  "/corey/v1",
  "/corey/v2",
  "/corey/v3",
  "/corey/v4",
  "/corey/external/dev.jpg",
  "/corey/external/spectrum.css",
  "/corey/external/spectrum.js",
  "/corey/external/trigger.js",
  "/corey/external/wdtfs.mp3",
  //Peace
  "/peace",
  "/peace/index",
  "/peace/nature",
  "/peace/breathe",
  "/peace/dat.gui.min.js",
  "/peace/breathe-icon.svg",
  "/peace/icon.png",
  "/peace/nature.jpg",
  "/peace/colorswirl.js",
  //WebChat
  "/webchat/chat",
  "/webchat/new",
  "/webchat/test",
  "/webchat/logo.ico",
  //SPA
  "/app",
  "/chat",
  "/christmas-countdown-2020",
  "/imessage",
  "/index-v1",
  "/index-v2",
  "/index-v3",
  "/mmc",
  "/numberguessing",
  "/peopleselector",
  "/quarantine-countdown",
  "/search",
  "/squery",
  "/stack",
  "/status",
  "/tic-tac-toe",
  "/todo",
  "/whiteboard"
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', function(event) {
  console.log('Updating Service Worker...')
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
          return true
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
