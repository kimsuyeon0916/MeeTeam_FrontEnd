import { useQuery } from '@tanstack/react-query';
import { readImagePresignedUrl } from '../service';

const imageKeys = {
	readImagePresignedUrl: (fileName: string) => ['readImagePresignedUrl', fileName],
};

/**
 * @description 단일 이미지 업로드를 위한 presignedURL 조회 API를 호출하는 hook입니다.
 */
export const useReadImagePresignedUrl = (fileName: string) => {
	return useQuery({
		queryKey: imageKeys.readImagePresignedUrl(fileName),
		queryFn: () => readImagePresignedUrl(fileName),
	});
};
