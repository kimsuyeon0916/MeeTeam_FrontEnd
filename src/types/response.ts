export interface UserReponse {
	user: User;
	token: string;
}

export interface User {
	school: string;
	major: string;
	year: string;
	email: string;
	nickName: string;
	name?: string;
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
