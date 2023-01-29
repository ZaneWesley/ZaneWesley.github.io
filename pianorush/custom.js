window.famobi = window.famobi || {};
window.famobi_analytics = window.famobi_analytics || {};
window.famobi_tracking = window.famobi_tacking || {
    init: function() {},
    trackEvent: function() {},
    EVENTS: {
        'LEVEL_START': 'event/level/start',
        'LEVEL_END': 'event/level/end',
        'LEVEL_UPDATE': 'event/level/update',
        'PING': 'event/ping',
        'AD': 'event/ad'
    }
};

let _liveScore = null;
const _sendScore = function(score) {
    if (score !== _liveScore) {
        _liveScore = score;
        // Score API
        GAMESNACKS.sendScore(_liveScore);
    }
};

let _gameOver = false;

window.famobi_analytics.trackEvent = function(event, params) {

    IS_DEBUG && console.log("trackEvent", event, params);

    return new Promise(function(resolve, reject) {
        switch (event) {
            case "EVENT_TOTALSCORE":
                break;
            case "EVENT_LEVELSCORE":
                _sendScore(params.levelScore);
                break;
            case "EVENT_LEVELSTART":
                _gameOver = false;
                break;
            case "EVENT_LEVELRESTART":
                if (!_gameOver) {
                    // GameOver API
                    GAMESNACKS.gameOver();
                }
                _gameOver = false;
                break;
            case "EVENT_LIVESCORE":
                _sendScore(params.liveScore);
                break;
            case "EVENT_LEVELFAIL":
                // GameOver API
                GAMESNACKS.gameOver();
                _gameOver = true;
                break;
            case "EVENT_LEVELSUCCESS":
                _gameOver = true;
                // LevelComplete API
                GAMESNACKS.levelComplete(parseInt(params.levelName.replace("level", "")));
            default:
                // do nothing
        }
        return resolve(event, params);
    });
};

window.famobi_analytics.trackStats = function() {
    return Promise.resolve();
};