angular.module('registrationService', [])
  // We're using the .factory() method again here to build a custom service. The name of the MODULE is 'registrationService' and the name of the ACTUAL SERVICE is 'acctRegService'.
  .factory('acctRegService', ['$location', function($location) {

    // The service is going to return an object with this function as one of its methods. This function takes 8 properties, as defined by line 15 in registerController.js.
    var acctReg = function(a, b, c, d, e, f, g, h) {
      // This is a simple, standard email address regular expression
      var emailRegEx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      // We are creating a new object literal named 'user'
      var user = {};

      // We're creating these two variables for testing purposes
      var validEmail = false;
      var nameAvail = true;

      // We are looping through our users array from main.js. IF the user's input for a username is equal to an already existing name OR their entry is blank, we set nameAvail to 'false'
      for (var i = 0; i < users.length; i++) {
        if (a === users[i].username || a === '') {
          nameAvail = false;
        };
      };
      // If the user's input for email passes the regex test, then we confirm that the email is valid. Otherwise, it stays as false.
      if (emailRegEx.test(g)) {
        validEmail = true;
      };

      // If the provided username is available AND the email address is valid, then we take all the information provided and store it in the object created at the top of the function. We then push that object to our users array in main.js, and then go to our 'success.html' page.
      if (nameAvail == true && validEmail == true) {
        user.username = a;
        user.password = b;
        user.fName = c;
        user.lName = d;
        user.gender = e;
        user.phone = f;
        user.email = g;
        user.bio = h;
        users.push(user);
        $location.path('/success')
        return
      } else {
        // If the name isn't available, run this alert.
        if (nameAvail == false) {
          return alert('Username taken, please try something else.');
        };
        if (validEmail == false) {
          // If the email isn't valid, run this alert.
          return alert('Please enter a valid email address.');
        };
      };
    };

    // This function is very similar to the above function, it just doesn't take as many parameters because the user is updating their proile information, not regetistering a new account. We still want to make sure that if they update their email address, it's a correct one so we still use the regular expression.
    var acctUpdate = function(a, b, c, d, e, f, g) {
      var emailRegEx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      var validEmail = false;
      if (emailRegEx.test(f)) {
        validEmail = true;
      };

      if (validEmail == true) {
        a.fName = b;
        a.lName = c;
        a.gender = d;
        a.phone = e;
        a.email = f;
        a.bio = g;
        $location.path('/profile')
      } else {
          console.log('Please enter a valid email address.');
          console.log(validEmail);
      };
    };

    // This is the object that gets returned - controllers and other components interact with this object based on the property names, and the value pairings are defined by things within/accessible within this file.
    return {
      acctReg: acctReg,
      acctUpdate: acctUpdate
    };
  }]);
