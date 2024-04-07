import { ApplicantPageInfo } from '../../types';
import { axiosAuthInstance } from '../axiosInstance';
import { EndPoint } from '../endPoint';

export const getApplicantsList = async ({ pageNum, role }: ApplicantPageInfo) => {
	try {
		const response = await axiosAuthInstance.get(
			EndPoint.RECRUITMENT_APPLICANT.list({ pageNum, role })
		);
		return response;
	} catch (error) {
		console.error(error);
	}
};
