	var app = angular.module('cattleControl',['LocalStorageModule', 'ui.bootstrap']);

	app.config(function (localStorageServiceProvider) {
	  localStorageServiceProvider
	    .setPrefix('cattleControl');
	});