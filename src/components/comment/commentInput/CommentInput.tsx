import React, { useState } from 'react';
import { Icon } from '../..';
import { Comment } from '../../../types';

let addedCmtId;

const CommentInput = () => {
	const [commentsList, setCommentsList] = useState<Comment[]>([]);
	const [contents, setContents] = useState<string>('');
	const isLogin = true; // 임시 코드
	const [needLogin, setNeedLogin] = useState<boolean>(false);
	const addComment = () => {
		if (contents !== '') {
			if (commentsList.length === 0) {
				addedCmtId = 0;
			} else {
				const lastCmtIndex = commentsList.length - 1;
				addedCmtId = commentsList[lastCmtIndex].id + 1;
			}
			const newComment = {
				id: addedCmtId,
				username: 'yeom',
				content: contents,
			};
			setCommentsList([...commentsList, newComment]);
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
		<div className='container-comments__wrapper'>
			<div className='user-input'>
				<div className='user-input__icon'>
					<Icon />
				</div>
				<input
					type='text'
					onKeyPress={onKeyPress}
					value={contents}
					onChange={onChangeHandler}
					onClick={onClickInput}
					placeholder={isLogin ? '댓글 추가...' : '로그인이 필요합니다.'}
				/>
				<button type='button' onClick={addComment}>
					댓글 등록
				</button>
			</div>
		</div>
	);
};

export default CommentInput;
