// #4 Create an array of 5 numbers each with 2 decimal places.
var numbersArray = [12.99, 1.34, 19.87, 66.24, 87.19];
var newNumbersArray = [];
// #5 Loop through that number array
for (var i = 0; i < numbersArray.length; i++) {
  // round all numbers to the nearest whole integer
  var x = Math.round(numbersArray[i]);
  // add each to a new array
  newNumbersArray.push(x);
}
console.log(newNumbersArray);

// #6 Create a function that produces 10 random numbers between 1 and 100, and add each number to another array of numbers.
var newNumbersArray2 = [];
function randomNumbers() {
  var y = Math.ceil( Math.random() * 100 );
  newNumbersArray2.push(y);
};
for (var i = 0; i < 10; i++) {
  randomNumbers();
};
console.log(newNumbersArray2);

// #7 Create a function that creates a few variables to store the whole date, the current hour, the current minute and the current second.
function newDate() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  // #8 Inside the function, create a variable using concatination to produce the current time ex. 12:30:45.
  var currentTime = hours + ":" + minutes + ":" + seconds;
  console.log(currentTime)
  // #9 Inside the function, create a few more variables to store the current month, day and year.
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  // #10 Inside the function, create a variable using concatination to produce the current date ex. 1/1/17.
  var currentDate = month + "/" + day + "/" + year;
  console.log(currentDate);

  // #11 Run this time/date function every second using the Set Timeout Method.
  setTimeout(function() {
    newDate();
  }, 1000)
}

// #11 Run this time/date function every second using the Set Timeout Method.
setTimeout(function() {
  newDate();
}, 1000);

// #12 Write a function that displays an alert of the current date, using an HTML event handler.
function htmlEvent() {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var currentDate = month + "/" + day + "/" + year;

  document.getElementById("displayDateEl").textContent = currentDate;
};

// #13 Write a function that displays an alert of the current time, using a DOM event handler.
function domEventHandeler() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  var currentTime = hours + ":" + minutes + ":" + seconds;

  document.getElementById("displayTimeEl").textContent = currentTime;
};
document.getElementById("displayTime").onclick = domEventHandeler;

// #14 Write a function that displays the current year using a DOM event listener
function domEventListener() {
  var today = new Date();
  var year = today.getFullYear();

  document.getElementById("displayYearEl").textContent = year;
};
document.getElementById("displayYear").addEventListener("click", domEventListener, false);
