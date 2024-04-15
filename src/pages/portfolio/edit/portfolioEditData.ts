import { ArrowBottom, ArrowTop, Search } from '../../../assets';
import { INPUT_VALIDATION } from '../../../../validation';

const title = {
	label: '포트폴리오 제목',
	type: 'text',
	placeholder: '20자 이내로 제목을 작성해주세요',
	name: 'title',
	validation: INPUT_VALIDATION.portfolioTitle,
	maxLength: 20,
};

const description = {
	label: '포트폴리오 한줄 소개',
	type: 'text',
	placeholder: '20자 이내로 한줄 소개를 작성해주세요',
	name: 'description',
	validation: INPUT_VALIDATION.portfolioDescription,
	maxLength: 20,
};

const field = {
	label: '분야',
	type: 'text',
	placeholder: '분야',
	name: 'field',
	validation: INPUT_VALIDATION.field,
	icon: {
		default: ArrowBottom,
		focus: ArrowTop,
		arrow: 'right',
	},
};

const role = {
	label: '역할',
	type: 'text',
	placeholder: '역할',
	name: 'role',
	validation: INPUT_VALIDATION.role,
	icon: {
		default: ArrowBottom,
		focus: ArrowTop,
		arrow: 'right',
	},
};

const skills = {
	label: '스킬',
	type: 'text',
	placeholder: '보유 스킬을 검색해주세요',
	name: 'skills',
	validation: INPUT_VALIDATION.skill,
	icon: {
		default: Search,
		arrow: 'right',
	},
};

const PORTFOLIO_EDIT_DATA = {
	title,
	description,
	field,
	role,
	skills,
};

export default PORTFOLIO_EDIT_DATA;
