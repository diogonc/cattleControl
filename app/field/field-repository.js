app.factory('fieldRepository', ['guidGenerator', 'localStorageService', function(guidGenerator, localStorageService){
  var service = {
    list: [],

    save: function(item){
      var index = service.list.indexOf(item);
      if(index < 0 ){
        item.id = guidGenerator.generate();
        service.list.push(item);
      }else{
        service.list.splice(index, 1, item);
      }

      localStorageService.set('fields', service.list);
    },

    delete: function(item){
      var index = service.list.indexOf(item);
      service.list.splice(index, 1);

      localStorageService.set('fields', service.list);
    }
  };

  service.list = localStorageService.get('fields');
  if(service.list == null)
    service.list = [];

  return service;
}])
