~ function() {
    function H() {
        this.A = function(e) {
            for (var f = 0; 24 > f; f++) this[String.fromCharCode(97 + f)] = e[f] || 0;
            0.01 > this.c && (this.c = 0.01);
            e = this.b + this.c + this.e;
            0.18 > e && (e = 0.18 / e, this.b *= e, this.c *= e, this.e *= e)
        }
    }
    var U = new function() {
        this.z = new H;
        var e, f, d, h, j, w, I, J, K, y, k, L;
        this.reset = function() {
            var b = this.z;
            h = 100 / (b.f * b.f + 0.001);
            j = 100 / (b.g * b.g + 0.001);
            w = 1 - 0.01 * b.h * b.h * b.h;
            I = 1E-6 * -b.i * b.i * b.i;
            b.a || (k = 0.5 - b.n / 2, L = 5E-5 * -b.o);
            J = 1 + b.l * b.l * (0 < b.l ? -0.9 : 10);
            K = 0;
            y = 1 == b.m ? 0 : 2E4 * (1 - b.m) * (1 - b.m) + 32
        };
        this.C = function() {
            this.reset();
            var b = this.z;
            e = 1E5 * b.b * b.b;
            f = 1E5 * b.c * b.c;
            d = 1E5 * b.e * b.e + 12;
            return 3 * ((e + f + d) / 3 | 0)
        };
        this.B = function(b, M) {
            var a = this.z,
                N = 1 != a.s || a.v,
                o = 0.1 * a.v * a.v,
                O = 1 + 3E-4 * a.w,
                l = 0.1 * a.s * a.s * a.s,
                V = 1 + 1E-4 * a.t,
                W = 1 != a.s,
                X = a.x * a.x,
                Y = a.g,
                P = a.q || a.r,
                Z = 0.2 * a.r * a.r * a.r,
                B = a.q * a.q * (0 > a.q ? -1020 : 1020),
                Q = a.p ? (2E4 * (1 - a.p) * (1 - a.p) | 0) + 32 : 0,
                $ = a.d,
                R = a.j / 2,
                aa = 0.01 * a.k * a.k,
                C = a.a,
                D = e,
                ba = 1 / e,
                ca = 1 / f,
                da = 1 / d,
                a = 5 / (1 + 20 * a.u * a.u) * (0.01 + l);
            0.8 < a && (a = 0.8);
            for (var a = 1 - a, E = !1, S = 0, s = 0, t = 0, z = 0, q = 0, u, r = 0, g, m = 0, p, F = 0, c, T = 0, n, G = 0, A = Array(1024), v = Array(32), i = A.length; i--;) A[i] = 0;
            for (i = v.length; i--;) v[i] = 2 * Math.random() - 1;
            for (i = 0; i < M; i++) {
                if (E) return i;
                Q && ++T >= Q && (T = 0, this.reset());
                y && ++K >= y && (y = 0, h *= J);
                w += I;
                h *= w;
                h > j && (h = j, 0 < Y && (E = !0));
                g = h;
                0 < R && (G += aa, g *= 1 + Math.sin(G) * R);
                g |= 0;
                8 > g && (g = 8);
                C || (k += L, 0 > k ? k = 0 : 0.5 < k && (k = 0.5));
                if (++s > D) switch (s = 0, ++S) {
                    case 1:
                        D = f;
                        break;
                    case 2:
                        D = d
                }
                switch (S) {
                    case 0:
                        t = s * ba;
                        break;
                    case 1:
                        t = 1 + 2 * (1 - s * ca) * $;
                        break;
                    case 2:
                        t = 1 - s * da;
                        break;
                    case 3:
                        t = 0, E = !0
                }
                P && (B += Z, p = B | 0, 0 > p ? p = -p : 1023 < p && (p = 1023));
                N && O && (o *= O, 1E-5 > o ? o = 1E-5 : 0.1 < o && (o = 0.1));
                n = 0;
                for (var ea = 8; ea--;) {
                    m++;
                    if (m >= g && (m %= g, 3 == C))
                        for (u = v.length; u--;) v[u] = 2 * Math.random() - 1;
                    switch (C) {
                        case 0:
                            c = m / g < k ? 0.5 : -0.5;
                            break;
                        case 1:
                            c = 1 - 2 * (m / g);
                            break;
                        case 2:
                            c = m / g;
                            c = 6.28318531 * (0.5 < c ? c - 1 : c);
                            c = 1.27323954 * c + 0.405284735 * c * c * (0 > c ? 1 : -1);
                            c = 0.225 * ((0 > c ? -1 : 1) * c * c - c) + c;
                            break;
                        case 3:
                            c = v[Math.abs(32 * m / g | 0)]
                    }
                    N && (u = r, l *= V, 0 > l ? l = 0 : 0.1 < l && (l = 0.1), W ? (q += (c - r) * l, q *= a) : (r = c, q = 0), r += q, z += r - u, c = z *= 1 - o);
                    P && (A[F % 1024] = c, c += A[(F - p + 1024) % 1024], F++);
                    n += c
                }
                n *= 0.125 * t * X;
                b[i] = 1 <= n ? 32767 : -1 >= n ? -32768 : 32767 * n | 0
            }
            return M
        }
    };
    window.SOUND = function(e) {
        U.z.A(e);
        var f = U.C(),
            e = new Uint8Array(4 * ((f + 1) / 2 | 0) + 44),
            f = 2 * U.B(new Uint16Array(e.buffer, 44), f),
            d = new Uint32Array(e.buffer, 0, 44);
        d[0] = 1179011410;
        d[1] = f + 36;
        d[2] = 1163280727;
        d[3] = 544501094;
        d[4] = 16;
        d[5] = 65537;
        d[6] = 44100;
        d[7] = 88200;
        d[8] = 1048578;
        d[9] = 1635017060;
        d[10] = f;
        for (var f = f + 44, d = 0, h = "data:audio/wav;base64,", x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; d < f; d += 3) var j = e[d] << 16 | e[d + 1] << 8 | e[d + 2],
            h = h + (x[j >> 18] + x[j >> 12 & 63] + x[j >> 6 & 63] + x[j & 63]);
        return h
    }
}()