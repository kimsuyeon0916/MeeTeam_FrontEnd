import type { SignUpPayload, UserReponse } from '../../types';
import { EndPoint, axiosInstance } from '..';

const axiosConfig = {
	headers: {
		'Content-Type': 'application/json',
	},
};

export const signUp = async ({ emailCode, nickName }: { emailCode: string; nickName: string }) => {
	try {
		const response = await axiosInstance.post<UserReponse>(
			EndPoint.SIGN_UP.all,
			{
				emailCode,
				nickName,
			},
			axiosConfig
		);

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const certificateSchool = async ({ school, major, year, email }: SignUpPayload) => {
	try {
		const response = await axiosInstance.post<UserReponse>(
			EndPoint.SIGN_UP.school,
			{ school, major, year, email },
			axiosConfig
		);

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};

/**
 * @description 네이버 연동 여부를 확인합니다.
 * @return 실패할 경우 null을 반환합니다.
 */
export const checkExist = async ({ code }: { code: string }) => {
	try {
		const response = await axiosInstance.post<UserReponse>(
			EndPoint.SIGN_UP.school,
			{ code },
			axiosConfig
		);

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};
