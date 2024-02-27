import React from 'react';

export interface Comment {
	id: string;
	username: string;
	content: string;
	replies?: Comment[];
	deleteComment?: (id: string) => void;
}

export interface CommentInputFunctions {
	contents: string;
	addComment?: () => void;
	onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClickInput?: () => void;
}
