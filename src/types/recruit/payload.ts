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
