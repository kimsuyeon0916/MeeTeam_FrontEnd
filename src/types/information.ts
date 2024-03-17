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

export interface TempRole {
	id: number | null;
	role: number | null;
	count: number | null;
	skill: number[];
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
		courseTagName: string | null;
		courseTagProfessor: string | null;
	};
	recruitmentRoleDto: TempRole[];
	tag: string[];
	title: string;
	contents: string;
}

export interface InputCourse {
	isChecked: boolean;
	onClickHandler: () => void;
}
