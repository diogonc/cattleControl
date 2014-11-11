(function(){
	var app = angular.module('cattleControl',['LocalStorageModule', 'ui.bootstrap']);

	app.config(function (localStorageServiceProvider) {
	  localStorageServiceProvider
	    .setPrefix('cattleControl');
	});

	app.controller('navigationController', function($scope, localStorageService){
		this.tab = 'cattle';
		this.properties = localStorageService.get('properties');
		this.property = this.properties != null ? this.properties[0] : {};

		this.selectTab = function(tab){
			this.tab = tab;
		};

		this.isSelected = function(tab){
			return this.tab === tab;
		};

		this.setProperty = function(property){
			this.property = property;
		}
	});

	app.controller('cattleController', function($scope, localStorageService){
		this.cattle = {};
		this.cattles = localStorageService.get('cattles');
		this.fields = localStorageService.get('fields');

		if(this.cattles == null)
			this.cattles = [];

		this.save = function(property){
			this.cattle.property = property;
			var index = this.cattles.indexOf(this.cattle);
			if(index < 0 ){
				this.cattles.push(this.cattle);	
			}else{
				this.cattles.splice(index, 1, this.cattle);
			}
			
			var oldCattle = this.cattle;
			this.cattle = {field:oldCattle.field, type: oldCattle.type, hasHorns: oldCattle.hasHorns, age: oldCattle.age, color: oldCattle.color};
			localStorageService.set('cattles',this.cattles);		
		};

		this.edit = function(cattle){
			this.cattle = cattle;
		};

		this.delete = function(cattle){
			var index = this.cattles.indexOf(cattle);
			this.cattles.splice(index,1);
			localStorageService.set('cattles',this.cattles);
		};

		this.show = function(show){
			if(show === true){
				var fields = localStorageService.get('fields')
				if(fields != null && this.fields.length != fields.length)
					this.fields = fields;
			}				
			return show;
		};
	});

	app.controller('fieldController', function($scope, localStorageService){
		this.field = {};
		this.fields = localStorageService.get('fields');

		if(this.fields == null)
			this.fields = [];

		this.save = function(property){
			this.field.property = property;
			var index = this.fields.indexOf(this.field);
			if(index < 0 ){
				this.fields.push(this.field);	
			}else{
				this.fields.splice(index, 1, this.field);
			}			
			this.field = {};
			localStorageService.set('fields',this.fields);
		};
		
		this.edit = function(field){
			this.field = field;
		};

		this.delete = function(field){
			var index = this.fields.indexOf(field);
			this.fields.splice(index,1);
			localStorageService.set('fields',this.fields);
		}
	});

	app.controller('propertyController', function($scope, localStorageService){
		this.property = {};
		this.properties = localStorageService.get('properties');

		if(this.properties == null)
			this.properties = [];

		this.save = function(navigationProperties){
			var index = this.properties.indexOf(this.property);
			if(index < 0 ){
				this.properties.push(this.property);
			}else{
				this.properties.splice(index, 1, this.property);
			}
			
			this.property = {};
			localStorageService.set('properties',this.properties);
			navigationProperties = this.properties;
			location.reload();
		};

		this.edit = function(property){
			this.property = property;
		};

		this.delete = function(property){
			var index = this.fields.indexOf(property);
			this.properties.splice(index, 1);
			localStorageService.set('properties',this.properties);
			location.reload();
		}
	});
})();