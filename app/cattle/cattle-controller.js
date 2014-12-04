app.controller('cattleController', function(cattleService, raceService, colorService){
	this.cattle = {};
	this.cattles = cattleService.list;
	// this.fields = localStorageService.get('fields');
	// this.types = localStorageService.get('types');
	this.races = raceService.list;
	this.colors = colorService.list;

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
});
