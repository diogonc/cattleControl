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

app.factory('colorRepository', ['guidGenerator', 'localStorageService', function(guidGenerator, localStorageService){
   colorRepository = {
    colors: [],

    save: function(color){
      var index = colorRepository.colors.indexOf(color);
      if(index < 0 ){
        color.uuid = guidGenerator.generate();
        colorRepository.colors.push(color);
      }else{
        colorRepository.colors.splice(index, 1, color);
      }

      localStorageService.set('colors',colorRepository.colors);
    },

    delete: function(color){
      var index = colorRepository.colors.indexOf(color);
      colorRepository.colors.splice(index, 1);

      localStorageService.set('colors',colorRepository.colors);
    }
  };

  colorRepository.colors = localStorageService.get('colors');
  if(colorRepository.colors == null)
    colorRepository.colors = [];

  return colorRepository;
}])
