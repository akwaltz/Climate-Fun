//fadeIn effect on entire body on initial load
$(document).ready(function(){
	$("body").hide();
	
	$("#mainQ").replaceWith("<h1 id='mainQ'>" + "Are you concerned?" + "</h1>");
	$("#mainQ").fadeIn("slow");
	
	$("#choice1").text("Of course!");
	$("#choice2").text("Not really.");
	$("#choice3").text("What's Climate Change?");
	
	$("body").fadeIn("slow");
});


//1st question
$("#choice1").click(function() {
	$("#mainQ").fadeOut("slow", function() {
		$("#mainQ").replaceWith("<h1 id='mainQ'>" + "Why are you concerned?" + "</h1>");
		$("#mainQ").fadeIn('slow');
	});
	
	$("#choice1").text("The proof is all around us.");
	$("#choice2").text("Not sure.");
	$("#choice3").text("That's what everyone else says.");
	
});

//when the 2nd button is clicked
$("#choice2").click(function(){
	$("#mainQ").fadeOut("slow", function() {
		$("#mainQ").replaceWith("<h1 id='mainQ'>" + "Why are you not concerned?" + "</h1>");
		$("#mainQ").fadeIn("slow");
	});
	
	$("#autoResponse").show();
	$("#autoResponse").text("Really?");
	
	$("#choice1").text("The planet has it's phases.");
	$("#choice2").text("Not sure.");
	$("#choice3").text("I don't care.");
	
});

//when the 3rd button is clicked
var click3 = function(){
	$("button").fadeOut("slow");
	$("#title").fadeOut("slow");
	$("#mainQ").fadeOut("slow");

	$("#autoResponse").text("WRONG!!");
	$("#autoResponse").show();
	
	/*  sound effect */
	var slap = new Audio("sounds/Slap.wav"); // buffers automatically when created
	
	$("#image").delay(1000).queue(function(next) {
		slap.play();
	$(this).attr("src", "images/slap.jpg"); next(); });
	
	//redirects to Wiki Climate Change
	//setTimeout("location.href = 'https://en.wikipedia.org/wiki/Climate_change';",3000);
}

