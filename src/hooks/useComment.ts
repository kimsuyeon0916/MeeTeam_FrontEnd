import { useMutation } from '@tanstack/react-query';
import { postComment } from '../service/recruit/detail';
import { PostingComment } from '../types';

export const useComment = () => {
	return useMutation({
		mutationFn: ({ pageNum, comment }: PostingComment) => postComment({ pageNum, comment }),
	});
};
