'use strict';

class hashGenerator {
	// startSymbolCode (int) 	- начальный набор символов
 	// finishSymbolCode (int) 	- конечный набор символов
	// hashLength (int)			- переменная, которую вводит пользователь
	// hash 					- string || false  
	// isNaN 					- проверяет получилось число или не число
	constructor (hashLength) {
		this.startSymbolCode = 48;		// начальный символ
		this.finishSymbolCode = 126;	// конечный символ
		if ( !isNaN(parseInt(hashLength))) {
			this.hashLength = parseInt(hashLength);
			this.generateHash();
		}
		else {				
			this.hash = false;			// если пользователь ввел не правильно
		} 
	}
	// вспомогательная функция - возвращает целое число между мин и макс 
	randomInteger(min, max) {
		var rand = min - 0.5 + Math.random() * (max - min + 1) 
		rand = Math.round(rand);
		return rand;
	}

	generateHash () {
		this.hash = '';
		for (let i=0; i<this.hashLength; i++) {
			this.hash += String.fromCharCode(
					this.randomInteger(
							this.startSymbolCode, 
							this.finishSymbolCode
			 ));
		}
	}
}
  