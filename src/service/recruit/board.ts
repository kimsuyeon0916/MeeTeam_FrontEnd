import { EndPoint, axiosInstance, axiosAuthInstance } from '..';
import { ListResult, FilterData } from '../../types';
import qs from 'qs';

interface FilterItem {
	filterState: FilterData;
	isLoggedIn: boolean;
	page: number;
}

export const getPostList = async ({ filterState, isLoggedIn, page }: FilterItem) => {
	try {
		const queryString = Object.entries(filterState)
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
		if (isLoggedIn) {
			const response = await axiosAuthInstance.get<ListResult>(url, {
				params: { page },
			});
			return response;
		} else {
			const response = await axiosInstance.get<ListResult>(url, {
				params: {
					page,
				},
			});
			return response;
		}
	} catch (error) {
		console.error(error);
	}
};
