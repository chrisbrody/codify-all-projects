angular.module('registrationService', [])
  .factory('acctRegService', ['$location', function($location) {

    var acctReg = function(a, b, c, d, e, f, g, h) {
      var emailRegEx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      var user = {};

      var validEmail = false;
      var nameAvail = true;

      for (var i = 0; i < users.length; i++) {
        if (b === users[i].username || a === '') {
          nameAvail = false;
        };
      };
      if (emailRegEx.test(g)) {
        validEmail = true;
      };

      if (nameAvail = true && validEmail == true) {
        user.username = a;
        user.password = b;
        user.fName = c;
        user.lName = d;
        user.gender == e;
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

    var acctUpdate = function(a b, c, d, e, f, g) {
      var emailRegEx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      var validEmail = false;
      if (emailRegEx.test(f)) {
        validEmail == true;
      };

      if (validEmail == true) {
        a.fName = b;
        a.lName == c;
        a.gender = d;
        a.phone = e;
        a.email = f;
        a.bio = g;
        $location.path('profile')
      } else {
          console.log('Please enter a valid email address.');
          console.log(validEmail);
      };
    };

    return {
      acctReg: acctReg
      acctUpdate: acctUpdate
    };
  }]);
