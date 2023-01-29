var LZString = function() {
    function a(b, a) {
        if (!c[b]) {
            c[b] = {};
            for (var f = 0; f < b.length; f++) c[b][b.charAt(f)] = f
        }
        return c[b][a]
    }
    var d = String.fromCharCode,
        c = {},
        e = {
            compressToBase64: function(b) {
                if (null == b) return "";
                b = e._compress(b, 6, function(b) {
                    return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b)
                });
                switch (b.length % 4) {
                    default:
                        case 0:
                        return b;
                    case 1:
                            return b + "===";
                    case 2:
                            return b + "==";
                    case 3:
                            return b + "="
                }
            },
            decompressFromBase64: function(b) {
                return null == b ? "" : "" == b ? null : e._decompress(b.length,
                    32,
                    function(f) {
                        return a("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(f))
                    })
            },
            compressToUTF16: function(b) {
                return null == b ? "" : e._compress(b, 15, function(b) {
                    return d(b + 32)
                }) + " "
            },
            decompressFromUTF16: function(b) {
                return null == b ? "" : "" == b ? null : e._decompress(b.length, 16384, function(a) {
                    return b.charCodeAt(a) - 32
                })
            },
            compressToUint8Array: function(b) {
                b = e.compress(b);
                for (var a = new Uint8Array(2 * b.length), c = 0, d = b.length; c < d; c++) {
                    var p = b.charCodeAt(c);
                    a[2 * c] = p >>> 8;
                    a[2 * c + 1] = p % 256
                }
                return a
            },
            decompressFromUint8Array: function(b) {
                if (null === b || void 0 === b) return e.decompress(b);
                for (var a = Array(b.length / 2), c = 0, m = a.length; c < m; c++) a[c] = 256 * b[2 * c] + b[2 * c + 1];
                var p = [];
                a.forEach(function(b) {
                    p.push(d(b))
                });
                return e.decompress(p.join(""))
            },
            compressToEncodedURIComponent: function(b) {
                return null == b ? "" : e._compress(b, 6, function(b) {
                    return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$".charAt(b)
                })
            },
            decompressFromEncodedURIComponent: function(b) {
                if (null == b) return "";
                if ("" == b) return null;
                b = b.replace(/ /g, "+");
                return e._decompress(b.length, 32, function(f) {
                    return a("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", b.charAt(f))
                })
            },
            compress: function(b) {
                return e._compress(b, 16, function(b) {
                    return d(b)
                })
            },
            _compress: function(b, a, c) {
                if (null == b) return "";
                var f, d = {},
                    e = {},
                    k = "",
                    q = 2,
                    t = 3,
                    g = 2,
                    l = [],
                    h = 0,
                    r = 0,
                    w;
                for (w = 0; w < b.length; w += 1) {
                    var z = b.charAt(w);
                    Object.prototype.hasOwnProperty.call(d, z) || (d[z] = t++, e[z] = !0);
                    var x = k + z;
                    if (Object.prototype.hasOwnProperty.call(d, x)) k = x;
                    else {
                        if (Object.prototype.hasOwnProperty.call(e,
                                k)) {
                            if (256 > k.charCodeAt(0)) {
                                for (f = 0; f < g; f++) h <<= 1, r == a - 1 ? (r = 0, l.push(c(h)), h = 0) : r++;
                                var n = k.charCodeAt(0);
                                for (f = 0; 8 > f; f++) h = h << 1 | n & 1, r == a - 1 ? (r = 0, l.push(c(h)), h = 0) : r++, n >>= 1
                            } else {
                                n = 1;
                                for (f = 0; f < g; f++) h = h << 1 | n, r == a - 1 ? (r = 0, l.push(c(h)), h = 0) : r++, n = 0;
                                n = k.charCodeAt(0);
                                for (f = 0; 16 > f; f++) h = h << 1 | n & 1, r == a - 1 ? (r = 0, l.push(c(h)), h = 0) : r++, n >>= 1
                            }
                            q--;
                            0 == q && (q = Math.pow(2, g), g++);
                            delete e[k]
                        } else
                            for (n = d[k], f = 0; f < g; f++) h = h << 1 | n & 1, r == a - 1 ? (r = 0, l.push(c(h)), h = 0) : r++, n >>= 1;
                        q--;
                        0 == q && (q = Math.pow(2, g), g++);
                        d[x] = t++;
                        k = String(z)
                    }
                }
                if ("" !==
                    k) {
                    if (Object.prototype.hasOwnProperty.call(e, k)) {
                        if (256 > k.charCodeAt(0)) {
                            for (f = 0; f < g; f++) h <<= 1, r == a - 1 ? (r = 0, l.push(c(h)), h = 0) : r++;
                            n = k.charCodeAt(0);
                            for (f = 0; 8 > f; f++) h = h << 1 | n & 1, r == a - 1 ? (r = 0, l.push(c(h)), h = 0) : r++, n >>= 1
                        } else {
                            n = 1;
                            for (f = 0; f < g; f++) h = h << 1 | n, r == a - 1 ? (r = 0, l.push(c(h)), h = 0) : r++, n = 0;
                            n = k.charCodeAt(0);
                            for (f = 0; 16 > f; f++) h = h << 1 | n & 1, r == a - 1 ? (r = 0, l.push(c(h)), h = 0) : r++, n >>= 1
                        }
                        q--;
                        0 == q && (q = Math.pow(2, g), g++);
                        delete e[k]
                    } else
                        for (n = d[k], f = 0; f < g; f++) h = h << 1 | n & 1, r == a - 1 ? (r = 0, l.push(c(h)), h = 0) : r++, n >>= 1;
                    q--;
                    0 ==
                        q && g++
                }
                n = 2;
                for (f = 0; f < g; f++) h = h << 1 | n & 1, r == a - 1 ? (r = 0, l.push(c(h)), h = 0) : r++, n >>= 1;
                for (;;)
                    if (h <<= 1, r == a - 1) {
                        l.push(c(h));
                        break
                    } else r++;
                return l.join("")
            },
            decompress: function(b) {
                return null == b ? "" : "" == b ? null : e._decompress(b.length, 32768, function(a) {
                    return b.charCodeAt(a)
                })
            },
            _decompress: function(b, a, c) {
                var f = [],
                    e = 4,
                    k = 4,
                    u = 3,
                    q = [],
                    t, g, l = c(0),
                    h = a,
                    r = 1;
                for (t = 0; 3 > t; t += 1) f[t] = t;
                var w = 0;
                var z = Math.pow(2, 2);
                for (g = 1; g != z;) {
                    var x = l & h;
                    h >>= 1;
                    0 == h && (h = a, l = c(r++));
                    w |= (0 < x ? 1 : 0) * g;
                    g <<= 1
                }
                switch (w) {
                    case 0:
                        w = 0;
                        z = Math.pow(2, 8);
                        for (g = 1; g != z;) x = l & h, h >>= 1, 0 == h && (h = a, l = c(r++)), w |= (0 < x ? 1 : 0) * g, g <<= 1;
                        var n = d(w);
                        break;
                    case 1:
                        w = 0;
                        z = Math.pow(2, 16);
                        for (g = 1; g != z;) x = l & h, h >>= 1, 0 == h && (h = a, l = c(r++)), w |= (0 < x ? 1 : 0) * g, g <<= 1;
                        n = d(w);
                        break;
                    case 2:
                        return ""
                }
                t = f[3] = n;
                for (q.push(n);;) {
                    if (r > b) return "";
                    w = 0;
                    z = Math.pow(2, u);
                    for (g = 1; g != z;) x = l & h, h >>= 1, 0 == h && (h = a, l = c(r++)), w |= (0 < x ? 1 : 0) * g, g <<= 1;
                    switch (n = w) {
                        case 0:
                            w = 0;
                            z = Math.pow(2, 8);
                            for (g = 1; g != z;) x = l & h, h >>= 1, 0 == h && (h = a, l = c(r++)), w |= (0 < x ? 1 : 0) * g, g <<= 1;
                            f[k++] = d(w);
                            n = k - 1;
                            e--;
                            break;
                        case 1:
                            w = 0;
                            z = Math.pow(2, 16);
                            for (g = 1; g != z;) x = l & h, h >>= 1, 0 == h && (h = a, l = c(r++)), w |= (0 < x ? 1 : 0) * g, g <<= 1;
                            f[k++] = d(w);
                            n = k - 1;
                            e--;
                            break;
                        case 2:
                            return q.join("")
                    }
                    0 == e && (e = Math.pow(2, u), u++);
                    if (f[n]) n = f[n];
                    else if (n === k) n = t + t.charAt(0);
                    else return null;
                    q.push(n);
                    f[k++] = t + n.charAt(0);
                    e--;
                    t = n;
                    0 == e && (e = Math.pow(2, u), u++)
                }
            }
        };
    return e
}();
"function" === typeof define && define.amd ? define(function() {
    return LZString
}) : "undefined" !== typeof module && null != module ? module.exports = LZString : "undefined" !== typeof angular && null != angular && angular.module("LZString", []).factory("LZString", function() {
    return LZString
});
(function() {
    function a(a) {
        this.message = a
    }
    var d = "undefined" != typeof exports ? exports : this;
    a.prototype = Error();
    a.prototype.name = "InvalidCharacterError";
    d.btoa || (d.btoa = function(c) {
        for (var e, b, f = 0, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", m = ""; c.charAt(f | 0) || (d = "=", f % 1); m += d.charAt(63 & e >> 8 - f % 1 * 8)) {
            b = c.charCodeAt(f += .75);
            if (255 < b) throw new a("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
            e = e << 8 | b
        }
        return m
    });
    d.atob || (d.atob = function(c) {
        c =
            c.replace(/=+$/, "");
        if (1 == c.length % 4) throw new a("'atob' failed: The string to be decoded is not correctly encoded.");
        for (var e = 0, b, f, d = 0, m = ""; f = c.charAt(d++); ~f && (b = e % 4 ? 64 * b + f : f, e++ % 4) ? m += String.fromCharCode(255 & b >> (-2 * e & 6)) : 0) f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(f);
        return m
    })
})();
var Base64Binary = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    decodeArrayBuffer: function(a) {
        var d = new ArrayBuffer(Math.ceil(3 * a.length / 4));
        this.decode(a, d);
        return d
    },
    decode: function(a, d) {
        var c = this._keyStr.indexOf(a.charAt(a.length - 1)),
            e = this._keyStr.indexOf(a.charAt(a.length - 1)),
            b = Math.ceil(3 * a.length / 4);
        64 == c && b--;
        64 == e && b--;
        var f, k = 0;
        c = d ? new Uint8Array(d) : new Uint8Array(b);
        a = a.replace(/[^A-Za-z0-9\+\/=]/g, "");
        for (f = 0; f < b; f += 3) {
            var m = this._keyStr.indexOf(a.charAt(k++));
            var p = this._keyStr.indexOf(a.charAt(k++));
            e = this._keyStr.indexOf(a.charAt(k++));
            var v = this._keyStr.indexOf(a.charAt(k++));
            m = m << 2 | p >> 4;
            p = (p & 15) << 4 | e >> 2;
            var u = (e & 3) << 6 | v;
            c[f] = m;
            64 != e && (c[f + 1] = p);
            64 != v && (c[f + 2] = u)
        }
        return c
    }
};
window.AudioContext = window.AudioContext || window.webkitAudioContext || null;
window.OfflineAudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext || null;
(function(a) {
    var d = function(a) {
        return "[object Function]" === Object.prototype.toString.call(a) || "[object AudioContextConstructor]" === Object.prototype.toString.call(a)
    };
    if (d(a)) {
        var c = new a;
        c.destination && c.sampleRate && (a = a.prototype, c = Object.getPrototypeOf(c.createBufferSource()), !d(c.start) && d(c.noteOn) && (c.start = function(a, b, f) {
            switch (arguments.length) {
                case 0:
                    throw Error("Not enough arguments.");
                case 1:
                    this.noteOn(a);
                    break;
                case 2:
                    if (this.buffer) this.noteGrainOn(a, b, this.buffer.duration - b);
                    else throw Error("Missing AudioBuffer");
                    break;
                case 3:
                    this.noteGrainOn(a, b, f)
            }
        }), d(c.noteOn) || (c.noteOn = c.start), d(c.noteGrainOn) || (c.noteGrainOn = c.start), d(c.stop) || (c.stop = c.noteOff), d(c.noteOff) || (c.noteOff = c.stop), [
            ["createGainNode", "createGain"],
            ["createDelayNode", "createDelay"],
            ["createJavaScriptNode", "createScriptProcessor"]
        ].forEach(function(a) {
            for (var b, f; a.length;) b = a.pop(), d(this[b]) ? this[a.pop()] = this[b] : (f = a.pop(), this[b] = this[f])
        }, a))
    }
})(window.AudioContext);
"undefined" === typeof MIDI && (MIDI = {});
(function(a) {
    var d = {},
        c = 0,
        e = function(a) {
            c++;
            var b = document.body,
                e = new Audio,
                m = a.split(";")[0];
            e.id = "audio";
            e.setAttribute("preload", "auto");
            e.setAttribute("audiobuffer", !0);
            e.addEventListener("error", function() {
                b.removeChild(e);
                d[m] = !1;
                c--
            }, !1);
            e.addEventListener("canplaythrough", function() {
                b.removeChild(e);
                d[m] = !0;
                c--
            }, !1);
            e.src = "data:" + a;
            b.appendChild(e)
        };
    a.audioDetect = function(a) {
        if (navigator.requestMIDIAccess)
            if (Function.prototype.toString.call(navigator.requestMIDIAccess).indexOf("[native code]")) d.webmidi = !0;
            else
                for (var b = 0; navigator.plugins.length > b; b++) 0 <= navigator.plugins[b].name.indexOf("Jazz-Plugin") && (d.webmidi = !0);
        if ("undefined" === typeof Audio) return a({});
        d.audiotag = !0;
        if (window.AudioContext || window.webkitAudioContext) d.webaudio = !0;
        var k = new Audio;
        if ("undefined" === typeof k.canPlayType) return a(d);
        b = k.canPlayType('audio/ogg; codecs="vorbis"');
        b = "probably" === b || "maybe" === b;
        k = k.canPlayType("audio/mpeg");
        k = "probably" === k || "maybe" === k;
        if (b || k) {
            b && e("audio/ogg;base64,T2dnUwACAAAAAAAAAADqnjMlAAAAAOyyzPIBHgF2b3JiaXMAAAAAAUAfAABAHwAAQB8AAEAfAACZAU9nZ1MAAAAAAAAAAAAA6p4zJQEAAAANJGeqCj3//////////5ADdm9yYmlzLQAAAFhpcGguT3JnIGxpYlZvcmJpcyBJIDIwMTAxMTAxIChTY2hhdWZlbnVnZ2V0KQAAAAABBXZvcmJpcw9CQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBACAAAAYRqF1TCqDEEPKQ4QUY9AzoxBDDEzGHGNONKQMMogzxZAyiFssLqgQBKEhKwKAKAAAwBjEGGIMOeekZFIi55iUTkoDnaPUUcoolRRLjBmlEluJMYLOUeooZZRCjKXFjFKJscRUAABAgAMAQICFUGjIigAgCgCAMAYphZRCjCnmFHOIMeUcgwwxxiBkzinoGJNOSuWck85JiRhjzjEHlXNOSuekctBJyaQTAAAQ4AAAEGAhFBqyIgCIEwAwSJKmWZomipamiaJniqrqiaKqWp5nmp5pqqpnmqpqqqrrmqrqypbnmaZnmqrqmaaqiqbquqaquq6nqrZsuqoum65q267s+rZru77uqapsm6or66bqyrrqyrbuurbtS56nqqKquq5nqq6ruq5uq65r25pqyq6purJtuq4tu7Js664s67pmqq5suqotm64s667s2rYqy7ovuq5uq7Ks+6os+75s67ru2rrwi65r66os674qy74x27bwy7ouHJMnqqqnqq7rmarrqq5r26rr2rqmmq5suq4tm6or26os67Yry7aumaosm64r26bryrIqy77vyrJui67r66Ys67oqy8Lu6roxzLat+6Lr6roqy7qvyrKuu7ru+7JuC7umqrpuyrKvm7Ks+7auC8us27oxuq7vq7It/KosC7+u+8Iy6z5jdF1fV21ZGFbZ9n3d95Vj1nVhWW1b+V1bZ7y+bgy7bvzKrQvLstq2scy6rSyvrxvDLux8W/iVmqratum6um7Ksq/Lui60dd1XRtf1fdW2fV+VZd+3hV9pG8OwjK6r+6os68Jry8ov67qw7MIvLKttK7+r68ow27qw3L6wLL/uC8uq277v6rrStXVluX2fsSu38QsAABhwAAAIMKEMFBqyIgCIEwBAEHIOKQahYgpCCKGkEEIqFWNSMuakZM5JKaWUFEpJrWJMSuaclMwxKaGUlkopqYRSWiqlxBRKaS2l1mJKqcVQSmulpNZKSa2llGJMrcUYMSYlc05K5pyUklJrJZXWMucoZQ5K6iCklEoqraTUYuacpA46Kx2E1EoqMZWUYgupxFZKaq2kFGMrMdXUWo4hpRhLSrGVlFptMdXWWqs1YkxK5pyUzDkqJaXWSiqtZc5J6iC01DkoqaTUYiopxco5SR2ElDLIqJSUWiupxBJSia20FGMpqcXUYq4pxRZDSS2WlFosqcTWYoy1tVRTJ6XFklKMJZUYW6y5ttZqDKXEVkqLsaSUW2sx1xZjjqGkFksrsZWUWmy15dhayzW1VGNKrdYWY40x5ZRrrT2n1mJNMdXaWqy51ZZbzLXnTkprpZQWS0oxttZijTHmHEppraQUWykpxtZara3FXEMpsZXSWiypxNhirLXFVmNqrcYWW62ltVprrb3GVlsurdXcYqw9tZRrrLXmWFNtBQAADDgAAASYUAYKDVkJAEQBAADGMMYYhEYpx5yT0ijlnHNSKucghJBS5hyEEFLKnINQSkuZcxBKSSmUklJqrYVSUmqttQIAAAocAAACbNCUWByg0JCVAEAqAIDBcTRNFFXVdX1fsSxRVFXXlW3jVyxNFFVVdm1b+DVRVFXXtW3bFn5NFFVVdmXZtoWiqrqybduybgvDqKqua9uybeuorqvbuq3bui9UXVmWbVu3dR3XtnXd9nVd+Bmzbeu2buu+8CMMR9/4IeTj+3RCCAAAT3AAACqwYXWEk6KxwEJDVgIAGQAAgDFKGYUYM0gxphhjTDHGmAAAgAEHAIAAE8pAoSErAoAoAADAOeecc84555xzzjnnnHPOOeecc44xxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY0wAwE6EA8BOhIVQaMhKACAcAABACCEpKaWUUkoRU85BSSmllFKqFIOMSkoppZRSpBR1lFJKKaWUIqWgpJJSSimllElJKaWUUkoppYw6SimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaVUSimllFJKKaWUUkoppRQAYPLgAACVYOMMK0lnhaPBhYasBAByAwAAhRiDEEJpraRUUkolVc5BKCWUlEpKKZWUUqqYgxBKKqmlklJKKbXSQSihlFBKKSWUUkooJYQQSgmhlFRCK6mEUkoHoYQSQimhhFRKKSWUzkEoIYUOQkmllNRCSB10VFIpIZVSSiklpZQ6CKGUklJLLZVSWkqpdBJSKamV1FJqqbWSUgmhpFZKSSWl0lpJJbUSSkklpZRSSymFVFJJJYSSUioltZZaSqm11lJIqZWUUkqppdRSSiWlkEpKqZSSUmollZRSaiGVlEpJKaTUSimlpFRCSamlUlpKLbWUSkmptFRSSaWUlEpJKaVSSksppRJKSqmllFpJKYWSUkoplZJSSyW1VEoKJaWUUkmptJRSSymVklIBAEAHDgAAAUZUWoidZlx5BI4oZJiAAgAAQABAgAkgMEBQMApBgDACAQAAAADAAAAfAABHARAR0ZzBAUKCwgJDg8MDAAAAAAAAAAAAAACAT2dnUwAEAAAAAAAAAADqnjMlAgAAADzQPmcBAQA=");
            k && e("audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
            var m = (new Date).getTime(),
                p = window.setInterval(function() {
                    var b = 5E3 < (new Date).getTime() - m;
                    if (!c || b) window.clearInterval(p), a(d)
                }, 1)
        } else a(d)
    }
})(MIDI);
(function(a) {
    a.GM = function(a) {
        var c = function(a) {
                return a.replace(/[^a-z0-9 ]/gi, "").replace(/[ ]/g, "_").toLowerCase()
            },
            d = {
                byName: {},
                byId: {},
                byCategory: {}
            },
            b;
        for (b in a)
            for (var f = a[b], k = 0, m = f.length; k < m; k++) {
                var p = f[k];
                if (p) {
                    var v = parseInt(p.substr(0, p.indexOf(" ")), 10);
                    p = p.replace(v + " ", "");
                    d.byId[--v] = d.byName[c(p)] = d.byCategory[c(b)] = {
                        id: c(p),
                        instrument: p,
                        number: v,
                        category: b
                    }
                }
            }
        return d
    }({
        Piano: "1 Acoustic Grand Piano;2 Bright Acoustic Piano;3 Electric Grand Piano;4 Honky-tonk Piano;5 Electric Piano 1;6 Electric Piano 2;7 Harpsichord;8 Clavinet".split(";"),
        "Chromatic Percussion": "9 Celesta;10 Glockenspiel;11 Music Box;12 Vibraphone;13 Marimba;14 Xylophone;15 Tubular Bells;16 Dulcimer".split(";"),
        Organ: "17 Drawbar Organ;18 Percussive Organ;19 Rock Organ;20 Church Organ;21 Reed Organ;22 Accordion;23 Harmonica;24 Tango Accordion".split(";"),
        Guitar: "25 Acoustic Guitar (nylon);26 Acoustic Guitar (steel);27 Electric Guitar (jazz);28 Electric Guitar (clean);29 Electric Guitar (muted);30 Overdriven Guitar;31 Distortion Guitar;32 Guitar Harmonics".split(";"),
        Bass: "33 Acoustic Bass;34 Electric Bass (finger);35 Electric Bass (pick);36 Fretless Bass;37 Slap Bass 1;38 Slap Bass 2;39 Synth Bass 1;40 Synth Bass 2".split(";"),
        Strings: "41 Violin;42 Viola;43 Cello;44 Contrabass;45 Tremolo Strings;46 Pizzicato Strings;47 Orchestral Harp;48 Timpani".split(";"),
        Ensemble: "49 String Ensemble 1;50 String Ensemble 2;51 Synth Strings 1;52 Synth Strings 2;53 Choir Aahs;54 Voice Oohs;55 Synth Choir;56 Orchestra Hit".split(";"),
        Brass: "57 Trumpet;58 Trombone;59 Tuba;60 Muted Trumpet;61 French Horn;62 Brass Section;63 Synth Brass 1;64 Synth Brass 2".split(";"),
        Reed: "65 Soprano Sax;66 Alto Sax;67 Tenor Sax;68 Baritone Sax;69 Oboe;70 English Horn;71 Bassoon;72 Clarinet".split(";"),
        Pipe: "73 Piccolo;74 Flute;75 Recorder;76 Pan Flute;77 Blown Bottle;78 Shakuhachi;79 Whistle;80 Ocarina".split(";"),
        "Synth Lead": "81 Lead 1 (square);82 Lead 2 (sawtooth);83 Lead 3 (calliope);84 Lead 4 (chiff);85 Lead 5 (charang);86 Lead 6 (voice);87 Lead 7 (fifths);88 Lead 8 (bass + lead)".split(";"),
        "Synth Pad": "89 Pad 1 (new age);90 Pad 2 (warm);91 Pad 3 (polysynth);92 Pad 4 (choir);93 Pad 5 (bowed);94 Pad 6 (metallic);95 Pad 7 (halo);96 Pad 8 (sweep)".split(";"),
        "Synth Effects": "97 FX 1 (rain);98 FX 2 (soundtrack);99 FX 3 (crystal);100 FX 4 (atmosphere);101 FX 5 (brightness);102 FX 6 (goblins);103 FX 7 (echoes);104 FX 8 (sci-fi)".split(";"),
        Ethnic: "105 Sitar;106 Banjo;107 Shamisen;108 Koto;109 Kalimba;110 Bagpipe;111 Fiddle;112 Shanai".split(";"),
        Percussive: "113 Tinkle Bell;114 Agogo;115 Steel Drums;116 Woodblock;117 Taiko Drum;118 Melodic Tom;119 Synth Drum".split(";"),
        "Sound effects": "120 Reverse Cymbal;121 Guitar Fret Noise;122 Breath Noise;123 Seashore;124 Bird Tweet;125 Telephone Ring;126 Helicopter;127 Applause;128 Gunshot".split(";")
    });
    a.getInstrument = function(d) {
        return (d = a.channels[d]) && d.instrument
    };
    a.setInstrument = function(d, c, e) {
        var b = a.channels[d];
        if (e) return setTimeout(function() {
            b.instrument = c
        }, e);
        b.instrument = c
    };
    a.getMono = function(d) {
        return (d = a.channels[d]) && d.mono
    };
    a.setMono = function(d, c, e) {
        var b = a.channels[d];
        if (e) return setTimeout(function() {
            b.mono = c
        }, e);
        b.mono = c
    };
    a.getOmni = function(d) {
        return (d = a.channels[d]) && d.omni
    };
    a.setOmni = function(d, c) {
        var e = a.channels[d];
        if (delay) return setTimeout(function() {
            e.omni = c
        }, delay);
        e.omni =
            c
    };
    a.getSolo = function(d) {
        return (d = a.channels[d]) && d.solo
    };
    a.setSolo = function(d, c) {
        var e = a.channels[d];
        if (delay) return setTimeout(function() {
            e.solo = c
        }, delay);
        e.solo = c
    };
    a.channels = function() {
        for (var a = {}, c = 0; 128 > c; c++) a[c] = {
            instrument: c,
            pitchBend: 0,
            mute: !1,
            mono: !1,
            omni: !1,
            solo: !1
        };
        return a
    }();
    a.keyToNote = {};
    a.noteToKey = {};
    (function() {
        for (var d = "C Db D Eb E F Gb G Ab A Bb B".split(" "), c = 21; 108 >= c; c++) {
            var e = d[c % 12] + ((c - 12) / 12 >> 0);
            a.keyToNote[e] = c;
            a.noteToKey[c] = e
        }
    })()
})(MIDI);
"undefined" === typeof MIDI && (MIDI = {});
MIDI.Soundfont = MIDI.Soundfont || {};
MIDI.Player = MIDI.Player || {};
(function(a) {
    a.DEBUG = !0;
    a.USE_XHR = !0;
    a.soundfontUrl = "./soundfont/";
    a.loadPlugin = function(b) {
        "function" === typeof b && (b = {
            onsuccess: b
        });
        a.soundfontUrl = b.soundfontUrl || a.soundfontUrl;
        a.audioDetect(function(c) {
            var f = window.location.hash,
                e = "";
            c[b.api] ? e = b.api : c[f.substr(1)] ? e = f.substr(1) : c.webmidi ? e = "webmidi" : window.AudioContext ? e = "webaudio" : window.Audio && (e = "audiotag");
            d[e] && (f = b.targetFormat ? b.targetFormat : c["audio/ogg"] ? "ogg" : "mp3", a.__api = e, a.__audioFormat = f, a.supports = c, a.loadResource(b))
        })
    };
    a.loadResource =
        function(b) {
            var c = b.instruments || b.instrument || "acoustic_grand_piano";
            "object" !== typeof c && (c = c || 0 === c ? [c] : []);
            console.log("loading resources: instruments is " + c);
            for (var e = 0; e < c.length; e++) {
                var m = c[e];
                m === +m && a.GM.byId[m] && (c[e] = a.GM.byId[m].id)
            }
            b.format = a.__audioFormat;
            b.instruments = c;
            d[a.__api](b)
        };
    var d = {
            webmidi: function(b) {
                a.WebMIDI.connect(b)
            },
            audiotag: function(a) {
                c(a, "AudioTag")
            },
            webaudio: function(a) {
                c(a, "WebAudio")
            }
        },
        c = function(b, c) {
            for (var f = b.format, d = b.instruments, p = b.onprogress, v = b.onerror,
                    u = d.length, q = u, t = function() {
                        --q || (p && p("load", 1), a[c].connect(b))
                    }, g = 0; g < u; g++) {
                var l = d[g];
                MIDI.Soundfont[l] ? t() : e(d[g], f, function(a, b) {
                    var g = b / u,
                        c = (u - q) / u;
                    p && p("load", g + c, l)
                }, function() {
                    t()
                }, v)
            }
        },
        e = function(b, c, e, d, p) {
            c = a.soundfontUrl + b + "-" + c + ".js";
            a.USE_XHR ? a.util.request({
                url: c,
                format: "text",
                onerror: p,
                onprogress: e,
                onsuccess: function(a, b) {
                    var c = document.createElement("script");
                    c.language = "javascript";
                    c.type = "text/javascript";
                    c.text = b;
                    document.body.appendChild(c);
                    d()
                }
            }) : dom.loadScript.add({
                url: c,
                verify: 'MIDI.Soundfont["' + b + '"]',
                onerror: p,
                onsuccess: function() {
                    d()
                }
            })
        };
    a.setDefaultPlugin = function(b) {
        for (var c in b) a[c] = b[c]
    }
})(MIDI);
"undefined" === typeof MIDI && (MIDI = {});
"undefined" === typeof MIDI.Player && (MIDI.Player = {});
(function() {
    var a = MIDI.Player;
    a.currentTime = 0;
    a.endTime = 0;
    a.restart = 0;
    a.playing = !1;
    a.timeWarp = 1;
    a.startDelay = 0;
    a.BPM = 120;
    a.start = a.resume = function(b) {
        -1 > a.currentTime && (a.currentTime = -1);
        u(a.currentTime, null, b)
    };
    a.pause = function() {
        var b = a.restart;
        q();
        a.restart = b
    };
    a.stop = function() {
        q();
        a.restart = 0;
        a.currentTime = 0
    };
    a.addListener = function(a) {
        f = a
    };
    a.removeListener = function() {
        f = void 0
    };
    a.clearAnimation = function() {
        a.animationFrameId && cancelAnimationFrame(a.animationFrameId)
    };
    a.setAnimation = function(c) {
        var g =
            0,
            f = 0,
            h = 0;
        a.clearAnimation();
        var e = function() {
            a.animationFrameId = requestAnimationFrame(e);
            if (0 !== a.endTime) {
                a.playing ? (g = h === a.currentTime ? f - Date.now() : 0, g = 0 === a.currentTime ? 0 : a.currentTime - g, h !== a.currentTime && (f = Date.now(), h = a.currentTime)) : g = a.currentTime;
                var d = g / 1E3,
                    l = d / 60;
                d = 60 * l + (d - 60 * l);
                l = a.endTime / 1E3; - 1 > l - d || c({
                    now: d,
                    end: l,
                    events: b
                })
            }
        };
        requestAnimationFrame(e)
    };
    a.loadMidiFile = function(b, c, d) {
        try {
            a.replayer = new Replayer(MidiFile(a.currentData), a.timeWarp, null, a.BPM), a.data = a.replayer.getData(),
                a.endTime = p(), MIDI.loadPlugin({
                    onsuccess: b,
                    onprogress: c,
                    onerror: d
                })
        } catch (h) {
            d && d(h)
        }
    };
    a.loadFile = function(b, c, d, h) {
        a.stop();
        if (-1 !== b.indexOf("base64,")) b = window.atob(b.split(",")[1]), a.currentData = b, a.loadMidiFile(c, d, h);
        else {
            var g = new XMLHttpRequest;
            g.open("GET", b);
            g.overrideMimeType("text/plain; charset=x-user-defined");
            g.onreadystatechange = function() {
                if (4 === this.readyState)
                    if (200 === this.status) {
                        for (var b = this.responseText || "", g = [], f = b.length, e = String.fromCharCode, l = 0; l < f; l++) g[l] = e(b.charCodeAt(l) &
                            255);
                        b = g.join("");
                        a.currentData = b;
                        a.loadMidiFile(c, d, h)
                    } else h && h("Unable to load MIDI file")
            };
            g.send()
        }
    };
    a.getFileInstruments = function() {
        for (var b = {}, c = {}, d = 0; d < a.data.length; d++) {
            var h = a.data[d][0].event;
            if ("channel" === h.type) {
                var f = h.channel;
                switch (h.subtype) {
                    case "programChange":
                        c[f] = h.programNumber;
                        break;
                    case "noteOn":
                        h = c[f], f = MIDI.GM.byId[isFinite(h) ? h : f], b[f.id] = !0
                }
            }
        }
        c = [];
        for (var e in b) c.push(e);
        return c
    };
    var d = [],
        c, e = 0,
        b = {},
        f = void 0,
        k = function(e, g, l, h, q, k, v) {
            return setTimeout(function() {
                var h = {
                    channel: e,
                    note: g,
                    now: l,
                    end: a.endTime,
                    message: q,
                    velocity: k
                };
                128 === q ? delete b[g] : b[g] = h;
                f && f(h);
                a.currentTime = l;
                d.shift();
                1E3 > d.length ? u(c, !0) : a.currentTime === c && c < a.endTime && u(c, !0)
            }, l - h)
        },
        m = function() {
            if ("webaudio" === MIDI.api) return MIDI.WebAudio.getContext();
            a.ctx = {
                currentTime: 0
            };
            return a.ctx
        },
        p = function() {
            for (var b = a.data, c = b.length, d = .5, h = 0; h < c; h++) d += b[h][1];
            return d
        },
        v, u = function(b, g, f) {
            if (a.replayer) {
                g || ("undefined" === typeof b && (b = a.restart), a.playing && q(), a.playing = !0, a.data = a.replayer.getData(),
                    a.endTime = p());
                var h = g = 0,
                    l = a.data,
                    t = m(),
                    u = l.length;
                c = .5;
                var x = b - a.currentTime;
                if ("webaudio" !== MIDI.api) {
                    var n = window.performance && window.performance.now ? window.performance.now() : Date.now();
                    v = v || n;
                    t.currentTime = (n - v) / 1E3
                }
                e = t.currentTime;
                for (n = 0; n < u && 100 > h; n++) {
                    var y = l[n];
                    if ((c += y[1]) <= b) g = c;
                    else if (b = c - g, y = y[0].event, "channel" === y.type) {
                        var A = y.channel;
                        var B = MIDI.channels[A];
                        var C = t.currentTime + (b + x + a.startDelay) / 1E3,
                            D = c - g + a.startDelay;
                        switch (y.subtype) {
                            case "controller":
                                MIDI.setController(A, y.controllerType,
                                    y.value, C);
                                break;
                            case "programChange":
                                MIDI.programChange(A, y.programNumber, C);
                                break;
                            case "pitchBend":
                                MIDI.pitchBend(A, y.value, C);
                                break;
                            case "noteOn":
                                if (B.mute) break;
                                B = y.noteNumber - (a.MIDIOffset || 0);
                                d.push({
                                    event: y,
                                    time: D,
                                    source: MIDI.noteOn(A, y.noteNumber, y.velocity, C),
                                    interval: k(A, B, c + a.startDelay, g - x, 144, y.velocity)
                                });
                                h++;
                                break;
                            case "noteOff":
                                B.mute || (B = y.noteNumber - (a.MIDIOffset || 0), d.push({
                                    event: y,
                                    time: D,
                                    source: MIDI.noteOff(A, y.noteNumber, C),
                                    interval: k(A, B, c, g - x, 128, 0)
                                }))
                        }
                    }
                }
                f && f(d)
            }
        },
        q = function() {
            var c =
                m();
            a.playing = !1;
            for (a.restart += 1E3 * (c.currentTime - e); d.length;) c = d.pop(), window.clearInterval(c.interval), c.source && ("number" === typeof c.source ? window.clearTimeout(c.source) : c.source.disconnect(0));
            for (var g in b) c = b[g], 144 === b[g].message && f && f({
                channel: c.channel,
                note: c.note,
                now: c.now,
                end: c.end,
                message: 128,
                velocity: c.velocity
            });
            b = {}
        }
})();
(function(a) {
    window.Audio && function() {
        for (var d = a.AudioTag = {
                api: "audiotag"
            }, c = {}, e = 127, b = -1, f = [], k = [], m = {}, p = 0; 12 > p; p++) f[p] = new Audio;
        var v = function(c, d) {
                if (a.channels[c]) {
                    var g = a.GM.byId[a.channels[c].instrument].id;
                    if (d = m[d]) {
                        var l = (b + 1) % f.length,
                            h = f[l];
                        k[l] = g + "" + d.id;
                        a.Soundfont[g] ? (h.src = a.Soundfont[g][d.id], h.volume = e / 127, h.play(), b = l) : a.DEBUG && console.log("404", g)
                    }
                }
            },
            u = function(c, d) {
                if (a.channels[c]) {
                    var g = a.GM.byId[a.channels[c].instrument].id;
                    if (d = m[d]) {
                        g = g + "" + d.id;
                        for (var e = 0, h = f.length; e <
                            h; e++) {
                            var q = (e + b + 1) % h,
                                t = k[q];
                            if (t && t == g) {
                                f[q].pause();
                                k[q] = null;
                                break
                            }
                        }
                    }
                }
            };
        d.audioBuffers = f;
        d.send = function(a, b) {};
        d.setController = function(a, b, c, d) {};
        d.setVolume = function(a, b) {
            e = b
        };
        d.programChange = function(b, c) {
            a.channels[b].instrument = c
        };
        d.pitchBend = function(a, b, c) {};
        d.noteOn = function(a, b, g, d) {
            var h = c[b];
            if (m[h]) {
                if (d) return setTimeout(function() {
                    v(a, h)
                }, 1E3 * d);
                v(a, h)
            }
        };
        d.noteOff = function(a, b, g) {
            var d = c[b];
            if (m[d]) {
                if (g) return setTimeout(function() {
                    u(a, d)
                }, 1E3 * g);
                u(a, d)
            }
        };
        d.chordOn = function(a,
            b, g, d) {
            for (g = 0; g < b.length; g++) {
                var h = c[b[g]];
                if (m[h]) {
                    if (d) return setTimeout(function() {
                        v(a, h)
                    }, 1E3 * d);
                    v(a, h)
                }
            }
        };
        d.chordOff = function(a, b, g) {
            for (var d = 0; d < b.length; d++) {
                var h = c[b[d]];
                if (m[h]) {
                    if (g) return setTimeout(function() {
                        u(a, h)
                    }, 1E3 * g);
                    u(a, h)
                }
            }
        };
        d.stopAllNotes = function() {
            for (var a = 0, b = f.length; a < b; a++) f[a].pause()
        };
        d.connect = function(b) {
            a.setDefaultPlugin(d);
            for (var f in a.keyToNote) c[a.keyToNote[f]] = f, m[f] = {
                id: f
            };
            b.onsuccess && b.onsuccess()
        }
    }()
})(MIDI);
(function(a) {
    window.AudioContext && function() {
        function d(a, c, d) {
            if (0 === a.indexOf("data:audio")) a = a.split(",")[1], a = Base64Binary.decodeArrayBuffer(a), b.decodeAudioData(a, c, d);
            else {
                var f = new XMLHttpRequest;
                f.open("GET", a, !0);
                f.responseType = "arraybuffer";
                f.onload = function() {
                    b.decodeAudioData(f.response, c, d)
                };
                f.send()
            }
        }

        function c() {
            return game.sound.usingWebAudio && game.sound.context ? (console.log("using main context..."), game.sound.context) : new(window.AudioContext || window.webkitAudioContext)
        }
        var e = a.WebAudio = {
                api: "webaudio"
            },
            b, f = {},
            k = {},
            m = 127,
            p = {};
        e.audioBuffers = p;
        e.send = function(a, b) {};
        e.setController = function(a, b, c, d) {};
        e.setVolume = function(a, b, c) {
            c ? setTimeout(function() {
                m = b
            }, 1E3 * c) : m = b
        };
        e.programChange = function(b, c, d) {
            a.channels[b].instrument = c
        };
        e.pitchBend = function(b, c, d) {
            a.channels[b].pitchBend = c
        };
        e.noteOn = function(c, d, e, t) {
            t = t || 0;
            var g = p[a.channels[c].instrument + "" + d];
            if (g) {
                t < b.currentTime && (t += b.currentTime);
                var l = b.createBufferSource();
                l.buffer = g;
                if (k) {
                    g = l;
                    for (var h in k) g.connect(k[h].input),
                        g = k[h]
                }
                e = e / 127 * (m / 127) * 2 - 1;
                l.connect(b.destination);
                l.playbackRate.value = 1;
                l.gainNode = b.createGain();
                l.gainNode.connect(b.destination);
                l.gainNode.gain.value = Math.min(1, Math.max(-1, e));
                l.connect(l.gainNode);
                l.start(t || 0);
                return f[c + "" + d] = l
            }
        };
        e.noteOff = function(c, d, e) {
            e = e || 0;
            if (p[a.channels[c].instrument + "" + d]) {
                e < b.currentTime && (e += b.currentTime);
                var k = f[c + "" + d];
                if (k) {
                    if (k.gainNode) {
                        var g = k.gainNode.gain;
                        g.linearRampToValueAtTime(g.value, e);
                        g.linearRampToValueAtTime(-1, e + .3)
                    }
                    k.noteOff ? k.noteOff(e + .5) :
                        k.stop(e + .5);
                    delete f[c + "" + d];
                    return k
                }
            }
        };
        e.chordOn = function(a, b, c, d) {
            for (var g = {}, f = 0, h, k = b.length; f < k; f++) g[h = b[f]] = e.noteOn(a, h, c, d);
            return g
        };
        e.chordOff = function(a, b, c) {
            for (var d = {}, g = 0, f, h = b.length; g < h; g++) d[f = b[g]] = e.noteOff(a, f, c);
            return d
        };
        e.stopAllNotes = function() {
            for (var a in f) {
                var c = 0;
                c < b.currentTime && (c += b.currentTime);
                var d = f[a];
                d.gain.linearRampToValueAtTime(1, c);
                d.gain.linearRampToValueAtTime(0, c + .3);
                d.noteOff ? d.noteOff(c + .3) : d.stop(c + .3);
                delete f[a]
            }
        };
        e.setEffects = function(a) {
            if (b.tunajs)
                for (var c =
                        0; c < a.length; c++) {
                    var d = a[c],
                        f = new b.tunajs[d.type](d);
                    f.connect(b.destination);
                    k[d.type] = f
                } else return console.log("Effects module not installed.")
        };
        e.connect = function(d) {
            a.setDefaultPlugin(e);
            e.setContext(b || c(), d.onsuccess)
        };
        e.getContext = function() {
            return b
        };
        e.setContext = function(c, f, e, k) {
            b = c;
            "undefined" === typeof Tuna || b.tunajs || (b.tunajs = new Tuna(b));
            c = [];
            e = a.keyToNote;
            for (var g in e) c.push(g);
            var l = function(a) {
                for (var b in h)
                    if (h[b]) return;
                f && (f(), f = null)
            };
            e = function(b, c, g, f) {
                if (g = b[f]) h[c]++,
                    d(g, function(d) {
                        d.id = f;
                        p[c + "" + a.keyToNote[f]] = d;
                        0 === --h[c] && (b.isLoaded = !0, l(m))
                    }, function(a) {})
            };
            var h = {},
                m;
            for (m in a.Soundfont)
                if (k = a.Soundfont[m], !k.isLoaded)
                    for (var q = a.GM.byName[m].number, t = h[q] = 0; t < c.length; t++) g = c[t], e(k, q, t, g);
            setTimeout(l, 1)
        }
    }()
})(MIDI);
(function(a) {
    var d = null,
        c = null,
        e = a.WebMIDI = {
            api: "webmidi"
        };
    e.send = function(a, d) {
        c.send(a, 1E3 * d)
    };
    e.setController = function(a, d, e, m) {
        c.send([a, d, e], 1E3 * m)
    };
    e.setVolume = function(a, d, e) {
        c.send([176 + a, 7, d], 1E3 * e)
    };
    e.programChange = function(a, d, e) {
        c.send([192 + a, d], 1E3 * e)
    };
    e.pitchBend = function(a, d, e) {
        c.send([224 + a, d], 1E3 * e)
    };
    e.noteOn = function(a, d, e, m) {
        c.send([144 + a, d, e], 1E3 * m)
    };
    e.noteOff = function(a, d, e) {
        c.send([128 + a, d, 0], 1E3 * e)
    };
    e.chordOn = function(a, d, e, m) {
        for (var b = 0; b < d.length; b++) c.send([144 + a, d[b], e],
            1E3 * m)
    };
    e.chordOff = function(a, d, e) {
        for (var b = 0; b < d.length; b++) c.send([128 + a, d[b], 0], 1E3 * e)
    };
    e.stopAllNotes = function() {
        c.cancel();
        for (var a = 0; 16 > a; a++) c.send([176 + a, 123, 0])
    };
    e.connect = function(b) {
        a.setDefaultPlugin(e);
        var f = function(c) {
            if (window.AudioContext) b.api = "webaudio";
            else if (window.Audio) b.api = "audiotag";
            else return;
            a.loadPlugin(b)
        };
        navigator.requestMIDIAccess().then(function(a) {
            d = a;
            a = d.outputs;
            c = "function" == typeof a ? a()[0] : a[0];
            void 0 === c ? f() : b.onsuccess && b.onsuccess()
        }, f)
    }
})(MIDI);
"undefined" === typeof MIDI && (MIDI = {});
(function(a) {
    (a.util || (a.util = {})).request = function(c, e, b, f) {
        "string" === typeof c && (c = {
            url: c
        });
        var k = c.data,
            m = c.url,
            p = c.method || (c.data ? "POST" : "GET"),
            v = c.format,
            u = c.headers,
            q = c.responseType,
            t = c.withCredentials || !1;
        e = e || c.onsuccess;
        b = b || c.onerror;
        f = f || c.onprogress;
        if ("undefined" !== typeof d && a.loc.isLocalUrl(m)) d.readFile(m, "utf8", function(a, c) {
            a ? b && b(a) : e && e({
                responseText: c
            })
        });
        else {
            var g = new XMLHttpRequest;
            g.open(p, m, !0);
            if (u)
                for (var l in u) g.setRequestHeader(l, u[l]);
            else k && g.setRequestHeader("Content-type",
                "application/x-www-form-urlencoded");
            "binary" === v && g.overrideMimeType && g.overrideMimeType("text/plain; charset=x-user-defined");
            q && (g.responseType = q);
            t && (g.withCredentials = "true");
            b && "onerror" in g && (g.onerror = b);
            f && g.upload && "onprogress" in g.upload && (k ? g.upload.onprogress = function(a) {
                f.call(g, a, event.loaded / event.total)
            } : g.addEventListener("progress", function(a) {
                if (a.lengthComputable) var b = a.total;
                else if (g.totalBytes) b = g.totalBytes;
                else if (b = parseInt(g.getResponseHeader("Content-Length-Raw")), isFinite(b)) g.totalBytes =
                    b;
                else return;
                f.call(g, a, a.loaded / b)
            }));
            g.onreadystatechange = function(c) {
                if (4 === g.readyState)
                    if (200 === g.status || 304 === g.status || 308 === g.status || 0 === g.status && a.client.cordova) {
                        if (e) {
                            if ("xml" === v) var d = c.target.responseXML;
                            else if ("text" === v) d = c.target.responseText;
                            else if ("json" === v) try {
                                d = JSON.parse(c.target.response)
                            } catch (w) {
                                b && b.call(g, c)
                            }
                            e.call(g, c, d)
                        }
                    } else b && b.call(g, c)
            };
            g.send(k);
            return g
        }
    };
    if ("undefined" !== typeof module && module.exports) {
        var d = require("fs");
        XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        module.exports = a.util.request
    }
})(MIDI);
if ("undefined" === typeof dom) var dom = {};
(function() {
    dom.loadScript = function() {
        this.loaded = {};
        this.loading = {};
        return this
    };
    dom.loadScript.prototype.add = function(d) {
        var c = this;
        "string" === typeof d && (d = {
            url: d
        });
        var e = d.urls;
        "undefined" === typeof e && (e = [{
            url: d.url,
            verify: d.verify
        }]);
        var b = document.getElementsByTagName("head")[0],
            f = function(b, d) {
                if (!(c.loaded[b.url] || d && !1 === a(d))) {
                    c.loaded[b.url] = !0;
                    if (c.loading[b.url]) c.loading[b.url]();
                    delete c.loading[b.url];
                    if (b.onsuccess) b.onsuccess();
                    "undefined" !== typeof t && t()
                }
            },
            k = !1,
            m = [],
            p = function(a) {
                "string" ===
                typeof a && (a = {
                    url: a,
                    verify: d.verify
                });
                if (/([\w\d.\[\]'"])$/.test(a.verify)) {
                    var e = a.test = a.verify;
                    if ("object" === typeof e)
                        for (var g = 0; g < e.length; g++) m.push(e[g]);
                    else m.push(e)
                }
                c.loaded[a.url] || (e = document.createElement("script"), e.onreadystatechange = function() {
                        "loaded" !== this.readyState && "complete" !== this.readyState || f(a)
                    }, e.onload = function() {
                        f(a)
                    }, e.onerror = function() {
                        k = !0;
                        delete c.loading[a.url];
                        if ("object" === typeof a.test)
                            for (var b in a.test) v(a.test[b]);
                        else v(a.test)
                    }, e.setAttribute("type", "text/javascript"),
                    e.setAttribute("src", a.url), b.appendChild(e), c.loading[a.url] = function() {})
            },
            v = function(a) {
                for (var b = [], c = 0; c < m.length; c++) m[c] !== a && b.push(m[c]);
                m = b
            },
            u = function(b) {
                if (b) f(b, b.test);
                else
                    for (var c = 0; c < e.length; c++) f(e[c], e[c].test);
                var g = !0;
                for (c = 0; c < m.length; c++) !1 === a(m[c]) && (g = !1);
                if (!d.strictOrder && g)
                    if (k) d.error && d.error();
                    else {
                        if (d.onsuccess) d.onsuccess()
                    }
                else setTimeout(function() {
                    u(b)
                }, 10)
            };
        if (d.strictOrder) {
            var q = -1,
                t = function() {
                    q++;
                    if (e[q]) {
                        var a = e[q],
                            b = a.url;
                        c.loading[b] ? c.loading[b] = function() {
                            if (a.onsuccess) a.onsuccess();
                            t()
                        } : c.loaded[b] ? t() : (p(a), u(a))
                    } else if (k) d.error && d.error();
                    else if (d.onsuccess) d.onsuccess()
                };
            t()
        } else
            for (q = 0; q < e.length; q++) p(e[q]), u(e[q])
    };
    dom.loadScript = new dom.loadScript;
    var a = function(a, c) {
        try {
            a = a.split('"').join("").split("'").join("").split("]").join("").split("[").join(".");
            for (var d = a.split("."), b = d.length, f = c || window, k = 0; k < b; k++) {
                var m = d[k];
                if (null == f[m]) return !1;
                f = f[m]
            }
            return !0
        } catch (p) {
            return !1
        }
    }
})();