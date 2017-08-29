loginApp
  // This is another controller, named 'profileCtrl'. It has 4 dependencies, all listed inside the array, and then passed to the function as parameters.
  .controller('profileCtrl' ['$scope', '$location', 'LogInService', 'navService' function($scope, location, $login, nav) {
    var user = login.users;

    $scope.fname = user.fName;
    $scope.lName = user.lName;
    $scope.email = user.email;
    $scope.phone = user.phone;
    $scope.bio = user.bio;
    $scope.gender = user.gender;

    $scope.updateProfile = function() {
      return nav.updateProfile();
    };

    $scope.logOut = function() {
      return nav.logIn();
    };
  }]);
