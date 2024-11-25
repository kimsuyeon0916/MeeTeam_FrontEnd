import { useQuery } from '@tanstack/react-query';
import { readSkillList, readRoleList } from '../service';

const searchKeys = {
	readRoleList: (keyword: string) => ['readRoleList', keyword],
	readSkillList: (keyword: string) => ['readSkillList', keyword],
};

/**
 * @description 키워드 기반 스킬 목록 조회 API를 호출하는 hook입니다.
 */
export const useReadSkillList = (keyword: string) => {
	return useQuery({
		queryKey: searchKeys.readSkillList(keyword),
		queryFn: () => readSkillList(keyword ?? ''),
	});
};

/**
 * @description 키워드 기반 역할 목록 조회 API를 호출하는 hook입니다.
 */
export const useReadRoleList = (keyword: string) => {
	return useQuery({
		queryKey: searchKeys.readRoleList(keyword),
		queryFn: () => readRoleList(keyword ?? ''),
	});
};
