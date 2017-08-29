loginApp
  // This is another controller, named 'profileUpdateCtrl' with five dependencies.
  .controller('profileUpdateCtrl', ['$scope', '$location', 'LogInService', 'acctRegService', 'navService', function($scope, $location, login, accReg, nav) {
    // This is targetting the 'user' property on the 'login' object, which is actually the returned object from the 'LogInService' service.
    var user = login.user;

    // Because this is a UPDATE controller, we're taking the content from the page and updating the value on the user object with what the new information is.
    $scope.fName = user.fName;
    $scope.lName = user.lName;
    $scope.gender = user.gender;
    $scope.phone = user.phone;
    $scope.email = user.email;
    $scope.bio = user.bio;

    // This function takes the above information and passess it through to the 'acctRegService' service which has a function acctUpdate() which update all the information for that user-object.
    $scope.acctUpdate = function() {
      return accReg.acctUpdate(user, $scope.fName, $scope.lName, $scope.gender, $scope.phone, $scope.email, $scope.bio);
    };

    // This is just a function bound to a button to navigate back to the profile page if the user decides they don't actually want to update their profile information.
    $scope.profile = function() {
      return nav.profile();
    };
  }]);
