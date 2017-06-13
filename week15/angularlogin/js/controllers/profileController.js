loginApp
  // This is another controller, named 'profileCtrl'. It has 4 dependencies, all listed inside the array, and then passed to the function as parameters.
  .controller('profileCtrl', ['$scope', '$location', 'LogInService', 'navService', function($scope, $location, login, nav) {
    // This var = user is equal to the content of 'login.user'. 'login' here is referencing 'LogInService,' so what we're targetting is the 'user' property on the 'LogInService' object, which is equal to an object with user data that we stored from loginService.js
    var user = login.user;

    // These are all variables declared on the $scope object, and each are set equal to the corresponding property on the user variable, which we know is actually the content in the user property on the LogInService object.
    $scope.fName = user.fName;
    $scope.lName = user.lName;
    $scope.email = user.email;
    $scope.phone = user.phone;
    $scope.bio = user.bio;
    $scope.gender = user.gender;

    // These are the functions bound to the ng-click attributes in the profile.html file. Their functionality is defined in the navigationService.js file, which we know from 'navService', and are interacting with as 'nav'.
    $scope.updateProfile = function() {
      return nav.updateProfile();
    };

    $scope.logOut = function() {
      return nav.logIn();
    };
  }]);
