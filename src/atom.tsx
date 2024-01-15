import { atom } from 'recoil';

export const contentState = atom({
	key: 'contentState',
	default: '대시보드',
});

export const recruitmentState = atom({
	key: 'recruitmentState',
	default: false,
});

export const recruitmentInformationEditState = atom({
	key: 'recruitmentInformationEditState',
	default: false,
});
