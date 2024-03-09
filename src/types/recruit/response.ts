export interface TitleAndEtc {
	nickname: string;
	responseRate: number;
	score: number;
	createdAt: string;
	title: string;
}

export interface RecruitInfo {
	deadline: string;
	period: string;
	scope: string;
	courseName: string;
	category: string;
	proceedType: string;
	courseProfessor: string;
	dDay: string;
}

export interface RecruitDescription {
	content: string;
}

interface Skill {
	id: number;
	name: string;
}

export interface RoleInfo {
	roleName: string;
	skills: Skill[];
	recruitCount: number;
	applicantCount: number;
	recruitedCount: number;
}
