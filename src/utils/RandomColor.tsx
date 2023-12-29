const RandomColor = () => {
	let result = '';
	for (let i = 0; i < 3; ++i) {
		let value = Math.floor(Math.random() * 56) + 200;
		if (value === 255) {
			value -= 30;
		}
		result += value.toString(16);
	}
	return '#' + result;
};

export default RandomColor;
