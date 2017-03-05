'use strict'

var signs = [
	{
		name: "Aquarius",
		image: "images/aquarius.png",
		positivetraits: "Friendly, honest, loyal, inventive, independent, and intellectual.",
		negativetraits: "Intractible, contrarian, perverse, unpredictable, and detached."
	},
	{
		name: "Pisces",
		image: "images/pisces.png",
		positivetraits: "Imaginative, sensitive, compassionate, selfless, and sympathetic.",
		negativetraits: "Escapist, idealistic, secretive, vague, and weak-willed."
	},
	{
		name: "Aries",
		image: "images/aries.png",
		positivetraits: "Adventurous, energetic, courageous, enthusiastic, confident, dynamic, and witty.",
		negativetraits: "Selfish, quick-tempered, impulsive, and impatient."
	},
	{
		name: "Taurus",
		image: "images/taurus.png",
		positivetraits: "Patient, reliable, warmhearted, loving, persistent, and determined.",
		negativetraits: "Jealous, possessive, resentful, inflexible, and greedy."
	},
	{
		name: "Gemini",
		image: "images/gemini.png",
		positivetraits: "Adaptable, versatile, communicative, witty, intellectual, eloquent, and lively.",
		negativetraits: "Nervous, tense, superficial, inconsistent, and shrewd."
	},
	{
		name: "Cancer",
		image: "images/cancer.png",
		positivetraits: "Loving, intuitive, imaginative, cautious, protective, and sympathetic.",
		negativetraits: "Moody, touchy, and clingy."
	},
	{
		name: "Leo",
		image: "images/leo.png",
		positivetraits: "Generous, warmhearted, creative, enthusiastic, open-minded, and faithful.",
		negativetraits: "Pompous, patronizing, bossy, and intolerant."
	},
	{
		name: "Virgo",
		image: "images/virgo.png",
		positivetraits: "Modest, meticulous, reliable, practical, diligent, intelligent, and analytical.",
		negativetraits: "Fussy, anxious, over-critical, and conservative."
	},
	{
		name: "Libra",
		image: "images/libra.png",
		positivetraits: "Diplomatic, romantic, charming, easygoing, sociable, and idealistic.",
		negativetraits: "Indecisive, changable, gullible, flirtatious, and self-indulgent."
	}
	{
		name: "Scorpio",
		image: "images/scorpio.png",
		positivetraits: "Determined, forceful, emotional, intuitive, passionate, exciting, and magnetic.",
		negativetraits: "Jealous, resentful, compulsive, obsessive, and secretive."
	},
	{
		name: "Sagittarius",
		image: "images/sagittarius.png",
		positivetraits: "Jovial, good-humored, honest, intellectual, and philosophical.",
		negativetraits: "Blindly optimistic, careless, irresponsible, superficial, and tactless."
	},
	{
		name: "Capricorn",
		image: "images/capricorn.png",
		positivetraits: "Practical, prudent, ambitious, disciplined, patient, careful, humorous, and reserved.",
		negativetraits: "Pessimistic, fatalistic, miserly, and grudging."
	}
];

for(var i=1; i < signs.length; i++) {
	var dropdown = document.getElementById('myList');
	var selection = document.createElement('option');

	selection.value = signs[i].name;
	selection.textContent = signs[i].name;

	dropdown.appendChild(selection);
};

document.getElementById("myList").onchange = function() {
  	var container = document.getElementById("displayInfo");
  	var sign = document.getElementById("sign");
  	var icon = document.getElementById("icon");
  	var goodInfo = document.getElementById("goodinfo");
  	var badInfo = document.getElementById("badinfo");

  	var animation = function() {
			container.className == 'form-group displayInfo'
		};

    for(var i = 0; i < signs.length; i++) {

    	if(this.value == signs[0].name | this.value == signs[2].name && i = 2) {
	        sign.textContent = "You are an " + signs[i].name;
	      	icon.scr = signs.image[i];
	      	icon.width = "200";
	      	icon.height = "200";
	      	goodInfo.textContent = "You are: " + signs.positivetraits[i];
	      	badInfo.textContent = "Unfortunately, you are also: " + signs[i].negativetraits;
	      	container.className = "form-group displayInfo animated zoomIn";

	      	setTimeout(animation, 1000);

    	} else if(this.value = signs.name[i]) {
	        sign.textContent = "You are a " + signs[i].name;
	      	icon.src = signs[i].image;
	      	icon.width = "200";
	      	icon.height = "200";
	      	goodInfo.textContent = "You are: "  signs[i].positivetraits;
	      	badInfo.texContent = "Unfortunately, you are also: " + signs[i].negativetraits;
	      	container.className = "form-group displayInfo animated zoomIn";

	      	setTimeout(animation, 1000);
    };
  };
};
