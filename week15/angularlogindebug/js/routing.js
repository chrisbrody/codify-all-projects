// This is how the Angular routing is set up. This is only usable because 'ngRoute' was injected as a dependency in the Angular application.

// $routeProvider is a built-in Angular provider that allows for configuring routes. The syntax is 'when' the specific path is provided, it routes to the defined 'templateUrl' and apploes the defined 'controller'

loginApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'loginCtrl',
      templateUrl: 'views/login.html'
    })
    .when('/register', {
      controller: 'registerCtrl',
      templateUrl: 'views/register.html'
    })
    .when('/profile', {
      controller: 'profileController',
      templateUrl: 'views/profile.html'
    })
    .when('/update', {
      controller: 'profileUpdateCtrl',
      templateUrl: 'views/update.html'
    })
    .when('/success', {
      controller: 'successCtrl',
      templateUrl: 'views/success.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
