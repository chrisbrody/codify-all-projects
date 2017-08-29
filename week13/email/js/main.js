// validate email function
function validateEmail() {
	// store email validation
	var mailFormat = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;
	// store user email from name="email1" line 20 index.html
	var useremail = document.getElementById("useremail");
	// store results elements
	var results = document.getElementById("results");

	// if user data passes email validation, do this
	if( useremail.value.match(mailFormat) ) {
		// add a class of success to results
		results.className = "success";
		// update the text content of results
		results.textContent = "the email '" + useremail.value + "' is valid";

		// return to stop the function
		return;
	}
	// otherwise its not valid, so do this
	else {
		// refocus on input field
		useremail.focus();

		// add a class of failure to results
		results.className = "failure";
		// update the text content of results
		results.textContent = "the email '" + useremail.value + "' is not vaild, plesae try again";

		// return to stop the function
		return;
	};
};

// select the html element with id="validateBtn"
var validateBtn = document.getElementById('validateBtn');
// add event to validate button
validateBtn.addEventListener('click', validateEmail, false);
