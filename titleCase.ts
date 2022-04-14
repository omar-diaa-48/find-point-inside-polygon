function titleCase(str: string) {
	return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.toLowerCase().slice(1, str.length)).join(' ')
}

console.log(titleCase("I'm a little tea pot"));
