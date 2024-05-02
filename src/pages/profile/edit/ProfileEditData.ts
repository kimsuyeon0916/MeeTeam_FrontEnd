import {
	GrayEmail,
	BlackEmail,
	GrayPhone,
	BlackPhone,
	ArrowBottom,
	ArrowTop,
	Search,
	GrayCalendar,
	BlackCalendar,
} from '../../../assets';
import { INPUT_VALIDATION, TEXTAREA_VALIDATION } from '../../../constant';

const nickname = {
	type: 'text',
	placeholder: '닉네임',
	name: 'nickname',
	validation: INPUT_VALIDATION.nickname,
};

const userName = {
	type: 'text',
	placeholder: '이름',
	name: 'userName',
	validation: {
		disabled: true,
	},
};

const interest = {
	type: 'text',
	placeholder: '역할',
	name: 'interest',
	icon: {
		$default: ArrowBottom,
		$focus: ArrowTop,
		$arrow: 'right',
	},
};

const introduction = {
	type: 'text',
	placeholder: '한줄 소개',
	name: 'introduction',
	validation: INPUT_VALIDATION.introduction,
	maxLength: 20,
};

const aboutMe = {
	type: 'text',
	placeholder: '자기 소개로 자신을 표현해보세요!',
	name: 'aboutMe',
	validation: TEXTAREA_VALIDATION.aboutMe,
	maxLength: 150,
};

const phone = {
	type: 'text',
	placeholder: '휴대폰 번호',
	name: 'phone',
	icon: {
		$default: GrayPhone,
		$focus: BlackPhone,
		$arrow: 'left',
	},
};

const universityEmail = {
	type: 'text',
	placeholder: '학교 이메일',
	name: 'universityEmail',
	icon: {
		$default: GrayEmail,
		$focus: BlackEmail,
		$arrow: 'left',
	},
	validation: {
		disabled: true,
	},
};

const subEmail = {
	type: 'text',
	placeholder: '이메일',
	name: 'subEmail',
	icon: {
		$default: GrayEmail,
		$focus: BlackEmail,
		$arrow: 'left',
	},
};

const year = {
	type: 'text',
	placeholder: `입학년도`,
	name: 'year',
	validation: {
		disabled: true,
	},
};

const university = {
	type: 'text',
	placeholder: '대학교',
	name: 'university',
	validation: {
		disabled: true,
	},
};

const department = {
	type: 'text',
	placeholder: '전공',
	name: 'department',
	validation: {
		disabled: true,
	},
};

const gpa = {
	type: 'text',
	placeholder: '학점',
	name: 'gpa',
};

const maxGpa = {
	type: 'button',
	placeholder: '최대학점',
	name: 'maxGpa',
	icon: {
		$default: ArrowBottom,
		$focus: ArrowTop,
		$arrow: 'right',
	},
};

const skills = {
	type: 'text',
	placeholder: '보유 스킬을 검색해주세요',
	name: 'skills',
	icon: {
		$default: Search,
		$arrow: 'right',
	},
};

const linkDescription = {
	type: 'button',
	placeholder: 'Link',
	icon: {
		$default: ArrowBottom,
		$focus: ArrowTop,
		$arrow: 'right',
	},
};

const linkUrl = {
	type: 'url',
	placeholder: 'URL을 입력해주세요',
};

const awardDate = {
	type: 'string',
	icon: {
		$default: GrayCalendar,
		$focus: BlackCalendar,
		$arrow: 'right',
	},
};

const awardTitle = {
	type: 'text',
	placeholder: '수상/활동명',
};

const awardDescription = {
	type: 'text',
	placeholder: '수상/활동내역',
};

const PROFILE_EDIT_DATA = {
	nickname,
	userName,
	interest,
	introduction,
	aboutMe,
	phone,
	universityEmail,
	subEmail,
	year,
	university,
	department,
	gpa,
	maxGpa,
	skills,
	linkDescription,
	linkUrl,
	awardDate,
	awardTitle,
	awardDescription,
};

export default PROFILE_EDIT_DATA;
