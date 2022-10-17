// Game.js
var Game = pc.createScript('game');

// cookies zpos = 0
// background zpos = -1
// 

Game.instance = null;

Game.STATE_MENU = 'menu';
Game.STATE_INGAME = 'ingame';
Game.STATE_GAMEOVER = 'gameover';

Game.GAMEMODE_CLASSIC = 1;
Game.GAMEMODE_ARCADE = 2;

Game.attributes.add("streakTextColors", {
    type: 'rgba',
    array: true
});

Game.attributes.add("streakBgColors", {
    type: 'rgba',
    array: true
});

// MAIN
Game.attributes.add('camera', {
    type: 'entity'
});


// UI
Game.attributes.add('uiInterface', {
    type: 'entity'
});
Game.attributes.add('uiGameOver', {
    type: 'entity'
});
Game.attributes.add('uiMainMenu', {
    type: 'entity'
});
Game.attributes.add('uiPause', {
    type: 'entity'
});
Game.attributes.add('uiTutor', {
    type: 'entity'
});



// GAME
Game.attributes.add('slicer', {
    type: 'entity'
});


Game.attributes.add('frenzyTreat', {
    type: 'entity'
});
Game.attributes.add('timeTreat', {
    type: 'entity'
});
Game.attributes.add('freezeTreat', {
    type: 'entity'
});
Game.attributes.add('bomb', {
    type: 'entity'
});
Game.attributes.add('treats', {
    type: 'entity',
    array: true,
    title: "treat prefabs"
});

// Extra/Effects
Game.attributes.add('whiteFrameImage', {
    type: 'entity'
});
Game.attributes.add('particleSmoke', {
    type: 'entity'
});
Game.attributes.add('particleBombwave', {
    type: 'entity'
});


Game.gameMsgs = ["Cool!", "Nice!", "Perfect!", "Good!", "Great!"];
Game.gameMsgs2 = ["Perfect!", "Fantastic!", "Amazing!", "Incredible!", "Terrific!"];

// for optimization
Game.vec3static = new pc.Vec3(0, 0, 0);

Game.phrases = [{
    snd: "nj",
    text: "Nice job!"
}, {
    snd: "gj",
    text: "Great job!"
}, {
    snd: "amazing",
    text: "Amazing!"
}, {
    snd: "perfect",
    text: "Perfect!"
}, {
    snd: "wow",
    text: "Wow!"
}, {
    snd: "incred",
    text: "Incredible!"
}];



Game.prototype.initialize = function() {
    Game.instance = this;

    this.canvas = this.app.root.findByName('Canvas');

    this._state = null;
    this.gameMode = Game.GAMEMODE_CLASSIC;

    // load data
    this.bestScore = 0;
    this.bestScoreA = 0;
    this.bestScoreC = 0;
    this.app.fire("game:newbestscore", this.bestScore);

    // extra/effects
    this.canvas = this.app.root.findByName('Canvas');
    this.whiteColor = new pc.Color().fromString('#FFFFFF');
    this.blackColor = new pc.Color().fromString('#000000');
    this.redColor = new pc.Color().fromString('#FF3E3E');
    this.blueColor = new pc.Color().fromString('#A1C1D8');
    this.iceColor = new pc.Color().fromString('#00EAFF');
    this.frenzyColor = new pc.Color().fromString('#FFFF7E');
    this.whiteFrameSpr = this.whiteFrameImage.element;

    // system
    this.setResolution();
    //window.addEventListener("resize", this.setResolution.bind(this));


    // loading progress
    Savefile.addKey('bestScoreC', 0);
    Savefile.addKey('bestScoreA', 0);

    Savefile.load();

    this.bestScoreA = Savefile.get('bestScoreA');
    this.bestScoreC = Savefile.get('bestScoreC');

    //if (Game.instance.bestScoreA > 0 ) UiTutor.arcadeShown = true;
    // if (Game.instance.bestScoreC > 0 ) UiTutor.classicShown = true;

    // open main menu
    this.gotoMainMenu();
};


Game.prototype.saveAll = function() {

    Savefile.set('bestScoreC', this.bestScoreC);
    Savefile.set('bestScoreA', this.bestScoreA);

    Savefile.save();

};


Game.prototype.pause = function(state) {
    this.paused = state;
};

Game.prototype.gotoMainMenu = function() {
    this.reset();
    this._state = Game.STATE_MENU;

    this.uiMainMenu.enabled = true;
    this.uiInterface.enabled = false;
    this.uiGameOver.enabled = false;
};


// reset all params to default, prepare everything for a new game
Game.prototype.reset = function() {


    var ent = this.app.root.findByTag('effect');
    var e;
    for (i = 0; i < ent.length; i++) {
        e = ent[i];
        if (e.enabled)
            e.destroy();
    }


    ent = this.canvas.findByTag('gametext');
    for (i = 0; i < ent.length; i++) {
        e = ent[i];
        if (e.enabled)
            e.destroy();
    }

    ent = this.app.root.findByTag('sliceble');
    for (i = 0; i < ent.length; i++) {
        e = ent[i];
        if (e.enabled)
            e.destroy();
    }

    this.paused = false;
    this.lastLevelTime = 0;

    // streaks
    this.streak = 0;
    this.timeToCalcStreak = 0;

    this.currScore = 0;
    this.app.fire("game:scorechanged", this.currScore);
    this.lives = 3;
    this.app.fire("game:liveschange", this.lives);

    this.throwSide = 1;

    this.frenzyTime = 0;

    this.slomo = 1;
    this.slomoTime = 0;
    this.currScore = 0;

    this.uiGameOver.enabled = false;
    //this.uiTutor.enabled = false;
    //this.uiInterface.enabled
    //uiGameOver 

    // creating cookies
    this.createCookiesTime = 0;
    this.createCookiesTargTime = 2;

};

Game.prototype.updateWhiteFrame = function(dt) {
    if (this._state != Game.STATE_INGAME) {
        this.whiteFrameSpr.opacity = 0;
        return 0;
    }

    if (this.frenzyTime > 0) {
        if (this.whiteFrameSpr.opacity === 0) {
            // set color
            this.whiteFrameSpr.color = this.frenzyColor;
        }
        this.whiteFrameSpr.opacity += dt * 5;

        if (this.whiteFrameSpr.opacity > 1)
            this.whiteFrameSpr.opacity = 1;
    } else

    if (this.slomoTime > 0) {
        if (this.whiteFrameSpr.opacity === 0) {
            // set color
            this.whiteFrameSpr.color = this.iceColor;
        }
        this.whiteFrameSpr.opacity += dt * 5;

        if (this.whiteFrameSpr.opacity > 1)
            this.whiteFrameSpr.opacity = 1;
    }

    if (this.frenzyTime <= 0 && this.slomoTime <= 0) {
        if (this.whiteFrameSpr.opacity > 0) {
            this.whiteFrameSpr.opacity -= dt * 5;
        }

    }

    //this.whiteFrameSpr
};

Game.prototype.updateStreak = function(dt) {
    if (this.timeToCalcStreak > 0) {
        this.timeToCalcStreak -= dt;
        if (this.timeToCalcStreak <= 0) {
            this.timeToCalcStreak = 0;
            // calc streak, show smth
            if (this.streak > 1) {
                var strColorID;

                if (this.streak < 4) strColorID = 0;
                else
                if (this.streak < 6) strColorID = 2;
                else
                if (this.streak < 8) strColorID = 1;
                else
                    strColorID = 3;

                if (this.streak < 8)
                    GameAudio.playEx("streak2", 1 + 1 * (this.streak - 2) / 14);
                else
                    GameAudio.playEx("streak2", 1 + 1 * (this.streak - 7) / 14);


                var ty = Math.min(Cookie.lastBrokePos.y + 1, 4);
                this.showStreakText("x" + this.streak.toString(), Cookie.lastBrokePos.x, ty, strColorID, 3, 1);

                var phr = null;
                if (this.streak >= 4 && this.streak <= 7)
                    if (Math.random() > 0.5)
                        phr = MathUtil.choose(0, 1, 4);
                    else
                if (this.streak > 7)
                    if (Math.random() > 0.75)
                        phr = MathUtil.choose(3, 4, 5, 2);



                if (phr !== null) {
                    phr = Game.phrases[phr];
                    //this.whiteColor
                    var tx = this.showText(phr.text, Cookie.lastBrokePos.x, ty + 0.6, this.streakTextColors[strColorID], 3, 1);
                    tx.entity.element.outlineThickness = 1;
                    GameAudio.play(phr.snd);
                }

                this.addScore(this.streak * this.streak);
            }
            this.streak = 0;
        }
    }
};

Game.prototype.throwSoda = function(type, xScreenPos, angle, vel, delay) {
    /// type 
    // 0 - freeze soda
    // 1 - time plus
    var pref;
    if (type === Cookie.TYPE_FREEZE)
        pref = this.freezeTreat;
    else
    if (type === Cookie.TYPE_TIMEPLUS)
        pref = this.timeTreat;
    else
    if (type === Cookie.TYPE_FRENZY)
        pref = this.frenzyTreat;

    this.throwCookie(xScreenPos, pref, angle, vel, delay);

};


Game.prototype.throwBomb = function(xScreenPos, angle, vel, delay) {
    if (Game.instance._state != Game.STATE_MENU)

        this.throwCookie(xScreenPos, this.bomb, angle, vel, delay);

};

Game.prototype.throwCookie = function(xScreenPos, cookieType, angle, vel, delay) {


    if (Game.instance._state === Game.STATE_MENU || this.currScore < 15)
        if (cookieType == this.bomb) return null;

    this.lastLevelTime = Math.max(this.lastLevelTime, delay);

    var pref = cookieType; //MathUtil.choose(this.cake, this.cakeroll, this.cupcake);
    var e = pref.clone();
    var gravKoef = 1.15;

    this.app.root.addChild(e);
    var xShiftMax = 2;
    var gravOb = e.script.gravityObject;

    if (this.throwSide < 0) {
        xScreenPos = 1 - xScreenPos;
        angle = -(angle - 90) + 90;
    }
    e.setPosition(pc.math.lerp(-xShiftMax, xShiftMax, xScreenPos), -2.7, 0 + pc.math.random(2, 0.5));

    gravOb.initialize();
    gravOb.impulse(angle, vel * gravKoef, 100);
    gravOb.gravity = -7 * gravKoef * gravKoef;
    gravOb.delay = delay;

    var c = e.script.cookie;
    if (delay === 0)
        GameAudio.play("swoosh");

    if (cookieType == this.bomb) {
        //if (c.type == Cookie.TYPE_BOMB)
        if (delay === 0)
            GameAudio.play("BombFly");
        c.type = Cookie.TYPE_BOMB;

        gravOb.bottomDestroyPlank = -6;
    } else
    if (cookieType == this.freezeTreat) {
        c.type = Cookie.TYPE_FREEZE;
        c.soda = true;
    } else
    if (cookieType == this.frenzyTreat) {
        c.type = Cookie.TYPE_FRENZY;
        c.soda = true;
    } else
    if (cookieType == this.timeTreat) {
        c.type = Cookie.TYPE_TIMEPLUS;
        c.soda = true;
    } else {
        c.type = Cookie.TYPE_COOKIE;
    }


    e.enabled = true;


};

Game.prototype.start = function(GAMEMODE) {

    if (this._state == Game.STATE_INGAME) return 1;
    this._state = Game.STATE_INGAME;

    js_GS_sendScore(0);

    if (GAMEMODE == Game.GAMEMODE_ARCADE)
        this.bestScore = this.bestScoreA;
    else
        this.bestScore = this.bestScoreC;


    this.reset();

    this.gameMode = GAMEMODE;

    this.uiMainMenu.enabled = false;
    this.uiInterface.enabled = true;

    this.app.fire("game:start");
    console.log("game : game started ");

    //this.uiTutorial.enabled = false;
    //this.uiInterface.enabled = true;
    //this.uiMainMenu.enabled = false;

};

Game.prototype.updateCreatingCookies = function(dt) {

    if (this.frenzyTime > 0) {
        this.frenzyTime -= dt;
    }

    this.createCookiesTime += dt;
    if (this.createCookiesTime >= this.createCookiesTargTime) {
        this.createLevel();

        this.createCookiesTime = 0;

        if (this.frenzyTime > 0) {
            this.createCookiesTargTime = pc.math.random(0.2, 0.6);
        } else
            this.createCookiesTargTime = pc.math.random(1.5, 2) / (pc.math.clamp(this.currScore / 100, 1, 2.5)) + this.lastLevelTime;
    }
};


Game.prototype.getRandomTreat = function(bombChance) {
    if (MathUtil.chance(bombChance))
        return this.bomb;
    else
        return this.treats[MathUtil.irr(0, this.treats.length - 1)];
    //return this.treats[4];
};


Game.prototype.createLevel = function() {
    this.lastLevelTime = 0;

    var type;
    var tr;

    if (this._state == Game.STATE_MENU) {
        // CREATE FOR MENU
        type = MathUtil.choose(1, 2, 3, 5);
    } else {
        // CREATE FOR GAME
        if (this.frenzyTime > 0)
            type = 6;
        else
        if (this.currScore > 100)
            type = MathUtil.choose(3, 5, 7, 8, 9, 10, 11, 4);
        else
            type = MathUtil.choose(1, 2, 3, 5, 8, 9);

        // soda?
        if (MathUtil.chance(0.045)) {

            if (this.frenzyTime < 0.1) {
                if (this.gameMode == Game.GAMEMODE_ARCADE)
                    this.throwSoda(MathUtil.choose(Cookie.TYPE_FRENZY, Cookie.TYPE_TIMEPLUS, Cookie.TYPE_FREEZE), 0.2, 80, 10, 0);
                else
                    this.throwSoda(MathUtil.choose(Cookie.TYPE_FRENZY, Cookie.TYPE_FREEZE), 0.2, 80, 10, 0);
            }
        }
        //this.throwSoda(MathUtil.choose(Cookie.TYPE_FREEZE, Cookie.TYPE_TIMEPLUS, Cookie.TYPE_FRENZY), 0.2, 80, 10, 0);
    }



    this.throwSide = MathUtil.choose(1, -1);

    switch (type) {
        case 11:
            this.throwCookie(0.4, this.getRandomTreat(0), 90, MathUtil.rr(8, 10.5), 0);
            this.throwCookie(0.6, this.getRandomTreat(0.1), 90, MathUtil.rr(8, 10.5), 0.1);
            this.throwCookie(0.2, this.getRandomTreat(0), 87, MathUtil.rr(8, 10.5), 0.2);
            this.throwCookie(0.1, this.getRandomTreat(0.1), 85, MathUtil.rr(8, 10), 0.2);
            this.throwCookie(0.8, this.getRandomTreat(0), 95, MathUtil.rr(8, 10), 0.4);
            break;
            // 3 diff cookies up one after another
        case 10:
            this.throwCookie(0.4, this.getRandomTreat(0.1), 90, MathUtil.rr(9, 10), 0);
            this.throwCookie(0.6, this.getRandomTreat(0.1), 90, MathUtil.rr(9, 10), 0);
            this.throwCookie(0.2, this.getRandomTreat(0.1), 90, MathUtil.rr(9, 10), 0.5);
            this.throwCookie(0.8, this.getRandomTreat(0.1), 90, MathUtil.rr(9, 10), 0.5);
            break;

            // 3 diff cookies up one after another
        case 9:
            this.throwCookie(0.35, this.getRandomTreat(0.1), 90, MathUtil.rr(9, 10), 0);
            this.throwCookie(0.5, this.getRandomTreat(0.1), 90, MathUtil.rr(9, 10), 0.1);
            this.throwCookie(0.65, this.getRandomTreat(0.1), 90, MathUtil.rr(8, 10), 0.2);
            break;

            // one side, cookie angle, then cookie/bomb up
        case 8:
            this.throwCookie(0, this.getRandomTreat(0), 80, MathUtil.rr(9, 10), 0);
            this.throwCookie(0.1, this.getRandomTreat(0.1), 85, MathUtil.rr(9, 10), 0.5);
            this.throwCookie(0.1, this.getRandomTreat(0.1), 85, MathUtil.rr(9, 10), 0.6);
            break;

            // frenzy time, throw from side
        case 6:
            this.throwCookie(0, this.getRandomTreat(0), 80 + pc.math.random(-3, 3), MathUtil.rr(9, 11), 0);
            break;

            // two sides, throw up
        case 1:
            this.throwCookie(0.2, this.getRandomTreat(0), 90, MathUtil.rr(8, 10), 0);
            this.throwCookie(0.8, this.getRandomTreat(0.1), 90, MathUtil.rr(8, 10), 0);
            break;

            // one side, cookie angle, then cookie/bomb up
        case 5:
            this.throwCookie(0, this.getRandomTreat(0), 80, MathUtil.rr(10, 11), 0);
            this.throwCookie(0.1, this.getRandomTreat(0.5), 90, MathUtil.rr(9, 10), 0.8);
            break;

            // 3 diff cookies up
        case 2:
            this.throwCookie(0.2, this.getRandomTreat(0.1), 90, MathUtil.rr(8, 11), 0);
            this.throwCookie(0.8, this.getRandomTreat(0.25), 90, MathUtil.rr(8, 11), 0);
            this.throwCookie(0.5, this.getRandomTreat(0.25), 90, MathUtil.rr(8, 11), 0);
            break;

            // 3 diff cookies up one after another
        case 7:
            this.throwCookie(0.2, this.getRandomTreat(0.25), 90, MathUtil.rr(9, 10), 0);
            this.throwCookie(0.5, this.getRandomTreat(0.1), 90, MathUtil.rr(9, 10), 0.5);
            this.throwCookie(0.8, this.getRandomTreat(0.25), 90, MathUtil.rr(9, 10), 1);
            break;

            // one side cookie, one side bomb/cookie
        case 3:
            this.throwCookie(0.2, this.getRandomTreat(0), 90, MathUtil.rr(8, 10), 0);
            this.throwCookie(0.8, this.getRandomTreat(0.8), 90, MathUtil.rr(8, 10), 0);
            break;

            // 5 same cookies
        case 4:
            tr = this.getRandomTreat();

            for (var i = 0; i < 5; i++)
                this.throwCookie(0.5 + 0.15 * (i - (5 - 1) * 0.5), tr, 90, MathUtil.rr(8, 10), 0);

            break;
    }

};


Game.prototype.update = function(dt) {

    if (Game.instance._state == Game.STATE_INGAME && !Game.instance.paused) {
        //if (!document.hasFocus())
        //if (!Game.instance.uiPause.enabled)
        //Game.instance.uiPause.enabled = true;
    }

    window.scrollTo(0, 10);
    this.setResolution();

    this.updateWhiteFrame(dt * this.slomo);
    // CREATING COOKIES
    if (this._state == Game.STATE_INGAME) {
        this.updateStreak(dt);
        if (!Game.instance.paused)
            this.updateCreatingCookies(dt);
    } else
    if (this._state == Game.STATE_MENU) {
        this.updateCreatingCookies(dt);
    }
    //this.slomoTime = 1;

    // SLOMO
    if (this.slomoTime > 0) {
        this.slomoTime -= dt;
        this.slomo = 0.35;
    } else {
        this.slomo = 1;
    }

    if (this.paused) this.slomo = 0;


    /*
    if (this.app.keyboard.isPressed(pc.KEY_C))
    {
        this.lives      ++;
        if (this.lives > 3) this.lives = 0;
        this.app.fire("game:liveschange", this.lives);
        
        
    }*/

    /*if (this.app.keyboard.isPressed(pc.KEY_SPACE))
    {
        this.slomo = 0.1;
    } else
    {
        this.slomo = 1;
    }*/


};


// Call this to move from MENU to INGAME
Game.prototype.gameover = function() {
    if (this._state == Game.STATE_GAMEOVER) return 1;
    this._state = Game.STATE_GAMEOVER;

    js_GS_gameOver();
    Game.instance.uiPause.script.uiPause.close();

    if (this.bestScore < this.currScore) {


        this.bestScore = this.currScore;

        if (this.gameMode == Game.GAMEMODE_ARCADE)
            this.bestScoreA = this.bestScore;
        else
            this.bestScoreC = this.bestScore;
            __saveScoreToDatabase__('cakeninja', this.currScore);

        this.app.fire("game:newbestscore", this.bestScore);
    }

    this.saveAll();

    this.lives = 0;
    this.app.fire("game:liveschange", this.lives);

    FadeScreen.instance.show(0.3, 1, 0, function() {
        Game.instance.uiPause.script.uiPause.close();
        this.uiInterface.enabled = false;
        this.uiGameOver.enabled = true;
        GameAudio.play("gameover");
    }.bind(this));

    this.app.fire("game:gameover");
    console.log("game : game over with score ", this.currScore);

    /*
    FadeScreen.instance.show(0.3, 0, true, null);
    
    setTimeout(function(){
    
    FadeScreen.instance.show(0.3, 0, false, function(){
        
        Game.instance.uiScore.enabled        = true;
        
        Game.instance.uiInterface.enabled    = false;
        Game.instance.uiScore.enabled        = true;
    });
    
    }, 1000);
    */

};


/// SYSTEM

// screen scaling
Game.prototype.setResolution = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var asp = w / h;

    // if asp is portrait go fullscreen, fixed otherwise
    if (w < 640) {
        this.app.setCanvasResolution(pc.RESOLUTION_AUTO, w, h);
        this.app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
    }
};


Game.prototype.affectLives = function() {
    if (this._state == Game.STATE_INGAME)
        if (Game.instance.gameMode == Game.GAMEMODE_CLASSIC) {
            this.lives--;

            GameAudio.play("fail");
            if (this.lives < 1) this.gameover();
            this.app.fire("game:liveschange", this.lives);
        }

};

////////////////// SCORING //////////////////

// return the current score
Game.prototype.getScore = function() {
    return this.currScore;
};

// add a value to the score
Game.prototype.addScore = function(v) {
    this.currScore += v;
    if (this.currScore < 0)
        this.currScore = 0;

    if (v < 0) {

        //this.uiInterface.script.Uiinterface.score.script.counterText.setValue(this.currScore, this.currScore, 100);
    }

    this.app.fire("game:scorechanged", this.currScore);

    js_GS_sendScore(Game.instance.currScore);

};

// reset the score
Game.prototype.resetScore = function() {
    this.currScore = 0;
    this.app.fire("game:scorechanged", this.currScore);
};

//////////////////// EXTRA //////////////////////////

Game.prototype.showText = function(text, x, y, _color, animType, upScale = 1) {
    var txt = ObjectPool.pop("MsgText", this.app.root);
    txt.setLocalScale(0, 0, 0);

    this.canvas.addChild(txt);
    txt.element.text = text;
    txt.element.color = _color; //new pc.Color().fromString(hexColor);

    txt.setPosition(x, y, 0);

    txt.script.gameText.animate(animType, upScale);

    //TextTranslator.translateFont(txt.element, "Seravek.ttf");

    txt.enabled = true;

    return txt.script.gameText;
};

Game.prototype.showStreakText = function(text, x, y, streakColorID, animType, upScale = 1) {
    var txt = ObjectPool.pop("StreakText", this.app.root);
    var gt = txt.script.gameText;

    gt.glow.element.color = this.streakBgColors[streakColorID];

    txt.setLocalScale(0, 0, 0);
    txt.enabled = true;

    this.canvas.addChild(txt);
    txt.element.text = text;
    txt.element.color = this.streakTextColors[streakColorID]; //_color;//new pc.Color().fromString(hexColor);

    txt.setPosition(x, y, 0);

    txt.script.gameText.animate(animType, upScale);

    //TextTranslator.translateFont(txt.element, "Seravek.ttf");

    return gt;
};


var MathUtil = pc.createScript("mathUtil");
MathUtil.DEG_TO_RAD = Math.PI / 180, MathUtil.RAD_TO_DEG = 180 / Math.PI, MathUtil.randomID = function(t) {
    return Math.floor(Math.random() * t)
}, MathUtil.irr = function(t, a) {
    return Math.floor(Math.random() * (a - t + 1) + t)
}, MathUtil.chance = function(t) {
    return Math.random() <= t
}, MathUtil.rr = function(t, a) {
    return pc.math.random(t, a)
}, MathUtil.getRandomInt = function(t) {
    return Math.floor(Math.random() * Math.floor(t))
}, MathUtil.find2DAngle = function(t, a, n, r) {
    return Math.atan2(r - y1, n - x1)
}, MathUtil.choose = function() {
    for (var t = [], a = 0; a < arguments.length; a++) t.push(arguments[a]);
    return t[Math.round(pc.math.random(0, arguments.length - 1))]
}, MathUtil.prototype.dot = function(t, a) {
    return t.x * a.x + t.y * a.y + t.z * a.z + t.w * a.w
}, MathUtil.prototype.quatAngle = function(t, a) {
    var n = this.dot(t, a);
    if (t.equals(a)) return 0;
    var r = 1 / (Math.PI / 180);
    return 2 * Math.acos(Math.min(Math.abs(n), 1)) * r
}, MathUtil.prototype.rotateTowards = function(t, a, n) {
    return 0 === this.quatAngle(t, a) ? a : (new pc.Quat).slerp(t, a, n)
};
var Input = pc.createScript("input");
Input.prevMouseX = 0, Input.prevMouseY = 0, Input.mouseDown = !1, Input.mouseDownPrev = !1, Input.mouseX = 0, Input.mouseY = 0, Input.prototype.update = function(u) {
    if (!1 === Input.mouseDown && !0 === Input.mouseDownPrev && this.app.fire("input:mousepress"), !0 === Input.mouseDown && !0 === Input.mouseDownPrev && (Input.mouseX != Input.prevMouseX || Input.mouseY != Input.prevMouseY)) {
        var o = Input.mouseX - Input.prevMouseX,
            t = Input.mouseY - Input.prevMouseY;
        this.app.fire("input:mouseswipe", o, t, u)
    }
    Input.prevMouseX = Input.mouseX, Input.prevMouseY = Input.mouseY, Input.mouseDownPrev = Input.mouseDown
}, Input.prototype.initialize = function() {
    this.app.touch && (this.app.touch.on(pc.EVENT_TOUCHEND, this._onTouchEnd, this), this.app.touch.on(pc.EVENT_TOUCHSTART, this._onTouchStart, this), this.app.touch.on(pc.EVENT_TOUCHMOVE, this._onTouchMove, this)), this.app.mouse.on(pc.EVENT_MOUSEDOWN, this._onMouseDown, this), this.app.mouse.on(pc.EVENT_MOUSEUP, this._onMouseUp, this), this.app.mouse.on(pc.EVENT_MOUSEMOVE, this._onMouseMove, this)
}, Input.prototype._onTouchMove = function(u) {
    var o = u.changedTouches[0];
    u.event.preventDefault(), Input.mouseX = o.x, Input.mouseY = o.y
}, Input.prototype._onTouchStart = function(u) {
    var o = u.changedTouches[0];
    u.event.preventDefault(), Input.mouseX = o.x, Input.mouseY = o.y, Input.mouseDown = !0
}, Input.prototype._onTouchEnd = function(u) {
    var o = u.changedTouches[0];
    u.event.preventDefault(), Input.mouseX = o.x, Input.mouseY = o.y, Input.mouseDown = !1
}, Input.prototype._onMouseMove = function(u) {
    Input.mouseX = u.x, Input.mouseY = u.y
}, Input.prototype._onMouseDown = function(u) {
    Input.mouseX = u.x, Input.mouseY = u.y, Input.mouseDown = !0
}, Input.prototype._onMouseUp = function(u) {
    Input.mouseX = u.x, Input.mouseY = u.y, Input.mouseDown = !1
};
var TextTranslator = pc.createScript("textTranslator");
TextTranslator.attributes.add("textInEnglish", {
    type: "string",
    default: "type text here"
}), TextTranslator.languageID = 0, TextTranslator.languagesCount = 1, TextTranslator.languages = [], TextTranslator.languages[0] = {}, TextTranslator.languageNames = [], TextTranslator.languageNames[0] = "English", TextTranslator.languageShortnames = [], TextTranslator.languageShortnames[0] = "EN", TextTranslator.prototype.initialize = function() {
    this.textEnglish = this.entity.element.text;
    var t = pc.Application.getApplication();
    this.textEnglishFontName = t.assets.get(this.entity.element.fontAsset).name, this.onEnable(), this.on("enable", this.onEnable, this), this.app.on("language:changed", this.onEnable, this)
}, TextTranslator.prototype.onEnable = function() {
    this.entity.element && (TextTranslator.translateFont(this.entity.element, this.textEnglishFontName), this.entity.element.text = TextTranslator.translate(this.textInEnglish))
}, TextTranslator.addLanguage = function(t, a, e) {
    TextTranslator.languageNames[TextTranslator.languagesCount] = t, TextTranslator.languageShortnames[TextTranslator.languagesCount] = a, TextTranslator.languages[TextTranslator.languagesCount] = e, TextTranslator.languagesCount++
}, TextTranslator.chooseLanguageByID = function(t) {
    TextTranslator.languageID = t, pc.Application.getApplication().fire("language:changed", TextTranslator.languageID)
}, TextTranslator.getLanguageName = function() {
    return TextTranslator.languageNames[TextTranslator.languageID]
}, TextTranslator.getLanguageShortname = function() {
    return TextTranslator.languageShortnames[TextTranslator.languageID]
}, TextTranslator.translateFont = function(t, a) {
    var e = pc.Application.getApplication(),
        n = TextTranslator.translateFontName(a);
    return t.fontAsset = e.assets.find(n, "font"), n
}, TextTranslator.translateFontName = function(t) {
    pc.Application.getApplication();
    var a = t;
    return "RU" == TextTranslator.getLanguageShortname() && ("Seravek.ttf" == t && (a = "OpenSans-Semibold.ttf"), "Seravek-Bold.ttf" == t && (a = "OpenSans-Semibold.ttf")), a
}, TextTranslator.createLanguages = function() {
    var t = {
        "SWIPE TO START": "ДВИГАЙ ПАЛЬЦЕМ",
        "Best result": "Рекорд",
        SKINS: "СКИНЫ",
        UNLOCK: "КУПИТЬ",
        CHOOSE: "ВЫБРАТЬ",
        BACK: "НАЗАД",
        SCORE: "СЧЕТ",
        BEST: "РЕКОРД",
        "GAME OVER": "ИГРА ОКОНЧЕНА",
        "LEVEL COMPLETED!": "Уровень пройден!",
        "Cool!": "Клево!",
        "Nice!": "Хорошо!",
        "Perfect!": "Идеально!",
        "Great!": "Круто!",
        "Good!": "Хорошо!",
        "Fantastic!": "Фантастика!",
        "Amazing!": "Чудесно!",
        "Incredible!": "Невероятно!",
        "Terrific!": "Офигенно!",
        CONTINUE: "ПРОДОЛЖИТЬ"
    };
    TextTranslator.addLanguage("Русский", "RU", t)
}, TextTranslator.translate = function(t) {
    if (0 === TextTranslator.languageID) return t;
    var a = TextTranslator.languages[TextTranslator.languageID];
    return t in a ? a[t] : t
}, TextTranslator.createLanguages(), TextTranslator.chooseLanguageByID(0);
var ObjectPool = pc.createScript("objectPool");
ObjectPool.attributes.add("prefabs", {
    type: "entity",
    array: !0
}), ObjectPool.pool = {}, ObjectPool.instantiate = function(o, t, e) {
    var l = ObjectPool.pop(o);
    return e.addChild(l), l.setPosition(t), l.enabled = !0, l
}, ObjectPool.pop = function(o, t) {
    var e, l = ObjectPool.pool[o];
    return l ? (0 === l.pool.length ? e = l.entity.clone() : (e = l.pool.pop()).enabled = !0, e) : (console.log("ObjectPool.pop(): pool for this object doesn't exist - " + o), null)
}, ObjectPool.push = function(o) {
    var t = ObjectPool.pool[o.name];
    t && t.entity != o && (t.pool.length < t.maxCount ? (t.pool.push(o), o.enabled = !1, o.parent && o.parent.removeChild(o)) : o.destroy())
}, ObjectPool.setMaxCount = function(o, t) {
    var e = ObjectPool.pool[o];
    e && (e.maxCount = t)
}, ObjectPool.prototype.initialize = function() {
    for (var o, t, e = 0; e < this.prefabs.length; e++) t = this.prefabs[e], (o = {}).maxCount = 10, o.entity = t, o.pool = [], ObjectPool.pool[t.name] = o;
    ObjectPool.setMaxCount("сoin", 25), ObjectPool.setMaxCount("TrailCircle", 35), ObjectPool.setMaxCount("PlatformComplex", 10), ObjectPool.setMaxCount("Effect3DDrop", 30)
};
var Savefile = pc.createScript("savefile");
Savefile.resetOnLoad = !1, Savefile.name = "GameSave", Savefile.autoSave = !0, Savefile.data = {}, Savefile.defData = {}, Savefile.addKey = function(e, a) {
    Savefile.data[e] = a, Savefile.defData[e] = a
}, Savefile.reset = function() {
    for (var e in Savefile.data) Savefile.data[e] = Savefile.defData[e];
    Savefile.autoSave && Savefile.save()
}, Savefile.load = function() {
    if (Savefile.resetOnLoad) Savefile.reset();
    else
        for (var e in Savefile.data) Savefile.data[e] = Savefile.cookieLoad(Savefile.name + e, Savefile.defData[e])
}, Savefile.save = function() {
    for (var e in Savefile.data) Savefile.cookieSave(Savefile.name + e, Savefile.data[e])
}, Savefile.get = function(e) {
    if (e in Savefile.data) return Savefile.data[e];
    console.log("Savefile.get() - keyname doesn't exist: '" + e + "'")
}, Savefile.set = function(e, a) {
    e in Savefile.data ? Savefile.data[e] = a : (Savefile.addKey(e, a), console.log("Savefile.set() - keyname doesn't exist, new keyname added '" + e + "'")), Savefile.autoSave && Savefile.cookieSave(Savefile.name + e, a)
}, Savefile.cookieSave = function(e, a) {
    Savefile.setCookie(e, a.toString(), 100)
}, Savefile.cookieLoad = function(e, a) {
    var i = Savefile.getCookie(e);
    return i ? Number(i) : a
}, Savefile.setCookie = function(e, a, i) {
    var f = "";
    if (i) {
        var t = new Date;
        t.setTime(t.getTime() + 24 * i * 60 * 60 * 1e3), f = "; expires=" + t.toUTCString()
    }
    document.cookie = e + "=" + (a || "") + f + "; path=/"
}, Savefile.getCookie = function(e) {
    for (var a = e + "=", i = document.cookie.split(";"), f = 0; f < i.length; f++) {
        for (var t = i[f];
            " " == t.charAt(0);) t = t.substring(1, t.length);
        if (0 === t.indexOf(a)) return t.substring(a.length, t.length)
    }
    return null
}, Savefile.eraseCookie = function(e) {
    document.cookie = e + "=; Max-Age=-99999999;"
};
var Trail = pc.createScript("trail");
Trail.attributes.add("trailSprite", {
    type: "entity"
}), Trail.attributes.add("startWidth", {
    type: "number",
    default: 1
}), Trail.attributes.add("endWidth", {
    type: "number",
    default: 0
}), Trail.attributes.add("timeToNewSegment", {
    type: "number",
    default: 1
}), Trail.attributes.add("maxSegments", {
    type: "number",
    default: 10
}), Trail.prototype.initialize = function() {
    this.destroyIfShort = !1, this.trailSprite.enabled = !1, this.segments = [], this.segmentsCount = 0, this.segmentsDist = [], this.length = 0, this.time = 0, this.active = !0, this.nx = 1, this.ny = 0, this.dist = 0, this.px = 0, this.py = 0
}, Trail.prototype.updateTrail = function(t) {
    if (this.length = 0, 1 === this.segmentsCount) this.segments[0].enabled = !1;
    else if (this.segmentsCount > 0) {
        var e = this.entity.getPosition(),
            s = this.segments[0],
            i = 0,
            n = 0,
            h = 0,
            a = 0,
            r = 0,
            o = 0,
            m = this.trailSprite.sprite.sprite.pixelsPerUnit / 64;
        s.setPosition(e);
        for (var l = 1; l < this.segmentsCount; l++) o = pc.math.lerp(this.startWidth, this.endWidth, (l + 1) / this.segmentsCount), h = (i = (n = this.segments[l]).getPosition()).x - e.x, a = i.y - e.y, s.setEulerAngles(0, 0, 180 * Math.atan2(a, h) / Math.PI), r = Math.sqrt(h * h + a * a), 1 == l && (this.nx = h / r, this.ny = a / r, this.dist = r, this.px = e.x, this.py = e.y), this.segmentsDist[l - 1] = r, this.length += r, s.setLocalScale(r * m * 1.05, o, 1), e = i, s = n, l === this.segmentsCount - 1 ? s.enabled = !1 : s.enabled = !0
    }
}, Trail.prototype.update = function(t) {
    if (!this.active) return 1;
    if (this.time += t, this.time >= this.timeToNewSegment) {
        this.time = 0;
        this.entity.getPosition();
        var e = this.trailSprite.clone();
        e.setPosition(0, 0, -1e3), this.app.root.addChild(e);
        for (var s = this.segmentsCount - 1; s >= 0; s--) this.segments[s + 1] = this.segments[s];
        this.segments[0] = e, e.enabled = !0, this.segmentsCount++, this.segmentsCount > this.maxSegments && (this.segmentsCount = this.maxSegments, this.segments[this.maxSegments].destroy())
    }
    if (this.updateTrail(), this.destroyIfShort && this.length <= .01) {
        for (s = 0; s < this.segmentsCount; s++) this.segments[s].destroy();
        this.entity.destroy()
    }
};
var Cookie = pc.createScript("cookie");
Cookie.TYPE_COOKIE = 0, Cookie.TYPE_BOMB = 1, Cookie.TYPE_FREEZE = 2, Cookie.TYPE_TIMEPLUS = 3, Cookie.TYPE_FRENZY = 4, Cookie.lastBrokePos = new pc.Vec3(0, 0, 0), Cookie.attributes.add("radius", {
    type: "number",
    default: .7
}), Cookie.attributes.add("left", {
    type: "entity"
}), Cookie.attributes.add("right", {
    type: "entity"
}), Cookie.attributes.add("full", {
    type: "entity"
}), Cookie.attributes.add("splatColors", {
    type: "rgba",
    array: !0
}), Cookie.attributes.add("materials", {
    type: "asset",
    assetType: "material",
    array: !0,
    title: "Materials"
}), Cookie.prototype.initialize = function() {
    if (this.full.enabled = !0, this.left && (this.left.enabled = !1), this.right && (this.right.enabled = !1), this.sliced = !1, this.materialID = 0, this.materials.length > 0) {
        var t = MathUtil.randomID(this.materials.length);
        this.materialID = t, EntityTools.setMaterial(this.full, this.materials[t]), this.left && EntityTools.setMaterial(this.left, this.materials[t]), this.right && EntityTools.setMaterial(this.right, this.materials[t])
    }
}, Cookie.prototype.onFall = function() {
    if (this.type == Cookie.TYPE_COOKIE && Game.instance._state == Game.STATE_INGAME) {
        Game.instance.camera.script.cameraScript.shake(.5, 20, new pc.Vec3(.2, .2, 0));
        var t = this.entity.getPosition();
        MissEffect.create(new pc.Vec3(t.x, -1.2, 0)), Game.instance.affectLives()
    }
}, Cookie.prototype.slice = function() {
    if (this.sliced) return 1;
    this.sliced = !0;
    var t, e = this.entity.getPosition(),
        a = this.entity.getEulerAngles();
    if (this.soda && this.splatColors.length > 0) {
        for (var i = Math.floor(3 * Math.random() + 2), o = 0; o < i; o++) SplatEffect.create(new pc.Vec3(e.x + pc.math.random(-.5, .5), e.y + pc.math.random(-.5, .5), -.85), this.splatColors[this.materialID], pc.math.random(.32, .58), this.app.root);
        for (i = Math.floor(3 * Math.random() + 8), o = 0; o < i; o++) EffectDrop.create(e, pc.math.random(.4, .7), new pc.Vec3(pc.math.random(-3, 3), pc.math.random(3, 7), 0), this.splatColors[this.materialID])
    }
    if (this.type == Cookie.TYPE_FRENZY) GameAudio.play("sliceBonus"), Game.instance.showStreakText("FRENZY TIME", 0, 4, 1, 3, .8), Game.instance.frenzyTime = 5.5;
    else if (this.type == Cookie.TYPE_TIMEPLUS) {
        GameAudio.play("sliceBonus");
        Game.instance.uiInterface.script.uiinterface.timerText.time += 3, Game.instance.showText("+" + 3..toString() + " sec", e.x, e.y, Game.instance.whiteColor, 1, .75)
    } else if (this.type == Cookie.TYPE_FREEZE) GameAudio.play("sliceBonus"), Game.instance.slomoTime = 8;
    else if (this.type == Cookie.TYPE_BOMB) {
        GameAudio.play("Explosion");
        var s;
        for (i = Math.floor(3 * Math.random() + 5), o = 0; o < i; o++)(s = ParticleSprite.create(Game.instance.particleSmoke, e, new pc.Vec3(pc.math.random(-11, 11), pc.math.random(-11, 11), 0), -1, 0, .05)).spr.stop(), s.spr.frame = Math.floor(4 * Math.random());
        if (ParticleSprite.create(Game.instance.particleBombwave, e, new pc.Vec3(0, 0, 0), 2.5, -1.5, 0), FadeScreen.instance.show(.3, 0, 1, null), Game.instance.camera.script.cameraScript.shake(.8, 50, new pc.Vec3(.5, .5, 0)), Game.instance.gameMode == Game.GAMEMODE_CLASSIC) setTimeout(function() {
            Game.instance.gameover()
        }, 400);
        else {
            Game.instance.showText("-" + 50..toString(), e.x, e.y, Game.instance.blackColor, 1, 1), Game.instance.addScore(-50)
        }
    } else if (this.type == Cookie.TYPE_COOKIE) {
        var r = MathUtil.choose("slice1", "slice2", "slice3");
        if (GameAudio.playEx(r, 1 + (Game.instance.streak - 2) / 14), this.splatColors.length > 0) {
            for (i = Math.floor(3 * Math.random() + 1), o = 0; o < i; o++) SplatEffect.create(new pc.Vec3(e.x + pc.math.random(-.5, .5), e.y + pc.math.random(-.5, .5), -.85), this.splatColors[this.materialID], pc.math.random(.32, .58), this.app.root);
            for (i = Math.floor(3 * Math.random() + 3), o = 0; o < i; o++) EffectDrop.create(e, pc.math.random(.4, .7), new pc.Vec3(pc.math.random(-3, 3), pc.math.random(3, 7), 0), this.splatColors[this.materialID])
        }
        Cookie.lastBrokePos.copy(e), Game.instance.streak++, Game.instance.timeToCalcStreak = .5, Game.instance.addScore(1)
    }
    this.full.enabled = !1, this.left && ((t = EntityTools.createParentAtPoint(this.left, e, this.app.root)).addComponent("script"), t.script.create("gravityObject"), t.script.gravityObject.impulse(a.z + 180, pc.math.random(2, 3), 200), t.script.gravityObject._vel.y += 3, t.script.gravityObject.gravity = -25, this.left.enabled = !0), this.right && ((t = EntityTools.createParentAtPoint(this.right, e, this.app.root)).addComponent("script"), t.script.create("gravityObject"), t.script.gravityObject.impulse(a.z, pc.math.random(2, 3), 200), t.script.gravityObject._vel.y += 3, t.script.gravityObject.gravity = -25, this.right.enabled = !0), this.entity.destroy()
}, Cookie.prototype.update = function(t) {};
var FadeScreen = pc.createScript("fadeScreen");
FadeScreen.attributes.add("fadeScreenImage", {
    type: "entity"
}), FadeScreen.instance = null, FadeScreen.prototype.initialize = function() {
    FadeScreen.instance = this, this.fadeTime = 1, this.delay = 0, this.onlyFadeOut = !1, this.action = null, this.time = 0, this.fading = !1, this.state = 0, this.fadeScreenImage.element.opacity = 0
}, FadeScreen.prototype.start = function() {
    this.fadeScreenImage.enabled = !0, this.onlyFadeOut ? (this.state = 2, this.fadeScreenImage.element.opacity = 1, this.action && this.action()) : (this.state = 1, this.fadeScreenImage.element.opacity = 0)
}, FadeScreen.prototype.update = function(e) {
    if (this.fading) {
        if (this.delay > 0) return this.delay -= e, void(this.delay <= 0 && this.start());
        var t;
        this.time += e, (t = this.time / this.fadeTime) >= 1 ? (this.time = 0, 1 == this.state ? (this.fadeScreenImage.element.opacity = 1, this.state = 2, this.action && this.action()) : 2 == this.state && (this.fadeScreenImage.element.opacity = 0, this.fadeScreenImage.enabled = !1, this.state = 0, this.fading = !1)) : 1 == this.state ? this.fadeScreenImage.element.opacity = t : 2 == this.state && (this.fadeScreenImage.element.opacity = 1 - t)
    }
}, FadeScreen.prototype.show = function(e, t, i, a) {
    this.fadeTime = e, this.delay = t, this.onlyFadeOut = i, this.action = a, this.time = 0, this.fading = !0, 0 === this.delay && this.start()
};
var EntityTools = pc.createScript("entityTools");
EntityTools.reparent = function(t, e) {
    var o = t.getPosition().clone(),
        n = t.getRotation().clone(),
        a = t.getScale().clone();
    t.reparent(e), t.setPosition(o), t.setRotation(n), t.setLocalScale(a)
}, EntityTools.createParentAtPoint = function(t, e, o) {
    var n = new pc.Entity;
    return o.addChild(n), n.setPosition(e), EntityTools.reparent(t, n), n
}, EntityTools.setTexture = function(t, e) {
    for (var o = e.resource, n = t.model.meshInstances, a = 0; a < n.length; ++a) {
        var i = n[a];
        i.material.diffuseMap = o, i.material.update()
    }
}, EntityTools.setMaterial = function(t, e) {
    var o = e.resource;
    t.model.meshInstances[0].material = o, t.model.meshInstances[0].material.update()
};
var GravityObject = pc.createScript("gravityObject");
GravityObject.tmp = new pc.Vec3, GravityObject.prototype.initialize = function() {
    if (this.initialized) return 1;
    this.gravity = -10, this._vel = new pc.Vec3(0, 0, 0), this._acc = new pc.Vec3(0, this.gravity, 0), this.rotSpeed = new pc.Vec3(0, 0, 0), this.falling = !0, this.delay = 0, this.bottomDestroyPlank = -3, this.initialized = !0
}, GravityObject.prototype.impulse = function(t, i, e) {
    var a = t * MathUtil.DEG_TO_RAD;
    this._vel.x = Math.cos(a) * i, this._vel.y = Math.sin(a) * i, this._vel.z = 0, this.rotSpeed.set(pc.math.random(-e, e), pc.math.random(-e, e), pc.math.random(-e, e))
}, GravityObject.prototype.update = function(t) {
    if (this.falling) {
        if (this.delay > 0) {
            if (this.delay -= t, this.delay <= 0)(i = this.entity.script.cookie).type == Cookie.TYPE_BOMB ? GameAudio.play("BombFly") : GameAudio.play("swoosh");
            return 0
        }
        this._acc.y = this.gravity;
        var i, e = this.entity.getLocalPosition();
        if (GravityObject.tmp.copy(this._acc).scale(t * Game.instance.slomo), this._vel.add(GravityObject.tmp), GravityObject.tmp.copy(this._vel).scale(t * Game.instance.slomo), e.add(GravityObject.tmp), this.entity.rotateLocal(this.rotSpeed.x * t * Game.instance.slomo, this.rotSpeed.y * t * Game.instance.slomo, this.rotSpeed.z * t * Game.instance.slomo), e.y <= this.bottomDestroyPlank)(i = this.entity.script.cookie) && i.onFall(), this.entity.destroy()
    }
};
var Slicer = pc.createScript("slicer");
Slicer.attributes.add("camera", {
    type: "entity"
}), Slicer.attributes.add("trailEnt", {
    type: "entity"
}), Slicer.prototype.initialize = function() {
    this.position = new pc.Vec3, this.trail = null, this.timeCD = 0, this.spr = this.entity.sprite
}, Slicer.prototype.update = function(t) {
    if (Game.instance._state === Game.STATE_INGAME && !Game.instance.paused)
        if (Input.mouseDown) {
            this.spr.opacity < 1 && (this.spr.opacity += 15 * t);
            var i = !1;
            if (!this.trail)(l = this.trailEnt.clone()).setPosition(0, 0, -1e3), this.app.root.addChild(l), this.trail = l.script.trail, l.enabled = !0, i = !0, this.timeCD = .07;
            this.timeCD > 0 && (this.timeCD -= t, i = !0);
            var s = this.entity.getPosition(),
                e = this.camera.getPosition();
            if (this.camera.camera.screenToWorld(Input.mouseX, Input.mouseY, e.z - s.z, this.position), this.position.z = 0, this.entity.setPosition(this.position), this.trail.entity.setPosition(this.position), this.trail.updateTrail(0), this.trail.length < .1) return 0;
            for (var r, a, o, n, h = [], p = 0; o = this.trail.px + p * this.trail.nx, n = this.trail.py + p * this.trail.ny, h.push({
                    x: o,
                    y: n
                }), !((p += .1) > this.trail.dist););
            if (i) return 0;
            var l, c, y, u, d, m = this.app.root.findByTag("sliceble");
            for (r = 0; r < m.length; r++)
                if ((l = m[r]).enabled && !(c = l.script.cookie).sliced)
                    for (s = l.getPosition(), d = c.radius * c.radius, a = 0; a < h.length; a++)
                        if ((y = h[a].x - s.x) * y + (u = h[a].y - s.y) * u < d) {
                            c.slice();
                            break
                        }
        } else this.spr.opacity > 0 && (this.spr.opacity -= 15 * t), this.trail && (this.prevTrail = this.trail, this.prevTrail.destroyIfShort = !0, this.trail = null);
    Game.instance._state != Game.STATE_INGAME && this.spr.opacity > 0 && (this.spr.opacity = 0)
};
var Uiinterface = pc.createScript("uiinterface");
Uiinterface.attributes.add("hearts", {
    type: "entity",
    array: !0,
    title: "heartsIcons"
}), Uiinterface.attributes.add("hearts2", {
    type: "entity",
    array: !0,
    title: "heartsIcons2"
}), Uiinterface.attributes.add("score", {
    type: "entity"
}), Uiinterface.attributes.add("best", {
    type: "entity"
}), Uiinterface.attributes.add("timer", {
    type: "entity"
}), Uiinterface.attributes.add("classic", {
    type: "entity"
}), Uiinterface.attributes.add("arcade", {
    type: "entity"
}), Uiinterface.prototype.initialize = function() {
    this.timerText = this.timer.children[0].script.timerText, this.app.on("game:liveschange", this.onLivesChange.bind(this)), this.app.on("game:scorechanged", this.onScoreChange.bind(this)), this.app.on("game:newbestscore", this.onNewBestScore.bind(this)), this.onEnable(), this.on("enable", this.onEnable, this)
}, Uiinterface.prototype.onEnable = function() {
    if (MyButton.setClickable(Game.instance.uiInterface, !0), Game.instance.gameMode == Game.GAMEMODE_CLASSIC) {
        this.classic.enabled = !0, this.arcade.enabled = !1, this.timer.enabled = !1;
        for (var e = 0; e < this.hearts.length; e++) h = this.hearts[e], h.enabled = !0, h = this.hearts2[e], h.enabled = !1
    } else {
        for (e = 0; e < this.hearts.length; e++) h = this.hearts[e], h.enabled = !1, h = this.hearts2[e], h.enabled = !1;
        this.classic.enabled = !1, this.arcade.enabled = !0, this.timer.enabled = !0, this.timerText.time = 60, this.timerText.entity.element.color = Game.instance.whiteColor
    }
    this.score.script.counterText.currValue = 0, this.score.script.counterText.shownValue = 0, this.score.script.counterText.setValue(0, 0, 100), this.onNewBestScore(Game.instance.bestScore)
}, Uiinterface.prototype.update = function(e) {
    Game.instance.gameMode == Game.GAMEMODE_ARCADE && (this.timerText.time < 10 && (this.timerText.entity.element.color = Game.instance.redColor), this.timerText.time <= 0 && Game.instance.gameover())
}, Uiinterface.prototype.onLivesChange = function(e) {
    if (Game.instance.gameMode != Game.GAMEMODE_CLASSIC) return 1;
    for (var t, i = 0; i < this.hearts.length; i++)(t = this.hearts[i]).enabled = i < e, this.hearts2[i].enabled = !t.enabled
}, Uiinterface.prototype.onNewBestScore = function(e) {
    this.best.element.text = e.toString()
}, Uiinterface.prototype.onScoreChange = function(e) {
    0 === e && (this.score.script.counterText.shownValue = 0), this.score.script.counterText.setValue(this.score.script.counterText.shownValue, e, 100)
};
var CounterText = pc.createScript("counterText");
CounterText.attributes.add("targetValue", {
    type: "number",
    default: 0
}), CounterText.attributes.add("shownValue", {
    type: "number",
    default: 0
}), CounterText.attributes.add("changingSpeed", {
    type: "number",
    default: 10
}), CounterText.prototype.initialize = function() {
    this.currValue = this.shownValue, this.entity.element.text = this.shownValue.toString()
}, CounterText.prototype.setValue = function(t, e, u) {
    this.shownValue = t, this.targetValue = e, this.changingSpeed = u, this.currValue = t, this.entity.element.text = this.shownValue.toString()
}, CounterText.prototype.update = function(t) {
    this.shownValue != this.targetValue && (this.currValue < this.targetValue ? (this.currValue += this.changingSpeed * t, this.currValue >= this.targetValue && (this.currValue = this.targetValue), this.shownValue = Math.round(this.currValue)) : (this.currValue -= this.changingSpeed * t, this.currValue <= this.targetValue && (this.currValue = this.targetValue), this.shownValue = Math.round(this.currValue)), this.entity.element.text = this.shownValue.toString())
};
var CameraScript = pc.createScript("cameraScript");
CameraScript.prototype.initialize = function() {
    this.landscapePos = (new pc.Vec3).copy(this.entity.getLocalPosition()), this.shakeTimeCurr = 0, this.shakeTime = 40, this.shaking = !1, this.shakesCount = 1e3, this.shakeShiftTimer = 0, this.shakeShiftCurr = new pc.Vec3(0, 0, 0), this.shakeShiftMax = new pc.Vec3(.3, .3, 0), this.lerpSpeed = 10, this.targetPos = new pc.Vec3(0, 0, 0), this.targetPos.copy(this.landscapePos)
}, CameraScript.prototype.shake = function(t, h, i) {
    this.shakeTimeCurr = 0, this.shakeTime = t, this.shaking = !0, this.shakesCount = h, this.shakeShiftTimer = 0, this.shakeShiftMax.copy(i), this.shakeShiftCurr.set(pc.math.random(-this.shakeShiftMax.x, this.shakeShiftMax.x), pc.math.random(-this.shakeShiftMax.y, this.shakeShiftMax.y), pc.math.random(-this.shakeShiftMax.z, this.shakeShiftMax.z))
}, CameraScript.prototype.update = function(t) {
    var h = this.entity.getLocalPosition();
    this.targetPos.copy(this.landscapePos), this.shaking && (this.shakeTimeCurr += t, this.shakeShiftTimer += t, this.shakeShiftTimer > this.shakeTime / this.shakesCount && (this.shakeShiftTimer = 0, this.shakeShiftCurr.set(pc.math.random(-this.shakeShiftMax.x, this.shakeShiftMax.x), pc.math.random(-this.shakeShiftMax.y, this.shakeShiftMax.y), pc.math.random(-this.shakeShiftMax.z, this.shakeShiftMax.z))), this.shakeTimeCurr >= this.shakeTime && (this.shaking = !1, this.shakeShiftCurr.set(0, 0, 0)), this.targetPos.add(this.shakeShiftCurr)), h.lerp(h, this.targetPos, this.lerpSpeed * t), this.entity.setLocalPosition(h)
};
var FullscreenImage = pc.createScript("fullscreenImage");
FullscreenImage.getScreenComponentIteration = 0, FullscreenImage.getScreenComponent = function(e) {
    return FullscreenImage.getScreenComponentIteration++, FullscreenImage.getScreenComponentIteration > 10 ? null : e.screen ? e.screen : FullscreenImage.getScreenComponent(e.parent)
}, FullscreenImage.prototype.initialize = function() {
    FullscreenImage.getScreenComponentIteration = 0, this.screenComponent = FullscreenImage.getScreenComponent(this.entity), this.updateSize(), window.addEventListener("resize", this.updateSize.bind(this))
}, FullscreenImage.prototype.updateSize = function() {
    var e = this.screenComponent.referenceResolution,
        n = this.screenComponent.scaleBlend,
        t = window.innerWidth,
        r = window.innerHeight;
    this.entity.element.width = pc.math.lerp(e.x, t / r * e.y, n), this.entity.element.height = pc.math.lerp(e.x * r / t, e.y, n)
};
var UigameOver = pc.createScript("uigameOver");
UigameOver.attributes.add("score", {
    type: "entity"
}), UigameOver.attributes.add("best", {
    type: "entity"
}), UigameOver.attributes.add("arcade", {
    type: "entity"
}), UigameOver.attributes.add("classic", {
    type: "entity"
}), UigameOver.prototype.initialize = function() {
    this.onEnable(), this.on("enable", this.onEnable, this)
}, UigameOver.prototype.onEnable = function() {
    Game.instance.gameMode == Game.GAMEMODE_CLASSIC ? (this.classic.enabled = !0, this.arcade.enabled = !1) : (this.classic.enabled = !1, this.arcade.enabled = !0), this.score.script.counterText.currValue = 0, this.score.script.counterText.shownValue = 0, this.score.script.counterText.targetValue = Game.instance.currScore, this.best.element.text = Game.instance.bestScore.toString()
}, UigameOver.prototype.update = function(e) {};
var MyButton = pc.createScript("myButton");
MyButton.attributes.add("startScale", {
    type: "number",
    default: 1
}), MyButton.attributes.add("animScaleKoef", {
    type: "number",
    default: .2
}), MyButton.attributes.add("clickable", {
    type: "boolean",
    default: !0
}), MyButton.attributes.add("actionName", {
    type: "string",
    default: "type name of action"
}), MyButton.prototype.onClick = function() {
    if (this.action) return this.action(), 0;
    switch (this.actionName) {
        case "tuorClose":
            UiTutor.instance.close();
            break;
        case "showTutor":
            Game.instance.uiMainMenu.enabled = !1, UiTutor.instance.open(0, !1);
            break;
        case "tuorGotIt":
            UiTutor.instance.onButton();
            break;
        case "restart":
            Game.instance._state != Game.STATE_GAMEOVER && js_GS_gameOver(), this.app.fire("game:restart"), FadeScreen.instance.show(.5, 0, 0, function() {
                Game.instance.uiInterface.enabled = !1, Game.instance.uiPause.enabled = !1, Game.instance._state = Game.STATE_GAMEOVER, Game.instance.start(Game.instance.gameMode)
            });
            break;
        case "home":
            Game.instance._state != Game.STATE_GAMEOVER && js_GS_gameOver(), this.app.fire("game:home"), FadeScreen.instance.show(.5, 0, 0, function() {
                Game.instance.gotoMainMenu(), Game.instance.uiPause.enabled = !1
            });
            break;
        case "pause":
            MyButton.setClickable(Game.instance.uiInterface, !1), UiTutor.instance.entity.enabled || (Game.instance.uiPause.enabled = !0);
            break;
        case "resume":
            MyButton.setClickable(Game.instance.uiInterface, !0), Game.instance.uiPause.script.uiPause.close();
            break;
        case "gameoverContinue":
            FadeScreen.instance.show(.5, 0, 0, function() {
                Game.instance.gotoMainMenu()
            });
            break;
        case "buyhtml5Contact":
            window.open("mailto:contact@buyhtml5.com");
            break;
        case "dagaevdevContact":
            window.open("mailto:dagaevdev@gmail.com");
            break;
        case "mainMenuClassic":
            FadeScreen.instance.show(.3, .1, !1, function() {
                Game.instance.start(Game.GAMEMODE_CLASSIC), UiTutor.classicShown || UiTutor.instance.open(0, !0)
            });
            break;
        case "mainMenuArcade":
            FadeScreen.instance.show(.3, .1, !1, function() {
                Game.instance.start(Game.GAMEMODE_ARCADE), UiTutor.arcadeShown || UiTutor.instance.open(1, !0)
            });
            break;
        case "soundButton":
            GameAudio.switch(!GameAudio.mute);
            break;
        case "backButtonInShop":
            ShopController.applySkin(Game.instance.ballModel, Game.instance.chosenSkinId), ShopController.instance.closeShop();
            break;
        case "leftButtonInShop":
            ShopController.instance.switchItem(-1);
            break;
        case "rightButtonInShop":
            ShopController.instance.switchItem(1);
            break;
        case "chooseButtonInShop":
            Game.instance.chosenSkinId = ShopController.instance.shownItemId, ShopController.applySkin(Game.instance.ballModel, Game.instance.chosenSkinId), ShopController.instance.closeShop();
            break;
        case "unlockButtonInShop":
            GameAudio.play("buyitem"), ShopController.instance.buyItem(ShopController.instance.shownItemId);
            break;
        case "continueButtonInScore":
            FadeScreen.instance.show(.5, .1, !1, function() {
                this.app.fire("game:makereset", !1)
            });
            break;
        case "shopButtonInScore":
            FadeScreen.instance.show(.3, .1, !1, function() {
                Game.instance.uiShop.enabled = !0, Game.instance.uiScore.enabled = !1
            });
            break;
        case "restartButtonInScore":
            FadeScreen.instance.show(.5, .1, !1, function() {
                this.app.fire("game:makereset", !0)
            });
            break;
        default:
            return 0
    }
}, MyButton.prototype.initialize = function() {
    this.button = this.entity.button, this.clickable = !0, this.animScaling = !0, this.mouseDown = !1, this.pressScaleX = 1, this.pressScaleY = 1, this.pressScaleXVel = 0, this.entity.element.on("mousedown", this.onMouseDown, this), this.entity.element.on("mouseleave", this.onMouseLeave, this), this.entity.element.on("mouseup", this.onMouseLeave, this), this.entity.element.on("touchstart", this.onMouseDown, this), this.entity.element.on("touchend", this.onMouseLeave, this)
}, MyButton.prototype.onMouseDown = function() {
    this.button.active && 1 != FadeScreen.instance.state && (Game.instance.BH5 && "buyhtml5Contact" != this.actionName || this.clickable && (GameAudio.play("button"), this.mouseDown = !0, this.onClick()))
}, MyButton.prototype.onMouseLeave = function() {
    this.mouseDown = !1
}, MyButton.prototype.update = function(e) {
    this.animScaling ? (this.mouseDown && this.button.active ? (this.pressScaleX > 1 - this.animScaleKoef && (this.pressScaleX = pc.math.lerp(this.pressScaleX, 1 - this.animScaleKoef, .5)), this.pressScaleY = this.pressScaleX) : (this.pressScaleXVel += 20 * (1 - this.pressScaleX), this.pressScaleXVel *= .7, this.pressScaleX += this.pressScaleXVel * e, this.pressScaleY = this.pressScaleX), this.entity.setLocalScale(this.pressScaleX * this.startScale, this.pressScaleY * this.startScale, 1)) : this.entity.setLocalScale(this.startScale, this.startScale, this.startScale)
}, MyButton.setClickable = function(e, t) {
    for (var n, a = 0; a < e.children.length; a++)(n = e.children[a]).script && n.script.myButton && (n.script.myButton.clickable = t), MyButton.setClickable(n, t)
};
var BackgroundCity2 = pc.createScript("backgroundCity2");
BackgroundCity2.prototype.initialize = function() {
    this.defScale = (new pc.Vec3).copy(this.entity.getLocalScale()), this.scale = (new pc.Vec3).copy(this.entity.getLocalScale())
}, BackgroundCity2.prototype.update = function(t) {
    var e = window.innerWidth,
        i = window.innerHeight,
        c = Math.max(1.1, e / i * .7);
    this.scale.x = c * this.defScale.x, this.scale.z = c * this.defScale.z, this.entity.setLocalScale(this.scale)
};
var SplatEffect = pc.createScript("splatEffect");
SplatEffect.color = new pc.Color, SplatEffect.create = function(t, e, i, o) {
    var a = ObjectPool.instantiate("EffectSplat", t, o);
    a.sprite.color = e;
    var n = new pc.Vec3(i, i, i);
    return a.setLocalScale(n), a.sprite.frame = Math.floor(3 * Math.random()), a.setEulerAngles(0, 0, 360 * Math.random()), a
}, SplatEffect.prototype.initialize = function() {
    this.entity.sprite.stop(), this.time = 0, this.onEnable(), this.on("enable", this.onEnable, this)
}, SplatEffect.prototype.onEnable = function() {
    this.entity.sprite.opacity = 1, this.time = 0
}, SplatEffect.prototype.update = function(t) {
    this.time += t * Game.instance.slomo, this.time > 8.5 && (this.entity.sprite.opacity -= 1 * t), this.entity.sprite.opacity <= 0 && ObjectPool.push(this.entity)
};
var EffectDrop = pc.createScript("effectDrop");
EffectDrop.grav = new pc.Vec3(0, -16, 0), EffectDrop.temp = new pc.Vec3(0, 0, 0), EffectDrop.create = function(e, t, i, o) {
    var c = ObjectPool.instantiate("EffectDrop", e, Game.instance.app.root),
        s = c.script.effectDrop;
    return s.initialized || s.initialize(), s.vel.copy(i), s.size = t, c.enabled = !0, c.sprite.color = o, c
}, EffectDrop.prototype.initialize = function() {
    this.initialized = !0, this.vel = new pc.Vec3(0, 0, 0), this.damping = .01, this.size = 1, this.onEnable(), this.on("enable", this.onEnable, this)
}, EffectDrop.prototype.onEnable = function() {}, EffectDrop.prototype.update = function(e) {
    if (EffectDrop.temp.copy(EffectDrop.grav), EffectDrop.temp.scale(e * Game.instance.slomo), this.vel.add(EffectDrop.temp), this.vel.scale(1 - this.damping * e * Game.instance.slomo), EffectDrop.temp.copy(this.vel), EffectDrop.temp.scale(e * Game.instance.slomo), this.entity.translate(EffectDrop.temp), this.entity.getPosition().add(this.vel), this.size -= .4 * e * Game.instance.slomo, this.size <= 0) ObjectPool.push(this.entity);
    else {
        var t = pc.math.clamp(this.vel.length() / 10, 1, 4);
        this.entity.setLocalScale(this.size, this.size, this.size * t)
    }
}; // GameText.js
var GameText = pc.createScript('gameText');

GameText.attributes.add('glow', {
    type: 'entity'
});


// initialize code called once per entity
GameText.prototype.initialize = function() {
    this.hideDelay = 1;
    this.fadeOpacity = false;
};

GameText.prototype.animate = function(_hideAnimType, upScale = 1) {
    this.hideAnimType = _hideAnimType; // hiding animation : 1 - scale to zero; 2 - fade opacity

    this.time = 0;

    this.showTime = 0.45; // сколько будет виден чистый текст
    this.appearTime = 0.7; // время появления
    this.hideTime = 0.6; // время скрытия

    this.hideDelay = this.appearTime + this.showTime; // задержка до сокрытия
    this.fadeOpacity = false;
    this.entity.element.opacity = 1;

    //this.rotTarg = pc.math.random(-200,200);

    //this.entity.setLocalScale(1,1,1);
    //
    if (this.hideAnimType == 3)
        this.entity
        .tween(this.entity.getLocalRotation())
        .to(new pc.Vec3(0, 0, pc.math.random(-0.1, 0.1)), this.appearTime, pc.BackOut)
        .loop(false)
        .yoyo(false)
        .start();
    else
        this.entity.setLocalRotation(0, 0, 0, 1);

    this.entity
        .tween(this.entity.getLocalScale())
        .to(new pc.Vec3(1 * upScale, 1 * upScale, 1 * upScale), this.appearTime, pc.BackOut)
        .loop(false)
        .yoyo(false).start();

    //if (_hideAnimType === 1)

};

// update code called every frame
GameText.prototype.update = function(dt) {

    this.time += dt;

    if (this.time > 0.75)
        if (this.hideAnimType === 3)
            this.entity.translate(0, dt * 0.5, 0);
    if (this.glow)
        this.glow.rotateLocal(0, 0, 30 * dt);
    //console.log(this.entity.getLocalRotation().z);
    //var pz = pc.math.lerp( this.entity.getRotation().z, this.rotTarg, dt*5);
    //this.entity.setLocalRotation(new pc.Vec3(0,0,0));

    // HIDING
    if (this.fadeOpacity) {
        this.entity.element.opacity -= dt / this.hideTime;
        if (this.entity.element.opacity <= 0) ObjectPool.push(this.entity);
        this.entity.translate(0, dt * 5, 0);
    }

    if (this.hideDelay > 0) {
        this.hideDelay -= dt;
        if (this.hideDelay <= 0) {
            // hide text animation
            if (this.hideAnimType == 1 || this.hideAnimType == 3) {
                // 1 -- SCALE TO ZERO
                var t = this.entity
                    .tween(this.entity.getLocalScale())
                    .to(new pc.Vec3(0, 0, 0), this.hideTime, pc.BackIn)
                    .loop(false)
                    .yoyo(false).on('complete', function() {
                        ObjectPool.push(this.entity);
                    });

                if (this.hideAnimType === 3)
                    this.entity
                    .tween(this.entity.getLocalRotation())
                    .to(new pc.Vec3(0, 0, 0), this.hideTime, pc.BackIn)
                    .loop(false)
                    .yoyo(false)
                    .start();


                t.start();
            } else
            if (this.hideAnimType == 2) {
                this.fadeOpacity = true;
            }

        }
    }
};


pc.extend(pc, function() {
        var t = function(t) {
            this._app = t, this._tweens = [], this._add = []
        };
        t.prototype = {
            add: function(t) {
                return this._add.push(t), t
            },
            update: function(t) {
                for (var i = 0, e = this._tweens.length; i < e;) this._tweens[i].update(t) ? i++ : (this._tweens.splice(i, 1), e--);
                this._add.length && (this._tweens = this._tweens.concat(this._add), this._add.length = 0)
            }
        };
        var i = function(t, i, e) {
                pc.events.attach(this), this.manager = i, e && (this.entity = null), this.time = 0, this.complete = !1, this.playing = !1, this.stopped = !0, this.pending = !1, this.target = t, this.duration = 0, this._currentDelay = 0, this.timeScale = 1, this._reverse = !1, this._delay = 0, this._yoyo = !1, this._count = 0, this._numRepeats = 0, this._repeatDelay = 0, this._from = !1, this._slerp = !1, this._fromQuat = new pc.Quat, this._toQuat = new pc.Quat, this._quat = new pc.Quat, this.easing = pc.EASE_LINEAR, this._sv = {}, this._ev = {}
            },
            e = function(t) {
                var i;
                return t instanceof pc.Vec2 ? i = {
                    x: t.x,
                    y: t.y
                } : t instanceof pc.Vec3 ? i = {
                    x: t.x,
                    y: t.y,
                    z: t.z
                } : t instanceof pc.Vec4 ? i = {
                    x: t.x,
                    y: t.y,
                    z: t.z,
                    w: t.w
                } : t instanceof pc.Quat ? i = {
                    x: t.x,
                    y: t.y,
                    z: t.z,
                    w: t.w
                } : t instanceof pc.Color ? (i = {
                    r: t.r,
                    g: t.g,
                    b: t.b
                }, void 0 !== t.a && (i.a = t.a)) : i = t, i
            };
        i.prototype = {
            to: function(t, i, n, s, r, h) {
                return this._properties = e(t), this.duration = i, n && (this.easing = n), s && this.delay(s), r && this.repeat(r), h && this.yoyo(h), this
            },
            from: function(t, i, n, s, r, h) {
                return this._properties = e(t), this.duration = i, n && (this.easing = n), s && this.delay(s), r && this.repeat(r), h && this.yoyo(h), this._from = !0, this
            },
            rotate: function(t, i, n, s, r, h) {
                return this._properties = e(t), this.duration = i, n && (this.easing = n), s && this.delay(s), r && this.repeat(r), h && this.yoyo(h), this._slerp = !0, this
            },
            start: function() {
                var t, i, e, n;
                if (this.playing = !0, this.complete = !1, this.stopped = !1, this._count = 0, this.pending = this._delay > 0, this._reverse && !this.pending ? this.time = this.duration : this.time = 0, this._from) {
                    for (t in this._properties) this._properties.hasOwnProperty(t) && (this._sv[t] = this._properties[t], this._ev[t] = this.target[t]);
                    this._slerp && (this._toQuat.setFromEulerAngles(this.target.x, this.target.y, this.target.z), i = void 0 !== this._properties.x ? this._properties.x : this.target.x, e = void 0 !== this._properties.y ? this._properties.y : this.target.y, n = void 0 !== this._properties.z ? this._properties.z : this.target.z, this._fromQuat.setFromEulerAngles(i, e, n))
                } else {
                    for (t in this._properties) this._properties.hasOwnProperty(t) && (this._sv[t] = this.target[t], this._ev[t] = this._properties[t]);
                    this._slerp && (this._fromQuat.setFromEulerAngles(this.target.x, this.target.y, this.target.z), i = void 0 !== this._properties.x ? this._properties.x : this.target.x, e = void 0 !== this._properties.y ? this._properties.y : this.target.y, n = void 0 !== this._properties.z ? this._properties.z : this.target.z, this._toQuat.setFromEulerAngles(i, e, n))
                }
                return this._currentDelay = this._delay, this.manager.add(this), this
            },
            pause: function() {
                this.playing = !1
            },
            resume: function() {
                this.playing = !0
            },
            stop: function() {
                this.playing = !1, this.stopped = !0
            },
            delay: function(t) {
                return this._delay = t, this.pending = !0, this
            },
            repeat: function(t, i) {
                return this._count = 0, this._numRepeats = t, this._repeatDelay = i || 0, this
            },
            loop: function(t) {
                return t ? (this._count = 0, this._numRepeats = 1 / 0) : this._numRepeats = 0, this
            },
            yoyo: function(t) {
                return this._yoyo = t, this
            },
            reverse: function() {
                return this._reverse = !this._reverse, this
            },
            chain: function() {
                for (var t = arguments.length; t--;) t > 0 ? arguments[t - 1]._chained = arguments[t] : this._chained = arguments[t];
                return this
            },
            update: function(t) {
                if (this.stopped) return !1;
                if (!this.playing) return !0;
                if (!this._reverse || this.pending ? this.time += t * this.timeScale : this.time -= t * this.timeScale, this.pending) {
                    if (!(this.time > this._currentDelay)) return !0;
                    this._reverse ? this.time = this.duration - (this.time - this._currentDelay) : this.time = this.time - this._currentDelay, this.pending = !1
                }
                var i = 0;
                (!this._reverse && this.time > this.duration || this._reverse && this.time < 0) && (this._count++, this.complete = !0, this.playing = !1, this._reverse ? (i = this.duration - this.time, this.time = 0) : (i = this.time - this.duration, this.time = this.duration));
                var e, n, s = this.time / this.duration,
                    r = this.easing(s);
                for (var h in this._properties) this._properties.hasOwnProperty(h) && (e = this._sv[h], n = this._ev[h], this.target[h] = e + (n - e) * r);
                if (this._slerp && this._quat.slerp(this._fromQuat, this._toQuat, r), this.entity && (this.entity._dirtifyLocal(), this.element && this.entity.element && (this.entity.element[this.element] = this.target), this._slerp && this.entity.setLocalRotation(this._quat)), this.fire("update", t), this.complete) {
                    var a = this._repeat(i);
                    return a ? this.fire("loop") : (this.fire("complete", i), this._chained && this._chained.start()), a
                }
                return !0
            },
            _repeat: function(t) {
                if (this._count < this._numRepeats) {
                    if (this._reverse ? this.time = this.duration - t : this.time = t, this.complete = !1, this.playing = !0, this._currentDelay = this._repeatDelay, this.pending = !0, this._yoyo) {
                        for (var i in this._properties) tmp = this._sv[i], this._sv[i] = this._ev[i], this._ev[i] = tmp;
                        this._slerp && (this._quat.copy(this._fromQuat), this._fromQuat.copy(this._toQuat), this._toQuat.copy(this._quat))
                    }
                    return !0
                }
                return !1
            }
        };
        var n = function(t) {
                return 1 - s(1 - t)
            },
            s = function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            };
        return {
            TweenManager: t,
            Tween: i,
            Linear: function(t) {
                return t
            },
            QuadraticIn: function(t) {
                return t * t
            },
            QuadraticOut: function(t) {
                return t * (2 - t)
            },
            QuadraticInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            },
            CubicIn: function(t) {
                return t * t * t
            },
            CubicOut: function(t) {
                return --t * t * t + 1
            },
            CubicInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            QuarticIn: function(t) {
                return t * t * t * t
            },
            QuarticOut: function(t) {
                return 1 - --t * t * t * t
            },
            QuarticInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            },
            QuinticIn: function(t) {
                return t * t * t * t * t
            },
            QuinticOut: function(t) {
                return --t * t * t * t * t + 1
            },
            QuinticInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            SineIn: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : 1 - Math.cos(t * Math.PI / 2)
            },
            SineOut: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : Math.sin(t * Math.PI / 2)
            },
            SineInOut: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : .5 * (1 - Math.cos(Math.PI * t))
            },
            ExponentialIn: function(t) {
                return 0 === t ? 0 : Math.pow(1024, t - 1)
            },
            ExponentialOut: function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            ExponentialInOut: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            },
            CircularIn: function(t) {
                return 1 - Math.sqrt(1 - t * t)
            },
            CircularOut: function(t) {
                return Math.sqrt(1 - --t * t)
            },
            CircularInOut: function(t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            BackIn: function(t) {
                return t * t * (2.70158 * t - 1.70158)
            },
            BackOut: function(t) {
                return --t * t * (2.70158 * t + 1.70158) + 1
            },
            BackInOut: function(t) {
                var i = 2.5949095;
                return (t *= 2) < 1 ? t * t * ((i + 1) * t - i) * .5 : .5 * ((t -= 2) * t * ((i + 1) * t + i) + 2)
            },
            BounceIn: n,
            BounceOut: s,
            BounceInOut: function(t) {
                return t < .5 ? .5 * n(2 * t) : .5 * s(2 * t - 1) + .5
            },
            ElasticIn: function(t) {
                var i, e = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (!e || e < 1 ? (e = 1, i = .1) : i = .4 * Math.asin(1 / e) / (2 * Math.PI), -e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - i) * (2 * Math.PI) / .4))
            },
            ElasticOut: function(t) {
                var i, e = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (!e || e < 1 ? (e = 1, i = .1) : i = .4 * Math.asin(1 / e) / (2 * Math.PI), e * Math.pow(2, -10 * t) * Math.sin((t - i) * (2 * Math.PI) / .4) + 1)
            },
            ElasticInOut: function(t) {
                var i, e = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (!e || e < 1 ? (e = 1, i = .1) : i = .4 * Math.asin(1 / e) / (2 * Math.PI), (t *= 2) < 1 ? e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - i) * (2 * Math.PI) / .4) * -.5 : e * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - i) * (2 * Math.PI) / .4) * .5 + 1)
            }
        }
    }()),
    function() {
        pc.Application.prototype.addTweenManager = function() {
            this._tweenManager = new pc.TweenManager(this), this.on("update", function(t) {
                this._tweenManager.update(t)
            })
        }, pc.Application.prototype.tween = function(t) {
            return new pc.Tween(t, this._tweenManager)
        }, pc.Entity.prototype.tween = function(t, i) {
            var e = this._app.tween(t);
            return e.entity = this, this.on("destroy", function() {
                e.stop()
            }), i && i.element && (e.element = i.element), e
        };
        var t = pc.Application.getApplication();
        t && t.addTweenManager()
    }();
var MissEffect = pc.createScript("missEffect");
MissEffect.create = function(t) {
    var e = ObjectPool.instantiate("EffectMiss", t, Game.instance.app.root);
    return e.script.missEffect.destroyDelay = 1, e.setLocalScale(0, 0, 0), e.tween(e.getLocalScale()).to(new pc.Vec3(.65, .65, .65), .5, pc.BackOut).loop(!1).yoyo(!1).start(), e
}, MissEffect.prototype.initialize = function() {}, MissEffect.prototype.update = function(t) {
    this.destroyDelay > 0 && (this.destroyDelay -= t, this.destroyDelay <= 0 && this.entity.tween(this.entity.getLocalScale()).to(new pc.Vec3(0, 0, 0), .3, pc.BackIn).loop(!1).yoyo(!1).on("complete", function() {
        ObjectPool.push(this.entity)
    }).start())
};
var TimerText = pc.createScript("timerText");
TimerText.attributes.add("time", {
    type: "number",
    default: 0
}), TimerText.attributes.add("timeSpeed", {
    type: "number",
    default: 1
}), TimerText.prototype.initialize = function() {}, TimerText.prototype.update = function(t) {
    this.time += t * this.timeSpeed * Game.instance.slomo, this.time < 0 && (this.time = 0);
    var e = Math.floor(this.time % 60),
        i = Math.floor(this.time / 60);
    e = e < 10 ? "0" + e.toString() : e.toString(), i = i.toString(), this.entity.element.text = i + ":" + e
};
var ParticleSprite = pc.createScript("particleSprite");
ParticleSprite.tmp = new pc.Vec3, ParticleSprite.prototype.initialize = function() {
    this.initialized || (this.initialized = !0, this.spr = this.entity.sprite, this.alphaSpeed = 0, this.scaleSpeed = 0, this.delay = 0, this.gravity = 0, this.velDamping = 0, this._vel = new pc.Vec3(0, 0, 0), this._acc = new pc.Vec3(0, this.gravity, 0))
}, ParticleSprite.prototype.update = function(t) {
    if (this.delay > 0) return this.delay -= t, 0;
    this._acc.y = this.gravity;
    var i = this.entity.getLocalPosition();
    ParticleSprite.tmp.copy(this._acc).scale(t * Game.instance.slomo), this._vel.add(ParticleSprite.tmp);
    var e = 1 - this.velDamping;
    this._vel.x *= e, this._vel.y *= e, this._vel.z *= e, ParticleSprite.tmp.copy(this._vel).scale(t * Game.instance.slomo), i.add(ParticleSprite.tmp);
    var a = this.entity.getLocalScale().x;
    (a += t * this.scaleSpeed) < 0 && this.scaleSpeed < 0 ? this.entity.destroy() : this.entity.setLocalScale(a, a, a), this.spr.opacity += this.alphaSpeed * t, this.spr.opacity < 0 && this.entity.destroy()
}, ParticleSprite.create = function(t, i, e, a, s, p) {
    var c = t.clone(),
        l = c.script.particleSprite;
    return l.initialize(), l._vel.copy(e), l.scaleSpeed = a, l.alphaSpeed = s, l.velDamping = p, Game.instance.app.root.addChild(c), c.setPosition(i), c.enabled = !0, l
};
var GameAudio = pc.createScript("gameAudio");
GameAudio.instance = null, GameAudio.mute = !1, GameAudio.gsMute = !1, GameAudio.loopStep = 0, GameAudio.prototype.update = function(e) {
    GameAudio.loopStep > 0 && (GameAudio.loopStep += 1, js_isMobileOrTablet() ? GameAudio.loopStep >= 10 && (GameAudio.loopStep = -1, GameAudio.instance.snd.play("loopSound")) : (GameAudio.loopStep = -1, GameAudio.instance.snd.play("loopSound")));
    var o = !GAMESNACKS.isAudioEnabled();
    o != GameAudio.gsMute && (GameAudio.gsMute = o, GameAudio.switch(GameAudio.gsMute))
}, GameAudio.prototype.initialize = function() {
    GameAudio.instance = this, this.snd = this.entity.sound, GameAudio.gsMute = !GAMESNACKS.isAudioEnabled(), GameAudio.mute = GameAudio.gsMute, GameAudio.switch(GameAudio.mute), this.snd.slot("loopSound").volume = 2e-5, this.app.on("input:mousepress", this.onMousePress)
}, GameAudio.prototype.onMousePress = function() {
    0 === GameAudio.loopStep && (GameAudio.loopStep = 1)
}, GameAudio.switch = function(e) {
    GameAudio.mute = e, GameAudio.instance.snd.enabled = !GameAudio.mute
}, GameAudio.play = function(e) {
    (GAMESNACKS.isAudioEnabled() && !0, GameAudio.instance) && (GameAudio.instance.snd.slot(e).pitch = 1, GameAudio.instance.snd.play(e))
}, GameAudio.playEx = function(e, o) {
    (GAMESNACKS.isAudioEnabled() && !0, GameAudio.instance) && (GameAudio.instance.snd.slot(e).pitch = o, GameAudio.instance.snd.play(e))
};

function js_GS_sendScore(o) {
    GAMESNACKS.sendScore(o), console.log("GAMESNACKS : score sent " + o.toString())
}

function js_GS_gameOver() {
    GAMESNACKS.gameOver(), console.log("GAMESNACKS : game over")
}
var audioEnabled = !1;

function js_GS_isAudioEnabled() {
    return audioEnabled
}

function js_isIE() {
    var o = window.navigator.userAgent;
    return /MSIE|Trident/.test(o)
}

function js_isMobileOrTablet() {
    var o, i = !1;
    o = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(o) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(o.substr(0, 4))) && (i = !0);
    var e = navigator.maxTouchPoints || "ontouchstart" in document.documentElement,
        a = void 0 !== window.orientation;
    return i || (e || a)
}
var hidden, visibilityChange, UiPause = pc.createScript("uiPause");

function handleVisibilityChange() {
    document[hidden] && (Game.instance._state != Game.STATE_INGAME || Game.instance.paused || Game.instance.uiPause.enabled || (Game.instance.uiPause.enabled = !0))
}
UiPause.attributes.add("arcade", {
    type: "entity"
}), UiPause.attributes.add("classic", {
    type: "entity"
}), UiPause.attributes.add("popup", {
    type: "entity"
}), UiPause.prototype.initialize = function() {
    this.onEnable(), this.on("enable", this.onEnable, this), void 0 !== document.hidden ? (hidden = "hidden", visibilityChange = "visibilitychange") : void 0 !== document.msHidden ? (hidden = "msHidden", visibilityChange = "msvisibilitychange") : void 0 !== document.webkitHidden && (hidden = "webkitHidden", visibilityChange = "webkitvisibilitychange"), void 0 === document.addEventListener || void 0 === hidden ? console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.") : document.addEventListener(visibilityChange, handleVisibilityChange, !1), this.close(), Game.instance.uiPause.enabled = !1
}, UiPause.prototype.onEnable = function() {
    Game.instance.pause(!0), Game.instance.gameMode == Game.GAMEMODE_CLASSIC ? (this.classic.enabled = !0, this.arcade.enabled = !1) : (this.classic.enabled = !1, this.arcade.enabled = !0), this.popup.setLocalScale(0, 0, 0), this.popup.tween(this.popup.getLocalScale()).to(new pc.Vec3(1, 1, 1), .65, pc.BackOut).loop(!1).yoyo(!1).start()
}, UiPause.prototype.close = function() {
    Game.instance.pause(!1), this.popup.tween(this.popup.getLocalScale()).to(new pc.Vec3(0, 0, 0), .4, pc.BackIn).loop(!1).yoyo(!1).on("complete", function() {
        Game.instance.uiPause.enabled = !1
    }).start()
}, UiPause.prototype.update = function(e) {};
var SoundButton = pc.createScript("soundButton");
SoundButton.attributes.add("noSound", {
    type: "entity"
}), SoundButton.prototype.initialize = function() {
    this.app.on("app:soundchanged", this.onSoundChange, this), this.onEnable(), this.on("enable", this.onEnable, this)
}, SoundButton.prototype.onSoundChange = function(n) {
    this.noSound.enabled = n
}, SoundButton.prototype.update = function(n) {
    this.noSound.enabled = GameAudio.mute
}, SoundButton.prototype.onEnable = function() {
    this.onSoundChange(GameAudio.mute)
};
var TextIcon = pc.createScript("textIcon");
TextIcon.attributes.add("icon", {
    type: "entity"
}), TextIcon.attributes.add("spacing", {
    type: "number",
    default: 20,
    title: "icon spacing"
}), TextIcon.prototype.initialize = function() {}, TextIcon.prototype.update = function(t) {
    this.icon.setLocalPosition(-(this.spacing + .5 * this.entity.element.textWidth), 0, 0)
};
var UiTutor = pc.createScript("uiTutor");
UiTutor.attributes.add("popup", {
    type: "entity"
}), UiTutor.attributes.add("pages", {
    type: "entity",
    array: !0,
    title: "pages"
}), UiTutor.attributes.add("pauseBut", {
    type: "entity"
}), UiTutor.attributes.add("exitBut", {
    type: "entity"
}), UiTutor.attributes.add("gotitBut", {
    type: "entity"
}), UiTutor.attributes.add("carousel", {
    type: "entity"
}), UiTutor.instance = null, UiTutor.pageID = 0, UiTutor.singlePage = !1, UiTutor.classicShown = !1, UiTutor.arcadeShown = !1, UiTutor.prototype.initialize = function() {
    UiTutor.instance = this, this.on("enable", this.onEnable, this), this.entity.enabled = !1
}, UiTutor.prototype.open = function(t, e) {
    e && 0 === t && (UiTutor.classicShown = !0), e && 1 === t && (UiTutor.arcadeShown = !0), this.exitBut.enabled = !e, this.gotitBut.enabled = e, this.carousel.enabled = !e, UiTutor.pageID = t, UiTutor.singlePage = e, this.entity.enabled = !0, this.pauseBut.script.myButton.clickable = !1
}, UiTutor.prototype.onButton = function() {
    UiTutor.singlePage ? this.close() : (UiTutor.pageID++, UiTutor.pageID >= this.pages.length ? this.close() : this.showPage(UiTutor.pageID))
}, UiTutor.prototype.showPage = function(t) {
    UiTutor.pageID = t;
    for (var e = 0; e < this.pages.length; e++) this.pages[e].enabled = e == t
}, UiTutor.prototype.onEnable = function() {
    this.showPage(UiTutor.pageID), Game.instance._state == Game.STATE_INGAME && Game.instance.pause(!0), this.popup.setLocalScale(0, 0, 0), this.popup.tween(this.popup.getLocalScale()).to(new pc.Vec3(1, 1, 1), .65, pc.BackOut).loop(!1).yoyo(!1).start()
}, UiTutor.prototype.close = function() {
    this.pauseBut.script.myButton.clickable = !0, this.popup.tween(this.popup.getLocalScale()).to(new pc.Vec3(0, 0, 0), .4, pc.BackIn).loop(!1).yoyo(!1).on("complete", function() {
        Game.instance.uiTutor.enabled = !1, Game.instance._state == Game.STATE_INGAME && Game.instance.pause(!1), Game.instance._state == Game.STATE_MENU && (Game.instance.uiMainMenu.enabled = !0)
    }).start()
}, UiTutor.prototype.update = function(t) {};
var Uicarousel = pc.createScript("uicarousel");
Uicarousel.attributes.add("currSlideID", {
    type: "number",
    default: 0
}), Uicarousel.attributes.add("slides", {
    type: "entity",
    array: !0,
    title: "slides"
}), Uicarousel.attributes.add("buttonSlideLeft", {
    type: "entity"
}), Uicarousel.attributes.add("buttonSlideRight", {
    type: "entity"
}), Uicarousel.attributes.add("iconsEnable", {
    type: "boolean",
    default: !0
}), Uicarousel.attributes.add("iconImage", {
    type: "entity"
}), Uicarousel.attributes.add("iconImageChosen", {
    type: "entity"
}), Uicarousel.attributes.add("iconsSpacing", {
    type: "number",
    default: 50
}), Uicarousel.prototype.initialize = function() {
    this.iconsEnable && this.createIcons(), this.buttonSlideLeft && (this.buttonSlideLeft.script.myButton.action = this.slideLeft.bind(this)), this.buttonSlideRight && (this.buttonSlideRight.script.myButton.action = this.slideRight.bind(this)), this.on("enable", this.onEnable, this)
}, Uicarousel.prototype.onEnable = function() {
    this.showSlide(0)
}, Uicarousel.prototype.createIcons = function() {
    var t, i = this.iconsSpacing * (this.slides.length - 1);
    this.icons = [];
    for (var e = 0; e < this.slides.length; e++) t = this.iconImage.clone(), this.entity.addChild(t), this.icons.push(t), t.setLocalPosition(pc.math.lerp(-.5 * i, .5 * i, e / (this.slides.length - 1)), 0, 0);
    t = this.iconImageChosen.clone(), this.iconChosen = t, this.entity.addChild(t), this.iconImage.enabled = !1, this.iconImageChosen.enabled = !1, t.setLocalPosition(pc.math.lerp(-.5 * i, .5 * i, 0), 0, 0)
}, Uicarousel.prototype.updateIcons = function() {
    var t = this.iconsSpacing * (this.slides.length - 1);
    this.iconsEnable && this.iconChosen.setLocalPosition(pc.math.lerp(-.5 * t, .5 * t, this.currSlideID / (this.slides.length - 1)), 0, 0)
}, Uicarousel.prototype.slideLeft = function() {
    this.currSlideID--, this.currSlideID < 0 && (this.currSlideID = 0), this.currSlideID > this.slides.length - 1 && (this.currSlideID = this.slides.length - 1), this.showSlide(this.currSlideID)
}, Uicarousel.prototype.slideRight = function() {
    this.currSlideID++, this.currSlideID < 0 && (this.currSlideID = 0), this.currSlideID > this.slides.length - 1 && (this.currSlideID = this.slides.length - 1), this.showSlide(this.currSlideID)
}, Uicarousel.prototype.showSlide = function(t) {
    this.currSlideID = pc.math.clamp(t, 0, this.slides.length - 1), this.buttonSlideLeft && (0 === this.currSlideID ? this.buttonSlideLeft.enabled = !1 : this.buttonSlideLeft.enabled = !0), this.buttonSlideRight && (this.currSlideID === this.slides.length - 1 ? this.buttonSlideRight.enabled = !1 : this.buttonSlideRight.enabled = !0);
    for (var i = 0; i < this.slides.length; i++) i == this.currSlideID ? this.slides[i].enabled = !0 : this.slides[i].enabled = !1;
    this.updateIcons()
}, Uicarousel.prototype.update = function(t) {};
