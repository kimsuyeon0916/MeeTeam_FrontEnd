const REGEXP = {
	nickname: /^[a-zA-Z0-9가-힣._]{4,16}$/,
	phone: /^\d{3}-\d{4}-\d{4}$/,
	email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
	gpa: /^[0-9]+(\.[0-9]+)?$/,
};

export const INPUT_VALIDATION = {
	year: {
		required: true,
	},
	university: {
		required: true,
	},
	department: {
		required: true,
	},
	email: {
		required: true,
	},
	nickname: {
		required: '값이 입력되지 않았습니다',
		pattern: {
			value: REGEXP.nickname,
			message: '공백 없이 영어, 한글, 숫자, 특수문자 _, . 조합만 가능합니다',
		},
		minLength: {
			value: 4,
			message: '최소 4자리 이상 입력해주세요',
		},
		maxLength: {
			value: 16,
			message: '최대 16자리 이하 입력해주세요',
		},
	},
	introduction: {
		maxLength: 20,
	},
	phone: {
		pattern: {
			value: REGEXP.phone,
			message: '숫자를 입력해주세요 예) 010-1234-5678',
		},
	},
	emailAddress: {
		pattern: {
			value: REGEXP.email,
			message: '이메일 형식이 올바르지 않습니다',
		},
	},
	gpa: {
		pattern: {
			value: REGEXP.gpa,
			message: '숫자를 입력해주세요',
		},
	},
	awardTitle: {
		required: '값이 입력되지 않았습니다',
		maxLength: {
			value: 20,
			message: '최대 20자리 이하 입력해주세요',
		},
	},
	awardDescription: {
		required: '값이 입력되지 않았습니다',
		maxLength: {
			value: 20,
			message: '최대 20자리 이하 입력해주세요',
		},
	},
	portfolioImage: {
		required: '포트폴리오를 대표할 이미지를 업로드해주세요',
	},
	portfolioTitle: {
		required: '포트폴리오 제목을 작성해주세요',
		minLength: {
			value: 4,
			message: '최소 4자리 이상 입력해 주세요',
		},
	},
	portfolioDescription: {
		required: '포트폴리오 한줄 소개를 작성해주세요',
		minLength: {
			value: 4,
			message: '최소 4자리 이상 입력해 주세요',
		},
	},
	field: {
		required: '분야를 선택해주세요',
	},
	role: {
		required: '역할을 선택해주세요',
	},
	startDate: {
		required: '시작일을 설정해주세요',
	},
	endDate: {
		required: '종료일을 설정해주세요',
	},
	proceedType: {
		required: '진행방식을 설정해주세요',
	},
	content: {
		required: true,
	},
	url: {
		required: 'url을 입력해주세요',
	},
};

export const TEXTAREA_VALIDATION = {
	aboutMe: {
		maxLength: 300,
	},
};
