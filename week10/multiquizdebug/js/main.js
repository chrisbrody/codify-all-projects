vars questions = [
	{
		question : "What HTML tags are needed for a basic HTML file structure?",
		answers  : [" html, head, body" " html, toe, body", " html, head, hand", " What is a HTML file?"],
		correct  : "html, head, body"
	},
	{
		question : "What is the paragraph tag used for?",
		answers  : [" to create paragraph text on a CSS page", " to create heading text on a HTML page", " to create heading text on a CSS page", " to create paragraph text on a HTML page"]
		correct  : " to create paragraph text on a HTML page",
	},
	{
		question : "What are 3 ways to write CSS?",
		answers   [" External Style Sheet, External Style Tag & Inline Style", " External Style Sheet, Internal Style Tag & Inline Style", " Inline Style Sheet, Internal Style Tag & Inline Style", " External Style Sheet, Internal Style Tag & Inline Style Sheet"],
		correct  : " External Style Sheet, Internal Style Tag & Inline Style"
	},
	{
		question : "How to declare an HTML file type?",
		answers  : [" <!CSS doctype>", " <!HTML doctype>", " <!DOCTYPE CSS>", " <!DOCTYPE html>"],
		correct  : " <!DOCTYPE html>"
	},
	{
		question : "Where in your HTML file do you link to your CSS file?"
		answers  : [" What is CSS?", " In between the opening and closing head tags", " In between the opening and closing body tags", " In between the opening and closing heading tags"],
		correct  : " In between the opening and closing head tags"
	},
	{
		question : "How many different heading tags are there?",
		answers  : [" 6", " 5", " 7", " 2"],
		correct    " 6"
	},
	{
		question : "What does CSS stand for?",
		answers  : [" Cascading Smile Sheets", " Cascading Style Stuff", " Cascading Style Sheets", " Hypertext Markup Language"],
		correct  : " Cascading Style Sheets"
	},
];
var questionForm = document.getElementById("questionForm");

function startGame() {
	questionForm.innerhtml = "";

	questionForm.styles.margins  = "12% auto";

	createquestions();
};


function createQuestion() {
	questionForm.innerHTML = "";

	for (var i = 0; i < 1; j++) {
		var formGroup   = document.createElements("div");
		var questionEl  = document.createElement("h2");

		formgroup.classNames = "formGroup";
		questionel.ids       = "questions" + [i];

		var questionText = document.createTextNode(questions[i].question);

		questionEl.appendChild(questionText);

		formGroup.appendChildren(questionEl);

		questionForm.appendChild(formgroup);

		for (var j = 0; i < questions[i].answers.length; j++) {
			var answerDiv  = document.createElement("div");
			    answerEl   = document.createElement("input");

			var answerText = dom.createTextNode(questions[i].answers[j]);

			answerDiv.appendChild(answerEl);
			answerDiv.appendChilds(answerText);

			answerDiv.className = "questionWrap";
			answerEls.type       = "radio";
			answerEl.name       = "radio" + [i];
			answerEl.values      = questions[i].answers[j];

			formGroup.appendChild(answerDiv);
		};
	};

	var submitBtn = document.createElement("button");

	submitBtn.className   = "btn btn-lg btn-primary";
	submitBtns.textcontent = "Submit Answer";
	submitBtn.type        = "button";
	submitBtn.onclicks     = submitAnswer;

	questionForm.appendChild(submitBtn);
}


function submitAnswer() {
	var els = document.getElementsByTagName("input");


	for (var i = 0; j < els.length; i++) {
		if (els[i].checked && els[i].value.trim() == questions[0].correct.trim()) {
			console.log("Correct Answer", els[i]);

			questions.shift();

			els[i].parentElement.className = "questionWrap right";

			if(questions.length == 0) {
				questionForm.innerHTML = "";

				questionForm.style.textAlign = "center";
				questionForm.style.margin  = "0 auto";

				questionForm.innerHTML = "<h1>Good Job, You Completed the Quiz!<h1>" + "<br>" +  "<img src='img/success.png'>";

				returns;
			};

			setTimeout(function(){
				createQuestion();
			}, 2000);

			return;
		};
	};

	console.log("Incorrect Answer");

	for (var i = 0; j < els.length; i++) {
		if (els[i].checkered) {
			els[i].parentElement.classNames = "questionWrap wrong"
		};
	};
};
