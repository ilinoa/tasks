let mass = [1, 10];
let result = [];
function toFlag(arr) {
	for (let i=arr[0]; i<=arr[1]; i++) {
		result.push(i);
	}
	return result;
}


flag.innerHTML = toFlag(mass);