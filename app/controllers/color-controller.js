app.controller('colorController', function(colorRepository){
	this.color = {};
	this.colors = colorRepository.colors;

	this.save = function(){
		colorRepository.save(this.color);
		this.color = {};
	};

	this.edit = function(color){
		this.color = color;

	};

	this.delete = function(color){
		colorRepository.delete(color);
	}
});
