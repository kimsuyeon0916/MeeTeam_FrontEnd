import { useQuery, useMutation, useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { readPortfolioList, createPortfolio, readPortfolio, updatePortfolio } from '../service';

const portfolioKeys = {
	readPortfolio: (portfolioId: string) => ['readPortfolio', portfolioId],
	readPortfolioList: (size: number) => ['readProfile', size],
};

/**
 * @description 포트폴리오 조회 API를 호출하는 hook입니다.
 */
export const useReadPortfolio = (portfolioId: string) => {
	return useQuery({
		queryKey: portfolioKeys.readPortfolio(portfolioId),
		queryFn: () => readPortfolio(portfolioId),
	});
};

/**
 * @description 포트폴리오 등록 API를 호출하는 hook입니다.
 */
export const useCreatePortfolio = ({ onSuccess }: { onSuccess: (data: string) => void }) => {
	return useMutation({
		mutationFn: createPortfolio,
		onSuccess: data => {
			if (data) {
				onSuccess?.(data);
			}
		},
	});
};

/**
 * @description 포트폴리오 편집 API를 호출하는 hook입니다.
 */
export const useUpdatePortfolio = ({
	onSuccess,
	portfolioId,
}: {
	onSuccess: (data: string) => void;
	portfolioId: string;
}) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: updatePortfolio,
		onSuccess: async data => {
			if (data) {
				await queryClient.invalidateQueries({ queryKey: portfolioKeys.readPortfolio(portfolioId) });
				onSuccess?.(data);
			}
		},
	});
};

/**
 * @description 포트폴리오 목록 무한스크롤 조회 API를 호출하는 hook입니다.
 */

export const useReadPortfolioList = (size: number) => {
	return useInfiniteQuery({
		queryKey: portfolioKeys.readPortfolioList(size),
		queryFn: ({ pageParam }) => readPortfolioList({ size, pageParam }),
		initialPageParam: 1,
		getNextPageParam: lastPage => {
			if (lastPage?.pageInfo.hasNextPage) {
				return lastPage?.pageInfo.page + 1;
			} else return undefined;
		},
	});
};
