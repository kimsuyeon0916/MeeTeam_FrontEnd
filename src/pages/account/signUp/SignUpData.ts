import { INPUT_VALIDATION } from '../../../constant';

export interface Account {
	[key: string]: string;
}

export interface User {
	nickname: string;
	accountInformation: Account;
	schoolInformation: Account;
}

const SIGN_UP_DATA = [
	{
		name: 'nickname',
		type: 'text',
		placeholder: '닉네임을 입력해주세요',
		required: true,
		validation: INPUT_VALIDATION.nickname,
	},
	{
		label: '이름',
		name: 'name',
		type: 'text',
		placeholder: '실명을 입력해주세요',
		required: true,
	},
	{
		label: '이메일',
		name: 'email',
		type: 'email',
		placeholder: '학교 이메일 고정',
		required: true,
	},
	{
		label: '비밀번호',
		name: 'password',
		type: 'password',
		placeholder: '영문 소문자 및 숫자, 4-16자',
		required: true,
	},
	{
		label: '비밀번호 확인',
		name: 'passwordCheck',
		type: 'password',
		placeholder: '비밀번호 재입력',
		required: true,
	},
];

export { SIGN_UP_DATA };
