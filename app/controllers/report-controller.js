app.controller('reportController', ['$scope','cattleRepository', 'fieldRepository', 'typeRepository',
 							function($scope, cattleRepository, fieldRepository, typeRepository){
	this.cattles = cattleRepository.list;
	this.fields = fieldRepository.list;
	this.types = typeRepository.list;

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

	var cattlesPerTypeAndField = function(type, field, array){
		var counter = 0;
		for(var i=0; i<array.length; i++) {
			if (array[i].type === type.name && array[i].field === field.name)
				counter++;
		}
		return counter;
	};

	this.report = report(this.fields, this.types, this.cattles);

	$scope.$watch(angular.bind(this, function (cattles) {
		//this.report = report(fieldRepository.list, typeRepository.list, cattleRepository.list);
	}));
}]);
