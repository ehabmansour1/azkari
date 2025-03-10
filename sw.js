self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("azkari-cache")
      .then((cache) =>
        cache.addAll([
          "index.html",
          "about.html",
          "praytime.html",
          "pray.html",
          "quran.html",
          "radio.html",
          "javascript/azkar.js",
          "javascript/dark.js",
          "javascript/main.js",
          "javascript/radio.js",
          "images/book-solid.ico",
          "fonts/uthmantn.otf",
          "css/all.min.css",
          "css/main.css",
          "css/normalize.css",
        ])
      )
  );
});

self.addEventListener("activate", (event) => {
  console.log("sw Activated!");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request.url).then((file) => {
      if (file) {
        return file;
      } else {
        return fetch(event.request.url);
      }
    })
  );
});
