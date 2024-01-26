import type { SignUpPayload, UserReponse } from '../../types';
import { EndPoint, axiosInstance } from '..';

const axiosConfig = {
	headers: {
		'Content-Type': 'application/json',
	},
};

export const signUp = async ({ school, major, year, email, nickName }: SignUpPayload) => {
	try {
		const response = await axiosInstance.post<UserReponse>(
			EndPoint.SIGN_UP.all,
			{
				school,
				major,
				year,
				email,
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

export const certificateSchool = async ({ email }: { email: string }) => {
	try {
		const response = await axiosInstance.post<UserReponse>(
			EndPoint.SIGN_UP.school,
			{ email },
			axiosConfig
		);

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};

/**
 * @description 이미 회원인지 확인합니다.
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
