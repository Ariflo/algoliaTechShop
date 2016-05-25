algoliaApp.controller('homeController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll', '$window', 'anchorSmoothScroll', 'algolia'
	                                     ,function($scope,  $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll,$window, anchorSmoothScroll, algolia) {

	            //hide modal form         
	            $scope.showProduct = false;                         		
	            $scope.showDropdown = false;                         		

	            //initialize search, hits, categories and product
	             $scope.query = '';
	             $scope.hits = [];   
	             $scope.categories = [];
	             $scope.product = {};

		  var client = algolia.Client('W8I2YD0GJC', '861d0757703675d68f5a0f915072381b');
		  var index = client.initIndex('tech_shop_data');

		  // index.setSettings({'attributesForFaceting': ['hierarchicalCategories.lvl0']}, function(err) {
		  // 		    if (!err) {
		  // 		      console.log('success');
		  // 		    }
		 	// 	});
		




		  index.clearCache();

		  $scope.algoliaSearch = function (product){
		  	if(product){
		  		$scope.showProduct = !$scope.showProduct;
		  		$scope.product.url = product.url;
		  		$scope.product.image = product.image;
		  		$scope.product.type = product.type;
		  		$scope.product.name = product.name;
		  		$scope.product.price = product.price;
		  		$scope.product.description = product.description;
		  		$scope.product.type = product.type;
		  	}else{
		  		index.search($scope.query, {hitsPerPage: 10000})
		  		.then(function searchSuccess(content) {
		  		     	$scope.products = content.hits;

		  		     	$scope.products.forEach(function(product){
		  		     		for(var i = 0; i<product.categories.length; i++){
		  		     			$scope.categories.push(product.categories[i]);
		  		     		}
		  		     	})
		  		}, function searchFailure(err) {
		  		     	console.log(err);
		  		})
		  	}
		 }
		 $scope.algoliaSearch();

		 $scope.showCategories = function(){
		 	$scope.showDropdown = !$scope.showDropdown; 
		 }
}]);