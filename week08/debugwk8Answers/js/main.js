// Problem 1. - Print to the console, the screen and an alert
console.log("This text prints to the console");
document.write("Welcome to the document window");
alert("I don't like Alerts!");

// Problem 2. - Save user's data in a variable using a prompt
var usersname = prompt("What is your name?");
document.write(" Welcome " + usersname);

// Problem 3. - Create the 4 different types of variables
var stringVar  = "This is a string.";
var numberVar  = 179;
var booleanVar = true;
var arrayVar   = [1, 2, 3, 4, 5];
console.log(stringVar, numberVar, booleanVar, arrayVar);

// Problem 4. - Using concatenation with your variables
var concatVar = numberVar + " is greater than " + (arrayVar[3] + arrayVar[2]);
console.log(concatVar);

// Problem 5. - Write if / else statements using variables in the condition and in the block of code that runs
if (stringVar.length > arrayVar[4]) {
  console.log("If statement ran");
} else {
  console.log("Else statement ran");
};

// Problem 6. - Create loops that prints array indexes and values
for (var i = 0; i < arrayVar.length; i++) {
  console.log("The current index is " + i, "The current value is " + arrayVar[i]);
};

// Problem 7. - Create functions that have parameters, and run with arguments
function fahrenheit2celsius(a) {
  var conversion = (a - 32) * 5 / 9;
  console.log(conversion);
};
fahrenheit2celsius(32);
fahrenheit2celsius(68);
