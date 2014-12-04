app.controller('raceController', function(raceService){
	this.race = {};
	this.races = raceService.list;

	this.save = function(){
		raceService.save(this.race);
		this.race = {};
	};

	this.edit = function(race){
		this.race = race;
	};

	this.delete = function(race){
		raceService.delete(race);
	}
});
