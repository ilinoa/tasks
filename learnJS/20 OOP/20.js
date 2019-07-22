'use strict';

class hashGenerator {
	// startSymbolCode (int)
 	// finishSymbolCode (int)
	// hashLength (int)
	// hash - (string || false)
	// isNaN - проверяет получилось число или не число
	constructor (hashLength) {
		this.startSymbolCode = 48;
		this.finishSymbolCode = 126;
		if ( isNaN(parseInt(hashLength))) {

		}
		else {
			this.hash = false;
		}
	}
}


let hash = hashGenerator(10);
console.log(hash.hash);