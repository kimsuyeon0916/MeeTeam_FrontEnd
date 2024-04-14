export interface User {
	userId?: string;
	imageUrl?: string;
	nickname?: string;
	userName?: string;
	isUserNamePublic?: boolean;
	interest?: string;
	introduction?: string;
	aboutMe?: string;
	universityEmail?: Contact;
	subEmail?: Contact;
	phone?: Contact;
	university?: string;
	department?: string;
	maxGpa?: string;
	gpa?: string;
	year?: string;
	skills?: Skill[];
	awards?: Award[];
	links?: Link[];
	portfolios?: Portfolio[];
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
	mainImageUrl?: string;
	title: string;
	field: string;
	role: string;
	pinOrder: string;
	pinned: boolean;
}

// interface Meeteam {}

// interface Comment {}
