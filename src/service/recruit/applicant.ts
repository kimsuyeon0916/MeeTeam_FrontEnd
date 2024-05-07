import { useNavigate } from 'react-router-dom';
import {
	ApplicantList,
	ApplicantPageInfo,
	ApplicantsLink,
	ApplicantsList,
	ApplyManageInfo,
} from '../../types';
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

export const getApplicantsList = async ({ pageNum, role, page }: ApplicantPageInfo) => {
	try {
		const response = await axiosAuthInstance.get<ApplicantList>(
			EndPoint.RECRUITMENT_APPLICANT.list({ pageNum, role, page })
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
			{ applicantIds }
		);
		return response;
	} catch (error) {
		console.error(error);
	}
};

export const refusedApplicant = async ({ pageNum, applicantIds }: ApplicantsList) => {
	try {
		const response = await axiosAuthInstance.patch(
			EndPoint.RECRUITMENT_APPLICANT.refused(pageNum),
			{ applicantIds }
		);
		return response;
	} catch (error) {
		console.error(error);
	}
};

export const setOpenChatLink = async ({ pageNum, link }: ApplicantsLink) => {
	try {
		const response = await axiosAuthInstance.put(EndPoint.RECRUITMENT_APPLICANT.set(pageNum), {
			link,
		});
		return response;
	} catch (error) {
		console.error(error);
	}
};

export const patchFirstAccess = async (pageNum: number) => {
	try {
		const response = await axiosAuthInstance.patch(EndPoint.RECRUITMENT_APPLICANT.access(pageNum));
		return response;
	} catch (error) {
		console.log(error);
	}
};
