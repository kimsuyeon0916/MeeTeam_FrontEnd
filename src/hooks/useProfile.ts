import { useQuery, useMutation } from '@tanstack/react-query';
import { readProfile, updateProfile } from '../service';

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

/**
 * @description 유저 프로필 작성 API를 호출하는 hook입니다. 기존 회원인 경우 access token 을 로컬 스토리지에 저장합니다. 회원이 아닌 경우, 회원가입 페이지로 이동합니다.
 */
export const useUpdateProfile = ({ onSuccess }: { onSuccess: () => void }) => {
	return useMutation({
		mutationFn: updateProfile,
		onSuccess: () => {
			onSuccess?.();
		},
	});
};