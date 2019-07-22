let size = ['15px', ' 12pt', ' 34em', ' -3px', ' 2%'];

// parseFloat отризает все что не является числом 
// (оставляет точку и цифру если это дробь)

function toMass(arr) {
	return arr;
}

function toNum(arr) { // myNum - принимает значения в качестве параметра arr
	for (let i=0; i<arr.length; i++) {
		arr[i] = parseFloat(arr[i]);
	}
	return arr;
}

function toPosit(arr) {
	let out = [];
	for (let i=0; i<arr.length; i++) {
		arr[i] = parseFloat(arr[i]);
		if (arr[i] > 0)	out.push(arr[i]);
	}
	return out;
}


function toSort(out) {
	out.sort(function(a,b){
		return a-b;
	});
	return out;
}

function toQuery(arr) {
	let newArr = arr.map(function(sz){
		return parseFloat(sz);
	});
	newArr = newArr.filter(function(sz){
		if(sz>0) return sz;
	});
	newArr.sort(function(a,b){
		return a-b;
	});
	return newArr;
}



mass.innerHTML = toMass(size);

myArray.innerHTML = toNum(size);

myPositiv.innerHTML = toPosit(size);

mySort.innerHTML = toSort(size);

querySort.innerHTML = toQuery(size);



