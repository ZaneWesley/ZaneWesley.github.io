/*
    Code copyright 2020 Zane Wesley.
    This code may not be copied, modified, or republished in any manner.
    View the lisense at https://zanewesley.github.io/license
*/

//Onload - install
self.addEventListener('install', function(e) {
	var SWIRL_CACHE = 'swirl-cache';
	var urlsToCache = ['colorswirl.html?app=true', 'colorswirl.js', 'signup.html', 'login.html'];
	e.waitUntil(
		/* Cache pages*/
		caches.open(SWIRL_CACHE).then(cache => cache.addAll(urlsToCache))
	)
});

self.addEventListener('activate', function(e) {
	self.skipWaiting();
	var cacheWhiteList = ['colorswirl']; // New Cache
	e.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(cacheName => {
					// Delete all caches that are not in the cacheWhiteList array
					if(cacheWhiteList.indexOf(cacheName) === -1) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});

self.addEventListener('fetch', function(e) {
	e.respondWith(
		caches.open('colorswirl').then(cache => {
			//Does request exist
			//yes
			return cache.match(e.request).then(response => {
				if(response) {
					console.log('Cache Found. Fetching request...', e.request.url);
					return response;
				}
				//No
				fetch(e.request).then(response => {
					cache.put(e.request, response.clone());
					return response;
				});
			});
		})
	);
});
