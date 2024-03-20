export interface UserReponse {
	user: User;
	accessToken: string;
	refreshToken?: string;
	platformId?: string;
	isEnable?: boolean;
}

export interface User {
	university: string;
	department: string;
	year: string;
	email: string;
	nickname: string;
	username?: string;
	imageUrl?: string;
	rate?: number;
	phone?: '';
	position?: string;
	introduction?: string;
	specifications?: string[];
	links?: string[];
	meeteam?: Meeteam[];
	comment?: Comment[];
	followers?: [];
	following?: [
		{
			_id: string;
			user: string;
			follower: string;
			createdAt: string;
			updatedAt: string;
		},
	];
	timeTable?: TimeTable[];
}

interface Meeteam {}

interface Comment {}

interface TimeTable {}

export interface University {
	universityId: string;
	universityName: string;
	universityDomain: string;
}

export interface Department {
	departmentId: string;
	departmentName: string;
}
