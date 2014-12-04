app.controller('raceController', ['repositoryService', function(repository){
	repository.init('races');

	this.race = {};
	this.races = repository.getAll('races');

	this.save = function(){
		repository.save('races', this.race);
		this.race = {};
	};

	this.edit = function(race){
		this.race = race;
	};

	this.delete = function(race){
		repository.delete('races', race);
	}
}]);
