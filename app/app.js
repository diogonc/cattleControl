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

		this.addCattle = function(property){
			this.cattle.property = property;
			this.cattles.push(this.cattle);
			var oldCattle = this.cattle;
			this.cattle = {field:oldCattle.field, type: oldCattle.type, hasHorns: oldCattle.hasHorns, age: oldCattle.age, color: oldCattle.color};

			localStorageService.set('cattles',this.cattles);		
		};

		this.show = function(show){
			if(show === true){
				var fields = localStorageService.get('fields')
				if(fields != null && this.fields.length != fields.length)
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

		this.addField = function(property){
			this.field.property = property;
			this.fields.push(this.field);
			this.field = {};
			localStorageService.set('fields',this.fields);
		};
	});

	app.controller('propertyController', function($scope, localStorageService){
		this.property = {};
		this.properties = localStorageService.get('properties');

		if(this.properties == null)
			this.properties = [];

		this.saveProperty = function(navigationProperties){
			if(this.property.id == null){
				this.property.id = this.properties.length;
				this.properties.push(this.property);
			}else{
				this.properties.splice(this.property.id, 1, this.property);
			}
			
			this.property = {};
			localStorageService.set('properties',this.properties);
			navigationProperties = this.properties;
		};

		this.edit = function(property){
			this.property = property;
		};

		this.delete = function(property){
			this.properties.splice(property.id,1);
			localStorageService.set('properties',this.properties);
		}
	});
})();