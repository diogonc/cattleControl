app.controller('cattleController', ['cattleRepository', 'raceRepository', 'colorRepository', 'typeRepository', 'fieldRepository',
 function(cattleRepository, raceRepository, colorRepository, typeRepository, fieldRepository){
	this.cattle = {};
	this.cattles = cattleRepository.list;
	this.fields = fieldRepository.list;
	this.types = typeRepository.list;
	this.races = raceRepository.list;
	this.colors = colorRepository.list;

	if(this.fields == null)
		this.fields = [];

	this.save = function(property){
		this.cattle.property = property;
		cattleRepository.save(this.cattle);
    this.cattle = {};
	};

	this.edit = function(cattle){
		this.cattle = cattle;
	};

	this.delete = function(cattle){
		cattleRepository.delete(cattle);
	};
}]);
