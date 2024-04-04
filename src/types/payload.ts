import { Contact, Award, Link } from './index';

export interface SignUpPayload {
	platformType?: string;
	platformId?: string;
	year?: string;
	universityId?: string;
	departmentId?: string;
	emailId?: string;
	nickname?: string;
}

export interface UpdateProfilePayload {
	imageFileName?: string;
	nickname: string;
	isUserNamePublic: boolean;
	interest?: string;
	introduction?: string;
	aboutMe?: string;
	email: Contact[]; // 논의 필요
	phone: string;
	isPhonePublic: boolean;
	isUniversityMain: boolean;
	isUniversityEmailPublic: boolean;
	subEmail: string;
	isSubEmailPublic: boolean;
	department: string;
	maxGpa?: string;
	gpa?: string;
	skills?: string[];
	awards?: Award[];
	links?: Link[];
	portfolios: string[];
}
