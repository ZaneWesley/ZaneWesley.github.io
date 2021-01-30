/*
 * (c) Zane Harrison 2021
 * https://github.com/zanewesley/license
*/

var darkModeManager = (function (mode) {

	'use strict';

	var darkModeStyles = '.darkModeToggle { background-color: rgba(0, 0, 0, 0.2); border: none; border-radius: 1em; color: white; /*padding: 20px;*/ text-align: center; text-decoration: none; display: inline-block; font-size: 2em; /*margin: 4px 2px;*/ position: fixed; right: 1em; bottom: 1em; z-index: 3; transition: all 1s; color: #1e1f26; fill: #1e1f26; cursor: pointer; width: 30px; height: 30px; } .darkModeToggle svg { width: 100%; height: 100%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); } .dark .darkModeToggle { background-color: rgba(255, 255, 255, 0.2); color: #ccc; fill: #ccc; transform: rotate(180deg); }';
	var head = head = document.head || document.getElementsByTagName('head')[0];
	var styleElem = document.createElement('style');
	head.appendChild(styleElem);

	styleElem.type = 'text/css';
	if (styleElem.styleSheet){
		// This is required for IE8 and below.
		styleElem.styleSheet.cssText = darkModeStyles;
	} else {
		styleElem.appendChild(document.createTextNode(darkModeStyles));
}

	var darkModeToggle = document.createElement('div');
	darkModeToggle.classList.add('darkModeToggle');
	darkModeToggle.innerHTML = '<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"></path></svg>';

	document.body.appendChild(darkModeToggle);

	darkModeToggle.querySelector('svg').style = 'width: 100%; height: 100%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);';

		switch(mode) {
			case 'match':
				if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
					localStorage.setItem("dark-mode", "on");
					document.body.classList.add('dark');
				} else {
					localStorage.setItem("dark-mode", "off");
					document.body.classList.remove('dark');
				}
				break;
			case 'dark':
				localStorage.setItem("dark-mode", "on");
				document.body.classList.add('dark');
				break;
			case 'light':
				localStorage.setItem("dark-mode", "off");
				document.body.classList.remove('dark');
				break;
			default:
				if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
					localStorage.setItem("dark-mode", "on");
					document.body.classList.add('dark');
				} else {
					localStorage.setItem("dark-mode", "off");
					document.body.classList.remove('dark');
				}
				break;
		}

	/*if(localStorage.getItem("dark-mode") == 'on') {
		document.body.classList.add('dark');
	}*/

	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
	    var newColorScheme = e.matches ? "dark" : "light";
	    if(newColorScheme == "dark") {
	    	document.body.classList.add('dark');
	    } else {
	    	document.body.classList.remove('dark');
	    }
	});

	document.querySelectorAll('.darkModeToggle').forEach(function(elem) {
		elem.addEventListener('click', function(e) {
			if(!document.body.classList.contains('dark')) {
				document.body.classList.add('dark');
				localStorage.setItem("dark-mode", "on");
			} else {
				document.body.classList.remove('dark');
				localStorage.setItem("dark-mode", "off");
			}
		});
	});

	console.log('Dark mode toggle loaded');

})();
