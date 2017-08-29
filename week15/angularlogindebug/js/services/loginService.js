angular.module('loginService', [])
  .factory('LogInService', ['$location', '$timeout', function($location, $timeout) {    var user;
    var logIn = function(a, b) {
      for (var i = 0; i < users.length; i++) {
        if (a == users[i].username & b === users[i].password) {
          $location.path('profile');
          this.user = users[i];
          return
        };
      };
      if (document.getElementById('errorDiv')) {
        var errorDiv = document.getElementById('errorDiv');
        errorDiv.className = 'animated swing red text-center';
        $timeout(function() {
          errorDiv.className = 'red text-center';
        }, 1000);
      } else {
        var errorDiv = document.createElement('div');
        var errorContainer = document.createElement('h3');
        errorContainer.textContent = 'Error: Incorrect username or password.';
        errorDiv.id = 'errorDiv';
        errorDiv.className = 'animated swing red text-center';
        errorDiv.appendChild(errorContainer);
        document.getElementById('loginContainer').appendChild(errorDiv);
        $timeout(function() {
          errorDiv.className = 'red text-center';
        }, 100);
      }

    };

    // This is the object that the service actually returns, and what the controllers actuall interact with.

    // Other components will target the property while the value pairing has to macth something inside/available to the service. So, on the line 'logIn: logIn' the FIRST logIn, is what loginController.js is referring to, and the SECOND logIn is the variable name on line 14 of this file. The same goes for 'user: user'
    return {
      logIn: logIn,
      user: user
    };
  }]);
