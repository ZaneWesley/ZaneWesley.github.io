window.tempCoinStorage = {
  _data: {},

  setItem: function (id, val) {
    return this._data[id] = String(val);
  },

  getItem: function (id) {
    return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
  },

  removeItem: function (id) {
    return delete this._data[id];
  },

  clear: function () {
    return this._data = {};
  }
};

function StoreManager() {
	this.coinValueKey = "2048Coins";
	this.themesKey = "2048Themes";
	this.currentThemeKey = "2048Theme";

	var LocalStorageManagerContructor = new LocalStorageManager();
	var supported = LocalStorageManagerContructor.localStorageSupported();
  	this.storage = supported ? window.localStorage : window.tempCoinStorage;
}

//Coin value setters/getters
StoreManager.prototype.getCoins = function() {
	return this.storage.getItem(this.coinValueKey) || 0;
}

StoreManager.prototype.setCoins = function (val) {
  this.storage.setItem(this.coinValueKey, val);
};

//Theme setters/getters
StoreManager.prototype.getThemes = function() {
	return JSON.parse(this.storage.getItem(this.themesKey)) || [];
}

StoreManager.prototype.setThemes = function (val) {
  this.storage.setItem(this.themesKey, JSON.stringify(val));
};

StoreManager.prototype.getCurrentTheme = function() {
	return this.storage.getItem(this.currentThemeKey) || "default";
}

StoreManager.prototype.setCurrentTheme = function (val) {
  this.storage.setItem(this.currentThemeKey, val);
};

//Set score on page load
var Mngr = new StoreManager();
document.querySelector('.coin-container').textContent = Mngr.getCoins();
