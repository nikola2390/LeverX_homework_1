function fibonacciArray(number) {
	if (typeof number !== 'number' || number < 0) {
		throw new Error('Please enter number greater than or equal to zero');
	}
	
	if (number === 0) {
		return [];
	}

	if (number === 1) {
		return [0];
	}

	const array = [0, 1];
	while (sumOfLastTwo(array) < number) {
		array.push(sumOfLastTwo(array));
	}
	return array;
}

function sumOfLastTwo(arr) {
	const length = arr.length;
	if (length < 2) {
		throw new Error('Array has less then two elements');
	}
	return arr[length-1] + arr[length-2];
}