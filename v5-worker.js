"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/@babel/runtime/helpers/interopRequireDefault.js
  var require_interopRequireDefault = __commonJS({
    "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      module.exports = _interopRequireDefault2, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/typeof.js
  var require_typeof = __commonJS({
    "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
      function _typeof(o) {
        "@babel/helpers - typeof";
        return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
      }
      module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/regeneratorRuntime.js
  var require_regeneratorRuntime = __commonJS({
    "node_modules/@babel/runtime/helpers/regeneratorRuntime.js"(exports, module) {
      var _typeof = require_typeof()["default"];
      function _regeneratorRuntime() {
        "use strict";
        module.exports = _regeneratorRuntime = function _regeneratorRuntime2() {
          return e;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports;
        var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t2, e2, r2) {
          t2[e2] = r2.value;
        }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
        function define(t2, e2, r2) {
          return Object.defineProperty(t2, e2, {
            value: r2,
            enumerable: true,
            configurable: true,
            writable: true
          }), t2[e2];
        }
        try {
          define({}, "");
        } catch (t2) {
          define = function define2(t3, e2, r2) {
            return t3[e2] = r2;
          };
        }
        function wrap(t2, e2, r2, n2) {
          var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = Object.create(i2.prototype), c2 = new Context(n2 || []);
          return o(a2, "_invoke", {
            value: makeInvokeMethod(t2, r2, c2)
          }), a2;
        }
        function tryCatch(t2, e2, r2) {
          try {
            return {
              type: "normal",
              arg: t2.call(e2, r2)
            };
          } catch (t3) {
            return {
              type: "throw",
              arg: t3
            };
          }
        }
        e.wrap = wrap;
        var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
        function Generator() {
        }
        function GeneratorFunction() {
        }
        function GeneratorFunctionPrototype() {
        }
        var p = {};
        define(p, a, function() {
          return this;
        });
        var d = Object.getPrototypeOf, v = d && d(d(values([])));
        v && v !== r && n.call(v, a) && (p = v);
        var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
        function defineIteratorMethods(t2) {
          ["next", "throw", "return"].forEach(function(e2) {
            define(t2, e2, function(t3) {
              return this._invoke(e2, t3);
            });
          });
        }
        function AsyncIterator(t2, e2) {
          function invoke(r3, o2, i2, a2) {
            var c2 = tryCatch(t2[r3], t2, o2);
            if ("throw" !== c2.type) {
              var u2 = c2.arg, h2 = u2.value;
              return h2 && "object" == _typeof(h2) && n.call(h2, "__await") ? e2.resolve(h2.__await).then(function(t3) {
                invoke("next", t3, i2, a2);
              }, function(t3) {
                invoke("throw", t3, i2, a2);
              }) : e2.resolve(h2).then(function(t3) {
                u2.value = t3, i2(u2);
              }, function(t3) {
                return invoke("throw", t3, i2, a2);
              });
            }
            a2(c2.arg);
          }
          var r2;
          o(this, "_invoke", {
            value: function value(t3, n2) {
              function callInvokeWithMethodAndArg() {
                return new e2(function(e3, r3) {
                  invoke(t3, n2, e3, r3);
                });
              }
              return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
          });
        }
        function makeInvokeMethod(e2, r2, n2) {
          var o2 = h;
          return function(i2, a2) {
            if (o2 === f) throw Error("Generator is already running");
            if (o2 === s) {
              if ("throw" === i2) throw a2;
              return {
                value: t,
                done: true
              };
            }
            for (n2.method = i2, n2.arg = a2; ; ) {
              var c2 = n2.delegate;
              if (c2) {
                var u2 = maybeInvokeDelegate(c2, n2);
                if (u2) {
                  if (u2 === y) continue;
                  return u2;
                }
              }
              if ("next" === n2.method) n2.sent = n2._sent = n2.arg;
              else if ("throw" === n2.method) {
                if (o2 === h) throw o2 = s, n2.arg;
                n2.dispatchException(n2.arg);
              } else "return" === n2.method && n2.abrupt("return", n2.arg);
              o2 = f;
              var p2 = tryCatch(e2, r2, n2);
              if ("normal" === p2.type) {
                if (o2 = n2.done ? s : l, p2.arg === y) continue;
                return {
                  value: p2.arg,
                  done: n2.done
                };
              }
              "throw" === p2.type && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
            }
          };
        }
        function maybeInvokeDelegate(e2, r2) {
          var n2 = r2.method, o2 = e2.iterator[n2];
          if (o2 === t) return r2.delegate = null, "throw" === n2 && e2.iterator["return"] && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), "throw" === r2.method) || "return" !== n2 && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
          var i2 = tryCatch(o2, e2.iterator, r2.arg);
          if ("throw" === i2.type) return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
          var a2 = i2.arg;
          return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, "return" !== r2.method && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
        }
        function pushTryEntry(t2) {
          var e2 = {
            tryLoc: t2[0]
          };
          1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), this.tryEntries.push(e2);
        }
        function resetTryEntry(t2) {
          var e2 = t2.completion || {};
          e2.type = "normal", delete e2.arg, t2.completion = e2;
        }
        function Context(t2) {
          this.tryEntries = [{
            tryLoc: "root"
          }], t2.forEach(pushTryEntry, this), this.reset(true);
        }
        function values(e2) {
          if (e2 || "" === e2) {
            var r2 = e2[a];
            if (r2) return r2.call(e2);
            if ("function" == typeof e2.next) return e2;
            if (!isNaN(e2.length)) {
              var o2 = -1, i2 = function next() {
                for (; ++o2 < e2.length; ) if (n.call(e2, o2)) return next.value = e2[o2], next.done = false, next;
                return next.value = t, next.done = true, next;
              };
              return i2.next = i2;
            }
          }
          throw new TypeError(_typeof(e2) + " is not iterable");
        }
        return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
          value: GeneratorFunctionPrototype,
          configurable: true
        }), o(GeneratorFunctionPrototype, "constructor", {
          value: GeneratorFunction,
          configurable: true
        }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
          var e2 = "function" == typeof t2 && t2.constructor;
          return !!e2 && (e2 === GeneratorFunction || "GeneratorFunction" === (e2.displayName || e2.name));
        }, e.mark = function(t2) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define(t2, u, "GeneratorFunction")), t2.prototype = Object.create(g), t2;
        }, e.awrap = function(t2) {
          return {
            __await: t2
          };
        }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
          return this;
        }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
          void 0 === i2 && (i2 = Promise);
          var a2 = new AsyncIterator(wrap(t2, r2, n2, o2), i2);
          return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t3) {
            return t3.done ? t3.value : a2.next();
          });
        }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
          return this;
        }), define(g, "toString", function() {
          return "[object Generator]";
        }), e.keys = function(t2) {
          var e2 = Object(t2), r2 = [];
          for (var n2 in e2) r2.push(n2);
          return r2.reverse(), function next() {
            for (; r2.length; ) {
              var t3 = r2.pop();
              if (t3 in e2) return next.value = t3, next.done = false, next;
            }
            return next.done = true, next;
          };
        }, e.values = values, Context.prototype = {
          constructor: Context,
          reset: function reset(e2) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e2) for (var r2 in this) "t" === r2.charAt(0) && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t);
          },
          stop: function stop() {
            this.done = true;
            var t2 = this.tryEntries[0].completion;
            if ("throw" === t2.type) throw t2.arg;
            return this.rval;
          },
          dispatchException: function dispatchException(e2) {
            if (this.done) throw e2;
            var r2 = this;
            function handle(n2, o3) {
              return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
            }
            for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
              var i2 = this.tryEntries[o2], a2 = i2.completion;
              if ("root" === i2.tryLoc) return handle("end");
              if (i2.tryLoc <= this.prev) {
                var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
                if (c2 && u2) {
                  if (this.prev < i2.catchLoc) return handle(i2.catchLoc, true);
                  if (this.prev < i2.finallyLoc) return handle(i2.finallyLoc);
                } else if (c2) {
                  if (this.prev < i2.catchLoc) return handle(i2.catchLoc, true);
                } else {
                  if (!u2) throw Error("try statement without catch or finally");
                  if (this.prev < i2.finallyLoc) return handle(i2.finallyLoc);
                }
              }
            }
          },
          abrupt: function abrupt(t2, e2) {
            for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
              var o2 = this.tryEntries[r2];
              if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
                var i2 = o2;
                break;
              }
            }
            i2 && ("break" === t2 || "continue" === t2) && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
            var a2 = i2 ? i2.completion : {};
            return a2.type = t2, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
          },
          complete: function complete(t2, e2) {
            if ("throw" === t2.type) throw t2.arg;
            return "break" === t2.type || "continue" === t2.type ? this.next = t2.arg : "return" === t2.type ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : "normal" === t2.type && e2 && (this.next = e2), y;
          },
          finish: function finish(t2) {
            for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
              var r2 = this.tryEntries[e2];
              if (r2.finallyLoc === t2) return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
            }
          },
          "catch": function _catch(t2) {
            for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
              var r2 = this.tryEntries[e2];
              if (r2.tryLoc === t2) {
                var n2 = r2.completion;
                if ("throw" === n2.type) {
                  var o2 = n2.arg;
                  resetTryEntry(r2);
                }
                return o2;
              }
            }
            throw Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(e2, r2, n2) {
            return this.delegate = {
              iterator: values(e2),
              resultName: r2,
              nextLoc: n2
            }, "next" === this.method && (this.arg = t), y;
          }
        }, e;
      }
      module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/regenerator/index.js
  var require_regenerator = __commonJS({
    "node_modules/@babel/runtime/regenerator/index.js"(exports, module) {
      var runtime = require_regeneratorRuntime()();
      module.exports = runtime;
      try {
        regeneratorRuntime = runtime;
      } catch (accidentalStrictMode) {
        if (typeof globalThis === "object") {
          globalThis.regeneratorRuntime = runtime;
        } else {
          Function("r", "regeneratorRuntime = r")(runtime);
        }
      }
    }
  });

  // node_modules/@babel/runtime/helpers/asyncToGenerator.js
  var require_asyncToGenerator = __commonJS({
    "node_modules/@babel/runtime/helpers/asyncToGenerator.js"(exports, module) {
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function() {
          var self2 = this, args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self2, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(void 0);
          });
        };
      }
      module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // package/bridge.js
  var require_bridge = __commonJS({
    "package/bridge.js"(exports, module) {
      "use strict";
      var _interopRequireDefault2 = require_interopRequireDefault();
      var _regenerator2 = _interopRequireDefault2(require_regenerator());
      var _asyncToGenerator22 = _interopRequireDefault2(require_asyncToGenerator());
      function getId() {
        return Math.random().toString(32).slice(2);
      }
      function Bridge2(scope, handler) {
        handler.addEventListener("message", /* @__PURE__ */ (function() {
          var _ref2 = (0, _asyncToGenerator22["default"])(/* @__PURE__ */ _regenerator2["default"].mark(function _callee(_ref) {
            var request, id, path, args, value, data, thisArg;
            return _regenerator2["default"].wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  request = _ref.data.request;
                  if (request) {
                    _context.next = 3;
                    break;
                  }
                  return _context.abrupt("return");
                case 3:
                  id = request.id, path = request.path, args = request.args;
                  _context.prev = 4;
                  value = path.reduce(function(value2, prop) {
                    return value2[prop];
                  }, scope);
                  if (!(typeof value === "function")) {
                    _context.next = 13;
                    break;
                  }
                  thisArg = path.slice(0, path.length - 1).reduce(function(value2, prop) {
                    return value2[prop];
                  }, scope);
                  _context.next = 10;
                  return value.apply(thisArg, args);
                case 10:
                  data = _context.sent;
                  _context.next = 16;
                  break;
                case 13:
                  _context.next = 15;
                  return value;
                case 15:
                  data = _context.sent;
                case 16:
                  handler.postMessage({
                    response: {
                      id,
                      result: {
                        data
                      }
                    }
                  });
                  _context.next = 22;
                  break;
                case 19:
                  _context.prev = 19;
                  _context.t0 = _context["catch"](4);
                  handler.postMessage({
                    response: {
                      id,
                      result: {
                        error: _context.t0
                      }
                    }
                  });
                case 22:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[4, 19]]);
          }));
          return function(_x) {
            return _ref2.apply(this, arguments);
          };
        })());
        this.call = /* @__PURE__ */ (function() {
          var _ref3 = (0, _asyncToGenerator22["default"])(/* @__PURE__ */ _regenerator2["default"].mark(function _callee2(path, args) {
            var id;
            return _regenerator2["default"].wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  id = getId();
                  return _context2.abrupt("return", new Promise(function(resolve, reject) {
                    var onMessage = function onMessage2(_ref4) {
                      var response = _ref4.data.response;
                      if (!response || response.id !== id) return;
                      handler.removeEventListener("message", onMessage2);
                      if ("error" in response.result) {
                        reject(response.result.error);
                      } else {
                        resolve(response.result.data);
                      }
                    };
                    handler.addEventListener("message", onMessage);
                    handler.postMessage({
                      request: {
                        id,
                        path,
                        args
                      }
                    });
                  }));
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          return function(_x2, _x3) {
            return _ref3.apply(this, arguments);
          };
        })();
      }
      module.exports = Bridge2;
    }
  });

  // package/stremio_core_web.js
  var require_stremio_core_web = __commonJS({
    "package/stremio_core_web.js"(exports) {
      "use strict";
      var _interopRequireDefault2 = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.analytics = analytics;
      exports.decode_stream = decode_stream;
      exports["default"] = void 0;
      exports.dispatch = dispatch;
      exports.encode_stream = encode_stream;
      exports.get_state = get_state;
      exports.initialize_runtime = initialize_runtime;
      exports.start = start;
      var _regenerator2 = _interopRequireDefault2(require_regenerator());
      var _asyncToGenerator22 = _interopRequireDefault2(require_asyncToGenerator());
      var _typeof2 = _interopRequireDefault2(require_typeof());
      var importMeta = {
        url: new URL("/stremio_core_web.js", document.baseURI).href
      };
      var wasm;
      var heap = new Array(32).fill(void 0);
      heap.push(void 0, null, true, false);
      function getObject(idx) {
        return heap[idx];
      }
      var WASM_VECTOR_LEN = 0;
      var cachegetUint8Memory0 = null;
      function getUint8Memory0() {
        if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
          cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
        }
        return cachegetUint8Memory0;
      }
      var cachedTextEncoder = new TextEncoder("utf-8");
      var encodeString = typeof cachedTextEncoder.encodeInto === "function" ? function(arg, view) {
        return cachedTextEncoder.encodeInto(arg, view);
      } : function(arg, view) {
        var buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
          read: arg.length,
          written: buf.length
        };
      };
      function passStringToWasm0(arg, malloc, realloc) {
        if (realloc === void 0) {
          var buf = cachedTextEncoder.encode(arg);
          var _ptr = malloc(buf.length);
          getUint8Memory0().subarray(_ptr, _ptr + buf.length).set(buf);
          WASM_VECTOR_LEN = buf.length;
          return _ptr;
        }
        var len = arg.length;
        var ptr = malloc(len);
        var mem = getUint8Memory0();
        var offset = 0;
        for (; offset < len; offset++) {
          var code = arg.charCodeAt(offset);
          if (code > 127) break;
          mem[ptr + offset] = code;
        }
        if (offset !== len) {
          if (offset !== 0) {
            arg = arg.slice(offset);
          }
          ptr = realloc(ptr, len, len = offset + arg.length * 3);
          var view = getUint8Memory0().subarray(ptr + offset, ptr + len);
          var ret = encodeString(arg, view);
          offset += ret.written;
        }
        WASM_VECTOR_LEN = offset;
        return ptr;
      }
      function isLikeNone(x) {
        return x === void 0 || x === null;
      }
      var cachegetInt32Memory0 = null;
      function getInt32Memory0() {
        if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
          cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
        }
        return cachegetInt32Memory0;
      }
      var heap_next = heap.length;
      function dropObject(idx) {
        if (idx < 36) return;
        heap[idx] = heap_next;
        heap_next = idx;
      }
      function takeObject(idx) {
        var ret = getObject(idx);
        dropObject(idx);
        return ret;
      }
      var cachedTextDecoder = new TextDecoder("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      cachedTextDecoder.decode();
      function getStringFromWasm0(ptr, len) {
        return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
      }
      function addHeapObject(obj) {
        if (heap_next === heap.length) heap.push(heap.length + 1);
        var idx = heap_next;
        heap_next = heap[idx];
        heap[idx] = obj;
        return idx;
      }
      function debugString(val) {
        var type = (0, _typeof2["default"])(val);
        if (type == "number" || type == "boolean" || val == null) {
          return "".concat(val);
        }
        if (type == "string") {
          return '"'.concat(val, '"');
        }
        if (type == "symbol") {
          var description = val.description;
          if (description == null) {
            return "Symbol";
          } else {
            return "Symbol(".concat(description, ")");
          }
        }
        if (type == "function") {
          var name = val.name;
          if (typeof name == "string" && name.length > 0) {
            return "Function(".concat(name, ")");
          } else {
            return "Function";
          }
        }
        if (Array.isArray(val)) {
          var length = val.length;
          var debug = "[";
          if (length > 0) {
            debug += debugString(val[0]);
          }
          for (var i = 1; i < length; i++) {
            debug += ", " + debugString(val[i]);
          }
          debug += "]";
          return debug;
        }
        var builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
        var className;
        if (builtInMatches.length > 1) {
          className = builtInMatches[1];
        } else {
          return toString.call(val);
        }
        if (className == "Object") {
          try {
            return "Object(" + JSON.stringify(val) + ")";
          } catch (_) {
            return "Object";
          }
        }
        if (val instanceof Error) {
          return "".concat(val.name, ": ").concat(val.message, "\n").concat(val.stack);
        }
        return className;
      }
      function makeMutClosure(arg0, arg1, dtor, f) {
        var state = {
          a: arg0,
          b: arg1,
          cnt: 1,
          dtor
        };
        var real = function real2() {
          state.cnt++;
          var a = state.a;
          state.a = 0;
          try {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return f.apply(void 0, [a, state.b].concat(args));
          } finally {
            if (--state.cnt === 0) {
              wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);
            } else {
              state.a = a;
            }
          }
        };
        real.original = state;
        return real;
      }
      function __wbg_adapter_30(arg0, arg1) {
        wasm.wasm_bindgen__convert__closures__invoke0_mut__h99bdd602b1128cf8(arg0, arg1);
      }
      function __wbg_adapter_33(arg0, arg1, arg2) {
        wasm.wasm_bindgen__convert__closures__invoke1_mut__h287d35c01be7cb49(arg0, arg1, addHeapObject(arg2));
      }
      function start() {
        wasm.start();
      }
      function initialize_runtime(emit_to_ui) {
        var ret = wasm.initialize_runtime(addHeapObject(emit_to_ui));
        return takeObject(ret);
      }
      function get_state(field) {
        var ret = wasm.get_state(addHeapObject(field));
        return takeObject(ret);
      }
      function dispatch(action, field, location_hash) {
        wasm.dispatch(addHeapObject(action), addHeapObject(field), addHeapObject(location_hash));
      }
      function analytics(event, location_hash) {
        wasm.analytics(addHeapObject(event), addHeapObject(location_hash));
      }
      function decode_stream(stream) {
        var ret = wasm.decode_stream(addHeapObject(stream));
        return takeObject(ret);
      }
      function encode_stream(stream) {
        var ret = wasm.encode_stream(addHeapObject(stream));
        return takeObject(ret);
      }
      function handleError(f, args) {
        try {
          return f.apply(this, args);
        } catch (e) {
          wasm.__wbindgen_exn_store(addHeapObject(e));
        }
      }
      function __wbg_adapter_119(arg0, arg1, arg2, arg3) {
        wasm.wasm_bindgen__convert__closures__invoke2_mut__hae5b9d44fd620b1a(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
      }
      function load(_x, _x2) {
        return _load.apply(this, arguments);
      }
      function _load() {
        _load = (0, _asyncToGenerator22["default"])(/* @__PURE__ */ _regenerator2["default"].mark(function _callee(module2, imports) {
          var bytes, instance;
          return _regenerator2["default"].wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof Response === "function" && module2 instanceof Response)) {
                  _context.next = 23;
                  break;
                }
                if (!(typeof WebAssembly.instantiateStreaming === "function")) {
                  _context.next = 15;
                  break;
                }
                _context.prev = 2;
                _context.next = 5;
                return WebAssembly.instantiateStreaming(module2, imports);
              case 5:
                return _context.abrupt("return", _context.sent);
              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                if (!(module2.headers.get("Content-Type") != "application/wasm")) {
                  _context.next = 14;
                  break;
                }
                console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", _context.t0);
                _context.next = 15;
                break;
              case 14:
                throw _context.t0;
              case 15:
                _context.next = 17;
                return module2.arrayBuffer();
              case 17:
                bytes = _context.sent;
                _context.next = 20;
                return WebAssembly.instantiate(bytes, imports);
              case 20:
                return _context.abrupt("return", _context.sent);
              case 23:
                _context.next = 25;
                return WebAssembly.instantiate(module2, imports);
              case 25:
                instance = _context.sent;
                if (!(instance instanceof WebAssembly.Instance)) {
                  _context.next = 30;
                  break;
                }
                return _context.abrupt("return", {
                  instance,
                  module: module2
                });
              case 30:
                return _context.abrupt("return", instance);
              case 31:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[2, 8]]);
        }));
        return _load.apply(this, arguments);
      }
      function init(_x3) {
        return _init.apply(this, arguments);
      }
      function _init() {
        _init = (0, _asyncToGenerator22["default"])(/* @__PURE__ */ _regenerator2["default"].mark(function _callee2(input) {
          var imports, _yield$load, instance, module2;
          return _regenerator2["default"].wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (typeof input === "undefined") {
                  input = new URL("stremio_core_web_bg.wasm", importMeta.url);
                }
                imports = {};
                imports.wbg = {};
                imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
                  var obj = getObject(arg1);
                  var ret = typeof obj === "string" ? obj : void 0;
                  var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                  var len0 = WASM_VECTOR_LEN;
                  getInt32Memory0()[arg0 / 4 + 1] = len0;
                  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
                };
                imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
                  takeObject(arg0);
                };
                imports.wbg.__wbindgen_is_undefined = function(arg0) {
                  var ret = getObject(arg0) === void 0;
                  return ret;
                };
                imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
                  var ret = getStringFromWasm0(arg0, arg1);
                  return addHeapObject(ret);
                };
                imports.wbg.__wbg_getlocationhash_3f7594ef15034e54 = function() {
                  return handleError(function() {
                    var ret = self.get_location_hash();
                    return addHeapObject(ret);
                  }, arguments);
                };
                imports.wbg.__wbg_localstoragegetitem_f889a6b8d3100ef4 = function() {
                  return handleError(function(arg0, arg1) {
                    try {
                      var ret = self.local_storage_get_item(getStringFromWasm0(arg0, arg1));
                      return addHeapObject(ret);
                    } finally {
                      wasm.__wbindgen_free(arg0, arg1);
                    }
                  }, arguments);
                };
                imports.wbg.__wbg_localstoragesetitem_b419d8cd94aebda3 = function() {
                  return handleError(function(arg0, arg1, arg2, arg3) {
                    try {
                      var ret = self.local_storage_set_item(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
                      return addHeapObject(ret);
                    } finally {
                      wasm.__wbindgen_free(arg0, arg1);
                      wasm.__wbindgen_free(arg2, arg3);
                    }
                  }, arguments);
                };
                imports.wbg.__wbg_localstorageremoveitem_14a054ba39679677 = function() {
                  return handleError(function(arg0, arg1) {
                    try {
                      var ret = self.local_storage_remove_item(getStringFromWasm0(arg0, arg1));
                      return addHeapObject(ret);
                    } finally {
                      wasm.__wbindgen_free(arg0, arg1);
                    }
                  }, arguments);
                };
                imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
                  var ret = getObject(arg0);
                  return addHeapObject(ret);
                };
                imports.wbg.__wbg_static_accessor_APP_VERSION_626ea850f08d4f7f = function(arg0) {
                  var ret = self.app_version;
                  var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                  var len0 = WASM_VECTOR_LEN;
                  getInt32Memory0()[arg0 / 4 + 1] = len0;
                  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
                };
                imports.wbg.__wbg_static_accessor_SHELL_VERSION_a78356a69c7fc646 = function(arg0) {
                  var ret = self.shell_version;
                  var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                  var len0 = WASM_VECTOR_LEN;
                  getInt32Memory0()[arg0 / 4 + 1] = len0;
                  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
                };
                imports.wbg.__wbg_new_693216e109162396 = function() {
                  var ret = new Error();
                  return addHeapObject(ret);
                };
                imports.wbg.__wbg_stack_0ddaca5d1abfb52f = function(arg0, arg1) {
                  var ret = getObject(arg1).stack;
                  var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                  var len0 = WASM_VECTOR_LEN;
                  getInt32Memory0()[arg0 / 4 + 1] = len0;
                  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
                };
                imports.wbg.__wbg_error_09919627ac0992f5 = function(arg0, arg1) {
                  try {
                    console.error(getStringFromWasm0(arg0, arg1));
                  } finally {
                    wasm.__wbindgen_free(arg0, arg1);
                  }
                };
                imports.wbg.__wbg_crypto_1dc1c51d9d27e0dd = function(arg0) {
                  var ret = getObject(arg0).crypto;
                  return addHeapObject(ret);
                };
                imports.wbg.__wbindgen_is_object = function(arg0) {
                  var val = getObject(arg0);
                  var ret = (0, _typeof2["default"])(val) === "object" && val !== null;
                  return ret;
                };
                imports.wbg.__wbg_process_65edac0b2f0a8427 = function(arg0) {
                  var ret = getObject(arg0).process;
                  return addHeapObject(ret);
                };
                imports.wbg.__wbg_versions_0d0eed1c1b42b216 = function(arg0) {
                  var ret = getObject(arg0).versions;
                  return addHeapObject(ret);
                };
                imports.wbg.__wbg_node_82761bdd6eaac7e7 = function(arg0) {
                  var ret = getObject(arg0).node;
                  return addHeapObject(ret);
                };
                imports.wbg.__wbindgen_is_string = function(arg0) {
                  var ret = typeof getObject(arg0) === "string";
                  return ret;
                };
                imports.wbg.__wbg_require_3f60396135018b0f = function() {
                  return handleError(function() {
                    var ret = module2.require;
                    return addHeapObject(ret);
                  }, arguments);
                };
                imports.wbg.__wbg_msCrypto_4ef1b0e1cd4cedbb = function(arg0) {
                  var ret = getObject(arg0).msCrypto;
                  return addHeapObject(ret);
                };
                imports.wbg.__wbg_randomFillSync_d84d19ffc1d700ed = function() {
                  return handleError(function(arg0, arg1) {
                    getObject(arg0).randomFillSync(takeObject(arg1));
                  }, arguments);
                };
                imports.wbg.__wbg_getRandomValues_3293819ebec805bc = function() {
                  return handleError(function(arg0, arg1) {
                    getObject(arg0).getRandomValues(getObject(arg1));
                  }, arguments);
                };
                imports.wbg.__wbg_log_02e20a3c32305fb7 = function(arg0, arg1) {
                  try {
                    console.log(getStringFromWasm0(arg0, arg1));
                  } finally {
                    wasm.__wbindgen_free(arg0, arg1);
                  }
                };
                imports.wbg.__wbg_log_5c7513aa8c164502 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
                  try {
                    console.log(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3), getStringFromWasm0(arg4, arg5), getStringFromWasm0(arg6, arg7));
                  } finally {
                    wasm.__wbindgen_free(arg0, arg1);
                  }
                };
                imports.wbg.__wbg_mark_abc7631bdced64f0 = function(arg0, arg1) {
                  performance.mark(getStringFromWasm0(arg0, arg1));
                };
                imports.wbg.__wbg_measure_c528ff64085b7146 = function() {
                  return handleError(function(arg0, arg1, arg2, arg3) {
                    try {
                      performance.measure(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
                    } finally {
                      wasm.__wbindgen_free(arg0, arg1);
                      wasm.__wbindgen_free(arg2, arg3);
                    }
                  }, arguments);
                };
                imports.wbg.__wbindgen_cb_drop = function(arg0) {
                  var obj = takeObject(arg0).original;
                  if (obj.cnt-- == 1) {
                    obj.a = 0;
                    return true;
                  }
                  var ret = false;
                  return ret;
                };
                imports.wbg.__wbg_newwithstrandinit_9b0fa00478c37287 = function() {
                  return handleError(function(arg0, arg1, arg2) {
                    var ret = new Request(getStringFromWasm0(arg0, arg1), getObject(arg2));
                    return addHeapObject(ret);
                  }, arguments);
                };
                imports.wbg.__wbg_instanceof_Response_e1b11afbefa5b563 = function(arg0) {
                  var ret = getObject(arg0) instanceof Response;
                  return ret;
                };
                imports.wbg.__wbg_status_6d8bb444ddc5a7b2 = function(arg0) {
                  var ret = getObject(arg0).status;
                  return ret;
                };
                imports.wbg.__wbg_text_8279d34d73e43c68 = function() {
                  return handleError(function(arg0) {
                    var ret = getObject(arg0).text();
                    return addHeapObject(ret);
                  }, arguments);
                };
                imports.wbg.__wbg_language_cd6e22892ba36a1f = function(arg0, arg1) {
                  var ret = getObject(arg1).language;
                  var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                  var len0 = WASM_VECTOR_LEN;
                  getInt32Memory0()[arg0 / 4 + 1] = len0;
                  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
                };
                imports.wbg.__wbg_instanceof_WorkerGlobalScope_f191ca0158f5637b = function(arg0) {
                  var ret = getObject(arg0) instanceof WorkerGlobalScope;
                  return ret;
                };
                imports.wbg.__wbg_navigator_8bc0889cda8f8500 = function(arg0) {
                  var ret = getObject(arg0).navigator;
                  return addHeapObject(ret);
                };
                imports.wbg.__wbg_fetch_b4e81012e07ff95a = function(arg0, arg1) {
                  var ret = getObject(arg0).fetch(getObject(arg1));
                  return addHeapObject(ret);
                };
                imports.wbg.__wbg_setInterval_a02797f5ab1c7eb1 = function() {
                  return handleError(function(arg0, arg1, arg2) {
                    var ret = getObject(arg0).setInterval(getObject(arg1), arg2);
                    return ret;
                  }, arguments);
                };
                imports.wbg.__wbindgen_number_new = function(arg0) {
                  var ret = arg0;
                  return addHeapObject(ret);
                };
                imports.wbg.__wbindgen_is_function = function(arg0) {
                  var ret = typeof getObject(arg0) === "function";
                  return ret;
                };
                imports.wbg.__wbg_newnoargs_be86524d73f67598 = function(arg0, arg1) {
                  var ret = new Function(getStringFromWasm0(arg0, arg1));
                  return addHeapObject(ret);
                };
                imports.wbg.__wbg_call_888d259a5fefc347 = function() {
                  return handleError(function(arg0, arg1) {
                    var ret = getObject(arg0).call(getObject(arg1));
                    return addHeapObject(ret);
                  }, arguments);
                };
                imports.wbg.__wbg_new_0b83d3df67ecb33e = function() {
                  var ret = new Object();
                  return addHeapObject(ret);
                };
                imports.wbg.__wbg_self_c6fbdfc2918d5e58 = function() {
                  return handleError(function() {
                    var ret = self.self;
                    return addHeapObject(ret);
                  }, arguments);
                };
                imports.wbg.__wbg_window_baec038b5ab35c54 = function() {
                  return handleError(function() {
                    var ret = window.window;
                    return addHeapObject(ret);
                  }, arguments);
                };
                imports.wbg.__wbg_globalThis_3f735a5746d41fbd = function() {
                  return handleError(function() {
                    var ret = globalThis.globalThis;
                    return addHeapObject(ret);
                  }, arguments);
                };
                imports.wbg.__wbg_global_1bc0b39582740e95 = function() {
                  return handleError(function() {
                    var ret = global.global;
                    return addHeapObject(ret);
                  }, arguments);
                };
                imports.wbg.__wbg_instanceof_Error_561efcb1265706d8 = function(arg0) {
                  var ret = getObject(arg0) instanceof Error;
                  return ret;
                };
                imports.wbg.__wbg_message_9f7d15ff97fc4102 = function(arg0) {
                  var ret = getObject(arg0).message;
                  return addHeapObject(ret);
                };
                imports.wbg.__wbg_call_346669c262382ad7 = function() {
                  return handleError(function(arg0, arg1, arg2) {
                    var ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
                    return addHeapObject(ret);
                  }, arguments);
                };
                imports.wbg.__wbg_getTimezoneOffset_d3e5a22a1b7fb1d8 = function(arg0) {
                  var ret = getObject(arg0).getTimezoneOffset();
                  return ret;
                };
                imports.wbg.__wbg_new_f11872bb9bb9d781 = function(arg0) {
                  var ret = new Date(getObject(arg0));
                  return addHeapObject(ret);
                };
                imports.wbg.__wbg_now_af172eabe2e041ad = function() {
                  var ret = Date.now();
                  return ret;
                };
                imports.wbg.__wbg_new_b1d61b5687f5e73a = function(arg0, arg1) {
                  try {
                    var state0 = {
                      a: arg0,
                      b: arg1
                    };
                    var cb0 = function cb02(arg02, arg12) {
                      var a = state0.a;
                      state0.a = 0;
                      try {
                        return __wbg_adapter_119(a, state0.b, arg02, arg12);
                      } finally {
                        state0.a = a;
                      }
                    };
                    var ret = new Promise(cb0);
                    return addHeapObject(ret);
                  } finally {
                    state0.a = state0.b = 0;
                  }
                };
                imports.wbg.__wbg_resolve_d23068002f584f22 = function(arg0) {
                  var ret = Promise.resolve(getObject(arg0));
                  return addHeapObject(ret);
                };
                imports.wbg.__wbg_then_2fcac196782070cc = function(arg0, arg1) {
                  var ret = getObject(arg0).then(getObject(arg1));
                  return addHeapObject(ret);
                };
                imports.wbg.__wbg_then_8c2d62e8ae5978f7 = function(arg0, arg1, arg2) {
                  var ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
                  return addHeapObject(ret);
                };
                imports.wbg.__wbg_buffer_397eaa4d72ee94dd = function(arg0) {
                  var ret = getObject(arg0).buffer;
                  return addHeapObject(ret);
                };
                imports.wbg.__wbg_newwithbyteoffsetandlength_4b9b8c4e3f5adbff = function(arg0, arg1, arg2) {
                  var ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
                  return addHeapObject(ret);
                };
                imports.wbg.__wbg_new_a7ce447f15ff496f = function(arg0) {
                  var ret = new Uint8Array(getObject(arg0));
                  return addHeapObject(ret);
                };
                imports.wbg.__wbg_set_969ad0a60e51d320 = function(arg0, arg1, arg2) {
                  getObject(arg0).set(getObject(arg1), arg2 >>> 0);
                };
                imports.wbg.__wbg_newwithlength_929232475839a482 = function(arg0) {
                  var ret = new Uint8Array(arg0 >>> 0);
                  return addHeapObject(ret);
                };
                imports.wbg.__wbg_subarray_8b658422a224f479 = function(arg0, arg1, arg2) {
                  var ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
                  return addHeapObject(ret);
                };
                imports.wbg.__wbg_set_82a4e8a85e31ac42 = function() {
                  return handleError(function(arg0, arg1, arg2) {
                    var ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
                    return ret;
                  }, arguments);
                };
                imports.wbg.__wbg_parse_ccb2cd4fe8ead0cb = function() {
                  return handleError(function(arg0, arg1) {
                    var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
                    return addHeapObject(ret);
                  }, arguments);
                };
                imports.wbg.__wbg_stringify_d4507a59932eed0c = function() {
                  return handleError(function(arg0) {
                    var ret = JSON.stringify(getObject(arg0));
                    return addHeapObject(ret);
                  }, arguments);
                };
                imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
                  var ret = debugString(getObject(arg1));
                  var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                  var len0 = WASM_VECTOR_LEN;
                  getInt32Memory0()[arg0 / 4 + 1] = len0;
                  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
                };
                imports.wbg.__wbindgen_throw = function(arg0, arg1) {
                  throw new Error(getStringFromWasm0(arg0, arg1));
                };
                imports.wbg.__wbindgen_rethrow = function(arg0) {
                  throw takeObject(arg0);
                };
                imports.wbg.__wbindgen_memory = function() {
                  var ret = wasm.memory;
                  return addHeapObject(ret);
                };
                imports.wbg.__wbindgen_closure_wrapper3909 = function(arg0, arg1, arg2) {
                  var ret = makeMutClosure(arg0, arg1, 612, __wbg_adapter_30);
                  return addHeapObject(ret);
                };
                imports.wbg.__wbindgen_closure_wrapper8105 = function(arg0, arg1, arg2) {
                  var ret = makeMutClosure(arg0, arg1, 1021, __wbg_adapter_33);
                  return addHeapObject(ret);
                };
                if (typeof input === "string" || typeof Request === "function" && input instanceof Request || typeof URL === "function" && input instanceof URL) {
                  input = fetch(input);
                }
                _context2.t0 = load;
                _context2.next = 79;
                return input;
              case 79:
                _context2.t1 = _context2.sent;
                _context2.t2 = imports;
                _context2.next = 83;
                return (0, _context2.t0)(_context2.t1, _context2.t2);
              case 83:
                _yield$load = _context2.sent;
                instance = _yield$load.instance;
                module2 = _yield$load.module;
                wasm = instance.exports;
                init.__wbindgen_wasm_module = module2;
                wasm.__wbindgen_start();
                return _context2.abrupt("return", wasm);
              case 90:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return _init.apply(this, arguments);
      }
      var _default = exports["default"] = init;
    }
  });

  // wasm-url:./stremio_core_web_bg.wasm
  var require_stremio_core_web_bg = __commonJS({
    "wasm-url:./stremio_core_web_bg.wasm"(exports, module) {
      module.exports = "stremio_core_web_bg.wasm";
    }
  });

  // package/worker.js
  var _interopRequireDefault = require_interopRequireDefault();
  var _regenerator = _interopRequireDefault(require_regenerator());
  var _asyncToGenerator2 = _interopRequireDefault(require_asyncToGenerator());
  var Bridge = require_bridge();
  var bridge = new Bridge(self, self);
  self.init = /* @__PURE__ */ (function() {
    var _ref2 = (0, _asyncToGenerator2["default"])(/* @__PURE__ */ _regenerator["default"].mark(function _callee5(_ref) {
      var appVersion, shellVersion, _require, initialize_api, initialize_runtime, get_state, get_debug_state, dispatch, analytics, decode_stream, encode_stream;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            appVersion = _ref.appVersion, shellVersion = _ref.shellVersion;
            self.document = {
              baseURI: self.location.href
            };
            self.app_version = appVersion;
            self.shell_version = shellVersion;
            self.get_location_hash = /* @__PURE__ */ (0, _asyncToGenerator2["default"])(/* @__PURE__ */ _regenerator["default"].mark(function _callee() {
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", bridge.call(["location", "hash"], []));
                  case 1:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            self.local_storage_get_item = /* @__PURE__ */ (function() {
              var _ref4 = (0, _asyncToGenerator2["default"])(/* @__PURE__ */ _regenerator["default"].mark(function _callee2(key) {
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      return _context2.abrupt("return", bridge.call(["localStorage", "getItem"], [key]));
                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return function(_x2) {
                return _ref4.apply(this, arguments);
              };
            })();
            self.local_storage_set_item = /* @__PURE__ */ (function() {
              var _ref5 = (0, _asyncToGenerator2["default"])(/* @__PURE__ */ _regenerator["default"].mark(function _callee3(key, value) {
                return _regenerator["default"].wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", bridge.call(["localStorage", "setItem"], [key, value]));
                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              }));
              return function(_x3, _x4) {
                return _ref5.apply(this, arguments);
              };
            })();
            self.local_storage_remove_item = /* @__PURE__ */ (function() {
              var _ref6 = (0, _asyncToGenerator2["default"])(/* @__PURE__ */ _regenerator["default"].mark(function _callee4(key) {
                return _regenerator["default"].wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      return _context4.abrupt("return", bridge.call(["localStorage", "removeItem"], [key]));
                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4);
              }));
              return function(_x5) {
                return _ref6.apply(this, arguments);
              };
            })();
            _require = require_stremio_core_web(), initialize_api = _require["default"], initialize_runtime = _require.initialize_runtime, get_state = _require.get_state, get_debug_state = _require.get_debug_state, dispatch = _require.dispatch, analytics = _require.analytics, decode_stream = _require.decode_stream, encode_stream = _require.encode_stream;
            self.getState = get_state;
            self.getDebugState = get_debug_state;
            self.dispatch = dispatch;
            self.analytics = analytics;
            self.decodeStream = decode_stream;
            self.encodeStream = encode_stream;
            _context5.next = 17;
            return initialize_api(require_stremio_core_web_bg());
          case 17:
            _context5.next = 19;
            return initialize_runtime(function(event) {
              return bridge.call(["onCoreEvent"], [event]);
            });
          case 19:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function(_x) {
      return _ref2.apply(this, arguments);
    };
  })();
})();
/*! Bundled license information:

@babel/runtime/helpers/regeneratorRuntime.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)
*/
