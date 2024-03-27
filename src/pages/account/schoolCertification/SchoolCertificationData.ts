import { ArrowBottom, ArrowTop, Search } from '../../../assets';

const SCHOOL_CERTIFICATION_DATA = [
	{
		label: '입학년도',
		type: 'text',
		placeholder: new Date().getFullYear().toString(),
		name: 'year',
		required: true,
		isNext: false,
		icon: {
			default: ArrowBottom,
			focus: ArrowTop,
			arrow: 'right',
		},
	},
	{
		label: '학교',
		type: 'text',
		placeholder: '학교 이름을 검색해주세요',
		name: 'university',
		required: true,
		isNext: false,
		icon: {
			default: Search,
			arrow: 'right',
		},
	},
	{
		label: '학과',
		type: 'text',
		placeholder: '전공을 입력해주세요',
		name: 'department',
		required: true,
		isNext: true,
	},
	{
		label: '학교 이메일',
		type: 'text',
		placeholder: '학교 이메일',
		name: 'email',
		required: true,
		isNext: true,
	},
];

export { SCHOOL_CERTIFICATION_DATA };
