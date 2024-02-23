import React from 'react';
import { Comment } from '../../index';

const CommentList = (comments: Comment[]) => {
	return (
		<div>
			{comments.map(comment => (
				<Comment
					key={comment.id}
					id={comment.id}
					username={comment.username}
					content={comment.content}
					replies={comment.replies}
				/>
			))}
		</div>
	);
};

export default CommentList;
