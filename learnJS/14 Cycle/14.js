 // Вывести числа от 4 до 400 на экран
 let out = document.getElementById('out');
 let tmp = '';
/*
// Таблица умножения
 for (let i=1; i<=9; i++) {
 	for (let k=1; k<=9; k++) {
 		tmp = tmp + i + ' * '+ k +'  = ' + i * k  + '<br>'
 	}
 }
*/
var k = '';
	for (let i=1000; i<=70000; i++) {
		k=k+i;
		tmp = tmp + '&#' + i + ' ' + k + '<br>'
	}

	out.innerHTML = tmp;