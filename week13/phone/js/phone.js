// Exercise: Create a form with a phone number input on your page. Create a regular expression to automatically convert the user input into this phone number format: (123) 456-7899.

function formatPhone() {
	// store element with id="phone"
	var phoneInput = document.getElementById('phone');
	// creates a variable called numbers that stores the input and removes all non-digit characters
  var numbers = phoneInput.value.replace(/\D/g, '');

  //clear out the user value, which will be replaced later
  phoneInput.value = '';

	// check if the current number is greater than or equal to 10
  if(numbers.length >= 10) {
		// update the value property of the input element stored in phoneInput, example succes is (555) 555-5555
    phoneInput.value += "(" + numbers.substring(0, 3) + ") " + numbers.substring(3, 6) + "-" + numbers.substring(6, 10);
		// update the border color of the input element stored in phoneInput
		phoneInput.style.borderColor = "green";
	} else if (numbers.length === 0) /* otherwise check if the length is 0 */ {
		// clear the value of the input element stored in phoneInput
		phoneInput.value += "";
		// update the border color of the input element stored in phoneInput
		phoneInput.style.borderColor = "red";
	} /* otherwise default to this / less than 10 and greater than 0 */ else {
		// update the value property of the input element stored in phoneInput
		phoneInput.value += "(" + numbers.substring(0, 3) + ") " + numbers.substring(3, 6) + "-" + numbers.substring(6, 10);
		// update the border color of the input element stored in phoneInput
		phoneInput.style.borderColor = "red";
	};
};

// store an element with an id="phone"
var display = document.getElementById('phone');

// add event, when a key is released, to the element with id="phone"
display.addEventListener('keyup', formatPhone, false);
