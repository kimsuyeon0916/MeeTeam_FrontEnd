import { EndPoint, axiosInstance, axiosAuthInstance } from '..';
import { ListResult, FilterData } from '../../types';

interface FilterItem {
	filterState: FilterData;
	isLoggedIn: boolean;
	page: number;
}

export const getPostList = async ({ filterState, isLoggedIn, page }: FilterItem) => {
	try {
		if (isLoggedIn) {
			const response = await axiosAuthInstance.get<ListResult>(EndPoint.RECRUITMENT_BOARD.list, {
				params: { ...filterState, page },
			});
			console.log(filterState, response);

			return response;
		} else {
			const response = await axiosInstance.get<ListResult>(EndPoint.RECRUITMENT_BOARD.list, {
				params: {
					filterState,
					page,
				},
			});
			return response;
		}
	} catch (error) {
		console.error(error);
	}
};
