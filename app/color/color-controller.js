app.controller('colorController', ['repositoryService', function(repository){
	repository.init('colors');

	this.color = {};
	this.colors = repository.getAll('colors');

	this.save = function(){
		repository.save('colors', this.color);
		this.color = {};
	};

	this.edit = function(color){
		this.color = color;

	};

	this.delete = function(color){
		repository.delete('colors', color);
	}
}]);
