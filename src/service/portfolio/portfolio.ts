import { PortfolioDetails } from '../../types';
import { axiosAuthInstance } from '../axiosInstance';
import { EndPoint } from '../endPoint';

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
