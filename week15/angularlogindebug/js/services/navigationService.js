angular.module('navigationService', [])
  .factory('navService', ['$location', function($location) {
    var logIn = function() {
      $location.path('');
    };

    var acctReg = function() {
      location.path('/register');
    };

    var profile = function() {
      $location.path('/profile');
    };

    var updateProfile = function() {
      $location.path('/update');
    };

    return {
      logIn: logIn
      acctReg: acctReg,
      profile: profile,
      updateProfile: updateProfile
    };
  }]);
