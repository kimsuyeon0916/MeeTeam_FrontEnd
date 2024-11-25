import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { readProfile, updateProfile, readProfileImage } from '../service';

const profileKeys = {
	readProfile: (userId: string) => ['readProfile', userId],
	readProfileImage: ['readProfileImage'] as const,
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
export const useUpdateProfile = ({
	onSuccess,
	userId,
}: {
	onSuccess: (data: string) => void;
	userId: string;
}) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: updateProfile,
		onSuccess: async data => {
			if (data) {
				await queryClient.invalidateQueries({ queryKey: profileKeys.readProfile(userId) });
				queryClient.invalidateQueries({ queryKey: ['readInfinitePortfolioList', 12] });
				queryClient.invalidateQueries({ queryKey: ['readPaginationPortfolioList', 16] });
				queryClient.invalidateQueries({ queryKey: profileKeys.readProfileImage });
				onSuccess?.(data);
			}
		},
	});
};

/**
 * @description 유저 프로필 이미지 조회 API를 호출하는 hook입니다.
 */
export const useReadProfileImage = (isLogin: boolean) => {
	return useQuery({
		queryKey: profileKeys.readProfileImage,
		queryFn: () => readProfileImage(),
		enabled: isLogin,
		gcTime: Infinity,
		staleTime: Infinity,
	});
};
