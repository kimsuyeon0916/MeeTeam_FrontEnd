import { SignUp } from '../..';

interface Account {
	[key: string]: string;
}
export type { Account };

interface User {
	nickName: string;
	accountInformation: Account;
	schoolInformation: SignUp;
}
export type { User };

const SIGN_UP_DATA = [
	{
		label: '닉네임',
		type: 'text',
		placeholder: '닉네임을 입력해주세요',
		name: 'nickName',
	},
	{
		label: '이름',
		type: 'text',
		placeholder: '실명을 입력해주세요',
		name: 'name',
	},
	{
		label: '이메일',
		type: 'email',
		placeholder: '학교 이메일 고정',
		name: 'email',
	},
	{
		label: '비밀번호',
		type: 'password',
		placeholder: '영문 소문자 및 숫자, 4-16자',
		name: 'password',
	},
	{
		label: '비밀번호 확인',
		type: 'password',
		placeholder: '비밀번호 재입력',
		name: 'passwordCheck',
	},
];

export { SIGN_UP_DATA };
