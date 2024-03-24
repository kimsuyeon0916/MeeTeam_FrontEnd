import type { Department, SignUpPayload, University, UserReponse } from '../../types';
import { EndPoint, axiosInstance } from '..';

const platformType = 'NAVER';

/**
 * @description 네이버 연동 여부를 확인합니다.
 * @return 실패할 경우 null을 반환합니다.
 */
export const checkExist = async ({ authorizationCode }: { authorizationCode: string }) => {
	try {
		const response = await axiosInstance.post<UserReponse>(EndPoint.SIGN_IN, {
			platformType,
			authorizationCode,
		});

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};

// 백엔드에 nickname으로 변경 요청
export const signUp = async ({ emailCode, nickname }: { emailCode: string; nickname: string }) => {
	try {
		const response = await axiosInstance.post<UserReponse>(EndPoint.SIGN_UP.all, {
			emailCode,
			nickname,
		});

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const certificateSchool = async ({
	platformId,
	year,
	universityId,
	departmentId,
	emailId,
}: SignUpPayload) => {
	try {
		const response = await axiosInstance.post<UserReponse>(EndPoint.SIGN_UP.school, {
			platformType,
			platformId,
			year,
			universityId,
			departmentId,
			emailId,
		});

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const checkDuplicateNickname = async (nickname: string) => {
	try {
		const response = await axiosInstance.get<UserReponse>(EndPoint.SIGN_UP.nickname, {
			params: {
				nickname: nickname,
			},
		});

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const readUniversityList = async () => {
	try {
		const response = await axiosInstance.get<University[]>(EndPoint.SIGN_UP.readUniversityList);

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const readDepartmentList = async (universityId: string) => {
	try {
		const response = await axiosInstance.get<Department[]>(EndPoint.SIGN_UP.readDepartmentList, {
			params: {
				university: universityId,
			},
		});

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};
