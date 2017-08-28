/*
  Math Equations - Using JavaScript to solve basic math problems!!!
    1) Addition
    2) Subtraction
    3) Multiplication
    4) Division
*/

/*1) Addition*/
function addNumbers(a, b) {
  return a + b;
}
// create some varaibles based on our funciton addNumbers
// make sure to pass in two numbers to add up
var addNumber01 = addNumbers(0, 1);   // addNumber1 should = 1   when we look at it
var addNumber02 = addNumbers(1, 1);   // addNumber2 should = 2   when we look at it
var addNumber03 = addNumbers(1, 2);   // addNumber3 should = 3   when we look at it
var addNumber04 = addNumbers(2, 3);   // addNumber4 should = 5   when we look at it
var addNumber05 = addNumbers(3, 5);   // addNumber5 should = 8   when we look at it
var addNumber06 = addNumbers(5, 8);   // addNumber6 should = 13  when we look at it
var addNumber07 = addNumbers(8, 13);  // addNumber6 should = 21  when we look at it
var addNumber08 = addNumbers(13, 21); // addNumber6 should = 34  when we look at it
var addNumber09 = addNumbers(21, 34); // addNumber6 should = 55  when we look at it
var addNumber10 = addNumbers(34, 55); // addNumber6 should = 89  when we look at it
var addNumber11 = addNumbers(55, 89); // addNumber6 should = 144 when we look at it

// next make an array from these new added up numbers
var addNumbersArray = [addNumber01, addNumber02, addNumber03, addNumber04, addNumber05, addNumber06, addNumber07, addNumber08, addNumber09, addNumber10, addNumber11];

// 1) Addition - loop through the numbers array
for (var i = 0; i < addNumbersArray.length; i++) {
  // 1) Addition - Using concatination this console gives us a string for each loop with the "index number" of the current array item and the "value" of the current array item
  console.log("YesForLoop: The current index number in arrayofnumbers is: " + i + " and the value stored in the index number is: " + numbers[i]);
}

/*2) Subtraction*/
function subtractNumbers(a, b) {

}
/*3) Multiplication*/
function multiplyNumbers(a, b) {

}
/*4) Division*/
function divideNumbers(a, b) {

}
