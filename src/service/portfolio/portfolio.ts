import { EndPoint, axiosAuthInstance } from '..';
import { PortfolioListResponse } from '../../types';

export const readPortfolioList = async ({
	size,
	pageParam,
}: {
	size: number;
	pageParam: number;
}) => {
	try {
		const response = await axiosAuthInstance.get<PortfolioListResponse>(
			EndPoint.PROFILE.readPortfolioList,
			{
				params: {
					size: size,
					page: pageParam,
				},
			}
		);

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};
