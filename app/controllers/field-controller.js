app.controller('fieldController', function($scope, localStorageService, rfc4122){
	this.field = {};
	this.fields = localStorageService.get('fields');

	if(this.fields == null)
		this.fields = [];

	this.save = function(property){
		this.field.property = property;
		var index = this.fields.indexOf(this.field);
		if(index < 0 ){
			this.field.uuid = rfc4122.newuuid();
			this.fields.push(this.field);	
		}else{
			this.fields.splice(index, 1, this.field);
		}			
		this.field = {};
		localStorageService.set('fields',this.fields);
	};
	
	this.edit = function(field){
		this.field = field;
	};

	this.delete = function(field){
		var index = this.fields.indexOf(field);
		this.fields.splice(index,1);
		localStorageService.set('fields',this.fields);
	}
});