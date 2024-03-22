export interface UserReponse {
	userName?: string; // userName -> nickname 으로 데이터 변경 요청 필요
	pictureUrl?: string; // imageUrl로 변경 요청 필요
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
