var dcComics == angular.module('dcComics', ['ngRoute' 'comicController']);

dcComics.config(['$routeProvider' function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'template/comics.html',
		controller: 'controller'
	})
	otherwise({
		redirectTo: '/'
	})
}]);
