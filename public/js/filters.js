algoliaApp.filter('unique', function() {

   return function(collection, keyname) {

      var output = [];
      var hierarchicalCategories = ['Computers & Tablets', 
                                                    'Cell Phones', 
                                                    'Appliances', 
                                                    'Audio', 
                                                    'Cameras & Camcorders', 
                                                    'TV & Home Theater', 
                                                    'Car Electronics & GPS', 
                                                    'Office',
                                                    'Health, Fitness & Beauty',
                                                    'Home',
                                                    'Video Games',
                                                    'Wearable Technology',
                                                    'Name Brands',
                                                    'Best Buy Gift Cards',
                                                    'Musical Instruments',
                                                    'Movies & Music',
                                                    'Magnolia Home Theater',
                                                    'Batteries & Power',
                                                    'Carfi Instore Only',
                                                    'Microwaves' ]

      angular.forEach(collection, function(item) {

          if(output.indexOf(item) === -1 && hierarchicalCategories.indexOf(item) !== -1) {
              output.push(item);
          }
      });

      return output;
   };
});