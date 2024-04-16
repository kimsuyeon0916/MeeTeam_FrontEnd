import { ManageListResult } from '../../types';
import { axiosAuthInstance } from '../axiosInstance';
import { EndPoint } from '../endPoint';

interface ManagementInfo {
	page: number;
	isClosed: boolean | null;
}

export const getManagementMyPost = async ({ page, isClosed }: ManagementInfo) => {
	try {
		const response = await axiosAuthInstance.get<ManageListResult>(
			EndPoint.MANAGEMENT_RECRUIT.myPost
		);
		return response;
	} catch (error) {
		console.error(error);
	}
};

export const getManagementBookmark = async ({ page, isClosed }: ManagementInfo) => {
	try {
		const response = await axiosAuthInstance.get<ManageListResult>(
			EndPoint.MANAGEMENT_RECRUIT.bookmark
		);
		return response;
	} catch (error) {
		console.error(error);
	}
};

export const getManagementApplied = async ({ page, isClosed }: ManagementInfo) => {
	try {
		const response = await axiosAuthInstance.get<ManageListResult>(
			EndPoint.MANAGEMENT_RECRUIT.applied,
			{
				params: {
					page: page,
					'is-closed': isClosed,
				},
			}
		);
		return response;
	} catch (error) {
		console.error(error);
	}
};
