import { EndPoint, axiosAuthInstance } from '..';
import { Search } from '../../types';

export const readSkillList = async (keyword: string) => {
	try {
		const response = await axiosAuthInstance.get<Search[]>(EndPoint.SEARCH.skill, {
			params: {
				keyword: keyword,
				limit: 100,
			},
		});

		return response;
	} catch (error) {
		console.error(error);
	}
};

export const readRoleList = async (keyword: string) => {
	try {
		const response = await axiosAuthInstance.get<Search[]>(EndPoint.SEARCH.role, {
			params: {
				keyword: keyword,
				limit: 100,
			},
		});

		return response;
	} catch (error) {
		console.error(error);
	}
};
