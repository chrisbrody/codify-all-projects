angular.module('loginService', [])
  // We're using the .factory() method to build a service (not to be confused with the .service() method). The name of the MODULE is 'loginService' and the name of the ACTUAL SERVICE is 'LogInService'.

  // It's important to recognize the difference - the module is what you inject as a dependency on the Angular application (in our app.js file) and the name of the ACTUAL SERVICE is what you inject into the various controllers (and even services, if necessary/desired)

  // This particular service also depends on $location and $timeout, which are two built-in Angular services

  // When building a custom service, it's important to know that what a service actually RETURNS is an object. That object can contain functions (methods) or data declared on it.
  .factory('LogInService', ['$location', '$timeout', function($location, $timeout) {
    // This variable is declared here simply so it can be targetted when returning the service object.
    var user;

    // This is the logIn() function - it accepts two parameters as defined by when the function is called. They're listed as 'a' and 'b' but what they're actuall equal to changes - you can see where this actually gets called in loginController.js on line 13
    var logIn = function(a, b) {

      // This is a straight-forward if statement - if the user's input for username and password match one of the objects in our users array in our main.js file, then we proceed with the code block - otherwise, move onto the rest of the code.

      // When successful, we will change the view because of $location.path() and then we will re-define the user property of 'this' - which in this case is the actual service itself. What this means is that if we get a match and someone enters in a correct pair of username and password, we will grab that entire object and store it in 'this.user'. Then we return and break out of the function entirely.
      for (var i = 0; i < users.length; i++) {
        if (a === users[i].username && b === users[i].password) {
          $location.path('/profile');
          this.user = users[i];
          return
        };
      };

      // This is the code for if the user enters in incorrect information

      // This first line is basically asking if the 'errorDiv' element exists - if it DOES, then it should target the element and then change its classes. Then, after 1 second, it should revert those classes so that the animation can be re-applied if more incorrect information is entered.
      if (document.getElementById('errorDiv')) {
        var errorDiv = document.getElementById('errorDiv');
        errorDiv.className = 'animated swing red text-center';
        $timeout(function() {
          errorDiv.className = 'red text-center';
        }, 1000);
      } else {
        // This else is saying that if 'errorDiv' DOES NOT yet exist, then it should be created, appended, and the same animation should be applied and then removed so it can be re-applied later.
        var errorDiv = document.createElement('div');
        var errorContainer = document.createElement('h3');
        errorContainer.textContent = 'Error: Incorrect username or password.';
        errorDiv.id = 'errorDiv';
        errorDiv.className = 'animated swing red text-center';
        errorDiv.appendChild(errorContainer);
        document.getElementById('loginContainer').appendChild(errorDiv);
        $timeout(function() {
          errorDiv.className = 'red text-center';
        }, 1000);
      }

    };

    // This is the object that the service actually returns, and what the controllers actuall interact with.

    // Other components will target the property while the value pairing has to macth something inside/available to the service. So, on the line 'logIn: logIn' the FIRST logIn, is what loginController.js is referring to, and the SECOND logIn is the variable name on line 14 of this file. The same goes for 'user: user'
    return {
      logIn: logIn,
      user: user
    };
  }]);
