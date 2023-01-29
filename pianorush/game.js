var src;
(function(src) {
    class CustomScaleManager {
        static update(newWidth, newHeight) {
            CustomScaleManager.WIDTH = newWidth;
            CustomScaleManager.HEIGHT = newHeight;
            let newRatio = newWidth / newHeight;
            if (newRatio >= CustomScaleManager.ORIGINAL_RATIO) {
                CustomScaleManager.SCALE_X = CustomScaleManager.SCALE_Y = newHeight / CustomScaleManager.ORIGINAL_HEIGHT;
            } else {
                CustomScaleManager.SCALE_X = CustomScaleManager.SCALE_Y = newWidth / CustomScaleManager.ORIGINAL_WIDTH;
            }
            src.WindowManager.instance.resize();
            src.BackgroundManager.instance.resize();
            src.TransitionScreen.instance.resize();
        }
        static reset(...elems) {
            for (let i = 0; i < elems.length; i++) {
                if (elems[i]) {
                    CustomScaleManager.rescale(elems[i]);
                    CustomScaleManager.reflow(elems[i]);
                } else {
                    // throw new Error("Wrong element");
                }
            }
        }
        static reflow(element) {
            if (!element["nativePosition"]) {
                element["nativePosition"] = new PIXI.Point(element.position.x / CustomScaleManager.ORIGINAL_WIDTH, element.position.y / CustomScaleManager.ORIGINAL_HEIGHT);
            }
            if (!element["deltaPosition"]) {
                element["deltaPosition"] = new PIXI.Point(0, 0);
            }
            element.position.set(element["nativePosition"].x * CustomScaleManager.WIDTH + element["deltaPosition"].x * CustomScaleManager.SCALE_X, element["nativePosition"].y * CustomScaleManager.HEIGHT + element["deltaPosition"].y * CustomScaleManager.SCALE_Y);
        }
        static rescale(element) {
            if (!element["nativeScale"]) {
                element["nativeScale"] = element.scale.clone();
            }
            if (element["fitWidth"]) {
                element.scale.set(CustomScaleManager.WIDTH / CustomScaleManager.ORIGINAL_WIDTH, CustomScaleManager.WIDTH / CustomScaleManager.ORIGINAL_WIDTH);
                return;
            }
            if (element["fitHeight"]) {
                element.scale.set(CustomScaleManager.HEIGHT / CustomScaleManager.ORIGINAL_HEIGHT, CustomScaleManager.HEIGHT / CustomScaleManager.ORIGINAL_HEIGHT);
                return;
            }
            element.scale.set(element["nativeScale"].x * CustomScaleManager.SCALE_X, element["nativeScale"].y * CustomScaleManager.SCALE_Y);
        }
        static setPosition(element, px, py, dx = 0, dy = 0) {
            if (!element["nativePosition"]) {
                element["nativePosition"] = new PIXI.Point(px, py);
            }
            if (!element["deltaPosition"]) {
                element["deltaPosition"] = new PIXI.Point(dx, dy);
            }
            CustomScaleManager.reflow(element);
        }
        static fitWidth(element) {
            element["fitWidth"] = true;
        }
        static fitHeight(element) {
            element["fitHeight"] = true;
        }
    }
    CustomScaleManager.ORIGINAL_WIDTH = 640;
    CustomScaleManager.ORIGINAL_HEIGHT = 960;
    CustomScaleManager.WIDTH = 640;
    CustomScaleManager.HEIGHT = 960;
    CustomScaleManager.SCALE_X = 1;
    CustomScaleManager.SCALE_Y = 1;
    CustomScaleManager.ORIGINAL_RATIO = CustomScaleManager.ORIGINAL_WIDTH / CustomScaleManager.ORIGINAL_HEIGHT;
    src.CustomScaleManager = CustomScaleManager;
})(src || (src = {}));
var src;
(function(src) {
    class RenderUtils {
        static detectRenderMode() {
            let isIE = window.navigator.userAgent.indexOf('MSIE ') > 0 || window.navigator.userAgent.indexOf('Trident/') > 0;
            let isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
            let bestRenderMode = isIE || isFirefox ? Phaser.CANVAS : Phaser.AUTO;
            return bestRenderMode;
        }
    }
    src.RenderUtils = RenderUtils;
})(src || (src = {}));
///<reference path="scale/CustomScaleManager.ts"/>
///<reference path="utils/RenderUtils.ts"/>
var src;
(function(src) {
    class App extends Phaser.Game {
        constructor() {
            super(App.gameConfig);
            App.instance = this;
            this.state.add('Boot', src.Boot, false);
            this.state.add('Preloader', src.Preloader, false);
            this.state.add('MainMenu', src.MainMenu, false);
            this.state.add('SongEditor', src.SongEditor, false);
            this.state.add('SongsMenu', src.SongsMenu, false);
            this.state.add('EditorSongList', src.EditorSongList, false);
            this.state.add('Level', src.Level, false);
            this.state.add('Tutorial', src.Tutorial, false);
            this.state.start('Boot');
        }
        navigateToSponsor() {
            if (src.Settings.ENABLE_API) {
                window.famobi.openBrandingLink();
            }
        }
        showAd(timeout = 0) {}
        pauseGame() {
            src.SoundController.instance.pauseSounds();
            this.paused = true;
            window.famobi.log('pausing game...');
        }
        unpauseGame() {
            if (isPageVisible && !adIsShowing) {
                this.paused = false;
                src.SoundController.instance.resumeSounds();
                window.famobi.log('resuming game...');
            }
        }
    }
    App.gameConfig = {
        width: src.CustomScaleManager.ORIGINAL_WIDTH,
        height: src.CustomScaleManager.ORIGINAL_HEIGHT,
        renderer: Phaser.CANVAS,
        transparent: true,
        enableDebug: false
    };
    src.App = App;
})(src || (src = {}));
var game;
var isPageVisible = false;
var adIsShowing = false;
//famobi pause/resume requests
window['famobi_onPauseRequested'] = function() {
    adIsShowing = true;
    if (game) {
        // game.pauseGame();
    }
};
window['famobi_onResumeRequested'] = function() {
    adIsShowing = false;
    if (game) {
        // game.unpauseGame();
    }
};
//visiblity
var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
    hidden = "hidden";
    visibilityChange = "visibilitychange";
} else if (typeof document["msHidden"] !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
} else if (typeof document["webkitHidden"] !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
}

function handleVisibilityChange() {
    if (document[hidden]) {
        isPageVisible = false;
        if (game && !adIsShowing)
            game.pauseGame();
    } else {
        isPageVisible = true;
        if (game && !adIsShowing)
            game.unpauseGame();
    }
}
// Warn if the browser doesn't support addEventListener or the Page Visibility API
if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
    window.famobi.log("Browser doesn't support the Page Visibility API.");
} else {
    // Handle page visibility change
    document.addEventListener(visibilityChange, handleVisibilityChange, false);
}
var src;
(function(src) {
    class Settings {}
    //WINDOWS
    Settings.WINDOW_BACKGROUND_ALPHA = 0.85;
    //FONTS
    Settings.DEFAULT_FONT_FAMILY = 'Roboto Condensed';
    Settings.ROBOTO_BITMAP = 'roboto-condensed';
    //ATLASES
    Settings.GAME_ATLAS = 'graphics';
    Settings.WINDOWS_ATLAS = 'windows';
    Settings.PRELOADER_ATLAS = 'preloader';
    //TILES
    Settings.TILE_WIDTH = 160;
    Settings.TILE_HEIGHT = 280;
    Settings.BPM_ACCELERATION = 1;
    Settings.PREDICTION_TIME = 0.04;
    Settings.PERFECT_LINE_MARGIN_BOTTOM = 320;
    Settings.START_TILE_DISPLACEMENT_Y = Settings.TILE_HEIGHT / 2;
    Settings.LONG_TILE_ACTIVATOR_DISTANCE = 50;
    Settings.LONG_TILE_ACTIVATOR_HEIGHT = 80;
    Settings.HUMAN_REACTION_TIME = 0.1;
    Settings.TILE_TAP_BONUS_DISTANCE_FACTOR = 0.25;
    Settings.MISS_CLICK_RESULTS_WINDOW_DELAY = 1.1; //seconds
    Settings.SKIPPED_TILE_RESULTS_WINDOW_DELAY = 1.6; //seconds
    //ALBUMS
    Settings.ALBUMS_CONTAINER_Y = 10;
    Settings.DISTANCE_BETWEEN_ALBUMS = 10;
    Settings.DISTANCE_BETWEEN_SONGS = 12;
    Settings.ALBUM_PANEL_HEIGHT = 170;
    Settings.SONG_PANEL_HEIGHT = 140;
    //EDITOR
    Settings.EDITOR_TILE_WIDTH = 80;
    Settings.EDITOR_TILE_HEIGHT = 140;
    Settings.STARTED_FROM_EDITOR = false;
    Settings.TILE_MERGE_THRESHOLD = 0.05;
    //TUTORIAL
    Settings.TUTORIAL_SPEED = 2;
    //REWARDS
    Settings.TILE_MIN_REWARD = 1;
    Settings.TILE_MAX_REWARD = 4;
    Settings.STARS_MILESTONES = [0.39, 0.74, 0.89];
    //STATE
    Settings.IS_MOBILE = false;
    Settings.IS_DESKTOP = true;
    //SETTINGS
    Settings.DEBUG_MODE = false; //false
    Settings.FORCE_DISPLAY_DEBUG_INFO = false; //false
    Settings.ENABLE_TILES_CACHING = true;
    Settings.LOAD_SONGS_FROM_LOCALSTORAGE = true;
    Settings.UNLOCK_ALL_SONGS = false;
    Settings.ENABLE_API = true;
    Settings.AUTOPLAY_ENABLED = Settings.DEBUG_MODE;
    Settings.GOD_MODE = Settings.DEBUG_MODE;
    Settings.GAME_VERSION = "1.06";
    Settings.VERSION_ID = "text.no_caching";
    Settings.ENABLE_ACCELERATION = true;
    Settings.LOCAL_STORAGE_KEY = 'piano-rush';
    src.Settings = Settings;
})(src || (src = {}));
var src;
(function(src) {
    let BackgroundColor;
    (function(BackgroundColor) {
        BackgroundColor[BackgroundColor["PINK"] = 0] = "PINK";
        BackgroundColor[BackgroundColor["ORANGE"] = 1] = "ORANGE";
        BackgroundColor[BackgroundColor["GREEN"] = 2] = "GREEN";
        BackgroundColor[BackgroundColor["CYAN"] = 3] = "CYAN";
        BackgroundColor[BackgroundColor["BLUE"] = 4] = "BLUE";
    })(BackgroundColor = src.BackgroundColor || (src.BackgroundColor = {}));
})(src || (src = {}));
var src;
(function(src) {
    class BackgroundManager extends Phaser.Group {
        constructor() {
            super(src.App.instance, null);
            this.isInitialized = false;
            this.numHills = 7;
            this.game.stage.addChildAt(this, 0);
            this.changeBackground(this.game.rnd.pick([src.BackgroundColor.PINK, src.BackgroundColor.ORANGE, src.BackgroundColor.GREEN, src.BackgroundColor.CYAN, src.BackgroundColor.BLUE]));
        }
        static get instance() {
            return BackgroundManager._instance ? BackgroundManager._instance : BackgroundManager._instance = new BackgroundManager();
        }
        buildContent() {
            this.hills = [];
            for (let i = 0; i < this.numHills; i++) {
                this.hills.push(this.add(new src.MovingHill(i / this.numHills)));
            }
        }
        /**
         * PUBLIC
         */
        init() {
            this.isInitialized = true;
            this.buildContent();
            this.resize();
        }
        buildParticles() {
            this.particlesContainer = this.add(this.game.make.group(null));
            this.emitter = this.particlesContainer.add(this.game.make.emitter(this.game.world.width, -100, 100));
            this.emitter.makeParticles(src.Settings.GAME_ATLAS, ['particle000' + this.currentBackground]);
            this.emitter.minParticleScale = 0.2;
            this.emitter.maxParticleScale = 0.7;
            this.emitter.autoAlpha = true;
            this.emitter.setAlpha(0.4, 0.95);
            this.emitter.setXSpeed(-20, -10);
            this.emitter.setYSpeed(-5, 5);
            this.emitter.gravity = new Phaser.Point(-10, 15);
            this.emitter.width = this.game.world.width * 2;
            this.emitter.minRotation = 20;
            this.emitter.maxRotation = 250;
            this.emitter.start(false, 20000, 400, 0);
        }
        changeBackground(color) {
            this.currentBackground = color;
            game.canvas.style.background = BackgroundManager.backgrounds[this.currentBackground];
            if (this.isInitialized) {
                if (this.emitter) {
                    this.emitter.forEach(particle => particle.frameName = 'particle000' + this.currentBackground);
                }
                if (this.game.state.getCurrentState() instanceof src.Level) {
                    this.game.state.getCurrentState().changeColor(color);
                }
                if (this.game.state.getCurrentState() instanceof src.SongsMenu) {
                    this.game.state.getCurrentState().changeColor(color);
                }
                src.AlbumsManager.instance.changeColor(color);
            }
        }
        getUIColorDecimal() {
            return BackgroundManager.uiColors[this.currentBackground];
        }
        resize() {
            if (this.isInitialized) {
                this.position.set(0, 0);
                if (this.emitter) {
                    this.emitter.x = this.game.world.width;
                    this.emitter.y = -100;
                    this.emitter.width = this.game.world.width * 2;
                }
                if (this.hills) {
                    this.hills.forEach(hill => hill.resize());
                }
            }
        }
        update() {
            super.update();
        }
        /**
         * DESTROY
         */
        destroy() {
            this.emitter.destroy(true);
            super.destroy();
            this.particlesContainer = null;
            this.emitter = null;
        }
    }
    BackgroundManager._instance = null;
    BackgroundManager.backgrounds = [
        "linear-gradient(to bottom, #FFA0C2, #FF85C9)",
        "linear-gradient(to bottom, #FDCE67, #FFA661)",
        "linear-gradient(to bottom, #23D76A, #60A823)",
        "linear-gradient(to bottom, #61F0E2, #44DDAC)",
        "linear-gradient(to bottom, #8AA7FF, #75AAFD)"
    ];
    BackgroundManager.uiColors = [
        0x8C3C60,
        0xA65E30,
        0x006334,
        0x296661,
        0x145BA8
    ];
    BackgroundManager.textColors = [
        0xD24A9F,
        0xCD6725,
        0x09933D,
        0x239A94,
        0x4D70D7
    ];
    BackgroundManager.songTitleColors = [
        0x943470,
        0x804017,
        0x0A6629,
        0x165E5B,
        0x314787
    ];
    BackgroundManager.songAuthorColors = [
        0xB8418B,
        0xA6531E,
        0x09933D,
        0x1F807B,
        0x4361BA
    ];
    src.BackgroundManager = BackgroundManager;
})(src || (src = {}));
var src;
(function(src) {
    class MovingHill extends Phaser.Image {
        constructor(xIndex) {
            super(src.App.instance, 0, 0, 'background-hill');
            this.xIndex = xIndex;
            this.anchor.set(0.5, 0);
            this.tweenAppearing(true);
        }
        update() {
            super.update();
            this.y += this.speedY * this.game.time.elapsedMS / 1000;
            if (this.y > this.game.world.height) {
                this.tweenAppearing(false);
            }
        }
        resize() {
            this.x = this.xPosition * this.game.world.width;
        }
        tweenAppearing(firstTime) {
            this.randomizeParameters(firstTime);
            this.alpha = this.defaultAlpha;
            if (!firstTime) {
                this.alpha = 0;
                this.game.tweens.removeFrom(this, false);
                this.game.add.tween(this)
                    .to({
                        alpha: this.defaultAlpha
                    }, 2000, Phaser.Easing.Linear.None, true);
            }
        }
        randomizeParameters(firstTime) {
            this.xPosition = this.game.rnd.realInRange(0.85, 1.15) * this.xIndex;
            this.yPosition = firstTime ? this.game.rnd.realInRange(-0.5, 0.5) : this.game.rnd.realInRange(-0.3, 0.1);
            this.position.set(this.game.world.width * this.xPosition, this.yPosition * this.game.world.height);
            this.speedY = this.game.rnd.realInRange(15, 30);
            this.defaultAlpha = firstTime ? this.game.rnd.realInRange(0.2, 0.5) : this.game.rnd.realInRange(0.3, 0.7);
            this.scale.set(this.game.rnd.realInRange(0.6, 1.2));
        }
    }
    src.MovingHill = MovingHill;
})(src || (src = {}));
var src;
(function(src) {
    class TileBuilder {
        constructor(tileManager) {
            this.currentLineIndex = 1;
            this.firstTileCreated = false;
            this.tileManager = tileManager;
            this.level = tileManager.level;
        }
        update() {
            while (this.tileManager.tiles.length < 3 || this.tileManager.getNextTileY() + this.tileManager.tilesContainer.y >= -this.tileManager.getScreenHeight() - src.Settings.TILE_HEIGHT) {
                let tileModel = this.level.melodyManager.getNextTileModel();
                if (tileModel) {
                    this.createTile(tileModel);
                } else {
                    break;
                }
            }
        }
        createTile(tileModel) {
            let tilePosition = tileModel.tilePosition;
            let lineIndex = this.currentLineIndex++;
            let createdTile = null;
            if (!this.firstTileCreated) {
                this.createStartingTile(tilePosition, this.tileManager.getStartingTilePosition(), false);
                this.firstTileCreated = true;
            }
            if (src.SongMath.isLongTile(tileModel, this.level.melodyManager.baseStep)) {
                //long tile
                createdTile = this.createLongTile(tileModel, lineIndex);
            } else {
                //single tile
                createdTile = this.createShortTile(tileModel, lineIndex);
            }
            if (createdTile && this.level.heartManager.heartEnabled && !this.level.heartManager.heartHasBeenGenerated && lineIndex >= this.level.heartManager.heartAppearingPercentage * this.level.melodyManager.totalTilesAmount) {
                let heartPosition = Phaser.ArrayUtils.getRandomItem([src.TilePosition.FIRST, src.TilePosition.SECOND, src.TilePosition.THIRD, src.TilePosition.FOURTH].filter(p => p != createdTile.tilePosition));
                if (heartPosition != null) {
                    this.createHeartTile(heartPosition, createdTile.y - createdTile.game.rnd.realInRange(0, Phaser.Math.clamp(createdTile.tileHeight - src.Settings.TILE_HEIGHT, 0, 1000)), lineIndex);
                }
            }
        }
        createStartingTile(exceptPosition, yPosition, randomizePosition = true) {
            let position = Phaser.ArrayUtils.getRandomItem([src.TilePosition.FIRST, src.TilePosition.SECOND, src.TilePosition.THIRD, src.TilePosition.FOURTH].filter(p => p != exceptPosition));
            if (!randomizePosition) {
                position = src.SongStorage.instance.songs.indexOf(this.level.melodyManager.getSong()) % 2 == 0 ? exceptPosition - 1 : exceptPosition + 1;
                if (position == -1) {
                    position = 3;
                } else if (position == 4) {
                    position = 0;
                }
            }
            let existingStartingTile = this.tileManager.tiles.find(tile => tile instanceof src.StartTile);
            if (existingStartingTile) {
                window.famobi.log("Starting tile is already present on the field and will be reused");
                return null;
            }
            let tile = this.tileManager.addTile(new src.StartTile(this.tileManager, new src.PreparedTileModel(position, 0, 0, []), 0), false, yPosition);
            return tile;
        }
        createDefeatTile(position, yPosition, height = src.Settings.TILE_HEIGHT) {
            let tile = this.tileManager.addTile(new src.DefeatTile(this.tileManager, new src.PreparedTileModel(position, 0, 0, []), 0, height), false, yPosition);
            return tile;
        }
        createHeartTile(position, yPosition, lineIndex) {
            let tile = this.tileManager.addTile(new src.HeartTile(this.tileManager, new src.PreparedTileModel(position, 0, 0, []), lineIndex), false, yPosition);
            this.level.heartManager.heartHasBeenGenerated = true;
            return tile;
        }
        createShortTile(tileModel, lineIndex) {
            let tile = src.TileCache.instance.getShortTile();
            if (tile) {
                tile.restore(this.tileManager, tileModel, lineIndex);
                this.tileManager.addTile(tile, true, this.tileManager.getNextTileY());
            } else {
                tile = this.tileManager.addTile(new src.ShortTile(this.tileManager, tileModel, lineIndex), true, this.tileManager.getNextTileY());
            }
            return tile;
        }
        createLongTile(tileModel, lineIndex) {
            let tile = src.TileCache.instance.getLongTile();
            if (tile) {
                tile.restore(this.tileManager, tileModel, lineIndex);
                this.tileManager.addTile(tile, true, this.tileManager.getNextTileY());
            } else {
                tile = this.tileManager.addTile(new src.LongTile(this.tileManager, tileModel, lineIndex), true, this.tileManager.getNextTileY());
            }
            return tile;
        }
        destroy() {
            this.tileManager = null;
            this.level = null;
        }
    }
    src.TileBuilder = TileBuilder;
})(src || (src = {}));
var src;
(function(src) {
    class TileCache {
        constructor() {
            this.shortTiles = [];
            this.longTiles = [];
        }
        static get instance() {
            return TileCache._instance ? TileCache._instance :
                TileCache._instance = new TileCache();
        }
        getShortTile() {
            return (src.Settings.ENABLE_TILES_CACHING && this.shortTiles.length > 0) ? this.shortTiles.splice(this.shortTiles.length - 1, 1)[0] : null;
        }
        getLongTile() {
            return (src.Settings.ENABLE_TILES_CACHING && this.longTiles.length > 0) ? this.longTiles.splice(this.longTiles.length - 1, 1)[0] : null;
        }
        recycle(tile) {
            if (src.Settings.ENABLE_TILES_CACHING) {
                if (tile instanceof src.ShortTile) {
                    if (tile instanceof src.StartTile) {
                        tile.destroy();
                    } else if (tile instanceof src.DefeatTile) {
                        tile.destroy();
                    } else {
                        tile.recycle();
                        this.shortTiles.push(tile);
                    }
                } else if (tile instanceof src.LongTile) {
                    tile.recycle();
                    this.longTiles.push(tile);
                } else {
                    tile.destroy();
                }
            } else {
                tile.destroy();
            }
        }
    }
    src.TileCache = TileCache;
})(src || (src = {}));
var src;
(function(src) {
    class EditorNote extends Phaser.Group {
        constructor(editor, note) {
            super(src.App.instance, null);
            this.isDragging = false;
            this.editor = editor;
            this.note = note;
            this.buildContent();
            this.addListeners();
        }
        buildContent() {
            this.tail = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'noteProgress0000'));
            this.tail.anchor.set(0.5, 1);
            this.tail.alpha = 0.5;
            this.tail.tint = Phaser.Color.getRandomColor(50, 250); //~~(Math.random() * 0xFFFFFF);
            this.background = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, this.note.duration > 0 ? 'noteModel0000' : 'emptyNoteModel0000'));
            this.background.anchor.set(0.5, 1);
            this.noteText = this.add(src.TextUtils.getText(this.note.name, 0, -19, 16, "#000000"));
            if (this.note.duration > 0) {
                this.noteDurationText = this.add(src.TextUtils.getText('' + Phaser.Math.roundTo(this.note.duration / src.SongStorage.instance.currentSong.baseStep, -2), 0, -8, 12, "#000000"));
            }
        }
        addListeners() {
            this.background.inputEnabled = true;
            this.background.events.onInputDown.add(this.handleInputDown, this);
            this.background.events.onInputUp.add(this.handleInputUp, this);
        }
        removeListeners() {
            this.background.events.onInputDown.removeAll();
            this.background.events.onInputUp.removeAll();
            this.background.inputEnabled = false;
        }
        handleInputDown() {
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.CONTROL)) {
                if (confirm(`Do you really want to change the base step value to ${Phaser.Math.roundTo(this.note.duration, -3)}? That will reset all the notes you've set on the field!`)) {
                    src.SongStorage.instance.currentSong.baseStep = this.note.duration;
                    src.SongStorage.instance.saveAsCurrentSong(src.SongStorage.instance.currentSong);
                    this.game.state.start("SongEditor", true, false);
                    return;
                }
            }
            this.isDragging = true;
            this.pointerInitialPosition = new Phaser.Point(this.editor.getInputPosition().x, this.editor.getInputPosition().y);
        }
        handleInputUp() {
            this.isDragging = false;
            //play note
            if (this.pointerInitialPosition && Phaser.Math.distance(this.editor.getInputPosition().x, this.editor.getInputPosition().y, this.pointerInitialPosition.x, this.pointerInitialPosition.y) <= 2) {
                this.playTest(this.note.time);
            }
        }
        /**
         * UPDATE
         */
        update() {
            super.update();
        }
        playTest(baseDelay) {
            src.NotePlayer.test(this.note, baseDelay, 1);
        }
        setTailHeight(value) {
            this.tail.height = value;
        }
        /**
         * DESTROY
         */
        destroy() {
            super.destroy();
            this.removeListeners();
            this.background = null;
            this.noteText = null;
            this.noteDurationText = null;
            this.note = null;
        }
    }
    src.EditorNote = EditorNote;
})(src || (src = {}));
var src;
(function(src) {
    class EditorScrollBar extends Phaser.Group {
        constructor(workingArea) {
            super(workingArea.game, null);
            this.scrollbarHeight = 880;
            this.isScrollerDragging = false;
            this.workingArea = workingArea;
            this.editor = workingArea.editor;
            this.buildContent();
        }
        buildContent() {
            this.bar = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'transitionSquare0000'));
            this.bar.anchor.set(0.5, 0);
            this.bar.alpha = 0.2;
            this.bar.width = 12;
            this.bar.height = EditorScrollBar.SCROLLBAR_HEIGHT;
            this.activeZone = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'transitionSquare0000'));
            this.activeZone.anchor.set(0.5, 0);
            this.activeZone.alpha = 1;
            this.activeZone.width = 12;
            this.activeZone.height = EditorScrollBar.SCROLLBAR_HEIGHT;
            this.screenArea = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'editorTile0000'));
            this.screenArea.anchor.set(0.5, 0);
            this.screenArea.tint = 0x000000;
            this.screenArea.alpha = 0.2;
            this.screenArea.width = 12;
            this.screenArea.height = EditorScrollBar.SCROLLBAR_HEIGHT;
            this.scroller = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'redCircle0000'));
            this.scroller.anchor.set(0.5);
            this.scroller.scale.set(0.8);
            this.scroller.tint = 0xFF0000;
            this.scroller.inputEnabled = true;
            this.scroller.events.onInputDown.add(this.handleInputDown, this);
            this.scroller.events.onInputUp.add(this.handleInputUp, this);
            this.resize();
        }
        update() {
            super.update();
            this.updateScreenArea();
            this.updateActiveZone();
            if (this.isScrollerDragging) {
                this.scroller.y = Phaser.Math.clamp(this.workingArea.editor.getInputPosition().y - this.editor.windowBounds.height - this.y, 0, this.bar.height);
                this.workingArea.scrollToPercentage(1 - this.scroller.y / this.bar.height);
            } else {
                this.scroller.y = (1 - Phaser.Math.clamp(this.workingArea.contentContainer.y / this.workingArea.contentContainer.height, 0, 1)) * this.scrollbarHeight;
            }
        }
        resize() {
            this.scrollbarHeight = this.editor.windowBounds.height - 80;
            this.bar.height = this.scrollbarHeight;
            this.position.set(this.editor.windowBounds.right - 12, -this.scrollbarHeight);
        }
        updateScrollerPosition(percentage) {
            if (!this.isScrollerDragging) {
                this.scroller.y = (1 - percentage) * this.bar.height;
            }
        }
        updateActiveZone() {
            this.activeZone.height = (this.workingArea.endingTime - this.workingArea.startingTime) * this.scrollbarHeight;
            this.activeZone.y = this.scrollbarHeight * (1 - this.workingArea.endingTime);
        }
        updateScreenArea() {
            let screenAreaPercentage = Phaser.Math.clamp(this.workingArea.getAvailableScreenHeight() / this.workingArea.contentContainer.height, 0, 1);
            this.screenArea.height = screenAreaPercentage * this.scrollbarHeight;
            this.screenArea.y = (1 - Phaser.Math.clamp(this.workingArea.contentContainer.y / this.workingArea.contentContainer.height, 0, 1)) * this.scrollbarHeight - this.screenArea.height;
        }
        getCurrentPercentage() {
            return 1 - this.scroller.y / this.bar.height;
        }
        handleInputDown() {
            this.isScrollerDragging = true;
        }
        handleInputUp() {
            this.isScrollerDragging = false;
        }
        /**
         * DESTROY
         */
        destroy() {
            super.destroy();
            this.editor = null;
            this.workingArea = null;
            this.bar = null;
            this.activeZone = null;
            this.scroller = null;
        }
    }
    EditorScrollBar.SCROLLBAR_HEIGHT = 880;
    src.EditorScrollBar = EditorScrollBar;
})(src || (src = {}));
var src;
(function(src) {
    class EditorTile extends Phaser.Group {
        constructor(tilesPanel, notes, relativeLength, tilePosition) {
            super(tilesPanel.game, null);
            this.isDragging = false;
            this.notes = notes.slice();
            this.tilesPanel = tilesPanel;
            this.workingArea = this.tilesPanel.workingArea;
            this.editor = this.workingArea.editor;
            this.startingTime = this.notes.reduce((prev, note) => Math.min(note.note.time, prev), Number.MAX_VALUE);
            this.tileDuration = relativeLength;
            this.setTilePosition(tilePosition);
            this.y = -this.startingTime * this.workingArea.getWorkingAreaHeight();
            this.tileHeight = relativeLength / this.editor.currentSong.baseStep;
            this.buildContent();
            this.addListeners();
        }
        buildContent() {
            this.tileBackground = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'tile0000'));
            this.tileBackground.anchor.set(0.5, 1);
            this.tileBackground.width = src.Settings.EDITOR_TILE_WIDTH;
            this.tileBackground.height = this.tileHeight * src.Settings.EDITOR_TILE_HEIGHT;
            this.notesContainer = this.add(this.game.make.group(null));
        }
        addListeners() {
            this.tileBackground.inputEnabled = true;
            this.tileBackground.events.onInputDown.add(this.handleInputDown, this);
            this.tileBackground.events.onInputUp.add(this.handleInputUp, this);
        }
        removeListeners() {
            this.tileBackground.events.onInputDown.removeAll();
            this.tileBackground.events.onInputUp.removeAll();
            this.tileBackground.inputEnabled = false;
        }
        isPointerOver(point) {
            return this.x - this.tileBackground.width / 2 + this.workingArea.contentContainer.x < point.x &&
                this.x + this.tileBackground.width / 2 + this.workingArea.contentContainer.x > point.x &&
                this.y - this.tileBackground.height + this.workingArea.contentContainer.y + this.editor.windowBounds.height < point.y &&
                this.y + this.workingArea.contentContainer.y + this.editor.windowBounds.height > point.y;
        }
        playTest() {
            const startTime = this.notes.reduce((prev, editorNote) => Math.min(prev, editorNote.note.time), Number.MAX_VALUE);
            const playbackSpeed = this.editor.currentSong.bpm / 60 * src.Settings.EDITOR_TILE_HEIGHT;
            const speedUpMultiplier = 60 / this.editor.currentSong.bpm / this.editor.currentSong.baseStep;
            this.notes.forEach(midiNote => src.NotePlayer.playRawNote(midiNote.note.midi, midiNote.note.duration * speedUpMultiplier, midiNote.note.velocity, (midiNote.note.time - startTime) * speedUpMultiplier));
        }
        setTilePosition(tilePosition) {
            this.tilePosition = tilePosition;
            this.x = (this.tilePosition + 0.5) * src.Settings.EDITOR_TILE_WIDTH;
        }
        cutLastSubTile() {}
        /**
         * INPUT HANDLERS
         */
        handleInputDown() {
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.SHIFT)) {
                this.isDragging = true;
            } else {
                this.playTest();
            }
        }
        handleInputUp() {
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.SHIFT) && this.isDragging) {
                let targetPosition = Math.floor((this.editor.translateInputX(this.game.input.activePointer) + src.Settings.EDITOR_TILE_WIDTH / 2) / src.Settings.EDITOR_TILE_WIDTH);
                this.setTilePosition(Phaser.Math.clamp(targetPosition, 0, 3));
            }
            this.isDragging = false;
        }
        /**
         * DESTROY
         */
        destroy() {
            super.destroy();
            super.destroy(true);
            this.removeListeners();
            this.notes = null;
            this.tileBackground.destroy();
            this.tileBackground = null;
            this.notesContainer = null;
            this.editor = null;
            this.workingArea = null;
        }
    }
    src.EditorTile = EditorTile;
})(src || (src = {}));
var src;
(function(src) {
    class SongStorage {
        constructor() {
            this.data = null;
            this.songs = null;
            this.encodedSongs = null;
            this.currentSong = null;
            this.songs = [];
            this.encodedSongs = [];
            this.data = {
                "songs": []
            };
            this.printDebugInfo();
        }
        static get instance() {
            return SongStorage._instance ? SongStorage._instance :
                SongStorage._instance = new SongStorage();
        }
        printDebugInfo() {
            if (src.Settings.DEBUG_MODE) {
                window.famobi.log(`Hotkeys:
        EDITOR MODE:
                 > Up/Down - scroll the game area (hold shift to scroll faster)
                 > Home/END - scroll to the beginning / ending of the song
                 > R - place notes randomly
                 > Delete - remove note / coin tile / empty tiles line
                 > I - insert new tiles above cursor
                 > E - add new empty note
                 > J - set melody start tile
                 > K - set melody end tile
                 > M - Set multiplier
                 > G - Export current song as JSON file
                 > L - Export all songs as JSON file
                 > 1-9 - find and highlight sequence of tiles
                 > Shift + Drag - to drag the whole tile
                 > Click on melody_name / bpm / step to change its value
                 > Shift + X - completely remove unused notes from song
        TESTING MODE:
                 > A - enable/disable autoplay mode
                 > Space - return to editor mode and open song on last played tile
                 > Escape - just return to editor mode, open the last edited tile
                 `);
            }
        }
        addSong(song) {
            this.songs.push(song);
            this.setCurrentSong(song);
            SongStorage.instance.save();
            return song;
        }
        getSongByName(name) {
            return this.songs.find(song => song.name == name);
        }
        removeSong(song) {
            let songIndex = this.songs.indexOf(song);
            if (songIndex == -1) {
                throw new Error("Song not found in storage!");
            } else {
                this.songs.splice(songIndex, 1);
                this.encodedSongs.splice(songIndex, 1);
                this.save();
            }
        }
        setCurrentSong(song) {
            if (this.songs.indexOf(song) == -1) {
                alert("Something went wrong, selected song doesn't belong to song list");
                this.currentSong = null;
            } else {
                this.currentSong = song;
                this.encodedSongs[this.songs.indexOf(song)] = null;
            }
        }
        saveAsCurrentSong(song) {
            let currentMelodyIndex = this.songs.indexOf(this.currentSong);
            if (currentMelodyIndex > -1) {
                this.currentSong = song;
                this.songs[currentMelodyIndex] = this.currentSong;
            } else {
                alert("Something went wrong when saving this song...");
            }
        }
        save() {
            this.songs.forEach((song, index) => {
                if (!this.encodedSongs[index] || (this.currentSong == song)) {
                    this.encodedSongs[index] = window["LZString"].compressToBase64(JSON.stringify(song));
                }
            });
            this.data["songs"] = this.encodedSongs;
            this.saveData(this.data);
        }
        load() {
            this.data = this.loadData();
            this.finalizeLoading();
        }
        finalizeLoading() {
            this.encodedSongs = (this.data["songs"] || []);
            this.songs = this.encodedSongs.map(encodedSong => JSON.parse(window["LZString"].decompressFromBase64(encodedSong)));
        }
        saveStorageContentsToFile() {
            let content = localStorage[SongStorage.STORAGE_NAME];
            let blob = new Blob([content]);
            window["FileSaver"](blob, "songs.txt");
        }
        saveCurrentSongToFile() {
            let content = SongStorage.instance.currentSong;
            let blob = new Blob([JSON.stringify(content)]);
            window["FileSaver"](blob, SongStorage.instance.currentSong.name + ".json");
        }
        saveAllSongsToFile() {
            let content = localStorage[SongStorage.STORAGE_NAME];
            let blob = new Blob([content]);
            window["FileSaver"](blob, "melodies.json");
        }
        /**
         * PLATFORM-DEPENDENT SAVING AND LOADING
         */
        saveData(data) {
            if (src.App.instance.device.desktop) {
                localStorage[SongStorage.STORAGE_NAME] = JSON.stringify(data);
            } else {
                alert("Saving is not supported on mobiles!");
            }
        }
        loadData() {
            if (src.Settings.DEBUG_MODE && src.Settings.LOAD_SONGS_FROM_LOCALSTORAGE && src.App.instance.device.desktop) {
                if (localStorage[SongStorage.STORAGE_NAME]) {
                    return JSON.parse(localStorage[SongStorage.STORAGE_NAME]);
                } else {
                    this.songs.forEach((song, index) => {
                        this.encodedSongs[index] = window["LZString"].compressToBase64(JSON.stringify(song));
                    });
                    this.data["songs"] = this.encodedSongs;
                    this.saveData(this.data);
                    return this.data;
                }
            } else {
                return JSON.parse(src.App.instance.cache.getText('melodies'));
            }
        }
        getRandomUnlockedSong(exceptSong = null) {
            let unlockedSongs = src.AlbumsManager.instance.getUnlockedSongs().filter(song => song != exceptSong);
            let nonCompletedSongs = unlockedSongs.filter(song => src.ScoreManager.instance.getSongStarsCount(song) == 0);
            return nonCompletedSongs.length > 0 ? Phaser.ArrayUtils.getRandomItem(nonCompletedSongs) : Phaser.ArrayUtils.getRandomItem(unlockedSongs);
        }
        getFirstUnlockedSong() {
            return src.AlbumsManager.instance.getUnlockedSongs()[0];
        }
    }
    SongStorage.STORAGE_NAME = "Piano_V2_Songs";
    src.SongStorage = SongStorage;
})(src || (src = {}));
var src;
(function(src) {
    class EditorInputManager extends Phaser.Group {
        constructor(editor) {
            super(editor.game);
            this.isCtrlPressed = false;
            this.isShiftPressed = false;
            this.editor = editor;
            this.createHandlers();
        }
        /**
         * HANDLERS
         */
        createHandlers() {
            let ctrlKey = src.App.instance.input.keyboard.addKey(Phaser.Keyboard.CONTROL);
            ctrlKey.onDown.add(() => this.isCtrlPressed = true);
            ctrlKey.onUp.add(() => this.isCtrlPressed = false);
            let shiftKey = src.App.instance.input.keyboard.addKey(Phaser.Keyboard.SHIFT);
            shiftKey.onDown.add(() => this.isShiftPressed = true);
            shiftKey.onUp.add(() => this.isShiftPressed = false);
            /* mouse wheel */
            src.App.instance.input.mouse.mouseWheelCallback = (event) => this.handleMouseWheel(event);
            src.App.instance.input.keyboard.addKey(Phaser.Keyboard.ESC).onDown.add(this.onEscapePressed, this);
            src.App.instance.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(this.onSpacePressed, this);
            src.App.instance.input.keyboard.addKey(Phaser.Keyboard.R).onDown.add(this.onRebuildTilesPressed, this);
            src.App.instance.input.keyboard.addKey(Phaser.Keyboard.S).onDown.add(this.onSavePressed, this);
            src.App.instance.input.keyboard.addKey(Phaser.Keyboard.J).onDown.add(this.onSetMelodyStartPressed, this);
            src.App.instance.input.keyboard.addKey(Phaser.Keyboard.K).onDown.add(this.onSetMelodyEndPressed, this);
            src.App.instance.input.keyboard.addKey(Phaser.Keyboard.P).onDown.add(this.onSaveLocalstoragePressed, this);
            src.App.instance.input.keyboard.addKey(Phaser.Keyboard.G).onDown.add(this.onGetCurrentSongPressed, this);
            src.App.instance.input.keyboard.addKey(Phaser.Keyboard.L).onDown.add(this.onDownloadMelodiesJSONPressed, this);
            src.App.instance.input.keyboard.addKey(Phaser.Keyboard.F).onDown.add(this.onSearchCustomTileSequencesPressed, this);
            src.App.instance.input.keyboard.addKey(Phaser.Keyboard.X).onDown.add(this.onCutMelodyPressed, this);
            src.App.instance.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(this.onSearchTileSequencesPressed, this);
            src.App.instance.input.keyboard.addKey(Phaser.Keyboard.TWO).onDown.add(this.onSearchTileSequencesPressed, this);
            src.App.instance.input.keyboard.addKey(Phaser.Keyboard.THREE).onDown.add(this.onSearchTileSequencesPressed, this);
            src.App.instance.input.keyboard.addKey(Phaser.Keyboard.FOUR).onDown.add(this.onSearchTileSequencesPressed, this);
            src.App.instance.input.keyboard.addKey(Phaser.Keyboard.FIVE).onDown.add(this.onSearchTileSequencesPressed, this);
            src.App.instance.input.keyboard.addKey(Phaser.Keyboard.SIX).onDown.add(this.onSearchTileSequencesPressed, this);
            src.App.instance.input.keyboard.addKey(Phaser.Keyboard.SEVEN).onDown.add(this.onSearchTileSequencesPressed, this);
            src.App.instance.input.keyboard.addKey(Phaser.Keyboard.EIGHT).onDown.add(this.onSearchTileSequencesPressed, this);
            src.App.instance.input.keyboard.addKey(Phaser.Keyboard.NINE).onDown.add(this.onSearchTileSequencesPressed, this);
            src.App.instance.input.keyboard.addKey(Phaser.Keyboard.HOME).onDown.add(this.onScrollToBeginningPressed, this);
            src.App.instance.input.keyboard.addKey(Phaser.Keyboard.END).onDown.add(this.onScrollToEndingPressed, this);
            src.App.instance.input.keyboard.addKey(Phaser.Keyboard.DELETE).onDown.add(this.onRemoveSubtilePressed, this);
        }
        destroyHandlers() {
            src.App.instance.input.mouse.mouseWheelCallback = null;
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.CONTROL);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.SHIFT);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.ESC);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.SPACEBAR);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.R);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.S);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.E);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.X);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.J);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.K);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.P);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.L);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.G);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.F);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.ONE);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.TWO);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.THREE);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.FOUR);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.FIVE);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.SIX);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.SEVEN);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.EIGHT);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.NINE);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.DELETE);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.HOME);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.END);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.EQUALS);
        }
        /**
         * PRIVATE METHODS
         */
        onEscapePressed() {
            if (confirm("Save song before exit?")) {
                this.onSavePressed();
            }
            this.game.state.start("SongsMenu", true, false);
        }
        onSpacePressed() {
            src.Settings.STARTED_FROM_EDITOR = true;
            this.editor.workingArea.saveSong(src.SongStorage.instance.currentSong);
            this.game.state.start("Level", true, false);
        }
        onRebuildTilesPressed() {
            this.editor.workingArea.tilesPanel.rebuildTiles();
        }
        onSavePressed() {
            this.editor.workingArea.saveSong(src.SongStorage.instance.currentSong);
            src.SongStorage.instance.save();
            window.famobi.log(`Song "${src.SongStorage.instance.currentSong.name}" was saved!`);
        }
        onScrollToBeginningPressed() {
            this.editor.workingArea.scrollToPercentage(0);
        }
        onScrollToEndingPressed() {
            this.editor.workingArea.scrollToPercentage(0.99999);
        }
        onCutMelodyPressed() {
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.SHIFT)) {
                window.famobi.log(`*** Cutting melody from ${this.editor.workingArea.startingTime} to ${this.editor.workingArea.endingTime} ***`);
                this.editor.currentSong.notes = this.editor.currentSong.notes.filter(note => note.time >= this.editor.workingArea.startingTime && note.time < this.editor.workingArea.endingTime);
                src.SongBuilder.instance.rebuildSong(this.editor.currentSong);
                src.TransitionScreen.instance.changeState("SongEditor");
            }
        }
        handleMouseWheel(event) {
            event.preventDefault();
            this.editor.workingArea.scroll(this.game.input.keyboard.isDown(Phaser.Keyboard.SHIFT) ? src.App.instance.input.mouse.wheelDelta * 150 : src.App.instance.input.mouse.wheelDelta * 50);
        }
        onSetMelodyStartPressed() {
            let tile = this.editor.workingArea.getTileUnderPointer();
            if (tile) {
                this.editor.workingArea.startingTime = Phaser.Math.clamp(tile.startingTime, 0, 1);
                window.famobi.log(`starting time was set to ${this.editor.workingArea.startingTime * this.editor.currentSong.calculatedDuration}s (${Phaser.Math.roundTo(this.editor.workingArea.startingTime * 100, -1)}%)`);
            }
        }
        onSetMelodyEndPressed() {
            let tile = this.editor.workingArea.getTileUnderPointer();
            if (tile) {
                this.editor.workingArea.endingTime = Phaser.Math.clamp(tile.startingTime + tile.tileHeight * this.editor.currentSong.baseStep, 0, 1);
                window.famobi.log(`ending time was set to ${this.editor.workingArea.endingTime * this.editor.currentSong.calculatedDuration}s (${Phaser.Math.roundTo(this.editor.workingArea.endingTime * 100, -1)}%)`);
            }
        }
        onSaveLocalstoragePressed() {
            src.SongStorage.instance.saveStorageContentsToFile();
        }
        onGetCurrentSongPressed() {
            src.SongStorage.instance.saveCurrentSongToFile();
        }
        onDownloadMelodiesJSONPressed() {
            src.SongStorage.instance.saveAllSongsToFile();
        }
        onSearchTileSequencesPressed(e) {
            window.famobi.log("onSearchTileSequencesPressed not implemented yet");
            // let targetTile: EditorTile = this.editor.workingArea.getTileUnderPointer();
            // if (targetTile && targetTile.notes.length > 0) {
            //     this.editor.workingArea.searchSameTiles(targetTile, e.keyCode - 48);
            // }
        }
        onSearchCustomTileSequencesPressed() {
            window.famobi.log("onSearchCustomTileSequencesPressed not implemented yet");
            // let targetTile: EditorTile = this.editor.workingArea.getTileUnderPointer();
            // if (targetTile && targetTile.notes.length > 0) {
            //     let sequenceLength: number = +prompt("Enter sequence length", '20');
            //     if (sequenceLength && sequenceLength > 1) {
            //         this.game.canvas.focus();
            //         this.editor.workingArea.searchSameTiles(targetTile, ~~sequenceLength);
            //     }
            // }
        }
        onRemoveSubtilePressed() {
            alert("Cutting parts from tiles - Not implemented yet!");
            // let tile: EditorTile = this.editor.workingArea.getTileUnderPointer();
            // if (tile) {
            //     let counter: number = 0;
            //     let cutTime: number = tile.startingTime + tile.duration;
            //     this.editor.currentSong.notes.forEach(note => {
            //         if(note.time >= cutTime) {
            //             note.time -= this.editor.currentSong.baseStep;
            //             counter++;
            //         }
            //     });
            //     window.famobi.log("cut "+ counter + " notes");
            //     SongBuilder.instance.rebuildSong(this.editor.currentSong);
            //     TransitionScreen.instance.changeState("SongEditor");
            // }
        }
        /**
         * UPDATE
         */
        update() {
            super.update();
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                this.editor.workingArea.scroll(this.game.input.keyboard.isDown(Phaser.Keyboard.SHIFT) ? 60 : 20);
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                this.editor.workingArea.scroll(this.game.input.keyboard.isDown(Phaser.Keyboard.SHIFT) ? -60 : -20);
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.editor.workingArea.scroll(-this.editor.currentSong.bpm / 60 * 2 * src.Settings.EDITOR_TILE_HEIGHT * this.game.time.elapsedMS / 1000);
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                let lastTile = this.editor.workingArea.tilesPanel.tiles.find(tile => tile.y + this.editor.workingArea.contentContainer.y <= 0);
                let speed = this.editor.currentSong.bpm / 60 * src.Settings.EDITOR_TILE_HEIGHT;
                this.editor.workingArea.scroll(speed * this.game.time.elapsedMS / 1000);
                if (lastTile && lastTile.y + this.editor.workingArea.contentContainer.y > 0 && lastTile.startingTime >= this.editor.workingArea.startingTime && lastTile.startingTime < this.editor.workingArea.endingTime) {
                    lastTile.playTest();
                }
            }
        }
        /**
         * DESTROY METHOD
         */
        destroy() {
            super.destroy();
            this.destroyHandlers();
            this.editor = null;
        }
    }
    src.EditorInputManager = EditorInputManager;
})(src || (src = {}));
var src;
(function(src) {
    class BlastEffect extends Phaser.Group {
        constructor() {
            super(src.App.instance, null);
            this.buildContent();
        }
        buildContent() {
            this.blastSpriteA = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS));
            this.blastSpriteA.anchor.set(0.5);
            this.blastSpriteA.scale.set(2);
            this.blastSpriteA.visible = false;
            this.blastAnimA = this.blastSpriteA.animations.add('blast', Phaser.Animation.generateFrameNames('longTileHoldAnim', 0, 21, '', 4));
            this.blastSpriteB = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS));
            this.blastSpriteB.anchor.set(0.5);
            this.blastSpriteB.scale.set(2);
            this.blastSpriteB.visible = false;
            this.blastAnimB = this.blastSpriteB.animations.add('blast', Phaser.Animation.generateFrameNames('longTileHoldAnim', 0, 21, '', 4));
        }
        blast() {
            this.visible = true;
            this.alpha = 1;
            this.blastSpriteA.visible = true;
            this.blastAnimA.play(60, false, false);
            this.blastSpriteB.visible = true;
            this.blastAnimB.play(60, false, false);
            this.blastAnimB.frame = 5;
        }
        /**
         * DESTROY
         */
        destroy() {
            super.destroy();
            this.blastSpriteA = null;
            this.blastAnimA = null;
            this.blastSpriteB = null;
            this.blastAnimB = null;
        }
    }
    src.BlastEffect = BlastEffect;
})(src || (src = {}));
var src;
(function(src) {
    let TilePosition;
    (function(TilePosition) {
        TilePosition[TilePosition["FIRST"] = 0] = "FIRST";
        TilePosition[TilePosition["SECOND"] = 1] = "SECOND";
        TilePosition[TilePosition["THIRD"] = 2] = "THIRD";
        TilePosition[TilePosition["FOURTH"] = 3] = "FOURTH";
    })(TilePosition = src.TilePosition || (src.TilePosition = {}));
})(src || (src = {}));
var src;
(function(src) {
    class KeyboardPointer {
        constructor(id) {
            this.isDown = false;
            this.id = id;
        }
        handleDown(x, y) {
            this.isDown = true;
            this.x = x;
            this.y = y;
            if (src.App.instance.state.getCurrentState() instanceof src.Level) {
                const level = src.App.instance.state.getCurrentState();
                level.uiManager.setKeyStatus(this.id, true);
            }
            return this;
        }
        handleUp() {
            this.isDown = false;
            if (src.App.instance.state.getCurrentState() instanceof src.Level) {
                const level = src.App.instance.state.getCurrentState();
                level.uiManager.setKeyStatus(this.id, false);
            }
            return this;
        }
    }
    src.KeyboardPointer = KeyboardPointer;
})(src || (src = {}));
var src;
(function(src) {
    class GameStateManager extends Phaser.Group {
        constructor(level) {
            super(level.game);
            this._isPaused = false;
            this.isLost = false;
            this.resultsWindowCountdown = 60;
            this.isFinished = false;
            this.level = level;
            this.isPaused = false;
        }
        finishLevel() {
            if (!this.isFinished) {
                this.isFinished = true;
                this._isPaused = true;
                src.TransitionScreen.instance.blink(() => {
                    this.level.container.visible = false;
                    src.WindowManager.instance.showResults();
                });
            }
        }
        pauseLevel(smoothly) {
            this.isPaused = true;
            this.level.tileManager.stopPlayback(smoothly);
        }
        resumeLevel() {
            this.isPaused = false;
        }
        loseLevel() {
            this.isLost = true;
        }
        missClick() {
            src.SoundController.instance.playFailureSound();
            if (this.level.heartManager.hasHeart) {
                this.level.heartManager.useHeart(src.Settings.MISS_CLICK_RESULTS_WINDOW_DELAY * 60 / 2, () => {
                    this.level.tileManager.recoverGame();
                });
            } else {
                this.loseLevel();
                this.resultsWindowCountdown = src.Settings.MISS_CLICK_RESULTS_WINDOW_DELAY * 60 * (this.level.heartManager.hasHeart ? 0.5 : 1);
            }
        }
        skipTile(tile) {
            src.SoundController.instance.playFailureSound();
            if (this.level.heartManager.hasHeart) {
                this.level.melodyManager.countTile(tile);
                this.level.heartManager.useHeart(src.Settings.SKIPPED_TILE_RESULTS_WINDOW_DELAY * 60 / 2, () => {
                    this.level.tileManager.recoverGame();
                    if (this.level.melodyManager.playedTiles >= this.level.melodyManager.totalTilesAmount && this.level.melodyManager.isEndlessMode) {
                        this.level.endlessModePresenter.show();
                    }
                });
            } else {
                this.loseLevel();
                this.resultsWindowCountdown = src.Settings.SKIPPED_TILE_RESULTS_WINDOW_DELAY * 60;
            }
        }
        isGameActive() {
            return !(this.isPaused || this.isFinished || this.isLost);
        }
        /**
         * MAIN CYCLE
         */
        update() {
            super.update();
            this.updateGameState();
        }
        /**
         * CHECK FINISH
         */
        updateGameState() {
            if (this.isPaused || this.isFinished) {
                return;
            }
            if (this.isLost) {
                this.resultsWindowCountdown--;
                if (this.resultsWindowCountdown <= 0 && !this.isFinished) {
                    this.finishLevel();
                }
            }
        }
        /**
         * GETTERS & SETTERS
         */
        get isPaused() {
            return this._isPaused;
        }
        set isPaused(value) {
            if (value) {
                this._isPaused = true;
                this.game.time.events.pause();
                this.game.tweens.pauseAll();
            } else {
                this._isPaused = false;
                this.game.time.events.resume();
                this.game.tweens.resumeAll();
            }
        }
        /**
         * DESTROY METHOD
         */
        destroy() {
            super.destroy();
            this.level = null;
        }
    }
    src.GameStateManager = GameStateManager;
})(src || (src = {}));
var src;
(function(src) {
    class GameplayBackgroundManager extends Phaser.Group {
        constructor(state) {
            super(state.game, null);
            this.perfectLineDefaultAlpha = 0.3;
            this.state = state;
            this.buildContent();
            this.resize();
        }
        buildContent() {
            this.lines = [];
            this.linesContainer = this.add(this.game.make.group(null));
            for (let i = -2; i <= 2; i++) {
                let line = this.linesContainer.add(this.game.make.sprite(i * src.Settings.TILE_WIDTH, 0, src.Settings.GAME_ATLAS, 'splitterLine0000'));
                line.anchor.set(0.5, 0);
                this.lines.push(line);
            }
            this.perfectLine = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'perfectTapLine0000'));
            this.perfectLine.anchor.set(0.5, 0);
            this.perfectLine.alpha = 0;
        }
        /**
         * RESIZE
         */
        resize() {
            this.position.set(this.state.windowBounds.centerX, this.state.windowBounds.top);
            this.linesContainer.height = this.state.windowBounds.height;
            this.perfectLine.y = this.state.windowBounds.height - src.Settings.PERFECT_LINE_MARGIN_BOTTOM;
            this.perfectLine.alpha = this.perfectLineDefaultAlpha;
        }
        startAppearingTween() {
            this.perfectLine.alpha = 0;
            this.perfectLine.y = this.state.windowBounds.height - src.Settings.PERFECT_LINE_MARGIN_BOTTOM + 40;
            this.game.add.tween(this.perfectLine)
                .to({
                    alpha: this.perfectLineDefaultAlpha,
                    y: this.state.windowBounds.height - src.Settings.PERFECT_LINE_MARGIN_BOTTOM
                }, 350, Phaser.Easing.Linear.None, true)
                .onComplete.add(() => {
                    this.resize();
                });
        }
        blinkPerfectLine() {
            this.perfectLine.alpha = 1;
            this.game.add.tween(this.perfectLine)
                .to({
                    alpha: this.perfectLineDefaultAlpha
                }, 200, Phaser.Easing.Linear.None, true, 0);
        }
        /**
         * DESTROY
         */
        destroy() {
            super.destroy();
            this.state = null;
            this.linesContainer = null;
            this.lines = null;
            this.perfectLine = null;
        }
    }
    src.GameplayBackgroundManager = GameplayBackgroundManager;
})(src || (src = {}));
var src;
(function(src) {
    class HeartManager extends Phaser.Group {
        constructor(level) {
            super(level.game, null);
            this.heartYDisplacementA = 100;
            this.heartYDisplacementB = 125;
            this.heartHasBeenGenerated = false;
            this.hasHeart = false;
            this.heartEnabled = false;
            this.callback = null;
            this.isVisible = false;
            this.level = level;
            this.heartEnabled = Math.random() > 0.2;
            this.heartAppearingPercentage = this.game.rnd.realInRange(0.3, 0.9);
            if (this.heartEnabled) {
                window.famobi.log("Heart will be generated after " + Math.floor(this.heartAppearingPercentage * 100) + "%");
            } else {
                window.famobi.log("Heart will not be generated during this game");
            }
            this.buildContent();
            this.resize();
        }
        buildContent() {
            this.background = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'blackSquare0000'));
            this.background.anchor.set(0.5, 0.5);
            this.background.visible = false;
            this.contentContainer = this.add(this.game.make.group(null));
            this.heartBackground = this.contentContainer.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'heartBackground0000'));
            this.heartBackground.anchor.set(0.5);
            this.heartBackground.visible = false;
            this.heartIcon = this.contentContainer.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'heart0000'));
            this.heartIcon.anchor.set(0.5);
            this.heartIcon.scale.set(0.5);
            this.heartIcon.visible = false;
        }
        /**
         * PUBLIC
         */
        pickupHeartAt(x, y) {
            this.hasHeart = true;
            src.SoundController.instance.playHeartPickUpSound();
            this.game.tweens.removeFrom(this.heartIcon);
            this.game.tweens.removeFrom(this.heartIcon.scale);
            this.heartIcon.visible = true;
            this.heartIcon.scale.set(1, 1);
            this.heartIcon.position.set(x, y);
            this.game.add.tween(this.heartIcon)
                .to({
                    x: this.level.windowBounds.centerX,
                    y: this.getHeartYPosition()
                }, 500, Phaser.Easing.Linear.None, true);
            this.game.add.tween(this.heartIcon.scale)
                .to({
                    x: this.getHeartTargetScale(),
                    y: this.getHeartTargetScale()
                }, 500, Phaser.Easing.Linear.None, true);
        }
        useHeart(delay, afterUsingCallback) {
            if (this.hasHeart) {
                this.hasHeart = false;
                this.isVisible = true;
                this.callback = afterUsingCallback;
                this.level.tileManager.pausePlayback();
                this.resize();
                this.game.time.events.add(delay, () => {
                    this.background.visible = true;
                    this.background.alpha = 0;
                    this.game.add.tween(this.background)
                        .to({
                            alpha: 0.8
                        }, 600, Phaser.Easing.Linear.None, true, 300)
                        .onComplete.add(() => {
                            this.game.add.tween(this.heartIcon)
                                .to({
                                    x: this.level.windowBounds.centerX,
                                    y: this.level.windowBounds.centerY
                                }, 500, Phaser.Easing.Sinusoidal.Out, true);
                            this.game.add.tween(this.heartIcon.scale)
                                .to({
                                    x: 1.5,
                                    y: 1.5
                                }, 500, Phaser.Easing.Sinusoidal.Out, true)
                                .onComplete.add(() => {
                                    this.animateHeartDisappearing();
                                    this.game.time.events.add(1000, () => this.hide());
                                });
                        });
                });
            }
        }
        moveHeartIconUp() {
            this.game.add.tween(this.heartIcon)
                .to({
                    y: this.getHeartYPosition()
                }, 500, Phaser.Easing.Linear.None, true);
        }
        animateHeartDisappearing() {
            this.game.add.tween(this.heartIcon.scale)
                .to({
                    x: 1.65,
                    y: 1.65
                }, 450, Phaser.Easing.Linear.None, true)
                .onComplete.add(() => {
                    src.SoundController.instance.playHeartUsageSound();
                    this.heartBackground.visible = true;
                    this.heartBackground.alpha = 1;
                    this.heartBackground.scale.set(1.5, 1.5);
                    this.heartBackground.position.set(this.level.windowBounds.centerX, this.level.windowBounds.centerY);
                    this.game.add.tween(this.heartBackground.scale)
                        .to({
                            x: 1.8,
                            y: 1.8
                        }, 500, Phaser.Easing.Linear.None, true, 300);
                    this.game.add.tween(this.heartBackground)
                        .to({
                            alpha: 0
                        }, 500, Phaser.Easing.Linear.None, true, 500);
                    this.game.add.tween(this.heartIcon.scale)
                        .to({
                            x: 0,
                            y: 0
                        }, 400, Phaser.Easing.Back.In, true, 0);
                });
        }
        hide() {
            this.game.add.tween(this.background)
                .to({
                    alpha: 0
                }, 500, Phaser.Easing.Linear.None, true, 300)
                .onComplete.add(() => {
                    if (this.parent) {
                        this.parent.removeChild(this);
                    }
                    this.visible = false;
                    this.isVisible = false;
                    if (this.callback) {
                        this.callback();
                        this.callback = null;
                    }
                });
        }
        /**
         * RESIZE
         */
        resize() {
            this.y = this.level.windowBounds.top;
            this.background.position.set(this.level.windowBounds.centerX, this.level.windowBounds.height / 2);
            this.background.width = this.level.windowBounds.width + 100;
            this.background.height = this.level.windowBounds.height + 100;
            this.game.tweens.removeFrom(this.heartIcon);
            this.heartIcon.position.set(this.level.windowBounds.centerX, this.getHeartYPosition());
            this.heartIcon.scale.set(this.getHeartTargetScale());
        }
        getHeartYPosition() {
            return (this.level.uiManager.isProgressBarHidden ? this.heartYDisplacementA : this.heartYDisplacementB) + ((!this.game.device.desktop && this.game.scale.isLandscape) ? this.level.uiManager.scoresText.height : 0);
        }
        getHeartTargetScale() {
            return !this.game.device.desktop && this.game.scale.isLandscape ? Math.min(this.game.scale.width / this.game.scale.height * 0.5, 1.0) : 0.5;
        }
        /**
         * DESTROY
         */
        destroy() {
            super.destroy();
            this.level = null;
            this.heartIcon = null;
            this.heartBackground = null;
        }
    }
    src.HeartManager = HeartManager;
})(src || (src = {}));
var src;
(function(src) {
    class KeyboardInputManager extends Phaser.Group {
        constructor(level) {
            super(level.game);
            this.level = level;
            if (this.game.device.desktop) {
                this.createHandlers();
            }
        }
        /**
         * HANDLERS
         */
        createHandlers() {
            this.pointers = [
                new src.KeyboardPointer(src.TilePosition.FIRST),
                new src.KeyboardPointer(src.TilePosition.SECOND),
                new src.KeyboardPointer(src.TilePosition.THIRD),
                new src.KeyboardPointer(src.TilePosition.FOURTH)
            ];
            let keyOne = src.App.instance.input.keyboard.addKey(Phaser.Keyboard.ONE);
            keyOne.onDown.add(() => this.dispatchLineInputDown(src.TilePosition.FIRST));
            keyOne.onUp.add(() => this.dispatchLineInputUp(src.TilePosition.FIRST));
            let keyTwo = src.App.instance.input.keyboard.addKey(Phaser.Keyboard.TWO);
            keyTwo.onDown.add(() => this.dispatchLineInputDown(src.TilePosition.SECOND));
            keyTwo.onUp.add(() => this.dispatchLineInputUp(src.TilePosition.SECOND));
            let keyThree = src.App.instance.input.keyboard.addKey(Phaser.Keyboard.THREE);
            keyThree.onDown.add(() => this.dispatchLineInputDown(src.TilePosition.THIRD));
            keyThree.onUp.add(() => this.dispatchLineInputUp(src.TilePosition.THIRD));
            let keyFour = src.App.instance.input.keyboard.addKey(Phaser.Keyboard.FOUR);
            keyFour.onDown.add(() => this.dispatchLineInputDown(src.TilePosition.FOURTH));
            keyFour.onUp.add(() => this.dispatchLineInputUp(src.TilePosition.FOURTH));
            let keyF = src.App.instance.input.keyboard.addKey(Phaser.Keyboard.F);
            keyF.onDown.add(() => this.dispatchLineInputDown(src.TilePosition.FIRST));
            keyF.onUp.add(() => this.dispatchLineInputUp(src.TilePosition.FIRST));
            let keyG = src.App.instance.input.keyboard.addKey(Phaser.Keyboard.G);
            keyG.onDown.add(() => this.dispatchLineInputDown(src.TilePosition.SECOND));
            keyG.onUp.add(() => this.dispatchLineInputUp(src.TilePosition.SECOND));
            let keyH = src.App.instance.input.keyboard.addKey(Phaser.Keyboard.H);
            keyH.onDown.add(() => this.dispatchLineInputDown(src.TilePosition.THIRD));
            keyH.onUp.add(() => this.dispatchLineInputUp(src.TilePosition.THIRD));
            let keyJ = src.App.instance.input.keyboard.addKey(Phaser.Keyboard.J);
            keyJ.onDown.add(() => this.dispatchLineInputDown(src.TilePosition.FOURTH));
            keyJ.onUp.add(() => this.dispatchLineInputUp(src.TilePosition.FOURTH));
            if (src.Settings.DEBUG_MODE) {
                src.App.instance.input.keyboard.addKey(Phaser.Keyboard.ESC).onDown.add(this.onEscapePressed, this);
                src.App.instance.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(this.onSpacePressed, this);
                src.App.instance.input.keyboard.addKey(Phaser.Keyboard.A).onDown.add(this.onSwitchAutoplayPressed, this);
                src.App.instance.input.keyboard.addKey(Phaser.Keyboard.CLOSED_BRACKET).onDown.add(this.onNextOctavePressed, this);
                src.App.instance.input.keyboard.addKey(Phaser.Keyboard.OPEN_BRACKET).onDown.add(this.onPrevOctavePressed, this);
            }
        }
        destroyHandlers() {
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.ONE);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.TWO);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.THREE);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.FOUR);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.F);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.G);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.H);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.J);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.ESC);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.SPACEBAR);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.A);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.CLOSED_BRACKET);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.OPEN_BRACKET);
        }
        /**
         * PRIVATE METHODS
         */
        onEscapePressed() {
            if (src.Settings.STARTED_FROM_EDITOR) {
                this.game.state.start("SongEditor", true, false);
            } else {
                this.game.state.start("SongsMenu", true, false);
            }
        }
        onSpacePressed() {
            this.game.state.start("SongEditor", true, false);
        }
        onSwitchAutoplayPressed() {
            src.Settings.AUTOPLAY_ENABLED = !src.Settings.AUTOPLAY_ENABLED;
        }
        onNextOctavePressed() {
            this.level.melodyManager.userDeltaOctave++;
        }
        onPrevOctavePressed() {
            this.level.melodyManager.userDeltaOctave--;
        }
        dispatchLineInputDown(pointerPosition) {
            if (this.level.gameStateManager.isGameActive()) {
                let activeTile = this.level.tileManager.getActiveTile();
                let tileUnderPointer = activeTile && activeTile.tilePosition == pointerPosition ? activeTile : null;
                if (!src.Settings.GOD_MODE && !tileUnderPointer && this.level.tileManager.tileSpeedManager.isStarted && this.level.tileManager.playbackEnabled) {
                    if (activeTile) {
                        this.level.tileManager.tileBuilder.createDefeatTile(pointerPosition, activeTile.y, activeTile.tileHeight);
                    } else {
                        this.level.tileManager.tileBuilder.createDefeatTile(pointerPosition, -this.level.tileManager.tilesContainer.y - src.Settings.TILE_HEIGHT / 2, src.Settings.TILE_HEIGHT);
                    }
                    this.level.gameStateManager.missClick();
                } else {
                    if (tileUnderPointer) {
                        this.pointers[pointerPosition].handleDown(tileUnderPointer.getScreenX(), tileUnderPointer.getScreenY() - src.Settings.TILE_HEIGHT / 2 * 0.9);
                        tileUnderPointer.handleInputDown(this.pointers[pointerPosition]);
                    }
                }
            }
        }
        dispatchLineInputUp(pointerPosition) {
            if (this.level.gameStateManager.isGameActive()) {
                this.pointers[pointerPosition].handleUp();
                this.level.tileManager.tiles.forEach(tile => tile.handleInputUp(this.pointers[pointerPosition]));
            }
        }
        /**
         * UPDATE
         */
        /**
         * DESTROY METHOD
         */
        destroy() {
            super.destroy();
            this.destroyHandlers();
            this.pointers = null;
            this.level = null;
        }
    }
    src.KeyboardInputManager = KeyboardInputManager;
})(src || (src = {}));
var src;
(function(src) {
    class MelodyManager extends Phaser.Group {
        constructor(level) {
            super(level.game, null);
            this.currentTileIndex = 0;
            this.isMainPartCompleted = false;
            this.isEndlessMode = false;
            this.playedTiles = 0;
            this.totalTilesAmount = 0;
            this.userDeltaOctave = 0;
            this.level = level;
            this.song = src.SongStorage.instance.currentSong;
            this.bpm = this.song.bpm;
            this.bpmAcceleration = this.song.bpmAcceleration;
            this.multiplier = this.song.multiplier;
            this.deltaOctave = this.song.deltaOctave;
            this.baseStep = this.calculateBaseStep();
            this.tilesList = this.prepareTiles();
            this.totalTilesAmount = this.getTotalTilesNumber();
        }
        getNextTileModel() {
            while (this.currentTileIndex >= this.tilesList.length) {
                if (!src.Settings.DEBUG_MODE && !this.isMainPartCompleted) {
                    return null;
                }
                this.currentTileIndex = 0;
            }
            return this.tilesList[this.currentTileIndex++] || null;
        }
        getSongName() {
            return this.song.name;
        }
        getTotalTilesNumber() {
            return this.tilesList.length;
        }
        getOriginalDuration() {
            return 1 / this.song.baseStep * this.song.multiplier / this.song.bpm * 60;
        }
        getMaxPossibleScore() {
            return src.ScoreManager.instance.getSongMaxPossibleScores(this.song);
        }
        getSong() {
            return this.song;
        }
        countTile(tile) {
            this.playedTiles += 1;
            if (!src.Settings.DEBUG_MODE && tile && this.playedTiles >= this.totalTilesAmount && !this.isEndlessMode) {
                this.isEndlessMode = true;
                tile.pausePlaybackAfterDestroying = true;
            }
        }
        /**
         * PRIVATE
         */
        calculateBaseStep() {
            return this.song.baseStep / this.song.multiplier;
        }
        prepareTiles() {
            let tileModels = [];
            tileModels = this.song.tiles.map(model => new src.TileModel(model.tilePosition, model.startTime, model.duration));
            let preparedModels = tileModels.map(model => new src.PreparedTileModel(model.tilePosition, model.startTime, model.duration, this.findAndPrepareNotes(model.startTime, model.duration)));
            let resultingModels = [];
            /* apply the multiplier */
            const multiplier = Math.floor(this.multiplier) || 1;
            for (let i = 0; i < multiplier; i++) {
                resultingModels = resultingModels.concat(preparedModels.map(pm => new src.PreparedTileModel(pm.tilePosition, pm.startTime + i, pm.duration, pm.notes.map(note => new src.MidiNote().setProperties(note.time + i, note.duration, note.midi, note.name, note.velocity)))));
            }
            /* normalize tiles start time if multiplier is greater than 1 */
            resultingModels.forEach(model => {
                model.startTime /= multiplier;
                model.duration /= multiplier;
                model.notes.forEach(note => {
                    note.time /= multiplier;
                    note.duration /= multiplier;
                });
            });
            /* generate prepared tile models list */
            return resultingModels;
        }
        /**
         * PRIVATE
         */
        findAndPrepareNotes(startTime, duration) {
            return this.song.notes.filter(note => note.time >= startTime && note.time < startTime + duration).sort((a, b) => a.time - b.time).map(note => new src.MidiNote().cloneFrom(note));
        }
        /**
         * DESTROY
         */
        destroy() {
            super.destroy();
            this.level = null;
            this.song = null;
            this.tilesList = null;
        }
    }
    src.MelodyManager = MelodyManager;
})(src || (src = {}));
var src;
(function(src) {
    class TileManager extends Phaser.Group {
        constructor(level) {
            super(level.game, null);
            /* properties */
            this.playbackEnabled = false;
            this.level = level;
            this.tileBuilder = new src.TileBuilder(this);
            this.tileSpeedManager = new src.TileSpeedManager(this);
            this.buildContent();
            this.buildTiles();
            this.resize();
        }
        /**
         * PUBLIC
         */
        startPlaying(smoothly = true) {
            if (smoothly) {
                this.tileSpeedManager.startPlaybackSmoothly();
            } else {
                this.tileSpeedManager.resumePlaybackRapidly();
            }
        }
        startLevel() {
            this.playbackEnabled = true;
            this.alpha = 0;
            this.y -= 100;
            this.game.add.tween(this)
                .to({
                    alpha: 1
                }, 500, Phaser.Easing.Sinusoidal.Out, true);
            this.game.add.tween(this)
                .to({
                    y: this.y + 100
                }, 600, Phaser.Easing.Sinusoidal.Out, true);
            this.level.backgroundManager.startAppearingTween();
        }
        startEndlessMode() {
            this.playbackEnabled = true;
            this.level.melodyManager.isMainPartCompleted = true;
            this.tilesContainer.y = -(this.getScreenHeight() + src.Settings.TILE_HEIGHT);
        }
        pausePlayback() {
            this.playbackEnabled = false;
        }
        resumePlayback() {
            this.playbackEnabled = true;
        }
        addTile(tile, onTopOfTheList, yPosition) {
            this.tilesContainer.add(tile);
            if (onTopOfTheList) {
                this.tiles.unshift(tile);
            } else {
                this.tiles.push(tile);
            }
            tile.y = yPosition;
            return tile;
        }
        getActiveTile() {
            let lastLineIndex = this.tiles.reduce((prev, tile) => (tile.isPressed || tile instanceof src.HeartTile || tile instanceof src.DefeatTile) ? prev : Math.min(prev, tile.lineIndex), Number.MAX_VALUE);
            return this.tiles.find(tile => tile.lineIndex == lastLineIndex);
        }
        getStartingTilePosition() {
            return -src.Settings.START_TILE_DISPLACEMENT_Y;
        }
        getNextTileY() {
            return this.tiles.reduce((prev, tile) => Math.min(prev, tile.y - tile.tileHeight), this.getStartingTilePosition() + (this.level.melodyManager.isMainPartCompleted ? -src.Settings.TILE_HEIGHT : 0));
        }
        getTileUnderPointer(pointer) {
            for (let tile of this.tiles) {
                if (tile.hitsPoint(this.level.translateInputPosition(pointer), false)) {
                    return tile;
                }
            }
            return null;
        }
        getClosestTile(pointer) {
            let pointerY = this.level.translateInputY(pointer);
            for (let tile of this.tiles) {
                if (tile.getScreenY() >= pointerY && tile.getScreenY() - tile.tileHeight <= pointerY) {
                    return tile;
                }
            }
            return null;
        }
        stopPlayback(smoothly) {
            if (this.tileSpeedManager.isStarted) {
                this.tileSpeedManager.stopPlayback();
                this.removePlayedTiles();
                let firstTile = this.getActiveTile();
                if (!firstTile) {
                    this.resumePlayback();
                    this.startPlaying(false);
                } else {
                    const startingTile = this.tileBuilder.createStartingTile(firstTile.tilePosition, firstTile.y + src.Settings.TILE_HEIGHT);
                    const displacement = this.getStartingTilePosition() - (startingTile ? src.Settings.TILE_HEIGHT : 0) - firstTile.getScreenY() + this.getScreenHeight();
                    if (smoothly) {
                        this.game.add.tween(this.tilesContainer).to({
                                y: this.tilesContainer.y + displacement
                            }, 400, Phaser.Easing.Sinusoidal.Out, true)
                            .onComplete.add(() => this.tileBuilder.update());
                    } else {
                        this.tilesContainer.y += displacement;
                        this.tileBuilder.update();
                    }
                }
            }
        }
        rewindTile(tile) {
            if (!src.Settings.GOD_MODE && this.tileSpeedManager.isStarted) {
                this.tileSpeedManager.stopPlayback();
                this.level.gameStateManager.skipTile(tile);
                this.tileBuilder.createDefeatTile(tile.tilePosition, tile.y, tile.tileHeight);
                let displacement = -(tile.getScreenY() - this.getScreenHeight());
                this.game.add.tween(this.tilesContainer).to({
                    y: this.tilesContainer.y + displacement
                }, 600, Phaser.Easing.Sinusoidal.Out, true);
            }
        }
        recoverGame() {
            this.tileSpeedManager.stopPlayback();
            this.removePlayedTiles();
            let firstTile = this.getActiveTile();
            if (!firstTile) {
                this.resumePlayback();
                this.startPlaying(false);
            } else {
                const startingTile = this.tileBuilder.createStartingTile(firstTile.tilePosition, firstTile.y + src.Settings.TILE_HEIGHT);
                const displacement = this.getStartingTilePosition() - (startingTile ? src.Settings.TILE_HEIGHT : 0) - firstTile.getScreenY() + this.getScreenHeight();
                let tween = this.game.add.tween(this.tilesContainer).to({
                    y: this.tilesContainer.y + displacement
                }, 400, Phaser.Easing.Sinusoidal.Out, true);
                this.resumePlayback();
            }
        }
        /**
         * BUILDERS
         */
        buildContent() {
            this.tilesContainer = this.add(this.game.make.group(null));
        }
        buildTiles() {
            this.tiles = [];
        }
        /**
         * UPDATE
         */
        update() {
            super.update();
            if (this.playbackEnabled) {
                if (this.level.gameStateManager.isGameActive()) {
                    this.tileSpeedManager.update();
                    if (this.tileSpeedManager.isStarted) {
                        this.slideDown();
                    }
                }
                this.tileBuilder.update();
            }
        }
        slideDown() {
            this.tilesContainer.y += this.tileSpeedManager.getFrameDistance();
            for (let i = this.tiles.length - 1; i > -1; i--) {
                if (this.tiles[i].isMissed) {
                    this.rewindTile(this.tiles[i]);
                    src.TileCache.instance.recycle(this.tiles[i]);
                    this.tiles.splice(i, 1);
                    continue;
                } else if (this.tiles[i].outOfScreen) {
                    src.TileCache.instance.recycle(this.tiles[i]);
                    this.tiles.splice(i, 1);
                    continue;
                }
                this.tiles[i].slideDown();
            }
        }
        removePlayedTiles() {
            for (let i = this.tiles.length - 1; i > -1; i--) {
                if (this.tiles[i].outOfScreen || this.tiles[i].isPressed) {
                    if (!this.tiles[i].wasReleased) {
                        this.tiles[i].applyReward(this.tiles[i].numSubTiles * src.Settings.TILE_MAX_REWARD);
                    }
                    src.TileCache.instance.recycle(this.tiles[i]);
                    this.tiles.splice(i, 1);
                }
            }
        }
        /**
         * SCALE
         */
        resize() {
            this.y = this.level.windowBounds.down;
        }
        getScreenHeight() {
            return this.level.windowBounds.height;
        }
        /**
         * DESTROY
         */
        destroy() {
            super.destroy();
            this.tileBuilder.destroy();
            this.tileBuilder = null;
            this.tileSpeedManager.destroy();
            this.tileSpeedManager = null;
            this.level = null;
        }
    }
    src.TileManager = TileManager;
})(src || (src = {}));
var src;
(function(src) {
    class TouchInputManager extends Phaser.Group {
        constructor(level) {
            super(level.game);
            this.level = level;
            this.createHandlers();
        }
        /**
         * HANDLERS
         */
        createHandlers() {
            this.game.input.onDown.add(this.handleInputDown, this);
            this.game.input.onUp.add(this.handleInputUp, this);
        }
        destroyHandlers() {
            this.game.input.onDown.remove(this.handleInputDown, this);
            this.game.input.onUp.remove(this.handleInputUp, this);
        }
        /**
         * CALLBACK
         */
        handleInputDown(pointer) {
            if (pointer.targetObject && pointer.targetObject.sprite instanceof Phaser.Button) {
                return;
            }
            if (this.level.gameStateManager.isGameActive()) {
                let pointerPosition = this.getPointerPosition(pointer);
                if (pointerPosition >= 0 && pointerPosition < 4) {
                    let activeTile = this.level.tileManager.getActiveTile();
                    let tileUnderPointer = this.level.tileManager.getTileUnderPointer(pointer);
                    if (!src.Settings.GOD_MODE && !tileUnderPointer && this.level.tileManager.tileSpeedManager.isStarted && this.level.tileManager.playbackEnabled) {
                        if (activeTile && activeTile.getScreenY() > this.level.windowBounds.top) {
                            let closestTile = this.level.tileManager.getClosestTile(pointer);
                            if (closestTile) {
                                this.level.tileManager.tileBuilder.createDefeatTile(pointerPosition, closestTile.y, closestTile.tileHeight);
                            } else {
                                this.level.tileManager.tileBuilder.createDefeatTile(pointerPosition, this.level.translateInputY(pointer) - this.level.tileManager.getScreenHeight() - this.level.tileManager.tilesContainer.y + src.Settings.TILE_HEIGHT / 2, src.Settings.TILE_HEIGHT);
                            }
                            this.level.gameStateManager.missClick();
                        }
                    } else if (tileUnderPointer instanceof src.HeartTile) {
                        tileUnderPointer.handleInputDown(pointer);
                    } else {
                        if (activeTile && activeTile.hitsPoint(this.level.translateInputPosition(pointer), false)) {
                            activeTile.handleInputDown(pointer);
                        }
                    }
                }
            }
        }
        handleInputUp(pointer) {
            if (this.level.gameStateManager.isGameActive()) {
                this.level.tileManager.tiles.forEach(tile => tile.handleInputUp(pointer));
            }
        }
        /**
         * PRIVATE
         */
        getPointerPosition(pointer) {
            return Math.floor(this.level.translateInputX(pointer) / src.Settings.TILE_WIDTH);
        }
        /**
         * DESTROY
         */
        destroy() {
            this.destroyHandlers();
            super.destroy();
            this.level = null;
        }
    }
    src.TouchInputManager = TouchInputManager;
})(src || (src = {}));
var src;
(function(src) {
    class UIManager extends Phaser.Group {
        constructor(level) {
            super(level.game, null);
            this.keyHelpers = [];
            this.isProgressBarHidden = false;
            this.level = level;
            this.buildContent();
            this.resize();
        }
        buildContent() {
            this.levelProgressBar = this.add(new src.LevelProgressBar(this));
            this.levelProgressBar.position.set(this.level.originalBounds.centerX, this.level.originalBounds.top);
            if (src.Settings.DEBUG_MODE || src.Settings.FORCE_DISPLAY_DEBUG_INFO) {
                this.percentageText = this.add(src.TextUtils.getBitmapText('-', 320, 100, 25, 0xFF3344, 0));
                this.playedTilesInfoText = this.add(src.TextUtils.getBitmapText('-', 320, 100, 25, 0xFF3344, 0));
                this.bpmText = this.add(src.TextUtils.getBitmapText('-', 320, 100, 25, 0xFFFFFF, 0));
            }
            this.buttonsContainer = this.add(this.game.make.group(null));
            if (this.game.device.desktop) {
                this.keyHelpers = [
                    this.add(src.TextUtils.getBitmapText("F", src.Settings.TILE_WIDTH * 0.5, this.level.windowBounds.down - 40, 52)),
                    this.add(src.TextUtils.getBitmapText("G", src.Settings.TILE_WIDTH * 1.5, this.level.windowBounds.down - 40, 52)),
                    this.add(src.TextUtils.getBitmapText("H", src.Settings.TILE_WIDTH * 2.5, this.level.windowBounds.down - 40, 52)),
                    this.add(src.TextUtils.getBitmapText("J", src.Settings.TILE_WIDTH * 3.5, this.level.windowBounds.down - 40, 52))
                ];
            }
            this.scoresText = this.buttonsContainer.add(src.TextUtils.getShadowText('', this.level.originalBounds.centerX, 65, 60, "#FFFFFF", "#000000", 1.5, 1.5));
            this.scoresText.anchor.set(0.5);
            this.buttonSettings = this.buttonsContainer.add(src.ButtonUtils.createTwoFramesButton(src.Settings.GAME_ATLAS, 'buttonSettings', 570, 75, 1, this.settingsClicked, this));
        }
        /**
         * PUBLIC
         */
        playScoreEnlargeEffect() {
            this.scoresText.scale.set(1.35);
            this.game.add.tween(this.scoresText.scale)
                .to({
                    x: 1,
                    y: 1
                }, 250, Phaser.Easing.Quadratic.Out, true);
        }
        changeColor(color) {
            this.levelProgressBar.changeColor(color);
        }
        hideProgressBar() {
            if (!this.isProgressBarHidden) {
                this.isProgressBarHidden = true;
                this.game.add.tween(this)
                    .to({
                        y: this.level.windowBounds.top - 35
                    }, 500, Phaser.Easing.Linear.None, true);
                this.game.add.tween(this.levelProgressBar)
                    .to({
                        alpha: 0
                    }, 500, Phaser.Easing.Linear.None, true);
                this.game.add.tween(this.buttonsContainer)
                    .to({
                        y: 37
                    }, 500, Phaser.Easing.Linear.None, true);
                this.keyHelpers.forEach(keyHelper => this.game.add.tween(keyHelper)
                    .to({
                        y: this.level.windowBounds.height - 5
                    }, 500, Phaser.Easing.Linear.None, true));
            }
        }
        setKeyStatus(id, status) {
            if (this.keyHelpers[id]) {
                this.keyHelpers[id].tint = status ? src.BackgroundManager.songTitleColors[src.BackgroundManager.instance.currentBackground] : 0xFFFFFF;
            }
        }
        /**
         * HANDLERS
         */
        settingsClicked() {
            src.WindowManager.instance.showSettings(true);
        }
        /**
         * UPDATE
         */
        update() {
            super.update();
            this.scoresText.text = '' + src.ScoreManager.instance.getCurrentScores();
            if (src.Settings.DEBUG_MODE || src.Settings.FORCE_DISPLAY_DEBUG_INFO) {
                this.bpmText.text = '' + ~~this.level.tileManager.tileSpeedManager.getBPM() + ' (x' + Phaser.Math.roundTo(this.level.tileManager.tileSpeedManager.getSpeedUpFactor(), -1) + ')';
                this.percentageText.text = '' + ~~(this.level.melodyManager.playedTiles / this.level.melodyManager.getTotalTilesNumber() * 100) + " %";
                this.playedTilesInfoText.text = '' + this.level.melodyManager.playedTiles + '/' + this.level.melodyManager.totalTilesAmount;
            }
        }
        /**
         * RESIZE
         */
        resize() {
            this.game.tweens.removeFrom(this, false);
            this.y = this.isProgressBarHidden ? this.level.windowBounds.top - 35 : this.level.windowBounds.top;
            if (src.Settings.DEBUG_MODE || src.Settings.FORCE_DISPLAY_DEBUG_INFO) {
                this.bpmText.position.set(this.level.windowBounds.left + 5, 40);
                this.percentageText.position.set(this.level.windowBounds.left + 5, 62);
                this.playedTilesInfoText.position.set(this.level.windowBounds.left + 5, 84);
            }
            if (this.game.device.desktop) {
                this.keyHelpers.forEach(keyHelper => keyHelper.y = this.isProgressBarHidden ? this.level.windowBounds.height - 5 : this.level.windowBounds.height - 40);
            }
            this.levelProgressBar.resize(this.level.windowBounds);
            this.buttonsContainer.position.set(0, this.isProgressBarHidden ? 37 : 27);
            this.buttonsContainer.scale.set(!this.game.device.desktop && this.game.scale.isLandscape ? Math.min(this.game.scale.width / this.game.scale.height, 2) : 1);
            this.buttonSettings.position.set(this.level.windowBounds.right / this.buttonsContainer.scale.x - 38, 40);
            this.scoresText.position.set(this.level.windowBounds.centerX / this.buttonsContainer.scale.x, 40);
        }
        /**
         * DESTROY
         */
        destroy() {
            super.destroy();
            this.level = null;
            this.scoresText = null;
            this.buttonSettings = null;
        }
    }
    src.UIManager = UIManager;
})(src || (src = {}));
var src;
(function(src) {
    class MidiLoader {
        static load(onProgress, onSuccess) {
            MIDI.loadPlugin({
                instruments: ['acoustic_grand_piano'],
                soundfontUrl: "./soundfonts/",
                onprogress: function(state, progress) {
                    onProgress(progress);
                },
                onsuccess: function() {
                    onSuccess();
                }
            });
        }
    }
    src.MidiLoader = MidiLoader;
})(src || (src = {}));
var src;
(function(src) {
    class MidiNote {
        cloneFrom(source, round = false) {
            this.name = source.name;
            this.midi = source.midi;
            this.time = round ? Phaser.Math.roundTo(source.time, -3, 10) : source.time;
            this.duration = round ? Phaser.Math.roundTo(source.duration, -3, 10) : source.duration;
            this.velocity = source.velocity;
            return this;
        }
        normalizeVolume() {
            this.velocity = Math.sqrt(Phaser.Math.clamp(this.velocity, 0, 1));
            return this;
        }
        normalizeTimeAndDuration(wholeSongDuration) {
            this.time = this.time / wholeSongDuration;
            this.duration = this.duration / wholeSongDuration;
        }
        setProperties(time, duration, midi, name = "", velocity = 1) {
            this.name = name;
            this.midi = midi;
            this.time = time;
            this.duration = duration;
            this.velocity = velocity;
            return this;
        }
    }
    src.MidiNote = MidiNote;
})(src || (src = {}));
var src;
(function(src) {
    class MidiUploader {
        static init() {}
        static triggerFileSelect() {
            console.warn("MidiUploader disabled in current build of the game");
            //document.querySelector("#hidden #song")["click"]();
        }
    }
    src.MidiUploader = MidiUploader;
})(src || (src = {}));
var src;
(function(src) {
    class NotePlayer {
        static play(note, deltaOctave, durationMultiplier, delay = 0) {
            if (!src.App.instance.sound.mute && note.duration > 0) {
                MIDI.setVolume(0, 127);
                MIDI.noteOn(0, note.midi + deltaOctave * 12, note.velocity * 127, delay);
                MIDI.noteOff(0, note.midi + deltaOctave * 12, delay + note.duration * durationMultiplier);
            }
        }
        static playRawNote(midiCode, duration, velocity, delay) {
            if (!src.App.instance.sound.mute) {
                MIDI.setVolume(0, 127);
                MIDI.noteOn(0, midiCode, velocity * 127, delay);
                MIDI.noteOff(0, midiCode, delay + duration);
            }
        }
        static test(note, baseDelay, bpmMultiplier) {
            MIDI.setVolume(0, 127);
            MIDI.noteOn(0, note.midi, note.velocity * 127, (note.time - baseDelay) / bpmMultiplier);
            MIDI.noteOff(0, note.midi, (note.duration + note.time - baseDelay) / bpmMultiplier);
        }
    }
    src.NotePlayer = NotePlayer;
})(src || (src = {}));
var src;
(function(src) {
    class EditorSongPanel extends Phaser.Group {
        constructor(songList, song) {
            super(songList.game, null);
            this.fillColor = Phaser.Color.getRandomColor(100, 255);
            this.buttonWidth = 500;
            this.songList = songList;
            this.song = song;
            this.buildContent();
            this.resize();
        }
        buildContent() {
            this.rectangle = this.add(this.game.make.graphics(0, 0));
            this.nameText = this.add(src.TextUtils.getText(this.song.name, 0, 0, 20, '#000000'));
            this.bpmText = this.add(src.TextUtils.getText('' + this.song.bpm, 0, 25, 14, '#000000'));
            // if(this.song.bpm) {
            //     let finalBPM: number = SongMath.calculateFinalBPM(this.song);
            //     let averageBPM: number = (this.song.bpm + finalBPM) / 2;
            //     this.bpmText.setText(`${this.song.bpm}/${~~averageBPM}/${~~finalBPM} bpm, ${TextUtils.convertMSToHumanTime(SongMath.calculateActualDuration(this.song))} / ${TextUtils.convertMSToHumanTime(this.getNoteEmptyLinesCount() * 1000 / (this.song.bpm / 60) * (this.song.multiplier || 1))} (${TextUtils.convertMSToHumanTime(this.song.chords.length * 1000 / (this.song.bpm / 60) )})`);
            // }
            this.buttonDelete = this.add(src.ButtonUtils.createSimpleButton(src.Settings.GAME_ATLAS, 'buttonDelete', -190, 0, 1, this.deleteClicked, this));
            this.buttonRename = this.add(src.ButtonUtils.createSimpleButton(src.Settings.GAME_ATLAS, 'buttonRename', -230, 0, 1, this.renameClicked, this));
            this.buttonEdit = this.add(src.ButtonUtils.createSimpleButton(src.Settings.GAME_ATLAS, 'buttonEdit', 180, 0, 1, this.editClicked, this));
            this.buttonPlay = this.add(src.ButtonUtils.createSimpleButton(src.Settings.GAME_ATLAS, 'buttonPlaySong', 225, 0, 1, this.playClicked, this));
        }
        deleteClicked() {
            if (confirm(`Delete "${this.song.name}" ?`)) {
                src.SongStorage.instance.removeSong(this.song);
                this.game.state.start("EditorSongList", true, false);
            }
            this.game.canvas.focus();
        }
        renameClicked() {
            let songName = prompt("Enter new name", '' + this.song.name);
            if (songName && songName.length > 0) {
                this.song.name = songName;
                src.SongStorage.instance.setCurrentSong(this.song);
                src.SongStorage.instance.save();
                this.game.state.start("EditorSongList", true, false);
            }
            this.game.canvas.focus();
        }
        editClicked() {
            src.SongStorage.instance.setCurrentSong(this.song);
            if (src.SongStorage.instance.currentSong) {
                this.game.state.start("SongEditor", true, false);
            }
        }
        playClicked() {
            src.SongStorage.instance.setCurrentSong(this.song);
            src.Settings.STARTED_FROM_EDITOR = false;
            this.game.state.start("Level", true, false);
        }
        /**
         * RESIZE
         */
        resize() {
            this.buttonWidth = Math.min(this.songList.windowBounds.width * 0.8, 1000);
            this.rectangle.clear().lineStyle(2, 0xffffff, 1);
            this.rectangle.beginFill(this.fillColor, 0.25);
            this.rectangle.drawRect(-this.buttonWidth / 2, -40, this.buttonWidth, 80);
            this.rectangle.endFill();
            this.buttonDelete.x = -this.buttonWidth / 2 + 60;
            this.buttonRename.x = -this.buttonWidth / 2 + 20;
            this.buttonEdit.x = this.buttonWidth / 2 - 70;
            this.buttonPlay.x = this.buttonWidth / 2 - 25;
        }
        /**
         * DESTROY
         */
        destroy() {
            super.destroy();
            this.songList = null;
            this.rectangle = null;
            this.song = null;
            this.nameText = null;
            this.bpmText = null;
            this.buttonDelete = null;
            this.buttonRename = null;
            this.buttonEdit = null;
            this.buttonPlay = null;
        }
    }
    src.EditorSongPanel = EditorSongPanel;
})(src || (src = {}));
var src;
(function(src) {
    class NotesPanel extends Phaser.Group {
        constructor(workingArea) {
            super(workingArea.game, null);
            this.workingArea = workingArea;
            this.editor = workingArea.editor;
        }
        /**
         * PUBLIC
         */
        buildNotes() {
            this.notes = [];
            let currentColumn = 0;
            for (let note of this.editor.currentSong.notes) {
                let editorNote = this.add(new src.EditorNote(this.editor, note));
                editorNote.y = -note.time * this.workingArea.getWorkingAreaHeight();
                editorNote.x = 20 + 32 * (currentColumn++ % 10);
                editorNote.setTailHeight(note.duration * this.workingArea.getWorkingAreaHeight());
                this.notes.push(editorNote);
            }
        }
        /**
         * UPDATE
         */
        update() {
            super.update();
            for (let note of this.notes) {
                note.visible = note.y + this.workingArea.contentContainer.y >= -this.workingArea.getAvailableScreenHeight() && note.y + this.workingArea.contentContainer.y - note.height <= 0;
                if (note.visible) {
                    note.alpha = note.note.time >= this.workingArea.startingTime && note.note.time < this.workingArea.endingTime ? 1 : 0.25;
                }
            }
        }
        /**
         * DESTROY
         */
        destroy() {
            super.destroy();
            this.workingArea = null;
            this.editor = null;
            this.notes = null;
        }
    }
    src.NotesPanel = NotesPanel;
})(src || (src = {}));
var src;
(function(src) {
    class Song {
        constructor(name) {
            this.name = name;
            this.bpm = 0;
            this.calculatedDuration = 0;
            this.bpmAcceleration = src.Settings.BPM_ACCELERATION;
            this.baseStep = 0;
            this.deltaOctave = 0;
            this.multiplier = 1;
            this.tileLengthThreshold = src.Settings.TILE_MERGE_THRESHOLD;
            this.notes = [];
            this.tiles = [];
        }
    }
    src.Song = Song;
})(src || (src = {}));
var src;
(function(src) {
    class SongBuilder {
        constructor() {}
        static get instance() {
            return SongBuilder._instance ? SongBuilder._instance : SongBuilder._instance = new SongBuilder();
        }
        buildSong(name, midi) {
            let song = new src.Song(name);
            this.filterTracks(midi);
            this.copyNotes(midi, song);
            this.copyMetaData(midi, song);
            this.normalizeNotes(song);
            this.calculateBaseStep(song);
            window.famobi.log(`Copied ${song.notes.length} notes:`);
            window.famobi.log(song);
            return song;
        }
        rebuildSong(song) {
            /* cut the _silence_ before first note */
            let baseDelay = song.notes.reduce((prev, note) => Math.min(prev, note.time), Number.MAX_VALUE);
            song.notes.forEach(note => note.time -= baseDelay);
            /* calculate actual duration */
            let durationMultiplier = song.notes.reduce((prev, note) => Math.max(prev, note.time + note.duration), 0);
            let updatedDuration = song.calculatedDuration * durationMultiplier;
            song.notes.forEach(note => {
                note.time /= durationMultiplier;
                note.duration /= durationMultiplier;
            });
            song.baseStep /= durationMultiplier;
            song.calculatedDuration = updatedDuration;
        }
        filterTracks(midi) {
            midi.tracks = midi.tracks.filter(track => track.notes.length > 0);
            midi.tracks.sort((a, b) => a.startTime - b.startTime);
            if (midi.tracks.length > 1) {
                if (src.Settings.DEBUG_MODE && confirm(`The song has multiple tracks with (${midi.tracks.map(track => track.notes.length).toString()}) notes. Do you want to merge them into one (OK) or use only first track (Cancel)?`)) {
                    midi.tracks.reduce((aggregator, track) => {
                        aggregator.notes = aggregator.notes.concat(track.notes);
                        return aggregator;
                    });
                }
                midi.tracks.splice(1);
            }
        }
        copyMetaData(midi, song) {
            song.bpm = Math.floor(midi.header.bpm) || 60;
            song.originalMidiBpm = Math.floor(midi.header.bpm) || 60;
            song.midiFileDuration = midi.duration;
        }
        copyNotes(midi, song) {
            song.notes = [];
            /* copy notes to song */
            midi.tracks[0].notes.forEach(note => song.notes.push(new src.MidiNote().cloneFrom(note, true).normalizeVolume()));
        }
        normalizeNotes(song) {
            /* sort notes by time ascending */
            song.notes.sort((a, b) => a.time - b.time);
            /* cut the _silence_ before first note */
            let baseDelay = song.notes.reduce((prev, note) => Math.min(prev, note.time), Number.MAX_VALUE);
            song.notes.forEach(note => note.time -= baseDelay);
            /* calculate actual duration */
            song.calculatedDuration = song.notes.reduce((prev, note) => Math.max(prev, note.time + note.duration), 0);
            window.famobi.log("Song's calculated duration is " + song.calculatedDuration);
            song.notes.forEach(note => note.normalizeTimeAndDuration(song.calculatedDuration));
        }
        calculateBaseStep(song) {
            let lengths = new Map();
            for (let note of song.notes) {
                if (!lengths.get(note.duration)) {
                    lengths.set(note.duration, 1);
                } else {
                    lengths.set(note.duration, lengths.get(note.duration) + 1);
                }
            }
            window.famobi.log("Possible base steps: ");
            let lengthsArray = Array.from(lengths).sort((a, b) => b[1] - a[1]);
            lengthsArray.forEach(value => window.famobi.log(value[0] * song.calculatedDuration + ': ' + value[1] + " times"));
            let result = Array.from(lengths).reduce((prev, next) => (prev[1] > next[1]) ? prev : next)[0];
            window.famobi.log(`BaseStep was automatically set to ${result * song.calculatedDuration} (${result})`);
            song.baseStep = result;
            return result;
        }
    }
    SongBuilder._instance = null;
    src.SongBuilder = SongBuilder;
})(src || (src = {}));
var src;
(function(src) {
    class SongInfoPanel extends Phaser.Group {
        constructor(editor) {
            super(editor.game, null);
            this.editor = editor;
            this.buildContent();
        }
        buildContent() {
            this.background = this.add(this.game.make.graphics(0, 0));
            this.background.clear().beginFill(0xfff0d4, 1).drawRect(-10, -10, 660, 70).endFill();
            this.background.inputEnabled = true;
            this.songName = this.add(src.TextUtils.getText('', 310, 20, 20, '#000000', src.Settings.DEFAULT_FONT_FAMILY));
            this.bpmText = this.add(src.TextUtils.getText('', 2, 45, 15, '#000000', src.Settings.DEFAULT_FONT_FAMILY));
            this.bpmText.anchor.x = 0;
            this.multiplier = this.add(src.TextUtils.getText(`x0`, 180, 45, 20, '#1ebe00', src.Settings.DEFAULT_FONT_FAMILY));
            this.bpmAcceleration = this.add(src.TextUtils.getText(`x${src.SongStorage.instance.currentSong.bpmAcceleration}`, 240, 45, 20, '#170081', src.Settings.DEFAULT_FONT_FAMILY));
            this.durationText = this.add(src.TextUtils.getText('', 640, 45, 16, '#000000', src.Settings.DEFAULT_FONT_FAMILY));
            this.durationText.anchor.x = 1;
            this.currentPosition = this.add(src.TextUtils.getText('', 320, 48, 14, '#2e1b21', src.Settings.DEFAULT_FONT_FAMILY));
            this.baseStep = this.add(src.TextUtils.getText('', 400, 48, 14, '#2e1b21', src.Settings.DEFAULT_FONT_FAMILY));
            this.tileLengthThreshold = this.add(src.TextUtils.getText('', 450, 48, 14, '#FF0000', src.Settings.DEFAULT_FONT_FAMILY));
            this.deltaOctave = this.add(src.TextUtils.getText(`${src.SongStorage.instance.currentSong.deltaOctave}`, 635, 14, 20, '#ff0005', src.Settings.DEFAULT_FONT_FAMILY));
            this.deltaOctave.anchor.x = 1;
            this.songName.inputEnabled = true;
            this.songName.events.onInputUp.add(this.renameClicked, this);
            this.bpmText.inputEnabled = true;
            this.bpmText.events.onInputUp.add(this.changeBpmClicked, this);
            this.multiplier.inputEnabled = true;
            this.multiplier.events.onInputUp.add(this.changeMultiplierClicked, this);
            this.bpmAcceleration.inputEnabled = true;
            this.bpmAcceleration.events.onInputUp.add(this.changeAccelerationFactorClicked, this);
            this.deltaOctave.inputEnabled = true;
            this.deltaOctave.events.onInputUp.add(this.changeDeltaOctave, this);
            this.baseStep.inputEnabled = true;
            this.baseStep.events.onInputUp.add(this.chaneBaseStepClicked, this);
            this.tileLengthThreshold.inputEnabled = true;
            this.tileLengthThreshold.events.onInputUp.add(this.changeTileLengthThresholdClicked, this);
            this.updateTexts();
        }
        updateTexts() {
            let finalBPM = src.SongMath.calculateFinalBPM(src.SongStorage.instance.currentSong);
            let averageBPM = (src.SongStorage.instance.currentSong.bpm + finalBPM) / 2;
            this.songName.setText(`${src.SongStorage.instance.currentSong.name}`);
            this.bpmText.setText(`${src.SongStorage.instance.currentSong.bpm}/${~~averageBPM}/${~~finalBPM} bpm`);
            this.baseStep.setText('' + src.SongStorage.instance.currentSong.baseStep * src.SongStorage.instance.currentSong.calculatedDuration);
        }
        renameClicked() {
            let songName = prompt("Enter new name", '' + src.SongStorage.instance.currentSong.name);
            if (songName && songName.length > 0) {
                src.SongStorage.instance.currentSong.name = songName;
                this.updateTexts();
            }
        }
        changeBpmClicked() {
            if (src.SongStorage.instance.currentSong) {
                let bpm = +prompt("Set BPM value:", '' + src.SongStorage.instance.currentSong.bpm);
                if (bpm && bpm > 0) {
                    src.SongStorage.instance.currentSong.bpm = bpm;
                    this.updateTexts();
                }
            }
        }
        changeDeltaOctave() {
            if (src.SongStorage.instance.currentSong) {
                let value = +prompt("Set delta octave value:", '' + src.SongStorage.instance.currentSong.deltaOctave);
                if (value || value === 0) {
                    src.SongStorage.instance.currentSong.deltaOctave = Math.floor(value);
                }
                this.updateTexts();
            }
        }
        changeMultiplierClicked() {
            if (src.SongStorage.instance.currentSong) {
                let multiplierValue = +prompt("Set Multiplier value:", '' + src.SongStorage.instance.currentSong.multiplier);
                if (multiplierValue && multiplierValue >= 1) {
                    src.SongStorage.instance.currentSong.multiplier = Math.floor(multiplierValue);
                    this.updateTexts();
                } else {
                    alert("Multiplier should be integer number not less than 1!");
                }
            }
        }
        changeAccelerationFactorClicked() {
            if (src.SongStorage.instance.currentSong) {
                let accelerationFactor = +prompt("Set acceleration value (in BPM/sec):", '' + src.SongStorage.instance.currentSong.bpmAcceleration);
                if (accelerationFactor && accelerationFactor > 0) {
                    src.SongStorage.instance.currentSong.bpmAcceleration = accelerationFactor;
                    this.updateTexts();
                } else {
                    alert("Acceleration should be not less than 0!");
                }
            }
        }
        chaneBaseStepClicked() {
            if (src.SongStorage.instance.currentSong) {
                let stepValue = +prompt("Set base step (warning, it will reset all notes you've placed on the field!):", "" + src.SongStorage.instance.currentSong.baseStep * src.SongStorage.instance.currentSong.calculatedDuration);
                if (stepValue && stepValue > 0) {
                    window.famobi.log("Set baseStep as " + stepValue);
                    src.SongStorage.instance.currentSong.baseStep = stepValue / src.SongStorage.instance.currentSong.calculatedDuration;
                    this.game.state.start("SongEditor", true, false);
                }
            }
        }
        changeTileLengthThresholdClicked() {
            if (src.SongStorage.instance.currentSong) {
                let thresholdValue = +prompt("Set tile length threshold (warning, it will reset all notes you've placed on the field!):", "" + src.SongStorage.instance.currentSong.tileLengthThreshold * 100);
                if (thresholdValue && thresholdValue > 0) {
                    src.SongStorage.instance.currentSong.tileLengthThreshold = thresholdValue / 100;
                    this.editor.workingArea.tilesPanel.rebuildTiles();
                }
            }
        }
        update() {
            super.update();
            this.durationText.setText(`${src.TextUtils.convertMSToHumanTime(src.SongMath.calculateActualDuration(this.editor.currentSong) * 1000)} / ${src.TextUtils.convertMSToHumanTime(src.SongMath.calculateNominalDuration(this.editor.currentSong) * 1000)} (${src.TextUtils.convertMSToHumanTime(this.editor.currentSong.midiFileDuration * 1000)})`);
            this.currentPosition.setText(`${Phaser.Math.roundTo(this.editor.workingArea.getProgressPercentage() * 100, -1)}%`);
            this.baseStep.setText('' + src.SongStorage.instance.currentSong.baseStep * src.SongStorage.instance.currentSong.calculatedDuration);
            this.tileLengthThreshold.setText('' + Phaser.Math.roundTo(src.SongStorage.instance.currentSong.tileLengthThreshold * 100, -1) + '%');
            this.multiplier.setText(`x${src.SongStorage.instance.currentSong.multiplier}`);
            this.bpmAcceleration.setText(`+${src.SongStorage.instance.currentSong.bpmAcceleration}/s`);
            this.deltaOctave.setText(`${src.SongStorage.instance.currentSong.deltaOctave > 0 ? '+' : ''}${src.SongStorage.instance.currentSong.deltaOctave}`);
        }
    }
    src.SongInfoPanel = SongInfoPanel;
})(src || (src = {}));
var src;
(function(src) {
    class SongUtils {
        static getTitle(songName) {
            songName = window.famobi.__(songName) || songName;
            let parts = songName.split(" - ");
            return (parts.length == 1) ? parts[0] : parts[1];
        }
        static getAuthor(songName) {
            songName = window.famobi.__(songName) || songName;
            let parts = songName.split(" - ");
            return (parts.length == 1) ? "" : parts[0];
        }
    }
    src.SongUtils = SongUtils;
})(src || (src = {}));
var src;
(function(src) {
    class TilesPanel extends Phaser.Group {
        constructor(workingArea) {
            super(workingArea.game, null);
            this.workingArea = workingArea;
            this.editor = workingArea.editor;
            this.tiles = [];
            this.buildContent();
        }
        buildContent() {
            this.backgroundContainer = this.add(this.game.make.group(null));
            this.backgroundSprite = this.backgroundContainer.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'tile0000'));
            this.backgroundSprite.anchor.set(0, 1);
            this.backgroundSprite.width = 320;
            this.backgroundSprite.height = this.workingArea.getWorkingAreaHeight();
            this.backgroundSprite.alpha = 0.2;
            for (let i = 0; i < 5; i++) {
                let line = this.backgroundContainer.add(this.game.make.sprite(i * src.Settings.EDITOR_TILE_WIDTH, 0, src.Settings.GAME_ATLAS, 'noteProgress0000'));
                line.anchor.set(0.5, 1);
                line.width = 2;
                line.height = this.workingArea.getWorkingAreaHeight();
            }
            this.tilesContainer = this.add(this.game.make.group(null));
        }
        createTile(notes, length) {
            let tile = this.tilesContainer.add(new src.EditorTile(this, notes, length, this.getRandomPositionExcept([])));
            this.tiles.push(tile);
            return tile;
        }
        getRandomPositionExcept(exceptPositions) {
            return Phaser.ArrayUtils.getRandomItem([src.TilePosition.FIRST, src.TilePosition.SECOND, src.TilePosition.THIRD, src.TilePosition.FOURTH].filter(p => exceptPositions.indexOf(p) == -1));
        }
        /**
         * PUBLIC
         */
        buildTiles() {
            if (this.workingArea.notesPanel.notes.length < 1) {
                alert("The MIDI file doesn't contain any notes!");
                return;
            }
            let tileModel = {
                notes: [],
                nextPossibleTileStart: 0
            };
            for (let i = 0; i < this.workingArea.notesPanel.notes.length; i++) {
                let editorNote = this.workingArea.notesPanel.notes[i];
                if (i == this.editor.currentSong.notes.length - 1) {
                    if (tileModel.nextPossibleTileStart > 0) {
                        window.famobi.log(`${i} ${editorNote.note.name} finishing long tile and the building process`);
                        tileModel.notes.push(editorNote);
                        this.createTile(tileModel.notes, Math.max(1 - tileModel.notes[0].note.time, this.editor.currentSong.baseStep * 2));
                    } else {
                        let distanceToPrevTile = editorNote.note.time - tileModel.notes[0].note.time;
                        let relativeDistanceToPrevTile = distanceToPrevTile / this.editor.currentSong.baseStep;
                        if (relativeDistanceToPrevTile >= 1 - this.editor.currentSong.tileLengthThreshold && relativeDistanceToPrevTile <= 1 + this.editor.currentSong.tileLengthThreshold) {
                            this.createTile(tileModel.notes, distanceToPrevTile);
                            tileModel.notes = [editorNote];
                            this.createTile(tileModel.notes, Math.max(1 - tileModel.notes[0].note.time, this.editor.currentSong.baseStep));
                        } else {
                            window.famobi.log(`${i} ${editorNote.note.name} attaching last note to the last tile and finishing song building`);
                            tileModel.notes.push(editorNote);
                            this.createTile(tileModel.notes, Math.max(1 - tileModel.notes[0].note.time, this.editor.currentSong.baseStep));
                        }
                    }
                    continue;
                }
                if (tileModel.notes.length == 0) {
                    tileModel.notes.push(editorNote);
                    continue;
                }
                let timeDifference = editorNote.note.time - tileModel.notes[0].note.time;
                let relativeDifference = timeDifference / this.editor.currentSong.baseStep;
                if (tileModel.nextPossibleTileStart > 0) {
                    if (tileModel.nextPossibleTileStart > editorNote.note.time) {
                        window.famobi.log(`${i} ${editorNote.note.name} continuing previous long tile`);
                        tileModel.notes.push(editorNote);
                        continue;
                    } else {
                        this.createTile(tileModel.notes, timeDifference);
                        window.famobi.log(`${i} ${editorNote.note.name} finsihes long tile and starting next`);
                        tileModel.notes = [editorNote];
                        tileModel.nextPossibleTileStart = 0;
                        continue;
                    }
                }
                if (relativeDifference <= this.editor.currentSong.tileLengthThreshold) {
                    window.famobi.log(`${i} ${editorNote.note.name} attaching to the same tile`);
                    /* current note starts at the same (or very close) time */
                    tileModel.notes.push(editorNote);
                } else if (relativeDifference >= 1 - this.editor.currentSong.tileLengthThreshold && relativeDifference <= 1 + this.editor.currentSong.tileLengthThreshold) {
                    window.famobi.log(`${i} ${editorNote.note.name} starting next tile`);
                    /* current note fits to the next tile */
                    this.createTile(tileModel.notes, timeDifference);
                    tileModel.notes = [editorNote];
                    tileModel.nextPossibleTileStart = 0;
                } else {
                    /* building long tile */
                    tileModel.nextPossibleTileStart = Math.min(1, tileModel.notes[0].note.time + 2 * this.editor.currentSong.baseStep - this.editor.currentSong.tileLengthThreshold * this.editor.currentSong.baseStep);
                    if (tileModel.nextPossibleTileStart > editorNote.note.time) {
                        window.famobi.log(`${i} ${editorNote.note.name} attaching to the previous tile and marking it as long`);
                        tileModel.notes.push(editorNote);
                        continue;
                    } else {
                        window.famobi.log(`${i} ${editorNote.note.name} finishes previous very long tile and starting next`);
                        this.createTile(tileModel.notes, timeDifference);
                        tileModel.notes = [editorNote];
                        tileModel.nextPossibleTileStart = 0;
                        continue;
                    }
                }
            }
            /* randomize tiles positions */
            for (let i = 1; i < this.tiles.length; i++) {
                if (i == this.tiles.length - 1) {
                    window.famobi.log(`except positions for last tile (${i} of ${this.tiles.length}): `, [this.tiles[0].tilePosition, this.tiles[i - 1].tilePosition]);
                    this.tiles[i].setTilePosition(this.getRandomPositionExcept([this.tiles[0].tilePosition, this.tiles[i - 1].tilePosition]));
                } else {
                    this.tiles[i].setTilePosition(this.getRandomPositionExcept([this.tiles[i - 1].tilePosition]));
                }
            }
        }
        loadTiles() {
            if (this.workingArea.notesPanel.notes.length < 1) {
                alert("The MIDI file doesn't contain any notes!");
                return;
            }
            if (!this.editor.currentSong.tiles || this.editor.currentSong.tiles.length == 0) {
                this.buildTiles();
            } else {
                window.famobi.log("Loading existing tiles");
                for (let tileModel of this.editor.currentSong.tiles) {
                    let appropriateNotes = this.workingArea.notesPanel.notes.filter(note => note.note.time >= tileModel.startTime && note.note.time < tileModel.startTime + tileModel.duration);
                    let tile = this.createTile(appropriateNotes, tileModel.duration);
                    tile.setTilePosition(tileModel.tilePosition);
                }
            }
        }
        rebuildTiles() {
            this.tiles.forEach(tile => tile.destroy());
            this.tiles = [];
            this.buildTiles();
        }
        /**
         * UPDATE
         */
        update() {
            super.update();
            for (let tile of this.tiles) {
                tile.visible = tile.y + this.workingArea.contentContainer.y >= -this.workingArea.getAvailableScreenHeight() && tile.y + this.workingArea.contentContainer.y - tile.height <= 0;
                if (tile.visible) {
                    tile.alpha = tile.startingTime >= this.workingArea.startingTime && tile.startingTime < this.workingArea.endingTime ? 1 : 0.25;
                }
            }
        }
        /**
         * DESTROY
         */
        destroy() {
            super.destroy();
            this.tiles = null;
            this.workingArea = null;
            this.editor = null;
            this.backgroundContainer = null;
            this.tilesContainer = null;
        }
    }
    src.TilesPanel = TilesPanel;
})(src || (src = {}));
var src;
(function(src) {
    class AutoResizeableState extends Phaser.State {
        init(containerWidth = src.CustomScaleManager.ORIGINAL_WIDTH, containerHeight = src.CustomScaleManager.ORIGINAL_HEIGHT) {
            super.init();
            this.isInitialized = false;
            this.containerWidth = containerWidth;
            this.containerHeight = containerHeight;
            this.container = this.add.existing(this.game.make.group(null));
            this.originalBounds = new WindowBounds();
            this.originalBounds.set(0, src.CustomScaleManager.ORIGINAL_WIDTH, 0, src.CustomScaleManager.ORIGINAL_HEIGHT);
            this.resize();
        }
        create() {
            this.isInitialized = true;
        }
        addChild(child, index = -1) {
            return index == -1 ? this.container.add(child) : this.container.addChildAt(child, index);
        }
        getInputPosition() {
            return new Phaser.Point((this.game.input.activePointer.x - this.container.x) / src.CustomScaleManager.SCALE_X, (this.game.input.activePointer.y - this.container.y) / src.CustomScaleManager.SCALE_Y);
        }
        translateInputPosition(pointer) {
            return new Phaser.Point((pointer.x - this.container.x) / src.CustomScaleManager.SCALE_X, (pointer.y - this.container.y) / src.CustomScaleManager.SCALE_Y);
        }
        translateInputX(pointer) {
            return (pointer.x - this.container.x) / src.CustomScaleManager.SCALE_X;
        }
        translateInputY(pointer) {
            return (pointer.y - this.container.y) / src.CustomScaleManager.SCALE_Y;
        }
        resize(width = 0, height = 0) {
            this.container.scale.set(src.CustomScaleManager.SCALE_X, src.CustomScaleManager.SCALE_Y);
            this.container.position.set(src.CustomScaleManager.WIDTH / 2 - this.containerWidth * src.CustomScaleManager.SCALE_X / 2, src.CustomScaleManager.HEIGHT / 2 - this.containerHeight * src.CustomScaleManager.SCALE_Y / 2);
            this.windowBounds = this.windowBounds || new WindowBounds();
            this.windowBounds.set(-(src.CustomScaleManager.WIDTH / src.CustomScaleManager.SCALE_X - this.containerWidth) / 2, (src.CustomScaleManager.WIDTH / src.CustomScaleManager.SCALE_X - this.containerWidth) / 2 + this.containerWidth, -(src.CustomScaleManager.HEIGHT / src.CustomScaleManager.SCALE_Y - this.containerHeight) / 2, (src.CustomScaleManager.HEIGHT / src.CustomScaleManager.SCALE_Y - this.containerHeight) / 2 + this.containerHeight);
        }
        shutdown() {
            this.container.destroy();
            this.container = null;
        }
    }
    src.AutoResizeableState = AutoResizeableState;
    class WindowBounds {
        constructor() {
            this.set(0, 0, 0, 0);
        }
        set(left, right, top, down) {
            this.left = left;
            this.right = right;
            this.top = top;
            this.down = down;
            this.x = left;
            this.y = top;
            this.width = right - left;
            this.height = down - top;
            this.centerX = (right + left) / 2;
            this.centerY = (down + top) / 2;
        }
    }
    src.WindowBounds = WindowBounds;
})(src || (src = {}));
///<reference path="AutoResizeableState.ts"/>
var src;
(function(src) {
    class SongEditor extends src.AutoResizeableState {
        create() {
            super.create();
            this.loadSong();
            this.inputManager = this.addChild(new src.EditorInputManager(this));
            this.workingArea = this.addChild(new src.WorkingArea(this));
            this.songInfo = this.addChild(new src.SongInfoPanel(this));
            this.resize(this.game.world.width, this.game.world.height);
        }
        loadSong() {
            this.currentSong = src.SongStorage.instance.currentSong;
            this.currentSong.tileLengthThreshold = this.currentSong.tileLengthThreshold || src.Settings.TILE_MERGE_THRESHOLD;
        }
        resize(width, height) {
            super.resize(width, height);
            if (this.isInitialized) {
                this.songInfo.y = this.windowBounds.top;
                this.workingArea.resize();
            }
        }
        shutdown() {
            this.inputManager.destroy();
            this.inputManager = null;
            this.workingArea.destroy();
            this.workingArea = null;
            this.songInfo.destroy();
            this.songInfo = null;
        }
    }
    src.SongEditor = SongEditor;
})(src || (src = {}));
///<reference path="../states/SongEditor.ts"/>
var src;
(function(src) {
    class WorkingArea extends Phaser.Group {
        constructor(editor) {
            super(editor.game, null);
            this.startingTime = 0;
            this.endingTime = 1;
            this.editor = editor;
            this.buildContent();
            this.loadSavedSong();
        }
        buildContent() {
            this.contentContainer = this.add(this.game.make.group(null));
            this.contentContainer.position.set(0, 0);
            this.scrollBar = this.add(new src.EditorScrollBar(this));
            this.notesPanel = this.contentContainer.add(new src.NotesPanel(this));
            this.notesPanel.x = 320;
            this.tilesPanel = this.contentContainer.add(new src.TilesPanel(this));
        }
        loadSavedSong() {
            this.notesPanel.buildNotes();
            this.tilesPanel.loadTiles();
            /* scroll to beginning */
            // this.scrollToPercentage(0);
        }
        buildTileModels() {
            return this.tilesPanel.tiles.map(tile => new src.TileModel(tile.tilePosition, tile.startingTime, tile.tileDuration)).sort((a, b) => a.startTime - b.startTime);
        }
        /**
         * PUBLIC METHODS
         */
        placeNotesRandomly() {
            alert("placing notes randomly not implemented yet!");
        }
        saveSong(song) {
            // song.lastStoredLine = this.getCurrentLine();
            song.multiplier = src.SongStorage.instance.currentSong.multiplier || 1;
            song.bpmAcceleration = src.SongStorage.instance.currentSong.bpmAcceleration || src.Settings.BPM_ACCELERATION;
            song.deltaOctave = src.SongStorage.instance.currentSong.deltaOctave || 0;
            song.baseStep = src.SongStorage.instance.currentSong.baseStep;
            song.tiles = this.buildTileModels();
        }
        scroll(delta) {
            this.contentContainer.y += delta;
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                if (this.contentContainer.y - this.contentContainer.height > 0) {
                    this.contentContainer.y = 0;
                }
            } else {
                this.contentContainer.y = Phaser.Math.clamp(this.contentContainer.y, 0, Math.max(0, this.contentContainer.height - this.getAvailableScreenHeight()));
            }
        }
        scrollToPercentage(percentage) {
            percentage = Phaser.Math.clamp(percentage, 0, 1);
            let targetPosition = percentage * this.contentContainer.height;
            this.scroll(targetPosition - this.contentContainer.y);
        }
        getProgressPercentage() {
            return this.contentContainer.y / this.contentContainer.height;
        }
        getAvailableScreenHeight() {
            return this.editor.windowBounds.height - 60;
        }
        getWorkingAreaHeight() {
            return 1 / this.editor.currentSong.baseStep * src.Settings.EDITOR_TILE_HEIGHT;
        }
        getTileUnderPointer() {
            let activePoint = this.editor.translateInputPosition(this.game.input.activePointer);
            for (let j = 0; j < this.tilesPanel.tiles.length; j++) {
                let tile = this.tilesPanel.tiles[j];
                if (tile.visible && tile.isPointerOver(activePoint)) {
                    return tile;
                }
            }
            return null;
        }
        /**
         * UPDATE
         */
        update() {
            super.update();
            if (!this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.contentContainer.y = Phaser.Math.clamp(this.contentContainer.y, 0, Math.max(0, this.contentContainer.height - this.getAvailableScreenHeight()));
            }
        }
        /**
         * RESIZE
         */
        resize() {
            this.scrollBar.resize();
            this.y = this.editor.windowBounds.down;
        }
        /**
         * DESTROY
         */
        destroy() {
            super.destroy();
            this.contentContainer.destroy();
            this.contentContainer = null;
        }
    }
    src.WorkingArea = WorkingArea;
})(src || (src = {}));
var src;
(function(src) {
    class TileModel {
        constructor(position, startTime, duration) {
            this.tilePosition = position;
            this.startTime = startTime;
            this.duration = duration;
        }
    }
    src.TileModel = TileModel;
})(src || (src = {}));
///<reference path="TileModel.ts"/>
var src;
(function(src) {
    class PreparedTileModel extends src.TileModel {
        constructor(position, startTime, duration, notes) {
            super(position, startTime, duration);
            this.notes = notes;
        }
    }
    src.PreparedTileModel = PreparedTileModel;
})(src || (src = {}));
var src;
(function(src) {
    class Tile extends Phaser.Group {
        constructor(tileManager, tileModel, lineIndex) {
            super(tileManager.game, null);
            /* input */
            this.isPointerDown = false;
            this.lineIndex = 0;
            this.numSubTiles = 1;
            /* bool properties */
            this.isMissed = false;
            this.outOfScreen = false;
            this.isPressed = false;
            this.wasReleased = false;
            this.pausePlaybackAfterDestroying = false;
            this.initProperties(tileManager, tileModel, lineIndex);
        }
        initProperties(tileManager, tileModel, lineIndex) {
            this.tileManager = tileManager;
            this.lineIndex = lineIndex;
            this.tilePosition = tileModel.tilePosition;
            this.level = this.tileManager.level;
            this.startTime = tileModel.startTime;
            this.tileDuration = tileModel.duration;
            this.notes = tileModel.notes.slice();
            this.color = src.BackgroundManager.instance.currentBackground;
            this.x = src.Settings.TILE_WIDTH / 2 + this.tilePosition * src.Settings.TILE_WIDTH;
            this.inputArea = new Phaser.Rectangle(-src.Settings.TILE_WIDTH / 2, -src.Settings.TILE_HEIGHT, src.Settings.TILE_WIDTH, src.Settings.TILE_HEIGHT);
        }
        playTile() {
            this.level.melodyManager.countTile(this);
        }
        getDeltaOctave() {
            const cyclesPlayed = Math.floor((this.lineIndex - 1) / (this.level.melodyManager.getTotalTilesNumber() / this.level.melodyManager.multiplier));
            return (src.Settings.DEBUG_MODE ? this.level.melodyManager.userDeltaOctave : 0) + (cyclesPlayed % 2 == 0 ? 0 : (this.level.melodyManager.deltaOctave));
        }
        hitsPoint(targetPoint, onlyInTapArea = true) {
            if (targetPoint) {
                if (onlyInTapArea) {
                    return this.inputArea.x + this.x <= targetPoint.x &&
                        this.inputArea.x + this.inputArea.width + this.x >= targetPoint.x &&
                        this.getScreenY() + this.inputArea.y - this.tileManager.tileSpeedManager.getSpeed() * src.Settings.HUMAN_REACTION_TIME <= targetPoint.y &&
                        this.getScreenY() + this.inputArea.y + this.inputArea.height >= targetPoint.y;
                } else {
                    return this.inputArea.x + this.x <= targetPoint.x &&
                        this.inputArea.x + this.inputArea.width + this.x >= targetPoint.x &&
                        this.getScreenY() - this.tileHeight - this.tileManager.tileSpeedManager.getSpeed() * src.Settings.HUMAN_REACTION_TIME <= targetPoint.y &&
                        this.getScreenY() >= targetPoint.y;
                }
            } else {
                return false;
            }
        }
        showRewardText(y) {
            let points = this.calculateReward();
            this.applyReward(points);
            this.level.uiManager.playScoreEnlargeEffect();
            if (!this.rewardText) {
                this.rewardText = this.add(src.TextUtils.getBitmapText('+' + points, 0, y, 60, src.BackgroundManager.instance.getUIColorDecimal()));
            } else {
                this.rewardText.y = y;
                this.rewardText.setText('+' + points);
            }
            this.rewardText.visible = true;
            this.rewardText.alpha = 1;
            this.rewardText.scale.set(0.2, 0.2);
            let targetScale = 0.8 + (Math.floor(points / this.numSubTiles) - 1) * 0.1;
            let duration = 500 / Math.sqrt(this.tileManager.tileSpeedManager.getBPM() / 100);
            this.game.add.tween(this.rewardText)
                .to({
                    alpha: 0
                }, duration * 1.6, Phaser.Easing.Exponential.In, true);
            this.game.add.tween(this.rewardText)
                .to({
                    y: src.Settings.IS_DESKTOP ? y - 70 : y - 70 / duration * 400
                }, duration * 1.05, Phaser.Easing.Back.Out, true);
            this.game.add.tween(this.rewardText.scale)
                .to({
                    x: targetScale,
                    y: targetScale
                }, duration, Phaser.Easing.Back.Out, true);
        }
        /**
         * PUBLIC
         */
        recycle() {
            if (this.isPressed && this.pausePlaybackAfterDestroying) {
                this.level.endlessModePresenter.show();
            }
            this.tileManager = null;
            this.level = null;
            this.pointerID = undefined;
            this.isPointerDown = false;
            this.pointerDownPosition = null;
            this.pointerDownLocalPosition = null;
            this.color = null;
            this.lineIndex = 0;
            this.numSubTiles = 1;
            this.tileHeight = 0;
            this.tilePosition = null;
            this.inputArea = null;
            this.isMissed = false;
            this.outOfScreen = false;
            this.isPressed = false;
            this.wasReleased = false;
            this.pausePlaybackAfterDestroying = false;
            if (this.rewardText) {
                this.game.tweens.removeFrom(this.rewardText);
                this.game.tweens.removeFrom(this.rewardText, false);
                this.game.tweens.removeFrom(this.rewardText.scale);
                this.rewardText.visible = false;
            }
            if (this.parent) {
                this.parent.removeChild(this);
            }
            this.visible = false;
        }
        restoreProperties(tileManager, tileModel, lineIndex) {
            this.initProperties(tileManager, tileModel, lineIndex);
            this.visible = true;
        }
        changeColor(newColor) {
            this.color = newColor;
            if (this.rewardText) {
                this.rewardText.tint = src.BackgroundManager.instance.getUIColorDecimal();
            }
        }
        slideDown() {
            this.outOfScreen = this.outOfScreen || (this.getScreenY() - this.tileHeight > this.level.windowBounds.down);
            this.isMissed = !this.isPressed && (this.getScreenY() - this.inputArea.height > this.level.windowBounds.down);
        }
        calculateReward() {
            let scores = (Math.min(this.pointerDownPosition.y + src.Settings.TILE_HEIGHT * src.Settings.TILE_TAP_BONUS_DISTANCE_FACTOR, this.level.windowBounds.down) - this.level.windowBounds.top) / this.tileManager.getScreenHeight();
            scores = src.Settings.TILE_MIN_REWARD + Math.floor(scores * (src.Settings.TILE_MAX_REWARD - src.Settings.TILE_MIN_REWARD + 1));
            scores = Phaser.Math.clamp(scores, src.Settings.TILE_MIN_REWARD, src.Settings.TILE_MAX_REWARD);
            return scores;
        }
        applyReward(points) {
            src.ScoreManager.instance.addScores(points, this.level.melodyManager.isEndlessMode);
        }
        getScreenX() {
            return this.x + this.parent.x + this.tileManager.x;
        }
        getScreenY() {
            return this.y + this.parent.y + this.tileManager.y;
        }
        /**
         * UPDATE
         */
        update() {
            super.update();
            if (!this.level.gameStateManager.isGameActive() || !this.tileManager.playbackEnabled || !this.tileManager.tileSpeedManager.isStarted || this.notes.length == 0) {
                return;
            }
            let screenY = this.getScreenY();
            let playingY = this.level.windowBounds.down - src.Settings.START_TILE_DISPLACEMENT_Y;
            if (screenY >= playingY && this.notes.length > 0) {
                this.notes.forEach(note => {
                    // let noteDelay: number = SongMath.calculateNoteDelay(note.time, this.startTime, this.level.melodyManager.bpm, this.level.melodyManager.bpmAcceleration, this.level.melodyManager.baseStep);
                    // let durationMultiplier: number = this.level.melodyManager.getOriginalDuration() / this.tileManager.tileSpeedManager.getSpeedUpFactor();
                    let durationMultiplier = this.level.melodyManager.getOriginalDuration() / this.tileManager.tileSpeedManager.getSpeedUpFactor();
                    let noteDelay = Math.max(note.time - this.startTime, 0) * durationMultiplier;
                    this.playNote(note, this.getDeltaOctave(), durationMultiplier, noteDelay);
                });
                this.notes = [];
                return;
            }
            let currentSpeed = this.tileManager.tileSpeedManager.getSpeed();
            let predictedTime = (playingY - screenY) / currentSpeed;
            let predictedCorrectedTime = src.SongMath.calculateTileDelay(playingY - screenY, this.level.melodyManager.bpm, this.level.melodyManager.bpmAcceleration, this.level.melodyManager.baseStep);
            if (predictedTime <= src.Settings.PREDICTION_TIME) {
                let tileDelay = predictedTime;
                this.notes.forEach(note => {
                    // let noteDelay: number = SongMath.calculateNoteDelay(note.time, this.startTime, this.level.melodyManager.bpm, this.level.melodyManager.bpmAcceleration, this.level.melodyManager.baseStep);
                    // let durationMultiplier: number = this.level.melodyManager.getOriginalDuration() / this.tileManager.tileSpeedManager.getSpeedUpFactor();
                    let durationMultiplier = this.level.melodyManager.getOriginalDuration() / this.tileManager.tileSpeedManager.getSpeedUpFactor();
                    let noteDelay = Math.max(note.time - this.startTime, 0) * durationMultiplier;
                    this.playNote(note, this.getDeltaOctave(), durationMultiplier, noteDelay + Math.max(tileDelay, 0));
                });
                this.notes = [];
            }
        }
        playNote(note, deltaOctave, durationMultiplier, delay) {
            src.NotePlayer.play(note, deltaOctave, durationMultiplier, delay);
        }
        /**
         * DESTROY
         */
        destroy() {
            super.destroy();
            this.tileManager = null;
            this.level = null;
            this.rewardText = null;
            this.pointerID = null;
        }
    }
    src.Tile = Tile;
})(src || (src = {}));
///<reference path="Tile.ts"/>
var src;
(function(src) {
    class DefeatTile extends src.Tile {
        constructor(tileManager, tileModel, lineIndex, customHeight) {
            super(tileManager, tileModel, lineIndex);
            this.buildContent(customHeight);
            this.handleInputDown(null);
        }
        buildContent(customHeight) {
            this.tile = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'defeatTile0000'));
            this.tile.anchor.set(0.5, 1);
            this.tile.height = customHeight;
            this.tile.alpha = 0.7;
            this.game.add.tween(this.tile)
                .to({
                    alpha: 0.1
                }, 250, Phaser.Easing.Circular.Out, true, 0, 3, true)
                .onComplete.add(() => {
                    this.isPressed = true;
                });
        }
        playTile() {}
        handleInputDown(pointer) {
            this.playTile();
        }
        handleInputUp(pointer) {}
        changeColor(newColor) {}
        calculateReward() {
            return 0;
        }
        applyReward(points) {}
        destroy() {
            super.destroy();
            this.tile = null;
        }
    }
    src.DefeatTile = DefeatTile;
})(src || (src = {}));
///<reference path="Tile.ts"/>
var src;
(function(src) {
    class HeartTile extends src.Tile {
        constructor(tileManager, tileModel, lineIndex) {
            super(tileManager, tileModel, lineIndex);
            this.buildContent();
        }
        buildContent() {
            this.tileHeight = src.Settings.TILE_HEIGHT;
            this.heartBackground = this.add(this.game.make.sprite(0, -src.Settings.TILE_HEIGHT / 2, src.Settings.GAME_ATLAS, 'heartBackground0000'));
            this.heartBackground.anchor.set(0.5, 0.5);
            this.heart = this.add(this.game.make.sprite(0, -src.Settings.TILE_HEIGHT / 2, src.Settings.GAME_ATLAS, 'heart0000'));
            this.heart.anchor.set(0.5, 0.5);
        }
        playTile() {
            this.level.heartManager.pickupHeartAt(this.getScreenX(), this.getScreenY() + this.heart.y);
            this.heart.visible = false;
            this.game.add.tween(this.heartBackground.scale)
                .to({
                    x: 1.25,
                    y: 1.25
                }, 450, Phaser.Easing.Linear.None, true);
            this.game.add.tween(this.heartBackground)
                .to({
                    alpha: 0
                }, 450, Phaser.Easing.Linear.None, true);
        }
        handleInputDown(pointer) {
            let touchPoint = pointer instanceof src.KeyboardPointer ? new Phaser.Point(pointer.x, pointer.y) : this.level.translateInputPosition(pointer);
            if (!this.isPressed && this.hitsPoint(touchPoint)) {
                this.isPressed = true;
                this.playTile();
            }
        }
        handleInputUp(pointer) {}
        changeColor(newColor) {}
        calculateReward() {
            return 0;
        }
        applyReward(points) {}
        slideDown() {
            super.slideDown();
            this.isMissed = false;
        }
        destroy() {
            super.destroy();
            this.heart = null;
            this.heartBackground = null;
        }
    }
    src.HeartTile = HeartTile;
})(src || (src = {}));
///<reference path="Tile.ts"/>
var src;
(function(src) {
    class LongTile extends src.Tile {
        constructor(tileManager, tileModel, lineIndex) {
            super(tileManager, tileModel, lineIndex);
            /* sprites */
            this.firstTileFrameName = "tile000";
            this.nextTilesFrameName = "longTilePart000";
            this.tailSpriteFrameName = "tileTail000";
            this.waveHeadFrameName = "waveFront000";
            this.waveTailFrameName = "waveTail000";
            this.blastPositions = [];
            this.originalWaveHeadHeight = 0;
            /* properties */
            this.playedPercentage = 0;
            this.playingTime = 0;
            this.playingStartY = 0;
            this.playableLength = 0;
            this.startPointPosition = -src.Settings.TILE_HEIGHT * 0.54;
            /* animations */
            this.endingAnimationStarted = false;
            this.calculateParamethers(tileModel);
            this.buildContent();
        }
        /**
         * SOUND
         */
        calculateParamethers(tileModel) {
            /* calculate paramethers */
            this.numSubTiles = tileModel.duration / this.level.melodyManager.baseStep;
            this.tileHeight = this.numSubTiles * src.Settings.TILE_HEIGHT;
            this.notes.forEach(note => {
                this.blastPositions.push((note.time - this.startTime) / this.tileDuration);
            });
        }
        buildContent() {
            this.tilesContainer = this.add(this.game.make.group(null));
            this.startTile = this.tilesContainer.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, this.firstTileFrameName + this.color));
            this.startTile.anchor.set(0.5, 1);
            this.endTile = this.tilesContainer.add(this.game.make.sprite(0, -src.Settings.TILE_HEIGHT + 0.5 * (this.numSubTiles), src.Settings.GAME_ATLAS, this.nextTilesFrameName + this.color));
            this.endTile.anchor.set(0.5, 1);
            this.endTile.height = this.tileHeight - src.Settings.TILE_HEIGHT + 0.5 * (this.numSubTiles);
            this.tilesTail = this.add(this.game.make.sprite(0, -this.tileHeight, src.Settings.GAME_ATLAS, this.tailSpriteFrameName + this.color));
            this.tilesTail.anchor.set(0.5, 1);
            this.line = this.tilesContainer.add(this.game.make.sprite(0, this.startPointPosition, src.Settings.GAME_ATLAS, 'longTileLine0000'));
            this.line.anchor.set(0.5, 1);
            this.line.height = this.tileHeight + this.startPointPosition;
            this.startPoint = this.tilesContainer.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'longTileStartPoint' + '0000'));
            this.startPoint.anchor.set(0.5, 1);
            this.waveTail = this.add(this.game.make.sprite(0, -1, src.Settings.GAME_ATLAS, this.waveTailFrameName + this.color));
            this.waveTail.anchor.set(0.5, 1);
            this.waveTail.visible = false;
            this.waveHead = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, this.waveHeadFrameName + this.color));
            this.waveHead.anchor.set(0.5, 0);
            this.waveHead.visible = false;
            this.originalWaveHeadHeight = this.waveHead.height;
            this.blastEffect = this.add(new src.BlastEffect());
            this.finishTileEffect = this.add(this.game.make.sprite(2, -this.tileHeight - 55, src.Settings.GAME_ATLAS, 'longTileFinishEffect' + '0000'));
            this.finishTileEffect.anchor.set(0.5, 0);
            this.finishTileEffect.visible = false;
            this.tileTransition = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'tileTransition' + '0000'));
            this.tileTransition.anchor.set(0.5, 1);
            this.tileTransition.height = this.tileHeight + 5;
            this.tileTransition.visible = false;
        }
        recycle() {
            super.recycle();
            this.isPointerDown = false;
            this.endingAnimationStarted = false;
            this.playedPercentage = 0;
            this.playingTime = 0;
            this.playingStartY = 0;
            this.playableLength = 0;
            this.startPointPosition = -src.Settings.TILE_HEIGHT * 0.54;
            this.blastPositions = [];
            this.game.tweens.removeFrom(this.tilesTail);
            this.game.tweens.removeFrom(this.waveTail);
            this.game.tweens.removeFrom(this.tilesContainer, false);
            this.game.tweens.removeFrom(this.tilesContainer);
            this.game.tweens.removeFrom(this.blastEffect, false);
            this.game.tweens.removeFrom(this.blastEffect);
            this.game.tweens.removeFrom(this.tileTransition);
            this.game.tweens.removeFrom(this.waveHead);
            this.game.tweens.removeFrom(this.finishTileEffect);
        }
        restore(tileManager, tileModel, lineIndex) {
            super.restoreProperties(tileManager, tileModel, lineIndex);
            this.calculateParamethers(tileModel);
            this.tilesContainer.alpha = 1;
            this.startTile.alpha = 1;
            this.endTile.y = -src.Settings.TILE_HEIGHT + 0.5 * (this.numSubTiles);
            this.endTile.alpha = 1;
            this.endTile.height = this.tileHeight - src.Settings.TILE_HEIGHT + 0.5 * (this.numSubTiles);
            this.tilesTail.y = -this.tileHeight;
            this.tilesTail.visible = true;
            this.tilesTail.alpha = 1;
            this.startPoint.visible = true;
            this.line.y = this.startPointPosition;
            this.line.height = this.tileHeight + this.startPointPosition;
            this.waveTail.visible = false;
            this.waveTail.alpha = 1;
            this.waveHead.visible = false;
            this.waveHead.alpha = 1;
            this.waveHead.height = this.originalWaveHeadHeight;
            this.blastEffect.alpha = 1;
            this.blastEffect.visible = false;
            this.finishTileEffect.y = -this.tileHeight - 55;
            this.finishTileEffect.visible = false;
            this.finishTileEffect.alpha = 1;
            this.tileTransition.height = this.tileHeight + 5;
            this.tileTransition.visible = false;
            this.notes.forEach(note => {
                this.blastPositions.push((note.time - this.startTime) / this.tileDuration);
            });
            this.changeColor(src.BackgroundManager.instance.currentBackground);
        }
        /**
         * INPUT HANDLERS
         */
        handleInputDown(pointer) {
            let touchPoint = pointer instanceof src.KeyboardPointer ? new Phaser.Point(pointer.x, pointer.y) : this.level.translateInputPosition(pointer);
            if (!this.isPressed && this.hitsPoint(touchPoint)) {
                this.isPressed = true;
                this.pointerID = pointer.id;
                this.startPoint.visible = false;
                this.line.height = this.tileHeight - 2;
                this.line.y = -1;
                this.waveHead.visible = true;
                this.waveTail.visible = true;
                this.playTile();
                this.isPointerDown = true;
                this.pointerDownPosition = touchPoint.clone();
                this.pointerDownLocalPosition = new Phaser.Point(this.pointerDownPosition.x - this.getScreenX(), this.pointerDownPosition.y - this.getScreenY());
                this.compressNotes();
                this.updateFX();
                if (this.level.windowBounds.down - touchPoint.y <= src.Settings.TILE_HEIGHT * (1 + src.Settings.TILE_TAP_BONUS_DISTANCE_FACTOR)) {
                    this.level.backgroundManager.blinkPerfectLine();
                }
            }
        }
        handleInputUp(pointer) {
            if (pointer.id == this.pointerID) {
                this.finishPlaying();
            }
        }
        /**
         * UPDATE
         */
        update() {
            super.update();
        }
        postUpdate() {
            super.postUpdate();
            if (this.isPointerDown) {
                this.proceedPlaying();
                this.updateFX();
            }
        }
        proceedPlaying() {
            let initialTileY = this.pointerDownPosition.y - this.pointerDownLocalPosition.y;
            let tileDelta = this.getScreenY() - initialTileY;
            this.playedPercentage = tileDelta / this.playableLength;
            for (let i = this.blastPositions.length - 1; i > -1; i--) {
                if (this.blastPositions[i] <= this.playedPercentage) {
                    this.blastEffect.blast();
                    this.blastPositions.splice(0, i + 1);
                    break;
                }
            }
        }
        updateFX() {
            let initialTileY = this.pointerDownPosition.y - this.pointerDownLocalPosition.y;
            let currentActiveY = this.pointerDownLocalPosition.y - (this.getScreenY() - initialTileY);
            if (!this.endingAnimationStarted && currentActiveY - src.Settings.LONG_TILE_ACTIVATOR_DISTANCE < -this.tileHeight) {
                this.endingAnimationStarted = true;
                this.playPerfectFinishAnimation();
            }
            this.waveTail.height = Phaser.Math.clamp((-currentActiveY - 7) - (Math.floor(currentActiveY / 560)), 0, this.tileHeight - 2);
            this.waveHead.y = Phaser.Math.clamp(currentActiveY - src.Settings.LONG_TILE_ACTIVATOR_HEIGHT, -this.tileHeight, -src.Settings.LONG_TILE_ACTIVATOR_HEIGHT);
            this.waveHead.height = Math.min(this.waveHead.height, this.tileHeight + currentActiveY + 7);
            this.blastEffect.position.set(1, this.waveHead.y + 53);
        }
        playPerfectFinishAnimation() {
            this.finishTileEffect.visible = true;
            this.game.add.tween(this.finishTileEffect)
                .to({
                    alpha: 0
                }, 200, Phaser.Easing.Linear.None, true);
            this.waveHead.visible = false;
            this.waveTail.visible = false;
            this.tileTransition.alpha = 0.85;
            this.tileTransition.visible = true;
            this.game.add.tween(this.tileTransition)
                .to({
                    alpha: 0
                }, 200, Phaser.Easing.Linear.None, true);
            this.finishPlaying();
        }
        playHeadDisappearAnimation() {
            this.game.add.tween(this.waveHead)
                .to({
                    alpha: 0
                }, 150, Phaser.Easing.Linear.None, true)
                .onComplete.add(() => this.waveHead.visible = false);
        }
        finishPlaying() {
            if (this.isPressed && !this.wasReleased) {
                this.wasReleased = true;
                this.isPointerDown = false;
                this.playHeadDisappearAnimation();
                this.endTile.y = -src.Settings.TILE_HEIGHT + 0.25 * this.numSubTiles;
                this.game.add.tween(this.tilesTail)
                    .to({
                        alpha: 0
                    }, 150, Phaser.Easing.Linear.None, true)
                    .onComplete.add(() => this.tilesTail.visible = false);
                this.game.add.tween(this.waveTail)
                    .to({
                        alpha: 0
                    }, 150, Phaser.Easing.Linear.None, true);
                this.game.add.tween(this.tilesContainer)
                    .to({
                        alpha: 0.25
                    }, 150, Phaser.Easing.Linear.None, true);
                this.game.add.tween(this.blastEffect)
                    .to({
                        alpha: 0
                    }, 70, Phaser.Easing.Linear.None, true);
                this.showRewardText(-this.tileHeight);
            }
        }
        compressNotes() {
            let tileTime = this.numSubTiles * this.tileManager.level.melodyManager.baseStep;
            let startTime = (Math.abs(this.pointerDownLocalPosition.y) + src.Settings.LONG_TILE_ACTIVATOR_DISTANCE) / src.Settings.TILE_HEIGHT * this.tileManager.level.melodyManager.baseStep;
            this.playingTime = tileTime - startTime;
            this.playingStartY = this.pointerDownLocalPosition.y - src.Settings.LONG_TILE_ACTIVATOR_DISTANCE;
            this.playableLength = this.tileHeight - Math.abs(this.playingStartY) * 1.03;
        }
        /**
         * PUBLIC
         */
        changeColor(newColor) {
            super.changeColor(newColor);
            this.startTile.frameName = this.firstTileFrameName + this.color;
            this.tilesTail.frameName = this.tailSpriteFrameName + this.color;
            this.endTile.frameName = this.nextTilesFrameName + this.color;
            this.waveHead.frameName = this.waveHeadFrameName + this.color;
            this.waveTail.frameName = this.waveTailFrameName + this.color;
        }
        slideDown() {
            super.slideDown();
            if (src.Settings.AUTOPLAY_ENABLED && this.getScreenY() >= this.level.windowBounds.down - 10) {
                this.handleInputDown(new src.KeyboardPointer(this.tilePosition).handleDown(this.x, this.getScreenY() - 1));
            }
        }
        calculateReward() {
            return super.calculateReward() * Phaser.Math.clamp(Math.round(this.playedPercentage * this.numSubTiles), 1, Math.round(this.numSubTiles));
        }
        /**
         * DESTROY
         */
        destroy() {
            super.destroy();
            this.endTile = null;
            this.inputArea = null;
        }
    }
    src.LongTile = LongTile;
})(src || (src = {}));
///<reference path="Tile.ts"/>
var src;
(function(src) {
    class ShortTile extends src.Tile {
        constructor(tileManager, tileModel, lineIndex) {
            super(tileManager, tileModel, lineIndex);
            /* properties */
            this.spriteFrameName = "tile000";
            this.tailSpriteFrameName = "tileTail000";
            this.transitionDuration = 500;
            this.calculateParamethers();
            this.buildContent();
        }
        buildContent() {
            this.tilePressed = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'tilePressed' + '0000'));
            this.tilePressed.anchor.set(0.5, 1);
            this.tilePressed.visible = false;
            this.tile = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, this.spriteFrameName + this.color));
            this.tile.anchor.set(0.5, 1);
            this.tilesTail = this.add(this.game.make.sprite(0, -src.Settings.TILE_HEIGHT, src.Settings.GAME_ATLAS, this.tailSpriteFrameName + this.color));
            this.tilesTail.anchor.set(0.5, 1);
            this.tileTransition = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'tileTransition' + '0000'));
            this.tileTransition.anchor.set(0.5, 1);
            this.tileTransition.visible = false;
        }
        recycle() {
            super.recycle();
            this.isPointerDown = false;
            this.game.tweens.removeFrom(this.tilesTail);
            this.game.tweens.removeFrom(this.tileTransition);
        }
        restore(tileManager, tileModel, lineIndex) {
            super.restoreProperties(tileManager, tileModel, lineIndex);
            this.calculateParamethers();
            this.tile.visible = true;
            this.tilesTail.visible = true;
            this.tilesTail.alpha = 1;
            this.tilePressed.visible = false;
            this.tileTransition.visible = false;
            this.tileTransition.alpha = 1;
            this.changeColor(src.BackgroundManager.instance.currentBackground);
        }
        /**
         * INPUT HANDLERS
         */
        handleInputDown(pointer) {
            let touchPoint = pointer instanceof src.KeyboardPointer ? new Phaser.Point(pointer.x, pointer.y) : this.level.translateInputPosition(pointer);
            if (!this.isPressed && this.hitsPoint(touchPoint)) {
                this.isPressed = true;
                this.wasReleased = true;
                this.pointerID = pointer.id;
                this.tilePressed.visible = true;
                this.tileTransition.alpha = 1;
                this.tileTransition.visible = true;
                this.tile.visible = false;
                this.isPointerDown = true;
                this.pointerDownPosition = touchPoint.clone();
                this.pointerDownLocalPosition = new Phaser.Point(this.pointerDownPosition.x - this.getScreenX(), this.pointerDownPosition.y - this.getScreenY());
                this.game.add.tween(this.tileTransition)
                    .to({
                        alpha: 0
                    }, this.transitionDuration, Phaser.Easing.Circular.Out, true);
                this.game.add.tween(this.tilesTail)
                    .to({
                        alpha: 0
                    }, 150, Phaser.Easing.Linear.None, true)
                    .onComplete.add(() => this.tilesTail.visible = false);
                if (this.level.windowBounds.down - touchPoint.y <= src.Settings.TILE_HEIGHT * (1 + src.Settings.TILE_TAP_BONUS_DISTANCE_FACTOR)) {
                    this.level.backgroundManager.blinkPerfectLine();
                }
                this.playTile();
            }
        }
        handleInputUp(pointer) {
            this.pointerID = 0;
        }
        /**
         * SOUND
         */
        calculateParamethers() {
            this.tileHeight = src.Settings.TILE_HEIGHT;
        }
        playTile() {
            super.playTile();
            this.showRewardText(-src.Settings.TILE_HEIGHT);
        }
        /**
         * PUBLIC
         */
        changeColor(newColor) {
            super.changeColor(newColor);
            this.tile.frameName = this.spriteFrameName + this.color;
            this.tilesTail.frameName = this.tailSpriteFrameName + this.color;
        }
        slideDown() {
            super.slideDown();
            if (src.Settings.AUTOPLAY_ENABLED && this.getScreenY() >= this.level.windowBounds.down - 10) {
                this.handleInputDown(new src.KeyboardPointer(this.tilePosition).handleDown(this.x, this.getScreenY() - 1));
            }
        }
        /**
         * DESTROY
         */
        destroy() {
            super.destroy();
            this.tile = null;
            this.tileTransition = null;
            this.tilePressed = null;
        }
    }
    src.ShortTile = ShortTile;
})(src || (src = {}));
var src;
(function(src) {
    class StartTile extends src.ShortTile {
        constructor(tileManager, tileModel, lineIndex) {
            super(tileManager, tileModel, lineIndex);
        }
        buildContent() {
            super.buildContent();
            this.startText = this.add(this.game.make.sprite(0, -src.Settings.TILE_HEIGHT / 2, src.Settings.GAME_ATLAS, 'startText0000'));
            this.startText.anchor.set(0.5);
        }
        playTile() {
            this.level.tileManager.startPlaying();
        }
        destroy() {
            super.destroy();
            this.startText = null;
        }
    }
    src.StartTile = StartTile;
})(src || (src = {}));
var src;
(function(src) {
    class TileSpeedManager {
        constructor(tileManager) {
            this.frameDistance = 0;
            this.isStarted = false;
            this.bpmAcceleration = 0;
            this.slowdownMultiplier = 1;
            this.milestoneDistance = 0;
            this.trackDistance = 0;
            this.melodyFinished = false;
            this.actualDuration = 0;
            this.tileManager = tileManager;
            this.originalBpm = this.tileManager.level.melodyManager.bpm;
            this.bpm = this.originalBpm;
            this.speed = this.bpm / 60 * src.Settings.TILE_HEIGHT;
            this.currentMilestone = 0;
            this.bpmAcceleration = this.tileManager.level.melodyManager.bpmAcceleration;
        }
        update() {
            if (this.isStarted) {
                if (src.Settings.ENABLE_ACCELERATION) {
                    this.bpm += this.bpmAcceleration * this.tileManager.game.time.elapsedMS / 1000;
                }
                this.speed = this.bpm / 60 * src.Settings.TILE_HEIGHT;
                this.frameDistance = this.speed * this.slowdownMultiplier * this.tileManager.game.time.elapsedMS / 1000;
                this.milestoneDistance += this.frameDistance;
                this.trackDistance += this.frameDistance;
                if (!this.melodyFinished) {
                    this.actualDuration += this.tileManager.game.time.elapsedMS;
                }
            } else {
                this.frameDistance = 0;
            }
        }
        stopPlayback() {
            this.isStarted = false;
        }
        resumePlaybackRapidly() {
            this.isStarted = true;
        }
        startPlaybackSmoothly() {
            this.isStarted = true;
            this.slowdownMultiplier = 0.2;
            src.App.instance.add.tween(this)
                .to({
                    slowdownMultiplier: 1
                }, Math.pow(this.bpm / 100, 1.2) * 100 * 10, Phaser.Easing.Quadratic.Out, true);
        }
        getSpeedUpFactor() {
            return this.bpm / this.originalBpm * this.slowdownMultiplier;
        }
        getSpeed() {
            return this.speed * this.slowdownMultiplier;
        }
        getBPM() {
            return this.bpm * this.slowdownMultiplier;
        }
        getFrameDistance() {
            return this.frameDistance;
        }
        destroy() {
            this.tileManager = null;
        }
    }
    src.TileSpeedManager = TileSpeedManager;
})(src || (src = {}));
var src;
(function(src) {
    class KineticScrollingPlugin extends Phaser.Plugin {
        // private screenX: number;
        // private screenY: number;
        /**
         * Kinetic Scrolling is a Phaser plugin that allows vertical and horizontal scrolling with kinetic motion.
         * It works with the Phaser.Camera
         *
         * @class Phaser.Plugin.KineticScrolling
         * @constructor
         * @param {Object} game - The Game object is the instance of the game, where the magic happens.
         * @param {Any} parent  - The object that owns this plugin, usually Phaser.PluginManager.
         */
        constructor(game, parent) {
            super(game, parent);
            this.pointerId = null;
            this.dragging = false;
            this.pressedDown = false;
            this.timestamp = 0;
            this.callbackID = 0;
            this.targetX = 0;
            this.targetY = 0;
            this.autoScrollX = false;
            this.autoScrollY = false;
            this.startX = 0;
            this.startY = 0;
            this.velocityX = 0;
            this.velocityY = 0;
            this.amplitudeX = 0;
            this.amplitudeY = 0;
            this.directionWheel = 0;
            this.velocityWheelX = 0;
            this.velocityWheelY = 0;
            // if less than the two values is a Tap
            this.thresholdOfTapTime = 100;
            this.thresholdOfTapDistance = 10;
            this.settings = {
                kineticMovement: true,
                timeConstantScroll: 325,
                horizontalScroll: true,
                verticalScroll: false,
                horizontalWheel: true,
                verticalWheel: false,
                deltaWheel: 40,
                onUpdate: null
            };
        };
        /**
         * Change Default Settings of the plugin
         *
         * @method Phaser.Plugin.KineticScrolling#configure
         * @param {Object}  [options] - Object that contain properties to change the behavior of the plugin.
         * @param {number}  [options.timeConstantScroll=325] - The rate of deceleration for the scrolling.
         * @param {boolean} [options.kineticMovement=true]   - Enable or Disable the kinematic motion.
         * @param {boolean} [options.horizontalScroll=true]  - Enable or Disable the horizontal scrolling.
         * @param {boolean} [options.verticalScroll=false]   - Enable or Disable the vertical scrolling.
         * @param {boolean} [options.horizontalWheel=true]   - Enable or Disable the horizontal scrolling with mouse wheel.
         * @param {boolean} [options.verticalWheel=false]    - Enable or Disable the vertical scrolling with mouse wheel.
         * @param {number}  [options.deltaWheel=40]          - Delta increment of the mouse wheel.
         */
        configure(options) {
            if (options) {
                for (let property in options) {
                    if (this.settings.hasOwnProperty(property)) {
                        this.settings[property] = options[property];
                    }
                }
            }
        }
        /**
         * Start the Plugin.
         *
         * @method Phaser.Plugin.KineticScrolling#start
         */
        start() {
            this.game.input.onDown.add(this.beginMove, this);
            this.callbackID = this.game.input.addMoveCallback(this.moveCamera, this);
            this.game.input.onUp.add(this.endMove, this);
            this.game.input.mouse.mouseWheelCallback = this.mouseWheel.bind(this);
        }
        /**
         * Event triggered when a pointer is pressed down, resets the value of variables.
         */
        beginMove(pointer) {
            this.pointerId = pointer.id;
            this.startX = this.game.input.x;
            this.startY = this.game.input.y;
            this.screenX = pointer.screenX;
            this.screenY = pointer.screenY;
            this.pressedDown = true;
            this.timestamp = Date.now();
            // the time of press down
            this.beginTime = this.timestamp;
            this.velocityY = this.amplitudeY = this.velocityX = this.amplitudeX = 0;
        };
        /**
         * Event triggered when the activePointer receives a DOM move event such as a mousemove or touchmove.
         * The camera moves according to the movement of the pointer, calculating the velocity.
         */
        moveCamera(pointer, x, y) {
            if (!this.pressedDown) {
                return;
            }
            // If it is not the current pointer
            if (this.pointerId !== pointer.id) {
                return;
            }
            this.now = Date.now();
            var elapsed = this.now - this.timestamp;
            this.timestamp = this.now;
            var deltaX = 0;
            var deltaY = 0;
            // It`s a fast tap not move
            if (this.now - this.beginTime < this.thresholdOfTapTime &&
                Math.abs(pointer.screenY - this.screenY) < this.thresholdOfTapDistance &&
                Math.abs(pointer.screenX - this.screenX) < this.thresholdOfTapDistance) {
                return;
            }
            if (this.settings.horizontalScroll) {
                deltaX = x - this.startX;
                if (deltaX !== 0) {
                    this.dragging = true;
                }
                this.startX = x;
                this.velocityX = 0.8 * (1000 * deltaX / (1 + elapsed)) + 0.2 * this.velocityX;
                this.game.camera.x -= deltaX;
            }
            if (this.settings.verticalScroll) {
                deltaY = y - this.startY;
                if (deltaY !== 0) {
                    this.dragging = true;
                }
                this.startY = y;
                this.velocityY = 0.8 * (1000 * deltaY / (1 + elapsed)) + 0.2 * this.velocityY;
                this.game.camera.y -= deltaY;
            }
            if (typeof this.settings.onUpdate === 'function') {
                var updateX = 0;
                if (this.game.camera.x > 0 && this.game.camera.x + this.game.camera.width < this.game.camera.bounds.right) {
                    updateX = deltaX;
                }
                var updateY = 0;
                if (this.game.camera.y > 0 && this.game.camera.y + this.game.camera.height < this.game.camera.bounds.height) {
                    updateY = deltaY;
                }
                this.settings.onUpdate(updateX, updateY);
            }
        };
        /**
         * Event triggered when a pointer is released, calculates the automatic scrolling.
         */
        endMove() {
            this.pointerId = null;
            this.pressedDown = false;
            this.autoScrollX = false;
            this.autoScrollY = false;
            if (!this.settings.kineticMovement)
                return;
            this.now = Date.now();
            if (this.game.input.activePointer.withinGame) {
                if (this.velocityX > 10 || this.velocityX < -10) {
                    this.amplitudeX = 0.8 * this.velocityX;
                    this.targetX = Math.round(this.game.camera.x - this.amplitudeX);
                    this.autoScrollX = true;
                }
                if (this.velocityY > 10 || this.velocityY < -10) {
                    this.amplitudeY = 0.8 * this.velocityY;
                    this.targetY = Math.round(this.game.camera.y - this.amplitudeY);
                    this.autoScrollY = true;
                }
            }
            if (!this.game.input.activePointer.withinGame) {
                this.velocityWheelXAbs = Math.abs(this.velocityWheelX);
                this.velocityWheelYAbs = Math.abs(this.velocityWheelY);
                if (this.settings.horizontalScroll &&
                    (this.velocityWheelXAbs < 0.1 || !this.game.input.activePointer.withinGame)) {
                    this.autoScrollX = true;
                }
                if (this.settings.verticalScroll &&
                    (this.velocityWheelYAbs < 0.1 || !this.game.input.activePointer.withinGame)) {
                    this.autoScrollY = true;
                }
            }
        };
        /**
         * Event called after all the core subsystems and the State have updated, but before the render.
         * Create the deceleration effect.
         */
        update() {
            this.elapsed = Date.now() - this.timestamp;
            this.velocityWheelXAbs = Math.abs(this.velocityWheelX);
            this.velocityWheelYAbs = Math.abs(this.velocityWheelY);
            var delta = 0;
            if (this.autoScrollX && this.amplitudeX != 0) {
                delta = -this.amplitudeX * Math.exp(-this.elapsed / this.settings.timeConstantScroll);
                if (delta > 0.5 || delta < -0.5) {
                    this.game.camera.x = this.targetX - delta;
                } else {
                    this.autoScrollX = false;
                    this.game.camera.x = this.targetX;
                }
            }
            if (this.autoScrollY && this.amplitudeY != 0) {
                delta = -this.amplitudeY * Math.exp(-this.elapsed / this.settings.timeConstantScroll);
                if (delta > 0.5 || delta < -0.5) {
                    this.game.camera.y = this.targetY - delta;
                } else {
                    this.autoScrollY = false;
                    this.game.camera.y = this.targetY;
                }
            }
            if (!this.autoScrollX && !this.autoScrollY) {
                this.dragging = false;
            }
            if (this.settings.horizontalWheel && this.velocityWheelXAbs > 0.1) {
                this.dragging = true;
                this.amplitudeX = 0;
                this.autoScrollX = false;
                this.game.camera.x -= this.velocityWheelX;
                this.velocityWheelX *= 0.95;
            }
            if (this.settings.verticalWheel && this.velocityWheelYAbs > 0.1) {
                this.dragging = true;
                this.autoScrollY = false;
                this.game.camera.y -= this.velocityWheelY;
                this.velocityWheelY *= 0.95;
            }
        };
        /**
         * Event called when the mousewheel is used, affect the direction of scrolling.
         */
        mouseWheel(event) {
            if (!this.settings.horizontalWheel && !this.settings.verticalWheel)
                return;
            event.preventDefault();
            var delta = this.game.input.mouse.wheelDelta * 120 / this.settings.deltaWheel;
            if (this.directionWheel != this.game.input.mouse.wheelDelta) {
                this.velocityWheelX = 0;
                this.velocityWheelY = 0;
                this.directionWheel = this.game.input.mouse.wheelDelta;
            }
            if (this.settings.horizontalWheel) {
                this.autoScrollX = false;
                this.velocityWheelX += delta;
                if (typeof this.settings.onUpdate === 'function') {
                    var deltaX = 0;
                    if (this.game.camera.x > 0 && this.game.camera.x + this.game.camera.width < this.game.camera.bounds.width) {
                        deltaX = delta;
                    }
                    this.settings.onUpdate(deltaX, 0);
                }
            }
            if (this.settings.verticalWheel) {
                this.autoScrollY = false;
                this.velocityWheelY += delta;
                if (typeof this.settings.onUpdate === 'function') {
                    var deltaY = 0;
                    if (this.game.camera.y > 0 && this.game.camera.y + this.game.camera.height < this.game.camera.bounds.height) {
                        deltaY = delta;
                    }
                    this.settings.onUpdate(0, deltaY);
                }
            }
        };
        /**
         * Stop the Plugin.
         *
         * @method Phaser.Plugin.KineticScrolling#stop
         */
        stop() {
            this.game.camera.position.set(0, 0);
            this.game.input.onDown.remove(this.beginMove, this);
            if (this.callbackID) {
                this.game.input.deleteMoveCallback(this.callbackID);
            } else {
                this.game.input.deleteMoveCallback(this.moveCamera, this);
            }
            this.game.input.onUp.remove(this.endMove, this);
            this.game.input.mouse.mouseWheelCallback = null;
        };
    }
    src.KineticScrollingPlugin = KineticScrollingPlugin;
})(src || (src = {}));
var src;
(function(src) {
    class ScoreManager {
        constructor() {
            this.currentScore = 0;
            this.currentStarScore = 0;
            this.scoreProgress = 0;
            this.levelMaxPossibleScore = 0;
        }
        static get instance() {
            return ScoreManager._instance ? ScoreManager._instance : ScoreManager._instance = new ScoreManager();
        }
        initScores(scores) {
            this.scores = {};
            this.requiredStars = {};
            src.SongStorage.instance.songs.forEach(song => {
                this.scores[song.name] = {
                    "actual": 0,
                    "total": 0
                };
                this.requiredStars[song.name] = 0;
            });
            Object.keys(scores).forEach(key => {
                if (scores[key] && typeof this.scores[key] !== "undefined") {
                    this.scores[key]["actual"] = scores[key]["actual"];
                    this.scores[key]["total"] = scores[key]["total"];
                }
            });
        }
        reset(levelMaxPossibleScore) {
            this.levelMaxPossibleScore = levelMaxPossibleScore;
            this.currentScore = 0;
            this.currentStarScore = 0;
            this.scoreProgress = 0;
        }
        addScores(scores, isEndlessMode) {
            this.currentScore += ~~scores;
            if (!isEndlessMode) {
                this.currentStarScore += ~~scores;
            }
            window.famobi_analytics.trackEvent("EVENT_LIVESCORE", {
                liveScore: this.currentScore
            });
            this.scoreProgress = this.getCurrentStarScores() / this.getLevelMaxPossibleScores();
            if (src.App.instance.state.getCurrentState() instanceof src.Level) {
                src.App.instance.state.getCurrentState().uiManager.levelProgressBar.animateProgress();
            }
        }
        getSongTotalScores(songName) {
            return this.scores[songName]["total"] || 0;
        }
        getSongActualScores(songName) {
            return this.scores[songName]["actual"] || 0;
        }
        getSongMaxPossibleScores(song) {
            return src.Settings.TILE_MAX_REWARD * song.tiles.reduce((sum, tile) => sum + Math.round(tile.duration / song.baseStep), 0) * song.multiplier;
        }
        getSongStarsCount(song) {
            const scorePercentage = this.getSongActualScores(song.name) / this.getSongMaxPossibleScores(song);
            for (let i = src.Settings.STARS_MILESTONES.length - 1; i > -1; i--) {
                if (scorePercentage >= src.Settings.STARS_MILESTONES[i]) {
                    return i + 1;
                }
            }
            return 0;
        }
        updateCurrentSongScores(actualScores, totalScores) {
            this.scores[src.SongStorage.instance.currentSong.name]["actual"] = Math.max(this.getSongActualScores(src.SongStorage.instance.currentSong.name) || 0, actualScores);
            this.scores[src.SongStorage.instance.currentSong.name]["total"] = Math.max(this.getSongTotalScores(src.SongStorage.instance.currentSong.name) || 0, totalScores);
        }
        getCurrentScores() {
            return ~~this.currentScore;
        }
        getCurrentStarScores() {
            return ~~this.currentStarScore;
        }
        getLevelMaxPossibleScores() {
            return ~~this.levelMaxPossibleScore;
        }
        getTotalScores() {
            return ~~Object.keys(this.scores).reduce((sum, key) => sum + this.scores[key]["total"], 0);
        }
        getCurrentStarsCount() {
            const currentProgress = this.getScoreProgress();
            return src.Settings.STARS_MILESTONES.reduce((prev, current, index) => ((current <= currentProgress) ? index + 1 : prev), 0);
        }
        getScoreProgress() {
            return this.scoreProgress;
        }
        getScoresObject() {
            return this.scores;
        }
        /* required stars */
        setRequiredStarsAmount(song, starsAmount) {
            this.requiredStars[song.name] = starsAmount;
        }
        getRequiredStars(song) {
            return this.requiredStars[song.name] || 0;
        }
    }
    ScoreManager._instance = null;
    src.ScoreManager = ScoreManager;
})(src || (src = {}));
var src;
(function(src) {
    class SoundController {
        constructor() {
            this.defaultMusicVolume = 0.3;
            this.chokedMusicVolume = 0.1;
            this.mobileVolumeMultiplier = 0.5;
            this.desctopVolumeMultiplier = 0.8;
            this.hadBeenMutedBeforePauseTriggered = false;
            this.defaultMusicVolume = src.App.instance.device.desktop ? 0.55 : 1;
            this.soundNames = [
                "albumClosing",
                "albumOpening",
                "Click",
                "Failure",
                "HeartPickUp",
                "HeartUsage",
                "Results",
                "scoresCounting",
                "star01",
                "star02",
                "star03"
            ];
        }
        static get instance() {
            return SoundController._instance ? SoundController._instance :
                SoundController._instance = new SoundController();
        }
        isDecodingSupported() {
            return src.App.instance.sound.usingWebAudio;
        }
        getSoundNames() {
            return this.soundNames;
        }
        /**
         * MUSIC
         */
        init() {
            this.countingSound = src.App.instance.add.sound('scoresCounting', 0.35, true);
            this.countingSound.volume = 0;

            window.famobi.onRequest("changeVolume", function(vol) {
                src.App.instance.sound.mute = vol > 0 ? false : true;
            });

        }
        /**
         * PAUSE/RESUME SOUND
         */
        muteAudio() {
            src.App.instance.sound.mute = true;
            if (src.Settings.ENABLE_API) {
                window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_VOLUMECHANGE, {
                    bgmVolume: (src.App.instance.sound.mute ? 0.0 : 1.0),
                    sfxVolume: (src.App.instance.sound.mute ? 0.0 : 1.0)
                });
            }
        }
        unmuteAudio() {
            src.App.instance.sound.mute = false;
            if (src.Settings.ENABLE_API) {
                window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_VOLUMECHANGE, {
                    bgmVolume: (src.App.instance.sound.mute ? 0.0 : 1.0),
                    sfxVolume: (src.App.instance.sound.mute ? 0.0 : 1.0)
                });
            }
        }
        pauseSounds() {
            this.hadBeenMutedBeforePauseTriggered = src.App.instance.sound.mute;
            src.App.instance.sound.mute = true;
        }
        resumeSounds() {
            src.App.instance.sound.mute = this.hadBeenMutedBeforePauseTriggered;
            this.handleSoundResume();
        }
        handleSoundResume() {
            if (src.App.instance.sound.usingWebAudio && src.App.instance.sound.context.state === 'suspended') {
                src.App.instance.input.onTap.addOnce(() => {
                    if (src.App.instance.sound.context.state === 'suspended') {
                        src.App.instance.sound.context.resume();
                        window.famobi.log('resuming suspended audio context after user gesture...');
                    }
                });
            }
        }
        /**
         * SOUNDS
         */
        playClickSound() {
            src.App.instance.sound.play('Click', src.App.instance.device.desktop ? 0.56 : 0.4, false);
        }
        playCollapseSound() {
            src.App.instance.sound.play('albumClosing', 0.35, false);
        }
        playExpandSound() {
            src.App.instance.sound.play('albumOpening', 0.35, false);
        }
        playFailureSound() {
            src.App.instance.sound.play('Failure', 0.3, false);
        }
        playHeartPickUpSound() {
            src.App.instance.sound.play('HeartPickUp', 0.5, false);
        }
        playHeartUsageSound() {
            src.App.instance.sound.play('HeartUsage', 0.5, false);
        }
        playResultsSound() {
            src.App.instance.sound.play('Results', 0.4, false);
        }
        playStarSound(key) {
            src.App.instance.sound.play('star0' + key, 0.5, false);
        }
        startCountingSound() {
            this.countingSound.play();
            this.countingSound.volume = 0.5;
        }
        stopCountingSound() {
            if (this.countingSound.isPlaying) {
                this.countingSound.stop();
            }
            this.countingSound.volume = 0;
        }
        /**
         * MUSIC
         */
        chokeMusicVolume(duration = 500) {
            if (this.mainTheme) {
                this.mainTheme.fadeTo(duration, this.chokedMusicVolume);
            }
        }
        restoreMusicVolume(duration = 500) {
            if (this.mainTheme) {
                this.mainTheme.fadeTo(duration, this.defaultMusicVolume);
            }
        }
    }
    SoundController._instance = null;
    src.SoundController = SoundController;
})(src || (src = {}));
var src;
(function(src) {
    class Boot extends Phaser.State {
        init() {
            this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
            this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.RESIZE;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            this.game.scale.setResizeCallback(this.resizeCallback, this);
            this.game.scale.onSizeChange.add(this.sizeChanged, this);
            this.game.onPause.add(this.handlePause, this);
            this.game.onResume.add(this.handleResume, this);
            if (this.game.device.android) {
                this.game.input.mouse.enabled = !this.game.device.mspointer;
            }
            src.Settings.IS_DESKTOP = this.game.device.desktop;
            src.Settings.IS_MOBILE = !src.Settings.IS_DESKTOP;
            this.initPlugins();
        }
        preload() {
            this.game.load.image('background-hill', 'img/assets/hill.png');
            this.game.load.atlasJSONArray(src.Settings.PRELOADER_ATLAS, 'img/' + src.Settings.PRELOADER_ATLAS + '.png', 'img/' + src.Settings.PRELOADER_ATLAS + '.json');
        }
        create() {
            this.input.maxPointers = 2;
            this.stage.disableVisibilityChange = true;
            if (this.game.device.desktop) {
                this.game.canvas.oncontextmenu = function(e) {
                    e.preventDefault();
                };
            }
            src.BackgroundManager.instance.init();
            this.game.state.start('Preloader', true, false);
        }
        resizeCallback(manager, bounds) {}
        sizeChanged(scaleManager, w, h) {
            if (this.game.device.android &&
                this.game.device.chrome &&
                this.game.device.chromeVersion > 61 &&
                window["visualViewport"] &&
                window["visualViewport"].width &&
                window["visualViewport"].height) {
                src.CustomScaleManager.update(Math.min(w, window["visualViewport"].width), Math.min(h, window["visualViewport"].height));
            } else {
                src.CustomScaleManager.update(w, h);
            }
        }
        handlePause() {
            if (this.game.state.getCurrentState() instanceof src.Level) {
                this.game.state.getCurrentState().gameStateManager.pauseLevel(false);
            }
        }
        handleResume() {
            if (this.game.state.getCurrentState() instanceof src.Level) {
                this.game.state.getCurrentState().gameStateManager.resumeLevel();
            }
        }
        initPlugins() {
            if (src.Settings.DEBUG_MODE) {
                src.App.instance.kineticScrolling = this.game.plugins.add(src.KineticScrollingPlugin);
                src.App.instance.kineticScrolling.configure({
                    kineticMovement: true,
                    timeConstantScroll: 325,
                    horizontalScroll: false,
                    verticalScroll: true,
                    horizontalWheel: false,
                    verticalWheel: true,
                    deltaWheel: 41
                });
                // this.game.plugins.add(Phaser.Plugin["AdvancedTiming"], {mode: "domText"});
            }
        }
    }
    src.Boot = Boot;
})(src || (src = {}));
var src;
(function(src) {
    class EditorSongList extends src.AutoResizeableState {
        constructor() {
            super(...arguments);
            this.songPanels = [];
        }
        create() {
            super.create();
            this.scrollableContainer = this.addChild(this.game.make.group(null));
            this.buttonsContainer = this.scrollableContainer.add(this.game.make.group(null));
            this.buttonBack = this.scrollableContainer.add(src.ButtonUtils.createSimpleButton(src.Settings.GAME_ATLAS, 'buttonHomeMainMenu', 0, 0, 1, this.backClicked, this));
            this.buttonCreateNew = this.scrollableContainer.add(src.ButtonUtils.createSimpleButton(src.Settings.GAME_ATLAS, 'buttonCreate', 0, 0, 1, this.createSongClicked, this));
            for (let i = 0; i < src.SongStorage.instance.songs.length; i++) {
                let song = src.SongStorage.instance.songs[i];
                let panel = new src.EditorSongPanel(this, song);
                this.songPanels.push(panel);
            }
            this.songPanels.sort((a, b) => {
                if (a.song.name > b.song.name)
                    return -1;
                if (a.song.name < b.song.name)
                    return 1;
                return 0;
            });
            for (let i = 0; i < src.SongStorage.instance.songs.length; i++) {
                this.buttonsContainer.add(this.songPanels[i]);
                this.songPanels[i].position.set(this.originalBounds.centerX, (src.SongStorage.instance.songs.length - 1 - i) * 120);
            }
            this.addListeners();
            this.restoreCameraPosition();
            this.resize(this.game.world.width, this.game.world.height);
        }
        backClicked() {
            this.game.state.start("MainMenu", true, false);
        }
        createSongClicked() {
            src.MidiUploader.triggerFileSelect();
        }
        shutdown() {
            EditorSongList.LAST_Y_POSITION = this.game.camera.position.y;
            this.songPanels.forEach(panel => {
                if (panel)
                    panel.destroy();
            });
            this.songPanels = [];
            this.buttonsContainer.destroy();
            this.scrollableContainer.destroy();
            this.buttonBack = null;
            this.buttonCreateNew = null;
            this.game.world.setBounds(0, 0, this.game.width, this.game.height);
            this.removeListeners();
        }
        /**
         * UPDATE
         */
        update() {}
        resize(width, height) {
            super.resize(width, height);
            if (this.isInitialized) {
                this.buttonBack.position.set(this.windowBounds.left + 70, this.windowBounds.top + 70);
                this.buttonCreateNew.position.set(this.windowBounds.right - 70, this.windowBounds.top + 70);
                this.buttonsContainer.y = this.windowBounds.top + 200;
                this.game.stage.updateTransform();
                this.game.world.setBounds(0, 0, this.game.width, Math.max((this.scrollableContainer.height + 60) * src.CustomScaleManager.SCALE_X, this.game.height));
                this.songPanels.forEach(button => button.resize());
            }
        }
        /**
         * LISTENERS
         */
        addListeners() {
            if (src.Settings.DEBUG_MODE) {
                src.App.instance.kineticScrolling.start();
            }
        }
        removeListeners() {
            if (src.Settings.DEBUG_MODE) {
                src.App.instance.kineticScrolling.stop();
            }
        }
        restoreCameraPosition() {
            setTimeout(() => this.game.camera.y = EditorSongList.LAST_Y_POSITION, 20);
        }
    }
    EditorSongList.LAST_Y_POSITION = 0;
    src.EditorSongList = EditorSongList;
})(src || (src = {}));
var src;
(function(src) {
    class Level extends src.AutoResizeableState {
        create() {
            super.create();
            let _this = this;

            function postStart() {
                _this.gameStateManager = _this.addChild(new src.GameStateManager(_this));
                _this.backgroundManager = _this.addChild(new src.GameplayBackgroundManager(_this));
                _this.touchInputManager = _this.addChild(new src.TouchInputManager(_this));
                _this.keyboardInputManager = _this.addChild(new src.KeyboardInputManager(_this));
                _this.melodyManager = _this.addChild(new src.MelodyManager(_this));
                _this.tileManager = _this.addChild(new src.TileManager(_this));
                _this.uiManager = _this.addChild(new src.UIManager(_this));
                _this.heartManager = _this.addChild(new src.HeartManager(_this));
                _this.songPresenter = _this.addChild(new src.SongPresenter(_this));
                _this.endlessModePresenter = _this.addChild(new src.EndlessModePresenter(_this));
                src.ScoreManager.instance.reset(_this.melodyManager.getMaxPossibleScore());
                if (src.Settings.DEBUG_MODE) {
                    _this.tileManager.startLevel();
                } else {
                    _this.songPresenter.show(src.SongUtils.getTitle(_this.melodyManager.getSongName()), src.SongUtils.getAuthor(_this.melodyManager.getSongName()), src.ScoreManager.instance.getSongTotalScores(_this.melodyManager.getSongName()), () => {
                        _this.tileManager.startLevel();
                    });
                }
                _this.resize(_this.game.scale.width, _this.game.scale.height);
            }

            if (src.Settings.ENABLE_API) {
                window.famobi_analytics.trackScreen(window.famobi_analytics.SCREEN_LEVEL);
                if (!src.SongPresenter.SKIP) {
                    window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_LEVELSTART, {
                        levelName: src.SongStorage.instance.currentSong.name
                    }).then(postStart);
                } else {
                    postStart();
                }
            } else {
                postStart();
            }

        }
        changeColor(color) {
            this.tileManager.tiles.forEach(tile => tile.changeColor(color));
            this.uiManager.changeColor(color);
        }
        resize(width, height) {
            super.resize(width, height);
            if (this.isInitialized) {
                this.backgroundManager.resize();
                this.tileManager.resize();
                this.uiManager.resize();
                this.heartManager.resize();
                this.songPresenter.resize();
                this.endlessModePresenter.resize();
            }
        }
        shutdown() {
            this.gameStateManager.destroy();
            this.gameStateManager = null;
            this.backgroundManager.destroy();
            this.backgroundManager = null;
            this.touchInputManager.destroy();
            this.touchInputManager = null;
            this.keyboardInputManager.destroy();
            this.keyboardInputManager = null;
            this.melodyManager.destroy();
            this.melodyManager = null;
            this.tileManager.destroy();
            this.tileManager = null;
            this.uiManager.destroy();
            this.uiManager = null;
            this.heartManager.destroy();
            this.heartManager = null;
            this.songPresenter.destroy();
            this.songPresenter = null;
            this.endlessModePresenter.destroy();
            this.endlessModePresenter = null;
        }
    }
    src.Level = Level;
})(src || (src = {}));
///<reference path="AutoResizeableState.ts"/>
var src;
(function(src) {
    class MainMenu extends src.AutoResizeableState {
        create() {
            super.create();
            this.buildContent();
            if (src.Settings.ENABLE_API) {
                window.famobi_analytics.trackScreen(window.famobi_analytics.SCREEN_HOME);
            }
            this.resize(this.game.scale.width, this.game.scale.height);
        }
        update() {}
        resize(w, h) {
            super.resize(w, h);
            if (this.isInitialized) {
                this.title.position.set(this.windowBounds.centerX, this.windowBounds.centerY - 10);
                this.buttonPlay.position.set(this.windowBounds.centerX, this.windowBounds.centerY + 125);
                this.buttonLevels.position.set(this.windowBounds.centerX - 130, this.windowBounds.centerY + 290);
                this.buttonSettings.position.set(this.windowBounds.centerX + 130, this.windowBounds.centerY + 290);
                if (this.buttonMore) {
                    this.buttonMore.position.set(this.windowBounds.centerX, (this.windowBounds.down - 20 + this.windowBounds.centerY + 460) / 2);
                }
            }
        }
        /**
         * BUILDER
         */
        buildContent() {
            this.buttonPlay = this.addChild(src.ButtonUtils.createTwoFramesButton(src.Settings.GAME_ATLAS, 'buttonPlay', this.originalBounds.centerX, this.originalBounds.centerY, 1.15, this.playClicked, this));
            this.buttonLevels = this.addChild(src.ButtonUtils.createTwoFramesButton(src.Settings.GAME_ATLAS, 'buttonLevelsMainMenu', this.originalBounds.centerX, this.originalBounds.centerY + 230, 1, this.levelsClicked, this));
            this.buttonSettings = this.addChild(src.ButtonUtils.createTwoFramesButton(src.Settings.GAME_ATLAS, 'buttonSettingsMainMenu', this.originalBounds.centerX, this.originalBounds.centerY + 230, 1, this.settingsClicked, this));
            if (src.Settings.ENABLE_API) {
                this.buttonMore = this.addChild(this.game.make.sprite(this.originalBounds.centerX, this.originalBounds.centerY + 300, 'more_games'));
                this.buttonMore.scale.set(0.37);
                this.buttonMore.anchor.set(0.5, 1);
                this.buttonMore.inputEnabled = true;
                this.buttonMore.input.useHandCursor = true;
                this.buttonMore.events.onInputDown.add(() => this.moreClicked());
            }
            this.title = this.addChild(new src.TitleEffect());

            window.famobi.gameReady();
        }
        /**
         * BUTTON HANDLERS
         */
        playClicked() {
            if (src.Tutorial.FIRST_TIME_SHOWN) {
                MainMenu.loadRandomUnlockedSong();
            } else {
                src.TransitionScreen.instance.changeState("Tutorial");
            }
        }
        moreClicked() {
            src.SoundController.instance.playClickSound();
            src.App.instance.navigateToSponsor();
        }
        levelsClicked() {
            if (src.Settings.DEBUG_MODE && this.game.input.keyboard.isDown(Phaser.Keyboard.SHIFT)) {
                src.TransitionScreen.instance.changeState("EditorSongList");
            } else {
                src.TransitionScreen.instance.changeState("SongsMenu");
            }
        }
        settingsClicked() {
            src.WindowManager.instance.showSettings(false);
        }
        static loadRandomUnlockedSong(exceptSong = null) {
            let song = src.SongStorage.instance.getRandomUnlockedSong(exceptSong);
            if (song) {
                src.SongStorage.instance.setCurrentSong(song);
                src.Settings.STARTED_FROM_EDITOR = false;
                src.TransitionScreen.instance.changeState("Level");
            }
        }
        static loadFirstUnlockedSong() {
            let song = src.SongStorage.instance.getFirstUnlockedSong();
            if (song) {
                src.SongStorage.instance.setCurrentSong(song);
                src.Settings.STARTED_FROM_EDITOR = false;
                src.TransitionScreen.instance.changeState("Level");
            }
        }
        static loadNextSong() {
            let currentSong = src.SongStorage.instance.currentSong;
            if (!currentSong) {
                src.TransitionScreen.instance.changeState("SongsMenu");
                return;
            }
            let nextSong = src.AlbumsManager.instance.getNextSong(currentSong);
            if (nextSong) {
                src.SongStorage.instance.setCurrentSong(nextSong);
                src.Settings.STARTED_FROM_EDITOR = false;
                src.TransitionScreen.instance.changeState("Level");
                return;
            } else {
                MainMenu.loadRandomUnlockedSong(currentSong);
            }
        }
        static loadCachedSong() {
            let song = src.Tutorial.cachedSong;
            if (song) {
                src.SongStorage.instance.setCurrentSong(song);
                src.Settings.STARTED_FROM_EDITOR = false;
                src.Tutorial.cachedSong = null;
                src.TransitionScreen.instance.changeState("Level");
            } else {
                MainMenu.loadFirstUnlockedSong();
            }
        }
    }
    src.MainMenu = MainMenu;
})(src || (src = {}));
var src;
(function(src) {
    class Preloader extends src.AutoResizeableState {
        constructor() {
            super(...arguments);
            this.percentage = 0.0;
        }
        preload() {
            super.create();
            this.preloadEffect = this.addChild(new src.PreloadEffect());
            this.preloadEffect.position.set(this.originalBounds.centerX - 40, this.originalBounds.centerY - 25);
            this.versionText = this.addChild(src.TextUtils.getText("v" + src.Settings.GAME_VERSION, this.windowBounds.left + 20, this.windowBounds.down - 12, 15, "#ffffff"));
            this.preloadText = this.addChild(src.TextUtils.getText("0%", this.originalBounds.centerX, this.originalBounds.centerY + 20, 48, "#ffffff"));
            this.preloadText.anchor.set(0.5);
            this.game.load.onFileComplete.add(this.onFileComplete, this);
            this.game.load.onLoadComplete.add(this.onLoadingComplete, this);
            for (let soundName of src.SoundController.instance.getSoundNames()) {
                this.game.load.audio(soundName, ['sound/mp3/' + soundName + '.mp3', 'sound/m4a/' + soundName + '.m4a', 'sound/ogg/' + soundName + '.ogg']);
            }
            this.game.load.text('melodies', 'midi/melodies.json');
            this.game.load.text('albums', 'albums/albums.json');
            if (src.Settings.ENABLE_API) {
                this.game.load.image('more_games', window.famobi.getBrandingButtonImage());
            }
            this.game.load.bitmapFont(src.Settings.ROBOTO_BITMAP, 'img/fonts/' + src.Settings.ROBOTO_BITMAP + '.png', 'img/fonts/' + src.Settings.ROBOTO_BITMAP + '.xml');
            this.game.load.atlasJSONArray(src.Settings.WINDOWS_ATLAS, 'img/' + src.Settings.WINDOWS_ATLAS + '.png', 'img/' + src.Settings.WINDOWS_ATLAS + '.json');
            this.game.load.atlasJSONArray(src.Settings.GAME_ATLAS, 'img/' + src.Settings.GAME_ATLAS + '.png', 'img/' + src.Settings.GAME_ATLAS + '.json');
            if (this.game.device.desktop) {} else {}
            this.resize(this.game.scale.width, this.game.scale.height);
        }
        create() {
            super.create();
        }
        resize(width, height) {
            super.resize(width, height);
            if (this.isInitialized) {
                this.preloadEffect.position.set(this.windowBounds.centerX - 40, this.windowBounds.centerY - 25);
                this.preloadText.position.set(this.windowBounds.centerX, this.windowBounds.centerY + 20);
                this.versionText.position.set(this.windowBounds.left + 20, this.windowBounds.down - 12);
            }
        }
        onFileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
            this.percentage = progress / 100 * 0.8;
            this.preloadText.setText("" + ~~(this.percentage * 100) + "%");
        }
        onLoadingComplete() {
            src.TransitionScreen.instance.init();
            src.MidiUploader.init();
            src.WindowManager.instance.init();
            src.SongStorage.instance.load();
            src.LocalStorageController.instance.loadSave();
            src.AlbumsManager.instance;
            if (src.SoundController.instance.isDecodingSupported()) {
                this.game.sound.setDecodedCallback(src.SoundController.instance.getSoundNames(), this.onSoundsDecoded, this);
            } else {
                this.onSoundsDecoded();
            }
            src.SoundController.instance.init();
            src.BackgroundManager.instance.buildParticles();
        }
        onSoundsDecoded() {
            window.famobi.log('loading instruments...');
            src.MidiLoader.load((progress) => this.onSoundFontProgress(progress), () => this.onSoundFontLoaded());
        }
        onSoundFontProgress(progress) {
            this.percentage = 0.8 + progress * 0.2;
            this.preloadText.setText('' + ~~(this.percentage * 100) + '%');
        }
        onSoundFontLoaded() {
            this.preloadText.setText('100%');
            src.TransitionScreen.instance.changeState("MainMenu");
        }
    }
    src.Preloader = Preloader;
})(src || (src = {}));
var src;
(function(src) {
    class SongsMenu extends src.AutoResizeableState {
        create() {
            super.create();
            this.buildContent();
            if (src.Settings.ENABLE_API) {
                window.famobi_analytics.trackScreen(window.famobi_analytics.SCREEN_LEVELSELECT);
            }
            this.resize(this.game.scale.width, this.game.scale.height);
        }
        resize(w, h) {
            super.resize(w, h);
            if (this.isInitialized) {
                this.buttonsContainer.position.set(this.windowBounds.right, this.windowBounds.top);
                this.buttonBackContainer.position.set(-50, 60);
                if (src.Settings.DEBUG_MODE) {
                    this.versionIdText.position.set(this.windowBounds.left + 10, this.windowBounds.top + 75);
                    this.buttonCreateAlbum.position.set(-150, 50);
                    this.buttonDownloadAlbums.position.set(-250, 50);
                }
                this.buttonsContainer.scale.set(!this.game.device.desktop && this.game.scale.isLandscape ? Math.min(this.game.scale.width / this.game.scale.height, 2) : 1);
                this.albumsManager.resize(this.windowBounds);
            }
        }
        changeColor(color) {
            this.buttonBackPlate.frameName = 'buttonHomeLevelsMenu000' + color;
        }
        /**
         * PRIVATE
         */
        buildContent() {
            if (!this.albumsManager) {
                this.albumsManager = src.AlbumsManager.instance;
            }
            this.albumsManager.addToSongsMenu(this);
            this.buttonsContainer = this.addChild(this.game.make.group(null));
            this.buttonBackContainer = this.buttonsContainer.add(this.game.make.group(null));
            this.buttonBackContainer.position.set(0, 60);
            this.buttonBackPlate = this.buttonBackContainer.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'buttonHomeLevelsMenu0000'));
            this.buttonBackPlate.anchor.set(0.5, 0.5);
            this.buttonBackPlate.scale.set(0.75);
            this.buttonBack = this.buttonBackContainer.add(src.ButtonUtils.createTwoFramesButton(src.Settings.GAME_ATLAS, 'buttonHomeMainMenu', 0, 4, 0.68, this.backClicked, this));
            this.buttonBack.anchor.set(0.5, 0.5);
            this.changeColor(src.BackgroundManager.instance.currentBackground);
            if (src.Settings.DEBUG_MODE) {
                this.versionIdText = this.addChild(src.TextUtils.getBitmapText(src.Settings.VERSION_ID, 320, 100, 32, 0xFFFFFF, 0));
                this.buttonCreateAlbum = this.buttonsContainer.add(src.ButtonUtils.createSimpleButton(src.Settings.GAME_ATLAS, 'buttonCreate', 0, 0, 0.75, this.createAlbumClicked, this));
                this.buttonDownloadAlbums = this.buttonsContainer.add(src.ButtonUtils.createSimpleButton(src.Settings.GAME_ATLAS, 'buttonNextWhite', 0, 0, 0.65, this.getAlbumsClicked, this));
            }
        }
        /**
         * HANDLERS
         */
        backClicked() {
            src.TransitionScreen.instance.changeState("MainMenu");
        }
        createAlbumClicked() {
            let albumName = prompt("Enter new album's name", '');
            if (albumName && albumName.length > 0) {
                this.albumsManager.addAlbum(albumName, '', [], 0);
            }
            this.game.canvas.focus();
        }
        getAlbumsClicked() {
            this.albumsManager.saveAlbumsAsJSON();
        }
    }
    src.SongsMenu = SongsMenu;
})(src || (src = {}));
var src;
(function(src) {
    class Tutorial extends src.AutoResizeableState {
        create() {
            super.create();
            this.inputManager = this.addChild(new src.TutorialInputManager(this));
            this.backgroundManager = this.addChild(new src.GameplayBackgroundManager(this));
            this.tileManager = this.addChild(new src.TutorialTileManager(this));
            this.presenter = this.addChild(new src.TutorialPresenter(this));
            this.uiManager = this.addChild(new src.TutorialUIManager(this));
            if (src.Settings.ENABLE_API) {
                window.famobi_analytics.trackScreen(window.famobi_analytics.SCREEN_TUTORIAL);
            }
            this.resize(this.game.scale.width, this.game.scale.height);
        }
        resize(width, height) {
            super.resize(width, height);
            if (this.isInitialized) {
                this.backgroundManager.resize();
                this.tileManager.resize();
                this.uiManager.resize();
                this.presenter.resize();
            }
        }
        shutdown() {
            this.inputManager.destroy();
            this.inputManager = null;
            this.backgroundManager.destroy();
            this.backgroundManager = null;
            this.tileManager.destroy();
            this.tileManager = null;
            this.uiManager.destroy();
            this.uiManager = null;
            this.presenter.destroy();
            this.presenter = null;
        }
    }
    Tutorial.cachedSong = null;
    Tutorial.FIRST_TIME_SHOWN = false;
    src.Tutorial = Tutorial;
})(src || (src = {}));
var src;
(function(src) {
    class TransitionScreen extends Phaser.Group {
        constructor() {
            super(src.App.instance, null);
            this.isInitialized = false;
        }
        static get instance() {
            return TransitionScreen._instance ? TransitionScreen._instance : TransitionScreen._instance = new TransitionScreen();
        }
        buildChildren() {
            this.background = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'transitionSquare0000'));
            this.background.anchor.set(0.5);
            this.background.alpha = 0.01;
            this.background.inputEnabled = true;
            this.background.events.onInputDown.add(() => window.famobi.log('Transition Screen: input locked'));
        }
        init() {
            this.isInitialized = true;
            this.buildChildren();
        }
        resize() {
            if (this.isInitialized) {
                this.position.set(this.game.world.centerX, this.game.world.centerY);
                this.background.width = this.game.scale.width + 50;
                this.background.height = this.game.scale.height + 50;
            }
        }
        changeState(newState, callback = null) {
            this.targetStateName = newState;
            this.callback = callback;
            this.show();
        }
        blink(callback = null) {
            this.targetStateName = null;
            this.callback = callback;
            this.game.stage.addChild(this);
            this.visible = true;
            this.resize();
            this.game.add.tween(this.background)
                .to({
                    alpha: 1
                }, 230, Phaser.Easing.Quadratic.Out, true)
                .onComplete.add(() => {
                    if (callback) {
                        callback();
                    }
                    if (this.parent && this.parent.getChildIndex(this) > -1) {
                        this.parent.setChildIndex(this, this.parent.children.length - 1);
                    } else {
                        this.game.stage.addChild(this);
                    }
                    this.game.add.tween(this.background)
                        .to({
                            alpha: 0
                        }, 140, Phaser.Easing.Linear.None, true)
                        .onComplete.add(this.onTransitionFinished, this);
                });
        }
        show() {
            this.game.stage.addChild(this);
            this.visible = true;
            this.resize();
            this.game.add.tween(this.background)
                .to({
                    alpha: 1
                }, 100, Phaser.Easing.Quadratic.Out, true)
                .onComplete.add(this.close, this);
        }
        close() {
            if (this.targetStateName) {
                this.game.state.start(this.targetStateName, true, false);
                src.WindowManager.instance.hideAll();
            }
            if (this.callback) {
                this.callback();
                this.callback = null;
            }
            this.proceedClosing();
        }
        proceedClosing() {
            if (this.parent && this.parent.getChildIndex(this) > -1) {
                this.parent.setChildIndex(this, this.parent.children.length - 1);
            } else {
                this.game.stage.addChild(this);
            }
            setTimeout(() => {
                this.game.add.tween(this.background)
                    .to({
                        alpha: 0
                    }, 120, Phaser.Easing.Linear.None, true)
                    .onComplete.add(this.onTransitionFinished, this);
            }, 20);
            setTimeout(() => {
                this.onTransitionFinished();
            }, 400);
        }
        onTransitionFinished() {
            this.hide();
        }
        hide() {
            if (this.parent && this.parent.getChildIndex(this) > -1) {
                this.parent.removeChild(this);
            }
            this.visible = false;
        }
    }
    TransitionScreen._instance = null;
    src.TransitionScreen = TransitionScreen;
})(src || (src = {}));
var src;
(function(src) {
    class HoldAnimation extends Phaser.Group {
        constructor(tile, x, y) {
            super(src.App.instance, null);
            this.startY = 0;
            this.tile = tile;
            this.startY = y;
            this.position.set(x, y);
            this.scale.set(1.5);
            this.buildChildren();
        }
        buildChildren() {
            this.alpha = 0;
            this.hand = this.add(this.game.make.sprite(20, -40, src.Settings.GAME_ATLAS, 'tapAnim0000'));
            this.hand.anchor.set(0);
            this.downAnimation = this.hand.animations.add('tapAnimation', Phaser.Animation.generateFrameNames('tapAnim', 0, 8, '', 4), 30, true);
            this.upAnimation = this.hand.animations.add('tapAnimation', Phaser.Animation.generateFrameNames('tapAnim', 9, 15, '', 4), 30, true);
        }
        start() {
            this.startTweening();
        }
        startTweening() {
            if (this.downAnimation) {
                if (this.downAnimation.isPlaying) {
                    this.downAnimation.stop();
                }
                this.downAnimation.onComplete.removeAll();
            }
            if (this.upAnimation) {
                if (this.upAnimation.isPlaying) {
                    this.upAnimation.stop();
                }
                this.upAnimation.onComplete.removeAll();
            }
            this.game.tweens.removeFrom(this);
            this.game.tweens.removeFrom(this, true);
            this.y = this.startY;
            this.game.add.tween(this)
                .to({
                    alpha: 1
                }, 600, Phaser.Easing.Sinusoidal.Out)
                .start()
                .onComplete.add(() => {
                    if (this.downAnimation) {
                        this.downAnimation.play(60, false, false);
                        this.downAnimation.onComplete.add(this.holdAndUp, this);
                    }
                });
        }
        holdAndUp() {
            this.game.add.tween(this)
                .to({
                    y: this.startY - 40
                }, 700, Phaser.Easing.Linear.None, true)
                .onComplete.add(this.playUpAnimation, this);
        }
        playUpAnimation() {
            if (this.upAnimation) {
                this.upAnimation.play(60, false, false);
                this.upAnimation.onComplete.add(() => {
                    this.game.add.tween(this)
                        .to({
                            alpha: 0
                        }, 120, Phaser.Easing.Linear.None, true)
                        .onComplete.add(this.startTweening, this);
                });
            }
        }
        stop() {
            this.game.add.tween(this)
                .to({
                    alpha: 0
                }, 100, Phaser.Easing.Linear.None, true);
        }
        destroy() {
            super.destroy();
            this.tile = null;
            this.hand = null;
            this.downAnimation.destroy();
            this.downAnimation = null;
            this.upAnimation.destroy();
            this.upAnimation = null;
        }
    }
    src.HoldAnimation = HoldAnimation;
})(src || (src = {}));
var src;
(function(src) {
    class TapAnimation extends Phaser.Group {
        constructor(x, y) {
            super(src.App.instance, null);
            this.position.set(x, y);
            this.scale.set(1.5);
            this.buildChildren();
        }
        buildChildren() {
            this.alpha = 0;
            this.hand = this.add(this.game.make.sprite(-10, -40, src.Settings.GAME_ATLAS, 'tapAnim0000'));
            this.hand.anchor.set(0);
            const frameNames = Phaser.Animation.generateFrameNames('tapAnim', 0, 15, '', 4);
            for (let i = 0; i < 20; i++) {
                frameNames.push('tapAnim0015');
            }
            this.tapAnimation = this.hand.animations.add('tapAnimation', frameNames, 60, true);
        }
        start() {
            this.game.tweens.removeFrom(this);
            this.game.tweens.removeFrom(this, true);
            this.alpha = 0;
            this.tapAnimation.play(60, true);
            this.game.add.tween(this)
                .to({
                    alpha: 1
                }, 300, Phaser.Easing.Linear.None, true);
        }
        stop() {
            this.game.add.tween(this)
                .to({
                    alpha: 0
                }, 100, Phaser.Easing.Linear.None, true);
        }
        destroy() {
            super.destroy();
            this.hand = null;
            this.tapAnimation.destroy();
            this.tapAnimation = null;
        }
    }
    src.TapAnimation = TapAnimation;
})(src || (src = {}));
var src;
(function(src) {
    class TutorialInputManager extends Phaser.Group {
        constructor(tutorial) {
            super(tutorial.game);
            this.tutorial = tutorial;
            if (this.game.device.desktop) {
                this.createHandlers();
            }
        }
        /**
         * HANDLERS
         */
        createHandlers() {
            this.pointers = [
                new src.KeyboardPointer(src.TilePosition.FIRST),
                new src.KeyboardPointer(src.TilePosition.SECOND),
                new src.KeyboardPointer(src.TilePosition.THIRD),
                new src.KeyboardPointer(src.TilePosition.FOURTH)
            ];
            let keyOne = src.App.instance.input.keyboard.addKey(Phaser.Keyboard.ONE);
            keyOne.onDown.add(() => this.dispatchLineInputDown(src.TilePosition.FIRST));
            keyOne.onUp.add(() => this.dispatchLineInputUp(src.TilePosition.FIRST));
            let keyTwo = src.App.instance.input.keyboard.addKey(Phaser.Keyboard.TWO);
            keyTwo.onDown.add(() => this.dispatchLineInputDown(src.TilePosition.SECOND));
            keyTwo.onUp.add(() => this.dispatchLineInputUp(src.TilePosition.SECOND));
            let keyThree = src.App.instance.input.keyboard.addKey(Phaser.Keyboard.THREE);
            keyThree.onDown.add(() => this.dispatchLineInputDown(src.TilePosition.THIRD));
            keyThree.onUp.add(() => this.dispatchLineInputUp(src.TilePosition.THIRD));
            let keyFour = src.App.instance.input.keyboard.addKey(Phaser.Keyboard.FOUR);
            keyFour.onDown.add(() => this.dispatchLineInputDown(src.TilePosition.FOURTH));
            keyFour.onUp.add(() => this.dispatchLineInputUp(src.TilePosition.FOURTH));
            let keyF = src.App.instance.input.keyboard.addKey(Phaser.Keyboard.F);
            keyF.onDown.add(() => this.dispatchLineInputDown(src.TilePosition.FIRST));
            keyF.onUp.add(() => this.dispatchLineInputUp(src.TilePosition.FIRST));
            let keyG = src.App.instance.input.keyboard.addKey(Phaser.Keyboard.G);
            keyG.onDown.add(() => this.dispatchLineInputDown(src.TilePosition.SECOND));
            keyG.onUp.add(() => this.dispatchLineInputUp(src.TilePosition.SECOND));
            let keyH = src.App.instance.input.keyboard.addKey(Phaser.Keyboard.H);
            keyH.onDown.add(() => this.dispatchLineInputDown(src.TilePosition.THIRD));
            keyH.onUp.add(() => this.dispatchLineInputUp(src.TilePosition.THIRD));
            let keyJ = src.App.instance.input.keyboard.addKey(Phaser.Keyboard.J);
            keyJ.onDown.add(() => this.dispatchLineInputDown(src.TilePosition.FOURTH));
            keyJ.onUp.add(() => this.dispatchLineInputUp(src.TilePosition.FOURTH));
        }
        destroyHandlers() {
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.ONE);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.TWO);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.THREE);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.FOUR);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.F);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.G);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.H);
            src.App.instance.input.keyboard.removeKeyCapture(Phaser.Keyboard.J);
        }
        /**
         * PRIVATE METHODS
         */
        dispatchLineInputDown(pointerPosition) {
            this.tutorial.uiManager.keyHelpers.animateHit(pointerPosition);
            let activeTile = this.tutorial.tileManager.getActiveTile();
            let tileUnderPointer = activeTile && activeTile.tilePosition == pointerPosition ? activeTile : null;
            if (tileUnderPointer) {
                this.pointers[pointerPosition].handleDown(tileUnderPointer.x, tileUnderPointer.y - 10);
                tileUnderPointer.handleInputDown(null, this.pointers[pointerPosition]);
            }
        }
        dispatchLineInputUp(pointerPosition) {
            this.pointers[pointerPosition].handleUp();
            let activeTile = this.tutorial.tileManager.getActiveTile();
            let tileUnderPointer = activeTile && activeTile.tilePosition == pointerPosition ? activeTile : null;
            if (tileUnderPointer) {
                tileUnderPointer.handleInputUp(null, this.pointers[pointerPosition]);
            }
        }
        /**
         * UPDATE
         */
        /**
         * DESTROY METHOD
         */
        destroy() {
            super.destroy();
            this.destroyHandlers();
            this.pointers = null;
            this.tutorial = null;
        }
    }
    src.TutorialInputManager = TutorialInputManager;
})(src || (src = {}));
var src;
(function(src) {
    class TutorialKeyHelpers extends Phaser.Group {
        constructor(tutorial) {
            super(tutorial.game, null);
            this.tutorial = tutorial;
            this.buildContent();
        }
        buildContent() {
            this.keys = [{
                    key: this.add(src.TextUtils.getBitmapText("F", src.Settings.TILE_WIDTH * -1.5, -25, 52)),
                    state: false,
                    timer: 0
                },
                {
                    key: this.add(src.TextUtils.getBitmapText("G", src.Settings.TILE_WIDTH * -0.5, -25, 52)),
                    state: false,
                    timer: 0
                },
                {
                    key: this.add(src.TextUtils.getBitmapText("H", src.Settings.TILE_WIDTH * 0.5, -25, 52)),
                    state: false,
                    timer: 0
                },
                {
                    key: this.add(src.TextUtils.getBitmapText("J", src.Settings.TILE_WIDTH * 1.5, -25, 52)),
                    state: false,
                    timer: 0
                }
            ];
            this.keys.forEach(obj => {
                obj.key.anchor.set(0.5, 0.5);
                obj.key.scale.set(1);
            });
        }
        startBlinking(position) {
            if (this.keys[position]) {
                this.keys[position].state = true;
                this.keys[position].timer = 0;
            }
        }
        stopBlinking(position) {
            if (this.keys[position]) {
                this.keys[position].state = false;
                this.keys[position].timer = 0;
                this.keys[position].tint = 0xFFFFFF;
            }
        }
        update() {
            super.update();
            this.keys.forEach(obj => {
                if (obj.state) {
                    obj.timer -= 1;
                    obj.timer = obj.timer < 0 ? 30 : obj.timer;
                    this.setKeyStatus(this.keys.indexOf(obj), obj.timer > 15);
                } else {
                    obj.key.tint = 0xFFFFFF;
                }
            });
        }
        setKeyStatus(id, status) {
            if (this.keys[id]) {
                this.keys[id].key.tint = status ? 0x000000 : 0xFFFFFF;
            }
        }
        animateHit(id) {
            if (this.keys[id]) {
                this.game.add.tween(this.keys[id].key.scale)
                    .to({
                        x: 1.7,
                        y: 1.7
                    }, 90, Phaser.Easing.Linear.None, true, 0, 0, true);
            }
        }
        destroy() {
            super.destroy();
            this.tutorial = null;
        }
    }
    src.TutorialKeyHelpers = TutorialKeyHelpers;
})(src || (src = {}));
var src;
(function(src) {
    class TutorialTile extends Phaser.Group {
        constructor(tutorial, xPosition, y, notes, showAnimation) {
            super(tutorial.game, null);
            /* properties */
            this.numSubTiles = 1;
            this.isPressed = false;
            this.wasReleased = false;
            this.showAnimation = true;
            /* input */
            this.isPointerDown = false;
            this.tutorial = tutorial;
            this.tilePosition = xPosition;
            this.notes = notes;
            this.showAnimation = showAnimation;
            this.position.set((xPosition + 0.5) * src.Settings.TILE_WIDTH, y);
        }
        /**
         * DESTROY
         */
        destroy() {
            super.destroy();
            this.tutorial = null;
            this.notes = null;
        }
    }
    src.TutorialTile = TutorialTile;
})(src || (src = {}));
///<reference path="TutorialTile.ts"/>
var src;
(function(src) {
    class TutorialLongTile extends src.TutorialTile {
        constructor(tutorial, xPosition, y, notes, showHandAnimation = true) {
            super(tutorial, xPosition, y, notes, showHandAnimation);
            /* sprites */
            this.firstTileFrameName = "tile000";
            this.nextTilesFrameName = "longTilePart000";
            this.tailSpriteFrameName = "tileTail000";
            this.waveHeadFrameName = "waveFront000";
            this.waveTailFrameName = "waveTail000";
            this.blastPositions = [];
            this.originalWaveHeadHeight = 0;
            /* properties */
            this.playedPercentage = 0;
            this.playingTime = 0;
            this.playingStartY = 0;
            this.playableLength = 0;
            this.startPointPosition = -src.Settings.TILE_HEIGHT * 0.54;
            this.endingAnimationStarted = false;
            this.calculateParamethers();
            this.buildContent();
            this.addListeners();
        }
        addListeners() {
            this.startTile.inputEnabled = true;
            this.startTile.events.onInputDown.add(this.handleInputDown, this);
            this.startTile.events.onInputUp.add(this.handleInputUp, this);
        }
        removeListeners() {
            this.startTile.events.onInputDown.removeAll();
            this.startTile.events.onInputUp.removeAll();
        }
        /**
         * SOUND
         */
        calculateParamethers() {
            this.numSubTiles = this.notes.reduce((max, note) => Math.max(note.time + note.duration, max), 0);
            this.tileHeight = this.numSubTiles * src.Settings.TILE_HEIGHT;
            this.notes.forEach(note => {
                this.blastPositions.push(note.time / this.numSubTiles);
            });
        }
        buildContent() {
            this.tilesContainer = this.add(this.game.make.group(null));
            this.startTile = this.tilesContainer.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, this.firstTileFrameName + src.BackgroundManager.instance.currentBackground));
            this.startTile.anchor.set(0.5, 1);
            this.endTile = this.tilesContainer.add(this.game.make.sprite(0, -src.Settings.TILE_HEIGHT + 0.5 * (this.numSubTiles), src.Settings.GAME_ATLAS, this.nextTilesFrameName + src.BackgroundManager.instance.currentBackground));
            this.endTile.anchor.set(0.5, 1);
            this.endTile.height = this.tileHeight - src.Settings.TILE_HEIGHT + 0.5 * (this.numSubTiles);
            this.tilesTail = this.add(this.game.make.sprite(0, -this.tileHeight, src.Settings.GAME_ATLAS, this.tailSpriteFrameName + src.BackgroundManager.instance.currentBackground));
            this.tilesTail.anchor.set(0.5, 1);
            this.line = this.tilesContainer.add(this.game.make.sprite(0, this.startPointPosition, src.Settings.GAME_ATLAS, 'longTileLine0000'));
            this.line.anchor.set(0.5, 1);
            this.line.height = this.tileHeight + this.startPointPosition;
            this.startPoint = this.tilesContainer.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'longTileStartPoint' + '0000'));
            this.startPoint.anchor.set(0.5, 1);
            this.waveTail = this.add(this.game.make.sprite(0, -1, src.Settings.GAME_ATLAS, this.waveTailFrameName + src.BackgroundManager.instance.currentBackground));
            this.waveTail.anchor.set(0.5, 1);
            this.waveTail.visible = false;
            this.waveHead = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, this.waveHeadFrameName + src.BackgroundManager.instance.currentBackground));
            this.waveHead.anchor.set(0.5, 0);
            this.waveHead.visible = false;
            this.originalWaveHeadHeight = this.waveHead.height;
            this.blastEffect = this.add(new src.BlastEffect());
            this.finishTileEffect = this.add(this.game.make.sprite(2, -this.tileHeight - 55, src.Settings.GAME_ATLAS, 'longTileFinishEffect' + '0000'));
            this.finishTileEffect.anchor.set(0.5, 0);
            this.finishTileEffect.visible = false;
            this.tileTransition = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'tileTransition' + '0000'));
            this.tileTransition.anchor.set(0.5, 1);
            this.tileTransition.height = this.tileHeight + 5;
            this.tileTransition.visible = false;
            if (this.showAnimation) {
                this.holdAnimation = this.add(new src.HoldAnimation(this, 0, -80));
            }
        }
        /**
         * INPUT HANDLERS
         */
        handleInputDown(sprite, pointer) {
            if (this.showAnimation && this.holdAnimation && this.holdAnimation.alpha == 0) {
                return;
            }
            if (this.visible && !this.isPressed) {
                let touchPoint = pointer instanceof src.KeyboardPointer ? new Phaser.Point(pointer.x, pointer.y) : this.tutorial.translateInputPosition(pointer);
                this.isPressed = true;
                this.pointerID = pointer.id;
                this.startPoint.visible = false;
                this.line.height = this.tileHeight - 2;
                this.line.y = -1;
                this.waveHead.visible = true;
                this.waveTail.visible = true;
                this.isPointerDown = true;
                this.pointerDownPosition = touchPoint.clone();
                this.pointerDownLocalPosition = new Phaser.Point(this.pointerDownPosition.x - this.x, this.pointerDownPosition.y - this.y);
                this.compressNotes();
                this.updateFX();
                this.playTile();
                if (this.tutorial.windowBounds.down - this.tutorial.translateInputY(pointer) <= src.Settings.TILE_HEIGHT * (1 + src.Settings.TILE_TAP_BONUS_DISTANCE_FACTOR)) {
                    this.tutorial.backgroundManager.blinkPerfectLine();
                }
            }
        }
        handleInputUp(sprite, pointer) {
            if (this.visible && pointer.id == this.pointerID) {
                this.finishPlaying();
            }
        }
        getScreenX() {
            return this.x + this.parent.x;
        }
        getScreenY() {
            return this.y + this.parent.y;
        }
        /**
         * UPDATE
         */
        playTile() {
            if (!this.showAnimation) {
                let tileScore = 1;
                tileScore = this.pointerDownPosition.y > this.tutorial.windowBounds.down - 2 * src.Settings.TILE_HEIGHT * (1 + src.Settings.TILE_TAP_BONUS_DISTANCE_FACTOR) ? 2 : tileScore;
                tileScore = this.pointerDownPosition.y > this.tutorial.windowBounds.down - src.Settings.TILE_HEIGHT * (1 + src.Settings.TILE_TAP_BONUS_DISTANCE_FACTOR) ? 3 : tileScore;
                this.tutorial.uiManager.showSign(tileScore);
            } else {
                this.tutorial.uiManager.stopBlinking(this.tilePosition);
            }
        }
        restart(y) {
            this.y = y;
            if (this.showAnimation) {
                this.holdAnimation.visible = false;
                this.tutorial.uiManager.stopBlinking(this.tilePosition);
            }
        }
        update() {
            super.update();
            if (this.showAnimation) {
                if (this.y < this.tutorial.tileManager.breakY) {
                    this.holdAnimation.visible = false;
                } else {
                    if (!this.holdAnimation.visible) {
                        this.holdAnimation.visible = true;
                        this.holdAnimation.start();
                        this.tutorial.uiManager.startBlinking(this.tilePosition);
                    }
                }
            }
        }
        postUpdate() {
            super.postUpdate();
            if (this.isPointerDown) {
                this.proceedPlaying();
                this.updateFX();
            }
        }
        proceedPlaying() {
            let initialTileY = this.pointerDownPosition.y - this.pointerDownLocalPosition.y;
            let tileDelta = this.y - initialTileY;
            this.playedPercentage = tileDelta / this.playableLength;
            for (let i = this.notes.length - 1; i > -1; i--) {
                let note = this.notes[i];
                if (note.time / this.numSubTiles <= this.playedPercentage) {
                    src.NotePlayer.playRawNote(note.midi, note.duration, 127, 0);
                    this.notes.splice(i, 1);
                }
            }
            for (let i = this.blastPositions.length - 1; i > -1; i--) {
                if (this.blastPositions[i] <= this.playedPercentage) {
                    this.blastEffect.blast();
                    this.blastPositions.splice(0, i + 1);
                    break;
                }
            }
        }
        updateFX() {
            let initialTileY = this.pointerDownPosition.y - this.pointerDownLocalPosition.y;
            let currentActiveY = this.pointerDownLocalPosition.y - (this.y - initialTileY);
            if (!this.endingAnimationStarted && currentActiveY - src.Settings.LONG_TILE_ACTIVATOR_DISTANCE < -this.tileHeight) {
                this.endingAnimationStarted = true;
                this.playPerfectFinishAnimation();
            }
            this.waveTail.height = Phaser.Math.clamp((-currentActiveY - 7) - (Math.floor(currentActiveY / 560)), 0, this.tileHeight - 2);
            this.waveHead.y = Phaser.Math.clamp(currentActiveY - src.Settings.LONG_TILE_ACTIVATOR_HEIGHT, -this.tileHeight, -src.Settings.LONG_TILE_ACTIVATOR_HEIGHT);
            this.waveHead.height = Math.min(this.waveHead.height, this.tileHeight + currentActiveY + 7);
            this.blastEffect.position.set(1, this.waveHead.y + 53);
        }
        playPerfectFinishAnimation() {
            this.finishTileEffect.visible = true;
            this.game.add.tween(this.finishTileEffect)
                .to({
                    alpha: 0
                }, 200, Phaser.Easing.Linear.None, true);
            this.waveHead.visible = false;
            this.waveTail.visible = false;
            this.tileTransition.alpha = 0.85;
            this.tileTransition.visible = true;
            this.game.add.tween(this.tileTransition)
                .to({
                    alpha: 0
                }, 200, Phaser.Easing.Linear.None, true);
            this.finishPlaying();
        }
        playHeadDisappearAnimation() {
            this.game.add.tween(this.waveHead)
                .to({
                    alpha: 0
                }, 150, Phaser.Easing.Linear.None, true)
                .onComplete.add(() => this.waveHead.visible = false);
        }
        finishPlaying() {
            if (this.isPressed && !this.wasReleased) {
                this.wasReleased = true;
                this.isPointerDown = false;
                this.playHeadDisappearAnimation();
                this.endTile.y = -src.Settings.TILE_HEIGHT + 0.25 * this.numSubTiles;
                this.game.add.tween(this.tilesTail)
                    .to({
                        alpha: 0
                    }, 150, Phaser.Easing.Linear.None, true)
                    .onComplete.add(() => this.tilesTail.visible = false);
                this.game.add.tween(this.waveTail)
                    .to({
                        alpha: 0
                    }, 150, Phaser.Easing.Linear.None, true);
                this.game.add.tween(this.tilesContainer)
                    .to({
                        alpha: 0.25
                    }, 150, Phaser.Easing.Linear.None, true);
                this.game.add.tween(this.blastEffect)
                    .to({
                        alpha: 0
                    }, 70, Phaser.Easing.Linear.None, true);
            }
        }
        compressNotes() {
            let tileTime = this.numSubTiles;
            let startTime = (Math.abs(this.pointerDownLocalPosition.y) + src.Settings.LONG_TILE_ACTIVATOR_DISTANCE) / src.Settings.TILE_HEIGHT;
            this.playingTime = tileTime - startTime;
            this.playingStartY = this.pointerDownLocalPosition.y - src.Settings.LONG_TILE_ACTIVATOR_DISTANCE;
            this.playableLength = this.tileHeight - Math.abs(this.playingStartY) * 1.03;
        }
        /**
         * DESTROY
         */
        destroy() {
            this.removeListeners();
            super.destroy();
            this.endTile = null;
            this.inputArea = null;
        }
    }
    src.TutorialLongTile = TutorialLongTile;
})(src || (src = {}));
var src;
(function(src) {
    class TutorialPresenter extends Phaser.Group {
        constructor(tutorial) {
            super(src.App.instance, null);
            this.isShown = false;
            this.tutorial = tutorial;
            this.buildChildren();
        }
        buildChildren() {
            this.backgroundRed = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'tileTransition0000'));
            this.backgroundRed.anchor.set(0.5, 0);
            this.backgroundRed.tint = 0xFF0000;
            this.backgroundRed.alpha = 0;
            this.backgroundYellow = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'tileTransition0000'));
            this.backgroundYellow.anchor.set(0.5, 1);
            this.backgroundYellow.tint = 0xFFCC00;
            this.backgroundYellow.alpha = 0;
            this.backgroundGreen = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'tileTransition0000'));
            this.backgroundGreen.anchor.set(0.5, 1);
            this.backgroundGreen.tint = 0x00FF00;
            this.backgroundGreen.alpha = 0;
            this.iconGood = this.add(this.game.make.sprite(0, 50, src.Settings.GAME_ATLAS, 'iconGood0000'));
            this.iconGood.anchor.set(0.5, 0.5);
            this.iconGood.alpha = 0;
            this.iconNormal = this.add(this.game.make.sprite(0, 50, src.Settings.GAME_ATLAS, 'iconNormal0000'));
            this.iconNormal.anchor.set(0.5, 0.5);
            this.iconNormal.alpha = 0;
            this.iconBad = this.add(this.game.make.sprite(0, 50, src.Settings.GAME_ATLAS, 'iconBad0000'));
            this.iconBad.anchor.set(0.5, 0.5);
            this.iconBad.alpha = 0;
            this.visible = false;
        }
        resize() {
            const greenZoneHeight = src.Settings.TILE_HEIGHT * 1.25;
            const yellowZoneHeight = src.Settings.TILE_HEIGHT * 1.25;
            const redZoneHeight = this.tutorial.windowBounds.height - greenZoneHeight - yellowZoneHeight;
            this.backgroundRed.position.set(this.tutorial.windowBounds.centerX, this.tutorial.windowBounds.top);
            this.backgroundRed.width = this.tutorial.windowBounds.width + 100;
            this.backgroundRed.height = redZoneHeight;
            this.backgroundYellow.position.set(this.tutorial.windowBounds.centerX, this.tutorial.windowBounds.down - greenZoneHeight);
            this.backgroundYellow.width = this.tutorial.windowBounds.width + 100;
            this.backgroundYellow.height = yellowZoneHeight + 1;
            this.backgroundGreen.position.set(this.tutorial.windowBounds.centerX, this.tutorial.windowBounds.down);
            this.backgroundGreen.width = this.tutorial.windowBounds.width + 100;
            this.backgroundGreen.height = greenZoneHeight + 1;
            this.iconBad.position.set(this.tutorial.windowBounds.centerX, this.backgroundRed.y + redZoneHeight / 2);
            this.iconNormal.position.set(this.tutorial.windowBounds.centerX, this.backgroundYellow.y - yellowZoneHeight / 2);
            this.iconGood.position.set(this.tutorial.windowBounds.centerX, this.backgroundGreen.y - greenZoneHeight / 2);
        }
        show() {
            if (!this.isShown) {
                this.isShown = true;
                this.visible = true;
                this.resize();
                this.tweenGreenZone();
            }
        }
        tweenGreenZone() {
            this.game.add.tween(this.iconGood)
                .to({
                    alpha: 1
                }, 300, Phaser.Easing.Linear.None, true);
            this.game.add.tween(this.iconGood.scale)
                .to({
                    x: 1.3,
                    y: 1.3
                }, 2100, Phaser.Easing.Linear.None, true, 0);
            this.game.add.tween(this.backgroundGreen)
                .to({
                    alpha: 0.6
                }, 350, Phaser.Easing.Linear.None, true, 0, 2, true)
                .onComplete.add(() => {
                    this.tweenYellowZone();
                });
        }
        tweenYellowZone() {
            this.game.add.tween(this.iconNormal)
                .to({
                    alpha: 1
                }, 300, Phaser.Easing.Linear.None, true);
            this.game.add.tween(this.iconNormal.scale)
                .to({
                    x: 1.3,
                    y: 1.3
                }, 2100, Phaser.Easing.Linear.None, true, 0);
            this.game.add.tween(this.backgroundYellow)
                .to({
                    alpha: 0.6
                }, 350, Phaser.Easing.Linear.None, true, 0, 2, true)
                .onComplete.add(() => {
                    this.tweenRedZone();
                });
        }
        tweenRedZone() {
            this.game.add.tween(this.iconBad)
                .to({
                    alpha: 1
                }, 300, Phaser.Easing.Linear.None, true);
            this.game.add.tween(this.iconBad.scale)
                .to({
                    x: 1.3,
                    y: 1.3
                }, 2100, Phaser.Easing.Linear.None, true, 0);
            this.game.add.tween(this.backgroundRed)
                .to({
                    alpha: 0.6
                }, 350, Phaser.Easing.Linear.None, true, 0, 2, true)
                .onComplete.add(() => {
                    this.tweenDisappearing();
                });
        }
        tweenDisappearing() {
            this.game.add.tween(this.iconGood.scale)
                .to({
                    x: 0,
                    y: 0
                }, 450, Phaser.Easing.Back.In, true);
            this.game.add.tween(this.iconNormal.scale)
                .to({
                    x: 0,
                    y: 0
                }, 450, Phaser.Easing.Back.In, true, 150);
            this.game.add.tween(this.iconBad.scale)
                .to({
                    x: 0,
                    y: 0
                }, 450, Phaser.Easing.Back.In, true, 300);
            this.game.add.tween(this.iconGood)
                .to({
                    alpha: 0
                }, 450, Phaser.Easing.Linear.None, true);
            this.game.add.tween(this.iconNormal)
                .to({
                    alpha: 0
                }, 450, Phaser.Easing.Linear.None, true, 150);
            this.game.add.tween(this.iconBad)
                .to({
                    alpha: 0
                }, 450, Phaser.Easing.Linear.None, true, 300)
                .onComplete.add(() => {
                    this.game.time.events.add(300, () => this.hide());
                });
        }
        hide() {
            this.visible = false;
            this.tutorial.tileManager.startSecondPhase();
        }
    }
    src.TutorialPresenter = TutorialPresenter;
})(src || (src = {}));
///<reference path="TutorialTile.ts"/>
var src;
(function(src) {
    class TutorialShortTile extends src.TutorialTile {
        constructor(tutorial, xPosition, y, notes, showHandAnimation = true) {
            super(tutorial, xPosition, y, notes, showHandAnimation);
            /* properties */
            this.spriteFrameName = "tile000";
            this.tailSpriteFrameName = "tileTail000";
            this.transitionDuration = 500;
            this.isPressed = false;
            this.buildContent();
            this.addListeners();
        }
        buildContent() {
            this.tilePressed = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'tilePressed' + '0000'));
            this.tilePressed.anchor.set(0.5, 1);
            this.tilePressed.visible = false;
            this.tile = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, this.spriteFrameName + src.BackgroundManager.instance.currentBackground));
            this.tile.anchor.set(0.5, 1);
            this.tilesTail = this.add(this.game.make.sprite(0, -src.Settings.TILE_HEIGHT, src.Settings.GAME_ATLAS, this.tailSpriteFrameName + src.BackgroundManager.instance.currentBackground));
            this.tilesTail.anchor.set(0.5, 1);
            this.tileTransition = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'tileTransition' + '0000'));
            this.tileTransition.anchor.set(0.5, 1);
            this.tileTransition.visible = false;
            if (this.showAnimation) {
                this.tapAnimation = this.add(new src.TapAnimation(0, -120));
            }
        }
        addListeners() {
            this.tile.inputEnabled = true;
            this.tile.events.onInputDown.add(this.handleInputDown, this);
            this.tile.events.onInputUp.add(this.handleInputUp, this);
        }
        removeListeners() {
            this.tile.events.onInputDown.removeAll();
            this.tile.events.onInputUp.removeAll();
        }
        /**
         * INPUT HANDLERS
         */
        handleInputDown(sprite, pointer) {
            if (this.showAnimation && this.tapAnimation && this.tapAnimation.alpha == 0) {
                return;
            }
            if (this.visible && !this.isPressed) {
                this.isPressed = true;
                let touchPoint = pointer instanceof src.KeyboardPointer ? new Phaser.Point(pointer.x, pointer.y) : this.tutorial.translateInputPosition(pointer);
                this.isPointerDown = true;
                this.pointerDownPosition = touchPoint.clone();
                this.pointerDownLocalPosition = new Phaser.Point(this.pointerDownPosition.x - this.x, this.pointerDownPosition.y - this.y);
                this.tilePressed.visible = true;
                this.tileTransition.alpha = 1;
                this.tileTransition.visible = true;
                this.tile.visible = false;
                this.game.add.tween(this.tileTransition)
                    .to({
                        alpha: 0
                    }, this.transitionDuration, Phaser.Easing.Circular.Out, true);
                this.game.add.tween(this.tilesTail)
                    .to({
                        alpha: 0
                    }, 150, Phaser.Easing.Linear.None, true)
                    .onComplete.add(() => this.tilesTail.visible = false);
                if (this.tutorial.windowBounds.down - this.tutorial.translateInputY(pointer) <= src.Settings.TILE_HEIGHT * (1 + src.Settings.TILE_TAP_BONUS_DISTANCE_FACTOR)) {
                    this.tutorial.backgroundManager.blinkPerfectLine();
                }
                this.playTile();
                if (this.showAnimation) {
                    this.tapAnimation.stop();
                }
            }
        }
        handleInputUp(sprite, pointer) {}
        /**
         * PUBLIC
         */
        playTile() {
            this.notes.forEach(note => src.NotePlayer.playRawNote(note.midi, note.duration, 127, note.time));
            if (!this.showAnimation) {
                let tileScore = 1;
                tileScore = this.pointerDownPosition.y > this.tutorial.windowBounds.down - 2 * src.Settings.TILE_HEIGHT * (1 + src.Settings.TILE_TAP_BONUS_DISTANCE_FACTOR) ? 2 : tileScore;
                tileScore = this.pointerDownPosition.y > this.tutorial.windowBounds.down - src.Settings.TILE_HEIGHT * (1 + src.Settings.TILE_TAP_BONUS_DISTANCE_FACTOR) ? 3 : tileScore;
                this.tutorial.uiManager.showSign(tileScore);
            } else {
                this.tutorial.uiManager.stopBlinking(this.tilePosition);
            }
        }
        restart(y) {
            this.y = y;
            if (this.showAnimation) {
                this.tapAnimation.visible = false;
                this.tutorial.uiManager.stopBlinking(this.tilePosition);
            }
        }
        update() {
            super.update();
            if (this.showAnimation) {
                if (this.y < this.tutorial.tileManager.breakY) {
                    this.tapAnimation.visible = false;
                } else {
                    if (!this.tapAnimation.visible) {
                        this.tapAnimation.visible = true;
                        this.tapAnimation.start();
                        this.tutorial.uiManager.startBlinking(this.tilePosition);
                    }
                }
            }
        }
        /**
         * DESTROY
         */
        destroy() {
            this.removeListeners();
            super.destroy();
            this.tile = null;
            this.tileTransition = null;
            this.tilePressed = null;
        }
    }
    src.TutorialShortTile = TutorialShortTile;
})(src || (src = {}));
var src;
(function(src) {
    class TutorialTileManager extends Phaser.Group {
        constructor(tutorial) {
            super(tutorial.game, null);
            this.isSecondPhase = false;
            this.isFinished = false;
            this.breakY = src.CustomScaleManager.ORIGINAL_HEIGHT - 1.5 * src.Settings.TILE_HEIGHT;
            this.breakingDistance = src.Settings.TILE_HEIGHT;
            this.tutorial = tutorial;
            this.buildContent();
            this.buildTiles();
            this.resize();
        }
        /**
         * PUBLIC
         */
        /**
         * BUILDERS
         */
        buildContent() {
            this.tilesContainer = this.add(this.game.make.group(null));
        }
        buildTiles() {
            this.tiles = [
                this.tilesContainer.add(new src.TutorialShortTile(this.tutorial, 0, this.tutorial.windowBounds.top - 10, [
                    new src.MidiNote().setProperties(0, 1, 65),
                    new src.MidiNote().setProperties(0, 2, 45)
                ])),
                this.tilesContainer.add(new src.TutorialShortTile(this.tutorial, 2, this.tutorial.windowBounds.top - 10, [
                    new src.MidiNote().setProperties(0, 1, 69)
                ])),
                this.tilesContainer.add(new src.TutorialLongTile(this.tutorial, 1, this.tutorial.windowBounds.top - 10, [
                    new src.MidiNote().setProperties(0, 1, 72),
                    new src.MidiNote().setProperties(0, 2, 53),
                    new src.MidiNote().setProperties(0, 2, 57),
                    new src.MidiNote().setProperties(0.75, 1, 77),
                    new src.MidiNote().setProperties(1.5, 2, 46),
                    new src.MidiNote().setProperties(1.5, 1, 76),
                    new src.MidiNote().setProperties(2.25, 1, 74)
                ])),
            ];
        }
        moveTile(tile) {
            if (this.isSecondPhase || tile.isPressed || tile.y < this.breakY || (!tile.isPressed && tile.y > this.tutorial.windowBounds.down + src.Settings.TILE_HEIGHT / 2)) {
                tile.y += src.Settings.TILE_HEIGHT * src.Settings.TUTORIAL_SPEED * this.game.time.elapsedMS / 1000;
            } else if (tile.y >= this.breakY) {
                const speed = (1 - 0.9 * Math.min(tile.y - this.breakY, this.breakingDistance) / this.breakingDistance) * src.Settings.TILE_HEIGHT * src.Settings.TUTORIAL_SPEED * this.game.time.elapsedMS / 1000;
                tile.y += speed;
            }
            if (tile.y > this.tutorial.windowBounds.down + tile.height) {
                if (tile.isPressed || this.isSecondPhase) {
                    this.tiles.splice(this.tiles.indexOf(tile), 1);
                    tile.destroy();
                } else {
                    tile.restart(this.tutorial.windowBounds.top - 10);
                }
            }
        }
        /**
         * UPDATE
         */
        update() {
            super.update();
            if (this.isFinished) {
                return;
            }
            if (this.isSecondPhase) {
                if (this.tiles.length == 0) {
                    this.isFinished = true;
                    this.game.time.events.add(400, () => this.finishTutorial());
                } else {
                    this.tiles.forEach(tile => this.moveTile(tile));
                }
            } else {
                const currentTile = this.tiles[0];
                if (currentTile) {
                    this.moveTile(currentTile);
                } else if (this.tiles.length == 0 && !this.tutorial.presenter.isShown) {
                    this.tutorial.presenter.show();
                }
            }
        }
        startSecondPhase() {
            this.tiles = [
                this.tilesContainer.add(new src.TutorialShortTile(this.tutorial, 3, this.tutorial.windowBounds.top - 10, [
                    new src.MidiNote().setProperties(0, 1, 65),
                    new src.MidiNote().setProperties(0, 2, 45)
                ], false)),
                this.tilesContainer.add(new src.TutorialShortTile(this.tutorial, 2, this.tutorial.windowBounds.top - 10, [
                    new src.MidiNote().setProperties(0, 1, 69)
                ], false)),
                this.tilesContainer.add(new src.TutorialShortTile(this.tutorial, 3, this.tutorial.windowBounds.top - 10, [
                    new src.MidiNote().setProperties(0, 1, 72),
                    new src.MidiNote().setProperties(0, 2, 53),
                    new src.MidiNote().setProperties(0, 2, 57)
                ], false)),
                this.tilesContainer.add(new src.TutorialShortTile(this.tutorial, 2, this.tutorial.windowBounds.top - 10, [
                    new src.MidiNote().setProperties(0, 1, 77)
                ], false)),
                this.tilesContainer.add(new src.TutorialShortTile(this.tutorial, 0, this.tutorial.windowBounds.top - 10, [
                    new src.MidiNote().setProperties(0, 2, 46),
                    new src.MidiNote().setProperties(0, 1, 76),
                ], false)),
                this.tilesContainer.add(new src.TutorialShortTile(this.tutorial, 2, this.tutorial.windowBounds.top - 10, [
                    new src.MidiNote().setProperties(0, 1, 74)
                ], false)),
                this.tilesContainer.add(new src.TutorialShortTile(this.tutorial, 1, this.tutorial.windowBounds.top - 10, [
                    new src.MidiNote().setProperties(0, 2, 58),
                    new src.MidiNote().setProperties(0, 2, 50),
                    new src.MidiNote().setProperties(0, 1, 72)
                ], false)),
                this.tilesContainer.add(new src.TutorialShortTile(this.tutorial, 0, this.tutorial.windowBounds.top - 10, [
                    new src.MidiNote().setProperties(0, 1, 70)
                ], false)),
                this.tilesContainer.add(new src.TutorialShortTile(this.tutorial, 2, this.tutorial.windowBounds.top - 10, [
                    new src.MidiNote().setProperties(0, 2, 46),
                    new src.MidiNote().setProperties(0, 1, 69),
                    new src.MidiNote().setProperties(0, 5, 50)
                ], false)),
                this.tilesContainer.add(new src.TutorialShortTile(this.tutorial, 1, this.tutorial.windowBounds.top - 10, [
                    new src.MidiNote().setProperties(0, 1, 67)
                ], false)),
                this.tilesContainer.add(new src.TutorialShortTile(this.tutorial, 3, this.tutorial.windowBounds.top - 10, [
                    new src.MidiNote().setProperties(0, 1, 65),
                    new src.MidiNote().setProperties(0, 2, 48),
                    new src.MidiNote().setProperties(0, 2, 52)
                ], false)),
                this.tilesContainer.add(new src.TutorialShortTile(this.tutorial, 2, this.tutorial.windowBounds.top - 10, [
                    new src.MidiNote().setProperties(0, 1, 64)
                ], false)),
                this.tilesContainer.add(new src.TutorialLongTile(this.tutorial, 0, this.tutorial.windowBounds.top - 10, [
                    new src.MidiNote().setProperties(0, 3, 65),
                    new src.MidiNote().setProperties(0, 3, 41),
                    new src.MidiNote().setProperties(0, 3, 53)
                ], false))
            ];
            /* sort tiles */
            for (let i = 0; i < this.tiles.length; i++) {
                if (i == 0) {
                    this.tiles[i].y = this.tutorial.windowBounds.top - 10;
                } else {
                    this.tiles[i].y = this.tiles[i - 1].y - src.Settings.TILE_HEIGHT;
                }
            }
            this.isSecondPhase = true;
        }
        finishTutorial() {
            if (!src.Tutorial.FIRST_TIME_SHOWN) {
                src.Tutorial.FIRST_TIME_SHOWN = true;
                src.LocalStorageController.instance.save();
                src.MainMenu.loadCachedSong();
            } else {
                src.TransitionScreen.instance.changeState("MainMenu");
            }
            if (src.Settings.ENABLE_API) {
                window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_TUTORIALCOMPLETED);
            }
        }
        getActiveTile() {
            return this.tiles.length > 0 ? this.tiles.find(tile => !tile.isPressed) || null : null;
        }
        /**
         * SCALE
         */
        resize() {
            this.breakY = this.tutorial.windowBounds.down - 1.5 * src.Settings.TILE_HEIGHT;
        }
        getScreenHeight() {
            return this.tutorial.windowBounds.height;
        }
        /**
         * DESTROY
         */
        destroy() {
            super.destroy();
            this.tiles = null;
            this.tutorial = null;
        }
    }
    src.TutorialTileManager = TutorialTileManager;
})(src || (src = {}));
var src;
(function(src) {
    class TutorialUIManager extends Phaser.Group {
        constructor(state) {
            super(state.game, null);
            this.frameGood = 'signGood0000';
            this.frameNormal = 'signNormal0000';
            this.frameBad = 'signBad0000';
            this.tutorial = state;
            this.buildContent();
            this.resize();
        }
        buildContent() {
            this.buttonsContainer = this.add(this.game.make.group(null));
            this.buttonClose = this.buttonsContainer.add(src.ButtonUtils.createSimpleButton(src.Settings.GAME_ATLAS, 'buttonCloseTutorial', 570, 75, 1, this.closeClicked, this));
            this.sign = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, this.frameGood));
            this.sign.anchor.set(0.5);
            this.sign.alpha = 0;
            if (this.game.device.desktop) {
                this.keyHelpers = this.add(new src.TutorialKeyHelpers(this.tutorial));
            }
        }
        /**
         * PUBLIC
         */
        closeClicked() {
            this.tutorial.tileManager.finishTutorial();
            if (src.Settings.ENABLE_API) {
                window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_TUTORIALSKIPPED);
            }
        }
        /**
         * RESIZE
         */
        resize() {
            this.y = this.tutorial.windowBounds.top;
            this.sign.position.set(this.tutorial.windowBounds.centerX, 100);
            this.buttonsContainer.position.set(0, 0);
            this.buttonsContainer.scale.set(!this.game.device.desktop && this.game.scale.isLandscape ? Math.min(this.game.scale.width / this.game.scale.height, 2) : 1);
            this.buttonClose.position.set(this.tutorial.windowBounds.right / this.buttonsContainer.scale.x - 50, 50);
            if (this.game.device.desktop) {
                this.keyHelpers.position.set(this.tutorial.windowBounds.centerX, this.tutorial.windowBounds.height - 10);
            }
        }
        showSign(score) {
            this.game.tweens.removeFrom(this.sign);
            this.game.tweens.removeFrom(this.sign.scale);
            this.sign.frameName = score > 2 ? this.frameGood : score > 1 ? this.frameNormal : this.frameBad;
            this.sign.alpha = 1;
            this.sign.scale.set(0.25);
            this.game.add.tween(this.sign)
                .to({
                    alpha: 0
                }, 650, Phaser.Easing.Circular.In, true);
            this.game.add.tween(this.sign.scale)
                .to({
                    x: 0.75,
                    y: 0.75
                }, 550, Phaser.Easing.Back.Out, true);
        }
        startBlinking(position) {
            if (this.game.device.desktop && this.keyHelpers) {
                this.keyHelpers.startBlinking(position);
            }
        }
        stopBlinking(position) {
            if (this.game.device.desktop && this.keyHelpers) {
                this.keyHelpers.stopBlinking(position);
            }
        }
        /**
         * DESTROY
         */
        destroy() {
            super.destroy();
            this.tutorial = null;
            this.buttonsContainer = null;
            this.buttonClose = null;
            this.keyHelpers = null;
        }
    }
    src.TutorialUIManager = TutorialUIManager;
})(src || (src = {}));
var src;
(function(src) {
    class AlbumHeader extends Phaser.Group {
        constructor(albumPanel, albumName, albumDescription) {
            super(albumPanel.game, null);
            this.dragTreshold = 7;
            this.albumPanel = albumPanel;
            this.albumName = albumName;
            this.albumDescription = albumDescription;
            this.buildContent();
            this.addListeners();
        }
        buildContent() {
            this.headingPanel = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'albumHeadingPanel0000'));
            this.headingPanel.anchor.set(0.5, 0);
            this.contentContainer = this.add(this.game.make.group(null));
            this.albumCover = this.add(this.game.make.sprite(128, 86, src.Settings.GAME_ATLAS, 'albumCover000' + this.albumPanel.albumID));
            this.albumCover.anchor.set(0.5);
            this.note = this.add(this.game.make.sprite(-145, 146, src.Settings.GAME_ATLAS, 'note0000'));
            this.note.anchor.set(0.5);
            this.albumNameText = this.contentContainer.add(src.TextUtils.getBitmapText((window.famobi.__(this.albumName) || this.albumName), -255, 55, 45, 0xFF8C00));
            this.albumNameText.anchor.set(0, 0.5);
            this.songsCountText = this.contentContainer.add(src.TextUtils.getBitmapText('', -146, 145, 38, 0xFF8C00));
            this.songsCountText.anchor.set(0.5, 0.5);
            this.starsCountText = this.contentContainer.add(src.TextUtils.getBitmapText('', 180, 27, 38, 0x858585));
            this.starsCountText.anchor.set(0.5, 0.5);
            this.changeColor(src.BackgroundManager.instance.currentBackground);
            this.contentContainer.cacheAsBitmap = true;
        }
        addListeners() {
            this.headingPanel.inputEnabled = true;
            this.headingPanel.events.onInputDown.add(this.handleInputDown, this);
            this.headingPanel.events.onInputUp.add(this.handleInputUp, this);
        }
        removeListeners() {
            this.headingPanel.events.onInputDown.removeAll();
            this.headingPanel.events.onInputUp.removeAll();
        }
        /**
         * INPUT HANDLERS
         */
        handleInputDown(sprite, pointer) {
            if (this.game.state.getCurrentState() instanceof src.SongsMenu) {
                this.inputDownWorldPosition = new Phaser.Point(pointer.worldX, pointer.worldY);
            }
        }
        handleInputUp(sprite, pointer) {
            if (this.game.state.getCurrentState() instanceof src.SongsMenu && this.inputDownWorldPosition && this.inputDownWorldPosition.distance(new Phaser.Point(pointer.worldX, pointer.worldY)) < this.dragTreshold) {
                if (this.albumPanel.isExpanded) {
                    this.albumPanel.albumsManger.closeAlbum(this.albumPanel);
                } else {
                    this.albumPanel.albumsManger.openAlbum(this.albumPanel);
                }
            }
            this.inputDownWorldPosition = null;
        }
        /**
         * PUBLIC
         */
        updateInfo() {
            this.starsCountText.text = '' + this.albumPanel.getCurrentStars() + '/' + this.albumPanel.getTotalStars();
            this.songsCountText.text = '' + this.albumPanel.getAvailableSongsAmount() + '/' + this.albumPanel.songs.length;
            this.contentContainer.updateCache();
        }
        updateView() {
            this.headingPanel.frameName = "albumHeadingPanel000" + (this.albumPanel.isExpanded ? 1 : 0);
            this.note.frameName = 'note000' + (this.albumPanel.isExpanded ? 1 : 0);
            this.contentContainer.updateCache();
        }
        changeColor(color) {
            this.note.tint = Phaser.Color.interpolateColor(src.BackgroundManager.textColors[color], 0x000000, 100, 12, 1);
            this.albumNameText.tint = src.BackgroundManager.textColors[color];
            this.songsCountText.tint = src.BackgroundManager.textColors[color];
            this.contentContainer.updateCache();
        }
        /**
         * DESTROY
         */
        destroy() {
            this.removeListeners();
            super.destroy();
            this.albumPanel = null;
            this.albumName = null;
        }
    }
    src.AlbumHeader = AlbumHeader;
})(src || (src = {}));
var src;
(function(src) {
    class AlbumPanel extends Phaser.Group {
        constructor(albumsManager, albumName, albumDescription, stars, albumID) {
            super(albumsManager.game, null);
            this.songPanelCollapsedY = 22;
            this.isExpanded = false;
            this.albumsManger = albumsManager;
            this.albumName = albumName;
            this.albumDescription = albumDescription;
            this.albumID = albumID;
            this.stars = stars || [];
            this.buildContent();
            this.initSongs();
        }
        buildContent() {
            this.songsContainer = this.add(this.game.make.group(null));
            this.albumHeader = this.add(new src.AlbumHeader(this, this.albumName, this.albumDescription));
        }
        initSongs() {
            this.songs = [];
        }
        addSong(song) {
            if (song) {
                let songPanel = this.songsContainer.addAt(new src.SongPanel(this, song), 0);
                songPanel.y = this.songPanelCollapsedY;
                this.songs.push(songPanel);
                src.ScoreManager.instance.setRequiredStarsAmount(songPanel.song, this.stars[this.songs.indexOf(songPanel)] || 0);
                this.albumHeader.updateView();
            }
        }
        expand() {
            if (!this.isExpanded) {
                this.isExpanded = true;
                this.albumHeader.updateView();
                src.SoundController.instance.playExpandSound();
                this.songs.forEach((songPanel, index) => {
                    this.game.add.tween(songPanel)
                        .to({
                            y: src.Settings.ALBUM_PANEL_HEIGHT + 5 + (src.Settings.SONG_PANEL_HEIGHT + src.Settings.DISTANCE_BETWEEN_SONGS) * index
                        }, 400, Phaser.Easing.Quartic.Out, true);
                });
            }
        }
        collapse() {
            if (this.isExpanded) {
                const tweenDuration = 300;
                this.songs.forEach(songPanel => {
                    this.game.add.tween(songPanel)
                        .to({
                            y: this.songPanelCollapsedY
                        }, tweenDuration, Phaser.Easing.Sinusoidal.In, true);
                });
                this.game.time.events.add(tweenDuration, () => {
                    this.isExpanded = false;
                    this.albumHeader.updateView();
                });
            }
        }
        updateVisibility() {
            let startY = this.y + this.albumsManger.albumsContainer.y;
            let endY = startY + this.getCurrentHeight();
            if (startY < -src.Settings.ALBUM_PANEL_HEIGHT - src.Settings.ALBUMS_CONTAINER_Y || startY > this.albumsManger.viewportHeight + src.Settings.ALBUMS_CONTAINER_Y) {
                this.albumHeader.visible = false;
            } else {
                this.albumHeader.visible = true;
            }
            this.songs.forEach(song => {
                if (!this.isExpanded) {
                    song.visible = false;
                } else {
                    song.visible = (startY + song.y + src.Settings.SONG_PANEL_HEIGHT > -src.Settings.ALBUMS_CONTAINER_Y && startY + song.y < this.albumsManger.viewportHeight + src.Settings.ALBUMS_CONTAINER_Y);
                }
            });
        }
        getCurrentHeight() {
            let songsHeight = (this.songs && this.songs.length > 0) ? this.songs[this.songs.length - 1].y + src.Settings.SONG_PANEL_HEIGHT : 0;
            return Math.max(src.Settings.ALBUM_PANEL_HEIGHT, songsHeight);
        }
        getExpandedHeight() {
            return Math.max(src.Settings.ALBUM_PANEL_HEIGHT, src.Settings.ALBUM_PANEL_HEIGHT + 5 + (src.Settings.SONG_PANEL_HEIGHT + src.Settings.DISTANCE_BETWEEN_SONGS) * (this.songs.length - 1) + src.Settings.SONG_PANEL_HEIGHT);
        }
        getCollapsedHeight() {
            return src.Settings.ALBUM_PANEL_HEIGHT;
        }
        updateInfo() {
            this.songs.forEach(song => song.updateInfo());
            this.albumHeader.updateInfo();
        }
        changeColor(color) {
            this.albumHeader.changeColor(color);
            this.songs.forEach(songPanel => songPanel.changeColor(color));
        }
        getTotalStars() {
            return this.songs.length * 3;
        }
        getCurrentStars() {
            return this.songs.reduce((sum, songPanel) => sum + src.ScoreManager.instance.getSongStarsCount(songPanel.song), 0);
        }
        getAvailableSongsAmount() {
            return this.songs.reduce((sum, songPanel) => sum + (songPanel.isUnlocked() ? 1 : 0), 0);
        }
        getRequiredStarsArray() {
            return this.stars;
        }
        /**
         * UPDATE
         */
        update() {
            super.update();
            this.updateVisibility();
        }
        /**
         * DESTROY
         */
        destroy() {
            super.destroy();
            this.albumsManger = null;
            this.albumHeader = null;
        }
    }
    src.AlbumPanel = AlbumPanel;
})(src || (src = {}));
var src;
(function(src) {
    class ShineEffect extends Phaser.Sprite {
        constructor(x, y, delay) {
            super(src.App.instance, x, y, src.Settings.GAME_ATLAS, 'shiningEffect0000');
            this.alpha = 0;
            this.game.time.events.add(delay, () => {
                this.restartTweens();
            });
        }
        restartTweens() {
            this.game.tweens.removeFrom(this);
            this.game.tweens.removeFrom(this.scale);
            let duration = this.game.rnd.integerInRange(400, 1800);
            let targetScale = this.game.rnd.realInRange(0.4, 1);
            this.anchor.set(Math.random(), Math.random());
            this.position.set(this.game.rnd.integerInRange(-200, 200), this.game.rnd.integerInRange(-400, 0));
            this.alpha = 0;
            this.scale.set(0, 0);
            this.game.add.tween(this)
                .to({
                    alpha: 1
                }, 2 * duration, Phaser.Easing.Linear.None, true, 0, 0, false)
                .onComplete.add(() => {
                    this.restartTweens();
                });
            this.game.add.tween(this.scale)
                .to({
                    x: targetScale,
                    y: targetScale
                }, duration, Phaser.Easing.Cubic.In, true, 0, 0, true);
            this.game.add.tween(this)
                .to({
                    angle: Math.random() * 360 * this.game.rnd.sign()
                }, 2 * duration, Phaser.Easing.Linear.None, true, 0, 0, false);
        }
    }
    src.ShineEffect = ShineEffect;
})(src || (src = {}));
var src;
(function(src) {
    class TitleEffect extends Phaser.Group {
        constructor() {
            super(src.App.instance, null);
            this.buildContent();
        }
        buildContent() {
            this.logo = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'mainLogo0000'));
            this.logo.anchor.set(0.5, 1);
            this.shineEffects = [
                this.add(new src.ShineEffect(0, 0, 100)),
                this.add(new src.ShineEffect(0, 0, 500)),
                this.add(new src.ShineEffect(0, 0, 900)),
                this.add(new src.ShineEffect(0, 0, 1200)),
                this.add(new src.ShineEffect(0, 0, 1500)),
                this.add(new src.ShineEffect(0, 0, 1800))
            ];
        }
        destroy() {
            super.destroy();
            this.logo = null;
            this.shineEffects = null;
        }
    }
    src.TitleEffect = TitleEffect;
})(src || (src = {}));
var src;
(function(src) {
    class AlbumsManager extends Phaser.Group {
        constructor() {
            super(src.App.instance, null);
            this.viewportHeight = src.CustomScaleManager.ORIGINAL_HEIGHT;
            this.tapTimeThreshold = 150;
            this.tapDistanceThreshold = 5;
            this.isPointerDown = false;
            this.deccelerationFactor = 0.99;
            this.maxVelocity = 2500;
            this.buildContent();
            this.loadAlbums();
        }
        static get instance() {
            return AlbumsManager._instance ? AlbumsManager._instance :
                AlbumsManager._instance = new AlbumsManager();
        }
        addToSongsMenu(songsMenu) {
            this.songsMenu = songsMenu;
            this.songsMenu.addChild(this);
            this.addListeners();
            this.visible = true;
            this.resize(this.songsMenu.windowBounds);
            this.updateAlbumsInfo();
        }
        buildContent() {
            this.viewport = this.add(this.game.make.group(null));
            this.viewport.y = src.Settings.ALBUMS_CONTAINER_Y;
            this.albumsContainer = this.viewport.add(this.game.make.group(null));
        }
        loadAlbums() {
            this.albums = [];
            let availableSongs = src.SongStorage.instance.songs.map(song => song);
            window.famobi.log(`Loaded ${availableSongs.length} songs`);
            let json = JSON.parse(this.game.cache.getText('albums'));
            let albumModels = json.albums;
            let currentAlbumID = 0;
            /* load regular albums */
            for (let albumModel of albumModels) {
                let album = this.addAlbum(albumModel.name, albumModel.description, albumModel.stars, currentAlbumID++);
                albumModel.songs.forEach((songName, index) => {
                    let foundSong = availableSongs.find(song => song.name == songName);
                    if (foundSong && availableSongs.indexOf(foundSong) != -1) {
                        availableSongs.splice(availableSongs.indexOf(foundSong), 1);
                        album.addSong(foundSong);
                    } else {
                        window.famobi.log(`Song "${songName}" not found in available songs. Maybe it has been renamed?`);
                    }
                });
            }
            /* load uncategorized songs */
            if (src.Settings.DEBUG_MODE && availableSongs.length > 0) {
                window.famobi.log(`${availableSongs.length} uncategorized songs found`);
                let uncategorizedAlbum = this.addAlbum('= uncategorized =', 'Songs that don\'t belong to any category', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0);
                for (let song of availableSongs) {
                    uncategorizedAlbum.addSong(song);
                }
            }
            /* update song panels availability */
        }
        addAlbum(albumName, albumDescription, stars, albumID) {
            let album = this.albumsContainer.add(new src.AlbumPanel(this, albumName, albumDescription, stars, albumID % 7));
            album.position.set(0, this.albums.length * (src.Settings.ALBUM_PANEL_HEIGHT + src.Settings.DISTANCE_BETWEEN_ALBUMS));
            this.albums.push(album);
            this.activeAlbum = this.albums[0];
            return album;
        }
        saveAlbumsAsJSON() {
            let availableSongs = src.SongStorage.instance.songs.map(song => song);
            let exportedAlbums = this.albums.filter(album => album.albumName.indexOf("uncategorized") == -1);
            exportedAlbums.forEach(album => album.songs.forEach(songPanel => {
                if (availableSongs.indexOf(songPanel.song) != -1) {
                    availableSongs.splice(availableSongs.indexOf(songPanel.song), 1);
                }
            }));
            const content = JSON.stringify({
                "albums": exportedAlbums.map(album => {
                    return {
                        "name": album.albumName,
                        "description": album.albumDescription,
                        "stars": album.getRequiredStarsArray(),
                        "songs": album.songs.map(song => song.song.name)
                    };
                }),
                "uncategorized": availableSongs.map(song => song.name)
            });
            const blob = new Blob([content]);
            window["FileSaver"](blob, "albums.json");
        }
        getAlbum(song) {
            for (let album of this.albums) {
                for (let songPanel of album.songs) {
                    if (songPanel.song == song) {
                        return album;
                    }
                }
            }
            return null;
        }
        getAnotherNonCompletedSongsOfAlbumWithSong(song) {
            let album = this.getAlbum(song);
            if (album) {
                return album.songs.filter(songPanel => songPanel.isUnlocked() && !songPanel.isCompleted() && songPanel.song != song).map(songPanel => songPanel.song);
            } else {
                return null;
            }
        }
        getNextSong(song) {
            let anotherSongs = this.getAnotherNonCompletedSongsOfAlbumWithSong(song);
            if (anotherSongs && anotherSongs.length > 0) {
                return anotherSongs[0];
            }
            return null;
        }
        changeColor(color) {
            this.albums.forEach(album => album.changeColor(color));
        }
        /**
         * PRIVATE
         */
        updateAlbumsInfo() {
            this.albums.forEach(album => {
                album.updateInfo();
            });
        }
        alignAlbums() {
            if (this.albums.length == 0) {
                return;
            }
            this.restrictAlbumsContainerPosition();
            if (this.activeAlbum) {
                const activeAlbumIndex = this.albums.indexOf(this.activeAlbum);
                for (let i = activeAlbumIndex - 1; i > -1; i--) {
                    this.albums[i].y = this.albums[i + 1].y - this.albums[i].getCurrentHeight() - src.Settings.DISTANCE_BETWEEN_ALBUMS;
                }
                for (let i = activeAlbumIndex + 1; i < this.albums.length; i++) {
                    this.albums[i].y = this.albums[i - 1].y + this.albums[i - 1].getCurrentHeight() + src.Settings.DISTANCE_BETWEEN_ALBUMS;
                }
            }
        }
        restrictAlbumsContainerPosition() {
            if (!this.game.tweens.isTweening(this.albumsContainer)) {
                const startY = this.albums[0].y;
                const endY = this.albums[this.albums.length - 1].y + this.albums[this.albums.length - 1].getCurrentHeight();
                const containerHeight = endY - startY;
                this.albumsContainer.y = Phaser.Math.clamp(this.albumsContainer.y, Math.min(containerHeight, this.viewportHeight) - endY, -startY);
            }
        }
        openAlbum(album) {
            /* collapse another albums */
            this.albums.forEach(a => a.isExpanded ? a.collapse() : a);
            this.activeAlbum = album;
            album.expand();
            const spaceBefore = this.albums.indexOf(album) * (src.Settings.ALBUM_PANEL_HEIGHT + src.Settings.DISTANCE_BETWEEN_ALBUMS);
            const spaceAfter = ((this.albums.length - 1 - this.albums.indexOf(album)) * (src.Settings.ALBUM_PANEL_HEIGHT + src.Settings.DISTANCE_BETWEEN_ALBUMS) + album.getExpandedHeight());
            const targetY = -this.activeAlbum.y + (spaceAfter < this.viewportHeight ? (this.viewportHeight - spaceAfter) : 0);
            this.game.add.tween(this.albumsContainer)
                .to({
                    y: targetY
                }, 400, Phaser.Easing.Quadratic.Out, true);
        }
        closeAlbum(album) {
            album.collapse();
            src.SoundController.instance.playCollapseSound();
            const spaceBefore = this.albums.indexOf(album) * (src.Settings.ALBUM_PANEL_HEIGHT + src.Settings.DISTANCE_BETWEEN_ALBUMS);
            const spaceAfter = ((this.albums.length - 1 - this.albums.indexOf(album)) * (src.Settings.ALBUM_PANEL_HEIGHT + src.Settings.DISTANCE_BETWEEN_ALBUMS) + album.getCollapsedHeight());
            const totalSpace = spaceAfter + spaceBefore;
            const targetY = totalSpace < this.viewportHeight ? -this.albums[0].y : Math.max(-this.activeAlbum.y + this.viewportHeight - spaceAfter, -this.activeAlbum.y);
            this.game.add.tween(this.albumsContainer)
                .to({
                    y: targetY
                }, 300, Phaser.Easing.Sinusoidal.In, true);
        }
        getUnlockedSongs() {
            let songs = [];
            this.albums.forEach(album => songs = songs.concat(album.songs.filter(songPanel => songPanel.isUnlocked()).map(songPanel => songPanel.song)));
            return songs;
        }
        /**
         * SCROLLING
         */
        addListeners() {
            this.game.input.onDown.add(this.beginMove, this);
            this.callbackID = this.game.input.addMoveCallback(this.moveCamera, this);
            this.game.input.onUp.add(this.endMove, this);
            if (this.game.device.desktop) {
                this.game.input.mouse.mouseWheelCallback = (e) => this.handleMouseWheel(e);
            }
        }
        removeListeners() {
            this.game.input.onDown.remove(this.beginMove, this);
            if (this.callbackID) {
                this.game.input.deleteMoveCallback(this.callbackID);
            } else {
                this.game.input.deleteMoveCallback(this.moveCamera, this);
            }
            this.game.input.onUp.remove(this.endMove, this);
            if (this.game.device.desktop) {
                this.game.input.mouse.mouseWheelCallback = null;
            }
        }
        handleMouseWheel(event) {
            this.velocityY += Phaser.Math.sign(event.wheelDelta) * 1000;
            this.deccelerationFactor = 0.95;
        }
        beginMove(pointer) {
            this.isPointerDown = true;
            this.pointerID = pointer.id;
            this.screenX = pointer.screenX;
            this.screenY = pointer.screenY;
            this.startX = pointer.x;
            this.startY = pointer.y;
            this.lastTimestamp = this.game.time.now;
            this.velocityY = 0;
        }
        moveCamera(pointer, x, y) {
            if (!this.isPointerDown || this.pointerID !== pointer.id) {
                return;
            }
            let now = this.game.time.now;
            let elapsed = now - this.lastTimestamp;
            this.lastTimestamp = now;
            let deltaX = 0;
            let deltaY = 0;
            // It`s a fast tap not move
            if (now - this.lastTimestamp < this.tapTimeThreshold &&
                Math.abs(pointer.screenY - this.screenY) < this.tapDistanceThreshold &&
                Math.abs(pointer.screenX - this.screenX) < this.tapDistanceThreshold) {
                return;
            }
            deltaY = (y - this.startY) * this.viewport.scale.y;
            this.startY = y;
            this.velocityY = 0.5 * Math.sign(deltaY) * Math.min(Math.abs(deltaY) / (elapsed / 1000), this.maxVelocity) + 0.5 * this.velocityY;
            this.albumsContainer.y += deltaY;
            this.restrictAlbumsContainerPosition();
        }
        endMove() {
            this.isPointerDown = false;
            this.pointerID = null;
            if (this.game.input.activePointer.withinGame) {
                this.deccelerationFactor = 0.999;
            } else {
                this.deccelerationFactor = 0;
            }
        }
        /**
         * OVERRIDDEN
         */
        update() {
            super.update();
            this.deccelerationFactor = Phaser.Math.clamp(this.deccelerationFactor * 0.999, 0, 1);
            if (Math.abs(this.velocityY) > 5) {
                this.velocityY *= this.deccelerationFactor;
                this.albumsContainer.y += this.velocityY * (this.game.time.elapsedMS / 1000);
            } else {
                this.velocityY = 0;
            }
        }
        postUpdate() {
            super.postUpdate();
            this.alignAlbums();
        }
        resize(bounds) {
            this.position.set(bounds.centerX, bounds.top);
            if (!this.game.device.desktop && this.game.scale.isLandscape) {
                const currentAspectRatio = this.game.scale.height / this.game.scale.width;
                let targetScale = Math.max(currentAspectRatio, 0.6) / this.songsMenu.container.scale.y;
                this.viewport.scale.set(targetScale);
            } else {
                this.viewport.scale.set(1);
            }
            this.viewportHeight = (this.songsMenu.windowBounds.height - 2 * src.Settings.ALBUMS_CONTAINER_Y) / this.viewport.scale.y;
        }
        destroy() {
            this.removeListeners();
            if (this.parent) {
                this.parent.removeChild(this);
            }
            this.songsMenu = null;
            this.visible = false;
        }
    }
    src.AlbumsManager = AlbumsManager;
})(src || (src = {}));
var src;
(function(src) {
    class PreloadEffect extends Phaser.Group {
        constructor() {
            super(src.App.instance, null);
            this.counter = 0;
            this.buildChildren();
        }
        buildChildren() {
            this.columns = [];
            for (let i = -2; i < 4; i++) {
                let column = this.add(this.game.make.sprite(i * 34, 0, src.Settings.PRELOADER_ATLAS, 'preloader0000'));
                column.anchor.set(0, 1);
                this.columns.push(column);
            }
        }
        update() {
            super.update();
            if (this.columns && this.counter++ % 6 == 0) {
                this.columns.forEach(column => column.frameName = 'preloader000' + Math.floor(Math.random() * 6));
            }
        }
        destroy() {
            super.destroy();
            this.columns = null;
        }
    }
    src.PreloadEffect = PreloadEffect;
})(src || (src = {}));
var src;
(function(src) {
    class EndlessModePresenter extends Phaser.Group {
        constructor(level) {
            super(src.App.instance, null);
            this.isShown = false;
            this.level = level;
            this.buildChildren();
        }
        buildChildren() {
            this.background = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'blackSquare0000'));
            this.background.anchor.set(0.5, 0.5);
            this.contentContainer = this.add(this.game.make.group(null));
            this.panelsContainer = this.add(this.game.make.group(null));
            this.starsPanel = this.panelsContainer.add(new src.PresenterStarsPanel());
            this.starsPanel.position.set(0, -70);
            this.infinityIcon = this.contentContainer.add(this.game.make.sprite(0, 50, src.Settings.GAME_ATLAS, 'infinityIcon0000'));
            this.infinityIcon.anchor.set(0.5, 0.5);
            this.visible = false;
        }
        resize() {
            this.background.position.set(this.level.windowBounds.centerX, this.level.windowBounds.centerY);
            this.background.width = this.level.windowBounds.width + 100;
            this.background.height = this.level.windowBounds.height + 100;
            this.contentContainer.position.set(this.level.windowBounds.centerX, this.level.windowBounds.top + this.level.windowBounds.height * 0.5);
            this.panelsContainer.position.set(this.level.windowBounds.left, this.level.windowBounds.top + this.level.windowBounds.height * 0.4);
            this.starsPanel.resize(this.level.windowBounds);
        }
        show() {
            if (!this.isShown) {
                src.ScoreManager.instance.updateCurrentSongScores(src.ScoreManager.instance.getCurrentStarScores(), src.ScoreManager.instance.getCurrentScores());
                src.LocalStorageController.instance.save();
                this.level.tileManager.pausePlayback();
                this.level.uiManager.hideProgressBar();
                this.level.heartManager.moveHeartIconUp();
                this.isShown = true;
                this.visible = true;
                this.resize();
                this.infinityIcon.alpha = 0;
                this.infinityIcon.scale.set(0, 0);
                this.background.alpha = 0;
                this.game.add.tween(this.background)
                    .to({
                        alpha: 0.5
                    }, 700, Phaser.Easing.Linear.None, true, 300);
                this.starsPanel.animateAppearing(src.ScoreManager.instance.getCurrentStarsCount());
                this.game.time.events.add(1900, () => this.animateStarsPanelDisappearing());
                this.game.time.events.add(2500, () => this.showInfinityIcon());
            }
        }
        animateStarsPanelDisappearing() {
            this.game.add.tween(this.panelsContainer)
                .to({
                    y: Math.max(this.level.windowBounds.top + 150, this.panelsContainer.y - 150)
                }, 1200, Phaser.Easing.Sinusoidal.Out, true)
                .onComplete.add(() => this.starsPanel.animateDisappearing());
        }
        showInfinityIcon() {
            this.game.add.tween(this.infinityIcon)
                .to({
                    alpha: 1
                }, 500, Phaser.Easing.Linear.None, true, 0);
            this.game.add.tween(this.infinityIcon.scale)
                .to({
                    x: 1,
                    y: 1
                }, 500, Phaser.Easing.Back.Out, true, 0)
                .onComplete.add(() => {
                    this.game.add.tween(this.infinityIcon.scale)
                        .to({
                            x: 1.25,
                            y: 1.25
                        }, 1600, Phaser.Easing.Linear.None, true)
                        .onComplete.add(() => this.hide());
                });
        }
        hide() {
            this.game.add.tween(this.background)
                .to({
                    alpha: 0
                }, 500, Phaser.Easing.Linear.None, true, 300)
                .onComplete.add(() => {
                    if (this.parent) {
                        this.parent.removeChild(this);
                    }
                    this.visible = false;
                    this.level.tileManager.startEndlessMode();
                });
            this.game.add.tween(this.infinityIcon)
                .to({
                    alpha: 0
                }, 600, Phaser.Easing.Linear.None, true);
            this.game.add.tween(this.infinityIcon.scale)
                .to({
                    x: 0,
                    y: 0
                }, 600, Phaser.Easing.Back.In, true, 0);
        }
    }
    src.EndlessModePresenter = EndlessModePresenter;
})(src || (src = {}));
var src;
(function(src) {
    class PresenterLine extends Phaser.Group {
        constructor(iconFrame) {
            super(src.App.instance, null);
            this.buildChildren(iconFrame);
        }
        buildChildren(iconFrame) {
            this.presenterPanel = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'informerPanel0000'));
            this.presenterPanel.anchor.set(0, 0.5);
            this.presenterIcon = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, iconFrame));
            this.presenterIcon.anchor.set(0.5, 0.5);
            this.presenterText = this.add(src.TextUtils.getText('Presenter Default Text', 0, 0, 42, "#FFFFFF"));
            this.alpha = 0;
        }
        resize(windowBounds) {
            this.x = 0;
            this.presenterPanel.width = windowBounds.width;
            this.presenterIcon.x = 50;
            this.presenterText.x = windowBounds.width / 2;
        }
        setText(text) {
            this.presenterText.setText(text);
        }
        animateAppearing(delay) {
            this.presenterIcon.alpha = 0;
            this.presenterText.alpha = 0;
            this.x = -this.presenterPanel.width;
            let appearingTween = this.game.add.tween(this)
                .to({
                    x: 0
                }, 300, Phaser.Easing.Linear.None, true, delay);
            appearingTween.onStart.add(() => this.alpha = 1);
            appearingTween.onComplete.add(() => {
                this.game.add.tween(this.presenterIcon)
                    .to({
                        alpha: 1
                    }, 300, Phaser.Easing.Linear.None, true);
                this.game.add.tween(this.presenterText)
                    .to({
                        alpha: 1
                    }, 300, Phaser.Easing.Linear.None, true);
            });
        }
        animateDisappearing(delay) {
            this.game.add.tween(this)
                .to({
                    x: -this.presenterPanel.width
                }, 300, Phaser.Easing.Linear.None, true, delay);
            this.game.add.tween(this.presenterIcon)
                .to({
                    alpha: 0
                }, 300, Phaser.Easing.Linear.None, true, delay);
            this.game.add.tween(this.presenterText)
                .to({
                    alpha: 0
                }, 300, Phaser.Easing.Linear.None, true, delay);
        }
    }
    src.PresenterLine = PresenterLine;
})(src || (src = {}));
var src;
(function(src) {
    class PresenterStarsPanel extends Phaser.Group {
        constructor() {
            super(src.App.instance, null);
            this.buildChildren();
        }
        buildChildren() {
            this.presenterPanel = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'informerPanel0000'));
            this.presenterPanel.anchor.set(0, 0.5);
            this.starsContainer = this.add(this.game.make.group(null));
            this.stars = [];
            for (let i = -1; i <= 1; i++) {
                let star = this.starsContainer.add(this.game.make.sprite(i * 75, 0, src.Settings.GAME_ATLAS, 'starSmall0000'));
                star.anchor.set(0.5, 0.5);
                this.stars.push(star);
            }
        }
        resize(windowBounds) {
            this.x = 0;
            this.presenterPanel.height = 95;
            this.presenterPanel.width = windowBounds.width;
            this.starsContainer.x = windowBounds.width / 2;
        }
        animateAppearing(numStars) {
            for (let i = 0; i < this.stars.length; i++) {
                this.stars[i].frameName = 'starSmall000' + (i < numStars ? 0 : 1);
                this.stars[i].alpha = 1;
                this.stars[i].scale.set(0);
            }
            this.x = -this.presenterPanel.width;
            this.game.add.tween(this)
                .to({
                    x: 0
                }, 350, Phaser.Easing.Linear.None, true, 350)
                .onComplete.add(() => {
                    this.stars.forEach((star, index) => {
                        this.game.add.tween(star)
                            .to({
                                alpha: 1
                            }, 300, Phaser.Easing.Linear.None, true, 150 + index * 120);
                        this.game.add.tween(star.scale)
                            .to({
                                x: 1,
                                y: 1
                            }, 300, Phaser.Easing.Back.Out, true, 150 + index * 120);
                    });
                });
        }
        animateDisappearing() {
            this.game.add.tween(this)
                .to({
                    x: -this.presenterPanel.width
                }, 400, Phaser.Easing.Linear.None, true, 200);
            this.stars.forEach((star, index) => {
                this.game.add.tween(star)
                    .to({
                        alpha: 0
                    }, 300, Phaser.Easing.Linear.None, true, index * 120);
            });
        }
    }
    src.PresenterStarsPanel = PresenterStarsPanel;
})(src || (src = {}));
var src;
(function(src) {
    class SongPresenter extends Phaser.Group {
        constructor(level) {
            super(src.App.instance, null);
            this.isShown = false;
            this.level = level;
            this.buildChildren();
        }
        buildChildren() {
            this.background = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'blackSquare0000'));
            this.background.anchor.set(0.5, 0.5);
            this.panelsContainer = this.add(this.game.make.group(null));
            this.titlePanel = this.panelsContainer.add(new src.PresenterLine('songTitleIcon0000'));
            this.titlePanel.position.set(0, -45);
            this.authorPanel = this.panelsContainer.add(new src.PresenterLine('songAuthorIcon0000'));
            this.authorPanel.position.set(0, 45);
            this.scoresPanel = this.panelsContainer.add(new src.PresenterLine('songScoresIcon0000'));
            this.scoresPanel.position.set(0, 135);
            this.visible = false;
        }
        resize() {
            this.background.position.set(this.level.windowBounds.centerX, this.level.windowBounds.centerY);
            this.background.width = this.level.windowBounds.width + 100;
            this.background.height = this.level.windowBounds.height + 100;
            this.panelsContainer.position.set(this.level.windowBounds.left, this.level.windowBounds.top + this.level.windowBounds.height * 0.4);
            this.titlePanel.resize(this.level.windowBounds);
            this.authorPanel.resize(this.level.windowBounds);
            this.scoresPanel.resize(this.level.windowBounds);
        }
        show(titleText, authorText, bestScores, callback) {
            if (!this.isShown) {
                this.isShown = true;
                this.scoresPanel.visible = bestScores > 0;
                this.visible = false;
                this.resize();
                if (SongPresenter.SKIP) {
                    if (src.Settings.ENABLE_API) {
                        window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_LEVELRESTART, {
                            levelName: this.level.melodyManager.getSongName()
                        });
                    }
                    this.visible = false;
                    SongPresenter.SKIP = false;
                    if (callback) {
                        callback();
                    }
                    return;
                }
                this.titlePanel.setText(titleText);
                this.authorPanel.setText(authorText);
                this.scoresPanel.setText('' + bestScores);
                this.background.alpha = 0;
                this.game.add.tween(this.background)
                    .to({
                        alpha: 0.5
                    }, 500, Phaser.Easing.Linear.None, true, 300)
                    .onStart.add(() => this.visible = true);
                this.titlePanel.animateAppearing(300);
                this.authorPanel.animateAppearing(400);
                this.scoresPanel.animateAppearing(500);
                this.game.time.events.add(2500, () => this.hide(callback));
            }
        }
        hide(callback) {
            this.game.add.tween(this.background)
                .to({
                    alpha: 0
                }, 500, Phaser.Easing.Linear.None, true, 100)
                .onComplete.add(() => {
                    if (this.parent) {
                        this.parent.removeChild(this);
                    }
                    this.visible = false;
                });
            this.game.time.events.add(500, () => {
                if (callback) {
                    callback();
                }
            });
            this.titlePanel.animateDisappearing(200);
            this.authorPanel.animateDisappearing(100);
            this.scoresPanel.animateDisappearing(0);
        }
    }
    SongPresenter.SKIP = false;
    src.SongPresenter = SongPresenter;
})(src || (src = {}));
var src;
(function(src) {
    class LevelProgressBar extends Phaser.Group {
        constructor(uiManager) {
            super(uiManager.game, null);
            this.isHidden = false;
            this.uiManager = uiManager;
            this.level = uiManager.level;
            this.color = src.BackgroundManager.instance.currentBackground;
            this.buildContent();
        }
        buildContent() {
            this.darkPanel = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'uiBackgroundDarkPanel0000'));
            this.darkPanel.anchor.set(0.5, 0);
            this.progressBarBackground = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'levelProgressBarBackground000' + this.color));
            this.progressBarBackground.anchor.set(0.5, 0);
            this.progressBar = this.add(this.game.make.sprite(-this.level.originalBounds.width / 2, 2.5, src.Settings.GAME_ATLAS, 'levelProgressBar000' + this.color));
            this.progressBar.anchor.set(0, 0);
            this.progressBar.width = 0;
            this.stars = [];
            for (let i = 0; i < 3; i++) {
                let star = this.add(this.game.make.sprite(src.Settings.STARS_MILESTONES[i] * this.level.windowBounds.width, 4, src.Settings.GAME_ATLAS, 'levelProgressBarStar000' + this.color));
                star.anchor.set(0.5, 0);
                this.stars.push(star);
            }
        }
        resize(windowBounds) {
            this.position.set(windowBounds.centerX, -4);
            this.darkPanel.width = windowBounds.width;
            this.progressBarBackground.width = windowBounds.width;
            this.progressBar.x = -windowBounds.width / 2;
            this.stars.forEach((star, index) => star.x = (Phaser.Math.clamp(src.Settings.STARS_MILESTONES[index], 0, 1) - 0.5) * this.level.windowBounds.width);
            this.update();
        }
        update() {
            super.update();
        }
        animateProgress() {
            this.game.add.tween(this.progressBar)
                .to({
                    width: Phaser.Math.clamp(src.ScoreManager.instance.getScoreProgress(), 0, 1) * this.level.windowBounds.width
                }, 300, Phaser.Easing.Circular.Out, true);
            let numStars = src.ScoreManager.instance.getCurrentStarsCount();
            this.stars.forEach((star, index) => {
                let starEarned = numStars > index;
                if (starEarned && star.frameName == 'levelProgressBarStar000' + this.color) {
                    this.game.add.tween(star.scale)
                        .to({
                            x: 1.3,
                            y: 1.3
                        }, 100, Phaser.Easing.Circular.Out, true, 0, 0, true);
                }
                star.frameName = 'levelProgressBarStar000' + (this.color + (starEarned ? 5 : 0));
            });
        }
        changeColor(color) {
            this.color = color;
            this.progressBar.frameName = 'levelProgressBar000' + this.color;
            this.progressBarBackground.frameName = 'levelProgressBarBackground000' + this.color;
            this.stars.forEach((star, index) => star.frameName = 'levelProgressBarStar000' + (this.color + (src.ScoreManager.instance.getCurrentStarsCount() > index ? 5 : 0)));
            this.update();
        }
        destroy() {
            super.destroy();
            this.uiManager = null;
            this.level = null;
        }
    }
    src.LevelProgressBar = LevelProgressBar;
})(src || (src = {}));
var src;
(function(src) {
    class SelectColorButton extends Phaser.Group {
        constructor(settingsWindow, x, y, color) {
            super(src.App.instance, null);
            this.isActive = false;
            this.settingsWindow = settingsWindow;
            this.position.set(x, y);
            this.color = color;
            this.buildContent();
        }
        buildContent() {
            this.panel = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'backgroundSelector000' + this.color));
            this.panel.anchor.set(0.5, 0.5);
            this.panel.inputEnabled = true;
            this.panel.events.onInputDown.add(this.changeBackground, this);
            this.blinkEffect = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'backgroundSelector0005'));
            this.blinkEffect.anchor.set(0.5, 0.5);
            this.blinkEffect.alpha = 0;
            this.checkbox = this.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'selectColorSign0000'));
            this.checkbox.anchor.set(0.5, 0.5);
        }
        show(delay) {
            this.checkbox.scale.set(0);
            this.panel.scale.x = 0;
            this.blinkEffect.alpha = 0;
            this.panel.alpha = 0;
            this.game.add.tween(this.panel)
                .to({
                    alpha: 1
                }, 250, Phaser.Easing.Circular.Out, true, delay);
            this.game.add.tween(this.panel.scale)
                .to({
                    x: 1
                }, 250, Phaser.Easing.Circular.Out, true, delay)
                .onComplete.add(() => {
                    this.updateActivity(true);
                });
        }
        changeBackground() {
            src.SoundController.instance.playClickSound();
            this.settingsWindow.changeBackground(this.color);
        }
        updateActivity(lazy = false) {
            if (this.color != src.BackgroundManager.instance.currentBackground) {
                this.game.add.tween(this.checkbox.scale)
                    .to({
                        x: 0,
                        y: 0
                    }, 200, Phaser.Easing.Circular.In, true, 0);
            } else if (this.color == src.BackgroundManager.instance.currentBackground) {
                this.game.add.tween(this.checkbox.scale)
                    .to({
                        x: 1,
                        y: 1
                    }, 200, Phaser.Easing.Back.Out, true, 0);
                if (!lazy) {
                    this.blinkEffect.alpha = 0.9;
                    this.game.add.tween(this.blinkEffect)
                        .to({
                            alpha: 0
                        }, 200, Phaser.Easing.Circular.Out, true, 0);
                }
            }
            this.isActive = this.color == src.BackgroundManager.instance.currentBackground;
            this.checkbox.visible = this.isActive;
        }
    }
    src.SelectColorButton = SelectColorButton;
})(src || (src = {}));
var src;
(function(src) {
    class SongPanel extends Phaser.Group {
        constructor(albumPanel, song) {
            super(albumPanel.game, null);
            /* stats */
            this.numStars = 0;
            this.requiredStars = 0;
            this.dragTreshold = 5;
            this.albumPanel = albumPanel;
            this.song = song;
            this.author = src.SongUtils.getAuthor(song.name);
            this.title = src.SongUtils.getTitle(song.name);
            this.buildContent();
            this.addListeners();
        }
        buildContent() {
            /* common */
            this.commonContent = this.add(this.game.make.group(null));
            this.headingPanel = this.commonContent.add(this.game.make.sprite(0, 0, src.Settings.GAME_ATLAS, 'songPanel0000'));
            this.headingPanel.anchor.set(0.5, 0);
            if (this.game.device.iOS) {
                this.titleText = this.commonContent.add(src.TextUtils.getBitmapText(this.title, -267, 46, 40, 0xFFFFFF));
                this.titleText.anchor.set(0, 0.5);
                this.authorText = this.commonContent.add(src.TextUtils.getBitmapText(this.author, -267, 81, 34, 0xFFFFFF));
                this.authorText.anchor.set(0, 0.5);
            } else {
                this.titleText = this.commonContent.add(src.TextUtils.getText(this.title, -267, 46, 32, "#FFFFFF"));
                this.titleText.anchor.set(0, 0.5);
                this.authorText = this.commonContent.add(src.TextUtils.getText(this.author, -267, 81, 28, "#FFFFFF"));
                this.authorText.anchor.set(0, 0.5);
            }
            this.titleText.width = Math.min(this.titleText.width, 334);
            this.authorText.width = Math.min(this.authorText.width, 334);
            /* unlocked content */
            this.unlockedContent = this.add(this.game.make.group(null));
            this.starsSprite = this.unlockedContent.add(this.game.make.sprite(195, 25, src.Settings.GAME_ATLAS, 'songStarsPanel0000'));
            this.starsSprite.anchor.set(0.5);
            this.playButton = this.unlockedContent.add(this.game.make.sprite(190, 90, src.Settings.GAME_ATLAS, 'playSongButton0000'));
            this.playButton.anchor.set(0.5);
            /* locked content */
            this.lockedContent = this.add(this.game.make.group(null));
            if (this.game.device.iOS) {
                this.requiredStarsText = this.lockedContent.add(src.TextUtils.getBitmapText('12', 208, 75, 60, 0xADADAD));
                this.requiredStarsText.anchor.set(0, 0.5);
            } else {
                this.requiredStarsText = this.lockedContent.add(src.TextUtils.getText('12', 208, 75, 52, "#ADADAD"));
                this.requiredStarsText.anchor.set(0, 0.5);
            }
            this.changeColor(src.BackgroundManager.instance.currentBackground);
        }
        playPressed() {
            src.SoundController.instance.playClickSound();
            if (src.Tutorial.FIRST_TIME_SHOWN) {
                src.SongStorage.instance.setCurrentSong(this.song);
                src.Settings.STARTED_FROM_EDITOR = false;
                src.TransitionScreen.instance.changeState("Level");
            } else {
                src.Tutorial.cachedSong = this.song;
                src.TransitionScreen.instance.changeState("Tutorial");
            }
        }
        editPressed() {
            if (this.song) {
                src.SongStorage.instance.setCurrentSong(this.song);
                if (src.SongStorage.instance.currentSong) {
                    this.game.state.start("SongEditor", true, false);
                }
            }
        }
        addListeners() {
            this.playButton.inputEnabled = true;
            this.playButton.events.onInputDown.add(this.handleInputDown, this);
            this.playButton.events.onInputUp.add(this.handleInputUp, this);
        }
        removeListeners() {
            this.playButton.events.onInputDown.removeAll();
            this.playButton.events.onInputUp.removeAll();
        }
        /**
         * UPDATE
         */
        isUnlocked() {
            return src.ScoreManager.instance.getRequiredStars(this.song) <= this.albumPanel.getCurrentStars() || src.Settings.UNLOCK_ALL_SONGS;
        }
        isCompleted() {
            return src.ScoreManager.instance.getSongStarsCount(this.song) > 0;
        }
        changeColor(color) {
            if (this.isUnlocked()) {
                if (this.titleText.tint != src.BackgroundManager.songTitleColors[color])
                    this.titleText.tint = src.BackgroundManager.songTitleColors[color];
                if (this.authorText.tint != src.BackgroundManager.songAuthorColors[color])
                    this.authorText.tint = src.BackgroundManager.songAuthorColors[color];
                this.playButton.frameName = 'playSongButton000' + color;
            } else {
                if (this.titleText.tint != 0xFFFFFF)
                    this.titleText.tint = 0xFFFFFF;
                if (this.authorText.tint != 0xFFFFFF)
                    this.authorText.tint = 0xFFFFFF;
            }
        }
        updateInfo() {
            if (this.isUnlocked()) {
                this.switchToUnlockedMode();
            } else {
                this.switchToLockedMode();
            }
            this.changeColor(src.BackgroundManager.instance.currentBackground);
        }
        switchToLockedMode() {
            this.lockedContent.visible = true;
            this.unlockedContent.visible = false;
            this.headingPanel.frameName = 'songPanel0001';
            const currentStars = this.albumPanel.getCurrentStars();
            const requiredStars = src.ScoreManager.instance.getRequiredStars(this.song);
            if (requiredStars != this.requiredStars) {
                this.requiredStars = requiredStars;
                this.requiredStarsText.text = '' + this.requiredStars;
            }
            this.titleText.x = -63;
            this.authorText.x = -63;
            this.requiredStarsText.x = this.requiredStarsText.text.length > 1 ? -180 : -173;
        }
        switchToUnlockedMode() {
            this.lockedContent.visible = false;
            this.unlockedContent.visible = true;
            this.headingPanel.frameName = 'songPanel0000';
            this.titleText.x = -267;
            this.authorText.x = -267;
            const numStars = src.ScoreManager.instance.getSongStarsCount(this.song);
            if (numStars != this.numStars) {
                this.numStars = numStars;
                this.starsSprite.frameName = 'songStarsPanel000' + numStars;
            }
        }
        /**
         * INPUT HANDLERS
         */
        handleInputDown(sprite, pointer) {
            this.inputDownWorldPosition = new Phaser.Point(pointer.worldX, pointer.worldY);
            src.App.instance.add.tween(sprite.scale).to({
                x: 0.95,
                y: 0.95
            }, 40).start();
        }
        handleInputUp(sprite, pointer) {
            if (this.inputDownWorldPosition && this.inputDownWorldPosition.distance(new Phaser.Point(pointer.worldX, pointer.worldY)) < this.dragTreshold) {
                if (src.Settings.DEBUG_MODE && this.game.input.keyboard.isDown(Phaser.Keyboard.SHIFT)) {
                    this.editPressed();
                } else {
                    this.playPressed();
                }
            }
            src.App.instance.add.tween(sprite.scale).to({
                x: 1,
                y: 1
            }, 40).start();
            this.inputDownWorldPosition = null;
        }
        destroy() {
            this.removeListeners();
            super.destroy();
            this.albumPanel = null;
            this.headingPanel = null;
            this.playButton = null;
            this.authorText = null;
            this.titleText = null;
            this.starsSprite = null;
        }
    }
    src.SongPanel = SongPanel;
})(src || (src = {}));
var src;
(function(src) {
    class ButtonUtils {
        static createButton(atlasName, spriteName, x, y, callback, callbackContext) {
            let button = new Phaser.Button(src.App.instance, x, y, atlasName, callback, callbackContext, spriteName + '0001', spriteName + '0000', spriteName + '0002', spriteName + '0000');
            button.anchor.setTo(0.5, 0.5);
            button.input.pixelPerfectClick = true;
            button.input.pixelPerfectAlpha = 1;
            button.input.useHandCursor = true;
            return button;
        }
        static createOneFrameButton(atlasName, spriteName, x, y, callback, callbackContext) {
            let button = new Phaser.Button(src.App.instance, x, y, atlasName, callback, callbackContext, spriteName + '0000', spriteName + '0000', spriteName + '0000', spriteName + '0000');
            button.anchor.setTo(0.5, 0.5);
            button.input.pixelPerfectClick = true;
            button.input.pixelPerfectAlpha = 1;
            button.input.useHandCursor = true;
            return button;
        }
        static createSimpleButton(atlasName, spriteName, x, y, startScale, callback, callbackContext) {
            let button = new Phaser.Button(src.App.instance, x, y, atlasName, callback, callbackContext, spriteName + '0000', spriteName + '0000', spriteName + '0000', spriteName + '0000');
            button.anchor.setTo(0.5, 0.5);
            button.scale.set(startScale);
            button.input.pixelPerfectClick = true;
            button.input.pixelPerfectAlpha = 1;
            button.input.useHandCursor = false;
            button["startScale"] = startScale;
            button.events.onInputOver.add(ButtonUtils.mouseOverHandler, this, 0);
            button.events.onInputOut.add(ButtonUtils.mouseOutHandler, this, 0);
            button.events.onInputDown.add(ButtonUtils.mouseDownHandler, this, 0);
            return button;
        }
        static createTwoFramesButton(atlasName, spriteName, x, y, startScale, callback, callbackContext) {
            let button = new Phaser.Button(src.App.instance, x, y, atlasName, callback, callbackContext, spriteName + '0000', spriteName + '0000', spriteName + '0001', spriteName + '0000');
            button.anchor.setTo(0.5, 0.5);
            button.scale.set(startScale);
            button.input.pixelPerfectClick = true;
            button.input.pixelPerfectAlpha = 1;
            button.input.useHandCursor = false;
            button["startScale"] = startScale;
            button.events.onInputOver.add(ButtonUtils.mouseOverHandler, this, 0);
            button.events.onInputOut.add(ButtonUtils.mouseOutHandler, this, 0);
            button.events.onInputDown.add(ButtonUtils.mouseDownHandler, this, 0);
            return button;
        }
        static mouseOverHandler(caller) {
            src.App.instance.add.tween(caller.scale).to({
                x: (caller["startScale"] || 1) * 1.02,
                y: (caller["startScale"] || 1) * 1.02
            }, 100).start();
        }
        static mouseOutHandler(caller) {
            src.App.instance.add.tween(caller.scale).to({
                x: (caller["startScale"] || 1),
                y: (caller["startScale"] || 1)
            }, 100).start();
        }
        static mouseDownHandler(caller) {
            src.SoundController.instance.playClickSound();
            src.App.instance.add.tween(caller.scale).to({
                x: (caller["startScale"] || 1) * 0.98,
                y: (caller["startScale"] || 1) * 0.98
            }, 50).to({
                x: caller["startScale"] || 1,
                y: caller["startScale"] || 1
            }, 50).start();
        }
    }
    src.ButtonUtils = ButtonUtils;
})(src || (src = {}));
var src;
(function(src) {
    class LocalStorageController {
        constructor() {
            this.isLocalStorageSupported = false;
            this.data = null;
            window["famobi"] = window["famobi"] || {};
            window["famobi"].localStorage = window["famobi"].localStorage || window.localStorage;
            this.data = {
                "scores": {},
                "tutorialCompleted": false
            };
        }
        static get instance() {
            return LocalStorageController._instance ? LocalStorageController._instance :
                LocalStorageController._instance = new LocalStorageController();
        }
        getScoresObject() {
            return this.data["scores"];
        }
        isTutorialCompleted() {
            return this.data["tutorialCompleted"];
        }
        save() {
            this.data["scores"] = src.ScoreManager.instance.getScoresObject();
            this.data["tutorialCompleted"] = src.Tutorial.FIRST_TIME_SHOWN;
            if (this.isLocalStorageSupported) {
                window["famobi"].localStorage.setItem(src.Settings.LOCAL_STORAGE_KEY, JSON.stringify(this.data));
            }
        }
        checkLocalStorageSupported() {
            try {
                this.isLocalStorageSupported = "localStorage" in window && window["localStorage"] !== null;
            } catch (e) {
                this.isLocalStorageSupported = false;
            }
        }
        loadSave() {
            this.checkLocalStorageSupported();
            if (this.isLocalStorageSupported) {
                if (window["famobi"].localStorage.getItem(src.Settings.LOCAL_STORAGE_KEY)) {
                    this.data = JSON.parse(window["famobi"].localStorage.getItem(src.Settings.LOCAL_STORAGE_KEY));
                } else {
                    window["famobi"].localStorage.setItem(src.Settings.LOCAL_STORAGE_KEY, JSON.stringify(this.data));
                }
            }
            this.finalizeLoading();
        }
        finalizeLoading() {
            src.ScoreManager.instance.initScores(LocalStorageController.instance.getScoresObject());
            src.Tutorial.FIRST_TIME_SHOWN = LocalStorageController.instance.isTutorialCompleted();
        }
    }
    src.LocalStorageController = LocalStorageController;
})(src || (src = {}));
var src;
(function(src) {
    class LocalizationManager {
        static getText(key) {
            let translatedText = window.famobi.__(key);
            return translatedText ? translatedText : "NO_TRANSLATION_YET";
        }
    }
    src.LocalizationManager = LocalizationManager;
})(src || (src = {}));
var src;
(function(src) {
    class SongMath {
        static calculateActualDuration(song) {
            let startSpeed = song.bpm / 60 * src.Settings.TILE_HEIGHT;
            let acceleration = (song.bpmAcceleration || src.Settings.BPM_ACCELERATION) / 60 * src.Settings.TILE_HEIGHT;
            return (SongMath.calculateFinalSpeed(song) - startSpeed) / acceleration;
        }
        static calculateNominalDuration(song) {
            let startSpeed = song.bpm / 60 * src.Settings.TILE_HEIGHT;
            let distance = 1 / song.baseStep * song.multiplier * src.Settings.TILE_HEIGHT;
            return distance / startSpeed;
        }
        static calculateFinalSpeed(song) {
            let startSpeed = song.bpm / 60 * src.Settings.TILE_HEIGHT;
            let acceleration = (song.bpmAcceleration || src.Settings.BPM_ACCELERATION) / 60 * src.Settings.TILE_HEIGHT;
            let distance = 1 / song.baseStep * song.multiplier * src.Settings.TILE_HEIGHT;
            return Math.sqrt(2 * acceleration * distance + startSpeed * startSpeed);
        }
        static calculateFinalBPM(song) {
            return SongMath.calculateFinalSpeed(song) * 60 / src.Settings.TILE_HEIGHT;
        }
        static isLongTile(tileModel, baseStep) {
            return tileModel.duration / baseStep >= 1.5;
        }
        static calculateNoteDelay(noteTime, startTime, currentBPM, bpmAcceleration, baseStep) {
            const totalSongHeightInBPM = 60 / baseStep;
            const distance = (noteTime - startTime) * totalSongHeightInBPM;
            const endBPM = Math.sqrt(2 * bpmAcceleration * distance + currentBPM * currentBPM);
            const resultingTime = (endBPM - currentBPM) / bpmAcceleration;
            return resultingTime;
        }
        static calculateTileDelay(distancePx, currentBPM, bpmAcceleration, baseStep) {
            const distance = distancePx * 60 / src.Settings.TILE_HEIGHT;
            const endBPM = Math.sqrt(2 * bpmAcceleration * distance + currentBPM * currentBPM);
            const resultingTime = (endBPM - currentBPM) / bpmAcceleration;
            return resultingTime;
        }
    }
    src.SongMath = SongMath;
})(src || (src = {}));
var src;
(function(src) {
    class TextUtils {
        static addText(parent, text, x, y, fontSize, color, fontFamily = src.Settings.DEFAULT_FONT_FAMILY, fontWidth = null) {
            return parent.add(TextUtils.getText(text, x, y, fontSize, color, fontFamily, fontWidth));
        }
        static getText(text, x, y, fontSize, color, fontFamily = src.Settings.DEFAULT_FONT_FAMILY, fontWidth = null) {
            let textField = new Phaser.Text(src.App.instance, x, y, text, {
                font: (fontWidth ? fontWidth + ' ' : '') + fontSize + "px " + fontFamily,
                fill: color,
                align: "center"
            });
            textField.anchor.setTo(0.5, 0.5);
            return textField;
        }
        static getBitmapText(text, x, y, fontSize, color = 0xFFFFFF, anchorX = 0.5, anchorY = 0.5, family = src.Settings.ROBOTO_BITMAP) {
            let textField = new Phaser.BitmapText(src.App.instance, x, y, family, text, fontSize, "center");
            textField.anchor.setTo(anchorX, anchorY);
            textField.tint = color;
            return textField;
        }
        static getShadowText(text, x, y, fontSize, color, shadowColor = "#000000", shadowX = 0, shadowY = 2, anchorX = 0.5, anchorY = 0.5, fontFamily = src.Settings.DEFAULT_FONT_FAMILY, fontWidth = null) {
            let textField = new Phaser.Text(src.App.instance, x, y, text, {
                font: (fontWidth ? fontWidth + ' ' : '') + fontSize + "px " + fontFamily,
                fill: color,
                align: "center"
            });
            textField.anchor.setTo(anchorX, anchorY);
            textField.setShadow(shadowX, shadowY, shadowColor, 0);
            return textField;
        }
        static getStyledText(text, x, y, fontSize, color, strokeColor, strokeThinkness = 4, fontFamily = src.Settings.DEFAULT_FONT_FAMILY, fontWidth = null) {
            let textField = new Phaser.Text(src.App.instance, x, y, text, {
                font: (fontWidth ? fontWidth + ' ' : '') + fontSize + "px " + fontFamily,
                fill: color,
                stroke: strokeColor,
                strokeThickness: strokeThinkness,
                align: "center"
            });
            textField.setShadow(0, 2, strokeColor, 0);
            textField.anchor.set(0.5, 0.5);
            return textField;
        }
        static convertMSToHumanTime(milliseconds) {
            let seconds = Math.floor(milliseconds / 1000);
            let minutes = Math.floor(seconds / 60);
            let restSeconds = seconds - minutes * 60;
            return (minutes < 10 ? "0" : "") + minutes + ":" + (restSeconds < 10 ? "0" : "") + restSeconds;
        }
    }
    src.TextUtils = TextUtils;
})(src || (src = {}));
var src;
(function(src) {
    class BaseWindow extends Phaser.Group {
        constructor(regX, regY, backgroundAlpha = src.Settings.WINDOW_BACKGROUND_ALPHA) {
            super(src.App.instance, null);
            this.backgroundAlpha = src.Settings.WINDOW_BACKGROUND_ALPHA;
            this.registrationPoint = new Phaser.Point(regX, regY);
            this.backgroundAlpha = backgroundAlpha;
            this.visible = false;
            this.buildBackground();
            this.buildContent();
        }
        buildBackground() {
            this.background = this.add(this.game.make.sprite(-50, -50, src.Settings.GAME_ATLAS, 'blackSquare0000'));
            this.background.width = this.game.world.width + 100;
            this.background.height = this.game.world.height + 100;
            this.background.alpha = this.backgroundAlpha;
            this.background.inputEnabled = true;
        }
        buildContent() {
            this.content = this.game.make.group(this);
            this.content.inputEnableChildren = true;
        }
        resize() {
            this.background.width = this.game.world.width + 100;
            this.background.height = this.game.world.height + 100;
            this.content.scale.set(src.CustomScaleManager.SCALE_X, src.CustomScaleManager.SCALE_Y);
            this.content.position.set(src.CustomScaleManager.WIDTH / 2 - src.CustomScaleManager.ORIGINAL_WIDTH * src.CustomScaleManager.SCALE_X / 2, src.CustomScaleManager.HEIGHT / 2 - src.CustomScaleManager.ORIGINAL_HEIGHT * src.CustomScaleManager.SCALE_Y / 2);
        }
        show() {
            this.visible = true;
            this.resize();
            this.game.stage.addChild(this);
        }
        hide() {
            this.visible = false;
            if (this.parent) {
                this.parent.removeChild(this);
            }
        }
        lockUpButtons(...args) {
            for (let i = 0; i < args.length; i++) {
                args[i]["inputEnabled"] = false;
            }
        }
        unlockButtons(...args) {
            for (let i = 0; i < args.length; i++) {
                args[i]["inputEnabled"] = true;
            }
        }
        destroy() {
            super.destroy();
            this.background = null;
            this.content = null;
        }
    }
    src.BaseWindow = BaseWindow;
})(src || (src = {}));
///<reference path="BaseWindow.ts"/>
var src;
(function(src) {
    class ResultsWindow extends src.BaseWindow {
        constructor() {
            super(0, 0, 0.3);
            this.oldBestScore = 0;
        }
        buildContent() {
            super.buildContent();
            this.plateContainer = this.content.add(this.game.make.group(null));
            this.plateContainer.position.copyFrom(this.registrationPoint);
            this.bottomContainer = this.content.add(this.game.make.group(null));
            this.bottomContainer.position.copyFrom(this.registrationPoint);
            this.scoresContainer = this.plateContainer.add(this.game.make.group(null));
            this.scoresContainer.position.set(0, 100);
            this.titleText = this.plateContainer.add(src.TextUtils.getText('', 0, -300, 48, "#FFFFFF"));
            this.titleText.anchor.set(0.5);
            this.authorText = this.plateContainer.add(src.TextUtils.getText('', 0, -240, 38, "#FFFFFF"));
            this.authorText.anchor.set(0.5);
            this.recordIcon = this.scoresContainer.add(this.game.make.sprite(-30, 0, src.Settings.GAME_ATLAS, 'recordIcon' + '0000'));
            this.recordIcon.anchor.set(0.5);
            this.scoresText = this.scoresContainer.add(src.TextUtils.getText('680', 30, 0, 64, "#FFFFFF"));
            this.scoresText.anchor.set(0.5, 0.5);
            this.buttonHome = this.plateContainer.add(src.ButtonUtils.createSimpleButton(src.Settings.GAME_ATLAS, 'buttonMenuWhite', -200, 335, 0.95, this.homeClicked, this));
            this.buttonRestart = this.plateContainer.add(src.ButtonUtils.createSimpleButton(src.Settings.GAME_ATLAS, 'buttonRestartWide', 0, 335, 0.95, this.restartClicked, this));
            this.buttonNext = this.plateContainer.add(src.ButtonUtils.createSimpleButton(src.Settings.GAME_ATLAS, 'buttonNextWhite', 200, 335, 0.95, this.nextClicked, this));
            /* STARS */
            this.starsContainer = this.plateContainer.add(this.game.make.group(null));
            this.starsContainer.position.set(0, -50);
            this.starADisabled = this.starsContainer.add(this.game.make.sprite(-150, -18, src.Settings.GAME_ATLAS, 'starBigDisabled' + '0000'));
            this.starADisabled.anchor.set(0.5);
            this.starBDisabled = this.starsContainer.add(this.game.make.sprite(0, -50, src.Settings.GAME_ATLAS, 'starBigDisabled' + '0000'));
            this.starBDisabled.anchor.set(0.5);
            this.starCDisabled = this.starsContainer.add(this.game.make.sprite(150, -18, src.Settings.GAME_ATLAS, 'starBigDisabled' + '0000'));
            this.starCDisabled.anchor.set(0.5);
            this.starA = this.starsContainer.add(this.game.make.sprite(-150, -18, src.Settings.GAME_ATLAS, 'starBig' + '0000'));
            this.starA.anchor.set(0.5);
            this.starB = this.starsContainer.add(this.game.make.sprite(0, -50, src.Settings.GAME_ATLAS, 'starBig' + '0000'));
            this.starB.anchor.set(0.5);
            this.starC = this.starsContainer.add(this.game.make.sprite(150, -18, src.Settings.GAME_ATLAS, 'starBig' + '0000'));
            this.starC.anchor.set(0.5);
            this.starADisabled.angle = this.starA.angle = -15;
            this.starBDisabled.angle = this.starB.angle = 0;
            this.starCDisabled.angle = this.starC.angle = 15;
            this.emitterA = this.createEmitter(this.starA, -150, -18);
            this.emitterB = this.createEmitter(this.starB, 0, -50);
            this.emitterC = this.createEmitter(this.starC, 150, -18);
        }
        show() {
            src.WindowManager.instance.hideAll();
            super.show();
            this.resize();
            this.updateData();
            this.animateContent();
            this.animateStars();
        }
        update() {
            super.update();
            this.recordIcon.x = Math.min(this.recordIcon.x, this.scoresText.x - this.scoresText.width / 2 - 40);
        }
        resize() {
            this.background.width = this.game.world.width + 100;
            this.background.height = this.game.world.height + 100;
            this.content.scale.set(src.CustomScaleManager.SCALE_X, src.CustomScaleManager.SCALE_Y);
            this.content.position.set(0, 0);
            if (!this.game.device.desktop && this.game.scale.isLandscape) {
                this.titleText.scale.set(1.8);
                this.authorText.scale.set(1.8);
                this.titleText.y = -340;
                this.scoresContainer.scale.set(1.6);
                this.buttonHome["startScale"] = 1.4;
                this.buttonHome.scale.set(1.4);
                this.buttonRestart["startScale"] = 1.4;
                this.buttonRestart.scale.set(1.4);
                this.buttonNext["startScale"] = 1.4;
                this.buttonNext.scale.set(1.4);
                this.buttonHome.position.set(-290, 320);
                this.buttonRestart.position.set(0, 320);
                this.buttonNext.position.set(290, 320);
            } else {
                this.titleText.scale.set(1);
                this.authorText.scale.set(1);
                this.titleText.y = -300;
                this.scoresContainer.scale.set(1);
                this.buttonHome.position.set(-200, 335);
                this.buttonRestart.position.set(0, 335);
                this.buttonNext.position.set(200, 335);
                this.buttonHome["startScale"] = 0.95;
                this.buttonHome.scale.set(0.95);
                this.buttonRestart["startScale"] = 0.95;
                this.buttonRestart.scale.set(0.95);
                this.buttonNext["startScale"] = 0.95;
                this.buttonNext.scale.set(0.95);
            }
            const windowWidth = src.CustomScaleManager.WIDTH / src.CustomScaleManager.SCALE_X;
            const windowHeight = src.CustomScaleManager.HEIGHT / src.CustomScaleManager.SCALE_Y;
            this.plateContainer.position.set(windowWidth / 2, windowHeight / 2);
        }
        updateData() {
            this.oldBestScore = src.ScoreManager.instance.getSongTotalScores(src.SongStorage.instance.currentSong.name);
            const achievedBestScore = src.ScoreManager.instance.getCurrentScores() > this.oldBestScore;
            src.ScoreManager.instance.updateCurrentSongScores(src.ScoreManager.instance.getCurrentStarScores(), src.ScoreManager.instance.getCurrentScores());
            src.LocalStorageController.instance.save();
            if (src.Settings.ENABLE_API) {
                this.buttonHome.visible = false;
                this.buttonRestart.visible = false;
                this.buttonNext.visible = false;
                window.famobi_analytics.trackScreen(window.famobi_analytics.SCREEN_LEVELRESULT);
            } else {
                this.animateButton(this.buttonHome, 300, 400);
                this.animateButton(this.buttonRestart, 300, 500);
                this.animateButton(this.buttonNext, 300, 600);
            }
            this.authorText.setText(src.SongUtils.getAuthor(src.SongStorage.instance.currentSong.name));
            this.titleText.setText(src.SongUtils.getTitle(src.SongStorage.instance.currentSong.name));
            this.recordIcon.x = -30;
            this.recordIcon.scale.set(0.5);
            this.recordIcon.alpha = 0;
            this.titleText.fontSize = this.titleText.text.length <= 25 ? 48 : Phaser.Math.clamp(Math.floor(48 - (this.titleText.text.length - 25) * 1.4), 12, 48);
        }
        animateContent() {
            this.clearTweens();
            this.background.alpha = 0;
            this.game.add.tween(this.background)
                .to({
                    alpha: this.backgroundAlpha
                }, 300, Phaser.Easing.Circular.Out, true, 0);
            src.SoundController.instance.playResultsSound();
            this.bottomContainer.alpha = 0;
            this.bottomContainer.position.set(this.registrationPoint.x, this.registrationPoint.y + 250);
            this.game.add.tween(this.bottomContainer)
                .to({
                    alpha: 1
                }, 300, Phaser.Easing.Circular.Out, true, 150);
            this.game.add.tween(this.bottomContainer)
                .to({
                    y: this.registrationPoint.y
                }, 300, Phaser.Easing.Sinusoidal.Out, true, 120);
            this.plateContainer.alpha = 0;
            this.plateContainer.y = this.plateContainer.y - 120;
            this.game.add.tween(this.plateContainer)
                .to({
                    alpha: 1
                }, 300, Phaser.Easing.Circular.Out, true, 150);
            this.game.add.tween(this.plateContainer)
                .to({
                    y: this.plateContainer.y + 120
                }, 300, Phaser.Easing.Sinusoidal.Out, true, 150);
            let scoreTextTweenDuration = src.ScoreManager.instance.getCurrentScores() > 50 ? 1000 : src.ScoreManager.instance.getCurrentScores() / 50 * 700;
            this.countingStartEvent = this.game.time.events.add(300, () => src.SoundController.instance.startCountingSound());
            this.countingEndEvent = this.game.time.events.add(300 + scoreTextTweenDuration, () => {
                src.SoundController.instance.stopCountingSound();
                this.callFamobiEvents();
            });
            this.recordIcon.frameName = 'recordIcon000' + (src.ScoreManager.instance.getCurrentScores() >= this.oldBestScore ? 0 : 1);
            this.scoresText.addColor((src.ScoreManager.instance.getCurrentScores() >= this.oldBestScore) ? "#FCD200" : "#FFFFFF", 0);
            this.game.add.tween(this.recordIcon.scale)
                .to({
                    x: 1,
                    y: 1
                }, 350, Phaser.Easing.Back.Out, true, 200);
            this.game.add.tween(this.recordIcon)
                .to({
                    alpha: 1
                }, 350, Phaser.Easing.Linear.None, true, 200);
            this.animateText(this.scoresText, 0, src.ScoreManager.instance.getCurrentScores(), scoreTextTweenDuration, 300)
                .onComplete.add(() => {});
        }
        callFamobiEvents() {
            var showButtons = function() {
                this.animateButton(this.buttonHome, 300, 400);
                this.animateButton(this.buttonRestart, 300, 500);
                this.animateButton(this.buttonNext, 300, 600);
            }.bind(this);
            setTimeout(() => {
                Promise.all([
                    window.famobi_analytics.trackEvent("EVENT_LEVELFAIL", {
                        levelName: src.SongStorage.instance.currentSong.name,
                        reason: "dead"
                    }),
                    window.famobi_analytics.trackEvent("EVENT_LEVELSCORE", {
                        levelName: src.SongStorage.instance.currentSong.name,
                        levelScore: src.ScoreManager.instance.getCurrentScores()
                    }),
                    window.famobi_analytics.trackEvent("EVENT_TOTALSCORE", {
                        totalScore: src.ScoreManager.instance.getTotalScores()
                    })
                ]).then(showButtons, showButtons);
            }, 1000);
        }
        animateButton(button, duration, delay) {
            button.visible = true;
            button.scale.set(0.5);
            button.alpha = 0;
            this.game.add.tween(button)
                .to({
                    alpha: 1
                }, duration, Phaser.Easing.Cubic.Out, true, delay);
            this.game.add.tween(button.scale)
                .to({
                    x: button["startScale"] || 1,
                    y: button["startScale"] || 1
                }, duration, Phaser.Easing.Back.Out, true, delay);
        }
        animateText(text, initialValue, targetValue, duration, delay) {
            let currentValueHolder = {
                value: initialValue
            };
            text.text = '' + ~~initialValue;
            let tween = this.game.add.tween(currentValueHolder)
                .to({
                    value: ~~targetValue
                }, duration, Phaser.Easing.Linear.None, true, delay);
            tween.onUpdateCallback(() => text.text = `${~~currentValueHolder["value"]}`);
            tween.onComplete.add(() => text.text = `${~~targetValue}`);
            return tween;
        }
        clearTweens() {
            this.game.tweens.removeFrom(this.background);
            this.game.tweens.removeFrom(this.plateContainer, false);
            this.game.time.events.remove(this.countingStartEvent);
            this.game.time.events.remove(this.countingEndEvent);
            src.SoundController.instance.stopCountingSound();
        }
        /**
         * STARS
         */
        animateStars() {
            let starsCount = src.ScoreManager.instance.getCurrentStarsCount();
            let startDelay = 750;
            this.starA.visible = starsCount >= 1;
            this.starB.visible = starsCount >= 2;
            this.starC.visible = starsCount >= 3;
            if (this.starA.visible) {
                this.tweenStar(this.starA, -250, 225, -150, -18, startDelay, 1, this.emitterA);
            }
            if (this.starB.visible) {
                this.tweenStar(this.starB, 0, 300, 0, -50, startDelay + 450, 2, this.emitterB);
            }
            if (this.starC.visible) {
                this.tweenStar(this.starC, 250, 225, 150, -18, startDelay + 900, 3, this.emitterC);
            }
        }
        tweenStar(star, startX, startY, endX, endY, delay, soundKey, emitter) {
            star.alpha = 0;
            star.scale.set(3);
            star.position.set(startX, startY);
            this.game.add.tween(star)
                .to({}, 200, Phaser.Easing.Sinusoidal.In, true, delay)
                .onComplete.add(() => src.SoundController.instance.playStarSound(soundKey));
            this.game.add.tween(star)
                .to({
                    x: endX,
                    y: endY,
                    alpha: 1
                }, 250, Phaser.Easing.Sinusoidal.In, true, delay);
            this.game.add.tween(star.scale)
                .to({
                    x: 1,
                    y: 1
                }, 250, Phaser.Easing.Sinusoidal.In, true, delay)
                .onComplete.add(this.shakeScreen, this, 0, emitter);
        }
        shakeScreen(a, b, emitter) {
            this.emitParticles(emitter);
            this.game.camera.shake(0.006, 200);
        }
        createEmitter(targetStar, x, y) {
            let emitter = this.game.make.emitter(x, y);
            this.starsContainer.add(emitter, false, this.starsContainer.getChildIndex(targetStar));
            emitter.makeParticles(src.Settings.GAME_ATLAS, ['starBig0000']);
            emitter.minParticleScale = 0.2;
            emitter.maxParticleScale = 0.4;
            emitter.gravity.setTo(0, 900);
            emitter.setYSpeed(-450, 150);
            emitter.setXSpeed(-350, 350);
            emitter.setRotation(-180, 180);
            emitter.autoAlpha = true;
            emitter.setAlpha(1, 0, 400, Phaser.Easing.Cubic.In);
            return emitter;
        }
        emitParticles(emitter) {
            emitter.start(true, 500, 1, 20);
        }
        /**
         * HIDE
         */
        hide() {
            this.clearTweens();
            super.hide();
        }
        /**
         * BUTTON HANDLERS
         */
        homeClicked() {
            src.TransitionScreen.instance.changeState("SongsMenu", () => this.hide());
            src.App.instance.showAd(50);
        }
        restartClicked() {
            src.SongPresenter.SKIP = true;
            src.TransitionScreen.instance.changeState("Level", () => this.hide());
            src.App.instance.showAd(50);
        }
        nextClicked() {
            src.MainMenu.loadNextSong();
            src.App.instance.showAd(50);
        }
    }
    src.ResultsWindow = ResultsWindow;
})(src || (src = {}));
///<reference path="BaseWindow.ts"/>
var src;
(function(src) {
    class SettingsWindow extends src.BaseWindow {
        constructor() {
            super(0, 0, 0.35);
            this.isGameplayVersion = true;
        }
        buildContent() {
            super.buildContent();
            this.plateContainer = this.content.add(this.game.make.group(null));
            this.plateContainer.position.copyFrom(this.registrationPoint);
            this.icon = this.plateContainer.add(this.game.make.sprite(0, -315, src.Settings.GAME_ATLAS, 'settingsIconBig' + '0000'));
            this.icon.anchor.set(0.5);
            this.buttonClose = this.plateContainer.add(src.ButtonUtils.createTwoFramesButton(src.Settings.GAME_ATLAS, 'buttonClose', 206, -310, 1.5, this.closeClicked, this));
            this.buttonsContainer = this.plateContainer.add(this.game.make.group(null));
            this.buttonsContainer.position.set(0, 320);
            this.colorButtonsContainer = this.plateContainer.add(this.game.make.group(null));
            this.colorButtonsContainer.position.set(0, 0);
            this.buttonHome = this.buttonsContainer.add(src.ButtonUtils.createSimpleButton(src.Settings.GAME_ATLAS, 'buttonMenu', -140, 0, 1, this.homeClicked, this));
            this.buttonRestart = this.buttonsContainer.add(src.ButtonUtils.createSimpleButton(src.Settings.GAME_ATLAS, 'buttonRestart', 0, 0, 1, this.restartClicked, this));
            this.buttonSoundOn = this.buttonsContainer.add(src.ButtonUtils.createSimpleButton(src.Settings.GAME_ATLAS, 'buttonSoundOn', 140, 0, 1, this.soundOnClicked, this));
            this.buttonSoundOff = this.buttonsContainer.add(src.ButtonUtils.createSimpleButton(src.Settings.GAME_ATLAS, 'buttonSoundOff', 140, 0, 1, this.soundOffClicked, this));
            this.buttonTutorial = this.buttonsContainer.add(src.ButtonUtils.createSimpleButton(src.Settings.GAME_ATLAS, 'buttonTutorial', 140, 0, 1, this.tutorialClicked, this));
            this.colorButtons = [];
            this.colorButtons.push(this.colorButtonsContainer.add(new src.SelectColorButton(this, -160, -80, 0)));
            this.colorButtons.push(this.colorButtonsContainer.add(new src.SelectColorButton(this, 0, -80, 1)));
            this.colorButtons.push(this.colorButtonsContainer.add(new src.SelectColorButton(this, 160, -80, 2)));
            this.colorButtons.push(this.colorButtonsContainer.add(new src.SelectColorButton(this, -80, 80, 3)));
            this.colorButtons.push(this.colorButtonsContainer.add(new src.SelectColorButton(this, 80, 80, 4)));
            this.updateSoundButtons();
        }
        resize() {
            this.background.width = this.game.world.width + 100;
            this.background.height = this.game.world.height + 100;
            const innerWidth = src.CustomScaleManager.WIDTH / src.CustomScaleManager.SCALE_X;
            const innerHeight = src.CustomScaleManager.HEIGHT / src.CustomScaleManager.SCALE_Y;
            this.content.scale.set(src.CustomScaleManager.SCALE_X, src.CustomScaleManager.SCALE_Y);
            this.content.position.set(0, 0);
            this.plateContainer.position.set(innerWidth / 2, innerHeight / 2);
            if (!this.game.device.desktop && this.game.scale.isLandscape) {
                this.buttonClose.position.set(innerWidth / 2 - 80, -innerHeight / 2 + 80);
                this.buttonClose.scale.set(2);
                this.buttonClose["startScale"] = 2;
                this.colorButtonsContainer.scale.set(1.07);
                this.icon.scale.set(1);
                this.icon.position.set(0, Math.min(-320, -(innerHeight / 2) + (innerHeight / 2 - this.colorButtonsContainer.height / 2)));
                this.buttonsContainer.scale.set(1.3);
                this.buttonsContainer.position.set(0, Math.max(320, innerHeight / 2 - this.colorButtonsContainer.height / 2));
            } else {
                this.buttonClose.position.set(innerWidth / 2 - 60, -innerHeight / 2 + 60);
                this.buttonClose.scale.set(1.5);
                this.buttonClose["startScale"] = 1.5;
                this.colorButtonsContainer.scale.set(1);
                this.colorButtonsContainer.position.set(0, 0);
                this.icon.scale.set(0.85);
                this.icon.position.set(0, Math.min(-320, -(innerHeight / 2) + (innerHeight / 2 - this.colorButtonsContainer.height / 2)));
                this.buttonsContainer.scale.set(1.15);
                this.buttonsContainer.position.set(0, Math.max(340, (innerHeight / 2) - (innerHeight / 2 - this.colorButtonsContainer.height / 2) / 2));
            }
        }
        showMenuVersion() {
            this.isGameplayVersion = false;
            this.show();
            this.buttonHome.visible = false;
            this.buttonRestart.visible = false;
            this.buttonTutorial.visible = true;
            this.buttonTutorial.x = -72;
            this.buttonSoundOn.x = 72;
            this.buttonSoundOff.x = 72;
            this.animateButton(this.buttonSoundOn, 300, 500);
            this.animateButton(this.buttonSoundOff, 300, 500);

            if (window.famobi.hasFeature("external_mute")) {
                this.buttonTutorial.x = 0;
                this.animateButton(this.buttonTutorial, 300, 400);
            } else {
                this.animateButton(this.buttonTutorial, 300, 400);
            }

            if (src.Settings.ENABLE_API) {
                window.famobi_analytics.trackScreen(window.famobi_analytics.SCREEN_SETTINGS);
            }
        }
        showGameplayVersion() {
            this.isGameplayVersion = true;
            this.show();
            this.buttonHome.visible = true;
            this.buttonRestart.visible = true;
            this.buttonTutorial.visible = false;
            this.buttonSoundOn.x = 140;
            this.buttonSoundOff.x = 140;
            this.animateButton(this.buttonHome, 300, 400);
            this.animateButton(this.buttonSoundOn, 300, 600);
            this.animateButton(this.buttonSoundOff, 300, 600);

            if (window.famobi.hasFeature("external_mute")) {
                this.buttonRestart.x = 140;
                this.animateButton(this.buttonRestart, 300, 600);
            } else {
                this.animateButton(this.buttonRestart, 300, 500);
            }

            if (src.Settings.ENABLE_API) {
                window.famobi_analytics.trackScreen(window.famobi_analytics.SCREEN_PAUSE);
                src.App.instance.showAd(50);
            }
        }
        show() {
            super.show();
            this.hideGameContent();
            this.resize();
            this.updateData();
            this.tweenAppearing();
        }
        updateData() {
            if (this.game.state.getCurrentState() instanceof src.Level) {
                this.game.state.getCurrentState().gameStateManager.pauseLevel(true);
                src.ScoreManager.instance.updateCurrentSongScores(src.ScoreManager.instance.getCurrentStarScores(), src.ScoreManager.instance.getCurrentScores());
                src.LocalStorageController.instance.save();
            }
        }
        tweenAppearing() {
            this.clearTweens();
            this.background.alpha = 0;
            this.game.add.tween(this.background)
                .to({
                    alpha: this.backgroundAlpha
                }, 300, Phaser.Easing.Circular.Out, true, 0);
            this.plateContainer.alpha = 0;
            this.plateContainer.y = this.plateContainer.y - 120;
            this.game.add.tween(this.plateContainer)
                .to({
                    alpha: 1
                }, 300, Phaser.Easing.Circular.Out, true, 150);
            this.game.add.tween(this.plateContainer)
                .to({
                    y: this.plateContainer.y + 120
                }, 300, Phaser.Easing.Sinusoidal.Out, true, 100);
            this.updateSoundButtons();
        }
        animateButton(button, duration, delay) {
            button.scale.set(0.5);
            button.alpha = 0;
            this.game.add.tween(button)
                .to({
                    alpha: 1
                }, duration, Phaser.Easing.Cubic.Out, true, delay);
            this.game.add.tween(button.scale)
                .to({
                    x: 1,
                    y: 1
                }, duration, Phaser.Easing.Back.Out, true, delay);
            for (let i = 0; i < this.colorButtons.length; i++) {
                this.colorButtons[i].show(200 + 40 * i);
            }
        }
        clearTweens() {
            this.game.tweens.removeFrom(this.background);
            this.game.tweens.removeFrom(this.plateContainer, false);
        }
        hide() {
            if (this.game.state.getCurrentState() instanceof src.Level) {
                this.game.state.getCurrentState().gameStateManager.resumeLevel();
            }
            this.clearTweens();
            this.restoreGameContent();
            super.hide();
        }
        /**
         * ACTIONS
         */
        changeBackground(color) {
            src.BackgroundManager.instance.changeBackground(color);
            this.colorButtons.forEach(button => button.updateActivity());
        }
        /**
         * HIDE/RESTORE CONTENT
         */
        hideGameContent() {
            const currentState = this.game.state.getCurrentState();
            if (currentState) {
                this.game.add.tween(currentState.container)
                    .to({
                        alpha: this.isGameplayVersion ? 0.1 : 0.0
                    }, 200, Phaser.Easing.Linear.None, true);
            }
        }
        restoreGameContent() {
            const currentState = this.game.state.getCurrentState();
            if (currentState) {
                currentState.container.alpha = 1;
            }
        }
        /**
         * BUTTON HANDLERS
         */
        closeClicked() {
            this.hide();
        }
        homeClicked() {
            let _this = this;
            window.famobi_analytics.trackEvent("EVENT_LEVELFAIL", {
                levelName: src.SongStorage.instance.currentSong.name,
                reason: "quit"
            }).then(function() {
                src.TransitionScreen.instance.changeState("SongsMenu", () => _this.hide());
                src.App.instance.showAd(50);
            });
        }
        restartClicked() {
            src.SongPresenter.SKIP = true;
            src.TransitionScreen.instance.changeState("Level", () => this.hide());
            src.App.instance.showAd(50);
        }
        tutorialClicked() {
            src.TransitionScreen.instance.changeState("Tutorial");
        }
        soundOnClicked() {
            src.SoundController.instance.muteAudio();
            this.updateSoundButtons();
        }
        soundOffClicked() {
            src.SoundController.instance.unmuteAudio();
            this.updateSoundButtons();
        }
        updateSoundButtons() {

            if (window.famobi.hasFeature("external_mute")) {
                this.buttonSoundOn.visible = false;
                this.buttonSoundOff.visible = false;
                return;
            }

            if (this.game.sound.mute) {
                this.buttonSoundOn.visible = false;
                this.buttonSoundOff.visible = true;
            } else {
                this.buttonSoundOn.visible = true;
                this.buttonSoundOff.visible = false;
            }
        }
    }
    src.SettingsWindow = SettingsWindow;
})(src || (src = {}));
var src;
(function(src) {
    class WindowManager {
        constructor() {
            this.isInitialized = false;
        }
        static get instance() {
            return WindowManager._instance ? WindowManager._instance : WindowManager._instance = new WindowManager();
        }
        init() {
            this.settings = new src.SettingsWindow();
            this.results = new src.ResultsWindow();
            this.isInitialized = true;
        }
        resize() {
            if (this.isInitialized) {
                this.settings.resize();
                this.results.resize();
            }
        }
        showSettings(duringLevel) {
            if (duringLevel) {
                this.settings.showGameplayVersion();
            } else {
                this.settings.showMenuVersion();
            }
        }
        showResults() {
            this.results.show();
        }
        hideAll() {
            this.settings.hide();
            this.results.hide();
        }
    }
    WindowManager._instance = null;
    src.WindowManager = WindowManager;
})(src || (src = {}));
//# sourceMappingURL=game.js.map