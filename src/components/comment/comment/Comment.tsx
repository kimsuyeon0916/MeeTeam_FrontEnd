import React, { useState } from 'react';
import { Icon } from '../..';
import S from './Comment.styled';
import { Comment } from '../../../types';

const Comment = ({ id, username, content, onClickReply }: Comment) => {
	return (
		<S.Comment key={id}>
			<div className='comment-icon'>
				<Icon />
			</div>
			<div className='comment-info'>
				<span>{username}</span>
				<span>{content}</span>
			</div>
			<button type='button' onClick={onClickReply}>
				답글
			</button>
		</S.Comment>
	);
};

export default Comment;
