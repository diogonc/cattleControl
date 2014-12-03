app.controller('raceController', function($scope, localStorageService){
	this.race = {};
	this.races = localStorageService.get('races');

	if(this.races == null)
		this.races = [];

	this.save = function(){
		var index = this.races.indexOf(this.race);
		if(index < 0 ){
			this.race.uuid = rfc4122.newuuid();
			this.races.push(this.race);
		}else{
			this.races.splice(index, 1, this.race);
		}

		this.race = {};
		localStorageService.set('races',this.races);
	};

	this.edit = function(race){
		this.race = race;
	};

	this.delete = function(race){
		var index = this.races.indexOf(race);
		this.races.splice(index, 1);
		localStorageService.set('races',this.races);
	}
});
