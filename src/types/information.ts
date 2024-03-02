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
