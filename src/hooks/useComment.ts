import { useMutation } from '@tanstack/react-query';
import { deleteComment, postComment, editComment } from '../service/recruit/detail';
import { DeleteComment, EditingComment, PostingComment } from '../types';

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

export const useCommentEdit = () => {
	return useMutation({
		mutationFn: ({ pageNum, comment }: EditingComment) => editComment({ pageNum, comment }),
	});
};
