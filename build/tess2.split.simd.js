
var createTess2Wasm = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(createTess2Wasm) {
  createTess2Wasm = createTess2Wasm || {};


var a;
a || (a = typeof createTess2Wasm !== 'undefined' ? createTess2Wasm : {});
var aa, ba;
a.ready = new Promise(function(c, d) {
  aa = c;
  ba = d;
});
Object.getOwnPropertyDescriptor(a.ready, "_main") || (Object.defineProperty(a.ready, "_main", {configurable:!0, get:function() {
  b("You are getting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_main", {configurable:!0, set:function() {
  b("You are setting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "_emscripten_stack_get_end") || (Object.defineProperty(a.ready, "_emscripten_stack_get_end", {configurable:!0, get:function() {
  b("You are getting _emscripten_stack_get_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_emscripten_stack_get_end", {configurable:!0, set:function() {
  b("You are setting _emscripten_stack_get_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "_emscripten_stack_get_free") || (Object.defineProperty(a.ready, "_emscripten_stack_get_free", {configurable:!0, get:function() {
  b("You are getting _emscripten_stack_get_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_emscripten_stack_get_free", {configurable:!0, set:function() {
  b("You are setting _emscripten_stack_get_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "_emscripten_stack_init") || (Object.defineProperty(a.ready, "_emscripten_stack_init", {configurable:!0, get:function() {
  b("You are getting _emscripten_stack_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_emscripten_stack_init", {configurable:!0, set:function() {
  b("You are setting _emscripten_stack_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "_stackSave") || (Object.defineProperty(a.ready, "_stackSave", {configurable:!0, get:function() {
  b("You are getting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_stackSave", {configurable:!0, set:function() {
  b("You are setting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "_stackRestore") || (Object.defineProperty(a.ready, "_stackRestore", {configurable:!0, get:function() {
  b("You are getting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_stackRestore", {configurable:!0, set:function() {
  b("You are setting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "_stackAlloc") || (Object.defineProperty(a.ready, "_stackAlloc", {configurable:!0, get:function() {
  b("You are getting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_stackAlloc", {configurable:!0, set:function() {
  b("You are setting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "___wasm_call_ctors") || (Object.defineProperty(a.ready, "___wasm_call_ctors", {configurable:!0, get:function() {
  b("You are getting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "___wasm_call_ctors", {configurable:!0, set:function() {
  b("You are setting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "_fflush") || (Object.defineProperty(a.ready, "_fflush", {configurable:!0, get:function() {
  b("You are getting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_fflush", {configurable:!0, set:function() {
  b("You are setting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "___errno_location") || (Object.defineProperty(a.ready, "___errno_location", {configurable:!0, get:function() {
  b("You are getting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "___errno_location", {configurable:!0, set:function() {
  b("You are setting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "_malloc") || (Object.defineProperty(a.ready, "_malloc", {configurable:!0, get:function() {
  b("You are getting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_malloc", {configurable:!0, set:function() {
  b("You are setting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "_free") || (Object.defineProperty(a.ready, "_free", {configurable:!0, get:function() {
  b("You are getting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_free", {configurable:!0, set:function() {
  b("You are setting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "_setThrew") || (Object.defineProperty(a.ready, "_setThrew", {configurable:!0, get:function() {
  b("You are getting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_setThrew", {configurable:!0, set:function() {
  b("You are setting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "_realloc") || (Object.defineProperty(a.ready, "_realloc", {configurable:!0, get:function() {
  b("You are getting _realloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_realloc", {configurable:!0, set:function() {
  b("You are setting _realloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "_testSetjmp") || (Object.defineProperty(a.ready, "_testSetjmp", {configurable:!0, get:function() {
  b("You are getting _testSetjmp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_testSetjmp", {configurable:!0, set:function() {
  b("You are setting _testSetjmp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "_saveSetjmp") || (Object.defineProperty(a.ready, "_saveSetjmp", {configurable:!0, get:function() {
  b("You are getting _saveSetjmp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "_saveSetjmp", {configurable:!0, set:function() {
  b("You are setting _saveSetjmp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
Object.getOwnPropertyDescriptor(a.ready, "onRuntimeInitialized") || (Object.defineProperty(a.ready, "onRuntimeInitialized", {configurable:!0, get:function() {
  b("You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}), Object.defineProperty(a.ready, "onRuntimeInitialized", {configurable:!0, set:function() {
  b("You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
}}));
var t = a;
function da(c, d, e) {
  if (!d || 0 > d) {
    throw "Size should be a greater 0";
  }
  if (!c) {
    throw "Invalid pointer!";
  }
  e = e || Uint8Array;
  d = new e(t.HEAP8.buffer, c, d);
  d.c = c;
  d.i = function() {
    t._free(c);
  };
  return d;
}
var ea = t.Tess = function() {
  this.c = t.initTesselator();
  this.f = [];
  if (!this.c) {
    throw "Unknown error, tesselator wasn't init!";
  }
};
Object.assign(ea.prototype, {dispose:function() {
  this.c && (t.deleteTesselator(this.c), this.f.forEach(c => c.i && c.i()), this.f = [], this.c = 0);
}, addContours:function(c) {
  if (!this.c) {
    throw "Tessealtor wasn't be inited!";
  }
  var d = this.f = [];
  "number" === typeof c[0] && (c = [c]);
  for (var e = 0; e < c.length; e++) {
    var f = c[e];
    var g = f.length;
    var h = Float32Array, l = t._malloc(g * h.BYTES_PER_ELEMENT);
    if (!l) {
      throw "Can't allocate a " + g;
    }
    g = da(l, g, h);
    g.set(f, 0);
    d.push(g);
    t.addContour(this.c, g.c, f.length / 2);
  }
}, tesselate:function(c) {
  if (0 === this.f.length) {
    throw "Contours data is required!";
  }
  c = Object.assign({windingRule:0, elementType:0, polySize:3, vertexSize:2, fillVertexIndices:!1}, c || {});
  var d = t.runTesselator(this.c, c);
  if (0 === d.elementCount) {
    return null;
  }
  d.vertices = da(d.verticesPtr, d.vertexCount * c.vertexSize, Float32Array);
  d.elements = da(d.elementsPtr, d.elementCount * c.polySize, Uint32Array);
  c.fillVertexIndices && (d.vertexIndices = da(d.vertexIndicesPtr, d.vertexCount, Uint32Array));
  return d;
}});
var u = {}, v;
for (v in a) {
  a.hasOwnProperty(v) && (u[v] = a[v]);
}
var fa = !1, w = !1, ha = !1, ia = !1;
fa = "object" === typeof window;
w = "function" === typeof importScripts;
ha = "object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node;
ia = !fa && !ha && !w;
if (a.ENVIRONMENT) {
  throw Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
}
var x = "", ja, y, ka, la;
if (ha) {
  x = w ? require("path").dirname(x) + "/" : __dirname + "/", ja = function(c, d) {
    ka || (ka = require("fs"));
    la || (la = require("path"));
    c = la.normalize(c);
    return ka.readFileSync(c, d ? null : "utf8");
  }, y = function(c) {
    c = ja(c, !0);
    c.buffer || (c = new Uint8Array(c));
    assert(c.buffer);
    return c;
  }, 1 < process.argv.length && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), process.on("uncaughtException", function(c) {
    throw c;
  }), process.on("unhandledRejection", b), a.inspect = function() {
    return "[Emscripten Module object]";
  };
} else {
  if (ia) {
    "undefined" != typeof read && (ja = function(c) {
      return read(c);
    }), y = function(c) {
      if ("function" === typeof readbuffer) {
        return new Uint8Array(readbuffer(c));
      }
      c = read(c, "binary");
      assert("object" === typeof c);
      return c;
    }, "undefined" !== typeof print && ("undefined" === typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" !== typeof printErr ? printErr : print);
  } else {
    if (fa || w) {
      w ? x = self.location.href : "undefined" !== typeof document && document.currentScript && (x = document.currentScript.src), _scriptDir && (x = _scriptDir), 0 !== x.indexOf("blob:") ? x = x.substr(0, x.lastIndexOf("/") + 1) : x = "", ja = function(c) {
        var d = new XMLHttpRequest;
        d.open("GET", c, !1);
        d.send(null);
        return d.responseText;
      }, w && (y = function(c) {
        var d = new XMLHttpRequest;
        d.open("GET", c, !1);
        d.responseType = "arraybuffer";
        d.send(null);
        return new Uint8Array(d.response);
      });
    } else {
      throw Error("environment detection error");
    }
  }
}
a.print || console.log.bind(console);
var A = a.printErr || console.warn.bind(console);
for (v in u) {
  u.hasOwnProperty(v) && (a[v] = u[v]);
}
u = null;
Object.getOwnPropertyDescriptor(a, "arguments") || Object.defineProperty(a, "arguments", {configurable:!0, get:function() {
  b("Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(a, "thisProgram") || Object.defineProperty(a, "thisProgram", {configurable:!0, get:function() {
  b("Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(a, "quit") || Object.defineProperty(a, "quit", {configurable:!0, get:function() {
  b("Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
assert("undefined" === typeof a.memoryInitializerPrefixURL, "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof a.pthreadMainPrefixURL, "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof a.cdInitializerPrefixURL, "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof a.filePackagePrefixURL, "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof a.read, "Module.read option was removed (modify read_ in JS)");
assert("undefined" === typeof a.readAsync, "Module.readAsync option was removed (modify readAsync in JS)");
assert("undefined" === typeof a.readBinary, "Module.readBinary option was removed (modify readBinary in JS)");
assert("undefined" === typeof a.setWindowTitle, "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");
assert("undefined" === typeof a.TOTAL_MEMORY, "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
Object.getOwnPropertyDescriptor(a, "read") || Object.defineProperty(a, "read", {configurable:!0, get:function() {
  b("Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(a, "readAsync") || Object.defineProperty(a, "readAsync", {configurable:!0, get:function() {
  b("Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(a, "readBinary") || Object.defineProperty(a, "readBinary", {configurable:!0, get:function() {
  b("Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(a, "setWindowTitle") || Object.defineProperty(a, "setWindowTitle", {configurable:!0, get:function() {
  b("Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
function ma(c) {
  na || (na = {});
  na[c] || (na[c] = 1, A(c));
}
var na, oa = 0, D;
a.wasmBinary && (D = a.wasmBinary);
Object.getOwnPropertyDescriptor(a, "wasmBinary") || Object.defineProperty(a, "wasmBinary", {configurable:!0, get:function() {
  b("Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
var noExitRuntime;
a.noExitRuntime && (noExitRuntime = a.noExitRuntime);
Object.getOwnPropertyDescriptor(a, "noExitRuntime") || Object.defineProperty(a, "noExitRuntime", {configurable:!0, get:function() {
  b("Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
"object" !== typeof WebAssembly && b("no native wasm support detected");
var pa, qa = !1;
function assert(c, d) {
  c || b("Assertion failed: " + d);
}
var sa = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
function ta(c, d) {
  var e = E, f = c + d;
  for (d = c; e[d] && !(d >= f);) {
    ++d;
  }
  if (16 < d - c && e.subarray && sa) {
    return sa.decode(e.subarray(c, d));
  }
  for (f = ""; c < d;) {
    var g = e[c++];
    if (g & 128) {
      var h = e[c++] & 63;
      if (192 == (g & 224)) {
        f += String.fromCharCode((g & 31) << 6 | h);
      } else {
        var l = e[c++] & 63;
        224 == (g & 240) ? g = (g & 15) << 12 | h << 6 | l : (240 != (g & 248) && ma("Invalid UTF-8 leading byte 0x" + g.toString(16) + " encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!"), g = (g & 7) << 18 | h << 12 | l << 6 | e[c++] & 63);
        65536 > g ? f += String.fromCharCode(g) : (g -= 65536, f += String.fromCharCode(55296 | g >> 10, 56320 | g & 1023));
      }
    } else {
      f += String.fromCharCode(g);
    }
  }
  return f;
}
function ua(c, d, e) {
  assert("number" == typeof e, "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
  var f = E;
  if (0 < e) {
    e = d + e - 1;
    for (var g = 0; g < c.length; ++g) {
      var h = c.charCodeAt(g);
      if (55296 <= h && 57343 >= h) {
        var l = c.charCodeAt(++g);
        h = 65536 + ((h & 1023) << 10) | l & 1023;
      }
      if (127 >= h) {
        if (d >= e) {
          break;
        }
        f[d++] = h;
      } else {
        if (2047 >= h) {
          if (d + 1 >= e) {
            break;
          }
          f[d++] = 192 | h >> 6;
        } else {
          if (65535 >= h) {
            if (d + 2 >= e) {
              break;
            }
            f[d++] = 224 | h >> 12;
          } else {
            if (d + 3 >= e) {
              break;
            }
            2097152 <= h && ma("Invalid Unicode code point 0x" + h.toString(16) + " encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF).");
            f[d++] = 240 | h >> 18;
            f[d++] = 128 | h >> 12 & 63;
          }
          f[d++] = 128 | h >> 6 & 63;
        }
        f[d++] = 128 | h & 63;
      }
    }
    f[d] = 0;
  }
}
var va = "undefined" !== typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
function wa(c, d) {
  assert(0 == c % 2, "Pointer passed to UTF16ToString must be aligned to two bytes!");
  var e = c >> 1;
  for (var f = e + d / 2; !(e >= f) && xa[e];) {
    ++e;
  }
  e <<= 1;
  if (32 < e - c && va) {
    return va.decode(E.subarray(c, e));
  }
  e = "";
  for (f = 0; !(f >= d / 2); ++f) {
    var g = F[c + 2 * f >> 1];
    if (0 == g) {
      break;
    }
    e += String.fromCharCode(g);
  }
  return e;
}
function ya(c, d, e) {
  assert(0 == d % 2, "Pointer passed to stringToUTF16 must be aligned to two bytes!");
  assert("number" == typeof e, "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
  void 0 === e && (e = 2147483647);
  if (2 > e) {
    return 0;
  }
  e -= 2;
  var f = d;
  e = e < 2 * c.length ? e / 2 : c.length;
  for (var g = 0; g < e; ++g) {
    F[d >> 1] = c.charCodeAt(g), d += 2;
  }
  F[d >> 1] = 0;
  return d - f;
}
function za(c) {
  return 2 * c.length;
}
function Aa(c, d) {
  assert(0 == c % 4, "Pointer passed to UTF32ToString must be aligned to four bytes!");
  for (var e = 0, f = ""; !(e >= d / 4);) {
    var g = G[c + 4 * e >> 2];
    if (0 == g) {
      break;
    }
    ++e;
    65536 <= g ? (g -= 65536, f += String.fromCharCode(55296 | g >> 10, 56320 | g & 1023)) : f += String.fromCharCode(g);
  }
  return f;
}
function Ba(c, d, e) {
  assert(0 == d % 4, "Pointer passed to stringToUTF32 must be aligned to four bytes!");
  assert("number" == typeof e, "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
  void 0 === e && (e = 2147483647);
  if (4 > e) {
    return 0;
  }
  var f = d;
  e = f + e - 4;
  for (var g = 0; g < c.length; ++g) {
    var h = c.charCodeAt(g);
    if (55296 <= h && 57343 >= h) {
      var l = c.charCodeAt(++g);
      h = 65536 + ((h & 1023) << 10) | l & 1023;
    }
    G[d >> 2] = h;
    d += 4;
    if (d + 4 > e) {
      break;
    }
  }
  G[d >> 2] = 0;
  return d - f;
}
function Ca(c) {
  for (var d = 0, e = 0; e < c.length; ++e) {
    var f = c.charCodeAt(e);
    55296 <= f && 57343 >= f && ++e;
    d += 4;
  }
  return d;
}
var Da, Ea, E, F, xa, G, H, Fa, Ga;
a.TOTAL_STACK && assert(5242880 === a.TOTAL_STACK, "the stack size can no longer be determined at runtime");
var Ha = a.INITIAL_MEMORY || 16777216;
Object.getOwnPropertyDescriptor(a, "INITIAL_MEMORY") || Object.defineProperty(a, "INITIAL_MEMORY", {configurable:!0, get:function() {
  b("Module.INITIAL_MEMORY has been replaced with plain INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
assert(5242880 <= Ha, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + Ha + "! (TOTAL_STACK=5242880)");
assert("undefined" !== typeof Int32Array && "undefined" !== typeof Float64Array && void 0 !== Int32Array.prototype.subarray && void 0 !== Int32Array.prototype.set, "JS engine does not provide full typed array support");
assert(!a.wasmMemory, "Use of `wasmMemory` detected.  Use -s IMPORTED_MEMORY to define wasmMemory externally");
assert(16777216 == Ha, "Detected runtime INITIAL_MEMORY setting.  Use -s IMPORTED_MEMORY to define wasmMemory dynamically");
var I;
function Ia() {
  var c = Ja();
  assert(0 == (c & 3));
  H[(c >> 2) + 1] = 34821223;
  H[(c >> 2) + 2] = 2310721022;
  G[0] = 1668509029;
}
function J() {
  if (!qa) {
    var c = Ja(), d = H[(c >> 2) + 1];
    c = H[(c >> 2) + 2];
    34821223 == d && 2310721022 == c || b("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + c.toString(16) + " " + d.toString(16));
    1668509029 !== G[0] && b("Runtime error: The application has corrupted its heap memory area (address zero)!");
  }
}
var Ka = new Int16Array(1), La = new Int8Array(Ka.buffer);
Ka[0] = 25459;
if (115 !== La[0] || 99 !== La[1]) {
  throw "Runtime error: expected the system to be little-endian!";
}
var Ma = [], Na = [], Oa = [], Pa = [], Qa = !1;
function Ra() {
  var c = a.preRun.shift();
  Ma.unshift(c);
}
assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
var L = 0, M = null, N = null, Sa = {};
function Ta() {
  L++;
  a.monitorRunDependencies && a.monitorRunDependencies(L);
  assert(!Sa["wasm-instantiate"]);
  Sa["wasm-instantiate"] = 1;
  null === M && "undefined" !== typeof setInterval && (M = setInterval(function() {
    if (qa) {
      clearInterval(M), M = null;
    } else {
      var c = !1, d;
      for (d in Sa) {
        c || (c = !0, A("still waiting on run dependencies:")), A("dependency: " + d);
      }
      c && A("(end of list)");
    }
  }, 10000));
}
a.preloadedImages = {};
a.preloadedAudios = {};
function b(c) {
  if (a.onAbort) {
    a.onAbort(c);
  }
  A(c);
  qa = !0;
  c = "abort(" + c + ") at ";
  a: {
    var d = Error();
    if (!d.stack) {
      try {
        throw Error();
      } catch (e) {
        d = e;
      }
      if (!d.stack) {
        d = "(no stack trace available)";
        break a;
      }
    }
    d = d.stack.toString();
  }
  a.extraStackTrace && (d += "\n" + a.extraStackTrace());
  d = Ua(d);
  c = new WebAssembly.RuntimeError(c + d);
  ba(c);
  throw c;
}
function Va() {
  b("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1");
}
a.FS_createDataFile = function() {
  Va();
};
a.FS_createPreloadedFile = function() {
  Va();
};
function Wa(c) {
  var d = O;
  return String.prototype.startsWith ? d.startsWith(c) : 0 === d.indexOf(c);
}
function Xa() {
  return Wa("data:application/octet-stream;base64,");
}
function P(c) {
  return function() {
    var d = a.asm;
    assert(Qa, "native function `" + c + "` called before runtime initialization");
    assert(!0, "native function `" + c + "` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    d[c] || assert(d[c], "exported native function `" + c + "` not found");
    return d[c].apply(null, arguments);
  };
}
var O = "tess2.split.simd.wasm";
if (!Xa()) {
  var Ya = O;
  O = a.locateFile ? a.locateFile(Ya, x) : x + Ya;
}
function Za() {
  try {
    if (D) {
      return new Uint8Array(D);
    }
    if (y) {
      return y(O);
    }
    throw "both async and sync fetching of the wasm failed";
  } catch (c) {
    b(c);
  }
}
function $a() {
  return D || !fa && !w || "function" !== typeof fetch || Wa("file://") ? Promise.resolve().then(Za) : fetch(O, {credentials:"same-origin"}).then(function(c) {
    if (!c.ok) {
      throw "failed to load wasm binary file at '" + O + "'";
    }
    return c.arrayBuffer();
  }).catch(function() {
    return Za();
  });
}
function ab(c) {
  for (; 0 < c.length;) {
    var d = c.shift();
    if ("function" == typeof d) {
      d(a);
    } else {
      var e = d.m;
      "number" === typeof e ? void 0 === d.g ? I.get(e)() : I.get(e)(d.g) : e(void 0 === d.g ? null : d.g);
    }
  }
}
function Ua(c) {
  return c.replace(/\b_Z[\w\d_]+/g, function(d) {
    ma("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
    return d === d ? d : d + " [" + d + "]";
  });
}
var bb = {};
function cb(c) {
  for (; c.length;) {
    var d = c.pop();
    c.pop()(d);
  }
}
function db(c) {
  return this.fromWireType(H[c >> 2]);
}
var Q = {}, R = {}, eb = {};
function fb(c) {
  if (void 0 === c) {
    return "_unknown";
  }
  c = c.replace(/[^a-zA-Z0-9_]/g, "$");
  var d = c.charCodeAt(0);
  return 48 <= d && 57 >= d ? "_" + c : c;
}
function gb(c, d) {
  c = fb(c);
  return (new Function("body", "return function " + c + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(d);
}
function hb(c) {
  var d = Error, e = gb(c, function(f) {
    this.name = c;
    this.message = f;
    f = Error(f).stack;
    void 0 !== f && (this.stack = this.toString() + "\n" + f.replace(/^Error(:[^\n]*)?\n/, ""));
  });
  e.prototype = Object.create(d.prototype);
  e.prototype.constructor = e;
  e.prototype.toString = function() {
    return void 0 === this.message ? this.name : this.name + ": " + this.message;
  };
  return e;
}
var ib = void 0;
function jb(c, d, e) {
  function f(m) {
    m = e(m);
    if (m.length !== c.length) {
      throw new ib("Mismatched type converter count");
    }
    for (var k = 0; k < c.length; ++k) {
      S(c[k], m[k]);
    }
  }
  c.forEach(function(m) {
    eb[m] = d;
  });
  var g = Array(d.length), h = [], l = 0;
  d.forEach(function(m, k) {
    R.hasOwnProperty(m) ? g[k] = R[m] : (h.push(m), Q.hasOwnProperty(m) || (Q[m] = []), Q[m].push(function() {
      g[k] = R[m];
      ++l;
      l === h.length && f(g);
    }));
  });
  0 === h.length && f(g);
}
function kb(c) {
  switch(c) {
    case 1:
      return 0;
    case 2:
      return 1;
    case 4:
      return 2;
    case 8:
      return 3;
    default:
      throw new TypeError("Unknown type size: " + c);
  }
}
var lb = void 0;
function T(c) {
  for (var d = ""; E[c];) {
    d += lb[E[c++]];
  }
  return d;
}
var mb = void 0;
function U(c) {
  throw new mb(c);
}
function S(c, d, e) {
  e = e || {};
  if (!("argPackAdvance" in d)) {
    throw new TypeError("registerType registeredInstance requires argPackAdvance");
  }
  var f = d.name;
  c || U('type "' + f + '" must have a positive integer typeid pointer');
  if (R.hasOwnProperty(c)) {
    if (e.v) {
      return;
    }
    U("Cannot register type '" + f + "' twice");
  }
  R[c] = d;
  delete eb[c];
  Q.hasOwnProperty(c) && (d = Q[c], delete Q[c], d.forEach(function(g) {
    g();
  }));
}
var nb = [], V = [{}, {value:void 0}, {value:null}, {value:!0}, {value:!1}];
function ob(c) {
  switch(c) {
    case void 0:
      return 1;
    case null:
      return 2;
    case !0:
      return 3;
    case !1:
      return 4;
    default:
      var d = nb.length ? nb.pop() : V.length;
      V[d] = {C:1, value:c};
      return d;
  }
}
function pb(c) {
  if (null === c) {
    return "null";
  }
  var d = typeof c;
  return "object" === d || "array" === d || "function" === d ? c.toString() : "" + c;
}
function qb(c, d) {
  switch(d) {
    case 2:
      return function(e) {
        return this.fromWireType(Fa[e >> 2]);
      };
    case 3:
      return function(e) {
        return this.fromWireType(Ga[e >> 3]);
      };
    default:
      throw new TypeError("Unknown float type: " + c);
  }
}
function rb(c) {
  var d = Function;
  if (!(d instanceof Function)) {
    throw new TypeError("new_ called with constructor type " + typeof d + " which is not a function");
  }
  var e = gb(d.name || "unknownFunctionName", function() {
  });
  e.prototype = d.prototype;
  e = new e;
  c = d.apply(e, c);
  return c instanceof Object ? c : e;
}
function sb(c, d) {
  var e = a;
  if (void 0 === e[c].a) {
    var f = e[c];
    e[c] = function() {
      e[c].a.hasOwnProperty(arguments.length) || U("Function '" + d + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + e[c].a + ")!");
      return e[c].a[arguments.length].apply(this, arguments);
    };
    e[c].a = [];
    e[c].a[f.j] = f;
  }
}
function tb(c, d, e) {
  a.hasOwnProperty(c) ? ((void 0 === e || void 0 !== a[c].a && void 0 !== a[c].a[e]) && U("Cannot register public name '" + c + "' twice"), sb(c, c), a.hasOwnProperty(e) && U("Cannot register multiple overloads of a function with the same number of arguments (" + e + ")!"), a[c].a[e] = d) : (a[c] = d, void 0 !== e && (a[c].I = e));
}
function ub(c, d) {
  for (var e = [], f = 0; f < c; f++) {
    e.push(G[(d >> 2) + f]);
  }
  return e;
}
function vb(c, d) {
  assert(0 <= c.indexOf("j"), "getDynCaller should only be called with i64 sigs");
  var e = [];
  return function() {
    e.length = arguments.length;
    for (var f = 0; f < arguments.length; f++) {
      e[f] = arguments[f];
    }
    -1 != c.indexOf("j") ? (assert("dynCall_" + c in a, "bad function pointer type - no table for sig '" + c + "'"), e && e.length ? assert(e.length === c.substring(1).replace(/j/g, "--").length) : assert(1 == c.length), f = e && e.length ? a["dynCall_" + c].apply(null, [d].concat(e)) : a["dynCall_" + c].call(null, d)) : (assert(I.get(d), "missing table entry in dynCall: " + d), f = I.get(d).apply(null, e));
    return f;
  };
}
function wb(c, d) {
  c = T(c);
  var e = -1 != c.indexOf("j") ? vb(c, d) : I.get(d);
  "function" !== typeof e && U("unknown function pointer with signature " + c + ": " + d);
  return e;
}
var xb = void 0;
function yb(c) {
  c = zb(c);
  var d = T(c);
  W(c);
  return d;
}
function Ab(c, d) {
  function e(h) {
    g[h] || R[h] || (eb[h] ? eb[h].forEach(e) : (f.push(h), g[h] = !0));
  }
  var f = [], g = {};
  d.forEach(e);
  throw new xb(c + ": " + f.map(yb).join([", "]));
}
function Bb(c, d, e) {
  switch(d) {
    case 0:
      return e ? function(f) {
        return Ea[f];
      } : function(f) {
        return E[f];
      };
    case 1:
      return e ? function(f) {
        return F[f >> 1];
      } : function(f) {
        return xa[f >> 1];
      };
    case 2:
      return e ? function(f) {
        return G[f >> 2];
      } : function(f) {
        return H[f >> 2];
      };
    default:
      throw new TypeError("Unknown integer type: " + c);
  }
}
ib = a.InternalError = hb("InternalError");
for (var Cb = Array(256), Db = 0; 256 > Db; ++Db) {
  Cb[Db] = String.fromCharCode(Db);
}
lb = Cb;
mb = a.BindingError = hb("BindingError");
a.count_emval_handles = function() {
  for (var c = 0, d = 5; d < V.length; ++d) {
    void 0 !== V[d] && ++c;
  }
  return c;
};
a.get_first_emval = function() {
  for (var c = 5; c < V.length; ++c) {
    if (void 0 !== V[c]) {
      return V[c];
    }
  }
  return null;
};
xb = a.UnboundTypeError = hb("UnboundTypeError");
Na.push({m:function() {
  Eb();
}});
var Mb = {__assert_fail:function(c, d, e, f) {
  b("Assertion failed: " + (c ? ta(c, void 0) : "") + ", at: " + [d ? d ? ta(d, void 0) : "" : "unknown filename", e, f ? f ? ta(f, void 0) : "" : "unknown function"]);
}, _embind_finalize_value_object:function(c) {
  var d = bb[c];
  delete bb[c];
  var e = d.A, f = d.B, g = d.h, h = g.map(function(l) {
    return l.u;
  }).concat(g.map(function(l) {
    return l.F;
  }));
  jb([c], h, function(l) {
    var m = {};
    g.forEach(function(k, n) {
      var q = l[n], r = k.o, z = k.s, B = l[n + g.length], p = k.D, ra = k.G;
      m[k.l] = {read:function(C) {
        return q.fromWireType(r(z, C));
      }, write:function(C, K) {
        var ca = [];
        p(ra, C, B.toWireType(ca, K));
        cb(ca);
      }};
    });
    return [{name:d.name, fromWireType:function(k) {
      var n = {}, q;
      for (q in m) {
        n[q] = m[q].read(k);
      }
      f(k);
      return n;
    }, toWireType:function(k, n) {
      for (var q in m) {
        if (!(q in n)) {
          throw new TypeError('Missing field:  "' + q + '"');
        }
      }
      var r = e();
      for (q in m) {
        m[q].write(r, n[q]);
      }
      null !== k && k.push(f, r);
      return r;
    }, argPackAdvance:8, readValueFromPointer:db, b:f, }];
  });
}, _embind_register_bool:function(c, d, e, f, g) {
  var h = kb(e);
  d = T(d);
  S(c, {name:d, fromWireType:function(l) {
    return !!l;
  }, toWireType:function(l, m) {
    return m ? f : g;
  }, argPackAdvance:8, readValueFromPointer:function(l) {
    if (1 === e) {
      var m = Ea;
    } else {
      if (2 === e) {
        m = F;
      } else {
        if (4 === e) {
          m = G;
        } else {
          throw new TypeError("Unknown boolean type size: " + d);
        }
      }
    }
    return this.fromWireType(m[l >> h]);
  }, b:null, });
}, _embind_register_emval:function(c, d) {
  d = T(d);
  S(c, {name:d, fromWireType:function(e) {
    var f = V[e].value;
    4 < e && 0 === --V[e].C && (V[e] = void 0, nb.push(e));
    return f;
  }, toWireType:function(e, f) {
    return ob(f);
  }, argPackAdvance:8, readValueFromPointer:db, b:null, });
}, _embind_register_float:function(c, d, e) {
  e = kb(e);
  d = T(d);
  S(c, {name:d, fromWireType:function(f) {
    return f;
  }, toWireType:function(f, g) {
    if ("number" !== typeof g && "boolean" !== typeof g) {
      throw new TypeError('Cannot convert "' + pb(g) + '" to ' + this.name);
    }
    return g;
  }, argPackAdvance:8, readValueFromPointer:qb(d, e), b:null, });
}, _embind_register_function:function(c, d, e, f, g, h) {
  var l = ub(d, e);
  c = T(c);
  g = wb(f, g);
  tb(c, function() {
    Ab("Cannot call " + c + " due to unbound types", l);
  }, d - 1);
  jb([], l, function(m) {
    var k = [m[0], null].concat(m.slice(1)), n = m = c, q = g, r = k.length;
    2 > r && U("argTypes array size mismatch! Must at least get return value and 'this' types!");
    for (var z = null !== k[1] && !1, B = !1, p = 1; p < k.length; ++p) {
      if (null !== k[p] && void 0 === k[p].b) {
        B = !0;
        break;
      }
    }
    var ra = "void" !== k[0].name, C = "", K = "";
    for (p = 0; p < r - 2; ++p) {
      C += (0 !== p ? ", " : "") + "arg" + p, K += (0 !== p ? ", " : "") + "arg" + p + "Wired";
    }
    n = "return function " + fb(n) + "(" + C + ") {\nif (arguments.length !== " + (r - 2) + ") {\nthrowBindingError('function " + n + " called with ' + arguments.length + ' arguments, expected " + (r - 2) + " args!');\n}\n";
    B && (n += "var destructors = [];\n");
    var ca = B ? "destructors" : "null";
    C = "throwBindingError invoker fn runDestructors retType classParam".split(" ");
    q = [U, q, h, cb, k[0], k[1]];
    z && (n += "var thisWired = classParam.toWireType(" + ca + ", this);\n");
    for (p = 0; p < r - 2; ++p) {
      n += "var arg" + p + "Wired = argType" + p + ".toWireType(" + ca + ", arg" + p + "); // " + k[p + 2].name + "\n", C.push("argType" + p), q.push(k[p + 2]);
    }
    z && (K = "thisWired" + (0 < K.length ? ", " : "") + K);
    n += (ra ? "var rv = " : "") + "invoker(fn" + (0 < K.length ? ", " : "") + K + ");\n";
    if (B) {
      n += "runDestructors(destructors);\n";
    } else {
      for (p = z ? 1 : 2; p < k.length; ++p) {
        r = 1 === p ? "thisWired" : "arg" + (p - 2) + "Wired", null !== k[p].b && (n += r + "_dtor(" + r + "); // " + k[p].name + "\n", C.push(r + "_dtor"), q.push(k[p].b));
      }
    }
    ra && (n += "var ret = retType.fromWireType(rv);\nreturn ret;\n");
    C.push(n + "}\n");
    k = rb(C).apply(null, q);
    p = d - 1;
    if (!a.hasOwnProperty(m)) {
      throw new ib("Replacing nonexistant public symbol");
    }
    void 0 !== a[m].a && void 0 !== p ? a[m].a[p] = k : (a[m] = k, a[m].j = p);
    return [];
  });
}, _embind_register_integer:function(c, d, e, f, g) {
  function h(n) {
    return n;
  }
  d = T(d);
  -1 === g && (g = 4294967295);
  var l = kb(e);
  if (0 === f) {
    var m = 32 - 8 * e;
    h = function(n) {
      return n << m >>> m;
    };
  }
  var k = -1 != d.indexOf("unsigned");
  S(c, {name:d, fromWireType:h, toWireType:function(n, q) {
    if ("number" !== typeof q && "boolean" !== typeof q) {
      throw new TypeError('Cannot convert "' + pb(q) + '" to ' + this.name);
    }
    if (q < f || q > g) {
      throw new TypeError('Passing a number "' + pb(q) + '" from JS side to C/C++ side to an argument of type "' + d + '", which is outside the valid range [' + f + ", " + g + "]!");
    }
    return k ? q >>> 0 : q | 0;
  }, argPackAdvance:8, readValueFromPointer:Bb(d, l, 0 !== f), b:null, });
}, _embind_register_memory_view:function(c, d, e) {
  function f(h) {
    h >>= 2;
    var l = H;
    return new g(Da, l[h + 1], l[h]);
  }
  var g = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, ][d];
  e = T(e);
  S(c, {name:e, fromWireType:f, argPackAdvance:8, readValueFromPointer:f, }, {v:!0, });
}, _embind_register_std_string:function(c, d) {
  d = T(d);
  var e = "std::string" === d;
  S(c, {name:d, fromWireType:function(f) {
    var g = H[f >> 2];
    if (e) {
      for (var h = f + 4, l = 0; l <= g; ++l) {
        var m = f + 4 + l;
        if (l == g || 0 == E[m]) {
          h = h ? ta(h, m - h) : "";
          if (void 0 === k) {
            var k = h;
          } else {
            k += String.fromCharCode(0), k += h;
          }
          h = m + 1;
        }
      }
    } else {
      k = Array(g);
      for (l = 0; l < g; ++l) {
        k[l] = String.fromCharCode(E[f + 4 + l]);
      }
      k = k.join("");
    }
    W(f);
    return k;
  }, toWireType:function(f, g) {
    g instanceof ArrayBuffer && (g = new Uint8Array(g));
    var h = "string" === typeof g;
    h || g instanceof Uint8Array || g instanceof Uint8ClampedArray || g instanceof Int8Array || U("Cannot pass non-string to std::string");
    var l = (e && h ? function() {
      for (var n = 0, q = 0; q < g.length; ++q) {
        var r = g.charCodeAt(q);
        55296 <= r && 57343 >= r && (r = 65536 + ((r & 1023) << 10) | g.charCodeAt(++q) & 1023);
        127 >= r ? ++n : n = 2047 >= r ? n + 2 : 65535 >= r ? n + 3 : n + 4;
      }
      return n;
    } : function() {
      return g.length;
    })(), m = Fb(4 + l + 1);
    H[m >> 2] = l;
    if (e && h) {
      ua(g, m + 4, l + 1);
    } else {
      if (h) {
        for (h = 0; h < l; ++h) {
          var k = g.charCodeAt(h);
          255 < k && (W(m), U("String has UTF-16 code units that do not fit in 8 bits"));
          E[m + 4 + h] = k;
        }
      } else {
        for (h = 0; h < l; ++h) {
          E[m + 4 + h] = g[h];
        }
      }
    }
    null !== f && f.push(W, m);
    return m;
  }, argPackAdvance:8, readValueFromPointer:db, b:function(f) {
    W(f);
  }, });
}, _embind_register_std_wstring:function(c, d, e) {
  e = T(e);
  if (2 === d) {
    var f = wa;
    var g = ya;
    var h = za;
    var l = function() {
      return xa;
    };
    var m = 1;
  } else {
    4 === d && (f = Aa, g = Ba, h = Ca, l = function() {
      return H;
    }, m = 2);
  }
  S(c, {name:e, fromWireType:function(k) {
    for (var n = H[k >> 2], q = l(), r, z = k + 4, B = 0; B <= n; ++B) {
      var p = k + 4 + B * d;
      if (B == n || 0 == q[p >> m]) {
        z = f(z, p - z), void 0 === r ? r = z : (r += String.fromCharCode(0), r += z), z = p + d;
      }
    }
    W(k);
    return r;
  }, toWireType:function(k, n) {
    "string" !== typeof n && U("Cannot pass non-string to C++ string type " + e);
    var q = h(n), r = Fb(4 + q + d);
    H[r >> 2] = q >> m;
    g(n, r + 4, q + d);
    null !== k && k.push(W, r);
    return r;
  }, argPackAdvance:8, readValueFromPointer:db, b:function(k) {
    W(k);
  }, });
}, _embind_register_value_object:function(c, d, e, f, g, h) {
  bb[c] = {name:T(d), A:wb(e, f), B:wb(g, h), h:[], };
}, _embind_register_value_object_field:function(c, d, e, f, g, h, l, m, k, n) {
  bb[c].h.push({l:T(d), u:e, o:wb(f, g), s:h, F:l, D:wb(m, k), G:n, });
}, _embind_register_void:function(c, d) {
  d = T(d);
  S(c, {H:!0, name:d, argPackAdvance:0, fromWireType:function() {
  }, toWireType:function() {
  }, });
}, abort:function() {
  b();
}, emscripten_longjmp:function(c, d) {
  X(c, d || 1);
  throw "longjmp";
}, emscripten_memcpy_big:function(c, d, e) {
  E.copyWithin(c, d, d + e);
}, emscripten_resize_heap:function(c) {
  b("Cannot enlarge memory arrays to size " + (c >>> 0) + " bytes (OOM). Either (1) compile with  -s INITIAL_MEMORY=X  with X higher than the current value " + Ea.length + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ");
}, getTempRet0:function() {
  return oa | 0;
}, invoke_ii:Gb, invoke_iiii:Hb, invoke_vi:Ib, invoke_vii:Jb, invoke_viii:Kb, invoke_viiiii:Lb, setTempRet0:function(c) {
  oa = c | 0;
}};
(function() {
  function c(h) {
    a.asm = h.exports;
    pa = a.asm.memory;
    assert(pa, "memory not found in wasm exports");
    Da = h = pa.buffer;
    a.HEAP8 = Ea = new Int8Array(h);
    a.HEAP16 = F = new Int16Array(h);
    a.HEAP32 = G = new Int32Array(h);
    a.HEAPU8 = E = new Uint8Array(h);
    a.HEAPU16 = xa = new Uint16Array(h);
    a.HEAPU32 = H = new Uint32Array(h);
    a.HEAPF32 = Fa = new Float32Array(h);
    a.HEAPF64 = Ga = new Float64Array(h);
    I = a.asm.__indirect_function_table;
    assert(I, "table not found in wasm exports");
    L--;
    a.monitorRunDependencies && a.monitorRunDependencies(L);
    assert(Sa["wasm-instantiate"]);
    delete Sa["wasm-instantiate"];
    0 == L && (null !== M && (clearInterval(M), M = null), N && (h = N, N = null, h()));
  }
  function d(h) {
    assert(a === g, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
    g = null;
    c(h.instance);
  }
  function e(h) {
    return $a().then(function(l) {
      return WebAssembly.instantiate(l, f);
    }).then(h, function(l) {
      A("failed to asynchronously prepare wasm: " + l);
      b(l);
    });
  }
  var f = {env:Mb, wasi_snapshot_preview1:Mb, };
  Ta();
  var g = a;
  if (a.instantiateWasm) {
    try {
      return a.instantiateWasm(f, c);
    } catch (h) {
      return A("Module.instantiateWasm callback failed with error: " + h), !1;
    }
  }
  (function() {
    return D || "function" !== typeof WebAssembly.instantiateStreaming || Xa() || Wa("file://") || "function" !== typeof fetch ? e(d) : fetch(O, {credentials:"same-origin"}).then(function(h) {
      return WebAssembly.instantiateStreaming(h, f).then(d, function(l) {
        A("wasm streaming compile failed: " + l);
        A("falling back to ArrayBuffer instantiation");
        return e(d);
      });
    });
  })().catch(ba);
  return {};
})();
var Eb = a.___wasm_call_ctors = P("__wasm_call_ctors"), Fb = a._malloc = P("malloc");
a._realloc = P("realloc");
var W = a._free = P("free");
a._testSetjmp = P("testSetjmp");
a._saveSetjmp = P("saveSetjmp");
var zb = a.___getTypeName = P("__getTypeName");
a.___embind_register_native_and_builtin_types = P("__embind_register_native_and_builtin_types");
a.___errno_location = P("__errno_location");
a._fflush = P("fflush");
var Y = a.stackSave = P("stackSave"), Z = a.stackRestore = P("stackRestore");
a.stackAlloc = P("stackAlloc");
var Nb = a._emscripten_stack_init = function() {
  return (Nb = a._emscripten_stack_init = a.asm.emscripten_stack_init).apply(null, arguments);
};
a._emscripten_stack_get_free = function() {
  return (a._emscripten_stack_get_free = a.asm.emscripten_stack_get_free).apply(null, arguments);
};
var Ja = a._emscripten_stack_get_end = function() {
  return (Ja = a._emscripten_stack_get_end = a.asm.emscripten_stack_get_end).apply(null, arguments);
}, X = a._setThrew = P("setThrew");
function Jb(c, d, e) {
  var f = Y();
  try {
    I.get(c)(d, e);
  } catch (g) {
    Z(f);
    if (g !== g + 0 && "longjmp" !== g) {
      throw g;
    }
    X(1, 0);
  }
}
function Ib(c, d) {
  var e = Y();
  try {
    I.get(c)(d);
  } catch (f) {
    Z(e);
    if (f !== f + 0 && "longjmp" !== f) {
      throw f;
    }
    X(1, 0);
  }
}
function Gb(c, d) {
  var e = Y();
  try {
    return I.get(c)(d);
  } catch (f) {
    Z(e);
    if (f !== f + 0 && "longjmp" !== f) {
      throw f;
    }
    X(1, 0);
  }
}
function Hb(c, d, e, f) {
  var g = Y();
  try {
    return I.get(c)(d, e, f);
  } catch (h) {
    Z(g);
    if (h !== h + 0 && "longjmp" !== h) {
      throw h;
    }
    X(1, 0);
  }
}
function Kb(c, d, e, f) {
  var g = Y();
  try {
    I.get(c)(d, e, f);
  } catch (h) {
    Z(g);
    if (h !== h + 0 && "longjmp" !== h) {
      throw h;
    }
    X(1, 0);
  }
}
function Lb(c, d, e, f, g, h) {
  var l = Y();
  try {
    I.get(c)(d, e, f, g, h);
  } catch (m) {
    Z(l);
    if (m !== m + 0 && "longjmp" !== m) {
      throw m;
    }
    X(1, 0);
  }
}
Object.getOwnPropertyDescriptor(a, "intArrayFromString") || (a.intArrayFromString = function() {
  b("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "intArrayToString") || (a.intArrayToString = function() {
  b("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ccall") || (a.ccall = function() {
  b("'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "cwrap") || (a.cwrap = function() {
  b("'cwrap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "setValue") || (a.setValue = function() {
  b("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getValue") || (a.getValue = function() {
  b("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "allocate") || (a.allocate = function() {
  b("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "UTF8ArrayToString") || (a.UTF8ArrayToString = function() {
  b("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "UTF8ToString") || (a.UTF8ToString = function() {
  b("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "stringToUTF8Array") || (a.stringToUTF8Array = function() {
  b("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "stringToUTF8") || (a.stringToUTF8 = function() {
  b("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "lengthBytesUTF8") || (a.lengthBytesUTF8 = function() {
  b("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "stackTrace") || (a.stackTrace = function() {
  b("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "addOnPreRun") || (a.addOnPreRun = function() {
  b("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "addOnInit") || (a.addOnInit = function() {
  b("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "addOnPreMain") || (a.addOnPreMain = function() {
  b("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "addOnExit") || (a.addOnExit = function() {
  b("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "addOnPostRun") || (a.addOnPostRun = function() {
  b("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "writeStringToMemory") || (a.writeStringToMemory = function() {
  b("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "writeArrayToMemory") || (a.writeArrayToMemory = function() {
  b("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "writeAsciiToMemory") || (a.writeAsciiToMemory = function() {
  b("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "addRunDependency") || (a.addRunDependency = function() {
  b("'addRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(a, "removeRunDependency") || (a.removeRunDependency = function() {
  b("'removeRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(a, "FS_createFolder") || (a.FS_createFolder = function() {
  b("'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "FS_createPath") || (a.FS_createPath = function() {
  b("'FS_createPath' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(a, "FS_createDataFile") || (a.FS_createDataFile = function() {
  b("'FS_createDataFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(a, "FS_createPreloadedFile") || (a.FS_createPreloadedFile = function() {
  b("'FS_createPreloadedFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(a, "FS_createLazyFile") || (a.FS_createLazyFile = function() {
  b("'FS_createLazyFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(a, "FS_createLink") || (a.FS_createLink = function() {
  b("'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "FS_createDevice") || (a.FS_createDevice = function() {
  b("'FS_createDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(a, "FS_unlink") || (a.FS_unlink = function() {
  b("'FS_unlink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(a, "getLEB") || (a.getLEB = function() {
  b("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getFunctionTables") || (a.getFunctionTables = function() {
  b("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "alignFunctionTables") || (a.alignFunctionTables = function() {
  b("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "registerFunctions") || (a.registerFunctions = function() {
  b("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "addFunction") || (a.addFunction = function() {
  b("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "removeFunction") || (a.removeFunction = function() {
  b("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getFuncWrapper") || (a.getFuncWrapper = function() {
  b("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "prettyPrint") || (a.prettyPrint = function() {
  b("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "makeBigInt") || (a.makeBigInt = function() {
  b("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "dynCall") || (a.dynCall = function() {
  b("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getCompilerSetting") || (a.getCompilerSetting = function() {
  b("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "print") || (a.print = function() {
  b("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "printErr") || (a.printErr = function() {
  b("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getTempRet0") || (a.getTempRet0 = function() {
  b("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "setTempRet0") || (a.setTempRet0 = function() {
  b("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "callMain") || (a.callMain = function() {
  b("'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "abort") || (a.abort = function() {
  b("'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "stringToNewUTF8") || (a.stringToNewUTF8 = function() {
  b("'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "setFileTime") || (a.setFileTime = function() {
  b("'setFileTime' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "abortOnCannotGrowMemory") || (a.abortOnCannotGrowMemory = function() {
  b("'abortOnCannotGrowMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "emscripten_realloc_buffer") || (a.emscripten_realloc_buffer = function() {
  b("'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ENV") || (a.ENV = function() {
  b("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ERRNO_CODES") || (a.ERRNO_CODES = function() {
  b("'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ERRNO_MESSAGES") || (a.ERRNO_MESSAGES = function() {
  b("'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "setErrNo") || (a.setErrNo = function() {
  b("'setErrNo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "DNS") || (a.DNS = function() {
  b("'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getHostByName") || (a.getHostByName = function() {
  b("'getHostByName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "GAI_ERRNO_MESSAGES") || (a.GAI_ERRNO_MESSAGES = function() {
  b("'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "Protocols") || (a.Protocols = function() {
  b("'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "Sockets") || (a.Sockets = function() {
  b("'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getRandomDevice") || (a.getRandomDevice = function() {
  b("'getRandomDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "traverseStack") || (a.traverseStack = function() {
  b("'traverseStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "UNWIND_CACHE") || (a.UNWIND_CACHE = function() {
  b("'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "withBuiltinMalloc") || (a.withBuiltinMalloc = function() {
  b("'withBuiltinMalloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "readAsmConstArgsArray") || (a.readAsmConstArgsArray = function() {
  b("'readAsmConstArgsArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "readAsmConstArgs") || (a.readAsmConstArgs = function() {
  b("'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "mainThreadEM_ASM") || (a.mainThreadEM_ASM = function() {
  b("'mainThreadEM_ASM' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "jstoi_q") || (a.jstoi_q = function() {
  b("'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "jstoi_s") || (a.jstoi_s = function() {
  b("'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getExecutableName") || (a.getExecutableName = function() {
  b("'getExecutableName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "listenOnce") || (a.listenOnce = function() {
  b("'listenOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "autoResumeAudioContext") || (a.autoResumeAudioContext = function() {
  b("'autoResumeAudioContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "dynCallLegacy") || (a.dynCallLegacy = function() {
  b("'dynCallLegacy' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getDynCaller") || (a.getDynCaller = function() {
  b("'getDynCaller' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "dynCall") || (a.dynCall = function() {
  b("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "callRuntimeCallbacks") || (a.callRuntimeCallbacks = function() {
  b("'callRuntimeCallbacks' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "abortStackOverflow") || (a.abortStackOverflow = function() {
  b("'abortStackOverflow' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "reallyNegative") || (a.reallyNegative = function() {
  b("'reallyNegative' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "unSign") || (a.unSign = function() {
  b("'unSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "reSign") || (a.reSign = function() {
  b("'reSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "formatString") || (a.formatString = function() {
  b("'formatString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "PATH") || (a.PATH = function() {
  b("'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "PATH_FS") || (a.PATH_FS = function() {
  b("'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "SYSCALLS") || (a.SYSCALLS = function() {
  b("'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "syscallMmap2") || (a.syscallMmap2 = function() {
  b("'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "syscallMunmap") || (a.syscallMunmap = function() {
  b("'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "JSEvents") || (a.JSEvents = function() {
  b("'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "specialHTMLTargets") || (a.specialHTMLTargets = function() {
  b("'specialHTMLTargets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "maybeCStringToJsString") || (a.maybeCStringToJsString = function() {
  b("'maybeCStringToJsString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "findEventTarget") || (a.findEventTarget = function() {
  b("'findEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "findCanvasEventTarget") || (a.findCanvasEventTarget = function() {
  b("'findCanvasEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "polyfillSetImmediate") || (a.polyfillSetImmediate = function() {
  b("'polyfillSetImmediate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "demangle") || (a.demangle = function() {
  b("'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "demangleAll") || (a.demangleAll = function() {
  b("'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "jsStackTrace") || (a.jsStackTrace = function() {
  b("'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "stackTrace") || (a.stackTrace = function() {
  b("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getEnvStrings") || (a.getEnvStrings = function() {
  b("'getEnvStrings' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "checkWasiClock") || (a.checkWasiClock = function() {
  b("'checkWasiClock' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "flush_NO_FILESYSTEM") || (a.flush_NO_FILESYSTEM = function() {
  b("'flush_NO_FILESYSTEM' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "writeI53ToI64") || (a.writeI53ToI64 = function() {
  b("'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "writeI53ToI64Clamped") || (a.writeI53ToI64Clamped = function() {
  b("'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "writeI53ToI64Signaling") || (a.writeI53ToI64Signaling = function() {
  b("'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "writeI53ToU64Clamped") || (a.writeI53ToU64Clamped = function() {
  b("'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "writeI53ToU64Signaling") || (a.writeI53ToU64Signaling = function() {
  b("'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "readI53FromI64") || (a.readI53FromI64 = function() {
  b("'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "readI53FromU64") || (a.readI53FromU64 = function() {
  b("'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "convertI32PairToI53") || (a.convertI32PairToI53 = function() {
  b("'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "convertU32PairToI53") || (a.convertU32PairToI53 = function() {
  b("'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "uncaughtExceptionCount") || (a.uncaughtExceptionCount = function() {
  b("'uncaughtExceptionCount' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "exceptionLast") || (a.exceptionLast = function() {
  b("'exceptionLast' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "exceptionCaught") || (a.exceptionCaught = function() {
  b("'exceptionCaught' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ExceptionInfoAttrs") || (a.ExceptionInfoAttrs = function() {
  b("'ExceptionInfoAttrs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ExceptionInfo") || (a.ExceptionInfo = function() {
  b("'ExceptionInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "CatchInfo") || (a.CatchInfo = function() {
  b("'CatchInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "exception_addRef") || (a.exception_addRef = function() {
  b("'exception_addRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "exception_decRef") || (a.exception_decRef = function() {
  b("'exception_decRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "Browser") || (a.Browser = function() {
  b("'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "funcWrappers") || (a.funcWrappers = function() {
  b("'funcWrappers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getFuncWrapper") || (a.getFuncWrapper = function() {
  b("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "setMainLoop") || (a.setMainLoop = function() {
  b("'setMainLoop' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "FS") || (a.FS = function() {
  b("'FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "mmapAlloc") || (a.mmapAlloc = function() {
  b("'mmapAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "MEMFS") || (a.MEMFS = function() {
  b("'MEMFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "TTY") || (a.TTY = function() {
  b("'TTY' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "PIPEFS") || (a.PIPEFS = function() {
  b("'PIPEFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "SOCKFS") || (a.SOCKFS = function() {
  b("'SOCKFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "tempFixedLengthArray") || (a.tempFixedLengthArray = function() {
  b("'tempFixedLengthArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "miniTempWebGLFloatBuffers") || (a.miniTempWebGLFloatBuffers = function() {
  b("'miniTempWebGLFloatBuffers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "heapObjectForWebGLType") || (a.heapObjectForWebGLType = function() {
  b("'heapObjectForWebGLType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "heapAccessShiftForWebGLHeap") || (a.heapAccessShiftForWebGLHeap = function() {
  b("'heapAccessShiftForWebGLHeap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "GL") || (a.GL = function() {
  b("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "emscriptenWebGLGet") || (a.emscriptenWebGLGet = function() {
  b("'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "computeUnpackAlignedImageSize") || (a.computeUnpackAlignedImageSize = function() {
  b("'computeUnpackAlignedImageSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "emscriptenWebGLGetTexPixelData") || (a.emscriptenWebGLGetTexPixelData = function() {
  b("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "emscriptenWebGLGetUniform") || (a.emscriptenWebGLGetUniform = function() {
  b("'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "emscriptenWebGLGetVertexAttrib") || (a.emscriptenWebGLGetVertexAttrib = function() {
  b("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "writeGLArray") || (a.writeGLArray = function() {
  b("'writeGLArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "AL") || (a.AL = function() {
  b("'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "SDL_unicode") || (a.SDL_unicode = function() {
  b("'SDL_unicode' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "SDL_ttfContext") || (a.SDL_ttfContext = function() {
  b("'SDL_ttfContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "SDL_audio") || (a.SDL_audio = function() {
  b("'SDL_audio' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "SDL") || (a.SDL = function() {
  b("'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "SDL_gfx") || (a.SDL_gfx = function() {
  b("'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "GLUT") || (a.GLUT = function() {
  b("'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "EGL") || (a.EGL = function() {
  b("'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "GLFW_Window") || (a.GLFW_Window = function() {
  b("'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "GLFW") || (a.GLFW = function() {
  b("'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "GLEW") || (a.GLEW = function() {
  b("'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "IDBStore") || (a.IDBStore = function() {
  b("'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "runAndAbortIfError") || (a.runAndAbortIfError = function() {
  b("'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "emval_handle_array") || (a.emval_handle_array = function() {
  b("'emval_handle_array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "emval_free_list") || (a.emval_free_list = function() {
  b("'emval_free_list' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "emval_symbols") || (a.emval_symbols = function() {
  b("'emval_symbols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "init_emval") || (a.init_emval = function() {
  b("'init_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "count_emval_handles") || (a.count_emval_handles = function() {
  b("'count_emval_handles' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "get_first_emval") || (a.get_first_emval = function() {
  b("'get_first_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getStringOrSymbol") || (a.getStringOrSymbol = function() {
  b("'getStringOrSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "requireHandle") || (a.requireHandle = function() {
  b("'requireHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "emval_newers") || (a.emval_newers = function() {
  b("'emval_newers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "craftEmvalAllocator") || (a.craftEmvalAllocator = function() {
  b("'craftEmvalAllocator' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "emval_get_global") || (a.emval_get_global = function() {
  b("'emval_get_global' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "emval_methodCallers") || (a.emval_methodCallers = function() {
  b("'emval_methodCallers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "InternalError") || (a.InternalError = function() {
  b("'InternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "BindingError") || (a.BindingError = function() {
  b("'BindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "UnboundTypeError") || (a.UnboundTypeError = function() {
  b("'UnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "PureVirtualError") || (a.PureVirtualError = function() {
  b("'PureVirtualError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "init_embind") || (a.init_embind = function() {
  b("'init_embind' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "throwInternalError") || (a.throwInternalError = function() {
  b("'throwInternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "throwBindingError") || (a.throwBindingError = function() {
  b("'throwBindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "throwUnboundTypeError") || (a.throwUnboundTypeError = function() {
  b("'throwUnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ensureOverloadTable") || (a.ensureOverloadTable = function() {
  b("'ensureOverloadTable' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "exposePublicSymbol") || (a.exposePublicSymbol = function() {
  b("'exposePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "replacePublicSymbol") || (a.replacePublicSymbol = function() {
  b("'replacePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "extendError") || (a.extendError = function() {
  b("'extendError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "createNamedFunction") || (a.createNamedFunction = function() {
  b("'createNamedFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "registeredInstances") || (a.registeredInstances = function() {
  b("'registeredInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getBasestPointer") || (a.getBasestPointer = function() {
  b("'getBasestPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "registerInheritedInstance") || (a.registerInheritedInstance = function() {
  b("'registerInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "unregisterInheritedInstance") || (a.unregisterInheritedInstance = function() {
  b("'unregisterInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getInheritedInstance") || (a.getInheritedInstance = function() {
  b("'getInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getInheritedInstanceCount") || (a.getInheritedInstanceCount = function() {
  b("'getInheritedInstanceCount' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getLiveInheritedInstances") || (a.getLiveInheritedInstances = function() {
  b("'getLiveInheritedInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "registeredTypes") || (a.registeredTypes = function() {
  b("'registeredTypes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "awaitingDependencies") || (a.awaitingDependencies = function() {
  b("'awaitingDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "typeDependencies") || (a.typeDependencies = function() {
  b("'typeDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "registeredPointers") || (a.registeredPointers = function() {
  b("'registeredPointers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "registerType") || (a.registerType = function() {
  b("'registerType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "whenDependentTypesAreResolved") || (a.whenDependentTypesAreResolved = function() {
  b("'whenDependentTypesAreResolved' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "embind_charCodes") || (a.embind_charCodes = function() {
  b("'embind_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "embind_init_charCodes") || (a.embind_init_charCodes = function() {
  b("'embind_init_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "readLatin1String") || (a.readLatin1String = function() {
  b("'readLatin1String' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getTypeName") || (a.getTypeName = function() {
  b("'getTypeName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "heap32VectorToArray") || (a.heap32VectorToArray = function() {
  b("'heap32VectorToArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "requireRegisteredType") || (a.requireRegisteredType = function() {
  b("'requireRegisteredType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getShiftFromSize") || (a.getShiftFromSize = function() {
  b("'getShiftFromSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "integerReadValueFromPointer") || (a.integerReadValueFromPointer = function() {
  b("'integerReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "enumReadValueFromPointer") || (a.enumReadValueFromPointer = function() {
  b("'enumReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "floatReadValueFromPointer") || (a.floatReadValueFromPointer = function() {
  b("'floatReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "simpleReadValueFromPointer") || (a.simpleReadValueFromPointer = function() {
  b("'simpleReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "runDestructors") || (a.runDestructors = function() {
  b("'runDestructors' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "new_") || (a.new_ = function() {
  b("'new_' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "craftInvokerFunction") || (a.craftInvokerFunction = function() {
  b("'craftInvokerFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "embind__requireFunction") || (a.embind__requireFunction = function() {
  b("'embind__requireFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "tupleRegistrations") || (a.tupleRegistrations = function() {
  b("'tupleRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "structRegistrations") || (a.structRegistrations = function() {
  b("'structRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "genericPointerToWireType") || (a.genericPointerToWireType = function() {
  b("'genericPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "constNoSmartPtrRawPointerToWireType") || (a.constNoSmartPtrRawPointerToWireType = function() {
  b("'constNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "nonConstNoSmartPtrRawPointerToWireType") || (a.nonConstNoSmartPtrRawPointerToWireType = function() {
  b("'nonConstNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "init_RegisteredPointer") || (a.init_RegisteredPointer = function() {
  b("'init_RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "RegisteredPointer") || (a.RegisteredPointer = function() {
  b("'RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "RegisteredPointer_getPointee") || (a.RegisteredPointer_getPointee = function() {
  b("'RegisteredPointer_getPointee' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "RegisteredPointer_destructor") || (a.RegisteredPointer_destructor = function() {
  b("'RegisteredPointer_destructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "RegisteredPointer_deleteObject") || (a.RegisteredPointer_deleteObject = function() {
  b("'RegisteredPointer_deleteObject' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "RegisteredPointer_fromWireType") || (a.RegisteredPointer_fromWireType = function() {
  b("'RegisteredPointer_fromWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "runDestructor") || (a.runDestructor = function() {
  b("'runDestructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "releaseClassHandle") || (a.releaseClassHandle = function() {
  b("'releaseClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "finalizationGroup") || (a.finalizationGroup = function() {
  b("'finalizationGroup' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "detachFinalizer_deps") || (a.detachFinalizer_deps = function() {
  b("'detachFinalizer_deps' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "detachFinalizer") || (a.detachFinalizer = function() {
  b("'detachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "attachFinalizer") || (a.attachFinalizer = function() {
  b("'attachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "makeClassHandle") || (a.makeClassHandle = function() {
  b("'makeClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "init_ClassHandle") || (a.init_ClassHandle = function() {
  b("'init_ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ClassHandle") || (a.ClassHandle = function() {
  b("'ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ClassHandle_isAliasOf") || (a.ClassHandle_isAliasOf = function() {
  b("'ClassHandle_isAliasOf' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "throwInstanceAlreadyDeleted") || (a.throwInstanceAlreadyDeleted = function() {
  b("'throwInstanceAlreadyDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ClassHandle_clone") || (a.ClassHandle_clone = function() {
  b("'ClassHandle_clone' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ClassHandle_delete") || (a.ClassHandle_delete = function() {
  b("'ClassHandle_delete' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "deletionQueue") || (a.deletionQueue = function() {
  b("'deletionQueue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ClassHandle_isDeleted") || (a.ClassHandle_isDeleted = function() {
  b("'ClassHandle_isDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ClassHandle_deleteLater") || (a.ClassHandle_deleteLater = function() {
  b("'ClassHandle_deleteLater' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "flushPendingDeletes") || (a.flushPendingDeletes = function() {
  b("'flushPendingDeletes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "delayFunction") || (a.delayFunction = function() {
  b("'delayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "setDelayFunction") || (a.setDelayFunction = function() {
  b("'setDelayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "RegisteredClass") || (a.RegisteredClass = function() {
  b("'RegisteredClass' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "shallowCopyInternalPointer") || (a.shallowCopyInternalPointer = function() {
  b("'shallowCopyInternalPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "downcastPointer") || (a.downcastPointer = function() {
  b("'downcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "upcastPointer") || (a.upcastPointer = function() {
  b("'upcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "validateThis") || (a.validateThis = function() {
  b("'validateThis' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "char_0") || (a.char_0 = function() {
  b("'char_0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "char_9") || (a.char_9 = function() {
  b("'char_9' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "makeLegalFunctionName") || (a.makeLegalFunctionName = function() {
  b("'makeLegalFunctionName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "warnOnce") || (a.warnOnce = function() {
  b("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "stackSave") || (a.stackSave = function() {
  b("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "stackRestore") || (a.stackRestore = function() {
  b("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "stackAlloc") || (a.stackAlloc = function() {
  b("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "AsciiToString") || (a.AsciiToString = function() {
  b("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "stringToAscii") || (a.stringToAscii = function() {
  b("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "UTF16ToString") || (a.UTF16ToString = function() {
  b("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "stringToUTF16") || (a.stringToUTF16 = function() {
  b("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "lengthBytesUTF16") || (a.lengthBytesUTF16 = function() {
  b("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "UTF32ToString") || (a.UTF32ToString = function() {
  b("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "stringToUTF32") || (a.stringToUTF32 = function() {
  b("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "lengthBytesUTF32") || (a.lengthBytesUTF32 = function() {
  b("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "allocateUTF8") || (a.allocateUTF8 = function() {
  b("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "allocateUTF8OnStack") || (a.allocateUTF8OnStack = function() {
  b("'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
a.writeStackCookie = Ia;
a.checkStackCookie = J;
Object.getOwnPropertyDescriptor(a, "ALLOC_NORMAL") || Object.defineProperty(a, "ALLOC_NORMAL", {configurable:!0, get:function() {
  b("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
}});
Object.getOwnPropertyDescriptor(a, "ALLOC_STACK") || Object.defineProperty(a, "ALLOC_STACK", {configurable:!0, get:function() {
  b("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
}});
var Ob;
N = function Pb() {
  Ob || Qb();
  Ob || (N = Pb);
};
function Qb() {
  function c() {
    if (!Ob && (Ob = !0, a.calledRun = !0, !qa)) {
      J();
      assert(!Qa);
      Qa = !0;
      ab(Na);
      J();
      ab(Oa);
      aa(a);
      if (a.onRuntimeInitialized) {
        a.onRuntimeInitialized();
      }
      assert(!a._main, 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
      J();
      if (a.postRun) {
        for ("function" == typeof a.postRun && (a.postRun = [a.postRun]); a.postRun.length;) {
          var d = a.postRun.shift();
          Pa.unshift(d);
        }
      }
      ab(Pa);
    }
  }
  if (!(0 < L)) {
    Nb();
    Ia();
    if (a.preRun) {
      for ("function" == typeof a.preRun && (a.preRun = [a.preRun]); a.preRun.length;) {
        Ra();
      }
    }
    ab(Ma);
    0 < L || (a.setStatus ? (a.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        a.setStatus("");
      }, 1);
      c();
    }, 1)) : c(), J());
  }
}
a.run = Qb;
if (a.preInit) {
  for ("function" == typeof a.preInit && (a.preInit = [a.preInit]); 0 < a.preInit.length;) {
    a.preInit.pop()();
  }
}
noExitRuntime = !0;
Qb();



  return createTess2Wasm.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = createTess2Wasm;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return createTess2Wasm; });
else if (typeof exports === 'object')
  exports["createTess2Wasm"] = createTess2Wasm;
