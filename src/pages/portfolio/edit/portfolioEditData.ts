import { ArrowBottom, ArrowTop, Search } from '../../../assets';
import { INPUT_VALIDATION } from '../../../constant';

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

const content = {
	label: '상세 내용',
	type: 'text',
	placeholder: `나의 경험 및 경력 및 맡게 되는 역할을 작성해주세요.\n\n﹒재직시 전문적으로 담당한 업무나, 별도로 진행하신 팀 프로젝트가 있으시다면 적어주세요.\n(ex. 재직중인 회사에서, 사업기획 및 PM을 담당했습니다. 사람간의 일정조율 , 요구사항 조절에 자신이 있습니다.\n이와 별개로 총 10명정도의 규모의 팀에서 부팀장으로 역할을 담당하였고, 출시까지 한 경험이 있습니다.)\n\n﹒이 프로젝트에서 나(리더) 역할을 적어주세요.\n(ex. 전체 프로덕트의 기획 및 프로젝트 매니징을 담당하게 됩니다. 다만 한분이 더 같이 들어오셔서, 논의를 같이 했으면 좋겠습니다.)`,
	name: 'content',
	validation: INPUT_VALIDATION.content,
};

const PORTFOLIO_EDIT_DATA = {
	title,
	description,
	field,
	role,
	skills,
	content,
};

export default PORTFOLIO_EDIT_DATA;
