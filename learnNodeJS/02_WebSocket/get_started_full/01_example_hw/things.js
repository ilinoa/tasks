// шаблонная функция

var multiplay = function(x, y) {
	return `${x} умножить ${y} равно ${x*y}`;  
}

var value = 999;
 // module.exports.multiplay = multiplay;
 // module.exports.value = value;

module.exports = {
	multiplay: multiplay,
	value: value
};

