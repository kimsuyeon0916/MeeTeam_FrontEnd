import { useQuery } from '@tanstack/react-query';
import { readProfile } from '../service';

const profileKeys = {
	readProfile: (nickname: string) => ['readProfile', nickname],
};

/**
 * @description 유저 프로필 조회 API를 호출하는 hook입니다.
 */
export const useReadProfile = (nickname: string) => {
	return useQuery({
		queryKey: profileKeys.readProfile(nickname),
		queryFn: () => readProfile(nickname),
	});
};
