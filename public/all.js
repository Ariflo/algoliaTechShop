var algoliaApp=angular.module("algoliaApp",["ngRoute","ngAnimate"]);algoliaApp.config(function(o,e,t){o.when("/",{templateUrl:"/views/homepage.html",controller:"homeController"}).otherwise({redirectTo:"/"}),e.html5Mode({enabled:!0,requireBase:!1})}),algoliaApp.controller("homeController",["$scope","$http","$parse","$location","$routeParams","$timeout","$anchorScroll","$window","anchorSmoothScroll",function(o,e,t,l,r,n,a,c,i){}]),algoliaApp.service("anchorSmoothScroll",function(){this.scrollTo=function(o){function e(){return self.pageYOffset?self.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop?document.body.scrollTop:0}function t(o){for(var e=document.getElementById(o),t=e.offsetTop,l=e;l.offsetParent&&l.offsetParent!=document.body;)l=l.offsetParent,t+=l.offsetTop;return t}var l=e(),r=t(o),n=r>l?r-l:l-r;if(100>n)return void scrollTo(0,r);var a=Math.round(n/2);a>=20&&(a=25);var c=Math.round(n/25),i=r>l?l+c:l-c,u=0;if(r>l)for(var f=l;r>f;f+=c)setTimeout("window.scrollTo(0, "+i+")",u*a),i+=c,i>r&&(i=r),u++;else for(var m=l;m>r;m-=c)setTimeout("window.scrollTo(0, "+i+")",u*a),i-=c,r>i&&(i=r),u++}});
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
algoliaApp.controller('homeController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll', '$window', 'anchorSmoothScroll',
	                                     function($scope,  $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll,$window, anchorSmoothScroll) {

		  
}]);



// add scripts
// window.onload = function() {

// };
//Found on http://stackoverflow.com/questions/21749878/angular-js-anchorscroll-smooth-duration
algoliaApp.service('anchorSmoothScroll', function(){
    
    this.scrollTo = function(eID) {

        // This scrolling function 
        // is from https://jsfiddle.net/brettdewoody/y65G5/
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 2);
        if (speed >= 20) speed = 25;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var j=startY; j>stopY; j-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        
        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }
        
        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    }; 
});
