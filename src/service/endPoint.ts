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
		update: '/user/profile',
	},

	/* search */
	SEARCH: {
		role: '/role/search',
		skill: '/skill/search',
	},

	/* portfolio */
	PORTFOLIO: {
		read: (portfolioId: string) => `/portfolio/${portfolioId}`,
		create: '/portfolio',
		update: (portfolioId: string) => `/portfolio/${portfolioId}`,
	},
};
