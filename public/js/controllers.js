algoliaApp.controller('homeController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll', '$window', 'anchorSmoothScroll', 'algolia'
	                                     ,function($scope,  $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll,$window, anchorSmoothScroll, algolia) {

	            //hide modal form         
	            $scope.showProduct = false;                         		

	            //initialize search, hits, and product
	             $scope.query = ' ';
	             $scope.hits = [];   
	             $scope.product = {};

		  var client = algolia.Client('W8I2YD0GJC', '861d0757703675d68f5a0f915072381b');
		  var index = client.initIndex('tech_shop_data');
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
		  		}, function searchFailure(err) {
		  		     	console.log(err);
		  		})
		  	}
		 }
		 $scope.algoliaSearch();
}]);