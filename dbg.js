(function () {
  if (!/debug/.test(location.search)) return;
  var t0 = Date.now();
  function box() {
    var d = document.getElementById("dbgx");
    if (!d) {
      d = document.createElement("div");
      d.id = "dbgx";
      d.style.cssText = "position:fixed;left:0;right:0;bottom:0;z-index:99999;background:#a00;color:#fff;font:16px monospace;max-height:55%;overflow:hidden;padding:4px";
      (document.body || document.documentElement).appendChild(d);
    }
    return d;
  }
  function log(s) {
    var line = ((Date.now() - t0) / 1000).toFixed(1) + "s " + String(s).slice(0, 220);
    try { box().innerHTML += line.replace(/</g, "&lt;") + "<br>"; } catch (e) {}
  }
  window.__dbg = log;
  window.onerror = function (m, u, l, c) { log("ERR " + m + " @" + String(u).split("/").pop() + ":" + l + ":" + c); };
  window.addEventListener("unhandledrejection", function (e) {
    var r = e.reason;
    log("REJ " + (r && (r.stack || r.message) || r));
  });
  ["error", "warn"].forEach(function (k) {
    var orig = console[k];
    console[k] = function () {
      try { log(k.toUpperCase() + " " + Array.prototype.map.call(arguments, function (a) { return a && a.message ? a.message : typeof a === "object" ? JSON.stringify(a) : String(a); }).join(" ")); } catch (e) {}
      return orig.apply(console, arguments);
    };
  });
  var W = window.Worker;
  window.Worker = function (url, opts) {
    if (typeof url === "string") url += (url.indexOf("?") < 0 ? "?" : "&") + "dbg=1"; log("worker start " + url);
    var w = opts ? new W(url, opts) : new W(url);
    w.addEventListener("error", function (e) { log("WORKER ERR " + e.message + " @" + String(e.filename).split("/").pop() + ":" + e.lineno + ":" + e.colno); });
    w.addEventListener("message", function (e) {
      var d = e.data;
      if (d && d.__dbg) log("W: " + d.__dbg);
    });
    return w;
  };
  window.Worker.prototype = W.prototype;
  log("debug on, wasm=" + (typeof WebAssembly) + " TE=" + (typeof TextEncoder) + " TD=" + (typeof TextDecoder));
  setInterval(function () { log("tick"); }, 15000);
})();
