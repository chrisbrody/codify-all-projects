// Problem 1. - Create a for loop that print numbers 0 - 100 in increments of 5
for (var i = 0; i < 100; i = i + 5) {
  console.log(i);
};

// Problem 2. - Save user data using getElementById and .value
function getData() {
  var el      = document.getElementById("userBirthPlace");
  var elValue = el.value;

  console.log(elValue);
};

// Problem 3. - Create 3 objects with at least 4 properties
var chris = {
  name : "Chris",
  age  : 300,
  hair : "black",
  eyes : "green"
};
var matt = {
  name : "Matt",
  age  : 301,
  hair : "brown",
  eyes : "blue"
};
var sam = {
  name : "Sam",
  age  : 302,
  hair : "gold",
  eyes : "grey"
};

// Problem 4. - Create an array from those 3 objects
var newArrayOfObjects = [chris, matt, sam];

// Problem 5. - Display the object information on the page inside of HTML elements using .textContent
for (var i = 0; i < newArrayOfObjects.length; i++) {
  var nameEl = document.getElementById("name" + [i]);
  var infoEl = document.getElementById("info" + [i]);

  nameEl.textContent = "User " + i + " is " + newArrayOfObjects[i].name;
  infoEl.textContent = "Age is " + newArrayOfObjects[i].age + ", Hair color is " + newArrayOfObjects[i].hair + ", Eye color is " + newArrayOfObjects[i].eyes;
};
