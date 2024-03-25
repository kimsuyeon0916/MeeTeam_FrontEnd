import { EndPoint, axiosInstance } from '..';
import { RecruitPostings } from '../../types';

export const getPostingData = async (id: number) => {
	try {
		const response = await axiosInstance.get<RecruitPostings>(EndPoint.RECRUIT_DETAIL.posting(id));
		return response;
	} catch (error) {
		console.error(error);
	}
};
