// create array to store jobs
var jobArray = [
	new JobApplied("SpaceX", "01/15/17", "In Person Interview", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."),
	new JobApplied("Tesla", "01/16/17", "Phone Interview", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."),
	new JobApplied("Solar City", "01/16/17", "Awaiting Response", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."),
	new JobApplied("Facebook", "01/17/17", "In Person Interview", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."),
	new JobApplied("Google", "01/18/17", "Phone Interview", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.")
];

// store array original length
var originalLength = jobArray.length;

// reverse data so it is descending by date
jobArray.reverse();

// creates existing elements
for (var i = 0; i < jobArray.length;	i++) {
	createElements();
};

// constructor function for new elements
function JobApplied(company, dateApplied, response, notes){
	this.company     = company
	this.dateApplied = dateApplied
	this.response    = response
	this.notes       = notes
};

// function to add new jobs
function newTracker(){
	// store some elements
	var form        = document.getElementById('form'),
			button      = document.getElementById('newTracker'),
			jobDiv      = document.getElementById('jobDiv');

	// store some values from elements
	var	company     = document.getElementById('company').value,
			dateApplied = document.getElementById('dateApplied').value,
			response    = document.getElementById('response').value,
			notes       = document.getElementById('notes').value;

	// make sure all inputs are filled out
	if( (company && dateApplied && response && notes) === ""){
		button.className = "btn btn-danger";
		alert("Make sure all fields are filled!!");
		return;
	} else {
		button.className = "btn btn-primary";
	};

	// create the new object from the constructor
	var newApply = new JobApplied(company,dateApplied,response,notes)
	// console.log(newApply)
	// add new object to jobArray
	if (i != originalLength) {
		jobArray.push(newApply);
	}

	console.log(jobArray)
	// console.log(newApply)
	createElements(newApply);

	// reset form
	form.reset();
};

function createElements(newApply) {
	// create new elements for user input
	var trackerDiv = document.createElement('div'),
			divContain = document.createElement('div'),
			divRow     = document.createElement('div'),
			divCol     = document.createElement('div'),
			h1Company  = document.createElement('h1'),
			pDate      = document.createElement('p'),
			pResponse  = document.createElement('p'),
			pNotes     = document.createElement('p');

	// adding classes to elements
	divCol.className    = "col-sm-12";
	pDate.className     = "col-sm-4";
	pResponse.className = "col-sm-8";
	pNotes.className    = "col-sm-12";

	// append new div to element with id="jobDiv"
	if (originalLength == i) {
		// should run when new entries are added to the array

		// create nodes for exisiting data
		var companyTextNode  = document.createTextNode(newApply.company);
		var dateTextNode     = document.createTextNode("Date: " + newApply.dateApplied);
		var responseTextNode = document.createTextNode("Response: " + newApply.response);
		var notesTextNode    = document.createTextNode("Notes: " + newApply.notes);

		// add to the top of the list - visual
		jobDiv.insertBefore(divCol, jobDiv.childNodes[0]);

		// add as the first item of the array
		jobArray.unshift(newApply);

		// updated array
		console.log(jobArray);
	} else {
		// should run to start for as many times as you have items

		// current array
		console.log(jobArray);

		// create nodes for exisiting data
		var companyTextNode  = document.createTextNode(jobArray[i].company);
		var dateTextNode     = document.createTextNode("Date: " + jobArray[i].dateApplied);
		var responseTextNode = document.createTextNode("Response: " + jobArray[i].response);
		var notesTextNode    = document.createTextNode("Notes: " + jobArray[i].notes);

		// add before if existing items have not been added to the screen
		jobDiv.appendChild(divCol);
	};

	// put text into their respective elements
	h1Company.appendChild(companyTextNode);
	pDate.appendChild(dateTextNode);
	pResponse.appendChild(responseTextNode);
	pNotes.appendChild(notesTextNode);

	// put elements into divCol element
	divCol.appendChild(h1Company);
	divCol.appendChild(pDate);
	divCol.appendChild(pResponse);
	divCol.appendChild(pNotes);
};

// add event to element with id="newTracker"
document.getElementById('newTracker').addEventListener('click', newTracker, false);
