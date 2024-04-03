import { useMutation } from '@tanstack/react-query';
import { deleteComment, postComment } from '../service/recruit/detail';
import { DeleteComment, PostingComment } from '../types';

export const useComment = () => {
	return useMutation({
		mutationFn: ({ pageNum, comment }: PostingComment) => postComment({ pageNum, comment }),
	});
};

export const useCommentDelete = () => {
	return useMutation({
		mutationFn: ({ pageNum, commentId }: DeleteComment) => deleteComment({ pageNum, commentId }),
	});
};
