app.controller('cattleController', function($scope, localStorageService, rfc4122){
	this.cattle = {};
	this.cattles = localStorageService.get('cattles');
	this.fields = localStorageService.get('fields');
	this.types = localStorageService.get('types');
	this.colors = localStorageService.get('colors');

	if(this.cattles == null)
		this.cattles = [];

	if(this.fields == null)
		this.fields = [];

	this.save = function(property){
		this.cattle.property = property;
		var index = this.cattles.indexOf(this.cattle);
		if(index < 0 ){
			this.cattle.uuid = rfc4122.newuuid();
			this.cattles.push(this.cattle);	
		}else{
			this.cattles.splice(index, 1, this.cattle);
		}
		
		var oldCattle = this.cattle;
		this.cattle = {field:oldCattle.field};
		localStorageService.set('cattles',this.cattles);		
	};

	this.edit = function(cattle){
		this.cattle = cattle;
	};

	this.delete = function(cattle){
		var index = this.cattles.indexOf(cattle);
		this.cattles.splice(index,1);
		localStorageService.set('cattles',this.cattles);
	};

	this.show = function(show){
		if(show === true){
			var fields = localStorageService.get('fields')
			if(fields != null && this.fields.length != fields.length)
				this.fields = fields;
		}				
		return show;
	};
});