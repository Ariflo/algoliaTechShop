algoliaApp.controller('homeController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll', '$window', 'anchorSmoothScroll', 'algolia'
	                                     ,function($scope,  $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll,$window, anchorSmoothScroll, algolia) {

	             $scope.query = ' ';
	             $scope.hits = [];           

		  var client = algolia.Client('W8I2YD0GJC', '861d0757703675d68f5a0f915072381b');
		  var index = client.initIndex('tech_shop_data');
		  index.clearCache();

		  $scope.algoliaSearch = function (){
		  	index.search($scope.query, {hitsPerPage: 10000})
		  	.then(function searchSuccess(content) {
		  	     	$scope.products = content.hits;

		  	     	$scope.product.url = $scope.products.url;
		  	     	$scope.product.image = $scope.products.image;
		  	     	$scope.product.type = $scope.products.type;
		  	     	$scope.product.name = $scope.products.name;
		  	     	$scope.product.price = $scope.products.price;
		  	     	$scope.product.description =  $scope.products.description;
		  	     	$scope.product.type = $scope.products.type;
 

		  	}, function searchFailure(err) {
		  	     	console.log(err);
		  	})
		 }
		 $scope.algoliaSearch();
}]);