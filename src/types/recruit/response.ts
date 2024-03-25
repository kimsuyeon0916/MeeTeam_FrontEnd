export interface TitleAndEtc {
	nickname: string;
	responseRate: number;
	score: number;
	createdAt: string;
	title: string;
	writerProfileImg: string;
	bookmarkCount: number;
	writerScore: number;
}

export interface RecruitInfo {
	deadline: string;
	period: string;
	scope: string;
	courseName: string | null;
	category: string;
	proceedType: string;
	courseProfessor: string | null;
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

export interface RecruitTags {
	id: number;
	name: string;
}

export interface RecruitPostings {
	isWriter: boolean;
	category: string;
	title: string;
	createdAt: string;
	bookmarkCount: number;
	writerNickname: string;
	writerProfileImg: string;
	responseRate: number;
	writerScore: number;
	proceedingStart: string;
	proceedingEnd: string;
	proceedType: string;
	deadline: string;
	scope: string;
	courseName: string | null;
	courseProfessor: string | null;
	tags: RecruitTags[];
	recruitmentRoles: RoleInfo[];
	content: string;
	comments: [];
}
