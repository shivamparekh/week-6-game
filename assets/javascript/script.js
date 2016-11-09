$(document).ready(function(){

var players = ["Kobe" , "Lebron" , "MJ" , "White Mamba"];

var searchPlayer = "";

var key = "dc6zaTOxFJmzC";

var query_url = "https://api.giphy.com/v1/gifs/search?q=" + searchPlayer + "&limit=12&api_key=" + key;

$('#addPlayer').on('click', function(){

		var player = $('#user-input').val().trim();

		if (players.indexOf(player)) {
	
			players.push(player);
		}

		else {

		}
		
		renderButtons();
		
		return false;
});

function renderButtons(){ 
	
	$('#gifButtons').empty();

	for (var i = 0; i < players.length; i++){
		
		searchPlayer = players[i]

	    var buttons = $('<button>') 

	    buttons.addClass('newButtons');
	    buttons.attr('data-gif', query_url); 
	    buttons.text(players[i]); 
	    $('#gifButtons').append(buttons); 

	    displayGifs();
	}

}

renderButtons();

function displayGifs(){

	$(".newButtons").on("click" , function(){

		var user = $(this);
		var userSubmit = user.data("gif");

	$.ajax({

		url: user_click,
		method: "GET"

	}).done(function(response) {

			$("#gifDisplay").empty();

			for (var i = 0; i < limit; i++) {
				var rating =  response.data[i].rating;
				var gifs = $("<img>");
				image.addClass("gifs");
				image.attr({
					"src" : response.data[i].images.fixed_height_still.url,
					"data-rating": response.rating,
					"data-gif" : user_click,
					"data-status": "still",
					"data-index": i
				});

		$("#gifDisplay").append(image);		

			}

		});

	});

}

});