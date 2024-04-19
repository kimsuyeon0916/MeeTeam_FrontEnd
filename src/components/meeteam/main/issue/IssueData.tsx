import React from 'react';

interface Issue {
	title: string;
	timeStamp: string;
	content: string;
}

const issueList: Issue[] = [
	{
		title: '구인 현황',
		timeStamp: '23.12.25',
		content: '수연님이 구인글을 수정했습니다.',
	},
	{
		title: '구인 현황',
		timeStamp: '23.12.25',
		content: '승준님이 구인글을 수정했습니다.',
	},
	{
		title: '밋팀',
		timeStamp: '23.12.25',
		content: '부겸님이 밋팀 정보를 수정했습니다.',
	},
	{
		title: '밋팀',
		timeStamp: '23.12.25',
		content: '민규님이 밋팀 정보를 수정했습니다.',
	},
	{
		title: '밋팀',
		timeStamp: '23.12.25',
		content: '지원님이 밋팀 정보를 수정했습니다.',
	},
];

const ISSUE_RIGHT_ARROW_ICON = (
	<svg xmlns='http://www.w3.org/2000/svg' width='8' height='13' viewBox='0 0 8 13' fill='none'>
		<path
			d='M0.875001 11.6113L6.2353 6.8291C6.57393 6.52698 6.56877 5.99569 6.22432 5.70021L0.875 1.11133'
			strokeLinecap='round'
		/>
	</svg>
);

export { issueList, ISSUE_RIGHT_ARROW_ICON };
