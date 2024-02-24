import React, { useState } from 'react';
import { Icon, KebabMenu } from '../..';
import S from './Comment.styled';
import { CommentForm, ReplyForm } from '../../../types';
import { ReplyInput } from '../../index';
import ReplyComment from './ReplyComment';

const Comment = ({ id, username, content, replies, deleteComment }: CommentForm) => {
	const isLogin = true; // 임시 코드
	const [replyClicked, setReplyClicked] = useState<boolean>(false);
	const [contents, setContents] = useState<string>('');
	const [showKebab, setShowKebab] = useState<boolean>(true);
	const isValid = isLogin && username === 'yeom' && showKebab;
	const [repliesList, setRepliesList] = useState<ReplyForm[]>(replies);
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const optionLists = [
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
				if (deleteComment) {
					deleteComment(id);
				}
			},
		},
	];

	const deleteReply = (id: string) => {
		setRepliesList(prevReplies => prevReplies.filter(v => v.id !== id));
	};

	const handleReplyClick = () => {
		setReplyClicked(true);
	};
	const addComment = () => {
		if (contents !== '' && contents.trim() !== '') {
			const newComment = {
				id: id + '-' + repliesList.length.toString(),
				username: 'yeom',
				content: contents,
			};
			setRepliesList([...repliesList, newComment]);
			setContents('');
		}
	};

	const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const target = event.currentTarget;
		if (target.value.length !== 0 && event.key === 'Enter') {
			event.preventDefault();
			addComment();
		}
	};

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setContents(event.target.value);
	};

	const onClickInput = () => {
		if (!isLogin) {
			// 로그인 페이지로 이동
			// navigate('/login');
		}
	};

	return (
		<S.Comment>
			<section className='wrapper'>
				<section className='container'>
					<div className='comment-icon'>
						<Icon />
					</div>
					<div className='comment-info'>
						<span>{username}</span>
						<span>{content}</span>
					</div>
					<button type='button' onClick={handleReplyClick} className='reply-btn'>
						답글
					</button>
				</section>
				{isValid && (
					<div>
						<KebabMenu options={optionLists} />
					</div>
				)}
			</section>
			<section>
				<ul className='container-reply__lists'>
					{repliesList?.map(reply => {
						return (
							<ReplyComment
								key={reply.id}
								id={reply.id}
								username={reply.username}
								content={reply.content}
								deleteReply={() => deleteReply(reply.id)}
							/>
						);
					})}
				</ul>
				{replyClicked && (
					<ReplyInput
						key={id}
						contents={contents}
						addComment={addComment}
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
