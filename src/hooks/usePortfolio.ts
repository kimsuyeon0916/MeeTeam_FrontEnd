import { useInfiniteQuery } from '@tanstack/react-query';
import { readPortfolioList } from '../service';

const portfolioKeys = {
	readPortfolioList: (size: number) => ['readProfile', size],
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
