const isNotNumber = (value: string) => {
	const regex = /^(0|[1-9][0-9]*)$/;
	return regex.test(value);
};

export default isNotNumber;
