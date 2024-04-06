const REGEXP = {
	nickname: /^[a-zA-Z0-9가-힣._]{4,16}$/,
};

export const INPUT_VALIDATION = {
	nickname: {
		required: '값이 입력되지 않았습니다',
		pattern: {
			value: REGEXP.nickname,
			message: '공백 없이 영어, 한글, 숫자, 특수문자 _, . 조합만 가능합니다',
		},
		minLength: {
			value: 4,
			message: '최소 4자리 이상 입력해 주세요',
		},
		maxLength: {
			value: 16,
			message: '최대 16자리 이하 입력해 주세요',
		},
	},
	introduction: {
		maxLength: 20,
	},
};

export const TEXTAREA_VALIDATION = {
	aboutMe: {
		maxLength: 150,
	},
};
