app.controller('fieldController', ['fieldRepository', function(repository){
	this.field = {};
	this.fields = repository.list;

	this.save = function(property){
		this.field.property = property;
		repository.save(this.field);
		this.field = {};
	};

	this.edit = function(field){
		this.field = field;
	};

	this.delete = function(field){
		repository.delete(field);
	}
}]);
