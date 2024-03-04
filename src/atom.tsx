import { atom } from 'recoil';
import { SessionStorageEffect } from './utils';
import { User } from './types';
import { LocalStorageEffect } from './utils';
import { Account } from './pages';

export const userState = atom<User | null>({
	key: 'userState',
	default: null,
	effects: [LocalStorageEffect<User | null>('userState')],
});

export const naverSignUpState = atom<Account | null>({
	key: 'naverSignUpState',
	default: null,
	effects: [LocalStorageEffect<Account | null>('naverSignUpState')],
});

export const submitEmailState = atom({
	key: 'submitEmailState',
	default: false,
	effects: [LocalStorageEffect('submitEmailState')],
});

export const preUrlState = atom({
	key: 'preUrlState',
	default: '',
	effects: [SessionStorageEffect('preUrlState')],
});

export const contentState = atom({
	key: 'contentState',
	default: '대시보드',
	effects: [SessionStorageEffect('contentState')],
});

export const recruitmentState = atom({
	key: 'recruitmentState',
	default: true,
});

export const recruitmentInformationEditState = atom({
	key: 'recruitmentInformationEditState',
	default: false,
});

export const deadlineState = atom({
	key: 'deadlineState',
	default: new Date(),
});

export const recruitInputState = atom({
	key: 'recruitInputState',
	default: {
		scope: '',
		category: '',
		fieldId: 1, // 마지막에 id로 반환 (1로 고정해도 괜찮음)
		deadline: '',
		period: ['', ''],
		courseTagDto: {
			isCourse: false,
			courseTagName: '',
			courseTagProfessor: '',
		},
		recruitmentRoleDto: [
			{
				role: '', // id로 변경
				count: 0,
				skill: [], // id를 담는 배열로 변경
			},
		],
		tag: [],
		title: '',
		contents: '',
	},
});

export const validNameState = atom({
	key: 'validNameState',
	default: {
		validName: false,
		validMessage: '',
	},
});

export const validAreaState = atom({
	key: 'validAreaState',
	default: {
		validArea: false,
		validMessage: '',
	},
});

export const validFieldState = atom({
	key: 'validFieldState',
	default: {
		validField: false,
		validMessage: '',
	},
});

export const validCategoryState = atom({
	key: 'validCategoryState',
	default: {
		validCategory: false,
		validMessage: '',
	},
});

export const validDateState = atom({
	key: 'validDateState',
	default: {
		validDate: false,
		validMessage: '',
	},
});

export const applyStepState = atom({
	key: 'applyStepState',
	default: 0,
});

export const applyInfoState = atom({
	key: 'applyInfoState',
	default: {
		role: '',
		message: '',
	},
});

export const searchPageState = atom({
	key: 'searchPageState',
	default: false,
});
