import { PortfolioListResponse, PortfolioDetails, PortfolioPayload } from '../../types';
import { EndPoint, axiosAuthInstance } from '..';

export const readPortfolio = async (portfolioId: string) => {
	try {
		const response = await axiosAuthInstance.get<PortfolioDetails>(
			EndPoint.PORTFOLIO.read(portfolioId)
		);

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const createPortfolio = async (portfolio: PortfolioPayload) => {
	try {
		const response = await axiosAuthInstance.post<string>(EndPoint.PORTFOLIO.create, {
			...portfolio,
		});

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const updatePortfolio = async ({
	portfolioId,
	portfolio,
}: {
	portfolioId: string;
	portfolio: PortfolioPayload;
}) => {
	try {
		const response = await axiosAuthInstance.put<string>(EndPoint.PORTFOLIO.update(portfolioId), {
			...portfolio,
		});
		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};

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
