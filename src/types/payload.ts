import { Award, Link } from './index';

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
	nickname?: string;
	isUserNamePublic?: boolean;
	interestId?: string;
	introduction?: string;
	aboutMe?: string;
	phone?: string;
	isPhonePublic?: boolean;
	isUniversityMain?: boolean;
	isUniversityEmailPublic?: boolean;
	subEmail?: string;
	isSubEmailPublic?: boolean;
	department?: string;
	maxGpa?: string;
	gpa?: string;
	skills?: string[];
	awards?: Award[];
	links?: Link[];
	portfolios?: string[];
}
