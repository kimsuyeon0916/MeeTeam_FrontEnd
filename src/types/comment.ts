import React from 'react';

export interface Comment {
	id: number;
	username: string;
	content: string;
	replyList?: Comment[];
}

export interface CommentInputFunctions {
	contents: string;
	addComment?: () => void;
	onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClickInput?: () => void;
}
