var searchInput = document.getElementById("github_username");
var searchBtn = document.getElementById('github_search');
var results = document.getElementById("results");
var loadBtn = document.getElementById('load_btn');
var topA = document.getElementById('back_top');
var followersPerPage = 30;
var pageTracker = 1;
var totalFollowers;

// HTML for user information is created
function createUserInfo(userData){ 
    var userRow = document.createElement('div');
    var userCol = document.createElement('div');
	var userH2 = document.createElement('h2');
	var followerH4 = document.createElement('h4');
	var brk = document.createElement('br')

	userRow.className = "row";
	userCol.className = "col-8 col-sm-4 user-col";
	userH2.className = "text-center animated pulse user-text";
	followerH4.className = "text-center animated pulse followers-text";	
	userH2.innerText = userData.name;
	totalFollowers = userData.followers;
	followerH4.innerText = totalFollowers + " followers";	
	
	userCol.appendChild(userH2);
	userCol.appendChild(followerH4);
	userRow.appendChild(userCol);
	results.appendChild(userRow);
	results.appendChild(brk);
}

// HTML for each follower(if any), is created by looping through array  
function createFollowerResults(followerData){
	for(i = 0; i < followerData.length; i++){
		var followerRow = document.createElement('div');
		var followerCol2 = document.createElement('div');
		var avatarA = document.createElement('a');
		var avatarImg = document.createElement('img');
		var avatarSpan = document.createElement('span');

		followerRow.className = "row follower-row";		
		followerCol2.className = " col-10 col-sm-4 follower-col";		
		avatarImg.className = "rounded-circle img-fluid avatar-img";
		avatarSpan.className = "avatar-text";
        avatarA.href = followerData[i].html_url;
        avatarA.target = "_blank"; 
		avatarImg.src = followerData[i].avatar_url;
		avatarImg.alt = "Avatar Image";
        avatarSpan.innerText = followerData[i].login;
        
		followerRow.appendChild(followerCol2);
		avatarA.appendChild(avatarImg);
		avatarA.appendChild(avatarSpan);
		followerCol2.appendChild(avatarA);
		results.appendChild(followerRow);
	}
}

// Make requests when information is requested through search input
function githubSearch(e){
	e.preventDefault();
 	
  	if(results.innerHTML != "") {
  		results.innerHTML = "";
  	}
  	// Request user data, make call for html creation
	$.ajax({
	    url: "https://api.github.com/users/" + searchInput.value,
	    dataType: "json",
	    type: 'GET',
		success: function(userData) {

		    createUserInfo(userData);

			// Request user follower data, make call for html creation, and display elements
			$.ajax({
		        url: "https://api.github.com/users/" + searchInput.value + "/followers",
		        dataType: "json",		        
		        type: 'GET',		       
				success: function(followerData) {

					createFollowerResults(followerData);

					if(totalFollowers > followersPerPage){
						loadBtn.style.display = "block"
					}	

					if(followersPerPage <= 30){
						topA.style.display = "inline";
					}						
				}					
		  	});
		}
	});
} 

// if available, load more followers
function loadMore() {
	var totalPages = Math.ceil(totalFollowers / followersPerPage);
	var currentFollowerCount = pageTracker * followersPerPage;
	var currentFollowerRemainder = totalFollowers - currentFollowerCount;

	if(followersPerPage > currentFollowerRemainder){
		loadBtn.style.display = "none";
	}

	if(pageTracker < totalPages){
			pageTracker++;
	}
	else if(currentFollowerRemainder < followersPerPage){	
		return;
	}
	
	$.ajax({
		url: "https://api.github.com/users/" + searchInput.value + "/followers?page= " + pageTracker,
		dataType: "json",
		type: 'GET',	
	    success: function(moreFollowerData) {
			
			createFollowerResults(moreFollowerData);
		}
	});
}

searchBtn.addEventListener('submit', githubSearch, false);















