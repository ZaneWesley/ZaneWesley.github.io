console.log("v1.0.1");

const IS_PROD = true;
const IS_DEBUG = IS_PROD ? false : true;
const USE_MOCK_OBJECT = IS_PROD ? false : false;

const TIMEOUT_INTERSTITIAL_AD = 50;
const TIMEOUT_REWARDED_AD = 50;

let showRewarded_adViewed;
let showRewarded_adDismissed;
let hasGameReadyCalled = false;

const loadScript = function(src) {
    return new Promise(function(resolve, reject) {
        const s = document.createElement('script');
        let r = false;
        if (!IS_PROD) {
            s.setAttribute('data-environment', 'test');
        }
        s.type = 'text/javascript';
        s.src = src;
        s.async = true;
        s.onerror = function(err) {
            reject(err, s);
        };
        s.onload = s.onreadystatechange = function() {
            if (!r && (!this.readyState || this.readyState == 'complete')) {
                r = true;
                resolve();
            }
        };
        const t = document.getElementsByTagName('script')[0];
        t.parentElement.insertBefore(s, t);
    });
};

const REWARDED_AD_OBJECT = {
    showAdFn: null,
    state: 0,
    states: {
        "WAITING": 0,
        "READY": 1,
        "PLAYING": 2,
        "CLOSED": 3
    },
    setState: function(state) {
        IS_DEBUG && console.log("new state: " + state);
        this.state = state;
    },
    beforeReward: function(showAdFn) {
        this.showAdFn = showAdFn;
        this.setState(this.states.READY);
    },
    /*
    beforeAd: function() {
        window.famobi.game.pause();
        this.setState(this.states.PLAYING);
    },
    */
    beforeBreak: function() {
        window.famobi.game.pause();
        this.setState(this.states.PLAYING);
    },
    adComplete: function() {
        this.setState(this.states.CLOSED);
        showRewarded_adViewed();
    },
    /*
    adViewed: function() {
        this.setState(this.states.CLOSED);
        showRewarded_adViewed();
    },
    */
    adDismissed: function() {
        this.setState(this.states.CLOSED);
        showRewarded_adDismissed();
    },
    /*
    afterAd: function() {
        window.famobi.game.resume();
        this.setState(this.states.WAITING);
    },
    */
    afterBreak: function() {
        window.famobi.game.resume();
        this.setState(this.states.WAITING);
    }
};

const _gameReady = function() {
    if (!hasGameReadyCalled) {
        hasGameReadyCalled = true;
        GAMESNACKS.gameReady();
    }
};

const _getVolume = function() {
    return GAMESNACKS.isAudioEnabled() ? 1.0 : 0.0;
};

const _showAd = function(callback, force, isInitial) {

    IS_DEBUG && console.log("[CALL] famobi.showAd (" + (isInitial ? "initial" : "interstitial") + ")");

    let doCallback = function() {
        if (typeof callback !== "undefined") {
            callback();
        }
    }

    doCallback();
};

const _hasRewardedAd = function() {

    if (!window.famobi.hasFeature("rewarded")) {
        IS_DEBUG && console.log("[SKIP] No Rewarded Feature");
        return false;
    }

    IS_DEBUG && console.log("current state: " + REWARDED_AD_OBJECT.state);

    if (REWARDED_AD_OBJECT.state == REWARDED_AD_OBJECT.states.WAITING) {
        GAMESNACKS.rewardedAdOpportunity(REWARDED_AD_OBJECT);
        return typeof REWARDED_AD_OBJECT.showAdFn == "function";
    }

    if (REWARDED_AD_OBJECT.state == REWARDED_AD_OBJECT.states.READY) {
        return typeof REWARDED_AD_OBJECT.showAdFn == "function";
    }
    return false;
};

const _rewardedAd = function(callback) {

    IS_DEBUG && console.log("[CALL] famobi.rewardedAd()");

    let result = {
        rewardGranted: false,
        adDidLoad: true,
        adDidShow: true
    };

    var doCallback = function() {
        if (typeof callback === "function") {
            callback(result);
        } else {
            IS_DEBUG && console.log("callback is not of type 'function'");
        }
    }

    if (REWARDED_AD_OBJECT.state !== REWARDED_AD_OBJECT.states.READY) {
        IS_DEBUG && console.log("not ready: " + REWARDED_AD_OBJECT.state);
        doCallback();
        return;
    }

    if (typeof REWARDED_AD_OBJECT.showAdFn !== "function") {
        IS_DEBUG && console.log("showAdFn is not a function");
        doCallback();
        return;
    }

    showRewarded_adViewed = function() {
        result.rewardGranted = true;
        doCallback();
    };

    showRewarded_adDismissed = function() {
        doCallback();
    };

    if (typeof REWARDED_AD_OBJECT.showAdFn === "function") {
        IS_DEBUG && console.log("[CALL] REWARDED_AD_OBJECT.showAdFn()");
        REWARDED_AD_OBJECT.showAdFn();
    } else {
        IS_DEBUG && console.log("[SKIP] REWARDED_AD_OBJECT.showAdFn()");
    }
};

const initSDK = function() {
    if (USE_MOCK_OBJECT || typeof GAMESNACKS === "undefined") {
        window.GAMESNACKS = {
            isMuted: true,
            rewardedAdObject: {},
            updateAudio: null,
            sendScore: function(score) {
                IS_DEBUG && console.log("[MOCK] GAMESNACKS.sendScore(%s)", score);
            },
            gameOver: function() {
                IS_DEBUG && console.log("[MOCK] GAMESNACKS.gameOver()");
            },
            levelComplete: function(level) {
                IS_DEBUG && console.log("[MOCK] GAMESNACKS.levelComplete(%s)", level);
            },
            isAudioEnabled: function() {
                return this.isMuted;
            },
            subscribeToAudioUpdates: function(updateAudio) {
                this.updateAudio = updateAudio;
            },
            gameReady: function() {
                IS_DEBUG && console.log("[MOCK] GAMESNACKS.gameReady()");
            },
            rewardedAdOpportunity: function(rewardedAdObject) {
                let _this = this;
                this.rewardedAdObject = rewardedAdObject;
                this.rewardedAdObject.beforeReward(function() {
                    _this.rewardedAdObject.beforeBreak();
                    if (confirm("Rewarded ad ended. Should a reward be granted?")) {
                        _this.rewardedAdObject.adComplete();
                    } else {
                        _this.rewardedAdObject.adDismissed();
                    }
                    _this.rewardedAdObject.afterBreak();
                });
            }
        };
    }

    // FAMOBI_ADAPTERS
    window.famobi_adapters = {
        "api": {
            "created": function() {
                window.famobi.showAd = _showAd;
                window.famobi.rewardedAd = _rewardedAd;
                window.famobi.hasRewardedAd = _hasRewardedAd;
                window.famobi.getVolume = _getVolume;
                window.famobi.gameReady = _gameReady;

                GAMESNACKS.subscribeToAudioUpdates((isAudioEnabled) => {
                    IS_DEBUG && console.log("[CALL] subscribeToAudioUpdates", isAudioEnabled);
                    window.famobi.setVolume(isAudioEnabled ? 1.0 : 0.0);
                });
            }
        }
    };

    if (typeof _loadSnippet === "function") {
        _loadSnippet();
    }
};

loadScript(IS_PROD ? "//embed.gamesnacks.com/assets/js/gamesnacks.js" : "js/gamesnacks.js").then(initSDK, initSDK);