var display = document.getElementById("display");

// Problem 1. - Create a new element when the page is loaded
var newH1 = document.createElement("h1");
display.appendChild(newH1);

// Problem 2. - Add text content to the new element using a textNode
var newTextNode = document.createTextNode("This is me Coding in an Office!");
newH1.appendChild(newTextNode);

// Problem 3. - Add a class to the new element, be sure to add some styles to the class in CSS
newH1.className = "text-primary test";

// Problem 4. - Create a new image element when the page is loaded
var newImage = document.createElement("img");
display.appendChild(newImage);

// Problem 5. - Add a src and alt attribute to the image element
newImage.src = "img/designersdesk.jpg";
newImage.alt = "Coding Desk, Get to work";
