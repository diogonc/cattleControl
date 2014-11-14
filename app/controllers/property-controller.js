app.controller('propertyController', function($scope, localStorageService, rfc4122, DataTransfer){
	this.property = {};
	this.properties = localStorageService.get('properties');

	if(this.properties == null)
		this.properties = [];

	this.save = function(navigationProperties){
		var index = this.properties.indexOf(this.property);
		if(index < 0 ){
			this.property.uuid = rfc4122.newuuid();
			this.properties.push(this.property);
		}else{
			this.properties.splice(index, 1, this.property);
		}

		this.property = {};
		localStorageService.set('properties',this.properties);
		navigationProperties = this.properties;
		DataTransfer.updateProperties(this.properties);
	};

	this.edit = function(property){
		this.property = property;
	};

	this.delete = function(property){
		var index = this.properties.indexOf(property);
		this.properties.splice(index, 1);
		localStorageService.set('properties',this.properties);
		DataTransfer.updateProperties(this.properties);	
	}
});