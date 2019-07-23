document.getElementById('calc').onclick = function() {
	let year = document.getElementById('year').value;
	let old = 2019 - year;
	if (old >= 16) {alert('Welcom');}
	else {alert('Error enter');}
}