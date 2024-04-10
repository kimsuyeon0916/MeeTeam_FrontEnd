import { EndPoint, axiosAuthInstance } from '..';
import { PageInfo, PortfolioListResponse } from '../../types';

export const readPortfolioList = async (pageInfo: PageInfo) => {
	try {
		const response = await axiosAuthInstance.get<PortfolioListResponse>(
			EndPoint.PROFILE.readPortfolioList,
			{
				params: {
					...pageInfo,
				},
			}
		);

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};
