app.controller('raceController', ['raceRepository', function(repository){
	this.race = {};
	this.races = repository.list;

	this.save = function(){
		repository.save(this.race);
		this.race = {};
	};

	this.edit = function(race){
		this.race = race;
	};

	this.delete = function(race){
		repository.delete(race);
	}
}]);
