// This is the code to set up the entire Angular application.

// The name of the application is 'AngularLogin' - the variable 'loginApp' is how we will be interacting with the application with all the various JS files

// The stuff in the array are DEPENDENCIES. What we are doing is INJECTING these DEPENDENCIES into the Angular application. When things are injected as dependencies we are saying that the application DEPENDS on these things in order to function correctly.

// 'ngRoute' is a pre-defined name that comes from angular.route.js.
// 'loginService,' 'navigationService,' and 'registrationService' are all CUSTOM services, meaning they were built by the developer. Each of these names correspond to a module name in their respective files in the 'services' folder
var loginApp = angular.module('AngularLogin', ['ngRoute', 'loginService', 'navigationService', 'registrationService']);
