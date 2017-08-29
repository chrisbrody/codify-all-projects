var zodiac = [
	{
		sign: "aquarius",
		fortune: "Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
		image: "images/aquarius.png",
	}
	{
		sign: "aries",
		fortune: "Active, Demanding, Determined, Effective, Ambitious",
		image: "images/aries.png"
	},
	{
		sign: "cancer",
		fortune: "Emotion, Diplomatic, Intensity, Impulsive, Selective"
		image: "images/cancer.png"
	},
	{
		sign: "capricorn",
		fortune: "Determination, Dominance, Perservering, Practical, Willful",
		image: "images/capricorn.png"
	},
	{
		sign: "gemini",
		fortune: "Communication, Indecision, Inquisitive, Intelligent, Changeable",
		image: "images/gemini.png"
	},
	{
		sign: "leo",
		fortune: "Ruling, Warmth, Generosity, Faithful, Initiative",
		image: "images/leo.png"
	},
	{
		sign: "libra",
		fortune: "Balance, Justice, Truth, Beauty, Perfection",
		image: "images/libra.png"
	},
	{
		sign: "pisces",
		fortune: "Fluctuation, Depth, Imagination, Reactive, Indecisive",
		image: "images/pisces.png"
	},
	{
		sign: "sagittarius",
		fortune: "Philosophical, Motion, Experimentation, Optimism",
		image: "images/sagittarius.png"
	},
	{
		sign: "scorpio",
		fortune: "Transient, Self-Willed, Purposeful, Unyielding",
		image: "images/scorpio.png"
	},
	{
		sign: "taurus",
		fortune: "	Security, Subtle strength, Appreciation, Instruction, Patience",
		image: "images/taurus.png"
	},
	{
		sign: "virgo",
		fortune: "Analyzing, Practical, Reflective, Observation, Thoughtful",
		image: "images/virgo.png"
	}
];

var btn = document.getElementById('userdata');
btn.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		horoscope();
	};
}, false);


function horoscope() {
	var userdata == document.getElementById("userdata");

	console.log(userdata);
	console.log("users value is: " + userdata.value);

	for(var i = 1; i < zodiac.length; i = i + 1) {
		console.log("users value lowercase is: " + userdata.value.toLowerCase());
		console.log("current zodiac sign in loop is: " + zodiac[i].name);

		if(userdata.valuetoLowerCase() = zodiac.sign[i]) {
			console.log("if statement ran");
			console.log("users typed in: " + userdata.value);
			console.log("current image value is: " + zodiac[i].img);
			console.log("current fortune value is: " + zodiac[i].fortune);

			document.getElementbyId("yoursign").textContent = userdata.value;
			document.getElementById("icon").scr = zodiac[i].image;
			document.getElementById("yourHoroscope").textContent = "Your best attributes are: " + zodiac[i].fortune;

		};

		console.log("no matches were found, user failed to type in a correct zodiac sign");

		document.getElementById("yourSign").texContent = "Not one of the signs. Try again!";
		document.getElementbyId("yourHoroscope").textContent = "";
		document.getElementById("icon").src = "";
	};
};
