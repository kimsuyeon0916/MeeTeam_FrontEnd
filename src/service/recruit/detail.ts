import { EndPoint, axiosInstance, axiosAuthInstance } from '..';
import { RecruitPostings, ApplyInfo } from '../../types';

export const getPostingData = async (id: number) => {
	try {
		const response = await axiosInstance.get<RecruitPostings>(EndPoint.RECRUIT_DETAIL.posting(id));
		return response;
	} catch (error) {
		console.error(error);
	}
};

export const getApplyData = async (id: number) => {
	try {
		const response = await axiosAuthInstance.get<ApplyInfo>(EndPoint.RECRUIT_DETAIL.applyInfo(id));
		return response;
	} catch (error) {
		console.error(error);
	}
};
