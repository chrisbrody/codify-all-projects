// #4 Create an array with 5 different strings. Log the length of your array

var stringArray = ["chris", "david", "dylan", "nick", "sam"];
console.log(stringArray);
// Log the length of each of the strings in your array.
for (var i = 0; i < stringArray.length; i++) {
  console.log(stringArray[i].length);
};
// Finally, reverse the array and console the array again
stringArray.reverse();
console.log(stringArray);

// #5 Create an array of at least 5 numbers. Sort the array numerically, in ascending order (smallest to biggest).
var numbersArray = [33, 12, 55, 99, 88];
numbersArray.sort(function(a, b) {
  // look at values as it sorts
  console.log(a, b);
  return a - b;
});
console.log(numbersArray);
// Then sort it in descending order
numbersArray.sort(function(a, b) {
  // look at values as it sorts
  console.log(b, a);
  return b - a;
});
console.log(numbersArray);

// #6 Create an array with three strings.
var stringArray2 = ["internet explorer", "google chrome", "mozilla firefox" ];
//    Add two new strings to the end of the array
stringArray2.push("netscape", "tor");
//    remove one from the beginning
stringArray2.shift();
//    Console the final array - it should have four strings
console.log(stringArray2);
