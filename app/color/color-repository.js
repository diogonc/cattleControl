app.factory('colorRepository', ['guidGenerator', 'localStorageService', function(guidGenerator, localStorageService){
  var service = {
    list: [],

    save: function(item){
      var index = service.list.indexOf(item);
      if(index < 0 ){
        service.list.push(item);
      }else{
        service.list.splice(index, 1, item);
      }

      localStorageService.set('colors', service.list);
    },

    delete: function(item){
      var index = service.list.indexOf(item);
      service.list.splice(index, 1);

      localStorageService.set('colors', service.list);
    }
  };

  service.list = localStorageService.get('colors');
  if(service.list == null)
    service.list = [];

  return service;
}])
