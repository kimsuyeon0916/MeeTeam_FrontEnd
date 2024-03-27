export const EndPoint = {
	/* auth */
	SIGN_IN: '/auth/social/login-or-signup',
	SIGN_UP: {
		all: '/auth/sign-up',
		nickname: '/user/search/check-duplicate',
		school: '/auth/social/email-verification',
		readUniversityList: '/university',
		readDepartmentList: '/department',
	},

	/* profile */
	PROFILE: {
		read: (userId: string) => `/user/profile/${userId}`,
	},

	RECRUIT_DETAIL: {
		posting: (id: number) => `/recruitment/postings/${id}`,
		applyInfo: (id: number) => `/recruitment/postings/${id}/apply-info`,
		apply: (id: number) => `/recruitment/postings/${id}/apply`,
		bookmark: (id: number) => `/recruitment/postings/${id}/bookmark`,
	},
};
