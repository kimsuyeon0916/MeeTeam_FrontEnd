export interface User {
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
	skills?: Skill[];
	awards?: Award[];
	links?: Link[];
	portfolios: Portfolio[];
	// following?: [
	// 	{
	// 		_id: string;
	// 		user: string;
	// 		follower: string;
	// 		createdAt: string;
	// 		updatedAt: string;
	// 	},
	// ];
	// meeteam?: Meeteam[];
	// comment?: Comment[];
	// followers?: [];
}

export interface Contact {
	content: string;
	isPublic: boolean;
	isDefault?: boolean;
}

export interface Skill {
	id: string;
	name: string;
}

export interface Award {
	title: string;
	startDate: string;
	endDate: string;
	description: string;
}

export interface Link {
	url: string;
	description: string;
}

export interface Portfolio {
	id: string;
	title: string;
	imageUrl?: string;
	description: string;
	startDate: string;
	endDate: string;
	field: string;
	role: string;
	skills: Skill[];
}

// interface Meeteam {}

// interface Comment {}
