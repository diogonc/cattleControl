app.controller('colorController', function(colorService){
	this.color = {};
	this.colors = colorService.list;

	this.save = function(){
		colorService.save(this.color);
		this.color = {};
	};

	this.edit = function(color){
		this.color = color;

	};

	this.delete = function(color){
		colorService.delete(color);
	}
});
