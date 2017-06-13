loginApp
  .controller('loginCtrl',
    ['$scope', '$location', 'LogInService', 'navService', function($scope, $location, login, nav) {
      // These two variables are declared ON the $scope object. The $scope object is built-in with Angular, and every controller has its own unique $scope object.
      $scope.userName;
      $scope.userPassword;

      // This is the function bound to the ng-click in 'login.html' on line 15
      $scope.logIn = function() {
        // Here, 'login' is refering to the 'LogInService' which we injected on line 3, and we're interacting with it as 'login'
        // The actual method (login()) is defined on the object that gets returned from that specific object
        // So,
        return login.logIn($scope.userName, $scope.userPassword);
      };
      // This is the function bound to the ng-click in 'login.html' on line 16
      $scope.acctReg = function() {
        // Here, 'nav' is refering to the 'navService' which we injected on line 3, and we're interacting with it as 'nav'
        // The actual method (acctReg()) is defined on the object that gets returned from that specific object
        return nav.acctReg();
      };
  }]
);
