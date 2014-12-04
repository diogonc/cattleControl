app.controller('propertyController', ['propertyRepository', function(repository){
	this.property = {};
	this.properties = repository.list;

	this.save = function(){
		repository.save(this.property);
		this.property = {};
	};

	this.edit = function(property){
		this.property = property;
	};

	this.delete = function(property){
		repository.delete(property);
	}
}]);
