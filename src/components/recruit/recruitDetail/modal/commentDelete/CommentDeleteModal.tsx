import React from 'react';
import S from './CommentDeleteModal.styled';
import { useRecoilState } from 'recoil';
import { commentDeleteModalState, replyDeleteModalState } from '../../../../../atom';
import { useCommentDelete } from '../../../../../hooks';
import { DeleteComment } from '../../../../../types';
import { useQueryClient } from '@tanstack/react-query';

const CommentDeleteModal = ({ pageNum, commentId, type }: DeleteComment) => {
	const [isDelete, setIsDelete] = useRecoilState(commentDeleteModalState);
	const [isReplyDelete, setIsReplyDelete] = useRecoilState(replyDeleteModalState);
	const deleteComment = useCommentDelete();
	const queryClient = useQueryClient();

	const onClickCancel = () => {
		if (type === 'reply') {
			setIsReplyDelete({
				id: -1,
				isDelete: false,
			});
		} else {
			setIsDelete({
				id: -1,
				isDelete: false,
			});
		}
	};

	const onClickDelete = () => {
		if (commentId === isDelete.id || (type === 'reply' && commentId === isReplyDelete.id)) {
			deleteComment.mutate(
				{ pageNum, commentId },
				{
					onSuccess: () => {
						queryClient.invalidateQueries({ queryKey: ['detailedPage'] });
						if (type === 'reply') {
							setIsReplyDelete({
								id: -1,
								isDelete: false,
							});
						} else {
							setIsDelete({
								id: -1,
								isDelete: false,
							});
						}
					},
				}
			);
		}
	};
	return (
		<S.CommentDeleteModal>
			<h3>댓글 삭제</h3>
			<section className='description'>
				<span className='body2-medium'>삭제된 댓글은 더 이상 보이지 않습니다.</span>
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
