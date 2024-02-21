import React, { useState } from 'react';
import { Icon } from '../..';
import S from './Comment.styled';
import { Comment } from '../../../types';
import { ReplyInput } from '../../index';

const Comment = ({ id, username, content, replyList }: Comment) => {
	const [replyClicked, setReplyClicked] = useState<boolean>(false);
	const handleReplyClick = () => {
		setReplyClicked(true);
	};

	return (
		<S.Comment key={id}>
			<main>
				<div className='comment-icon'>
					<Icon />
				</div>
				<div className='comment-info'>
					<span>{username}</span>
					<span>{content}</span>
				</div>
				<button type='button' onClick={handleReplyClick}>
					답글
				</button>
			</main>

			<section>
				<ul className='container-reply__lists'>
					{replyList?.map(reply => {
						return (
							<Comment
								key={reply.id}
								id={reply.id}
								username={reply.username}
								content={reply.content}
							/>
						);
					})}
				</ul>
				{replyClicked && <ReplyInput key={id} />}
			</section>
		</S.Comment>
	);
};

export default Comment;
