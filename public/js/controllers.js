algoliaApp.controller('homeController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll', '$window', 'anchorSmoothScroll', 'algolia'
	                                     ,function($scope,  $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll,$window, anchorSmoothScroll, algolia) {

	             $scope.query = ' ';
	             $scope.hits = [];           

		  var client = algolia.Client('W8I2YD0GJC', '861d0757703675d68f5a0f915072381b');
		  var index = client.initIndex('tech_shop_data');
		  index.clearCache();

		  $scope.algoliaSearch = function (){
		  	index.search($scope.query)
		  	.then(function searchSuccess(content) {
		  	     	$scope.techGoods = content.hits;
		  	     	console.log($scope.techGoods);
		  	}, function searchFailure(err) {
		  	     	console.log(err);
		  	})
		 }
		 $scope.algoliaSearch();
}]);