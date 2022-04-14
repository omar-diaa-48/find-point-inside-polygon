function reverseArray(a: number[]): number[] {
	// Write your code here
	const b: number[] = []
	for (let i = a.length; i > 0; i--) {
		b.push(a[i - 1])
	}
	return b;
}

console.log(reverseArray([1, 2, 3, 4]));