import { EndPoint, axiosInstance, axiosAuthInstance } from '..';
import { ListResult, FilterData } from '../../types';

interface FilterItem {
	filterState: FilterData;
	isLoggedIn: boolean;
}

export const getPostList = async ({ filterState, isLoggedIn }: FilterItem) => {
	try {
		if (isLoggedIn) {
			const response = await axiosAuthInstance.get<ListResult>(EndPoint.RECRUITMENT_BOARD.list, {
				params: {
					...filterState,
				},
			});
			return response;
		} else {
			const response = await axiosInstance.get<ListResult>(EndPoint.RECRUITMENT_BOARD.list, {
				params: {
					...filterState,
				},
			});
			return response;
		}
	} catch (error) {
		console.error(error);
	}
};
