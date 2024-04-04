import React, { useState } from 'react';
import S from './ReplyComment.styled';
import { KebabMenu, ProfileImage } from '../..';
import { Comment as CommentType } from '../../../types';
import { Reply } from '../../../assets';
import { useParams } from 'react-router-dom';
import { useCommentDelete, useCommentEdit } from '../../../hooks';
import { useQueryClient } from '@tanstack/react-query';

const ReplyComment = ({
	id,
	userId,
	nickname,
	content,
	isWriter,
	createAt,
	profileImg,
	groupOrder,
}: CommentType) => {
	const { id: recruitId } = useParams();
	const pageNum = Number(recruitId);
	const [value, setValue] = useState<string>(content);
	const [showKebab, setShowKebab] = useState<boolean>(true);
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const deleteComment = useCommentDelete();
	const queryClient = useQueryClient();
	const editComment = useCommentEdit();
	const optionLists = [
		{
			title: '답글',
			optionClickHandler: () => {},
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
					{
						pageNum,
						commentId,
					},
					{
						onSuccess: () => {
							queryClient.invalidateQueries({ queryKey: ['detailedPage'] });
						},
					}
				);
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
							<span>{value}</span>
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
		</S.ReplyComment>
	);
};

export default ReplyComment;
