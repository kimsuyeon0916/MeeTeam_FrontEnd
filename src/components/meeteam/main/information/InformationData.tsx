import React from 'react';

interface informationProps {
	title: string;
	content: string;
}

const meeteamInformation: informationProps = {
	title: '대학생 전용 구인 및 포트폴리오 웹 서비스',
	content: `밋팀(Meeteam)은 나 자신을 의미하는 Me, 팀을 의미하는 Team, 만남을 의미하는 Meet이 합쳐진 단어입니다.\n대학생들의 보다 원활한 팀프로젝트를 위해 기획하게 되었으며, 그 외에 포토폴리오로서의 기능까지 생각하고 있습니다!\n\n☑️궁극적인 목표\n익명이든, 익명이 아니든 오픈된 프로필을 통해서 서로에 대한 충분한 정보를 바탕으로 팀원을 구하는 문화를 만들어 보는 것입니다.\n\n🎯타깃층\n팀프로젝트를 해야할 때, 목적이 맞는 팀원이 필요한 대학생`,
};

const recruitmentInformation: informationProps = {
	title: '[커뮤니티 웹 서비스 프로젝트] 디자이너 모집',
	content: `밋팀(Meeteam)은 나 자신을 의미하는 Me, 팀을 의미하는 Team, 만남을 의미하는 Meet이 합쳐진 단어입니다.\n대학생들의 보다 원활한 팀프로젝트를 위해 기획하게 되었으며, 그 외에 포토폴리오로서의 기능까지 생각하고 있습니다!\n\n☑️궁극적인 목표\n익명이든, 익명이 아니든 오픈된 프로필을 통해서 서로에 대한 충분한 정보를 바탕으로 팀원을 구하는 문화를 만들어 보는 것입니다.\n\n이를 위해 함께 멋진 서비스를 완성할 웹 디자이너를 찾고 있어요!`,
};

const BOTTOM_ARROW_ICON: JSX.Element = (
	<svg xmlns='http://www.w3.org/2000/svg' width='20' height='11' viewBox='0 0 20 11' fill='none'>
		<path
			d='M1 1.25L9.64091 9.72474C9.93668 10.0148 10.4116 10.0102 10.7016 9.71434L19 1.25'
			stroke='#7D7D7D'
			strokeWidth='1.5'
			strokeLinecap='round'
		/>
	</svg>
);

const TOP_ARROW_BUTTON: JSX.Element = (
	<svg xmlns='http://www.w3.org/2000/svg' width='20' height='11' viewBox='0 0 20 11' fill='none'>
		<path
			d='M19 10.25L10.3591 1.77526C10.0633 1.48518 9.58839 1.48984 9.29837 1.78566L1 10.25'
			stroke='#7D7D7D'
			strokeWidth='1.5'
			strokeLinecap='round'
		/>
	</svg>
);

export { meeteamInformation, recruitmentInformation, BOTTOM_ARROW_ICON, TOP_ARROW_BUTTON };
