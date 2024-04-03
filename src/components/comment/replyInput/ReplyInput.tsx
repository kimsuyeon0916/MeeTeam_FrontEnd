import React, { useState } from 'react';
import { ProfileImage } from '../..';
import { useNavigate } from 'react-router-dom';
import S from './ReplyInput.styled';
import { Reply } from '../../../assets';
import { useComment } from '../../../hooks';
import { useQueryClient } from '@tanstack/react-query';

interface ReplyHandler {
	pageNum: number;
	groupNumber: number;
	onClickCancel: () => void;
}

const ReplyInput = ({ groupNumber, onClickCancel, pageNum }: ReplyHandler) => {
	const navigate = useNavigate();
	const postComment = useComment();
	const isLogin = true; // 임시 코드
	const queryClient = useQueryClient();
	const [contents, setContents] = useState<string>('');
	const userState = JSON.parse(localStorage.getItem('userState') as any);

	const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const target = event.currentTarget;
		if (target.value.length !== 0 && event.key === 'Enter') {
			event.preventDefault();
			addReply();
		}
	};

	const addReply = () => {
		if (contents.trim() !== '') {
			const comment = {
				content: contents,
				isParent: false,
				groupNumber: groupNumber,
			};
			setContents('');
			postComment.mutate(
				{
					pageNum,
					comment,
				},
				{
					onSuccess: () => {
						queryClient.invalidateQueries({ queryKey: ['detailedPage'] });
					},
				}
			);
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

	return (
		<S.ReplyInput className='reply-container'>
			<section className='wrapper'>
				<img className='reply-icon' src={Reply} />
				<section className='user-input__icon'>
					<ProfileImage url={userState.imageUrl} size='2.31rem' nickname={userState.nickname} />
				</section>
				<section className='user-input__container'>
					<input
						type='text'
						onKeyPress={onKeyPress}
						value={contents}
						onChange={onChangeHandler}
						onClick={onClickInput}
						placeholder={isLogin ? '답글 쓰기' : '로그인이 필요합니다.'}
						className='reply-input'
					/>
				</section>
			</section>
			<section className='btn-container'>
				<button type='button' onClick={onClickCancel} className='cancel-btn txt-small'>
					취소
				</button>
				<button type='button' onClick={addReply} className='reply-btn txt-small'>
					답글
				</button>
			</section>
		</S.ReplyInput>
	);
};

export default ReplyInput;
