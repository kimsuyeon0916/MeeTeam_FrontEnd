import { useQuery } from '@tanstack/react-query';
import { readProfile } from '../service';

const profileKeys = {
	readProfile: (userId: string) => ['readProfile', userId],
};

/**
 * @description 유저 프로필 조회 API를 호출하는 hook입니다.
 */
export const useReadProfile = (userId: string) => {
	return useQuery({
		queryKey: profileKeys.readProfile(userId),
		queryFn: () => readProfile(userId),
	});
};
