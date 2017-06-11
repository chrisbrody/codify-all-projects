// create module for dcComics, inject ngRoute and comicController
var dcComics = angular.module('dcComics', ['ngRoute', 'comicController']);

// create views for webpage (only one view for this app)
dcComics.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'template/comics.html',
		controller: 'controller'
	}).
	otherwise({
		redirectTo: '/'
	})
}]);
