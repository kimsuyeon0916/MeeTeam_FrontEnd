import React, { useState } from 'react';
import { KebabMenu, ProfileImage, ReplyComment, ReplyInput } from '../..';
import S from './Comment.styled';
import { Comment as CommentType } from '../../../types';
import { useNavigate, useParams } from 'react-router-dom';
import { useCommentDelete } from '../../../hooks';
import { useQueryClient } from '@tanstack/react-query';

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
	const navigate = useNavigate();
	const { id: recruitId } = useParams();
	const pageNum = Number(recruitId);
	const isLogin = true; // 임시 코드
	const [replyClicked, setReplyClicked] = useState<boolean>(false);
	const [value, setValue] = useState<string>(content);
	const [contents, setContents] = useState<string>('');
	const [showKebab, setShowKebab] = useState<boolean>(true);
	const [repliesList, setRepliesList] = useState<CommentType[] | undefined>(replies);
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const deleteComment = useCommentDelete();
	const queryClient = useQueryClient();

	const optionLists = [
		{
			title: '답글',
			optionClickHandler: () => {
				setShowKebab(false);
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

	const deleteReply = (id: number) => {
		setRepliesList(prevReplies => prevReplies?.filter(v => v.id !== id));
	};

	const handleReplyClick = () => {
		setReplyClicked(true);
	};

	const addReply = () => {
		// if (contents !== '' && contents.trim() !== '' && repliesList) {
		// 	const newComment = {
		// 		id: id,
		// 		nickname: 'yeom',
		// 		content: contents,
		// 		isWriter: isUser,
		// 		createAt: '',
		// 		profileImg: '',
		// 	};
		// 	setRepliesList([...repliesList, newComment]);
		// 	setContents('');
		// 	setReplyClicked(false);
		// }
	};
	const editComment = () => {
		setIsEdit(false);
		setShowKebab(true);
	};

	const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const target = event.currentTarget;
		if (target.value.length !== 0 && event.key === 'Enter') {
			event.preventDefault();
			addReply();
		}
	};

	const onKeyPressEdit = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const target = event.currentTarget;
		if (target.value.length !== 0 && event.key === 'Enter') {
			event.preventDefault();
			editComment();
		}
	};

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setContents(event.target.value);
	};

	const onClickInput = () => {
		if (!isLogin) {
			navigate('/signin');
		}
	};

	const onChangeEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
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
						<span className='createAt'>
							{createAt.length > 10 ? createAt.slice(0, -9) : createAt}
						</span>
					</section>
					<section className='comment-info'>
						<span>{value === null ? '삭제된 메세지입니다.' : value}</span>
					</section>
				</article>
				{isWriter && showKebab && <KebabMenu options={optionLists} />}
			</section>
			<hr />
			<section className='wrapper-replies'>
				<ul className='container-reply__lists'>
					{repliesList?.map(reply => {
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
								deleteComment={() => deleteReply(reply.id)}
							/>
						);
					})}
				</ul>
				{replyClicked && (
					<ReplyInput
						key={id}
						contents={contents}
						addComment={addReply}
						onKeyPress={onKeyPress}
						onChangeHandler={onChangeHandler}
						onClickInput={onClickInput}
					/>
				)}
			</section>
		</S.Comment>
	);
};

export default Comment;
