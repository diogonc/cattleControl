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
		this.cattle = {};
		this.cattles = localStorageService.get('cattles');
		this.fields = localStorageService.get('fields');

		if(this.cattles == null)
			this.cattles = [];

		this.addCattle = function(){
			this.cattles.push(this.cattle);
			var oldCattle = this.cattle;
			this.cattle = {field:oldCattle.field, type: oldCattle.type, hasHorns: oldCattle.hasHorns, age: oldCattle.age, color: oldCattle.color};

			localStorageService.set('cattles',this.cattles);		
		};

		this.reloadLists = function(){
			this.fields = localStorageService.get('fields');				
		}

		this.show = function(show){
			if(show === true){
				var fields = localStorageService.get('fields')
				if(this.fields.length != fields.length)
					this.fields = fields;
			}				
			return show;
		}
	});

	app.controller('fieldController', function($scope, localStorageService){
		this.field = {};
		this.fields = localStorageService.get('fields');

		if(this.fields == null)
			this.fields = [];

		this.addField = function(){
			this.fields.push(this.field);
			this.field = {};
			localStorageService.set('fields',this.fields);
		};
	});
})();