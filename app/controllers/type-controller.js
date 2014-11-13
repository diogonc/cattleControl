app.controller('typeController', function($scope, localStorageService, rfc4122){
	this.type = {};
	this.types = localStorageService.get('types');

	if(this.types == null)
		this.types = [];

	this.save = function(){
		var index = this.types.indexOf(this.type);
		if(index < 0 ){
			this.type.uuid = rfc4122.newuuid();
			this.types.push(this.type);
		}else{
			this.types.splice(index, 1, this.type);
		}
		
		this.type = {};
		localStorageService.set('types',this.types);
	};

	this.edit = function(type){
		this.type = type;
	};

	this.delete = function(type){
		var index = this.types.indexOf(type);
		this.types.splice(index, 1);
		localStorageService.set('types',this.types);
	}
});