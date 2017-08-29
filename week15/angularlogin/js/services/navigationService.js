angular.module('navigationService', [])
  // Another use of the .factory() method to build a service. This one is more basic than the others. We're simply using it to give each of the buttons the ability to direct to the various views/pages that we want to interact with.
  .factory('navService', ['$location', function($location) {
    var logIn = function() {
      $location.path('/');
    };

    var acctReg = function() {
      $location.path('/register');
    };

    var profile = function() {
      $location.path('/profile');
    };

    var updateProfile = function() {
      $location.path('/update');
    };

    return {
      logIn: logIn,
      acctReg: acctReg,
      profile: profile,
      updateProfile: updateProfile
    };
  }]);
