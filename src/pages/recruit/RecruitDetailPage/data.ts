import { Comment } from '../../../types';

export const commentsData: Comment[] = [
	{
		id: '0',
		username: 'johny',
		content: '이거 어때?',
		replies: [
			{
				id: '0-0',
				username: 'lee',
				content: '뭘 어때 걍 하셈',
			},
			{
				id: '0-1',
				username: 'jun',
				content: '조용히하셈',
			},
		],
	},
	{
		id: '1',
		username: 'yeom',
		content: '아니 근데 왜 나도 이거 지원하고 싶다',
		replies: [
			{
				id: '1-0',
				username: 'lee',
				content: '하셈',
			},
			{
				id: '1-1',
				username: 'jun',
				content: '바로 탈락하쥬?ㅋ',
			},
		],
	},
];
