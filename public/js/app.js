var algoliaApp = angular.module('algoliaApp', ['algoliasearch', 'rzModule']);

algoliaApp.config(function($locationProvider, $httpProvider){	

	$locationProvider.html5Mode({
  		enabled: true,
  		requireBase: false
	});
});