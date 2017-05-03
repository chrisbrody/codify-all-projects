// Problem 1. - Display a random number in the console between 1 - 20
var x = Math.ceil( Math.random() * 20);

console.log(x);

// Problem 2. - Create a program that selects a random name from an array and display it in the console
var nameArray  = ["Chris", "Matt", "Sam"];
var randomName = nameArray[ Math.floor( Math.random() * nameArray.length ) ];

console.log(randomName);

// Problem 3. - Display the full year in the console using the JavaScript date method
var date = new Date;
var year = date.getFullYear();

console.log(year);

// Problem 4. - Modify the previous exercise so it displays after 2 seconds
var date1 = new Date;
var year1 = date.getFullYear();

setTimeout(function(){
  console.log("After seconds the year is " + year1);
}, 2000);

// Problem 5. - Modify the previous exercise so it initiates using a Dom Event Listener
var date1 = new Date;
var year1 = date.getFullYear();

function findYear() {
  setTimeout(function(){
    document.getElementById("results").textContent = "After seconds and a click the year is " + year1;
  }, 2000);
};

document.getElementById("getYear").addEventListener("click", findYear, false);
