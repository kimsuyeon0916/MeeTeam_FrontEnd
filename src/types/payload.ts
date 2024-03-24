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
	imageUrl?: string;
	nickname: string;
	userName?: string;
	isUserNamePublic: boolean;
	interest?: string;
	introduction?: string;
	aboutMe?: string;
	email: Contact[]; // 논의 필요
	phone?: Contact;
	university: string;
	department: string;
	maxGpa?: string;
	gpa?: string;
	year: string;
	skills?: string[];
	awards?: Award[];
	links?: Link[];
	portfolios: string[];
}
