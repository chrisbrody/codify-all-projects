loginApp
  // Simple controller for a simple page. The only thing going on is a button that directs back to the main login screen. This controller depends on the 'navService' service and we're interacting with it as 'nav' within the controller.
  .controller('successCtrl', ['$scope', '$location', 'navService', function($scope, $location, nav) {
    $scope.logIn = function() {
      return nav.logIn();
    };
  }]);
