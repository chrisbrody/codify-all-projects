// Problem 1. - Create an array of 5 strings, make some letters capital
var stringsArray = ["HTml", "Css", "bootSTRAP", "jQuery", "JavaSCript"];

// Problem 2. - Loop through that array of strings, change each entry to lowercase, and add them to a new array.
var newStringsArray = [];

for (var i = 0; i < stringsArray.length; i++) {
  newStringsArray.push(stringsArray[i].toLowerCase());
};

console.log(newStringsArray);

// Problem 3. - Loop through the new array and print the first and last character of each string to the console.
for (var i = 0; i < newStringsArray.length; i++) {
  var first = newStringsArray[i].charAt(0);
  var last  = newStringsArray[i].charAt(newStringsArray[i].length - 1);

  console.log("First Letter is: " + first, "Last Letter is: " + last);
};

// Problem 4. - Create an variable storing your name. Using the split method and a loop console each letter.
var name = "Christopher Brody";
var splitName = name.split("");

for (var i = 0; i < splitName.length; i++) {
  console.log(splitName[i]);
};

// Problem 5. - Join your name string back together and replace all occurrences of one letter with another. ex. replace all a's with y's.
splitName = splitName.join(" ");

console.log(splitName.replace(/o/g, "y"));

// Problem 7. - Create a function that will get the user input, test it against the standard email regex, and print the result in the console.
function validateEmail() {
  var userEmail = document.getElementById("userEmail");
  var regEx = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;

  console.log(regEx.test(userEmail.value));
};

// Problem 8. - Add the function to the button using addEventListener.
document.getElementById("testEmail").addEventListener("click", validateEmail);
