import { atom } from 'recoil';
import { SessionStorageEffect, simpleDate } from './utils';
import { User, InputState, ApplyRole } from './types';
import { LocalStorageEffect } from './utils';
import { Account } from './pages';

const date = new Date();
const simple = simpleDate(date);

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

export const applyModalState = atom({
	key: 'applyModalState',
	default: false,
});

export const recruitInputState = atom<InputState>({
	key: 'recruitInputState',
	default: {
		scope: '',
		category: '',
		fieldId: 1,
		deadline: simple,
		period: [simple, simple],
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

export const validMessageState = atom({
	key: 'validMessageState',
	default: {
		scope: '',
		category: '',
		deadline: '',
		endDate: '',
		courseTagDto: {
			courseTagName: '',
			courseTagProfessor: '',
		},
		tag: '',
		title: '',
	},
});

export const validState = atom({
	key: 'validState',
	default: {
		isSubmitted: false,
		isScope: false,
		isCategory: false,
		isDeadline: false,
		isEndDate: false,
		isCourseTagDto: {
			courseTagName: false,
			courseTagProfessor: false,
		},
		isTag: false,
		isTitle: false,
	},
});

export const applyStepState = atom({
	key: 'applyStepState',
	default: 0,
});

export const applyUserInfo = atom<ApplyRole>({
	key: 'applyUserInfo',
	default: {
		name: '',
		score: 0,
		universityName: '',
		departmentName: '',
		email: '',
		year: 0,
		role: {
			applyRoleId: 0,
			name: '',
		},
		message: '' as string | undefined,
	},
});

export const searchPageState = atom({
	key: 'searchPageState',
	default: false,
});
