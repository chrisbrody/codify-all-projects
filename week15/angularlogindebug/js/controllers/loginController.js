loginApp
  .controller('loginCtrl',
    ['$scope', '$location' 'LogInService', 'navService', function(scope, $location, login, $nav) {
      $scope.username;
      $scope.userPassword;

      $scope.login = function() {
        return login.logIn($scope.userName, scope.userPassword);
      };
      scope.acctReg = function() {
        return navacctReg();
      };
  }]
);
