export interface TitleInfo {
	title?: string;
	descriptions?: string[];
}

export interface OptionList {
	options: string[];
	isScope?: boolean;
	isCategory?: boolean;
}

export interface Option {
	children: string;
	isScope?: boolean;
	isCategory?: boolean;
}

export interface Role {
	id: number;
	role: string;
	count: string;
	skill: string[];
}

export interface InputRoleForm {
	userRoleList: Role[];
	setUserRoleList: (arr: any) => void;
}

export interface InputState {
	scope: string;
	category: string;
	fieldId: number;
	deadline: string;
	period: string[];
	courseTagDto: {
		isCourse: boolean;
		courseTagName: string;
		courseTagProfessor: string;
	};
	recruitmentRoleDto: [
		{
			role: string;
			count: number;
			skill: string[];
		},
	];
	tag: string[];
	title: string;
	contents: string;
}
