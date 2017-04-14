// #4 Create three objects with four properties (one must be an image file path) using object literal notation
var litObjCar1 = {
  image: "img/fiat500c.jpg",
  make : "fiat",
  model: "500c",
  price: 16490
}
var litObjCar2 = {
  image: "img/fiat500l.jpg",
  make : "fiat",
  model: "500c",
  price: 20995
}
var litObjCar3 = {
  image: "img/fiat500x.jpg",
  make : "fiat",
  model: "500c",
  price: 19995
}
console.log(litObjCar1, litObjCar2, litObjCar3);

// #5 Create the same three objects, with the same four properties, using a constructor notation.
function Cars(image, make, model, price) {
  this.image = image;
  this.make  = make;
  this.model = model;
  this.price = price;
}
var conObj1 = new Cars("img/fiat500c.jpg", "fiat", "500c", 16490);
var conObj2 = new Cars("img/fiat500l.jpg", "fiat", "500l", 20995);
var conObj3 = new Cars("img/fiat500x.jpg", "fiat", "500x", 19995);

console.log(conObj1, conObj2, conObj3);

// #4 Add to a method each literal object, that multiplies two numbers and returns the product.
var litObjCar1 = {
  image: "img/fiat500c.jpg",
  make : "fiat",
  model: "500c",
  price: 16490,
  salesTax: function() {
    return this.price * 0.09
  }
}
var litObjCar2 = {
  image: "img/fiat500l.jpg",
  make : "fiat",
  model: "500c",
  price: 20995,
  salesTax: function() {
    return this.price * 0.09
  }
}
var litObjCar3 = {
  image: "img/fiat500x.jpg",
  make : "fiat",
  model: "500c",
  price: 19995,
  salesTax: function() {
    return this.price * 0.09
  }
}
console.log(litObjCar1.salesTax(), litObjCar2.salesTax(), litObjCar3.salesTax());

// #7 Add to the constructor function, create a method that multiplies two numbers and returns the product.
function Cars(image, make, model, price) {
  this.image = image;
  this.make  = make;
  this.model = model;
  this.price = price;
  this.salesTax = function() {
    return this.price * 0.09;
  };
}
var conObj1 = new Cars("img/fiat500c.jpg", "fiat", "500c", 16490);
var conObj2 = new Cars("img/fiat500l.jpg", "fiat", "500l", 20995);
var conObj3 = new Cars("img/fiat500x.jpg", "fiat", "500x", 19995);

// #8 Add each constructor object to an array.
var carsArray = [conObj1, conObj2, conObj3];

// #9 Loop through the array of objects
for (var i = 0; i < carsArray.length; i++) {
  // for each one create an element to add the content to (one needs to be an image element).
  var newDiv  = document.createElement("div")
  var newImg  = document.createElement("img");
  var newH1   = document.createElement("h1");
  var newH2   = document.createElement("h2");
  var newP    = document.createElement("p");
  var newSpan = document.createElement("span");
  console.log(newDiv, newImg, newH1, newH2, newP, newSpan);

  // #10 Still in the loop, create text nodes for each piece of content
  var newH1Text   = document.createTextNode(carsArray[i].make);
  var newH2Text   = document.createTextNode(carsArray[i].model);
  var newPText    = document.createTextNode("price: " + carsArray[i].price);
  var newSpanText = document.createTextNode("sales tax: " + carsArray[i].salesTax());
  console.log(newH1Text, newH2Text, newPText, newSpanText);

  // #12 add those to the elements you created.
  newH1.appendChild(newH1Text);
  newH2.appendChild(newH2Text);
  newP.appendChild(newPText);
  newSpan.appendChild(newSpanText);

  // #11 Still in the loop, update the source and alt attributes of the image.
  newImg.src = carsArray[i].image;
  newImg.alt = carsArray[i].make + " " + carsArray[i].model;

  // #13 Add the elements to the HTML so a user can view them.
  newDiv.appendChild(newImg);
  newDiv.appendChild(newH1);
  newDiv.appendChild(newH2);
  newDiv.appendChild(newP);
  newDiv.appendChild(newSpan);

  document.getElementById("display").appendChild(newDiv)
}
