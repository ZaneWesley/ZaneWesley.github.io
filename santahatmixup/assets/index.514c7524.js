var J = Object.defineProperty;
var K = (h, t, e) => t in h ? J(h, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : h[t] = e;
var s = (h, t, e) => (K(h, typeof t != "symbol" ? t + "" : t, e), e);
import {
    L as $,
    A as tt,
    T as x,
    G as et,
    D as st,
    F as it,
    a as nt,
    b as ot,
    c as at,
    d as c,
    R as rt,
    S as ht,
    P as lt,
    W as ct,
    s as dt,
    V as N,
    e as ut,
    M as B,
    N as mt,
    f as k,
    g as I,
    h as y,
    i as C,
    j as pt,
    k as z,
    l as gt,
    m as ft,
    n as D,
    B as vt,
    o as wt,
    p as yt,
    q as bt,
    r as Lt,
    t as W,
    u as F,
    v as P,
    w as X,
    x as Y,
    O as Bt,
    C as Mt
} from "./vendor.96cf05b0.js";
const Tt = function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
    new MutationObserver(o => {
        for (const n of o)
            if (n.type === "childList")
                for (const a of n.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && i(a)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function e(o) {
        const n = {};
        return o.integrity && (n.integrity = o.integrity), o.referrerpolicy && (n.referrerPolicy = o.referrerpolicy), o.crossorigin === "use-credentials" ? n.credentials = "include" : o.crossorigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n
    }

    function i(o) {
        if (o.ep) return;
        o.ep = !0;
        const n = e(o);
        fetch(o.href, n)
    }
};
Tt();
const St = "assets/sounds",
    G = "assets/graphics",
    U = "assets/textures",
    Q = "assets/models";
class Et {
    constructor(t) {
        s(this, "sh3d");
        s(this, "loadingManager");
        s(this, "loaded", !1);
        s(this, "onLoad");
        s(this, "onProgress");
        s(this, "soundOn", !0);
        s(this, "showDelay");
        s(this, "config");
        s(this, "BoardTextures");
        s(this, "audioList", []);
        s(this, "models");
        s(this, "modelAnim");
        s(this, "textures");
        s(this, "atlas");
        s(this, "atlasData");
        s(this, "audios");
        this.sh3d = t, this.config = t.config, this.init()
    }
    init() {
        const t = this.loadingManager = new $,
            e = this;
        this.models = {}, this.modelAnim = {}, this.atlasData = {}, this.atlas = {}, this.audios = {}, this.textures = {}, t.onLoad = function() {
            e.loaded = !0, console.log("Assets loaded"), e.onLoad && e.onLoad.call(e)
        }, t.onProgress = function(i, o, n) {
            e.onProgress && e.onProgress.call(e, i, o, n)
        }
    }
    load() {
        this.loadAudios(["BackgroundMusic", "ButtonClick", "Firework", "WonTune", "LoseTune", "PieceMove", "Swap"]), this.loadTextures(["Firework", "Shadow", "Snow", "Snowflakes"]), this.loadTextureAtlas(["FireTarget", "SmokeReveal"]), this.loadBoardTextures(), this.loadGLBModels(["Santa1", "Santa2", "Santa3", "SantaHat", "ChristmasTree"]), this.loadFBXModels()
    }
    loadAudios(t = []) {
        const e = this,
            i = new tt,
            o = (n, a) => {
                const r = new ot(i);
                new at(e.loadingManager).load(St + "/" + n + ".mp3", function(d) {
                    r.setBuffer(d), n === "BackgroundMusic" && r.setLoop(!0), e.audios[n] = r, a && a.call(e)
                })
            };
        for (let n = 0; n < t.length; n++) o(t[n])
    }
    loadTextures(t = []) {
        const e = this,
            i = new x(this.loadingManager),
            o = function(n) {
                i.load(G + "/" + n + ".png", function(a) {
                    e.textures[n] = a
                })
            };
        for (let n = 0; n < t.length; n++) o(t[n])
    }
    loadBoardTextures() {
        const t = this,
            e = this.sh3d.config.general.boardTextures,
            i = new x(this.loadingManager);
        this.BoardTextures = [];
        const o = function(a) {
            i.load(G + "/" + a, function(r) {
                t.BoardTextures.push(r)
            })
        };
        for (var n = 0; n < e.length; n++) o(e[n])
    }
    loadGLBModels(t = []) {
        const e = this,
            i = new et(e.loadingManager),
            o = new st;
        o.setDecoderPath("libs/draco/"), i.setDRACOLoader(o);
        const n = function(a) {
            i.load(Q + "/" + a + ".glb", function(r) {
                const l = r.scene;
                e.models[a] = l, r.animations && (e.modelAnim[a] = r.animations), l.frustumCulled = !1
            })
        };
        for (let a = 0; a < t.length; a++) n(t[a])
    }
    loadFBXModels(t = []) {
        const e = this,
            i = new it(this.loadingManager),
            o = function(n) {
                i.load(Q + "/" + n + ".fbx", function(a) {
                    e.models[n] = a, e.modelAnim[n] = a.animations, a.traverse(function(r) {
                        r.isMesh
                    })
                })
            };
        for (let n = 0; n < t.length; n++) o(t[n])
    }
    loadTextureAtlas(t = []) {
        const e = this,
            i = new nt(this.loadingManager),
            o = new x(this.loadingManager),
            n = function(a) {
                i.load(U + "/" + a + ".json", function(r) {
                    e.atlasData[a] = JSON.parse(r)
                }), o.load(U + "/" + a + ".png", function(r) {
                    e.atlas[a] = r
                })
            };
        for (let a = 0; a < t.length; a++) n(t[a])
    }
    toggleSound() {
        if (this.soundOn = !this.soundOn, this.soundOn)
            for (let t in this.audios) this.audios[t].setVolume(1);
        else
            for (let t in this.audios) this.audios[t].setVolume(0)
    }
}
class xt {
    constructor(t, e) {
        s(this, "dataString");
        s(this, "config");
        s(this, "data");
        this.dataString = e, this.config = t, this.init(e)
    }
    init(t) {
        if (t == null) {
            this.data = {
                name: "SantaHat",
                unlocked: []
            };
            const e = this.config.data.levels;
            for (let i = 0; i < e.length; i++) this.data.unlocked[i] = 0;
            this.save()
        } else this.data = JSON.parse(t)
    }
    save() {
        this.data != null && localStorage.setItem("SantaHat", JSON.stringify(this.data))
    }
    isUnlocked(t) {
        return t == 0 ? !0 : this.data.unlocked[t] === 1
    }
    saveUnlock(t) {
        const e = this.data.unlocked;
        e[t] = 1, this.save()
    }
}
class M {
    constructor(t = 300, e = 300) {
        s(this, "width");
        s(this, "height");
        s(this, "overlay");
        s(this, "el");
        s(this, "closeBtn");
        this.width = t, this.height = e
    }
    init() {
        const t = this.overlay = document.createElement("div");
        t.className = "rs-game-overlay";
        const e = this.el = document.createElement("div");
        e.className = "rs-game-panel", e.style.width = this.width + "px", e.style.height = this.height + "px";
        const i = this.closeBtn = document.createElement("span");
        i.className = "rs-closebtn", i.innerHTML = "&times", e.appendChild(i), i.addEventListener("click", this.hide.bind(this))
    }
    show() {
        document.body.appendChild(this.overlay), document.body.appendChild(this.el), c.remove(this.el), c({
            targets: this.el,
            opacity: [0, 1],
            duration: 800,
            easing: "easeOutQuint"
        })
    }
    hide() {
        document.body.contains(this.overlay) && document.body.removeChild(this.overlay), document.body.contains(this.el) && document.body.removeChild(this.el)
    }
}
const _ = .85;
class Ct extends M {
    constructor() {
        super(...arguments);
        s(this, "img")
    }
    init() {
        super.init(), this.el.classList.add("rs-image-panel");
        const t = this.img = document.createElement("img");
        this.el.appendChild(this.img), this.el.style.width = this.el.style.height = "auto", t.addEventListener("click", this.hide.bind(this)), t.onload = function() {
            const e = t.naturalWidth / t.naturalHeight;
            t.naturalHeight >= window.innerHeight && (t.height = window.innerHeight * _, t.width = t.height * e), t.naturalWidth >= window.innerWidth && (t.width = window.innerWidth * _, t.height = t.width / e)
        }
    }
    showImageSource(t) {
        this.img.src = t, super.show()
    }
}
class Pt {
    constructor(t = 1e3, e = 600, i = 60) {
        s(this, "width");
        s(this, "height");
        s(this, "fov");
        s(this, "scene");
        s(this, "camera");
        s(this, "renderer");
        s(this, "raycaster");
        s(this, "el");
        s(this, "rId");
        s(this, "thfov");
        this.width = t, this.height = e, this.fov = i, this.init()
    }
    init() {
        console.log("THREE revision", rt), this.scene = new ht, this.camera = new lt(this.fov, this.width / this.height, .01, 5e3);
        const t = this.renderer = new ct({
            alpha: !0,
            antialias: !0
        });
        t.setSize(this.width, this.height), t.setPixelRatio(window.devicePixelRatio), t.outputEncoding = dt, this.camera.lookAt(new N(0, 0, 0)), this.el = t.domElement, this.raycaster = new ut
    }
    renderRequest() {
        this.renderer.render(this.scene, this.camera), this.rId = requestAnimationFrame(this.renderRequest.bind(this))
    }
    startRendering() {
        this.stopRendering(), this.rId = requestAnimationFrame(this.renderRequest.bind(this))
    }
    stopRendering() {
        cancelAnimationFrame(this.rId)
    }
    resizeHandler() {
        this.thfov = Math.tan(this.camera.fov * Math.PI / 360)
    }
    setCameraMatchProjection(t = 1) {
        const e = this.camera,
            i = .5 * this.height / Math.tan(e.fov * Math.PI / 360);
        e.position.x = e.position.y = 0, e.position.z = i / t, e.lookAt(new N(0, 0, 0))
    }
    getScaleFitRatio(t, e, i) {
        i = i || .75;
        let o = t / e,
            n;
        return this.width / o > this.height ? n = this.height * i / e : n = this.width * i / t, n
    }
    getScaleFitPositionZ(t, e, i) {
        this.setCameraMatchProjection();
        const o = this.getScaleFitRatio(t, e, i),
            n = this.camera.position.z;
        return n - n / o
    }
}
class Z extends B {
    constructor(t, e, i) {
        super();
        s(this, "pb");
        s(this, "am");
        s(this, "fdata");
        s(this, "etime");
        s(this, "animName");
        s(this, "fps");
        s(this, "depthTest");
        s(this, "blending");
        s(this, "totalFrames");
        this.animName = e, this.pb = t, this.am = t.am, i = i || {}, this.fps = i.fps || 24, this.totalFrames = i.totalFrames || 24, this.depthTest = i.depthTest || !1, this.blending = i.blending || mt, this.init()
    }
    init() {
        const t = this.am;
        this.fdata = [];
        const e = t.atlasData[this.animName].frames,
            i = t.atlas[this.animName];
        let o = i.image.width,
            n = i.image.height;
        for (let a in e) {
            const r = e[a].frame;
            this.fdata[a] = {
                repeat: [r.w / o, r.h / n],
                offsetX: r.x / o,
                offsetY: 1 - r.h / n - r.y / n
            }
        }
        this.geometry = new k(1, 1), this.material = new I({
            depthTest: this.depthTest,
            blending: this.blending,
            transparent: !0,
            map: i
        }), this.reset()
    }
    setSize(t, e) {
        this.scale.set(t, e, 1)
    }
    update(t) {
        if (!this.visible) return;
        this.etime += t;
        const e = Math.floor(this.etime * this.fps) % this.totalFrames,
            i = this.fdata[e],
            o = this.material;
        o.map.repeat.set(i.repeat[0], i.repeat[1]), o.map.offset.x = i.offsetX, o.map.offset.y = i.offsetY
    }
    reset() {
        this.etime = 0
    }
}
class Ht extends Z {
    constructor(t) {
        super(t, "FireTarget", {
            depthTest: !0
        });
        this.setSize(4, 4)
    }
}
const H = 1;
class T extends y {
    constructor(t, e = 1) {
        super();
        s(this, "pb");
        s(this, "am");
        s(this, "animName");
        s(this, "walkClip");
        s(this, "model");
        s(this, "stype");
        s(this, "mixer");
        s(this, "currentAction");
        s(this, "fanim");
        this.pb = t, this.stype = e, this.am = t.am, this.init()
    }
    init() {
        this.animName = "Santa" + this.stype + "Animations", this.walkClip = "Santa" + this.stype + "Armature|Walk";
        const t = this.model = C(this.am.models["Santa" + this.stype]);
        this.model.rotation.x = Math.PI * .5, t.scale.set(H, H, H), this.add(t), this.mixer = new pt(this.model), this.fanim = new Ht(this.pb), this.add(this.fanim), this.reset()
    }
    play(t) {
        this.currentAction && this.currentAction.fadeOut(.5);
        const e = z.findByName(this.am.modelAnim["Santa" + this.stype], t),
            i = this.mixer.clipAction(e);
        this.currentAction = i, i.clampWhenFinished = !0, i.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).play()
    }
    playWalk() {
        this.play(this.walkClip)
    }
    playOnce(t) {
        this.currentAction && this.currentAction.fadeOut(.5);
        const e = z.findByName(this.am.modelAnim["Santa" + this.stype], t),
            i = this.mixer.clipAction(e);
        this.currentAction = i, i.clampWhenFinished = !0, i.reset().setLoop(gt, 1).setEffectiveTimeScale(1).setEffectiveWeight(1).play()
    }
    shrink() {
        const t = .4;
        c.remove(this.scale), c({
            targets: this.scale,
            x: t,
            y: t,
            z: t,
            easing: "easeOutQuint",
            duration: 600
        })
    }
    grow() {
        const t = 1;
        c.remove(this.scale), c({
            targets: this.scale,
            x: t,
            y: t,
            z: t,
            easing: "easeOutQuint",
            duration: 600
        })
    }
    show() {
        this.visible = this.fanim.visible = !0
    }
    hide() {
        this.visible = this.fanim.visible = !1
    }
    update(t) {
        this.mixer.update(t), this.fanim.update(t)
    }
    reset() {
        this.position.set(0, 0, 0), this.scale.set(1, 1, 1)
    }
}
const R = 2,
    A = .5;
class q extends y {
    constructor(t) {
        super();
        s(this, "pb");
        s(this, "am");
        s(this, "model");
        s(this, "pindex");
        s(this, "index");
        s(this, "isHat", !0);
        this.pb = t, this.am = t.am, this.init()
    }
    init() {
        const t = this,
            e = this.model = C(this.am.models.SantaHat);
        e.rotation.x = Math.PI * .5, e.scale.set(R, R, R), e.rotation.y = 2 * Math.PI * Math.random(), this.add(e), e.traverse(a => {
            a instanceof B && (a.userData.TheHat = t)
        });
        const i = this.am.textures.Shadow,
            o = 5.25,
            n = new B(new k(o, o), new I({
                map: i,
                side: ft,
                transparent: !0
            }));
        this.add(n), this.scale.set(A, A, A)
    }
    liftUp() {
        const t = this.position.x - .5;
        c.remove(this.position), c({
            targets: this.position,
            x: t,
            z: 4,
            y: 3,
            easing: "easeOutQuint",
            duration: 800
        }), c.remove(this.rotation), c({
            targets: this.rotation,
            y: -Math.PI / 6,
            easing: "easeOutQuint",
            duration: 800
        });
        const e = this.pb.smokeReveal;
        e.position.x = this.pb.calPosition(this.pindex), e.show()
    }
    reset() {
        this.pindex = -1, c.remove(this.position), c.remove(this.rotation), this.position.set(0, 0, 0), this.rotation.set(0, 0, 0)
    }
}
const Rt = 4;
class At {
    constructor(t) {
        s(this, "pb");
        s(this, "pool");
        this.pb = t, this.init()
    }
    init() {
        this.pool = [], this.pb;
        for (let t = 0; t < Rt; t++) {
            const e = new q(this.pb);
            this.pool.push(e)
        }
    }
    obtain() {
        if (this.pool.length > 0) {
            const t = this.pool.pop();
            return t.reset(), t
        } else {
            const t = new q(this.pb);
            return t.reset(), t
        }
    }
    free(t) {
        this.pool.push(t)
    }
}
const Ot = 300;
class Nt extends Z {
    constructor(t) {
        super(t, "SmokeReveal", {
            depthTest: !0,
            fps: 30
        });
        s(this, "showId");
        this.setSize(5, 5)
    }
    show() {
        this.visible = !0;
        const t = this;
        clearTimeout(this.showId), this.showId = setTimeout(function() {
            t.visible = !1
        }, Ot)
    }
}
const kt = 20,
    It = 12,
    zt = 4;
class Dt extends y {
    constructor(t) {
        super();
        s(this, "g3d");
        s(this, "gs");
        s(this, "am");
        s(this, "dopt");
        s(this, "topBoard");
        s(this, "leftBoard");
        s(this, "rightBoard");
        s(this, "bottomBoard");
        s(this, "backBoard");
        s(this, "boardList");
        s(this, "imageWidth");
        s(this, "imageHeight");
        s(this, "row");
        s(this, "column");
        s(this, "rt");
        s(this, "level");
        s(this, "iterations");
        s(this, "startTimeout");
        s(this, "hpool");
        s(this, "hpieces");
        s(this, "santa");
        s(this, "santaList");
        s(this, "smokeReveal");
        this.g3d = t, this.gs = t.gs, this.dopt = t.dopt, this.am = t.am, this.init()
    }
    init() {
        this.visible = !0, this.buildBoard(), this.row = this.column = zt, this.imageWidth = kt, this.imageHeight = It, this.arrangeBoard(), this.santaList = [new T(this, 1), new T(this, 2), new T(this, 3)];
        const t = this.santa = new T(this);
        t.playWalk(), this.add(t), this.hpool = new At(this), this.hpieces = [], this.smokeReveal = new Nt(this), this.smokeReveal.visible = !1, this.add(this.smokeReveal)
    }
    buildBoard() {
        const t = this.dopt,
            e = this;
        this.boardList = [];

        function i() {
            const l = new vt(10, 10, 10),
                d = new wt({
                    specular: t.pieceSpecular,
                    color: 16777215,
                    emissive: t.pieceEmissive,
                    side: yt
                }),
                u = new Wt(l, d);
            return e.add(u), e.boardList.push(u), u
        }
        this.topBoard = i(), this.leftBoard = i(), this.rightBoard = i(), this.bottomBoard = i(), this.backBoard = i(), this.backBoard.isBackboard = !0;
        const o = this.am.textures.Snow;
        o.wrapS = D, o.wrapT = D, o.repeat.set(5, 3);
        const n = this.backBoard.material;
        n.map = o, n.needsUpdate = !0;
        const a = [
                [-1, 1],
                [1, 1],
                [1, -1],
                [-1, -1]
            ],
            r = .85;
        for (let l = 0; l < 4; l++) {
            const d = C(this.am.models.ChristmasTree);
            d.scale.set(r, r, r), d.rotation.x = Math.PI * .5, d.rotation.y = Math.random() * Math.PI, d.position.set(a[l][0] * 8, a[l][1] * 5, 0), this.add(d)
        }
    }
    getScaleFitPosition(t, e) {
        const i = this.dopt,
            o = this.getBound(),
            n = o[0],
            a = o[1],
            r = o[2],
            l = i.fitFactor || .98,
            d = n / a;
        let u;
        t / d > e ? u = e * l / a : u = t * l / n, this.rt = u;
        const m = this.g3d.camera.position.z;
        return m - m / u - r * .5
    }
    arrangeBoard() {
        const t = this.dopt,
            e = t.boardThickness,
            i = t.boardDepth,
            o = this.imageWidth,
            n = this.imageHeight;
        let a = o + 2 * e,
            r = e,
            l = t.pieceDepth + i;
        this.topBoard.scale.set(a / 10, r / 10, l / 10), this.topBoard.position.set(0, n * .5 + .5 * e, -i * .5), this.bottomBoard.scale.set(a / 10, r / 10, l / 10), this.bottomBoard.position.set(0, -n * .5 - .5 * e, -i * .5), a = e, r = n, this.leftBoard.scale.set(a / 10, r / 10, l / 10), this.leftBoard.position.set(-o * .5 - .5 * e, 0, -i * .5), this.rightBoard.scale.set(a / 10, r / 10, l / 10), this.rightBoard.position.set(o * .5 + .5 * e, 0, -i * .5), this.backBoard.scale.set(o / 10, n / 10, i / 10), this.backBoard.position.set(0, 0, -l * .5)
    }
    prepareBoard(t, e) {
        const i = this;
        this.level = t, this.remove(this.santa), this.smokeReveal.visible = !1;
        const o = this.santa = this.santaList[Math.floor(Math.random() * this.santaList.length)];
        o.reset(), o.playWalk(), this.add(this.santa);
        for (let n = 0; n < this.hpieces.length; n++) {
            const a = this.hpieces[n];
            this.remove(a), this.hpool.free(a)
        }
        this.hpieces.splice(0), i.arrangePieces(), i.arrangeBoard(), i.generateIteration(), i.visible = !0, this.santa.reset(), this.updateBoardTexture(), e && e.call(i.g3d)
    }
    arrangePieces() {
        const t = this.dopt,
            e = 5,
            o = -((t.pieceDistance + 2 * t.pieceBottom) * (e - 1)) * .5;
        for (let n = 0; n < e; n++) {
            const a = this.hpool.obtain();
            a.pindex = n, a.index = n, this.hpieces.push(a), this.add(a), a.visible = !1, a.position.x = o + n * (2 * t.pieceBottom + t.pieceDistance), a.position.z = 1
        }
    }
    generateIteration() {
        this.iterations = [];
        let t = -1;
        const e = 5;
        for (let i = 0; i < this.level.iteration; i++) {
            let o = Math.floor(Math.random() * e);
            for (; o == t;) o = Math.floor(Math.random() * e);
            this.iterations.push(o), t = o
        }
    }
    start() {
        const t = this.iterations;
        let e = 0;
        const i = this;
        for (let a = 0; a < this.hpieces.length; a++) {
            const r = this.hpieces[a];
            r.visible = !0, c.remove(r.position), c({
                targets: r.position,
                z: [100, 0],
                easing: "easeOutQuint",
                duration: 800,
                delay: a * 100
            })
        }
        const o = this.santa;
        o.shrink();

        function n() {
            if (e >= t.length - 1) {
                i.g3d.inTransition = !1, i.g3d.container.updateCurrentRotZ(), console.log("Swapping done");
                return
            }
            i.swapPieces(t[e], t[e + 1], n), e += 2
        }
        clearTimeout(this.startTimeout), this.startTimeout = setTimeout(function() {
            o.hide(), n()
        }, 1e3)
    }
    swapPieces(t, e, i) {
        let o = this.hpieces[t],
            n = this.hpieces[e];
        if (o.pindex > n.pindex) {
            let L = o;
            o = n, n = L
        }
        const a = this.am,
            r = 3,
            l = this.calPosition(o.pindex),
            d = this.calPosition(n.pindex),
            u = this.dopt.swapDuration,
            m = "easeOutQuad",
            f = (d - l) * .5 + l,
            p = this;
        a.audios.Swap.play(), c.remove(o.rotation), c({
            targets: o.rotation,
            z: 2 * Math.PI * Math.random(),
            duration: 600,
            easing: "easeOutQuad"
        }), c.remove(o.position), c({
            targets: o.position,
            y: [0, r, 0],
            x: [l, f, d],
            easing: m,
            duration: u,
            complete: function() {
                i && i.call(p)
            }
        }), c.remove(n.rotation), c({
            targets: n.rotation,
            z: 2 * Math.PI * Math.random(),
            duration: 600,
            easing: "easeOutQuad"
        }), c.remove(n.position), c({
            targets: n.position,
            y: [0, -r, 0],
            x: [d, f, l],
            easing: m,
            duration: u
        });
        const g = o.pindex;
        o.pindex = n.pindex, n.pindex = g
    }
    calPosition(t) {
        const e = this.dopt,
            i = 5;
        return -((e.pieceDistance + 2 * e.pieceBottom) * (i - 1)) * .5 + t * (2 * e.pieceBottom + e.pieceDistance)
    }
    isWon(t) {
        return t.index == 2 ? (this.santa.show(), this.santa.grow(), this.santa.position.x = this.calPosition(t.pindex), !0) : !1
    }
    reveal() {
        const t = this.hpieces[2];
        this.santa.show(), this.santa.grow(), this.santa.position.x = this.calPosition(t.pindex), t.liftUp()
    }
    updateBoardTexture() {
        const t = this.am,
            e = t.BoardTextures[Math.floor(Math.random() * t.BoardTextures.length)];
        this.boardList.forEach(i => {
            i.isBackboard || (i.material.map = e, i.material.needsUpdate = !0)
        })
    }
    getBound() {
        const t = this.dopt,
            e = this.imageWidth,
            i = this.imageHeight,
            o = e,
            n = i,
            a = t.pieceDepth + t.boardDepth;
        return [o, n, a]
    }
    completeBoard() {
        c({
            targets: this.rotation,
            y: [0, Math.PI / 6, -Math.PI / 6, 0],
            easing: "easeOutQuad",
            delay: 200,
            duration: 1e3
        })
    }
    update(t) {
        this.smokeReveal.update(t), this.santa.visible && this.santa.update(t)
    }
}
class Wt extends B {
    constructor() {
        super(...arguments);
        s(this, "isBackboard")
    }
}
class Ft extends y {
    constructor(t) {
        super();
        s(this, "g3d");
        s(this, "dopt");
        s(this, "speed");
        s(this, "bound");
        s(this, "dirX");
        s(this, "lights");
        this.dopt = t.dopt, this.speed = this.dopt.lightMovingSpeed, this.g3d = t, this.init()
    }
    init() {
        this.bound = [300, 400, 10], this.dirX = 1;
        const t = this.lights = [],
            e = .85;
        t[0] = new j(15658734, e, 0), t[1] = new j(15658734, e, 0, 1), t[0].oZ = 4, t[1].oZ = 10, this.add(t[1]);
        const i = new bt(this.dopt.ambientLight, .8);
        this.add(i)
    }
    animate() {
        this.lights[1].position.x += this.dirX * this.speed;
        const t = this.lights[1].position.x;
        (t > this.bound[0] * .5 || t < -this.bound[0] * .5) && (this.dirX = -this.dirX)
    }
    setBound(t, e) {
        this.bound = t;
        const i = this.lights[1];
        i.position.set(t[0] * .5, 0, i.oZ)
    }
}
class j extends Lt {
    constructor() {
        super(...arguments);
        s(this, "oZ")
    }
}
class Xt extends y {
    constructor(t) {
        super();
        s(this, "g3d");
        s(this, "glight");
        s(this, "gameBoard");
        s(this, "currentRotZ");
        this.g3d = t, this.init()
    }
    init() {
        this.gameBoard = new Dt(this.g3d), this.add(this.gameBoard);
        const t = this.glight = new Ft(this.g3d);
        this.add(t)
    }
    fitGameBoard() {
        const t = this.g3d.gs,
            e = t.header.getClientSize(),
            i = t.bbar.getClientSize(),
            o = this.g3d.el.clientHeight,
            a = this.g3d.el.clientWidth,
            r = o - e[1] - i[1] - 10;
        this.g3d.setCameraMatchProjection();
        const l = this.gameBoard.getScaleFitPosition(a, r);
        this.position.z = l, this.glight.setBound(this.gameBoard.getBound())
    }
    show() {
        this.visible = !1, this.currentRotZ = 0, this.fitGameBoard(), this.rotation.x = -Math.PI / 3;
        const t = this;
        this.scale.set(.01, .01, .01), c.remove(this.scale), c({
            targets: this.scale,
            x: 1,
            y: 1,
            z: 1,
            easing: "easeOutQuad",
            duration: 1200
        });
        const e = -Math.PI / 4;
        c.remove(this.rotation), c({
            targets: this.rotation,
            x: e,
            easing: "easeOutCubic",
            delay: 500,
            duration: 1500,
            complete: function() {
                t.gameBoard.start()
            }
        }), setTimeout(function() {
            t.visible = !0
        }, 140)
    }
    setWonLoseState() {
        c.remove(this.rotation), c({
            targets: this.rotation,
            x: -Math.PI / 3,
            easing: "easeOutQuint",
            duration: 800
        });
        const t = this.position.z - 2;
        c.remove(this.position), c({
            targets: this.position,
            z: t,
            easing: "easeOutQuint",
            duration: 800
        })
    }
    updateCurrentRotZ() {
        this.currentRotZ = this.rotation.z - this.rotation.z % (2 * Math.PI)
    }
}
const O = .1,
    S = [16777215, 16776960, 14352128, 16711844, 15990528];
class Yt extends W {
    constructor(t) {
        super();
        s(this, "config");
        s(this, "targetPos");
        s(this, "regionWidth");
        s(this, "regionHeight");
        s(this, "state", b.EXPLODED);
        s(this, "velocity", []);
        this.config = Object.assign(t, {
            launchHeight: 300,
            sphereRadius: 200,
            color: 16763904,
            size: 72,
            numParticles: 24
        }), this.init()
    }
    init() {
        const t = this.config;
        this.geometry = new F;
        const e = new Float32Array(t.numParticles * 3),
            i = new P(e, 3);
        this.geometry.setAttribute("position", i);
        const o = new Float32Array(t.numParticles * 3),
            n = this.targetPos = new P(o, 3),
            a = 50;
        for (let l = 0; l < t.numParticles; l++) {
            let d, u, m;
            d = 2 * Math.random() * t.sphereRadius - t.sphereRadius + a, u = 2 * Math.random() * t.sphereRadius - t.sphereRadius + a, m = 2 * Math.random() * t.sphereRadius - t.sphereRadius + a, n.setXYZ(l, d, u, m), this.velocity[l] = 0
        }
        const r = S[Math.floor(Math.random() * S.length)];
        this.material = new X({
            size: t.size,
            color: r,
            opacity: 1,
            transparent: !0,
            blending: Y,
            depthTest: !1,
            map: t.map
        }), this.material.needsUpdate = !0
    }
    setRegion(t, e) {
        this.regionWidth = t, this.regionHeight = e
    }
    update(t) {
        const e = this.geometry.getAttribute("position"),
            i = this.targetPos,
            o = this.config;
        if (this.state == b.EXPLODED)
            for (let n = 0; n < o.numParticles; n++) {
                let a = e.getX(n),
                    r = e.getY(n),
                    l = e.getZ(n);
                e.setXYZ(n, a + (i.getX(n) - a) * O, r + (i.getY(n) - r) * O, l + (i.getZ(n) - l) * O), Math.abs(i.getX(n) - a) < .5 && (this.state = b.FALLING)
            } else {
                const n = -80 * t;
                for (let r = 0; r < o.numParticles; r++) {
                    let l = e.getY(r);
                    this.velocity[r] += n, e.setY(r, l + this.velocity[r])
                }
                const a = this.material;
                a.opacity += (0 - a.opacity) * .05, a.opacity <= .025 && this.reset()
            }
        e.needsUpdate = !0
    }
    reset() {
        if (this.rotation.z = 0, this.regionWidth) {
            this.position.x = Math.random() * this.regionWidth - this.regionWidth * .5;
            const a = this.regionHeight - this.config.launchHeight;
            this.position.y = Math.random() * a - a * .5
        }
        this.state = b.EXPLODED;
        const t = this.material;
        t.opacity = 1, t.color.set(S[Math.floor(Math.random() * S.length)]), t.needsUpdate = !0;
        const e = this.config,
            i = this.geometry.getAttribute("position"),
            o = this.targetPos,
            n = 50;
        for (let a = 0; a < e.numParticles; a++) {
            let r, l, d;
            r = 2 * Math.random() * e.sphereRadius - e.sphereRadius + n, l = 2 * Math.random() * e.sphereRadius - e.sphereRadius + n, d = 2 * Math.random() * e.sphereRadius - e.sphereRadius + n, o.setXYZ(a, r, l, d), this.velocity[a] = 0, i.setXYZ(a, 0, 0, 0)
        }
        i.needsUpdate = !0, e.callback && e.callback.call(this)
    }
}
var b;
(function(h) {
    h[h.EXPLODED = 0] = "EXPLODED", h[h.FALLING = 1] = "FALLING"
})(b || (b = {}));
class Gt extends y {
    constructor(t, e = 3, i = 500, o) {
        super();
        s(this, "map");
        s(this, "numFireworks");
        s(this, "interval");
        s(this, "callback");
        this.map = t, this.numFireworks = e, this.interval = i, this.callback = o, this.init()
    }
    init() {
        for (let t = 0; t < this.numFireworks; t++) {
            const e = new Yt({
                map: this.map,
                callback: this.callback
            });
            this.add(e)
        }
    }
    update(t) {
        for (let e = 0; e < this.children.length; e++) this.children[e].update(t)
    }
    changeRegion(t, e) {
        this.children.forEach(function(i) {
            i.setRegion(t, e)
        })
    }
    reset() {
        this.children.forEach(function(t) {
            t.reset()
        })
    }
}
class Ut extends W {
    constructor(t) {
        super();
        s(this, "config");
        s(this, "targetPos");
        s(this, "regionWidth");
        s(this, "regionHeight");
        s(this, "velocity", []);
        this.config = Object.assign(t, {
            sphereRadius: 400,
            color: 16763904,
            size: 40,
            numParticles: 24
        }), this.init()
    }
    init() {
        const t = this.config;
        this.geometry = new F;
        const e = new Float32Array(t.numParticles * 3),
            i = new P(e, 3);
        this.geometry.setAttribute("position", i);
        for (let o = 0; o < t.numParticles; o++) {
            let n, a, r;
            n = 2 * Math.random() * t.sphereRadius - t.sphereRadius, a = 2 * Math.random() * t.sphereRadius - t.sphereRadius, r = 2 * Math.random() * t.sphereRadius - t.sphereRadius, i.setXYZ(o, n, a, r), this.velocity[o] = Math.random() * 2 + 2
        }
        this.material = new X({
            size: t.size,
            opacity: 1,
            transparent: !0,
            blending: Y,
            depthTest: !1,
            map: t.map
        }), this.material.needsUpdate = !0
    }
    setRegion(t, e) {
        this.regionWidth = t, this.regionHeight = e, this.config.sphereRadius = t * .5
    }
    update(t) {
        const e = this.geometry.getAttribute("position"),
            i = this.config;
        for (let o = 0; o < i.numParticles; o++) {
            let n = e.getY(o) - this.velocity[o];
            if (n < -this.regionHeight * .5) {
                n = this.regionHeight * .5;
                let a = 2 * Math.random() * i.sphereRadius - i.sphereRadius,
                    r = 2 * Math.random() * i.sphereRadius - i.sphereRadius;
                e.setXYZ(o, a, n, r)
            } else e.setY(o, n)
        }
        e.needsUpdate = !0
    }
}
const Qt = 0;
class _t extends Pt {
    constructor(t) {
        super();
        s(this, "dopt");
        s(this, "am");
        s(this, "gs");
        s(this, "controls");
        s(this, "clock");
        s(this, "defaultCursor");
        s(this, "state");
        s(this, "container");
        s(this, "f3ds");
        s(this, "sf");
        s(this, "isHover");
        s(this, "isDragging");
        s(this, "currentCamY");
        s(this, "revealId");
        s(this, "inTransition");
        this.gs = t, this.dopt = t.dopt, this.am = t.am, this.setCameraMatchProjection(), this.defaultCursor = "auto", this.buildScene(), this.initMouseDrag()
    }
    enableOrbitControl() {
        this.controls = new Bt(this.camera, this.el), this.controls.enableDamping = !0, this.controls.update()
    }
    buildScene() {
        this.clock = new Mt, this.container = new Xt(this);
        const t = this.scene;
        t.add(this.container);
        const e = this.am;
        this.f3ds = new Gt(e.textures.Firework, 3, 500, function() {
            e.audios.Firework.isPlaying && e.audios.Firework.stop(), e.audios.Firework.play()
        }), t.add(this.f3ds), this.sf = new Ut({
            map: e.textures.Snowflakes
        }), this.sf.visible = !1, t.add(this.sf), this.setRunningState(), this.handleInteraction(), this.resizeHandler()
    }
    initMouseDrag() {
        const t = this.el;
        let e, i, o, n, a, r;
        const l = this,
            d = this.container;
        d.gameBoard;

        function u(p) {
            l.isHover || l.inTransition || (l.isDragging = !0, i = p.clientX, a = p.clientY, e = i, n = a, r = l.camera.position.y, o = d.rotation.z, t.addEventListener("pointermove", m), t.addEventListener("pointerup", f), window.addEventListener("pointermove", m), window.addEventListener("pointerup", f))
        }

        function m(p) {
            i = p.clientX, a = p.clientY;
            const g = (i - e) * .25,
                L = (a - n) * .75;
            d.currentRotZ = o + g * Math.PI / 180, l.currentCamY = r + L
        }

        function f(p) {
            l.isDragging = !1, t.removeEventListener("pointermove", m), t.removeEventListener("pointerup", f), window.removeEventListener("pointermove", m), window.removeEventListener("pointerup", f)
        }
        t.addEventListener("pointerdown", u)
    }
    handleInteraction() {
        const t = this.camera,
            e = this.raycaster,
            i = this.container,
            o = this.el,
            n = this,
            a = this.container.gameBoard;

        function r(d) {
            if (n.inTransition || !n.isRunningState) return;
            let u, m;
            u = d.offsetX, m = d.offsetY;
            const f = {
                x: u / n.width * 2 - 1,
                y: -(m / n.height) * 2 + 1
            };
            e.setFromCamera(f, t);
            const p = e.intersectObjects(i.children, !0);
            for (let g = 0; g < p.length; g++) {
                const L = p[g].object;
                if (d.type === "pointerdown") {
                    const E = L.userData.TheHat;
                    E && (E.liftUp(), a.isWon(E) ? n.setWonState() : (n.revealId = setTimeout(function() {
                        a.reveal()
                    }, 1e3), n.setLoseState()))
                }
                d.type === "pointermove";
                break
            }
            p.length === 0 && d.type === "pointermove"
        }

        function l(d) {}
        o.addEventListener("pointerdown", r), o.addEventListener("pointermove", r), o.addEventListener("pointerup", l)
    }
    loadLevel(t, e) {
        this.setRunningState(), this.currentCamY = Qt, this.inTransition = !0;
        const i = this.gs.levels;
        t == i.length && (t = 0), clearInterval(this.revealId);
        const o = i[t];
        this.isDragging = !1;
        const n = this;
        this.container.visible = !1, this.f3ds.visible = !1, this.container.gameBoard.prepareBoard(o, function() {
            n.container.show(), e == null || e.call(n)
        })
    }
    renderRequest() {
        super.renderRequest();
        const t = this.clock.getDelta();
        this.sf.update(t), this.controls && this.controls.update(), (this.state == v.WON || this.state == v.FIRE_WORK) && this.f3ds.update(t);
        const e = this.container;
        e.glight.animate(), this.inTransition ? e.rotation.z += this.dopt.spinSpeed : e.rotation.z += (e.currentRotZ - e.rotation.z) * .075, e.gameBoard.update(t)
    }
    setRunningState() {
        this.state = v.RUNNING, this.sf.visible = !0, this.gs.header.show()
    }
    get isRunningState() {
        return this.state == v.RUNNING
    }
    setWonState() {
        console.log("won"), this.state != v.LOSE && (this.state = v.WON, this.f3ds.visible = !0, this.f3ds.reset(), this.gs.header.timeBtn.pause(), this.gs.header.hide(), this.gs.showWonBar(), this.am.audios.WonTune.play(), this.gs.unlockNextLevel())
    }
    setLoseState() {
        this.state = v.LOSE, this.container.setWonLoseState(), this.gs.header.timeBtn.pause(), this.gs.header.hide(), this.gs.showLoseBar(), this.am.audios.LoseTune.play()
    }
    resize(t, e) {
        this.width = t, this.height = e, this.camera.aspect = t / e, this.camera.updateProjectionMatrix(), this.renderer.setSize(t, e), this.resizeHandler(), this.container.fitGameBoard(), this.f3ds.changeRegion(t, e), this.sf.setRegion(t, e)
    }
    resizeHandler() {
        super.resizeHandler(), this.setCameraMatchProjection()
    }
    show() {
        this.el.style.display = "block"
    }
    hide() {
        this.el.style.display = "none"
    }
    destroy() {}
}
var v;
(function(h) {
    h[h.RUNNING = 0] = "RUNNING", h[h.WON = 1] = "WON", h[h.LOSE = 2] = "LOSE", h[h.FIRE_WORK = 3] = "FIRE_WORK"
})(v || (v = {}));
class Zt {
    constructor(t, e) {
        s(this, "el");
        this.init(t, e)
    }
    init(t, e) {
        const i = this.el = document.createElement("span");
        i.className = t, i.style.display = "block", i.style.cursor = "pointer", i.style.borderRadius = "50%", i.style.textAlign = "center";
        const o = this;
        e && i.addEventListener("click", function(n) {
            e.call(o)
        })
    }
    addClass(t) {
        this.el.classList.add(t)
    }
    removeClass(t) {
        this.el.classList.remove(t)
    }
}
class w extends Zt {
    init(t, e) {
        super.init(t, e), this.el.classList.add("rs-sh3d-mainbutton")
    }
    addClass(t) {
        this.el.classList.add(t)
    }
    removeClass(t) {
        this.el.classList.remove(t)
    }
}
class qt {
    constructor(t) {
        s(this, "gs");
        s(this, "am");
        s(this, "el");
        s(this, "levelBtn");
        s(this, "infoBtn");
        s(this, "homeBtn");
        s(this, "soundBtn");
        s(this, "soundOn", !0);
        this.gs = t, this.am = t.am, this.init()
    }
    init() {
        const t = this.el = document.createElement("div");
        t.className = "rs-sh3d-gamebuttonbar", this.am, this.levelBtn = new w("icon-stack", this.showGameLevels.bind(this)), this.levelBtn.addClass("rs-sh3d-mainbutton-extra"), this.infoBtn = new w("fa-solid fa-question", this.showHelp.bind(this)), t.appendChild(this.infoBtn.el), this.homeBtn = new w("fa-solid fa-house-blank", this.showHome.bind(this)), t.appendChild(this.homeBtn.el), this.soundBtn = new w("fa-solid fa-volume", this.toggleSound.bind(this)), t.appendChild(this.soundBtn.el)
    }
    show() {
        c({
            targets: this.el,
            bottom: 15,
            easing: "easeOutQuint",
            duration: 800
        })
    }
    hide() {
        c({
            targets: this.el,
            bottom: -50,
            easing: "easeOutQuint",
            duration: 800
        })
    }
    showHint() {
        console.log("Show hint"), this.am.audios.ButtonClick.play()
    }
    showGameLevels() {
        this.am.audios.ButtonClick.play()
    }
    replayLevel() {
        this.am.audios.ButtonClick.play(), this.gs.replayLevel()
    }
    showHome() {
        this.am.audios.ButtonClick.play(), this.gs.sh3d.setHomeScreen()
    }
    showHelp() {
        this.am.audios.ButtonClick.play(), this.gs.hpanel.show()
    }
    toggleSound() {
        const t = this.soundBtn;
        this.soundOn = !this.soundOn, this.soundOn ? (t.removeClass("fa-volume-slash"), t.addClass("fa-volume"), this.am.audios.ButtonClick.play()) : (t.removeClass("fa-volume"), t.addClass("fa-volume-slash")), this.am.toggleSound()
    }
    getClientSize() {
        return [this.el.clientWidth, this.el.clientHeight]
    }
}
class jt {
    constructor(t) {
        s(this, "gs");
        s(this, "am");
        s(this, "el");
        s(this, "timeBtn");
        s(this, "levelBtn");
        s(this, "moveBtn");
        this.gs = t, this.am = t.am, this.init()
    }
    init() {
        this.gs;
        const t = this.el = document.createElement("div");
        t.className = "rs-sh3d-gameheader", this.timeBtn = new Vt(this), this.levelBtn = new Jt(this), t.appendChild(this.levelBtn.el), this.moveBtn = new Kt(this)
    }
    getClientSize() {
        return [this.el.clientWidth, this.el.clientHeight]
    }
    show() {
        c({
            targets: this.el,
            top: 4,
            easing: "easeOutQuint",
            duration: 800
        })
    }
    hide() {
        c({
            targets: this.el,
            top: -80,
            easing: "easeOutQuint",
            duration: 800
        })
    }
}
class Vt {
    constructor(t) {
        s(this, "gh");
        s(this, "am");
        s(this, "el");
        s(this, "isPlaying", !1);
        s(this, "currentTime");
        s(this, "ticon");
        s(this, "tval");
        s(this, "tpause");
        s(this, "timeId");
        this.gh = t, this.am = t.am, this.init()
    }
    init() {
        const t = this.el = document.createElement("div");
        t.className = "rs-sh3d-timebtn", this.isPlaying = !1, this.currentTime = 0, this.gh;
        const e = this.am;
        t.addEventListener("click", function() {
            e.audios.ButtonClick.play()
        });
        const i = this.ticon = document.createElement("span");
        t.appendChild(i), i.className = "icon-timer";
        const o = this.tval = document.createElement("span");
        o.className = "timebtn-value", t.appendChild(o), o.innerHTML = "00:00:00";
        const n = this.tpause = document.createElement("span");
        n.className = "icon-pausetime", t.appendChild(n)
    }
    resume() {
        clearInterval(this.timeId), this.timeId = setInterval(this.timeTick.bind(this), 1e3), this.isPlaying = !0, this.tpause.className = "icon-pausetime"
    }
    pause() {
        clearInterval(this.timeId), this.isPlaying = !1, this.tpause.className = "icon-playtime"
    }
    reset() {
        this.currentTime = 0, this.tval.innerHTML = "00:00:00"
    }
    timeTick() {
        this.currentTime += 1;
        const t = this.currentTime,
            e = Math.floor(t / 3600),
            i = Math.floor((t - e * 3600) / 60),
            o = (t - e * 3600) % 60;

        function n(a) {
            return a < 10 ? "0" + a : a
        }
        this.tval.innerHTML = n(e) + ":" + n(i) + ":" + n(o)
    }
    toggleTime() {
        this.isPlaying = !this.isPlaying, this.isPlaying ? this.resume() : this.pause()
    }
}
class Jt {
    constructor(t) {
        s(this, "gh");
        s(this, "el");
        s(this, "label");
        s(this, "btn");
        s(this, "currentLevel");
        this.gh = t, this.init()
    }
    init() {
        const t = this.el = document.createElement("div");
        t.className = "rs-sh3d-levelbtn", this.label = document.createElement("span"), this.label.className = "levelbtn-label", t.appendChild(this.label), this.btn = document.createElement("span"), this.btn.className = "levelbtn-shuffle fa-solid fa-arrows-rotate", this.reset()
    }
    setLevel(t) {
        this.currentLevel = t, this.label.innerHTML = "Level " + t
    }
    addLevel(t) {
        this.setLevel(this.currentLevel + t)
    }
    reset() {
        this.setLevel(0), this.currentLevel = 0
    }
}
class Kt {
    constructor(t) {
        s(this, "gh");
        s(this, "el");
        s(this, "micon");
        s(this, "mval");
        s(this, "count");
        this.gh = t, this.init()
    }
    init() {
        const t = this.el = document.createElement("div");
        t.className = "rs-sh3d-movebtn", this.count = 0;
        const e = this.micon = document.createElement("span");
        t.appendChild(e), e.className = "icon-quill";
        const i = this.mval = document.createElement("span");
        i.className = "movebtn-value", t.appendChild(i), i.innerHTML = "000"
    }
    addCount(t) {
        this.count += t;
        let e = this.count,
            i = 0,
            o = "";
        for (; e >= 10;) i++, e = e / 10;
        i = 3 - i - 1;
        for (var n = 0; n < i; n++) o += "0";
        this.mval.innerHTML = o + this.count
    }
    reset() {
        this.count = 0, this.mval.innerHTML = "000"
    }
}
class $t {
    constructor(t) {
        s(this, "gs");
        s(this, "el");
        s(this, "replayBtn");
        s(this, "status");
        s(this, "am");
        this.gs = t, this.am = t.am, this.init()
    }
    init() {
        const t = this.el = document.createElement("div");
        t.className = "rs-sh3d-gamewonbar", t.style.bottom = "-85px", this.replayBtn = new w("fa-solid fa-arrows-rotate", this.doReplay.bind(this)), this.replayBtn.addClass("rs-sh3d-mainbutton-extra"), t.appendChild(this.replayBtn.el), this.status = document.createElement("h1"), this.status.className = "trophy-level-title", this.status.innerHTML = "DRAW"
    }
    doReplay() {
        this.am.audios.ButtonClick.play(), this.gs.replayLevel()
    }
    show(t) {
        c({
            targets: this.el,
            bottom: 12,
            easing: "easeOutQuint",
            duration: 800
        }), this.setStatus(t), document.body.appendChild(this.status)
    }
    hide() {
        c({
            targets: this.el,
            bottom: -85,
            easing: "easeOutQuint",
            duration: 800
        }), document.body.contains(this.status) && document.body.removeChild(this.status)
    }
    setStatus(t) {
        this.status.innerHTML = t
    }
}
class te {
    constructor(t) {
        s(this, "gs");
        s(this, "el");
        s(this, "status");
        s(this, "nextBtn");
        s(this, "am");
        this.gs = t, this.am = t.am, this.init()
    }
    init() {
        const t = this.el = document.createElement("div");
        t.className = "rs-sh3d-gamewonbar", t.style.bottom = "-85px", this.status = document.createElement("h1"), this.status.className = "trophy-level-title", this.status.innerHTML = "DRAW", this.nextBtn = new w("fa-solid fa-forward", this.doNext.bind(this)), this.nextBtn.addClass("rs-sh3d-mainbutton-extra"), t.appendChild(this.nextBtn.el)
    }
    doNext() {
        this.am.audios.ButtonClick.play(), this.gs.nextLevel()
    }
    show(t) {
        c({
            targets: this.el,
            bottom: 12,
            easing: "easeOutQuint",
            duration: 800
        }), this.setStatus(t), document.body.appendChild(this.status)
    }
    setStatus(t) {
        this.status.innerHTML = t
    }
    hide() {
        c({
            targets: this.el,
            bottom: -85,
            easing: "easeOutQuint",
            duration: 800
        }), document.body.contains(this.status) && document.body.removeChild(this.status)
    }
}
class ee {
    constructor(t) {
        s(this, "el");
        s(this, "scrollId");
        this.el = t, this.el.style.overflow = "hidden", this.init()
    }
    init() {
        const t = this.el,
            e = this;
        let i, o, n, a;

        function r() {
            t.scrollTop += (n - t.scrollTop) * .075, e.scrollId = requestAnimationFrame(r)
        }

        function l(m) {
            a = m.clientY, i = a, o = n = t.scrollTop, t.addEventListener("pointermove", d), t.addEventListener("pointerup", u), window.addEventListener("pointermove", d), window.addEventListener("pointerup", u), cancelAnimationFrame(e.scrollId), e.scrollId = requestAnimationFrame(r), t.style.cursor = "grab"
        }

        function d(m) {
            a = m.clientY;
            var f = (a - i) * 2.5,
                p = t.scrollHeight - e.el.clientHeight,
                g = o - f;
            g > p && (g = p), g < 0 && (g = 0), n = g, t.style.cursor = "grabbing"
        }

        function u(m) {
            t.removeEventListener("pointermove", d), t.removeEventListener("pointerup", u), window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", u), cancelAnimationFrame(e.scrollId), t.style.cursor = "grab"
        }
        t.addEventListener("pointerdown", l), t.addEventListener("mouseover", function(m) {
            t.style.cursor = "grab"
        })
    }
}
const se = "assets/text/helpcontent.html";
class V extends M {
    constructor(t) {
        super();
        s(this, "gs");
        s(this, "container");
        s(this, "scroller");
        this.gs = t, this.init()
    }
    init() {
        super.init();
        const t = this.el;
        t.classList.add("rs-sh3d-helppanel"), t.style.width = t.style.height = "90%";
        const e = this.container = document.createElement("div");
        e.className = "rs-helpcontainer", t.appendChild(e), this.scroller = new ee(this.container);
        const i = new XMLHttpRequest;
        i.addEventListener("load", function(o) {
            const n = this.responseText;
            e.innerHTML = n
        }), i.open("GET", se), i.send()
    }
}
class ie extends M {
    constructor(t) {
        super();
        s(this, "gs");
        s(this, "am");
        s(this, "title");
        s(this, "meta");
        s(this, "timespan");
        s(this, "movespan");
        s(this, "lvl");
        s(this, "btnContainer");
        s(this, "replayBtn");
        s(this, "nextBtn");
        this.gs = t, this.am = t.am, this.init()
    }
    init() {
        super.init();
        const t = this.el;
        t.classList.add("rs-trophy-panel"), t.style.width = t.style.height = "90%", this.title = document.createElement("h1"), this.title.className = "trophy-level-title", this.title.innerHTML = "Level Up";
        const e = this.meta = document.createElement("div");
        e.className = "meta-container", t.appendChild(e);
        const i = this.timespan = document.createElement("span");
        i.innerHTML = "Time: 100s", e.appendChild(i);
        const o = this.movespan = document.createElement("span");
        o.innerHTML = "Moves: 000";
        const n = document.createElement("div");
        n.className = "trophy-container";
        const a = document.createElement("img");
        a.src = "assets/graphics/trophy.png", a.draggable = !1, n.appendChild(a), t.appendChild(n);
        const r = this.lvl = document.createElement("span");
        r.className = "level-label", r.innerHTML = "1", n.appendChild(r);
        const l = this.btnContainer = document.createElement("div");
        l.className = "trophy-button-container", t.appendChild(l), this.replayBtn = new w("fa-solid fa-arrows-rotate", this.doReplay.bind(this)), this.replayBtn.addClass("rs-sh3d-mainbutton-extra"), l.appendChild(this.replayBtn.el), this.nextBtn = new w("fa-solid fa-forward", this.doNext.bind(this)), this.nextBtn.addClass("rs-sh3d-mainbutton-extra"), l.appendChild(this.nextBtn.el), this.closeBtn.style.display = "none"
    }
    show() {
        super.show()
    }
    hide() {
        super.hide(), document.body.contains(this.title) && document.body.removeChild(this.title)
    }
    doReplay() {}
    doNext() {}
    setValues(t, e) {
        this.timespan.innerHTML = "Times: " + t + "s", this.lvl.innerHTML = e.toString()
    }
}
class ne {
    constructor(t, e) {
        s(this, "am");
        s(this, "sh3d");
        s(this, "game3d");
        s(this, "el");
        s(this, "config");
        s(this, "dopt");
        s(this, "header");
        s(this, "bbar");
        s(this, "wbar");
        s(this, "lbar");
        s(this, "currentLevel");
        s(this, "levels");
        s(this, "imagePanel");
        s(this, "trophyPanel");
        s(this, "hpanel");
        this.sh3d = t, this.config = e, this.am = t.assetManager, this.dopt = t.defaultOptions, this.init()
    }
    init() {
        const t = this.el = document.createElement("div");
        t.className = "rs-gscreen", t.style.width = t.style.height = "100%", t.style.display = "none", this.levels = this.config.data.levels, this.initPanel(), this.header = new jt(this), t.appendChild(this.header.el), this.bbar = new qt(this), t.appendChild(this.bbar.el), this.wbar = new te(this), t.appendChild(this.wbar.el), this.lbar = new $t(this), t.appendChild(this.lbar.el), this.game3d = new _t(this), t.appendChild(this.game3d.el), this.currentLevel = 0
    }
    initPanel() {
        this.imagePanel = new Ct, this.trophyPanel = new ie(this), this.sh3d.homeScreen ? this.hpanel = this.sh3d.homeScreen.hpanel : this.hpanel = new V(this)
    }
    loadLevel(t) {
        const e = this;
        this.trophyPanel.hide(), this.wbar.hide(), this.lbar.hide(), this.showButtonBar();

        function i() {
            e.reset(), e.header.timeBtn.resume(), e.header.levelBtn.setLevel(t + 1)
        }
        this.game3d.loadLevel(t, i), this.currentLevel = t
    }
    nextLevel() {
        let t = this.currentLevel + 1;
        t == this.levels.length && (t = 0), this.loadLevel(t)
    }
    unlockNextLevel() {
        let t = this.currentLevel + 1;
        t < this.levels.length && this.sh3d.pref.saveUnlock(t)
    }
    replayLevel() {
        this.loadLevel(this.currentLevel)
    }
    reset() {
        this.header.timeBtn.reset(), this.header.moveBtn.reset(), this.header.levelBtn.reset()
    }
    show(t) {
        this.sh3d.root.appendChild(this.el), this.transitionIn();
        const e = this.sh3d.getAppDimension();
        this.game3d.resize(e[0], e[1]), this.game3d.startRendering(), t == null && (t = 0), this.loadLevel(t)
    }
    hide() {
        this.sh3d.root.removeChild(this.el), this.game3d.stopRendering()
    }
    showWonBar() {
        this.bbar.hide();
        var t = this.wbar;
        setTimeout(function() {
            t.show("Level Passed")
        }, 400)
    }
    showLoseBar() {
        this.bbar.hide();
        var t = this.lbar;
        setTimeout(function() {
            t.show("Level Failed")
        }, 400)
    }
    showButtonBar() {
        this.wbar.hide();
        var t = this.bbar;
        setTimeout(function() {
            t.show()
        }, 400)
    }
    transitionIn() {
        this.el.style.display = "block"
    }
    transitionOut() {}
    getPlayingTime() {
        return this.header.timeBtn.currentTime
    }
    addMoveCount() {
        this.header.moveBtn.addCount(1)
    }
    addScore(t) {
        this.header.levelBtn.addLevel(t)
    }
    resize(t, e) {
        this.game3d.resize(t, e)
    }
    dispose() {}
}
class oe extends M {
    constructor(t) {
        super();
        s(this, "sh3d");
        s(this, "content");
        this.sh3d = t, this.init()
    }
    init() {
        super.init();
        const t = this.el;
        t.classList.add("rs-sh3d-cpanel"), t.style.width = "90%", t.style.height = "auto";
        const e = this.content = document.createElement("div"),
            i = this.sh3d.config.strings;
        e.innerHTML = "<h3>" + i.APP_TITLE + "</h3>", e.innerHTML += "<p>" + i.CREDIT_TEXT + "</p>", t.appendChild(e)
    }
}
class ae {
    constructor(t) {
        s(this, "hs");
        s(this, "el");
        s(this, "title");
        s(this, "info");
        s(this, "progress");
        s(this, "progressInner");
        s(this, "logo");
        s(this, "isMobile");
        this.hs = t, this.init()
    }
    init() {
        this.isMobile = document.createElement("span").ontouchstart === null;
        const t = this.el = document.createElement("div");
        t.className = "rs-hscreen-header";
        const e = this.hs.config;
        this.title = document.createElement("h1"), this.title.className = "app-title", this.title.innerHTML = e.strings.APP_TITLE, t.appendChild(this.title), this.info = document.createElement("span"), this.info.className = "app-info", this.info.innerHTML = e.strings.APP_INFO, t.appendChild(this.info), this.progress = document.createElement("div"), this.progress.className = "app-progress", this.progressInner = document.createElement("div"), this.progressInner.className = "app-progress-inner", t.appendChild(this.progress), this.progress.appendChild(this.progressInner), this.setProgress(0), this.logo = document.createElement("img"), this.logo.className = "app-logo", this.logo.src = "assets/graphics/logo.png", this.logo.onmousedown = function(i) {
            i.preventDefault()
        }, t.appendChild(this.logo)
    }
    setProgress(t) {
        this.progressInner.style.width = t + "%"
    }
    hideProgress() {
        const t = this.progress;
        c({
            targets: t,
            opacity: 0,
            easing: "easeOutQuint",
            complete: function() {
                t.style.display = "none"
            }
        })
    }
    hideLogo() {
        const t = this.logo,
            e = this.isMobile;
        c({
            targets: t,
            opacity: 0,
            easing: "easeOutQuint",
            complete: function() {
                if (e) {
                    t.style.display = "none";
                    return
                }
                c.remove(t), c({
                    targets: t,
                    width: 32,
                    marginTop: 20,
                    opacity: 1
                })
            }
        })
    }
    moveTop() {
        this.hideProgress(), this.hideLogo(), c({
            targets: this.el,
            top: 0,
            translateY: 0,
            easing: "easeOutQuint",
            duration: 1200
        })
    }
    center() {
        const t = this.hs.sh3d.assetManager,
            e = this.el;
        c({
            targets: this.el,
            top: "50%",
            translateY: "-50%",
            duration: 1400,
            update: function() {
                t.showDelay && (c.remove(e), c({
                    targets: e,
                    top: 0,
                    translateY: 0,
                    duration: 0
                }))
            }
        })
    }
}
class re {
    constructor(t) {
        s(this, "hs");
        s(this, "el");
        s(this, "con");
        this.hs = t, this.init()
    }
    init() {
        const t = this.el = document.createElement("div");
        t.className = "rs-hscreenmenu", this.con = document.createElement("div"), this.con.className = "menu-list", t.appendChild(this.con);
        const e = this.hs.config,
            i = this.hs;
        this.addItem(e.strings.NEW_GAME, function() {
            i.startNewGame()
        }), e.general.useHelpPanel && this.addItem(e.strings.HELP, function() {
            i.showHelp()
        }), e.general.useCreditPanel && this.addItem(e.strings.CREDITS, function() {
            i.showCredit()
        })
    }
    addItem(t, e) {
        const i = document.createElement("div");
        i.className = "menu-item", i.innerHTML = t, i.style.opacity = "0", this.con.appendChild(i);
        const o = this.hs.sh3d.assetManager;
        i.addEventListener("click", function() {
            e && e.call(this), o.audios.ButtonClick.play()
        })
    }
    show() {
        c({
            targets: ".rs-hscreenmenu .menu-item",
            opacity: 1,
            easing: "easeOutQuad",
            delay: c.stagger(150, {
                start: 500
            })
        })
    }
}
const he = 1500;
class le {
    constructor(t) {
        s(this, "config");
        s(this, "sh3d");
        s(this, "loaded");
        s(this, "assetManager");
        s(this, "el");
        s(this, "header");
        s(this, "menu");
        s(this, "hpanel");
        s(this, "cpanel");
        this.sh3d = t, this.loaded = !1, this.config = t.config, this.init()
    }
    init() {
        const t = this.el = document.createElement("div");
        t.className = "rs-hscreen", t.style.width = t.style.height = "100%", t.style.display = "none", this.header = new ae(this), this.menu = new re(this), this.hpanel = new V, this.cpanel = new oe(this.sh3d)
    }
    load() {
        this.el.style.display = "block", this.el.appendChild(this.header.el), this.header.center();
        const t = this.sh3d.assetManager,
            e = this,
            i = this.header,
            o = this.menu;
        t.onLoad = function() {
            setTimeout(function() {
                t.showDelay = !0, i.moveTop(), e.el.appendChild(o.el), o.show(), t.audios.BackgroundMusic && t.audios.BackgroundMusic.play()
            }, he)
        }, t.onProgress = (n, a, r) => {
            e.header.setProgress(a / r * 100)
        }, this.sh3d.assetManager.load()
    }
    transitionIn() {
        this.el.style.display = "block", c({
            targets: this.el,
            translateY: 0,
            easing: "easeOutQuint",
            opacity: 1,
            duration: 1200
        })
    }
    transitionOut() {
        const t = this.el;
        c({
            targets: this.el,
            translateY: -400,
            easing: "easeOutQuint",
            opacity: 0,
            duration: 1200,
            complete: function() {
                t.style.display = "none"
            }
        })
    }
    show() {
        if (this.sh3d.root.appendChild(this.el), !this.sh3d.assetManager.loaded) {
            this.load();
            return
        }
        this.transitionIn()
    }
    hide() {
        this.sh3d.root.removeChild(this.el), this.transitionOut()
    }
    startNewGame() {
        this.sh3d.setGameScreen()
    }
    showHelp() {
        this.hpanel.show()
    }
    showCredit() {
        this.cpanel.show()
    }
    resize(t, e) {}
}
const ce = 200,
    de = "config.json";
class ue {
    constructor(t, e = {}) {
        s(this, "assetManager");
        s(this, "root");
        s(this, "isMobile");
        s(this, "pref");
        s(this, "activeScreen");
        s(this, "config");
        s(this, "defaultOptions");
        s(this, "homeScreen");
        s(this, "gameScreen");
        this.root = t, this.root.style.position = "relative", this.root.style.display = "block", this.root.style.overflow = "hidden", this.loadConfig(), this.defaultOptions = Object.assign(e, {
            pieceDistance: .3,
            pieceBottom: 2,
            pieceDepth: .1,
            pieceSpecular: 1118481,
            pieceEmissive: 65793,
            pieceColor: 13421772,
            boardDimension: 3,
            boardThickness: .25,
            boardDepth: .6,
            boardMaxWidth: 7,
            boardMaxHeight: 8,
            fitFactor: .8,
            ambientLight: 3355443,
            lightMovingSpeed: .1,
            swapDuration: 280,
            spinSpeed: .0275
        });
        const i = this;
        window.addEventListener("resize", function() {
            i.resize()
        }), document.body.addEventListener("click", function(o) {})
    }
    loadConfig() {
        const t = this,
            e = new XMLHttpRequest;
        e.addEventListener("load", function(i) {
            const o = JSON.parse(this.response);
            t.config = o, t.initComponents()
        }), e.open("GET", de), e.send()
    }
    initComponents() {
        const t = this;
        this.defaultOptions, this.config, this.initPreferences(), this.activeScreen = null, this.assetManager = new Et(this), window.location.search.includes("bypass") ? (this.assetManager.onLoad = function() {
            t.setGameScreen()
        }, this.assetManager.load()) : this.setHomeScreen(), setTimeout(function() {
            t.resize()
        }, ce)
    }
    initPreferences() {
        this.pref = new xt(this.config, localStorage.getItem("SantaHat"))
    }
    setScreen(t) {
        this.activeScreen && this.activeScreen.hide(), t.show(), this.activeScreen = t
    }
    setGameScreen() {
        this.gameScreen || (this.gameScreen = new ne(this, this.config)), this.setScreen(this.gameScreen)
    }
    setHomeScreen() {
        this.homeScreen || (this.homeScreen = new le(this)), this.setScreen(this.homeScreen)
    }
    getAppDimension() {
        return [this.root.offsetWidth, this.root.offsetHeight]
    }
    resize() {
        const t = this.getAppDimension(),
            e = t[0],
            i = t[1];
        this.activeScreen && this.activeScreen.resize(e, i)
    }
    dispose() {}
}

function me() {
    document.body.onload = function() {
        const h = document.querySelector(".rs-sh3d");
        new ue(h)
    }
}
me();