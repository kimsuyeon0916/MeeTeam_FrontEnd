export type SignUp = {
	[key: string]: string;
};

const SCHOOL_CERTIFICATION_DATA = [
	{
		label: '학교',
		type: 'search',
		placeholder: '학교',
		name: 'school',
		isNext: false,
	},
	{
		label: '학과',
		type: 'school',
		placeholder: '학과',
		name: 'major',
		isNext: false,
	},
	{
		label: '입학년도',
		type: 'text',
		placeholder: 'ex) 2023',
		name: 'year',
		isNext: true,
	},
	{
		label: '학교 이메일',
		type: 'email',
		placeholder: '학교 이메일을 입력하세요',
		name: 'email',
		isNext: true,
	},
];

export { SCHOOL_CERTIFICATION_DATA };
