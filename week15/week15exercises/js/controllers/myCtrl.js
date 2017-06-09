// #11 using the variable that your stored your app module in, create a controller
app.controller("myCtrl", function($scope) {
  // #12 Add a string of data to the controller scope the the text "This is an expression".
  $scope.express = "This is an expression";

  // #18 Create an array of objects and store it using $scope.
  $scope.users = [
    {
      username: "chris",
      useremail: "chris@gmail.com"
    },
    {
      username: "matt",
      useremail: "matt@gmail.com"
    },
    {
      username: "sam",
      useremail: "sma@gmail.com"
    }
  ];
});
