app.controller('reportController', function($scope, localStorageService){
	this.cattles = localStorageService.get('cattles');
	this.fields = localStorageService.get('fields');
	this.types = localStorageService.get('types');
	
	if(this.cattles == null)
		this.cattles = [];
});