var sd = Object.defineProperty;
var ql = Object.getOwnPropertySymbols;
var ad = Object.prototype.hasOwnProperty,
    od = Object.prototype.propertyIsEnumerable;
var Yl = (r, e, t) => e in r ? sd(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t,
    Zl = (r, e) => {
        for (var t in e || (e = {})) ad.call(e, t) && Yl(r, t, e[t]);
        if (ql)
            for (var t of ql(e)) od.call(e, t) && Yl(r, t, e[t]);
        return r
    };
/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Jl = "133",
    vi = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2
    },
    yi = {
        ROTATE: 0,
        PAN: 1,
        DOLLY_PAN: 2,
        DOLLY_ROTATE: 3
    },
    ld = 0,
    Kl = 1,
    cd = 2,
    $l = 1,
    ud = 2,
    br = 3,
    xi = 0,
    ut = 1,
    ti = 2,
    Ql = 1,
    En = 0,
    Sr = 1,
    ec = 2,
    tc = 3,
    nc = 4,
    hd = 5,
    _i = 100,
    fd = 101,
    dd = 102,
    ic = 103,
    rc = 104,
    pd = 200,
    md = 201,
    gd = 202,
    vd = 203,
    sc = 204,
    ac = 205,
    yd = 206,
    xd = 207,
    _d = 208,
    Md = 209,
    wd = 210,
    bd = 0,
    Sd = 1,
    Td = 2,
    Ia = 3,
    Ed = 4,
    Ad = 5,
    Ld = 6,
    Rd = 7,
    ps = 0,
    Cd = 1,
    Pd = 2,
    ni = 0,
    Id = 1,
    Dd = 2,
    Fd = 3,
    Nd = 4,
    Od = 5,
    oc = 300,
    ms = 301,
    gs = 302,
    vs = 303,
    Da = 304,
    ys = 306,
    Fa = 307,
    An = 1e3,
    vt = 1001,
    xs = 1002,
    ht = 1003,
    Na = 1004,
    Oa = 1005,
    Lt = 1006,
    lc = 1007,
    Mi = 1008,
    Ln = 1009,
    Bd = 1010,
    zd = 1011,
    _s = 1012,
    Ud = 1013,
    Ms = 1014,
    hn = 1015,
    wi = 1016,
    kd = 1017,
    Gd = 1018,
    Hd = 1019,
    Tr = 1020,
    Vd = 1021,
    ii = 1022,
    yt = 1023,
    Wd = 1024,
    Xd = 1025,
    jd = yt,
    bi = 1026,
    Er = 1027,
    qd = 1028,
    Yd = 1029,
    Zd = 1030,
    Jd = 1031,
    Kd = 1032,
    $d = 1033,
    cc = 33776,
    uc = 33777,
    hc = 33778,
    fc = 33779,
    dc = 35840,
    pc = 35841,
    mc = 35842,
    gc = 35843,
    Qd = 36196,
    vc = 37492,
    yc = 37496,
    ep = 37808,
    tp = 37809,
    np = 37810,
    ip = 37811,
    rp = 37812,
    sp = 37813,
    ap = 37814,
    op = 37815,
    lp = 37816,
    cp = 37817,
    up = 37818,
    hp = 37819,
    fp = 37820,
    dp = 37821,
    pp = 36492,
    mp = 37840,
    gp = 37841,
    vp = 37842,
    yp = 37843,
    xp = 37844,
    _p = 37845,
    Mp = 37846,
    wp = 37847,
    bp = 37848,
    Sp = 37849,
    Tp = 37850,
    Ep = 37851,
    Ap = 37852,
    Lp = 37853,
    Rp = 2200,
    Cp = 2201,
    Pp = 2202,
    Ar = 2300,
    Si = 2301,
    Ba = 2302,
    Ti = 2400,
    Ei = 2401,
    ws = 2402,
    za = 2500,
    xc = 2501,
    Ip = 0,
    Dp = 1,
    _c = 2,
    xt = 3e3,
    Rt = 3001,
    Ua = 3007,
    ka = 3002,
    Fp = 3003,
    Mc = 3004,
    wc = 3005,
    bc = 3006,
    Np = 3200,
    Op = 3201,
    ri = 0,
    Bp = 1,
    Ga = 7680,
    zp = 519,
    Lr = 35044,
    bs = 35048,
    Sc = "300 es";
class Rn {
    addEventListener(e, t) {
        this._listeners === void 0 && (this._listeners = {});
        const n = this._listeners;
        n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t)
    }
    hasEventListener(e, t) {
        if (this._listeners === void 0) return !1;
        const n = this._listeners;
        return n[e] !== void 0 && n[e].indexOf(t) !== -1
    }
    removeEventListener(e, t) {
        if (this._listeners === void 0) return;
        const i = this._listeners[e];
        if (i !== void 0) {
            const s = i.indexOf(t);
            s !== -1 && i.splice(s, 1)
        }
    }
    dispatchEvent(e) {
        if (this._listeners === void 0) return;
        const n = this._listeners[e.type];
        if (n !== void 0) {
            e.target = this;
            const i = n.slice(0);
            for (let s = 0, a = i.length; s < a; s++) i[s].call(this, e);
            e.target = null
        }
    }
}
let Ss = 1234567;
const Rr = Math.PI / 180,
    Cr = 180 / Math.PI,
    gt = [];
for (let r = 0; r < 256; r++) gt[r] = (r < 16 ? "0" : "") + r.toString(16);
const Up = typeof crypto != "undefined" && "randomUUID" in crypto;

function Bt() {
    if (Up) return crypto.randomUUID().toUpperCase();
    const r = Math.random() * 4294967295 | 0,
        e = Math.random() * 4294967295 | 0,
        t = Math.random() * 4294967295 | 0,
        n = Math.random() * 4294967295 | 0;
    return (gt[r & 255] + gt[r >> 8 & 255] + gt[r >> 16 & 255] + gt[r >> 24 & 255] + "-" + gt[e & 255] + gt[e >> 8 & 255] + "-" + gt[e >> 16 & 15 | 64] + gt[e >> 24 & 255] + "-" + gt[t & 63 | 128] + gt[t >> 8 & 255] + "-" + gt[t >> 16 & 255] + gt[t >> 24 & 255] + gt[n & 255] + gt[n >> 8 & 255] + gt[n >> 16 & 255] + gt[n >> 24 & 255]).toUpperCase()
}

function St(r, e, t) {
    return Math.max(e, Math.min(t, r))
}

function Ha(r, e) {
    return (r % e + e) % e
}

function kp(r, e, t, n, i) {
    return n + (r - e) * (i - n) / (t - e)
}

function Gp(r, e, t) {
    return r !== e ? (t - r) / (e - r) : 0
}

function Pr(r, e, t) {
    return (1 - t) * r + t * e
}

function Hp(r, e, t, n) {
    return Pr(r, e, 1 - Math.exp(-t * n))
}

function Vp(r, e = 1) {
    return e - Math.abs(Ha(r, e * 2) - e)
}

function Wp(r, e, t) {
    return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * (3 - 2 * r))
}

function Xp(r, e, t) {
    return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * r * (r * (r * 6 - 15) + 10))
}

function jp(r, e) {
    return r + Math.floor(Math.random() * (e - r + 1))
}

function qp(r, e) {
    return r + Math.random() * (e - r)
}

function Yp(r) {
    return r * (.5 - Math.random())
}

function Zp(r) {
    return r !== void 0 && (Ss = r % 2147483647), Ss = Ss * 16807 % 2147483647, (Ss - 1) / 2147483646
}

function Jp(r) {
    return r * Rr
}

function Kp(r) {
    return r * Cr
}

function Va(r) {
    return (r & r - 1) == 0 && r !== 0
}

function Tc(r) {
    return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2))
}

function Ec(r) {
    return Math.pow(2, Math.floor(Math.log(r) / Math.LN2))
}

function $p(r, e, t, n, i) {
    const s = Math.cos,
        a = Math.sin,
        o = s(t / 2),
        l = a(t / 2),
        c = s((e + n) / 2),
        u = a((e + n) / 2),
        h = s((e - n) / 2),
        f = a((e - n) / 2),
        d = s((n - e) / 2),
        p = a((n - e) / 2);
    switch (i) {
        case "XYX":
            r.set(o * u, l * h, l * f, o * c);
            break;
        case "YZY":
            r.set(l * f, o * u, l * h, o * c);
            break;
        case "ZXZ":
            r.set(l * h, l * f, o * u, o * c);
            break;
        case "XZX":
            r.set(o * u, l * p, l * d, o * c);
            break;
        case "YXY":
            r.set(l * d, o * u, l * p, o * c);
            break;
        case "ZYZ":
            r.set(l * p, l * d, o * u, o * c);
            break;
        default:
            console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i)
    }
}
var jt = Object.freeze({
    __proto__: null,
    DEG2RAD: Rr,
    RAD2DEG: Cr,
    generateUUID: Bt,
    clamp: St,
    euclideanModulo: Ha,
    mapLinear: kp,
    inverseLerp: Gp,
    lerp: Pr,
    damp: Hp,
    pingpong: Vp,
    smoothstep: Wp,
    smootherstep: Xp,
    randInt: jp,
    randFloat: qp,
    randFloatSpread: Yp,
    seededRandom: Zp,
    degToRad: Jp,
    radToDeg: Kp,
    isPowerOfTwo: Va,
    ceilPowerOfTwo: Tc,
    floorPowerOfTwo: Ec,
    setQuaternionFromProperEuler: $p
});
class K {
    constructor(e = 0, t = 0) {
        this.x = e, this.y = t
    }
    get width() {
        return this.x
    }
    set width(e) {
        this.x = e
    }
    get height() {
        return this.y
    }
    set height(e) {
        this.y = e
    }
    set(e, t) {
        return this.x = e, this.y = t, this
    }
    setScalar(e) {
        return this.x = e, this.y = e, this
    }
    setX(e) {
        return this.x = e, this
    }
    setY(e) {
        return this.y = e, this
    }
    setComponent(e, t) {
        switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            default:
                throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x, this.y)
    }
    copy(e) {
        return this.x = e.x, this.y = e.y, this
    }
    add(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
    }
    addScalar(e) {
        return this.x += e, this.y += e, this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t, this.y += e.y * t, this
    }
    sub(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
    }
    subScalar(e) {
        return this.x -= e, this.y -= e, this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this
    }
    multiply(e) {
        return this.x *= e.x, this.y *= e.y, this
    }
    multiplyScalar(e) {
        return this.x *= e, this.y *= e, this
    }
    divide(e) {
        return this.x /= e.x, this.y /= e.y, this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    applyMatrix3(e) {
        const t = this.x,
            n = this.y,
            i = e.elements;
        return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
    }
    ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
    }
    round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
    }
    negate() {
        return this.x = -this.x, this.y = -this.y, this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y
    }
    cross(e) {
        return this.x * e.y - this.y * e.x
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        const t = this.x - e.x,
            n = this.y - e.y;
        return t * t + n * n
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y
    }
    fromArray(e, t = 0) {
        return this.x = e[t], this.y = e[t + 1], this
    }
    toArray(e = [], t = 0) {
        return e[t] = this.x, e[t + 1] = this.y, e
    }
    fromBufferAttribute(e, t, n) {
        return n !== void 0 && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this
    }
    rotateAround(e, t) {
        const n = Math.cos(t),
            i = Math.sin(t),
            s = this.x - e.x,
            a = this.y - e.y;
        return this.x = s * n - a * i + e.x, this.y = s * i + a * n + e.y, this
    }
    random() {
        return this.x = Math.random(), this.y = Math.random(), this
    }*[Symbol.iterator]() {
        yield this.x, yield this.y
    }
}
K.prototype.isVector2 = !0;
class dt {
    constructor() {
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }
    set(e, t, n, i, s, a, o, l, c) {
        const u = this.elements;
        return u[0] = e, u[1] = i, u[2] = o, u[3] = t, u[4] = s, u[5] = l, u[6] = n, u[7] = a, u[8] = c, this
    }
    identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
    }
    copy(e) {
        const t = this.elements,
            n = e.elements;
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this
    }
    extractBasis(e, t, n) {
        return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this
    }
    setFromMatrix4(e) {
        const t = e.elements;
        return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    }
    multiply(e) {
        return this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        const n = e.elements,
            i = t.elements,
            s = this.elements,
            a = n[0],
            o = n[3],
            l = n[6],
            c = n[1],
            u = n[4],
            h = n[7],
            f = n[2],
            d = n[5],
            p = n[8],
            v = i[0],
            y = i[3],
            m = i[6],
            g = i[1],
            x = i[4],
            _ = i[7],
            w = i[2],
            T = i[5],
            M = i[8];
        return s[0] = a * v + o * g + l * w, s[3] = a * y + o * x + l * T, s[6] = a * m + o * _ + l * M, s[1] = c * v + u * g + h * w, s[4] = c * y + u * x + h * T, s[7] = c * m + u * _ + h * M, s[2] = f * v + d * g + p * w, s[5] = f * y + d * x + p * T, s[8] = f * m + d * _ + p * M, this
    }
    multiplyScalar(e) {
        const t = this.elements;
        return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
    }
    determinant() {
        const e = this.elements,
            t = e[0],
            n = e[1],
            i = e[2],
            s = e[3],
            a = e[4],
            o = e[5],
            l = e[6],
            c = e[7],
            u = e[8];
        return t * a * u - t * o * c - n * s * u + n * o * l + i * s * c - i * a * l
    }
    invert() {
        const e = this.elements,
            t = e[0],
            n = e[1],
            i = e[2],
            s = e[3],
            a = e[4],
            o = e[5],
            l = e[6],
            c = e[7],
            u = e[8],
            h = u * a - o * c,
            f = o * l - u * s,
            d = c * s - a * l,
            p = t * h + n * f + i * d;
        if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        const v = 1 / p;
        return e[0] = h * v, e[1] = (i * c - u * n) * v, e[2] = (o * n - i * a) * v, e[3] = f * v, e[4] = (u * t - i * l) * v, e[5] = (i * s - o * t) * v, e[6] = d * v, e[7] = (n * l - c * t) * v, e[8] = (a * t - n * s) * v, this
    }
    transpose() {
        let e;
        const t = this.elements;
        return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
    }
    getNormalMatrix(e) {
        return this.setFromMatrix4(e).invert().transpose()
    }
    transposeIntoArray(e) {
        const t = this.elements;
        return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
    }
    setUvTransform(e, t, n, i, s, a, o) {
        const l = Math.cos(s),
            c = Math.sin(s);
        return this.set(n * l, n * c, -n * (l * a + c * o) + a + e, -i * c, i * l, -i * (-c * a + l * o) + o + t, 0, 0, 1), this
    }
    scale(e, t) {
        const n = this.elements;
        return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this
    }
    rotate(e) {
        const t = Math.cos(e),
            n = Math.sin(e),
            i = this.elements,
            s = i[0],
            a = i[3],
            o = i[6],
            l = i[1],
            c = i[4],
            u = i[7];
        return i[0] = t * s + n * l, i[3] = t * a + n * c, i[6] = t * o + n * u, i[1] = -n * s + t * l, i[4] = -n * a + t * c, i[7] = -n * o + t * u, this
    }
    translate(e, t) {
        const n = this.elements;
        return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this
    }
    equals(e) {
        const t = this.elements,
            n = e.elements;
        for (let i = 0; i < 9; i++)
            if (t[i] !== n[i]) return !1;
        return !0
    }
    fromArray(e, t = 0) {
        for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
        return this
    }
    toArray(e = [], t = 0) {
        const n = this.elements;
        return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e
    }
    clone() {
        return new this.constructor().fromArray(this.elements)
    }
}
dt.prototype.isMatrix3 = !0;

function Ac(r) {
    if (r.length === 0) return -1 / 0;
    let e = r[0];
    for (let t = 1, n = r.length; t < n; ++t) r[t] > e && (e = r[t]);
    return e
}

function Ts(r) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", r)
}
let Ai;
class Li {
    static getDataURL(e) {
        if (/^data:/i.test(e.src) || typeof HTMLCanvasElement == "undefined") return e.src;
        let t;
        if (e instanceof HTMLCanvasElement) t = e;
        else {
            Ai === void 0 && (Ai = Ts("canvas")), Ai.width = e.width, Ai.height = e.height;
            const n = Ai.getContext("2d");
            e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Ai
        }
        return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png")
    }
}
let Qp = 0;
class it extends Rn {
    constructor(e = it.DEFAULT_IMAGE, t = it.DEFAULT_MAPPING, n = vt, i = vt, s = Lt, a = Mi, o = yt, l = Ln, c = 1, u = xt) {
        super();
        Object.defineProperty(this, "id", {
            value: Qp++
        }), this.uuid = Bt(), this.name = "", this.image = e, this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new K(0, 0), this.repeat = new K(1, 1), this.center = new K(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new dt, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = u, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1
    }
    updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.name = e.name, this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string";
        if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
        const n = {
            metadata: {
                version: 4.5,
                type: "Texture",
                generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            mapping: this.mapping,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            type: this.type,
            encoding: this.encoding,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
        };
        if (this.image !== void 0) {
            const i = this.image;
            if (i.uuid === void 0 && (i.uuid = Bt()), !t && e.images[i.uuid] === void 0) {
                let s;
                if (Array.isArray(i)) {
                    s = [];
                    for (let a = 0, o = i.length; a < o; a++) i[a].isDataTexture ? s.push(Wa(i[a].image)) : s.push(Wa(i[a]))
                } else s = Wa(i);
                e.images[i.uuid] = {
                    uuid: i.uuid,
                    url: s
                }
            }
            n.image = i.uuid
        }
        return t || (e.textures[this.uuid] = n), n
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    transformUv(e) {
        if (this.mapping !== oc) return e;
        if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
            case An:
                e.x = e.x - Math.floor(e.x);
                break;
            case vt:
                e.x = e.x < 0 ? 0 : 1;
                break;
            case xs:
                Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
                break
        }
        if (e.y < 0 || e.y > 1) switch (this.wrapT) {
            case An:
                e.y = e.y - Math.floor(e.y);
                break;
            case vt:
                e.y = e.y < 0 ? 0 : 1;
                break;
            case xs:
                Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
                break
        }
        return this.flipY && (e.y = 1 - e.y), e
    }
    set needsUpdate(e) {
        e === !0 && this.version++
    }
}
it.DEFAULT_IMAGE = void 0;
it.DEFAULT_MAPPING = oc;
it.prototype.isTexture = !0;

function Wa(r) {
    return typeof HTMLImageElement != "undefined" && r instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && r instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && r instanceof ImageBitmap ? Li.getDataURL(r) : r.data ? {
        data: Array.prototype.slice.call(r.data),
        width: r.width,
        height: r.height,
        type: r.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
}
class Ge {
    constructor(e = 0, t = 0, n = 0, i = 1) {
        this.x = e, this.y = t, this.z = n, this.w = i
    }
    get width() {
        return this.z
    }
    set width(e) {
        this.z = e
    }
    get height() {
        return this.w
    }
    set height(e) {
        this.w = e
    }
    set(e, t, n, i) {
        return this.x = e, this.y = t, this.z = n, this.w = i, this
    }
    setScalar(e) {
        return this.x = e, this.y = e, this.z = e, this.w = e, this
    }
    setX(e) {
        return this.x = e, this
    }
    setY(e) {
        return this.y = e, this
    }
    setZ(e) {
        return this.z = e, this
    }
    setW(e) {
        return this.w = e, this
    }
    setComponent(e, t) {
        switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            case 3:
                this.w = t;
                break;
            default:
                throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x, this.y, this.z, this.w)
    }
    copy(e) {
        return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this
    }
    add(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
    }
    addScalar(e) {
        return this.x += e, this.y += e, this.z += e, this.w += e, this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
    }
    sub(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
    }
    subScalar(e) {
        return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
    }
    multiply(e) {
        return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this
    }
    multiplyScalar(e) {
        return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
    }
    applyMatrix4(e) {
        const t = this.x,
            n = this.y,
            i = this.z,
            s = this.w,
            a = e.elements;
        return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * s, this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    setAxisAngleFromQuaternion(e) {
        this.w = 2 * Math.acos(e.w);
        const t = Math.sqrt(1 - e.w * e.w);
        return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
    }
    setAxisAngleFromRotationMatrix(e) {
        let t, n, i, s;
        const a = .01,
            o = .1,
            l = e.elements,
            c = l[0],
            u = l[4],
            h = l[8],
            f = l[1],
            d = l[5],
            p = l[9],
            v = l[2],
            y = l[6],
            m = l[10];
        if (Math.abs(u - f) < a && Math.abs(h - v) < a && Math.abs(p - y) < a) {
            if (Math.abs(u + f) < o && Math.abs(h + v) < o && Math.abs(p + y) < o && Math.abs(c + d + m - 3) < o) return this.set(1, 0, 0, 0), this;
            t = Math.PI;
            const x = (c + 1) / 2,
                _ = (d + 1) / 2,
                w = (m + 1) / 2,
                T = (u + f) / 4,
                M = (h + v) / 4,
                L = (p + y) / 4;
            return x > _ && x > w ? x < a ? (n = 0, i = .707106781, s = .707106781) : (n = Math.sqrt(x), i = T / n, s = M / n) : _ > w ? _ < a ? (n = .707106781, i = 0, s = .707106781) : (i = Math.sqrt(_), n = T / i, s = L / i) : w < a ? (n = .707106781, i = .707106781, s = 0) : (s = Math.sqrt(w), n = M / s, i = L / s), this.set(n, i, s, t), this
        }
        let g = Math.sqrt((y - p) * (y - p) + (h - v) * (h - v) + (f - u) * (f - u));
        return Math.abs(g) < .001 && (g = 1), this.x = (y - p) / g, this.y = (h - v) / g, this.z = (f - u) / g, this.w = Math.acos((c + d + m - 1) / 2), this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
    }
    ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
    }
    round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
    }
    negate() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
    }
    fromArray(e, t = 0) {
        return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
    }
    toArray(e = [], t = 0) {
        return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
    }
    fromBufferAttribute(e, t, n) {
        return n !== void 0 && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this
    }
    random() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
    }*[Symbol.iterator]() {
        yield this.x, yield this.y, yield this.z, yield this.w
    }
}
Ge.prototype.isVector4 = !0;
class en extends Rn {
    constructor(e, t, n = {}) {
        super();
        this.width = e, this.height = t, this.depth = 1, this.scissor = new Ge(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ge(0, 0, e, t), this.texture = new it(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.image = {
            width: e,
            height: t,
            depth: 1
        }, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : Lt, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null
    }
    setTexture(e) {
        e.image = {
            width: this.width,
            height: this.height,
            depth: this.depth
        }, this.texture = e
    }
    setSize(e, t, n = 1) {
        (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.image = Zl({}, this.texture.image), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
en.prototype.isWebGLRenderTarget = !0;
class em extends en {
    constructor(e, t, n) {
        super(e, t);
        const i = this.texture;
        this.texture = [];
        for (let s = 0; s < n; s++) this.texture[s] = i.clone()
    }
    setSize(e, t, n = 1) {
        if (this.width !== e || this.height !== t || this.depth !== n) {
            this.width = e, this.height = t, this.depth = n;
            for (let i = 0, s = this.texture.length; i < s; i++) this.texture[i].image.width = e, this.texture[i].image.height = t, this.texture[i].image.depth = n;
            this.dispose()
        }
        return this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t), this
    }
    copy(e) {
        this.dispose(), this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.set(0, 0, this.width, this.height), this.scissor.set(0, 0, this.width, this.height), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this.texture.length = 0;
        for (let t = 0, n = e.texture.length; t < n; t++) this.texture[t] = e.texture[t].clone();
        return this
    }
}
em.prototype.isWebGLMultipleRenderTargets = !0;
class Lc extends en {
    constructor(e, t, n) {
        super(e, t, n);
        this.samples = 4
    }
    copy(e) {
        return super.copy.call(this, e), this.samples = e.samples, this
    }
}
Lc.prototype.isWebGLMultisampleRenderTarget = !0;
class nt {
    constructor(e = 0, t = 0, n = 0, i = 1) {
        this._x = e, this._y = t, this._z = n, this._w = i
    }
    static slerp(e, t, n, i) {
        return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), n.slerpQuaternions(e, t, i)
    }
    static slerpFlat(e, t, n, i, s, a, o) {
        let l = n[i + 0],
            c = n[i + 1],
            u = n[i + 2],
            h = n[i + 3];
        const f = s[a + 0],
            d = s[a + 1],
            p = s[a + 2],
            v = s[a + 3];
        if (o === 0) {
            e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
            return
        }
        if (o === 1) {
            e[t + 0] = f, e[t + 1] = d, e[t + 2] = p, e[t + 3] = v;
            return
        }
        if (h !== v || l !== f || c !== d || u !== p) {
            let y = 1 - o;
            const m = l * f + c * d + u * p + h * v,
                g = m >= 0 ? 1 : -1,
                x = 1 - m * m;
            if (x > Number.EPSILON) {
                const w = Math.sqrt(x),
                    T = Math.atan2(w, m * g);
                y = Math.sin(y * T) / w, o = Math.sin(o * T) / w
            }
            const _ = o * g;
            if (l = l * y + f * _, c = c * y + d * _, u = u * y + p * _, h = h * y + v * _, y === 1 - o) {
                const w = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
                l *= w, c *= w, u *= w, h *= w
            }
        }
        e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h
    }
    static multiplyQuaternionsFlat(e, t, n, i, s, a) {
        const o = n[i],
            l = n[i + 1],
            c = n[i + 2],
            u = n[i + 3],
            h = s[a],
            f = s[a + 1],
            d = s[a + 2],
            p = s[a + 3];
        return e[t] = o * p + u * h + l * d - c * f, e[t + 1] = l * p + u * f + c * h - o * d, e[t + 2] = c * p + u * d + o * f - l * h, e[t + 3] = u * p - o * h - l * f - c * d, e
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e, this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e, this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e, this._onChangeCallback()
    }
    get w() {
        return this._w
    }
    set w(e) {
        this._w = e, this._onChangeCallback()
    }
    set(e, t, n, i) {
        return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this
    }
    clone() {
        return new this.constructor(this._x, this._y, this._z, this._w)
    }
    copy(e) {
        return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this
    }
    setFromEuler(e, t) {
        if (!(e && e.isEuler)) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
        const n = e._x,
            i = e._y,
            s = e._z,
            a = e._order,
            o = Math.cos,
            l = Math.sin,
            c = o(n / 2),
            u = o(i / 2),
            h = o(s / 2),
            f = l(n / 2),
            d = l(i / 2),
            p = l(s / 2);
        switch (a) {
            case "XYZ":
                this._x = f * u * h + c * d * p, this._y = c * d * h - f * u * p, this._z = c * u * p + f * d * h, this._w = c * u * h - f * d * p;
                break;
            case "YXZ":
                this._x = f * u * h + c * d * p, this._y = c * d * h - f * u * p, this._z = c * u * p - f * d * h, this._w = c * u * h + f * d * p;
                break;
            case "ZXY":
                this._x = f * u * h - c * d * p, this._y = c * d * h + f * u * p, this._z = c * u * p + f * d * h, this._w = c * u * h - f * d * p;
                break;
            case "ZYX":
                this._x = f * u * h - c * d * p, this._y = c * d * h + f * u * p, this._z = c * u * p - f * d * h, this._w = c * u * h + f * d * p;
                break;
            case "YZX":
                this._x = f * u * h + c * d * p, this._y = c * d * h + f * u * p, this._z = c * u * p - f * d * h, this._w = c * u * h - f * d * p;
                break;
            case "XZY":
                this._x = f * u * h - c * d * p, this._y = c * d * h - f * u * p, this._z = c * u * p + f * d * h, this._w = c * u * h + f * d * p;
                break;
            default:
                console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
        }
        return t !== !1 && this._onChangeCallback(), this
    }
    setFromAxisAngle(e, t) {
        const n = t / 2,
            i = Math.sin(n);
        return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this
    }
    setFromRotationMatrix(e) {
        const t = e.elements,
            n = t[0],
            i = t[4],
            s = t[8],
            a = t[1],
            o = t[5],
            l = t[9],
            c = t[2],
            u = t[6],
            h = t[10],
            f = n + o + h;
        if (f > 0) {
            const d = .5 / Math.sqrt(f + 1);
            this._w = .25 / d, this._x = (u - l) * d, this._y = (s - c) * d, this._z = (a - i) * d
        } else if (n > o && n > h) {
            const d = 2 * Math.sqrt(1 + n - o - h);
            this._w = (u - l) / d, this._x = .25 * d, this._y = (i + a) / d, this._z = (s + c) / d
        } else if (o > h) {
            const d = 2 * Math.sqrt(1 + o - n - h);
            this._w = (s - c) / d, this._x = (i + a) / d, this._y = .25 * d, this._z = (l + u) / d
        } else {
            const d = 2 * Math.sqrt(1 + h - n - o);
            this._w = (a - i) / d, this._x = (s + c) / d, this._y = (l + u) / d, this._z = .25 * d
        }
        return this._onChangeCallback(), this
    }
    setFromUnitVectors(e, t) {
        let n = e.dot(t) + 1;
        return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize()
    }
    angleTo(e) {
        return 2 * Math.acos(Math.abs(St(this.dot(e), -1, 1)))
    }
    rotateTowards(e, t) {
        const n = this.angleTo(e);
        if (n === 0) return this;
        const i = Math.min(1, t / n);
        return this.slerp(e, i), this
    }
    identity() {
        return this.set(0, 0, 0, 1)
    }
    invert() {
        return this.conjugate()
    }
    conjugate() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
    }
    dot(e) {
        return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
    }
    lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }
    length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    }
    normalize() {
        let e = this.length();
        return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this
    }
    multiply(e, t) {
        return t !== void 0 ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
    }
    premultiply(e) {
        return this.multiplyQuaternions(e, this)
    }
    multiplyQuaternions(e, t) {
        const n = e._x,
            i = e._y,
            s = e._z,
            a = e._w,
            o = t._x,
            l = t._y,
            c = t._z,
            u = t._w;
        return this._x = n * u + a * o + i * c - s * l, this._y = i * u + a * l + s * o - n * c, this._z = s * u + a * c + n * l - i * o, this._w = a * u - n * o - i * l - s * c, this._onChangeCallback(), this
    }
    slerp(e, t) {
        if (t === 0) return this;
        if (t === 1) return this.copy(e);
        const n = this._x,
            i = this._y,
            s = this._z,
            a = this._w;
        let o = a * e._w + n * e._x + i * e._y + s * e._z;
        if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = n, this._y = i, this._z = s, this;
        const l = 1 - o * o;
        if (l <= Number.EPSILON) {
            const d = 1 - t;
            return this._w = d * a + t * this._w, this._x = d * n + t * this._x, this._y = d * i + t * this._y, this._z = d * s + t * this._z, this.normalize(), this._onChangeCallback(), this
        }
        const c = Math.sqrt(l),
            u = Math.atan2(c, o),
            h = Math.sin((1 - t) * u) / c,
            f = Math.sin(t * u) / c;
        return this._w = a * h + this._w * f, this._x = n * h + this._x * f, this._y = i * h + this._y * f, this._z = s * h + this._z * f, this._onChangeCallback(), this
    }
    slerpQuaternions(e, t, n) {
        this.copy(e).slerp(t, n)
    }
    random() {
        const e = Math.random(),
            t = Math.sqrt(1 - e),
            n = Math.sqrt(e),
            i = 2 * Math.PI * Math.random(),
            s = 2 * Math.PI * Math.random();
        return this.set(t * Math.cos(i), n * Math.sin(s), n * Math.cos(s), t * Math.sin(i))
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
    }
    fromArray(e, t = 0) {
        return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this
    }
    toArray(e = [], t = 0) {
        return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
    }
    fromBufferAttribute(e, t) {
        return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this
    }
    _onChange(e) {
        return this._onChangeCallback = e, this
    }
    _onChangeCallback() {}
}
nt.prototype.isQuaternion = !0;
class A {
    constructor(e = 0, t = 0, n = 0) {
        this.x = e, this.y = t, this.z = n
    }
    set(e, t, n) {
        return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this
    }
    setScalar(e) {
        return this.x = e, this.y = e, this.z = e, this
    }
    setX(e) {
        return this.x = e, this
    }
    setY(e) {
        return this.y = e, this
    }
    setZ(e) {
        return this.z = e, this
    }
    setComponent(e, t) {
        switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            default:
                throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x, this.y, this.z)
    }
    copy(e) {
        return this.x = e.x, this.y = e.y, this.z = e.z, this
    }
    add(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
    }
    addScalar(e) {
        return this.x += e, this.y += e, this.z += e, this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this
    }
    sub(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
    }
    subScalar(e) {
        return this.x -= e, this.y -= e, this.z -= e, this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
    }
    multiply(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
    }
    multiplyScalar(e) {
        return this.x *= e, this.y *= e, this.z *= e, this
    }
    multiplyVectors(e, t) {
        return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
    }
    applyEuler(e) {
        return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(Rc.setFromEuler(e))
    }
    applyAxisAngle(e, t) {
        return this.applyQuaternion(Rc.setFromAxisAngle(e, t))
    }
    applyMatrix3(e) {
        const t = this.x,
            n = this.y,
            i = this.z,
            s = e.elements;
        return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this
    }
    applyNormalMatrix(e) {
        return this.applyMatrix3(e).normalize()
    }
    applyMatrix4(e) {
        const t = this.x,
            n = this.y,
            i = this.z,
            s = e.elements,
            a = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
        return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * a, this
    }
    applyQuaternion(e) {
        const t = this.x,
            n = this.y,
            i = this.z,
            s = e.x,
            a = e.y,
            o = e.z,
            l = e.w,
            c = l * t + a * i - o * n,
            u = l * n + o * t - s * i,
            h = l * i + s * n - a * t,
            f = -s * t - a * n - o * i;
        return this.x = c * l + f * -s + u * -o - h * -a, this.y = u * l + f * -a + h * -s - c * -o, this.z = h * l + f * -o + c * -a - u * -s, this
    }
    project(e) {
        return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
    }
    unproject(e) {
        return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
    }
    transformDirection(e) {
        const t = this.x,
            n = this.y,
            i = this.z,
            s = e.elements;
        return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize()
    }
    divide(e) {
        return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    min(e) {
        return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
    }
    ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
    }
    round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
    }
    negate() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this
    }
    cross(e, t) {
        return t !== void 0 ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t)) : this.crossVectors(this, e)
    }
    crossVectors(e, t) {
        const n = e.x,
            i = e.y,
            s = e.z,
            a = t.x,
            o = t.y,
            l = t.z;
        return this.x = i * l - s * o, this.y = s * a - n * l, this.z = n * o - i * a, this
    }
    projectOnVector(e) {
        const t = e.lengthSq();
        if (t === 0) return this.set(0, 0, 0);
        const n = e.dot(this) / t;
        return this.copy(e).multiplyScalar(n)
    }
    projectOnPlane(e) {
        return Xa.copy(this).projectOnVector(e), this.sub(Xa)
    }
    reflect(e) {
        return this.sub(Xa.copy(e).multiplyScalar(2 * this.dot(e)))
    }
    angleTo(e) {
        const t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (t === 0) return Math.PI / 2;
        const n = this.dot(e) / t;
        return Math.acos(St(n, -1, 1))
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        const t = this.x - e.x,
            n = this.y - e.y,
            i = this.z - e.z;
        return t * t + n * n + i * i
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    }
    setFromSpherical(e) {
        return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
    }
    setFromSphericalCoords(e, t, n) {
        const i = Math.sin(t) * e;
        return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this
    }
    setFromCylindrical(e) {
        return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
    }
    setFromCylindricalCoords(e, t, n) {
        return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this
    }
    setFromMatrixPosition(e) {
        const t = e.elements;
        return this.x = t[12], this.y = t[13], this.z = t[14], this
    }
    setFromMatrixScale(e) {
        const t = this.setFromMatrixColumn(e, 0).length(),
            n = this.setFromMatrixColumn(e, 1).length(),
            i = this.setFromMatrixColumn(e, 2).length();
        return this.x = t, this.y = n, this.z = i, this
    }
    setFromMatrixColumn(e, t) {
        return this.fromArray(e.elements, t * 4)
    }
    setFromMatrix3Column(e, t) {
        return this.fromArray(e.elements, t * 3)
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z
    }
    fromArray(e, t = 0) {
        return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
    }
    toArray(e = [], t = 0) {
        return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
    }
    fromBufferAttribute(e, t, n) {
        return n !== void 0 && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this
    }
    random() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
    }
    randomDirection() {
        const e = (Math.random() - .5) * 2,
            t = Math.random() * Math.PI * 2,
            n = Math.sqrt(1 - e ** 2);
        return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this
    }*[Symbol.iterator]() {
        yield this.x, yield this.y, yield this.z
    }
}
A.prototype.isVector3 = !0;
const Xa = new A,
    Rc = new nt;
class zt {
    constructor(e = new A(1 / 0, 1 / 0, 1 / 0), t = new A(-1 / 0, -1 / 0, -1 / 0)) {
        this.min = e, this.max = t
    }
    set(e, t) {
        return this.min.copy(e), this.max.copy(t), this
    }
    setFromArray(e) {
        let t = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            s = -1 / 0,
            a = -1 / 0,
            o = -1 / 0;
        for (let l = 0, c = e.length; l < c; l += 3) {
            const u = e[l],
                h = e[l + 1],
                f = e[l + 2];
            u < t && (t = u), h < n && (n = h), f < i && (i = f), u > s && (s = u), h > a && (a = h), f > o && (o = f)
        }
        return this.min.set(t, n, i), this.max.set(s, a, o), this
    }
    setFromBufferAttribute(e) {
        let t = 1 / 0,
            n = 1 / 0,
            i = 1 / 0,
            s = -1 / 0,
            a = -1 / 0,
            o = -1 / 0;
        for (let l = 0, c = e.count; l < c; l++) {
            const u = e.getX(l),
                h = e.getY(l),
                f = e.getZ(l);
            u < t && (t = u), h < n && (n = h), f < i && (i = f), u > s && (s = u), h > a && (a = h), f > o && (o = f)
        }
        return this.min.set(t, n, i), this.max.set(s, a, o), this
    }
    setFromPoints(e) {
        this.makeEmpty();
        for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
        return this
    }
    setFromCenterAndSize(e, t) {
        const n = Ir.copy(t).multiplyScalar(.5);
        return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
    }
    setFromObject(e) {
        return this.makeEmpty(), this.expandByObject(e)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.min.copy(e.min), this.max.copy(e.max), this
    }
    makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    }
    getCenter(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
    }
    getSize(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
    }
    expandByPoint(e) {
        return this.min.min(e), this.max.max(e), this
    }
    expandByVector(e) {
        return this.min.sub(e), this.max.add(e), this
    }
    expandByScalar(e) {
        return this.min.addScalar(-e), this.max.addScalar(e), this
    }
    expandByObject(e) {
        e.updateWorldMatrix(!1, !1);
        const t = e.geometry;
        t !== void 0 && (t.boundingBox === null && t.computeBoundingBox(), ja.copy(t.boundingBox), ja.applyMatrix4(e.matrixWorld), this.union(ja));
        const n = e.children;
        for (let i = 0, s = n.length; i < s; i++) this.expandByObject(n[i]);
        return this
    }
    containsPoint(e) {
        return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
    }
    containsBox(e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
    }
    getParameter(e, t) {
        return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
    }
    intersectsBox(e) {
        return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
    }
    intersectsSphere(e) {
        return this.clampPoint(e.center, Ir), Ir.distanceToSquared(e.center) <= e.radius * e.radius
    }
    intersectsPlane(e) {
        let t, n;
        return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant
    }
    intersectsTriangle(e) {
        if (this.isEmpty()) return !1;
        this.getCenter(Dr), Es.subVectors(this.max, Dr), Ri.subVectors(e.a, Dr), Ci.subVectors(e.b, Dr), Pi.subVectors(e.c, Dr), Cn.subVectors(Ci, Ri), Pn.subVectors(Pi, Ci), si.subVectors(Ri, Pi);
        let t = [0, -Cn.z, Cn.y, 0, -Pn.z, Pn.y, 0, -si.z, si.y, Cn.z, 0, -Cn.x, Pn.z, 0, -Pn.x, si.z, 0, -si.x, -Cn.y, Cn.x, 0, -Pn.y, Pn.x, 0, -si.y, si.x, 0];
        return !qa(t, Ri, Ci, Pi, Es) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !qa(t, Ri, Ci, Pi, Es)) ? !1 : (As.crossVectors(Cn, Pn), t = [As.x, As.y, As.z], qa(t, Ri, Ci, Pi, Es))
    }
    clampPoint(e, t) {
        return t.copy(e).clamp(this.min, this.max)
    }
    distanceToPoint(e) {
        return Ir.copy(e).clamp(this.min, this.max).sub(e).length()
    }
    getBoundingSphere(e) {
        return this.getCenter(e.center), e.radius = this.getSize(Ir).length() * .5, e
    }
    intersect(e) {
        return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this
    }
    union(e) {
        return this.min.min(e.min), this.max.max(e.max), this
    }
    applyMatrix4(e) {
        return this.isEmpty() ? this : (fn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), fn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), fn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), fn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), fn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), fn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), fn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), fn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(fn), this)
    }
    translate(e) {
        return this.min.add(e), this.max.add(e), this
    }
    equals(e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
    }
}
zt.prototype.isBox3 = !0;
const fn = [new A, new A, new A, new A, new A, new A, new A, new A],
    Ir = new A,
    ja = new zt,
    Ri = new A,
    Ci = new A,
    Pi = new A,
    Cn = new A,
    Pn = new A,
    si = new A,
    Dr = new A,
    Es = new A,
    As = new A,
    ai = new A;

function qa(r, e, t, n, i) {
    for (let s = 0, a = r.length - 3; s <= a; s += 3) {
        ai.fromArray(r, s);
        const o = i.x * Math.abs(ai.x) + i.y * Math.abs(ai.y) + i.z * Math.abs(ai.z),
            l = e.dot(ai),
            c = t.dot(ai),
            u = n.dot(ai);
        if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o) return !1
    }
    return !0
}
const tm = new zt,
    Cc = new A,
    Ya = new A,
    Za = new A;
class oi {
    constructor(e = new A, t = -1) {
        this.center = e, this.radius = t
    }
    set(e, t) {
        return this.center.copy(e), this.radius = t, this
    }
    setFromPoints(e, t) {
        const n = this.center;
        t !== void 0 ? n.copy(t) : tm.setFromPoints(e).getCenter(n);
        let i = 0;
        for (let s = 0, a = e.length; s < a; s++) i = Math.max(i, n.distanceToSquared(e[s]));
        return this.radius = Math.sqrt(i), this
    }
    copy(e) {
        return this.center.copy(e.center), this.radius = e.radius, this
    }
    isEmpty() {
        return this.radius < 0
    }
    makeEmpty() {
        return this.center.set(0, 0, 0), this.radius = -1, this
    }
    containsPoint(e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius
    }
    distanceToPoint(e) {
        return e.distanceTo(this.center) - this.radius
    }
    intersectsSphere(e) {
        const t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t
    }
    intersectsBox(e) {
        return e.intersectsSphere(this)
    }
    intersectsPlane(e) {
        return Math.abs(e.distanceToPoint(this.center)) <= this.radius
    }
    clampPoint(e, t) {
        const n = this.center.distanceToSquared(e);
        return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t
    }
    getBoundingBox(e) {
        return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e)
    }
    applyMatrix4(e) {
        return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
    }
    translate(e) {
        return this.center.add(e), this
    }
    expandByPoint(e) {
        Za.subVectors(e, this.center);
        const t = Za.lengthSq();
        if (t > this.radius * this.radius) {
            const n = Math.sqrt(t),
                i = (n - this.radius) * .5;
            this.center.add(Za.multiplyScalar(i / n)), this.radius += i
        }
        return this
    }
    union(e) {
        return Ya.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius), this.expandByPoint(Cc.copy(e.center).add(Ya)), this.expandByPoint(Cc.copy(e.center).sub(Ya)), this
    }
    equals(e) {
        return e.center.equals(this.center) && e.radius === this.radius
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
const dn = new A,
    Ja = new A,
    Ls = new A,
    In = new A,
    Ka = new A,
    Rs = new A,
    $a = new A;
class li {
    constructor(e = new A, t = new A(0, 0, -1)) {
        this.origin = e, this.direction = t
    }
    set(e, t) {
        return this.origin.copy(e), this.direction.copy(t), this
    }
    copy(e) {
        return this.origin.copy(e.origin), this.direction.copy(e.direction), this
    }
    at(e, t) {
        return t.copy(this.direction).multiplyScalar(e).add(this.origin)
    }
    lookAt(e) {
        return this.direction.copy(e).sub(this.origin).normalize(), this
    }
    recast(e) {
        return this.origin.copy(this.at(e, dn)), this
    }
    closestPointToPoint(e, t) {
        t.subVectors(e, this.origin);
        const n = t.dot(this.direction);
        return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin)
    }
    distanceToPoint(e) {
        return Math.sqrt(this.distanceSqToPoint(e))
    }
    distanceSqToPoint(e) {
        const t = dn.subVectors(e, this.origin).dot(this.direction);
        return t < 0 ? this.origin.distanceToSquared(e) : (dn.copy(this.direction).multiplyScalar(t).add(this.origin), dn.distanceToSquared(e))
    }
    distanceSqToSegment(e, t, n, i) {
        Ja.copy(e).add(t).multiplyScalar(.5), Ls.copy(t).sub(e).normalize(), In.copy(this.origin).sub(Ja);
        const s = e.distanceTo(t) * .5,
            a = -this.direction.dot(Ls),
            o = In.dot(this.direction),
            l = -In.dot(Ls),
            c = In.lengthSq(),
            u = Math.abs(1 - a * a);
        let h, f, d, p;
        if (u > 0)
            if (h = a * l - o, f = a * o - l, p = s * u, h >= 0)
                if (f >= -p)
                    if (f <= p) {
                        const v = 1 / u;
                        h *= v, f *= v, d = h * (h + a * f + 2 * o) + f * (a * h + f + 2 * l) + c
                    } else f = s, h = Math.max(0, -(a * f + o)), d = -h * h + f * (f + 2 * l) + c;
        else f = -s, h = Math.max(0, -(a * f + o)), d = -h * h + f * (f + 2 * l) + c;
        else f <= -p ? (h = Math.max(0, -(-a * s + o)), f = h > 0 ? -s : Math.min(Math.max(-s, -l), s), d = -h * h + f * (f + 2 * l) + c) : f <= p ? (h = 0, f = Math.min(Math.max(-s, -l), s), d = f * (f + 2 * l) + c) : (h = Math.max(0, -(a * s + o)), f = h > 0 ? s : Math.min(Math.max(-s, -l), s), d = -h * h + f * (f + 2 * l) + c);
        else f = a > 0 ? -s : s, h = Math.max(0, -(a * f + o)), d = -h * h + f * (f + 2 * l) + c;
        return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy(Ls).multiplyScalar(f).add(Ja), d
    }
    intersectSphere(e, t) {
        dn.subVectors(e.center, this.origin);
        const n = dn.dot(this.direction),
            i = dn.dot(dn) - n * n,
            s = e.radius * e.radius;
        if (i > s) return null;
        const a = Math.sqrt(s - i),
            o = n - a,
            l = n + a;
        return o < 0 && l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t)
    }
    intersectsSphere(e) {
        return this.distanceSqToPoint(e.center) <= e.radius * e.radius
    }
    distanceToPlane(e) {
        const t = e.normal.dot(this.direction);
        if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
        const n = -(this.origin.dot(e.normal) + e.constant) / t;
        return n >= 0 ? n : null
    }
    intersectPlane(e, t) {
        const n = this.distanceToPlane(e);
        return n === null ? null : this.at(n, t)
    }
    intersectsPlane(e) {
        const t = e.distanceToPoint(this.origin);
        return t === 0 || e.normal.dot(this.direction) * t < 0
    }
    intersectBox(e, t) {
        let n, i, s, a, o, l;
        const c = 1 / this.direction.x,
            u = 1 / this.direction.y,
            h = 1 / this.direction.z,
            f = this.origin;
        return c >= 0 ? (n = (e.min.x - f.x) * c, i = (e.max.x - f.x) * c) : (n = (e.max.x - f.x) * c, i = (e.min.x - f.x) * c), u >= 0 ? (s = (e.min.y - f.y) * u, a = (e.max.y - f.y) * u) : (s = (e.max.y - f.y) * u, a = (e.min.y - f.y) * u), n > a || s > i || ((s > n || n !== n) && (n = s), (a < i || i !== i) && (i = a), h >= 0 ? (o = (e.min.z - f.z) * h, l = (e.max.z - f.z) * h) : (o = (e.max.z - f.z) * h, l = (e.min.z - f.z) * h), n > l || o > i) || ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t)
    }
    intersectsBox(e) {
        return this.intersectBox(e, dn) !== null
    }
    intersectTriangle(e, t, n, i, s) {
        Ka.subVectors(t, e), Rs.subVectors(n, e), $a.crossVectors(Ka, Rs);
        let a = this.direction.dot($a),
            o;
        if (a > 0) {
            if (i) return null;
            o = 1
        } else if (a < 0) o = -1, a = -a;
        else return null;
        In.subVectors(this.origin, e);
        const l = o * this.direction.dot(Rs.crossVectors(In, Rs));
        if (l < 0) return null;
        const c = o * this.direction.dot(Ka.cross(In));
        if (c < 0 || l + c > a) return null;
        const u = -o * In.dot($a);
        return u < 0 ? null : this.at(u / a, s)
    }
    applyMatrix4(e) {
        return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    }
    equals(e) {
        return e.origin.equals(this.origin) && e.direction.equals(this.direction)
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
class ae {
    constructor() {
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }
    set(e, t, n, i, s, a, o, l, c, u, h, f, d, p, v, y) {
        const m = this.elements;
        return m[0] = e, m[4] = t, m[8] = n, m[12] = i, m[1] = s, m[5] = a, m[9] = o, m[13] = l, m[2] = c, m[6] = u, m[10] = h, m[14] = f, m[3] = d, m[7] = p, m[11] = v, m[15] = y, this
    }
    identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    }
    clone() {
        return new ae().fromArray(this.elements)
    }
    copy(e) {
        const t = this.elements,
            n = e.elements;
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this
    }
    copyPosition(e) {
        const t = this.elements,
            n = e.elements;
        return t[12] = n[12], t[13] = n[13], t[14] = n[14], this
    }
    setFromMatrix3(e) {
        const t = e.elements;
        return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this
    }
    extractBasis(e, t, n) {
        return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
    }
    makeBasis(e, t, n) {
        return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this
    }
    extractRotation(e) {
        const t = this.elements,
            n = e.elements,
            i = 1 / Ii.setFromMatrixColumn(e, 0).length(),
            s = 1 / Ii.setFromMatrixColumn(e, 1).length(),
            a = 1 / Ii.setFromMatrixColumn(e, 2).length();
        return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
    }
    makeRotationFromEuler(e) {
        e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        const t = this.elements,
            n = e.x,
            i = e.y,
            s = e.z,
            a = Math.cos(n),
            o = Math.sin(n),
            l = Math.cos(i),
            c = Math.sin(i),
            u = Math.cos(s),
            h = Math.sin(s);
        if (e.order === "XYZ") {
            const f = a * u,
                d = a * h,
                p = o * u,
                v = o * h;
            t[0] = l * u, t[4] = -l * h, t[8] = c, t[1] = d + p * c, t[5] = f - v * c, t[9] = -o * l, t[2] = v - f * c, t[6] = p + d * c, t[10] = a * l
        } else if (e.order === "YXZ") {
            const f = l * u,
                d = l * h,
                p = c * u,
                v = c * h;
            t[0] = f + v * o, t[4] = p * o - d, t[8] = a * c, t[1] = a * h, t[5] = a * u, t[9] = -o, t[2] = d * o - p, t[6] = v + f * o, t[10] = a * l
        } else if (e.order === "ZXY") {
            const f = l * u,
                d = l * h,
                p = c * u,
                v = c * h;
            t[0] = f - v * o, t[4] = -a * h, t[8] = p + d * o, t[1] = d + p * o, t[5] = a * u, t[9] = v - f * o, t[2] = -a * c, t[6] = o, t[10] = a * l
        } else if (e.order === "ZYX") {
            const f = a * u,
                d = a * h,
                p = o * u,
                v = o * h;
            t[0] = l * u, t[4] = p * c - d, t[8] = f * c + v, t[1] = l * h, t[5] = v * c + f, t[9] = d * c - p, t[2] = -c, t[6] = o * l, t[10] = a * l
        } else if (e.order === "YZX") {
            const f = a * l,
                d = a * c,
                p = o * l,
                v = o * c;
            t[0] = l * u, t[4] = v - f * h, t[8] = p * h + d, t[1] = h, t[5] = a * u, t[9] = -o * u, t[2] = -c * u, t[6] = d * h + p, t[10] = f - v * h
        } else if (e.order === "XZY") {
            const f = a * l,
                d = a * c,
                p = o * l,
                v = o * c;
            t[0] = l * u, t[4] = -h, t[8] = c * u, t[1] = f * h + v, t[5] = a * u, t[9] = d * h - p, t[2] = p * h - d, t[6] = o * u, t[10] = v * h + f
        }
        return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
    }
    makeRotationFromQuaternion(e) {
        return this.compose(nm, e, im)
    }
    lookAt(e, t, n) {
        const i = this.elements;
        return Dt.subVectors(e, t), Dt.lengthSq() === 0 && (Dt.z = 1), Dt.normalize(), Dn.crossVectors(n, Dt), Dn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Dt.x += 1e-4 : Dt.z += 1e-4, Dt.normalize(), Dn.crossVectors(n, Dt)), Dn.normalize(), Cs.crossVectors(Dt, Dn), i[0] = Dn.x, i[4] = Cs.x, i[8] = Dt.x, i[1] = Dn.y, i[5] = Cs.y, i[9] = Dt.y, i[2] = Dn.z, i[6] = Cs.z, i[10] = Dt.z, this
    }
    multiply(e, t) {
        return t !== void 0 ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        const n = e.elements,
            i = t.elements,
            s = this.elements,
            a = n[0],
            o = n[4],
            l = n[8],
            c = n[12],
            u = n[1],
            h = n[5],
            f = n[9],
            d = n[13],
            p = n[2],
            v = n[6],
            y = n[10],
            m = n[14],
            g = n[3],
            x = n[7],
            _ = n[11],
            w = n[15],
            T = i[0],
            M = i[4],
            L = i[8],
            H = i[12],
            P = i[1],
            R = i[5],
            j = i[9],
            I = i[13],
            F = i[2],
            B = i[6],
            N = i[10],
            O = i[14],
            Y = i[3],
            re = i[7],
            he = i[11],
            Q = i[15];
        return s[0] = a * T + o * P + l * F + c * Y, s[4] = a * M + o * R + l * B + c * re, s[8] = a * L + o * j + l * N + c * he, s[12] = a * H + o * I + l * O + c * Q, s[1] = u * T + h * P + f * F + d * Y, s[5] = u * M + h * R + f * B + d * re, s[9] = u * L + h * j + f * N + d * he, s[13] = u * H + h * I + f * O + d * Q, s[2] = p * T + v * P + y * F + m * Y, s[6] = p * M + v * R + y * B + m * re, s[10] = p * L + v * j + y * N + m * he, s[14] = p * H + v * I + y * O + m * Q, s[3] = g * T + x * P + _ * F + w * Y, s[7] = g * M + x * R + _ * B + w * re, s[11] = g * L + x * j + _ * N + w * he, s[15] = g * H + x * I + _ * O + w * Q, this
    }
    multiplyScalar(e) {
        const t = this.elements;
        return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
    }
    determinant() {
        const e = this.elements,
            t = e[0],
            n = e[4],
            i = e[8],
            s = e[12],
            a = e[1],
            o = e[5],
            l = e[9],
            c = e[13],
            u = e[2],
            h = e[6],
            f = e[10],
            d = e[14],
            p = e[3],
            v = e[7],
            y = e[11],
            m = e[15];
        return p * (+s * l * h - i * c * h - s * o * f + n * c * f + i * o * d - n * l * d) + v * (+t * l * d - t * c * f + s * a * f - i * a * d + i * c * u - s * l * u) + y * (+t * c * h - t * o * d - s * a * h + n * a * d + s * o * u - n * c * u) + m * (-i * o * u - t * l * h + t * o * f + i * a * h - n * a * f + n * l * u)
    }
    transpose() {
        const e = this.elements;
        let t;
        return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
    }
    setPosition(e, t, n) {
        const i = this.elements;
        return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this
    }
    invert() {
        const e = this.elements,
            t = e[0],
            n = e[1],
            i = e[2],
            s = e[3],
            a = e[4],
            o = e[5],
            l = e[6],
            c = e[7],
            u = e[8],
            h = e[9],
            f = e[10],
            d = e[11],
            p = e[12],
            v = e[13],
            y = e[14],
            m = e[15],
            g = h * y * c - v * f * c + v * l * d - o * y * d - h * l * m + o * f * m,
            x = p * f * c - u * y * c - p * l * d + a * y * d + u * l * m - a * f * m,
            _ = u * v * c - p * h * c + p * o * d - a * v * d - u * o * m + a * h * m,
            w = p * h * l - u * v * l - p * o * f + a * v * f + u * o * y - a * h * y,
            T = t * g + n * x + i * _ + s * w;
        if (T === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        const M = 1 / T;
        return e[0] = g * M, e[1] = (v * f * s - h * y * s - v * i * d + n * y * d + h * i * m - n * f * m) * M, e[2] = (o * y * s - v * l * s + v * i * c - n * y * c - o * i * m + n * l * m) * M, e[3] = (h * l * s - o * f * s - h * i * c + n * f * c + o * i * d - n * l * d) * M, e[4] = x * M, e[5] = (u * y * s - p * f * s + p * i * d - t * y * d - u * i * m + t * f * m) * M, e[6] = (p * l * s - a * y * s - p * i * c + t * y * c + a * i * m - t * l * m) * M, e[7] = (a * f * s - u * l * s + u * i * c - t * f * c - a * i * d + t * l * d) * M, e[8] = _ * M, e[9] = (p * h * s - u * v * s - p * n * d + t * v * d + u * n * m - t * h * m) * M, e[10] = (a * v * s - p * o * s + p * n * c - t * v * c - a * n * m + t * o * m) * M, e[11] = (u * o * s - a * h * s - u * n * c + t * h * c + a * n * d - t * o * d) * M, e[12] = w * M, e[13] = (u * v * i - p * h * i + p * n * f - t * v * f - u * n * y + t * h * y) * M, e[14] = (p * o * i - a * v * i - p * n * l + t * v * l + a * n * y - t * o * y) * M, e[15] = (a * h * i - u * o * i + u * n * l - t * h * l - a * n * f + t * o * f) * M, this
    }
    scale(e) {
        const t = this.elements,
            n = e.x,
            i = e.y,
            s = e.z;
        return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this
    }
    getMaxScaleOnAxis() {
        const e = this.elements,
            t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
            n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
            i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
        return Math.sqrt(Math.max(t, n, i))
    }
    makeTranslation(e, t, n) {
        return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this
    }
    makeRotationX(e) {
        const t = Math.cos(e),
            n = Math.sin(e);
        return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this
    }
    makeRotationY(e) {
        const t = Math.cos(e),
            n = Math.sin(e);
        return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this
    }
    makeRotationZ(e) {
        const t = Math.cos(e),
            n = Math.sin(e);
        return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    }
    makeRotationAxis(e, t) {
        const n = Math.cos(t),
            i = Math.sin(t),
            s = 1 - n,
            a = e.x,
            o = e.y,
            l = e.z,
            c = s * a,
            u = s * o;
        return this.set(c * a + n, c * o - i * l, c * l + i * o, 0, c * o + i * l, u * o + n, u * l - i * a, 0, c * l - i * o, u * l + i * a, s * l * l + n, 0, 0, 0, 0, 1), this
    }
    makeScale(e, t, n) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
    }
    makeShear(e, t, n, i, s, a) {
        return this.set(1, n, s, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1), this
    }
    compose(e, t, n) {
        const i = this.elements,
            s = t._x,
            a = t._y,
            o = t._z,
            l = t._w,
            c = s + s,
            u = a + a,
            h = o + o,
            f = s * c,
            d = s * u,
            p = s * h,
            v = a * u,
            y = a * h,
            m = o * h,
            g = l * c,
            x = l * u,
            _ = l * h,
            w = n.x,
            T = n.y,
            M = n.z;
        return i[0] = (1 - (v + m)) * w, i[1] = (d + _) * w, i[2] = (p - x) * w, i[3] = 0, i[4] = (d - _) * T, i[5] = (1 - (f + m)) * T, i[6] = (y + g) * T, i[7] = 0, i[8] = (p + x) * M, i[9] = (y - g) * M, i[10] = (1 - (f + v)) * M, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this
    }
    decompose(e, t, n) {
        const i = this.elements;
        let s = Ii.set(i[0], i[1], i[2]).length();
        const a = Ii.set(i[4], i[5], i[6]).length(),
            o = Ii.set(i[8], i[9], i[10]).length();
        this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], qt.copy(this);
        const c = 1 / s,
            u = 1 / a,
            h = 1 / o;
        return qt.elements[0] *= c, qt.elements[1] *= c, qt.elements[2] *= c, qt.elements[4] *= u, qt.elements[5] *= u, qt.elements[6] *= u, qt.elements[8] *= h, qt.elements[9] *= h, qt.elements[10] *= h, t.setFromRotationMatrix(qt), n.x = s, n.y = a, n.z = o, this
    }
    makePerspective(e, t, n, i, s, a) {
        a === void 0 && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
        const o = this.elements,
            l = 2 * s / (t - e),
            c = 2 * s / (n - i),
            u = (t + e) / (t - e),
            h = (n + i) / (n - i),
            f = -(a + s) / (a - s),
            d = -2 * a * s / (a - s);
        return o[0] = l, o[4] = 0, o[8] = u, o[12] = 0, o[1] = 0, o[5] = c, o[9] = h, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = f, o[14] = d, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
    }
    makeOrthographic(e, t, n, i, s, a) {
        const o = this.elements,
            l = 1 / (t - e),
            c = 1 / (n - i),
            u = 1 / (a - s),
            h = (t + e) * l,
            f = (n + i) * c,
            d = (a + s) * u;
        return o[0] = 2 * l, o[4] = 0, o[8] = 0, o[12] = -h, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -f, o[2] = 0, o[6] = 0, o[10] = -2 * u, o[14] = -d, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
    }
    equals(e) {
        const t = this.elements,
            n = e.elements;
        for (let i = 0; i < 16; i++)
            if (t[i] !== n[i]) return !1;
        return !0
    }
    fromArray(e, t = 0) {
        for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
        return this
    }
    toArray(e = [], t = 0) {
        const n = this.elements;
        return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e
    }
}
ae.prototype.isMatrix4 = !0;
const Ii = new A,
    qt = new ae,
    nm = new A(0, 0, 0),
    im = new A(1, 1, 1),
    Dn = new A,
    Cs = new A,
    Dt = new A,
    Pc = new ae,
    Ic = new nt;
class Yt {
    constructor(e = 0, t = 0, n = 0, i = Yt.DefaultOrder) {
        this._x = e, this._y = t, this._z = n, this._order = i
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e, this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e, this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e, this._onChangeCallback()
    }
    get order() {
        return this._order
    }
    set order(e) {
        this._order = e, this._onChangeCallback()
    }
    set(e, t, n, i = this._order) {
        return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this
    }
    clone() {
        return new this.constructor(this._x, this._y, this._z, this._order)
    }
    copy(e) {
        return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this
    }
    setFromRotationMatrix(e, t = this._order, n = !0) {
        const i = e.elements,
            s = i[0],
            a = i[4],
            o = i[8],
            l = i[1],
            c = i[5],
            u = i[9],
            h = i[2],
            f = i[6],
            d = i[10];
        switch (t) {
            case "XYZ":
                this._y = Math.asin(St(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-u, d), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(f, c), this._z = 0);
                break;
            case "YXZ":
                this._x = Math.asin(-St(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(o, d), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, s), this._z = 0);
                break;
            case "ZXY":
                this._x = Math.asin(St(f, -1, 1)), Math.abs(f) < .9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
                break;
            case "ZYX":
                this._y = Math.asin(-St(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(f, d), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
                break;
            case "YZX":
                this._z = Math.asin(St(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, s)) : (this._x = 0, this._y = Math.atan2(o, d));
                break;
            case "XZY":
                this._z = Math.asin(-St(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-u, d), this._y = 0);
                break;
            default:
                console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
        }
        return this._order = t, n === !0 && this._onChangeCallback(), this
    }
    setFromQuaternion(e, t, n) {
        return Pc.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Pc, t, n)
    }
    setFromVector3(e, t = this._order) {
        return this.set(e.x, e.y, e.z, t)
    }
    reorder(e) {
        return Ic.setFromEuler(this), this.setFromQuaternion(Ic, e)
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
    }
    fromArray(e) {
        return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this
    }
    toArray(e = [], t = 0) {
        return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
    }
    toVector3(e) {
        return e ? e.set(this._x, this._y, this._z) : new A(this._x, this._y, this._z)
    }
    _onChange(e) {
        return this._onChangeCallback = e, this
    }
    _onChangeCallback() {}
}
Yt.prototype.isEuler = !0;
Yt.DefaultOrder = "XYZ";
Yt.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class Dc {
    constructor() {
        this.mask = 1 | 0
    }
    set(e) {
        this.mask = 1 << e | 0
    }
    enable(e) {
        this.mask |= 1 << e | 0
    }
    enableAll() {
        this.mask = 4294967295 | 0
    }
    toggle(e) {
        this.mask ^= 1 << e | 0
    }
    disable(e) {
        this.mask &= ~(1 << e | 0)
    }
    disableAll() {
        this.mask = 0
    }
    test(e) {
        return (this.mask & e.mask) != 0
    }
}
let rm = 0;
const Fc = new A,
    Di = new nt,
    pn = new ae,
    Ps = new A,
    Fr = new A,
    sm = new A,
    am = new nt,
    Nc = new A(1, 0, 0),
    Oc = new A(0, 1, 0),
    Bc = new A(0, 0, 1),
    om = {
        type: "added"
    },
    zc = {
        type: "removed"
    };
class Ne extends Rn {
    constructor() {
        super();
        Object.defineProperty(this, "id", {
            value: rm++
        }), this.uuid = Bt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ne.DefaultUp.clone();
        const e = new A,
            t = new Yt,
            n = new nt,
            i = new A(1, 1, 1);

        function s() {
            n.setFromEuler(t, !1)
        }

        function a() {
            t.setFromQuaternion(n, void 0, !1)
        }
        t._onChange(s), n._onChange(a), Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: e
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: n
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: i
            },
            modelViewMatrix: {
                value: new ae
            },
            normalMatrix: {
                value: new dt
            }
        }), this.matrix = new ae, this.matrixWorld = new ae, this.matrixAutoUpdate = Ne.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Dc, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}
    }
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) {
        this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale)
    }
    applyQuaternion(e) {
        return this.quaternion.premultiply(e), this
    }
    setRotationFromAxisAngle(e, t) {
        this.quaternion.setFromAxisAngle(e, t)
    }
    setRotationFromEuler(e) {
        this.quaternion.setFromEuler(e, !0)
    }
    setRotationFromMatrix(e) {
        this.quaternion.setFromRotationMatrix(e)
    }
    setRotationFromQuaternion(e) {
        this.quaternion.copy(e)
    }
    rotateOnAxis(e, t) {
        return Di.setFromAxisAngle(e, t), this.quaternion.multiply(Di), this
    }
    rotateOnWorldAxis(e, t) {
        return Di.setFromAxisAngle(e, t), this.quaternion.premultiply(Di), this
    }
    rotateX(e) {
        return this.rotateOnAxis(Nc, e)
    }
    rotateY(e) {
        return this.rotateOnAxis(Oc, e)
    }
    rotateZ(e) {
        return this.rotateOnAxis(Bc, e)
    }
    translateOnAxis(e, t) {
        return Fc.copy(e).applyQuaternion(this.quaternion), this.position.add(Fc.multiplyScalar(t)), this
    }
    translateX(e) {
        return this.translateOnAxis(Nc, e)
    }
    translateY(e) {
        return this.translateOnAxis(Oc, e)
    }
    translateZ(e) {
        return this.translateOnAxis(Bc, e)
    }
    localToWorld(e) {
        return e.applyMatrix4(this.matrixWorld)
    }
    worldToLocal(e) {
        return e.applyMatrix4(pn.copy(this.matrixWorld).invert())
    }
    lookAt(e, t, n) {
        e.isVector3 ? Ps.copy(e) : Ps.set(e, t, n);
        const i = this.parent;
        this.updateWorldMatrix(!0, !1), Fr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? pn.lookAt(Fr, Ps, this.up) : pn.lookAt(Ps, Fr, this.up), this.quaternion.setFromRotationMatrix(pn), i && (pn.extractRotation(i.matrixWorld), Di.setFromRotationMatrix(pn), this.quaternion.premultiply(Di.invert()))
    }
    add(e) {
        if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
            return this
        }
        return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(om)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)
    }
    remove(e) {
        if (arguments.length > 1) {
            for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
            return this
        }
        const t = this.children.indexOf(e);
        return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(zc)), this
    }
    removeFromParent() {
        const e = this.parent;
        return e !== null && e.remove(this), this
    }
    clear() {
        for (let e = 0; e < this.children.length; e++) {
            const t = this.children[e];
            t.parent = null, t.dispatchEvent(zc)
        }
        return this.children.length = 0, this
    }
    attach(e) {
        return this.updateWorldMatrix(!0, !1), pn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), pn.multiply(e.parent.matrixWorld)), e.applyMatrix4(pn), this.add(e), e.updateWorldMatrix(!1, !0), this
    }
    getObjectById(e) {
        return this.getObjectByProperty("id", e)
    }
    getObjectByName(e) {
        return this.getObjectByProperty("name", e)
    }
    getObjectByProperty(e, t) {
        if (this[e] === t) return this;
        for (let n = 0, i = this.children.length; n < i; n++) {
            const a = this.children[n].getObjectByProperty(e, t);
            if (a !== void 0) return a
        }
    }
    getWorldPosition(e) {
        return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    }
    getWorldQuaternion(e) {
        return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Fr, e, sm), e
    }
    getWorldScale(e) {
        return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Fr, am, e), e
    }
    getWorldDirection(e) {
        this.updateWorldMatrix(!0, !1);
        const t = this.matrixWorld.elements;
        return e.set(t[8], t[9], t[10]).normalize()
    }
    raycast() {}
    traverse(e) {
        e(this);
        const t = this.children;
        for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e)
    }
    traverseVisible(e) {
        if (this.visible === !1) return;
        e(this);
        const t = this.children;
        for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e)
    }
    traverseAncestors(e) {
        const t = this.parent;
        t !== null && (e(t), t.traverseAncestors(e))
    }
    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
    }
    updateMatrixWorld(e) {
        this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
        const t = this.children;
        for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e)
    }
    updateWorldMatrix(e, t) {
        const n = this.parent;
        if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
            const i = this.children;
            for (let s = 0, a = i.length; s < a; s++) i[s].updateWorldMatrix(!1, !0)
        }
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string",
            n = {};
        t && (e = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {}
        }, n.metadata = {
            version: 4.5,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        const i = {};
        i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));

        function s(o, l) {
            return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid
        }
        if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && (i.environment = this.environment.toJSON(e).uuid);
        else if (this.isMesh || this.isLine || this.isPoints) {
            i.geometry = s(e.geometries, this.geometry);
            const o = this.geometry.parameters;
            if (o !== void 0 && o.shapes !== void 0) {
                const l = o.shapes;
                if (Array.isArray(l))
                    for (let c = 0, u = l.length; c < u; c++) {
                        const h = l[c];
                        s(e.shapes, h)
                    } else s(e.shapes, l)
            }
        }
        if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
            if (Array.isArray(this.material)) {
                const o = [];
                for (let l = 0, c = this.material.length; l < c; l++) o.push(s(e.materials, this.material[l]));
                i.material = o
            } else i.material = s(e.materials, this.material);
        if (this.children.length > 0) {
            i.children = [];
            for (let o = 0; o < this.children.length; o++) i.children.push(this.children[o].toJSON(e).object)
        }
        if (this.animations.length > 0) {
            i.animations = [];
            for (let o = 0; o < this.animations.length; o++) {
                const l = this.animations[o];
                i.animations.push(s(e.animations, l))
            }
        }
        if (t) {
            const o = a(e.geometries),
                l = a(e.materials),
                c = a(e.textures),
                u = a(e.images),
                h = a(e.shapes),
                f = a(e.skeletons),
                d = a(e.animations);
            o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), h.length > 0 && (n.shapes = h), f.length > 0 && (n.skeletons = f), d.length > 0 && (n.animations = d)
        }
        return n.object = i, n;

        function a(o) {
            const l = [];
            for (const c in o) {
                const u = o[c];
                delete u.metadata, l.push(u)
            }
            return l
        }
    }
    clone(e) {
        return new this.constructor().copy(this, e)
    }
    copy(e, t = !0) {
        if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
            for (let n = 0; n < e.children.length; n++) {
                const i = e.children[n];
                this.add(i.clone())
            }
        return this
    }
}
Ne.DefaultUp = new A(0, 1, 0);
Ne.DefaultMatrixAutoUpdate = !0;
Ne.prototype.isObject3D = !0;
const Zt = new A,
    mn = new A,
    Qa = new A,
    gn = new A,
    Fi = new A,
    Ni = new A,
    Uc = new A,
    eo = new A,
    to = new A,
    no = new A;
class ct {
    constructor(e = new A, t = new A, n = new A) {
        this.a = e, this.b = t, this.c = n
    }
    static getNormal(e, t, n, i) {
        i.subVectors(n, t), Zt.subVectors(e, t), i.cross(Zt);
        const s = i.lengthSq();
        return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0)
    }
    static getBarycoord(e, t, n, i, s) {
        Zt.subVectors(i, t), mn.subVectors(n, t), Qa.subVectors(e, t);
        const a = Zt.dot(Zt),
            o = Zt.dot(mn),
            l = Zt.dot(Qa),
            c = mn.dot(mn),
            u = mn.dot(Qa),
            h = a * c - o * o;
        if (h === 0) return s.set(-2, -1, -1);
        const f = 1 / h,
            d = (c * l - o * u) * f,
            p = (a * u - o * l) * f;
        return s.set(1 - d - p, p, d)
    }
    static containsPoint(e, t, n, i) {
        return this.getBarycoord(e, t, n, i, gn), gn.x >= 0 && gn.y >= 0 && gn.x + gn.y <= 1
    }
    static getUV(e, t, n, i, s, a, o, l) {
        return this.getBarycoord(e, t, n, i, gn), l.set(0, 0), l.addScaledVector(s, gn.x), l.addScaledVector(a, gn.y), l.addScaledVector(o, gn.z), l
    }
    static isFrontFacing(e, t, n, i) {
        return Zt.subVectors(n, t), mn.subVectors(e, t), Zt.cross(mn).dot(i) < 0
    }
    set(e, t, n) {
        return this.a.copy(e), this.b.copy(t), this.c.copy(n), this
    }
    setFromPointsAndIndices(e, t, n, i) {
        return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this
    }
    setFromAttributeAndIndices(e, t, n, i) {
        return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
    }
    getArea() {
        return Zt.subVectors(this.c, this.b), mn.subVectors(this.a, this.b), Zt.cross(mn).length() * .5
    }
    getMidpoint(e) {
        return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }
    getNormal(e) {
        return ct.getNormal(this.a, this.b, this.c, e)
    }
    getPlane(e) {
        return e.setFromCoplanarPoints(this.a, this.b, this.c)
    }
    getBarycoord(e, t) {
        return ct.getBarycoord(e, this.a, this.b, this.c, t)
    }
    getUV(e, t, n, i, s) {
        return ct.getUV(e, this.a, this.b, this.c, t, n, i, s)
    }
    containsPoint(e) {
        return ct.containsPoint(e, this.a, this.b, this.c)
    }
    isFrontFacing(e) {
        return ct.isFrontFacing(this.a, this.b, this.c, e)
    }
    intersectsBox(e) {
        return e.intersectsTriangle(this)
    }
    closestPointToPoint(e, t) {
        const n = this.a,
            i = this.b,
            s = this.c;
        let a, o;
        Fi.subVectors(i, n), Ni.subVectors(s, n), eo.subVectors(e, n);
        const l = Fi.dot(eo),
            c = Ni.dot(eo);
        if (l <= 0 && c <= 0) return t.copy(n);
        to.subVectors(e, i);
        const u = Fi.dot(to),
            h = Ni.dot(to);
        if (u >= 0 && h <= u) return t.copy(i);
        const f = l * h - u * c;
        if (f <= 0 && l >= 0 && u <= 0) return a = l / (l - u), t.copy(n).addScaledVector(Fi, a);
        no.subVectors(e, s);
        const d = Fi.dot(no),
            p = Ni.dot(no);
        if (p >= 0 && d <= p) return t.copy(s);
        const v = d * c - l * p;
        if (v <= 0 && c >= 0 && p <= 0) return o = c / (c - p), t.copy(n).addScaledVector(Ni, o);
        const y = u * p - d * h;
        if (y <= 0 && h - u >= 0 && d - p >= 0) return Uc.subVectors(s, i), o = (h - u) / (h - u + (d - p)), t.copy(i).addScaledVector(Uc, o);
        const m = 1 / (y + v + f);
        return a = v * m, o = f * m, t.copy(n).addScaledVector(Fi, a).addScaledVector(Ni, o)
    }
    equals(e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
    }
}
let lm = 0;
class ft extends Rn {
    constructor() {
        super();
        Object.defineProperty(this, "id", {
            value: lm++
        }), this.uuid = Bt(), this.name = "", this.type = "Material", this.fog = !0, this.blending = Sr, this.side = xi, this.vertexColors = !1, this.opacity = 1, this.format = yt, this.transparent = !1, this.blendSrc = sc, this.blendDst = ac, this.blendEquation = _i, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = Ia, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = zp, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Ga, this.stencilZFail = Ga, this.stencilZPass = Ga, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0
    }
    get alphaTest() {
        return this._alphaTest
    }
    set alphaTest(e) {
        this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e
    }
    onBuild() {}
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
        return this.onBeforeCompile.toString()
    }
    setValues(e) {
        if (e !== void 0)
            for (const t in e) {
                const n = e[t];
                if (n === void 0) {
                    console.warn("THREE.Material: '" + t + "' parameter is undefined.");
                    continue
                }
                if (t === "shading") {
                    console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = n === Ql;
                    continue
                }
                const i = this[t];
                if (i === void 0) {
                    console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
                    continue
                }
                i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n
            }
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string";
        t && (e = {
            textures: {},
            images: {}
        });
        const n = {
            metadata: {
                version: 4.5,
                type: "Material",
                generator: "Material.toJSON"
            }
        };
        n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenTint && this.sheenTint.isColor && (n.sheenTint = this.sheenTint.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularTint && this.specularTint.isColor && (n.specularTint = this.specularTint.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularTintMap && this.specularTintMap.isTexture && (n.specularTintMap = this.specularTintMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationTint !== void 0 && (n.attenuationTint = this.attenuationTint.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Sr && (n.blending = this.blending), this.side !== xi && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.format !== yt && (n.format = this.format), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);

        function i(s) {
            const a = [];
            for (const o in s) {
                const l = s[o];
                delete l.metadata, a.push(l)
            }
            return a
        }
        if (t) {
            const s = i(e.textures),
                a = i(e.images);
            s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a)
        }
        return n
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.name = e.name, this.fog = e.fog, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.format = e.format, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
        const t = e.clippingPlanes;
        let n = null;
        if (t !== null) {
            const i = t.length;
            n = new Array(i);
            for (let s = 0; s !== i; ++s) n[s] = t[s].clone()
        }
        return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    set needsUpdate(e) {
        e === !0 && this.version++
    }
}
ft.prototype.isMaterial = !0;
const kc = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    },
    Jt = {
        h: 0,
        s: 0,
        l: 0
    },
    Is = {
        h: 0,
        s: 0,
        l: 0
    };

function io(r, e, t) {
    return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r
}

function ro(r) {
    return r < .04045 ? r * .0773993808 : Math.pow(r * .9478672986 + .0521327014, 2.4)
}

function so(r) {
    return r < .0031308 ? r * 12.92 : 1.055 * Math.pow(r, .41666) - .055
}
class ue {
    constructor(e, t, n) {
        return t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n)
    }
    set(e) {
        return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this
    }
    setScalar(e) {
        return this.r = e, this.g = e, this.b = e, this
    }
    setHex(e) {
        return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, this
    }
    setRGB(e, t, n) {
        return this.r = e, this.g = t, this.b = n, this
    }
    setHSL(e, t, n) {
        if (e = Ha(e, 1), t = St(t, 0, 1), n = St(n, 0, 1), t === 0) this.r = this.g = this.b = n;
        else {
            const i = n <= .5 ? n * (1 + t) : n + t - n * t,
                s = 2 * n - i;
            this.r = io(s, i, e + 1 / 3), this.g = io(s, i, e), this.b = io(s, i, e - 1 / 3)
        }
        return this
    }
    setStyle(e) {
        function t(i) {
            i !== void 0 && parseFloat(i) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
        }
        let n;
        if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
            let i;
            const s = n[1],
                a = n[2];
            switch (s) {
                case "rgb":
                case "rgba":
                    if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(i[1], 10)) / 255, this.g = Math.min(255, parseInt(i[2], 10)) / 255, this.b = Math.min(255, parseInt(i[3], 10)) / 255, t(i[4]), this;
                    if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(i[1], 10)) / 100, this.g = Math.min(100, parseInt(i[2], 10)) / 100, this.b = Math.min(100, parseInt(i[3], 10)) / 100, t(i[4]), this;
                    break;
                case "hsl":
                case "hsla":
                    if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
                        const o = parseFloat(i[1]) / 360,
                            l = parseInt(i[2], 10) / 100,
                            c = parseInt(i[3], 10) / 100;
                        return t(i[4]), this.setHSL(o, l, c)
                    }
                    break
            }
        } else if (n = /^\#([A-Fa-f\d]+)$/.exec(e)) {
            const i = n[1],
                s = i.length;
            if (s === 3) return this.r = parseInt(i.charAt(0) + i.charAt(0), 16) / 255, this.g = parseInt(i.charAt(1) + i.charAt(1), 16) / 255, this.b = parseInt(i.charAt(2) + i.charAt(2), 16) / 255, this;
            if (s === 6) return this.r = parseInt(i.charAt(0) + i.charAt(1), 16) / 255, this.g = parseInt(i.charAt(2) + i.charAt(3), 16) / 255, this.b = parseInt(i.charAt(4) + i.charAt(5), 16) / 255, this
        }
        return e && e.length > 0 ? this.setColorName(e) : this
    }
    setColorName(e) {
        const t = kc[e.toLowerCase()];
        return t !== void 0 ? this.setHex(t) : console.warn("THREE.Color: Unknown color " + e), this
    }
    clone() {
        return new this.constructor(this.r, this.g, this.b)
    }
    copy(e) {
        return this.r = e.r, this.g = e.g, this.b = e.b, this
    }
    copyGammaToLinear(e, t = 2) {
        return this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this
    }
    copyLinearToGamma(e, t = 2) {
        const n = t > 0 ? 1 / t : 1;
        return this.r = Math.pow(e.r, n), this.g = Math.pow(e.g, n), this.b = Math.pow(e.b, n), this
    }
    convertGammaToLinear(e) {
        return this.copyGammaToLinear(this, e), this
    }
    convertLinearToGamma(e) {
        return this.copyLinearToGamma(this, e), this
    }
    copySRGBToLinear(e) {
        return this.r = ro(e.r), this.g = ro(e.g), this.b = ro(e.b), this
    }
    copyLinearToSRGB(e) {
        return this.r = so(e.r), this.g = so(e.g), this.b = so(e.b), this
    }
    convertSRGBToLinear() {
        return this.copySRGBToLinear(this), this
    }
    convertLinearToSRGB() {
        return this.copyLinearToSRGB(this), this
    }
    getHex() {
        return this.r * 255 << 16 ^ this.g * 255 << 8 ^ this.b * 255 << 0
    }
    getHexString() {
        return ("000000" + this.getHex().toString(16)).slice(-6)
    }
    getHSL(e) {
        const t = this.r,
            n = this.g,
            i = this.b,
            s = Math.max(t, n, i),
            a = Math.min(t, n, i);
        let o, l;
        const c = (a + s) / 2;
        if (a === s) o = 0, l = 0;
        else {
            const u = s - a;
            switch (l = c <= .5 ? u / (s + a) : u / (2 - s - a), s) {
                case t:
                    o = (n - i) / u + (n < i ? 6 : 0);
                    break;
                case n:
                    o = (i - t) / u + 2;
                    break;
                case i:
                    o = (t - n) / u + 4;
                    break
            }
            o /= 6
        }
        return e.h = o, e.s = l, e.l = c, e
    }
    getStyle() {
        return "rgb(" + (this.r * 255 | 0) + "," + (this.g * 255 | 0) + "," + (this.b * 255 | 0) + ")"
    }
    offsetHSL(e, t, n) {
        return this.getHSL(Jt), Jt.h += e, Jt.s += t, Jt.l += n, this.setHSL(Jt.h, Jt.s, Jt.l), this
    }
    add(e) {
        return this.r += e.r, this.g += e.g, this.b += e.b, this
    }
    addColors(e, t) {
        return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
    }
    addScalar(e) {
        return this.r += e, this.g += e, this.b += e, this
    }
    sub(e) {
        return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this
    }
    multiply(e) {
        return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
    }
    multiplyScalar(e) {
        return this.r *= e, this.g *= e, this.b *= e, this
    }
    lerp(e, t) {
        return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
    }
    lerpColors(e, t, n) {
        return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this
    }
    lerpHSL(e, t) {
        this.getHSL(Jt), e.getHSL(Is);
        const n = Pr(Jt.h, Is.h, t),
            i = Pr(Jt.s, Is.s, t),
            s = Pr(Jt.l, Is.l, t);
        return this.setHSL(n, i, s), this
    }
    equals(e) {
        return e.r === this.r && e.g === this.g && e.b === this.b
    }
    fromArray(e, t = 0) {
        return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this
    }
    toArray(e = [], t = 0) {
        return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
    }
    fromBufferAttribute(e, t) {
        return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), e.normalized === !0 && (this.r /= 255, this.g /= 255, this.b /= 255), this
    }
    toJSON() {
        return this.getHex()
    }
}
ue.NAMES = kc;
ue.prototype.isColor = !0;
ue.prototype.r = 1;
ue.prototype.g = 1;
ue.prototype.b = 1;
class Fn extends ft {
    constructor(e) {
        super();
        this.type = "MeshBasicMaterial", this.color = new ue(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = ps, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this
    }
}
Fn.prototype.isMeshBasicMaterial = !0;
const qe = new A,
    Ds = new K;
class $e {
    constructor(e, t, n) {
        if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n === !0, this.usage = Lr, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0
    }
    onUploadCallback() {}
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    setUsage(e) {
        return this.usage = e, this
    }
    copy(e) {
        return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this
    }
    copyAt(e, t, n) {
        e *= this.itemSize, n *= t.itemSize;
        for (let i = 0, s = this.itemSize; i < s; i++) this.array[e + i] = t.array[n + i];
        return this
    }
    copyArray(e) {
        return this.array.set(e), this
    }
    copyColorsArray(e) {
        const t = this.array;
        let n = 0;
        for (let i = 0, s = e.length; i < s; i++) {
            let a = e[i];
            a === void 0 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), a = new ue), t[n++] = a.r, t[n++] = a.g, t[n++] = a.b
        }
        return this
    }
    copyVector2sArray(e) {
        const t = this.array;
        let n = 0;
        for (let i = 0, s = e.length; i < s; i++) {
            let a = e[i];
            a === void 0 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), a = new K), t[n++] = a.x, t[n++] = a.y
        }
        return this
    }
    copyVector3sArray(e) {
        const t = this.array;
        let n = 0;
        for (let i = 0, s = e.length; i < s; i++) {
            let a = e[i];
            a === void 0 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), a = new A), t[n++] = a.x, t[n++] = a.y, t[n++] = a.z
        }
        return this
    }
    copyVector4sArray(e) {
        const t = this.array;
        let n = 0;
        for (let i = 0, s = e.length; i < s; i++) {
            let a = e[i];
            a === void 0 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), a = new Ge), t[n++] = a.x, t[n++] = a.y, t[n++] = a.z, t[n++] = a.w
        }
        return this
    }
    applyMatrix3(e) {
        if (this.itemSize === 2)
            for (let t = 0, n = this.count; t < n; t++) Ds.fromBufferAttribute(this, t), Ds.applyMatrix3(e), this.setXY(t, Ds.x, Ds.y);
        else if (this.itemSize === 3)
            for (let t = 0, n = this.count; t < n; t++) qe.fromBufferAttribute(this, t), qe.applyMatrix3(e), this.setXYZ(t, qe.x, qe.y, qe.z);
        return this
    }
    applyMatrix4(e) {
        for (let t = 0, n = this.count; t < n; t++) qe.x = this.getX(t), qe.y = this.getY(t), qe.z = this.getZ(t), qe.applyMatrix4(e), this.setXYZ(t, qe.x, qe.y, qe.z);
        return this
    }
    applyNormalMatrix(e) {
        for (let t = 0, n = this.count; t < n; t++) qe.x = this.getX(t), qe.y = this.getY(t), qe.z = this.getZ(t), qe.applyNormalMatrix(e), this.setXYZ(t, qe.x, qe.y, qe.z);
        return this
    }
    transformDirection(e) {
        for (let t = 0, n = this.count; t < n; t++) qe.x = this.getX(t), qe.y = this.getY(t), qe.z = this.getZ(t), qe.transformDirection(e), this.setXYZ(t, qe.x, qe.y, qe.z);
        return this
    }
    set(e, t = 0) {
        return this.array.set(e, t), this
    }
    getX(e) {
        return this.array[e * this.itemSize]
    }
    setX(e, t) {
        return this.array[e * this.itemSize] = t, this
    }
    getY(e) {
        return this.array[e * this.itemSize + 1]
    }
    setY(e, t) {
        return this.array[e * this.itemSize + 1] = t, this
    }
    getZ(e) {
        return this.array[e * this.itemSize + 2]
    }
    setZ(e, t) {
        return this.array[e * this.itemSize + 2] = t, this
    }
    getW(e) {
        return this.array[e * this.itemSize + 3]
    }
    setW(e, t) {
        return this.array[e * this.itemSize + 3] = t, this
    }
    setXY(e, t, n) {
        return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this
    }
    setXYZ(e, t, n, i) {
        return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this
    }
    setXYZW(e, t, n, i, s) {
        return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this
    }
    onUpload(e) {
        return this.onUploadCallback = e, this
    }
    clone() {
        return new this.constructor(this.array, this.itemSize).copy(this)
    }
    toJSON() {
        const e = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.prototype.slice.call(this.array),
            normalized: this.normalized
        };
        return this.name !== "" && (e.name = this.name), this.usage !== Lr && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e
    }
}
$e.prototype.isBufferAttribute = !0;
class ao extends $e {
    constructor(e, t, n) {
        super(new Uint16Array(e), t, n)
    }
}
class Gc extends $e {
    constructor(e, t, n) {
        super(new Uint32Array(e), t, n)
    }
}
class cm extends $e {
    constructor(e, t, n) {
        super(new Uint16Array(e), t, n)
    }
}
cm.prototype.isFloat16BufferAttribute = !0;
class Je extends $e {
    constructor(e, t, n) {
        super(new Float32Array(e), t, n)
    }
}
let um = 0;
const Ut = new ae,
    oo = new Ne,
    Oi = new A,
    Ft = new zt,
    Nr = new zt,
    pt = new A;
class He extends Rn {
    constructor() {
        super();
        Object.defineProperty(this, "id", {
            value: um++
        }), this.uuid = Bt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
            start: 0,
            count: 1 / 0
        }, this.userData = {}
    }
    getIndex() {
        return this.index
    }
    setIndex(e) {
        return Array.isArray(e) ? this.index = new(Ac(e) > 65535 ? Gc : ao)(e, 1) : this.index = e, this
    }
    getAttribute(e) {
        return this.attributes[e]
    }
    setAttribute(e, t) {
        return this.attributes[e] = t, this
    }
    deleteAttribute(e) {
        return delete this.attributes[e], this
    }
    hasAttribute(e) {
        return this.attributes[e] !== void 0
    }
    addGroup(e, t, n = 0) {
        this.groups.push({
            start: e,
            count: t,
            materialIndex: n
        })
    }
    clearGroups() {
        this.groups = []
    }
    setDrawRange(e, t) {
        this.drawRange.start = e, this.drawRange.count = t
    }
    applyMatrix4(e) {
        const t = this.attributes.position;
        t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
        const n = this.attributes.normal;
        if (n !== void 0) {
            const s = new dt().getNormalMatrix(e);
            n.applyNormalMatrix(s), n.needsUpdate = !0
        }
        const i = this.attributes.tangent;
        return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this
    }
    applyQuaternion(e) {
        return Ut.makeRotationFromQuaternion(e), this.applyMatrix4(Ut), this
    }
    rotateX(e) {
        return Ut.makeRotationX(e), this.applyMatrix4(Ut), this
    }
    rotateY(e) {
        return Ut.makeRotationY(e), this.applyMatrix4(Ut), this
    }
    rotateZ(e) {
        return Ut.makeRotationZ(e), this.applyMatrix4(Ut), this
    }
    translate(e, t, n) {
        return Ut.makeTranslation(e, t, n), this.applyMatrix4(Ut), this
    }
    scale(e, t, n) {
        return Ut.makeScale(e, t, n), this.applyMatrix4(Ut), this
    }
    lookAt(e) {
        return oo.lookAt(e), oo.updateMatrix(), this.applyMatrix4(oo.matrix), this
    }
    center() {
        return this.computeBoundingBox(), this.boundingBox.getCenter(Oi).negate(), this.translate(Oi.x, Oi.y, Oi.z), this
    }
    setFromPoints(e) {
        const t = [];
        for (let n = 0, i = e.length; n < i; n++) {
            const s = e[n];
            t.push(s.x, s.y, s.z || 0)
        }
        return this.setAttribute("position", new Je(t, 3)), this
    }
    computeBoundingBox() {
        this.boundingBox === null && (this.boundingBox = new zt);
        const e = this.attributes.position,
            t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(new A(-1 / 0, -1 / 0, -1 / 0), new A(1 / 0, 1 / 0, 1 / 0));
            return
        }
        if (e !== void 0) {
            if (this.boundingBox.setFromBufferAttribute(e), t)
                for (let n = 0, i = t.length; n < i; n++) {
                    const s = t[n];
                    Ft.setFromBufferAttribute(s), this.morphTargetsRelative ? (pt.addVectors(this.boundingBox.min, Ft.min), this.boundingBox.expandByPoint(pt), pt.addVectors(this.boundingBox.max, Ft.max), this.boundingBox.expandByPoint(pt)) : (this.boundingBox.expandByPoint(Ft.min), this.boundingBox.expandByPoint(Ft.max))
                }
        } else this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    }
    computeBoundingSphere() {
        this.boundingSphere === null && (this.boundingSphere = new oi);
        const e = this.attributes.position,
            t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new A, 1 / 0);
            return
        }
        if (e) {
            const n = this.boundingSphere.center;
            if (Ft.setFromBufferAttribute(e), t)
                for (let s = 0, a = t.length; s < a; s++) {
                    const o = t[s];
                    Nr.setFromBufferAttribute(o), this.morphTargetsRelative ? (pt.addVectors(Ft.min, Nr.min), Ft.expandByPoint(pt), pt.addVectors(Ft.max, Nr.max), Ft.expandByPoint(pt)) : (Ft.expandByPoint(Nr.min), Ft.expandByPoint(Nr.max))
                }
            Ft.getCenter(n);
            let i = 0;
            for (let s = 0, a = e.count; s < a; s++) pt.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(pt));
            if (t)
                for (let s = 0, a = t.length; s < a; s++) {
                    const o = t[s],
                        l = this.morphTargetsRelative;
                    for (let c = 0, u = o.count; c < u; c++) pt.fromBufferAttribute(o, c), l && (Oi.fromBufferAttribute(e, c), pt.add(Oi)), i = Math.max(i, n.distanceToSquared(pt))
                }
            this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
        }
    }
    computeTangents() {
        const e = this.index,
            t = this.attributes;
        if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
            console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            return
        }
        const n = e.array,
            i = t.position.array,
            s = t.normal.array,
            a = t.uv.array,
            o = i.length / 3;
        t.tangent === void 0 && this.setAttribute("tangent", new $e(new Float32Array(4 * o), 4));
        const l = t.tangent.array,
            c = [],
            u = [];
        for (let P = 0; P < o; P++) c[P] = new A, u[P] = new A;
        const h = new A,
            f = new A,
            d = new A,
            p = new K,
            v = new K,
            y = new K,
            m = new A,
            g = new A;

        function x(P, R, j) {
            h.fromArray(i, P * 3), f.fromArray(i, R * 3), d.fromArray(i, j * 3), p.fromArray(a, P * 2), v.fromArray(a, R * 2), y.fromArray(a, j * 2), f.sub(h), d.sub(h), v.sub(p), y.sub(p);
            const I = 1 / (v.x * y.y - y.x * v.y);
            !isFinite(I) || (m.copy(f).multiplyScalar(y.y).addScaledVector(d, -v.y).multiplyScalar(I), g.copy(d).multiplyScalar(v.x).addScaledVector(f, -y.x).multiplyScalar(I), c[P].add(m), c[R].add(m), c[j].add(m), u[P].add(g), u[R].add(g), u[j].add(g))
        }
        let _ = this.groups;
        _.length === 0 && (_ = [{
            start: 0,
            count: n.length
        }]);
        for (let P = 0, R = _.length; P < R; ++P) {
            const j = _[P],
                I = j.start,
                F = j.count;
            for (let B = I, N = I + F; B < N; B += 3) x(n[B + 0], n[B + 1], n[B + 2])
        }
        const w = new A,
            T = new A,
            M = new A,
            L = new A;

        function H(P) {
            M.fromArray(s, P * 3), L.copy(M);
            const R = c[P];
            w.copy(R), w.sub(M.multiplyScalar(M.dot(R))).normalize(), T.crossVectors(L, R);
            const I = T.dot(u[P]) < 0 ? -1 : 1;
            l[P * 4] = w.x, l[P * 4 + 1] = w.y, l[P * 4 + 2] = w.z, l[P * 4 + 3] = I
        }
        for (let P = 0, R = _.length; P < R; ++P) {
            const j = _[P],
                I = j.start,
                F = j.count;
            for (let B = I, N = I + F; B < N; B += 3) H(n[B + 0]), H(n[B + 1]), H(n[B + 2])
        }
    }
    computeVertexNormals() {
        const e = this.index,
            t = this.getAttribute("position");
        if (t !== void 0) {
            let n = this.getAttribute("normal");
            if (n === void 0) n = new $e(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
            else
                for (let f = 0, d = n.count; f < d; f++) n.setXYZ(f, 0, 0, 0);
            const i = new A,
                s = new A,
                a = new A,
                o = new A,
                l = new A,
                c = new A,
                u = new A,
                h = new A;
            if (e)
                for (let f = 0, d = e.count; f < d; f += 3) {
                    const p = e.getX(f + 0),
                        v = e.getX(f + 1),
                        y = e.getX(f + 2);
                    i.fromBufferAttribute(t, p), s.fromBufferAttribute(t, v), a.fromBufferAttribute(t, y), u.subVectors(a, s), h.subVectors(i, s), u.cross(h), o.fromBufferAttribute(n, p), l.fromBufferAttribute(n, v), c.fromBufferAttribute(n, y), o.add(u), l.add(u), c.add(u), n.setXYZ(p, o.x, o.y, o.z), n.setXYZ(v, l.x, l.y, l.z), n.setXYZ(y, c.x, c.y, c.z)
                } else
                    for (let f = 0, d = t.count; f < d; f += 3) i.fromBufferAttribute(t, f + 0), s.fromBufferAttribute(t, f + 1), a.fromBufferAttribute(t, f + 2), u.subVectors(a, s), h.subVectors(i, s), u.cross(h), n.setXYZ(f + 0, u.x, u.y, u.z), n.setXYZ(f + 1, u.x, u.y, u.z), n.setXYZ(f + 2, u.x, u.y, u.z);
            this.normalizeNormals(), n.needsUpdate = !0
        }
    }
    merge(e, t) {
        if (!(e && e.isBufferGeometry)) {
            console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
            return
        }
        t === void 0 && (t = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
        const n = this.attributes;
        for (const i in n) {
            if (e.attributes[i] === void 0) continue;
            const a = n[i].array,
                o = e.attributes[i],
                l = o.array,
                c = o.itemSize * t,
                u = Math.min(l.length, a.length - c);
            for (let h = 0, f = c; h < u; h++, f++) a[f] = l[h]
        }
        return this
    }
    normalizeNormals() {
        const e = this.attributes.normal;
        for (let t = 0, n = e.count; t < n; t++) pt.fromBufferAttribute(e, t), pt.normalize(), e.setXYZ(t, pt.x, pt.y, pt.z)
    }
    toNonIndexed() {
        function e(o, l) {
            const c = o.array,
                u = o.itemSize,
                h = o.normalized,
                f = new c.constructor(l.length * u);
            let d = 0,
                p = 0;
            for (let v = 0, y = l.length; v < y; v++) {
                o.isInterleavedBufferAttribute ? d = l[v] * o.data.stride + o.offset : d = l[v] * u;
                for (let m = 0; m < u; m++) f[p++] = c[d++]
            }
            return new $e(f, u, h)
        }
        if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
        const t = new He,
            n = this.index.array,
            i = this.attributes;
        for (const o in i) {
            const l = i[o],
                c = e(l, n);
            t.setAttribute(o, c)
        }
        const s = this.morphAttributes;
        for (const o in s) {
            const l = [],
                c = s[o];
            for (let u = 0, h = c.length; u < h; u++) {
                const f = c[u],
                    d = e(f, n);
                l.push(d)
            }
            t.morphAttributes[o] = l
        }
        t.morphTargetsRelative = this.morphTargetsRelative;
        const a = this.groups;
        for (let o = 0, l = a.length; o < l; o++) {
            const c = a[o];
            t.addGroup(c.start, c.count, c.materialIndex)
        }
        return t
    }
    toJSON() {
        const e = {
            metadata: {
                version: 4.5,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
            const l = this.parameters;
            for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
            return e
        }
        e.data = {
            attributes: {}
        };
        const t = this.index;
        t !== null && (e.data.index = {
            type: t.array.constructor.name,
            array: Array.prototype.slice.call(t.array)
        });
        const n = this.attributes;
        for (const l in n) {
            const c = n[l];
            e.data.attributes[l] = c.toJSON(e.data)
        }
        const i = {};
        let s = !1;
        for (const l in this.morphAttributes) {
            const c = this.morphAttributes[l],
                u = [];
            for (let h = 0, f = c.length; h < f; h++) {
                const d = c[h];
                u.push(d.toJSON(e.data))
            }
            u.length > 0 && (i[l] = u, s = !0)
        }
        s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
        const a = this.groups;
        a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
        const o = this.boundingSphere;
        return o !== null && (e.data.boundingSphere = {
            center: o.center.toArray(),
            radius: o.radius
        }), e
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
        const t = {};
        this.name = e.name;
        const n = e.index;
        n !== null && this.setIndex(n.clone(t));
        const i = e.attributes;
        for (const c in i) {
            const u = i[c];
            this.setAttribute(c, u.clone(t))
        }
        const s = e.morphAttributes;
        for (const c in s) {
            const u = [],
                h = s[c];
            for (let f = 0, d = h.length; f < d; f++) u.push(h[f].clone(t));
            this.morphAttributes[c] = u
        }
        this.morphTargetsRelative = e.morphTargetsRelative;
        const a = e.groups;
        for (let c = 0, u = a.length; c < u; c++) {
            const h = a[c];
            this.addGroup(h.start, h.count, h.materialIndex)
        }
        const o = e.boundingBox;
        o !== null && (this.boundingBox = o.clone());
        const l = e.boundingSphere;
        return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)), this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
He.prototype.isBufferGeometry = !0;
const Hc = new ae,
    Bi = new li,
    lo = new oi,
    Nn = new A,
    On = new A,
    Bn = new A,
    co = new A,
    uo = new A,
    ho = new A,
    Fs = new A,
    Ns = new A,
    Os = new A,
    Bs = new K,
    zs = new K,
    Us = new K,
    fo = new A,
    ks = new A;
class _t extends Ne {
    constructor(e = new He, t = new Fn) {
        super();
        this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets()
    }
    copy(e) {
        return super.copy(e), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this
    }
    updateMorphTargets() {
        const e = this.geometry;
        if (e.isBufferGeometry) {
            const t = e.morphAttributes,
                n = Object.keys(t);
            if (n.length > 0) {
                const i = t[n[0]];
                if (i !== void 0) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for (let s = 0, a = i.length; s < a; s++) {
                        const o = i[s].name || String(s);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s
                    }
                }
            }
        } else {
            const t = e.morphTargets;
            t !== void 0 && t.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
        }
    }
    raycast(e, t) {
        const n = this.geometry,
            i = this.material,
            s = this.matrixWorld;
        if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), lo.copy(n.boundingSphere), lo.applyMatrix4(s), e.ray.intersectsSphere(lo) === !1) || (Hc.copy(s).invert(), Bi.copy(e.ray).applyMatrix4(Hc), n.boundingBox !== null && Bi.intersectsBox(n.boundingBox) === !1)) return;
        let a;
        if (n.isBufferGeometry) {
            const o = n.index,
                l = n.attributes.position,
                c = n.morphAttributes.position,
                u = n.morphTargetsRelative,
                h = n.attributes.uv,
                f = n.attributes.uv2,
                d = n.groups,
                p = n.drawRange;
            if (o !== null)
                if (Array.isArray(i))
                    for (let v = 0, y = d.length; v < y; v++) {
                        const m = d[v],
                            g = i[m.materialIndex],
                            x = Math.max(m.start, p.start),
                            _ = Math.min(o.count, Math.min(m.start + m.count, p.start + p.count));
                        for (let w = x, T = _; w < T; w += 3) {
                            const M = o.getX(w),
                                L = o.getX(w + 1),
                                H = o.getX(w + 2);
                            a = Gs(this, g, e, Bi, l, c, u, h, f, M, L, H), a && (a.faceIndex = Math.floor(w / 3), a.face.materialIndex = m.materialIndex, t.push(a))
                        }
                    } else {
                        const v = Math.max(0, p.start),
                            y = Math.min(o.count, p.start + p.count);
                        for (let m = v, g = y; m < g; m += 3) {
                            const x = o.getX(m),
                                _ = o.getX(m + 1),
                                w = o.getX(m + 2);
                            a = Gs(this, i, e, Bi, l, c, u, h, f, x, _, w), a && (a.faceIndex = Math.floor(m / 3), t.push(a))
                        }
                    } else if (l !== void 0)
                        if (Array.isArray(i))
                            for (let v = 0, y = d.length; v < y; v++) {
                                const m = d[v],
                                    g = i[m.materialIndex],
                                    x = Math.max(m.start, p.start),
                                    _ = Math.min(l.count, Math.min(m.start + m.count, p.start + p.count));
                                for (let w = x, T = _; w < T; w += 3) {
                                    const M = w,
                                        L = w + 1,
                                        H = w + 2;
                                    a = Gs(this, g, e, Bi, l, c, u, h, f, M, L, H), a && (a.faceIndex = Math.floor(w / 3), a.face.materialIndex = m.materialIndex, t.push(a))
                                }
                            } else {
                                const v = Math.max(0, p.start),
                                    y = Math.min(l.count, p.start + p.count);
                                for (let m = v, g = y; m < g; m += 3) {
                                    const x = m,
                                        _ = m + 1,
                                        w = m + 2;
                                    a = Gs(this, i, e, Bi, l, c, u, h, f, x, _, w), a && (a.faceIndex = Math.floor(m / 3), t.push(a))
                                }
                            }
        } else n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
    }
}
_t.prototype.isMesh = !0;

function hm(r, e, t, n, i, s, a, o) {
    let l;
    if (e.side === ut ? l = n.intersectTriangle(a, s, i, !0, o) : l = n.intersectTriangle(i, s, a, e.side !== ti, o), l === null) return null;
    ks.copy(o), ks.applyMatrix4(r.matrixWorld);
    const c = t.ray.origin.distanceTo(ks);
    return c < t.near || c > t.far ? null : {
        distance: c,
        point: ks.clone(),
        object: r
    }
}

function Gs(r, e, t, n, i, s, a, o, l, c, u, h) {
    Nn.fromBufferAttribute(i, c), On.fromBufferAttribute(i, u), Bn.fromBufferAttribute(i, h);
    const f = r.morphTargetInfluences;
    if (s && f) {
        Fs.set(0, 0, 0), Ns.set(0, 0, 0), Os.set(0, 0, 0);
        for (let p = 0, v = s.length; p < v; p++) {
            const y = f[p],
                m = s[p];
            y !== 0 && (co.fromBufferAttribute(m, c), uo.fromBufferAttribute(m, u), ho.fromBufferAttribute(m, h), a ? (Fs.addScaledVector(co, y), Ns.addScaledVector(uo, y), Os.addScaledVector(ho, y)) : (Fs.addScaledVector(co.sub(Nn), y), Ns.addScaledVector(uo.sub(On), y), Os.addScaledVector(ho.sub(Bn), y)))
        }
        Nn.add(Fs), On.add(Ns), Bn.add(Os)
    }
    r.isSkinnedMesh && (r.boneTransform(c, Nn), r.boneTransform(u, On), r.boneTransform(h, Bn));
    const d = hm(r, e, t, n, Nn, On, Bn, fo);
    if (d) {
        o && (Bs.fromBufferAttribute(o, c), zs.fromBufferAttribute(o, u), Us.fromBufferAttribute(o, h), d.uv = ct.getUV(fo, Nn, On, Bn, Bs, zs, Us, new K)), l && (Bs.fromBufferAttribute(l, c), zs.fromBufferAttribute(l, u), Us.fromBufferAttribute(l, h), d.uv2 = ct.getUV(fo, Nn, On, Bn, Bs, zs, Us, new K));
        const p = {
            a: c,
            b: u,
            c: h,
            normal: new A,
            materialIndex: 0
        };
        ct.getNormal(Nn, On, Bn, p.normal), d.face = p
    }
    return d
}
class Or extends He {
    constructor(e = 1, t = 1, n = 1, i = 1, s = 1, a = 1) {
        super();
        this.type = "BoxGeometry", this.parameters = {
            width: e,
            height: t,
            depth: n,
            widthSegments: i,
            heightSegments: s,
            depthSegments: a
        };
        const o = this;
        i = Math.floor(i), s = Math.floor(s), a = Math.floor(a);
        const l = [],
            c = [],
            u = [],
            h = [];
        let f = 0,
            d = 0;
        p("z", "y", "x", -1, -1, n, t, e, a, s, 0), p("z", "y", "x", 1, -1, n, t, -e, a, s, 1), p("x", "z", "y", 1, 1, e, n, t, i, a, 2), p("x", "z", "y", 1, -1, e, n, -t, i, a, 3), p("x", "y", "z", 1, -1, e, t, n, i, s, 4), p("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(l), this.setAttribute("position", new Je(c, 3)), this.setAttribute("normal", new Je(u, 3)), this.setAttribute("uv", new Je(h, 2));

        function p(v, y, m, g, x, _, w, T, M, L, H) {
            const P = _ / M,
                R = w / L,
                j = _ / 2,
                I = w / 2,
                F = T / 2,
                B = M + 1,
                N = L + 1;
            let O = 0,
                Y = 0;
            const re = new A;
            for (let he = 0; he < N; he++) {
                const Q = he * R - I;
                for (let ge = 0; ge < B; ge++) {
                    const X = ge * P - j;
                    re[v] = X * g, re[y] = Q * x, re[m] = F, c.push(re.x, re.y, re.z), re[v] = 0, re[y] = 0, re[m] = T > 0 ? 1 : -1, u.push(re.x, re.y, re.z), h.push(ge / M), h.push(1 - he / L), O += 1
                }
            }
            for (let he = 0; he < L; he++)
                for (let Q = 0; Q < M; Q++) {
                    const ge = f + Q + B * he,
                        X = f + Q + B * (he + 1),
                        J = f + (Q + 1) + B * (he + 1),
                        se = f + (Q + 1) + B * he;
                    l.push(ge, X, se), l.push(X, J, se), Y += 6
                }
            o.addGroup(d, Y, H), d += Y, f += O
        }
    }
    static fromJSON(e) {
        return new Or(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments)
    }
}

function zi(r) {
    const e = {};
    for (const t in r) {
        e[t] = {};
        for (const n in r[t]) {
            const i = r[t][n];
            i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i
        }
    }
    return e
}

function Mt(r) {
    const e = {};
    for (let t = 0; t < r.length; t++) {
        const n = zi(r[t]);
        for (const i in n) e[i] = n[i]
    }
    return e
}
const fm = {
    clone: zi,
    merge: Mt
};
var dm = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
    pm = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class ci extends ft {
    constructor(e) {
        super();
        this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = dm, this.fragmentShader = pm, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        }, this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && (e.attributes !== void 0 && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e))
    }
    copy(e) {
        return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = zi(e.uniforms), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        t.glslVersion = this.glslVersion, t.uniforms = {};
        for (const i in this.uniforms) {
            const a = this.uniforms[i].value;
            a && a.isTexture ? t.uniforms[i] = {
                type: "t",
                value: a.toJSON(e).uuid
            } : a && a.isColor ? t.uniforms[i] = {
                type: "c",
                value: a.getHex()
            } : a && a.isVector2 ? t.uniforms[i] = {
                type: "v2",
                value: a.toArray()
            } : a && a.isVector3 ? t.uniforms[i] = {
                type: "v3",
                value: a.toArray()
            } : a && a.isVector4 ? t.uniforms[i] = {
                type: "v4",
                value: a.toArray()
            } : a && a.isMatrix3 ? t.uniforms[i] = {
                type: "m3",
                value: a.toArray()
            } : a && a.isMatrix4 ? t.uniforms[i] = {
                type: "m4",
                value: a.toArray()
            } : t.uniforms[i] = {
                value: a
            }
        }
        Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
        const n = {};
        for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
        return Object.keys(n).length > 0 && (t.extensions = n), t
    }
}
ci.prototype.isShaderMaterial = !0;
class po extends Ne {
    constructor() {
        super();
        this.type = "Camera", this.matrixWorldInverse = new ae, this.projectionMatrix = new ae, this.projectionMatrixInverse = new ae
    }
    copy(e, t) {
        return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this
    }
    getWorldDirection(e) {
        this.updateWorldMatrix(!0, !1);
        const t = this.matrixWorld.elements;
        return e.set(-t[8], -t[9], -t[10]).normalize()
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    updateWorldMatrix(e, t) {
        super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
po.prototype.isCamera = !0;
class wt extends po {
    constructor(e = 50, t = 1, n = .1, i = 2e3) {
        super();
        this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
    }
    copy(e, t) {
        return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this
    }
    setFocalLength(e) {
        const t = .5 * this.getFilmHeight() / e;
        this.fov = Cr * 2 * Math.atan(t), this.updateProjectionMatrix()
    }
    getFocalLength() {
        const e = Math.tan(Rr * .5 * this.fov);
        return .5 * this.getFilmHeight() / e
    }
    getEffectiveFOV() {
        return Cr * 2 * Math.atan(Math.tan(Rr * .5 * this.fov) / this.zoom)
    }
    getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1)
    }
    getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1)
    }
    setViewOffset(e, t, n, i, s, a) {
        this.aspect = e / t, this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix()
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const e = this.near;
        let t = e * Math.tan(Rr * .5 * this.fov) / this.zoom,
            n = 2 * t,
            i = this.aspect * n,
            s = -.5 * i;
        const a = this.view;
        if (this.view !== null && this.view.enabled) {
            const l = a.fullWidth,
                c = a.fullHeight;
            s += a.offsetX * i / l, t -= a.offsetY * n / c, i *= a.width / l, n *= a.height / c
        }
        const o = this.filmOffset;
        o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t
    }
}
wt.prototype.isPerspectiveCamera = !0;
const Ui = 90,
    ki = 1;
class mo extends Ne {
    constructor(e, t, n) {
        super();
        if (this.type = "CubeCamera", n.isWebGLCubeRenderTarget !== !0) {
            console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
            return
        }
        this.renderTarget = n;
        const i = new wt(Ui, ki, e, t);
        i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new A(1, 0, 0)), this.add(i);
        const s = new wt(Ui, ki, e, t);
        s.layers = this.layers, s.up.set(0, -1, 0), s.lookAt(new A(-1, 0, 0)), this.add(s);
        const a = new wt(Ui, ki, e, t);
        a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(new A(0, 1, 0)), this.add(a);
        const o = new wt(Ui, ki, e, t);
        o.layers = this.layers, o.up.set(0, 0, -1), o.lookAt(new A(0, -1, 0)), this.add(o);
        const l = new wt(Ui, ki, e, t);
        l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new A(0, 0, 1)), this.add(l);
        const c = new wt(Ui, ki, e, t);
        c.layers = this.layers, c.up.set(0, -1, 0), c.lookAt(new A(0, 0, -1)), this.add(c)
    }
    update(e, t) {
        this.parent === null && this.updateMatrixWorld();
        const n = this.renderTarget,
            [i, s, a, o, l, c] = this.children,
            u = e.xr.enabled,
            h = e.getRenderTarget();
        e.xr.enabled = !1;
        const f = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, a), e.setRenderTarget(n, 3), e.render(t, o), e.setRenderTarget(n, 4), e.render(t, l), n.texture.generateMipmaps = f, e.setRenderTarget(n, 5), e.render(t, c), e.setRenderTarget(h), e.xr.enabled = u
    }
}
class Hs extends it {
    constructor(e, t, n, i, s, a, o, l, c, u) {
        e = e !== void 0 ? e : [], t = t !== void 0 ? t : ms;
        super(e, t, n, i, s, a, o, l, c, u);
        this.flipY = !1
    }
    get images() {
        return this.image
    }
    set images(e) {
        this.image = e
    }
}
Hs.prototype.isCubeTexture = !0;
class Vc extends en {
    constructor(e, t, n) {
        Number.isInteger(t) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), t = n);
        super(e, e, t);
        t = t || {}, this.texture = new Hs(void 0, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Lt, this.texture._needsFlipEnvMap = !1
    }
    fromEquirectangularTexture(e, t) {
        this.texture.type = t.type, this.texture.format = yt, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
        const n = {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
                fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
            },
            i = new Or(5, 5, 5),
            s = new ci({
                name: "CubemapFromEquirect",
                uniforms: zi(n.uniforms),
                vertexShader: n.vertexShader,
                fragmentShader: n.fragmentShader,
                side: ut,
                blending: En
            });
        s.uniforms.tEquirect.value = t;
        const a = new _t(i, s),
            o = t.minFilter;
        return t.minFilter === Mi && (t.minFilter = Lt), new mo(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this
    }
    clear(e, t, n, i) {
        const s = e.getRenderTarget();
        for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, i);
        e.setRenderTarget(s)
    }
}
Vc.prototype.isWebGLCubeRenderTarget = !0;
const go = new A,
    mm = new A,
    gm = new dt;
class vn {
    constructor(e = new A(1, 0, 0), t = 0) {
        this.normal = e, this.constant = t
    }
    set(e, t) {
        return this.normal.copy(e), this.constant = t, this
    }
    setComponents(e, t, n, i) {
        return this.normal.set(e, t, n), this.constant = i, this
    }
    setFromNormalAndCoplanarPoint(e, t) {
        return this.normal.copy(e), this.constant = -t.dot(this.normal), this
    }
    setFromCoplanarPoints(e, t, n) {
        const i = go.subVectors(n, t).cross(mm.subVectors(e, t)).normalize();
        return this.setFromNormalAndCoplanarPoint(i, e), this
    }
    copy(e) {
        return this.normal.copy(e.normal), this.constant = e.constant, this
    }
    normalize() {
        const e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e), this.constant *= e, this
    }
    negate() {
        return this.constant *= -1, this.normal.negate(), this
    }
    distanceToPoint(e) {
        return this.normal.dot(e) + this.constant
    }
    distanceToSphere(e) {
        return this.distanceToPoint(e.center) - e.radius
    }
    projectPoint(e, t) {
        return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
    }
    intersectLine(e, t) {
        const n = e.delta(go),
            i = this.normal.dot(n);
        if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
        const s = -(e.start.dot(this.normal) + this.constant) / i;
        return s < 0 || s > 1 ? null : t.copy(n).multiplyScalar(s).add(e.start)
    }
    intersectsLine(e) {
        const t = this.distanceToPoint(e.start),
            n = this.distanceToPoint(e.end);
        return t < 0 && n > 0 || n < 0 && t > 0
    }
    intersectsBox(e) {
        return e.intersectsPlane(this)
    }
    intersectsSphere(e) {
        return e.intersectsPlane(this)
    }
    coplanarPoint(e) {
        return e.copy(this.normal).multiplyScalar(-this.constant)
    }
    applyMatrix4(e, t) {
        const n = t || gm.getNormalMatrix(e),
            i = this.coplanarPoint(go).applyMatrix4(e),
            s = this.normal.applyMatrix3(n).normalize();
        return this.constant = -i.dot(s), this
    }
    translate(e) {
        return this.constant -= e.dot(this.normal), this
    }
    equals(e) {
        return e.normal.equals(this.normal) && e.constant === this.constant
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
vn.prototype.isPlane = !0;
const Gi = new oi,
    Vs = new A;
class Ws {
    constructor(e = new vn, t = new vn, n = new vn, i = new vn, s = new vn, a = new vn) {
        this.planes = [e, t, n, i, s, a]
    }
    set(e, t, n, i, s, a) {
        const o = this.planes;
        return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(s), o[5].copy(a), this
    }
    copy(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
        return this
    }
    setFromProjectionMatrix(e) {
        const t = this.planes,
            n = e.elements,
            i = n[0],
            s = n[1],
            a = n[2],
            o = n[3],
            l = n[4],
            c = n[5],
            u = n[6],
            h = n[7],
            f = n[8],
            d = n[9],
            p = n[10],
            v = n[11],
            y = n[12],
            m = n[13],
            g = n[14],
            x = n[15];
        return t[0].setComponents(o - i, h - l, v - f, x - y).normalize(), t[1].setComponents(o + i, h + l, v + f, x + y).normalize(), t[2].setComponents(o + s, h + c, v + d, x + m).normalize(), t[3].setComponents(o - s, h - c, v - d, x - m).normalize(), t[4].setComponents(o - a, h - u, v - p, x - g).normalize(), t[5].setComponents(o + a, h + u, v + p, x + g).normalize(), this
    }
    intersectsObject(e) {
        const t = e.geometry;
        return t.boundingSphere === null && t.computeBoundingSphere(), Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(Gi)
    }
    intersectsSprite(e) {
        return Gi.center.set(0, 0, 0), Gi.radius = .7071067811865476, Gi.applyMatrix4(e.matrixWorld), this.intersectsSphere(Gi)
    }
    intersectsSphere(e) {
        const t = this.planes,
            n = e.center,
            i = -e.radius;
        for (let s = 0; s < 6; s++)
            if (t[s].distanceToPoint(n) < i) return !1;
        return !0
    }
    intersectsBox(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++) {
            const i = t[n];
            if (Vs.x = i.normal.x > 0 ? e.max.x : e.min.x, Vs.y = i.normal.y > 0 ? e.max.y : e.min.y, Vs.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Vs) < 0) return !1
        }
        return !0
    }
    containsPoint(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++)
            if (t[n].distanceToPoint(e) < 0) return !1;
        return !0
    }
    clone() {
        return new this.constructor().copy(this)
    }
}

function Wc() {
    let r = null,
        e = !1,
        t = null,
        n = null;

    function i(s, a) {
        t(s, a), n = r.requestAnimationFrame(i)
    }
    return {
        start: function() {
            e !== !0 && t !== null && (n = r.requestAnimationFrame(i), e = !0)
        },
        stop: function() {
            r.cancelAnimationFrame(n), e = !1
        },
        setAnimationLoop: function(s) {
            t = s
        },
        setContext: function(s) {
            r = s
        }
    }
}

function vm(r, e) {
    const t = e.isWebGL2,
        n = new WeakMap;

    function i(c, u) {
        const h = c.array,
            f = c.usage,
            d = r.createBuffer();
        r.bindBuffer(u, d), r.bufferData(u, h, f), c.onUploadCallback();
        let p = 5126;
        return h instanceof Float32Array ? p = 5126 : h instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : h instanceof Uint16Array ? c.isFloat16BufferAttribute ? t ? p = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : p = 5123 : h instanceof Int16Array ? p = 5122 : h instanceof Uint32Array ? p = 5125 : h instanceof Int32Array ? p = 5124 : h instanceof Int8Array ? p = 5120 : (h instanceof Uint8Array || h instanceof Uint8ClampedArray) && (p = 5121), {
            buffer: d,
            type: p,
            bytesPerElement: h.BYTES_PER_ELEMENT,
            version: c.version
        }
    }

    function s(c, u, h) {
        const f = u.array,
            d = u.updateRange;
        r.bindBuffer(h, c), d.count === -1 ? r.bufferSubData(h, 0, f) : (t ? r.bufferSubData(h, d.offset * f.BYTES_PER_ELEMENT, f, d.offset, d.count) : r.bufferSubData(h, d.offset * f.BYTES_PER_ELEMENT, f.subarray(d.offset, d.offset + d.count)), d.count = -1)
    }

    function a(c) {
        return c.isInterleavedBufferAttribute && (c = c.data), n.get(c)
    }

    function o(c) {
        c.isInterleavedBufferAttribute && (c = c.data);
        const u = n.get(c);
        u && (r.deleteBuffer(u.buffer), n.delete(c))
    }

    function l(c, u) {
        if (c.isGLBufferAttribute) {
            const f = n.get(c);
            (!f || f.version < c.version) && n.set(c, {
                buffer: c.buffer,
                type: c.type,
                bytesPerElement: c.elementSize,
                version: c.version
            });
            return
        }
        c.isInterleavedBufferAttribute && (c = c.data);
        const h = n.get(c);
        h === void 0 ? n.set(c, i(c, u)) : h.version < c.version && (s(h.buffer, c, u), h.version = c.version)
    }
    return {
        get: a,
        remove: o,
        update: l
    }
}
class vo extends He {
    constructor(e = 1, t = 1, n = 1, i = 1) {
        super();
        this.type = "PlaneGeometry", this.parameters = {
            width: e,
            height: t,
            widthSegments: n,
            heightSegments: i
        };
        const s = e / 2,
            a = t / 2,
            o = Math.floor(n),
            l = Math.floor(i),
            c = o + 1,
            u = l + 1,
            h = e / o,
            f = t / l,
            d = [],
            p = [],
            v = [],
            y = [];
        for (let m = 0; m < u; m++) {
            const g = m * f - a;
            for (let x = 0; x < c; x++) {
                const _ = x * h - s;
                p.push(_, -g, 0), v.push(0, 0, 1), y.push(x / o), y.push(1 - m / l)
            }
        }
        for (let m = 0; m < l; m++)
            for (let g = 0; g < o; g++) {
                const x = g + c * m,
                    _ = g + c * (m + 1),
                    w = g + 1 + c * (m + 1),
                    T = g + 1 + c * m;
                d.push(x, _, T), d.push(_, w, T)
            }
        this.setIndex(d), this.setAttribute("position", new Je(p, 3)), this.setAttribute("normal", new Je(v, 3)), this.setAttribute("uv", new Je(y, 2))
    }
    static fromJSON(e) {
        return new vo(e.width, e.height, e.widthSegments, e.heightSegments)
    }
}
var ym = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
    xm = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
    _m = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
    Mm = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
    wm = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
    bm = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
    Sm = "vec3 transformed = vec3( position );",
    Tm = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
    Em = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenTint, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenTint * ( D * V );
}
#endif`,
    Am = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
    Lm = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
    Rm = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
    Cm = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
    Pm = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
    Im = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
    Dm = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
    Fm = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
    Nm = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
    Om = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,
    Bm = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
    zm = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
    Um = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
    km = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
    Gm = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
    Hm = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
    Vm = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
    Wm = `
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,
    Xm = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
    jm = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
    qm = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
    Ym = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
    Zm = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
    Jm = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
    Km = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
    $m = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
    Qm = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
    eg = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,
    tg = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
    ng = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
    ig = `vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,
    rg = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
    sg = `#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,
    ag = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
    og = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,
    lg = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
    cg = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,
    ug = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularTintFactor = specularTint;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARTINTMAP
			specularTintFactor *= specularTintMapTexelToLinear( texture2D( specularTintMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularTintFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularTintFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenTint = sheenTint;
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
#endif`,
    hg = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenTint;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenTint, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
    fg = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
    dg = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
    pg = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
    mg = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
    gg = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
    vg = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
    yg = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
    xg = `#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,
    _g = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
    Mg = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
    wg = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
    bg = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
    Sg = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
    Tg = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
    Eg = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
    Ag = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
    Lg = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,
    Rg = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
    Cg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
    Pg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
    Ig = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
    Dg = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,
    Fg = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
    Ng = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
    Og = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
    Bg = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
    zg = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,
    Ug = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
    kg = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
    Gg = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
    Hg = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
    Vg = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
    Wg = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
    Xg = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
    jg = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
    qg = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,
    Yg = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
    Zg = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
    Jg = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,
    Kg = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
    $g = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
    Qg = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
    ev = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
    tv = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
    nv = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
    iv = `#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationTint, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,
    rv = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationTint;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,
    sv = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
    av = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
    ov = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
    lv = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
    cv = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
    uv = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
    hv = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const fv = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
    dv = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
    pv = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
    mv = `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
    gv = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
    vv = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
    yv = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
    xv = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
    _v = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
    Mv = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
    wv = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
    bv = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
    Sv = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
    Tv = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    Ev = `#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    Av = `uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    Lv = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
    Rv = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    Cv = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
    Pv = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,
    Iv = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    Dv = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    Fv = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
    Nv = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularTint;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARTINTMAP
		uniform sampler2D specularTintMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenTint;
	uniform float sheenRoughness;
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    Ov = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    Bv = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
    zv = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
    Uv = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
    kv = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
    Gv = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
    Hv = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
    Vv = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
    Ce = {
        alphamap_fragment: ym,
        alphamap_pars_fragment: xm,
        alphatest_fragment: _m,
        alphatest_pars_fragment: Mm,
        aomap_fragment: wm,
        aomap_pars_fragment: bm,
        begin_vertex: Sm,
        beginnormal_vertex: Tm,
        bsdfs: Em,
        bumpmap_pars_fragment: Am,
        clipping_planes_fragment: Lm,
        clipping_planes_pars_fragment: Rm,
        clipping_planes_pars_vertex: Cm,
        clipping_planes_vertex: Pm,
        color_fragment: Im,
        color_pars_fragment: Dm,
        color_pars_vertex: Fm,
        color_vertex: Nm,
        common: Om,
        cube_uv_reflection_fragment: Bm,
        defaultnormal_vertex: zm,
        displacementmap_pars_vertex: Um,
        displacementmap_vertex: km,
        emissivemap_fragment: Gm,
        emissivemap_pars_fragment: Hm,
        encodings_fragment: Vm,
        encodings_pars_fragment: Wm,
        envmap_fragment: Xm,
        envmap_common_pars_fragment: jm,
        envmap_pars_fragment: qm,
        envmap_pars_vertex: Ym,
        envmap_physical_pars_fragment: sg,
        envmap_vertex: Zm,
        fog_vertex: Jm,
        fog_pars_vertex: Km,
        fog_fragment: $m,
        fog_pars_fragment: Qm,
        gradientmap_pars_fragment: eg,
        lightmap_fragment: tg,
        lightmap_pars_fragment: ng,
        lights_lambert_vertex: ig,
        lights_pars_begin: rg,
        lights_toon_fragment: ag,
        lights_toon_pars_fragment: og,
        lights_phong_fragment: lg,
        lights_phong_pars_fragment: cg,
        lights_physical_fragment: ug,
        lights_physical_pars_fragment: hg,
        lights_fragment_begin: fg,
        lights_fragment_maps: dg,
        lights_fragment_end: pg,
        logdepthbuf_fragment: mg,
        logdepthbuf_pars_fragment: gg,
        logdepthbuf_pars_vertex: vg,
        logdepthbuf_vertex: yg,
        map_fragment: xg,
        map_pars_fragment: _g,
        map_particle_fragment: Mg,
        map_particle_pars_fragment: wg,
        metalnessmap_fragment: bg,
        metalnessmap_pars_fragment: Sg,
        morphnormal_vertex: Tg,
        morphtarget_pars_vertex: Eg,
        morphtarget_vertex: Ag,
        normal_fragment_begin: Lg,
        normal_fragment_maps: Rg,
        normal_pars_fragment: Cg,
        normal_pars_vertex: Pg,
        normal_vertex: Ig,
        normalmap_pars_fragment: Dg,
        clearcoat_normal_fragment_begin: Fg,
        clearcoat_normal_fragment_maps: Ng,
        clearcoat_pars_fragment: Og,
        output_fragment: Bg,
        packing: zg,
        premultiplied_alpha_fragment: Ug,
        project_vertex: kg,
        dithering_fragment: Gg,
        dithering_pars_fragment: Hg,
        roughnessmap_fragment: Vg,
        roughnessmap_pars_fragment: Wg,
        shadowmap_pars_fragment: Xg,
        shadowmap_pars_vertex: jg,
        shadowmap_vertex: qg,
        shadowmask_pars_fragment: Yg,
        skinbase_vertex: Zg,
        skinning_pars_vertex: Jg,
        skinning_vertex: Kg,
        skinnormal_vertex: $g,
        specularmap_fragment: Qg,
        specularmap_pars_fragment: ev,
        tonemapping_fragment: tv,
        tonemapping_pars_fragment: nv,
        transmission_fragment: iv,
        transmission_pars_fragment: rv,
        uv_pars_fragment: sv,
        uv_pars_vertex: av,
        uv_vertex: ov,
        uv2_pars_fragment: lv,
        uv2_pars_vertex: cv,
        uv2_vertex: uv,
        worldpos_vertex: hv,
        background_vert: fv,
        background_frag: dv,
        cube_vert: pv,
        cube_frag: mv,
        depth_vert: gv,
        depth_frag: vv,
        distanceRGBA_vert: yv,
        distanceRGBA_frag: xv,
        equirect_vert: _v,
        equirect_frag: Mv,
        linedashed_vert: wv,
        linedashed_frag: bv,
        meshbasic_vert: Sv,
        meshbasic_frag: Tv,
        meshlambert_vert: Ev,
        meshlambert_frag: Av,
        meshmatcap_vert: Lv,
        meshmatcap_frag: Rv,
        meshnormal_vert: Cv,
        meshnormal_frag: Pv,
        meshphong_vert: Iv,
        meshphong_frag: Dv,
        meshphysical_vert: Fv,
        meshphysical_frag: Nv,
        meshtoon_vert: Ov,
        meshtoon_frag: Bv,
        points_vert: zv,
        points_frag: Uv,
        shadow_vert: kv,
        shadow_frag: Gv,
        sprite_vert: Hv,
        sprite_frag: Vv
    },
    oe = {
        common: {
            diffuse: {
                value: new ue(16777215)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            uvTransform: {
                value: new dt
            },
            uv2Transform: {
                value: new dt
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            }
        },
        specularmap: {
            specularMap: {
                value: null
            }
        },
        envmap: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            ior: {
                value: 1.5
            },
            refractionRatio: {
                value: .98
            },
            maxMipLevel: {
                value: 0
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalScale: {
                value: new K(1, 1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            }
        },
        gradientmap: {
            gradientMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 25e-5
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2e3
            },
            fogColor: {
                value: new ue(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            lightProbe: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {}
                }
            },
            directionalLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {}
                }
            },
            spotLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: {
                value: []
            },
            spotShadowMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {}
                }
            },
            pointLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {},
                    shadowCameraNear: {},
                    shadowCameraFar: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            },
            rectAreaLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    width: {},
                    height: {}
                }
            },
            ltc_1: {
                value: null
            },
            ltc_2: {
                value: null
            }
        },
        points: {
            diffuse: {
                value: new ue(16777215)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            },
            uvTransform: {
                value: new dt
            }
        },
        sprite: {
            diffuse: {
                value: new ue(16777215)
            },
            opacity: {
                value: 1
            },
            center: {
                value: new K(.5, .5)
            },
            rotation: {
                value: 0
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            alphaTest: {
                value: 0
            },
            uvTransform: {
                value: new dt
            }
        }
    },
    tn = {
        basic: {
            uniforms: Mt([oe.common, oe.specularmap, oe.envmap, oe.aomap, oe.lightmap, oe.fog]),
            vertexShader: Ce.meshbasic_vert,
            fragmentShader: Ce.meshbasic_frag
        },
        lambert: {
            uniforms: Mt([oe.common, oe.specularmap, oe.envmap, oe.aomap, oe.lightmap, oe.emissivemap, oe.fog, oe.lights, {
                emissive: {
                    value: new ue(0)
                }
            }]),
            vertexShader: Ce.meshlambert_vert,
            fragmentShader: Ce.meshlambert_frag
        },
        phong: {
            uniforms: Mt([oe.common, oe.specularmap, oe.envmap, oe.aomap, oe.lightmap, oe.emissivemap, oe.bumpmap, oe.normalmap, oe.displacementmap, oe.fog, oe.lights, {
                emissive: {
                    value: new ue(0)
                },
                specular: {
                    value: new ue(1118481)
                },
                shininess: {
                    value: 30
                }
            }]),
            vertexShader: Ce.meshphong_vert,
            fragmentShader: Ce.meshphong_frag
        },
        standard: {
            uniforms: Mt([oe.common, oe.envmap, oe.aomap, oe.lightmap, oe.emissivemap, oe.bumpmap, oe.normalmap, oe.displacementmap, oe.roughnessmap, oe.metalnessmap, oe.fog, oe.lights, {
                emissive: {
                    value: new ue(0)
                },
                roughness: {
                    value: 1
                },
                metalness: {
                    value: 0
                },
                envMapIntensity: {
                    value: 1
                }
            }]),
            vertexShader: Ce.meshphysical_vert,
            fragmentShader: Ce.meshphysical_frag
        },
        toon: {
            uniforms: Mt([oe.common, oe.aomap, oe.lightmap, oe.emissivemap, oe.bumpmap, oe.normalmap, oe.displacementmap, oe.gradientmap, oe.fog, oe.lights, {
                emissive: {
                    value: new ue(0)
                }
            }]),
            vertexShader: Ce.meshtoon_vert,
            fragmentShader: Ce.meshtoon_frag
        },
        matcap: {
            uniforms: Mt([oe.common, oe.bumpmap, oe.normalmap, oe.displacementmap, oe.fog, {
                matcap: {
                    value: null
                }
            }]),
            vertexShader: Ce.meshmatcap_vert,
            fragmentShader: Ce.meshmatcap_frag
        },
        points: {
            uniforms: Mt([oe.points, oe.fog]),
            vertexShader: Ce.points_vert,
            fragmentShader: Ce.points_frag
        },
        dashed: {
            uniforms: Mt([oe.common, oe.fog, {
                scale: {
                    value: 1
                },
                dashSize: {
                    value: 1
                },
                totalSize: {
                    value: 2
                }
            }]),
            vertexShader: Ce.linedashed_vert,
            fragmentShader: Ce.linedashed_frag
        },
        depth: {
            uniforms: Mt([oe.common, oe.displacementmap]),
            vertexShader: Ce.depth_vert,
            fragmentShader: Ce.depth_frag
        },
        normal: {
            uniforms: Mt([oe.common, oe.bumpmap, oe.normalmap, oe.displacementmap, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: Ce.meshnormal_vert,
            fragmentShader: Ce.meshnormal_frag
        },
        sprite: {
            uniforms: Mt([oe.sprite, oe.fog]),
            vertexShader: Ce.sprite_vert,
            fragmentShader: Ce.sprite_frag
        },
        background: {
            uniforms: {
                uvTransform: {
                    value: new dt
                },
                t2D: {
                    value: null
                }
            },
            vertexShader: Ce.background_vert,
            fragmentShader: Ce.background_frag
        },
        cube: {
            uniforms: Mt([oe.envmap, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: Ce.cube_vert,
            fragmentShader: Ce.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: Ce.equirect_vert,
            fragmentShader: Ce.equirect_frag
        },
        distanceRGBA: {
            uniforms: Mt([oe.common, oe.displacementmap, {
                referencePosition: {
                    value: new A
                },
                nearDistance: {
                    value: 1
                },
                farDistance: {
                    value: 1e3
                }
            }]),
            vertexShader: Ce.distanceRGBA_vert,
            fragmentShader: Ce.distanceRGBA_frag
        },
        shadow: {
            uniforms: Mt([oe.lights, oe.fog, {
                color: {
                    value: new ue(0)
                },
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: Ce.shadow_vert,
            fragmentShader: Ce.shadow_frag
        }
    };
tn.physical = {
    uniforms: Mt([tn.standard.uniforms, {
        clearcoat: {
            value: 0
        },
        clearcoatMap: {
            value: null
        },
        clearcoatRoughness: {
            value: 0
        },
        clearcoatRoughnessMap: {
            value: null
        },
        clearcoatNormalScale: {
            value: new K(1, 1)
        },
        clearcoatNormalMap: {
            value: null
        },
        sheen: {
            value: 0
        },
        sheenTint: {
            value: new ue(0)
        },
        sheenRoughness: {
            value: 0
        },
        transmission: {
            value: 0
        },
        transmissionMap: {
            value: null
        },
        transmissionSamplerSize: {
            value: new K
        },
        transmissionSamplerMap: {
            value: null
        },
        thickness: {
            value: 0
        },
        thicknessMap: {
            value: null
        },
        attenuationDistance: {
            value: 0
        },
        attenuationTint: {
            value: new ue(0)
        },
        specularIntensity: {
            value: 0
        },
        specularIntensityMap: {
            value: null
        },
        specularTint: {
            value: new ue(1, 1, 1)
        },
        specularTintMap: {
            value: null
        }
    }]),
    vertexShader: Ce.meshphysical_vert,
    fragmentShader: Ce.meshphysical_frag
};

function Wv(r, e, t, n, i) {
    const s = new ue(0);
    let a = 0,
        o, l, c = null,
        u = 0,
        h = null;

    function f(p, v) {
        let y = !1,
            m = v.isScene === !0 ? v.background : null;
        m && m.isTexture && (m = e.get(m));
        const g = r.xr,
            x = g.getSession && g.getSession();
        x && x.environmentBlendMode === "additive" && (m = null), m === null ? d(s, a) : m && m.isColor && (d(m, 1), y = !0), (r.autoClear || y) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil), m && (m.isCubeTexture || m.mapping === ys) ? (l === void 0 && (l = new _t(new Or(1, 1, 1), new ci({
            name: "BackgroundCubeMaterial",
            uniforms: zi(tn.cube.uniforms),
            vertexShader: tn.cube.vertexShader,
            fragmentShader: tn.cube.fragmentShader,
            side: ut,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        })), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(_, w, T) {
            this.matrixWorld.copyPosition(T.matrixWorld)
        }, Object.defineProperty(l.material, "envMap", {
            get: function() {
                return this.uniforms.envMap.value
            }
        }), n.update(l)), l.material.uniforms.envMap.value = m, l.material.uniforms.flipEnvMap.value = m.isCubeTexture && m.isRenderTargetTexture === !1 ? -1 : 1, (c !== m || u !== m.version || h !== r.toneMapping) && (l.material.needsUpdate = !0, c = m, u = m.version, h = r.toneMapping), p.unshift(l, l.geometry, l.material, 0, 0, null)) : m && m.isTexture && (o === void 0 && (o = new _t(new vo(2, 2), new ci({
            name: "BackgroundMaterial",
            uniforms: zi(tn.background.uniforms),
            vertexShader: tn.background.vertexShader,
            fragmentShader: tn.background.fragmentShader,
            side: xi,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        })), o.geometry.deleteAttribute("normal"), Object.defineProperty(o.material, "map", {
            get: function() {
                return this.uniforms.t2D.value
            }
        }), n.update(o)), o.material.uniforms.t2D.value = m, m.matrixAutoUpdate === !0 && m.updateMatrix(), o.material.uniforms.uvTransform.value.copy(m.matrix), (c !== m || u !== m.version || h !== r.toneMapping) && (o.material.needsUpdate = !0, c = m, u = m.version, h = r.toneMapping), p.unshift(o, o.geometry, o.material, 0, 0, null))
    }

    function d(p, v) {
        t.buffers.color.setClear(p.r, p.g, p.b, v, i)
    }
    return {
        getClearColor: function() {
            return s
        },
        setClearColor: function(p, v = 1) {
            s.set(p), a = v, d(s, a)
        },
        getClearAlpha: function() {
            return a
        },
        setClearAlpha: function(p) {
            a = p, d(s, a)
        },
        render: f
    }
}

function Xv(r, e, t, n) {
    const i = r.getParameter(34921),
        s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
        a = n.isWebGL2 || s !== null,
        o = {},
        l = v(null);
    let c = l;

    function u(I, F, B, N, O) {
        let Y = !1;
        if (a) {
            const re = p(N, B, F);
            c !== re && (c = re, f(c.object)), Y = y(N, O), Y && m(N, O)
        } else {
            const re = F.wireframe === !0;
            (c.geometry !== N.id || c.program !== B.id || c.wireframe !== re) && (c.geometry = N.id, c.program = B.id, c.wireframe = re, Y = !0)
        }
        I.isInstancedMesh === !0 && (Y = !0), O !== null && t.update(O, 34963), Y && (M(I, F, B, N), O !== null && r.bindBuffer(34963, t.get(O).buffer))
    }

    function h() {
        return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES()
    }

    function f(I) {
        return n.isWebGL2 ? r.bindVertexArray(I) : s.bindVertexArrayOES(I)
    }

    function d(I) {
        return n.isWebGL2 ? r.deleteVertexArray(I) : s.deleteVertexArrayOES(I)
    }

    function p(I, F, B) {
        const N = B.wireframe === !0;
        let O = o[I.id];
        O === void 0 && (O = {}, o[I.id] = O);
        let Y = O[F.id];
        Y === void 0 && (Y = {}, O[F.id] = Y);
        let re = Y[N];
        return re === void 0 && (re = v(h()), Y[N] = re), re
    }

    function v(I) {
        const F = [],
            B = [],
            N = [];
        for (let O = 0; O < i; O++) F[O] = 0, B[O] = 0, N[O] = 0;
        return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: F,
            enabledAttributes: B,
            attributeDivisors: N,
            object: I,
            attributes: {},
            index: null
        }
    }

    function y(I, F) {
        const B = c.attributes,
            N = I.attributes;
        let O = 0;
        for (const Y in N) {
            const re = B[Y],
                he = N[Y];
            if (re === void 0 || re.attribute !== he || re.data !== he.data) return !0;
            O++
        }
        return c.attributesNum !== O || c.index !== F
    }

    function m(I, F) {
        const B = {},
            N = I.attributes;
        let O = 0;
        for (const Y in N) {
            const re = N[Y],
                he = {};
            he.attribute = re, re.data && (he.data = re.data), B[Y] = he, O++
        }
        c.attributes = B, c.attributesNum = O, c.index = F
    }

    function g() {
        const I = c.newAttributes;
        for (let F = 0, B = I.length; F < B; F++) I[F] = 0
    }

    function x(I) {
        _(I, 0)
    }

    function _(I, F) {
        const B = c.newAttributes,
            N = c.enabledAttributes,
            O = c.attributeDivisors;
        B[I] = 1, N[I] === 0 && (r.enableVertexAttribArray(I), N[I] = 1), O[I] !== F && ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](I, F), O[I] = F)
    }

    function w() {
        const I = c.newAttributes,
            F = c.enabledAttributes;
        for (let B = 0, N = F.length; B < N; B++) F[B] !== I[B] && (r.disableVertexAttribArray(B), F[B] = 0)
    }

    function T(I, F, B, N, O, Y) {
        n.isWebGL2 === !0 && (B === 5124 || B === 5125) ? r.vertexAttribIPointer(I, F, B, O, Y) : r.vertexAttribPointer(I, F, B, N, O, Y)
    }

    function M(I, F, B, N) {
        if (n.isWebGL2 === !1 && (I.isInstancedMesh || N.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null) return;
        g();
        const O = N.attributes,
            Y = B.getAttributes(),
            re = F.defaultAttributeValues;
        for (const he in Y) {
            const Q = Y[he];
            if (Q.location >= 0) {
                let ge = O[he];
                if (ge === void 0 && (he === "instanceMatrix" && I.instanceMatrix && (ge = I.instanceMatrix), he === "instanceColor" && I.instanceColor && (ge = I.instanceColor)), ge !== void 0) {
                    const X = ge.normalized,
                        J = ge.itemSize,
                        se = t.get(ge);
                    if (se === void 0) continue;
                    const k = se.buffer,
                        ve = se.type,
                        Me = se.bytesPerElement;
                    if (ge.isInterleavedBufferAttribute) {
                        const fe = ge.data,
                            me = fe.stride,
                            Ee = ge.offset;
                        if (fe && fe.isInstancedInterleavedBuffer) {
                            for (let W = 0; W < Q.locationSize; W++) _(Q.location + W, fe.meshPerAttribute);
                            I.isInstancedMesh !== !0 && N._maxInstanceCount === void 0 && (N._maxInstanceCount = fe.meshPerAttribute * fe.count)
                        } else
                            for (let W = 0; W < Q.locationSize; W++) x(Q.location + W);
                        r.bindBuffer(34962, k);
                        for (let W = 0; W < Q.locationSize; W++) T(Q.location + W, J / Q.locationSize, ve, X, me * Me, (Ee + J / Q.locationSize * W) * Me)
                    } else {
                        if (ge.isInstancedBufferAttribute) {
                            for (let fe = 0; fe < Q.locationSize; fe++) _(Q.location + fe, ge.meshPerAttribute);
                            I.isInstancedMesh !== !0 && N._maxInstanceCount === void 0 && (N._maxInstanceCount = ge.meshPerAttribute * ge.count)
                        } else
                            for (let fe = 0; fe < Q.locationSize; fe++) x(Q.location + fe);
                        r.bindBuffer(34962, k);
                        for (let fe = 0; fe < Q.locationSize; fe++) T(Q.location + fe, J / Q.locationSize, ve, X, J * Me, J / Q.locationSize * fe * Me)
                    }
                } else if (re !== void 0) {
                    const X = re[he];
                    if (X !== void 0) switch (X.length) {
                        case 2:
                            r.vertexAttrib2fv(Q.location, X);
                            break;
                        case 3:
                            r.vertexAttrib3fv(Q.location, X);
                            break;
                        case 4:
                            r.vertexAttrib4fv(Q.location, X);
                            break;
                        default:
                            r.vertexAttrib1fv(Q.location, X)
                    }
                }
            }
        }
        w()
    }

    function L() {
        R();
        for (const I in o) {
            const F = o[I];
            for (const B in F) {
                const N = F[B];
                for (const O in N) d(N[O].object), delete N[O];
                delete F[B]
            }
            delete o[I]
        }
    }

    function H(I) {
        if (o[I.id] === void 0) return;
        const F = o[I.id];
        for (const B in F) {
            const N = F[B];
            for (const O in N) d(N[O].object), delete N[O];
            delete F[B]
        }
        delete o[I.id]
    }

    function P(I) {
        for (const F in o) {
            const B = o[F];
            if (B[I.id] === void 0) continue;
            const N = B[I.id];
            for (const O in N) d(N[O].object), delete N[O];
            delete B[I.id]
        }
    }

    function R() {
        j(), c !== l && (c = l, f(c.object))
    }

    function j() {
        l.geometry = null, l.program = null, l.wireframe = !1
    }
    return {
        setup: u,
        reset: R,
        resetDefaultState: j,
        dispose: L,
        releaseStatesOfGeometry: H,
        releaseStatesOfProgram: P,
        initAttributes: g,
        enableAttribute: x,
        disableUnusedAttributes: w
    }
}

function jv(r, e, t, n) {
    const i = n.isWebGL2;
    let s;

    function a(c) {
        s = c
    }

    function o(c, u) {
        r.drawArrays(s, c, u), t.update(u, s, 1)
    }

    function l(c, u, h) {
        if (h === 0) return;
        let f, d;
        if (i) f = r, d = "drawArraysInstanced";
        else if (f = e.get("ANGLE_instanced_arrays"), d = "drawArraysInstancedANGLE", f === null) {
            console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            return
        }
        f[d](s, c, u, h), t.update(u, s, h)
    }
    this.setMode = a, this.render = o, this.renderInstances = l
}

function qv(r, e, t) {
    let n;

    function i() {
        if (n !== void 0) return n;
        if (e.has("EXT_texture_filter_anisotropic") === !0) {
            const M = e.get("EXT_texture_filter_anisotropic");
            n = r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
        } else n = 0;
        return n
    }

    function s(M) {
        if (M === "highp") {
            if (r.getShaderPrecisionFormat(35633, 36338).precision > 0 && r.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
            M = "mediump"
        }
        return M === "mediump" && r.getShaderPrecisionFormat(35633, 36337).precision > 0 && r.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
    }
    const a = typeof WebGL2RenderingContext != "undefined" && r instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext != "undefined" && r instanceof WebGL2ComputeRenderingContext;
    let o = t.precision !== void 0 ? t.precision : "highp";
    const l = s(o);
    l !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", l, "instead."), o = l);
    const c = a || e.has("WEBGL_draw_buffers"),
        u = t.logarithmicDepthBuffer === !0,
        h = r.getParameter(34930),
        f = r.getParameter(35660),
        d = r.getParameter(3379),
        p = r.getParameter(34076),
        v = r.getParameter(34921),
        y = r.getParameter(36347),
        m = r.getParameter(36348),
        g = r.getParameter(36349),
        x = f > 0,
        _ = a || e.has("OES_texture_float"),
        w = x && _,
        T = a ? r.getParameter(36183) : 0;
    return {
        isWebGL2: a,
        drawBuffers: c,
        getMaxAnisotropy: i,
        getMaxPrecision: s,
        precision: o,
        logarithmicDepthBuffer: u,
        maxTextures: h,
        maxVertexTextures: f,
        maxTextureSize: d,
        maxCubemapSize: p,
        maxAttributes: v,
        maxVertexUniforms: y,
        maxVaryings: m,
        maxFragmentUniforms: g,
        vertexTextures: x,
        floatFragmentTextures: _,
        floatVertexTextures: w,
        maxSamples: T
    }
}

function Yv(r) {
    const e = this;
    let t = null,
        n = 0,
        i = !1,
        s = !1;
    const a = new vn,
        o = new dt,
        l = {
            value: null,
            needsUpdate: !1
        };
    this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, f, d) {
        const p = h.length !== 0 || f || n !== 0 || i;
        return i = f, t = u(h, d, 0), n = h.length, p
    }, this.beginShadows = function() {
        s = !0, u(null)
    }, this.endShadows = function() {
        s = !1, c()
    }, this.setState = function(h, f, d) {
        const p = h.clippingPlanes,
            v = h.clipIntersection,
            y = h.clipShadows,
            m = r.get(h);
        if (!i || p === null || p.length === 0 || s && !y) s ? u(null) : c();
        else {
            const g = s ? 0 : n,
                x = g * 4;
            let _ = m.clippingState || null;
            l.value = _, _ = u(p, f, x, d);
            for (let w = 0; w !== x; ++w) _[w] = t[w];
            m.clippingState = _, this.numIntersection = v ? this.numPlanes : 0, this.numPlanes += g
        }
    };

    function c() {
        l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0
    }

    function u(h, f, d, p) {
        const v = h !== null ? h.length : 0;
        let y = null;
        if (v !== 0) {
            if (y = l.value, p !== !0 || y === null) {
                const m = d + v * 4,
                    g = f.matrixWorldInverse;
                o.getNormalMatrix(g), (y === null || y.length < m) && (y = new Float32Array(m));
                for (let x = 0, _ = d; x !== v; ++x, _ += 4) a.copy(h[x]).applyMatrix4(g, o), a.normal.toArray(y, _), y[_ + 3] = a.constant
            }
            l.value = y, l.needsUpdate = !0
        }
        return e.numPlanes = v, e.numIntersection = 0, y
    }
}

function Zv(r) {
    let e = new WeakMap;

    function t(a, o) {
        return o === vs ? a.mapping = ms : o === Da && (a.mapping = gs), a
    }

    function n(a) {
        if (a && a.isTexture && a.isRenderTargetTexture === !1) {
            const o = a.mapping;
            if (o === vs || o === Da)
                if (e.has(a)) {
                    const l = e.get(a).texture;
                    return t(l, a.mapping)
                } else {
                    const l = a.image;
                    if (l && l.height > 0) {
                        const c = r.getRenderTarget(),
                            u = new Vc(l.height / 2);
                        return u.fromEquirectangularTexture(r, a), e.set(a, u), r.setRenderTarget(c), a.addEventListener("dispose", i), t(u.texture, a.mapping)
                    } else return null
                }
        }
        return a
    }

    function i(a) {
        const o = a.target;
        o.removeEventListener("dispose", i);
        const l = e.get(o);
        l !== void 0 && (e.delete(o), l.dispose())
    }

    function s() {
        e = new WeakMap
    }
    return {
        get: n,
        dispose: s
    }
}
class Br extends po {
    constructor(e = -1, t = 1, n = 1, i = -1, s = .1, a = 2e3) {
        super();
        this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = a, this.updateProjectionMatrix()
    }
    copy(e, t) {
        return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this
    }
    setViewOffset(e, t, n, i, s, a) {
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix()
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const e = (this.right - this.left) / (2 * this.zoom),
            t = (this.top - this.bottom) / (2 * this.zoom),
            n = (this.right + this.left) / 2,
            i = (this.top + this.bottom) / 2;
        let s = n - e,
            a = n + e,
            o = i + t,
            l = i - t;
        if (this.view !== null && this.view.enabled) {
            const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
                u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            s += c * this.view.offsetX, a = s + c * this.view.width, o -= u * this.view.offsetY, l = o - u * this.view.height
        }
        this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t
    }
}
Br.prototype.isOrthographicCamera = !0;
class Xs extends ci {
    constructor(e) {
        super(e);
        this.type = "RawShaderMaterial"
    }
}
Xs.prototype.isRawShaderMaterial = !0;
const Hi = 4,
    zn = 8,
    nn = Math.pow(2, zn),
    Xc = [.125, .215, .35, .446, .526, .582],
    jc = zn - Hi + 1 + Xc.length,
    Vi = 20,
    Un = {
        [xt]: 0,
        [Rt]: 1,
        [ka]: 2,
        [Mc]: 3,
        [wc]: 4,
        [bc]: 5,
        [Ua]: 6
    },
    yo = new Br,
    {
        _lodPlanes: zr,
        _sizeLods: qc,
        _sigmas: js
    } = $v(),
    Yc = new ue;
let xo = null;
const ui = (1 + Math.sqrt(5)) / 2,
    Wi = 1 / ui,
    Zc = [new A(1, 1, 1), new A(-1, 1, 1), new A(1, 1, -1), new A(-1, 1, -1), new A(0, ui, Wi), new A(0, ui, -Wi), new A(Wi, 0, ui), new A(-Wi, 0, ui), new A(ui, Wi, 0), new A(-ui, Wi, 0)];
class Jv {
    constructor(e) {
        this._renderer = e, this._pingPongRenderTarget = null, this._blurMaterial = Qv(Vi), this._equirectShader = null, this._cubemapShader = null, this._compileMaterial(this._blurMaterial)
    }
    fromScene(e, t = 0, n = .1, i = 100) {
        xo = this._renderer.getRenderTarget();
        const s = this._allocateTargets();
        return this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s
    }
    fromEquirectangular(e) {
        return this._fromTexture(e)
    }
    fromCubemap(e) {
        return this._fromTexture(e)
    }
    compileCubemapShader() {
        this._cubemapShader === null && (this._cubemapShader = $c(), this._compileMaterial(this._cubemapShader))
    }
    compileEquirectangularShader() {
        this._equirectShader === null && (this._equirectShader = Kc(), this._compileMaterial(this._equirectShader))
    }
    dispose() {
        this._blurMaterial.dispose(), this._cubemapShader !== null && this._cubemapShader.dispose(), this._equirectShader !== null && this._equirectShader.dispose();
        for (let e = 0; e < zr.length; e++) zr[e].dispose()
    }
    _cleanup(e) {
        this._pingPongRenderTarget.dispose(), this._renderer.setRenderTarget(xo), e.scissorTest = !1, qs(e, 0, 0, e.width, e.height)
    }
    _fromTexture(e) {
        xo = this._renderer.getRenderTarget();
        const t = this._allocateTargets(e);
        return this._textureToCubeUV(e, t), this._applyPMREM(t), this._cleanup(t), t
    }
    _allocateTargets(e) {
        const t = {
                magFilter: ht,
                minFilter: ht,
                generateMipmaps: !1,
                type: Ln,
                format: jd,
                encoding: Kv(e) ? e.encoding : ka,
                depthBuffer: !1
            },
            n = Jc(t);
        return n.depthBuffer = !e, this._pingPongRenderTarget = Jc(t), n
    }
    _compileMaterial(e) {
        const t = new _t(zr[0], e);
        this._renderer.compile(t, yo)
    }
    _sceneToCubeUV(e, t, n, i) {
        const s = 90,
            a = 1,
            o = new wt(s, a, t, n),
            l = [1, -1, 1, 1, 1, 1],
            c = [1, 1, 1, -1, -1, -1],
            u = this._renderer,
            h = u.autoClear,
            f = u.outputEncoding,
            d = u.toneMapping;
        u.getClearColor(Yc), u.toneMapping = ni, u.outputEncoding = xt, u.autoClear = !1;
        const p = new Fn({
                name: "PMREM.Background",
                side: ut,
                depthWrite: !1,
                depthTest: !1
            }),
            v = new _t(new Or, p);
        let y = !1;
        const m = e.background;
        m ? m.isColor && (p.color.copy(m), e.background = null, y = !0) : (p.color.copy(Yc), y = !0);
        for (let g = 0; g < 6; g++) {
            const x = g % 3;
            x == 0 ? (o.up.set(0, l[g], 0), o.lookAt(c[g], 0, 0)) : x == 1 ? (o.up.set(0, 0, l[g]), o.lookAt(0, c[g], 0)) : (o.up.set(0, l[g], 0), o.lookAt(0, 0, c[g])), qs(i, x * nn, g > 2 ? nn : 0, nn, nn), u.setRenderTarget(i), y && u.render(v, o), u.render(e, o)
        }
        v.geometry.dispose(), v.material.dispose(), u.toneMapping = d, u.outputEncoding = f, u.autoClear = h, e.background = m
    }
    _setEncoding(e, t) {
        this._renderer.capabilities.isWebGL2 === !0 && t.format === yt && t.type === Ln && t.encoding === Rt ? e.value = Un[xt] : e.value = Un[t.encoding]
    }
    _textureToCubeUV(e, t) {
        const n = this._renderer;
        e.isCubeTexture ? this._cubemapShader == null && (this._cubemapShader = $c()) : this._equirectShader == null && (this._equirectShader = Kc());
        const i = e.isCubeTexture ? this._cubemapShader : this._equirectShader,
            s = new _t(zr[0], i),
            a = i.uniforms;
        a.envMap.value = e, e.isCubeTexture || a.texelSize.value.set(1 / e.image.width, 1 / e.image.height), this._setEncoding(a.inputEncoding, e), this._setEncoding(a.outputEncoding, t.texture), qs(t, 0, 0, 3 * nn, 2 * nn), n.setRenderTarget(t), n.render(s, yo)
    }
    _applyPMREM(e) {
        const t = this._renderer,
            n = t.autoClear;
        t.autoClear = !1;
        for (let i = 1; i < jc; i++) {
            const s = Math.sqrt(js[i] * js[i] - js[i - 1] * js[i - 1]),
                a = Zc[(i - 1) % Zc.length];
            this._blur(e, i - 1, i, s, a)
        }
        t.autoClear = n
    }
    _blur(e, t, n, i, s) {
        const a = this._pingPongRenderTarget;
        this._halfBlur(e, a, t, n, i, "latitudinal", s), this._halfBlur(a, e, n, n, i, "longitudinal", s)
    }
    _halfBlur(e, t, n, i, s, a, o) {
        const l = this._renderer,
            c = this._blurMaterial;
        a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
        const u = 3,
            h = new _t(zr[i], c),
            f = c.uniforms,
            d = qc[n] - 1,
            p = isFinite(s) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * Vi - 1),
            v = s / p,
            y = isFinite(s) ? 1 + Math.floor(u * v) : Vi;
        y > Vi && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Vi}`);
        const m = [];
        let g = 0;
        for (let T = 0; T < Vi; ++T) {
            const M = T / v,
                L = Math.exp(-M * M / 2);
            m.push(L), T == 0 ? g += L : T < y && (g += 2 * L)
        }
        for (let T = 0; T < m.length; T++) m[T] = m[T] / g;
        f.envMap.value = e.texture, f.samples.value = y, f.weights.value = m, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o), f.dTheta.value = p, f.mipInt.value = zn - n, this._setEncoding(f.inputEncoding, e.texture), this._setEncoding(f.outputEncoding, e.texture);
        const x = qc[i],
            _ = 3 * Math.max(0, nn - 2 * x),
            w = (i === 0 ? 0 : 2 * nn) + 2 * x * (i > zn - Hi ? i - zn + Hi : 0);
        qs(t, _, w, 3 * x, 2 * x), l.setRenderTarget(t), l.render(h, yo)
    }
}

function Kv(r) {
    return r === void 0 || r.type !== Ln ? !1 : r.encoding === xt || r.encoding === Rt || r.encoding === Ua
}

function $v() {
    const r = [],
        e = [],
        t = [];
    let n = zn;
    for (let i = 0; i < jc; i++) {
        const s = Math.pow(2, n);
        e.push(s);
        let a = 1 / s;
        i > zn - Hi ? a = Xc[i - zn + Hi - 1] : i == 0 && (a = 0), t.push(a);
        const o = 1 / (s - 1),
            l = -o / 2,
            c = 1 + o / 2,
            u = [l, l, c, l, c, c, l, l, c, c, l, c],
            h = 6,
            f = 6,
            d = 3,
            p = 2,
            v = 1,
            y = new Float32Array(d * f * h),
            m = new Float32Array(p * f * h),
            g = new Float32Array(v * f * h);
        for (let _ = 0; _ < h; _++) {
            const w = _ % 3 * 2 / 3 - 1,
                T = _ > 2 ? 0 : -1,
                M = [w, T, 0, w + 2 / 3, T, 0, w + 2 / 3, T + 1, 0, w, T, 0, w + 2 / 3, T + 1, 0, w, T + 1, 0];
            y.set(M, d * f * _), m.set(u, p * f * _);
            const L = [_, _, _, _, _, _];
            g.set(L, v * f * _)
        }
        const x = new He;
        x.setAttribute("position", new $e(y, d)), x.setAttribute("uv", new $e(m, p)), x.setAttribute("faceIndex", new $e(g, v)), r.push(x), n > Hi && n--
    }
    return {
        _lodPlanes: r,
        _sizeLods: e,
        _sigmas: t
    }
}

function Jc(r) {
    const e = new en(3 * nn, 3 * nn, r);
    return e.texture.mapping = ys, e.texture.name = "PMREM.cubeUv", e.scissorTest = !0, e
}

function qs(r, e, t, n, i) {
    r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i)
}

function Qv(r) {
    const e = new Float32Array(r),
        t = new A(0, 1, 0);
    return new Xs({
        name: "SphericalGaussianBlur",
        defines: {
            n: r
        },
        uniforms: {
            envMap: {
                value: null
            },
            samples: {
                value: 1
            },
            weights: {
                value: e
            },
            latitudinal: {
                value: !1
            },
            dTheta: {
                value: 0
            },
            mipInt: {
                value: 0
            },
            poleAxis: {
                value: t
            },
            inputEncoding: {
                value: Un[xt]
            },
            outputEncoding: {
                value: Un[xt]
            }
        },
        vertexShader: _o(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${Mo()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,
        blending: En,
        depthTest: !1,
        depthWrite: !1
    })
}

function Kc() {
    const r = new K(1, 1);
    return new Xs({
        name: "EquirectangularToCubeUV",
        uniforms: {
            envMap: {
                value: null
            },
            texelSize: {
                value: r
            },
            inputEncoding: {
                value: Un[xt]
            },
            outputEncoding: {
                value: Un[xt]
            }
        },
        vertexShader: _o(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Mo()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,
        blending: En,
        depthTest: !1,
        depthWrite: !1
    })
}

function $c() {
    return new Xs({
        name: "CubemapToCubeUV",
        uniforms: {
            envMap: {
                value: null
            },
            inputEncoding: {
                value: Un[xt]
            },
            outputEncoding: {
                value: Un[xt]
            }
        },
        vertexShader: _o(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Mo()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,
        blending: En,
        depthTest: !1,
        depthWrite: !1
    })
}

function _o() {
    return `

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
}

function Mo() {
    return `

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`
}

function e0(r) {
    let e = new WeakMap,
        t = null;

    function n(o) {
        if (o && o.isTexture && o.isRenderTargetTexture === !1) {
            const l = o.mapping,
                c = l === vs || l === Da,
                u = l === ms || l === gs;
            if (c || u) {
                if (e.has(o)) return e.get(o).texture; {
                    const h = o.image;
                    if (c && h && h.height > 0 || u && h && i(h)) {
                        const f = r.getRenderTarget();
                        t === null && (t = new Jv(r));
                        const d = c ? t.fromEquirectangular(o) : t.fromCubemap(o);
                        return e.set(o, d), r.setRenderTarget(f), o.addEventListener("dispose", s), d.texture
                    } else return null
                }
            }
        }
        return o
    }

    function i(o) {
        let l = 0;
        const c = 6;
        for (let u = 0; u < c; u++) o[u] !== void 0 && l++;
        return l === c
    }

    function s(o) {
        const l = o.target;
        l.removeEventListener("dispose", s);
        const c = e.get(l);
        c !== void 0 && (e.delete(l), c.dispose())
    }

    function a() {
        e = new WeakMap, t !== null && (t.dispose(), t = null)
    }
    return {
        get: n,
        dispose: a
    }
}

function t0(r) {
    const e = {};

    function t(n) {
        if (e[n] !== void 0) return e[n];
        let i;
        switch (n) {
            case "WEBGL_depth_texture":
                i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
                break;
            case "EXT_texture_filter_anisotropic":
                i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                break;
            case "WEBGL_compressed_texture_s3tc":
                i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                break;
            case "WEBGL_compressed_texture_pvrtc":
                i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                break;
            default:
                i = r.getExtension(n)
        }
        return e[n] = i, i
    }
    return {
        has: function(n) {
            return t(n) !== null
        },
        init: function(n) {
            n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float")
        },
        get: function(n) {
            const i = t(n);
            return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i
        }
    }
}

function n0(r, e, t, n) {
    const i = {},
        s = new WeakMap;

    function a(h) {
        const f = h.target;
        f.index !== null && e.remove(f.index);
        for (const p in f.attributes) e.remove(f.attributes[p]);
        f.removeEventListener("dispose", a), delete i[f.id];
        const d = s.get(f);
        d && (e.remove(d), s.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, t.memory.geometries--
    }

    function o(h, f) {
        return i[f.id] === !0 || (f.addEventListener("dispose", a), i[f.id] = !0, t.memory.geometries++), f
    }

    function l(h) {
        const f = h.attributes;
        for (const p in f) e.update(f[p], 34962);
        const d = h.morphAttributes;
        for (const p in d) {
            const v = d[p];
            for (let y = 0, m = v.length; y < m; y++) e.update(v[y], 34962)
        }
    }

    function c(h) {
        const f = [],
            d = h.index,
            p = h.attributes.position;
        let v = 0;
        if (d !== null) {
            const g = d.array;
            v = d.version;
            for (let x = 0, _ = g.length; x < _; x += 3) {
                const w = g[x + 0],
                    T = g[x + 1],
                    M = g[x + 2];
                f.push(w, T, T, M, M, w)
            }
        } else {
            const g = p.array;
            v = p.version;
            for (let x = 0, _ = g.length / 3 - 1; x < _; x += 3) {
                const w = x + 0,
                    T = x + 1,
                    M = x + 2;
                f.push(w, T, T, M, M, w)
            }
        }
        const y = new(Ac(f) > 65535 ? Gc : ao)(f, 1);
        y.version = v;
        const m = s.get(h);
        m && e.remove(m), s.set(h, y)
    }

    function u(h) {
        const f = s.get(h);
        if (f) {
            const d = h.index;
            d !== null && f.version < d.version && c(h)
        } else c(h);
        return s.get(h)
    }
    return {
        get: o,
        update: l,
        getWireframeAttribute: u
    }
}

function i0(r, e, t, n) {
    const i = n.isWebGL2;
    let s;

    function a(f) {
        s = f
    }
    let o, l;

    function c(f) {
        o = f.type, l = f.bytesPerElement
    }

    function u(f, d) {
        r.drawElements(s, d, o, f * l), t.update(d, s, 1)
    }

    function h(f, d, p) {
        if (p === 0) return;
        let v, y;
        if (i) v = r, y = "drawElementsInstanced";
        else if (v = e.get("ANGLE_instanced_arrays"), y = "drawElementsInstancedANGLE", v === null) {
            console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            return
        }
        v[y](s, d, o, f * l, p), t.update(d, s, p)
    }
    this.setMode = a, this.setIndex = c, this.render = u, this.renderInstances = h
}

function r0(r) {
    const e = {
            geometries: 0,
            textures: 0
        },
        t = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
        };

    function n(s, a, o) {
        switch (t.calls++, a) {
            case 4:
                t.triangles += o * (s / 3);
                break;
            case 1:
                t.lines += o * (s / 2);
                break;
            case 3:
                t.lines += o * (s - 1);
                break;
            case 2:
                t.lines += o * s;
                break;
            case 0:
                t.points += o * s;
                break;
            default:
                console.error("THREE.WebGLInfo: Unknown draw mode:", a);
                break
        }
    }

    function i() {
        t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0
    }
    return {
        memory: e,
        render: t,
        programs: null,
        autoReset: !0,
        reset: i,
        update: n
    }
}
class wo extends it {
    constructor(e = null, t = 1, n = 1, i = 1) {
        super(null);
        this.image = {
            data: e,
            width: t,
            height: n,
            depth: i
        }, this.magFilter = ht, this.minFilter = ht, this.wrapR = vt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0
    }
}
wo.prototype.isDataTexture2DArray = !0;

function s0(r, e) {
    return r[0] - e[0]
}

function a0(r, e) {
    return Math.abs(e[1]) - Math.abs(r[1])
}

function Qc(r, e) {
    let t = 1;
    const n = e.isInterleavedBufferAttribute ? e.data.array : e.array;
    n instanceof Int8Array ? t = 127 : n instanceof Int16Array ? t = 32767 : n instanceof Int32Array ? t = 2147483647 : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", n), r.divideScalar(t)
}

function o0(r, e, t) {
    const n = {},
        i = new Float32Array(8),
        s = new WeakMap,
        a = new A,
        o = [];
    for (let c = 0; c < 8; c++) o[c] = [c, 0];

    function l(c, u, h, f) {
        const d = c.morphTargetInfluences;
        if (e.isWebGL2 === !0) {
            const p = u.morphAttributes.position.length;
            let v = s.get(u);
            if (v === void 0 || v.count !== p) {
                v !== void 0 && v.texture.dispose();
                const g = u.morphAttributes.normal !== void 0,
                    x = u.morphAttributes.position,
                    _ = u.morphAttributes.normal || [],
                    w = u.attributes.position.count,
                    T = g === !0 ? 2 : 1;
                let M = w * T,
                    L = 1;
                M > e.maxTextureSize && (L = Math.ceil(M / e.maxTextureSize), M = e.maxTextureSize);
                const H = new Float32Array(M * L * 4 * p),
                    P = new wo(H, M, L, p);
                P.format = yt, P.type = hn;
                const R = T * 4;
                for (let j = 0; j < p; j++) {
                    const I = x[j],
                        F = _[j],
                        B = M * L * 4 * j;
                    for (let N = 0; N < I.count; N++) {
                        a.fromBufferAttribute(I, N), I.normalized === !0 && Qc(a, I);
                        const O = N * R;
                        H[B + O + 0] = a.x, H[B + O + 1] = a.y, H[B + O + 2] = a.z, H[B + O + 3] = 0, g === !0 && (a.fromBufferAttribute(F, N), F.normalized === !0 && Qc(a, F), H[B + O + 4] = a.x, H[B + O + 5] = a.y, H[B + O + 6] = a.z, H[B + O + 7] = 0)
                    }
                }
                v = {
                    count: p,
                    texture: P,
                    size: new K(M, L)
                }, s.set(u, v)
            }
            let y = 0;
            for (let g = 0; g < d.length; g++) y += d[g];
            const m = u.morphTargetsRelative ? 1 : 1 - y;
            f.getUniforms().setValue(r, "morphTargetBaseInfluence", m), f.getUniforms().setValue(r, "morphTargetInfluences", d), f.getUniforms().setValue(r, "morphTargetsTexture", v.texture, t), f.getUniforms().setValue(r, "morphTargetsTextureSize", v.size)
        } else {
            const p = d === void 0 ? 0 : d.length;
            let v = n[u.id];
            if (v === void 0 || v.length !== p) {
                v = [];
                for (let _ = 0; _ < p; _++) v[_] = [_, 0];
                n[u.id] = v
            }
            for (let _ = 0; _ < p; _++) {
                const w = v[_];
                w[0] = _, w[1] = d[_]
            }
            v.sort(a0);
            for (let _ = 0; _ < 8; _++) _ < p && v[_][1] ? (o[_][0] = v[_][0], o[_][1] = v[_][1]) : (o[_][0] = Number.MAX_SAFE_INTEGER, o[_][1] = 0);
            o.sort(s0);
            const y = u.morphAttributes.position,
                m = u.morphAttributes.normal;
            let g = 0;
            for (let _ = 0; _ < 8; _++) {
                const w = o[_],
                    T = w[0],
                    M = w[1];
                T !== Number.MAX_SAFE_INTEGER && M ? (y && u.getAttribute("morphTarget" + _) !== y[T] && u.setAttribute("morphTarget" + _, y[T]), m && u.getAttribute("morphNormal" + _) !== m[T] && u.setAttribute("morphNormal" + _, m[T]), i[_] = M, g += M) : (y && u.hasAttribute("morphTarget" + _) === !0 && u.deleteAttribute("morphTarget" + _), m && u.hasAttribute("morphNormal" + _) === !0 && u.deleteAttribute("morphNormal" + _), i[_] = 0)
            }
            const x = u.morphTargetsRelative ? 1 : 1 - g;
            f.getUniforms().setValue(r, "morphTargetBaseInfluence", x), f.getUniforms().setValue(r, "morphTargetInfluences", i)
        }
    }
    return {
        update: l
    }
}

function l0(r, e, t, n) {
    let i = new WeakMap;

    function s(l) {
        const c = n.render.frame,
            u = l.geometry,
            h = e.get(l, u);
        return i.get(h) !== c && (e.update(h), i.set(h, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), t.update(l.instanceMatrix, 34962), l.instanceColor !== null && t.update(l.instanceColor, 34962)), h
    }

    function a() {
        i = new WeakMap
    }

    function o(l) {
        const c = l.target;
        c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor)
    }
    return {
        update: s,
        dispose: a
    }
}
class eu extends it {
    constructor(e = null, t = 1, n = 1, i = 1) {
        super(null);
        this.image = {
            data: e,
            width: t,
            height: n,
            depth: i
        }, this.magFilter = ht, this.minFilter = ht, this.wrapR = vt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0
    }
}
eu.prototype.isDataTexture3D = !0;
const tu = new it,
    c0 = new wo,
    u0 = new eu,
    nu = new Hs,
    iu = [],
    ru = [],
    su = new Float32Array(16),
    au = new Float32Array(9),
    ou = new Float32Array(4);

function Xi(r, e, t) {
    const n = r[0];
    if (n <= 0 || n > 0) return r;
    const i = e * t;
    let s = iu[i];
    if (s === void 0 && (s = new Float32Array(i), iu[i] = s), e !== 0) {
        n.toArray(s, 0);
        for (let a = 1, o = 0; a !== e; ++a) o += t, r[a].toArray(s, o)
    }
    return s
}

function Tt(r, e) {
    if (r.length !== e.length) return !1;
    for (let t = 0, n = r.length; t < n; t++)
        if (r[t] !== e[t]) return !1;
    return !0
}

function bt(r, e) {
    for (let t = 0, n = e.length; t < n; t++) r[t] = e[t]
}

function lu(r, e) {
    let t = ru[e];
    t === void 0 && (t = new Int32Array(e), ru[e] = t);
    for (let n = 0; n !== e; ++n) t[n] = r.allocateTextureUnit();
    return t
}

function h0(r, e) {
    const t = this.cache;
    t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e)
}

function f0(r, e) {
    const t = this.cache;
    if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
    else {
        if (Tt(t, e)) return;
        r.uniform2fv(this.addr, e), bt(t, e)
    }
}

function d0(r, e) {
    const t = this.cache;
    if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
    else if (e.r !== void 0)(t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
    else {
        if (Tt(t, e)) return;
        r.uniform3fv(this.addr, e), bt(t, e)
    }
}

function p0(r, e) {
    const t = this.cache;
    if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
    else {
        if (Tt(t, e)) return;
        r.uniform4fv(this.addr, e), bt(t, e)
    }
}

function m0(r, e) {
    const t = this.cache,
        n = e.elements;
    if (n === void 0) {
        if (Tt(t, e)) return;
        r.uniformMatrix2fv(this.addr, !1, e), bt(t, e)
    } else {
        if (Tt(t, n)) return;
        ou.set(n), r.uniformMatrix2fv(this.addr, !1, ou), bt(t, n)
    }
}

function g0(r, e) {
    const t = this.cache,
        n = e.elements;
    if (n === void 0) {
        if (Tt(t, e)) return;
        r.uniformMatrix3fv(this.addr, !1, e), bt(t, e)
    } else {
        if (Tt(t, n)) return;
        au.set(n), r.uniformMatrix3fv(this.addr, !1, au), bt(t, n)
    }
}

function v0(r, e) {
    const t = this.cache,
        n = e.elements;
    if (n === void 0) {
        if (Tt(t, e)) return;
        r.uniformMatrix4fv(this.addr, !1, e), bt(t, e)
    } else {
        if (Tt(t, n)) return;
        su.set(n), r.uniformMatrix4fv(this.addr, !1, su), bt(t, n)
    }
}

function y0(r, e) {
    const t = this.cache;
    t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e)
}

function x0(r, e) {
    const t = this.cache;
    Tt(t, e) || (r.uniform2iv(this.addr, e), bt(t, e))
}

function _0(r, e) {
    const t = this.cache;
    Tt(t, e) || (r.uniform3iv(this.addr, e), bt(t, e))
}

function M0(r, e) {
    const t = this.cache;
    Tt(t, e) || (r.uniform4iv(this.addr, e), bt(t, e))
}

function w0(r, e) {
    const t = this.cache;
    t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e)
}

function b0(r, e) {
    const t = this.cache;
    Tt(t, e) || (r.uniform2uiv(this.addr, e), bt(t, e))
}

function S0(r, e) {
    const t = this.cache;
    Tt(t, e) || (r.uniform3uiv(this.addr, e), bt(t, e))
}

function T0(r, e) {
    const t = this.cache;
    Tt(t, e) || (r.uniform4uiv(this.addr, e), bt(t, e))
}

function E0(r, e, t) {
    const n = this.cache,
        i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.safeSetTexture2D(e || tu, i)
}

function A0(r, e, t) {
    const n = this.cache,
        i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || u0, i)
}

function L0(r, e, t) {
    const n = this.cache,
        i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.safeSetTextureCube(e || nu, i)
}

function R0(r, e, t) {
    const n = this.cache,
        i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || c0, i)
}

function C0(r) {
    switch (r) {
        case 5126:
            return h0;
        case 35664:
            return f0;
        case 35665:
            return d0;
        case 35666:
            return p0;
        case 35674:
            return m0;
        case 35675:
            return g0;
        case 35676:
            return v0;
        case 5124:
        case 35670:
            return y0;
        case 35667:
        case 35671:
            return x0;
        case 35668:
        case 35672:
            return _0;
        case 35669:
        case 35673:
            return M0;
        case 5125:
            return w0;
        case 36294:
            return b0;
        case 36295:
            return S0;
        case 36296:
            return T0;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return E0;
        case 35679:
        case 36299:
        case 36307:
            return A0;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return L0;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
            return R0
    }
}

function P0(r, e) {
    r.uniform1fv(this.addr, e)
}

function I0(r, e) {
    const t = Xi(e, this.size, 2);
    r.uniform2fv(this.addr, t)
}

function D0(r, e) {
    const t = Xi(e, this.size, 3);
    r.uniform3fv(this.addr, t)
}

function F0(r, e) {
    const t = Xi(e, this.size, 4);
    r.uniform4fv(this.addr, t)
}

function N0(r, e) {
    const t = Xi(e, this.size, 4);
    r.uniformMatrix2fv(this.addr, !1, t)
}

function O0(r, e) {
    const t = Xi(e, this.size, 9);
    r.uniformMatrix3fv(this.addr, !1, t)
}

function B0(r, e) {
    const t = Xi(e, this.size, 16);
    r.uniformMatrix4fv(this.addr, !1, t)
}

function z0(r, e) {
    r.uniform1iv(this.addr, e)
}

function U0(r, e) {
    r.uniform2iv(this.addr, e)
}

function k0(r, e) {
    r.uniform3iv(this.addr, e)
}

function G0(r, e) {
    r.uniform4iv(this.addr, e)
}

function H0(r, e) {
    r.uniform1uiv(this.addr, e)
}

function V0(r, e) {
    r.uniform2uiv(this.addr, e)
}

function W0(r, e) {
    r.uniform3uiv(this.addr, e)
}

function X0(r, e) {
    r.uniform4uiv(this.addr, e)
}

function j0(r, e, t) {
    const n = e.length,
        i = lu(t, n);
    r.uniform1iv(this.addr, i);
    for (let s = 0; s !== n; ++s) t.safeSetTexture2D(e[s] || tu, i[s])
}

function q0(r, e, t) {
    const n = e.length,
        i = lu(t, n);
    r.uniform1iv(this.addr, i);
    for (let s = 0; s !== n; ++s) t.safeSetTextureCube(e[s] || nu, i[s])
}

function Y0(r) {
    switch (r) {
        case 5126:
            return P0;
        case 35664:
            return I0;
        case 35665:
            return D0;
        case 35666:
            return F0;
        case 35674:
            return N0;
        case 35675:
            return O0;
        case 35676:
            return B0;
        case 5124:
        case 35670:
            return z0;
        case 35667:
        case 35671:
            return U0;
        case 35668:
        case 35672:
            return k0;
        case 35669:
        case 35673:
            return G0;
        case 5125:
            return H0;
        case 36294:
            return V0;
        case 36295:
            return W0;
        case 36296:
            return X0;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return j0;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return q0
    }
}

function Z0(r, e, t) {
    this.id = r, this.addr = t, this.cache = [], this.setValue = C0(e.type)
}

function cu(r, e, t) {
    this.id = r, this.addr = t, this.cache = [], this.size = e.size, this.setValue = Y0(e.type)
}
cu.prototype.updateCache = function(r) {
    const e = this.cache;
    r instanceof Float32Array && e.length !== r.length && (this.cache = new Float32Array(r.length)), bt(e, r)
};

function uu(r) {
    this.id = r, this.seq = [], this.map = {}
}
uu.prototype.setValue = function(r, e, t) {
    const n = this.seq;
    for (let i = 0, s = n.length; i !== s; ++i) {
        const a = n[i];
        a.setValue(r, e[a.id], t)
    }
};
const bo = /(\w+)(\])?(\[|\.)?/g;

function hu(r, e) {
    r.seq.push(e), r.map[e.id] = e
}

function J0(r, e, t) {
    const n = r.name,
        i = n.length;
    for (bo.lastIndex = 0;;) {
        const s = bo.exec(n),
            a = bo.lastIndex;
        let o = s[1];
        const l = s[2] === "]",
            c = s[3];
        if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === i) {
            hu(t, c === void 0 ? new Z0(o, r, e) : new cu(o, r, e));
            break
        } else {
            let h = t.map[o];
            h === void 0 && (h = new uu(o), hu(t, h)), t = h
        }
    }
}

function kn(r, e) {
    this.seq = [], this.map = {};
    const t = r.getProgramParameter(e, 35718);
    for (let n = 0; n < t; ++n) {
        const i = r.getActiveUniform(e, n),
            s = r.getUniformLocation(e, i.name);
        J0(i, s, this)
    }
}
kn.prototype.setValue = function(r, e, t, n) {
    const i = this.map[e];
    i !== void 0 && i.setValue(r, t, n)
};
kn.prototype.setOptional = function(r, e, t) {
    const n = e[t];
    n !== void 0 && this.setValue(r, t, n)
};
kn.upload = function(r, e, t, n) {
    for (let i = 0, s = e.length; i !== s; ++i) {
        const a = e[i],
            o = t[a.id];
        o.needsUpdate !== !1 && a.setValue(r, o.value, n)
    }
};
kn.seqWithValue = function(r, e) {
    const t = [];
    for (let n = 0, i = r.length; n !== i; ++n) {
        const s = r[n];
        s.id in e && t.push(s)
    }
    return t
};

function fu(r, e, t) {
    const n = r.createShader(e);
    return r.shaderSource(n, t), r.compileShader(n), n
}
let K0 = 0;

function $0(r) {
    const e = r.split(`
`);
    for (let t = 0; t < e.length; t++) e[t] = t + 1 + ": " + e[t];
    return e.join(`
`)
}

function du(r) {
    switch (r) {
        case xt:
            return ["Linear", "( value )"];
        case Rt:
            return ["sRGB", "( value )"];
        case ka:
            return ["RGBE", "( value )"];
        case Mc:
            return ["RGBM", "( value, 7.0 )"];
        case wc:
            return ["RGBM", "( value, 16.0 )"];
        case bc:
            return ["RGBD", "( value, 256.0 )"];
        case Ua:
            return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
        case Fp:
            return ["LogLuv", "( value )"];
        default:
            return console.warn("THREE.WebGLProgram: Unsupported encoding:", r), ["Linear", "( value )"]
    }
}

function pu(r, e, t) {
    const n = r.getShaderParameter(e, 35713),
        i = r.getShaderInfoLog(e).trim();
    return n && i === "" ? "" : t.toUpperCase() + `

` + i + `

` + $0(r.getShaderSource(e))
}

function ji(r, e) {
    const t = du(e);
    return "vec4 " + r + "( vec4 value ) { return " + t[0] + "ToLinear" + t[1] + "; }"
}

function Q0(r, e) {
    const t = du(e);
    return "vec4 " + r + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }"
}

function ey(r, e) {
    let t;
    switch (e) {
        case Id:
            t = "Linear";
            break;
        case Dd:
            t = "Reinhard";
            break;
        case Fd:
            t = "OptimizedCineon";
            break;
        case Nd:
            t = "ACESFilmic";
            break;
        case Od:
            t = "Custom";
            break;
        default:
            console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear"
    }
    return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
}

function ty(r) {
    return [r.extensionDerivatives || r.envMapCubeUV || r.bumpMap || r.tangentSpaceNormalMap || r.clearcoatNormalMap || r.flatShading || r.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "", (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (r.extensionShaderTextureLOD || r.envMap || r.transmission) && r.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Ur).join(`
`)
}

function ny(r) {
    const e = [];
    for (const t in r) {
        const n = r[t];
        n !== !1 && e.push("#define " + t + " " + n)
    }
    return e.join(`
`)
}

function iy(r, e) {
    const t = {},
        n = r.getProgramParameter(e, 35721);
    for (let i = 0; i < n; i++) {
        const s = r.getActiveAttrib(e, i),
            a = s.name;
        let o = 1;
        s.type === 35674 && (o = 2), s.type === 35675 && (o = 3), s.type === 35676 && (o = 4), t[a] = {
            type: s.type,
            location: r.getAttribLocation(e, a),
            locationSize: o
        }
    }
    return t
}

function Ur(r) {
    return r !== ""
}

function mu(r, e) {
    return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
}

function gu(r, e) {
    return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
}
const ry = /^[ \t]*#include +<([\w\d./]+)>/gm;

function So(r) {
    return r.replace(ry, sy)
}

function sy(r, e) {
    const t = Ce[e];
    if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
    return So(t)
}
const ay = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
    oy = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

function vu(r) {
    return r.replace(oy, yu).replace(ay, ly)
}

function ly(r, e, t, n) {
    return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), yu(r, e, t, n)
}

function yu(r, e, t, n) {
    let i = "";
    for (let s = parseInt(e); s < parseInt(t); s++) i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
    return i
}

function xu(r) {
    let e = "precision " + r.precision + ` float;
precision ` + r.precision + " int;";
    return r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e
}

function cy(r) {
    let e = "SHADOWMAP_TYPE_BASIC";
    return r.shadowMapType === $l ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === ud ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === br && (e = "SHADOWMAP_TYPE_VSM"), e
}

function uy(r) {
    let e = "ENVMAP_TYPE_CUBE";
    if (r.envMap) switch (r.envMapMode) {
        case ms:
        case gs:
            e = "ENVMAP_TYPE_CUBE";
            break;
        case ys:
        case Fa:
            e = "ENVMAP_TYPE_CUBE_UV";
            break
    }
    return e
}

function hy(r) {
    let e = "ENVMAP_MODE_REFLECTION";
    if (r.envMap) switch (r.envMapMode) {
        case gs:
        case Fa:
            e = "ENVMAP_MODE_REFRACTION";
            break
    }
    return e
}

function fy(r) {
    let e = "ENVMAP_BLENDING_NONE";
    if (r.envMap) switch (r.combine) {
        case ps:
            e = "ENVMAP_BLENDING_MULTIPLY";
            break;
        case Cd:
            e = "ENVMAP_BLENDING_MIX";
            break;
        case Pd:
            e = "ENVMAP_BLENDING_ADD";
            break
    }
    return e
}

function dy(r, e, t, n) {
    const i = r.getContext(),
        s = t.defines;
    let a = t.vertexShader,
        o = t.fragmentShader;
    const l = cy(t),
        c = uy(t),
        u = hy(t),
        h = fy(t),
        f = r.gammaFactor > 0 ? r.gammaFactor : 1,
        d = t.isWebGL2 ? "" : ty(t),
        p = ny(s),
        v = i.createProgram();
    let y, m, g = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
    t.isRawShaderMaterial ? (y = [p].filter(Ur).join(`
`), y.length > 0 && (y += `
`), m = [d, p].filter(Ur).join(`
`), m.length > 0 && (m += `
`)) : (y = [xu(t), "#define SHADER_NAME " + t.shaderName, p, t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + f, "#define MAX_BONES " + t.maxBones, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + u : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", t.specularTintMap ? "#define USE_SPECULARTINTMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUvs ? "#define USE_UV" : "", t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.useVertexTexture ? "#define BONE_TEXTURE" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.morphTargets && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", t.morphTargets && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Ur).join(`
`), m = [d, xu(t), "#define SHADER_NAME " + t.shaderName, p, "#define GAMMA_FACTOR " + f, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + u : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", t.specularTintMap ? "#define USE_SPECULARTINTMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.sheen ? "#define USE_SHEEN" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUvs ? "#define USE_UV" : "", t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (t.extensionShaderTextureLOD || t.envMap) && t.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== ni ? "#define TONE_MAPPING" : "", t.toneMapping !== ni ? Ce.tonemapping_pars_fragment : "", t.toneMapping !== ni ? ey("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.format === ii ? "#define OPAQUE" : "", Ce.encodings_pars_fragment, t.map ? ji("mapTexelToLinear", t.mapEncoding) : "", t.matcap ? ji("matcapTexelToLinear", t.matcapEncoding) : "", t.envMap ? ji("envMapTexelToLinear", t.envMapEncoding) : "", t.emissiveMap ? ji("emissiveMapTexelToLinear", t.emissiveMapEncoding) : "", t.specularTintMap ? ji("specularTintMapTexelToLinear", t.specularTintMapEncoding) : "", t.lightMap ? ji("lightMapTexelToLinear", t.lightMapEncoding) : "", Q0("linearToOutputTexel", t.outputEncoding), t.depthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(Ur).join(`
`)), a = So(a), a = mu(a, t), a = gu(a, t), o = So(o), o = mu(o, t), o = gu(o, t), a = vu(a), o = vu(o), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (g = `#version 300 es
`, y = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + y, m = ["#define varying in", t.glslVersion === Sc ? "" : "out highp vec4 pc_fragColor;", t.glslVersion === Sc ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + m);
    const x = g + y + a,
        _ = g + m + o,
        w = fu(i, 35633, x),
        T = fu(i, 35632, _);
    if (i.attachShader(v, w), i.attachShader(v, T), t.index0AttributeName !== void 0 ? i.bindAttribLocation(v, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(v, 0, "position"), i.linkProgram(v), r.debug.checkShaderErrors) {
        const H = i.getProgramInfoLog(v).trim(),
            P = i.getShaderInfoLog(w).trim(),
            R = i.getShaderInfoLog(T).trim();
        let j = !0,
            I = !0;
        if (i.getProgramParameter(v, 35714) === !1) {
            j = !1;
            const F = pu(i, w, "vertex"),
                B = pu(i, T, "fragment");
            console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(v, 35715) + `

Program Info Log: ` + H + `
` + F + `
` + B)
        } else H !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", H) : (P === "" || R === "") && (I = !1);
        I && (this.diagnostics = {
            runnable: j,
            programLog: H,
            vertexShader: {
                log: P,
                prefix: y
            },
            fragmentShader: {
                log: R,
                prefix: m
            }
        })
    }
    i.deleteShader(w), i.deleteShader(T);
    let M;
    this.getUniforms = function() {
        return M === void 0 && (M = new kn(i, v)), M
    };
    let L;
    return this.getAttributes = function() {
        return L === void 0 && (L = iy(i, v)), L
    }, this.destroy = function() {
        n.releaseStatesOfProgram(this), i.deleteProgram(v), this.program = void 0
    }, this.name = t.shaderName, this.id = K0++, this.cacheKey = e, this.usedTimes = 1, this.program = v, this.vertexShader = w, this.fragmentShader = T, this
}

function py(r, e, t, n, i, s, a) {
    const o = [],
        l = i.isWebGL2,
        c = i.logarithmicDepthBuffer,
        u = i.floatVertexTextures,
        h = i.maxVertexUniforms,
        f = i.vertexTextures;
    let d = i.precision;
    const p = {
            MeshDepthMaterial: "depth",
            MeshDistanceMaterial: "distanceRGBA",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshToonMaterial: "toon",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            MeshMatcapMaterial: "matcap",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points",
            ShadowMaterial: "shadow",
            SpriteMaterial: "sprite"
        },
        v = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "instancingColor", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoat", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "specularIntensityMap", "specularTintMap", "specularTintMapEncoding", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "alphaTest", "combine", "vertexColors", "vertexAlphas", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "morphTargetsCount", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "format", "sheen", "transmission", "transmissionMap", "thicknessMap"];

    function y(M) {
        const H = M.skeleton.bones;
        if (u) return 1024; {
            const R = Math.floor((h - 20) / 4),
                j = Math.min(R, H.length);
            return j < H.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + H.length + " bones. This GPU supports " + j + "."), 0) : j
        }
    }

    function m(M) {
        let L;
        return M && M.isTexture ? L = M.encoding : M && M.isWebGLRenderTarget ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), L = M.texture.encoding) : L = xt, l && M && M.isTexture && M.format === yt && M.type === Ln && M.encoding === Rt && (L = xt), L
    }

    function g(M, L, H, P, R) {
        const j = P.fog,
            I = M.isMeshStandardMaterial ? P.environment : null,
            F = (M.isMeshStandardMaterial ? t : e).get(M.envMap || I),
            B = p[M.type],
            N = R.isSkinnedMesh ? y(R) : 0;
        M.precision !== null && (d = i.getMaxPrecision(M.precision), d !== M.precision && console.warn("THREE.WebGLProgram.getParameters:", M.precision, "not supported, using", d, "instead."));
        let O, Y;
        if (B) {
            const X = tn[B];
            O = X.vertexShader, Y = X.fragmentShader
        } else O = M.vertexShader, Y = M.fragmentShader;
        const re = r.getRenderTarget(),
            he = M.alphaTest > 0,
            Q = M.clearcoat > 0;
        return {
            isWebGL2: l,
            shaderID: B,
            shaderName: M.type,
            vertexShader: O,
            fragmentShader: Y,
            defines: M.defines,
            isRawShaderMaterial: M.isRawShaderMaterial === !0,
            glslVersion: M.glslVersion,
            precision: d,
            instancing: R.isInstancedMesh === !0,
            instancingColor: R.isInstancedMesh === !0 && R.instanceColor !== null,
            supportsVertexTextures: f,
            outputEncoding: re !== null ? m(re.texture) : r.outputEncoding,
            map: !!M.map,
            mapEncoding: m(M.map),
            matcap: !!M.matcap,
            matcapEncoding: m(M.matcap),
            envMap: !!F,
            envMapMode: F && F.mapping,
            envMapEncoding: m(F),
            envMapCubeUV: !!F && (F.mapping === ys || F.mapping === Fa),
            lightMap: !!M.lightMap,
            lightMapEncoding: m(M.lightMap),
            aoMap: !!M.aoMap,
            emissiveMap: !!M.emissiveMap,
            emissiveMapEncoding: m(M.emissiveMap),
            bumpMap: !!M.bumpMap,
            normalMap: !!M.normalMap,
            objectSpaceNormalMap: M.normalMapType === Bp,
            tangentSpaceNormalMap: M.normalMapType === ri,
            clearcoat: Q,
            clearcoatMap: Q && !!M.clearcoatMap,
            clearcoatRoughnessMap: Q && !!M.clearcoatRoughnessMap,
            clearcoatNormalMap: Q && !!M.clearcoatNormalMap,
            displacementMap: !!M.displacementMap,
            roughnessMap: !!M.roughnessMap,
            metalnessMap: !!M.metalnessMap,
            specularMap: !!M.specularMap,
            specularIntensityMap: !!M.specularIntensityMap,
            specularTintMap: !!M.specularTintMap,
            specularTintMapEncoding: m(M.specularTintMap),
            alphaMap: !!M.alphaMap,
            alphaTest: he,
            gradientMap: !!M.gradientMap,
            sheen: M.sheen > 0,
            transmission: M.transmission > 0,
            transmissionMap: !!M.transmissionMap,
            thicknessMap: !!M.thicknessMap,
            combine: M.combine,
            vertexTangents: !!M.normalMap && !!R.geometry && !!R.geometry.attributes.tangent,
            vertexColors: M.vertexColors,
            vertexAlphas: M.vertexColors === !0 && !!R.geometry && !!R.geometry.attributes.color && R.geometry.attributes.color.itemSize === 4,
            vertexUvs: !!M.map || !!M.bumpMap || !!M.normalMap || !!M.specularMap || !!M.alphaMap || !!M.emissiveMap || !!M.roughnessMap || !!M.metalnessMap || !!M.clearcoatMap || !!M.clearcoatRoughnessMap || !!M.clearcoatNormalMap || !!M.displacementMap || !!M.transmissionMap || !!M.thicknessMap || !!M.specularIntensityMap || !!M.specularTintMap,
            uvsVertexOnly: !(!!M.map || !!M.bumpMap || !!M.normalMap || !!M.specularMap || !!M.alphaMap || !!M.emissiveMap || !!M.roughnessMap || !!M.metalnessMap || !!M.clearcoatNormalMap || M.transmission > 0 || !!M.transmissionMap || !!M.thicknessMap || !!M.specularIntensityMap || !!M.specularTintMap) && !!M.displacementMap,
            fog: !!j,
            useFog: M.fog,
            fogExp2: j && j.isFogExp2,
            flatShading: !!M.flatShading,
            sizeAttenuation: M.sizeAttenuation,
            logarithmicDepthBuffer: c,
            skinning: R.isSkinnedMesh === !0 && N > 0,
            maxBones: N,
            useVertexTexture: u,
            morphTargets: !!R.geometry && !!R.geometry.morphAttributes.position,
            morphNormals: !!R.geometry && !!R.geometry.morphAttributes.normal,
            morphTargetsCount: !!R.geometry && !!R.geometry.morphAttributes.position ? R.geometry.morphAttributes.position.length : 0,
            numDirLights: L.directional.length,
            numPointLights: L.point.length,
            numSpotLights: L.spot.length,
            numRectAreaLights: L.rectArea.length,
            numHemiLights: L.hemi.length,
            numDirLightShadows: L.directionalShadowMap.length,
            numPointLightShadows: L.pointShadowMap.length,
            numSpotLightShadows: L.spotShadowMap.length,
            numClippingPlanes: a.numPlanes,
            numClipIntersection: a.numIntersection,
            format: M.format,
            dithering: M.dithering,
            shadowMapEnabled: r.shadowMap.enabled && H.length > 0,
            shadowMapType: r.shadowMap.type,
            toneMapping: M.toneMapped ? r.toneMapping : ni,
            physicallyCorrectLights: r.physicallyCorrectLights,
            premultipliedAlpha: M.premultipliedAlpha,
            doubleSided: M.side === ti,
            flipSided: M.side === ut,
            depthPacking: M.depthPacking !== void 0 ? M.depthPacking : !1,
            index0AttributeName: M.index0AttributeName,
            extensionDerivatives: M.extensions && M.extensions.derivatives,
            extensionFragDepth: M.extensions && M.extensions.fragDepth,
            extensionDrawBuffers: M.extensions && M.extensions.drawBuffers,
            extensionShaderTextureLOD: M.extensions && M.extensions.shaderTextureLOD,
            rendererExtensionFragDepth: l || n.has("EXT_frag_depth"),
            rendererExtensionDrawBuffers: l || n.has("WEBGL_draw_buffers"),
            rendererExtensionShaderTextureLod: l || n.has("EXT_shader_texture_lod"),
            customProgramCacheKey: M.customProgramCacheKey()
        }
    }

    function x(M) {
        const L = [];
        if (M.shaderID ? L.push(M.shaderID) : (L.push(M.fragmentShader), L.push(M.vertexShader)), M.defines !== void 0)
            for (const H in M.defines) L.push(H), L.push(M.defines[H]);
        if (M.isRawShaderMaterial === !1) {
            for (let H = 0; H < v.length; H++) L.push(M[v[H]]);
            L.push(r.outputEncoding), L.push(r.gammaFactor)
        }
        return L.push(M.customProgramCacheKey), L.join()
    }

    function _(M) {
        const L = p[M.type];
        let H;
        if (L) {
            const P = tn[L];
            H = fm.clone(P.uniforms)
        } else H = M.uniforms;
        return H
    }

    function w(M, L) {
        let H;
        for (let P = 0, R = o.length; P < R; P++) {
            const j = o[P];
            if (j.cacheKey === L) {
                H = j, ++H.usedTimes;
                break
            }
        }
        return H === void 0 && (H = new dy(r, L, M, s), o.push(H)), H
    }

    function T(M) {
        if (--M.usedTimes == 0) {
            const L = o.indexOf(M);
            o[L] = o[o.length - 1], o.pop(), M.destroy()
        }
    }
    return {
        getParameters: g,
        getProgramCacheKey: x,
        getUniforms: _,
        acquireProgram: w,
        releaseProgram: T,
        programs: o
    }
}

function my() {
    let r = new WeakMap;

    function e(s) {
        let a = r.get(s);
        return a === void 0 && (a = {}, r.set(s, a)), a
    }

    function t(s) {
        r.delete(s)
    }

    function n(s, a, o) {
        r.get(s)[a] = o
    }

    function i() {
        r = new WeakMap
    }
    return {
        get: e,
        remove: t,
        update: n,
        dispose: i
    }
}

function gy(r, e) {
    return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.program !== e.program ? r.program.id - e.program.id : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id
}

function _u(r, e) {
    return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id
}

function Mu(r) {
    const e = [];
    let t = 0;
    const n = [],
        i = [],
        s = [],
        a = {
            id: -1
        };

    function o() {
        t = 0, n.length = 0, i.length = 0, s.length = 0
    }

    function l(d, p, v, y, m, g) {
        let x = e[t];
        const _ = r.get(v);
        return x === void 0 ? (x = {
            id: d.id,
            object: d,
            geometry: p,
            material: v,
            program: _.program || a,
            groupOrder: y,
            renderOrder: d.renderOrder,
            z: m,
            group: g
        }, e[t] = x) : (x.id = d.id, x.object = d, x.geometry = p, x.material = v, x.program = _.program || a, x.groupOrder = y, x.renderOrder = d.renderOrder, x.z = m, x.group = g), t++, x
    }

    function c(d, p, v, y, m, g) {
        const x = l(d, p, v, y, m, g);
        v.transmission > 0 ? i.push(x) : v.transparent === !0 ? s.push(x) : n.push(x)
    }

    function u(d, p, v, y, m, g) {
        const x = l(d, p, v, y, m, g);
        v.transmission > 0 ? i.unshift(x) : v.transparent === !0 ? s.unshift(x) : n.unshift(x)
    }

    function h(d, p) {
        n.length > 1 && n.sort(d || gy), i.length > 1 && i.sort(p || _u), s.length > 1 && s.sort(p || _u)
    }

    function f() {
        for (let d = t, p = e.length; d < p; d++) {
            const v = e[d];
            if (v.id === null) break;
            v.id = null, v.object = null, v.geometry = null, v.material = null, v.program = null, v.group = null
        }
    }
    return {
        opaque: n,
        transmissive: i,
        transparent: s,
        init: o,
        push: c,
        unshift: u,
        finish: f,
        sort: h
    }
}

function vy(r) {
    let e = new WeakMap;

    function t(i, s) {
        let a;
        return e.has(i) === !1 ? (a = new Mu(r), e.set(i, [a])) : s >= e.get(i).length ? (a = new Mu(r), e.get(i).push(a)) : a = e.get(i)[s], a
    }

    function n() {
        e = new WeakMap
    }
    return {
        get: t,
        dispose: n
    }
}

function yy() {
    const r = {};
    return {
        get: function(e) {
            if (r[e.id] !== void 0) return r[e.id];
            let t;
            switch (e.type) {
                case "DirectionalLight":
                    t = {
                        direction: new A,
                        color: new ue
                    };
                    break;
                case "SpotLight":
                    t = {
                        position: new A,
                        direction: new A,
                        color: new ue,
                        distance: 0,
                        coneCos: 0,
                        penumbraCos: 0,
                        decay: 0
                    };
                    break;
                case "PointLight":
                    t = {
                        position: new A,
                        color: new ue,
                        distance: 0,
                        decay: 0
                    };
                    break;
                case "HemisphereLight":
                    t = {
                        direction: new A,
                        skyColor: new ue,
                        groundColor: new ue
                    };
                    break;
                case "RectAreaLight":
                    t = {
                        color: new ue,
                        position: new A,
                        halfWidth: new A,
                        halfHeight: new A
                    };
                    break
            }
            return r[e.id] = t, t
        }
    }
}

function xy() {
    const r = {};
    return {
        get: function(e) {
            if (r[e.id] !== void 0) return r[e.id];
            let t;
            switch (e.type) {
                case "DirectionalLight":
                    t = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new K
                    };
                    break;
                case "SpotLight":
                    t = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new K
                    };
                    break;
                case "PointLight":
                    t = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new K,
                        shadowCameraNear: 1,
                        shadowCameraFar: 1e3
                    };
                    break
            }
            return r[e.id] = t, t
        }
    }
}
let _y = 0;

function My(r, e) {
    return (e.castShadow ? 1 : 0) - (r.castShadow ? 1 : 0)
}

function wy(r, e) {
    const t = new yy,
        n = xy(),
        i = {
            version: 0,
            hash: {
                directionalLength: -1,
                pointLength: -1,
                spotLength: -1,
                rectAreaLength: -1,
                hemiLength: -1,
                numDirectionalShadows: -1,
                numPointShadows: -1,
                numSpotShadows: -1
            },
            ambient: [0, 0, 0],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadow: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            rectArea: [],
            rectAreaLTC1: null,
            rectAreaLTC2: null,
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: []
        };
    for (let u = 0; u < 9; u++) i.probe.push(new A);
    const s = new A,
        a = new ae,
        o = new ae;

    function l(u, h) {
        let f = 0,
            d = 0,
            p = 0;
        for (let H = 0; H < 9; H++) i.probe[H].set(0, 0, 0);
        let v = 0,
            y = 0,
            m = 0,
            g = 0,
            x = 0,
            _ = 0,
            w = 0,
            T = 0;
        u.sort(My);
        const M = h !== !0 ? Math.PI : 1;
        for (let H = 0, P = u.length; H < P; H++) {
            const R = u[H],
                j = R.color,
                I = R.intensity,
                F = R.distance,
                B = R.shadow && R.shadow.map ? R.shadow.map.texture : null;
            if (R.isAmbientLight) f += j.r * I * M, d += j.g * I * M, p += j.b * I * M;
            else if (R.isLightProbe)
                for (let N = 0; N < 9; N++) i.probe[N].addScaledVector(R.sh.coefficients[N], I);
            else if (R.isDirectionalLight) {
                const N = t.get(R);
                if (N.color.copy(R.color).multiplyScalar(R.intensity * M), R.castShadow) {
                    const O = R.shadow,
                        Y = n.get(R);
                    Y.shadowBias = O.bias, Y.shadowNormalBias = O.normalBias, Y.shadowRadius = O.radius, Y.shadowMapSize = O.mapSize, i.directionalShadow[v] = Y, i.directionalShadowMap[v] = B, i.directionalShadowMatrix[v] = R.shadow.matrix, _++
                }
                i.directional[v] = N, v++
            } else if (R.isSpotLight) {
                const N = t.get(R);
                if (N.position.setFromMatrixPosition(R.matrixWorld), N.color.copy(j).multiplyScalar(I * M), N.distance = F, N.coneCos = Math.cos(R.angle), N.penumbraCos = Math.cos(R.angle * (1 - R.penumbra)), N.decay = R.decay, R.castShadow) {
                    const O = R.shadow,
                        Y = n.get(R);
                    Y.shadowBias = O.bias, Y.shadowNormalBias = O.normalBias, Y.shadowRadius = O.radius, Y.shadowMapSize = O.mapSize, i.spotShadow[m] = Y, i.spotShadowMap[m] = B, i.spotShadowMatrix[m] = R.shadow.matrix, T++
                }
                i.spot[m] = N, m++
            } else if (R.isRectAreaLight) {
                const N = t.get(R);
                N.color.copy(j).multiplyScalar(I), N.halfWidth.set(R.width * .5, 0, 0), N.halfHeight.set(0, R.height * .5, 0), i.rectArea[g] = N, g++
            } else if (R.isPointLight) {
                const N = t.get(R);
                if (N.color.copy(R.color).multiplyScalar(R.intensity * M), N.distance = R.distance, N.decay = R.decay, R.castShadow) {
                    const O = R.shadow,
                        Y = n.get(R);
                    Y.shadowBias = O.bias, Y.shadowNormalBias = O.normalBias, Y.shadowRadius = O.radius, Y.shadowMapSize = O.mapSize, Y.shadowCameraNear = O.camera.near, Y.shadowCameraFar = O.camera.far, i.pointShadow[y] = Y, i.pointShadowMap[y] = B, i.pointShadowMatrix[y] = R.shadow.matrix, w++
                }
                i.point[y] = N, y++
            } else if (R.isHemisphereLight) {
                const N = t.get(R);
                N.skyColor.copy(R.color).multiplyScalar(I * M), N.groundColor.copy(R.groundColor).multiplyScalar(I * M), i.hemi[x] = N, x++
            }
        }
        g > 0 && (e.isWebGL2 || r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = oe.LTC_FLOAT_1, i.rectAreaLTC2 = oe.LTC_FLOAT_2) : r.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = oe.LTC_HALF_1, i.rectAreaLTC2 = oe.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = f, i.ambient[1] = d, i.ambient[2] = p;
        const L = i.hash;
        (L.directionalLength !== v || L.pointLength !== y || L.spotLength !== m || L.rectAreaLength !== g || L.hemiLength !== x || L.numDirectionalShadows !== _ || L.numPointShadows !== w || L.numSpotShadows !== T) && (i.directional.length = v, i.spot.length = m, i.rectArea.length = g, i.point.length = y, i.hemi.length = x, i.directionalShadow.length = _, i.directionalShadowMap.length = _, i.pointShadow.length = w, i.pointShadowMap.length = w, i.spotShadow.length = T, i.spotShadowMap.length = T, i.directionalShadowMatrix.length = _, i.pointShadowMatrix.length = w, i.spotShadowMatrix.length = T, L.directionalLength = v, L.pointLength = y, L.spotLength = m, L.rectAreaLength = g, L.hemiLength = x, L.numDirectionalShadows = _, L.numPointShadows = w, L.numSpotShadows = T, i.version = _y++)
    }

    function c(u, h) {
        let f = 0,
            d = 0,
            p = 0,
            v = 0,
            y = 0;
        const m = h.matrixWorldInverse;
        for (let g = 0, x = u.length; g < x; g++) {
            const _ = u[g];
            if (_.isDirectionalLight) {
                const w = i.directional[f];
                w.direction.setFromMatrixPosition(_.matrixWorld), s.setFromMatrixPosition(_.target.matrixWorld), w.direction.sub(s), w.direction.transformDirection(m), f++
            } else if (_.isSpotLight) {
                const w = i.spot[p];
                w.position.setFromMatrixPosition(_.matrixWorld), w.position.applyMatrix4(m), w.direction.setFromMatrixPosition(_.matrixWorld), s.setFromMatrixPosition(_.target.matrixWorld), w.direction.sub(s), w.direction.transformDirection(m), p++
            } else if (_.isRectAreaLight) {
                const w = i.rectArea[v];
                w.position.setFromMatrixPosition(_.matrixWorld), w.position.applyMatrix4(m), o.identity(), a.copy(_.matrixWorld), a.premultiply(m), o.extractRotation(a), w.halfWidth.set(_.width * .5, 0, 0), w.halfHeight.set(0, _.height * .5, 0), w.halfWidth.applyMatrix4(o), w.halfHeight.applyMatrix4(o), v++
            } else if (_.isPointLight) {
                const w = i.point[d];
                w.position.setFromMatrixPosition(_.matrixWorld), w.position.applyMatrix4(m), d++
            } else if (_.isHemisphereLight) {
                const w = i.hemi[y];
                w.direction.setFromMatrixPosition(_.matrixWorld), w.direction.transformDirection(m), w.direction.normalize(), y++
            }
        }
    }
    return {
        setup: l,
        setupView: c,
        state: i
    }
}

function wu(r, e) {
    const t = new wy(r, e),
        n = [],
        i = [];

    function s() {
        n.length = 0, i.length = 0
    }

    function a(h) {
        n.push(h)
    }

    function o(h) {
        i.push(h)
    }

    function l(h) {
        t.setup(n, h)
    }

    function c(h) {
        t.setupView(n, h)
    }
    return {
        init: s,
        state: {
            lightsArray: n,
            shadowsArray: i,
            lights: t
        },
        setupLights: l,
        setupLightsView: c,
        pushLight: a,
        pushShadow: o
    }
}

function by(r, e) {
    let t = new WeakMap;

    function n(s, a = 0) {
        let o;
        return t.has(s) === !1 ? (o = new wu(r, e), t.set(s, [o])) : a >= t.get(s).length ? (o = new wu(r, e), t.get(s).push(o)) : o = t.get(s)[a], o
    }

    function i() {
        t = new WeakMap
    }
    return {
        get: n,
        dispose: i
    }
}
class bu extends ft {
    constructor(e) {
        super();
        this.type = "MeshDepthMaterial", this.depthPacking = Np, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
    }
}
bu.prototype.isMeshDepthMaterial = !0;
class Su extends ft {
    constructor(e) {
        super();
        this.type = "MeshDistanceMaterial", this.referencePosition = new A, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this
    }
}
Su.prototype.isMeshDistanceMaterial = !0;
const Sy = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
    Ty = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
uniform float samples;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;

function Tu(r, e, t) {
    let n = new Ws;
    const i = new K,
        s = new K,
        a = new Ge,
        o = new bu({
            depthPacking: Op
        }),
        l = new Su,
        c = {},
        u = t.maxTextureSize,
        h = {
            0: ut,
            1: xi,
            2: ti
        },
        f = new ci({
            uniforms: {
                shadow_pass: {
                    value: null
                },
                resolution: {
                    value: new K
                },
                radius: {
                    value: 4
                },
                samples: {
                    value: 8
                }
            },
            vertexShader: Sy,
            fragmentShader: Ty
        }),
        d = f.clone();
    d.defines.HORIZONTAL_PASS = 1;
    const p = new He;
    p.setAttribute("position", new $e(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
    const v = new _t(p, f),
        y = this;
    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = $l, this.render = function(_, w, T) {
        if (y.enabled === !1 || y.autoUpdate === !1 && y.needsUpdate === !1 || _.length === 0) return;
        const M = r.getRenderTarget(),
            L = r.getActiveCubeFace(),
            H = r.getActiveMipmapLevel(),
            P = r.state;
        P.setBlending(En), P.buffers.color.setClear(1, 1, 1, 1), P.buffers.depth.setTest(!0), P.setScissorTest(!1);
        for (let R = 0, j = _.length; R < j; R++) {
            const I = _[R],
                F = I.shadow;
            if (F === void 0) {
                console.warn("THREE.WebGLShadowMap:", I, "has no shadow.");
                continue
            }
            if (F.autoUpdate === !1 && F.needsUpdate === !1) continue;
            i.copy(F.mapSize);
            const B = F.getFrameExtents();
            if (i.multiply(B), s.copy(F.mapSize), (i.x > u || i.y > u) && (i.x > u && (s.x = Math.floor(u / B.x), i.x = s.x * B.x, F.mapSize.x = s.x), i.y > u && (s.y = Math.floor(u / B.y), i.y = s.y * B.y, F.mapSize.y = s.y)), F.map === null && !F.isPointLightShadow && this.type === br) {
                const O = {
                    minFilter: Lt,
                    magFilter: Lt,
                    format: yt
                };
                F.map = new en(i.x, i.y, O), F.map.texture.name = I.name + ".shadowMap", F.mapPass = new en(i.x, i.y, O), F.camera.updateProjectionMatrix()
            }
            if (F.map === null) {
                const O = {
                    minFilter: ht,
                    magFilter: ht,
                    format: yt
                };
                F.map = new en(i.x, i.y, O), F.map.texture.name = I.name + ".shadowMap", F.camera.updateProjectionMatrix()
            }
            r.setRenderTarget(F.map), r.clear();
            const N = F.getViewportCount();
            for (let O = 0; O < N; O++) {
                const Y = F.getViewport(O);
                a.set(s.x * Y.x, s.y * Y.y, s.x * Y.z, s.y * Y.w), P.viewport(a), F.updateMatrices(I, O), n = F.getFrustum(), x(w, T, F.camera, I, this.type)
            }!F.isPointLightShadow && this.type === br && m(F, T), F.needsUpdate = !1
        }
        y.needsUpdate = !1, r.setRenderTarget(M, L, H)
    };

    function m(_, w) {
        const T = e.update(v);
        f.uniforms.shadow_pass.value = _.map.texture, f.uniforms.resolution.value = _.mapSize, f.uniforms.radius.value = _.radius, f.uniforms.samples.value = _.blurSamples, r.setRenderTarget(_.mapPass), r.clear(), r.renderBufferDirect(w, null, T, f, v, null), d.uniforms.shadow_pass.value = _.mapPass.texture, d.uniforms.resolution.value = _.mapSize, d.uniforms.radius.value = _.radius, d.uniforms.samples.value = _.blurSamples, r.setRenderTarget(_.map), r.clear(), r.renderBufferDirect(w, null, T, d, v, null)
    }

    function g(_, w, T, M, L, H, P) {
        let R = null;
        const j = M.isPointLight === !0 ? _.customDistanceMaterial : _.customDepthMaterial;
        if (j !== void 0 ? R = j : R = M.isPointLight === !0 ? l : o, r.localClippingEnabled && T.clipShadows === !0 && T.clippingPlanes.length !== 0 || T.displacementMap && T.displacementScale !== 0 || T.alphaMap && T.alphaTest > 0) {
            const I = R.uuid,
                F = T.uuid;
            let B = c[I];
            B === void 0 && (B = {}, c[I] = B);
            let N = B[F];
            N === void 0 && (N = R.clone(), B[F] = N), R = N
        }
        return R.visible = T.visible, R.wireframe = T.wireframe, P === br ? R.side = T.shadowSide !== null ? T.shadowSide : T.side : R.side = T.shadowSide !== null ? T.shadowSide : h[T.side], R.alphaMap = T.alphaMap, R.alphaTest = T.alphaTest, R.clipShadows = T.clipShadows, R.clippingPlanes = T.clippingPlanes, R.clipIntersection = T.clipIntersection, R.displacementMap = T.displacementMap, R.displacementScale = T.displacementScale, R.displacementBias = T.displacementBias, R.wireframeLinewidth = T.wireframeLinewidth, R.linewidth = T.linewidth, M.isPointLight === !0 && R.isMeshDistanceMaterial === !0 && (R.referencePosition.setFromMatrixPosition(M.matrixWorld), R.nearDistance = L, R.farDistance = H), R
    }

    function x(_, w, T, M, L) {
        if (_.visible === !1) return;
        if (_.layers.test(w.layers) && (_.isMesh || _.isLine || _.isPoints) && (_.castShadow || _.receiveShadow && L === br) && (!_.frustumCulled || n.intersectsObject(_))) {
            _.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse, _.matrixWorld);
            const R = e.update(_),
                j = _.material;
            if (Array.isArray(j)) {
                const I = R.groups;
                for (let F = 0, B = I.length; F < B; F++) {
                    const N = I[F],
                        O = j[N.materialIndex];
                    if (O && O.visible) {
                        const Y = g(_, R, O, M, T.near, T.far, L);
                        r.renderBufferDirect(T, null, R, Y, _, N)
                    }
                }
            } else if (j.visible) {
                const I = g(_, R, j, M, T.near, T.far, L);
                r.renderBufferDirect(T, null, R, I, _, null)
            }
        }
        const P = _.children;
        for (let R = 0, j = P.length; R < j; R++) x(P[R], w, T, M, L)
    }
}

function Ey(r, e, t) {
    const n = t.isWebGL2;

    function i() {
        let D = !1;
        const ce = new Ge;
        let Z = null;
        const de = new Ge(0, 0, 0, 0);
        return {
            setMask: function(C) {
                Z !== C && !D && (r.colorMask(C, C, C, C), Z = C)
            },
            setLocked: function(C) {
                D = C
            },
            setClear: function(C, ie, De, Oe, lt) {
                lt === !0 && (C *= Oe, ie *= Oe, De *= Oe), ce.set(C, ie, De, Oe), de.equals(ce) === !1 && (r.clearColor(C, ie, De, Oe), de.copy(ce))
            },
            reset: function() {
                D = !1, Z = null, de.set(-1, 0, 0, 0)
            }
        }
    }

    function s() {
        let D = !1,
            ce = null,
            Z = null,
            de = null;
        return {
            setTest: function(C) {
                C ? J(2929) : se(2929)
            },
            setMask: function(C) {
                ce !== C && !D && (r.depthMask(C), ce = C)
            },
            setFunc: function(C) {
                if (Z !== C) {
                    if (C) switch (C) {
                        case bd:
                            r.depthFunc(512);
                            break;
                        case Sd:
                            r.depthFunc(519);
                            break;
                        case Td:
                            r.depthFunc(513);
                            break;
                        case Ia:
                            r.depthFunc(515);
                            break;
                        case Ed:
                            r.depthFunc(514);
                            break;
                        case Ad:
                            r.depthFunc(518);
                            break;
                        case Ld:
                            r.depthFunc(516);
                            break;
                        case Rd:
                            r.depthFunc(517);
                            break;
                        default:
                            r.depthFunc(515)
                    } else r.depthFunc(515);
                    Z = C
                }
            },
            setLocked: function(C) {
                D = C
            },
            setClear: function(C) {
                de !== C && (r.clearDepth(C), de = C)
            },
            reset: function() {
                D = !1, ce = null, Z = null, de = null
            }
        }
    }

    function a() {
        let D = !1,
            ce = null,
            Z = null,
            de = null,
            C = null,
            ie = null,
            De = null,
            Oe = null,
            lt = null;
        return {
            setTest: function(Xe) {
                D || (Xe ? J(2960) : se(2960))
            },
            setMask: function(Xe) {
                ce !== Xe && !D && (r.stencilMask(Xe), ce = Xe)
            },
            setFunc: function(Xe, At, Ot) {
                (Z !== Xe || de !== At || C !== Ot) && (r.stencilFunc(Xe, At, Ot), Z = Xe, de = At, C = Ot)
            },
            setOp: function(Xe, At, Ot) {
                (ie !== Xe || De !== At || Oe !== Ot) && (r.stencilOp(Xe, At, Ot), ie = Xe, De = At, Oe = Ot)
            },
            setLocked: function(Xe) {
                D = Xe
            },
            setClear: function(Xe) {
                lt !== Xe && (r.clearStencil(Xe), lt = Xe)
            },
            reset: function() {
                D = !1, ce = null, Z = null, de = null, C = null, ie = null, De = null, Oe = null, lt = null
            }
        }
    }
    const o = new i,
        l = new s,
        c = new a;
    let u = {},
        h = null,
        f = {},
        d = null,
        p = !1,
        v = null,
        y = null,
        m = null,
        g = null,
        x = null,
        _ = null,
        w = null,
        T = !1,
        M = null,
        L = null,
        H = null,
        P = null,
        R = null;
    const j = r.getParameter(35661);
    let I = !1,
        F = 0;
    const B = r.getParameter(7938);
    B.indexOf("WebGL") !== -1 ? (F = parseFloat(/^WebGL (\d)/.exec(B)[1]), I = F >= 1) : B.indexOf("OpenGL ES") !== -1 && (F = parseFloat(/^OpenGL ES (\d)/.exec(B)[1]), I = F >= 2);
    let N = null,
        O = {};
    const Y = r.getParameter(3088),
        re = r.getParameter(2978),
        he = new Ge().fromArray(Y),
        Q = new Ge().fromArray(re);

    function ge(D, ce, Z) {
        const de = new Uint8Array(4),
            C = r.createTexture();
        r.bindTexture(D, C), r.texParameteri(D, 10241, 9728), r.texParameteri(D, 10240, 9728);
        for (let ie = 0; ie < Z; ie++) r.texImage2D(ce + ie, 0, 6408, 1, 1, 0, 6408, 5121, de);
        return C
    }
    const X = {};
    X[3553] = ge(3553, 3553, 1), X[34067] = ge(34067, 34069, 6), o.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), J(2929), l.setFunc(Ia), $(!1), ne(Kl), J(2884), Ee(En);

    function J(D) {
        u[D] !== !0 && (r.enable(D), u[D] = !0)
    }

    function se(D) {
        u[D] !== !1 && (r.disable(D), u[D] = !1)
    }

    function k(D) {
        D !== h && (r.bindFramebuffer(36160, D), h = D)
    }

    function ve(D, ce) {
        return ce === null && h !== null && (ce = h), f[D] !== ce ? (r.bindFramebuffer(D, ce), f[D] = ce, n && (D === 36009 && (f[36160] = ce), D === 36160 && (f[36009] = ce)), !0) : !1
    }

    function Me(D) {
        return d !== D ? (r.useProgram(D), d = D, !0) : !1
    }
    const fe = {
        [_i]: 32774,
        [fd]: 32778,
        [dd]: 32779
    };
    if (n) fe[ic] = 32775, fe[rc] = 32776;
    else {
        const D = e.get("EXT_blend_minmax");
        D !== null && (fe[ic] = D.MIN_EXT, fe[rc] = D.MAX_EXT)
    }
    const me = {
        [pd]: 0,
        [md]: 1,
        [gd]: 768,
        [sc]: 770,
        [wd]: 776,
        [_d]: 774,
        [yd]: 772,
        [vd]: 769,
        [ac]: 771,
        [Md]: 775,
        [xd]: 773
    };

    function Ee(D, ce, Z, de, C, ie, De, Oe) {
        if (D === En) {
            p === !0 && (se(3042), p = !1);
            return
        }
        if (p === !1 && (J(3042), p = !0), D !== hd) {
            if (D !== v || Oe !== T) {
                if ((y !== _i || x !== _i) && (r.blendEquation(32774), y = _i, x = _i), Oe) switch (D) {
                    case Sr:
                        r.blendFuncSeparate(1, 771, 1, 771);
                        break;
                    case ec:
                        r.blendFunc(1, 1);
                        break;
                    case tc:
                        r.blendFuncSeparate(0, 0, 769, 771);
                        break;
                    case nc:
                        r.blendFuncSeparate(0, 768, 0, 770);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", D);
                        break
                } else switch (D) {
                    case Sr:
                        r.blendFuncSeparate(770, 771, 1, 771);
                        break;
                    case ec:
                        r.blendFunc(770, 1);
                        break;
                    case tc:
                        r.blendFunc(0, 769);
                        break;
                    case nc:
                        r.blendFunc(0, 768);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", D);
                        break
                }
                m = null, g = null, _ = null, w = null, v = D, T = Oe
            }
            return
        }
        C = C || ce, ie = ie || Z, De = De || de, (ce !== y || C !== x) && (r.blendEquationSeparate(fe[ce], fe[C]), y = ce, x = C), (Z !== m || de !== g || ie !== _ || De !== w) && (r.blendFuncSeparate(me[Z], me[de], me[ie], me[De]), m = Z, g = de, _ = ie, w = De), v = D, T = null
    }

    function W(D, ce) {
        D.side === ti ? se(2884) : J(2884);
        let Z = D.side === ut;
        ce && (Z = !Z), $(Z), D.blending === Sr && D.transparent === !1 ? Ee(En) : Ee(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.premultipliedAlpha), l.setFunc(D.depthFunc), l.setTest(D.depthTest), l.setMask(D.depthWrite), o.setMask(D.colorWrite);
        const de = D.stencilWrite;
        c.setTest(de), de && (c.setMask(D.stencilWriteMask), c.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), c.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), le(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === !0 ? J(32926) : se(32926)
    }

    function $(D) {
        M !== D && (D ? r.frontFace(2304) : r.frontFace(2305), M = D)
    }

    function ne(D) {
        D !== ld ? (J(2884), D !== L && (D === Kl ? r.cullFace(1029) : D === cd ? r.cullFace(1028) : r.cullFace(1032))) : se(2884), L = D
    }

    function ye(D) {
        D !== H && (I && r.lineWidth(D), H = D)
    }

    function le(D, ce, Z) {
        D ? (J(32823), (P !== ce || R !== Z) && (r.polygonOffset(ce, Z), P = ce, R = Z)) : se(32823)
    }

    function E(D) {
        D ? J(3089) : se(3089)
    }

    function S(D) {
        D === void 0 && (D = 33984 + j - 1), N !== D && (r.activeTexture(D), N = D)
    }

    function V(D, ce) {
        N === null && S();
        let Z = O[N];
        Z === void 0 && (Z = {
            type: void 0,
            texture: void 0
        }, O[N] = Z), (Z.type !== D || Z.texture !== ce) && (r.bindTexture(D, ce || X[D]), Z.type = D, Z.texture = ce)
    }

    function te() {
        const D = O[N];
        D !== void 0 && D.type !== void 0 && (r.bindTexture(D.type, null), D.type = void 0, D.texture = void 0)
    }

    function ee() {
        try {
            r.compressedTexImage2D.apply(r, arguments)
        } catch (D) {
            console.error("THREE.WebGLState:", D)
        }
    }

    function pe() {
        try {
            r.texImage2D.apply(r, arguments)
        } catch (D) {
            console.error("THREE.WebGLState:", D)
        }
    }

    function be() {
        try {
            r.texImage3D.apply(r, arguments)
        } catch (D) {
            console.error("THREE.WebGLState:", D)
        }
    }

    function _e(D) {
        he.equals(D) === !1 && (r.scissor(D.x, D.y, D.z, D.w), he.copy(D))
    }

    function Ae(D) {
        Q.equals(D) === !1 && (r.viewport(D.x, D.y, D.z, D.w), Q.copy(D))
    }

    function xe() {
        r.disable(3042), r.disable(2884), r.disable(2929), r.disable(32823), r.disable(3089), r.disable(2960), r.disable(32926), r.blendEquation(32774), r.blendFunc(1, 0), r.blendFuncSeparate(1, 0, 1, 0), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(513), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(519, 0, 4294967295), r.stencilOp(7680, 7680, 7680), r.clearStencil(0), r.cullFace(1029), r.frontFace(2305), r.polygonOffset(0, 0), r.activeTexture(33984), r.bindFramebuffer(36160, null), n === !0 && (r.bindFramebuffer(36009, null), r.bindFramebuffer(36008, null)), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), u = {}, N = null, O = {}, h = null, f = {}, d = null, p = !1, v = null, y = null, m = null, g = null, x = null, _ = null, w = null, T = !1, M = null, L = null, H = null, P = null, R = null, he.set(0, 0, r.canvas.width, r.canvas.height), Q.set(0, 0, r.canvas.width, r.canvas.height), o.reset(), l.reset(), c.reset()
    }
    return {
        buffers: {
            color: o,
            depth: l,
            stencil: c
        },
        enable: J,
        disable: se,
        bindFramebuffer: ve,
        bindXRFramebuffer: k,
        useProgram: Me,
        setBlending: Ee,
        setMaterial: W,
        setFlipSided: $,
        setCullFace: ne,
        setLineWidth: ye,
        setPolygonOffset: le,
        setScissorTest: E,
        activeTexture: S,
        bindTexture: V,
        unbindTexture: te,
        compressedTexImage2D: ee,
        texImage2D: pe,
        texImage3D: be,
        scissor: _e,
        viewport: Ae,
        reset: xe
    }
}

function Ay(r, e, t, n, i, s, a) {
    const o = i.isWebGL2,
        l = i.maxTextures,
        c = i.maxCubemapSize,
        u = i.maxTextureSize,
        h = i.maxSamples,
        f = new WeakMap;
    let d, p = !1;
    try {
        p = typeof OffscreenCanvas != "undefined" && new OffscreenCanvas(1, 1).getContext("2d") !== null
    } catch {}

    function v(E, S) {
        return p ? new OffscreenCanvas(E, S) : Ts("canvas")
    }

    function y(E, S, V, te) {
        let ee = 1;
        if ((E.width > te || E.height > te) && (ee = te / Math.max(E.width, E.height)), ee < 1 || S === !0)
            if (typeof HTMLImageElement != "undefined" && E instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && E instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && E instanceof ImageBitmap) {
                const pe = S ? Ec : Math.floor,
                    be = pe(ee * E.width),
                    _e = pe(ee * E.height);
                d === void 0 && (d = v(be, _e));
                const Ae = V ? v(be, _e) : d;
                return Ae.width = be, Ae.height = _e, Ae.getContext("2d").drawImage(E, 0, 0, be, _e), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + E.width + "x" + E.height + ") to (" + be + "x" + _e + ")."), Ae
            } else return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + E.width + "x" + E.height + ")."), E;
        return E
    }

    function m(E) {
        return Va(E.width) && Va(E.height)
    }

    function g(E) {
        return o ? !1 : E.wrapS !== vt || E.wrapT !== vt || E.minFilter !== ht && E.minFilter !== Lt
    }

    function x(E, S) {
        return E.generateMipmaps && S && E.minFilter !== ht && E.minFilter !== Lt
    }

    function _(E, S, V, te, ee = 1) {
        r.generateMipmap(E);
        const pe = n.get(S);
        pe.__maxMipLevel = Math.log2(Math.max(V, te, ee))
    }

    function w(E, S, V, te) {
        if (o === !1) return S;
        if (E !== null) {
            if (r[E] !== void 0) return r[E];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'")
        }
        let ee = S;
        return S === 6403 && (V === 5126 && (ee = 33326), V === 5131 && (ee = 33325), V === 5121 && (ee = 33321)), S === 6407 && (V === 5126 && (ee = 34837), V === 5131 && (ee = 34843), V === 5121 && (ee = 32849)), S === 6408 && (V === 5126 && (ee = 34836), V === 5131 && (ee = 34842), V === 5121 && (ee = te === Rt ? 35907 : 32856)), (ee === 33325 || ee === 33326 || ee === 34842 || ee === 34836) && e.get("EXT_color_buffer_float"), ee
    }

    function T(E) {
        return E === ht || E === Na || E === Oa ? 9728 : 9729
    }

    function M(E) {
        const S = E.target;
        S.removeEventListener("dispose", M), H(S), S.isVideoTexture && f.delete(S), a.memory.textures--
    }

    function L(E) {
        const S = E.target;
        S.removeEventListener("dispose", L), P(S)
    }

    function H(E) {
        const S = n.get(E);
        S.__webglInit !== void 0 && (r.deleteTexture(S.__webglTexture), n.remove(E))
    }

    function P(E) {
        const S = E.texture,
            V = n.get(E),
            te = n.get(S);
        if (!!E) {
            if (te.__webglTexture !== void 0 && (r.deleteTexture(te.__webglTexture), a.memory.textures--), E.depthTexture && E.depthTexture.dispose(), E.isWebGLCubeRenderTarget)
                for (let ee = 0; ee < 6; ee++) r.deleteFramebuffer(V.__webglFramebuffer[ee]), V.__webglDepthbuffer && r.deleteRenderbuffer(V.__webglDepthbuffer[ee]);
            else r.deleteFramebuffer(V.__webglFramebuffer), V.__webglDepthbuffer && r.deleteRenderbuffer(V.__webglDepthbuffer), V.__webglMultisampledFramebuffer && r.deleteFramebuffer(V.__webglMultisampledFramebuffer), V.__webglColorRenderbuffer && r.deleteRenderbuffer(V.__webglColorRenderbuffer), V.__webglDepthRenderbuffer && r.deleteRenderbuffer(V.__webglDepthRenderbuffer);
            if (E.isWebGLMultipleRenderTargets)
                for (let ee = 0, pe = S.length; ee < pe; ee++) {
                    const be = n.get(S[ee]);
                    be.__webglTexture && (r.deleteTexture(be.__webglTexture), a.memory.textures--), n.remove(S[ee])
                }
            n.remove(S), n.remove(E)
        }
    }
    let R = 0;

    function j() {
        R = 0
    }

    function I() {
        const E = R;
        return E >= l && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + l), R += 1, E
    }

    function F(E, S) {
        const V = n.get(E);
        if (E.isVideoTexture && W(E), E.version > 0 && V.__version !== E.version) {
            const te = E.image;
            if (te === void 0) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
            else if (te.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
            else {
                ge(V, E, S);
                return
            }
        }
        t.activeTexture(33984 + S), t.bindTexture(3553, V.__webglTexture)
    }

    function B(E, S) {
        const V = n.get(E);
        if (E.version > 0 && V.__version !== E.version) {
            ge(V, E, S);
            return
        }
        t.activeTexture(33984 + S), t.bindTexture(35866, V.__webglTexture)
    }

    function N(E, S) {
        const V = n.get(E);
        if (E.version > 0 && V.__version !== E.version) {
            ge(V, E, S);
            return
        }
        t.activeTexture(33984 + S), t.bindTexture(32879, V.__webglTexture)
    }

    function O(E, S) {
        const V = n.get(E);
        if (E.version > 0 && V.__version !== E.version) {
            X(V, E, S);
            return
        }
        t.activeTexture(33984 + S), t.bindTexture(34067, V.__webglTexture)
    }
    const Y = {
            [An]: 10497,
            [vt]: 33071,
            [xs]: 33648
        },
        re = {
            [ht]: 9728,
            [Na]: 9984,
            [Oa]: 9986,
            [Lt]: 9729,
            [lc]: 9985,
            [Mi]: 9987
        };

    function he(E, S, V) {
        if (V ? (r.texParameteri(E, 10242, Y[S.wrapS]), r.texParameteri(E, 10243, Y[S.wrapT]), (E === 32879 || E === 35866) && r.texParameteri(E, 32882, Y[S.wrapR]), r.texParameteri(E, 10240, re[S.magFilter]), r.texParameteri(E, 10241, re[S.minFilter])) : (r.texParameteri(E, 10242, 33071), r.texParameteri(E, 10243, 33071), (E === 32879 || E === 35866) && r.texParameteri(E, 32882, 33071), (S.wrapS !== vt || S.wrapT !== vt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), r.texParameteri(E, 10240, T(S.magFilter)), r.texParameteri(E, 10241, T(S.minFilter)), S.minFilter !== ht && S.minFilter !== Lt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
            const te = e.get("EXT_texture_filter_anisotropic");
            if (S.type === hn && e.has("OES_texture_float_linear") === !1 || o === !1 && S.type === wi && e.has("OES_texture_half_float_linear") === !1) return;
            (S.anisotropy > 1 || n.get(S).__currentAnisotropy) && (r.texParameterf(E, te.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(S.anisotropy, i.getMaxAnisotropy())), n.get(S).__currentAnisotropy = S.anisotropy)
        }
    }

    function Q(E, S) {
        E.__webglInit === void 0 && (E.__webglInit = !0, S.addEventListener("dispose", M), E.__webglTexture = r.createTexture(), a.memory.textures++)
    }

    function ge(E, S, V) {
        let te = 3553;
        S.isDataTexture2DArray && (te = 35866), S.isDataTexture3D && (te = 32879), Q(E, S), t.activeTexture(33984 + V), t.bindTexture(te, E.__webglTexture), r.pixelStorei(37440, S.flipY), r.pixelStorei(37441, S.premultiplyAlpha), r.pixelStorei(3317, S.unpackAlignment), r.pixelStorei(37443, 0);
        const ee = g(S) && m(S.image) === !1,
            pe = y(S.image, ee, !1, u),
            be = m(pe) || o,
            _e = s.convert(S.format);
        let Ae = s.convert(S.type),
            xe = w(S.internalFormat, _e, Ae, S.encoding);
        he(te, S, be);
        let D;
        const ce = S.mipmaps;
        if (S.isDepthTexture) xe = 6402, o ? S.type === hn ? xe = 36012 : S.type === Ms ? xe = 33190 : S.type === Tr ? xe = 35056 : xe = 33189 : S.type === hn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), S.format === bi && xe === 6402 && S.type !== _s && S.type !== Ms && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), S.type = _s, Ae = s.convert(S.type)), S.format === Er && xe === 6402 && (xe = 34041, S.type !== Tr && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), S.type = Tr, Ae = s.convert(S.type))), t.texImage2D(3553, 0, xe, pe.width, pe.height, 0, _e, Ae, null);
        else if (S.isDataTexture)
            if (ce.length > 0 && be) {
                for (let Z = 0, de = ce.length; Z < de; Z++) D = ce[Z], t.texImage2D(3553, Z, xe, D.width, D.height, 0, _e, Ae, D.data);
                S.generateMipmaps = !1, E.__maxMipLevel = ce.length - 1
            } else t.texImage2D(3553, 0, xe, pe.width, pe.height, 0, _e, Ae, pe.data), E.__maxMipLevel = 0;
        else if (S.isCompressedTexture) {
            for (let Z = 0, de = ce.length; Z < de; Z++) D = ce[Z], S.format !== yt && S.format !== ii ? _e !== null ? t.compressedTexImage2D(3553, Z, xe, D.width, D.height, 0, D.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : t.texImage2D(3553, Z, xe, D.width, D.height, 0, _e, Ae, D.data);
            E.__maxMipLevel = ce.length - 1
        } else if (S.isDataTexture2DArray) t.texImage3D(35866, 0, xe, pe.width, pe.height, pe.depth, 0, _e, Ae, pe.data), E.__maxMipLevel = 0;
        else if (S.isDataTexture3D) t.texImage3D(32879, 0, xe, pe.width, pe.height, pe.depth, 0, _e, Ae, pe.data), E.__maxMipLevel = 0;
        else if (ce.length > 0 && be) {
            for (let Z = 0, de = ce.length; Z < de; Z++) D = ce[Z], t.texImage2D(3553, Z, xe, _e, Ae, D);
            S.generateMipmaps = !1, E.__maxMipLevel = ce.length - 1
        } else t.texImage2D(3553, 0, xe, _e, Ae, pe), E.__maxMipLevel = 0;
        x(S, be) && _(te, S, pe.width, pe.height), E.__version = S.version, S.onUpdate && S.onUpdate(S)
    }

    function X(E, S, V) {
        if (S.image.length !== 6) return;
        Q(E, S), t.activeTexture(33984 + V), t.bindTexture(34067, E.__webglTexture), r.pixelStorei(37440, S.flipY), r.pixelStorei(37441, S.premultiplyAlpha), r.pixelStorei(3317, S.unpackAlignment), r.pixelStorei(37443, 0);
        const te = S && (S.isCompressedTexture || S.image[0].isCompressedTexture),
            ee = S.image[0] && S.image[0].isDataTexture,
            pe = [];
        for (let Z = 0; Z < 6; Z++) !te && !ee ? pe[Z] = y(S.image[Z], !1, !0, c) : pe[Z] = ee ? S.image[Z].image : S.image[Z];
        const be = pe[0],
            _e = m(be) || o,
            Ae = s.convert(S.format),
            xe = s.convert(S.type),
            D = w(S.internalFormat, Ae, xe, S.encoding);
        he(34067, S, _e);
        let ce;
        if (te) {
            for (let Z = 0; Z < 6; Z++) {
                ce = pe[Z].mipmaps;
                for (let de = 0; de < ce.length; de++) {
                    const C = ce[de];
                    S.format !== yt && S.format !== ii ? Ae !== null ? t.compressedTexImage2D(34069 + Z, de, D, C.width, C.height, 0, C.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : t.texImage2D(34069 + Z, de, D, C.width, C.height, 0, Ae, xe, C.data)
                }
            }
            E.__maxMipLevel = ce.length - 1
        } else {
            ce = S.mipmaps;
            for (let Z = 0; Z < 6; Z++)
                if (ee) {
                    t.texImage2D(34069 + Z, 0, D, pe[Z].width, pe[Z].height, 0, Ae, xe, pe[Z].data);
                    for (let de = 0; de < ce.length; de++) {
                        const ie = ce[de].image[Z].image;
                        t.texImage2D(34069 + Z, de + 1, D, ie.width, ie.height, 0, Ae, xe, ie.data)
                    }
                } else {
                    t.texImage2D(34069 + Z, 0, D, Ae, xe, pe[Z]);
                    for (let de = 0; de < ce.length; de++) {
                        const C = ce[de];
                        t.texImage2D(34069 + Z, de + 1, D, Ae, xe, C.image[Z])
                    }
                }
            E.__maxMipLevel = ce.length
        }
        x(S, _e) && _(34067, S, be.width, be.height), E.__version = S.version, S.onUpdate && S.onUpdate(S)
    }

    function J(E, S, V, te, ee) {
        const pe = s.convert(V.format),
            be = s.convert(V.type),
            _e = w(V.internalFormat, pe, be, V.encoding);
        ee === 32879 || ee === 35866 ? t.texImage3D(ee, 0, _e, S.width, S.height, S.depth, 0, pe, be, null) : t.texImage2D(ee, 0, _e, S.width, S.height, 0, pe, be, null), t.bindFramebuffer(36160, E), r.framebufferTexture2D(36160, te, ee, n.get(V).__webglTexture, 0), t.bindFramebuffer(36160, null)
    }

    function se(E, S, V) {
        if (r.bindRenderbuffer(36161, E), S.depthBuffer && !S.stencilBuffer) {
            let te = 33189;
            if (V) {
                const ee = S.depthTexture;
                ee && ee.isDepthTexture && (ee.type === hn ? te = 36012 : ee.type === Ms && (te = 33190));
                const pe = Ee(S);
                r.renderbufferStorageMultisample(36161, pe, te, S.width, S.height)
            } else r.renderbufferStorage(36161, te, S.width, S.height);
            r.framebufferRenderbuffer(36160, 36096, 36161, E)
        } else if (S.depthBuffer && S.stencilBuffer) {
            if (V) {
                const te = Ee(S);
                r.renderbufferStorageMultisample(36161, te, 35056, S.width, S.height)
            } else r.renderbufferStorage(36161, 34041, S.width, S.height);
            r.framebufferRenderbuffer(36160, 33306, 36161, E)
        } else {
            const te = S.isWebGLMultipleRenderTargets === !0 ? S.texture[0] : S.texture,
                ee = s.convert(te.format),
                pe = s.convert(te.type),
                be = w(te.internalFormat, ee, pe, te.encoding);
            if (V) {
                const _e = Ee(S);
                r.renderbufferStorageMultisample(36161, _e, be, S.width, S.height)
            } else r.renderbufferStorage(36161, be, S.width, S.height)
        }
        r.bindRenderbuffer(36161, null)
    }

    function k(E, S) {
        if (S && S.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
        if (t.bindFramebuffer(36160, E), !(S.depthTexture && S.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
        (!n.get(S.depthTexture).__webglTexture || S.depthTexture.image.width !== S.width || S.depthTexture.image.height !== S.height) && (S.depthTexture.image.width = S.width, S.depthTexture.image.height = S.height, S.depthTexture.needsUpdate = !0), F(S.depthTexture, 0);
        const te = n.get(S.depthTexture).__webglTexture;
        if (S.depthTexture.format === bi) r.framebufferTexture2D(36160, 36096, 3553, te, 0);
        else if (S.depthTexture.format === Er) r.framebufferTexture2D(36160, 33306, 3553, te, 0);
        else throw new Error("Unknown depthTexture format")
    }

    function ve(E) {
        const S = n.get(E),
            V = E.isWebGLCubeRenderTarget === !0;
        if (E.depthTexture) {
            if (V) throw new Error("target.depthTexture not supported in Cube render targets");
            k(S.__webglFramebuffer, E)
        } else if (V) {
            S.__webglDepthbuffer = [];
            for (let te = 0; te < 6; te++) t.bindFramebuffer(36160, S.__webglFramebuffer[te]), S.__webglDepthbuffer[te] = r.createRenderbuffer(), se(S.__webglDepthbuffer[te], E, !1)
        } else t.bindFramebuffer(36160, S.__webglFramebuffer), S.__webglDepthbuffer = r.createRenderbuffer(), se(S.__webglDepthbuffer, E, !1);
        t.bindFramebuffer(36160, null)
    }

    function Me(E) {
        const S = E.texture,
            V = n.get(E),
            te = n.get(S);
        E.addEventListener("dispose", L), E.isWebGLMultipleRenderTargets !== !0 && (te.__webglTexture = r.createTexture(), te.__version = S.version, a.memory.textures++);
        const ee = E.isWebGLCubeRenderTarget === !0,
            pe = E.isWebGLMultipleRenderTargets === !0,
            be = E.isWebGLMultisampleRenderTarget === !0,
            _e = S.isDataTexture3D || S.isDataTexture2DArray,
            Ae = m(E) || o;
        if (o && S.format === ii && (S.type === hn || S.type === wi) && (S.format = yt, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), ee) {
            V.__webglFramebuffer = [];
            for (let xe = 0; xe < 6; xe++) V.__webglFramebuffer[xe] = r.createFramebuffer()
        } else if (V.__webglFramebuffer = r.createFramebuffer(), pe)
            if (i.drawBuffers) {
                const xe = E.texture;
                for (let D = 0, ce = xe.length; D < ce; D++) {
                    const Z = n.get(xe[D]);
                    Z.__webglTexture === void 0 && (Z.__webglTexture = r.createTexture(), a.memory.textures++)
                }
            } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
        else if (be)
            if (o) {
                V.__webglMultisampledFramebuffer = r.createFramebuffer(), V.__webglColorRenderbuffer = r.createRenderbuffer(), r.bindRenderbuffer(36161, V.__webglColorRenderbuffer);
                const xe = s.convert(S.format),
                    D = s.convert(S.type),
                    ce = w(S.internalFormat, xe, D, S.encoding),
                    Z = Ee(E);
                r.renderbufferStorageMultisample(36161, Z, ce, E.width, E.height), t.bindFramebuffer(36160, V.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(36160, 36064, 36161, V.__webglColorRenderbuffer), r.bindRenderbuffer(36161, null), E.depthBuffer && (V.__webglDepthRenderbuffer = r.createRenderbuffer(), se(V.__webglDepthRenderbuffer, E, !0)), t.bindFramebuffer(36160, null)
            } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
        if (ee) {
            t.bindTexture(34067, te.__webglTexture), he(34067, S, Ae);
            for (let xe = 0; xe < 6; xe++) J(V.__webglFramebuffer[xe], E, S, 36064, 34069 + xe);
            x(S, Ae) && _(34067, S, E.width, E.height), t.unbindTexture()
        } else if (pe) {
            const xe = E.texture;
            for (let D = 0, ce = xe.length; D < ce; D++) {
                const Z = xe[D],
                    de = n.get(Z);
                t.bindTexture(3553, de.__webglTexture), he(3553, Z, Ae), J(V.__webglFramebuffer, E, Z, 36064 + D, 3553), x(Z, Ae) && _(3553, Z, E.width, E.height)
            }
            t.unbindTexture()
        } else {
            let xe = 3553;
            _e && (o ? xe = S.isDataTexture3D ? 32879 : 35866 : console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")), t.bindTexture(xe, te.__webglTexture), he(xe, S, Ae), J(V.__webglFramebuffer, E, S, 36064, xe), x(S, Ae) && _(xe, S, E.width, E.height, E.depth), t.unbindTexture()
        }
        E.depthBuffer && ve(E)
    }

    function fe(E) {
        const S = m(E) || o,
            V = E.isWebGLMultipleRenderTargets === !0 ? E.texture : [E.texture];
        for (let te = 0, ee = V.length; te < ee; te++) {
            const pe = V[te];
            if (x(pe, S)) {
                const be = E.isWebGLCubeRenderTarget ? 34067 : 3553,
                    _e = n.get(pe).__webglTexture;
                t.bindTexture(be, _e), _(be, pe, E.width, E.height), t.unbindTexture()
            }
        }
    }

    function me(E) {
        if (E.isWebGLMultisampleRenderTarget)
            if (o) {
                const S = E.width,
                    V = E.height;
                let te = 16384;
                E.depthBuffer && (te |= 256), E.stencilBuffer && (te |= 1024);
                const ee = n.get(E);
                t.bindFramebuffer(36008, ee.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, ee.__webglFramebuffer), r.blitFramebuffer(0, 0, S, V, 0, 0, S, V, te, 9728), t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, ee.__webglMultisampledFramebuffer)
            } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
    }

    function Ee(E) {
        return o && E.isWebGLMultisampleRenderTarget ? Math.min(h, E.samples) : 0
    }

    function W(E) {
        const S = a.render.frame;
        f.get(E) !== S && (f.set(E, S), E.update())
    }
    let $ = !1,
        ne = !1;

    function ye(E, S) {
        E && E.isWebGLRenderTarget && ($ === !1 && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), $ = !0), E = E.texture), F(E, S)
    }

    function le(E, S) {
        E && E.isWebGLCubeRenderTarget && (ne === !1 && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), ne = !0), E = E.texture), O(E, S)
    }
    this.allocateTextureUnit = I, this.resetTextureUnits = j, this.setTexture2D = F, this.setTexture2DArray = B, this.setTexture3D = N, this.setTextureCube = O, this.setupRenderTarget = Me, this.updateRenderTargetMipmap = fe, this.updateMultisampleRenderTarget = me, this.safeSetTexture2D = ye, this.safeSetTextureCube = le
}

function Ly(r, e, t) {
    const n = t.isWebGL2;

    function i(s) {
        let a;
        if (s === Ln) return 5121;
        if (s === kd) return 32819;
        if (s === Gd) return 32820;
        if (s === Hd) return 33635;
        if (s === Bd) return 5120;
        if (s === zd) return 5122;
        if (s === _s) return 5123;
        if (s === Ud) return 5124;
        if (s === Ms) return 5125;
        if (s === hn) return 5126;
        if (s === wi) return n ? 5131 : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
        if (s === Vd) return 6406;
        if (s === ii) return 6407;
        if (s === yt) return 6408;
        if (s === Wd) return 6409;
        if (s === Xd) return 6410;
        if (s === bi) return 6402;
        if (s === Er) return 34041;
        if (s === qd) return 6403;
        if (s === Yd) return 36244;
        if (s === Zd) return 33319;
        if (s === Jd) return 33320;
        if (s === Kd) return 36248;
        if (s === $d) return 36249;
        if (s === cc || s === uc || s === hc || s === fc)
            if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
                if (s === cc) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (s === uc) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (s === hc) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (s === fc) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT
            } else return null;
        if (s === dc || s === pc || s === mc || s === gc)
            if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
                if (s === dc) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (s === pc) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (s === mc) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (s === gc) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            } else return null;
        if (s === Qd) return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
        if ((s === vc || s === yc) && (a = e.get("WEBGL_compressed_texture_etc"), a !== null)) {
            if (s === vc) return a.COMPRESSED_RGB8_ETC2;
            if (s === yc) return a.COMPRESSED_RGBA8_ETC2_EAC
        }
        if (s === ep || s === tp || s === np || s === ip || s === rp || s === sp || s === ap || s === op || s === lp || s === cp || s === up || s === hp || s === fp || s === dp || s === mp || s === gp || s === vp || s === yp || s === xp || s === _p || s === Mp || s === wp || s === bp || s === Sp || s === Tp || s === Ep || s === Ap || s === Lp) return a = e.get("WEBGL_compressed_texture_astc"), a !== null ? s : null;
        if (s === pp) return a = e.get("EXT_texture_compression_bptc"), a !== null ? s : null;
        if (s === Tr) return n ? 34042 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null)
    }
    return {
        convert: i
    }
}
class Eu extends wt {
    constructor(e = []) {
        super();
        this.cameras = e
    }
}
Eu.prototype.isArrayCamera = !0;
class rn extends Ne {
    constructor() {
        super();
        this.type = "Group"
    }
}
rn.prototype.isGroup = !0;
const Ry = {
    type: "move"
};
class To {
    constructor() {
        this._targetRay = null, this._grip = null, this._hand = null
    }
    getHandSpace() {
        return this._hand === null && (this._hand = new rn, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
            pinching: !1
        }), this._hand
    }
    getTargetRaySpace() {
        return this._targetRay === null && (this._targetRay = new rn, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new A, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new A), this._targetRay
    }
    getGripSpace() {
        return this._grip === null && (this._grip = new rn, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new A, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new A), this._grip
    }
    dispatchEvent(e) {
        return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this
    }
    disconnect(e) {
        return this.dispatchEvent({
            type: "disconnected",
            data: e
        }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this
    }
    update(e, t, n) {
        let i = null,
            s = null,
            a = null;
        const o = this._targetRay,
            l = this._grip,
            c = this._hand;
        if (e && t.session.visibilityState !== "visible-blurred")
            if (o !== null && (i = t.getPose(e.targetRaySpace, n), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Ry))), c && e.hand) {
                a = !0;
                for (const v of e.hand.values()) {
                    const y = t.getJointPose(v, n);
                    if (c.joints[v.jointName] === void 0) {
                        const g = new rn;
                        g.matrixAutoUpdate = !1, g.visible = !1, c.joints[v.jointName] = g, c.add(g)
                    }
                    const m = c.joints[v.jointName];
                    y !== null && (m.matrix.fromArray(y.transform.matrix), m.matrix.decompose(m.position, m.rotation, m.scale), m.jointRadius = y.radius), m.visible = y !== null
                }
                const u = c.joints["index-finger-tip"],
                    h = c.joints["thumb-tip"],
                    f = u.position.distanceTo(h.position),
                    d = .02,
                    p = .005;
                c.inputState.pinching && f > d + p ? (c.inputState.pinching = !1, this.dispatchEvent({
                    type: "pinchend",
                    handedness: e.handedness,
                    target: this
                })) : !c.inputState.pinching && f <= d - p && (c.inputState.pinching = !0, this.dispatchEvent({
                    type: "pinchstart",
                    handedness: e.handedness,
                    target: this
                }))
            } else l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
        return o !== null && (o.visible = i !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this
    }
}
class Cy extends Rn {
    constructor(e, t) {
        super();
        const n = this,
            i = e.state;
        let s = null,
            a = 1,
            o = null,
            l = "local-floor",
            c = null,
            u = null,
            h = null,
            f = null,
            d = null,
            p = !1,
            v = null,
            y = null,
            m = null,
            g = null,
            x = null,
            _ = null;
        const w = [],
            T = new Map,
            M = new wt;
        M.layers.enable(1), M.viewport = new Ge;
        const L = new wt;
        L.layers.enable(2), L.viewport = new Ge;
        const H = [M, L],
            P = new Eu;
        P.layers.enable(1), P.layers.enable(2);
        let R = null,
            j = null;
        this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(X) {
            let J = w[X];
            return J === void 0 && (J = new To, w[X] = J), J.getTargetRaySpace()
        }, this.getControllerGrip = function(X) {
            let J = w[X];
            return J === void 0 && (J = new To, w[X] = J), J.getGripSpace()
        }, this.getHand = function(X) {
            let J = w[X];
            return J === void 0 && (J = new To, w[X] = J), J.getHandSpace()
        };

        function I(X) {
            const J = T.get(X.inputSource);
            J && J.dispatchEvent({
                type: X.type,
                data: X.inputSource
            })
        }

        function F() {
            T.forEach(function(X, J) {
                X.disconnect(J)
            }), T.clear(), R = null, j = null, i.bindXRFramebuffer(null), e.setRenderTarget(e.getRenderTarget()), h && t.deleteFramebuffer(h), v && t.deleteFramebuffer(v), y && t.deleteRenderbuffer(y), m && t.deleteRenderbuffer(m), h = null, v = null, y = null, m = null, d = null, f = null, u = null, s = null, ge.stop(), n.isPresenting = !1, n.dispatchEvent({
                type: "sessionend"
            })
        }
        this.setFramebufferScaleFactor = function(X) {
            a = X, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
        }, this.setReferenceSpaceType = function(X) {
            l = X, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
        }, this.getReferenceSpace = function() {
            return o
        }, this.getBaseLayer = function() {
            return f !== null ? f : d
        }, this.getBinding = function() {
            return u
        }, this.getFrame = function() {
            return g
        }, this.getSession = function() {
            return s
        }, this.setSession = async function(X) {
            if (s = X, s !== null) {
                s.addEventListener("select", I), s.addEventListener("selectstart", I), s.addEventListener("selectend", I), s.addEventListener("squeeze", I), s.addEventListener("squeezestart", I), s.addEventListener("squeezeend", I), s.addEventListener("end", F), s.addEventListener("inputsourceschange", B);
                const J = t.getContextAttributes();
                if (J.xrCompatible !== !0 && await t.makeXRCompatible(), s.renderState.layers === void 0) {
                    const se = {
                        antialias: J.antialias,
                        alpha: J.alpha,
                        depth: J.depth,
                        stencil: J.stencil,
                        framebufferScaleFactor: a
                    };
                    d = new XRWebGLLayer(s, t, se), s.updateRenderState({
                        baseLayer: d
                    })
                } else if (t instanceof WebGLRenderingContext) {
                    const se = {
                        antialias: !0,
                        alpha: J.alpha,
                        depth: J.depth,
                        stencil: J.stencil,
                        framebufferScaleFactor: a
                    };
                    d = new XRWebGLLayer(s, t, se), s.updateRenderState({
                        layers: [d]
                    })
                } else {
                    p = J.antialias;
                    let se = null;
                    J.depth && (_ = 256, J.stencil && (_ |= 1024), x = J.stencil ? 33306 : 36096, se = J.stencil ? 35056 : 33190);
                    const k = {
                        colorFormat: J.alpha ? 32856 : 32849,
                        depthFormat: se,
                        scaleFactor: a
                    };
                    u = new XRWebGLBinding(s, t), f = u.createProjectionLayer(k), h = t.createFramebuffer(), s.updateRenderState({
                        layers: [f]
                    }), p && (v = t.createFramebuffer(), y = t.createRenderbuffer(), t.bindRenderbuffer(36161, y), t.renderbufferStorageMultisample(36161, 4, 32856, f.textureWidth, f.textureHeight), i.bindFramebuffer(36160, v), t.framebufferRenderbuffer(36160, 36064, 36161, y), t.bindRenderbuffer(36161, null), se !== null && (m = t.createRenderbuffer(), t.bindRenderbuffer(36161, m), t.renderbufferStorageMultisample(36161, 4, se, f.textureWidth, f.textureHeight), t.framebufferRenderbuffer(36160, x, 36161, m), t.bindRenderbuffer(36161, null)), i.bindFramebuffer(36160, null))
                }
                o = await s.requestReferenceSpace(l), ge.setContext(s), ge.start(), n.isPresenting = !0, n.dispatchEvent({
                    type: "sessionstart"
                })
            }
        };

        function B(X) {
            const J = s.inputSources;
            for (let se = 0; se < w.length; se++) T.set(J[se], w[se]);
            for (let se = 0; se < X.removed.length; se++) {
                const k = X.removed[se],
                    ve = T.get(k);
                ve && (ve.dispatchEvent({
                    type: "disconnected",
                    data: k
                }), T.delete(k))
            }
            for (let se = 0; se < X.added.length; se++) {
                const k = X.added[se],
                    ve = T.get(k);
                ve && ve.dispatchEvent({
                    type: "connected",
                    data: k
                })
            }
        }
        const N = new A,
            O = new A;

        function Y(X, J, se) {
            N.setFromMatrixPosition(J.matrixWorld), O.setFromMatrixPosition(se.matrixWorld);
            const k = N.distanceTo(O),
                ve = J.projectionMatrix.elements,
                Me = se.projectionMatrix.elements,
                fe = ve[14] / (ve[10] - 1),
                me = ve[14] / (ve[10] + 1),
                Ee = (ve[9] + 1) / ve[5],
                W = (ve[9] - 1) / ve[5],
                $ = (ve[8] - 1) / ve[0],
                ne = (Me[8] + 1) / Me[0],
                ye = fe * $,
                le = fe * ne,
                E = k / (-$ + ne),
                S = E * -$;
            J.matrixWorld.decompose(X.position, X.quaternion, X.scale), X.translateX(S), X.translateZ(E), X.matrixWorld.compose(X.position, X.quaternion, X.scale), X.matrixWorldInverse.copy(X.matrixWorld).invert();
            const V = fe + E,
                te = me + E,
                ee = ye - S,
                pe = le + (k - S),
                be = Ee * me / te * V,
                _e = W * me / te * V;
            X.projectionMatrix.makePerspective(ee, pe, be, _e, V, te)
        }

        function re(X, J) {
            J === null ? X.matrixWorld.copy(X.matrix) : X.matrixWorld.multiplyMatrices(J.matrixWorld, X.matrix), X.matrixWorldInverse.copy(X.matrixWorld).invert()
        }
        this.updateCamera = function(X) {
            if (s === null) return;
            P.near = L.near = M.near = X.near, P.far = L.far = M.far = X.far, (R !== P.near || j !== P.far) && (s.updateRenderState({
                depthNear: P.near,
                depthFar: P.far
            }), R = P.near, j = P.far);
            const J = X.parent,
                se = P.cameras;
            re(P, J);
            for (let ve = 0; ve < se.length; ve++) re(se[ve], J);
            P.matrixWorld.decompose(P.position, P.quaternion, P.scale), X.position.copy(P.position), X.quaternion.copy(P.quaternion), X.scale.copy(P.scale), X.matrix.copy(P.matrix), X.matrixWorld.copy(P.matrixWorld);
            const k = X.children;
            for (let ve = 0, Me = k.length; ve < Me; ve++) k[ve].updateMatrixWorld(!0);
            se.length === 2 ? Y(P, M, L) : P.projectionMatrix.copy(M.projectionMatrix)
        }, this.getCamera = function() {
            return P
        }, this.getFoveation = function() {
            if (f !== null) return f.fixedFoveation;
            if (d !== null) return d.fixedFoveation
        }, this.setFoveation = function(X) {
            f !== null && (f.fixedFoveation = X), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = X)
        };
        let he = null;

        function Q(X, J) {
            if (c = J.getViewerPose(o), g = J, c !== null) {
                const k = c.views;
                d !== null && i.bindXRFramebuffer(d.framebuffer);
                let ve = !1;
                k.length !== P.cameras.length && (P.cameras.length = 0, ve = !0);
                for (let Me = 0; Me < k.length; Me++) {
                    const fe = k[Me];
                    let me = null;
                    if (d !== null) me = d.getViewport(fe);
                    else {
                        const W = u.getViewSubImage(f, fe);
                        i.bindXRFramebuffer(h), W.depthStencilTexture !== void 0 && t.framebufferTexture2D(36160, x, 3553, W.depthStencilTexture, 0), t.framebufferTexture2D(36160, 36064, 3553, W.colorTexture, 0), me = W.viewport
                    }
                    const Ee = H[Me];
                    Ee.matrix.fromArray(fe.transform.matrix), Ee.projectionMatrix.fromArray(fe.projectionMatrix), Ee.viewport.set(me.x, me.y, me.width, me.height), Me === 0 && P.matrix.copy(Ee.matrix), ve === !0 && P.cameras.push(Ee)
                }
                p && (i.bindXRFramebuffer(v), _ !== null && t.clear(_))
            }
            const se = s.inputSources;
            for (let k = 0; k < w.length; k++) {
                const ve = w[k],
                    Me = se[k];
                ve.update(Me, J, o)
            }
            if (he && he(X, J), p) {
                const k = f.textureWidth,
                    ve = f.textureHeight;
                i.bindFramebuffer(36008, v), i.bindFramebuffer(36009, h), t.invalidateFramebuffer(36008, [x]), t.invalidateFramebuffer(36009, [x]), t.blitFramebuffer(0, 0, k, ve, 0, 0, k, ve, 16384, 9728), t.invalidateFramebuffer(36008, [36064]), i.bindFramebuffer(36008, null), i.bindFramebuffer(36009, null), i.bindFramebuffer(36160, v)
            }
            g = null
        }
        const ge = new Wc;
        ge.setAnimationLoop(Q), this.setAnimationLoop = function(X) {
            he = X
        }, this.dispose = function() {}
    }
}

function Py(r) {
    function e(m, g) {
        m.fogColor.value.copy(g.color), g.isFog ? (m.fogNear.value = g.near, m.fogFar.value = g.far) : g.isFogExp2 && (m.fogDensity.value = g.density)
    }

    function t(m, g, x, _, w) {
        g.isMeshBasicMaterial ? n(m, g) : g.isMeshLambertMaterial ? (n(m, g), l(m, g)) : g.isMeshToonMaterial ? (n(m, g), u(m, g)) : g.isMeshPhongMaterial ? (n(m, g), c(m, g)) : g.isMeshStandardMaterial ? (n(m, g), g.isMeshPhysicalMaterial ? f(m, g, w) : h(m, g)) : g.isMeshMatcapMaterial ? (n(m, g), d(m, g)) : g.isMeshDepthMaterial ? (n(m, g), p(m, g)) : g.isMeshDistanceMaterial ? (n(m, g), v(m, g)) : g.isMeshNormalMaterial ? (n(m, g), y(m, g)) : g.isLineBasicMaterial ? (i(m, g), g.isLineDashedMaterial && s(m, g)) : g.isPointsMaterial ? a(m, g, x, _) : g.isSpriteMaterial ? o(m, g) : g.isShadowMaterial ? (m.color.value.copy(g.color), m.opacity.value = g.opacity) : g.isShaderMaterial && (g.uniformsNeedUpdate = !1)
    }

    function n(m, g) {
        m.opacity.value = g.opacity, g.color && m.diffuse.value.copy(g.color), g.emissive && m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity), g.map && (m.map.value = g.map), g.alphaMap && (m.alphaMap.value = g.alphaMap), g.specularMap && (m.specularMap.value = g.specularMap), g.alphaTest > 0 && (m.alphaTest.value = g.alphaTest);
        const x = r.get(g).envMap;
        if (x) {
            m.envMap.value = x, m.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = g.reflectivity, m.ior.value = g.ior, m.refractionRatio.value = g.refractionRatio;
            const T = r.get(x).__maxMipLevel;
            T !== void 0 && (m.maxMipLevel.value = T)
        }
        g.lightMap && (m.lightMap.value = g.lightMap, m.lightMapIntensity.value = g.lightMapIntensity), g.aoMap && (m.aoMap.value = g.aoMap, m.aoMapIntensity.value = g.aoMapIntensity);
        let _;
        g.map ? _ = g.map : g.specularMap ? _ = g.specularMap : g.displacementMap ? _ = g.displacementMap : g.normalMap ? _ = g.normalMap : g.bumpMap ? _ = g.bumpMap : g.roughnessMap ? _ = g.roughnessMap : g.metalnessMap ? _ = g.metalnessMap : g.alphaMap ? _ = g.alphaMap : g.emissiveMap ? _ = g.emissiveMap : g.clearcoatMap ? _ = g.clearcoatMap : g.clearcoatNormalMap ? _ = g.clearcoatNormalMap : g.clearcoatRoughnessMap ? _ = g.clearcoatRoughnessMap : g.specularIntensityMap ? _ = g.specularIntensityMap : g.specularTintMap ? _ = g.specularTintMap : g.transmissionMap ? _ = g.transmissionMap : g.thicknessMap && (_ = g.thicknessMap), _ !== void 0 && (_.isWebGLRenderTarget && (_ = _.texture), _.matrixAutoUpdate === !0 && _.updateMatrix(), m.uvTransform.value.copy(_.matrix));
        let w;
        g.aoMap ? w = g.aoMap : g.lightMap && (w = g.lightMap), w !== void 0 && (w.isWebGLRenderTarget && (w = w.texture), w.matrixAutoUpdate === !0 && w.updateMatrix(), m.uv2Transform.value.copy(w.matrix))
    }

    function i(m, g) {
        m.diffuse.value.copy(g.color), m.opacity.value = g.opacity
    }

    function s(m, g) {
        m.dashSize.value = g.dashSize, m.totalSize.value = g.dashSize + g.gapSize, m.scale.value = g.scale
    }

    function a(m, g, x, _) {
        m.diffuse.value.copy(g.color), m.opacity.value = g.opacity, m.size.value = g.size * x, m.scale.value = _ * .5, g.map && (m.map.value = g.map), g.alphaMap && (m.alphaMap.value = g.alphaMap), g.alphaTest > 0 && (m.alphaTest.value = g.alphaTest);
        let w;
        g.map ? w = g.map : g.alphaMap && (w = g.alphaMap), w !== void 0 && (w.matrixAutoUpdate === !0 && w.updateMatrix(), m.uvTransform.value.copy(w.matrix))
    }

    function o(m, g) {
        m.diffuse.value.copy(g.color), m.opacity.value = g.opacity, m.rotation.value = g.rotation, g.map && (m.map.value = g.map), g.alphaMap && (m.alphaMap.value = g.alphaMap), g.alphaTest > 0 && (m.alphaTest.value = g.alphaTest);
        let x;
        g.map ? x = g.map : g.alphaMap && (x = g.alphaMap), x !== void 0 && (x.matrixAutoUpdate === !0 && x.updateMatrix(), m.uvTransform.value.copy(x.matrix))
    }

    function l(m, g) {
        g.emissiveMap && (m.emissiveMap.value = g.emissiveMap)
    }

    function c(m, g) {
        m.specular.value.copy(g.specular), m.shininess.value = Math.max(g.shininess, 1e-4), g.emissiveMap && (m.emissiveMap.value = g.emissiveMap), g.bumpMap && (m.bumpMap.value = g.bumpMap, m.bumpScale.value = g.bumpScale, g.side === ut && (m.bumpScale.value *= -1)), g.normalMap && (m.normalMap.value = g.normalMap, m.normalScale.value.copy(g.normalScale), g.side === ut && m.normalScale.value.negate()), g.displacementMap && (m.displacementMap.value = g.displacementMap, m.displacementScale.value = g.displacementScale, m.displacementBias.value = g.displacementBias)
    }

    function u(m, g) {
        g.gradientMap && (m.gradientMap.value = g.gradientMap), g.emissiveMap && (m.emissiveMap.value = g.emissiveMap), g.bumpMap && (m.bumpMap.value = g.bumpMap, m.bumpScale.value = g.bumpScale, g.side === ut && (m.bumpScale.value *= -1)), g.normalMap && (m.normalMap.value = g.normalMap, m.normalScale.value.copy(g.normalScale), g.side === ut && m.normalScale.value.negate()), g.displacementMap && (m.displacementMap.value = g.displacementMap, m.displacementScale.value = g.displacementScale, m.displacementBias.value = g.displacementBias)
    }

    function h(m, g) {
        m.roughness.value = g.roughness, m.metalness.value = g.metalness, g.roughnessMap && (m.roughnessMap.value = g.roughnessMap), g.metalnessMap && (m.metalnessMap.value = g.metalnessMap), g.emissiveMap && (m.emissiveMap.value = g.emissiveMap), g.bumpMap && (m.bumpMap.value = g.bumpMap, m.bumpScale.value = g.bumpScale, g.side === ut && (m.bumpScale.value *= -1)), g.normalMap && (m.normalMap.value = g.normalMap, m.normalScale.value.copy(g.normalScale), g.side === ut && m.normalScale.value.negate()), g.displacementMap && (m.displacementMap.value = g.displacementMap, m.displacementScale.value = g.displacementScale, m.displacementBias.value = g.displacementBias), r.get(g).envMap && (m.envMapIntensity.value = g.envMapIntensity)
    }

    function f(m, g, x) {
        h(m, g), m.ior.value = g.ior, g.sheen > 0 && (m.sheenTint.value.copy(g.sheenTint).multiplyScalar(g.sheen), m.sheenRoughness.value = g.sheenRoughness), g.clearcoat > 0 && (m.clearcoat.value = g.clearcoat, m.clearcoatRoughness.value = g.clearcoatRoughness, g.clearcoatMap && (m.clearcoatMap.value = g.clearcoatMap), g.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = g.clearcoatRoughnessMap), g.clearcoatNormalMap && (m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale), m.clearcoatNormalMap.value = g.clearcoatNormalMap, g.side === ut && m.clearcoatNormalScale.value.negate())), g.transmission > 0 && (m.transmission.value = g.transmission, m.transmissionSamplerMap.value = x.texture, m.transmissionSamplerSize.value.set(x.width, x.height), g.transmissionMap && (m.transmissionMap.value = g.transmissionMap), m.thickness.value = g.thickness, g.thicknessMap && (m.thicknessMap.value = g.thicknessMap), m.attenuationDistance.value = g.attenuationDistance, m.attenuationTint.value.copy(g.attenuationTint)), m.specularIntensity.value = g.specularIntensity, m.specularTint.value.copy(g.specularTint), g.specularIntensityMap && (m.specularIntensityMap.value = g.specularIntensityMap), g.specularTintMap && (m.specularTintMap.value = g.specularTintMap)
    }

    function d(m, g) {
        g.matcap && (m.matcap.value = g.matcap), g.bumpMap && (m.bumpMap.value = g.bumpMap, m.bumpScale.value = g.bumpScale, g.side === ut && (m.bumpScale.value *= -1)), g.normalMap && (m.normalMap.value = g.normalMap, m.normalScale.value.copy(g.normalScale), g.side === ut && m.normalScale.value.negate()), g.displacementMap && (m.displacementMap.value = g.displacementMap, m.displacementScale.value = g.displacementScale, m.displacementBias.value = g.displacementBias)
    }

    function p(m, g) {
        g.displacementMap && (m.displacementMap.value = g.displacementMap, m.displacementScale.value = g.displacementScale, m.displacementBias.value = g.displacementBias)
    }

    function v(m, g) {
        g.displacementMap && (m.displacementMap.value = g.displacementMap, m.displacementScale.value = g.displacementScale, m.displacementBias.value = g.displacementBias), m.referencePosition.value.copy(g.referencePosition), m.nearDistance.value = g.nearDistance, m.farDistance.value = g.farDistance
    }

    function y(m, g) {
        g.bumpMap && (m.bumpMap.value = g.bumpMap, m.bumpScale.value = g.bumpScale, g.side === ut && (m.bumpScale.value *= -1)), g.normalMap && (m.normalMap.value = g.normalMap, m.normalScale.value.copy(g.normalScale), g.side === ut && m.normalScale.value.negate()), g.displacementMap && (m.displacementMap.value = g.displacementMap, m.displacementScale.value = g.displacementScale, m.displacementBias.value = g.displacementBias)
    }
    return {
        refreshFogUniforms: e,
        refreshMaterialUniforms: t
    }
}

function Iy() {
    const r = Ts("canvas");
    return r.style.display = "block", r
}

function je(r = {}) {
    const e = r.canvas !== void 0 ? r.canvas : Iy(),
        t = r.context !== void 0 ? r.context : null,
        n = r.alpha !== void 0 ? r.alpha : !1,
        i = r.depth !== void 0 ? r.depth : !0,
        s = r.stencil !== void 0 ? r.stencil : !0,
        a = r.antialias !== void 0 ? r.antialias : !1,
        o = r.premultipliedAlpha !== void 0 ? r.premultipliedAlpha : !0,
        l = r.preserveDrawingBuffer !== void 0 ? r.preserveDrawingBuffer : !1,
        c = r.powerPreference !== void 0 ? r.powerPreference : "default",
        u = r.failIfMajorPerformanceCaveat !== void 0 ? r.failIfMajorPerformanceCaveat : !1;
    let h = null,
        f = null;
    const d = [],
        p = [];
    this.domElement = e, this.debug = {
        checkShaderErrors: !0
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = xt, this.physicallyCorrectLights = !1, this.toneMapping = ni, this.toneMappingExposure = 1;
    const v = this;
    let y = !1,
        m = 0,
        g = 0,
        x = null,
        _ = -1,
        w = null;
    const T = new Ge,
        M = new Ge;
    let L = null,
        H = e.width,
        P = e.height,
        R = 1,
        j = null,
        I = null;
    const F = new Ge(0, 0, H, P),
        B = new Ge(0, 0, H, P);
    let N = !1;
    const O = [],
        Y = new Ws;
    let re = !1,
        he = !1,
        Q = null;
    const ge = new ae,
        X = new A,
        J = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0
        };

    function se() {
        return x === null ? R : 1
    }
    let k = t;

    function ve(b, z) {
        for (let G = 0; G < b.length; G++) {
            const U = b[G],
                q = e.getContext(U, z);
            if (q !== null) return q
        }
        return null
    }
    try {
        const b = {
            alpha: n,
            depth: i,
            stencil: s,
            antialias: a,
            premultipliedAlpha: o,
            preserveDrawingBuffer: l,
            powerPreference: c,
            failIfMajorPerformanceCaveat: u
        };
        if (e.addEventListener("webglcontextlost", De, !1), e.addEventListener("webglcontextrestored", Oe, !1), k === null) {
            const z = ["webgl2", "webgl", "experimental-webgl"];
            if (v.isWebGL1Renderer === !0 && z.shift(), k = ve(z, b), k === null) throw ve(z) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
        }
        k.getShaderPrecisionFormat === void 0 && (k.getShaderPrecisionFormat = function() {
            return {
                rangeMin: 1,
                rangeMax: 1,
                precision: 1
            }
        })
    } catch (b) {
        throw console.error("THREE.WebGLRenderer: " + b.message), b
    }
    let Me, fe, me, Ee, W, $, ne, ye, le, E, S, V, te, ee, pe, be, _e, Ae, xe, D, ce, Z, de;

    function C() {
        Me = new t0(k), fe = new qv(k, Me, r), Me.init(fe), Z = new Ly(k, Me, fe), me = new Ey(k, Me, fe), O[0] = 1029, Ee = new r0(k), W = new my, $ = new Ay(k, Me, me, W, fe, Z, Ee), ne = new Zv(v), ye = new e0(v), le = new vm(k, fe), de = new Xv(k, Me, le, fe), E = new n0(k, le, Ee, de), S = new l0(k, E, le, Ee), xe = new o0(k, fe, $), be = new Yv(W), V = new py(v, ne, ye, Me, fe, de, be), te = new Py(W), ee = new vy(W), pe = new by(Me, fe), Ae = new Wv(v, ne, me, S, o), _e = new Tu(v, S, fe), D = new jv(k, Me, Ee, fe), ce = new i0(k, Me, Ee, fe), Ee.programs = V.programs, v.capabilities = fe, v.extensions = Me, v.properties = W, v.renderLists = ee, v.shadowMap = _e, v.state = me, v.info = Ee
    }
    C();
    const ie = new Cy(v, k);
    this.xr = ie, this.getContext = function() {
        return k
    }, this.getContextAttributes = function() {
        return k.getContextAttributes()
    }, this.forceContextLoss = function() {
        const b = Me.get("WEBGL_lose_context");
        b && b.loseContext()
    }, this.forceContextRestore = function() {
        const b = Me.get("WEBGL_lose_context");
        b && b.restoreContext()
    }, this.getPixelRatio = function() {
        return R
    }, this.setPixelRatio = function(b) {
        b !== void 0 && (R = b, this.setSize(H, P, !1))
    }, this.getSize = function(b) {
        return b.set(H, P)
    }, this.setSize = function(b, z, G) {
        if (ie.isPresenting) {
            console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
            return
        }
        H = b, P = z, e.width = Math.floor(b * R), e.height = Math.floor(z * R), G !== !1 && (e.style.width = b + "px", e.style.height = z + "px"), this.setViewport(0, 0, b, z)
    }, this.getDrawingBufferSize = function(b) {
        return b.set(H * R, P * R).floor()
    }, this.setDrawingBufferSize = function(b, z, G) {
        H = b, P = z, R = G, e.width = Math.floor(b * G), e.height = Math.floor(z * G), this.setViewport(0, 0, b, z)
    }, this.getCurrentViewport = function(b) {
        return b.copy(T)
    }, this.getViewport = function(b) {
        return b.copy(F)
    }, this.setViewport = function(b, z, G, U) {
        b.isVector4 ? F.set(b.x, b.y, b.z, b.w) : F.set(b, z, G, U), me.viewport(T.copy(F).multiplyScalar(R).floor())
    }, this.getScissor = function(b) {
        return b.copy(B)
    }, this.setScissor = function(b, z, G, U) {
        b.isVector4 ? B.set(b.x, b.y, b.z, b.w) : B.set(b, z, G, U), me.scissor(M.copy(B).multiplyScalar(R).floor())
    }, this.getScissorTest = function() {
        return N
    }, this.setScissorTest = function(b) {
        me.setScissorTest(N = b)
    }, this.setOpaqueSort = function(b) {
        j = b
    }, this.setTransparentSort = function(b) {
        I = b
    }, this.getClearColor = function(b) {
        return b.copy(Ae.getClearColor())
    }, this.setClearColor = function() {
        Ae.setClearColor.apply(Ae, arguments)
    }, this.getClearAlpha = function() {
        return Ae.getClearAlpha()
    }, this.setClearAlpha = function() {
        Ae.setClearAlpha.apply(Ae, arguments)
    }, this.clear = function(b, z, G) {
        let U = 0;
        (b === void 0 || b) && (U |= 16384), (z === void 0 || z) && (U |= 256), (G === void 0 || G) && (U |= 1024), k.clear(U)
    }, this.clearColor = function() {
        this.clear(!0, !1, !1)
    }, this.clearDepth = function() {
        this.clear(!1, !0, !1)
    }, this.clearStencil = function() {
        this.clear(!1, !1, !0)
    }, this.dispose = function() {
        e.removeEventListener("webglcontextlost", De, !1), e.removeEventListener("webglcontextrestored", Oe, !1), ee.dispose(), pe.dispose(), W.dispose(), ne.dispose(), ye.dispose(), S.dispose(), de.dispose(), ie.dispose(), ie.removeEventListener("sessionstart", Gl), ie.removeEventListener("sessionend", Hl), Q && (Q.dispose(), Q = null), Jn.stop()
    };

    function De(b) {
        b.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), y = !0
    }

    function Oe() {
        console.log("THREE.WebGLRenderer: Context Restored."), y = !1;
        const b = Ee.autoReset,
            z = _e.enabled,
            G = _e.autoUpdate,
            U = _e.needsUpdate,
            q = _e.type;
        C(), Ee.autoReset = b, _e.enabled = z, _e.autoUpdate = G, _e.needsUpdate = U, _e.type = q
    }

    function lt(b) {
        const z = b.target;
        z.removeEventListener("dispose", lt), Xe(z)
    }

    function Xe(b) {
        At(b), W.remove(b)
    }

    function At(b) {
        const z = W.get(b).programs;
        z !== void 0 && z.forEach(function(G) {
            V.releaseProgram(G)
        })
    }

    function Ot(b, z) {
        b.render(function(G) {
            v.renderBufferImmediate(G, z)
        })
    }
    this.renderBufferImmediate = function(b, z) {
        de.initAttributes();
        const G = W.get(b);
        b.hasPositions && !G.position && (G.position = k.createBuffer()), b.hasNormals && !G.normal && (G.normal = k.createBuffer()), b.hasUvs && !G.uv && (G.uv = k.createBuffer()), b.hasColors && !G.color && (G.color = k.createBuffer());
        const U = z.getAttributes();
        b.hasPositions && (k.bindBuffer(34962, G.position), k.bufferData(34962, b.positionArray, 35048), de.enableAttribute(U.position.location), k.vertexAttribPointer(U.position.location, 3, 5126, !1, 0, 0)), b.hasNormals && (k.bindBuffer(34962, G.normal), k.bufferData(34962, b.normalArray, 35048), de.enableAttribute(U.normal.location), k.vertexAttribPointer(U.normal.location, 3, 5126, !1, 0, 0)), b.hasUvs && (k.bindBuffer(34962, G.uv), k.bufferData(34962, b.uvArray, 35048), de.enableAttribute(U.uv.location), k.vertexAttribPointer(U.uv.location, 2, 5126, !1, 0, 0)), b.hasColors && (k.bindBuffer(34962, G.color), k.bufferData(34962, b.colorArray, 35048), de.enableAttribute(U.color.location), k.vertexAttribPointer(U.color.location, 3, 5126, !1, 0, 0)), de.disableUnusedAttributes(), k.drawArrays(4, 0, b.count), b.count = 0
    }, this.renderBufferDirect = function(b, z, G, U, q, Le) {
        z === null && (z = J);
        const Se = q.isMesh && q.matrixWorld.determinant() < 0,
            Te = jl(b, z, G, U, q);
        me.setMaterial(U, Se);
        let Re = G.index;
        const We = G.attributes.position;
        if (Re === null) {
            if (We === void 0 || We.count === 0) return
        } else if (Re.count === 0) return;
        let Fe = 1;
        U.wireframe === !0 && (Re = E.getWireframeAttribute(G), Fe = 2), de.setup(q, U, Te, G, Re);
        let Ue, et = D;
        Re !== null && (Ue = le.get(Re), et = ce, et.setIndex(Ue));
        const Kn = Re !== null ? Re.count : We.count,
            ke = G.drawRange.start * Fe,
            Mr = G.drawRange.count * Fe,
            Ye = Le !== null ? Le.start * Fe : 0,
            $n = Le !== null ? Le.count * Fe : 1 / 0,
            Qn = Math.max(ke, Ye),
            ei = Math.min(Kn, ke + Mr, Ye + $n) - 1,
            Tn = Math.max(0, ei - Qn + 1);
        if (Tn !== 0) {
            if (q.isMesh) U.wireframe === !0 ? (me.setLineWidth(U.wireframeLinewidth * se()), et.setMode(1)) : et.setMode(4);
            else if (q.isLine) {
                let tt = U.linewidth;
                tt === void 0 && (tt = 1), me.setLineWidth(tt * se()), q.isLineSegments ? et.setMode(1) : q.isLineLoop ? et.setMode(2) : et.setMode(3)
            } else q.isPoints ? et.setMode(0) : q.isSprite && et.setMode(4);
            if (q.isInstancedMesh) et.renderInstances(Qn, Tn, q.count);
            else if (G.isInstancedBufferGeometry) {
                const tt = Math.min(G.instanceCount, G._maxInstanceCount);
                et.renderInstances(Qn, Tn, tt)
            } else et.render(Qn, Tn)
        }
    }, this.compile = function(b, z) {
        f = pe.get(b), f.init(), p.push(f), b.traverseVisible(function(G) {
            G.isLight && G.layers.test(z.layers) && (f.pushLight(G), G.castShadow && f.pushShadow(G))
        }), f.setupLights(v.physicallyCorrectLights), b.traverse(function(G) {
            const U = G.material;
            if (U)
                if (Array.isArray(U))
                    for (let q = 0; q < U.length; q++) {
                        const Le = U[q];
                        Pa(Le, b, G)
                    } else Pa(U, b, G)
        }), p.pop(), f = null
    };
    let It = null;

    function Wt(b) {
        It && It(b)
    }

    function Gl() {
        Jn.stop()
    }

    function Hl() {
        Jn.start()
    }
    const Jn = new Wc;
    Jn.setAnimationLoop(Wt), typeof window != "undefined" && Jn.setContext(window), this.setAnimationLoop = function(b) {
        It = b, ie.setAnimationLoop(b), b === null ? Jn.stop() : Jn.start()
    }, ie.addEventListener("sessionstart", Gl), ie.addEventListener("sessionend", Hl), this.render = function(b, z) {
        if (z !== void 0 && z.isCamera !== !0) {
            console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            return
        }
        if (y === !0) return;
        b.autoUpdate === !0 && b.updateMatrixWorld(), z.parent === null && z.updateMatrixWorld(), ie.enabled === !0 && ie.isPresenting === !0 && (ie.cameraAutoUpdate === !0 && ie.updateCamera(z), z = ie.getCamera()), b.isScene === !0 && b.onBeforeRender(v, b, z, x), f = pe.get(b, p.length), f.init(), p.push(f), ge.multiplyMatrices(z.projectionMatrix, z.matrixWorldInverse), Y.setFromProjectionMatrix(ge), he = this.localClippingEnabled, re = be.init(this.clippingPlanes, he, z), h = ee.get(b, d.length), h.init(), d.push(h), Vl(b, z, 0, v.sortObjects), h.finish(), v.sortObjects === !0 && h.sort(j, I), re === !0 && be.beginShadows();
        const G = f.state.shadowsArray;
        if (_e.render(G, b, z), re === !0 && be.endShadows(), this.info.autoReset === !0 && this.info.reset(), Ae.render(h, b), f.setupLights(v.physicallyCorrectLights), z.isArrayCamera) {
            const U = z.cameras;
            for (let q = 0, Le = U.length; q < Le; q++) {
                const Se = U[q];
                Wl(h, b, Se, Se.viewport)
            }
        } else Wl(h, b, z);
        x !== null && ($.updateMultisampleRenderTarget(x), $.updateRenderTargetMipmap(x)), b.isScene === !0 && b.onAfterRender(v, b, z), me.buffers.depth.setTest(!0), me.buffers.depth.setMask(!0), me.buffers.color.setMask(!0), me.setPolygonOffset(!1), de.resetDefaultState(), _ = -1, w = null, p.pop(), p.length > 0 ? f = p[p.length - 1] : f = null, d.pop(), d.length > 0 ? h = d[d.length - 1] : h = null
    };

    function Vl(b, z, G, U) {
        if (b.visible === !1) return;
        if (b.layers.test(z.layers)) {
            if (b.isGroup) G = b.renderOrder;
            else if (b.isLOD) b.autoUpdate === !0 && b.update(z);
            else if (b.isLight) f.pushLight(b), b.castShadow && f.pushShadow(b);
            else if (b.isSprite) {
                if (!b.frustumCulled || Y.intersectsSprite(b)) {
                    U && X.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ge);
                    const Se = S.update(b),
                        Te = b.material;
                    Te.visible && h.push(b, Se, Te, G, X.z, null)
                }
            } else if (b.isImmediateRenderObject) U && X.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ge), h.push(b, null, b.material, G, X.z, null);
            else if ((b.isMesh || b.isLine || b.isPoints) && (b.isSkinnedMesh && b.skeleton.frame !== Ee.render.frame && (b.skeleton.update(), b.skeleton.frame = Ee.render.frame), !b.frustumCulled || Y.intersectsObject(b))) {
                U && X.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ge);
                const Se = S.update(b),
                    Te = b.material;
                if (Array.isArray(Te)) {
                    const Re = Se.groups;
                    for (let We = 0, Fe = Re.length; We < Fe; We++) {
                        const Ue = Re[We],
                            et = Te[Ue.materialIndex];
                        et && et.visible && h.push(b, Se, et, G, X.z, Ue)
                    }
                } else Te.visible && h.push(b, Se, Te, G, X.z, null)
            }
        }
        const Le = b.children;
        for (let Se = 0, Te = Le.length; Se < Te; Se++) Vl(Le[Se], z, G, U)
    }

    function Wl(b, z, G, U) {
        const q = b.opaque,
            Le = b.transmissive,
            Se = b.transparent;
        f.setupLightsView(G), Le.length > 0 && td(q, z, G), U && me.viewport(T.copy(U)), q.length > 0 && ds(q, z, G), Le.length > 0 && ds(Le, z, G), Se.length > 0 && ds(Se, z, G)
    }

    function td(b, z, G) {
        if (Q === null) {
            const Se = a === !0 && fe.isWebGL2 === !0 ? Lc : en;
            Q = new Se(1024, 1024, {
                generateMipmaps: !0,
                type: Z.convert(wi) !== null ? wi : Ln,
                minFilter: Mi,
                magFilter: ht,
                wrapS: vt,
                wrapT: vt
            })
        }
        const U = v.getRenderTarget();
        v.setRenderTarget(Q), v.clear();
        const q = v.toneMapping;
        v.toneMapping = ni, ds(b, z, G), v.toneMapping = q, $.updateMultisampleRenderTarget(Q), $.updateRenderTargetMipmap(Q), v.setRenderTarget(U)
    }

    function ds(b, z, G) {
        const U = z.isScene === !0 ? z.overrideMaterial : null;
        for (let q = 0, Le = b.length; q < Le; q++) {
            const Se = b[q],
                Te = Se.object,
                Re = Se.geometry,
                We = U === null ? Se.material : U,
                Fe = Se.group;
            Te.layers.test(G.layers) && nd(Te, z, G, Re, We, Fe)
        }
    }

    function nd(b, z, G, U, q, Le) {
        if (b.onBeforeRender(v, z, G, U, q, Le), b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse, b.matrixWorld), b.normalMatrix.getNormalMatrix(b.modelViewMatrix), q.onBeforeRender(v, z, G, U, b, Le), b.isImmediateRenderObject) {
            const Se = jl(G, z, U, q, b);
            me.setMaterial(q), de.reset(), Ot(b, Se)
        } else q.transparent === !0 && q.side === ti ? (q.side = ut, q.needsUpdate = !0, v.renderBufferDirect(G, z, U, q, b, Le), q.side = xi, q.needsUpdate = !0, v.renderBufferDirect(G, z, U, q, b, Le), q.side = ti) : v.renderBufferDirect(G, z, U, q, b, Le);
        b.onAfterRender(v, z, G, U, q, Le)
    }

    function Pa(b, z, G) {
        z.isScene !== !0 && (z = J);
        const U = W.get(b),
            q = f.state.lights,
            Le = f.state.shadowsArray,
            Se = q.state.version,
            Te = V.getParameters(b, q.state, Le, z, G),
            Re = V.getProgramCacheKey(Te);
        let We = U.programs;
        U.environment = b.isMeshStandardMaterial ? z.environment : null, U.fog = z.fog, U.envMap = (b.isMeshStandardMaterial ? ye : ne).get(b.envMap || U.environment), We === void 0 && (b.addEventListener("dispose", lt), We = new Map, U.programs = We);
        let Fe = We.get(Re);
        if (Fe !== void 0) {
            if (U.currentProgram === Fe && U.lightsStateVersion === Se) return Xl(b, Te), Fe
        } else Te.uniforms = V.getUniforms(b), b.onBuild(Te, v), b.onBeforeCompile(Te, v), Fe = V.acquireProgram(Te, Re), We.set(Re, Fe), U.uniforms = Te.uniforms;
        const Ue = U.uniforms;
        (!b.isShaderMaterial && !b.isRawShaderMaterial || b.clipping === !0) && (Ue.clippingPlanes = be.uniform), Xl(b, Te), U.needsLights = rd(b), U.lightsStateVersion = Se, U.needsLights && (Ue.ambientLightColor.value = q.state.ambient, Ue.lightProbe.value = q.state.probe, Ue.directionalLights.value = q.state.directional, Ue.directionalLightShadows.value = q.state.directionalShadow, Ue.spotLights.value = q.state.spot, Ue.spotLightShadows.value = q.state.spotShadow, Ue.rectAreaLights.value = q.state.rectArea, Ue.ltc_1.value = q.state.rectAreaLTC1, Ue.ltc_2.value = q.state.rectAreaLTC2, Ue.pointLights.value = q.state.point, Ue.pointLightShadows.value = q.state.pointShadow, Ue.hemisphereLights.value = q.state.hemi, Ue.directionalShadowMap.value = q.state.directionalShadowMap, Ue.directionalShadowMatrix.value = q.state.directionalShadowMatrix, Ue.spotShadowMap.value = q.state.spotShadowMap, Ue.spotShadowMatrix.value = q.state.spotShadowMatrix, Ue.pointShadowMap.value = q.state.pointShadowMap, Ue.pointShadowMatrix.value = q.state.pointShadowMatrix);
        const et = Fe.getUniforms(),
            Kn = kn.seqWithValue(et.seq, Ue);
        return U.currentProgram = Fe, U.uniformsList = Kn, Fe
    }

    function Xl(b, z) {
        const G = W.get(b);
        G.outputEncoding = z.outputEncoding, G.instancing = z.instancing, G.skinning = z.skinning, G.morphTargets = z.morphTargets, G.morphNormals = z.morphNormals, G.morphTargetsCount = z.morphTargetsCount, G.numClippingPlanes = z.numClippingPlanes, G.numIntersection = z.numClipIntersection, G.vertexAlphas = z.vertexAlphas, G.vertexTangents = z.vertexTangents
    }

    function jl(b, z, G, U, q) {
        z.isScene !== !0 && (z = J), $.resetTextureUnits();
        const Le = z.fog,
            Se = U.isMeshStandardMaterial ? z.environment : null,
            Te = x === null ? v.outputEncoding : x.texture.encoding,
            Re = (U.isMeshStandardMaterial ? ye : ne).get(U.envMap || Se),
            We = U.vertexColors === !0 && !!G && !!G.attributes.color && G.attributes.color.itemSize === 4,
            Fe = !!U.normalMap && !!G && !!G.attributes.tangent,
            Ue = !!G && !!G.morphAttributes.position,
            et = !!G && !!G.morphAttributes.normal,
            Kn = !!G && !!G.morphAttributes.position ? G.morphAttributes.position.length : 0,
            ke = W.get(U),
            Mr = f.state.lights;
        if (re === !0 && (he === !0 || b !== w)) {
            const Xt = b === w && U.id === _;
            be.setState(U, b, Xt)
        }
        let Ye = !1;
        U.version === ke.__version ? (ke.needsLights && ke.lightsStateVersion !== Mr.state.version || ke.outputEncoding !== Te || q.isInstancedMesh && ke.instancing === !1 || !q.isInstancedMesh && ke.instancing === !0 || q.isSkinnedMesh && ke.skinning === !1 || !q.isSkinnedMesh && ke.skinning === !0 || ke.envMap !== Re || U.fog && ke.fog !== Le || ke.numClippingPlanes !== void 0 && (ke.numClippingPlanes !== be.numPlanes || ke.numIntersection !== be.numIntersection) || ke.vertexAlphas !== We || ke.vertexTangents !== Fe || ke.morphTargets !== Ue || ke.morphNormals !== et || fe.isWebGL2 === !0 && ke.morphTargetsCount !== Kn) && (Ye = !0) : (Ye = !0, ke.__version = U.version);
        let $n = ke.currentProgram;
        Ye === !0 && ($n = Pa(U, z, q));
        let Qn = !1,
            ei = !1,
            Tn = !1;
        const tt = $n.getUniforms(),
            wr = ke.uniforms;
        if (me.useProgram($n.program) && (Qn = !0, ei = !0, Tn = !0), U.id !== _ && (_ = U.id, ei = !0), Qn || w !== b) {
            if (tt.setValue(k, "projectionMatrix", b.projectionMatrix), fe.logarithmicDepthBuffer && tt.setValue(k, "logDepthBufFC", 2 / (Math.log(b.far + 1) / Math.LN2)), w !== b && (w = b, ei = !0, Tn = !0), U.isShaderMaterial || U.isMeshPhongMaterial || U.isMeshToonMaterial || U.isMeshStandardMaterial || U.envMap) {
                const Xt = tt.map.cameraPosition;
                Xt !== void 0 && Xt.setValue(k, X.setFromMatrixPosition(b.matrixWorld))
            }(U.isMeshPhongMaterial || U.isMeshToonMaterial || U.isMeshLambertMaterial || U.isMeshBasicMaterial || U.isMeshStandardMaterial || U.isShaderMaterial) && tt.setValue(k, "isOrthographic", b.isOrthographicCamera === !0), (U.isMeshPhongMaterial || U.isMeshToonMaterial || U.isMeshLambertMaterial || U.isMeshBasicMaterial || U.isMeshStandardMaterial || U.isShaderMaterial || U.isShadowMaterial || q.isSkinnedMesh) && tt.setValue(k, "viewMatrix", b.matrixWorldInverse)
        }
        if (q.isSkinnedMesh) {
            tt.setOptional(k, q, "bindMatrix"), tt.setOptional(k, q, "bindMatrixInverse");
            const Xt = q.skeleton;
            Xt && (fe.floatVertexTextures ? (Xt.boneTexture === null && Xt.computeBoneTexture(), tt.setValue(k, "boneTexture", Xt.boneTexture, $), tt.setValue(k, "boneTextureSize", Xt.boneTextureSize)) : tt.setOptional(k, Xt, "boneMatrices"))
        }
        return !!G && (G.morphAttributes.position !== void 0 || G.morphAttributes.normal !== void 0) && xe.update(q, G, U, $n), (ei || ke.receiveShadow !== q.receiveShadow) && (ke.receiveShadow = q.receiveShadow, tt.setValue(k, "receiveShadow", q.receiveShadow)), ei && (tt.setValue(k, "toneMappingExposure", v.toneMappingExposure), ke.needsLights && id(wr, Tn), Le && U.fog && te.refreshFogUniforms(wr, Le), te.refreshMaterialUniforms(wr, U, R, P, Q), kn.upload(k, ke.uniformsList, wr, $)), U.isShaderMaterial && U.uniformsNeedUpdate === !0 && (kn.upload(k, ke.uniformsList, wr, $), U.uniformsNeedUpdate = !1), U.isSpriteMaterial && tt.setValue(k, "center", q.center), tt.setValue(k, "modelViewMatrix", q.modelViewMatrix), tt.setValue(k, "normalMatrix", q.normalMatrix), tt.setValue(k, "modelMatrix", q.matrixWorld), $n
    }

    function id(b, z) {
        b.ambientLightColor.needsUpdate = z, b.lightProbe.needsUpdate = z, b.directionalLights.needsUpdate = z, b.directionalLightShadows.needsUpdate = z, b.pointLights.needsUpdate = z, b.pointLightShadows.needsUpdate = z, b.spotLights.needsUpdate = z, b.spotLightShadows.needsUpdate = z, b.rectAreaLights.needsUpdate = z, b.hemisphereLights.needsUpdate = z
    }

    function rd(b) {
        return b.isMeshLambertMaterial || b.isMeshToonMaterial || b.isMeshPhongMaterial || b.isMeshStandardMaterial || b.isShadowMaterial || b.isShaderMaterial && b.lights === !0
    }
    this.getActiveCubeFace = function() {
        return m
    }, this.getActiveMipmapLevel = function() {
        return g
    }, this.getRenderTarget = function() {
        return x
    }, this.setRenderTarget = function(b, z = 0, G = 0) {
        x = b, m = z, g = G, b && W.get(b).__webglFramebuffer === void 0 && $.setupRenderTarget(b);
        let U = null,
            q = !1,
            Le = !1;
        if (b) {
            const Te = b.texture;
            (Te.isDataTexture3D || Te.isDataTexture2DArray) && (Le = !0);
            const Re = W.get(b).__webglFramebuffer;
            b.isWebGLCubeRenderTarget ? (U = Re[z], q = !0) : b.isWebGLMultisampleRenderTarget ? U = W.get(b).__webglMultisampledFramebuffer : U = Re, T.copy(b.viewport), M.copy(b.scissor), L = b.scissorTest
        } else T.copy(F).multiplyScalar(R).floor(), M.copy(B).multiplyScalar(R).floor(), L = N;
        if (me.bindFramebuffer(36160, U) && fe.drawBuffers) {
            let Te = !1;
            if (b)
                if (b.isWebGLMultipleRenderTargets) {
                    const Re = b.texture;
                    if (O.length !== Re.length || O[0] !== 36064) {
                        for (let We = 0, Fe = Re.length; We < Fe; We++) O[We] = 36064 + We;
                        O.length = Re.length, Te = !0
                    }
                } else(O.length !== 1 || O[0] !== 36064) && (O[0] = 36064, O.length = 1, Te = !0);
            else(O.length !== 1 || O[0] !== 1029) && (O[0] = 1029, O.length = 1, Te = !0);
            Te && (fe.isWebGL2 ? k.drawBuffers(O) : Me.get("WEBGL_draw_buffers").drawBuffersWEBGL(O))
        }
        if (me.viewport(T), me.scissor(M), me.setScissorTest(L), q) {
            const Te = W.get(b.texture);
            k.framebufferTexture2D(36160, 36064, 34069 + z, Te.__webglTexture, G)
        } else if (Le) {
            const Te = W.get(b.texture),
                Re = z || 0;
            k.framebufferTextureLayer(36160, 36064, Te.__webglTexture, G || 0, Re)
        }
        _ = -1
    }, this.readRenderTargetPixels = function(b, z, G, U, q, Le, Se) {
        if (!(b && b.isWebGLRenderTarget)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            return
        }
        let Te = W.get(b).__webglFramebuffer;
        if (b.isWebGLCubeRenderTarget && Se !== void 0 && (Te = Te[Se]), Te) {
            me.bindFramebuffer(36160, Te);
            try {
                const Re = b.texture,
                    We = Re.format,
                    Fe = Re.type;
                if (We !== yt && Z.convert(We) !== k.getParameter(35739)) {
                    console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                    return
                }
                const Ue = Fe === wi && (Me.has("EXT_color_buffer_half_float") || fe.isWebGL2 && Me.has("EXT_color_buffer_float"));
                if (Fe !== Ln && Z.convert(Fe) !== k.getParameter(35738) && !(Fe === hn && (fe.isWebGL2 || Me.has("OES_texture_float") || Me.has("WEBGL_color_buffer_float"))) && !Ue) {
                    console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                    return
                }
                k.checkFramebufferStatus(36160) === 36053 ? z >= 0 && z <= b.width - U && G >= 0 && G <= b.height - q && k.readPixels(z, G, U, q, Z.convert(We), Z.convert(Fe), Le) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
            } finally {
                const Re = x !== null ? W.get(x).__webglFramebuffer : null;
                me.bindFramebuffer(36160, Re)
            }
        }
    }, this.copyFramebufferToTexture = function(b, z, G = 0) {
        const U = Math.pow(2, -G),
            q = Math.floor(z.image.width * U),
            Le = Math.floor(z.image.height * U);
        let Se = Z.convert(z.format);
        fe.isWebGL2 && (Se === 6407 && (Se = 32849), Se === 6408 && (Se = 32856)), $.setTexture2D(z, 0), k.copyTexImage2D(3553, G, Se, b.x, b.y, q, Le, 0), me.unbindTexture()
    }, this.copyTextureToTexture = function(b, z, G, U = 0) {
        const q = z.image.width,
            Le = z.image.height,
            Se = Z.convert(G.format),
            Te = Z.convert(G.type);
        $.setTexture2D(G, 0), k.pixelStorei(37440, G.flipY), k.pixelStorei(37441, G.premultiplyAlpha), k.pixelStorei(3317, G.unpackAlignment), z.isDataTexture ? k.texSubImage2D(3553, U, b.x, b.y, q, Le, Se, Te, z.image.data) : z.isCompressedTexture ? k.compressedTexSubImage2D(3553, U, b.x, b.y, z.mipmaps[0].width, z.mipmaps[0].height, Se, z.mipmaps[0].data) : k.texSubImage2D(3553, U, b.x, b.y, Se, Te, z.image), U === 0 && G.generateMipmaps && k.generateMipmap(3553), me.unbindTexture()
    }, this.copyTextureToTexture3D = function(b, z, G, U, q = 0) {
        if (v.isWebGL1Renderer) {
            console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
            return
        }
        const Le = b.max.x - b.min.x + 1,
            Se = b.max.y - b.min.y + 1,
            Te = b.max.z - b.min.z + 1,
            Re = Z.convert(U.format),
            We = Z.convert(U.type);
        let Fe;
        if (U.isDataTexture3D) $.setTexture3D(U, 0), Fe = 32879;
        else if (U.isDataTexture2DArray) $.setTexture2DArray(U, 0), Fe = 35866;
        else {
            console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
            return
        }
        k.pixelStorei(37440, U.flipY), k.pixelStorei(37441, U.premultiplyAlpha), k.pixelStorei(3317, U.unpackAlignment);
        const Ue = k.getParameter(3314),
            et = k.getParameter(32878),
            Kn = k.getParameter(3316),
            ke = k.getParameter(3315),
            Mr = k.getParameter(32877),
            Ye = G.isCompressedTexture ? G.mipmaps[0] : G.image;
        k.pixelStorei(3314, Ye.width), k.pixelStorei(32878, Ye.height), k.pixelStorei(3316, b.min.x), k.pixelStorei(3315, b.min.y), k.pixelStorei(32877, b.min.z), G.isDataTexture || G.isDataTexture3D ? k.texSubImage3D(Fe, q, z.x, z.y, z.z, Le, Se, Te, Re, We, Ye.data) : G.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), k.compressedTexSubImage3D(Fe, q, z.x, z.y, z.z, Le, Se, Te, Re, Ye.data)) : k.texSubImage3D(Fe, q, z.x, z.y, z.z, Le, Se, Te, Re, We, Ye), k.pixelStorei(3314, Ue), k.pixelStorei(32878, et), k.pixelStorei(3316, Kn), k.pixelStorei(3315, ke), k.pixelStorei(32877, Mr), q === 0 && U.generateMipmaps && k.generateMipmap(Fe), me.unbindTexture()
    }, this.initTexture = function(b) {
        $.setTexture2D(b, 0), me.unbindTexture()
    }, this.resetState = function() {
        m = 0, g = 0, x = null, me.reset(), de.reset()
    }, typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: this
    }))
}
class Dy extends je {}
Dy.prototype.isWebGL1Renderer = !0;
class Au extends Ne {
    constructor() {
        super();
        this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
            detail: this
        }))
    }
    copy(e, t) {
        return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return this.fog !== null && (t.object.fog = this.fog.toJSON()), t
    }
}
Au.prototype.isScene = !0;
class qi {
    constructor(e, t) {
        this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Lr, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0, this.uuid = Bt()
    }
    onUploadCallback() {}
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    setUsage(e) {
        return this.usage = e, this
    }
    copy(e) {
        return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this
    }
    copyAt(e, t, n) {
        e *= this.stride, n *= t.stride;
        for (let i = 0, s = this.stride; i < s; i++) this.array[e + i] = t.array[n + i];
        return this
    }
    set(e, t = 0) {
        return this.array.set(e, t), this
    }
    clone(e) {
        e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Bt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
        const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),
            n = new this.constructor(t, this.stride);
        return n.setUsage(this.usage), n
    }
    onUpload(e) {
        return this.onUploadCallback = e, this
    }
    toJSON(e) {
        return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Bt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
            uuid: this.uuid,
            buffer: this.array.buffer._uuid,
            type: this.array.constructor.name,
            stride: this.stride
        }
    }
}
qi.prototype.isInterleavedBuffer = !0;
const rt = new A;
class Yi {
    constructor(e, t, n, i = !1) {
        this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i === !0
    }
    get count() {
        return this.data.count
    }
    get array() {
        return this.data.array
    }
    set needsUpdate(e) {
        this.data.needsUpdate = e
    }
    applyMatrix4(e) {
        for (let t = 0, n = this.data.count; t < n; t++) rt.x = this.getX(t), rt.y = this.getY(t), rt.z = this.getZ(t), rt.applyMatrix4(e), this.setXYZ(t, rt.x, rt.y, rt.z);
        return this
    }
    applyNormalMatrix(e) {
        for (let t = 0, n = this.count; t < n; t++) rt.x = this.getX(t), rt.y = this.getY(t), rt.z = this.getZ(t), rt.applyNormalMatrix(e), this.setXYZ(t, rt.x, rt.y, rt.z);
        return this
    }
    transformDirection(e) {
        for (let t = 0, n = this.count; t < n; t++) rt.x = this.getX(t), rt.y = this.getY(t), rt.z = this.getZ(t), rt.transformDirection(e), this.setXYZ(t, rt.x, rt.y, rt.z);
        return this
    }
    setX(e, t) {
        return this.data.array[e * this.data.stride + this.offset] = t, this
    }
    setY(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 1] = t, this
    }
    setZ(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 2] = t, this
    }
    setW(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 3] = t, this
    }
    getX(e) {
        return this.data.array[e * this.data.stride + this.offset]
    }
    getY(e) {
        return this.data.array[e * this.data.stride + this.offset + 1]
    }
    getZ(e) {
        return this.data.array[e * this.data.stride + this.offset + 2]
    }
    getW(e) {
        return this.data.array[e * this.data.stride + this.offset + 3]
    }
    setXY(e, t, n) {
        return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this
    }
    setXYZ(e, t, n, i) {
        return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this
    }
    setXYZW(e, t, n, i, s) {
        return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this
    }
    clone(e) {
        if (e === void 0) {
            console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
            const t = [];
            for (let n = 0; n < this.count; n++) {
                const i = n * this.data.stride + this.offset;
                for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s])
            }
            return new $e(new this.array.constructor(t), this.itemSize, this.normalized)
        } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Yi(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized)
    }
    toJSON(e) {
        if (e === void 0) {
            console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
            const t = [];
            for (let n = 0; n < this.count; n++) {
                const i = n * this.data.stride + this.offset;
                for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s])
            }
            return {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: t,
                normalized: this.normalized
            }
        } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
            isInterleavedBufferAttribute: !0,
            itemSize: this.itemSize,
            data: this.data.uuid,
            offset: this.offset,
            normalized: this.normalized
        }
    }
}
Yi.prototype.isInterleavedBufferAttribute = !0;
class Lu extends ft {
    constructor(e) {
        super();
        this.type = "SpriteMaterial", this.color = new ue(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this
    }
}
Lu.prototype.isSpriteMaterial = !0;
let Zi;
const kr = new A,
    Ji = new A,
    Ki = new A,
    $i = new K,
    Gr = new K,
    Ru = new ae,
    Ys = new A,
    Hr = new A,
    Zs = new A,
    Cu = new K,
    Eo = new K,
    Pu = new K;
class Fy extends Ne {
    constructor(e) {
        super();
        if (this.type = "Sprite", Zi === void 0) {
            Zi = new He;
            const t = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]),
                n = new qi(t, 5);
            Zi.setIndex([0, 1, 2, 0, 2, 3]), Zi.setAttribute("position", new Yi(n, 3, 0, !1)), Zi.setAttribute("uv", new Yi(n, 2, 3, !1))
        }
        this.geometry = Zi, this.material = e !== void 0 ? e : new Lu, this.center = new K(.5, .5)
    }
    raycast(e, t) {
        e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Ji.setFromMatrixScale(this.matrixWorld), Ru.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Ki.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && Ji.multiplyScalar(-Ki.z);
        const n = this.material.rotation;
        let i, s;
        n !== 0 && (s = Math.cos(n), i = Math.sin(n));
        const a = this.center;
        Js(Ys.set(-.5, -.5, 0), Ki, a, Ji, i, s), Js(Hr.set(.5, -.5, 0), Ki, a, Ji, i, s), Js(Zs.set(.5, .5, 0), Ki, a, Ji, i, s), Cu.set(0, 0), Eo.set(1, 0), Pu.set(1, 1);
        let o = e.ray.intersectTriangle(Ys, Hr, Zs, !1, kr);
        if (o === null && (Js(Hr.set(-.5, .5, 0), Ki, a, Ji, i, s), Eo.set(0, 1), o = e.ray.intersectTriangle(Ys, Zs, Hr, !1, kr), o === null)) return;
        const l = e.ray.origin.distanceTo(kr);
        l < e.near || l > e.far || t.push({
            distance: l,
            point: kr.clone(),
            uv: ct.getUV(kr, Ys, Hr, Zs, Cu, Eo, Pu, new K),
            face: null,
            object: this
        })
    }
    copy(e) {
        return super.copy(e), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this
    }
}
Fy.prototype.isSprite = !0;

function Js(r, e, t, n, i, s) {
    $i.subVectors(r, t).addScalar(.5).multiply(n), i !== void 0 ? (Gr.x = s * $i.x - i * $i.y, Gr.y = i * $i.x + s * $i.y) : Gr.copy($i), r.copy(e), r.x += Gr.x, r.y += Gr.y, r.applyMatrix4(Ru)
}
const Iu = new A,
    Du = new Ge,
    Fu = new Ge,
    Ny = new A,
    Nu = new ae;
class Ks extends _t {
    constructor(e, t) {
        super(e, t);
        this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new ae, this.bindMatrixInverse = new ae
    }
    copy(e) {
        return super.copy(e), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, this
    }
    bind(e, t) {
        this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert()
    }
    pose() {
        this.skeleton.pose()
    }
    normalizeSkinWeights() {
        const e = new Ge,
            t = this.geometry.attributes.skinWeight;
        for (let n = 0, i = t.count; n < i; n++) {
            e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.w = t.getW(n);
            const s = 1 / e.manhattanLength();
            s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w)
        }
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
    }
    boneTransform(e, t) {
        const n = this.skeleton,
            i = this.geometry;
        Du.fromBufferAttribute(i.attributes.skinIndex, e), Fu.fromBufferAttribute(i.attributes.skinWeight, e), Iu.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
        for (let s = 0; s < 4; s++) {
            const a = Fu.getComponent(s);
            if (a !== 0) {
                const o = Du.getComponent(s);
                Nu.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(Ny.copy(Iu).applyMatrix4(Nu), a)
            }
        }
        return t.applyMatrix4(this.bindMatrixInverse)
    }
}
Ks.prototype.isSkinnedMesh = !0;
class Vr extends Ne {
    constructor() {
        super();
        this.type = "Bone"
    }
}
Vr.prototype.isBone = !0;
class Ou extends it {
    constructor(e = null, t = 1, n = 1, i, s, a, o, l, c = ht, u = ht, h, f) {
        super(null, a, o, l, c, u, i, s, h, f);
        this.image = {
            data: e,
            width: t,
            height: n
        }, this.magFilter = c, this.minFilter = u, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0
    }
}
Ou.prototype.isDataTexture = !0;
const Bu = new ae,
    Oy = new ae;
class $s {
    constructor(e = [], t = []) {
        this.uuid = Bt(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init()
    }
    init() {
        const e = this.bones,
            t = this.boneInverses;
        if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses();
        else if (e.length !== t.length) {
            console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
            for (let n = 0, i = this.bones.length; n < i; n++) this.boneInverses.push(new ae)
        }
    }
    calculateInverses() {
        this.boneInverses.length = 0;
        for (let e = 0, t = this.bones.length; e < t; e++) {
            const n = new ae;
            this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n)
        }
    }
    pose() {
        for (let e = 0, t = this.bones.length; e < t; e++) {
            const n = this.bones[e];
            n && n.matrixWorld.copy(this.boneInverses[e]).invert()
        }
        for (let e = 0, t = this.bones.length; e < t; e++) {
            const n = this.bones[e];
            n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale))
        }
    }
    update() {
        const e = this.bones,
            t = this.boneInverses,
            n = this.boneMatrices,
            i = this.boneTexture;
        for (let s = 0, a = e.length; s < a; s++) {
            const o = e[s] ? e[s].matrixWorld : Oy;
            Bu.multiplyMatrices(o, t[s]), Bu.toArray(n, s * 16)
        }
        i !== null && (i.needsUpdate = !0)
    }
    clone() {
        return new $s(this.bones, this.boneInverses)
    }
    computeBoneTexture() {
        let e = Math.sqrt(this.bones.length * 4);
        e = Tc(e), e = Math.max(e, 4);
        const t = new Float32Array(e * e * 4);
        t.set(this.boneMatrices);
        const n = new Ou(t, e, e, yt, hn);
        return this.boneMatrices = t, this.boneTexture = n, this.boneTextureSize = e, this
    }
    getBoneByName(e) {
        for (let t = 0, n = this.bones.length; t < n; t++) {
            const i = this.bones[t];
            if (i.name === e) return i
        }
    }
    dispose() {
        this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null)
    }
    fromJSON(e, t) {
        this.uuid = e.uuid;
        for (let n = 0, i = e.bones.length; n < i; n++) {
            const s = e.bones[n];
            let a = t[s];
            a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), a = new Vr), this.bones.push(a), this.boneInverses.push(new ae().fromArray(e.boneInverses[n]))
        }
        return this.init(), this
    }
    toJSON() {
        const e = {
            metadata: {
                version: 4.5,
                type: "Skeleton",
                generator: "Skeleton.toJSON"
            },
            bones: [],
            boneInverses: []
        };
        e.uuid = this.uuid;
        const t = this.bones,
            n = this.boneInverses;
        for (let i = 0, s = t.length; i < s; i++) {
            const a = t[i];
            e.bones.push(a.uuid);
            const o = n[i];
            e.boneInverses.push(o.toArray())
        }
        return e
    }
}
class Ao extends $e {
    constructor(e, t, n, i = 1) {
        typeof n == "number" && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));
        super(e, t, n);
        this.meshPerAttribute = i
    }
    copy(e) {
        return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this
    }
    toJSON() {
        const e = super.toJSON();
        return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e
    }
}
Ao.prototype.isInstancedBufferAttribute = !0;
const zu = new ae,
    Uu = new ae,
    Qs = [],
    Wr = new _t;
class By extends _t {
    constructor(e, t, n) {
        super(e, t);
        this.instanceMatrix = new Ao(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1
    }
    copy(e) {
        return super.copy(e), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, this
    }
    getColorAt(e, t) {
        t.fromArray(this.instanceColor.array, e * 3)
    }
    getMatrixAt(e, t) {
        t.fromArray(this.instanceMatrix.array, e * 16)
    }
    raycast(e, t) {
        const n = this.matrixWorld,
            i = this.count;
        if (Wr.geometry = this.geometry, Wr.material = this.material, Wr.material !== void 0)
            for (let s = 0; s < i; s++) {
                this.getMatrixAt(s, zu), Uu.multiplyMatrices(n, zu), Wr.matrixWorld = Uu, Wr.raycast(e, Qs);
                for (let a = 0, o = Qs.length; a < o; a++) {
                    const l = Qs[a];
                    l.instanceId = s, l.object = this, t.push(l)
                }
                Qs.length = 0
            }
    }
    setColorAt(e, t) {
        this.instanceColor === null && (this.instanceColor = new Ao(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3)
    }
    setMatrixAt(e, t) {
        t.toArray(this.instanceMatrix.array, e * 16)
    }
    updateMorphTargets() {}
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
By.prototype.isInstancedMesh = !0;
class hi extends ft {
    constructor(e) {
        super();
        this.type = "LineBasicMaterial", this.color = new ue(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this
    }
}
hi.prototype.isLineBasicMaterial = !0;
const ku = new A,
    Gu = new A,
    Hu = new ae,
    Lo = new li,
    ea = new oi;
class Xr extends Ne {
    constructor(e = new He, t = new hi) {
        super();
        this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets()
    }
    copy(e) {
        return super.copy(e), this.material = e.material, this.geometry = e.geometry, this
    }
    computeLineDistances() {
        const e = this.geometry;
        if (e.isBufferGeometry)
            if (e.index === null) {
                const t = e.attributes.position,
                    n = [0];
                for (let i = 1, s = t.count; i < s; i++) ku.fromBufferAttribute(t, i - 1), Gu.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += ku.distanceTo(Gu);
                e.setAttribute("lineDistance", new Je(n, 1))
            } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        else e.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        return this
    }
    raycast(e, t) {
        const n = this.geometry,
            i = this.matrixWorld,
            s = e.params.Line.threshold,
            a = n.drawRange;
        if (n.boundingSphere === null && n.computeBoundingSphere(), ea.copy(n.boundingSphere), ea.applyMatrix4(i), ea.radius += s, e.ray.intersectsSphere(ea) === !1) return;
        Hu.copy(i).invert(), Lo.copy(e.ray).applyMatrix4(Hu);
        const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            l = o * o,
            c = new A,
            u = new A,
            h = new A,
            f = new A,
            d = this.isLineSegments ? 2 : 1;
        if (n.isBufferGeometry) {
            const p = n.index,
                y = n.attributes.position;
            if (p !== null) {
                const m = Math.max(0, a.start),
                    g = Math.min(p.count, a.start + a.count);
                for (let x = m, _ = g - 1; x < _; x += d) {
                    const w = p.getX(x),
                        T = p.getX(x + 1);
                    if (c.fromBufferAttribute(y, w), u.fromBufferAttribute(y, T), Lo.distanceSqToSegment(c, u, f, h) > l) continue;
                    f.applyMatrix4(this.matrixWorld);
                    const L = e.ray.origin.distanceTo(f);
                    L < e.near || L > e.far || t.push({
                        distance: L,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: x,
                        face: null,
                        faceIndex: null,
                        object: this
                    })
                }
            } else {
                const m = Math.max(0, a.start),
                    g = Math.min(y.count, a.start + a.count);
                for (let x = m, _ = g - 1; x < _; x += d) {
                    if (c.fromBufferAttribute(y, x), u.fromBufferAttribute(y, x + 1), Lo.distanceSqToSegment(c, u, f, h) > l) continue;
                    f.applyMatrix4(this.matrixWorld);
                    const T = e.ray.origin.distanceTo(f);
                    T < e.near || T > e.far || t.push({
                        distance: T,
                        point: h.clone().applyMatrix4(this.matrixWorld),
                        index: x,
                        face: null,
                        faceIndex: null,
                        object: this
                    })
                }
            }
        } else n.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
    }
    updateMorphTargets() {
        const e = this.geometry;
        if (e.isBufferGeometry) {
            const t = e.morphAttributes,
                n = Object.keys(t);
            if (n.length > 0) {
                const i = t[n[0]];
                if (i !== void 0) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for (let s = 0, a = i.length; s < a; s++) {
                        const o = i[s].name || String(s);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s
                    }
                }
            }
        } else {
            const t = e.morphTargets;
            t !== void 0 && t.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
        }
    }
}
Xr.prototype.isLine = !0;
const Vu = new A,
    Wu = new A;
class ta extends Xr {
    constructor(e, t) {
        super(e, t);
        this.type = "LineSegments"
    }
    computeLineDistances() {
        const e = this.geometry;
        if (e.isBufferGeometry)
            if (e.index === null) {
                const t = e.attributes.position,
                    n = [];
                for (let i = 0, s = t.count; i < s; i += 2) Vu.fromBufferAttribute(t, i), Wu.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Vu.distanceTo(Wu);
                e.setAttribute("lineDistance", new Je(n, 1))
            } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        else e.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
        return this
    }
}
ta.prototype.isLineSegments = !0;
class Xu extends Xr {
    constructor(e, t) {
        super(e, t);
        this.type = "LineLoop"
    }
}
Xu.prototype.isLineLoop = !0;
class Ro extends ft {
    constructor(e) {
        super();
        this.type = "PointsMaterial", this.color = new ue(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this
    }
}
Ro.prototype.isPointsMaterial = !0;
const ju = new ae,
    Co = new li,
    na = new oi,
    ia = new A;
class qu extends Ne {
    constructor(e = new He, t = new Ro) {
        super();
        this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets()
    }
    copy(e) {
        return super.copy(e), this.material = e.material, this.geometry = e.geometry, this
    }
    raycast(e, t) {
        const n = this.geometry,
            i = this.matrixWorld,
            s = e.params.Points.threshold,
            a = n.drawRange;
        if (n.boundingSphere === null && n.computeBoundingSphere(), na.copy(n.boundingSphere), na.applyMatrix4(i), na.radius += s, e.ray.intersectsSphere(na) === !1) return;
        ju.copy(i).invert(), Co.copy(e.ray).applyMatrix4(ju);
        const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            l = o * o;
        if (n.isBufferGeometry) {
            const c = n.index,
                h = n.attributes.position;
            if (c !== null) {
                const f = Math.max(0, a.start),
                    d = Math.min(c.count, a.start + a.count);
                for (let p = f, v = d; p < v; p++) {
                    const y = c.getX(p);
                    ia.fromBufferAttribute(h, y), Yu(ia, y, l, i, e, t, this)
                }
            } else {
                const f = Math.max(0, a.start),
                    d = Math.min(h.count, a.start + a.count);
                for (let p = f, v = d; p < v; p++) ia.fromBufferAttribute(h, p), Yu(ia, p, l, i, e, t, this)
            }
        } else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
    }
    updateMorphTargets() {
        const e = this.geometry;
        if (e.isBufferGeometry) {
            const t = e.morphAttributes,
                n = Object.keys(t);
            if (n.length > 0) {
                const i = t[n[0]];
                if (i !== void 0) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for (let s = 0, a = i.length; s < a; s++) {
                        const o = i[s].name || String(s);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s
                    }
                }
            }
        } else {
            const t = e.morphTargets;
            t !== void 0 && t.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
        }
    }
}
qu.prototype.isPoints = !0;

function Yu(r, e, t, n, i, s, a) {
    const o = Co.distanceSqToPoint(r);
    if (o < t) {
        const l = new A;
        Co.closestPointToPoint(r, l), l.applyMatrix4(n);
        const c = i.ray.origin.distanceTo(l);
        if (c < i.near || c > i.far) return;
        s.push({
            distance: c,
            distanceToRay: Math.sqrt(o),
            point: l,
            index: e,
            face: null,
            object: a
        })
    }
}
class zy extends it {
    constructor(e, t, n, i, s, a, o, l, c) {
        super(e, t, n, i, s, a, o, l, c);
        this.format = o !== void 0 ? o : ii, this.minFilter = a !== void 0 ? a : Lt, this.magFilter = s !== void 0 ? s : Lt, this.generateMipmaps = !1;
        const u = this;

        function h() {
            u.needsUpdate = !0, e.requestVideoFrameCallback(h)
        }
        "requestVideoFrameCallback" in e && e.requestVideoFrameCallback(h)
    }
    clone() {
        return new this.constructor(this.image).copy(this)
    }
    update() {
        const e = this.image;
        "requestVideoFrameCallback" in e === !1 && e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
    }
}
zy.prototype.isVideoTexture = !0;
class Uy extends it {
    constructor(e, t, n, i, s, a, o, l, c, u, h, f) {
        super(null, a, o, l, c, u, i, s, h, f);
        this.image = {
            width: t,
            height: n
        }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1
    }
}
Uy.prototype.isCompressedTexture = !0;
class ky extends it {
    constructor(e, t, n, i, s, a, o, l, c) {
        super(e, t, n, i, s, a, o, l, c);
        this.needsUpdate = !0
    }
}
ky.prototype.isCanvasTexture = !0;
class Gy extends it {
    constructor(e, t, n, i, s, a, o, l, c, u) {
        if (u = u !== void 0 ? u : bi, u !== bi && u !== Er) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        n === void 0 && u === bi && (n = _s), n === void 0 && u === Er && (n = Tr);
        super(null, i, s, a, o, l, u, n, c);
        this.image = {
            width: e,
            height: t
        }, this.magFilter = o !== void 0 ? o : ht, this.minFilter = l !== void 0 ? l : ht, this.flipY = !1, this.generateMipmaps = !1
    }
}
Gy.prototype.isDepthTexture = !0;
new A;
new A;
new A;
new ct;
class Nt {
    constructor() {
        this.type = "Curve", this.arcLengthDivisions = 200
    }
    getPoint() {
        return console.warn("THREE.Curve: .getPoint() not implemented."), null
    }
    getPointAt(e, t) {
        const n = this.getUtoTmapping(e);
        return this.getPoint(n, t)
    }
    getPoints(e = 5) {
        const t = [];
        for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
        return t
    }
    getSpacedPoints(e = 5) {
        const t = [];
        for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
        return t
    }
    getLength() {
        const e = this.getLengths();
        return e[e.length - 1]
    }
    getLengths(e = this.arcLengthDivisions) {
        if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
        this.needsUpdate = !1;
        const t = [];
        let n, i = this.getPoint(0),
            s = 0;
        t.push(0);
        for (let a = 1; a <= e; a++) n = this.getPoint(a / e), s += n.distanceTo(i), t.push(s), i = n;
        return this.cacheArcLengths = t, t
    }
    updateArcLengths() {
        this.needsUpdate = !0, this.getLengths()
    }
    getUtoTmapping(e, t) {
        const n = this.getLengths();
        let i = 0;
        const s = n.length;
        let a;
        t ? a = t : a = e * n[s - 1];
        let o = 0,
            l = s - 1,
            c;
        for (; o <= l;)
            if (i = Math.floor(o + (l - o) / 2), c = n[i] - a, c < 0) o = i + 1;
            else if (c > 0) l = i - 1;
        else {
            l = i;
            break
        }
        if (i = l, n[i] === a) return i / (s - 1);
        const u = n[i],
            f = n[i + 1] - u,
            d = (a - u) / f;
        return (i + d) / (s - 1)
    }
    getTangent(e, t) {
        const n = 1e-4;
        let i = e - n,
            s = e + n;
        i < 0 && (i = 0), s > 1 && (s = 1);
        const a = this.getPoint(i),
            o = this.getPoint(s),
            l = t || (a.isVector2 ? new K : new A);
        return l.copy(o).sub(a).normalize(), l
    }
    getTangentAt(e, t) {
        const n = this.getUtoTmapping(e);
        return this.getTangent(n, t)
    }
    computeFrenetFrames(e, t) {
        const n = new A,
            i = [],
            s = [],
            a = [],
            o = new A,
            l = new ae;
        for (let d = 0; d <= e; d++) {
            const p = d / e;
            i[d] = this.getTangentAt(p, new A)
        }
        s[0] = new A, a[0] = new A;
        let c = Number.MAX_VALUE;
        const u = Math.abs(i[0].x),
            h = Math.abs(i[0].y),
            f = Math.abs(i[0].z);
        u <= c && (c = u, n.set(1, 0, 0)), h <= c && (c = h, n.set(0, 1, 0)), f <= c && n.set(0, 0, 1), o.crossVectors(i[0], n).normalize(), s[0].crossVectors(i[0], o), a[0].crossVectors(i[0], s[0]);
        for (let d = 1; d <= e; d++) {
            if (s[d] = s[d - 1].clone(), a[d] = a[d - 1].clone(), o.crossVectors(i[d - 1], i[d]), o.length() > Number.EPSILON) {
                o.normalize();
                const p = Math.acos(St(i[d - 1].dot(i[d]), -1, 1));
                s[d].applyMatrix4(l.makeRotationAxis(o, p))
            }
            a[d].crossVectors(i[d], s[d])
        }
        if (t === !0) {
            let d = Math.acos(St(s[0].dot(s[e]), -1, 1));
            d /= e, i[0].dot(o.crossVectors(s[0], s[e])) > 0 && (d = -d);
            for (let p = 1; p <= e; p++) s[p].applyMatrix4(l.makeRotationAxis(i[p], d * p)), a[p].crossVectors(i[p], s[p])
        }
        return {
            tangents: i,
            normals: s,
            binormals: a
        }
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.arcLengthDivisions = e.arcLengthDivisions, this
    }
    toJSON() {
        const e = {
            metadata: {
                version: 4.5,
                type: "Curve",
                generator: "Curve.toJSON"
            }
        };
        return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e
    }
    fromJSON(e) {
        return this.arcLengthDivisions = e.arcLengthDivisions, this
    }
}
class ra extends Nt {
    constructor(e = 0, t = 0, n = 1, i = 1, s = 0, a = Math.PI * 2, o = !1, l = 0) {
        super();
        this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = i, this.aStartAngle = s, this.aEndAngle = a, this.aClockwise = o, this.aRotation = l
    }
    getPoint(e, t) {
        const n = t || new K,
            i = Math.PI * 2;
        let s = this.aEndAngle - this.aStartAngle;
        const a = Math.abs(s) < Number.EPSILON;
        for (; s < 0;) s += i;
        for (; s > i;) s -= i;
        s < Number.EPSILON && (a ? s = 0 : s = i), this.aClockwise === !0 && !a && (s === i ? s = -i : s = s - i);
        const o = this.aStartAngle + e * s;
        let l = this.aX + this.xRadius * Math.cos(o),
            c = this.aY + this.yRadius * Math.sin(o);
        if (this.aRotation !== 0) {
            const u = Math.cos(this.aRotation),
                h = Math.sin(this.aRotation),
                f = l - this.aX,
                d = c - this.aY;
            l = f * u - d * h + this.aX, c = f * h + d * u + this.aY
        }
        return n.set(l, c)
    }
    copy(e) {
        return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
    }
    toJSON() {
        const e = super.toJSON();
        return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e
    }
    fromJSON(e) {
        return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
    }
}
ra.prototype.isEllipseCurve = !0;
class Zu extends ra {
    constructor(e, t, n, i, s, a) {
        super(e, t, n, n, i, s, a);
        this.type = "ArcCurve"
    }
}
Zu.prototype.isArcCurve = !0;

function Po() {
    let r = 0,
        e = 0,
        t = 0,
        n = 0;

    function i(s, a, o, l) {
        r = s, e = o, t = -3 * s + 3 * a - 2 * o - l, n = 2 * s - 2 * a + o + l
    }
    return {
        initCatmullRom: function(s, a, o, l, c) {
            i(a, o, c * (o - s), c * (l - a))
        },
        initNonuniformCatmullRom: function(s, a, o, l, c, u, h) {
            let f = (a - s) / c - (o - s) / (c + u) + (o - a) / u,
                d = (o - a) / u - (l - a) / (u + h) + (l - o) / h;
            f *= u, d *= u, i(a, o, f, d)
        },
        calc: function(s) {
            const a = s * s,
                o = a * s;
            return r + e * s + t * a + n * o
        }
    }
}
const sa = new A,
    Io = new Po,
    Do = new Po,
    Fo = new Po;
class Ju extends Nt {
    constructor(e = [], t = !1, n = "centripetal", i = .5) {
        super();
        this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = i
    }
    getPoint(e, t = new A) {
        const n = t,
            i = this.points,
            s = i.length,
            a = (s - (this.closed ? 0 : 1)) * e;
        let o = Math.floor(a),
            l = a - o;
        this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / s) + 1) * s : l === 0 && o === s - 1 && (o = s - 2, l = 1);
        let c, u;
        this.closed || o > 0 ? c = i[(o - 1) % s] : (sa.subVectors(i[0], i[1]).add(i[0]), c = sa);
        const h = i[o % s],
            f = i[(o + 1) % s];
        if (this.closed || o + 2 < s ? u = i[(o + 2) % s] : (sa.subVectors(i[s - 1], i[s - 2]).add(i[s - 1]), u = sa), this.curveType === "centripetal" || this.curveType === "chordal") {
            const d = this.curveType === "chordal" ? .5 : .25;
            let p = Math.pow(c.distanceToSquared(h), d),
                v = Math.pow(h.distanceToSquared(f), d),
                y = Math.pow(f.distanceToSquared(u), d);
            v < 1e-4 && (v = 1), p < 1e-4 && (p = v), y < 1e-4 && (y = v), Io.initNonuniformCatmullRom(c.x, h.x, f.x, u.x, p, v, y), Do.initNonuniformCatmullRom(c.y, h.y, f.y, u.y, p, v, y), Fo.initNonuniformCatmullRom(c.z, h.z, f.z, u.z, p, v, y)
        } else this.curveType === "catmullrom" && (Io.initCatmullRom(c.x, h.x, f.x, u.x, this.tension), Do.initCatmullRom(c.y, h.y, f.y, u.y, this.tension), Fo.initCatmullRom(c.z, h.z, f.z, u.z, this.tension));
        return n.set(Io.calc(l), Do.calc(l), Fo.calc(l)), n
    }
    copy(e) {
        super.copy(e), this.points = [];
        for (let t = 0, n = e.points.length; t < n; t++) {
            const i = e.points[t];
            this.points.push(i.clone())
        }
        return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
    }
    toJSON() {
        const e = super.toJSON();
        e.points = [];
        for (let t = 0, n = this.points.length; t < n; t++) {
            const i = this.points[t];
            e.points.push(i.toArray())
        }
        return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e
    }
    fromJSON(e) {
        super.fromJSON(e), this.points = [];
        for (let t = 0, n = e.points.length; t < n; t++) {
            const i = e.points[t];
            this.points.push(new A().fromArray(i))
        }
        return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
    }
}
Ju.prototype.isCatmullRomCurve3 = !0;

function Ku(r, e, t, n, i) {
    const s = (n - e) * .5,
        a = (i - t) * .5,
        o = r * r,
        l = r * o;
    return (2 * t - 2 * n + s + a) * l + (-3 * t + 3 * n - 2 * s - a) * o + s * r + t
}

function Hy(r, e) {
    const t = 1 - r;
    return t * t * e
}

function Vy(r, e) {
    return 2 * (1 - r) * r * e
}

function Wy(r, e) {
    return r * r * e
}

function jr(r, e, t, n) {
    return Hy(r, e) + Vy(r, t) + Wy(r, n)
}

function Xy(r, e) {
    const t = 1 - r;
    return t * t * t * e
}

function jy(r, e) {
    const t = 1 - r;
    return 3 * t * t * r * e
}

function qy(r, e) {
    return 3 * (1 - r) * r * r * e
}

function Yy(r, e) {
    return r * r * r * e
}

function qr(r, e, t, n, i) {
    return Xy(r, e) + jy(r, t) + qy(r, n) + Yy(r, i)
}
class No extends Nt {
    constructor(e = new K, t = new K, n = new K, i = new K) {
        super();
        this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i
    }
    getPoint(e, t = new K) {
        const n = t,
            i = this.v0,
            s = this.v1,
            a = this.v2,
            o = this.v3;
        return n.set(qr(e, i.x, s.x, a.x, o.x), qr(e, i.y, s.y, a.y, o.y)), n
    }
    copy(e) {
        return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
    }
    toJSON() {
        const e = super.toJSON();
        return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
    }
    fromJSON(e) {
        return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
    }
}
No.prototype.isCubicBezierCurve = !0;
class $u extends Nt {
    constructor(e = new A, t = new A, n = new A, i = new A) {
        super();
        this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = i
    }
    getPoint(e, t = new A) {
        const n = t,
            i = this.v0,
            s = this.v1,
            a = this.v2,
            o = this.v3;
        return n.set(qr(e, i.x, s.x, a.x, o.x), qr(e, i.y, s.y, a.y, o.y), qr(e, i.z, s.z, a.z, o.z)), n
    }
    copy(e) {
        return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
    }
    toJSON() {
        const e = super.toJSON();
        return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
    }
    fromJSON(e) {
        return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
    }
}
$u.prototype.isCubicBezierCurve3 = !0;
class aa extends Nt {
    constructor(e = new K, t = new K) {
        super();
        this.type = "LineCurve", this.v1 = e, this.v2 = t
    }
    getPoint(e, t = new K) {
        const n = t;
        return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n
    }
    getPointAt(e, t) {
        return this.getPoint(e, t)
    }
    getTangent(e, t) {
        const n = t || new K;
        return n.copy(this.v2).sub(this.v1).normalize(), n
    }
    copy(e) {
        return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
    }
    toJSON() {
        const e = super.toJSON();
        return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
    }
    fromJSON(e) {
        return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    }
}
aa.prototype.isLineCurve = !0;
class Zy extends Nt {
    constructor(e = new A, t = new A) {
        super();
        this.type = "LineCurve3", this.isLineCurve3 = !0, this.v1 = e, this.v2 = t
    }
    getPoint(e, t = new A) {
        const n = t;
        return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n
    }
    getPointAt(e, t) {
        return this.getPoint(e, t)
    }
    copy(e) {
        return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
    }
    toJSON() {
        const e = super.toJSON();
        return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
    }
    fromJSON(e) {
        return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    }
}
class Oo extends Nt {
    constructor(e = new K, t = new K, n = new K) {
        super();
        this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n
    }
    getPoint(e, t = new K) {
        const n = t,
            i = this.v0,
            s = this.v1,
            a = this.v2;
        return n.set(jr(e, i.x, s.x, a.x), jr(e, i.y, s.y, a.y)), n
    }
    copy(e) {
        return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
    }
    toJSON() {
        const e = super.toJSON();
        return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
    }
    fromJSON(e) {
        return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    }
}
Oo.prototype.isQuadraticBezierCurve = !0;
class Qu extends Nt {
    constructor(e = new A, t = new A, n = new A) {
        super();
        this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n
    }
    getPoint(e, t = new A) {
        const n = t,
            i = this.v0,
            s = this.v1,
            a = this.v2;
        return n.set(jr(e, i.x, s.x, a.x), jr(e, i.y, s.y, a.y), jr(e, i.z, s.z, a.z)), n
    }
    copy(e) {
        return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
    }
    toJSON() {
        const e = super.toJSON();
        return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
    }
    fromJSON(e) {
        return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    }
}
Qu.prototype.isQuadraticBezierCurve3 = !0;
class Bo extends Nt {
    constructor(e = []) {
        super();
        this.type = "SplineCurve", this.points = e
    }
    getPoint(e, t = new K) {
        const n = t,
            i = this.points,
            s = (i.length - 1) * e,
            a = Math.floor(s),
            o = s - a,
            l = i[a === 0 ? a : a - 1],
            c = i[a],
            u = i[a > i.length - 2 ? i.length - 1 : a + 1],
            h = i[a > i.length - 3 ? i.length - 1 : a + 2];
        return n.set(Ku(o, l.x, c.x, u.x, h.x), Ku(o, l.y, c.y, u.y, h.y)), n
    }
    copy(e) {
        super.copy(e), this.points = [];
        for (let t = 0, n = e.points.length; t < n; t++) {
            const i = e.points[t];
            this.points.push(i.clone())
        }
        return this
    }
    toJSON() {
        const e = super.toJSON();
        e.points = [];
        for (let t = 0, n = this.points.length; t < n; t++) {
            const i = this.points[t];
            e.points.push(i.toArray())
        }
        return e
    }
    fromJSON(e) {
        super.fromJSON(e), this.points = [];
        for (let t = 0, n = e.points.length; t < n; t++) {
            const i = e.points[t];
            this.points.push(new K().fromArray(i))
        }
        return this
    }
}
Bo.prototype.isSplineCurve = !0;
var eh = Object.freeze({
    __proto__: null,
    ArcCurve: Zu,
    CatmullRomCurve3: Ju,
    CubicBezierCurve: No,
    CubicBezierCurve3: $u,
    EllipseCurve: ra,
    LineCurve: aa,
    LineCurve3: Zy,
    QuadraticBezierCurve: Oo,
    QuadraticBezierCurve3: Qu,
    SplineCurve: Bo
});
class Jy extends Nt {
    constructor() {
        super();
        this.type = "CurvePath", this.curves = [], this.autoClose = !1
    }
    add(e) {
        this.curves.push(e)
    }
    closePath() {
        const e = this.curves[0].getPoint(0),
            t = this.curves[this.curves.length - 1].getPoint(1);
        e.equals(t) || this.curves.push(new aa(t, e))
    }
    getPoint(e, t) {
        const n = e * this.getLength(),
            i = this.getCurveLengths();
        let s = 0;
        for (; s < i.length;) {
            if (i[s] >= n) {
                const a = i[s] - n,
                    o = this.curves[s],
                    l = o.getLength(),
                    c = l === 0 ? 0 : 1 - a / l;
                return o.getPointAt(c, t)
            }
            s++
        }
        return null
    }
    getLength() {
        const e = this.getCurveLengths();
        return e[e.length - 1]
    }
    updateArcLengths() {
        this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
    }
    getCurveLengths() {
        if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
        const e = [];
        let t = 0;
        for (let n = 0, i = this.curves.length; n < i; n++) t += this.curves[n].getLength(), e.push(t);
        return this.cacheLengths = e, e
    }
    getSpacedPoints(e = 40) {
        const t = [];
        for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
        return this.autoClose && t.push(t[0]), t
    }
    getPoints(e = 12) {
        const t = [];
        let n;
        for (let i = 0, s = this.curves; i < s.length; i++) {
            const a = s[i],
                o = a && a.isEllipseCurve ? e * 2 : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? e * a.points.length : e,
                l = a.getPoints(o);
            for (let c = 0; c < l.length; c++) {
                const u = l[c];
                n && n.equals(u) || (t.push(u), n = u)
            }
        }
        return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t
    }
    copy(e) {
        super.copy(e), this.curves = [];
        for (let t = 0, n = e.curves.length; t < n; t++) {
            const i = e.curves[t];
            this.curves.push(i.clone())
        }
        return this.autoClose = e.autoClose, this
    }
    toJSON() {
        const e = super.toJSON();
        e.autoClose = this.autoClose, e.curves = [];
        for (let t = 0, n = this.curves.length; t < n; t++) {
            const i = this.curves[t];
            e.curves.push(i.toJSON())
        }
        return e
    }
    fromJSON(e) {
        super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
        for (let t = 0, n = e.curves.length; t < n; t++) {
            const i = e.curves[t];
            this.curves.push(new eh[i.type]().fromJSON(i))
        }
        return this
    }
}
class zo extends Jy {
    constructor(e) {
        super();
        this.type = "Path", this.currentPoint = new K, e && this.setFromPoints(e)
    }
    setFromPoints(e) {
        this.moveTo(e[0].x, e[0].y);
        for (let t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
        return this
    }
    moveTo(e, t) {
        return this.currentPoint.set(e, t), this
    }
    lineTo(e, t) {
        const n = new aa(this.currentPoint.clone(), new K(e, t));
        return this.curves.push(n), this.currentPoint.set(e, t), this
    }
    quadraticCurveTo(e, t, n, i) {
        const s = new Oo(this.currentPoint.clone(), new K(e, t), new K(n, i));
        return this.curves.push(s), this.currentPoint.set(n, i), this
    }
    bezierCurveTo(e, t, n, i, s, a) {
        const o = new No(this.currentPoint.clone(), new K(e, t), new K(n, i), new K(s, a));
        return this.curves.push(o), this.currentPoint.set(s, a), this
    }
    splineThru(e) {
        const t = [this.currentPoint.clone()].concat(e),
            n = new Bo(t);
        return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this
    }
    arc(e, t, n, i, s, a) {
        const o = this.currentPoint.x,
            l = this.currentPoint.y;
        return this.absarc(e + o, t + l, n, i, s, a), this
    }
    absarc(e, t, n, i, s, a) {
        return this.absellipse(e, t, n, n, i, s, a), this
    }
    ellipse(e, t, n, i, s, a, o, l) {
        const c = this.currentPoint.x,
            u = this.currentPoint.y;
        return this.absellipse(e + c, t + u, n, i, s, a, o, l), this
    }
    absellipse(e, t, n, i, s, a, o, l) {
        const c = new ra(e, t, n, i, s, a, o, l);
        if (this.curves.length > 0) {
            const h = c.getPoint(0);
            h.equals(this.currentPoint) || this.lineTo(h.x, h.y)
        }
        this.curves.push(c);
        const u = c.getPoint(1);
        return this.currentPoint.copy(u), this
    }
    copy(e) {
        return super.copy(e), this.currentPoint.copy(e.currentPoint), this
    }
    toJSON() {
        const e = super.toJSON();
        return e.currentPoint = this.currentPoint.toArray(), e
    }
    fromJSON(e) {
        return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this
    }
}
class Yr extends zo {
    constructor(e) {
        super(e);
        this.uuid = Bt(), this.type = "Shape", this.holes = []
    }
    getPointsHoles(e) {
        const t = [];
        for (let n = 0, i = this.holes.length; n < i; n++) t[n] = this.holes[n].getPoints(e);
        return t
    }
    extractPoints(e) {
        return {
            shape: this.getPoints(e),
            holes: this.getPointsHoles(e)
        }
    }
    copy(e) {
        super.copy(e), this.holes = [];
        for (let t = 0, n = e.holes.length; t < n; t++) {
            const i = e.holes[t];
            this.holes.push(i.clone())
        }
        return this
    }
    toJSON() {
        const e = super.toJSON();
        e.uuid = this.uuid, e.holes = [];
        for (let t = 0, n = this.holes.length; t < n; t++) {
            const i = this.holes[t];
            e.holes.push(i.toJSON())
        }
        return e
    }
    fromJSON(e) {
        super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
        for (let t = 0, n = e.holes.length; t < n; t++) {
            const i = e.holes[t];
            this.holes.push(new zo().fromJSON(i))
        }
        return this
    }
}
const Ky = {
    triangulate: function(r, e, t = 2) {
        const n = e && e.length,
            i = n ? e[0] * t : r.length;
        let s = th(r, 0, i, t, !0);
        const a = [];
        if (!s || s.next === s.prev) return a;
        let o, l, c, u, h, f, d;
        if (n && (s = nx(r, e, s, t)), r.length > 80 * t) {
            o = c = r[0], l = u = r[1];
            for (let p = t; p < i; p += t) h = r[p], f = r[p + 1], h < o && (o = h), f < l && (l = f), h > c && (c = h), f > u && (u = f);
            d = Math.max(c - o, u - l), d = d !== 0 ? 1 / d : 0
        }
        return Zr(s, a, t, o, l, d), a
    }
};

function th(r, e, t, n, i) {
    let s, a;
    if (i === dx(r, e, t, n) > 0)
        for (s = e; s < t; s += n) a = rh(s, r[s], r[s + 1], a);
    else
        for (s = t - n; s >= e; s -= n) a = rh(s, r[s], r[s + 1], a);
    return a && oa(a, a.next) && (Kr(a), a = a.next), a
}

function Gn(r, e) {
    if (!r) return r;
    e || (e = r);
    let t = r,
        n;
    do
        if (n = !1, !t.steiner && (oa(t, t.next) || Qe(t.prev, t, t.next) === 0)) {
            if (Kr(t), t = e = t.prev, t === t.next) break;
            n = !0
        } else t = t.next; while (n || t !== e);
    return e
}

function Zr(r, e, t, n, i, s, a) {
    if (!r) return;
    !a && s && ox(r, n, i, s);
    let o = r,
        l, c;
    for (; r.prev !== r.next;) {
        if (l = r.prev, c = r.next, s ? Qy(r, n, i, s) : $y(r)) {
            e.push(l.i / t), e.push(r.i / t), e.push(c.i / t), Kr(r), r = c.next, o = c.next;
            continue
        }
        if (r = c, r === o) {
            a ? a === 1 ? (r = ex(Gn(r), e, t), Zr(r, e, t, n, i, s, 2)) : a === 2 && tx(r, e, t, n, i, s) : Zr(Gn(r), e, t, n, i, s, 1);
            break
        }
    }
}

function $y(r) {
    const e = r.prev,
        t = r,
        n = r.next;
    if (Qe(e, t, n) >= 0) return !1;
    let i = r.next.next;
    for (; i !== r.prev;) {
        if (Qi(e.x, e.y, t.x, t.y, n.x, n.y, i.x, i.y) && Qe(i.prev, i, i.next) >= 0) return !1;
        i = i.next
    }
    return !0
}

function Qy(r, e, t, n) {
    const i = r.prev,
        s = r,
        a = r.next;
    if (Qe(i, s, a) >= 0) return !1;
    const o = i.x < s.x ? i.x < a.x ? i.x : a.x : s.x < a.x ? s.x : a.x,
        l = i.y < s.y ? i.y < a.y ? i.y : a.y : s.y < a.y ? s.y : a.y,
        c = i.x > s.x ? i.x > a.x ? i.x : a.x : s.x > a.x ? s.x : a.x,
        u = i.y > s.y ? i.y > a.y ? i.y : a.y : s.y > a.y ? s.y : a.y,
        h = Uo(o, l, e, t, n),
        f = Uo(c, u, e, t, n);
    let d = r.prevZ,
        p = r.nextZ;
    for (; d && d.z >= h && p && p.z <= f;) {
        if (d !== r.prev && d !== r.next && Qi(i.x, i.y, s.x, s.y, a.x, a.y, d.x, d.y) && Qe(d.prev, d, d.next) >= 0 || (d = d.prevZ, p !== r.prev && p !== r.next && Qi(i.x, i.y, s.x, s.y, a.x, a.y, p.x, p.y) && Qe(p.prev, p, p.next) >= 0)) return !1;
        p = p.nextZ
    }
    for (; d && d.z >= h;) {
        if (d !== r.prev && d !== r.next && Qi(i.x, i.y, s.x, s.y, a.x, a.y, d.x, d.y) && Qe(d.prev, d, d.next) >= 0) return !1;
        d = d.prevZ
    }
    for (; p && p.z <= f;) {
        if (p !== r.prev && p !== r.next && Qi(i.x, i.y, s.x, s.y, a.x, a.y, p.x, p.y) && Qe(p.prev, p, p.next) >= 0) return !1;
        p = p.nextZ
    }
    return !0
}

function ex(r, e, t) {
    let n = r;
    do {
        const i = n.prev,
            s = n.next.next;
        !oa(i, s) && nh(i, n, n.next, s) && Jr(i, s) && Jr(s, i) && (e.push(i.i / t), e.push(n.i / t), e.push(s.i / t), Kr(n), Kr(n.next), n = r = s), n = n.next
    } while (n !== r);
    return Gn(n)
}

function tx(r, e, t, n, i, s) {
    let a = r;
    do {
        let o = a.next.next;
        for (; o !== a.prev;) {
            if (a.i !== o.i && ux(a, o)) {
                let l = ih(a, o);
                a = Gn(a, a.next), l = Gn(l, l.next), Zr(a, e, t, n, i, s), Zr(l, e, t, n, i, s);
                return
            }
            o = o.next
        }
        a = a.next
    } while (a !== r)
}

function nx(r, e, t, n) {
    const i = [];
    let s, a, o, l, c;
    for (s = 0, a = e.length; s < a; s++) o = e[s] * n, l = s < a - 1 ? e[s + 1] * n : r.length, c = th(r, o, l, n, !1), c === c.next && (c.steiner = !0), i.push(cx(c));
    for (i.sort(ix), s = 0; s < i.length; s++) rx(i[s], t), t = Gn(t, t.next);
    return t
}

function ix(r, e) {
    return r.x - e.x
}

function rx(r, e) {
    if (e = sx(r, e), e) {
        const t = ih(e, r);
        Gn(e, e.next), Gn(t, t.next)
    }
}

function sx(r, e) {
    let t = e;
    const n = r.x,
        i = r.y;
    let s = -1 / 0,
        a;
    do {
        if (i <= t.y && i >= t.next.y && t.next.y !== t.y) {
            const f = t.x + (i - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
            if (f <= n && f > s) {
                if (s = f, f === n) {
                    if (i === t.y) return t;
                    if (i === t.next.y) return t.next
                }
                a = t.x < t.next.x ? t : t.next
            }
        }
        t = t.next
    } while (t !== e);
    if (!a) return null;
    if (n === s) return a;
    const o = a,
        l = a.x,
        c = a.y;
    let u = 1 / 0,
        h;
    t = a;
    do n >= t.x && t.x >= l && n !== t.x && Qi(i < c ? n : s, i, l, c, i < c ? s : n, i, t.x, t.y) && (h = Math.abs(i - t.y) / (n - t.x), Jr(t, r) && (h < u || h === u && (t.x > a.x || t.x === a.x && ax(a, t))) && (a = t, u = h)), t = t.next; while (t !== o);
    return a
}

function ax(r, e) {
    return Qe(r.prev, r, e.prev) < 0 && Qe(e.next, r, r.next) < 0
}

function ox(r, e, t, n) {
    let i = r;
    do i.z === null && (i.z = Uo(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next; while (i !== r);
    i.prevZ.nextZ = null, i.prevZ = null, lx(i)
}

function lx(r) {
    let e, t, n, i, s, a, o, l, c = 1;
    do {
        for (t = r, r = null, s = null, a = 0; t;) {
            for (a++, n = t, o = 0, e = 0; e < c && (o++, n = n.nextZ, !!n); e++);
            for (l = c; o > 0 || l > 0 && n;) o !== 0 && (l === 0 || !n || t.z <= n.z) ? (i = t, t = t.nextZ, o--) : (i = n, n = n.nextZ, l--), s ? s.nextZ = i : r = i, i.prevZ = s, s = i;
            t = n
        }
        s.nextZ = null, c *= 2
    } while (a > 1);
    return r
}

function Uo(r, e, t, n, i) {
    return r = 32767 * (r - t) * i, e = 32767 * (e - n) * i, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, r | e << 1
}

function cx(r) {
    let e = r,
        t = r;
    do(e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next; while (e !== r);
    return t
}

function Qi(r, e, t, n, i, s, a, o) {
    return (i - a) * (e - o) - (r - a) * (s - o) >= 0 && (r - a) * (n - o) - (t - a) * (e - o) >= 0 && (t - a) * (s - o) - (i - a) * (n - o) >= 0
}

function ux(r, e) {
    return r.next.i !== e.i && r.prev.i !== e.i && !hx(r, e) && (Jr(r, e) && Jr(e, r) && fx(r, e) && (Qe(r.prev, r, e.prev) || Qe(r, e.prev, e)) || oa(r, e) && Qe(r.prev, r, r.next) > 0 && Qe(e.prev, e, e.next) > 0)
}

function Qe(r, e, t) {
    return (e.y - r.y) * (t.x - e.x) - (e.x - r.x) * (t.y - e.y)
}

function oa(r, e) {
    return r.x === e.x && r.y === e.y
}

function nh(r, e, t, n) {
    const i = ca(Qe(r, e, t)),
        s = ca(Qe(r, e, n)),
        a = ca(Qe(t, n, r)),
        o = ca(Qe(t, n, e));
    return !!(i !== s && a !== o || i === 0 && la(r, t, e) || s === 0 && la(r, n, e) || a === 0 && la(t, r, n) || o === 0 && la(t, e, n))
}

function la(r, e, t) {
    return e.x <= Math.max(r.x, t.x) && e.x >= Math.min(r.x, t.x) && e.y <= Math.max(r.y, t.y) && e.y >= Math.min(r.y, t.y)
}

function ca(r) {
    return r > 0 ? 1 : r < 0 ? -1 : 0
}

function hx(r, e) {
    let t = r;
    do {
        if (t.i !== r.i && t.next.i !== r.i && t.i !== e.i && t.next.i !== e.i && nh(t, t.next, r, e)) return !0;
        t = t.next
    } while (t !== r);
    return !1
}

function Jr(r, e) {
    return Qe(r.prev, r, r.next) < 0 ? Qe(r, e, r.next) >= 0 && Qe(r, r.prev, e) >= 0 : Qe(r, e, r.prev) < 0 || Qe(r, r.next, e) < 0
}

function fx(r, e) {
    let t = r,
        n = !1;
    const i = (r.x + e.x) / 2,
        s = (r.y + e.y) / 2;
    do t.y > s != t.next.y > s && t.next.y !== t.y && i < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next; while (t !== r);
    return n
}

function ih(r, e) {
    const t = new ko(r.i, r.x, r.y),
        n = new ko(e.i, e.x, e.y),
        i = r.next,
        s = e.prev;
    return r.next = e, e.prev = r, t.next = i, i.prev = t, n.next = t, t.prev = n, s.next = n, n.prev = s, n
}

function rh(r, e, t, n) {
    const i = new ko(r, e, t);
    return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i
}

function Kr(r) {
    r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ)
}

function ko(r, e, t) {
    this.i = r, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
}

function dx(r, e, t, n) {
    let i = 0;
    for (let s = e, a = t - n; s < t; s += n) i += (r[a] - r[s]) * (r[s + 1] + r[a + 1]), a = s;
    return i
}
class Hn {
    static area(e) {
        const t = e.length;
        let n = 0;
        for (let i = t - 1, s = 0; s < t; i = s++) n += e[i].x * e[s].y - e[s].x * e[i].y;
        return n * .5
    }
    static isClockWise(e) {
        return Hn.area(e) < 0
    }
    static triangulateShape(e, t) {
        const n = [],
            i = [],
            s = [];
        sh(e), ah(n, e);
        let a = e.length;
        t.forEach(sh);
        for (let l = 0; l < t.length; l++) i.push(a), a += t[l].length, ah(n, t[l]);
        const o = Ky.triangulate(n, i);
        for (let l = 0; l < o.length; l += 3) s.push(o.slice(l, l + 3));
        return s
    }
}

function sh(r) {
    const e = r.length;
    e > 2 && r[e - 1].equals(r[0]) && r.pop()
}

function ah(r, e) {
    for (let t = 0; t < e.length; t++) r.push(e[t].x), r.push(e[t].y)
}
class er extends He {
    constructor(e = new Yr([new K(.5, .5), new K(-.5, .5), new K(-.5, -.5), new K(.5, -.5)]), t = {}) {
        super();
        this.type = "ExtrudeGeometry", this.parameters = {
            shapes: e,
            options: t
        }, e = Array.isArray(e) ? e : [e];
        const n = this,
            i = [],
            s = [];
        for (let o = 0, l = e.length; o < l; o++) {
            const c = e[o];
            a(c)
        }
        this.setAttribute("position", new Je(i, 3)), this.setAttribute("uv", new Je(s, 2)), this.computeVertexNormals();

        function a(o) {
            const l = [],
                c = t.curveSegments !== void 0 ? t.curveSegments : 12,
                u = t.steps !== void 0 ? t.steps : 1;
            let h = t.depth !== void 0 ? t.depth : 1,
                f = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0,
                d = t.bevelThickness !== void 0 ? t.bevelThickness : .2,
                p = t.bevelSize !== void 0 ? t.bevelSize : d - .1,
                v = t.bevelOffset !== void 0 ? t.bevelOffset : 0,
                y = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
            const m = t.extrudePath,
                g = t.UVGenerator !== void 0 ? t.UVGenerator : px;
            t.amount !== void 0 && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), h = t.amount);
            let x, _ = !1,
                w, T, M, L;
            m && (x = m.getSpacedPoints(u), _ = !0, f = !1, w = m.computeFrenetFrames(u, !1), T = new A, M = new A, L = new A), f || (y = 0, d = 0, p = 0, v = 0);
            const H = o.extractPoints(c);
            let P = H.shape;
            const R = H.holes;
            if (!Hn.isClockWise(P)) {
                P = P.reverse();
                for (let W = 0, $ = R.length; W < $; W++) {
                    const ne = R[W];
                    Hn.isClockWise(ne) && (R[W] = ne.reverse())
                }
            }
            const I = Hn.triangulateShape(P, R),
                F = P;
            for (let W = 0, $ = R.length; W < $; W++) {
                const ne = R[W];
                P = P.concat(ne)
            }

            function B(W, $, ne) {
                return $ || console.error("THREE.ExtrudeGeometry: vec does not exist"), $.clone().multiplyScalar(ne).add(W)
            }
            const N = P.length,
                O = I.length;

            function Y(W, $, ne) {
                let ye, le, E;
                const S = W.x - $.x,
                    V = W.y - $.y,
                    te = ne.x - W.x,
                    ee = ne.y - W.y,
                    pe = S * S + V * V,
                    be = S * ee - V * te;
                if (Math.abs(be) > Number.EPSILON) {
                    const _e = Math.sqrt(pe),
                        Ae = Math.sqrt(te * te + ee * ee),
                        xe = $.x - V / _e,
                        D = $.y + S / _e,
                        ce = ne.x - ee / Ae,
                        Z = ne.y + te / Ae,
                        de = ((ce - xe) * ee - (Z - D) * te) / (S * ee - V * te);
                    ye = xe + S * de - W.x, le = D + V * de - W.y;
                    const C = ye * ye + le * le;
                    if (C <= 2) return new K(ye, le);
                    E = Math.sqrt(C / 2)
                } else {
                    let _e = !1;
                    S > Number.EPSILON ? te > Number.EPSILON && (_e = !0) : S < -Number.EPSILON ? te < -Number.EPSILON && (_e = !0) : Math.sign(V) === Math.sign(ee) && (_e = !0), _e ? (ye = -V, le = S, E = Math.sqrt(pe)) : (ye = S, le = V, E = Math.sqrt(pe / 2))
                }
                return new K(ye / E, le / E)
            }
            const re = [];
            for (let W = 0, $ = F.length, ne = $ - 1, ye = W + 1; W < $; W++, ne++, ye++) ne === $ && (ne = 0), ye === $ && (ye = 0), re[W] = Y(F[W], F[ne], F[ye]);
            const he = [];
            let Q, ge = re.concat();
            for (let W = 0, $ = R.length; W < $; W++) {
                const ne = R[W];
                Q = [];
                for (let ye = 0, le = ne.length, E = le - 1, S = ye + 1; ye < le; ye++, E++, S++) E === le && (E = 0), S === le && (S = 0), Q[ye] = Y(ne[ye], ne[E], ne[S]);
                he.push(Q), ge = ge.concat(Q)
            }
            for (let W = 0; W < y; W++) {
                const $ = W / y,
                    ne = d * Math.cos($ * Math.PI / 2),
                    ye = p * Math.sin($ * Math.PI / 2) + v;
                for (let le = 0, E = F.length; le < E; le++) {
                    const S = B(F[le], re[le], ye);
                    ve(S.x, S.y, -ne)
                }
                for (let le = 0, E = R.length; le < E; le++) {
                    const S = R[le];
                    Q = he[le];
                    for (let V = 0, te = S.length; V < te; V++) {
                        const ee = B(S[V], Q[V], ye);
                        ve(ee.x, ee.y, -ne)
                    }
                }
            }
            const X = p + v;
            for (let W = 0; W < N; W++) {
                const $ = f ? B(P[W], ge[W], X) : P[W];
                _ ? (M.copy(w.normals[0]).multiplyScalar($.x), T.copy(w.binormals[0]).multiplyScalar($.y), L.copy(x[0]).add(M).add(T), ve(L.x, L.y, L.z)) : ve($.x, $.y, 0)
            }
            for (let W = 1; W <= u; W++)
                for (let $ = 0; $ < N; $++) {
                    const ne = f ? B(P[$], ge[$], X) : P[$];
                    _ ? (M.copy(w.normals[W]).multiplyScalar(ne.x), T.copy(w.binormals[W]).multiplyScalar(ne.y), L.copy(x[W]).add(M).add(T), ve(L.x, L.y, L.z)) : ve(ne.x, ne.y, h / u * W)
                }
            for (let W = y - 1; W >= 0; W--) {
                const $ = W / y,
                    ne = d * Math.cos($ * Math.PI / 2),
                    ye = p * Math.sin($ * Math.PI / 2) + v;
                for (let le = 0, E = F.length; le < E; le++) {
                    const S = B(F[le], re[le], ye);
                    ve(S.x, S.y, h + ne)
                }
                for (let le = 0, E = R.length; le < E; le++) {
                    const S = R[le];
                    Q = he[le];
                    for (let V = 0, te = S.length; V < te; V++) {
                        const ee = B(S[V], Q[V], ye);
                        _ ? ve(ee.x, ee.y + x[u - 1].y, x[u - 1].x + ne) : ve(ee.x, ee.y, h + ne)
                    }
                }
            }
            J(), se();

            function J() {
                const W = i.length / 3;
                if (f) {
                    let $ = 0,
                        ne = N * $;
                    for (let ye = 0; ye < O; ye++) {
                        const le = I[ye];
                        Me(le[2] + ne, le[1] + ne, le[0] + ne)
                    }
                    $ = u + y * 2, ne = N * $;
                    for (let ye = 0; ye < O; ye++) {
                        const le = I[ye];
                        Me(le[0] + ne, le[1] + ne, le[2] + ne)
                    }
                } else {
                    for (let $ = 0; $ < O; $++) {
                        const ne = I[$];
                        Me(ne[2], ne[1], ne[0])
                    }
                    for (let $ = 0; $ < O; $++) {
                        const ne = I[$];
                        Me(ne[0] + N * u, ne[1] + N * u, ne[2] + N * u)
                    }
                }
                n.addGroup(W, i.length / 3 - W, 0)
            }

            function se() {
                const W = i.length / 3;
                let $ = 0;
                k(F, $), $ += F.length;
                for (let ne = 0, ye = R.length; ne < ye; ne++) {
                    const le = R[ne];
                    k(le, $), $ += le.length
                }
                n.addGroup(W, i.length / 3 - W, 1)
            }

            function k(W, $) {
                let ne = W.length;
                for (; --ne >= 0;) {
                    const ye = ne;
                    let le = ne - 1;
                    le < 0 && (le = W.length - 1);
                    for (let E = 0, S = u + y * 2; E < S; E++) {
                        const V = N * E,
                            te = N * (E + 1),
                            ee = $ + ye + V,
                            pe = $ + le + V,
                            be = $ + le + te,
                            _e = $ + ye + te;
                        fe(ee, pe, be, _e)
                    }
                }
            }

            function ve(W, $, ne) {
                l.push(W), l.push($), l.push(ne)
            }

            function Me(W, $, ne) {
                me(W), me($), me(ne);
                const ye = i.length / 3,
                    le = g.generateTopUV(n, i, ye - 3, ye - 2, ye - 1);
                Ee(le[0]), Ee(le[1]), Ee(le[2])
            }

            function fe(W, $, ne, ye) {
                me(W), me($), me(ye), me($), me(ne), me(ye);
                const le = i.length / 3,
                    E = g.generateSideWallUV(n, i, le - 6, le - 3, le - 2, le - 1);
                Ee(E[0]), Ee(E[1]), Ee(E[3]), Ee(E[1]), Ee(E[2]), Ee(E[3])
            }

            function me(W) {
                i.push(l[W * 3 + 0]), i.push(l[W * 3 + 1]), i.push(l[W * 3 + 2])
            }

            function Ee(W) {
                s.push(W.x), s.push(W.y)
            }
        }
    }
    toJSON() {
        const e = super.toJSON(),
            t = this.parameters.shapes,
            n = this.parameters.options;
        return mx(t, n, e)
    }
    static fromJSON(e, t) {
        const n = [];
        for (let s = 0, a = e.shapes.length; s < a; s++) {
            const o = t[e.shapes[s]];
            n.push(o)
        }
        const i = e.options.extrudePath;
        return i !== void 0 && (e.options.extrudePath = new eh[i.type]().fromJSON(i)), new er(n, e.options)
    }
}
const px = {
    generateTopUV: function(r, e, t, n, i) {
        const s = e[t * 3],
            a = e[t * 3 + 1],
            o = e[n * 3],
            l = e[n * 3 + 1],
            c = e[i * 3],
            u = e[i * 3 + 1];
        return [new K(s, a), new K(o, l), new K(c, u)]
    },
    generateSideWallUV: function(r, e, t, n, i, s) {
        const a = e[t * 3],
            o = e[t * 3 + 1],
            l = e[t * 3 + 2],
            c = e[n * 3],
            u = e[n * 3 + 1],
            h = e[n * 3 + 2],
            f = e[i * 3],
            d = e[i * 3 + 1],
            p = e[i * 3 + 2],
            v = e[s * 3],
            y = e[s * 3 + 1],
            m = e[s * 3 + 2];
        return Math.abs(o - u) < Math.abs(a - c) ? [new K(a, 1 - l), new K(c, 1 - h), new K(f, 1 - p), new K(v, 1 - m)] : [new K(o, 1 - l), new K(u, 1 - h), new K(d, 1 - p), new K(y, 1 - m)]
    }
};

function mx(r, e, t) {
    if (t.shapes = [], Array.isArray(r))
        for (let n = 0, i = r.length; n < i; n++) {
            const s = r[n];
            t.shapes.push(s.uuid)
        } else t.shapes.push(r.uuid);
    return e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t
}
class Go extends He {
    constructor(e = new Yr([new K(0, .5), new K(-.5, -.5), new K(.5, -.5)]), t = 12) {
        super();
        this.type = "ShapeGeometry", this.parameters = {
            shapes: e,
            curveSegments: t
        };
        const n = [],
            i = [],
            s = [],
            a = [];
        let o = 0,
            l = 0;
        if (Array.isArray(e) === !1) c(e);
        else
            for (let u = 0; u < e.length; u++) c(e[u]), this.addGroup(o, l, u), o += l, l = 0;
        this.setIndex(n), this.setAttribute("position", new Je(i, 3)), this.setAttribute("normal", new Je(s, 3)), this.setAttribute("uv", new Je(a, 2));

        function c(u) {
            const h = i.length / 3,
                f = u.extractPoints(t);
            let d = f.shape;
            const p = f.holes;
            Hn.isClockWise(d) === !1 && (d = d.reverse());
            for (let y = 0, m = p.length; y < m; y++) {
                const g = p[y];
                Hn.isClockWise(g) === !0 && (p[y] = g.reverse())
            }
            const v = Hn.triangulateShape(d, p);
            for (let y = 0, m = p.length; y < m; y++) {
                const g = p[y];
                d = d.concat(g)
            }
            for (let y = 0, m = d.length; y < m; y++) {
                const g = d[y];
                i.push(g.x, g.y, 0), s.push(0, 0, 1), a.push(g.x, g.y)
            }
            for (let y = 0, m = v.length; y < m; y++) {
                const g = v[y],
                    x = g[0] + h,
                    _ = g[1] + h,
                    w = g[2] + h;
                n.push(x, _, w), l += 3
            }
        }
    }
    toJSON() {
        const e = super.toJSON(),
            t = this.parameters.shapes;
        return gx(t, e)
    }
    static fromJSON(e, t) {
        const n = [];
        for (let i = 0, s = e.shapes.length; i < s; i++) {
            const a = t[e.shapes[i]];
            n.push(a)
        }
        return new Go(n, e.curveSegments)
    }
}

function gx(r, e) {
    if (e.shapes = [], Array.isArray(r))
        for (let t = 0, n = r.length; t < n; t++) {
            const i = r[t];
            e.shapes.push(i.uuid)
        } else e.shapes.push(r.uuid);
    return e
}
class vx extends ft {
    constructor(e) {
        super();
        this.type = "ShadowMaterial", this.color = new ue(0), this.transparent = !0, this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this
    }
}
vx.prototype.isShadowMaterial = !0;
class $r extends ft {
    constructor(e) {
        super();
        this.defines = {
            STANDARD: ""
        }, this.type = "MeshStandardMaterial", this.color = new ue(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ue(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ri, this.normalScale = new K(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.defines = {
            STANDARD: ""
        }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this
    }
}
$r.prototype.isMeshStandardMaterial = !0;
class tr extends $r {
    constructor(e) {
        super();
        this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new K(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
            get: function() {
                return St(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1)
            },
            set: function(t) {
                this.ior = (1 + .4 * t) / (1 - .4 * t)
            }
        }), this.sheenTint = new ue(0), this.sheenRoughness = 1, this.transmissionMap = null, this.thickness = .01, this.thicknessMap = null, this.attenuationDistance = 0, this.attenuationTint = new ue(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularTint = new ue(1, 1, 1), this.specularTintMap = null, this._sheen = 0, this._clearcoat = 0, this._transmission = 0, this.setValues(e)
    }
    get sheen() {
        return this._sheen
    }
    set sheen(e) {
        this._sheen > 0 != e > 0 && this.version++, this._sheen = e
    }
    get clearcoat() {
        return this._clearcoat
    }
    set clearcoat(e) {
        this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e
    }
    get transmission() {
        return this._transmission
    }
    set transmission(e) {
        this._transmission > 0 != e > 0 && this.version++, this._transmission = e
    }
    copy(e) {
        return super.copy(e), this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        }, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.sheen = e.sheen, this.sheenTint.copy(e.sheenTint), this.sheenRoughness = e.sheenRoughness, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationTint.copy(e.attenuationTint), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularTint.copy(e.specularTint), this.specularTintMap = e.specularTintMap, this
    }
}
tr.prototype.isMeshPhysicalMaterial = !0;
class ua extends ft {
    constructor(e) {
        super();
        this.type = "MeshPhongMaterial", this.color = new ue(16777215), this.specular = new ue(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ue(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ri, this.normalScale = new K(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = ps, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this
    }
}
ua.prototype.isMeshPhongMaterial = !0;
class yx extends ft {
    constructor(e) {
        super();
        this.defines = {
            TOON: ""
        }, this.type = "MeshToonMaterial", this.color = new ue(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ue(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ri, this.normalScale = new K(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this
    }
}
yx.prototype.isMeshToonMaterial = !0;
class xx extends ft {
    constructor(e) {
        super();
        this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ri, this.normalScale = new K(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.flatShading = !1, this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this
    }
}
xx.prototype.isMeshNormalMaterial = !0;
class oh extends ft {
    constructor(e) {
        super();
        this.type = "MeshLambertMaterial", this.color = new ue(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ue(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = ps, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this
    }
}
oh.prototype.isMeshLambertMaterial = !0;
class _x extends ft {
    constructor(e) {
        super();
        this.defines = {
            MATCAP: ""
        }, this.type = "MeshMatcapMaterial", this.color = new ue(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ri, this.normalScale = new K(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.defines = {
            MATCAP: ""
        }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.flatShading = e.flatShading, this
    }
}
_x.prototype.isMeshMatcapMaterial = !0;
class Mx extends hi {
    constructor(e) {
        super();
        this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this
    }
}
Mx.prototype.isLineDashedMaterial = !0;
const Ke = {
    arraySlice: function(r, e, t) {
        return Ke.isTypedArray(r) ? new r.constructor(r.subarray(e, t !== void 0 ? t : r.length)) : r.slice(e, t)
    },
    convertArray: function(r, e, t) {
        return !r || !t && r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r)
    },
    isTypedArray: function(r) {
        return ArrayBuffer.isView(r) && !(r instanceof DataView)
    },
    getKeyframeOrder: function(r) {
        function e(i, s) {
            return r[i] - r[s]
        }
        const t = r.length,
            n = new Array(t);
        for (let i = 0; i !== t; ++i) n[i] = i;
        return n.sort(e), n
    },
    sortedArray: function(r, e, t) {
        const n = r.length,
            i = new r.constructor(n);
        for (let s = 0, a = 0; a !== n; ++s) {
            const o = t[s] * e;
            for (let l = 0; l !== e; ++l) i[a++] = r[o + l]
        }
        return i
    },
    flattenJSON: function(r, e, t, n) {
        let i = 1,
            s = r[0];
        for (; s !== void 0 && s[n] === void 0;) s = r[i++];
        if (s === void 0) return;
        let a = s[n];
        if (a !== void 0)
            if (Array.isArray(a))
                do a = s[n], a !== void 0 && (e.push(s.time), t.push.apply(t, a)), s = r[i++]; while (s !== void 0);
            else if (a.toArray !== void 0)
            do a = s[n], a !== void 0 && (e.push(s.time), a.toArray(t, t.length)), s = r[i++]; while (s !== void 0);
        else
            do a = s[n], a !== void 0 && (e.push(s.time), t.push(a)), s = r[i++]; while (s !== void 0)
    },
    subclip: function(r, e, t, n, i = 30) {
        const s = r.clone();
        s.name = e;
        const a = [];
        for (let l = 0; l < s.tracks.length; ++l) {
            const c = s.tracks[l],
                u = c.getValueSize(),
                h = [],
                f = [];
            for (let d = 0; d < c.times.length; ++d) {
                const p = c.times[d] * i;
                if (!(p < t || p >= n)) {
                    h.push(c.times[d]);
                    for (let v = 0; v < u; ++v) f.push(c.values[d * u + v])
                }
            }
            h.length !== 0 && (c.times = Ke.convertArray(h, c.times.constructor), c.values = Ke.convertArray(f, c.values.constructor), a.push(c))
        }
        s.tracks = a;
        let o = 1 / 0;
        for (let l = 0; l < s.tracks.length; ++l) o > s.tracks[l].times[0] && (o = s.tracks[l].times[0]);
        for (let l = 0; l < s.tracks.length; ++l) s.tracks[l].shift(-1 * o);
        return s.resetDuration(), s
    },
    makeClipAdditive: function(r, e = 0, t = r, n = 30) {
        n <= 0 && (n = 30);
        const i = t.tracks.length,
            s = e / n;
        for (let a = 0; a < i; ++a) {
            const o = t.tracks[a],
                l = o.ValueTypeName;
            if (l === "bool" || l === "string") continue;
            const c = r.tracks.find(function(m) {
                return m.name === o.name && m.ValueTypeName === l
            });
            if (c === void 0) continue;
            let u = 0;
            const h = o.getValueSize();
            o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (u = h / 3);
            let f = 0;
            const d = c.getValueSize();
            c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (f = d / 3);
            const p = o.times.length - 1;
            let v;
            if (s <= o.times[0]) {
                const m = u,
                    g = h - u;
                v = Ke.arraySlice(o.values, m, g)
            } else if (s >= o.times[p]) {
                const m = p * h + u,
                    g = m + h - u;
                v = Ke.arraySlice(o.values, m, g)
            } else {
                const m = o.createInterpolant(),
                    g = u,
                    x = h - u;
                m.evaluate(s), v = Ke.arraySlice(m.resultBuffer, g, x)
            }
            l === "quaternion" && new nt().fromArray(v).normalize().conjugate().toArray(v);
            const y = c.times.length;
            for (let m = 0; m < y; ++m) {
                const g = m * d + f;
                if (l === "quaternion") nt.multiplyQuaternionsFlat(c.values, g, v, 0, c.values, g);
                else {
                    const x = d - f * 2;
                    for (let _ = 0; _ < x; ++_) c.values[g + _] -= v[_]
                }
            }
        }
        return r.blendMode = xc, r
    }
};
class yn {
    constructor(e, t, n, i) {
        this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {}
    }
    evaluate(e) {
        const t = this.parameterPositions;
        let n = this._cachedIndex,
            i = t[n],
            s = t[n - 1];
        e: {
            t: {
                let a;n: {
                    i: if (!(e < i)) {
                        for (let o = n + 2;;) {
                            if (i === void 0) {
                                if (e < s) break i;
                                return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, e, s)
                            }
                            if (n === o) break;
                            if (s = i, i = t[++n], e < i) break t
                        }
                        a = t.length;
                        break n
                    }if (!(e >= s)) {
                        const o = t[1];
                        e < o && (n = 2, s = o);
                        for (let l = n - 2;;) {
                            if (s === void 0) return this._cachedIndex = 0, this.beforeStart_(0, e, i);
                            if (n === l) break;
                            if (i = s, s = t[--n - 1], e >= s) break t
                        }
                        a = n, n = 0;
                        break n
                    }
                    break e
                }
                for (; n < a;) {
                    const o = n + a >>> 1;
                    e < t[o] ? a = o : n = o + 1
                }
                if (i = t[n], s = t[n - 1], s === void 0) return this._cachedIndex = 0, this.beforeStart_(0, e, i);
                if (i === void 0) return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, s, e)
            }
            this._cachedIndex = n,
            this.intervalChanged_(n, s, i)
        }
        return this.interpolate_(n, s, e, i)
    }
    getSettings_() {
        return this.settings || this.DefaultSettings_
    }
    copySampleValue_(e) {
        const t = this.resultBuffer,
            n = this.sampleValues,
            i = this.valueSize,
            s = e * i;
        for (let a = 0; a !== i; ++a) t[a] = n[s + a];
        return t
    }
    interpolate_() {
        throw new Error("call to abstract method")
    }
    intervalChanged_() {}
}
yn.prototype.beforeStart_ = yn.prototype.copySampleValue_;
yn.prototype.afterEnd_ = yn.prototype.copySampleValue_;
class wx extends yn {
    constructor(e, t, n, i) {
        super(e, t, n, i);
        this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
            endingStart: Ti,
            endingEnd: Ti
        }
    }
    intervalChanged_(e, t, n) {
        const i = this.parameterPositions;
        let s = e - 2,
            a = e + 1,
            o = i[s],
            l = i[a];
        if (o === void 0) switch (this.getSettings_().endingStart) {
            case Ei:
                s = e, o = 2 * t - n;
                break;
            case ws:
                s = i.length - 2, o = t + i[s] - i[s + 1];
                break;
            default:
                s = e, o = n
        }
        if (l === void 0) switch (this.getSettings_().endingEnd) {
            case Ei:
                a = e, l = 2 * n - t;
                break;
            case ws:
                a = 1, l = n + i[1] - i[0];
                break;
            default:
                a = e - 1, l = t
        }
        const c = (n - t) * .5,
            u = this.valueSize;
        this._weightPrev = c / (t - o), this._weightNext = c / (l - n), this._offsetPrev = s * u, this._offsetNext = a * u
    }
    interpolate_(e, t, n, i) {
        const s = this.resultBuffer,
            a = this.sampleValues,
            o = this.valueSize,
            l = e * o,
            c = l - o,
            u = this._offsetPrev,
            h = this._offsetNext,
            f = this._weightPrev,
            d = this._weightNext,
            p = (n - t) / (i - t),
            v = p * p,
            y = v * p,
            m = -f * y + 2 * f * v - f * p,
            g = (1 + f) * y + (-1.5 - 2 * f) * v + (-.5 + f) * p + 1,
            x = (-1 - d) * y + (1.5 + d) * v + .5 * p,
            _ = d * y - d * v;
        for (let w = 0; w !== o; ++w) s[w] = m * a[u + w] + g * a[c + w] + x * a[l + w] + _ * a[h + w];
        return s
    }
}
class lh extends yn {
    constructor(e, t, n, i) {
        super(e, t, n, i)
    }
    interpolate_(e, t, n, i) {
        const s = this.resultBuffer,
            a = this.sampleValues,
            o = this.valueSize,
            l = e * o,
            c = l - o,
            u = (n - t) / (i - t),
            h = 1 - u;
        for (let f = 0; f !== o; ++f) s[f] = a[c + f] * h + a[l + f] * u;
        return s
    }
}
class bx extends yn {
    constructor(e, t, n, i) {
        super(e, t, n, i)
    }
    interpolate_(e) {
        return this.copySampleValue_(e - 1)
    }
}
class sn {
    constructor(e, t, n, i) {
        if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
        if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
        this.name = e, this.times = Ke.convertArray(t, this.TimeBufferType), this.values = Ke.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation)
    }
    static toJSON(e) {
        const t = e.constructor;
        let n;
        if (t.toJSON !== this.toJSON) n = t.toJSON(e);
        else {
            n = {
                name: e.name,
                times: Ke.convertArray(e.times, Array),
                values: Ke.convertArray(e.values, Array)
            };
            const i = e.getInterpolation();
            i !== e.DefaultInterpolation && (n.interpolation = i)
        }
        return n.type = e.ValueTypeName, n
    }
    InterpolantFactoryMethodDiscrete(e) {
        return new bx(this.times, this.values, this.getValueSize(), e)
    }
    InterpolantFactoryMethodLinear(e) {
        return new lh(this.times, this.values, this.getValueSize(), e)
    }
    InterpolantFactoryMethodSmooth(e) {
        return new wx(this.times, this.values, this.getValueSize(), e)
    }
    setInterpolation(e) {
        let t;
        switch (e) {
            case Ar:
                t = this.InterpolantFactoryMethodDiscrete;
                break;
            case Si:
                t = this.InterpolantFactoryMethodLinear;
                break;
            case Ba:
                t = this.InterpolantFactoryMethodSmooth;
                break
        }
        if (t === void 0) {
            const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (this.createInterpolant === void 0)
                if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
                else throw new Error(n);
            return console.warn("THREE.KeyframeTrack:", n), this
        }
        return this.createInterpolant = t, this
    }
    getInterpolation() {
        switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
                return Ar;
            case this.InterpolantFactoryMethodLinear:
                return Si;
            case this.InterpolantFactoryMethodSmooth:
                return Ba
        }
    }
    getValueSize() {
        return this.values.length / this.times.length
    }
    shift(e) {
        if (e !== 0) {
            const t = this.times;
            for (let n = 0, i = t.length; n !== i; ++n) t[n] += e
        }
        return this
    }
    scale(e) {
        if (e !== 1) {
            const t = this.times;
            for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e
        }
        return this
    }
    trim(e, t) {
        const n = this.times,
            i = n.length;
        let s = 0,
            a = i - 1;
        for (; s !== i && n[s] < e;) ++s;
        for (; a !== -1 && n[a] > t;) --a;
        if (++a, s !== 0 || a !== i) {
            s >= a && (a = Math.max(a, 1), s = a - 1);
            const o = this.getValueSize();
            this.times = Ke.arraySlice(n, s, a), this.values = Ke.arraySlice(this.values, s * o, a * o)
        }
        return this
    }
    validate() {
        let e = !0;
        const t = this.getValueSize();
        t - Math.floor(t) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
        const n = this.times,
            i = this.values,
            s = n.length;
        s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
        let a = null;
        for (let o = 0; o !== s; o++) {
            const l = n[o];
            if (typeof l == "number" && isNaN(l)) {
                console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, l), e = !1;
                break
            }
            if (a !== null && a > l) {
                console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, a), e = !1;
                break
            }
            a = l
        }
        if (i !== void 0 && Ke.isTypedArray(i))
            for (let o = 0, l = i.length; o !== l; ++o) {
                const c = i[o];
                if (isNaN(c)) {
                    console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), e = !1;
                    break
                }
            }
        return e
    }
    optimize() {
        const e = Ke.arraySlice(this.times),
            t = Ke.arraySlice(this.values),
            n = this.getValueSize(),
            i = this.getInterpolation() === Ba,
            s = e.length - 1;
        let a = 1;
        for (let o = 1; o < s; ++o) {
            let l = !1;
            const c = e[o],
                u = e[o + 1];
            if (c !== u && (o !== 1 || c !== e[0]))
                if (i) l = !0;
                else {
                    const h = o * n,
                        f = h - n,
                        d = h + n;
                    for (let p = 0; p !== n; ++p) {
                        const v = t[h + p];
                        if (v !== t[f + p] || v !== t[d + p]) {
                            l = !0;
                            break
                        }
                    }
                }
            if (l) {
                if (o !== a) {
                    e[a] = e[o];
                    const h = o * n,
                        f = a * n;
                    for (let d = 0; d !== n; ++d) t[f + d] = t[h + d]
                }++a
            }
        }
        if (s > 0) {
            e[a] = e[s];
            for (let o = s * n, l = a * n, c = 0; c !== n; ++c) t[l + c] = t[o + c];
            ++a
        }
        return a !== e.length ? (this.times = Ke.arraySlice(e, 0, a), this.values = Ke.arraySlice(t, 0, a * n)) : (this.times = e, this.values = t), this
    }
    clone() {
        const e = Ke.arraySlice(this.times, 0),
            t = Ke.arraySlice(this.values, 0),
            n = this.constructor,
            i = new n(this.name, e, t);
        return i.createInterpolant = this.createInterpolant, i
    }
}
sn.prototype.TimeBufferType = Float32Array;
sn.prototype.ValueBufferType = Float32Array;
sn.prototype.DefaultInterpolation = Si;
class nr extends sn {}
nr.prototype.ValueTypeName = "bool";
nr.prototype.ValueBufferType = Array;
nr.prototype.DefaultInterpolation = Ar;
nr.prototype.InterpolantFactoryMethodLinear = void 0;
nr.prototype.InterpolantFactoryMethodSmooth = void 0;
class ch extends sn {}
ch.prototype.ValueTypeName = "color";
class ir extends sn {}
ir.prototype.ValueTypeName = "number";
class Sx extends yn {
    constructor(e, t, n, i) {
        super(e, t, n, i)
    }
    interpolate_(e, t, n, i) {
        const s = this.resultBuffer,
            a = this.sampleValues,
            o = this.valueSize,
            l = (n - t) / (i - t);
        let c = e * o;
        for (let u = c + o; c !== u; c += 4) nt.slerpFlat(s, 0, a, c - o, a, c, l);
        return s
    }
}
class Vn extends sn {
    InterpolantFactoryMethodLinear(e) {
        return new Sx(this.times, this.values, this.getValueSize(), e)
    }
}
Vn.prototype.ValueTypeName = "quaternion";
Vn.prototype.DefaultInterpolation = Si;
Vn.prototype.InterpolantFactoryMethodSmooth = void 0;
class rr extends sn {}
rr.prototype.ValueTypeName = "string";
rr.prototype.ValueBufferType = Array;
rr.prototype.DefaultInterpolation = Ar;
rr.prototype.InterpolantFactoryMethodLinear = void 0;
rr.prototype.InterpolantFactoryMethodSmooth = void 0;
class sr extends sn {}
sr.prototype.ValueTypeName = "vector";
class ha {
    constructor(e, t = -1, n, i = za) {
        this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Bt(), this.duration < 0 && this.resetDuration()
    }
    static parse(e) {
        const t = [],
            n = e.tracks,
            i = 1 / (e.fps || 1);
        for (let a = 0, o = n.length; a !== o; ++a) t.push(Ex(n[a]).scale(i));
        const s = new this(e.name, e.duration, t, e.blendMode);
        return s.uuid = e.uuid, s
    }
    static toJSON(e) {
        const t = [],
            n = e.tracks,
            i = {
                name: e.name,
                duration: e.duration,
                tracks: t,
                uuid: e.uuid,
                blendMode: e.blendMode
            };
        for (let s = 0, a = n.length; s !== a; ++s) t.push(sn.toJSON(n[s]));
        return i
    }
    static CreateFromMorphTargetSequence(e, t, n, i) {
        const s = t.length,
            a = [];
        for (let o = 0; o < s; o++) {
            let l = [],
                c = [];
            l.push((o + s - 1) % s, o, (o + 1) % s), c.push(0, 1, 0);
            const u = Ke.getKeyframeOrder(l);
            l = Ke.sortedArray(l, 1, u), c = Ke.sortedArray(c, 1, u), !i && l[0] === 0 && (l.push(s), c.push(c[0])), a.push(new ir(".morphTargetInfluences[" + t[o].name + "]", l, c).scale(1 / n))
        }
        return new this(e, -1, a)
    }
    static findByName(e, t) {
        let n = e;
        if (!Array.isArray(e)) {
            const i = e;
            n = i.geometry && i.geometry.animations || i.animations
        }
        for (let i = 0; i < n.length; i++)
            if (n[i].name === t) return n[i];
        return null
    }
    static CreateClipsFromMorphTargetSequences(e, t, n) {
        const i = {},
            s = /^([\w-]*?)([\d]+)$/;
        for (let o = 0, l = e.length; o < l; o++) {
            const c = e[o],
                u = c.name.match(s);
            if (u && u.length > 1) {
                const h = u[1];
                let f = i[h];
                f || (i[h] = f = []), f.push(c)
            }
        }
        const a = [];
        for (const o in i) a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
        return a
    }
    static parseAnimation(e, t) {
        if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
        const n = function(h, f, d, p, v) {
                if (d.length !== 0) {
                    const y = [],
                        m = [];
                    Ke.flattenJSON(d, y, m, p), y.length !== 0 && v.push(new h(f, y, m))
                }
            },
            i = [],
            s = e.name || "default",
            a = e.fps || 30,
            o = e.blendMode;
        let l = e.length || -1;
        const c = e.hierarchy || [];
        for (let h = 0; h < c.length; h++) {
            const f = c[h].keys;
            if (!(!f || f.length === 0))
                if (f[0].morphTargets) {
                    const d = {};
                    let p;
                    for (p = 0; p < f.length; p++)
                        if (f[p].morphTargets)
                            for (let v = 0; v < f[p].morphTargets.length; v++) d[f[p].morphTargets[v]] = -1;
                    for (const v in d) {
                        const y = [],
                            m = [];
                        for (let g = 0; g !== f[p].morphTargets.length; ++g) {
                            const x = f[p];
                            y.push(x.time), m.push(x.morphTarget === v ? 1 : 0)
                        }
                        i.push(new ir(".morphTargetInfluence[" + v + "]", y, m))
                    }
                    l = d.length * (a || 1)
                } else {
                    const d = ".bones[" + t[h].name + "]";
                    n(sr, d + ".position", f, "pos", i), n(Vn, d + ".quaternion", f, "rot", i), n(sr, d + ".scale", f, "scl", i)
                }
        }
        return i.length === 0 ? null : new this(s, l, i, o)
    }
    resetDuration() {
        const e = this.tracks;
        let t = 0;
        for (let n = 0, i = e.length; n !== i; ++n) {
            const s = this.tracks[n];
            t = Math.max(t, s.times[s.times.length - 1])
        }
        return this.duration = t, this
    }
    trim() {
        for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
        return this
    }
    validate() {
        let e = !0;
        for (let t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
        return e
    }
    optimize() {
        for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
        return this
    }
    clone() {
        const e = [];
        for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
        return new this.constructor(this.name, this.duration, e, this.blendMode)
    }
    toJSON() {
        return this.constructor.toJSON(this)
    }
}

function Tx(r) {
    switch (r.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
            return ir;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
            return sr;
        case "color":
            return ch;
        case "quaternion":
            return Vn;
        case "bool":
        case "boolean":
            return nr;
        case "string":
            return rr
    }
    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r)
}

function Ex(r) {
    if (r.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    const e = Tx(r.type);
    if (r.times === void 0) {
        const t = [],
            n = [];
        Ke.flattenJSON(r.keys, t, n, "value"), r.times = t, r.values = n
    }
    return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation)
}
const ar = {
    enabled: !1,
    files: {},
    add: function(r, e) {
        this.enabled !== !1 && (this.files[r] = e)
    },
    get: function(r) {
        if (this.enabled !== !1) return this.files[r]
    },
    remove: function(r) {
        delete this.files[r]
    },
    clear: function() {
        this.files = {}
    }
};
class Ax {
    constructor(e, t, n) {
        const i = this;
        let s = !1,
            a = 0,
            o = 0,
            l;
        const c = [];
        this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(u) {
            o++, s === !1 && i.onStart !== void 0 && i.onStart(u, a, o), s = !0
        }, this.itemEnd = function(u) {
            a++, i.onProgress !== void 0 && i.onProgress(u, a, o), a === o && (s = !1, i.onLoad !== void 0 && i.onLoad())
        }, this.itemError = function(u) {
            i.onError !== void 0 && i.onError(u)
        }, this.resolveURL = function(u) {
            return l ? l(u) : u
        }, this.setURLModifier = function(u) {
            return l = u, this
        }, this.addHandler = function(u, h) {
            return c.push(u, h), this
        }, this.removeHandler = function(u) {
            const h = c.indexOf(u);
            return h !== -1 && c.splice(h, 2), this
        }, this.getHandler = function(u) {
            for (let h = 0, f = c.length; h < f; h += 2) {
                const d = c[h],
                    p = c[h + 1];
                if (d.global && (d.lastIndex = 0), d.test(u)) return p
            }
            return null
        }
    }
}
const Lx = new Ax;
class Kt {
    constructor(e) {
        this.manager = e !== void 0 ? e : Lx, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}
    }
    load() {}
    loadAsync(e, t) {
        const n = this;
        return new Promise(function(i, s) {
            n.load(e, i, t, s)
        })
    }
    parse() {}
    setCrossOrigin(e) {
        return this.crossOrigin = e, this
    }
    setWithCredentials(e) {
        return this.withCredentials = e, this
    }
    setPath(e) {
        return this.path = e, this
    }
    setResourcePath(e) {
        return this.resourcePath = e, this
    }
    setRequestHeader(e) {
        return this.requestHeader = e, this
    }
}
const $t = {};
class or extends Kt {
    constructor(e) {
        super(e)
    }
    load(e, t, n, i) {
        e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
        const s = this,
            a = ar.get(e);
        if (a !== void 0) return s.manager.itemStart(e), setTimeout(function() {
            t && t(a), s.manager.itemEnd(e)
        }, 0), a;
        if ($t[e] !== void 0) {
            $t[e].push({
                onLoad: t,
                onProgress: n,
                onError: i
            });
            return
        }
        const o = /^data:(.*?)(;base64)?,(.*)$/,
            l = e.match(o);
        let c;
        if (l) {
            const u = l[1],
                h = !!l[2];
            let f = l[3];
            f = decodeURIComponent(f), h && (f = atob(f));
            try {
                let d;
                const p = (this.responseType || "").toLowerCase();
                switch (p) {
                    case "arraybuffer":
                    case "blob":
                        const v = new Uint8Array(f.length);
                        for (let m = 0; m < f.length; m++) v[m] = f.charCodeAt(m);
                        p === "blob" ? d = new Blob([v.buffer], {
                            type: u
                        }) : d = v.buffer;
                        break;
                    case "document":
                        d = new DOMParser().parseFromString(f, u);
                        break;
                    case "json":
                        d = JSON.parse(f);
                        break;
                    default:
                        d = f;
                        break
                }
                setTimeout(function() {
                    t && t(d), s.manager.itemEnd(e)
                }, 0)
            } catch (d) {
                setTimeout(function() {
                    i && i(d), s.manager.itemError(e), s.manager.itemEnd(e)
                }, 0)
            }
        } else {
            $t[e] = [], $t[e].push({
                onLoad: t,
                onProgress: n,
                onError: i
            }), c = new XMLHttpRequest, c.open("GET", e, !0), c.addEventListener("load", function(u) {
                const h = this.response,
                    f = $t[e];
                if (delete $t[e], this.status === 200 || this.status === 0) {
                    this.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), ar.add(e, h);
                    for (let d = 0, p = f.length; d < p; d++) {
                        const v = f[d];
                        v.onLoad && v.onLoad(h)
                    }
                    s.manager.itemEnd(e)
                } else {
                    for (let d = 0, p = f.length; d < p; d++) {
                        const v = f[d];
                        v.onError && v.onError(u)
                    }
                    s.manager.itemError(e), s.manager.itemEnd(e)
                }
            }, !1), c.addEventListener("progress", function(u) {
                const h = $t[e];
                for (let f = 0, d = h.length; f < d; f++) {
                    const p = h[f];
                    p.onProgress && p.onProgress(u)
                }
            }, !1), c.addEventListener("error", function(u) {
                const h = $t[e];
                delete $t[e];
                for (let f = 0, d = h.length; f < d; f++) {
                    const p = h[f];
                    p.onError && p.onError(u)
                }
                s.manager.itemError(e), s.manager.itemEnd(e)
            }, !1), c.addEventListener("abort", function(u) {
                const h = $t[e];
                delete $t[e];
                for (let f = 0, d = h.length; f < d; f++) {
                    const p = h[f];
                    p.onError && p.onError(u)
                }
                s.manager.itemError(e), s.manager.itemEnd(e)
            }, !1), this.responseType !== void 0 && (c.responseType = this.responseType), this.withCredentials !== void 0 && (c.withCredentials = this.withCredentials), c.overrideMimeType && c.overrideMimeType(this.mimeType !== void 0 ? this.mimeType : "text/plain");
            for (const u in this.requestHeader) c.setRequestHeader(u, this.requestHeader[u]);
            c.send(null)
        }
        return s.manager.itemStart(e), c
    }
    setResponseType(e) {
        return this.responseType = e, this
    }
    setMimeType(e) {
        return this.mimeType = e, this
    }
}
class uh extends Kt {
    constructor(e) {
        super(e)
    }
    load(e, t, n, i) {
        this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
        const s = this,
            a = ar.get(e);
        if (a !== void 0) return s.manager.itemStart(e), setTimeout(function() {
            t && t(a), s.manager.itemEnd(e)
        }, 0), a;
        const o = Ts("img");

        function l() {
            o.removeEventListener("load", l, !1), o.removeEventListener("error", c, !1), ar.add(e, this), t && t(this), s.manager.itemEnd(e)
        }

        function c(u) {
            o.removeEventListener("load", l, !1), o.removeEventListener("error", c, !1), i && i(u), s.manager.itemError(e), s.manager.itemEnd(e)
        }
        return o.addEventListener("load", l, !1), o.addEventListener("error", c, !1), e.substr(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), s.manager.itemStart(e), o.src = e, o
    }
}
class Rx extends Kt {
    constructor(e) {
        super(e)
    }
    load(e, t, n, i) {
        const s = new Hs,
            a = new uh(this.manager);
        a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
        let o = 0;

        function l(c) {
            a.load(e[c], function(u) {
                s.images[c] = u, o++, o === 6 && (s.needsUpdate = !0, t && t(s))
            }, void 0, i)
        }
        for (let c = 0; c < e.length; ++c) l(c);
        return s
    }
}
class Ho extends Kt {
    constructor(e) {
        super(e)
    }
    load(e, t, n, i) {
        const s = new it,
            a = new uh(this.manager);
        return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
            s.image = o, s.needsUpdate = !0, t !== void 0 && t(s)
        }, n, i), s
    }
}
class an extends Ne {
    constructor(e, t = 1) {
        super();
        this.type = "Light", this.color = new ue(e), this.intensity = t
    }
    dispose() {}
    copy(e) {
        return super.copy(e), this.color.copy(e.color), this.intensity = e.intensity, this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t
    }
}
an.prototype.isLight = !0;
class Cx extends an {
    constructor(e, t, n) {
        super(e, n);
        this.type = "HemisphereLight", this.position.copy(Ne.DefaultUp), this.updateMatrix(), this.groundColor = new ue(t)
    }
    copy(e) {
        return an.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this
    }
}
Cx.prototype.isHemisphereLight = !0;
const hh = new ae,
    fh = new A,
    dh = new A;
class Vo {
    constructor(e) {
        this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new K(512, 512), this.map = null, this.mapPass = null, this.matrix = new ae, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Ws, this._frameExtents = new K(1, 1), this._viewportCount = 1, this._viewports = [new Ge(0, 0, 1, 1)]
    }
    getViewportCount() {
        return this._viewportCount
    }
    getFrustum() {
        return this._frustum
    }
    updateMatrices(e) {
        const t = this.camera,
            n = this.matrix;
        fh.setFromMatrixPosition(e.matrixWorld), t.position.copy(fh), dh.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(dh), t.updateMatrixWorld(), hh.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(hh), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(t.projectionMatrix), n.multiply(t.matrixWorldInverse)
    }
    getViewport(e) {
        return this._viewports[e]
    }
    getFrameExtents() {
        return this._frameExtents
    }
    dispose() {
        this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose()
    }
    copy(e) {
        return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this
    }
    clone() {
        return new this.constructor().copy(this)
    }
    toJSON() {
        const e = {};
        return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e
    }
}
class ph extends Vo {
    constructor() {
        super(new wt(50, 1, .5, 500));
        this.focus = 1
    }
    updateMatrices(e) {
        const t = this.camera,
            n = Cr * 2 * e.angle * this.focus,
            i = this.mapSize.width / this.mapSize.height,
            s = e.distance || t.far;
        (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e)
    }
    copy(e) {
        return super.copy(e), this.focus = e.focus, this
    }
}
ph.prototype.isSpotLightShadow = !0;
class Wo extends an {
    constructor(e, t, n = 0, i = Math.PI / 3, s = 0, a = 1) {
        super(e, t);
        this.type = "SpotLight", this.position.copy(Ne.DefaultUp), this.updateMatrix(), this.target = new Ne, this.distance = n, this.angle = i, this.penumbra = s, this.decay = a, this.shadow = new ph
    }
    get power() {
        return this.intensity * Math.PI
    }
    set power(e) {
        this.intensity = e / Math.PI
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(e) {
        return super.copy(e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
    }
}
Wo.prototype.isSpotLight = !0;
const mh = new ae,
    Qr = new A,
    Xo = new A;
class gh extends Vo {
    constructor() {
        super(new wt(90, 1, .5, 500));
        this._frameExtents = new K(4, 2), this._viewportCount = 6, this._viewports = [new Ge(2, 1, 1, 1), new Ge(0, 1, 1, 1), new Ge(3, 1, 1, 1), new Ge(1, 1, 1, 1), new Ge(3, 0, 1, 1), new Ge(1, 0, 1, 1)], this._cubeDirections = [new A(1, 0, 0), new A(-1, 0, 0), new A(0, 0, 1), new A(0, 0, -1), new A(0, 1, 0), new A(0, -1, 0)], this._cubeUps = [new A(0, 1, 0), new A(0, 1, 0), new A(0, 1, 0), new A(0, 1, 0), new A(0, 0, 1), new A(0, 0, -1)]
    }
    updateMatrices(e, t = 0) {
        const n = this.camera,
            i = this.matrix,
            s = e.distance || n.far;
        s !== n.far && (n.far = s, n.updateProjectionMatrix()), Qr.setFromMatrixPosition(e.matrixWorld), n.position.copy(Qr), Xo.copy(n.position), Xo.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Xo), n.updateMatrixWorld(), i.makeTranslation(-Qr.x, -Qr.y, -Qr.z), mh.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(mh)
    }
}
gh.prototype.isPointLightShadow = !0;
class fa extends an {
    constructor(e, t, n = 0, i = 1) {
        super(e, t);
        this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new gh
    }
    get power() {
        return this.intensity * 4 * Math.PI
    }
    set power(e) {
        this.intensity = e / (4 * Math.PI)
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(e) {
        return super.copy(e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this
    }
}
fa.prototype.isPointLight = !0;
class vh extends Vo {
    constructor() {
        super(new Br(-5, 5, 5, -5, .5, 500))
    }
}
vh.prototype.isDirectionalLightShadow = !0;
class jo extends an {
    constructor(e, t) {
        super(e, t);
        this.type = "DirectionalLight", this.position.copy(Ne.DefaultUp), this.updateMatrix(), this.target = new Ne, this.shadow = new vh
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(e) {
        return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
    }
}
jo.prototype.isDirectionalLight = !0;
class yh extends an {
    constructor(e, t) {
        super(e, t);
        this.type = "AmbientLight"
    }
}
yh.prototype.isAmbientLight = !0;
class Px extends an {
    constructor(e, t, n = 10, i = 10) {
        super(e, t);
        this.type = "RectAreaLight", this.width = n, this.height = i
    }
    get power() {
        return this.intensity * this.width * this.height * Math.PI
    }
    set power(e) {
        this.intensity = e / (this.width * this.height * Math.PI)
    }
    copy(e) {
        return super.copy(e), this.width = e.width, this.height = e.height, this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.width = this.width, t.object.height = this.height, t
    }
}
Px.prototype.isRectAreaLight = !0;
class xh {
    constructor() {
        this.coefficients = [];
        for (let e = 0; e < 9; e++) this.coefficients.push(new A)
    }
    set(e) {
        for (let t = 0; t < 9; t++) this.coefficients[t].copy(e[t]);
        return this
    }
    zero() {
        for (let e = 0; e < 9; e++) this.coefficients[e].set(0, 0, 0);
        return this
    }
    getAt(e, t) {
        const n = e.x,
            i = e.y,
            s = e.z,
            a = this.coefficients;
        return t.copy(a[0]).multiplyScalar(.282095), t.addScaledVector(a[1], .488603 * i), t.addScaledVector(a[2], .488603 * s), t.addScaledVector(a[3], .488603 * n), t.addScaledVector(a[4], 1.092548 * (n * i)), t.addScaledVector(a[5], 1.092548 * (i * s)), t.addScaledVector(a[6], .315392 * (3 * s * s - 1)), t.addScaledVector(a[7], 1.092548 * (n * s)), t.addScaledVector(a[8], .546274 * (n * n - i * i)), t
    }
    getIrradianceAt(e, t) {
        const n = e.x,
            i = e.y,
            s = e.z,
            a = this.coefficients;
        return t.copy(a[0]).multiplyScalar(.886227), t.addScaledVector(a[1], 2 * .511664 * i), t.addScaledVector(a[2], 2 * .511664 * s), t.addScaledVector(a[3], 2 * .511664 * n), t.addScaledVector(a[4], 2 * .429043 * n * i), t.addScaledVector(a[5], 2 * .429043 * i * s), t.addScaledVector(a[6], .743125 * s * s - .247708), t.addScaledVector(a[7], 2 * .429043 * n * s), t.addScaledVector(a[8], .429043 * (n * n - i * i)), t
    }
    add(e) {
        for (let t = 0; t < 9; t++) this.coefficients[t].add(e.coefficients[t]);
        return this
    }
    addScaledSH(e, t) {
        for (let n = 0; n < 9; n++) this.coefficients[n].addScaledVector(e.coefficients[n], t);
        return this
    }
    scale(e) {
        for (let t = 0; t < 9; t++) this.coefficients[t].multiplyScalar(e);
        return this
    }
    lerp(e, t) {
        for (let n = 0; n < 9; n++) this.coefficients[n].lerp(e.coefficients[n], t);
        return this
    }
    equals(e) {
        for (let t = 0; t < 9; t++)
            if (!this.coefficients[t].equals(e.coefficients[t])) return !1;
        return !0
    }
    copy(e) {
        return this.set(e.coefficients)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    fromArray(e, t = 0) {
        const n = this.coefficients;
        for (let i = 0; i < 9; i++) n[i].fromArray(e, t + i * 3);
        return this
    }
    toArray(e = [], t = 0) {
        const n = this.coefficients;
        for (let i = 0; i < 9; i++) n[i].toArray(e, t + i * 3);
        return e
    }
    static getBasisAt(e, t) {
        const n = e.x,
            i = e.y,
            s = e.z;
        t[0] = .282095, t[1] = .488603 * i, t[2] = .488603 * s, t[3] = .488603 * n, t[4] = 1.092548 * n * i, t[5] = 1.092548 * i * s, t[6] = .315392 * (3 * s * s - 1), t[7] = 1.092548 * n * s, t[8] = .546274 * (n * n - i * i)
    }
}
xh.prototype.isSphericalHarmonics3 = !0;
class qo extends an {
    constructor(e = new xh, t = 1) {
        super(void 0, t);
        this.sh = e
    }
    copy(e) {
        return super.copy(e), this.sh.copy(e.sh), this
    }
    fromJSON(e) {
        return this.intensity = e.intensity, this.sh.fromArray(e.sh), this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.sh = this.sh.toArray(), t
    }
}
qo.prototype.isLightProbe = !0;
class xn {
    static decodeText(e) {
        if (typeof TextDecoder != "undefined") return new TextDecoder().decode(e);
        let t = "";
        for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
        try {
            return decodeURIComponent(escape(t))
        } catch {
            return t
        }
    }
    static extractUrlBase(e) {
        const t = e.lastIndexOf("/");
        return t === -1 ? "./" : e.substr(0, t + 1)
    }
}
class Ix extends He {
    constructor() {
        super();
        this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0
    }
    copy(e) {
        return super.copy(e), this.instanceCount = e.instanceCount, this
    }
    clone() {
        return new this.constructor().copy(this)
    }
    toJSON() {
        const e = super.toJSON(this);
        return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e
    }
}
Ix.prototype.isInstancedBufferGeometry = !0;
class _h extends Kt {
    constructor(e) {
        super(e);
        typeof createImageBitmap == "undefined" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch == "undefined" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = {
            premultiplyAlpha: "none"
        }
    }
    setOptions(e) {
        return this.options = e, this
    }
    load(e, t, n, i) {
        e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
        const s = this,
            a = ar.get(e);
        if (a !== void 0) return s.manager.itemStart(e), setTimeout(function() {
            t && t(a), s.manager.itemEnd(e)
        }, 0), a;
        const o = {};
        o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader, fetch(e, o).then(function(l) {
            return l.blob()
        }).then(function(l) {
            return createImageBitmap(l, Object.assign(s.options, {
                colorSpaceConversion: "none"
            }))
        }).then(function(l) {
            ar.add(e, l), t && t(l), s.manager.itemEnd(e)
        }).catch(function(l) {
            i && i(l), s.manager.itemError(e), s.manager.itemEnd(e)
        }), s.manager.itemStart(e)
    }
}
_h.prototype.isImageBitmapLoader = !0;
let da;
const Mh = {
    getContext: function() {
        return da === void 0 && (da = new(window.AudioContext || window.webkitAudioContext)), da
    },
    setContext: function(r) {
        da = r
    }
};
class Dx extends Kt {
    constructor(e) {
        super(e)
    }
    load(e, t, n, i) {
        const s = this,
            a = new or(this.manager);
        a.setResponseType("arraybuffer"), a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(o) {
            try {
                const l = o.slice(0);
                Mh.getContext().decodeAudioData(l, function(u) {
                    t(u)
                })
            } catch (l) {
                i ? i(l) : console.error(l), s.manager.itemError(e)
            }
        }, n, i)
    }
}
class Fx extends qo {
    constructor(e, t, n = 1) {
        super(void 0, n);
        const i = new ue().set(e),
            s = new ue().set(t),
            a = new A(i.r, i.g, i.b),
            o = new A(s.r, s.g, s.b),
            l = Math.sqrt(Math.PI),
            c = l * Math.sqrt(.75);
        this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l), this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)
    }
}
Fx.prototype.isHemisphereLightProbe = !0;
class Nx extends qo {
    constructor(e, t = 1) {
        super(void 0, t);
        const n = new ue().set(e);
        this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI))
    }
}
Nx.prototype.isAmbientLightProbe = !0;
class Ox {
    constructor(e = !0) {
        this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
    }
    start() {
        this.startTime = wh(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
    }
    stop() {
        this.getElapsedTime(), this.running = !1, this.autoStart = !1
    }
    getElapsedTime() {
        return this.getDelta(), this.elapsedTime
    }
    getDelta() {
        let e = 0;
        if (this.autoStart && !this.running) return this.start(), 0;
        if (this.running) {
            const t = wh();
            e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e
        }
        return e
    }
}

function wh() {
    return (typeof performance == "undefined" ? Date : performance).now()
}
const fi = new A,
    bh = new nt,
    Bx = new A,
    di = new A;
class GM extends Ne {
    constructor() {
        super();
        this.type = "AudioListener", this.context = Mh.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new Ox
    }
    getInput() {
        return this.gain
    }
    removeFilter() {
        return this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this
    }
    getFilter() {
        return this.filter
    }
    setFilter(e) {
        return this.filter !== null ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this
    }
    getMasterVolume() {
        return this.gain.gain.value
    }
    setMasterVolume(e) {
        return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e);
        const t = this.context.listener,
            n = this.up;
        if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(fi, bh, Bx), di.set(0, 0, -1).applyQuaternion(bh), t.positionX) {
            const i = this.context.currentTime + this.timeDelta;
            t.positionX.linearRampToValueAtTime(fi.x, i), t.positionY.linearRampToValueAtTime(fi.y, i), t.positionZ.linearRampToValueAtTime(fi.z, i), t.forwardX.linearRampToValueAtTime(di.x, i), t.forwardY.linearRampToValueAtTime(di.y, i), t.forwardZ.linearRampToValueAtTime(di.z, i), t.upX.linearRampToValueAtTime(n.x, i), t.upY.linearRampToValueAtTime(n.y, i), t.upZ.linearRampToValueAtTime(n.z, i)
        } else t.setPosition(fi.x, fi.y, fi.z), t.setOrientation(di.x, di.y, di.z, n.x, n.y, n.z)
    }
}
class zx extends Ne {
    constructor(e) {
        super();
        this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = []
    }
    getOutput() {
        return this.gain
    }
    setNodeSource(e) {
        return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this
    }
    setMediaElementSource(e) {
        return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this
    }
    setMediaStreamSource(e) {
        return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this
    }
    setBuffer(e) {
        return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this
    }
    play(e = 0) {
        if (this.isPlaying === !0) {
            console.warn("THREE.Audio: Audio is already playing.");
            return
        }
        if (this.hasPlaybackControl === !1) {
            console.warn("THREE.Audio: this Audio has no playback control.");
            return
        }
        this._startedAt = this.context.currentTime + e;
        const t = this.context.createBufferSource();
        return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect()
    }
    pause() {
        if (this.hasPlaybackControl === !1) {
            console.warn("THREE.Audio: this Audio has no playback control.");
            return
        }
        return this.isPlaying === !0 && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.loop === !0 && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this
    }
    stop() {
        if (this.hasPlaybackControl === !1) {
            console.warn("THREE.Audio: this Audio has no playback control.");
            return
        }
        return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this
    }
    connect() {
        if (this.filters.length > 0) {
            this.source.connect(this.filters[0]);
            for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].connect(this.filters[e]);
            this.filters[this.filters.length - 1].connect(this.getOutput())
        } else this.source.connect(this.getOutput());
        return this._connected = !0, this
    }
    disconnect() {
        if (this.filters.length > 0) {
            this.source.disconnect(this.filters[0]);
            for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].disconnect(this.filters[e]);
            this.filters[this.filters.length - 1].disconnect(this.getOutput())
        } else this.source.disconnect(this.getOutput());
        return this._connected = !1, this
    }
    getFilters() {
        return this.filters
    }
    setFilters(e) {
        return e || (e = []), this._connected === !0 ? (this.disconnect(), this.filters = e.slice(), this.connect()) : this.filters = e.slice(), this
    }
    setDetune(e) {
        if (this.detune = e, this.source.detune !== void 0) return this.isPlaying === !0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this
    }
    getDetune() {
        return this.detune
    }
    getFilter() {
        return this.getFilters()[0]
    }
    setFilter(e) {
        return this.setFilters(e ? [e] : [])
    }
    setPlaybackRate(e) {
        if (this.hasPlaybackControl === !1) {
            console.warn("THREE.Audio: this Audio has no playback control.");
            return
        }
        return this.playbackRate = e, this.isPlaying === !0 && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this
    }
    getPlaybackRate() {
        return this.playbackRate
    }
    onEnded() {
        this.isPlaying = !1
    }
    getLoop() {
        return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
    }
    setLoop(e) {
        if (this.hasPlaybackControl === !1) {
            console.warn("THREE.Audio: this Audio has no playback control.");
            return
        }
        return this.loop = e, this.isPlaying === !0 && (this.source.loop = this.loop), this
    }
    setLoopStart(e) {
        return this.loopStart = e, this
    }
    setLoopEnd(e) {
        return this.loopEnd = e, this
    }
    getVolume() {
        return this.gain.gain.value
    }
    setVolume(e) {
        return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this
    }
}
class Ux {
    constructor(e, t, n) {
        this.binding = e, this.valueSize = n;
        let i, s, a;
        switch (t) {
            case "quaternion":
                i = this._slerp, s = this._slerpAdditive, a = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
                break;
            case "string":
            case "bool":
                i = this._select, s = this._select, a = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
                break;
            default:
                i = this._lerp, s = this._lerpAdditive, a = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5)
        }
        this._mixBufferRegion = i, this._mixBufferRegionAdditive = s, this._setIdentity = a, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0
    }
    accumulate(e, t) {
        const n = this.buffer,
            i = this.valueSize,
            s = e * i + i;
        let a = this.cumulativeWeight;
        if (a === 0) {
            for (let o = 0; o !== i; ++o) n[s + o] = n[o];
            a = t
        } else {
            a += t;
            const o = t / a;
            this._mixBufferRegion(n, s, 0, o, i)
        }
        this.cumulativeWeight = a
    }
    accumulateAdditive(e) {
        const t = this.buffer,
            n = this.valueSize,
            i = n * this._addIndex;
        this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, i, 0, e, n), this.cumulativeWeightAdditive += e
    }
    apply(e) {
        const t = this.valueSize,
            n = this.buffer,
            i = e * t + t,
            s = this.cumulativeWeight,
            a = this.cumulativeWeightAdditive,
            o = this.binding;
        if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, s < 1) {
            const l = t * this._origIndex;
            this._mixBufferRegion(n, i, l, 1 - s, t)
        }
        a > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
        for (let l = t, c = t + t; l !== c; ++l)
            if (n[l] !== n[l + t]) {
                o.setValue(n, i);
                break
            }
    }
    saveOriginalState() {
        const e = this.binding,
            t = this.buffer,
            n = this.valueSize,
            i = n * this._origIndex;
        e.getValue(t, i);
        for (let s = n, a = i; s !== a; ++s) t[s] = t[i + s % n];
        this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0
    }
    restoreOriginalState() {
        const e = this.valueSize * 3;
        this.binding.setValue(this.buffer, e)
    }
    _setAdditiveIdentityNumeric() {
        const e = this._addIndex * this.valueSize,
            t = e + this.valueSize;
        for (let n = e; n < t; n++) this.buffer[n] = 0
    }
    _setAdditiveIdentityQuaternion() {
        this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1
    }
    _setAdditiveIdentityOther() {
        const e = this._origIndex * this.valueSize,
            t = this._addIndex * this.valueSize;
        for (let n = 0; n < this.valueSize; n++) this.buffer[t + n] = this.buffer[e + n]
    }
    _select(e, t, n, i, s) {
        if (i >= .5)
            for (let a = 0; a !== s; ++a) e[t + a] = e[n + a]
    }
    _slerp(e, t, n, i) {
        nt.slerpFlat(e, t, e, t, e, n, i)
    }
    _slerpAdditive(e, t, n, i, s) {
        const a = this._workIndex * s;
        nt.multiplyQuaternionsFlat(e, a, e, t, e, n), nt.slerpFlat(e, t, e, t, e, a, i)
    }
    _lerp(e, t, n, i, s) {
        const a = 1 - i;
        for (let o = 0; o !== s; ++o) {
            const l = t + o;
            e[l] = e[l] * a + e[n + o] * i
        }
    }
    _lerpAdditive(e, t, n, i, s) {
        for (let a = 0; a !== s; ++a) {
            const o = t + a;
            e[o] = e[o] + e[n + a] * i
        }
    }
}
const Yo = "\\[\\]\\.:\\/",
    kx = new RegExp("[" + Yo + "]", "g"),
    Zo = "[^" + Yo + "]",
    Gx = "[^" + Yo.replace("\\.", "") + "]",
    Hx = /((?:WC+[\/:])*)/.source.replace("WC", Zo),
    Vx = /(WCOD+)?/.source.replace("WCOD", Gx),
    Wx = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Zo),
    Xx = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Zo),
    jx = new RegExp("^" + Hx + Vx + Wx + Xx + "$"),
    qx = ["material", "materials", "bones"];
class Yx {
    constructor(e, t, n) {
        const i = n || Be.parseTrackName(t);
        this._targetGroup = e, this._bindings = e.subscribe_(t, i)
    }
    getValue(e, t) {
        this.bind();
        const n = this._targetGroup.nCachedObjects_,
            i = this._bindings[n];
        i !== void 0 && i.getValue(e, t)
    }
    setValue(e, t) {
        const n = this._bindings;
        for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i) n[i].setValue(e, t)
    }
    bind() {
        const e = this._bindings;
        for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind()
    }
    unbind() {
        const e = this._bindings;
        for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind()
    }
}
class Be {
    constructor(e, t, n) {
        this.path = t, this.parsedPath = n || Be.parseTrackName(t), this.node = Be.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
    }
    static create(e, t, n) {
        return e && e.isAnimationObjectGroup ? new Be.Composite(e, t, n) : new Be(e, t, n)
    }
    static sanitizeNodeName(e) {
        return e.replace(/\s/g, "_").replace(kx, "")
    }
    static parseTrackName(e) {
        const t = jx.exec(e);
        if (!t) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
        const n = {
                nodeName: t[2],
                objectName: t[3],
                objectIndex: t[4],
                propertyName: t[5],
                propertyIndex: t[6]
            },
            i = n.nodeName && n.nodeName.lastIndexOf(".");
        if (i !== void 0 && i !== -1) {
            const s = n.nodeName.substring(i + 1);
            qx.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s)
        }
        if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
        return n
    }
    static findNode(e, t) {
        if (!t || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
        if (e.skeleton) {
            const n = e.skeleton.getBoneByName(t);
            if (n !== void 0) return n
        }
        if (e.children) {
            const n = function(s) {
                    for (let a = 0; a < s.length; a++) {
                        const o = s[a];
                        if (o.name === t || o.uuid === t) return o;
                        const l = n(o.children);
                        if (l) return l
                    }
                    return null
                },
                i = n(e.children);
            if (i) return i
        }
        return null
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(e, t) {
        e[t] = this.targetObject[this.propertyName]
    }
    _getValue_array(e, t) {
        const n = this.resolvedProperty;
        for (let i = 0, s = n.length; i !== s; ++i) e[t++] = n[i]
    }
    _getValue_arrayElement(e, t) {
        e[t] = this.resolvedProperty[this.propertyIndex]
    }
    _getValue_toArray(e, t) {
        this.resolvedProperty.toArray(e, t)
    }
    _setValue_direct(e, t) {
        this.targetObject[this.propertyName] = e[t]
    }
    _setValue_direct_setNeedsUpdate(e, t) {
        this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
        this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_array(e, t) {
        const n = this.resolvedProperty;
        for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++]
    }
    _setValue_array_setNeedsUpdate(e, t) {
        const n = this.resolvedProperty;
        for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
        this.targetObject.needsUpdate = !0
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
        const n = this.resolvedProperty;
        for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_arrayElement(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t]
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_fromArray(e, t) {
        this.resolvedProperty.fromArray(e, t)
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
        this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
        this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _getValue_unbound(e, t) {
        this.bind(), this.getValue(e, t)
    }
    _setValue_unbound(e, t) {
        this.bind(), this.setValue(e, t)
    }
    bind() {
        let e = this.node;
        const t = this.parsedPath,
            n = t.objectName,
            i = t.propertyName;
        let s = t.propertyIndex;
        if (e || (e = Be.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
            console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
            return
        }
        if (n) {
            let c = t.objectIndex;
            switch (n) {
                case "materials":
                    if (!e.material) {
                        console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                        return
                    }
                    if (!e.material.materials) {
                        console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                        return
                    }
                    e = e.material.materials;
                    break;
                case "bones":
                    if (!e.skeleton) {
                        console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                        return
                    }
                    e = e.skeleton.bones;
                    for (let u = 0; u < e.length; u++)
                        if (e[u].name === c) {
                            c = u;
                            break
                        }
                    break;
                default:
                    if (e[n] === void 0) {
                        console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                        return
                    }
                    e = e[n]
            }
            if (c !== void 0) {
                if (e[c] === void 0) {
                    console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
                    return
                }
                e = e[c]
            }
        }
        const a = e[i];
        if (a === void 0) {
            const c = t.nodeName;
            console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
            return
        }
        let o = this.Versioning.None;
        this.targetObject = e, e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
        let l = this.BindingType.Direct;
        if (s !== void 0) {
            if (i === "morphTargetInfluences") {
                if (!e.geometry) {
                    console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                    return
                }
                if (e.geometry.isBufferGeometry) {
                    if (!e.geometry.morphAttributes) {
                        console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                        return
                    }
                    e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s])
                } else {
                    console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
                    return
                }
            }
            l = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = s
        } else a.fromArray !== void 0 && a.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (l = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
        this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o]
    }
    unbind() {
        this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
    }
}
Be.Composite = Yx;
Be.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
};
Be.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
};
Be.prototype.GetterByBindingType = [Be.prototype._getValue_direct, Be.prototype._getValue_array, Be.prototype._getValue_arrayElement, Be.prototype._getValue_toArray];
Be.prototype.SetterByBindingTypeAndVersioning = [
    [Be.prototype._setValue_direct, Be.prototype._setValue_direct_setNeedsUpdate, Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],
    [Be.prototype._setValue_array, Be.prototype._setValue_array_setNeedsUpdate, Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],
    [Be.prototype._setValue_arrayElement, Be.prototype._setValue_arrayElement_setNeedsUpdate, Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],
    [Be.prototype._setValue_fromArray, Be.prototype._setValue_fromArray_setNeedsUpdate, Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]
];
class Zx {
    constructor(e, t, n = null, i = t.blendMode) {
        this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = i;
        const s = t.tracks,
            a = s.length,
            o = new Array(a),
            l = {
                endingStart: Ti,
                endingEnd: Ti
            };
        for (let c = 0; c !== a; ++c) {
            const u = s[c].createInterpolant(null);
            o[c] = u, u.settings = l
        }
        this._interpolantSettings = l, this._interpolants = o, this._propertyBindings = new Array(a), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Cp, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
    }
    play() {
        return this._mixer._activateAction(this), this
    }
    stop() {
        return this._mixer._deactivateAction(this), this.reset()
    }
    reset() {
        return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
    }
    isRunning() {
        return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this)
    }
    isScheduled() {
        return this._mixer._isActiveAction(this)
    }
    startAt(e) {
        return this._startTime = e, this
    }
    setLoop(e, t) {
        return this.loop = e, this.repetitions = t, this
    }
    setEffectiveWeight(e) {
        return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading()
    }
    getEffectiveWeight() {
        return this._effectiveWeight
    }
    fadeIn(e) {
        return this._scheduleFading(e, 0, 1)
    }
    fadeOut(e) {
        return this._scheduleFading(e, 1, 0)
    }
    crossFadeFrom(e, t, n) {
        if (e.fadeOut(t), this.fadeIn(t), n) {
            const i = this._clip.duration,
                s = e._clip.duration,
                a = s / i,
                o = i / s;
            e.warp(1, a, t), this.warp(o, 1, t)
        }
        return this
    }
    crossFadeTo(e, t, n) {
        return e.crossFadeFrom(this, t, n)
    }
    stopFading() {
        const e = this._weightInterpolant;
        return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
    }
    setEffectiveTimeScale(e) {
        return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping()
    }
    getEffectiveTimeScale() {
        return this._effectiveTimeScale
    }
    setDuration(e) {
        return this.timeScale = this._clip.duration / e, this.stopWarping()
    }
    syncWith(e) {
        return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping()
    }
    halt(e) {
        return this.warp(this._effectiveTimeScale, 0, e)
    }
    warp(e, t, n) {
        const i = this._mixer,
            s = i.time,
            a = this.timeScale;
        let o = this._timeScaleInterpolant;
        o === null && (o = i._lendControlInterpolant(), this._timeScaleInterpolant = o);
        const l = o.parameterPositions,
            c = o.sampleValues;
        return l[0] = s, l[1] = s + n, c[0] = e / a, c[1] = t / a, this
    }
    stopWarping() {
        const e = this._timeScaleInterpolant;
        return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
    }
    getMixer() {
        return this._mixer
    }
    getClip() {
        return this._clip
    }
    getRoot() {
        return this._localRoot || this._mixer._root
    }
    _update(e, t, n, i) {
        if (!this.enabled) {
            this._updateWeight(e);
            return
        }
        const s = this._startTime;
        if (s !== null) {
            const l = (e - s) * n;
            if (l < 0 || n === 0) return;
            this._startTime = null, t = n * l
        }
        t *= this._updateTimeScale(e);
        const a = this._updateTime(t),
            o = this._updateWeight(e);
        if (o > 0) {
            const l = this._interpolants,
                c = this._propertyBindings;
            switch (this.blendMode) {
                case xc:
                    for (let u = 0, h = l.length; u !== h; ++u) l[u].evaluate(a), c[u].accumulateAdditive(o);
                    break;
                case za:
                default:
                    for (let u = 0, h = l.length; u !== h; ++u) l[u].evaluate(a), c[u].accumulate(i, o)
            }
        }
    }
    _updateWeight(e) {
        let t = 0;
        if (this.enabled) {
            t = this.weight;
            const n = this._weightInterpolant;
            if (n !== null) {
                const i = n.evaluate(e)[0];
                t *= i, e > n.parameterPositions[1] && (this.stopFading(), i === 0 && (this.enabled = !1))
            }
        }
        return this._effectiveWeight = t, t
    }
    _updateTimeScale(e) {
        let t = 0;
        if (!this.paused) {
            t = this.timeScale;
            const n = this._timeScaleInterpolant;
            n !== null && (t *= n.evaluate(e)[0], e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t))
        }
        return this._effectiveTimeScale = t, t
    }
    _updateTime(e) {
        const t = this._clip.duration,
            n = this.loop;
        let i = this.time + e,
            s = this._loopCount;
        const a = n === Pp;
        if (e === 0) return s === -1 ? i : a && (s & 1) == 1 ? t - i : i;
        if (n === Rp) {
            s === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
            e: {
                if (i >= t) i = t;
                else if (i < 0) i = 0;
                else {
                    this.time = i;
                    break e
                }
                this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                this.time = i,
                this._mixer.dispatchEvent({
                    type: "finished",
                    action: this,
                    direction: e < 0 ? -1 : 1
                })
            }
        } else {
            if (s === -1 && (e >= 0 ? (s = 0, this._setEndings(!0, this.repetitions === 0, a)) : this._setEndings(this.repetitions === 0, !0, a)), i >= t || i < 0) {
                const o = Math.floor(i / t);
                i -= t * o, s += Math.abs(o);
                const l = this.repetitions - s;
                if (l <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = e > 0 ? t : 0, this.time = i, this._mixer.dispatchEvent({
                    type: "finished",
                    action: this,
                    direction: e > 0 ? 1 : -1
                });
                else {
                    if (l === 1) {
                        const c = e < 0;
                        this._setEndings(c, !c, a)
                    } else this._setEndings(!1, !1, a);
                    this._loopCount = s, this.time = i, this._mixer.dispatchEvent({
                        type: "loop",
                        action: this,
                        loopDelta: o
                    })
                }
            } else this.time = i;
            if (a && (s & 1) == 1) return t - i
        }
        return i
    }
    _setEndings(e, t, n) {
        const i = this._interpolantSettings;
        n ? (i.endingStart = Ei, i.endingEnd = Ei) : (e ? i.endingStart = this.zeroSlopeAtStart ? Ei : Ti : i.endingStart = ws, t ? i.endingEnd = this.zeroSlopeAtEnd ? Ei : Ti : i.endingEnd = ws)
    }
    _scheduleFading(e, t, n) {
        const i = this._mixer,
            s = i.time;
        let a = this._weightInterpolant;
        a === null && (a = i._lendControlInterpolant(), this._weightInterpolant = a);
        const o = a.parameterPositions,
            l = a.sampleValues;
        return o[0] = s, l[0] = t, o[1] = s + e, l[1] = n, this
    }
}
class Jx extends Rn {
    constructor(e) {
        super();
        this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
    }
    _bindAction(e, t) {
        const n = e._localRoot || this._root,
            i = e._clip.tracks,
            s = i.length,
            a = e._propertyBindings,
            o = e._interpolants,
            l = n.uuid,
            c = this._bindingsByRootAndName;
        let u = c[l];
        u === void 0 && (u = {}, c[l] = u);
        for (let h = 0; h !== s; ++h) {
            const f = i[h],
                d = f.name;
            let p = u[d];
            if (p !== void 0) a[h] = p;
            else {
                if (p = a[h], p !== void 0) {
                    p._cacheIndex === null && (++p.referenceCount, this._addInactiveBinding(p, l, d));
                    continue
                }
                const v = t && t._propertyBindings[h].binding.parsedPath;
                p = new Ux(Be.create(n, d, v), f.ValueTypeName, f.getValueSize()), ++p.referenceCount, this._addInactiveBinding(p, l, d), a[h] = p
            }
            o[h].resultBuffer = p.buffer
        }
    }
    _activateAction(e) {
        if (!this._isActiveAction(e)) {
            if (e._cacheIndex === null) {
                const n = (e._localRoot || this._root).uuid,
                    i = e._clip.uuid,
                    s = this._actionsByClip[i];
                this._bindAction(e, s && s.knownActions[0]), this._addInactiveAction(e, i, n)
            }
            const t = e._propertyBindings;
            for (let n = 0, i = t.length; n !== i; ++n) {
                const s = t[n];
                s.useCount++ == 0 && (this._lendBinding(s), s.saveOriginalState())
            }
            this._lendAction(e)
        }
    }
    _deactivateAction(e) {
        if (this._isActiveAction(e)) {
            const t = e._propertyBindings;
            for (let n = 0, i = t.length; n !== i; ++n) {
                const s = t[n];
                --s.useCount == 0 && (s.restoreOriginalState(), this._takeBackBinding(s))
            }
            this._takeBackAction(e)
        }
    }
    _initMemoryManager() {
        this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
        const e = this;
        this.stats = {
            actions: {
                get total() {
                    return e._actions.length
                },
                get inUse() {
                    return e._nActiveActions
                }
            },
            bindings: {
                get total() {
                    return e._bindings.length
                },
                get inUse() {
                    return e._nActiveBindings
                }
            },
            controlInterpolants: {
                get total() {
                    return e._controlInterpolants.length
                },
                get inUse() {
                    return e._nActiveControlInterpolants
                }
            }
        }
    }
    _isActiveAction(e) {
        const t = e._cacheIndex;
        return t !== null && t < this._nActiveActions
    }
    _addInactiveAction(e, t, n) {
        const i = this._actions,
            s = this._actionsByClip;
        let a = s[t];
        if (a === void 0) a = {
            knownActions: [e],
            actionByRoot: {}
        }, e._byClipCacheIndex = 0, s[t] = a;
        else {
            const o = a.knownActions;
            e._byClipCacheIndex = o.length, o.push(e)
        }
        e._cacheIndex = i.length, i.push(e), a.actionByRoot[n] = e
    }
    _removeInactiveAction(e) {
        const t = this._actions,
            n = t[t.length - 1],
            i = e._cacheIndex;
        n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null;
        const s = e._clip.uuid,
            a = this._actionsByClip,
            o = a[s],
            l = o.knownActions,
            c = l[l.length - 1],
            u = e._byClipCacheIndex;
        c._byClipCacheIndex = u, l[u] = c, l.pop(), e._byClipCacheIndex = null;
        const h = o.actionByRoot,
            f = (e._localRoot || this._root).uuid;
        delete h[f], l.length === 0 && delete a[s], this._removeInactiveBindingsForAction(e)
    }
    _removeInactiveBindingsForAction(e) {
        const t = e._propertyBindings;
        for (let n = 0, i = t.length; n !== i; ++n) {
            const s = t[n];
            --s.referenceCount == 0 && this._removeInactiveBinding(s)
        }
    }
    _lendAction(e) {
        const t = this._actions,
            n = e._cacheIndex,
            i = this._nActiveActions++,
            s = t[i];
        e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s
    }
    _takeBackAction(e) {
        const t = this._actions,
            n = e._cacheIndex,
            i = --this._nActiveActions,
            s = t[i];
        e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s
    }
    _addInactiveBinding(e, t, n) {
        const i = this._bindingsByRootAndName,
            s = this._bindings;
        let a = i[t];
        a === void 0 && (a = {}, i[t] = a), a[n] = e, e._cacheIndex = s.length, s.push(e)
    }
    _removeInactiveBinding(e) {
        const t = this._bindings,
            n = e.binding,
            i = n.rootNode.uuid,
            s = n.path,
            a = this._bindingsByRootAndName,
            o = a[i],
            l = t[t.length - 1],
            c = e._cacheIndex;
        l._cacheIndex = c, t[c] = l, t.pop(), delete o[s], Object.keys(o).length === 0 && delete a[i]
    }
    _lendBinding(e) {
        const t = this._bindings,
            n = e._cacheIndex,
            i = this._nActiveBindings++,
            s = t[i];
        e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s
    }
    _takeBackBinding(e) {
        const t = this._bindings,
            n = e._cacheIndex,
            i = --this._nActiveBindings,
            s = t[i];
        e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s
    }
    _lendControlInterpolant() {
        const e = this._controlInterpolants,
            t = this._nActiveControlInterpolants++;
        let n = e[t];
        return n === void 0 && (n = new lh(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = t, e[t] = n), n
    }
    _takeBackControlInterpolant(e) {
        const t = this._controlInterpolants,
            n = e.__cacheIndex,
            i = --this._nActiveControlInterpolants,
            s = t[i];
        e.__cacheIndex = i, t[i] = e, s.__cacheIndex = n, t[n] = s
    }
    clipAction(e, t, n) {
        const i = t || this._root,
            s = i.uuid;
        let a = typeof e == "string" ? ha.findByName(i, e) : e;
        const o = a !== null ? a.uuid : e,
            l = this._actionsByClip[o];
        let c = null;
        if (n === void 0 && (a !== null ? n = a.blendMode : n = za), l !== void 0) {
            const h = l.actionByRoot[s];
            if (h !== void 0 && h.blendMode === n) return h;
            c = l.knownActions[0], a === null && (a = c._clip)
        }
        if (a === null) return null;
        const u = new Zx(this, a, t, n);
        return this._bindAction(u, c), this._addInactiveAction(u, o, s), u
    }
    existingAction(e, t) {
        const n = t || this._root,
            i = n.uuid,
            s = typeof e == "string" ? ha.findByName(n, e) : e,
            a = s ? s.uuid : e,
            o = this._actionsByClip[a];
        return o !== void 0 && o.actionByRoot[i] || null
    }
    stopAllAction() {
        const e = this._actions,
            t = this._nActiveActions;
        for (let n = t - 1; n >= 0; --n) e[n].stop();
        return this
    }
    update(e) {
        e *= this.timeScale;
        const t = this._actions,
            n = this._nActiveActions,
            i = this.time += e,
            s = Math.sign(e),
            a = this._accuIndex ^= 1;
        for (let c = 0; c !== n; ++c) t[c]._update(i, e, s, a);
        const o = this._bindings,
            l = this._nActiveBindings;
        for (let c = 0; c !== l; ++c) o[c].apply(a);
        return this
    }
    setTime(e) {
        this.time = 0;
        for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
        return this.update(e)
    }
    getRoot() {
        return this._root
    }
    uncacheClip(e) {
        const t = this._actions,
            n = e.uuid,
            i = this._actionsByClip,
            s = i[n];
        if (s !== void 0) {
            const a = s.knownActions;
            for (let o = 0, l = a.length; o !== l; ++o) {
                const c = a[o];
                this._deactivateAction(c);
                const u = c._cacheIndex,
                    h = t[t.length - 1];
                c._cacheIndex = null, c._byClipCacheIndex = null, h._cacheIndex = u, t[u] = h, t.pop(), this._removeInactiveBindingsForAction(c)
            }
            delete i[n]
        }
    }
    uncacheRoot(e) {
        const t = e.uuid,
            n = this._actionsByClip;
        for (const a in n) {
            const o = n[a].actionByRoot,
                l = o[t];
            l !== void 0 && (this._deactivateAction(l), this._removeInactiveAction(l))
        }
        const i = this._bindingsByRootAndName,
            s = i[t];
        if (s !== void 0)
            for (const a in s) {
                const o = s[a];
                o.restoreOriginalState(), this._removeInactiveBinding(o)
            }
    }
    uncacheAction(e, t) {
        const n = this.existingAction(e, t);
        n !== null && (this._deactivateAction(n), this._removeInactiveAction(n))
    }
}
Jx.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
class Kx extends qi {
    constructor(e, t, n = 1) {
        super(e, t);
        this.meshPerAttribute = n
    }
    copy(e) {
        return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this
    }
    clone(e) {
        const t = super.clone(e);
        return t.meshPerAttribute = this.meshPerAttribute, t
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.isInstancedInterleavedBuffer = !0, t.meshPerAttribute = this.meshPerAttribute, t
    }
}
Kx.prototype.isInstancedInterleavedBuffer = !0;
class HM {
    constructor(e, t, n = 0, i = 1 / 0) {
        this.ray = new li(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new Dc, this.params = {
            Mesh: {},
            Line: {
                threshold: 1
            },
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        }
    }
    set(e, t) {
        this.ray.set(e, t)
    }
    setFromCamera(e, t) {
        t && t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t && t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type)
    }
    intersectObject(e, t = !0, n = []) {
        return Jo(e, this, n, t), n.sort(Sh), n
    }
    intersectObjects(e, t = !0, n = []) {
        for (let i = 0, s = e.length; i < s; i++) Jo(e[i], this, n, t);
        return n.sort(Sh), n
    }
}

function Sh(r, e) {
    return r.distance - e.distance
}

function Jo(r, e, t, n) {
    if (r.layers.test(e.layers) && r.raycast(e, t), n === !0) {
        const i = r.children;
        for (let s = 0, a = i.length; s < a; s++) Jo(i[s], e, t, !0)
    }
}
class Th {
    constructor(e = 1, t = 0, n = 0) {
        return this.radius = e, this.phi = t, this.theta = n, this
    }
    set(e, t, n) {
        return this.radius = e, this.phi = t, this.theta = n, this
    }
    copy(e) {
        return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this
    }
    makeSafe() {
        const e = 1e-6;
        return this.phi = Math.max(e, Math.min(Math.PI - e, this.phi)), this
    }
    setFromVector3(e) {
        return this.setFromCartesianCoords(e.x, e.y, e.z)
    }
    setFromCartesianCoords(e, t, n) {
        return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(St(t / this.radius, -1, 1))), this
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
class $x extends Ne {
    constructor(e) {
        super();
        this.material = e, this.render = function() {}, this.hasPositions = !1, this.hasNormals = !1, this.hasColors = !1, this.hasUvs = !1, this.positionArray = null, this.normalArray = null, this.colorArray = null, this.uvArray = null, this.count = 0
    }
}
$x.prototype.isImmediateRenderObject = !0;
const Wn = new A,
    pa = new ae,
    Ko = new ae;
class Qx extends ta {
    constructor(e) {
        const t = Eh(e),
            n = new He,
            i = [],
            s = [],
            a = new ue(0, 0, 1),
            o = new ue(0, 1, 0);
        for (let c = 0; c < t.length; c++) {
            const u = t[c];
            u.parent && u.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), s.push(a.r, a.g, a.b), s.push(o.r, o.g, o.b))
        }
        n.setAttribute("position", new Je(i, 3)), n.setAttribute("color", new Je(s, 3));
        const l = new hi({
            vertexColors: !0,
            depthTest: !1,
            depthWrite: !1,
            toneMapped: !1,
            transparent: !0
        });
        super(n, l);
        this.type = "SkeletonHelper", this.isSkeletonHelper = !0, this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1
    }
    updateMatrixWorld(e) {
        const t = this.bones,
            n = this.geometry,
            i = n.getAttribute("position");
        Ko.copy(this.root.matrixWorld).invert();
        for (let s = 0, a = 0; s < t.length; s++) {
            const o = t[s];
            o.parent && o.parent.isBone && (pa.multiplyMatrices(Ko, o.matrixWorld), Wn.setFromMatrixPosition(pa), i.setXYZ(a, Wn.x, Wn.y, Wn.z), pa.multiplyMatrices(Ko, o.parent.matrixWorld), Wn.setFromMatrixPosition(pa), i.setXYZ(a + 1, Wn.x, Wn.y, Wn.z), a += 2)
        }
        n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(e)
    }
}

function Eh(r) {
    const e = [];
    r && r.isBone && e.push(r);
    for (let t = 0; t < r.children.length; t++) e.push.apply(e, Eh(r.children[t]));
    return e
}
class e_ extends ta {
    constructor(e = 10, t = 10, n = 4473924, i = 8947848) {
        n = new ue(n), i = new ue(i);
        const s = t / 2,
            a = e / t,
            o = e / 2,
            l = [],
            c = [];
        for (let f = 0, d = 0, p = -o; f <= t; f++, p += a) {
            l.push(-o, 0, p, o, 0, p), l.push(p, 0, -o, p, 0, o);
            const v = f === s ? n : i;
            v.toArray(c, d), d += 3, v.toArray(c, d), d += 3, v.toArray(c, d), d += 3, v.toArray(c, d), d += 3
        }
        const u = new He;
        u.setAttribute("position", new Je(l, 3)), u.setAttribute("color", new Je(c, 3));
        const h = new hi({
            vertexColors: !0,
            toneMapped: !1
        });
        super(u, h);
        this.type = "GridHelper"
    }
}
const t_ = new Float32Array(1);
new Int32Array(t_.buffer);
Nt.create = function(r, e) {
    return console.log("THREE.Curve.create() has been deprecated"), r.prototype = Object.create(Nt.prototype), r.prototype.constructor = r, r.prototype.getPoint = e, r
};
zo.prototype.fromPoints = function(r) {
    return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(r)
};
e_.prototype.setColors = function() {
    console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
};
Qx.prototype.update = function() {
    console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
};
Kt.prototype.extractUrlBase = function(r) {
    return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), xn.extractUrlBase(r)
};
Kt.Handlers = {
    add: function() {
        console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")
    },
    get: function() {
        console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")
    }
};
zt.prototype.center = function(r) {
    return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(r)
};
zt.prototype.empty = function() {
    return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
};
zt.prototype.isIntersectionBox = function(r) {
    return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(r)
};
zt.prototype.isIntersectionSphere = function(r) {
    return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(r)
};
zt.prototype.size = function(r) {
    return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(r)
};
oi.prototype.empty = function() {
    return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty()
};
Ws.prototype.setFromMatrix = function(r) {
    return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(r)
};
dt.prototype.flattenToArrayOffset = function(r, e) {
    return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(r, e)
};
dt.prototype.multiplyVector3 = function(r) {
    return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), r.applyMatrix3(this)
};
dt.prototype.multiplyVector3Array = function() {
    console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
};
dt.prototype.applyToBufferAttribute = function(r) {
    return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), r.applyMatrix3(this)
};
dt.prototype.applyToVector3Array = function() {
    console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
};
dt.prototype.getInverse = function(r) {
    return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(r).invert()
};
ae.prototype.extractPosition = function(r) {
    return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(r)
};
ae.prototype.flattenToArrayOffset = function(r, e) {
    return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(r, e)
};
ae.prototype.getPosition = function() {
    return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), new A().setFromMatrixColumn(this, 3)
};
ae.prototype.setRotationFromQuaternion = function(r) {
    return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(r)
};
ae.prototype.multiplyToArray = function() {
    console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
};
ae.prototype.multiplyVector3 = function(r) {
    return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), r.applyMatrix4(this)
};
ae.prototype.multiplyVector4 = function(r) {
    return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), r.applyMatrix4(this)
};
ae.prototype.multiplyVector3Array = function() {
    console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
};
ae.prototype.rotateAxis = function(r) {
    console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), r.transformDirection(this)
};
ae.prototype.crossVector = function(r) {
    return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), r.applyMatrix4(this)
};
ae.prototype.translate = function() {
    console.error("THREE.Matrix4: .translate() has been removed.")
};
ae.prototype.rotateX = function() {
    console.error("THREE.Matrix4: .rotateX() has been removed.")
};
ae.prototype.rotateY = function() {
    console.error("THREE.Matrix4: .rotateY() has been removed.")
};
ae.prototype.rotateZ = function() {
    console.error("THREE.Matrix4: .rotateZ() has been removed.")
};
ae.prototype.rotateByAxis = function() {
    console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
};
ae.prototype.applyToBufferAttribute = function(r) {
    return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), r.applyMatrix4(this)
};
ae.prototype.applyToVector3Array = function() {
    console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
};
ae.prototype.makeFrustum = function(r, e, t, n, i, s) {
    return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(r, e, n, t, i, s)
};
ae.prototype.getInverse = function(r) {
    return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(r).invert()
};
vn.prototype.isIntersectionLine = function(r) {
    return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(r)
};
nt.prototype.multiplyVector3 = function(r) {
    return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), r.applyQuaternion(this)
};
nt.prototype.inverse = function() {
    return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert()
};
li.prototype.isIntersectionBox = function(r) {
    return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(r)
};
li.prototype.isIntersectionPlane = function(r) {
    return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(r)
};
li.prototype.isIntersectionSphere = function(r) {
    return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(r)
};
ct.prototype.area = function() {
    return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea()
};
ct.prototype.barycoordFromPoint = function(r, e) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(r, e)
};
ct.prototype.midpoint = function(r) {
    return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(r)
};
ct.prototypenormal = function(r) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(r)
};
ct.prototype.plane = function(r) {
    return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(r)
};
ct.barycoordFromPoint = function(r, e, t, n, i) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), ct.getBarycoord(r, e, t, n, i)
};
ct.normal = function(r, e, t, n) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), ct.getNormal(r, e, t, n)
};
Yr.prototype.extractAllPoints = function(r) {
    return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(r)
};
Yr.prototype.extrude = function(r) {
    return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new er(this, r)
};
Yr.prototype.makeGeometry = function(r) {
    return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new Go(this, r)
};
K.prototype.fromAttribute = function(r, e, t) {
    return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(r, e, t)
};
K.prototype.distanceToManhattan = function(r) {
    return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(r)
};
K.prototype.lengthManhattan = function() {
    return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
};
A.prototype.setEulerFromRotationMatrix = function() {
    console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
};
A.prototype.setEulerFromQuaternion = function() {
    console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
};
A.prototype.getPositionFromMatrix = function(r) {
    return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(r)
};
A.prototype.getScaleFromMatrix = function(r) {
    return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(r)
};
A.prototype.getColumnFromMatrix = function(r, e) {
    return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, r)
};
A.prototype.applyProjection = function(r) {
    return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(r)
};
A.prototype.fromAttribute = function(r, e, t) {
    return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(r, e, t)
};
A.prototype.distanceToManhattan = function(r) {
    return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(r)
};
A.prototype.lengthManhattan = function() {
    return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
};
Ge.prototype.fromAttribute = function(r, e, t) {
    return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(r, e, t)
};
Ge.prototype.lengthManhattan = function() {
    return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
};
Ne.prototype.getChildByName = function(r) {
    return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(r)
};
Ne.prototype.renderDepth = function() {
    console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
};
Ne.prototype.translate = function(r, e) {
    return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, r)
};
Ne.prototype.getWorldRotation = function() {
    console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
};
Ne.prototype.applyMatrix = function(r) {
    return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(r)
};
Object.defineProperties(Ne.prototype, {
    eulerOrder: {
        get: function() {
            return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
        },
        set: function(r) {
            console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = r
        }
    },
    useQuaternion: {
        get: function() {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        },
        set: function() {
            console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
        }
    }
});
_t.prototype.setDrawMode = function() {
    console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
};
Object.defineProperties(_t.prototype, {
    drawMode: {
        get: function() {
            return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), Ip
        },
        set: function() {
            console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
        }
    }
});
Ks.prototype.initBones = function() {
    console.error("THREE.SkinnedMesh: initBones() has been removed.")
};
wt.prototype.setLens = function(r, e) {
    console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), e !== void 0 && (this.filmGauge = e), this.setFocalLength(r)
};
Object.defineProperties(an.prototype, {
    onlyShadow: {
        set: function() {
            console.warn("THREE.Light: .onlyShadow has been removed.")
        }
    },
    shadowCameraFov: {
        set: function(r) {
            console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = r
        }
    },
    shadowCameraLeft: {
        set: function(r) {
            console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = r
        }
    },
    shadowCameraRight: {
        set: function(r) {
            console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = r
        }
    },
    shadowCameraTop: {
        set: function(r) {
            console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = r
        }
    },
    shadowCameraBottom: {
        set: function(r) {
            console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = r
        }
    },
    shadowCameraNear: {
        set: function(r) {
            console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = r
        }
    },
    shadowCameraFar: {
        set: function(r) {
            console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = r
        }
    },
    shadowCameraVisible: {
        set: function() {
            console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
        }
    },
    shadowBias: {
        set: function(r) {
            console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = r
        }
    },
    shadowDarkness: {
        set: function() {
            console.warn("THREE.Light: .shadowDarkness has been removed.")
        }
    },
    shadowMapWidth: {
        set: function(r) {
            console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = r
        }
    },
    shadowMapHeight: {
        set: function(r) {
            console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = r
        }
    }
});
Object.defineProperties($e.prototype, {
    length: {
        get: function() {
            return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
        }
    },
    dynamic: {
        get: function() {
            return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === bs
        },
        set: function() {
            console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(bs)
        }
    }
});
$e.prototype.setDynamic = function(r) {
    return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(r === !0 ? bs : Lr), this
};
$e.prototype.copyIndicesArray = function() {
    console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
}, $e.prototype.setArray = function() {
    console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
};
He.prototype.addIndex = function(r) {
    console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(r)
};
He.prototype.addAttribute = function(r, e) {
    return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), !(e && e.isBufferAttribute) && !(e && e.isInterleavedBufferAttribute) ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(r, new $e(arguments[1], arguments[2]))) : r === "index" ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(r, e)
};
He.prototype.addDrawCall = function(r, e, t) {
    t !== void 0 && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(r, e)
};
He.prototype.clearDrawCalls = function() {
    console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
};
He.prototype.computeOffsets = function() {
    console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
};
He.prototype.removeAttribute = function(r) {
    return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(r)
};
He.prototype.applyMatrix = function(r) {
    return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(r)
};
Object.defineProperties(He.prototype, {
    drawcalls: {
        get: function() {
            return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
        }
    },
    offsets: {
        get: function() {
            return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
        }
    }
});
qi.prototype.setDynamic = function(r) {
    return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(r === !0 ? bs : Lr), this
};
qi.prototype.setArray = function() {
    console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
};
er.prototype.getArrays = function() {
    console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")
};
er.prototype.addShapeList = function() {
    console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")
};
er.prototype.addShape = function() {
    console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")
};
Au.prototype.dispose = function() {
    console.error("THREE.Scene: .dispose() has been removed.")
};
Object.defineProperties(ft.prototype, {
    wrapAround: {
        get: function() {
            console.warn("THREE.Material: .wrapAround has been removed.")
        },
        set: function() {
            console.warn("THREE.Material: .wrapAround has been removed.")
        }
    },
    overdraw: {
        get: function() {
            console.warn("THREE.Material: .overdraw has been removed.")
        },
        set: function() {
            console.warn("THREE.Material: .overdraw has been removed.")
        }
    },
    wrapRGB: {
        get: function() {
            return console.warn("THREE.Material: .wrapRGB has been removed."), new ue
        }
    },
    shading: {
        get: function() {
            console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
        },
        set: function(r) {
            console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = r === Ql
        }
    },
    stencilMask: {
        get: function() {
            return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask
        },
        set: function(r) {
            console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = r
        }
    },
    vertexTangents: {
        get: function() {
            console.warn("THREE." + this.type + ": .vertexTangents has been removed.")
        },
        set: function() {
            console.warn("THREE." + this.type + ": .vertexTangents has been removed.")
        }
    }
});
Object.defineProperties(ci.prototype, {
    derivatives: {
        get: function() {
            return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
        },
        set: function(r) {
            console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = r
        }
    }
});
je.prototype.clearTarget = function(r, e, t, n) {
    console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(r), this.clear(e, t, n)
};
je.prototype.animate = function(r) {
    console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(r)
};
je.prototype.getCurrentRenderTarget = function() {
    return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
};
je.prototype.getMaxAnisotropy = function() {
    return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
};
je.prototype.getPrecision = function() {
    return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
};
je.prototype.resetGLState = function() {
    return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset()
};
je.prototype.supportsFloatTextures = function() {
    return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
};
je.prototype.supportsHalfFloatTextures = function() {
    return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
};
je.prototype.supportsStandardDerivatives = function() {
    return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
};
je.prototype.supportsCompressedTextureS3TC = function() {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
};
je.prototype.supportsCompressedTexturePVRTC = function() {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
};
je.prototype.supportsBlendMinMax = function() {
    return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
};
je.prototype.supportsVertexTextures = function() {
    return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
};
je.prototype.supportsInstancedArrays = function() {
    return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
};
je.prototype.enableScissorTest = function(r) {
    console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(r)
};
je.prototype.initMaterial = function() {
    console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
};
je.prototype.addPrePlugin = function() {
    console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
};
je.prototype.addPostPlugin = function() {
    console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
};
je.prototype.updateShadowMap = function() {
    console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
};
je.prototype.setFaceCulling = function() {
    console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
};
je.prototype.allocTextureUnit = function() {
    console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")
};
je.prototype.setTexture = function() {
    console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")
};
je.prototype.setTexture2D = function() {
    console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")
};
je.prototype.setTextureCube = function() {
    console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")
};
je.prototype.getActiveMipMapLevel = function() {
    return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel()
};
Object.defineProperties(je.prototype, {
    shadowMapEnabled: {
        get: function() {
            return this.shadowMap.enabled
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = r
        }
    },
    shadowMapType: {
        get: function() {
            return this.shadowMap.type
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = r
        }
    },
    shadowMapCullFace: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
        }
    },
    context: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext()
        }
    },
    vr: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr
        }
    },
    gammaInput: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")
        }
    },
    gammaOutput: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = r === !0 ? Rt : xt
        }
    },
    toneMappingWhitePoint: {
        get: function() {
            return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")
        }
    }
});
Object.defineProperties(Tu.prototype, {
    cullFace: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
        }
    },
    renderReverseSided: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
        }
    },
    renderSingleSided: {
        get: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
        },
        set: function() {
            console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
        }
    }
});
Object.defineProperties(en.prototype, {
    wrapS: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = r
        }
    },
    wrapT: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = r
        }
    },
    magFilter: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = r
        }
    },
    minFilter: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = r
        }
    },
    anisotropy: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = r
        }
    },
    offset: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = r
        }
    },
    repeat: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = r
        }
    },
    format: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = r
        }
    },
    type: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = r
        }
    },
    generateMipmaps: {
        get: function() {
            return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
        },
        set: function(r) {
            console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = r
        }
    }
});
zx.prototype.load = function(r) {
    console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
    const e = this;
    return new Dx().load(r, function(n) {
        e.setBuffer(n)
    }), this
};
mo.prototype.updateCubeMap = function(r, e) {
    return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(r, e)
};
mo.prototype.clear = function(r, e, t, n) {
    return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(r, e, t, n)
};
Li.crossOrigin = void 0;
Li.loadTexture = function(r, e, t, n) {
    console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
    const i = new Ho;
    i.setCrossOrigin(this.crossOrigin);
    const s = i.load(r, t, void 0, n);
    return e && (s.mapping = e), s
};
Li.loadTextureCube = function(r, e, t, n) {
    console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
    const i = new Rx;
    i.setCrossOrigin(this.crossOrigin);
    const s = i.load(r, t, void 0, n);
    return e && (s.mapping = e), s
};
Li.loadCompressedTexture = function() {
    console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
};
Li.loadCompressedTextureCube = function() {
    console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
};
typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
    detail: {
        revision: Jl
    }
}));
typeof window != "undefined" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Jl);
class VM extends Kt {
    constructor(e) {
        super(e);
        this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
            return new s_(t)
        }), this.register(function(t) {
            return new u_(t)
        }), this.register(function(t) {
            return new h_(t)
        }), this.register(function(t) {
            return new a_(t)
        }), this.register(function(t) {
            return new o_(t)
        }), this.register(function(t) {
            return new l_(t)
        }), this.register(function(t) {
            return new c_(t)
        }), this.register(function(t) {
            return new i_(t)
        }), this.register(function(t) {
            return new f_(t)
        })
    }
    load(e, t, n, i) {
        const s = this;
        let a;
        this.resourcePath !== "" ? a = this.resourcePath : this.path !== "" ? a = this.path : a = xn.extractUrlBase(e), this.manager.itemStart(e);
        const o = function(c) {
                i ? i(c) : console.error(c), s.manager.itemError(e), s.manager.itemEnd(e)
            },
            l = new or(this.manager);
        l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
            try {
                s.parse(c, a, function(u) {
                    t(u), s.manager.itemEnd(e)
                }, o)
            } catch (u) {
                o(u)
            }
        }, n, o)
    }
    setDRACOLoader(e) {
        return this.dracoLoader = e, this
    }
    setDDSLoader() {
        throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')
    }
    setKTX2Loader(e) {
        return this.ktx2Loader = e, this
    }
    setMeshoptDecoder(e) {
        return this.meshoptDecoder = e, this
    }
    register(e) {
        return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this
    }
    unregister(e) {
        return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this
    }
    parse(e, t, n, i) {
        let s;
        const a = {},
            o = {};
        if (typeof e == "string") s = e;
        else if (xn.decodeText(new Uint8Array(e, 0, 4)) === Ah) {
            try {
                a[ze.KHR_BINARY_GLTF] = new d_(e)
            } catch (h) {
                i && i(h);
                return
            }
            s = a[ze.KHR_BINARY_GLTF].content
        } else s = xn.decodeText(new Uint8Array(e));
        const l = JSON.parse(s);
        if (l.asset === void 0 || l.asset.version[0] < 2) {
            i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
            return
        }
        const c = new T_(l, {
            path: t || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder
        });
        c.fileLoader.setRequestHeader(this.requestHeader);
        for (let u = 0; u < this.pluginCallbacks.length; u++) {
            const h = this.pluginCallbacks[u](c);
            o[h.name] = h, a[h.name] = !0
        }
        if (l.extensionsUsed)
            for (let u = 0; u < l.extensionsUsed.length; ++u) {
                const h = l.extensionsUsed[u],
                    f = l.extensionsRequired || [];
                switch (h) {
                    case ze.KHR_MATERIALS_UNLIT:
                        a[h] = new r_;
                        break;
                    case ze.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                        a[h] = new g_;
                        break;
                    case ze.KHR_DRACO_MESH_COMPRESSION:
                        a[h] = new p_(l, this.dracoLoader);
                        break;
                    case ze.KHR_TEXTURE_TRANSFORM:
                        a[h] = new m_;
                        break;
                    case ze.KHR_MESH_QUANTIZATION:
                        a[h] = new v_;
                        break;
                    default:
                        f.indexOf(h) >= 0 && o[h] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".')
                }
            }
        c.setExtensions(a), c.setPlugins(o), c.parse(n, i)
    }
}

function n_() {
    let r = {};
    return {
        get: function(e) {
            return r[e]
        },
        add: function(e, t) {
            r[e] = t
        },
        remove: function(e) {
            delete r[e]
        },
        removeAll: function() {
            r = {}
        }
    }
}
const ze = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression"
};
class i_ {
    constructor(e) {
        this.parser = e, this.name = ze.KHR_LIGHTS_PUNCTUAL, this.cache = {
            refs: {},
            uses: {}
        }
    }
    _markDefs() {
        const e = this.parser,
            t = this.parser.json.nodes || [];
        for (let n = 0, i = t.length; n < i; n++) {
            const s = t[n];
            s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, s.extensions[this.name].light)
        }
    }
    _loadLight(e) {
        const t = this.parser,
            n = "light:" + e;
        let i = t.cache.get(n);
        if (i) return i;
        const s = t.json,
            l = ((s.extensions && s.extensions[this.name] || {}).lights || [])[e];
        let c;
        const u = new ue(16777215);
        l.color !== void 0 && u.fromArray(l.color);
        const h = l.range !== void 0 ? l.range : 0;
        switch (l.type) {
            case "directional":
                c = new jo(u), c.target.position.set(0, 0, -1), c.add(c.target);
                break;
            case "point":
                c = new fa(u), c.distance = h;
                break;
            case "spot":
                c = new Wo(u), c.distance = h, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
                break;
            default:
                throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type)
        }
        return c.position.set(0, 0, 0), c.decay = 2, l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i
    }
    createNodeAttachment(e) {
        const t = this,
            n = this.parser,
            s = n.json.nodes[e],
            o = (s.extensions && s.extensions[this.name] || {}).light;
        return o === void 0 ? null : this._loadLight(o).then(function(l) {
            return n._getNodeRef(t.cache, o, l)
        })
    }
}
class r_ {
    constructor() {
        this.name = ze.KHR_MATERIALS_UNLIT
    }
    getMaterialType() {
        return Fn
    }
    extendParams(e, t, n) {
        const i = [];
        e.color = new ue(1, 1, 1), e.opacity = 1;
        const s = t.pbrMetallicRoughness;
        if (s) {
            if (Array.isArray(s.baseColorFactor)) {
                const a = s.baseColorFactor;
                e.color.fromArray(a), e.opacity = a[3]
            }
            s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture))
        }
        return Promise.all(i)
    }
}
class s_ {
    constructor(e) {
        this.parser = e, this.name = ze.KHR_MATERIALS_CLEARCOAT
    }
    getMaterialType(e) {
        const n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : tr
    }
    extendMaterialParams(e, t) {
        const n = this.parser,
            i = n.json.materials[e];
        if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
        const s = [],
            a = i.extensions[this.name];
        if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) {
            const o = a.clearcoatNormalTexture.scale;
            t.clearcoatNormalScale = new K(o, o)
        }
        return Promise.all(s)
    }
}
class a_ {
    constructor(e) {
        this.parser = e, this.name = ze.KHR_MATERIALS_TRANSMISSION
    }
    getMaterialType(e) {
        const n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : tr
    }
    extendMaterialParams(e, t) {
        const n = this.parser,
            i = n.json.materials[e];
        if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
        const s = [],
            a = i.extensions[this.name];
        return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(s)
    }
}
class o_ {
    constructor(e) {
        this.parser = e, this.name = ze.KHR_MATERIALS_VOLUME
    }
    getMaterialType(e) {
        const n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : tr
    }
    extendMaterialParams(e, t) {
        const n = this.parser,
            i = n.json.materials[e];
        if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
        const s = [],
            a = i.extensions[this.name];
        t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0, a.thicknessTexture !== void 0 && s.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)), t.attenuationDistance = a.attenuationDistance || 0;
        const o = a.attenuationColor || [1, 1, 1];
        return t.attenuationTint = new ue(o[0], o[1], o[2]), Promise.all(s)
    }
}
class l_ {
    constructor(e) {
        this.parser = e, this.name = ze.KHR_MATERIALS_IOR
    }
    getMaterialType(e) {
        const n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : tr
    }
    extendMaterialParams(e, t) {
        const i = this.parser.json.materials[e];
        if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
        const s = i.extensions[this.name];
        return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve()
    }
}
class c_ {
    constructor(e) {
        this.parser = e, this.name = ze.KHR_MATERIALS_SPECULAR
    }
    getMaterialType(e) {
        const n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : tr
    }
    extendMaterialParams(e, t) {
        const n = this.parser,
            i = n.json.materials[e];
        if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
        const s = [],
            a = i.extensions[this.name];
        t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1, a.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
        const o = a.specularColorFactor || [1, 1, 1];
        return t.specularTint = new ue(o[0], o[1], o[2]), a.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularTintMap", a.specularColorTexture).then(function(l) {
            l.encoding = Rt
        })), Promise.all(s)
    }
}
class u_ {
    constructor(e) {
        this.parser = e, this.name = ze.KHR_TEXTURE_BASISU
    }
    loadTexture(e) {
        const t = this.parser,
            n = t.json,
            i = n.textures[e];
        if (!i.extensions || !i.extensions[this.name]) return null;
        const s = i.extensions[this.name],
            a = n.images[s.source],
            o = t.options.ktx2Loader;
        if (!o) {
            if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
            return null
        }
        return t.loadTextureImage(e, a, o)
    }
}
class h_ {
    constructor(e) {
        this.parser = e, this.name = ze.EXT_TEXTURE_WEBP, this.isSupported = null
    }
    loadTexture(e) {
        const t = this.name,
            n = this.parser,
            i = n.json,
            s = i.textures[e];
        if (!s.extensions || !s.extensions[t]) return null;
        const a = s.extensions[t],
            o = i.images[a.source];
        let l = n.textureLoader;
        if (o.uri) {
            const c = n.options.manager.getHandler(o.uri);
            c !== null && (l = c)
        }
        return this.detectSupport().then(function(c) {
            if (c) return n.loadTextureImage(e, o, l);
            if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
            return n.loadTexture(e)
        })
    }
    detectSupport() {
        return this.isSupported || (this.isSupported = new Promise(function(e) {
            const t = new Image;
            t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
                e(t.height === 1)
            }
        })), this.isSupported
    }
}
class f_ {
    constructor(e) {
        this.name = ze.EXT_MESHOPT_COMPRESSION, this.parser = e
    }
    loadBufferView(e) {
        const t = this.parser.json,
            n = t.bufferViews[e];
        if (n.extensions && n.extensions[this.name]) {
            const i = n.extensions[this.name],
                s = this.parser.getDependency("buffer", i.buffer),
                a = this.parser.options.meshoptDecoder;
            if (!a || !a.supported) {
                if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
                return null
            }
            return Promise.all([s, a.ready]).then(function(o) {
                const l = i.byteOffset || 0,
                    c = i.byteLength || 0,
                    u = i.count,
                    h = i.byteStride,
                    f = new ArrayBuffer(u * h),
                    d = new Uint8Array(o[0], l, c);
                return a.decodeGltfBuffer(new Uint8Array(f), u, h, d, i.mode, i.filter), f
            })
        } else return null
    }
}
const Ah = "glTF",
    es = 12,
    Lh = {
        JSON: 1313821514,
        BIN: 5130562
    };
class d_ {
    constructor(e) {
        this.name = ze.KHR_BINARY_GLTF, this.content = null, this.body = null;
        const t = new DataView(e, 0, es);
        if (this.header = {
                magic: xn.decodeText(new Uint8Array(e.slice(0, 4))),
                version: t.getUint32(4, !0),
                length: t.getUint32(8, !0)
            }, this.header.magic !== Ah) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
        if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
        const n = this.header.length - es,
            i = new DataView(e, es);
        let s = 0;
        for (; s < n;) {
            const a = i.getUint32(s, !0);
            s += 4;
            const o = i.getUint32(s, !0);
            if (s += 4, o === Lh.JSON) {
                const l = new Uint8Array(e, es + s, a);
                this.content = xn.decodeText(l)
            } else if (o === Lh.BIN) {
                const l = es + s;
                this.body = e.slice(l, l + a)
            }
            s += a
        }
        if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.")
    }
}
class p_ {
    constructor(e, t) {
        if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
        this.name = ze.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload()
    }
    decodePrimitive(e, t) {
        const n = this.json,
            i = this.dracoLoader,
            s = e.extensions[this.name].bufferView,
            a = e.extensions[this.name].attributes,
            o = {},
            l = {},
            c = {};
        for (const u in a) {
            const h = Qo[u] || u.toLowerCase();
            o[h] = a[u]
        }
        for (const u in e.attributes) {
            const h = Qo[u] || u.toLowerCase();
            if (a[u] !== void 0) {
                const f = n.accessors[e.attributes[u]],
                    d = ts[f.componentType];
                c[h] = d, l[h] = f.normalized === !0
            }
        }
        return t.getDependency("bufferView", s).then(function(u) {
            return new Promise(function(h) {
                i.decodeDracoFile(u, function(f) {
                    for (const d in f.attributes) {
                        const p = f.attributes[d],
                            v = l[d];
                        v !== void 0 && (p.normalized = v)
                    }
                    h(f)
                }, o, c)
            })
        })
    }
}
class m_ {
    constructor() {
        this.name = ze.KHR_TEXTURE_TRANSFORM
    }
    extendTexture(e, t) {
        return t.texCoord !== void 0 && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e
    }
}
class $o extends $r {
    constructor(e) {
        super();
        this.isGLTFSpecularGlossinessMaterial = !0;
        const t = ["#ifdef USE_SPECULARMAP", "	uniform sampler2D specularMap;", "#endif"].join(`
`),
            n = ["#ifdef USE_GLOSSINESSMAP", "	uniform sampler2D glossinessMap;", "#endif"].join(`
`),
            i = ["vec3 specularFactor = specular;", "#ifdef USE_SPECULARMAP", "	vec4 texelSpecular = texture2D( specularMap, vUv );", "	texelSpecular = sRGBToLinear( texelSpecular );", "	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture", "	specularFactor *= texelSpecular.rgb;", "#endif"].join(`
`),
            s = ["float glossinessFactor = glossiness;", "#ifdef USE_GLOSSINESSMAP", "	vec4 texelGlossiness = texture2D( glossinessMap, vUv );", "	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture", "	glossinessFactor *= texelGlossiness.a;", "#endif"].join(`
`),
            a = ["PhysicalMaterial material;", "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );", "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );", "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );", "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.", "material.roughness += geometryRoughness;", "material.roughness = min( material.roughness, 1.0 );", "material.specularColor = specularFactor;"].join(`
`),
            o = {
                specular: {
                    value: new ue().setHex(16777215)
                },
                glossiness: {
                    value: 1
                },
                specularMap: {
                    value: null
                },
                glossinessMap: {
                    value: null
                }
            };
        this._extraUniforms = o, this.onBeforeCompile = function(l) {
            for (const c in o) l.uniforms[c] = o[c];
            l.fragmentShader = l.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", t).replace("#include <metalnessmap_pars_fragment>", n).replace("#include <roughnessmap_fragment>", i).replace("#include <metalnessmap_fragment>", s).replace("#include <lights_physical_fragment>", a)
        }, Object.defineProperties(this, {
            specular: {
                get: function() {
                    return o.specular.value
                },
                set: function(l) {
                    o.specular.value = l
                }
            },
            specularMap: {
                get: function() {
                    return o.specularMap.value
                },
                set: function(l) {
                    o.specularMap.value = l, l ? this.defines.USE_SPECULARMAP = "" : delete this.defines.USE_SPECULARMAP
                }
            },
            glossiness: {
                get: function() {
                    return o.glossiness.value
                },
                set: function(l) {
                    o.glossiness.value = l
                }
            },
            glossinessMap: {
                get: function() {
                    return o.glossinessMap.value
                },
                set: function(l) {
                    o.glossinessMap.value = l, l ? (this.defines.USE_GLOSSINESSMAP = "", this.defines.USE_UV = "") : (delete this.defines.USE_GLOSSINESSMAP, delete this.defines.USE_UV)
                }
            }
        }), delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this.setValues(e)
    }
    copy(e) {
        return super.copy(e), this.specularMap = e.specularMap, this.specular.copy(e.specular), this.glossinessMap = e.glossinessMap, this.glossiness = e.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this
    }
}
class g_ {
    constructor() {
        this.name = ze.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS, this.specularGlossinessParams = ["color", "map", "lightMap", "lightMapIntensity", "aoMap", "aoMapIntensity", "emissive", "emissiveIntensity", "emissiveMap", "bumpMap", "bumpScale", "normalMap", "normalMapType", "displacementMap", "displacementScale", "displacementBias", "specularMap", "specular", "glossinessMap", "glossiness", "alphaMap", "envMap", "envMapIntensity", "refractionRatio"]
    }
    getMaterialType() {
        return $o
    }
    extendParams(e, t, n) {
        const i = t.extensions[this.name];
        e.color = new ue(1, 1, 1), e.opacity = 1;
        const s = [];
        if (Array.isArray(i.diffuseFactor)) {
            const a = i.diffuseFactor;
            e.color.fromArray(a), e.opacity = a[3]
        }
        if (i.diffuseTexture !== void 0 && s.push(n.assignTexture(e, "map", i.diffuseTexture)), e.emissive = new ue(0, 0, 0), e.glossiness = i.glossinessFactor !== void 0 ? i.glossinessFactor : 1, e.specular = new ue(1, 1, 1), Array.isArray(i.specularFactor) && e.specular.fromArray(i.specularFactor), i.specularGlossinessTexture !== void 0) {
            const a = i.specularGlossinessTexture;
            s.push(n.assignTexture(e, "glossinessMap", a)), s.push(n.assignTexture(e, "specularMap", a))
        }
        return Promise.all(s)
    }
    createMaterial(e) {
        const t = new $o(e);
        return t.fog = !0, t.color = e.color, t.map = e.map === void 0 ? null : e.map, t.lightMap = null, t.lightMapIntensity = 1, t.aoMap = e.aoMap === void 0 ? null : e.aoMap, t.aoMapIntensity = 1, t.emissive = e.emissive, t.emissiveIntensity = 1, t.emissiveMap = e.emissiveMap === void 0 ? null : e.emissiveMap, t.bumpMap = e.bumpMap === void 0 ? null : e.bumpMap, t.bumpScale = 1, t.normalMap = e.normalMap === void 0 ? null : e.normalMap, t.normalMapType = ri, e.normalScale && (t.normalScale = e.normalScale), t.displacementMap = null, t.displacementScale = 1, t.displacementBias = 0, t.specularMap = e.specularMap === void 0 ? null : e.specularMap, t.specular = e.specular, t.glossinessMap = e.glossinessMap === void 0 ? null : e.glossinessMap, t.glossiness = e.glossiness, t.alphaMap = null, t.envMap = e.envMap === void 0 ? null : e.envMap, t.envMapIntensity = 1, t.refractionRatio = .98, t
    }
}
class v_ {
    constructor() {
        this.name = ze.KHR_MESH_QUANTIZATION
    }
}
class pi extends yn {
    constructor(e, t, n, i) {
        super(e, t, n, i)
    }
    copySampleValue_(e) {
        const t = this.resultBuffer,
            n = this.sampleValues,
            i = this.valueSize,
            s = e * i * 3 + i;
        for (let a = 0; a !== i; a++) t[a] = n[s + a];
        return t
    }
}
pi.prototype.beforeStart_ = pi.prototype.copySampleValue_;
pi.prototype.afterEnd_ = pi.prototype.copySampleValue_;
pi.prototype.interpolate_ = function(r, e, t, n) {
    const i = this.resultBuffer,
        s = this.sampleValues,
        a = this.valueSize,
        o = a * 2,
        l = a * 3,
        c = n - e,
        u = (t - e) / c,
        h = u * u,
        f = h * u,
        d = r * l,
        p = d - l,
        v = -2 * f + 3 * h,
        y = f - h,
        m = 1 - v,
        g = y - h + u;
    for (let x = 0; x !== a; x++) {
        const _ = s[p + x + a],
            w = s[p + x + o] * c,
            T = s[d + x + a],
            M = s[d + x] * c;
        i[x] = m * _ + g * w + v * T + y * M
    }
    return i
};
const y_ = new nt;
class x_ extends pi {
    interpolate_(e, t, n, i) {
        const s = super.interpolate_(e, t, n, i);
        return y_.fromArray(s).normalize().toArray(s), s
    }
}
const _n = {
        FLOAT: 5126,
        FLOAT_MAT3: 35675,
        FLOAT_MAT4: 35676,
        FLOAT_VEC2: 35664,
        FLOAT_VEC3: 35665,
        FLOAT_VEC4: 35666,
        LINEAR: 9729,
        REPEAT: 10497,
        SAMPLER_2D: 35678,
        POINTS: 0,
        LINES: 1,
        LINE_LOOP: 2,
        LINE_STRIP: 3,
        TRIANGLES: 4,
        TRIANGLE_STRIP: 5,
        TRIANGLE_FAN: 6,
        UNSIGNED_BYTE: 5121,
        UNSIGNED_SHORT: 5123
    },
    ts = {
        5120: Int8Array,
        5121: Uint8Array,
        5122: Int16Array,
        5123: Uint16Array,
        5125: Uint32Array,
        5126: Float32Array
    },
    Rh = {
        9728: ht,
        9729: Lt,
        9984: Na,
        9985: lc,
        9986: Oa,
        9987: Mi
    },
    Ch = {
        33071: vt,
        33648: xs,
        10497: An
    },
    Ph = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
    },
    Qo = {
        POSITION: "position",
        NORMAL: "normal",
        TANGENT: "tangent",
        TEXCOORD_0: "uv",
        TEXCOORD_1: "uv2",
        COLOR_0: "color",
        WEIGHTS_0: "skinWeight",
        JOINTS_0: "skinIndex"
    },
    Xn = {
        scale: "scale",
        translation: "position",
        rotation: "quaternion",
        weights: "morphTargetInfluences"
    },
    __ = {
        CUBICSPLINE: void 0,
        LINEAR: Si,
        STEP: Ar
    },
    el = {
        OPAQUE: "OPAQUE",
        MASK: "MASK",
        BLEND: "BLEND"
    };

function Ih(r, e) {
    return typeof r != "string" || r === "" ? "" : (/^https?:\/\//i.test(e) && /^\//.test(r) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(r) || /^data:.*,.*$/i.test(r) || /^blob:.*$/i.test(r) ? r : e + r)
}

function M_(r) {
    return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new $r({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: xi
    })), r.DefaultMaterial
}

function ns(r, e, t) {
    for (const n in t.extensions) r[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n])
}

function mi(r, e) {
    e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras))
}

function w_(r, e, t) {
    let n = !1,
        i = !1;
    for (let o = 0, l = e.length; o < l; o++) {
        const c = e[o];
        if (c.POSITION !== void 0 && (n = !0), c.NORMAL !== void 0 && (i = !0), n && i) break
    }
    if (!n && !i) return Promise.resolve(r);
    const s = [],
        a = [];
    for (let o = 0, l = e.length; o < l; o++) {
        const c = e[o];
        if (n) {
            const u = c.POSITION !== void 0 ? t.getDependency("accessor", c.POSITION) : r.attributes.position;
            s.push(u)
        }
        if (i) {
            const u = c.NORMAL !== void 0 ? t.getDependency("accessor", c.NORMAL) : r.attributes.normal;
            a.push(u)
        }
    }
    return Promise.all([Promise.all(s), Promise.all(a)]).then(function(o) {
        const l = o[0],
            c = o[1];
        return n && (r.morphAttributes.position = l), i && (r.morphAttributes.normal = c), r.morphTargetsRelative = !0, r
    })
}

function b_(r, e) {
    if (r.updateMorphTargets(), e.weights !== void 0)
        for (let t = 0, n = e.weights.length; t < n; t++) r.morphTargetInfluences[t] = e.weights[t];
    if (e.extras && Array.isArray(e.extras.targetNames)) {
        const t = e.extras.targetNames;
        if (r.morphTargetInfluences.length === t.length) {
            r.morphTargetDictionary = {};
            for (let n = 0, i = t.length; n < i; n++) r.morphTargetDictionary[t[n]] = n
        } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
    }
}

function S_(r) {
    const e = r.extensions && r.extensions[ze.KHR_DRACO_MESH_COMPRESSION];
    let t;
    return e ? t = "draco:" + e.bufferView + ":" + e.indices + ":" + Dh(e.attributes) : t = r.indices + ":" + Dh(r.attributes) + ":" + r.mode, t
}

function Dh(r) {
    let e = "";
    const t = Object.keys(r).sort();
    for (let n = 0, i = t.length; n < i; n++) e += t[n] + ":" + r[t[n]] + ";";
    return e
}

function tl(r) {
    switch (r) {
        case Int8Array:
            return 1 / 127;
        case Uint8Array:
            return 1 / 255;
        case Int16Array:
            return 1 / 32767;
        case Uint16Array:
            return 1 / 65535;
        default:
            throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")
    }
}
class T_ {
    constructor(e = {}, t = {}) {
        this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new n_, this.associations = new Map, this.primitiveCache = {}, this.meshCache = {
            refs: {},
            uses: {}
        }, this.cameraCache = {
            refs: {},
            uses: {}
        }, this.lightCache = {
            refs: {},
            uses: {}
        }, this.textureCache = {}, this.nodeNamesUsed = {}, typeof createImageBitmap != "undefined" && /Firefox/.test(navigator.userAgent) === !1 ? this.textureLoader = new _h(this.options.manager) : this.textureLoader = new Ho(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new or(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0)
    }
    setExtensions(e) {
        this.extensions = e
    }
    setPlugins(e) {
        this.plugins = e
    }
    parse(e, t) {
        const n = this,
            i = this.json,
            s = this.extensions;
        this.cache.removeAll(), this._invokeAll(function(a) {
            return a._markDefs && a._markDefs()
        }), Promise.all(this._invokeAll(function(a) {
            return a.beforeRoot && a.beforeRoot()
        })).then(function() {
            return Promise.all([n.getDependencies("scene"), n.getDependencies("animation"), n.getDependencies("camera")])
        }).then(function(a) {
            const o = {
                scene: a[0][i.scene || 0],
                scenes: a[0],
                animations: a[1],
                cameras: a[2],
                asset: i.asset,
                parser: n,
                userData: {}
            };
            ns(s, o, i), mi(o, i), Promise.all(n._invokeAll(function(l) {
                return l.afterRoot && l.afterRoot(o)
            })).then(function() {
                e(o)
            })
        }).catch(t)
    }
    _markDefs() {
        const e = this.json.nodes || [],
            t = this.json.skins || [],
            n = this.json.meshes || [];
        for (let i = 0, s = t.length; i < s; i++) {
            const a = t[i].joints;
            for (let o = 0, l = a.length; o < l; o++) e[a[o]].isBone = !0
        }
        for (let i = 0, s = e.length; i < s; i++) {
            const a = e[i];
            a.mesh !== void 0 && (this._addNodeRef(this.meshCache, a.mesh), a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = !0)), a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera)
        }
    }
    _addNodeRef(e, t) {
        t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++)
    }
    _getNodeRef(e, t, n) {
        if (e.refs[t] <= 1) return n;
        const i = n.clone(),
            s = (a, o) => {
                const l = this.associations.get(a);
                l != null && this.associations.set(o, l);
                for (const [c, u] of a.children.entries()) s(u, o.children[c])
            };
        return s(n, i), i.name += "_instance_" + e.uses[t]++, i
    }
    _invokeOne(e) {
        const t = Object.values(this.plugins);
        t.push(this);
        for (let n = 0; n < t.length; n++) {
            const i = e(t[n]);
            if (i) return i
        }
        return null
    }
    _invokeAll(e) {
        const t = Object.values(this.plugins);
        t.unshift(this);
        const n = [];
        for (let i = 0; i < t.length; i++) {
            const s = e(t[i]);
            s && n.push(s)
        }
        return n
    }
    getDependency(e, t) {
        const n = e + ":" + t;
        let i = this.cache.get(n);
        if (!i) {
            switch (e) {
                case "scene":
                    i = this.loadScene(t);
                    break;
                case "node":
                    i = this.loadNode(t);
                    break;
                case "mesh":
                    i = this._invokeOne(function(s) {
                        return s.loadMesh && s.loadMesh(t)
                    });
                    break;
                case "accessor":
                    i = this.loadAccessor(t);
                    break;
                case "bufferView":
                    i = this._invokeOne(function(s) {
                        return s.loadBufferView && s.loadBufferView(t)
                    });
                    break;
                case "buffer":
                    i = this.loadBuffer(t);
                    break;
                case "material":
                    i = this._invokeOne(function(s) {
                        return s.loadMaterial && s.loadMaterial(t)
                    });
                    break;
                case "texture":
                    i = this._invokeOne(function(s) {
                        return s.loadTexture && s.loadTexture(t)
                    });
                    break;
                case "skin":
                    i = this.loadSkin(t);
                    break;
                case "animation":
                    i = this.loadAnimation(t);
                    break;
                case "camera":
                    i = this.loadCamera(t);
                    break;
                default:
                    throw new Error("Unknown type: " + e)
            }
            this.cache.add(n, i)
        }
        return i
    }
    getDependencies(e) {
        let t = this.cache.get(e);
        if (!t) {
            const n = this,
                i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
            t = Promise.all(i.map(function(s, a) {
                return n.getDependency(e, a)
            })), this.cache.add(e, t)
        }
        return t
    }
    loadBuffer(e) {
        const t = this.json.buffers[e],
            n = this.fileLoader;
        if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
        if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);
        const i = this.options;
        return new Promise(function(s, a) {
            n.load(Ih(t.uri, i.path), s, void 0, function() {
                a(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'))
            })
        })
    }
    loadBufferView(e) {
        const t = this.json.bufferViews[e];
        return this.getDependency("buffer", t.buffer).then(function(n) {
            const i = t.byteLength || 0,
                s = t.byteOffset || 0;
            return n.slice(s, s + i)
        })
    }
    loadAccessor(e) {
        const t = this,
            n = this.json,
            i = this.json.accessors[e];
        if (i.bufferView === void 0 && i.sparse === void 0) return Promise.resolve(null);
        const s = [];
        return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(a) {
            const o = a[0],
                l = Ph[i.type],
                c = ts[i.componentType],
                u = c.BYTES_PER_ELEMENT,
                h = u * l,
                f = i.byteOffset || 0,
                d = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0,
                p = i.normalized === !0;
            let v, y;
            if (d && d !== h) {
                const m = Math.floor(f / d),
                    g = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + m + ":" + i.count;
                let x = t.cache.get(g);
                x || (v = new c(o, m * d, i.count * d / u), x = new qi(v, d / u), t.cache.add(g, x)), y = new Yi(x, l, f % d / u, p)
            } else o === null ? v = new c(i.count * l) : v = new c(o, f, i.count * l), y = new $e(v, l, p);
            if (i.sparse !== void 0) {
                const m = Ph.SCALAR,
                    g = ts[i.sparse.indices.componentType],
                    x = i.sparse.indices.byteOffset || 0,
                    _ = i.sparse.values.byteOffset || 0,
                    w = new g(a[1], x, i.sparse.count * m),
                    T = new c(a[2], _, i.sparse.count * l);
                o !== null && (y = new $e(y.array.slice(), y.itemSize, y.normalized));
                for (let M = 0, L = w.length; M < L; M++) {
                    const H = w[M];
                    if (y.setX(H, T[M * l]), l >= 2 && y.setY(H, T[M * l + 1]), l >= 3 && y.setZ(H, T[M * l + 2]), l >= 4 && y.setW(H, T[M * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                }
            }
            return y
        })
    }
    loadTexture(e) {
        const t = this.json,
            n = this.options,
            i = t.textures[e],
            s = t.images[i.source];
        let a = this.textureLoader;
        if (s.uri) {
            const o = n.manager.getHandler(s.uri);
            o !== null && (a = o)
        }
        return this.loadTextureImage(e, s, a)
    }
    loadTextureImage(e, t, n) {
        const i = this,
            s = this.json,
            a = this.options,
            o = s.textures[e],
            l = (t.uri || t.bufferView) + ":" + o.sampler;
        if (this.textureCache[l]) return this.textureCache[l];
        const c = self.URL || self.webkitURL;
        let u = t.uri || "",
            h = !1;
        if (t.bufferView !== void 0) u = i.getDependency("bufferView", t.bufferView).then(function(d) {
            h = !0;
            const p = new Blob([d], {
                type: t.mimeType
            });
            return u = c.createObjectURL(p), u
        });
        else if (t.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
        const f = Promise.resolve(u).then(function(d) {
            return new Promise(function(p, v) {
                let y = p;
                n.isImageBitmapLoader === !0 && (y = function(m) {
                    const g = new it(m);
                    g.needsUpdate = !0, p(g)
                }), n.load(Ih(d, a.path), y, void 0, v)
            })
        }).then(function(d) {
            h === !0 && c.revokeObjectURL(u), d.flipY = !1, o.name && (d.name = o.name);
            const v = (s.samplers || {})[o.sampler] || {};
            return d.magFilter = Rh[v.magFilter] || Lt, d.minFilter = Rh[v.minFilter] || Mi, d.wrapS = Ch[v.wrapS] || An, d.wrapT = Ch[v.wrapT] || An, i.associations.set(d, {
                textures: e
            }), d
        }).catch(function() {
            return console.error("THREE.GLTFLoader: Couldn't load texture", u), null
        });
        return this.textureCache[l] = f, f
    }
    assignTexture(e, t, n) {
        const i = this;
        return this.getDependency("texture", n.index).then(function(s) {
            if (n.texCoord !== void 0 && n.texCoord != 0 && !(t === "aoMap" && n.texCoord == 1) && console.warn("THREE.GLTFLoader: Custom UV set " + n.texCoord + " for texture " + t + " not yet supported."), i.extensions[ze.KHR_TEXTURE_TRANSFORM]) {
                const a = n.extensions !== void 0 ? n.extensions[ze.KHR_TEXTURE_TRANSFORM] : void 0;
                if (a) {
                    const o = i.associations.get(s);
                    s = i.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(s, a), i.associations.set(s, o)
                }
            }
            return e[t] = s, s
        })
    }
    assignFinalMaterial(e) {
        const t = e.geometry;
        let n = e.material;
        const i = t.attributes.tangent === void 0,
            s = t.attributes.color !== void 0,
            a = t.attributes.normal === void 0;
        if (e.isPoints) {
            const o = "PointsMaterial:" + n.uuid;
            let l = this.cache.get(o);
            l || (l = new Ro, ft.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = !1, this.cache.add(o, l)), n = l
        } else if (e.isLine) {
            const o = "LineBasicMaterial:" + n.uuid;
            let l = this.cache.get(o);
            l || (l = new hi, ft.prototype.copy.call(l, n), l.color.copy(n.color), this.cache.add(o, l)), n = l
        }
        if (i || s || a) {
            let o = "ClonedMaterial:" + n.uuid + ":";
            n.isGLTFSpecularGlossinessMaterial && (o += "specular-glossiness:"), i && (o += "derivative-tangents:"), s && (o += "vertex-colors:"), a && (o += "flat-shading:");
            let l = this.cache.get(o);
            l || (l = n.clone(), s && (l.vertexColors = !0), a && (l.flatShading = !0), i && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(o, l), this.associations.set(l, this.associations.get(n))), n = l
        }
        n.aoMap && t.attributes.uv2 === void 0 && t.attributes.uv !== void 0 && t.setAttribute("uv2", t.attributes.uv), e.material = n
    }
    getMaterialType() {
        return $r
    }
    loadMaterial(e) {
        const t = this,
            n = this.json,
            i = this.extensions,
            s = n.materials[e];
        let a;
        const o = {},
            l = s.extensions || {},
            c = [];
        if (l[ze.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
            const h = i[ze.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
            a = h.getMaterialType(), c.push(h.extendParams(o, s, t))
        } else if (l[ze.KHR_MATERIALS_UNLIT]) {
            const h = i[ze.KHR_MATERIALS_UNLIT];
            a = h.getMaterialType(), c.push(h.extendParams(o, s, t))
        } else {
            const h = s.pbrMetallicRoughness || {};
            if (o.color = new ue(1, 1, 1), o.opacity = 1, Array.isArray(h.baseColorFactor)) {
                const f = h.baseColorFactor;
                o.color.fromArray(f), o.opacity = f[3]
            }
            h.baseColorTexture !== void 0 && c.push(t.assignTexture(o, "map", h.baseColorTexture)), o.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, o.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(o, "metalnessMap", h.metallicRoughnessTexture)), c.push(t.assignTexture(o, "roughnessMap", h.metallicRoughnessTexture))), a = this._invokeOne(function(f) {
                return f.getMaterialType && f.getMaterialType(e)
            }), c.push(Promise.all(this._invokeAll(function(f) {
                return f.extendMaterialParams && f.extendMaterialParams(e, o)
            })))
        }
        s.doubleSided === !0 && (o.side = ti);
        const u = s.alphaMode || el.OPAQUE;
        if (u === el.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.format = ii, o.transparent = !1, u === el.MASK && (o.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : .5)), s.normalTexture !== void 0 && a !== Fn && (c.push(t.assignTexture(o, "normalMap", s.normalTexture)), o.normalScale = new K(1, 1), s.normalTexture.scale !== void 0)) {
            const h = s.normalTexture.scale;
            o.normalScale.set(h, h)
        }
        return s.occlusionTexture !== void 0 && a !== Fn && (c.push(t.assignTexture(o, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && a !== Fn && (o.emissive = new ue().fromArray(s.emissiveFactor)), s.emissiveTexture !== void 0 && a !== Fn && c.push(t.assignTexture(o, "emissiveMap", s.emissiveTexture)), Promise.all(c).then(function() {
            let h;
            return a === $o ? h = i[ze.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o) : h = new a(o), s.name && (h.name = s.name), h.map && (h.map.encoding = Rt), h.emissiveMap && (h.emissiveMap.encoding = Rt), mi(h, s), t.associations.set(h, {
                materials: e
            }), s.extensions && ns(i, h, s), h
        })
    }
    createUniqueName(e) {
        const t = Be.sanitizeNodeName(e || "");
        let n = t;
        for (let i = 1; this.nodeNamesUsed[n]; ++i) n = t + "_" + i;
        return this.nodeNamesUsed[n] = !0, n
    }
    loadGeometries(e) {
        const t = this,
            n = this.extensions,
            i = this.primitiveCache;

        function s(o) {
            return n[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(l) {
                return Nh(l, o, t)
            })
        }
        const a = [];
        for (let o = 0, l = e.length; o < l; o++) {
            const c = e[o],
                u = S_(c),
                h = i[u];
            if (h) a.push(h.promise);
            else {
                let f;
                c.extensions && c.extensions[ze.KHR_DRACO_MESH_COMPRESSION] ? f = s(c) : f = Nh(new He, c, t), i[u] = {
                    primitive: c,
                    promise: f
                }, a.push(f)
            }
        }
        return Promise.all(a)
    }
    loadMesh(e) {
        const t = this,
            n = this.json,
            i = this.extensions,
            s = n.meshes[e],
            a = s.primitives,
            o = [];
        for (let l = 0, c = a.length; l < c; l++) {
            const u = a[l].material === void 0 ? M_(this.cache) : this.getDependency("material", a[l].material);
            o.push(u)
        }
        return o.push(t.loadGeometries(a)), Promise.all(o).then(function(l) {
            const c = l.slice(0, l.length - 1),
                u = l[l.length - 1],
                h = [];
            for (let d = 0, p = u.length; d < p; d++) {
                const v = u[d],
                    y = a[d];
                let m;
                const g = c[d];
                if (y.mode === _n.TRIANGLES || y.mode === _n.TRIANGLE_STRIP || y.mode === _n.TRIANGLE_FAN || y.mode === void 0) m = s.isSkinnedMesh === !0 ? new Ks(v, g) : new _t(v, g), m.isSkinnedMesh === !0 && !m.geometry.attributes.skinWeight.normalized && m.normalizeSkinWeights(), y.mode === _n.TRIANGLE_STRIP ? m.geometry = Oh(m.geometry, Dp) : y.mode === _n.TRIANGLE_FAN && (m.geometry = Oh(m.geometry, _c));
                else if (y.mode === _n.LINES) m = new ta(v, g);
                else if (y.mode === _n.LINE_STRIP) m = new Xr(v, g);
                else if (y.mode === _n.LINE_LOOP) m = new Xu(v, g);
                else if (y.mode === _n.POINTS) m = new qu(v, g);
                else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + y.mode);
                Object.keys(m.geometry.morphAttributes).length > 0 && b_(m, s), m.name = t.createUniqueName(s.name || "mesh_" + e), mi(m, s), y.extensions && ns(i, m, y), t.assignFinalMaterial(m), h.push(m)
            }
            for (let d = 0, p = h.length; d < p; d++) t.associations.set(h[d], {
                meshes: e,
                primitives: d
            });
            if (h.length === 1) return h[0];
            const f = new rn;
            t.associations.set(f, {
                meshes: e
            });
            for (let d = 0, p = h.length; d < p; d++) f.add(h[d]);
            return f
        })
    }
    loadCamera(e) {
        let t;
        const n = this.json.cameras[e],
            i = n[n.type];
        if (!i) {
            console.warn("THREE.GLTFLoader: Missing camera parameters.");
            return
        }
        return n.type === "perspective" ? t = new wt(jt.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Br(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), mi(t, n), Promise.resolve(t)
    }
    loadSkin(e) {
        const t = this.json.skins[e],
            n = {
                joints: t.joints
            };
        return t.inverseBindMatrices === void 0 ? Promise.resolve(n) : this.getDependency("accessor", t.inverseBindMatrices).then(function(i) {
            return n.inverseBindMatrices = i, n
        })
    }
    loadAnimation(e) {
        const n = this.json.animations[e],
            i = [],
            s = [],
            a = [],
            o = [],
            l = [];
        for (let c = 0, u = n.channels.length; c < u; c++) {
            const h = n.channels[c],
                f = n.samplers[h.sampler],
                d = h.target,
                p = d.node !== void 0 ? d.node : d.id,
                v = n.parameters !== void 0 ? n.parameters[f.input] : f.input,
                y = n.parameters !== void 0 ? n.parameters[f.output] : f.output;
            i.push(this.getDependency("node", p)), s.push(this.getDependency("accessor", v)), a.push(this.getDependency("accessor", y)), o.push(f), l.push(d)
        }
        return Promise.all([Promise.all(i), Promise.all(s), Promise.all(a), Promise.all(o), Promise.all(l)]).then(function(c) {
            const u = c[0],
                h = c[1],
                f = c[2],
                d = c[3],
                p = c[4],
                v = [];
            for (let m = 0, g = u.length; m < g; m++) {
                const x = u[m],
                    _ = h[m],
                    w = f[m],
                    T = d[m],
                    M = p[m];
                if (x === void 0) continue;
                x.updateMatrix(), x.matrixAutoUpdate = !0;
                let L;
                switch (Xn[M.path]) {
                    case Xn.weights:
                        L = ir;
                        break;
                    case Xn.rotation:
                        L = Vn;
                        break;
                    case Xn.position:
                    case Xn.scale:
                    default:
                        L = sr;
                        break
                }
                const H = x.name ? x.name : x.uuid,
                    P = T.interpolation !== void 0 ? __[T.interpolation] : Si,
                    R = [];
                Xn[M.path] === Xn.weights ? x.traverse(function(I) {
                    I.isMesh === !0 && I.morphTargetInfluences && R.push(I.name ? I.name : I.uuid)
                }) : R.push(H);
                let j = w.array;
                if (w.normalized) {
                    const I = tl(j.constructor),
                        F = new Float32Array(j.length);
                    for (let B = 0, N = j.length; B < N; B++) F[B] = j[B] * I;
                    j = F
                }
                for (let I = 0, F = R.length; I < F; I++) {
                    const B = new L(R[I] + "." + Xn[M.path], _.array, j, P);
                    T.interpolation === "CUBICSPLINE" && (B.createInterpolant = function(O) {
                        const Y = this instanceof Vn ? x_ : pi;
                        return new Y(this.times, this.values, this.getValueSize() / 3, O)
                    }, B.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), v.push(B)
                }
            }
            const y = n.name ? n.name : "animation_" + e;
            return new ha(y, void 0, v)
        })
    }
    createNodeMesh(e) {
        const t = this.json,
            n = this,
            i = t.nodes[e];
        return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(s) {
            const a = n._getNodeRef(n.meshCache, i.mesh, s);
            return i.weights !== void 0 && a.traverse(function(o) {
                if (!!o.isMesh)
                    for (let l = 0, c = i.weights.length; l < c; l++) o.morphTargetInfluences[l] = i.weights[l]
            }), a
        })
    }
    loadNode(e) {
        const t = this.json,
            n = this.extensions,
            i = this,
            s = t.nodes[e],
            a = s.name ? i.createUniqueName(s.name) : "";
        return function() {
            const o = [],
                l = i._invokeOne(function(c) {
                    return c.createNodeMesh && c.createNodeMesh(e)
                });
            return l && o.push(l), s.camera !== void 0 && o.push(i.getDependency("camera", s.camera).then(function(c) {
                return i._getNodeRef(i.cameraCache, s.camera, c)
            })), i._invokeAll(function(c) {
                return c.createNodeAttachment && c.createNodeAttachment(e)
            }).forEach(function(c) {
                o.push(c)
            }), Promise.all(o)
        }().then(function(o) {
            let l;
            if (s.isBone === !0 ? l = new Vr : o.length > 1 ? l = new rn : o.length === 1 ? l = o[0] : l = new Ne, l !== o[0])
                for (let c = 0, u = o.length; c < u; c++) l.add(o[c]);
            if (s.name && (l.userData.name = s.name, l.name = a), mi(l, s), s.extensions && ns(n, l, s), s.matrix !== void 0) {
                const c = new ae;
                c.fromArray(s.matrix), l.applyMatrix4(c)
            } else s.translation !== void 0 && l.position.fromArray(s.translation), s.rotation !== void 0 && l.quaternion.fromArray(s.rotation), s.scale !== void 0 && l.scale.fromArray(s.scale);
            return i.associations.has(l) || i.associations.set(l, {}), i.associations.get(l).nodes = e, l
        })
    }
    loadScene(e) {
        const t = this.json,
            n = this.extensions,
            i = this.json.scenes[e],
            s = this,
            a = new rn;
        i.name && (a.name = s.createUniqueName(i.name)), mi(a, i), i.extensions && ns(n, a, i);
        const o = i.nodes || [],
            l = [];
        for (let c = 0, u = o.length; c < u; c++) l.push(Fh(o[c], a, t, s));
        return Promise.all(l).then(function() {
            const c = u => {
                const h = new Map;
                for (const [f, d] of s.associations)(f instanceof ft || f instanceof it) && h.set(f, d);
                return u.traverse(f => {
                    const d = s.associations.get(f);
                    d != null && h.set(f, d)
                }), h
            };
            return s.associations = c(a), a
        })
    }
}

function Fh(r, e, t, n) {
    const i = t.nodes[r];
    return n.getDependency("node", r).then(function(s) {
        if (i.skin === void 0) return s;
        let a;
        return n.getDependency("skin", i.skin).then(function(o) {
            a = o;
            const l = [];
            for (let c = 0, u = a.joints.length; c < u; c++) l.push(n.getDependency("node", a.joints[c]));
            return Promise.all(l)
        }).then(function(o) {
            return s.traverse(function(l) {
                if (!l.isMesh) return;
                const c = [],
                    u = [];
                for (let h = 0, f = o.length; h < f; h++) {
                    const d = o[h];
                    if (d) {
                        c.push(d);
                        const p = new ae;
                        a.inverseBindMatrices !== void 0 && p.fromArray(a.inverseBindMatrices.array, h * 16), u.push(p)
                    } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', a.joints[h])
                }
                l.bind(new $s(c, u), l.matrixWorld)
            }), s
        })
    }).then(function(s) {
        e.add(s);
        const a = [];
        if (i.children) {
            const o = i.children;
            for (let l = 0, c = o.length; l < c; l++) {
                const u = o[l];
                a.push(Fh(u, s, t, n))
            }
        }
        return Promise.all(a)
    })
}

function E_(r, e, t) {
    const n = e.attributes,
        i = new zt;
    if (n.POSITION !== void 0) {
        const o = t.json.accessors[n.POSITION],
            l = o.min,
            c = o.max;
        if (l !== void 0 && c !== void 0) {
            if (i.set(new A(l[0], l[1], l[2]), new A(c[0], c[1], c[2])), o.normalized) {
                const u = tl(ts[o.componentType]);
                i.min.multiplyScalar(u), i.max.multiplyScalar(u)
            }
        } else {
            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
            return
        }
    } else return;
    const s = e.targets;
    if (s !== void 0) {
        const o = new A,
            l = new A;
        for (let c = 0, u = s.length; c < u; c++) {
            const h = s[c];
            if (h.POSITION !== void 0) {
                const f = t.json.accessors[h.POSITION],
                    d = f.min,
                    p = f.max;
                if (d !== void 0 && p !== void 0) {
                    if (l.setX(Math.max(Math.abs(d[0]), Math.abs(p[0]))), l.setY(Math.max(Math.abs(d[1]), Math.abs(p[1]))), l.setZ(Math.max(Math.abs(d[2]), Math.abs(p[2]))), f.normalized) {
                        const v = tl(ts[f.componentType]);
                        l.multiplyScalar(v)
                    }
                    o.max(l)
                } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
            }
        }
        i.expandByVector(o)
    }
    r.boundingBox = i;
    const a = new oi;
    i.getCenter(a.center), a.radius = i.min.distanceTo(i.max) / 2, r.boundingSphere = a
}

function Nh(r, e, t) {
    const n = e.attributes,
        i = [];

    function s(a, o) {
        return t.getDependency("accessor", a).then(function(l) {
            r.setAttribute(o, l)
        })
    }
    for (const a in n) {
        const o = Qo[a] || a.toLowerCase();
        o in r.attributes || i.push(s(n[a], o))
    }
    if (e.indices !== void 0 && !r.index) {
        const a = t.getDependency("accessor", e.indices).then(function(o) {
            r.setIndex(o)
        });
        i.push(a)
    }
    return mi(r, e), E_(r, e, t), Promise.all(i).then(function() {
        return e.targets !== void 0 ? w_(r, e.targets, t) : r
    })
}

function Oh(r, e) {
    let t = r.getIndex();
    if (t === null) {
        const a = [],
            o = r.getAttribute("position");
        if (o !== void 0) {
            for (let l = 0; l < o.count; l++) a.push(l);
            r.setIndex(a), t = r.getIndex()
        } else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r
    }
    const n = t.count - 2,
        i = [];
    if (e === _c)
        for (let a = 1; a <= n; a++) i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1));
    else
        for (let a = 0; a < n; a++) a % 2 == 0 ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2))) : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a)));
    i.length / 3 !== n && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const s = r.clone();
    return s.setIndex(i), s
}
/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/
var Bh = {},
    nl = function(r) {
        return URL.createObjectURL(new Blob([r], {
            type: "text/javascript"
        }))
    },
    zh = function(r) {
        return new Worker(r)
    };
try {
    URL.revokeObjectURL(nl(""))
} catch {
    nl = function(e) {
        return "data:application/javascript;charset=UTF-8," + encodeURI(e)
    }, zh = function(e) {
        return new Worker(e, {
            type: "module"
        })
    }
}
var A_ = function(r, e, t, n, i) {
        var s = zh(Bh[e] || (Bh[e] = nl(r)));
        return s.onerror = function(a) {
            return i(a.error, null)
        }, s.onmessage = function(a) {
            return i(null, a.data)
        }, s.postMessage(t, n), s
    },
    Ie = Uint8Array,
    mt = Uint16Array,
    Mn = Uint32Array,
    lr = new Ie([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
    cr = new Ie([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
    is = new Ie([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
    Uh = function(r, e) {
        for (var t = new mt(31), n = 0; n < 31; ++n) t[n] = e += 1 << r[n - 1];
        for (var i = new Mn(t[30]), n = 1; n < 30; ++n)
            for (var s = t[n]; s < t[n + 1]; ++s) i[s] = s - t[n] << 5 | n;
        return [t, i]
    },
    kh = Uh(lr, 2),
    il = kh[0],
    ma = kh[1];
il[28] = 258, ma[258] = 28;
var Gh = Uh(cr, 0),
    Hh = Gh[0],
    rl = Gh[1],
    rs = new mt(32768);
for (var Ze = 0; Ze < 32768; ++Ze) {
    var jn = (Ze & 43690) >>> 1 | (Ze & 21845) << 1;
    jn = (jn & 52428) >>> 2 | (jn & 13107) << 2, jn = (jn & 61680) >>> 4 | (jn & 3855) << 4, rs[Ze] = ((jn & 65280) >>> 8 | (jn & 255) << 8) >>> 1
}
var kt = function(r, e, t) {
        for (var n = r.length, i = 0, s = new mt(e); i < n; ++i) ++s[r[i] - 1];
        var a = new mt(e);
        for (i = 0; i < e; ++i) a[i] = a[i - 1] + s[i - 1] << 1;
        var o;
        if (t) {
            o = new mt(1 << e);
            var l = 15 - e;
            for (i = 0; i < n; ++i)
                if (r[i])
                    for (var c = i << 4 | r[i], u = e - r[i], h = a[r[i] - 1]++ << u, f = h | (1 << u) - 1; h <= f; ++h) o[rs[h] >>> l] = c
        } else
            for (o = new mt(n), i = 0; i < n; ++i) r[i] && (o[i] = rs[a[r[i] - 1]++] >>> 15 - r[i]);
        return o
    },
    wn = new Ie(288);
for (var Ze = 0; Ze < 144; ++Ze) wn[Ze] = 8;
for (var Ze = 144; Ze < 256; ++Ze) wn[Ze] = 9;
for (var Ze = 256; Ze < 280; ++Ze) wn[Ze] = 7;
for (var Ze = 280; Ze < 288; ++Ze) wn[Ze] = 8;
var ur = new Ie(32);
for (var Ze = 0; Ze < 32; ++Ze) ur[Ze] = 5;
var Vh = kt(wn, 9, 0),
    Wh = kt(wn, 9, 1),
    Xh = kt(ur, 5, 0),
    jh = kt(ur, 5, 1),
    ga = function(r) {
        for (var e = r[0], t = 1; t < r.length; ++t) r[t] > e && (e = r[t]);
        return e
    },
    Gt = function(r, e, t) {
        var n = e / 8 | 0;
        return (r[n] | r[n + 1] << 8) >> (e & 7) & t
    },
    va = function(r, e) {
        var t = e / 8 | 0;
        return (r[t] | r[t + 1] << 8 | r[t + 2] << 16) >> (e & 7)
    },
    ss = function(r) {
        return (r / 8 | 0) + (r & 7 && 1)
    },
    Ht = function(r, e, t) {
        (e == null || e < 0) && (e = 0), (t == null || t > r.length) && (t = r.length);
        var n = new(r instanceof mt ? mt : r instanceof Mn ? Mn : Ie)(t - e);
        return n.set(r.subarray(e, t)), n
    },
    as = function(r, e, t) {
        var n = r.length;
        if (!n || t && !t.l && n < 5) return e || new Ie(0);
        var i = !e || t,
            s = !t || t.i;
        t || (t = {}), e || (e = new Ie(n * 3));
        var a = function(k) {
                var ve = e.length;
                if (k > ve) {
                    var Me = new Ie(Math.max(ve * 2, k));
                    Me.set(e), e = Me
                }
            },
            o = t.f || 0,
            l = t.p || 0,
            c = t.b || 0,
            u = t.l,
            h = t.d,
            f = t.m,
            d = t.n,
            p = n * 8;
        do {
            if (!u) {
                t.f = o = Gt(r, l, 1);
                var v = Gt(r, l + 1, 3);
                if (l += 3, v)
                    if (v == 1) u = Wh, h = jh, f = 9, d = 5;
                    else if (v == 2) {
                    var x = Gt(r, l, 31) + 257,
                        _ = Gt(r, l + 10, 15) + 4,
                        w = x + Gt(r, l + 5, 31) + 1;
                    l += 14;
                    for (var T = new Ie(w), M = new Ie(19), L = 0; L < _; ++L) M[is[L]] = Gt(r, l + L * 3, 7);
                    l += _ * 3;
                    for (var H = ga(M), P = (1 << H) - 1, R = kt(M, H, 1), L = 0; L < w;) {
                        var j = R[Gt(r, l, P)];
                        l += j & 15;
                        var y = j >>> 4;
                        if (y < 16) T[L++] = y;
                        else {
                            var I = 0,
                                F = 0;
                            for (y == 16 ? (F = 3 + Gt(r, l, 3), l += 2, I = T[L - 1]) : y == 17 ? (F = 3 + Gt(r, l, 7), l += 3) : y == 18 && (F = 11 + Gt(r, l, 127), l += 7); F--;) T[L++] = I
                        }
                    }
                    var B = T.subarray(0, x),
                        N = T.subarray(x);
                    f = ga(B), d = ga(N), u = kt(B, f, 1), h = kt(N, d, 1)
                } else throw "invalid block type";
                else {
                    var y = ss(l) + 4,
                        m = r[y - 4] | r[y - 3] << 8,
                        g = y + m;
                    if (g > n) {
                        if (s) throw "unexpected EOF";
                        break
                    }
                    i && a(c + m), e.set(r.subarray(y, g), c), t.b = c += m, t.p = l = g * 8;
                    continue
                }
                if (l > p) {
                    if (s) throw "unexpected EOF";
                    break
                }
            }
            i && a(c + 131072);
            for (var O = (1 << f) - 1, Y = (1 << d) - 1, re = l;; re = l) {
                var I = u[va(r, l) & O],
                    he = I >>> 4;
                if (l += I & 15, l > p) {
                    if (s) throw "unexpected EOF";
                    break
                }
                if (!I) throw "invalid length/literal";
                if (he < 256) e[c++] = he;
                else if (he == 256) {
                    re = l, u = null;
                    break
                } else {
                    var Q = he - 254;
                    if (he > 264) {
                        var L = he - 257,
                            ge = lr[L];
                        Q = Gt(r, l, (1 << ge) - 1) + il[L], l += ge
                    }
                    var X = h[va(r, l) & Y],
                        J = X >>> 4;
                    if (!X) throw "invalid distance";
                    l += X & 15;
                    var N = Hh[J];
                    if (J > 3) {
                        var ge = cr[J];
                        N += va(r, l) & (1 << ge) - 1, l += ge
                    }
                    if (l > p) {
                        if (s) throw "unexpected EOF";
                        break
                    }
                    i && a(c + 131072);
                    for (var se = c + Q; c < se; c += 4) e[c] = e[c - N], e[c + 1] = e[c + 1 - N], e[c + 2] = e[c + 2 - N], e[c + 3] = e[c + 3 - N];
                    c = se
                }
            }
            t.l = u, t.p = re, t.b = c, u && (o = 1, t.m = f, t.d = h, t.n = d)
        } while (!o);
        return c == e.length ? e : Ht(e, 0, c)
    },
    on = function(r, e, t) {
        t <<= e & 7;
        var n = e / 8 | 0;
        r[n] |= t, r[n + 1] |= t >>> 8
    },
    hr = function(r, e, t) {
        t <<= e & 7;
        var n = e / 8 | 0;
        r[n] |= t, r[n + 1] |= t >>> 8, r[n + 2] |= t >>> 16
    },
    ya = function(r, e) {
        for (var t = [], n = 0; n < r.length; ++n) r[n] && t.push({
            s: n,
            f: r[n]
        });
        var i = t.length,
            s = t.slice();
        if (!i) return [bn, 0];
        if (i == 1) {
            var a = new Ie(t[0].s + 1);
            return a[t[0].s] = 1, [a, 1]
        }
        t.sort(function(w, T) {
            return w.f - T.f
        }), t.push({
            s: -1,
            f: 25001
        });
        var o = t[0],
            l = t[1],
            c = 0,
            u = 1,
            h = 2;
        for (t[0] = {
                s: -1,
                f: o.f + l.f,
                l: o,
                r: l
            }; u != i - 1;) o = t[t[c].f < t[h].f ? c++ : h++], l = t[c != u && t[c].f < t[h].f ? c++ : h++], t[u++] = {
            s: -1,
            f: o.f + l.f,
            l: o,
            r: l
        };
        for (var f = s[0].s, n = 1; n < i; ++n) s[n].s > f && (f = s[n].s);
        var d = new mt(f + 1),
            p = xa(t[u - 1], d, 0);
        if (p > e) {
            var n = 0,
                v = 0,
                y = p - e,
                m = 1 << y;
            for (s.sort(function(T, M) {
                    return d[M.s] - d[T.s] || T.f - M.f
                }); n < i; ++n) {
                var g = s[n].s;
                if (d[g] > e) v += m - (1 << p - d[g]), d[g] = e;
                else break
            }
            for (v >>>= y; v > 0;) {
                var x = s[n].s;
                d[x] < e ? v -= 1 << e - d[x]++ - 1 : ++n
            }
            for (; n >= 0 && v; --n) {
                var _ = s[n].s;
                d[_] == e && (--d[_], ++v)
            }
            p = e
        }
        return [new Ie(d), p]
    },
    xa = function(r, e, t) {
        return r.s == -1 ? Math.max(xa(r.l, e, t + 1), xa(r.r, e, t + 1)) : e[r.s] = t
    },
    sl = function(r) {
        for (var e = r.length; e && !r[--e];);
        for (var t = new mt(++e), n = 0, i = r[0], s = 1, a = function(l) {
                t[n++] = l
            }, o = 1; o <= e; ++o)
            if (r[o] == i && o != e) ++s;
            else {
                if (!i && s > 2) {
                    for (; s > 138; s -= 138) a(32754);
                    s > 2 && (a(s > 10 ? s - 11 << 5 | 28690 : s - 3 << 5 | 12305), s = 0)
                } else if (s > 3) {
                    for (a(i), --s; s > 6; s -= 6) a(8304);
                    s > 2 && (a(s - 3 << 5 | 8208), s = 0)
                }
                for (; s--;) a(i);
                s = 1, i = r[o]
            }
        return [t.subarray(0, n), e]
    },
    fr = function(r, e) {
        for (var t = 0, n = 0; n < e.length; ++n) t += r[n] * e[n];
        return t
    },
    os = function(r, e, t) {
        var n = t.length,
            i = ss(e + 2);
        r[i] = n & 255, r[i + 1] = n >>> 8, r[i + 2] = r[i] ^ 255, r[i + 3] = r[i + 1] ^ 255;
        for (var s = 0; s < n; ++s) r[i + s + 4] = t[s];
        return (i + 4 + n) * 8
    },
    al = function(r, e, t, n, i, s, a, o, l, c, u) {
        on(e, u++, t), ++i[256];
        for (var h = ya(i, 15), f = h[0], d = h[1], p = ya(s, 15), v = p[0], y = p[1], m = sl(f), g = m[0], x = m[1], _ = sl(v), w = _[0], T = _[1], M = new mt(19), L = 0; L < g.length; ++L) M[g[L] & 31]++;
        for (var L = 0; L < w.length; ++L) M[w[L] & 31]++;
        for (var H = ya(M, 7), P = H[0], R = H[1], j = 19; j > 4 && !P[is[j - 1]]; --j);
        var I = c + 5 << 3,
            F = fr(i, wn) + fr(s, ur) + a,
            B = fr(i, f) + fr(s, v) + a + 14 + 3 * j + fr(M, P) + (2 * M[16] + 3 * M[17] + 7 * M[18]);
        if (I <= F && I <= B) return os(e, u, r.subarray(l, l + c));
        var N, O, Y, re;
        if (on(e, u, 1 + (B < F)), u += 2, B < F) {
            N = kt(f, d, 0), O = f, Y = kt(v, y, 0), re = v;
            var he = kt(P, R, 0);
            on(e, u, x - 257), on(e, u + 5, T - 1), on(e, u + 10, j - 4), u += 14;
            for (var L = 0; L < j; ++L) on(e, u + 3 * L, P[is[L]]);
            u += 3 * j;
            for (var Q = [g, w], ge = 0; ge < 2; ++ge)
                for (var X = Q[ge], L = 0; L < X.length; ++L) {
                    var J = X[L] & 31;
                    on(e, u, he[J]), u += P[J], J > 15 && (on(e, u, X[L] >>> 5 & 127), u += X[L] >>> 12)
                }
        } else N = Vh, O = wn, Y = Xh, re = ur;
        for (var L = 0; L < o; ++L)
            if (n[L] > 255) {
                var J = n[L] >>> 18 & 31;
                hr(e, u, N[J + 257]), u += O[J + 257], J > 7 && (on(e, u, n[L] >>> 23 & 31), u += lr[J]);
                var se = n[L] & 31;
                hr(e, u, Y[se]), u += re[se], se > 3 && (hr(e, u, n[L] >>> 5 & 8191), u += cr[se])
            } else hr(e, u, N[n[L]]), u += O[n[L]];
        return hr(e, u, N[256]), u + O[256]
    },
    qh = new Mn([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
    bn = new Ie(0),
    Yh = function(r, e, t, n, i, s) {
        var a = r.length,
            o = new Ie(n + a + 5 * (1 + Math.ceil(a / 7e3)) + i),
            l = o.subarray(n, o.length - i),
            c = 0;
        if (!e || a < 8)
            for (var u = 0; u <= a; u += 65535) {
                var h = u + 65535;
                h < a ? c = os(l, c, r.subarray(u, h)) : (l[u] = s, c = os(l, c, r.subarray(u, a)))
            } else {
                for (var f = qh[e - 1], d = f >>> 13, p = f & 8191, v = (1 << t) - 1, y = new mt(32768), m = new mt(v + 1), g = Math.ceil(t / 3), x = 2 * g, _ = function(ne) {
                        return (r[ne] ^ r[ne + 1] << g ^ r[ne + 2] << x) & v
                    }, w = new Mn(25e3), T = new mt(288), M = new mt(32), L = 0, H = 0, u = 0, P = 0, R = 0, j = 0; u < a; ++u) {
                    var I = _(u),
                        F = u & 32767,
                        B = m[I];
                    if (y[F] = B, m[I] = F, R <= u) {
                        var N = a - u;
                        if ((L > 7e3 || P > 24576) && N > 423) {
                            c = al(r, l, 0, w, T, M, H, P, j, u - j, c), P = L = H = 0, j = u;
                            for (var O = 0; O < 286; ++O) T[O] = 0;
                            for (var O = 0; O < 30; ++O) M[O] = 0
                        }
                        var Y = 2,
                            re = 0,
                            he = p,
                            Q = F - B & 32767;
                        if (N > 2 && I == _(u - Q))
                            for (var ge = Math.min(d, N) - 1, X = Math.min(32767, u), J = Math.min(258, N); Q <= X && --he && F != B;) {
                                if (r[u + Y] == r[u + Y - Q]) {
                                    for (var se = 0; se < J && r[u + se] == r[u + se - Q]; ++se);
                                    if (se > Y) {
                                        if (Y = se, re = Q, se > ge) break;
                                        for (var k = Math.min(Q, se - 2), ve = 0, O = 0; O < k; ++O) {
                                            var Me = u - Q + O + 32768 & 32767,
                                                fe = y[Me],
                                                me = Me - fe + 32768 & 32767;
                                            me > ve && (ve = me, B = Me)
                                        }
                                    }
                                }
                                F = B, B = y[F], Q += F - B + 32768 & 32767
                            }
                        if (re) {
                            w[P++] = 268435456 | ma[Y] << 18 | rl[re];
                            var Ee = ma[Y] & 31,
                                W = rl[re] & 31;
                            H += lr[Ee] + cr[W], ++T[257 + Ee], ++M[W], R = u + Y, ++L
                        } else w[P++] = r[u], ++T[r[u]]
                    }
                }
                c = al(r, l, s, w, T, M, H, P, j, u - j, c), !s && c & 7 && (c = os(l, c + 1, bn))
            }
        return Ht(o, 0, n + ss(c) + i)
    },
    Zh = function() {
        for (var r = new Mn(256), e = 0; e < 256; ++e) {
            for (var t = e, n = 9; --n;) t = (t & 1 && 3988292384) ^ t >>> 1;
            r[e] = t
        }
        return r
    }(),
    dr = function() {
        var r = -1;
        return {
            p: function(e) {
                for (var t = r, n = 0; n < e.length; ++n) t = Zh[t & 255 ^ e[n]] ^ t >>> 8;
                r = t
            },
            d: function() {
                return ~r
            }
        }
    },
    ol = function() {
        var r = 1,
            e = 0;
        return {
            p: function(t) {
                for (var n = r, i = e, s = t.length, a = 0; a != s;) {
                    for (var o = Math.min(a + 2655, s); a < o; ++a) i += n += t[a];
                    n = (n & 65535) + 15 * (n >> 16), i = (i & 65535) + 15 * (i >> 16)
                }
                r = n, e = i
            },
            d: function() {
                return r %= 65521, e %= 65521, (r & 255) << 24 | r >>> 8 << 16 | (e & 255) << 8 | e >>> 8
            }
        }
    },
    gi = function(r, e, t, n, i) {
        return Yh(r, e.level == null ? 6 : e.level, e.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(r.length))) * 1.5) : 12 + e.mem, t, n, !i)
    },
    ls = function(r, e) {
        var t = {};
        for (var n in r) t[n] = r[n];
        for (var n in e) t[n] = e[n];
        return t
    },
    Jh = function(r, e, t) {
        for (var n = r(), i = r.toString(), s = i.slice(i.indexOf("[") + 1, i.lastIndexOf("]")).replace(/ /g, "").split(","), a = 0; a < n.length; ++a) {
            var o = n[a],
                l = s[a];
            if (typeof o == "function") {
                e += ";" + l + "=";
                var c = o.toString();
                if (o.prototype)
                    if (c.indexOf("[native code]") != -1) {
                        var u = c.indexOf(" ", 8) + 1;
                        e += c.slice(u, c.indexOf("(", u))
                    } else {
                        e += c;
                        for (var h in o.prototype) e += ";" + l + ".prototype." + h + "=" + o.prototype[h].toString()
                    }
                else e += c
            } else t[l] = o
        }
        return [e, t]
    },
    _a = [],
    L_ = function(r) {
        var e = [];
        for (var t in r)(r[t] instanceof Ie || r[t] instanceof mt || r[t] instanceof Mn) && e.push((r[t] = new r[t].constructor(r[t])).buffer);
        return e
    },
    Kh = function(r, e, t, n) {
        var i;
        if (!_a[t]) {
            for (var s = "", a = {}, o = r.length - 1, l = 0; l < o; ++l) i = Jh(r[l], s, a), s = i[0], a = i[1];
            _a[t] = Jh(r[o], s, a)
        }
        var c = ls({}, _a[t][1]);
        return A_(_a[t][0] + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + e.toString() + "}", t, c, L_(c), n)
    },
    pr = function() {
        return [Ie, mt, Mn, lr, cr, is, il, Hh, Wh, jh, rs, kt, ga, Gt, va, ss, Ht, as, yr, qn, ll]
    },
    mr = function() {
        return [Ie, mt, Mn, lr, cr, is, ma, rl, Vh, wn, Xh, ur, rs, qh, bn, kt, on, hr, ya, xa, sl, fr, os, al, ss, Ht, Yh, gi, cs, qn]
    },
    $h = function() {
        return [ul, fl, Ve, dr, Zh]
    },
    Qh = function() {
        return [hl, nf]
    },
    ef = function() {
        return [dl, Ve, ol]
    },
    tf = function() {
        return [rf]
    },
    qn = function(r) {
        return postMessage(r, [r.buffer])
    },
    ll = function(r) {
        return r && r.size && new Ie(r.size)
    },
    gr = function(r, e, t, n, i, s) {
        var a = Kh(t, n, i, function(o, l) {
            a.terminate(), s(o, l)
        });
        return a.postMessage([r, e], e.consume ? [r.buffer] : []),
            function() {
                a.terminate()
            }
    },
    Vt = function(r) {
        return r.ondata = function(e, t) {
                return postMessage([e, t], [e.buffer])
            },
            function(e) {
                return r.push(e.data[0], e.data[1])
            }
    },
    vr = function(r, e, t, n, i) {
        var s, a = Kh(r, n, i, function(o, l) {
            o ? (a.terminate(), e.ondata.call(e, o)) : (l[1] && a.terminate(), e.ondata.call(e, o, l[0], l[1]))
        });
        a.postMessage(t), e.push = function(o, l) {
            if (s) throw "stream finished";
            if (!e.ondata) throw "no stream handler";
            a.postMessage([o, s = l], [o.buffer])
        }, e.terminate = function() {
            a.terminate()
        }
    },
    Et = function(r, e) {
        return r[e] | r[e + 1] << 8
    },
    st = function(r, e) {
        return (r[e] | r[e + 1] << 8 | r[e + 2] << 16 | r[e + 3] << 24) >>> 0
    },
    cl = function(r, e) {
        return st(r, e) + st(r, e + 4) * 4294967296
    },
    Ve = function(r, e, t) {
        for (; t; ++e) r[e] = t, t >>>= 8
    },
    ul = function(r, e) {
        var t = e.filename;
        if (r[0] = 31, r[1] = 139, r[2] = 8, r[8] = e.level < 2 ? 4 : e.level == 9 ? 2 : 0, r[9] = 3, e.mtime != 0 && Ve(r, 4, Math.floor(new Date(e.mtime || Date.now()) / 1e3)), t) {
            r[3] = 8;
            for (var n = 0; n <= t.length; ++n) r[n + 10] = t.charCodeAt(n)
        }
    },
    hl = function(r) {
        if (r[0] != 31 || r[1] != 139 || r[2] != 8) throw "invalid gzip data";
        var e = r[3],
            t = 10;
        e & 4 && (t += r[10] | (r[11] << 8) + 2);
        for (var n = (e >> 3 & 1) + (e >> 4 & 1); n > 0; n -= !r[t++]);
        return t + (e & 2)
    },
    nf = function(r) {
        var e = r.length;
        return (r[e - 4] | r[e - 3] << 8 | r[e - 2] << 16 | r[e - 1] << 24) >>> 0
    },
    fl = function(r) {
        return 10 + (r.filename && r.filename.length + 1 || 0)
    },
    dl = function(r, e) {
        var t = e.level,
            n = t == 0 ? 0 : t < 6 ? 1 : t == 9 ? 3 : 2;
        r[0] = 120, r[1] = n << 6 | (n ? 32 - 2 * n : 1)
    },
    rf = function(r) {
        if ((r[0] & 15) != 8 || r[0] >>> 4 > 7 || (r[0] << 8 | r[1]) % 31) throw "invalid zlib data";
        if (r[1] & 32) throw "invalid zlib data: preset dictionaries not supported"
    };

function pl(r, e) {
    return !e && typeof r == "function" && (e = r, r = {}), this.ondata = e, r
}
var ln = function() {
        function r(e, t) {
            !t && typeof e == "function" && (t = e, e = {}), this.ondata = t, this.o = e || {}
        }
        return r.prototype.p = function(e, t) {
            this.ondata(gi(e, this.o, 0, 0, !t), t)
        }, r.prototype.push = function(e, t) {
            if (this.d) throw "stream finished";
            if (!this.ondata) throw "no stream handler";
            this.d = t, this.p(e, t || !1)
        }, r
    }(),
    sf = function() {
        function r(e, t) {
            vr([mr, function() {
                return [Vt, ln]
            }], this, pl.call(this, e, t), function(n) {
                var i = new ln(n.data);
                onmessage = Vt(i)
            }, 6)
        }
        return r
    }();

function af(r, e, t) {
    if (t || (t = e, e = {}), typeof t != "function") throw "no callback";
    return gr(r, e, [mr], function(n) {
        return qn(cs(n.data[0], n.data[1]))
    }, 0, t)
}

function cs(r, e) {
    return gi(r, e || {}, 0, 0)
}
var Ct = function() {
        function r(e) {
            this.s = {}, this.p = new Ie(0), this.ondata = e
        }
        return r.prototype.e = function(e) {
            if (this.d) throw "stream finished";
            if (!this.ondata) throw "no stream handler";
            var t = this.p.length,
                n = new Ie(t + e.length);
            n.set(this.p), n.set(e, t), this.p = n
        }, r.prototype.c = function(e) {
            this.d = this.s.i = e || !1;
            var t = this.s.b,
                n = as(this.p, this.o, this.s);
            this.ondata(Ht(n, t, this.s.b), this.d), this.o = Ht(n, this.s.b - 32768), this.s.b = this.o.length, this.p = Ht(this.p, this.s.p / 8 | 0), this.s.p &= 7
        }, r.prototype.push = function(e, t) {
            this.e(e), this.c(t)
        }, r
    }(),
    ml = function() {
        function r(e) {
            this.ondata = e, vr([pr, function() {
                return [Vt, Ct]
            }], this, 0, function() {
                var t = new Ct;
                onmessage = Vt(t)
            }, 7)
        }
        return r
    }();

function gl(r, e, t) {
    if (t || (t = e, e = {}), typeof t != "function") throw "no callback";
    return gr(r, e, [pr], function(n) {
        return qn(yr(n.data[0], ll(n.data[1])))
    }, 1, t)
}

function yr(r, e) {
    return as(r, e)
}
var Ma = function() {
        function r(e, t) {
            this.c = dr(), this.l = 0, this.v = 1, ln.call(this, e, t)
        }
        return r.prototype.push = function(e, t) {
            ln.prototype.push.call(this, e, t)
        }, r.prototype.p = function(e, t) {
            this.c.p(e), this.l += e.length;
            var n = gi(e, this.o, this.v && fl(this.o), t && 8, !t);
            this.v && (ul(n, this.o), this.v = 0), t && (Ve(n, n.length - 8, this.c.d()), Ve(n, n.length - 4, this.l)), this.ondata(n, t)
        }, r
    }(),
    of = function() {
        function r(e, t) {
            vr([mr, $h, function() {
                return [Vt, ln, Ma]
            }], this, pl.call(this, e, t), function(n) {
                var i = new Ma(n.data);
                onmessage = Vt(i)
            }, 8)
        }
        return r
    }();

function lf(r, e, t) {
    if (t || (t = e, e = {}), typeof t != "function") throw "no callback";
    return gr(r, e, [mr, $h, function() {
        return [wa]
    }], function(n) {
        return qn(wa(n.data[0], n.data[1]))
    }, 2, t)
}

function wa(r, e) {
    e || (e = {});
    var t = dr(),
        n = r.length;
    t.p(r);
    var i = gi(r, e, fl(e), 8),
        s = i.length;
    return ul(i, e), Ve(i, s - 8, t.d()), Ve(i, s - 4, n), i
}
var ba = function() {
        function r(e) {
            this.v = 1, Ct.call(this, e)
        }
        return r.prototype.push = function(e, t) {
            if (Ct.prototype.e.call(this, e), this.v) {
                var n = this.p.length > 3 ? hl(this.p) : 4;
                if (n >= this.p.length && !t) return;
                this.p = this.p.subarray(n), this.v = 0
            }
            if (t) {
                if (this.p.length < 8) throw "invalid gzip stream";
                this.p = this.p.subarray(0, -8)
            }
            Ct.prototype.c.call(this, t)
        }, r
    }(),
    cf = function() {
        function r(e) {
            this.ondata = e, vr([pr, Qh, function() {
                return [Vt, Ct, ba]
            }], this, 0, function() {
                var t = new ba;
                onmessage = Vt(t)
            }, 9)
        }
        return r
    }();

function uf(r, e, t) {
    if (t || (t = e, e = {}), typeof t != "function") throw "no callback";
    return gr(r, e, [pr, Qh, function() {
        return [Sa]
    }], function(n) {
        return qn(Sa(n.data[0]))
    }, 3, t)
}

function Sa(r, e) {
    return as(r.subarray(hl(r), -8), e || new Ie(nf(r)))
}
var vl = function() {
        function r(e, t) {
            this.c = ol(), this.v = 1, ln.call(this, e, t)
        }
        return r.prototype.push = function(e, t) {
            ln.prototype.push.call(this, e, t)
        }, r.prototype.p = function(e, t) {
            this.c.p(e);
            var n = gi(e, this.o, this.v && 2, t && 4, !t);
            this.v && (dl(n, this.o), this.v = 0), t && Ve(n, n.length - 4, this.c.d()), this.ondata(n, t)
        }, r
    }(),
    R_ = function() {
        function r(e, t) {
            vr([mr, ef, function() {
                return [Vt, ln, vl]
            }], this, pl.call(this, e, t), function(n) {
                var i = new vl(n.data);
                onmessage = Vt(i)
            }, 10)
        }
        return r
    }();

function C_(r, e, t) {
    if (t || (t = e, e = {}), typeof t != "function") throw "no callback";
    return gr(r, e, [mr, ef, function() {
        return [yl]
    }], function(n) {
        return qn(yl(n.data[0], n.data[1]))
    }, 4, t)
}

function yl(r, e) {
    e || (e = {});
    var t = ol();
    t.p(r);
    var n = gi(r, e, 2, 4);
    return dl(n, e), Ve(n, n.length - 4, t.d()), n
}
var Ta = function() {
        function r(e) {
            this.v = 1, Ct.call(this, e)
        }
        return r.prototype.push = function(e, t) {
            if (Ct.prototype.e.call(this, e), this.v) {
                if (this.p.length < 2 && !t) return;
                this.p = this.p.subarray(2), this.v = 0
            }
            if (t) {
                if (this.p.length < 4) throw "invalid zlib stream";
                this.p = this.p.subarray(0, -4)
            }
            Ct.prototype.c.call(this, t)
        }, r
    }(),
    hf = function() {
        function r(e) {
            this.ondata = e, vr([pr, tf, function() {
                return [Vt, Ct, Ta]
            }], this, 0, function() {
                var t = new Ta;
                onmessage = Vt(t)
            }, 11)
        }
        return r
    }();

function ff(r, e, t) {
    if (t || (t = e, e = {}), typeof t != "function") throw "no callback";
    return gr(r, e, [pr, tf, function() {
        return [us]
    }], function(n) {
        return qn(us(n.data[0], ll(n.data[1])))
    }, 5, t)
}

function us(r, e) {
    return as((rf(r), r.subarray(2, -4)), e)
}
var df = function() {
        function r(e) {
            this.G = ba, this.I = Ct, this.Z = Ta, this.ondata = e
        }
        return r.prototype.push = function(e, t) {
            if (!this.ondata) throw "no stream handler";
            if (this.s) this.s.push(e, t);
            else {
                if (this.p && this.p.length) {
                    var n = new Ie(this.p.length + e.length);
                    n.set(this.p), n.set(e, this.p.length)
                } else this.p = e;
                if (this.p.length > 2) {
                    var i = this,
                        s = function() {
                            i.ondata.apply(i, arguments)
                        };
                    this.s = this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8 ? new this.G(s) : (this.p[0] & 15) != 8 || this.p[0] >> 4 > 7 || (this.p[0] << 8 | this.p[1]) % 31 ? new this.I(s) : new this.Z(s), this.s.push(this.p, t), this.p = null
                }
            }
        }, r
    }(),
    P_ = function() {
        function r(e) {
            this.G = cf, this.I = ml, this.Z = hf, this.ondata = e
        }
        return r.prototype.push = function(e, t) {
            df.prototype.push.call(this, e, t)
        }, r
    }();

function I_(r, e, t) {
    if (t || (t = e, e = {}), typeof t != "function") throw "no callback";
    return r[0] == 31 && r[1] == 139 && r[2] == 8 ? uf(r, e, t) : (r[0] & 15) != 8 || r[0] >> 4 > 7 || (r[0] << 8 | r[1]) % 31 ? gl(r, e, t) : ff(r, e, t)
}

function D_(r, e) {
    return r[0] == 31 && r[1] == 139 && r[2] == 8 ? Sa(r, e) : (r[0] & 15) != 8 || r[0] >> 4 > 7 || (r[0] << 8 | r[1]) % 31 ? yr(r, e) : us(r, e)
}
var xl = function(r, e, t, n) {
        for (var i in r) {
            var s = r[i],
                a = e + i;
            s instanceof Ie ? t[a] = [s, n] : Array.isArray(s) ? t[a] = [s[0], ls(n, s[1])] : xl(s, a + "/", t, n)
        }
    },
    pf = typeof TextEncoder != "undefined" && new TextEncoder,
    _l = typeof TextDecoder != "undefined" && new TextDecoder,
    mf = 0;
try {
    _l.decode(bn, {
        stream: !0
    }), mf = 1
} catch {}
var gf = function(r) {
        for (var e = "", t = 0;;) {
            var n = r[t++],
                i = (n > 127) + (n > 223) + (n > 239);
            if (t + i > r.length) return [e, Ht(r, t - 1)];
            i ? i == 3 ? (n = ((n & 15) << 18 | (r[t++] & 63) << 12 | (r[t++] & 63) << 6 | r[t++] & 63) - 65536, e += String.fromCharCode(55296 | n >> 10, 56320 | n & 1023)) : i & 1 ? e += String.fromCharCode((n & 31) << 6 | r[t++] & 63) : e += String.fromCharCode((n & 15) << 12 | (r[t++] & 63) << 6 | r[t++] & 63) : e += String.fromCharCode(n)
        }
    },
    F_ = function() {
        function r(e) {
            this.ondata = e, mf ? this.t = new TextDecoder : this.p = bn
        }
        return r.prototype.push = function(e, t) {
            if (!this.ondata) throw "no callback";
            if (t = !!t, this.t) {
                if (this.ondata(this.t.decode(e, {
                        stream: !0
                    }), t), t) {
                    if (this.t.decode().length) throw "invalid utf-8 data";
                    this.t = null
                }
                return
            }
            if (!this.p) throw "stream finished";
            var n = new Ie(this.p.length + e.length);
            n.set(this.p), n.set(e, this.p.length);
            var i = gf(n),
                s = i[0],
                a = i[1];
            if (t) {
                if (a.length) throw "invalid utf-8 data";
                this.p = null
            } else this.p = a;
            this.ondata(s, t)
        }, r
    }(),
    N_ = function() {
        function r(e) {
            this.ondata = e
        }
        return r.prototype.push = function(e, t) {
            if (!this.ondata) throw "no callback";
            if (this.d) throw "stream finished";
            this.ondata(Yn(e), this.d = t || !1)
        }, r
    }();

function Yn(r, e) {
    if (e) {
        for (var t = new Ie(r.length), n = 0; n < r.length; ++n) t[n] = r.charCodeAt(n);
        return t
    }
    if (pf) return pf.encode(r);
    for (var i = r.length, s = new Ie(r.length + (r.length >> 1)), a = 0, o = function(u) {
            s[a++] = u
        }, n = 0; n < i; ++n) {
        if (a + 5 > s.length) {
            var l = new Ie(a + 8 + (i - n << 1));
            l.set(s), s = l
        }
        var c = r.charCodeAt(n);
        c < 128 || e ? o(c) : c < 2048 ? (o(192 | c >> 6), o(128 | c & 63)) : c > 55295 && c < 57344 ? (c = 65536 + (c & 1023 << 10) | r.charCodeAt(++n) & 1023, o(240 | c >> 18), o(128 | c >> 12 & 63), o(128 | c >> 6 & 63), o(128 | c & 63)) : (o(224 | c >> 12), o(128 | c >> 6 & 63), o(128 | c & 63))
    }
    return Ht(s, 0, a)
}

function Ml(r, e) {
    if (e) {
        for (var t = "", n = 0; n < r.length; n += 16384) t += String.fromCharCode.apply(null, r.subarray(n, n + 16384));
        return t
    } else {
        if (_l) return _l.decode(r);
        var i = gf(r),
            s = i[0],
            a = i[1];
        if (a.length) throw "invalid utf-8 data";
        return s
    }
}
var vf = function(r) {
        return r == 1 ? 3 : r < 6 ? 2 : r == 9 ? 1 : 0
    },
    yf = function(r, e) {
        return e + 30 + Et(r, e + 26) + Et(r, e + 28)
    },
    xf = function(r, e, t) {
        var n = Et(r, e + 28),
            i = Ml(r.subarray(e + 46, e + 46 + n), !(Et(r, e + 8) & 2048)),
            s = e + 46 + n,
            a = st(r, e + 20),
            o = t && a == 4294967295 ? _f(r, s) : [a, st(r, e + 24), st(r, e + 42)],
            l = o[0],
            c = o[1],
            u = o[2];
        return [Et(r, e + 10), l, c, i, s + Et(r, e + 30) + Et(r, e + 32), u]
    },
    _f = function(r, e) {
        for (; Et(r, e) != 1; e += 4 + Et(r, e + 2));
        return [cl(r, e + 12), cl(r, e + 4), cl(r, e + 20)]
    },
    Zn = function(r) {
        var e = 0;
        if (r)
            for (var t in r) {
                var n = r[t].length;
                if (n > 65535) throw "extra field too long";
                e += n + 4
            }
        return e
    },
    xr = function(r, e, t, n, i, s, a, o) {
        var l = n.length,
            c = t.extra,
            u = o && o.length,
            h = Zn(c);
        Ve(r, e, a != null ? 33639248 : 67324752), e += 4, a != null && (r[e++] = 20, r[e++] = t.os), r[e] = 20, e += 2, r[e++] = t.flag << 1 | (s == null && 8), r[e++] = i && 8, r[e++] = t.compression & 255, r[e++] = t.compression >> 8;
        var f = new Date(t.mtime == null ? Date.now() : t.mtime),
            d = f.getFullYear() - 1980;
        if (d < 0 || d > 119) throw "date not in range 1980-2099";
        if (Ve(r, e, d << 25 | f.getMonth() + 1 << 21 | f.getDate() << 16 | f.getHours() << 11 | f.getMinutes() << 5 | f.getSeconds() >>> 1), e += 4, s != null && (Ve(r, e, t.crc), Ve(r, e + 4, s), Ve(r, e + 8, t.size)), Ve(r, e + 12, l), Ve(r, e + 14, h), e += 16, a != null && (Ve(r, e, u), Ve(r, e + 6, t.attrs), Ve(r, e + 10, a), e += 14), r.set(n, e), e += l, h)
            for (var p in c) {
                var v = c[p],
                    y = v.length;
                Ve(r, e, +p), Ve(r, e + 2, y), r.set(v, e + 4), e += 4 + y
            }
        return u && (r.set(o, e), e += u), e
    },
    wl = function(r, e, t, n, i) {
        Ve(r, e, 101010256), Ve(r, e + 8, t), Ve(r, e + 10, t), Ve(r, e + 12, n), Ve(r, e + 16, i)
    },
    hs = function() {
        function r(e) {
            this.filename = e, this.c = dr(), this.size = 0, this.compression = 0
        }
        return r.prototype.process = function(e, t) {
            this.ondata(null, e, t)
        }, r.prototype.push = function(e, t) {
            if (!this.ondata) throw "no callback - add to ZIP archive before pushing";
            this.c.p(e), this.size += e.length, t && (this.crc = this.c.d()), this.process(e, t || !1)
        }, r
    }(),
    O_ = function() {
        function r(e, t) {
            var n = this;
            t || (t = {}), hs.call(this, e), this.d = new ln(t, function(i, s) {
                n.ondata(null, i, s)
            }), this.compression = 8, this.flag = vf(t.level)
        }
        return r.prototype.process = function(e, t) {
            try {
                this.d.push(e, t)
            } catch (n) {
                this.ondata(n, null, t)
            }
        }, r.prototype.push = function(e, t) {
            hs.prototype.push.call(this, e, t)
        }, r
    }(),
    B_ = function() {
        function r(e, t) {
            var n = this;
            t || (t = {}), hs.call(this, e), this.d = new sf(t, function(i, s, a) {
                n.ondata(i, s, a)
            }), this.compression = 8, this.flag = vf(t.level), this.terminate = this.d.terminate
        }
        return r.prototype.process = function(e, t) {
            this.d.push(e, t)
        }, r.prototype.push = function(e, t) {
            hs.prototype.push.call(this, e, t)
        }, r
    }(),
    z_ = function() {
        function r(e) {
            this.ondata = e, this.u = [], this.d = 1
        }
        return r.prototype.add = function(e) {
            var t = this;
            if (this.d & 2) throw "stream finished";
            var n = Yn(e.filename),
                i = n.length,
                s = e.comment,
                a = s && Yn(s),
                o = i != e.filename.length || a && s.length != a.length,
                l = i + Zn(e.extra) + 30;
            if (i > 65535) throw "filename too long";
            var c = new Ie(l);
            xr(c, 0, e, n, o);
            var u = [c],
                h = function() {
                    for (var y = 0, m = u; y < m.length; y++) {
                        var g = m[y];
                        t.ondata(null, g, !1)
                    }
                    u = []
                },
                f = this.d;
            this.d = 0;
            var d = this.u.length,
                p = ls(e, {
                    f: n,
                    u: o,
                    o: a,
                    t: function() {
                        e.terminate && e.terminate()
                    },
                    r: function() {
                        if (h(), f) {
                            var y = t.u[d + 1];
                            y ? y.r() : t.d = 1
                        }
                        f = 1
                    }
                }),
                v = 0;
            e.ondata = function(y, m, g) {
                if (y) t.ondata(y, m, g), t.terminate();
                else if (v += m.length, u.push(m), g) {
                    var x = new Ie(16);
                    Ve(x, 0, 134695760), Ve(x, 4, e.crc), Ve(x, 8, v), Ve(x, 12, e.size), u.push(x), p.c = v, p.b = l + v + 16, p.crc = e.crc, p.size = e.size, f && p.r(), f = 1
                } else f && h()
            }, this.u.push(p)
        }, r.prototype.end = function() {
            var e = this;
            if (this.d & 2) throw this.d & 1 ? "stream finishing" : "stream finished";
            this.d ? this.e() : this.u.push({
                r: function() {
                    !(e.d & 1) || (e.u.splice(-1, 1), e.e())
                },
                t: function() {}
            }), this.d = 3
        }, r.prototype.e = function() {
            for (var e = 0, t = 0, n = 0, i = 0, s = this.u; i < s.length; i++) {
                var a = s[i];
                n += 46 + a.f.length + Zn(a.extra) + (a.o ? a.o.length : 0)
            }
            for (var o = new Ie(n + 22), l = 0, c = this.u; l < c.length; l++) {
                var a = c[l];
                xr(o, e, a, a.f, a.u, a.c, t, a.o), e += 46 + a.f.length + Zn(a.extra) + (a.o ? a.o.length : 0), t += a.b
            }
            wl(o, e, this.u.length, n, t), this.ondata(null, o, !0), this.d = 2
        }, r.prototype.terminate = function() {
            for (var e = 0, t = this.u; e < t.length; e++) {
                var n = t[e];
                n.t()
            }
            this.d = 2
        }, r
    }();

function U_(r, e, t) {
    if (t || (t = e, e = {}), typeof t != "function") throw "no callback";
    var n = {};
    xl(r, "", n, e);
    var i = Object.keys(n),
        s = i.length,
        a = 0,
        o = 0,
        l = s,
        c = new Array(s),
        u = [],
        h = function() {
            for (var v = 0; v < u.length; ++v) u[v]()
        },
        f = function() {
            var v = new Ie(o + 22),
                y = a,
                m = o - a;
            o = 0;
            for (var g = 0; g < l; ++g) {
                var x = c[g];
                try {
                    var _ = x.c.length;
                    xr(v, o, x, x.f, x.u, _);
                    var w = 30 + x.f.length + Zn(x.extra),
                        T = o + w;
                    v.set(x.c, T), xr(v, a, x, x.f, x.u, _, o, x.m), a += 16 + w + (x.m ? x.m.length : 0), o = T + _
                } catch (M) {
                    return t(M, null)
                }
            }
            wl(v, a, c.length, m, y), t(null, v)
        };
    s || f();
    for (var d = function(v) {
            var y = i[v],
                m = n[y],
                g = m[0],
                x = m[1],
                _ = dr(),
                w = g.length;
            _.p(g);
            var T = Yn(y),
                M = T.length,
                L = x.comment,
                H = L && Yn(L),
                P = H && H.length,
                R = Zn(x.extra),
                j = x.level == 0 ? 0 : 8,
                I = function(F, B) {
                    if (F) h(), t(F, null);
                    else {
                        var N = B.length;
                        c[v] = ls(x, {
                            size: w,
                            crc: _.d(),
                            c: B,
                            f: T,
                            m: H,
                            u: M != y.length || H && L.length != P,
                            compression: j
                        }), a += 30 + M + R + N, o += 76 + 2 * (M + R) + (P || 0) + N, --s || f()
                    }
                };
            if (M > 65535 && I("filename too long", null), !j) I(null, g);
            else if (w < 16e4) try {
                I(null, cs(g, x))
            } catch (F) {
                I(F, null)
            } else u.push(af(g, x, I))
        }, p = 0; p < l; ++p) d(p);
    return h
}

function k_(r, e) {
    e || (e = {});
    var t = {},
        n = [];
    xl(r, "", t, e);
    var i = 0,
        s = 0;
    for (var a in t) {
        var o = t[a],
            l = o[0],
            c = o[1],
            u = c.level == 0 ? 0 : 8,
            h = Yn(a),
            f = h.length,
            d = c.comment,
            p = d && Yn(d),
            v = p && p.length,
            y = Zn(c.extra);
        if (f > 65535) throw "filename too long";
        var m = u ? cs(l, c) : l,
            g = m.length,
            x = dr();
        x.p(l), n.push(ls(c, {
            size: l.length,
            crc: x.d(),
            c: m,
            f: h,
            m: p,
            u: f != a.length || p && d.length != v,
            o: i,
            compression: u
        })), i += 30 + f + y + g, s += 76 + 2 * (f + y) + (v || 0) + g
    }
    for (var _ = new Ie(s + 22), w = i, T = s - i, M = 0; M < n.length; ++M) {
        var h = n[M];
        xr(_, h.o, h, h.f, h.u, h.c.length);
        var L = 30 + h.f.length + Zn(h.extra);
        _.set(h.c, h.o + L), xr(_, i, h, h.f, h.u, h.c.length, h.o, h.m), i += 16 + L + (h.m ? h.m.length : 0)
    }
    return wl(_, i, n.length, T, w), _
}
var Mf = function() {
        function r() {}
        return r.prototype.push = function(e, t) {
            this.ondata(null, e, t)
        }, r.compression = 0, r
    }(),
    G_ = function() {
        function r() {
            var e = this;
            this.i = new Ct(function(t, n) {
                e.ondata(null, t, n)
            })
        }
        return r.prototype.push = function(e, t) {
            try {
                this.i.push(e, t)
            } catch (n) {
                this.ondata(n, e, t)
            }
        }, r.compression = 8, r
    }(),
    H_ = function() {
        function r(e, t) {
            var n = this;
            t < 32e4 ? this.i = new Ct(function(i, s) {
                n.ondata(null, i, s)
            }) : (this.i = new ml(function(i, s, a) {
                n.ondata(i, s, a)
            }), this.terminate = this.i.terminate)
        }
        return r.prototype.push = function(e, t) {
            this.i.terminate && (e = Ht(e, 0)), this.i.push(e, t)
        }, r.compression = 8, r
    }(),
    V_ = function() {
        function r(e) {
            this.onfile = e, this.k = [], this.o = {
                0: Mf
            }, this.p = bn
        }
        return r.prototype.push = function(e, t) {
            var n = this;
            if (!this.onfile) throw "no callback";
            if (!this.p) throw "stream finished";
            if (this.c > 0) {
                var i = Math.min(this.c, e.length),
                    s = e.subarray(0, i);
                if (this.c -= i, this.d ? this.d.push(s, !this.c) : this.k[0].push(s), e = e.subarray(i), e.length) return this.push(e, t)
            } else {
                var a = 0,
                    o = 0,
                    l = void 0,
                    c = void 0;
                this.p.length ? e.length ? (c = new Ie(this.p.length + e.length), c.set(this.p), c.set(e, this.p.length)) : c = this.p : c = e;
                for (var u = c.length, h = this.c, f = h && this.d, d = function() {
                        var m, g = st(c, o);
                        if (g == 67324752) {
                            a = 1, l = o, p.d = null, p.c = 0;
                            var x = Et(c, o + 6),
                                _ = Et(c, o + 8),
                                w = x & 2048,
                                T = x & 8,
                                M = Et(c, o + 26),
                                L = Et(c, o + 28);
                            if (u > o + 30 + M + L) {
                                var H = [];
                                p.k.unshift(H), a = 2;
                                var P = st(c, o + 18),
                                    R = st(c, o + 22),
                                    j = Ml(c.subarray(o + 30, o += 30 + M), !w);
                                P == 4294967295 ? (m = T ? [-2] : _f(c, o), P = m[0], R = m[1]) : T && (P = -1), o += L, p.c = P;
                                var I, F = {
                                    name: j,
                                    compression: _,
                                    start: function() {
                                        if (!F.ondata) throw "no callback";
                                        if (!P) F.ondata(null, bn, !0);
                                        else {
                                            var B = n.o[_];
                                            if (!B) throw "unknown compression type " + _;
                                            I = P < 0 ? new B(j) : new B(j, P, R), I.ondata = function(re, he, Q) {
                                                F.ondata(re, he, Q)
                                            };
                                            for (var N = 0, O = H; N < O.length; N++) {
                                                var Y = O[N];
                                                I.push(Y, !1)
                                            }
                                            n.k[0] == H && n.c ? n.d = I : I.push(bn, !0)
                                        }
                                    },
                                    terminate: function() {
                                        I && I.terminate && I.terminate()
                                    }
                                };
                                P >= 0 && (F.size = P, F.originalSize = R), p.onfile(F)
                            }
                            return "break"
                        } else if (h) {
                            if (g == 134695760) return l = o += 12 + (h == -2 && 8), a = 3, p.c = 0, "break";
                            if (g == 33639248) return l = o -= 4, a = 3, p.c = 0, "break"
                        }
                    }, p = this; o < u - 4; ++o) {
                    var v = d();
                    if (v === "break") break
                }
                if (this.p = bn, h < 0) {
                    var y = a ? c.subarray(0, l - 12 - (h == -2 && 8) - (st(c, l - 16) == 134695760 && 4)) : c.subarray(0, o);
                    f ? f.push(y, !!a) : this.k[+(a == 2)].push(y)
                }
                if (a & 2) return this.push(c.subarray(o), t);
                this.p = c.subarray(o)
            }
            if (t) {
                if (this.c) throw "invalid zip file";
                this.p = null
            }
        }, r.prototype.register = function(e) {
            this.o[e.compression] = e
        }, r
    }();

function W_(r, e) {
    if (typeof e != "function") throw "no callback";
    for (var t = [], n = function() {
            for (var f = 0; f < t.length; ++f) t[f]()
        }, i = {}, s = r.length - 22; st(r, s) != 101010256; --s)
        if (!s || r.length - s > 65558) {
            e("invalid zip file", null);
            return
        }
    var a = Et(r, s + 8);
    a || e(null, {});
    var o = a,
        l = st(r, s + 16),
        c = l == 4294967295;
    if (c) {
        if (s = st(r, s - 12), st(r, s) != 101075792) {
            e("invalid zip file", null);
            return
        }
        o = a = st(r, s + 32), l = st(r, s + 48)
    }
    for (var u = function(f) {
            var d = xf(r, l, c),
                p = d[0],
                v = d[1],
                y = d[2],
                m = d[3],
                g = d[4],
                x = d[5],
                _ = yf(r, x);
            l = g;
            var w = function(M, L) {
                M ? (n(), e(M, null)) : (i[m] = L, --a || e(null, i))
            };
            if (!p) w(null, Ht(r, _, _ + v));
            else if (p == 8) {
                var T = r.subarray(_, _ + v);
                if (v < 32e4) try {
                    w(null, yr(T, new Ie(y)))
                } catch (M) {
                    w(M, null)
                } else t.push(gl(T, {
                    size: y
                }, w))
            } else w("unknown compression type " + p, null)
        }, h = 0; h < o; ++h) u();
    return n
}

function X_(r) {
    for (var e = {}, t = r.length - 22; st(r, t) != 101010256; --t)
        if (!t || r.length - t > 65558) throw "invalid zip file";
    var n = Et(r, t + 8);
    if (!n) return {};
    var i = st(r, t + 16),
        s = i == 4294967295;
    if (s) {
        if (t = st(r, t - 12), st(r, t) != 101075792) throw "invalid zip file";
        n = st(r, t + 32), i = st(r, t + 48)
    }
    for (var a = 0; a < n; ++a) {
        var o = xf(r, i, s),
            l = o[0],
            c = o[1],
            u = o[2],
            h = o[3],
            f = o[4],
            d = o[5],
            p = yf(r, d);
        if (i = f, !l) e[h] = Ht(r, p, p + c);
        else if (l == 8) e[h] = yr(r.subarray(p, p + c), new Ie(u));
        else throw "unknown compression type " + l
    }
    return e
}
var j_ = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    Deflate: ln,
    AsyncDeflate: sf,
    deflate: af,
    deflateSync: cs,
    Inflate: Ct,
    AsyncInflate: ml,
    inflate: gl,
    inflateSync: yr,
    Gzip: Ma,
    AsyncGzip: of ,
    gzip: lf,
    gzipSync: wa,
    Gunzip: ba,
    AsyncGunzip: cf,
    gunzip: uf,
    gunzipSync: Sa,
    Zlib: vl,
    AsyncZlib: R_,
    zlib: C_,
    zlibSync: yl,
    Unzlib: Ta,
    AsyncUnzlib: hf,
    unzlib: ff,
    unzlibSync: us,
    compress: lf,
    AsyncCompress: of ,
    compressSync: wa,
    Compress: Ma,
    Decompress: df,
    AsyncDecompress: P_,
    decompress: I_,
    decompressSync: D_,
    DecodeUTF8: F_,
    EncodeUTF8: N_,
    strToU8: Yn,
    strFromU8: Ml,
    ZipPassThrough: hs,
    ZipDeflate: O_,
    AsyncZipDeflate: B_,
    Zip: z_,
    zip: U_,
    zipSync: k_,
    UnzipPassThrough: Mf,
    UnzipInflate: G_,
    AsyncUnzipInflate: H_,
    Unzip: V_,
    unzip: W_,
    unzipSync: X_
});

function wf(r, e, t) {
    const n = t.length - r - 1;
    if (e >= t[n]) return n - 1;
    if (e <= t[r]) return r;
    let i = r,
        s = n,
        a = Math.floor((i + s) / 2);
    for (; e < t[a] || e >= t[a + 1];) e < t[a] ? s = a : i = a, a = Math.floor((i + s) / 2);
    return a
}

function q_(r, e, t, n) {
    const i = [],
        s = [],
        a = [];
    i[0] = 1;
    for (let o = 1; o <= t; ++o) {
        s[o] = e - n[r + 1 - o], a[o] = n[r + o] - e;
        let l = 0;
        for (let c = 0; c < o; ++c) {
            const u = a[c + 1],
                h = s[o - c],
                f = i[c] / (u + h);
            i[c] = l + u * f, l = h * f
        }
        i[o] = l
    }
    return i
}

function Y_(r, e, t, n) {
    const i = wf(r, n, e),
        s = q_(i, n, r, e),
        a = new Ge(0, 0, 0, 0);
    for (let o = 0; o <= r; ++o) {
        const l = t[i - r + o],
            c = s[o],
            u = l.w * c;
        a.x += l.x * u, a.y += l.y * u, a.z += l.z * u, a.w += l.w * c
    }
    return a
}

function Z_(r, e, t, n, i) {
    const s = [];
    for (let h = 0; h <= t; ++h) s[h] = 0;
    const a = [];
    for (let h = 0; h <= n; ++h) a[h] = s.slice(0);
    const o = [];
    for (let h = 0; h <= t; ++h) o[h] = s.slice(0);
    o[0][0] = 1;
    const l = s.slice(0),
        c = s.slice(0);
    for (let h = 1; h <= t; ++h) {
        l[h] = e - i[r + 1 - h], c[h] = i[r + h] - e;
        let f = 0;
        for (let d = 0; d < h; ++d) {
            const p = c[d + 1],
                v = l[h - d];
            o[h][d] = p + v;
            const y = o[d][h - 1] / o[h][d];
            o[d][h] = f + p * y, f = v * y
        }
        o[h][h] = f
    }
    for (let h = 0; h <= t; ++h) a[0][h] = o[h][t];
    for (let h = 0; h <= t; ++h) {
        let f = 0,
            d = 1;
        const p = [];
        for (let v = 0; v <= t; ++v) p[v] = s.slice(0);
        p[0][0] = 1;
        for (let v = 1; v <= n; ++v) {
            let y = 0;
            const m = h - v,
                g = t - v;
            h >= v && (p[d][0] = p[f][0] / o[g + 1][m], y = p[d][0] * o[m][g]);
            const x = m >= -1 ? 1 : -m,
                _ = h - 1 <= g ? v - 1 : t - h;
            for (let T = x; T <= _; ++T) p[d][T] = (p[f][T] - p[f][T - 1]) / o[g + 1][m + T], y += p[d][T] * o[m + T][g];
            h <= g && (p[d][v] = -p[f][v - 1] / o[g + 1][h], y += p[d][v] * o[h][g]), a[v][h] = y;
            const w = f;
            f = d, d = w
        }
    }
    let u = t;
    for (let h = 1; h <= n; ++h) {
        for (let f = 0; f <= t; ++f) a[h][f] *= u;
        u *= t - h
    }
    return a
}

function J_(r, e, t, n, i) {
    const s = i < r ? i : r,
        a = [],
        o = wf(r, n, e),
        l = Z_(o, n, r, s, e),
        c = [];
    for (let u = 0; u < t.length; ++u) {
        const h = t[u].clone(),
            f = h.w;
        h.x *= f, h.y *= f, h.z *= f, c[u] = h
    }
    for (let u = 0; u <= s; ++u) {
        const h = c[o - r].clone().multiplyScalar(l[u][0]);
        for (let f = 1; f <= r; ++f) h.add(c[o - r + f].clone().multiplyScalar(l[u][f]));
        a[u] = h
    }
    for (let u = s + 1; u <= i + 1; ++u) a[u] = new Ge(0, 0, 0);
    return a
}

function K_(r, e) {
    let t = 1;
    for (let i = 2; i <= r; ++i) t *= i;
    let n = 1;
    for (let i = 2; i <= e; ++i) n *= i;
    for (let i = 2; i <= r - e; ++i) n *= i;
    return t / n
}

function $_(r) {
    const e = r.length,
        t = [],
        n = [];
    for (let s = 0; s < e; ++s) {
        const a = r[s];
        t[s] = new A(a.x, a.y, a.z), n[s] = a.w
    }
    const i = [];
    for (let s = 0; s < e; ++s) {
        const a = t[s].clone();
        for (let o = 1; o <= s; ++o) a.sub(i[s - o].clone().multiplyScalar(K_(s, o) * n[o]));
        i[s] = a.divideScalar(n[0])
    }
    return i
}

function Q_(r, e, t, n, i) {
    const s = J_(r, e, t, n, i);
    return $_(s)
}
class bf extends Nt {
    constructor(e, t, n, i, s) {
        super();
        this.degree = e, this.knots = t, this.controlPoints = [], this.startKnot = i || 0, this.endKnot = s || this.knots.length - 1;
        for (let a = 0; a < n.length; ++a) {
            const o = n[a];
            this.controlPoints[a] = new Ge(o.x, o.y, o.z, o.w)
        }
    }
    getPoint(e, t = new A) {
        const n = t,
            i = this.knots[this.startKnot] + e * (this.knots[this.endKnot] - this.knots[this.startKnot]),
            s = Y_(this.degree, this.knots, this.controlPoints, i);
        return s.w !== 1 && s.divideScalar(s.w), n.set(s.x, s.y, s.z)
    }
    getTangent(e, t = new A) {
        const n = t,
            i = this.knots[0] + e * (this.knots[this.knots.length - 1] - this.knots[0]),
            s = Q_(this.degree, this.knots, this.controlPoints, i, 1);
        return n.copy(s[1]).normalize(), n
    }
}
let Pe, at, Pt;
class WM extends Kt {
    constructor(e) {
        super(e)
    }
    load(e, t, n, i) {
        const s = this,
            a = s.path === "" ? xn.extractUrlBase(e) : s.path,
            o = new or(this.manager);
        o.setPath(s.path), o.setResponseType("arraybuffer"), o.setRequestHeader(s.requestHeader), o.setWithCredentials(s.withCredentials), o.load(e, function(l) {
            try {
                t(s.parse(l, a))
            } catch (c) {
                i ? i(c) : console.error(c), s.manager.itemError(e)
            }
        }, n, i)
    }
    parse(e, t) {
        if (sM(e)) Pe = new rM().parse(e);
        else {
            const i = Rf(e);
            if (!aM(i)) throw new Error("THREE.FBXLoader: Unknown format.");
            if (Ef(i) < 7e3) throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + Ef(i));
            Pe = new iM().parse(i)
        }
        const n = new Ho(this.manager).setPath(this.resourcePath || t).setCrossOrigin(this.crossOrigin);
        return new eM(n, this.manager).parse(Pe)
    }
}
class eM {
    constructor(e, t) {
        this.textureLoader = e, this.manager = t
    }
    parse() {
        at = this.parseConnections();
        const e = this.parseImages(),
            t = this.parseTextures(e),
            n = this.parseMaterials(t),
            i = this.parseDeformers(),
            s = new tM().parse(i);
        return this.parseScene(i, s, n), Pt
    }
    parseConnections() {
        const e = new Map;
        return "Connections" in Pe && Pe.Connections.connections.forEach(function(n) {
            const i = n[0],
                s = n[1],
                a = n[2];
            e.has(i) || e.set(i, {
                parents: [],
                children: []
            });
            const o = {
                ID: s,
                relationship: a
            };
            e.get(i).parents.push(o), e.has(s) || e.set(s, {
                parents: [],
                children: []
            });
            const l = {
                ID: i,
                relationship: a
            };
            e.get(s).children.push(l)
        }), e
    }
    parseImages() {
        const e = {},
            t = {};
        if ("Video" in Pe.Objects) {
            const n = Pe.Objects.Video;
            for (const i in n) {
                const s = n[i],
                    a = parseInt(i);
                if (e[a] = s.RelativeFilename || s.Filename, "Content" in s) {
                    const o = s.Content instanceof ArrayBuffer && s.Content.byteLength > 0,
                        l = typeof s.Content == "string" && s.Content !== "";
                    if (o || l) {
                        const c = this.parseImage(n[i]);
                        t[s.RelativeFilename || s.Filename] = c
                    }
                }
            }
        }
        for (const n in e) {
            const i = e[n];
            t[i] !== void 0 ? e[n] = t[i] : e[n] = e[n].split("\\").pop()
        }
        return e
    }
    parseImage(e) {
        const t = e.Content,
            n = e.RelativeFilename || e.Filename,
            i = n.slice(n.lastIndexOf(".") + 1).toLowerCase();
        let s;
        switch (i) {
            case "bmp":
                s = "image/bmp";
                break;
            case "jpg":
            case "jpeg":
                s = "image/jpeg";
                break;
            case "png":
                s = "image/png";
                break;
            case "tif":
                s = "image/tiff";
                break;
            case "tga":
                this.manager.getHandler(".tga") === null && console.warn("FBXLoader: TGA loader not found, skipping ", n), s = "image/tga";
                break;
            default:
                console.warn('FBXLoader: Image type "' + i + '" is not supported.');
                return
        }
        if (typeof t == "string") return "data:" + s + ";base64," + t; {
            const a = new Uint8Array(t);
            return window.URL.createObjectURL(new Blob([a], {
                type: s
            }))
        }
    }
    parseTextures(e) {
        const t = new Map;
        if ("Texture" in Pe.Objects) {
            const n = Pe.Objects.Texture;
            for (const i in n) {
                const s = this.parseTexture(n[i], e);
                t.set(parseInt(i), s)
            }
        }
        return t
    }
    parseTexture(e, t) {
        const n = this.loadTexture(e, t);
        n.ID = e.id, n.name = e.attrName;
        const i = e.WrapModeU,
            s = e.WrapModeV,
            a = i !== void 0 ? i.value : 0,
            o = s !== void 0 ? s.value : 0;
        if (n.wrapS = a === 0 ? An : vt, n.wrapT = o === 0 ? An : vt, "Scaling" in e) {
            const l = e.Scaling.value;
            n.repeat.x = l[0], n.repeat.y = l[1]
        }
        return n
    }
    loadTexture(e, t) {
        let n;
        const i = this.textureLoader.path,
            s = at.get(e.id).children;
        s !== void 0 && s.length > 0 && t[s[0].ID] !== void 0 && (n = t[s[0].ID], (n.indexOf("blob:") === 0 || n.indexOf("data:") === 0) && this.textureLoader.setPath(void 0));
        let a;
        const o = e.FileName.slice(-3).toLowerCase();
        if (o === "tga") {
            const l = this.manager.getHandler(".tga");
            l === null ? (console.warn("FBXLoader: TGA loader not found, creating placeholder texture for", e.RelativeFilename), a = new it) : (l.setPath(this.textureLoader.path), a = l.load(n))
        } else o === "psd" ? (console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for", e.RelativeFilename), a = new it) : a = this.textureLoader.load(n);
        return this.textureLoader.setPath(i), a
    }
    parseMaterials(e) {
        const t = new Map;
        if ("Material" in Pe.Objects) {
            const n = Pe.Objects.Material;
            for (const i in n) {
                const s = this.parseMaterial(n[i], e);
                s !== null && t.set(parseInt(i), s)
            }
        }
        return t
    }
    parseMaterial(e, t) {
        const n = e.id,
            i = e.attrName;
        let s = e.ShadingModel;
        if (typeof s == "object" && (s = s.value), !at.has(n)) return null;
        const a = this.parseParameters(e, t, n);
        let o;
        switch (s.toLowerCase()) {
            case "phong":
                o = new ua;
                break;
            case "lambert":
                o = new oh;
                break;
            default:
                console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', s), o = new ua;
                break
        }
        return o.setValues(a), o.name = i, o
    }
    parseParameters(e, t, n) {
        const i = {};
        e.BumpFactor && (i.bumpScale = e.BumpFactor.value), e.Diffuse ? i.color = new ue().fromArray(e.Diffuse.value) : e.DiffuseColor && (e.DiffuseColor.type === "Color" || e.DiffuseColor.type === "ColorRGB") && (i.color = new ue().fromArray(e.DiffuseColor.value)), e.DisplacementFactor && (i.displacementScale = e.DisplacementFactor.value), e.Emissive ? i.emissive = new ue().fromArray(e.Emissive.value) : e.EmissiveColor && (e.EmissiveColor.type === "Color" || e.EmissiveColor.type === "ColorRGB") && (i.emissive = new ue().fromArray(e.EmissiveColor.value)), e.EmissiveFactor && (i.emissiveIntensity = parseFloat(e.EmissiveFactor.value)), e.Opacity && (i.opacity = parseFloat(e.Opacity.value)), i.opacity < 1 && (i.transparent = !0), e.ReflectionFactor && (i.reflectivity = e.ReflectionFactor.value), e.Shininess && (i.shininess = e.Shininess.value), e.Specular ? i.specular = new ue().fromArray(e.Specular.value) : e.SpecularColor && e.SpecularColor.type === "Color" && (i.specular = new ue().fromArray(e.SpecularColor.value));
        const s = this;
        return at.get(n).children.forEach(function(a) {
            const o = a.relationship;
            switch (o) {
                case "Bump":
                    i.bumpMap = s.getTexture(t, a.ID);
                    break;
                case "Maya|TEX_ao_map":
                    i.aoMap = s.getTexture(t, a.ID);
                    break;
                case "DiffuseColor":
                case "Maya|TEX_color_map":
                    i.map = s.getTexture(t, a.ID), i.map !== void 0 && (i.map.encoding = Rt);
                    break;
                case "DisplacementColor":
                    i.displacementMap = s.getTexture(t, a.ID);
                    break;
                case "EmissiveColor":
                    i.emissiveMap = s.getTexture(t, a.ID), i.emissiveMap !== void 0 && (i.emissiveMap.encoding = Rt);
                    break;
                case "NormalMap":
                case "Maya|TEX_normal_map":
                    i.normalMap = s.getTexture(t, a.ID);
                    break;
                case "ReflectionColor":
                    i.envMap = s.getTexture(t, a.ID), i.envMap !== void 0 && (i.envMap.mapping = vs, i.envMap.encoding = Rt);
                    break;
                case "SpecularColor":
                    i.specularMap = s.getTexture(t, a.ID), i.specularMap !== void 0 && (i.specularMap.encoding = Rt);
                    break;
                case "TransparentColor":
                case "TransparencyFactor":
                    i.alphaMap = s.getTexture(t, a.ID), i.transparent = !0;
                    break;
                case "AmbientColor":
                case "ShininessExponent":
                case "SpecularFactor":
                case "VectorDisplacementColor":
                default:
                    console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.", o);
                    break
            }
        }), i
    }
    getTexture(e, t) {
        return "LayeredTexture" in Pe.Objects && t in Pe.Objects.LayeredTexture && (console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."), t = at.get(t).children[0].ID), e.get(t)
    }
    parseDeformers() {
        const e = {},
            t = {};
        if ("Deformer" in Pe.Objects) {
            const n = Pe.Objects.Deformer;
            for (const i in n) {
                const s = n[i],
                    a = at.get(parseInt(i));
                if (s.attrType === "Skin") {
                    const o = this.parseSkeleton(a, n);
                    o.ID = i, a.parents.length > 1 && console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."), o.geometryID = a.parents[0].ID, e[i] = o
                } else if (s.attrType === "BlendShape") {
                    const o = {
                        id: i
                    };
                    o.rawTargets = this.parseMorphTargets(a, n), o.id = i, a.parents.length > 1 && console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."), t[i] = o
                }
            }
        }
        return {
            skeletons: e,
            morphTargets: t
        }
    }
    parseSkeleton(e, t) {
        const n = [];
        return e.children.forEach(function(i) {
            const s = t[i.ID];
            if (s.attrType !== "Cluster") return;
            const a = {
                ID: i.ID,
                indices: [],
                weights: [],
                transformLink: new ae().fromArray(s.TransformLink.a)
            };
            "Indexes" in s && (a.indices = s.Indexes.a, a.weights = s.Weights.a), n.push(a)
        }), {
            rawBones: n,
            bones: []
        }
    }
    parseMorphTargets(e, t) {
        const n = [];
        for (let i = 0; i < e.children.length; i++) {
            const s = e.children[i],
                a = t[s.ID],
                o = {
                    name: a.attrName,
                    initialWeight: a.DeformPercent,
                    id: a.id,
                    fullWeights: a.FullWeights.a
                };
            if (a.attrType !== "BlendShapeChannel") return;
            o.geoID = at.get(parseInt(s.ID)).children.filter(function(l) {
                return l.relationship === void 0
            })[0].ID, n.push(o)
        }
        return n
    }
    parseScene(e, t, n) {
        Pt = new rn;
        const i = this.parseModels(e.skeletons, t, n),
            s = Pe.Objects.Model,
            a = this;
        i.forEach(function(l) {
            const c = s[l.ID];
            a.setLookAtProperties(l, c), at.get(l.ID).parents.forEach(function(h) {
                const f = i.get(h.ID);
                f !== void 0 && f.add(l)
            }), l.parent === null && Pt.add(l)
        }), this.bindSkeleton(e.skeletons, t, i), this.createAmbientLight(), Pt.traverse(function(l) {
            if (l.userData.transformData) {
                l.parent && (l.userData.transformData.parentMatrix = l.parent.matrix, l.userData.transformData.parentMatrixWorld = l.parent.matrixWorld);
                const c = Af(l.userData.transformData);
                l.applyMatrix4(c), l.updateWorldMatrix()
            }
        });
        const o = new nM().parse();
        Pt.children.length === 1 && Pt.children[0].isGroup && (Pt.children[0].animations = o, Pt = Pt.children[0]), Pt.animations = o
    }
    parseModels(e, t, n) {
        const i = new Map,
            s = Pe.Objects.Model;
        for (const a in s) {
            const o = parseInt(a),
                l = s[a],
                c = at.get(o);
            let u = this.buildSkeleton(c, e, o, l.attrName);
            if (!u) {
                switch (l.attrType) {
                    case "Camera":
                        u = this.createCamera(c);
                        break;
                    case "Light":
                        u = this.createLight(c);
                        break;
                    case "Mesh":
                        u = this.createMesh(c, t, n);
                        break;
                    case "NurbsCurve":
                        u = this.createCurve(c, t);
                        break;
                    case "LimbNode":
                    case "Root":
                        u = new Vr;
                        break;
                    case "Null":
                    default:
                        u = new rn;
                        break
                }
                u.name = l.attrName ? Be.sanitizeNodeName(l.attrName) : "", u.ID = o
            }
            this.getTransformData(u, l), i.set(o, u)
        }
        return i
    }
    buildSkeleton(e, t, n, i) {
        let s = null;
        return e.parents.forEach(function(a) {
            for (const o in t) {
                const l = t[o];
                l.rawBones.forEach(function(c, u) {
                    if (c.ID === a.ID) {
                        const h = s;
                        s = new Vr, s.matrixWorld.copy(c.transformLink), s.name = i ? Be.sanitizeNodeName(i) : "", s.ID = n, l.bones[u] = s, h !== null && s.add(h)
                    }
                })
            }
        }), s
    }
    createCamera(e) {
        let t, n;
        if (e.children.forEach(function(i) {
                const s = Pe.Objects.NodeAttribute[i.ID];
                s !== void 0 && (n = s)
            }), n === void 0) t = new Ne;
        else {
            let i = 0;
            n.CameraProjectionType !== void 0 && n.CameraProjectionType.value === 1 && (i = 1);
            let s = 1;
            n.NearPlane !== void 0 && (s = n.NearPlane.value / 1e3);
            let a = 1e3;
            n.FarPlane !== void 0 && (a = n.FarPlane.value / 1e3);
            let o = window.innerWidth,
                l = window.innerHeight;
            n.AspectWidth !== void 0 && n.AspectHeight !== void 0 && (o = n.AspectWidth.value, l = n.AspectHeight.value);
            const c = o / l;
            let u = 45;
            n.FieldOfView !== void 0 && (u = n.FieldOfView.value);
            const h = n.FocalLength ? n.FocalLength.value : null;
            switch (i) {
                case 0:
                    t = new wt(u, c, s, a), h !== null && t.setFocalLength(h);
                    break;
                case 1:
                    t = new Br(-o / 2, o / 2, l / 2, -l / 2, s, a);
                    break;
                default:
                    console.warn("THREE.FBXLoader: Unknown camera type " + i + "."), t = new Ne;
                    break
            }
        }
        return t
    }
    createLight(e) {
        let t, n;
        if (e.children.forEach(function(i) {
                const s = Pe.Objects.NodeAttribute[i.ID];
                s !== void 0 && (n = s)
            }), n === void 0) t = new Ne;
        else {
            let i;
            n.LightType === void 0 ? i = 0 : i = n.LightType.value;
            let s = 16777215;
            n.Color !== void 0 && (s = new ue().fromArray(n.Color.value));
            let a = n.Intensity === void 0 ? 1 : n.Intensity.value / 100;
            n.CastLightOnObject !== void 0 && n.CastLightOnObject.value === 0 && (a = 0);
            let o = 0;
            n.FarAttenuationEnd !== void 0 && (n.EnableFarAttenuation !== void 0 && n.EnableFarAttenuation.value === 0 ? o = 0 : o = n.FarAttenuationEnd.value);
            const l = 1;
            switch (i) {
                case 0:
                    t = new fa(s, a, o, l);
                    break;
                case 1:
                    t = new jo(s, a);
                    break;
                case 2:
                    let c = Math.PI / 3;
                    n.InnerAngle !== void 0 && (c = jt.degToRad(n.InnerAngle.value));
                    let u = 0;
                    n.OuterAngle !== void 0 && (u = jt.degToRad(n.OuterAngle.value), u = Math.max(u, 1)), t = new Wo(s, a, o, c, u, l);
                    break;
                default:
                    console.warn("THREE.FBXLoader: Unknown light type " + n.LightType.value + ", defaulting to a PointLight."), t = new fa(s, a);
                    break
            }
            n.CastShadows !== void 0 && n.CastShadows.value === 1 && (t.castShadow = !0)
        }
        return t
    }
    createMesh(e, t, n) {
        let i, s = null,
            a = null;
        const o = [];
        return e.children.forEach(function(l) {
            t.has(l.ID) && (s = t.get(l.ID)), n.has(l.ID) && o.push(n.get(l.ID))
        }), o.length > 1 ? a = o : o.length > 0 ? a = o[0] : (a = new ua({
            color: 13421772
        }), o.push(a)), "color" in s.attributes && o.forEach(function(l) {
            l.vertexColors = !0
        }), s.FBX_Deformer ? (i = new Ks(s, a), i.normalizeSkinWeights()) : i = new _t(s, a), i
    }
    createCurve(e, t) {
        const n = e.children.reduce(function(s, a) {
                return t.has(a.ID) && (s = t.get(a.ID)), s
            }, null),
            i = new hi({
                color: 3342591,
                linewidth: 1
            });
        return new Xr(n, i)
    }
    getTransformData(e, t) {
        const n = {};
        "InheritType" in t && (n.inheritType = parseInt(t.InheritType.value)), "RotationOrder" in t ? n.eulerOrder = Lf(t.RotationOrder.value) : n.eulerOrder = "ZYX", "Lcl_Translation" in t && (n.translation = t.Lcl_Translation.value), "PreRotation" in t && (n.preRotation = t.PreRotation.value), "Lcl_Rotation" in t && (n.rotation = t.Lcl_Rotation.value), "PostRotation" in t && (n.postRotation = t.PostRotation.value), "Lcl_Scaling" in t && (n.scale = t.Lcl_Scaling.value), "ScalingOffset" in t && (n.scalingOffset = t.ScalingOffset.value), "ScalingPivot" in t && (n.scalingPivot = t.ScalingPivot.value), "RotationOffset" in t && (n.rotationOffset = t.RotationOffset.value), "RotationPivot" in t && (n.rotationPivot = t.RotationPivot.value), e.userData.transformData = n
    }
    setLookAtProperties(e, t) {
        "LookAtProperty" in t && at.get(e.ID).children.forEach(function(i) {
            if (i.relationship === "LookAtProperty") {
                const s = Pe.Objects.Model[i.ID];
                if ("Lcl_Translation" in s) {
                    const a = s.Lcl_Translation.value;
                    e.target !== void 0 ? (e.target.position.fromArray(a), Pt.add(e.target)) : e.lookAt(new A().fromArray(a))
                }
            }
        })
    }
    bindSkeleton(e, t, n) {
        const i = this.parsePoseNodes();
        for (const s in e) {
            const a = e[s];
            at.get(parseInt(a.ID)).parents.forEach(function(l) {
                if (t.has(l.ID)) {
                    const c = l.ID;
                    at.get(c).parents.forEach(function(h) {
                        n.has(h.ID) && n.get(h.ID).bind(new $s(a.bones), i[h.ID])
                    })
                }
            })
        }
    }
    parsePoseNodes() {
        const e = {};
        if ("Pose" in Pe.Objects) {
            const t = Pe.Objects.Pose;
            for (const n in t)
                if (t[n].attrType === "BindPose") {
                    const i = t[n].PoseNode;
                    Array.isArray(i) ? i.forEach(function(s) {
                        e[s.Node] = new ae().fromArray(s.Matrix.a)
                    }) : e[i.Node] = new ae().fromArray(i.Matrix.a)
                }
        }
        return e
    }
    createAmbientLight() {
        if ("GlobalSettings" in Pe && "AmbientColor" in Pe.GlobalSettings) {
            const e = Pe.GlobalSettings.AmbientColor.value,
                t = e[0],
                n = e[1],
                i = e[2];
            if (t !== 0 || n !== 0 || i !== 0) {
                const s = new ue(t, n, i);
                Pt.add(new yh(s, 1))
            }
        }
    }
}
class tM {
    parse(e) {
        const t = new Map;
        if ("Geometry" in Pe.Objects) {
            const n = Pe.Objects.Geometry;
            for (const i in n) {
                const s = at.get(parseInt(i)),
                    a = this.parseGeometry(s, n[i], e);
                t.set(parseInt(i), a)
            }
        }
        return t
    }
    parseGeometry(e, t, n) {
        switch (t.attrType) {
            case "Mesh":
                return this.parseMeshGeometry(e, t, n);
            case "NurbsCurve":
                return this.parseNurbsGeometry(t)
        }
    }
    parseMeshGeometry(e, t, n) {
        const i = n.skeletons,
            s = [],
            a = e.parents.map(function(h) {
                return Pe.Objects.Model[h.ID]
            });
        if (a.length === 0) return;
        const o = e.children.reduce(function(h, f) {
            return i[f.ID] !== void 0 && (h = i[f.ID]), h
        }, null);
        e.children.forEach(function(h) {
            n.morphTargets[h.ID] !== void 0 && s.push(n.morphTargets[h.ID])
        });
        const l = a[0],
            c = {};
        "RotationOrder" in l && (c.eulerOrder = Lf(l.RotationOrder.value)), "InheritType" in l && (c.inheritType = parseInt(l.InheritType.value)), "GeometricTranslation" in l && (c.translation = l.GeometricTranslation.value), "GeometricRotation" in l && (c.rotation = l.GeometricRotation.value), "GeometricScaling" in l && (c.scale = l.GeometricScaling.value);
        const u = Af(c);
        return this.genGeometry(t, o, s, u)
    }
    genGeometry(e, t, n, i) {
        const s = new He;
        e.attrName && (s.name = e.attrName);
        const a = this.parseGeoNode(e, t),
            o = this.genBuffers(a),
            l = new Je(o.vertex, 3);
        if (l.applyMatrix4(i), s.setAttribute("position", l), o.colors.length > 0 && s.setAttribute("color", new Je(o.colors, 3)), t && (s.setAttribute("skinIndex", new ao(o.weightsIndices, 4)), s.setAttribute("skinWeight", new Je(o.vertexWeights, 4)), s.FBX_Deformer = t), o.normal.length > 0) {
            const c = new dt().getNormalMatrix(i),
                u = new Je(o.normal, 3);
            u.applyNormalMatrix(c), s.setAttribute("normal", u)
        }
        if (o.uvs.forEach(function(c, u) {
                let h = "uv" + (u + 1).toString();
                u === 0 && (h = "uv"), s.setAttribute(h, new Je(o.uvs[u], 2))
            }), a.material && a.material.mappingType !== "AllSame") {
            let c = o.materialIndex[0],
                u = 0;
            if (o.materialIndex.forEach(function(h, f) {
                    h !== c && (s.addGroup(u, f - u, c), c = h, u = f)
                }), s.groups.length > 0) {
                const h = s.groups[s.groups.length - 1],
                    f = h.start + h.count;
                f !== o.materialIndex.length && s.addGroup(f, o.materialIndex.length - f, c)
            }
            s.groups.length === 0 && s.addGroup(0, o.materialIndex.length, o.materialIndex[0])
        }
        return this.addMorphTargets(s, e, n, i), s
    }
    parseGeoNode(e, t) {
        const n = {};
        if (n.vertexPositions = e.Vertices !== void 0 ? e.Vertices.a : [], n.vertexIndices = e.PolygonVertexIndex !== void 0 ? e.PolygonVertexIndex.a : [], e.LayerElementColor && (n.color = this.parseVertexColors(e.LayerElementColor[0])), e.LayerElementMaterial && (n.material = this.parseMaterialIndices(e.LayerElementMaterial[0])), e.LayerElementNormal && (n.normal = this.parseNormals(e.LayerElementNormal[0])), e.LayerElementUV) {
            n.uv = [];
            let i = 0;
            for (; e.LayerElementUV[i];) e.LayerElementUV[i].UV && n.uv.push(this.parseUVs(e.LayerElementUV[i])), i++
        }
        return n.weightTable = {}, t !== null && (n.skeleton = t, t.rawBones.forEach(function(i, s) {
            i.indices.forEach(function(a, o) {
                n.weightTable[a] === void 0 && (n.weightTable[a] = []), n.weightTable[a].push({
                    id: s,
                    weight: i.weights[o]
                })
            })
        })), n
    }
    genBuffers(e) {
        const t = {
            vertex: [],
            normal: [],
            colors: [],
            uvs: [],
            materialIndex: [],
            vertexWeights: [],
            weightsIndices: []
        };
        let n = 0,
            i = 0,
            s = !1,
            a = [],
            o = [],
            l = [],
            c = [],
            u = [],
            h = [];
        const f = this;
        return e.vertexIndices.forEach(function(d, p) {
            let v, y = !1;
            d < 0 && (d = d ^ -1, y = !0);
            let m = [],
                g = [];
            if (a.push(d * 3, d * 3 + 1, d * 3 + 2), e.color) {
                const x = Ea(p, n, d, e.color);
                l.push(x[0], x[1], x[2])
            }
            if (e.skeleton) {
                if (e.weightTable[d] !== void 0 && e.weightTable[d].forEach(function(x) {
                        g.push(x.weight), m.push(x.id)
                    }), g.length > 4) {
                    s || (console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."), s = !0);
                    const x = [0, 0, 0, 0],
                        _ = [0, 0, 0, 0];
                    g.forEach(function(w, T) {
                        let M = w,
                            L = m[T];
                        _.forEach(function(H, P, R) {
                            if (M > H) {
                                R[P] = M, M = H;
                                const j = x[P];
                                x[P] = L, L = j
                            }
                        })
                    }), m = x, g = _
                }
                for (; g.length < 4;) g.push(0), m.push(0);
                for (let x = 0; x < 4; ++x) u.push(g[x]), h.push(m[x])
            }
            if (e.normal) {
                const x = Ea(p, n, d, e.normal);
                o.push(x[0], x[1], x[2])
            }
            e.material && e.material.mappingType !== "AllSame" && (v = Ea(p, n, d, e.material)[0]), e.uv && e.uv.forEach(function(x, _) {
                const w = Ea(p, n, d, x);
                c[_] === void 0 && (c[_] = []), c[_].push(w[0]), c[_].push(w[1])
            }), i++, y && (f.genFace(t, e, a, v, o, l, c, u, h, i), n++, i = 0, a = [], o = [], l = [], c = [], u = [], h = [])
        }), t
    }
    genFace(e, t, n, i, s, a, o, l, c, u) {
        for (let h = 2; h < u; h++) e.vertex.push(t.vertexPositions[n[0]]), e.vertex.push(t.vertexPositions[n[1]]), e.vertex.push(t.vertexPositions[n[2]]), e.vertex.push(t.vertexPositions[n[(h - 1) * 3]]), e.vertex.push(t.vertexPositions[n[(h - 1) * 3 + 1]]), e.vertex.push(t.vertexPositions[n[(h - 1) * 3 + 2]]), e.vertex.push(t.vertexPositions[n[h * 3]]), e.vertex.push(t.vertexPositions[n[h * 3 + 1]]), e.vertex.push(t.vertexPositions[n[h * 3 + 2]]), t.skeleton && (e.vertexWeights.push(l[0]), e.vertexWeights.push(l[1]), e.vertexWeights.push(l[2]), e.vertexWeights.push(l[3]), e.vertexWeights.push(l[(h - 1) * 4]), e.vertexWeights.push(l[(h - 1) * 4 + 1]), e.vertexWeights.push(l[(h - 1) * 4 + 2]), e.vertexWeights.push(l[(h - 1) * 4 + 3]), e.vertexWeights.push(l[h * 4]), e.vertexWeights.push(l[h * 4 + 1]), e.vertexWeights.push(l[h * 4 + 2]), e.vertexWeights.push(l[h * 4 + 3]), e.weightsIndices.push(c[0]), e.weightsIndices.push(c[1]), e.weightsIndices.push(c[2]), e.weightsIndices.push(c[3]), e.weightsIndices.push(c[(h - 1) * 4]), e.weightsIndices.push(c[(h - 1) * 4 + 1]), e.weightsIndices.push(c[(h - 1) * 4 + 2]), e.weightsIndices.push(c[(h - 1) * 4 + 3]), e.weightsIndices.push(c[h * 4]), e.weightsIndices.push(c[h * 4 + 1]), e.weightsIndices.push(c[h * 4 + 2]), e.weightsIndices.push(c[h * 4 + 3])), t.color && (e.colors.push(a[0]), e.colors.push(a[1]), e.colors.push(a[2]), e.colors.push(a[(h - 1) * 3]), e.colors.push(a[(h - 1) * 3 + 1]), e.colors.push(a[(h - 1) * 3 + 2]), e.colors.push(a[h * 3]), e.colors.push(a[h * 3 + 1]), e.colors.push(a[h * 3 + 2])), t.material && t.material.mappingType !== "AllSame" && (e.materialIndex.push(i), e.materialIndex.push(i), e.materialIndex.push(i)), t.normal && (e.normal.push(s[0]), e.normal.push(s[1]), e.normal.push(s[2]), e.normal.push(s[(h - 1) * 3]), e.normal.push(s[(h - 1) * 3 + 1]), e.normal.push(s[(h - 1) * 3 + 2]), e.normal.push(s[h * 3]), e.normal.push(s[h * 3 + 1]), e.normal.push(s[h * 3 + 2])), t.uv && t.uv.forEach(function(f, d) {
            e.uvs[d] === void 0 && (e.uvs[d] = []), e.uvs[d].push(o[d][0]), e.uvs[d].push(o[d][1]), e.uvs[d].push(o[d][(h - 1) * 2]), e.uvs[d].push(o[d][(h - 1) * 2 + 1]), e.uvs[d].push(o[d][h * 2]), e.uvs[d].push(o[d][h * 2 + 1])
        })
    }
    addMorphTargets(e, t, n, i) {
        if (n.length === 0) return;
        e.morphTargetsRelative = !0, e.morphAttributes.position = [];
        const s = this;
        n.forEach(function(a) {
            a.rawTargets.forEach(function(o) {
                const l = Pe.Objects.Geometry[o.geoID];
                l !== void 0 && s.genMorphGeometry(e, t, l, i, o.name)
            })
        })
    }
    genMorphGeometry(e, t, n, i, s) {
        const a = t.PolygonVertexIndex !== void 0 ? t.PolygonVertexIndex.a : [],
            o = n.Vertices !== void 0 ? n.Vertices.a : [],
            l = n.Indexes !== void 0 ? n.Indexes.a : [],
            c = e.attributes.position.count * 3,
            u = new Float32Array(c);
        for (let p = 0; p < l.length; p++) {
            const v = l[p] * 3;
            u[v] = o[p * 3], u[v + 1] = o[p * 3 + 1], u[v + 2] = o[p * 3 + 2]
        }
        const h = {
                vertexIndices: a,
                vertexPositions: u
            },
            f = this.genBuffers(h),
            d = new Je(f.vertex, 3);
        d.name = s || n.attrName, d.applyMatrix4(i), e.morphAttributes.position.push(d)
    }
    parseNormals(e) {
        const t = e.MappingInformationType,
            n = e.ReferenceInformationType,
            i = e.Normals.a;
        let s = [];
        return n === "IndexToDirect" && ("NormalIndex" in e ? s = e.NormalIndex.a : "NormalsIndex" in e && (s = e.NormalsIndex.a)), {
            dataSize: 3,
            buffer: i,
            indices: s,
            mappingType: t,
            referenceType: n
        }
    }
    parseUVs(e) {
        const t = e.MappingInformationType,
            n = e.ReferenceInformationType,
            i = e.UV.a;
        let s = [];
        return n === "IndexToDirect" && (s = e.UVIndex.a), {
            dataSize: 2,
            buffer: i,
            indices: s,
            mappingType: t,
            referenceType: n
        }
    }
    parseVertexColors(e) {
        const t = e.MappingInformationType,
            n = e.ReferenceInformationType,
            i = e.Colors.a;
        let s = [];
        return n === "IndexToDirect" && (s = e.ColorIndex.a), {
            dataSize: 4,
            buffer: i,
            indices: s,
            mappingType: t,
            referenceType: n
        }
    }
    parseMaterialIndices(e) {
        const t = e.MappingInformationType,
            n = e.ReferenceInformationType;
        if (t === "NoMappingInformation") return {
            dataSize: 1,
            buffer: [0],
            indices: [0],
            mappingType: "AllSame",
            referenceType: n
        };
        const i = e.Materials.a,
            s = [];
        for (let a = 0; a < i.length; ++a) s.push(a);
        return {
            dataSize: 1,
            buffer: i,
            indices: s,
            mappingType: t,
            referenceType: n
        }
    }
    parseNurbsGeometry(e) {
        if (bf === void 0) return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."), new He;
        const t = parseInt(e.Order);
        if (isNaN(t)) return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s", e.Order, e.id), new He;
        const n = t - 1,
            i = e.KnotVector.a,
            s = [],
            a = e.Points.a;
        for (let h = 0, f = a.length; h < f; h += 4) s.push(new Ge().fromArray(a, h));
        let o, l;
        if (e.Form === "Closed") s.push(s[0]);
        else if (e.Form === "Periodic") {
            o = n, l = i.length - 1 - o;
            for (let h = 0; h < n; ++h) s.push(s[h])
        }
        const u = new bf(n, i, s, o, l).getPoints(s.length * 12);
        return new He().setFromPoints(u)
    }
}
class nM {
    parse() {
        const e = [],
            t = this.parseClips();
        if (t !== void 0)
            for (const n in t) {
                const i = t[n],
                    s = this.addClip(i);
                e.push(s)
            }
        return e
    }
    parseClips() {
        if (Pe.Objects.AnimationCurve === void 0) return;
        const e = this.parseAnimationCurveNodes();
        this.parseAnimationCurves(e);
        const t = this.parseAnimationLayers(e);
        return this.parseAnimStacks(t)
    }
    parseAnimationCurveNodes() {
        const e = Pe.Objects.AnimationCurveNode,
            t = new Map;
        for (const n in e) {
            const i = e[n];
            if (i.attrName.match(/S|R|T|DeformPercent/) !== null) {
                const s = {
                    id: i.id,
                    attr: i.attrName,
                    curves: {}
                };
                t.set(s.id, s)
            }
        }
        return t
    }
    parseAnimationCurves(e) {
        const t = Pe.Objects.AnimationCurve;
        for (const n in t) {
            const i = {
                    id: t[n].id,
                    times: t[n].KeyTime.a.map(oM),
                    values: t[n].KeyValueFloat.a
                },
                s = at.get(i.id);
            if (s !== void 0) {
                const a = s.parents[0].ID,
                    o = s.parents[0].relationship;
                o.match(/X/) ? e.get(a).curves.x = i : o.match(/Y/) ? e.get(a).curves.y = i : o.match(/Z/) ? e.get(a).curves.z = i : o.match(/d|DeformPercent/) && e.has(a) && (e.get(a).curves.morph = i)
            }
        }
    }
    parseAnimationLayers(e) {
        const t = Pe.Objects.AnimationLayer,
            n = new Map;
        for (const i in t) {
            const s = [],
                a = at.get(parseInt(i));
            a !== void 0 && (a.children.forEach(function(l, c) {
                if (e.has(l.ID)) {
                    const u = e.get(l.ID);
                    if (u.curves.x !== void 0 || u.curves.y !== void 0 || u.curves.z !== void 0) {
                        if (s[c] === void 0) {
                            const h = at.get(l.ID).parents.filter(function(f) {
                                return f.relationship !== void 0
                            })[0].ID;
                            if (h !== void 0) {
                                const f = Pe.Objects.Model[h.toString()];
                                if (f === void 0) {
                                    console.warn("THREE.FBXLoader: Encountered a unused curve.", l);
                                    return
                                }
                                const d = {
                                    modelName: f.attrName ? Be.sanitizeNodeName(f.attrName) : "",
                                    ID: f.id,
                                    initialPosition: [0, 0, 0],
                                    initialRotation: [0, 0, 0],
                                    initialScale: [1, 1, 1]
                                };
                                Pt.traverse(function(p) {
                                    p.ID === f.id && (d.transform = p.matrix, p.userData.transformData && (d.eulerOrder = p.userData.transformData.eulerOrder))
                                }), d.transform || (d.transform = new ae), "PreRotation" in f && (d.preRotation = f.PreRotation.value), "PostRotation" in f && (d.postRotation = f.PostRotation.value), s[c] = d
                            }
                        }
                        s[c] && (s[c][u.attr] = u)
                    } else if (u.curves.morph !== void 0) {
                        if (s[c] === void 0) {
                            const h = at.get(l.ID).parents.filter(function(m) {
                                    return m.relationship !== void 0
                                })[0].ID,
                                f = at.get(h).parents[0].ID,
                                d = at.get(f).parents[0].ID,
                                p = at.get(d).parents[0].ID,
                                v = Pe.Objects.Model[p],
                                y = {
                                    modelName: v.attrName ? Be.sanitizeNodeName(v.attrName) : "",
                                    morphName: Pe.Objects.Deformer[h].attrName
                                };
                            s[c] = y
                        }
                        s[c][u.attr] = u
                    }
                }
            }), n.set(parseInt(i), s))
        }
        return n
    }
    parseAnimStacks(e) {
        const t = Pe.Objects.AnimationStack,
            n = {};
        for (const i in t) {
            const s = at.get(parseInt(i)).children;
            s.length > 1 && console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");
            const a = e.get(s[0].ID);
            n[i] = {
                name: t[i].attrName,
                layer: a
            }
        }
        return n
    }
    addClip(e) {
        let t = [];
        const n = this;
        return e.layer.forEach(function(i) {
            t = t.concat(n.generateTracks(i))
        }), new ha(e.name, -1, t)
    }
    generateTracks(e) {
        const t = [];
        let n = new A,
            i = new nt,
            s = new A;
        if (e.transform && e.transform.decompose(n, i, s), n = n.toArray(), i = new Yt().setFromQuaternion(i, e.eulerOrder).toArray(), s = s.toArray(), e.T !== void 0 && Object.keys(e.T.curves).length > 0) {
            const a = this.generateVectorTrack(e.modelName, e.T.curves, n, "position");
            a !== void 0 && t.push(a)
        }
        if (e.R !== void 0 && Object.keys(e.R.curves).length > 0) {
            const a = this.generateRotationTrack(e.modelName, e.R.curves, i, e.preRotation, e.postRotation, e.eulerOrder);
            a !== void 0 && t.push(a)
        }
        if (e.S !== void 0 && Object.keys(e.S.curves).length > 0) {
            const a = this.generateVectorTrack(e.modelName, e.S.curves, s, "scale");
            a !== void 0 && t.push(a)
        }
        if (e.DeformPercent !== void 0) {
            const a = this.generateMorphTrack(e);
            a !== void 0 && t.push(a)
        }
        return t
    }
    generateVectorTrack(e, t, n, i) {
        const s = this.getTimesForAllAxes(t),
            a = this.getKeyframeTrackValues(s, t, n);
        return new sr(e + "." + i, s, a)
    }
    generateRotationTrack(e, t, n, i, s, a) {
        t.x !== void 0 && (this.interpolateRotations(t.x), t.x.values = t.x.values.map(jt.degToRad)), t.y !== void 0 && (this.interpolateRotations(t.y), t.y.values = t.y.values.map(jt.degToRad)), t.z !== void 0 && (this.interpolateRotations(t.z), t.z.values = t.z.values.map(jt.degToRad));
        const o = this.getTimesForAllAxes(t),
            l = this.getKeyframeTrackValues(o, t, n);
        i !== void 0 && (i = i.map(jt.degToRad), i.push(a), i = new Yt().fromArray(i), i = new nt().setFromEuler(i)), s !== void 0 && (s = s.map(jt.degToRad), s.push(a), s = new Yt().fromArray(s), s = new nt().setFromEuler(s).invert());
        const c = new nt,
            u = new Yt,
            h = [];
        for (let f = 0; f < l.length; f += 3) u.set(l[f], l[f + 1], l[f + 2], a), c.setFromEuler(u), i !== void 0 && c.premultiply(i), s !== void 0 && c.multiply(s), c.toArray(h, f / 3 * 4);
        return new Vn(e + ".quaternion", o, h)
    }
    generateMorphTrack(e) {
        const t = e.DeformPercent.curves.morph,
            n = t.values.map(function(s) {
                return s / 100
            }),
            i = Pt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];
        return new ir(e.modelName + ".morphTargetInfluences[" + i + "]", t.times, n)
    }
    getTimesForAllAxes(e) {
        let t = [];
        if (e.x !== void 0 && (t = t.concat(e.x.times)), e.y !== void 0 && (t = t.concat(e.y.times)), e.z !== void 0 && (t = t.concat(e.z.times)), t = t.sort(function(n, i) {
                return n - i
            }), t.length > 1) {
            let n = 1,
                i = t[0];
            for (let s = 1; s < t.length; s++) {
                const a = t[s];
                a !== i && (t[n] = a, i = a, n++)
            }
            t = t.slice(0, n)
        }
        return t
    }
    getKeyframeTrackValues(e, t, n) {
        const i = n,
            s = [];
        let a = -1,
            o = -1,
            l = -1;
        return e.forEach(function(c) {
            if (t.x && (a = t.x.times.indexOf(c)), t.y && (o = t.y.times.indexOf(c)), t.z && (l = t.z.times.indexOf(c)), a !== -1) {
                const u = t.x.values[a];
                s.push(u), i[0] = u
            } else s.push(i[0]);
            if (o !== -1) {
                const u = t.y.values[o];
                s.push(u), i[1] = u
            } else s.push(i[1]);
            if (l !== -1) {
                const u = t.z.values[l];
                s.push(u), i[2] = u
            } else s.push(i[2])
        }), s
    }
    interpolateRotations(e) {
        for (let t = 1; t < e.values.length; t++) {
            const n = e.values[t - 1],
                i = e.values[t] - n,
                s = Math.abs(i);
            if (s >= 180) {
                const a = s / 180,
                    o = i / a;
                let l = n + o;
                const c = e.times[t - 1],
                    h = (e.times[t] - c) / a;
                let f = c + h;
                const d = [],
                    p = [];
                for (; f < e.times[t];) d.push(f), f += h, p.push(l), l += o;
                e.times = Cf(e.times, t, d), e.values = Cf(e.values, t, p)
            }
        }
    }
}
class iM {
    getPrevNode() {
        return this.nodeStack[this.currentIndent - 2]
    }
    getCurrentNode() {
        return this.nodeStack[this.currentIndent - 1]
    }
    getCurrentProp() {
        return this.currentProp
    }
    pushStack(e) {
        this.nodeStack.push(e), this.currentIndent += 1
    }
    popStack() {
        this.nodeStack.pop(), this.currentIndent -= 1
    }
    setCurrentProp(e, t) {
        this.currentProp = e, this.currentPropName = t
    }
    parse(e) {
        this.currentIndent = 0, this.allNodes = new Tf, this.nodeStack = [], this.currentProp = [], this.currentPropName = "";
        const t = this,
            n = e.split(/[\r\n]+/);
        return n.forEach(function(i, s) {
            const a = i.match(/^[\s\t]*;/),
                o = i.match(/^[\s\t]*$/);
            if (a || o) return;
            const l = i.match("^\\t{" + t.currentIndent + "}(\\w+):(.*){", ""),
                c = i.match("^\\t{" + t.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)"),
                u = i.match("^\\t{" + (t.currentIndent - 1) + "}}");
            l ? t.parseNodeBegin(i, l) : c ? t.parseNodeProperty(i, c, n[++s]) : u ? t.popStack() : i.match(/^[^\s\t}]/) && t.parseNodePropertyContinued(i)
        }), this.allNodes
    }
    parseNodeBegin(e, t) {
        const n = t[1].trim().replace(/^"/, "").replace(/"$/, ""),
            i = t[2].split(",").map(function(l) {
                return l.trim().replace(/^"/, "").replace(/"$/, "")
            }),
            s = {
                name: n
            },
            a = this.parseNodeAttr(i),
            o = this.getCurrentNode();
        this.currentIndent === 0 ? this.allNodes.add(n, s) : n in o ? (n === "PoseNode" ? o.PoseNode.push(s) : o[n].id !== void 0 && (o[n] = {}, o[n][o[n].id] = o[n]), a.id !== "" && (o[n][a.id] = s)) : typeof a.id == "number" ? (o[n] = {}, o[n][a.id] = s) : n !== "Properties70" && (n === "PoseNode" ? o[n] = [s] : o[n] = s), typeof a.id == "number" && (s.id = a.id), a.name !== "" && (s.attrName = a.name), a.type !== "" && (s.attrType = a.type), this.pushStack(s)
    }
    parseNodeAttr(e) {
        let t = e[0];
        e[0] !== "" && (t = parseInt(e[0]), isNaN(t) && (t = e[0]));
        let n = "",
            i = "";
        return e.length > 1 && (n = e[1].replace(/^(\w+)::/, ""), i = e[2]), {
            id: t,
            name: n,
            type: i
        }
    }
    parseNodeProperty(e, t, n) {
        let i = t[1].replace(/^"/, "").replace(/"$/, "").trim(),
            s = t[2].replace(/^"/, "").replace(/"$/, "").trim();
        i === "Content" && s === "," && (s = n.replace(/"/g, "").replace(/,$/, "").trim());
        const a = this.getCurrentNode();
        if (a.name === "Properties70") {
            this.parseNodeSpecialProperty(e, i, s);
            return
        }
        if (i === "C") {
            const l = s.split(",").slice(1),
                c = parseInt(l[0]),
                u = parseInt(l[1]);
            let h = s.split(",").slice(3);
            h = h.map(function(f) {
                return f.trim().replace(/^"/, "")
            }), i = "connections", s = [c, u], cM(s, h), a[i] === void 0 && (a[i] = [])
        }
        i === "Node" && (a.id = s), i in a && Array.isArray(a[i]) ? a[i].push(s) : i !== "a" ? a[i] = s : a.a = s, this.setCurrentProp(a, i), i === "a" && s.slice(-1) !== "," && (a.a = Sl(s))
    }
    parseNodePropertyContinued(e) {
        const t = this.getCurrentNode();
        t.a += e, e.slice(-1) !== "," && (t.a = Sl(t.a))
    }
    parseNodeSpecialProperty(e, t, n) {
        const i = n.split('",').map(function(u) {
                return u.trim().replace(/^\"/, "").replace(/\s/, "_")
            }),
            s = i[0],
            a = i[1],
            o = i[2],
            l = i[3];
        let c = i[4];
        switch (a) {
            case "int":
            case "enum":
            case "bool":
            case "ULongLong":
            case "double":
            case "Number":
            case "FieldOfView":
                c = parseFloat(c);
                break;
            case "Color":
            case "ColorRGB":
            case "Vector3D":
            case "Lcl_Translation":
            case "Lcl_Rotation":
            case "Lcl_Scaling":
                c = Sl(c);
                break
        }
        this.getPrevNode()[s] = {
            type: a,
            type2: o,
            flag: l,
            value: c
        }, this.setCurrentProp(this.getPrevNode(), s)
    }
}
class rM {
    parse(e) {
        const t = new Sf(e);
        t.skip(23);
        const n = t.getUint32();
        if (n < 6400) throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + n);
        const i = new Tf;
        for (; !this.endOfContent(t);) {
            const s = this.parseNode(t, n);
            s !== null && i.add(s.name, s)
        }
        return i
    }
    endOfContent(e) {
        return e.size() % 16 == 0 ? (e.getOffset() + 160 + 16 & ~15) >= e.size() : e.getOffset() + 160 + 16 >= e.size()
    }
    parseNode(e, t) {
        const n = {},
            i = t >= 7500 ? e.getUint64() : e.getUint32(),
            s = t >= 7500 ? e.getUint64() : e.getUint32();
        t >= 7500 ? e.getUint64() : e.getUint32();
        const a = e.getUint8(),
            o = e.getString(a);
        if (i === 0) return null;
        const l = [];
        for (let f = 0; f < s; f++) l.push(this.parseProperty(e));
        const c = l.length > 0 ? l[0] : "",
            u = l.length > 1 ? l[1] : "",
            h = l.length > 2 ? l[2] : "";
        for (n.singleProperty = s === 1 && e.getOffset() === i; i > e.getOffset();) {
            const f = this.parseNode(e, t);
            f !== null && this.parseSubNode(o, n, f)
        }
        return n.propertyList = l, typeof c == "number" && (n.id = c), u !== "" && (n.attrName = u), h !== "" && (n.attrType = h), o !== "" && (n.name = o), n
    }
    parseSubNode(e, t, n) {
        if (n.singleProperty === !0) {
            const i = n.propertyList[0];
            Array.isArray(i) ? (t[n.name] = n, n.a = i) : t[n.name] = i
        } else if (e === "Connections" && n.name === "C") {
            const i = [];
            n.propertyList.forEach(function(s, a) {
                a !== 0 && i.push(s)
            }), t.connections === void 0 && (t.connections = []), t.connections.push(i)
        } else if (n.name === "Properties70") Object.keys(n).forEach(function(s) {
            t[s] = n[s]
        });
        else if (e === "Properties70" && n.name === "P") {
            let i = n.propertyList[0],
                s = n.propertyList[1];
            const a = n.propertyList[2],
                o = n.propertyList[3];
            let l;
            i.indexOf("Lcl ") === 0 && (i = i.replace("Lcl ", "Lcl_")), s.indexOf("Lcl ") === 0 && (s = s.replace("Lcl ", "Lcl_")), s === "Color" || s === "ColorRGB" || s === "Vector" || s === "Vector3D" || s.indexOf("Lcl_") === 0 ? l = [n.propertyList[4], n.propertyList[5], n.propertyList[6]] : l = n.propertyList[4], t[i] = {
                type: s,
                type2: a,
                flag: o,
                value: l
            }
        } else t[n.name] === void 0 ? typeof n.id == "number" ? (t[n.name] = {}, t[n.name][n.id] = n) : t[n.name] = n : n.name === "PoseNode" ? (Array.isArray(t[n.name]) || (t[n.name] = [t[n.name]]), t[n.name].push(n)) : t[n.name][n.id] === void 0 && (t[n.name][n.id] = n)
    }
    parseProperty(e) {
        const t = e.getString(1);
        let n;
        switch (t) {
            case "C":
                return e.getBoolean();
            case "D":
                return e.getFloat64();
            case "F":
                return e.getFloat32();
            case "I":
                return e.getInt32();
            case "L":
                return e.getInt64();
            case "R":
                return n = e.getUint32(), e.getArrayBuffer(n);
            case "S":
                return n = e.getUint32(), e.getString(n);
            case "Y":
                return e.getInt16();
            case "b":
            case "c":
            case "d":
            case "f":
            case "i":
            case "l":
                const i = e.getUint32(),
                    s = e.getUint32(),
                    a = e.getUint32();
                if (s === 0) switch (t) {
                    case "b":
                    case "c":
                        return e.getBooleanArray(i);
                    case "d":
                        return e.getFloat64Array(i);
                    case "f":
                        return e.getFloat32Array(i);
                    case "i":
                        return e.getInt32Array(i);
                    case "l":
                        return e.getInt64Array(i)
                }
                typeof j_ == "undefined" && console.error("THREE.FBXLoader: External library fflate.min.js required.");
                const o = us(new Uint8Array(e.getArrayBuffer(a))),
                    l = new Sf(o.buffer);
                switch (t) {
                    case "b":
                    case "c":
                        return l.getBooleanArray(i);
                    case "d":
                        return l.getFloat64Array(i);
                    case "f":
                        return l.getFloat32Array(i);
                    case "i":
                        return l.getInt32Array(i);
                    case "l":
                        return l.getInt64Array(i)
                }
            default:
                throw new Error("THREE.FBXLoader: Unknown property type " + t)
        }
    }
}
class Sf {
    constructor(e, t) {
        this.dv = new DataView(e), this.offset = 0, this.littleEndian = t !== void 0 ? t : !0
    }
    getOffset() {
        return this.offset
    }
    size() {
        return this.dv.buffer.byteLength
    }
    skip(e) {
        this.offset += e
    }
    getBoolean() {
        return (this.getUint8() & 1) == 1
    }
    getBooleanArray(e) {
        const t = [];
        for (let n = 0; n < e; n++) t.push(this.getBoolean());
        return t
    }
    getUint8() {
        const e = this.dv.getUint8(this.offset);
        return this.offset += 1, e
    }
    getInt16() {
        const e = this.dv.getInt16(this.offset, this.littleEndian);
        return this.offset += 2, e
    }
    getInt32() {
        const e = this.dv.getInt32(this.offset, this.littleEndian);
        return this.offset += 4, e
    }
    getInt32Array(e) {
        const t = [];
        for (let n = 0; n < e; n++) t.push(this.getInt32());
        return t
    }
    getUint32() {
        const e = this.dv.getUint32(this.offset, this.littleEndian);
        return this.offset += 4, e
    }
    getInt64() {
        let e, t;
        return this.littleEndian ? (e = this.getUint32(), t = this.getUint32()) : (t = this.getUint32(), e = this.getUint32()), t & 2147483648 ? (t = ~t & 4294967295, e = ~e & 4294967295, e === 4294967295 && (t = t + 1 & 4294967295), e = e + 1 & 4294967295, -(t * 4294967296 + e)) : t * 4294967296 + e
    }
    getInt64Array(e) {
        const t = [];
        for (let n = 0; n < e; n++) t.push(this.getInt64());
        return t
    }
    getUint64() {
        let e, t;
        return this.littleEndian ? (e = this.getUint32(), t = this.getUint32()) : (t = this.getUint32(), e = this.getUint32()), t * 4294967296 + e
    }
    getFloat32() {
        const e = this.dv.getFloat32(this.offset, this.littleEndian);
        return this.offset += 4, e
    }
    getFloat32Array(e) {
        const t = [];
        for (let n = 0; n < e; n++) t.push(this.getFloat32());
        return t
    }
    getFloat64() {
        const e = this.dv.getFloat64(this.offset, this.littleEndian);
        return this.offset += 8, e
    }
    getFloat64Array(e) {
        const t = [];
        for (let n = 0; n < e; n++) t.push(this.getFloat64());
        return t
    }
    getArrayBuffer(e) {
        const t = this.dv.buffer.slice(this.offset, this.offset + e);
        return this.offset += e, t
    }
    getString(e) {
        let t = [];
        for (let i = 0; i < e; i++) t[i] = this.getUint8();
        const n = t.indexOf(0);
        return n >= 0 && (t = t.slice(0, n)), xn.decodeText(new Uint8Array(t))
    }
}
class Tf {
    add(e, t) {
        this[e] = t
    }
}

function sM(r) {
    const e = "Kaydara FBX Binary  \0";
    return r.byteLength >= e.length && e === Rf(r, 0, e.length)
}

function aM(r) {
    const e = ["K", "a", "y", "d", "a", "r", "a", "\\", "F", "B", "X", "\\", "B", "i", "n", "a", "r", "y", "\\", "\\"];
    let t = 0;

    function n(i) {
        const s = r[i - 1];
        return r = r.slice(t + i), t++, s
    }
    for (let i = 0; i < e.length; ++i)
        if (n(1) === e[i]) return !1;
    return !0
}

function Ef(r) {
    const e = /FBXVersion: (\d+)/,
        t = r.match(e);
    if (t) return parseInt(t[1]);
    throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")
}

function oM(r) {
    return r / 46186158e3
}
const lM = [];

function Ea(r, e, t, n) {
    let i;
    switch (n.mappingType) {
        case "ByPolygonVertex":
            i = r;
            break;
        case "ByPolygon":
            i = e;
            break;
        case "ByVertice":
            i = t;
            break;
        case "AllSame":
            i = n.indices[0];
            break;
        default:
            console.warn("THREE.FBXLoader: unknown attribute mapping type " + n.mappingType)
    }
    n.referenceType === "IndexToDirect" && (i = n.indices[i]);
    const s = i * n.dataSize,
        a = s + n.dataSize;
    return uM(lM, n.buffer, s, a)
}
const bl = new Yt,
    _r = new A;

function Af(r) {
    const e = new ae,
        t = new ae,
        n = new ae,
        i = new ae,
        s = new ae,
        a = new ae,
        o = new ae,
        l = new ae,
        c = new ae,
        u = new ae,
        h = new ae,
        f = new ae,
        d = r.inheritType ? r.inheritType : 0;
    if (r.translation && e.setPosition(_r.fromArray(r.translation)), r.preRotation) {
        const P = r.preRotation.map(jt.degToRad);
        P.push(r.eulerOrder), t.makeRotationFromEuler(bl.fromArray(P))
    }
    if (r.rotation) {
        const P = r.rotation.map(jt.degToRad);
        P.push(r.eulerOrder), n.makeRotationFromEuler(bl.fromArray(P))
    }
    if (r.postRotation) {
        const P = r.postRotation.map(jt.degToRad);
        P.push(r.eulerOrder), i.makeRotationFromEuler(bl.fromArray(P)), i.invert()
    }
    r.scale && s.scale(_r.fromArray(r.scale)), r.scalingOffset && o.setPosition(_r.fromArray(r.scalingOffset)), r.scalingPivot && a.setPosition(_r.fromArray(r.scalingPivot)), r.rotationOffset && l.setPosition(_r.fromArray(r.rotationOffset)), r.rotationPivot && c.setPosition(_r.fromArray(r.rotationPivot)), r.parentMatrixWorld && (h.copy(r.parentMatrix), u.copy(r.parentMatrixWorld));
    const p = t.clone().multiply(n).multiply(i),
        v = new ae;
    v.extractRotation(u);
    const y = new ae;
    y.copyPosition(u);
    const m = y.clone().invert().multiply(u),
        g = v.clone().invert().multiply(m),
        x = s,
        _ = new ae;
    if (d === 0) _.copy(v).multiply(p).multiply(g).multiply(x);
    else if (d === 1) _.copy(v).multiply(g).multiply(p).multiply(x);
    else {
        const R = new ae().scale(new A().setFromMatrixScale(h)).clone().invert(),
            j = g.clone().multiply(R);
        _.copy(v).multiply(p).multiply(j).multiply(x)
    }
    const w = c.clone().invert(),
        T = a.clone().invert();
    let M = e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(w).multiply(o).multiply(a).multiply(s).multiply(T);
    const L = new ae().copyPosition(M),
        H = u.clone().multiply(L);
    return f.copyPosition(H), M = f.clone().multiply(_), M.premultiply(u.invert()), M
}

function Lf(r) {
    r = r || 0;
    const e = ["ZYX", "YZX", "XZY", "ZXY", "YXZ", "XYZ"];
    return r === 6 ? (console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."), e[0]) : e[r]
}

function Sl(r) {
    return r.split(",").map(function(t) {
        return parseFloat(t)
    })
}

function Rf(r, e, t) {
    return e === void 0 && (e = 0), t === void 0 && (t = r.byteLength), xn.decodeText(new Uint8Array(r, e, t))
}

function cM(r, e) {
    for (let t = 0, n = r.length, i = e.length; t < i; t++, n++) r[n] = e[t]
}

function uM(r, e, t, n) {
    for (let i = t, s = 0; i < n; i++, s++) r[s] = e[i];
    return r
}

function Cf(r, e, t) {
    return r.slice(0, e).concat(t).concat(r.slice(e))
}
const Tl = new WeakMap;
class XM extends Kt {
    constructor(e) {
        super(e);
        this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
            position: "POSITION",
            normal: "NORMAL",
            color: "COLOR",
            uv: "TEX_COORD"
        }, this.defaultAttributeTypes = {
            position: "Float32Array",
            normal: "Float32Array",
            color: "Float32Array",
            uv: "Float32Array"
        }
    }
    setDecoderPath(e) {
        return this.decoderPath = e, this
    }
    setDecoderConfig(e) {
        return this.decoderConfig = e, this
    }
    setWorkerLimit(e) {
        return this.workerLimit = e, this
    }
    load(e, t, n, i) {
        const s = new or(this.manager);
        s.setPath(this.path), s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(e, a => {
            const o = {
                attributeIDs: this.defaultAttributeIDs,
                attributeTypes: this.defaultAttributeTypes,
                useUniqueIDs: !1
            };
            this.decodeGeometry(a, o).then(t).catch(i)
        }, n, i)
    }
    decodeDracoFile(e, t, n, i) {
        const s = {
            attributeIDs: n || this.defaultAttributeIDs,
            attributeTypes: i || this.defaultAttributeTypes,
            useUniqueIDs: !!n
        };
        this.decodeGeometry(e, s).then(t)
    }
    decodeGeometry(e, t) {
        for (const l in t.attributeTypes) {
            const c = t.attributeTypes[l];
            c.BYTES_PER_ELEMENT !== void 0 && (t.attributeTypes[l] = c.name)
        }
        const n = JSON.stringify(t);
        if (Tl.has(e)) {
            const l = Tl.get(e);
            if (l.key === n) return l.promise;
            if (e.byteLength === 0) throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")
        }
        let i;
        const s = this.workerNextTaskID++,
            a = e.byteLength,
            o = this._getWorker(s, a).then(l => (i = l, new Promise((c, u) => {
                i._callbacks[s] = {
                    resolve: c,
                    reject: u
                }, i.postMessage({
                    type: "decode",
                    id: s,
                    taskConfig: t,
                    buffer: e
                }, [e])
            }))).then(l => this._createGeometry(l.geometry));
        return o.catch(() => !0).then(() => {
            i && s && this._releaseTask(i, s)
        }), Tl.set(e, {
            key: n,
            promise: o
        }), o
    }
    _createGeometry(e) {
        const t = new He;
        e.index && t.setIndex(new $e(e.index.array, 1));
        for (let n = 0; n < e.attributes.length; n++) {
            const i = e.attributes[n],
                s = i.name,
                a = i.array,
                o = i.itemSize;
            t.setAttribute(s, new $e(a, o))
        }
        return t
    }
    _loadLibrary(e, t) {
        const n = new or(this.manager);
        return n.setPath(this.decoderPath), n.setResponseType(t), n.setWithCredentials(this.withCredentials), new Promise((i, s) => {
            n.load(e, i, void 0, s)
        })
    }
    preload() {
        return this._initDecoder(), this
    }
    _initDecoder() {
        if (this.decoderPending) return this.decoderPending;
        const e = typeof WebAssembly != "object" || this.decoderConfig.type === "js",
            t = [];
        return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then(n => {
            const i = n[0];
            e || (this.decoderConfig.wasmBinary = n[1]);
            const s = hM.toString(),
                a = ["/* draco decoder */", i, "", "/* worker */", s.substring(s.indexOf("{") + 1, s.lastIndexOf("}"))].join(`
`);
            this.workerSourceURL = URL.createObjectURL(new Blob([a]))
        }), this.decoderPending
    }
    _getWorker(e, t) {
        return this._initDecoder().then(() => {
            if (this.workerPool.length < this.workerLimit) {
                const i = new Worker(this.workerSourceURL);
                i._callbacks = {}, i._taskCosts = {}, i._taskLoad = 0, i.postMessage({
                    type: "init",
                    decoderConfig: this.decoderConfig
                }), i.onmessage = function(s) {
                    const a = s.data;
                    switch (a.type) {
                        case "decode":
                            i._callbacks[a.id].resolve(a);
                            break;
                        case "error":
                            i._callbacks[a.id].reject(a);
                            break;
                        default:
                            console.error('THREE.DRACOLoader: Unexpected message, "' + a.type + '"')
                    }
                }, this.workerPool.push(i)
            } else this.workerPool.sort(function(i, s) {
                return i._taskLoad > s._taskLoad ? -1 : 1
            });
            const n = this.workerPool[this.workerPool.length - 1];
            return n._taskCosts[e] = t, n._taskLoad += t, n
        })
    }
    _releaseTask(e, t) {
        e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t]
    }
    debug() {
        console.log("Task load: ", this.workerPool.map(e => e._taskLoad))
    }
    dispose() {
        for (let e = 0; e < this.workerPool.length; ++e) this.workerPool[e].terminate();
        return this.workerPool.length = 0, this
    }
}

function hM() {
    let r, e;
    onmessage = function(a) {
        const o = a.data;
        switch (o.type) {
            case "init":
                r = o.decoderConfig, e = new Promise(function(u) {
                    r.onModuleLoaded = function(h) {
                        u({
                            draco: h
                        })
                    }, DracoDecoderModule(r)
                });
                break;
            case "decode":
                const l = o.buffer,
                    c = o.taskConfig;
                e.then(u => {
                    const h = u.draco,
                        f = new h.Decoder,
                        d = new h.DecoderBuffer;
                    d.Init(new Int8Array(l), l.byteLength);
                    try {
                        const p = t(h, f, d, c),
                            v = p.attributes.map(y => y.array.buffer);
                        p.index && v.push(p.index.array.buffer), self.postMessage({
                            type: "decode",
                            id: o.id,
                            geometry: p
                        }, v)
                    } catch (p) {
                        console.error(p), self.postMessage({
                            type: "error",
                            id: o.id,
                            error: p.message
                        })
                    } finally {
                        h.destroy(d), h.destroy(f)
                    }
                });
                break
        }
    };

    function t(a, o, l, c) {
        const u = c.attributeIDs,
            h = c.attributeTypes;
        let f, d;
        const p = o.GetEncodedGeometryType(l);
        if (p === a.TRIANGULAR_MESH) f = new a.Mesh, d = o.DecodeBufferToMesh(l, f);
        else if (p === a.POINT_CLOUD) f = new a.PointCloud, d = o.DecodeBufferToPointCloud(l, f);
        else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
        if (!d.ok() || f.ptr === 0) throw new Error("THREE.DRACOLoader: Decoding failed: " + d.error_msg());
        const v = {
            index: null,
            attributes: []
        };
        for (const y in u) {
            const m = self[h[y]];
            let g, x;
            if (c.useUniqueIDs) x = u[y], g = o.GetAttributeByUniqueId(f, x);
            else {
                if (x = o.GetAttributeId(f, a[u[y]]), x === -1) continue;
                g = o.GetAttribute(f, x)
            }
            v.attributes.push(i(a, o, f, y, m, g))
        }
        return p === a.TRIANGULAR_MESH && (v.index = n(a, o, f)), a.destroy(f), v
    }

    function n(a, o, l) {
        const u = l.num_faces() * 3,
            h = u * 4,
            f = a._malloc(h);
        o.GetTrianglesUInt32Array(l, h, f);
        const d = new Uint32Array(a.HEAPF32.buffer, f, u).slice();
        return a._free(f), {
            array: d,
            itemSize: 1
        }
    }

    function i(a, o, l, c, u, h) {
        const f = h.num_components(),
            p = l.num_points() * f,
            v = p * u.BYTES_PER_ELEMENT,
            y = s(a, u),
            m = a._malloc(v);
        o.GetAttributeDataArrayForAllPoints(l, h, y, v, m);
        const g = new u(a.HEAPF32.buffer, m, p).slice();
        return a._free(m), {
            name: c,
            array: g,
            itemSize: f
        }
    }

    function s(a, o) {
        switch (o) {
            case Float32Array:
                return a.DT_FLOAT32;
            case Int8Array:
                return a.DT_INT8;
            case Int16Array:
                return a.DT_INT16;
            case Int32Array:
                return a.DT_INT32;
            case Uint8Array:
                return a.DT_UINT8;
            case Uint16Array:
                return a.DT_UINT16;
            case Uint32Array:
                return a.DT_UINT32
        }
    }
}
var Pf = {
        update: null,
        begin: null,
        loopBegin: null,
        changeBegin: null,
        change: null,
        changeComplete: null,
        loopComplete: null,
        complete: null,
        loop: 1,
        direction: "normal",
        autoplay: !0,
        timelineOffset: 0
    },
    El = {
        duration: 1e3,
        delay: 0,
        endDelay: 0,
        easing: "easeOutElastic(1, .5)",
        round: 0
    },
    fM = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"],
    Aa = {
        CSS: {},
        springs: {}
    };

function cn(r, e, t) {
    return Math.min(Math.max(r, e), t)
}

function fs(r, e) {
    return r.indexOf(e) > -1
}

function Al(r, e) {
    return r.apply(null, e)
}
var we = {
    arr: function(r) {
        return Array.isArray(r)
    },
    obj: function(r) {
        return fs(Object.prototype.toString.call(r), "Object")
    },
    pth: function(r) {
        return we.obj(r) && r.hasOwnProperty("totalLength")
    },
    svg: function(r) {
        return r instanceof SVGElement
    },
    inp: function(r) {
        return r instanceof HTMLInputElement
    },
    dom: function(r) {
        return r.nodeType || we.svg(r)
    },
    str: function(r) {
        return typeof r == "string"
    },
    fnc: function(r) {
        return typeof r == "function"
    },
    und: function(r) {
        return typeof r == "undefined"
    },
    nil: function(r) {
        return we.und(r) || r === null
    },
    hex: function(r) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r)
    },
    rgb: function(r) {
        return /^rgb/.test(r)
    },
    hsl: function(r) {
        return /^hsl/.test(r)
    },
    col: function(r) {
        return we.hex(r) || we.rgb(r) || we.hsl(r)
    },
    key: function(r) {
        return !Pf.hasOwnProperty(r) && !El.hasOwnProperty(r) && r !== "targets" && r !== "keyframes"
    }
};

function If(r) {
    var e = /\(([^)]+)\)/.exec(r);
    return e ? e[1].split(",").map(function(t) {
        return parseFloat(t)
    }) : []
}

function Df(r, e) {
    var t = If(r),
        n = cn(we.und(t[0]) ? 1 : t[0], .1, 100),
        i = cn(we.und(t[1]) ? 100 : t[1], .1, 100),
        s = cn(we.und(t[2]) ? 10 : t[2], .1, 100),
        a = cn(we.und(t[3]) ? 0 : t[3], .1, 100),
        o = Math.sqrt(i / n),
        l = s / (2 * Math.sqrt(i * n)),
        c = l < 1 ? o * Math.sqrt(1 - l * l) : 0,
        u = 1,
        h = l < 1 ? (l * o + -a) / c : -a + o;

    function f(p) {
        var v = e ? e * p / 1e3 : p;
        return l < 1 ? v = Math.exp(-v * l * o) * (u * Math.cos(c * v) + h * Math.sin(c * v)) : v = (u + h * v) * Math.exp(-v * o), p === 0 || p === 1 ? p : 1 - v
    }

    function d() {
        var p = Aa.springs[r];
        if (p) return p;
        for (var v = 1 / 6, y = 0, m = 0;;)
            if (y += v, f(y) === 1) {
                if (m++, m >= 16) break
            } else m = 0;
        var g = y * v * 1e3;
        return Aa.springs[r] = g, g
    }
    return e ? f : d
}

function dM(r) {
    return r === void 0 && (r = 10),
        function(e) {
            return Math.ceil(cn(e, 1e-6, 1) * r) * (1 / r)
        }
}
var pM = function() {
        var r = 11,
            e = 1 / (r - 1);

        function t(u, h) {
            return 1 - 3 * h + 3 * u
        }

        function n(u, h) {
            return 3 * h - 6 * u
        }

        function i(u) {
            return 3 * u
        }

        function s(u, h, f) {
            return ((t(h, f) * u + n(h, f)) * u + i(h)) * u
        }

        function a(u, h, f) {
            return 3 * t(h, f) * u * u + 2 * n(h, f) * u + i(h)
        }

        function o(u, h, f, d, p) {
            var v, y, m = 0;
            do y = h + (f - h) / 2, v = s(y, d, p) - u, v > 0 ? f = y : h = y; while (Math.abs(v) > 1e-7 && ++m < 10);
            return y
        }

        function l(u, h, f, d) {
            for (var p = 0; p < 4; ++p) {
                var v = a(h, f, d);
                if (v === 0) return h;
                var y = s(h, f, d) - u;
                h -= y / v
            }
            return h
        }

        function c(u, h, f, d) {
            if (!(0 <= u && u <= 1 && 0 <= f && f <= 1)) return;
            var p = new Float32Array(r);
            if (u !== h || f !== d)
                for (var v = 0; v < r; ++v) p[v] = s(v * e, u, f);

            function y(m) {
                for (var g = 0, x = 1, _ = r - 1; x !== _ && p[x] <= m; ++x) g += e;
                --x;
                var w = (m - p[x]) / (p[x + 1] - p[x]),
                    T = g + w * e,
                    M = a(T, u, f);
                return M >= .001 ? l(m, T, u, f) : M === 0 ? T : o(m, g, g + e, u, f)
            }
            return function(m) {
                return u === h && f === d || m === 0 || m === 1 ? m : s(y(m), h, d)
            }
        }
        return c
    }(),
    Ff = function() {
        var r = {
                linear: function() {
                    return function(n) {
                        return n
                    }
                }
            },
            e = {
                Sine: function() {
                    return function(n) {
                        return 1 - Math.cos(n * Math.PI / 2)
                    }
                },
                Circ: function() {
                    return function(n) {
                        return 1 - Math.sqrt(1 - n * n)
                    }
                },
                Back: function() {
                    return function(n) {
                        return n * n * (3 * n - 2)
                    }
                },
                Bounce: function() {
                    return function(n) {
                        for (var i, s = 4; n < ((i = Math.pow(2, --s)) - 1) / 11;);
                        return 1 / Math.pow(4, 3 - s) - 7.5625 * Math.pow((i * 3 - 2) / 22 - n, 2)
                    }
                },
                Elastic: function(n, i) {
                    n === void 0 && (n = 1), i === void 0 && (i = .5);
                    var s = cn(n, 1, 10),
                        a = cn(i, .1, 2);
                    return function(o) {
                        return o === 0 || o === 1 ? o : -s * Math.pow(2, 10 * (o - 1)) * Math.sin((o - 1 - a / (Math.PI * 2) * Math.asin(1 / s)) * (Math.PI * 2) / a)
                    }
                }
            },
            t = ["Quad", "Cubic", "Quart", "Quint", "Expo"];
        return t.forEach(function(n, i) {
            e[n] = function() {
                return function(s) {
                    return Math.pow(s, i + 2)
                }
            }
        }), Object.keys(e).forEach(function(n) {
            var i = e[n];
            r["easeIn" + n] = i, r["easeOut" + n] = function(s, a) {
                return function(o) {
                    return 1 - i(s, a)(1 - o)
                }
            }, r["easeInOut" + n] = function(s, a) {
                return function(o) {
                    return o < .5 ? i(s, a)(o * 2) / 2 : 1 - i(s, a)(o * -2 + 2) / 2
                }
            }, r["easeOutIn" + n] = function(s, a) {
                return function(o) {
                    return o < .5 ? (1 - i(s, a)(1 - o * 2)) / 2 : (i(s, a)(o * 2 - 1) + 1) / 2
                }
            }
        }), r
    }();

function Ll(r, e) {
    if (we.fnc(r)) return r;
    var t = r.split("(")[0],
        n = Ff[t],
        i = If(r);
    switch (t) {
        case "spring":
            return Df(r, e);
        case "cubicBezier":
            return Al(pM, i);
        case "steps":
            return Al(dM, i);
        default:
            return Al(n, i)
    }
}

function Nf(r) {
    try {
        var e = document.querySelectorAll(r);
        return e
    } catch {
        return
    }
}

function La(r, e) {
    for (var t = r.length, n = arguments.length >= 2 ? arguments[1] : void 0, i = [], s = 0; s < t; s++)
        if (s in r) {
            var a = r[s];
            e.call(n, a, s, r) && i.push(a)
        }
    return i
}

function Ra(r) {
    return r.reduce(function(e, t) {
        return e.concat(we.arr(t) ? Ra(t) : t)
    }, [])
}

function Of(r) {
    return we.arr(r) ? r : (we.str(r) && (r = Nf(r) || r), r instanceof NodeList || r instanceof HTMLCollection ? [].slice.call(r) : [r])
}

function Rl(r, e) {
    return r.some(function(t) {
        return t === e
    })
}

function Cl(r) {
    var e = {};
    for (var t in r) e[t] = r[t];
    return e
}

function Pl(r, e) {
    var t = Cl(r);
    for (var n in r) t[n] = e.hasOwnProperty(n) ? e[n] : r[n];
    return t
}

function Ca(r, e) {
    var t = Cl(r);
    for (var n in e) t[n] = we.und(r[n]) ? e[n] : r[n];
    return t
}

function mM(r) {
    var e = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);
    return e ? "rgba(" + e[1] + ",1)" : r
}

function gM(r) {
    var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        t = r.replace(e, function(o, l, c, u) {
            return l + l + c + c + u + u
        }),
        n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),
        i = parseInt(n[1], 16),
        s = parseInt(n[2], 16),
        a = parseInt(n[3], 16);
    return "rgba(" + i + "," + s + "," + a + ",1)"
}

function vM(r) {
    var e = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(r) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(r),
        t = parseInt(e[1], 10) / 360,
        n = parseInt(e[2], 10) / 100,
        i = parseInt(e[3], 10) / 100,
        s = e[4] || 1;

    function a(f, d, p) {
        return p < 0 && (p += 1), p > 1 && (p -= 1), p < 1 / 6 ? f + (d - f) * 6 * p : p < 1 / 2 ? d : p < 2 / 3 ? f + (d - f) * (2 / 3 - p) * 6 : f
    }
    var o, l, c;
    if (n == 0) o = l = c = i;
    else {
        var u = i < .5 ? i * (1 + n) : i + n - i * n,
            h = 2 * i - u;
        o = a(h, u, t + 1 / 3), l = a(h, u, t), c = a(h, u, t - 1 / 3)
    }
    return "rgba(" + o * 255 + "," + l * 255 + "," + c * 255 + "," + s + ")"
}

function yM(r) {
    if (we.rgb(r)) return mM(r);
    if (we.hex(r)) return gM(r);
    if (we.hsl(r)) return vM(r)
}

function Sn(r) {
    var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(r);
    if (e) return e[1]
}

function xM(r) {
    if (fs(r, "translate") || r === "perspective") return "px";
    if (fs(r, "rotate") || fs(r, "skew")) return "deg"
}

function Il(r, e) {
    return we.fnc(r) ? r(e.target, e.id, e.total) : r
}

function un(r, e) {
    return r.getAttribute(e)
}

function Dl(r, e, t) {
    var n = Sn(e);
    if (Rl([t, "deg", "rad", "turn"], n)) return e;
    var i = Aa.CSS[e + t];
    if (!we.und(i)) return i;
    var s = 100,
        a = document.createElement(r.tagName),
        o = r.parentNode && r.parentNode !== document ? r.parentNode : document.body;
    o.appendChild(a), a.style.position = "absolute", a.style.width = s + t;
    var l = s / a.offsetWidth;
    o.removeChild(a);
    var c = l * parseFloat(e);
    return Aa.CSS[e + t] = c, c
}

function Bf(r, e, t) {
    if (e in r.style) {
        var n = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
            i = r.style[e] || getComputedStyle(r).getPropertyValue(n) || "0";
        return t ? Dl(r, i, t) : i
    }
}

function Fl(r, e) {
    if (we.dom(r) && !we.inp(r) && (!we.nil(un(r, e)) || we.svg(r) && r[e])) return "attribute";
    if (we.dom(r) && Rl(fM, e)) return "transform";
    if (we.dom(r) && e !== "transform" && Bf(r, e)) return "css";
    if (r[e] != null) return "object"
}

function zf(r) {
    if (!!we.dom(r)) {
        for (var e = r.style.transform || "", t = /(\w+)\(([^)]*)\)/g, n = new Map, i; i = t.exec(e);) n.set(i[1], i[2]);
        return n
    }
}

function _M(r, e, t, n) {
    var i = fs(e, "scale") ? 1 : 0 + xM(e),
        s = zf(r).get(e) || i;
    return t && (t.transforms.list.set(e, s), t.transforms.last = e), n ? Dl(r, s, n) : s
}

function Nl(r, e, t, n) {
    switch (Fl(r, e)) {
        case "transform":
            return _M(r, e, n, t);
        case "css":
            return Bf(r, e, t);
        case "attribute":
            return un(r, e);
        default:
            return r[e] || 0
    }
}

function Ol(r, e) {
    var t = /^(\*=|\+=|-=)/.exec(r);
    if (!t) return r;
    var n = Sn(r) || 0,
        i = parseFloat(e),
        s = parseFloat(r.replace(t[0], ""));
    switch (t[0][0]) {
        case "+":
            return i + s + n;
        case "-":
            return i - s + n;
        case "*":
            return i * s + n
    }
}

function Uf(r, e) {
    if (we.col(r)) return yM(r);
    if (/\s/g.test(r)) return r;
    var t = Sn(r),
        n = t ? r.substr(0, r.length - t.length) : r;
    return e ? n + e : n
}

function Bl(r, e) {
    return Math.sqrt(Math.pow(e.x - r.x, 2) + Math.pow(e.y - r.y, 2))
}

function MM(r) {
    return Math.PI * 2 * un(r, "r")
}

function wM(r) {
    return un(r, "width") * 2 + un(r, "height") * 2
}

function bM(r) {
    return Bl({
        x: un(r, "x1"),
        y: un(r, "y1")
    }, {
        x: un(r, "x2"),
        y: un(r, "y2")
    })
}

function kf(r) {
    for (var e = r.points, t = 0, n, i = 0; i < e.numberOfItems; i++) {
        var s = e.getItem(i);
        i > 0 && (t += Bl(n, s)), n = s
    }
    return t
}

function SM(r) {
    var e = r.points;
    return kf(r) + Bl(e.getItem(e.numberOfItems - 1), e.getItem(0))
}

function Gf(r) {
    if (r.getTotalLength) return r.getTotalLength();
    switch (r.tagName.toLowerCase()) {
        case "circle":
            return MM(r);
        case "rect":
            return wM(r);
        case "line":
            return bM(r);
        case "polyline":
            return kf(r);
        case "polygon":
            return SM(r)
    }
}

function TM(r) {
    var e = Gf(r);
    return r.setAttribute("stroke-dasharray", e), e
}

function EM(r) {
    for (var e = r.parentNode; we.svg(e) && we.svg(e.parentNode);) e = e.parentNode;
    return e
}

function Hf(r, e) {
    var t = e || {},
        n = t.el || EM(r),
        i = n.getBoundingClientRect(),
        s = un(n, "viewBox"),
        a = i.width,
        o = i.height,
        l = t.viewBox || (s ? s.split(" ") : [0, 0, a, o]);
    return {
        el: n,
        viewBox: l,
        x: l[0] / 1,
        y: l[1] / 1,
        w: a,
        h: o,
        vW: l[2],
        vH: l[3]
    }
}

function AM(r, e) {
    var t = we.str(r) ? Nf(r)[0] : r,
        n = e || 100;
    return function(i) {
        return {
            property: i,
            el: t,
            svg: Hf(t),
            totalLength: Gf(t) * (n / 100)
        }
    }
}

function LM(r, e, t) {
    function n(u) {
        u === void 0 && (u = 0);
        var h = e + u >= 1 ? e + u : 0;
        return r.el.getPointAtLength(h)
    }
    var i = Hf(r.el, r.svg),
        s = n(),
        a = n(-1),
        o = n(1),
        l = t ? 1 : i.w / i.vW,
        c = t ? 1 : i.h / i.vH;
    switch (r.property) {
        case "x":
            return (s.x - i.x) * l;
        case "y":
            return (s.y - i.y) * c;
        case "angle":
            return Math.atan2(o.y - a.y, o.x - a.x) * 180 / Math.PI
    }
}

function Vf(r, e) {
    var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
        n = Uf(we.pth(r) ? r.totalLength : r, e) + "";
    return {
        original: n,
        numbers: n.match(t) ? n.match(t).map(Number) : [0],
        strings: we.str(r) || e ? n.split(t) : []
    }
}

function zl(r) {
    var e = r ? Ra(we.arr(r) ? r.map(Of) : Of(r)) : [];
    return La(e, function(t, n, i) {
        return i.indexOf(t) === n
    })
}

function Wf(r) {
    var e = zl(r);
    return e.map(function(t, n) {
        return {
            target: t,
            id: n,
            total: e.length,
            transforms: {
                list: zf(t)
            }
        }
    })
}

function RM(r, e) {
    var t = Cl(e);
    if (/^spring/.test(t.easing) && (t.duration = Df(t.easing)), we.arr(r)) {
        var n = r.length,
            i = n === 2 && !we.obj(r[0]);
        i ? r = {
            value: r
        } : we.fnc(e.duration) || (t.duration = e.duration / n)
    }
    var s = we.arr(r) ? r : [r];
    return s.map(function(a, o) {
        var l = we.obj(a) && !we.pth(a) ? a : {
            value: a
        };
        return we.und(l.delay) && (l.delay = o ? 0 : e.delay), we.und(l.endDelay) && (l.endDelay = o === s.length - 1 ? e.endDelay : 0), l
    }).map(function(a) {
        return Ca(a, t)
    })
}

function CM(r) {
    for (var e = La(Ra(r.map(function(s) {
            return Object.keys(s)
        })), function(s) {
            return we.key(s)
        }).reduce(function(s, a) {
            return s.indexOf(a) < 0 && s.push(a), s
        }, []), t = {}, n = function(s) {
            var a = e[s];
            t[a] = r.map(function(o) {
                var l = {};
                for (var c in o) we.key(c) ? c == a && (l.value = o[c]) : l[c] = o[c];
                return l
            })
        }, i = 0; i < e.length; i++) n(i);
    return t
}

function PM(r, e) {
    var t = [],
        n = e.keyframes;
    n && (e = Ca(CM(n), e));
    for (var i in e) we.key(i) && t.push({
        name: i,
        tweens: RM(e[i], r)
    });
    return t
}

function IM(r, e) {
    var t = {};
    for (var n in r) {
        var i = Il(r[n], e);
        we.arr(i) && (i = i.map(function(s) {
            return Il(s, e)
        }), i.length === 1 && (i = i[0])), t[n] = i
    }
    return t.duration = parseFloat(t.duration), t.delay = parseFloat(t.delay), t
}

function DM(r, e) {
    var t;
    return r.tweens.map(function(n) {
        var i = IM(n, e),
            s = i.value,
            a = we.arr(s) ? s[1] : s,
            o = Sn(a),
            l = Nl(e.target, r.name, o, e),
            c = t ? t.to.original : l,
            u = we.arr(s) ? s[0] : c,
            h = Sn(u) || Sn(l),
            f = o || h;
        return we.und(a) && (a = c), i.from = Vf(u, f), i.to = Vf(Ol(a, u), f), i.start = t ? t.end : 0, i.end = i.start + i.delay + i.duration + i.endDelay, i.easing = Ll(i.easing, i.duration), i.isPath = we.pth(s), i.isPathTargetInsideSVG = i.isPath && we.svg(e.target), i.isColor = we.col(i.from.original), i.isColor && (i.round = 1), t = i, i
    })
}
var Xf = {
    css: function(r, e, t) {
        return r.style[e] = t
    },
    attribute: function(r, e, t) {
        return r.setAttribute(e, t)
    },
    object: function(r, e, t) {
        return r[e] = t
    },
    transform: function(r, e, t, n, i) {
        if (n.list.set(e, t), e === n.last || i) {
            var s = "";
            n.list.forEach(function(a, o) {
                s += o + "(" + a + ") "
            }), r.style.transform = s
        }
    }
};

function jf(r, e) {
    var t = Wf(r);
    t.forEach(function(n) {
        for (var i in e) {
            var s = Il(e[i], n),
                a = n.target,
                o = Sn(s),
                l = Nl(a, i, o, n),
                c = o || Sn(l),
                u = Ol(Uf(s, c), l),
                h = Fl(a, i);
            Xf[h](a, i, u, n.transforms, !0)
        }
    })
}

function FM(r, e) {
    var t = Fl(r.target, e.name);
    if (t) {
        var n = DM(e, r),
            i = n[n.length - 1];
        return {
            type: t,
            property: e.name,
            animatable: r,
            tweens: n,
            duration: i.end,
            delay: n[0].delay,
            endDelay: i.endDelay
        }
    }
}

function NM(r, e) {
    return La(Ra(r.map(function(t) {
        return e.map(function(n) {
            return FM(t, n)
        })
    })), function(t) {
        return !we.und(t)
    })
}

function qf(r, e) {
    var t = r.length,
        n = function(s) {
            return s.timelineOffset ? s.timelineOffset : 0
        },
        i = {};
    return i.duration = t ? Math.max.apply(Math, r.map(function(s) {
        return n(s) + s.duration
    })) : e.duration, i.delay = t ? Math.min.apply(Math, r.map(function(s) {
        return n(s) + s.delay
    })) : e.delay, i.endDelay = t ? i.duration - Math.max.apply(Math, r.map(function(s) {
        return n(s) + s.duration - s.endDelay
    })) : e.endDelay, i
}
var Yf = 0;

function OM(r) {
    var e = Pl(Pf, r),
        t = Pl(El, r),
        n = PM(t, r),
        i = Wf(r.targets),
        s = NM(i, n),
        a = qf(s, t),
        o = Yf;
    return Yf++, Ca(e, {
        id: o,
        children: [],
        animatables: i,
        animations: s,
        duration: a.duration,
        delay: a.delay,
        endDelay: a.endDelay
    })
}
var Qt = [],
    Zf = function() {
        var r;

        function e() {
            !r && (!Jf() || !ot.suspendWhenDocumentHidden) && Qt.length > 0 && (r = requestAnimationFrame(t))
        }

        function t(i) {
            for (var s = Qt.length, a = 0; a < s;) {
                var o = Qt[a];
                o.paused ? (Qt.splice(a, 1), s--) : (o.tick(i), a++)
            }
            r = a > 0 ? requestAnimationFrame(t) : void 0
        }

        function n() {
            !ot.suspendWhenDocumentHidden || (Jf() ? r = cancelAnimationFrame(r) : (Qt.forEach(function(i) {
                return i._onDocumentVisibility()
            }), Zf()))
        }
        return typeof document != "undefined" && document.addEventListener("visibilitychange", n), e
    }();

function Jf() {
    return !!document && document.hidden
}

function ot(r) {
    r === void 0 && (r = {});
    var e = 0,
        t = 0,
        n = 0,
        i, s = 0,
        a = null;

    function o(g) {
        var x = window.Promise && new Promise(function(_) {
            return a = _
        });
        return g.finished = x, x
    }
    var l = OM(r);
    o(l);

    function c() {
        var g = l.direction;
        g !== "alternate" && (l.direction = g !== "normal" ? "normal" : "reverse"), l.reversed = !l.reversed, i.forEach(function(x) {
            return x.reversed = l.reversed
        })
    }

    function u(g) {
        return l.reversed ? l.duration - g : g
    }

    function h() {
        e = 0, t = u(l.currentTime) * (1 / ot.speed)
    }

    function f(g, x) {
        x && x.seek(g - x.timelineOffset)
    }

    function d(g) {
        if (l.reversePlayback)
            for (var _ = s; _--;) f(g, i[_]);
        else
            for (var x = 0; x < s; x++) f(g, i[x])
    }

    function p(g) {
        for (var x = 0, _ = l.animations, w = _.length; x < w;) {
            var T = _[x],
                M = T.animatable,
                L = T.tweens,
                H = L.length - 1,
                P = L[H];
            H && (P = La(L, function(k) {
                return g < k.end
            })[0] || P);
            for (var R = cn(g - P.start - P.delay, 0, P.duration) / P.duration, j = isNaN(R) ? 1 : P.easing(R), I = P.to.strings, F = P.round, B = [], N = P.to.numbers.length, O = void 0, Y = 0; Y < N; Y++) {
                var re = void 0,
                    he = P.to.numbers[Y],
                    Q = P.from.numbers[Y] || 0;
                P.isPath ? re = LM(P.value, j * he, P.isPathTargetInsideSVG) : re = Q + j * (he - Q), F && (P.isColor && Y > 2 || (re = Math.round(re * F) / F)), B.push(re)
            }
            var ge = I.length;
            if (!ge) O = B[0];
            else {
                O = I[0];
                for (var X = 0; X < ge; X++) {
                    I[X];
                    var J = I[X + 1],
                        se = B[X];
                    isNaN(se) || (J ? O += se + J : O += se + " ")
                }
            }
            Xf[T.type](M.target, T.property, O, M.transforms), T.currentValue = O, x++
        }
    }

    function v(g) {
        l[g] && !l.passThrough && l[g](l)
    }

    function y() {
        l.remaining && l.remaining !== !0 && l.remaining--
    }

    function m(g) {
        var x = l.duration,
            _ = l.delay,
            w = x - l.endDelay,
            T = u(g);
        l.progress = cn(T / x * 100, 0, 100), l.reversePlayback = T < l.currentTime, i && d(T), !l.began && l.currentTime > 0 && (l.began = !0, v("begin")), !l.loopBegan && l.currentTime > 0 && (l.loopBegan = !0, v("loopBegin")), T <= _ && l.currentTime !== 0 && p(0), (T >= w && l.currentTime !== x || !x) && p(x), T > _ && T < w ? (l.changeBegan || (l.changeBegan = !0, l.changeCompleted = !1, v("changeBegin")), v("change"), p(T)) : l.changeBegan && (l.changeCompleted = !0, l.changeBegan = !1, v("changeComplete")), l.currentTime = cn(T, 0, x), l.began && v("update"), g >= x && (t = 0, y(), l.remaining ? (e = n, v("loopComplete"), l.loopBegan = !1, l.direction === "alternate" && c()) : (l.paused = !0, l.completed || (l.completed = !0, v("loopComplete"), v("complete"), !l.passThrough && "Promise" in window && (a(), o(l)))))
    }
    return l.reset = function() {
        var g = l.direction;
        l.passThrough = !1, l.currentTime = 0, l.progress = 0, l.paused = !0, l.began = !1, l.loopBegan = !1, l.changeBegan = !1, l.completed = !1, l.changeCompleted = !1, l.reversePlayback = !1, l.reversed = g === "reverse", l.remaining = l.loop, i = l.children, s = i.length;
        for (var x = s; x--;) l.children[x].reset();
        (l.reversed && l.loop !== !0 || g === "alternate" && l.loop === 1) && l.remaining++, p(l.reversed ? l.duration : 0)
    }, l._onDocumentVisibility = h, l.set = function(g, x) {
        return jf(g, x), l
    }, l.tick = function(g) {
        n = g, e || (e = n), m((n + (t - e)) * ot.speed)
    }, l.seek = function(g) {
        m(u(g))
    }, l.pause = function() {
        l.paused = !0, h()
    }, l.play = function() {
        !l.paused || (l.completed && l.reset(), l.paused = !1, Qt.push(l), h(), Zf())
    }, l.reverse = function() {
        c(), l.completed = !l.reversed, h()
    }, l.restart = function() {
        l.reset(), l.play()
    }, l.remove = function(g) {
        var x = zl(g);
        $f(x, l)
    }, l.reset(), l.autoplay && l.play(), l
}

function Kf(r, e) {
    for (var t = e.length; t--;) Rl(r, e[t].animatable.target) && e.splice(t, 1)
}

function $f(r, e) {
    var t = e.animations,
        n = e.children;
    Kf(r, t);
    for (var i = n.length; i--;) {
        var s = n[i],
            a = s.animations;
        Kf(r, a), !a.length && !s.children.length && n.splice(i, 1)
    }!t.length && !n.length && e.pause()
}

function BM(r) {
    for (var e = zl(r), t = Qt.length; t--;) {
        var n = Qt[t];
        $f(e, n)
    }
}

function zM(r, e) {
    e === void 0 && (e = {});
    var t = e.direction || "normal",
        n = e.easing ? Ll(e.easing) : null,
        i = e.grid,
        s = e.axis,
        a = e.from || 0,
        o = a === "first",
        l = a === "center",
        c = a === "last",
        u = we.arr(r),
        h = parseFloat(u ? r[0] : r),
        f = u ? parseFloat(r[1]) : 0,
        d = Sn(u ? r[1] : r) || 0,
        p = e.start || 0 + (u ? h : 0),
        v = [],
        y = 0;
    return function(m, g, x) {
        if (o && (a = 0), l && (a = (x - 1) / 2), c && (a = x - 1), !v.length) {
            for (var _ = 0; _ < x; _++) {
                if (!i) v.push(Math.abs(a - _));
                else {
                    var w = l ? (i[0] - 1) / 2 : a % i[0],
                        T = l ? (i[1] - 1) / 2 : Math.floor(a / i[0]),
                        M = _ % i[0],
                        L = Math.floor(_ / i[0]),
                        H = w - M,
                        P = T - L,
                        R = Math.sqrt(H * H + P * P);
                    s === "x" && (R = -H), s === "y" && (R = -P), v.push(R)
                }
                y = Math.max.apply(Math, v)
            }
            n && (v = v.map(function(I) {
                return n(I / y) * y
            })), t === "reverse" && (v = v.map(function(I) {
                return s ? I < 0 ? I * -1 : -I : Math.abs(y - I)
            }))
        }
        var j = u ? (f - h) / y : h;
        return p + j * (Math.round(v[g] * 100) / 100) + d
    }
}

function UM(r) {
    r === void 0 && (r = {});
    var e = ot(r);
    return e.duration = 0, e.add = function(t, n) {
        var i = Qt.indexOf(e),
            s = e.children;
        i > -1 && Qt.splice(i, 1);

        function a(f) {
            f.passThrough = !0
        }
        for (var o = 0; o < s.length; o++) a(s[o]);
        var l = Ca(t, Pl(El, r));
        l.targets = l.targets || r.targets;
        var c = e.duration;
        l.autoplay = !1, l.direction = e.direction, l.timelineOffset = we.und(n) ? c : Ol(n, c), a(e), e.seek(l.timelineOffset);
        var u = ot(l);
        a(u), s.push(u);
        var h = qf(s, r);
        return e.delay = h.delay, e.endDelay = h.endDelay, e.duration = h.duration, e.seek(0), e.reset(), e.autoplay && e.play(), e
    }, e
}
ot.version = "3.2.1";
ot.speed = 1;
ot.suspendWhenDocumentHidden = !0;
ot.running = Qt;
ot.remove = BM;
ot.get = Nl;
ot.set = jf;
ot.convertPx = Dl;
ot.path = AM;
ot.setDashoffset = TM;
ot.stagger = zM;
ot.timeline = UM;
ot.easing = Ll;
ot.penner = Ff;
ot.random = function(r, e) {
    return Math.floor(Math.random() * (e - r + 1)) + r
};
const Qf = {
        type: "change"
    },
    Ul = {
        type: "start"
    },
    kl = {
        type: "end"
    };
class jM extends Rn {
    constructor(e, t) {
        super();
        t === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), t === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new A, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
            LEFT: "ArrowLeft",
            UP: "ArrowUp",
            RIGHT: "ArrowRight",
            BOTTOM: "ArrowDown"
        }, this.mouseButtons = {
            LEFT: vi.ROTATE,
            MIDDLE: vi.DOLLY,
            RIGHT: vi.PAN
        }, this.touches = {
            ONE: yi.ROTATE,
            TWO: yi.DOLLY_PAN
        }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
            return o.phi
        }, this.getAzimuthalAngle = function() {
            return o.theta
        }, this.getDistance = function() {
            return this.object.position.distanceTo(this.target)
        }, this.listenToKeyEvents = function(C) {
            C.addEventListener("keydown", pe), this._domElementKeyEvents = C
        }, this.saveState = function() {
            n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom
        }, this.reset = function() {
            n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(Qf), n.update(), s = i.NONE
        }, this.update = function() {
            const C = new A,
                ie = new nt().setFromUnitVectors(e.up, new A(0, 1, 0)),
                De = ie.clone().invert(),
                Oe = new A,
                lt = new nt,
                Xe = 2 * Math.PI;
            return function() {
                const Ot = n.object.position;
                C.copy(Ot).sub(n.target), C.applyQuaternion(ie), o.setFromVector3(C), n.autoRotate && s === i.NONE && H(M()), n.enableDamping ? (o.theta += l.theta * n.dampingFactor, o.phi += l.phi * n.dampingFactor) : (o.theta += l.theta, o.phi += l.phi);
                let It = n.minAzimuthAngle,
                    Wt = n.maxAzimuthAngle;
                return isFinite(It) && isFinite(Wt) && (It < -Math.PI ? It += Xe : It > Math.PI && (It -= Xe), Wt < -Math.PI ? Wt += Xe : Wt > Math.PI && (Wt -= Xe), It <= Wt ? o.theta = Math.max(It, Math.min(Wt, o.theta)) : o.theta = o.theta > (It + Wt) / 2 ? Math.max(It, o.theta) : Math.min(Wt, o.theta)), o.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, o.phi)), o.makeSafe(), o.radius *= c, o.radius = Math.max(n.minDistance, Math.min(n.maxDistance, o.radius)), n.enableDamping === !0 ? n.target.addScaledVector(u, n.dampingFactor) : n.target.add(u), C.setFromSpherical(o), C.applyQuaternion(De), Ot.copy(n.target).add(C), n.object.lookAt(n.target), n.enableDamping === !0 ? (l.theta *= 1 - n.dampingFactor, l.phi *= 1 - n.dampingFactor, u.multiplyScalar(1 - n.dampingFactor)) : (l.set(0, 0, 0), u.set(0, 0, 0)), c = 1, h || Oe.distanceToSquared(n.object.position) > a || 8 * (1 - lt.dot(n.object.quaternion)) > a ? (n.dispatchEvent(Qf), Oe.copy(n.object.position), lt.copy(n.object.quaternion), h = !1, !0) : !1
            }
        }(), this.dispose = function() {
            n.domElement.removeEventListener("contextmenu", xe), n.domElement.removeEventListener("pointerdown", ne), n.domElement.removeEventListener("pointercancel", E), n.domElement.removeEventListener("wheel", ee), n.domElement.removeEventListener("pointermove", ye), n.domElement.removeEventListener("pointerup", le), n._domElementKeyEvents !== null && n._domElementKeyEvents.removeEventListener("keydown", pe)
        };
        const n = this,
            i = {
                NONE: -1,
                ROTATE: 0,
                DOLLY: 1,
                PAN: 2,
                TOUCH_ROTATE: 3,
                TOUCH_PAN: 4,
                TOUCH_DOLLY_PAN: 5,
                TOUCH_DOLLY_ROTATE: 6
            };
        let s = i.NONE;
        const a = 1e-6,
            o = new Th,
            l = new Th;
        let c = 1;
        const u = new A;
        let h = !1;
        const f = new K,
            d = new K,
            p = new K,
            v = new K,
            y = new K,
            m = new K,
            g = new K,
            x = new K,
            _ = new K,
            w = [],
            T = {};

        function M() {
            return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed
        }

        function L() {
            return Math.pow(.95, n.zoomSpeed)
        }

        function H(C) {
            l.theta -= C
        }

        function P(C) {
            l.phi -= C
        }
        const R = function() {
                const C = new A;
                return function(De, Oe) {
                    C.setFromMatrixColumn(Oe, 0), C.multiplyScalar(-De), u.add(C)
                }
            }(),
            j = function() {
                const C = new A;
                return function(De, Oe) {
                    n.screenSpacePanning === !0 ? C.setFromMatrixColumn(Oe, 1) : (C.setFromMatrixColumn(Oe, 0), C.crossVectors(n.object.up, C)), C.multiplyScalar(De), u.add(C)
                }
            }(),
            I = function() {
                const C = new A;
                return function(De, Oe) {
                    const lt = n.domElement;
                    if (n.object.isPerspectiveCamera) {
                        const Xe = n.object.position;
                        C.copy(Xe).sub(n.target);
                        let At = C.length();
                        At *= Math.tan(n.object.fov / 2 * Math.PI / 180), R(2 * De * At / lt.clientHeight, n.object.matrix), j(2 * Oe * At / lt.clientHeight, n.object.matrix)
                    } else n.object.isOrthographicCamera ? (R(De * (n.object.right - n.object.left) / n.object.zoom / lt.clientWidth, n.object.matrix), j(Oe * (n.object.top - n.object.bottom) / n.object.zoom / lt.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1)
                }
            }();

        function F(C) {
            n.object.isPerspectiveCamera ? c /= C : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * C)), n.object.updateProjectionMatrix(), h = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1)
        }

        function B(C) {
            n.object.isPerspectiveCamera ? c *= C : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / C)), n.object.updateProjectionMatrix(), h = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1)
        }

        function N(C) {
            f.set(C.clientX, C.clientY)
        }

        function O(C) {
            g.set(C.clientX, C.clientY)
        }

        function Y(C) {
            v.set(C.clientX, C.clientY)
        }

        function re(C) {
            d.set(C.clientX, C.clientY), p.subVectors(d, f).multiplyScalar(n.rotateSpeed);
            const ie = n.domElement;
            H(2 * Math.PI * p.x / ie.clientHeight), P(2 * Math.PI * p.y / ie.clientHeight), f.copy(d), n.update()
        }

        function he(C) {
            x.set(C.clientX, C.clientY), _.subVectors(x, g), _.y > 0 ? F(L()) : _.y < 0 && B(L()), g.copy(x), n.update()
        }

        function Q(C) {
            y.set(C.clientX, C.clientY), m.subVectors(y, v).multiplyScalar(n.panSpeed), I(m.x, m.y), v.copy(y), n.update()
        }

        function ge(C) {
            C.deltaY < 0 ? B(L()) : C.deltaY > 0 && F(L()), n.update()
        }

        function X(C) {
            let ie = !1;
            switch (C.code) {
                case n.keys.UP:
                    I(0, n.keyPanSpeed), ie = !0;
                    break;
                case n.keys.BOTTOM:
                    I(0, -n.keyPanSpeed), ie = !0;
                    break;
                case n.keys.LEFT:
                    I(n.keyPanSpeed, 0), ie = !0;
                    break;
                case n.keys.RIGHT:
                    I(-n.keyPanSpeed, 0), ie = !0;
                    break
            }
            ie && (C.preventDefault(), n.update())
        }

        function J() {
            if (w.length === 1) f.set(w[0].pageX, w[0].pageY);
            else {
                const C = .5 * (w[0].pageX + w[1].pageX),
                    ie = .5 * (w[0].pageY + w[1].pageY);
                f.set(C, ie)
            }
        }

        function se() {
            if (w.length === 1) v.set(w[0].pageX, w[0].pageY);
            else {
                const C = .5 * (w[0].pageX + w[1].pageX),
                    ie = .5 * (w[0].pageY + w[1].pageY);
                v.set(C, ie)
            }
        }

        function k() {
            const C = w[0].pageX - w[1].pageX,
                ie = w[0].pageY - w[1].pageY,
                De = Math.sqrt(C * C + ie * ie);
            g.set(0, De)
        }

        function ve() {
            n.enableZoom && k(), n.enablePan && se()
        }

        function Me() {
            n.enableZoom && k(), n.enableRotate && J()
        }

        function fe(C) {
            if (w.length == 1) d.set(C.pageX, C.pageY);
            else {
                const De = de(C),
                    Oe = .5 * (C.pageX + De.x),
                    lt = .5 * (C.pageY + De.y);
                d.set(Oe, lt)
            }
            p.subVectors(d, f).multiplyScalar(n.rotateSpeed);
            const ie = n.domElement;
            H(2 * Math.PI * p.x / ie.clientHeight), P(2 * Math.PI * p.y / ie.clientHeight), f.copy(d)
        }

        function me(C) {
            if (w.length === 1) y.set(C.pageX, C.pageY);
            else {
                const ie = de(C),
                    De = .5 * (C.pageX + ie.x),
                    Oe = .5 * (C.pageY + ie.y);
                y.set(De, Oe)
            }
            m.subVectors(y, v).multiplyScalar(n.panSpeed), I(m.x, m.y), v.copy(y)
        }

        function Ee(C) {
            const ie = de(C),
                De = C.pageX - ie.x,
                Oe = C.pageY - ie.y,
                lt = Math.sqrt(De * De + Oe * Oe);
            x.set(0, lt), _.set(0, Math.pow(x.y / g.y, n.zoomSpeed)), F(_.y), g.copy(x)
        }

        function W(C) {
            n.enableZoom && Ee(C), n.enablePan && me(C)
        }

        function $(C) {
            n.enableZoom && Ee(C), n.enableRotate && fe(C)
        }

        function ne(C) {
            n.enabled !== !1 && (w.length === 0 && (n.domElement.setPointerCapture(C.pointerId), n.domElement.addEventListener("pointermove", ye), n.domElement.addEventListener("pointerup", le)), D(C), C.pointerType === "touch" ? be(C) : S(C))
        }

        function ye(C) {
            n.enabled !== !1 && (C.pointerType === "touch" ? _e(C) : V(C))
        }

        function le(C) {
            n.enabled !== !1 && (C.pointerType === "touch" ? Ae() : te(), ce(C), w.length === 0 && (n.domElement.releasePointerCapture(C.pointerId), n.domElement.removeEventListener("pointermove", ye), n.domElement.removeEventListener("pointerup", le)))
        }

        function E(C) {
            ce(C)
        }

        function S(C) {
            let ie;
            switch (C.button) {
                case 0:
                    ie = n.mouseButtons.LEFT;
                    break;
                case 1:
                    ie = n.mouseButtons.MIDDLE;
                    break;
                case 2:
                    ie = n.mouseButtons.RIGHT;
                    break;
                default:
                    ie = -1
            }
            switch (ie) {
                case vi.DOLLY:
                    if (n.enableZoom === !1) return;
                    O(C), s = i.DOLLY;
                    break;
                case vi.ROTATE:
                    if (C.ctrlKey || C.metaKey || C.shiftKey) {
                        if (n.enablePan === !1) return;
                        Y(C), s = i.PAN
                    } else {
                        if (n.enableRotate === !1) return;
                        N(C), s = i.ROTATE
                    }
                    break;
                case vi.PAN:
                    if (C.ctrlKey || C.metaKey || C.shiftKey) {
                        if (n.enableRotate === !1) return;
                        N(C), s = i.ROTATE
                    } else {
                        if (n.enablePan === !1) return;
                        Y(C), s = i.PAN
                    }
                    break;
                default:
                    s = i.NONE
            }
            s !== i.NONE && n.dispatchEvent(Ul)
        }

        function V(C) {
            if (n.enabled !== !1) switch (s) {
                case i.ROTATE:
                    if (n.enableRotate === !1) return;
                    re(C);
                    break;
                case i.DOLLY:
                    if (n.enableZoom === !1) return;
                    he(C);
                    break;
                case i.PAN:
                    if (n.enablePan === !1) return;
                    Q(C);
                    break
            }
        }

        function te(C) {
            n.dispatchEvent(kl), s = i.NONE
        }

        function ee(C) {
            n.enabled === !1 || n.enableZoom === !1 || s !== i.NONE && s !== i.ROTATE || (C.preventDefault(), n.dispatchEvent(Ul), ge(C), n.dispatchEvent(kl))
        }

        function pe(C) {
            n.enabled === !1 || n.enablePan === !1 || X(C)
        }

        function be(C) {
            switch (Z(C), w.length) {
                case 1:
                    switch (n.touches.ONE) {
                        case yi.ROTATE:
                            if (n.enableRotate === !1) return;
                            J(), s = i.TOUCH_ROTATE;
                            break;
                        case yi.PAN:
                            if (n.enablePan === !1) return;
                            se(), s = i.TOUCH_PAN;
                            break;
                        default:
                            s = i.NONE
                    }
                    break;
                case 2:
                    switch (n.touches.TWO) {
                        case yi.DOLLY_PAN:
                            if (n.enableZoom === !1 && n.enablePan === !1) return;
                            ve(), s = i.TOUCH_DOLLY_PAN;
                            break;
                        case yi.DOLLY_ROTATE:
                            if (n.enableZoom === !1 && n.enableRotate === !1) return;
                            Me(), s = i.TOUCH_DOLLY_ROTATE;
                            break;
                        default:
                            s = i.NONE
                    }
                    break;
                default:
                    s = i.NONE
            }
            s !== i.NONE && n.dispatchEvent(Ul)
        }

        function _e(C) {
            switch (Z(C), s) {
                case i.TOUCH_ROTATE:
                    if (n.enableRotate === !1) return;
                    fe(C), n.update();
                    break;
                case i.TOUCH_PAN:
                    if (n.enablePan === !1) return;
                    me(C), n.update();
                    break;
                case i.TOUCH_DOLLY_PAN:
                    if (n.enableZoom === !1 && n.enablePan === !1) return;
                    W(C), n.update();
                    break;
                case i.TOUCH_DOLLY_ROTATE:
                    if (n.enableZoom === !1 && n.enableRotate === !1) return;
                    $(C), n.update();
                    break;
                default:
                    s = i.NONE
            }
        }

        function Ae(C) {
            n.dispatchEvent(kl), s = i.NONE
        }

        function xe(C) {
            n.enabled !== !1 && C.preventDefault()
        }

        function D(C) {
            w.push(C)
        }

        function ce(C) {
            delete T[C.pointerId];
            for (let ie = 0; ie < w.length; ie++)
                if (w[ie].pointerId == C.pointerId) {
                    w.splice(ie, 1);
                    return
                }
        }

        function Z(C) {
            let ie = T[C.pointerId];
            ie === void 0 && (ie = new K, T[C.pointerId] = ie), ie.set(C.pageX, C.pageY)
        }

        function de(C) {
            const ie = C.pointerId === w[0].pointerId ? w[1] : w[0];
            return T[ie.pointerId]
        }
        n.domElement.addEventListener("contextmenu", xe), n.domElement.addEventListener("pointerdown", ne), n.domElement.addEventListener("pointercancel", E), n.domElement.addEventListener("wheel", ee, {
            passive: !1
        }), this.update()
    }
}

function qM(r) {
    const e = new Map,
        t = new Map,
        n = r.clone();
    return ed(r, n, function(i, s) {
        e.set(s, i), t.set(i, s)
    }), n.traverse(function(i) {
        if (!i.isSkinnedMesh) return;
        const s = i,
            a = e.get(i),
            o = a.skeleton.bones;
        s.skeleton = a.skeleton.clone(), s.bindMatrix.copy(a.bindMatrix), s.skeleton.bones = o.map(function(l) {
            return t.get(l)
        }), s.bind(s.skeleton, s.bindMatrix)
    }), n
}

function ed(r, e, t) {
    t(r, e);
    for (let n = 0; n < r.children.length; n++) ed(r.children[n], e.children[n], t)
}
export {
    GM as A, Or as B, Ox as C, XM as D, WM as F, VM as G, Ax as L, _t as M, Sr as N, jM as O, wt as P, Jl as R, Au as S, Ho as T, A as V, je as W, or as a, zx as b, Dx as c, ot as d, HM as e, vo as f, Fn as g, rn as h, qM as i, Jx as j, ha as k, Rp as l, ti as m, An as n, ua as o, xi as p, yh as q, fa as r, Rt as s, qu as t, He as u, $e as v, Ro as w, ec as x
};