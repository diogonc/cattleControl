app.controller('typeController', ['typeRepository', function(repository){
	this.type = {};
	this.types = repository.list;

	this.save = function(){
		repository.save(this.type);
		this.type = {};
	};

	this.edit = function(type){
		this.type = type;
	};

	this.delete = function(type){
		repository.delete(type);
	}
}]);
