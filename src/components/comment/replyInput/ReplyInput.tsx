import React, { useState } from 'react';
import { ProfileImage } from '../..';
import S from './ReplyInput.styled';
import { Reply } from '../../../assets';
import { useComment } from '../../../hooks';
import { useQueryClient } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../atom';

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
	const userInfo = useRecoilValue(userState);

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

	const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContents(event.target.value);
	};

	return (
		<S.ReplyInput className='reply-container'>
			<img className='reply-icon' src={Reply} />
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
						value={contents}
						onChange={onChangeHandler}
						maxLength={1000}
						placeholder='답글을 입력해주세요.'
					/>
				</section>
				<section className='container-btn'>
					<button type='button' className='cancel-btn'>
						취소
					</button>
					<button type='button' onClick={addReply} className='submit-btn'>
						저장
					</button>
				</section>
			</article>
			<hr />
		</S.ReplyInput>
	);
};

export default ReplyInput;
