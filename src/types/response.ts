import { User } from './index';

export interface UserReponse {
	user: User;
	accessToken: string;
	refreshToken?: string;
	platformId?: string;
	isEnable?: boolean;
}