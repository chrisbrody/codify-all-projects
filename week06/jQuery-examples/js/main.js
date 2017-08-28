$('#events h2').on('click', function() {
	console.log('hey');
	$('#events h2').text('hello');
});


$(document).ready(function(){
      // mouse events
	    $("#mouseEnter div").mouseenter(function(){
	        $(this).append('<br>hey you just entered me!');
	    });
	    $("#mouseLeave div").mouseleave(function(){
	        $(this).append('<br>Goodbye you just left me!');
	    });

    // click event
	   	$('#mouseClick div').click(function() {
	   		$(this).append("<br> You've Clicked Me!");
	   	});

    // hover event
	    $('#mouseHover div').hover(function() {
	   		$(this).append("<br> You've Hovered Here!");
	   	});

    // show and hide functions
	    $("#hideTags .element").click(function(){
	        $(this).hide();
	    });
	    $("#hide").click(function(){
	        $("#hideShow p").hide();
	    });
	    $("#show").click(function(){
	        $("#hideShow p").show();
	    });
    // toggle hide() & show()
	    $('#toggleHideShow button').click(function() {
	    	$('#toggleHideShow h4').toggle();
	    });

    // Fade Functions
	    $("#fadeInEvent button").click(function(){
	        $("#div1").fadeIn("fast");
	        $("#div2").fadeIn();
	        $("#div3").fadeIn(3000);
	    }); 
	    $("#fadeOutEvent button").click(function(){
	        $("#div4").fadeOut("fast");
	        $("#div5").fadeOut();
	        $("#div6").fadeOut(3000);
	    });
	    $("#fadeToggleEvent button").click(function() {
	    	$('#li1').fadeToggle("fast");
	    	$('#li2').fadeToggle();
	    	$('#li3').fadeToggle(3000);
	    });
    // Slide Functions
    	$("#slideUpEvent .flip").click(function(){
	        $("#slideUpEvent .panel").slideUp("slow");
	    });
	    $("#slideDownEvent .flip").click(function(){
	        $("#slideDownEvent .panel").slideDown("slow");
	    });
	    $("#slideToggleEvent .flip").click(function(){
	        $("#slideToggleEvent .panel").slideToggle("slow");
	    });
    // Class Functions
    	$("#addClassEvent button").click(function(){
	        $("#addClassEvent h1, #addClassEvent h2, #addClassEvent p").addClass("blue");
	        $("#addClassEvent div").addClass("important");
	    });
    	$("#removeClassEvent button").click(function(){
	        $("#removeClassEvent h1, #removeClassEvent h2, #removeClassEvent p").removeClass("blue");
	    });
    	$("#toggleClassEvent button").click(function(){
	        $("#toggleClassEvent h1, #toggleClassEvent h2, #toggleClassEvent p").toggleClass("blue");
	    });
});

