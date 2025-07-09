self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("codex-cache").then(cache =>
      cache.addAll([
        "index.html", "manifest.json", "icon.png",
        "bgm.mp3", "phone.mp3", "footsteps.mp3", "whisper.mp3", "masked.png"
      ])
    )
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});