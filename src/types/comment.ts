import React from 'react';

export interface Comment {
	id: number;
	userId: string;
	nickname: string;
	profileImg: string;
	content: string;
	createAt: string;
	isWriter: boolean;
	groupNumber?: number;
	groupOrder?: number;
	replies?: Comment[];
	deleteComment?: (id: number) => void;
}
