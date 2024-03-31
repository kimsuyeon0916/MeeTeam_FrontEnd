import { EndPoint, axiosInstance } from '..';
import { ListResult } from '../../types';

interface FilterData {
	field?: number | null;
	scope?: number | null;
	category?: number | null;
	keyword?: string | null;
	skill?: number[];
	role?: number[];
	tag?: number[];
}

export const getPostList = async (filterData: FilterData) => {
	try {
		const queryString = Object.entries(filterData)
			.filter(([key, value]) => {
				if (key === 'keyword') {
					return value !== null && value !== undefined && value !== ''; // keyword가 비어있지 않은 경우만 유지
				} else if (Array.isArray(value)) {
					return value.length > 0; // 배열이 비어있지 않은 경우만 유지
				} else {
					return value !== null && value !== undefined; // null 또는 undefined가 아닌 경우만 유지
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
		const response = await axiosInstance.get<ListResult>(url);
		return response;
	} catch (error) {
		console.error(error);
	}
};
