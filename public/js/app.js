var algoliaApp = angular.module('algoliaApp', ['algoliasearch']);

algoliaApp.config(function($locationProvider, $httpProvider){	

	$locationProvider.html5Mode({
  		enabled: true,
  		requireBase: false
	});
});