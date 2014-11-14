var app = angular.module('cattleControl',['LocalStorageModule', 'ui.bootstrap', 'uuids', 'dataTransfer']);

app.config(function (localStorageServiceProvider) {
  localStorageServiceProvider.setPrefix('cattleControl');
});
