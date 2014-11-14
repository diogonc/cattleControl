app.controller('navigationController', function($scope, localStorageService, DataTransfer){
	this.tab = 'cattle';
	this.properties = localStorageService.get('properties');
	this.property = this.properties != null ? this.properties[0] : {};
	this.navbarCollapsed = true;

	this.selectTab = function(tab){
		this.tab = tab;
	};

	this.isSelected = function(tab){
		return this.tab === tab;
	};

	this.setProperty = function(property){
		this.property = property;
	}

	$scope.$on('valuesUpdated', function() {
	    $scope.properties = DataTransfer.properties;
	});
});