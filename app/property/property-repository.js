app.factory('propertyRepository', ['guidGenerator', 'localStorageService', function(guidGenerator, localStorageService){
  var service = {
    list: [],

    save: function(item){
      var index = service.list.indexOf(item);
      if(index < 0 ){
        item.uuid = guidGenerator.generate();
        service.list.push(item);
      }else{
        service.list.splice(index, 1, item);
      }
      localStorageService.set('properties', service.list);
    },

    delete: function(item){
      var index = service.list.indexOf(item);
      service.list.splice(index, 1);
      localStorageService.set('properties', service.list);
    }
  };

  service.list = localStorageService.get('properties');
  if(service.list == null)
    service.list = [];

  return service;
}])
