var algoliaApp = angular.module('ariApp', ['ngRoute', 'ngAnimate']);

ariApp.config(function($routeProvider, $locationProvider, $httpProvider){

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