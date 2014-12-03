var app = angular.module('cattleControl',['LocalStorageModule', 'ui.bootstrap']);

app.config(function (localStorageServiceProvider) {
  localStorageServiceProvider.setPrefix('cattleControl');
});

app.factory('colorRepository', [function(rfc4122){
  return{
    colors: [],

    save: function(color){
      var index = this.colors.indexOf(color);
      if(index < 0 ){
        color.uuid = rfc4122.newuuid();
        this.colors.push(color);
      }else{
        this.colors.splice(index, 1, color);
      }
    },

    delete: function(color){
      var index = this.colors.indexOf(color);
      this.colors.splice(index, 1);
    }
  };
}])
