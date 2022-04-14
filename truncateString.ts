function truncateString(str: string, num: number) {
	if (num >= str.length) {
		return str;
	}

	return str.split('').reduce((a, b, index) => {
		if (index < num) {
			return a + b
		}
		return a;
	}, '') + "..."
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));