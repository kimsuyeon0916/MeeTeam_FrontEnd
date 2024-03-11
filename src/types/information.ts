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
	id: number | null;
	role: {
		id: number | null;
		name: string;
	};
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
	deadline: string | undefined;
	period: (string | undefined)[];
	courseTagDto: {
		isCourse: boolean;
		courseTagName: string;
		courseTagProfessor: string;
	};
	recruitmentRoleDto: [
		{
			role: number;
			count: number;
			skill: number[];
		},
	];
	tag: string[];
	title: string;
	contents: string;
}

export interface InputCourse {
	isChecked: boolean;
	onClickHandler: () => void;
}
