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
