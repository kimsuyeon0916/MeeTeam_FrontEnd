import { Portfolio } from './index';

export interface UserReponse {
	userId?: string;
	nickname?: string;
	imageUrl?: string;
	accessToken?: string;
	refreshToken?: string;
	platformId?: string;
	isEnable?: boolean;
}

export interface University {
	universityId: string;
	universityName: string;
	universityDomain: string;
}

export interface Department {
	departmentId: string;
	departmentName: string;
}

export interface PortfolioListResponse {
	portfolois: Portfolio[];
	pageInfo: PageInfo;
}

export interface PageInfo {
	page: string;
	size: string;
	hasNextPage: string;
}
