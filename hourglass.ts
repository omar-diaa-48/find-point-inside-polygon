function hourglassSum(arr: number[][]): number {
	// Write your code here
	let maxSum = (-9 * 7);

	// loop over the first dimension
	for (let i = 0; i < arr.length; i++) {

		// loop over the second dimension
		for (let j = 0; j < arr[i].length; j++) {
			// check if there are 9 elements at that time
			if (typeof arr[i + 2] === "number" && typeof arr[i + 2][j + 2] === "number") {

				const sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j]
					+ arr[i + 2][j + 1] + arr[i + 2][j + 2];

				if (sum > maxSum) {
					maxSum = sum;
				}
			}

		}
	}

	return maxSum;
}

const firstInput = [[1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 0, 2, 4, 4, 0], [0, 0, 0, 2, 0, 0], [0, 0, 1, 2, 4, 0]]
const secondInput = [[0, -4, -6, 0, -7, -6], [-1 - 2 - 6, -8 - 3 - 1], [-8 - 4, -2 - 8 - 8 - 6], [-3 - 1 - 2 - 5 - 7, -4], [-3 - 5 - 3 - 6, -6, -6], [-3 - 6, 0, -8 - 6, -7]]

console.log(hourglassSum(secondInput));