import React, { useState } from 'react';
import S from './RecruitDetailPage.styled';
import {
	Tag,
	ApplyInfomation,
	ApplyInput,
	ApplySubmit,
	informationList,
	role,
	CONTENT,
	Comment,
	CommentInput,
} from '../../../components';
import { useRecoilValue } from 'recoil';
import { applyStepState } from '../../../atom';
import { useNavigate } from 'react-router-dom';
import { commentsData } from './data';

const RecruitDetailPage = () => {
	const navigate = useNavigate();
	const [commentsList, setCommentsList] = useState<Comment[]>(commentsData);
	const [contents, setContents] = useState<string>('');
	const isLogin = true; // 임시 코드
	const step = useRecoilValue(applyStepState);

	// const addComment = () => {
	// 	if (contents !== '' && contents.trim() !== '') {
	// 		const newComment = {
	// 			id: commentsData.length.toString(),
	// 			username: 'yeom',
	// 			content: contents,
	// 			replies: [],
	// 		};
	// 		setCommentsList([...commentsList, newComment]);
	// 		setContents('');
	// 	}
	// };

	// const deleteComment = (id: string) => {
	// 	setCommentsList(prevComments => prevComments.filter(v => v.id !== id));
	// };

	// const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
	// 	const target = event.currentTarget;
	// 	if (target.value.length !== 0 && event.key === 'Enter') {
	// 		event.preventDefault();
	// 		addComment();
	// 	}
	// };

	// const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setContents(event.target.value);
	// };

	// const onClickInput = () => {
	// 	if (!isLogin) {
	// 		navigate('/signin');
	// 	}
	// };

	return (
		<S.RecruitDetailPage>
			{/* <div className='container-comments'>
				<span className='container-comments__title'>댓글</span>
				<ul className='container-comments__lists'>
					{commentsList.map((comment, index) => {
						return (
							<Comment
								key={index}
								id={comment.id}
								username={comment.username}
								content={comment.content}
								replies={comment.replies}
								deleteComment={() => deleteComment(comment.id)}
							/>
						);
					})}
				</ul>
				<CommentInput
					contents={contents}
					addComment={addComment}
					onKeyPress={onKeyPress}
					onChangeHandler={onChangeHandler}
					onClickInput={onClickInput}
				/>
			</div> */}
		</S.RecruitDetailPage>
	);
};

export default RecruitDetailPage;
