app.controller('cattleController', ['cattleService', 'repositoryService', function(cattleService, repository){
	repository.init('races');
	repository.init('colors');

	this.cattle = {};
	this.cattles = cattleService.list;
	// this.fields = localStorageService.get('fields');
	// this.types = localStorageService.get('types');
	this.races = repository.getAll('races');
	this.colors = repository.getAll('colors');

	if(this.fields == null)
		this.fields = [];

	this.save = function(property){
		this.cattle.property = property;
		cattleService.save(this.cattle);
	};

	this.edit = function(cattle){
		this.cattle = cattle;
	};

	this.delete = function(cattle){
		cattleService.delete(cattle);
	};
}]);
