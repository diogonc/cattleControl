app.controller('reportController', function($scope, localStorageService, filterFilter){
	this.cattles = localStorageService.get('cattles');
	this.fields = localStorageService.get('fields');
	this.types = localStorageService.get('types');
	this.report = [
		{ field : 'leiteiras', types: [ { type : 'vaca', qtd : 3}, { type : 'boi', qtd : 5},{ type : 'novilha', qtd : 4}]},
		{ field : 'frente', types: [ { type : 'vaca', qtd : 13}, { type : 'boi', qtd : 15},{ type : 'novilha', qtd : 14}]}
	];

	if(this.cattles == null)
		this.cattles = [];
	
});