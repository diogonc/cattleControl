app.controller('navigationController', ['propertyRepository', function(propertyRepository){
	this.tab = 'cattle';
	this.properties = propertyRepository.list;
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
}]);
