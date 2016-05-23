var algoliaApp = angular.module('algoliaApp', ['ngRoute', 'ngAnimate']);

algoliaApp.config(function($routeProvider, $locationProvider, $httpProvider){

	$routeProvider

	//landing page 
	.when('/',{
		templateUrl: '/views/homepage.html',
        		controller: 'homeController'
	})		

	.otherwise({
	        redirectTo: '/'
	      });

	$locationProvider.html5Mode({
  		enabled: true,
  		requireBase: false
	});
});