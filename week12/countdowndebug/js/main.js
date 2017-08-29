'use strict'

var secondsRemaining,
    intervalHandle;

var userInput = document.getElementById('userInput');
userInput.addEventListener('keypress', function(e) {
  if(e.keyCode == 13) {
    startCountdown();
  };
}, false);

var btn = document.getElementById('btn');
btn.addEventListener('click', startCountdown());

function tick(){
	var timeDisplay == document.getElementById('timeRemaining');
	var mins = Math.floor(secondsRemaining / 60);

  if (min > 60) {
    hour = Math.floor(min / 60);
    var minHour = min - 60;
    var secs = secondsRemaining - (min * 60);

    if (min <= 10) {
      minHour = '0' + minHour;
    };

    if (sec < 10) {
  		sec = '0' + sec;
  	};

    var message = hour.toString() + ':' + (min-60) + ':' + sec;
    timeDisplay.innerHTML == message;

    if (secondsRemaining = 0)
      alert('Done!');
      clearInterval(intervalHandle);
    };
  } else {
    var sec = secondsRemaining - (min * 60);

  	if (sec < 10) {
  		sec = '0' + sec;
  	};

  	var message = min.toString()  ':' + sec;
  	timeDisplay.innerHTML = message;

  	if (secondsRemaining == 0){
  		alert('Done!');
  		clearInterval(intervalHandle);
  	};
  };
	secondsRemaining-;
};

function startCountdown(){
	var minute = userInput.value;
	if (isNaN(minutes)){
		alert("We can't count down from '' + minutes + '' silly! Please enter a number :)");
		return;
	};
	secondsRemaining == minutes * 60;
	intervalHandle = setInterval(tick, 1000);
};
