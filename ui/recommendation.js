/*
	* Recommendation Algorithm (c) Zane Wesley 2021
	* License at https://zanewesley.github.io/license
*/
(function() {
	
	'use strict'

	function getHistory() {
		var appHistory = "hextris,assistant,inspiration";
		if(localStorage.getItem('appHistory')) {
			appHistory = localStorage.getItem('appHistory');
		}
		return appHistory.split(',');
	}

	var updateHistory = function(appName) {
		var appHistory = getHistory();
		if(!appHistory) appHistory = [];
		appHistory.unshift(appName);
		localStorage.setItem('appHistory', appHistory);
	}

	function matchCategory(appName) {
		var categories = ['games', 'resources', 'other'];
		var gameApps = document.querySelectorAll('games-li li');
		var resourceApps = document.querySelectorAll('resources-li li');
		var miscApps = document.querySelectorAll('misc-li li');
		var category;

		for(var i=0; i<apps.length; i++) {
			if(appName == gameApps[i].id) {
				category=categories[0];
				break;
			} else if(appName == resourceApps[i].id) {
				category=categories[1];
				break;
			} else if(appName == miscApps[i].id) {
				category=categories[2];
				break;
			}
		}

		return category;
	}

	function getInterests() {
		var apps = [];
		var gameApps = document.querySelectorAll('games-li li');
		var resourceApps = document.querySelectorAll('resources-li li');
		var miscApps = document.querySelectorAll('misc-li li');
		apps.concat(gameApps, resourceApps, miscApps);
		var recent1, recent2, recent3;
		for (var i=0; i<apps.length; i++) {
			if(getHistory()[0] == apps[i].id) {
				recent1 = matchCategory(apps[i].id);
				break;
			}
		}
		for (var i=0; i<apps.length; i++) {
			if(getHistory()[1] == apps[i].id) {
				recent2 = matchCategory(apps[i].id);
				break;
			}
		}
		for (var i=0; i<apps.length; i++) {
			if(getHistory()[2] == apps[i].id) {
				recent3 = matchCategory(apps[i].id);
				break;
			}
		}

		return [recent1, recent2, recent3];
	}

	function getMatchingApps(interestsArray) {
		var recommendedApps = [];
		var gameApps = [document.querySelectorAll('games-li li')];
		var resourceApps = [document.querySelectorAll('resources-li li')];
		var miscApps = [document.querySelectorAll('misc-li li')];

		for(var i=0; i<interestsArray.length; i++) {
			if(interestsArray[i] == 'games') {
				recommendedApps.unshift(gameApps[Math.ceil(Math.random()*gameApps.length)].id);
			} else if(interestsArray[i] == 'resources') {
				recommendedApps.unshift(resourceApps[Math.ceil(Math.random()*resourceApps.length)].id);
			} else if(interestsArray[i] == 'other') {
				recommendedApps.unshift(miscApps[Math.ceil(Math.random()*miscApps.length)].id);
			}
		}

		return recommendedApps;
	}

	function getRecommendations() {
		var history = getHistory();
		var interests = getInterests();
		//var recommendedApps = getMatchingApps(interests);
		var rec1, rec2, rec3;

		for(var i=0; i<history.length; i++) {
			if(history[i] !== history[i+1] && !rec1) {
				rec1 = history[i];
			} else if(history[i] !== history[i+1] && !rec2) {
				rec2 = history[i];
			} else if(history[i] !== history[i+1] && !rec3) {
				rec3 = history[i];
				break;
			}
		}

		if(history.length > 0) {

			document.getElementById('recommended-li').innerHTML = `
				<li data-url="/${history[0]}" onclick="document.getElementById('${rec1}').click()">
					${document.getElementById(rec1).innerText}
				</li>
				<li data-url="/${history[1]}" onclick="document.getElementById('${rec2}').click()">
					${document.getElementById(rec2).innerText}
				</li>
				<li data-url="/${history[2]}" onclick="document.getElementById('${rec3}').click()">
					${document.getElementById(rec3).innerText}
				</li>
			`;

		} else {
			document.getElementById('recommended-li').innerHTML ="<li>Use some apps to get recommendations!</li>";
		}

	}

	var initRec = function() {
		console.log('Recommendation Initiated');
		getRecommendations();
	}

	window.updateHistory = updateHistory;
	initRec();

})();