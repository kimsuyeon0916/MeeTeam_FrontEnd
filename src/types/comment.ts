import React from 'react';

export interface Comment {
	id: number;
	username: string;
	content: string;
	onClickReply?: () => void;
}

export interface CommentInputFunctions {
	addComment?: () => void;
	onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClickInput?: () => void;
}
