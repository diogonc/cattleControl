app.controller('reportController', function($scope, localStorageService, filterFilter){
	this.cattles = localStorageService.get('cattles');
	this.fields = localStorageService.get('fields');
	this.types = localStorageService.get('types');
	/*this.report = [
		{ field : 'leiteiras', types: [ { type : 'vaca', qtd : 3}, { type : 'boi', qtd : 5},{ type : 'novilha', qtd : 4}]},
		{ field : 'frente', types: [ { type : 'vaca', qtd : 13}, { type : 'boi', qtd : 15},{ type : 'novilha', qtd : 14}]}
	];*/

	if(this.cattles == null)
		this.cattles = [];

	if(this.fields == null)
		this.fields = [];

	if(this.types == null)
		this.types = [];

	var report = function(fields, types, cattles){
		var report = [];
		fields.forEach(function(field){
			report.push({field:field, types: typesForField(field, types, cattles)});
		});
		return report;
	};	

	var typesForField = function(field, types, cattles){
		var typesForField = [];
		types.forEach(function(type){
			typesForField.push({type:type, qtd: cattlesPerTypeAndField(type,field, cattles)});
		});
		return typesForField;
	};

	var cattlesPerTypeAndField = function(type, field, cattlesPerTypeAndField){
		return 3;
	};

	this.report = report(this.fields, this.types, this.cattles);
	//console.log(report(this.fields, this.types, this.cattles));
});