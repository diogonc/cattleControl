app.controller('colorController', function($scope, localStorageService, rfc4122, DataTransfer){
	this.color = {};
	this.colors = localStorageService.get('colors');

	if(this.colors == null)
		this.colors = [];

	this.save = function(){
		var index = this.colors.indexOf(this.color);
		if(index < 0 ){
			this.color.uuid = rfc4122.newuuid();
			this.colors.push(this.color);
		}else{
			this.colors.splice(index, 1, this.color);
		}
		
		this.color = {};
		localStorageService.set('colors',this.colors);
		DataTransfer.updateColors(this.colors);
	};

	this.edit = function(color){
		this.color = color;
	};

	this.delete = function(color){
		var index = this.colors.indexOf(color);
		this.colors.splice(index, 1);
		localStorageService.set('colors',this.colors);
		DataTransfer.updateColors(this.colors);
	}
});