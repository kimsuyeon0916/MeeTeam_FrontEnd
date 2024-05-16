import { Portfolio } from './index';

export interface UserReponse {
	userId?: string;
	nickname?: string;
	imageUrl?: string;
	university?: string;
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

export interface ImageResponse {
	serviceType: string;
	fileName: string;
	url: string;
}

export interface PortfolioListResponse {
	portfolios: Portfolio[];
	pageInfo: PageInfo;
}

export interface PageInfo {
	page: number;
	size: number;
	hasNextPage?: boolean;
	totalContents?: number;
	totalPages?: number;
}
