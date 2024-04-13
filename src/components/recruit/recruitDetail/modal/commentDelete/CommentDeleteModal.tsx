import React from 'react';
import S from './CommentDeleteModal.styled';
import { useSetRecoilState } from 'recoil';
import { commentDeleteModalState, replyDeleteModalState } from '../../../../../atom';
import { useCommentDelete } from '../../../../../hooks';
import { DeleteComment } from '../../../../../types';
import { useQueryClient } from '@tanstack/react-query';

const CommentDeleteModal = ({ pageNum, commentId, type }: DeleteComment) => {
	const setIsDelete = useSetRecoilState(commentDeleteModalState);
	const setIsReplyDelete = useSetRecoilState(replyDeleteModalState);
	const deleteComment = useCommentDelete();
	const queryClient = useQueryClient();

	const onClickCancel = () => {
		if (type === 'reply') {
			setIsReplyDelete(false);
		} else {
			setIsDelete(false);
		}
	};

	const onClickDelete = () => {
		deleteComment.mutate(
			{ pageNum, commentId },
			{
				onSuccess: () => {
					queryClient.invalidateQueries({ queryKey: ['detailedPage'] });
					if (type === 'reply') {
						setIsReplyDelete(false);
					} else {
						setIsDelete(false);
					}
				},
			}
		);
	};
	return (
		<S.CommentDeleteModal>
			<h3>댓글 삭제</h3>
			<section className='description'>
				<span className='body2-medium'>삭제된 댓글은 더이상 보이지 않습니다.</span>
				<span className='body2-medium'>댓글을 완전히 삭제할까요?</span>
			</section>
			<section className='btn-container'>
				<button className='cancel btn-txt' onClick={onClickCancel}>
					취소
				</button>
				<button className='confirm btn-txt' onClick={onClickDelete}>
					삭제
				</button>
			</section>
		</S.CommentDeleteModal>
	);
};

export default CommentDeleteModal;
