(function(){
	var app = angular.module('cattleControl',['LocalStorageModule']);

	app.config(function (localStorageServiceProvider) {
	  localStorageServiceProvider
	    .setPrefix('cattleControl');
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
		number:2,
		type: 'vaca',
		age:1,
		color:'branco',
		hasHorns:'sim'
	};

	var cattles = [	{
					number:0,
					type: 'vaca',
					age:1,
					color:'branco',
					hasHorns:'sim'
				},
				{
					number:1,
					type: 'vaca',
					age:1,
					color:'branco',
					hasHorns:'nao'
				},
				{
					number:2,
					type: 'vaca',
					age:1,
					color:'branco',
					hasHorns:'sim'	
				}
	]
})();