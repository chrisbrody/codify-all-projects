$(document).ready(function() {

  // #4 Make the image element appear and disappear when you click the corresponding button.
  $("#hideBtn").click(function() {
    $("#exercise3 img").hide();
  });
  $("#showBtn").click(function() {
    $("#exercise3 img").show();
  });

  // #6 Make the appearance of h1 element switch between two style sets when it is Double Clicked.
  $("#exercise4 h1").dblclick(function() {
    $("#exercise4 h1").toggleClass("styleSwitch");
  });

  // #8 Add li elements with content to the end of a list when the button is clicked.
  $("#addBtn").click(function() {
    $("#exercise5 ul").append("<li>CONTENT!</li>");
  });

  // #10 Change the appearance of a div when you (the user) hovers over it.
  $("#exercise9").hover(function() {
    $("#exercise9").animate({
      margin : "15px 35px",
      padding: "10px",
      width: "25%"
    });
  });

  // #12 Make the h2 element slide up when your mouse leaves the element.
  $("#exercise11").mouseleave(function() {
    $("#exercise11").slideUp();
  });

  // #14 Have this div fade away when you hover over it, and then make it come back when you click a button.
  $("#exercise13Div").hover(function() {
    $("#exercise13Div").fadeOut();
  });
  $("#exercise13Btn").click(function() {
    $("#exercise13Div").fadeIn();
  });
});
