import React, { useState } from 'react';
import { ProfileImage } from '../..';
import S from './CommentInput.styled';
import { useComment } from '../../../hooks';
import { useParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../atom';

const CommentInput = () => {
	const isLogin = true; // 임시 코드
	const postComment = useComment();
	const { id } = useParams();
	const pageNum = Number(id);
	const [contents, setContents] = useState<string>('');
	const queryClient = useQueryClient();
	const userInfo = useRecoilValue(userState);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	const addComment = () => {
		if (contents.trim() !== '') {
			const comment = {
				content: contents,
				isParent: true,
			};
			setContents('');
			postComment.mutate(
				{ pageNum, comment },
				{
					onSuccess: () => {
						queryClient.invalidateQueries({ queryKey: ['detailedPage'] });
					},
				}
			);
		}
	};
	const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContents(event.target.value);
	};
	const onClickInput = () => {};

	const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const target = event.currentTarget;
		if (target.value.length !== 0 && event.key === 'Enter') {
			event.preventDefault();
			addComment();
		}
	};

	return (
		<S.CommentInput>
			<form onSubmit={onSubmit}>
				<article className='wrapper'>
					<section className='container-user__icon'>
						<div>
							{userInfo?.userId && (
								<ProfileImage url={userInfo?.imageUrl} userId={userInfo?.userId} size='2.31rem' />
							)}
						</div>
						<span>{userInfo?.nickname}</span>
					</section>
					<section className='container-user__input'>
						<textarea
							// onKeyDown={onKeyPress}
							value={contents}
							onChange={onChangeHandler}
							onClick={onClickInput}
							placeholder={isLogin ? '댓글 쓰기' : '로그인이 필요합니다.'}
						/>
					</section>
					<section className='container-btn'>
						<button type='submit' onClick={addComment} className='submit-btn'>
							댓글
						</button>
					</section>
				</article>
			</form>
		</S.CommentInput>
	);
};

export default CommentInput;
