(function(){
	var app = angular.module('cattleControl',['LocalStorageModule']);

	app.config(function (localStorageServiceProvider) {
	  localStorageServiceProvider
	    .setPrefix('cattleControl');
	});

	app.controller('navigationController', function(){
		this.tab = 'cattle';

		this.selectTab = function(tab){
			this.tab = tab;
		};

		this.isSelected = function(tab){
			return this.tab === tab;
		};
	});

	app.controller('cattleController', function($scope, localStorageService){
		this.cattle = cattle;
		this.cattles = localStorageService.get('cattles');
		if(this.cattles == null)
			this.cattles = [];

		this.addCattle = function(){
			this.cattles.push(this.cattle);
			localStorageService.set('cattles',this.cattles);
			this.cattle = {};
		};
	});

	var cattle = {
		field:'leiteiras',
		number:2,
		type: 'vaca',
		age:1,
		color:'branco',
		hasHorns:'sim'
	};
})();