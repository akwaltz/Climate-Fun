$(document).ready(function(){
	$("body").hide();
	$("body").fadeIn("slow");
});

var click1 = function(){
	$('#mainQ').fadeOut('slow', function() {
		$('#mainQ').replaceWith("<h1 id='mainQ'>" + "Why are you concerned?" + "</h1>");
		$('#mainQ').fadeIn('slow');
	});
	
	//$(this.)removeClass(".unselected")
	
	$(".unselected").hide();
	
	$("#choice1").text("That's what everyone else says.");
	$("#choice2").text("Not sure.");
	$("#choice3").text("The proof is all around us.");
	
	$(".unselected").fadeIn("slow");
}

var click2 = function(){
	$('#mainQ').fadeOut('slow', function() {
		$('#mainQ').replaceWith("<h1 id='mainQ'>" + "Why are you not concerned?" + "</h1>");
		$('#mainQ').fadeIn('slow');
	});
	
	$("#autoResponse").show();
	$("#autoResponse").text("Really?");
	

	$("#choice1").text("The planet has it's phases.");
	$("#choice2").text("Not sure.");
	$("#choice3").text("I don't care.");
	
}

var click3 = function(){
	$("button").fadeOut("slow");
	$("#title").fadeOut("slow");
	$("#mainQ").fadeOut("slow");

	$("#autoResponse").text("WRONG!!");
	$("#autoResponse").show();
	
	/*  sound effects */
	var slap = new Audio("sounds/Slap.wav"); // buffers automatically when created
	
	$("#image").delay(1000).queue(function(next) {
		slap.play();
	$(this).attr("src", "images/slap.jpg"); next(); });
	


	//redirects to Wiki Climate Change
	//setTimeout("location.href = 'https://en.wikipedia.org/wiki/Climate_change';",3000);
}

