import React, { useState } from 'react';
import { KebabMenu, ProfileImage, ReplyComment, ReplyInput } from '../..';
import S from './Comment.styled';
import { Comment as CommentType } from '../../../types';
import { useParams } from 'react-router-dom';
import { useCommentDelete, useCommentEdit } from '../../../hooks';
import { QueryClientProvider, useQueryClient } from '@tanstack/react-query';

const Comment = ({
	id,
	userId,
	nickname,
	content,
	replies,
	isWriter,
	createAt,
	profileImg,
	groupOrder,
	groupNumber,
}: CommentType) => {
	const { id: recruitId } = useParams();
	const pageNum = Number(recruitId);
	const [replyClicked, setReplyClicked] = useState<boolean>(false);
	const [value, setValue] = useState<string>(content);
	const [showKebab, setShowKebab] = useState<boolean>(true);
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [mention, setMention] = useState<string>('');
	const deleteComment = useCommentDelete();
	const queryClient = useQueryClient();
	const editComment = useCommentEdit();

	const optionLists = [
		{
			title: '답글',
			optionClickHandler: () => {
				setReplyClicked(true);
			},
		},
		{
			title: '수정',
			optionClickHandler: () => {
				setIsEdit(true);
				setShowKebab(false);
			},
		},
		{
			title: '삭제',
			optionClickHandler: () => {
				setShowKebab(false);
				const commentId = { commentId: id };
				deleteComment.mutate(
					{ pageNum, commentId },
					{
						onSuccess: () => {
							queryClient.invalidateQueries({ queryKey: ['detailedPage'] });
						},
					}
				);
			},
		},
	];

	const onChangeEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const onClickCancel = () => {
		setReplyClicked(false);
	};

	const editingComment = () => {
		setIsEdit(false);
		setShowKebab(true);
		onClickSave();
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

	const replyHandler = (nickname: string) => {
		setReplyClicked(true);
		setMention(nickname);
	};

	return (
		<S.Comment>
			<section className='wrapper'>
				<article className='container'>
					<section className='comment-icon'>
						<section>
							<ProfileImage url={profileImg} nickname={nickname} size='2.31rem' />
						</section>
						<span className='nickname'>{nickname}</span>
						{!isEdit && (
							<span className='createAt'>
								{createAt.length > 10 ? createAt.slice(0, -9) : createAt}
							</span>
						)}
					</section>
					<section className='comment-info'>
						{!isEdit ? (
							<span>{value === null ? '삭제된 메세지입니다.' : value}</span>
						) : (
							<section className='edit-container'>
								<input
									className='edit-input'
									value={value}
									onChange={onChangeEdit}
									onKeyPress={onKeyPressEdit}
								/>
								<section className='btn-container'>
									<button
										type='button'
										className='txt-small cancel'
										onClick={() => setIsEdit(false)}
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
				{isWriter && showKebab && <KebabMenu options={optionLists} />}
			</section>
			<hr />
			<section className='wrapper-replies'>
				<ul className='container-reply__lists'>
					{replies?.map(reply => {
						return (
							<ReplyComment
								key={reply.id}
								id={reply.id}
								userId={reply.userId}
								nickname={reply.nickname}
								content={reply.content}
								createAt={reply.createAt}
								profileImg={reply.profileImg}
								isWriter={reply.isWriter}
								groupOrder={reply.groupOrder}
								replyComment={replyHandler}
							/>
						);
					})}
				</ul>
				{replyClicked && groupNumber && (
					<ReplyInput
						key={id}
						onClickCancel={onClickCancel}
						groupNumber={groupNumber}
						pageNum={pageNum}
						mention={mention}
					/>
				)}
			</section>
		</S.Comment>
	);
};

export default Comment;
