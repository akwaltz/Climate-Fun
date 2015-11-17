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

//1st button clicked
$("#choice1").click(function() {
	$(".btnContainer").fadeOut("slow");
	
	$("#mainQ").fadeOut("slow", function() {
		$("#mainQ").replaceWith("<h1 id='mainQ'>" + "Understand and do what you can." + "</h1>");
		$("#mainQ").fadeIn('slow');
	});
	
	$("#image").attr("src", "images/tree.jpg");
	
	//redirects to infograph
	//setTimeout("location.href = 'http://www.bloomberg.com/graphics/2015-whats-warming-the-world/?utm_source=The+Weekly+Pique&utm_campaign=cf7d4cd5ac-Episode+12%3A+Global+Warming&utm_medium=email&utm_term=0_4627876a86-cf7d4cd5ac-297062977';",3000);

});

//2nd button clicked
$("#choice2").click(function(){
	$(".btnContainer").fadeOut("slow");
	
	$("#mainQ").fadeOut("slow", function() {
		$("#mainQ").replaceWith("<h1 id='mainQ'>" + "If you're not part of the solution, you're part of the problem." + "</h1>");
		$("#mainQ").fadeIn("slow");
	});
	
	$("#image").attr("src", "images/deniers.jpg");
	
});

//3rd button clicked
var click3 = function(){
	$(".btnContainer").fadeOut("slow");
	$("#image").hide();
	
	$("#mainQ").fadeOut("slow", function() {
		$("#mainQ").replaceWith("<h1 id='mainQ'>" + "NO!" + "</h1>");
		$("#mainQ").fadeIn("slow");
	});
	
	// sound effect and picture change sync
	var slap = new Audio("sounds/Slap.wav");
	$("#image").delay(1000).queue(function(next) {
		slap.play();
	$(this).attr("src", "images/slap.jpg"); next(); });
	$("#image").show();
	
	//redirects to Wiki Climate Change
	//setTimeout("location.href = 'https://en.wikipedia.org/wiki/Climate_change';",3000);
};

