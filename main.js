
//$("button").click(function() {
	//$("button").fadeOut("slow");
//});

var click1 = function(){
	document.getElementById("mainQ").innerHTML = "Why are you concerned?"
	
	document.getElementById("choice1").innerHTML = "That's what everyone else says."
	document.getElementById("choice2").innerHTML = "Not sure."
	document.getElementById("choice3").innerHTML = "The proof is all around us."
}

var click2 = function(){
	document.getElementById("mainQ").innerHTML = "Why are you not concerned?"
	$("button").fadeIn("slow");
	document.getElementById("choice1").innerHTML = "The planet has it's phases."
	document.getElementById("choice2").innerHTML = "Not sure."
	document.getElementById("choice3").innerHTML = "I don't care."
}

var click3 = function(){
	document.getElementById("image").src = "images/slap.jpg";
	$("button").fadeOut("slow");
	$("#title").hide();
	$("#mainQ").hide();
	
	/*  sound effect
	var snd = new Audio("file.wav"); // buffers automatically when created
	snd.play();
	*/
	
	setTimeout("location.href = 'https://en.wikipedia.org/wiki/Climate_change';",3000);
}

