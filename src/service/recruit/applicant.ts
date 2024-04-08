import { ApplicantInfo, ApplicantPageInfo, ApplicantsList, ApplyManageInfo } from '../../types';
import { axiosAuthInstance } from '../axiosInstance';
import { EndPoint } from '../endPoint';

export const getRecruitInfo = async (pageNum: number) => {
	try {
		const response = await axiosAuthInstance.get<ApplyManageInfo>(
			EndPoint.RECRUITMENT_APPLICANT.info(pageNum)
		);
		return response;
	} catch (error) {
		console.error(error);
	}
};

export const getApplicantsList = async ({ pageNum, role }: ApplicantPageInfo) => {
	try {
		const response = await axiosAuthInstance.get<ApplicantInfo[]>(
			EndPoint.RECRUITMENT_APPLICANT.list({ pageNum, role })
		);
		return response;
	} catch (error) {
		console.error(error);
	}
};

export const approveApplicant = async ({ pageNum, applicantIds }: ApplicantsList) => {
	try {
		const response = await axiosAuthInstance.patch(
			EndPoint.RECRUITMENT_APPLICANT.approved(pageNum),
			applicantIds
		);
		return response;
	} catch (error) {
		console.error(error);
	}
};
