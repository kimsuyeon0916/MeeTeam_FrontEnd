import React from 'react';

export interface Comment {
	id: number;
	userId: string;
	nickname: string;
	profileImg: string;
	content: string;
	createAt: string;
	isWriter: true;
	groupNumber?: number;
	groupOrder: number;
	replies?: Comment[];
	deleteComment?: (id: number) => void;
}

export interface CommentInputFunctions {
	contents: string;
	addComment?: () => void;
	onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClickInput?: () => void;
}
