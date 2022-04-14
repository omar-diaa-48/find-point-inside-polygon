function getIndexToIns(arr: number[], num: number) {
	const index = arr.sort((a, b) => a - b).findIndex(item => item >= num);

	return index === -1 ? arr.length > 0 ? arr.length : 0 : index;
}

getIndexToIns([40, 60], 50);

console.log(getIndexToIns([2, 5, 10], 15));
