import { DeleteComment } from '../types';

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

	/* recruit */
	RECRUIT_DETAIL: {
		posting: (id: number) => `/recruitment/postings/${id}`,
		applyInfo: (id: number) => `/recruitment/postings/${id}/apply-info`,
		apply: (id: number) => `/recruitment/postings/${id}/apply`,
		bookmark: (id: number) => `/recruitment/postings/${id}/bookmark`,
		edit: (id: number) => `/recruitment/postings/${id}/close`,
		comment: (id: number) => `/recruitment/postings/${id}/comment`,
		deleteComment: ({ pageNum, commentId }: DeleteComment) =>
			`/recruitment/postings/${pageNum}/comment/${commentId}`,
	},
	RECRUITMENT: {
		post: '/recruitment/postings',
		role: (keyword: string) => `/role/search?keyword=${keyword}&limit=5`,
		skill: (keyword: string) => `/skill/search?keyword=${keyword}&limit=5`,
		course: (keyword: string) => `/course/search?keyword=${keyword}&limit=5`,
		professor: (keyword: string) => `/professor/search?keyword=${keyword}&limit=5`,
		tag: (keyword: string) => `/tag/search?keyword=${keyword}&limit=5`,
	},
	RECRUITMENT_BOARD: {
		list: '/recruitment/postings/search',
	},
};
