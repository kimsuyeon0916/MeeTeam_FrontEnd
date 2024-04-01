import { EndPoint, axiosInstance, axiosAuthInstance } from '..';
import { ListResult, FilterData } from '../../types';

export const getPostList = async (filterData: FilterData) => {
	try {
		const queryString = Object.entries(filterData)
			.filter(([key, value]) => {
				if (key === 'keyword') {
					return value !== null && value !== undefined && value !== '';
				} else if (Array.isArray(value)) {
					return value.length > 0;
				} else {
					return value !== null && value !== undefined;
				}
			})
			.map(([key, value]) => {
				if (Array.isArray(value)) {
					return value.map(v => `${key}=${encodeURIComponent(v)}`).join('&');
				} else {
					return `${key}=${encodeURIComponent(value)}`;
				}
			})
			.join('&');

		const url = `${EndPoint.RECRUITMENT_BOARD.list}${queryString ? `?${queryString}` : ''}`;
		console.log(url);
		const response = await axiosAuthInstance.get<ListResult>(url);
		return response;
	} catch (error) {
		console.error(error);
	}
};
