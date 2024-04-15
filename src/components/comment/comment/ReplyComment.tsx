import React, { useState } from 'react';
import S from './ReplyComment.styled';
import { CommentDeleteModal, KebabMenu, ProfileImage } from '../..';
import { Comment as CommentType } from '../../../types';
import { Reply } from '../../../assets';
import { useParams } from 'react-router-dom';
import { useCommentEdit } from '../../../hooks';
import { useQueryClient } from '@tanstack/react-query';
import { useRecoilValue, useRecoilState } from 'recoil';
import { userState, replyDeleteModalState } from '../../../atom';

const ReplyComment = ({
	id,
	userId,
	nickname,
	content,
	isWriter,
	createAt,
	profileImg,
	groupOrder,
	replyComment,
}: CommentType) => {
	const { id: recruitId } = useParams();
	const pageNum = Number(recruitId);
	const [value, setValue] = useState<string>(content);
	const [showKebab, setShowKebab] = useState<boolean>(true);
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [isDelete, setIsDelete] = useRecoilState(replyDeleteModalState);
	const queryClient = useQueryClient();
	const editComment = useCommentEdit();
	const userInfo = useRecoilValue(userState);
	const isCommentWriter = userId === userInfo?.userId;

	const optionLists = [
		{
			title: '답글',
			optionClickHandler: () => {
				if (replyComment) {
					replyComment(nickname);
				}
			},
		},
		{
			title: '수정',
			optionClickHandler: () => {
				setIsEdit(true);
			},
		},
		{
			title: '삭제',
			optionClickHandler: () => {
				setIsDelete(true);
			},
		},
	];

	const editingComment = () => {
		setIsEdit(false);
		setShowKebab(true);
		onClickSave();
	};

	const onChangeEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const onKeyPressEdit = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const target = event.currentTarget;
		if (target.value.length !== 0 && event.key === 'Enter') {
			event.preventDefault();
			editingComment();
		}
	};

	const onClickSave = () => {
		const comment = {
			commentId: id,
			content: value,
		};
		editComment.mutate(
			{ pageNum, comment },
			{
				onSuccess: () => {
					queryClient.invalidateQueries({ queryKey: ['detailedPage'] });
					setIsEdit(false);
				},
			}
		);
	};

	return (
		<S.ReplyComment>
			<section className='wrapper'>
				<img className='reply-icon' src={Reply} />
				<article className='container'>
					<section className='comment-icon'>
						<section>
							<ProfileImage url={profileImg} userId={userId} size='2.31rem' />
						</section>
						<span className='nickname'>{nickname}</span>
						{!isEdit && <span className='createAt'>{createAt.slice(0, -9)}</span>}
					</section>
					<section className='comment-info'>
						{!isEdit ? (
							<span>{value}</span>
						) : (
							<section className='edit-container'>
								<input
									className='edit-input'
									value={value}
									onChange={onChangeEdit}
									onKeyUp={onKeyPressEdit}
								/>
								<section className='btn-container'>
									<button
										type='button'
										className='txt-small cancel'
										onClick={() => {
											setIsEdit(false);
											setShowKebab(true);
										}}
									>
										취소
									</button>
									<button type='button' className='txt-small save' onClick={onClickSave}>
										저장
									</button>
								</section>
							</section>
						)}
					</section>
				</article>
				{isCommentWriter && showKebab && <KebabMenu options={optionLists} />}
			</section>
			<hr />
			{isDelete && (
				<section className='modal-background'>
					<CommentDeleteModal pageNum={pageNum} commentId={id} type='reply' />
				</section>
			)}
		</S.ReplyComment>
	);
};

export default ReplyComment;
