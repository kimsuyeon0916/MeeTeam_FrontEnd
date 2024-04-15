import { atom } from 'recoil';
import { SessionStorageEffect, simpleDate } from './utils';
import { User, InputState, ApplyRole, RecruitFilter, DetailedFilter } from './types';
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

export const applyCancelModalState = atom({
	key: 'applyCancelModalState',
	default: false,
});

export const applyCloseModalState = atom({
	key: 'applyCloseModalState',
	default: false,
});

export const commentDeleteModalState = atom({
	key: 'commentDeleteModalState',
	default: false,
});

export const replyDeleteModalState = atom({
	key: 'replyDeleteModalState',
	default: false,
});

export const waitModalState = atom({
	key: 'waitModalState',
	default: false,
});

export const recruitInputState = atom<InputState>({
	key: 'recruitInputState',
	default: {
		scope: '',
		category: '',
		fieldId: 1,
		deadline: simpleDate(new Date()),
		proceedType: '',
		proceedingStart: simpleDate(new Date()),
		proceedingEnd: simpleDate(new Date()),
		courseTag: {
			isCourse: false,
			courseTagName: '',
			courseProfessor: '',
		},
		recruitmentRoles: [],
		tags: [],
		title: '',
		content: '',
	},
});

export const validMessageState = atom({
	key: 'validMessageState',
	default: {
		scope: '',
		category: '',
		deadline: '',
		endDate: '',
		content: '',
		procedure: '',
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
		isProcedure: false,
		isTag: false,
		isTitle: false,
		isContent: false,
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

export const detailedFilterState = atom<DetailedFilter>({
	key: 'detailedFilterState',
	default: {
		skill: [],
		role: [],
		tag: [],
	},
});

export const recruitFilterState = atom<RecruitFilter>({
	key: 'recruitFilter',
	default: {
		scope: null,
		category: null,
		field: 1,
		skill: [],
		role: [],
		tag: [],
		keyword: '',
		course: null,
		professor: null,
	},
});

export const applicantHolder = atom({
	key: 'applicantApproved',
	default: [] as number[],
});

export const applicantFilter = atom({
	key: 'applicantFilter',
	default: null as number | null,
});

export const imageNameState = atom({
	key: 'imageNameState',
	default: '',
});
