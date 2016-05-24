var algoliaApp = angular.module('algoliaApp', ['ngRoute', 'ngAnimate', 'algoliasearch']);

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
algoliaApp.controller('homeController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll', '$window', 'anchorSmoothScroll','algolia'
	                                     , function($scope,  $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll,$window, anchorSmoothScroll, algolia) {

	             $scope.query = '';
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

var algoliaApp=angular.module("algoliaApp",["ngRoute","ngAnimate","algoliasearch"]);algoliaApp.config(function(o,e,t){o.when("/",{templateUrl:"/views/homepage.html",controller:"homeController"}).otherwise({redirectTo:"/"}),e.html5Mode({enabled:!0,requireBase:!1})}),algoliaApp.controller("homeController",["$scope","$http","$parse","$location","$routeParams","$timeout","$anchorScroll","$window","anchorSmoothScroll","algolia",function(o,e,t,l,n,r,a,c,i,s){o.query="",o.hits=[];var u=s.Client("W8I2YD0GJC","861d0757703675d68f5a0f915072381b"),f=u.initIndex("tech_shop_data");f.clearCache(),o.algoliaSearch=function(){f.search(o.query).then(function(e){o.techGoods=e.hits,console.log(o.techGoods)},function(o){console.log(o)})},o.algoliaSearch()}]),algoliaApp.service("anchorSmoothScroll",function(){this.scrollTo=function(o){function e(){return self.pageYOffset?self.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop?document.body.scrollTop:0}function t(o){for(var e=document.getElementById(o),t=e.offsetTop,l=e;l.offsetParent&&l.offsetParent!=document.body;)l=l.offsetParent,t+=l.offsetTop;return t}var l=e(),n=t(o),r=n>l?n-l:l-n;if(100>r)return void scrollTo(0,n);var a=Math.round(r/2);a>=20&&(a=25);var c=Math.round(r/25),i=n>l?l+c:l-c,s=0;if(n>l)for(var u=l;n>u;u+=c)setTimeout("window.scrollTo(0, "+i+")",s*a),i+=c,i>n&&(i=n),s++;else for(var f=l;f>n;f-=c)setTimeout("window.scrollTo(0, "+i+")",s*a),i-=c,n>i&&(i=n),s++}});
var algoliaApp = angular.module('algoliaApp', ['ngRoute', 'ngAnimate', 'algoliasearch']);

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
algoliaApp.controller('homeController', ['$scope', '$http', '$parse', '$location', '$routeParams', '$timeout', '$anchorScroll', '$window', 'anchorSmoothScroll','algolia'
	                                     ,function($scope,  $http,  $parse,  $location,   $routeParams, $timeout, $anchorScroll,$window, anchorSmoothScroll, algolia) {

	             $scope.query = ' ';
	             $scope.hits = [];           

		  var client = algolia.Client('W8I2YD0GJC', '861d0757703675d68f5a0f915072381b');
		  var index = client.initIndex('tech_shop_data');
		  index.clearCache();

		  //$scope.algoliaSearch = function (){
		  	index.search($scope.query)
		  	.then(function searchSuccess(content) {
		  	     	$scope.techGoods = content.hits;
		  	     	console.log($scope.techGoods);
		  	}, function searchFailure(err) {
		  	     	console.log(err);
		  	})
		 // }
		  //$scope.algoliaSearch();
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
