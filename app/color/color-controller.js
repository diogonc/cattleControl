app.controller('colorController', ['colorRepository', function(repository){
	this.color = {};
	this.colors = repository.list;

	this.save = function(){
		repository.save(this.color);
		this.color = {};
	};

	this.edit = function(color){
		this.color = color;
	};

	this.delete = function(color){
		repository.delete(color);
	}
}]);
