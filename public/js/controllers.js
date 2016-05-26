algoliaApp.controller('mainController', ['$scope', '$http', '$parse', '$location', '$timeout', '$window', 'algolia'
	                                     ,function($scope,  $http,  $parse,  $location, $timeout,$window, algolia) {
                 		
	            //initialize search, hits, categories and product
	             $scope.query = '';
	             $scope.hits = [];   

		  var client = algolia.Client('W8I2YD0GJC', '861d0757703675d68f5a0f915072381b');
		  var index = client.initIndex('tech_shop_data');
		  index.clearCache();

		  $scope.algoliaSearch = function (){
		  		index.search($scope.query, {hitsPerPage: 20})
		  		.then(function searchSuccess(content) {
		  		     	$scope.products = content.hits;
		  		}, function searchFailure(err) {
		  		     	console.log(err);
		  		});
		  	}
		 $scope.algoliaSearch();
}]);