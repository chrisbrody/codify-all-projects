var app = angular.module('multiPageApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      templateUrl: 'views/home.html' 
    })
  	.when('/about', {
    	templateUrl: 'views/about.html'
  	})
    .when('/works', {
      templateUrl: 'views/works.html'
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});