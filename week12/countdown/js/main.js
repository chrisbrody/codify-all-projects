'use strict'

var secondsRemaining,
    intervalHandle;

// Input stored as a variable and event handler added for 'Enter Key' functionality
var userInput = document.getElementById('userInput');
userInput.addEventListener('keypress', function(e) {
  if(e.keyCode == 13) {
    startCountdown();
  };
}, false);

// Button stored as a variable and event handler added for 'click' event
var btn = document.getElementById('btn');
btn.addEventListener('click', startCountdown);

// Function that is repeated to update the remaining time on the countdown
function tick(){
	// H1 stored as a variable
	var timeDisplay = document.getElementById('timeRemaining');
	// Convert the seconds into minutes
	var min = Math.floor(secondsRemaining / 60);

  // If the minutes value is larger than 60, display hours
  if (min > 60) {
    // Store the hour value
    var hour = Math.floor(min / 60);
    // Use a new variable to reference the number of minutes without actually changing the 'min' variable
    var minHour = min - 60;
    // Seconds value. secondsRemaining = total seconds remaining, (min * 60) is the total number of minutes multiplied by 60, to get the correct representation of seconds.
    var sec = secondsRemaining - (min * 60);
    // If minutes are less than 10, display them with a leading 0, as a string
    if (minHour < 10) {
      minHour = '0' + minHour;
    };
    // If seconds are less than 10, display them with a leading 0, as a string
    if (sec < 10) {
  		sec = '0' + sec;
  	};
    // The message will be hh:mm:ss
    var message = hour.toString() + ':' + minHour + ':' + sec;
    timeDisplay.innerHTML = message;

    // When the countdown is done, throw an alert and clear the interval
    if (secondsRemaining === 0) {
      alert('Done!');
      clearInterval(intervalHandle);
    };
  } else {
    // If the min value isn't larger than 60, then use this code
    var sec = secondsRemaining - (min * 60);

    // If seconds are less than 10, display them with a leading 0, as a string
  	if (sec < 10) {
  		sec = '0' + sec;
  	};

  	// The message will be mm:ss
  	var message = min.toString() + ':' + sec;
  	timeDisplay.innerHTML = message;

    // When the countdown is done, throw an alert and clear the interval
  	if (secondsRemaining === 0){
  		alert('Done!');
  		clearInterval(intervalHandle);
  	};
  };
	//Subtract one from secondsRemaining - note that this is outside of the if/else blocks of code meaning it will ALWAYS happen regardless of which block of code is executed
	secondsRemaining--;
}

function startCountdown(){
	// Gets the content of 'userInput' variable and stores it as 'minutes'
	var minutes = userInput.value;
	// Checks to see if the user's input is even a number. If not, alert message is shown.
	if (isNaN(minutes)){
		alert("We can't count down from '' + minutes + '' silly! Please enter a number :)");
		return; // stops function if true
	}
	// Calculates how many seconds are remaining.
	secondsRemaining = minutes * 60;
	// Use 'setInterval' method to call the tick() function every 1000 ms (1 second)
	// We make it into a variable so that we can stop the interval when it hits 0
	intervalHandle = setInterval(tick, 1000);
}
