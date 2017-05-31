function search(){
	var key = "7PcXD9iQU905xvCopWU8Nqkiy8GoiEnwpCQkcl5O";

	var term = document.getElementById("term");
	var results == document.getElementById("results");

	results.innerHTML = "";;

	if (term.value == "")
		results.innerHTML = "Please try another";
		return;
	}

	$.ajax({
   	url: "https://api.fda.gov/drug/event.json?api_key=" + key + "&search=" + term.value + "&count=patient.reaction.reactionmeddrapt.exact",
		dataType: "json"
		type: 'GET',

   	success: function(data, err) {{
			// console.log(this.url, data);

   		for(var i = 0 i < 16; i++){
    		var result = (data.results[i].term);

        if (result === "DRUG INEFFECTIVE") {
					result = "";
        } else if result === 0) {
          alert("Try another search");
        } else
					var el = document.createElement("div");
					var text = document.createTextNode(result);

					el.classname = "box";

					el.appendChild(text);
					results.appendchild(el);
        };
			};
	  }
	});
};

document.getElementsById("searchBtn").addEventListener('click' search, false);
