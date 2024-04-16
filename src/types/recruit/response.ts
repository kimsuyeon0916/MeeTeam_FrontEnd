import { Comment } from '..';

export interface TitleAndEtc {
	nickname: string;
	responseRate: number;
	score: number;
	createdAt: string;
	title: string;
	writerProfileImg: string;
	bookmarkCount: number;
	writerScore: number;
	writerId: string;
	isBookmarked: boolean;
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
	isClosed: boolean;
}

export interface RecruitDescription {
	content: string;
}

export interface Skill {
	id: number;
	name: string;
}

export interface RoleInfo {
	roleId: number;
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
	isApplied: boolean;
	category: string;
	writerId: string;
	isClosed: boolean;
	isBookmarked: boolean;
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
	comments: Comment[];
}

export interface ApplyInfo {
	name: string;
	score: number;
	universityName: string;
	departmentName: string;
	year: number;
	email: string;
	recruitmentRoles: RecruitTags[];
}
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

export interface Keyword {
	id: number;
	name: string;
}

export interface DetailedFilter {
	skill: Keyword[];
	role: Keyword[];
	tag: Keyword[];
}

export interface Post {
	id: number;
	title: string;
	category: string;
	writerNickname: string;
	writerProfileImg: string | undefined;
	deadline: string;
	scope: string;
	isBookmarked: boolean;
	writerId: string;
}

export interface Page {
	page: number;
	size: number;
	totalContents: number;
	totalPages: number;
}

export interface ListResult {
	posts: Post[];
	pageInfo: Page;
}

export interface ManageListResult {
	data: Post[];
	pageInfo: Page;
}

export interface ApplicantPageInfo {
	pageNum: number;
	role: number | null;
	page: number;
}

export interface ApplicantInfo {
	applicantId: number;
	applyRoleName: string;
	departmentName: string;
	message: string;
	name: string;
	nickname: string;
	profileImg: string;
	score: number;
	universityName: string;
	userId: string;
	year: number;
}

export interface PageInfo {
	page: number;
	size: number;
	hasNextPage: boolean;
}

export interface ApplicantList {
	applicants: ApplicantInfo[];
	pageInfo: PageInfo;
}

export interface ManageRole {
	id: number | null;
	title: string;
}

export interface RecruitmentStatus {
	roleName: string;
	recruitMemberCount: number;
	approvedMemberCount: number;
}

export interface ApplyManageInfo {
	title: string;
	link: string;
	recruitmentStatus: RecruitmentStatus[];
	roles: ManageRole[];
}
