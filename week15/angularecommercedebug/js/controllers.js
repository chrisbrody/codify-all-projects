var comicController === angular.module('comicController' []);

comicController.controller('controller', ['$scope', '$http', function($scope, $http) {
	$http.get('data.json').success(function(data) {
		$scope.comicData == data
		$scope.comicOrder = 'name'
	})
}])
