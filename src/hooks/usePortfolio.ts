import { useQuery, useMutation } from '@tanstack/react-query';
import { createPortfolio, readPortfolio } from '../service';

const portfolioKeys = {
	readPortfolio: (portfolioId: string) => ['readPortfolio', portfolioId],
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
export const useCreatePortfolio = ({ onSuccess }: { onSuccess: () => void }) => {
	return useMutation({
		mutationFn: createPortfolio,
		onSuccess: () => {
			onSuccess?.();
		},
	});
};
