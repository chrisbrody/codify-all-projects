// create module for comics
var comicController = angular.module('comicController', []);

// inject http and scope so it can be used to make an HTTP request for JSON data
comicController.controller('controller', ['$scope', '$http', function($scope, $http) {
	// preform HTTP request
	$http.get('js/data.json').success(function(data) {
		// Create comicData variable equal to data
		$scope.comicData = data
		// Create comicData variable equal to "name"
		$scope.comicOrder = 'name'
	})
}])
