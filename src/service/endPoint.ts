export const EndPoint = {
	/* auth */
	SIGN_IN: '/signIn',
	SIGN_UP: {
		all: 'signUp',
		nickName: 'signUp/nickName',
		school: 'signUp/school',
	},

	/* profile */
	PROFILE: {
		read: (userId: string) => `/user/profile/${userId}`,
	},
};
