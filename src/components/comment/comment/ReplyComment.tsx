import React, { useState } from 'react';
import S from './ReplyComment.styled';
import { Icon, KebabMenu } from '../..';
import { ReplyForm } from '../../../types';

const ReplyComment = ({ id, username, content, deleteReply }: ReplyForm) => {
	const isLogin = true; // 임시 코드
	const [showKebab, setShowKebab] = useState<boolean>(true);
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const isValid = isLogin && username === 'yeom' && showKebab;
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
				if (deleteReply) {
					deleteReply(id);
				}
			},
		},
	];

	return (
		<S.ReplyComment>
			<section className='wrapper'>
				<section className='container'>
					<div className='comment-icon'>
						<Icon />
					</div>
					<div className='comment-info'>
						<span>{username}</span>
						<span>{content}</span>
					</div>
				</section>
				{isValid && (
					<div>
						<KebabMenu options={optionLists} />
					</div>
				)}
			</section>
		</S.ReplyComment>
	);
};

export default ReplyComment;
