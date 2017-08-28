//code based on exercises from http://codifyacademy.com/wk7/

// #3 Determine what variable type each one is
var testOne = "What kind of variable is this?";
console.log("testOne is a: " + typeof(testOne));
var testTwo = 256;
console.log("testTwo is a: " + typeof(testTwo));
var testThree = ["What", "kind", "of", "variable", "am", "I?"];
console.log("testThree is a: " + typeof(testThree)); // we know this as an array and will look at objects next week
var testFour = false;
console.log("testFour is a: " + typeof(testFour));
var testFive = [1, 2, 5];
console.log("testFive is a: " + typeof(testFive)); // we know this as an array and will look at objects next week
var testSix = 128;
console.log("testSix is a: " + typeof(testSix));
var testSeven = "What am I?"
console.log("testSeven is a: " + typeof(testSeven));
var testEight = true;
console.log("testEight is a: " + typeof(testEight));
var testNine = ["What kind of variable is this?", 2, 5, 19]; // we know this as an array and will look at objects next week
console.log("testNine is a: " + typeof(testNine));


// #4 Concatenation (combining things in JavaScript)
  // 4.1 Given these variables
  var string1 = 'Hello ';
  var string2 = 'my name is ';
  var string3 = 'you name here';
  var combinedStrings = string1 + string2 + string3;
  console.log("result of combinedStrings is: " + combinedStrings);

  // 4.2 Given these variables
  var num1 = 8;
  var num2 = 52;
  var num3 = 60;
  var combinedNumbers = num1 + num2 + num3;
  console.log("result of combinedNumbers is: " + combinedNumbers);

  // 4.3 Given these variables
  var mixedNum1 = 10;
  var mixedString1 = "ten";
  var mixedNum2 = "10";
  var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1;
  console.log(mixedConcatenation);


// #5 IF / ELSE IF / ELSE - Checking True or False
  // 5.1 Given these variables
  var num4 = 5;
  var num5 = 0;
  if (num4 > 1) {
    console.log("Num4 is greater than 1");
  } else {
    console.log("Num4 is NOT greater than 1");
  };

  // 5.2 Given these variables
  var num4 = 5;
  var num5 = 0;
  if (num4 < num5 || num4 === num5 && true) {
    console.log("If statement ran!");
  } else {
    console.log("Else statement ran");
  };

  // 5.3 Given these variables
  var num4 = 5;
  var num5 = 0;
  if (num4 < num5 || num4 === num5) {
    console.log("If statement ran!");
  } else if (num5 === "0" || true) {
    console.log("Else if statement ran");
  } else {
    console.log("Else statement ran");
  };

  // 5.4 Given these variables
  var num4 = 5;
  var num5 = 0;
  if (num4 > num5 && num4 === num5) {
    console.log("If statement ran!");
  } else if (num5 === "0" || true) {
    console.log("Else if statement ran");
  } else {
    console.log("Else statement ran");
  };

// #6 For Loop - Looking into Arrays
  // 6.1 Given this variable
  var array1 = ["this", "is", "an", "array", "of", "strings"];
  for (var i = 0; i < array1.length; i = i + 1) {
    console.log(i, array1[i]);
  };

  // 6.2 Given these variables
  var array2 = [1, 3, 5, 7, 9];
  var total = 0;
  for (var i = 0; i < array2.length; i = i + 1) {
    total = total + array2[i];
  };
  console.log(total);

  // 6.3 Given this variable
  var array3 = [11, 33, 55, 77, 99];
  for (var i = 0; i < array2.length; i = i + 1) {
    if(array3[i] >= 55 || array3[i] <= 100){
      console.log(array3, array3[i]);
    };
  };

// #7 Functions - making things happen
  // 7.1 Given this function
  function testStuff (a, b) {
    if(a > 25 && b < 100){
      console.log(a + " is greater than 25 and " + b + "is less then 100");
    } else {
      console.log(a + " is NOT greater than 25 and " + b + "is NOT less then 100");
    };
  };
  testStuff(10, 101);
  testStuff(26, 99);
  testStuff(100, 25);

  // 7.2 Given this function
  function testStuff2(c, d) {
    if(c == 25){
      console.log(c + " is equal to 25");
    } else if(d <= 100){
      console.log(d + " is less than or equal to 100");
    } else {
      console.log("Neither if or else if statement ran");
    };
  };
  testStuff2(26, 101);
  testStuff2(25, 99);
  testStuff2(102, 24);
