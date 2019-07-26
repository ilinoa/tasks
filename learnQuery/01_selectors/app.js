$(function (){
	$(window).resize(function(e){
		$("#resize-text").text("Width: " + window.innerWidth +
							   "Height: " + window.innerHeight);
	});
}); 

const button = document.querySelector('button');
	button.addEventListener('click', event => alert('Node.js в действии'));
