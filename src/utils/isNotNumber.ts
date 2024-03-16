const isNotNumber = (value: string) => {
	const regExp = /^[0-9]/g;
	return regExp.test(value);
};

export default isNotNumber;
