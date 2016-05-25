algoliaApp.filter('unique', function() {

   return function(collection, keyname) {

      var output = [];

      angular.forEach(collection, function(item) {

          if(output.indexOf(item[keyname]) === -1) {
              output.push(item[keyname]);
          }
      });

      return output;
   };
});