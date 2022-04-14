function rotateLeft(d: number, arr: number[]): number[] {
	// Write your code here
	const rotatedArray = [];

	for (let i = 0; i < arr.length; i++) {
		let j = i - d;

		if (j < 0) {
			j += arr.length;
		}

		rotatedArray[j] = arr[i]
	}

	return rotatedArray;
}

console.log(rotateLeft(5, [1,2,3,4,5,7,-4,1]));
