loginApp
  // This controller is named 'registerCtrl' and has 3 dependencies, two of which are built-in Angular services, and one which is a custom service which can be interacted with as accReg, as defined by the parameter value.
  .controller('registerCtrl', ['$scope', '$location', 'acctRegService', function($scope, $location, accReg) {
    // These are just variables declared on this controller's $scope object. They're all set to initialize to blank values.
    $scope.userName;
    $scope.userPassword;
    $scope.fName;
    $scope.lName;
    $scope.gender;
    $scope.phone;
    $scope.email;
    $scope.bio;

    // This is a function defined on the 'acctRegService' object which takes 8 parameters, all of which will be taken from the above variables as they're updated.
    $scope.acctReg = function() {
      return accReg.acctReg($scope.userName, $scope.userPassword, $scope.fName, $scope.lName, $scope.gender, $scope.phone, $scope.email, $scope.bio);
    };
  }]);
