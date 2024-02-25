import React from 'react';

export interface CommentForm {
	id: string;
	username: string;
	content: string;
	replies: ReplyForm[];
	deleteComment?: (id: string) => void;
}

export interface CommentInputFunctions {
	contents: string;
	addComment?: () => void;
	onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClickInput?: () => void;
}

export interface ReplyForm {
	id: string;
	username: string;
	content: string;
	deleteReply?: (id: string) => void;
}
