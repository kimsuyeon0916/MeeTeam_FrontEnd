import React, { useState } from 'react';
import { ProfileImage } from '../..';
import S from './ReplyInput.styled';
import { Reply } from '../../../assets';
import { useComment } from '../../../hooks';
import { useQueryClient } from '@tanstack/react-query';
import { realpath } from 'fs/promises';

interface ReplyHandler {
	mention?: string;
	pageNum: number;
	groupNumber: number;
	onClickCancel: () => void;
	replyInputHandler: () => void;
}

const ReplyInput = ({
	mention,
	pageNum,
	groupNumber,
	onClickCancel,
	replyInputHandler,
}: ReplyHandler) => {
	const postComment = useComment();
	const queryClient = useQueryClient();
	const [contents, setContents] = useState<string>(mention ? `@${mention + ' '}` : '');
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
						replyInputHandler();
						queryClient.invalidateQueries({ queryKey: ['detailedPage'] });
					},
				}
			);
		}
	};

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setContents(event.target.value);
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
						placeholder={'답글 쓰기'}
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
			<hr />
		</S.ReplyInput>
	);
};

export default ReplyInput;
