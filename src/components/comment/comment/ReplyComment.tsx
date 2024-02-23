import React, { useState } from 'react';
import S from './ReplyComment.styled';
import { Icon, KebabMenu } from '../..';
import { Reply } from '../../../types';

const ReplyComment = ({ id, parentId, username, content }: Reply) => {
	const [showKebab, setShowKebab] = useState<boolean>(true);
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [replyClicked, setReplyClicked] = useState<boolean>(false);
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
			},
		},
	];
	const handleReplyClick = () => {
		setReplyClicked(true);
	};
	return (
		<S.ReplyComment key={id}>
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
				<div>
					<KebabMenu options={optionLists} />
				</div>
			</section>
		</S.ReplyComment>
	);
};

export default ReplyComment;
