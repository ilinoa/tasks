$(function (){
	$(window).resize(function(e){
		$("#resize-text").text("Width: " + window.innerWidth +
							   "Height: " + window.innerHeight);
	});
}); 