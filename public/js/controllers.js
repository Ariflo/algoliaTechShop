algoliaApp.controller('homeController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll', '$window', 'anchorSmoothScroll', 'algolia'
	                                     ,function($scope,  $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll,$window, anchorSmoothScroll, algolia) {

	            //hide modal form         
	            $scope.showProduct = false;                         		
	            $scope.showDropdown = false;                         		
	            $scope.displayPrice = false;                         		
	            $scope.displayBrands = false;                         		
	            $scope.displayTypes = false;                         		

	            //initialize search, hits, categories and product
	             $scope.query = '';
	             $scope.hits = [];   
	             $scope.categories = [];
	             $scope.product = {};

	             $scope.categories = ['Computers & Tablets', 
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
	                                                           'Microwaves' ];

		  var client = algolia.Client('W8I2YD0GJC', '861d0757703675d68f5a0f915072381b');
		  var index = client.initIndex('tech_shop_data');

		  // index.setSettings({'attributesForFaceting': ['hierarchicalCategories.lvl0']}, function(err) {
		  // 		    if (!err) {
		  // 		      console.log('success');
		  // 		    }
		 	// 	});

		  index.clearCache();

		  $scope.algoliaSearch = function (query){
		  	if(query){
		  		console.log(query);
		  		index.search(query, {hitsPerPage: 20})
		  		.then(function searchSuccess(content) {
		  		     	$scope.products = content.hits;
		  		}, function searchFailure(err) {
		  		     	console.log(err);
		  		});
		  	}else{
		  		index.search($scope.query, {hitsPerPage: 20})
		  		.then(function searchSuccess(content) {
		  		     	$scope.products = content.hits;
		  		}, function searchFailure(err) {
		  		     	console.log(err);
		  		});	
		  	}

		 }
		 $scope.algoliaSearch();

		 $scope.productLookup = function(product){
		 	$scope.showProduct = !$scope.showProduct;
		 	$scope.product.url = product.url;
		 	$scope.product.image = product.image;
		 	$scope.product.type = product.type;
		 	$scope.product.name = product.name;
		 	$scope.product.price = product.price;
		 	$scope.product.description = product.description;
		 	$scope.product.type = product.type;
		 }

		 $scope.showCategories = function(){
		 	$scope.showDropdown = !$scope.showDropdown; 
		 }		 

		 $scope.showPrice = function(){
		 	$scope.displayPrice = !$scope.displayPrice; 
		 }

		 $scope.showBrands = function(){
		 	$scope.displayBrands = !$scope.displayBrands; 
		 }		 

		 $scope.showTypes = function(){
		 	$scope.displayTypes = !$scope.displayTypes; 
		 }

		 $scope.slider = {
		   min: 100,
		   max: 180,
		   options: {
		     floor: 0,
		     ceil: 450,
		     translate: function(value) {
		       return '$' + value;
		     }
		   }
		 };

}]);