import { InputState, Keyword } from '../../types';
import { axiosAuthInstance, axiosInstance } from '..';
import { EndPoint } from '..';

interface Result {
	recruitmentPostId: number;
}

export const postingRecruit = async (formData: InputState) => {
	try {
		const response: Result | undefined = await axiosAuthInstance.post(
			EndPoint.RECRUITMENT.post,
			formData
		);
		return response;
	} catch (error) {
		console.error(error);
	}
};

export const getRoleKeyword = async (keyword: string) => {
	try {
		const response = await axiosInstance.get<Keyword[]>(EndPoint.RECRUITMENT.role(keyword));
		return response;
	} catch (error) {
		console.error(error);
	}
};

export const getSkillKeyword = async (keyword: string) => {
	try {
		const response = await axiosInstance.get<Keyword[]>(EndPoint.RECRUITMENT.skill(keyword));
		return response;
	} catch (error) {
		console.error(error);
	}
};

export const getCourseKeyword = async (keyword: string) => {
	try {
		const response = await axiosAuthInstance.get<Keyword[]>(EndPoint.RECRUITMENT.course(keyword));
		return response;
	} catch (error) {
		console.error(error);
	}
};

export const getProfessorKeyword = async (keyword: string) => {
	try {
		const response = await axiosAuthInstance.get<Keyword[]>(
			EndPoint.RECRUITMENT.professor(keyword)
		);
		return response;
	} catch (error) {
		console.error(error);
	}
};

export const getTagKeyword = async (keyword: string) => {
	try {
		const response = await axiosInstance.get<Keyword[]>(EndPoint.RECRUITMENT.tag(keyword));
		return response;
	} catch (error) {
		console.error(error);
	}
};
