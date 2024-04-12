const calculateDate = (deadline: string) => {
	return Math.ceil(
		new Date(deadline).getTime() - new Date().getTime() / (1000 * 60 * 60 * 24)
	).toString();
};

export default calculateDate;
