import { Keyword } from '..';

export interface ApplyRole {
	name: string;
	score: number;
	universityName: string;
	departmentName: string;
	year: number;
	email: string;
	role: {
		applyRoleId: number;
		name: string;
	};
	message: string | undefined;
}

export interface ApplyForm {
	applyRoleId: number;
	message: string | undefined;
}
export interface RoleForPost {
	roleId: number | null;
	count: number | null;
	skillIds: number[];
}

export interface InputState {
	scope: string;
	category: string;
	fieldId: number;
	deadline: string | undefined;
	proceedType: string;
	proceedingStart: string | undefined;
	proceedingEnd: string | undefined;
	courseTag: {
		isCourse: boolean;
		courseTagName: string | null;
		courseProfessor: string | null;
	};
	recruitmentRoles: RoleForPost[];
	tags: string[];
	title: string;
	content: string;
}

export interface Role {
	id: number | null;
	role: {
		id: number | null;
		name: string;
	};
	count: string;
	skill: string[];
}

export interface InputUserRoleForm {
	userRoleList: Role[];
	setUserRoleList: (arr: any) => void;
}

export interface InputCourse {
	isChecked: boolean;
	onClickHandler: () => void;
}

export interface RecruitFilter {
	scope: number | null;
	category: number | null;
	field: number | null;
	skill: number[];
	role: number[];
	tag: number[];
	keyword: string;
}

export interface DetailedInfo {
	type: string;
}

export interface Array {
	skill: Keyword[];
	role: Keyword[];
	tag: Keyword[];
}

export interface FilterData {
	field?: number | null;
	scope?: number | null;
	category?: number | null;
	keyword?: string | null;
	skill?: number[];
	role?: number[];
	tag?: number[];
}

export interface CommentContents {
	content: string;
	isParent: boolean;
	groupNumber?: number;
}

export interface PostingComment {
	pageNum: number;
	comment: CommentContents;
}

export interface GroupContents {
	groupNumber: number;
	groupOrder: number;
}

export interface DeleteComment {
	pageNum: number;
	commentId: number;
}

export interface EditContents {
	commentId: number;
	content: string;
}

export interface EditingComment {
	pageNum: number;
	comment: EditContents;
}
