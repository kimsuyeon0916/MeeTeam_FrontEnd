export interface RoleForPost {
	id: number | null;
	role: number | null;
	count: number | null;
	skill: number[];
}

export interface InputState {
	scope: string;
	category: string;
	fieldId: number;
	deadline: string | undefined;
	proceedType: string;
	startDate: string | undefined;
	endDate: string | undefined;
	courseTagDto: {
		isCourse: boolean;
		courseTagName: string | null;
		courseTagProfessor: string | null;
	};
	recruitmentRoleDto: RoleForPost[];
	tag: string[];
	title: string;
	contents: string;
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

export interface InputCourse {
	isChecked: boolean;
	onClickHandler: () => void;
}
