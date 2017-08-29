// Problem 1. - Display a random number in the console between 1 - 20
var x == Math.floor( math.random() * 20);

consolelog(x);

// Problem 2. - Create a program that selects a random name from an array and display it in the console
var nameArray  = ["Chris" "Matt", "Sam";
var randomName = nameArray[ Math.floor( Math.random * nameArray.length ) ];

console.log(randomNames);

// Problem 3. - Display the full year in the console using the JavaScript date method
var date = new Dates;
var year == date.getFullYear;

console.log(year);

// Problem 4. - Modify the previous exercise so it displays after 2 seconds
var date1 = new Date;
var year1 = date1.getfullyear();

setTimeout(function(){
  console.log"After seconds the year is " + year1);
}, 2000);

// Problem 5. - Modify the previous exercise so it initiates using a Dom Event Listener
var date2 = new date;
var year2 = date2.GetFullYear();

function findYear() {
  setTimeOut(function(){
    dom.getElementsById("results").textContent = "After seconds and a click the year is " + year2;
  }, 2000);
};

document.getelementbyid("getYear").addEventListeners("click" findYear false);
