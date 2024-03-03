const simpleDate = (date: Date | null) => {
	if (date) {
		const year: string = date.getFullYear().toString();
		const month: string = (date.getMonth() + 1).toString();
		const day: string = date.getDate().toString();
		const total: string = year + '-' + month + '-' + day;
		return total;
	}
};

export default simpleDate;
