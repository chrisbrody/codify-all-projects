// Problem 1. - Display the length of the 2 variable types that have the length property
var stringVar = "This is a string with many characters.";
var arrayVar  = [1, 2, 3, 4, 5];
console.log("Length of String: " + stringVar.length, "Length of Number: " + arrayVar.length);

// Problem 2. - Sort an array of strings
var stringArray = ["One", "Two", "Three", "Four", "Five"];
stringArray.sort();
console.log(stringArray);

// Problem 3. - Reverse an array of strings
stringArray.reverse();
console.log(stringArray);

// Problem 4. - Sort an array of numbers
var numberArray = [90, 95, 87, 60, 76];
numberArray.sort(function (a, b) {
  return a - b;
});
console.log(numberArray);

// Problem 5. - Push a new string to the end of the string array
stringArray.push("Six");
console.log(stringArray);

// Problem 6. - Remove the last number from the number array
numberArray.pop();
console.log(numberArray);

// Problem 7. - Add a new object to the beginning of the string array
var newObj = { number : "Seven" };
stringArray.unshift(newObj);
console.log(stringArray);
