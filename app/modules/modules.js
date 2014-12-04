app.factory('guidGenerator', function () {
    return {
        generate: function () {
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4";
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
            s[8] = s[13] = s[18] = s[23] = "-";
            return s.join("");
        }
    }
});

app.factory('repositoryService', ['guidGenerator', 'localStorageService', function(guidGenerator, localStorageService){
  var service = {
    names: [],
    list: [],

    init: function(collection){
      service.names.push(collection);
      service.list.push([]);

      var indexOfCollection = service.names.indexOf(collection);
      service.list[indexOfCollection] = localStorageService.get(collection);

      if(service.list[indexOfCollection] == null)
        service.list[indexOfCollection] = [];
    },

    getAll: function(collection){
      indexOfCollection = service.names.indexOf(collection);
      return service.list[indexOfCollection];
    },

    save: function(collection, item){
      var indexOfCollection = service.names.indexOf(collection);
      var index = service.list[indexOfCollection].indexOf(item);

      if(index < 0 ){
        item.uuid = guidGenerator.generate();
        service.list[indexOfCollection].push(item);
      }else{
        service.list[indexOfCollection].splice(index, 1, item);
      }

      localStorageService.set(collection, service.list[indexOfCollection]);
    },

    delete: function(collection, item){
      var indexOfCollection = service.names.indexOf(collection);
      var index = service.list[indexOfCollection].indexOf(item);
      service.list[indexOfCollection].splice(index, 1);

      localStorageService.set(collection, service.list[indexOfCollection]);
    }
  };

  return service;
}])

/*
app.factory('repositoryService', ['guidGenerator', 'localStorageService', function(guidGenerator, localStorageService){
  var service = {
    names: [],
    data: [],

    setName: function(name){
      service.listName = name;
    },

    getAll: function(){
      return service.list;
    },

    save: function(item){
      var index = service.list.indexOf(item);
      if(index < 0 ){
        item.uuid = guidGenerator.generate();
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
}])*/
