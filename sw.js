(function (g) {
  if (typeof g.globalThis === "undefined") g.globalThis = g;
  function def(o, k, v) {
    if (!o[k]) Object.defineProperty(o, k, { value: v, writable: true, configurable: true });
  }
  def(String.prototype, "replaceAll", function (s, r) {
    if (s instanceof RegExp) return this.replace(s, r);
    return this.split(s).join(typeof r === "function" ? r(s) : r);
  });
  def(String.prototype, "trimStart", String.prototype.trimLeft);
  def(String.prototype, "trimEnd", String.prototype.trimRight);
  def(Object, "fromEntries", function (it) {
    var o = {};
    Array.from(it).forEach(function (e) { o[e[0]] = e[1]; });
    return o;
  });
  def(Object, "hasOwn", function (o, k) { return Object.prototype.hasOwnProperty.call(o, k); });
  def(Array.prototype, "flat", function (d) {
    d = d === undefined ? 1 : Number(d);
    return d < 1 ? Array.prototype.slice.call(this) : Array.prototype.reduce.call(this, function (a, v) {
      return a.concat(Array.isArray(v) ? Array.prototype.flat.call(v, d - 1) : v);
    }, []);
  });
  def(Array.prototype, "flatMap", function (f, t) { return Array.prototype.map.call(this, f, t).flat(); });
  def(Promise.prototype, "finally", function (f) {
    var P = this.constructor;
    return this.then(function (v) { return P.resolve(f()).then(function () { return v; }); },
      function (e) { return P.resolve(f()).then(function () { throw e; }); });
  });
  def(Promise, "allSettled", function (ps) {
    return Promise.all(Array.from(ps).map(function (p) {
      return Promise.resolve(p).then(function (v) { return { status: "fulfilled", value: v }; },
        function (e) { return { status: "rejected", reason: e }; });
    }));
  });
  if (typeof g.queueMicrotask !== "function") g.queueMicrotask = function (f) { Promise.resolve().then(f); };
})(typeof self !== "undefined" ? self : this);
var CACHE_NAME = "stremio-vidaa-u3-u3c";
var ASSETS = [
  "./",
  "./PlusJakartaSans.ttf",
  "./addons.chunk.js",
  "./checker.svg",
  "./core.chunk.js",
  "./details.chunk.js",
  "./discover.chunk.js",
  "./empty.png",
  "./home.chunk.js",
  "./icon.png",
  "./index.html",
  "./library.chunk.js",
  "./login.chunk.js",
  "./logo.png",
  "./main.js",
  "./player.chunk.js",
  "./runtime.js",
  "./search.chunk.js",
  "./service.js",
  "./settings.chunk.js",
  "./stremio_core_web_bg.wasm",
  "./translations0.chunk.js",
  "./translations1.chunk.js",
  "./translations10.chunk.js",
  "./translations11.chunk.js",
  "./translations12.chunk.js",
  "./translations13.chunk.js",
  "./translations14.chunk.js",
  "./translations15.chunk.js",
  "./translations16.chunk.js",
  "./translations17.chunk.js",
  "./translations18.chunk.js",
  "./translations19.chunk.js",
  "./translations2.chunk.js",
  "./translations20.chunk.js",
  "./translations21.chunk.js",
  "./translations22.chunk.js",
  "./translations23.chunk.js",
  "./translations24.chunk.js",
  "./translations25.chunk.js",
  "./translations26.chunk.js",
  "./translations27.chunk.js",
  "./translations28.chunk.js",
  "./translations29.chunk.js",
  "./translations3.chunk.js",
  "./translations30.chunk.js",
  "./translations31.chunk.js",
  "./translations32.chunk.js",
  "./translations33.chunk.js",
  "./translations34.chunk.js",
  "./translations35.chunk.js",
  "./translations36.chunk.js",
  "./translations37.chunk.js",
  "./translations38.chunk.js",
  "./translations39.chunk.js",
  "./translations4.chunk.js",
  "./translations40.chunk.js",
  "./translations41.chunk.js",
  "./translations42.chunk.js",
  "./translations43.chunk.js",
  "./translations44.chunk.js",
  "./translations45.chunk.js",
  "./translations46.chunk.js",
  "./translations47.chunk.js",
  "./translations48.chunk.js",
  "./translations49.chunk.js",
  "./translations5.chunk.js",
  "./translations6.chunk.js",
  "./translations7.chunk.js",
  "./translations8.chunk.js",
  "./translations9.chunk.js",
  "./v5-worker.js",
  "./video.chunk.js",
  "./webOSTV.js",
  "./webtorrent-sw.min.js",
  "./webtorrent.min.js"
];
try {
  importScripts("./webtorrent-sw.min.js");
} catch (e) {
}
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});
self.addEventListener("activate", function(e) {
  e.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(n) {
          return n !== CACHE_NAME;
        }).map(function(n) {
          return caches.delete(n);
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});
self.addEventListener("fetch", function(e) {
  var req = e.request;
  if (req.method !== "GET") return;
  if (req.url.indexOf(self.location.origin) !== 0) return;
  if (new URL(req.url).pathname.indexOf("/webtorrent") === 0) return;
  if (req.headers && req.headers.get("range")) return;
  if (/\.(mkv|mp4|m4v|webm|m3u8|ts|mpd|mov)(\?|$)/i.test(req.url)) return;
  var normalizedRequest = req;
  if (req.url.indexOf("?") !== -1) {
    var url = new URL(req.url);
    url.search = "";
    normalizedRequest = new Request(url.toString());
  }
  function updateCacheFromNetwork() {
    return fetch(req).then(function(response) {
      if (response && response.status === 200) {
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(normalizedRequest, clone);
        });
      }
      return response;
    });
  }
  var isAppShellRequest = req.mode === "navigate" || req.destination === "document" || req.destination === "script" || req.destination === "worker" || req.destination === "font" || req.url.endsWith(".html") || req.url.endsWith(".js") || req.url.endsWith(".wasm");
  if (isAppShellRequest) {
    e.respondWith(
      updateCacheFromNetwork().catch(function() {
        return caches.match(normalizedRequest);
      })
    );
    return;
  }
  e.respondWith(
    caches.match(normalizedRequest).then(function(cached) {
      var fetchPromise = updateCacheFromNetwork().catch(function() {
        return cached;
      });
      return cached || fetchPromise;
    })
  );
});
self.addEventListener("message", function(e) {
  if (e.data === "skipWaiting") self.skipWaiting();
});
