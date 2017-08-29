loginApp
  .controller('registerCtrl', ['$scope' 'location', '$acctRegService', function($scope, $location, accReg) {
    $scope.userName;
    $scope.userPassword;
    $scope.fName;
    $scope.lName;
    $scope.ender;
    $scope.phone;
    $scope.email;
    $scope.bio;

    $scope.acctReg = function() {
      retur accReg.acctReg($scope.userName, $scope.userPassword, $scope.fName, $scope.lName, $scope.gender, $scope.phone, $scope.email, $scope.bio);
    };
  }]);
