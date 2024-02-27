import React from 'react';
import { MemberCard } from '../../../index';
import { useRecoilState } from 'recoil';

export interface MeeTeamMember {
	nickName: string;
	imageUrl: string;
	email: string;
	phone?: '';
	authority?: string;
	role?: string[];
	task?: string;
	school: string;
	introduction: string;
	specifications: string[][];
	id?: string;
}

interface Member {
	id: string;
}

const memberList: MeeTeamMember[] = [
	{
		nickName: '지원투',
		imageUrl:
			'https://s3-alpha-sig.figma.com/img/3d31/266c/b4e2b4773a0682af9a42fabb250a9d02?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TktynfgbHdnilaMCkMMl5PICIApL8Bk1Vmhez9IYih8JfPbQ3akPmgpK8y0T9kBLNSx6mx6TuOd7d8WOCblUl1PIlrRlfvMPPb5GjFiP0l8321tgRCTQFfjnl8m1SM9Ux789Rv7q7SAFin9GdTWBcb6E1SgfdBY8oKAthbBKl2o0ekcXA5bmrEjdZAMUe1zVO289tyXCYJWBIEVM7NStSCYJW3vy1OQroHr7THPma8mow-8wj9bOR0prlQIPdazKjlBeDVxI2j4gxam1ifGFla~J8WhN3edDGbK4uyMqxiLX6R53PwZx1LhOPdsdL6LEGTk4TWrXqQlddaKGe0hxyA__',
		email: 'jiwon@kw.ac.kr',
		phone: '',
		authority: '리더',
		role: ['디자인', '#F7E8FB'],
		task: '디자이너',
		school: '세종대학교',
		introduction: '열심히 하겠습니다!☺️',
		specifications: [['Figma', `#E0E6FF`]],
	},
	{
		nickName: 'suyeonee',
		imageUrl:
			'https://s3-alpha-sig.figma.com/img/af42/75de/a21e2b04d7b7aaec5f28132b3d92997e?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KKcq1JCXEgi8bfb8UA1EG-RhNzmdLtjuTTBeas4fgE8rQrIdTg4iIFXP4FvxqyGnIg7Ti2jJS0fiEt6E9KorpQzpi9QQqBvMYeOpGXcolWK~mlvkwupLZFB7kTr~sl7U-ag5m3NPfMg~klbBIwC7nEEZ9znKrRPLFKG5aYCztPT1bJFfGOThd~joRH7efYte6ee9sGVq983Yu6Voy3mt-koZEiGnNMdpnVuDRrlrN8JVgXF-uIBmq7G06pyTVG-fxMg-XKW~UDHOAYesyK93QFNw01HRDgy0DlTqAJIfQmXKA7IhdtrJ8KfNAkQHMcUgbDY40Uw6Baah0WEcF0dVaw__',
		email: 'jiwon@kw.ac.kr',
		phone: '',
		authority: '멤버',
		role: ['프론트엔드', '#EAF7FF'],
		task: '프론트엔드 개발자',
		school: '광운대학교',
		introduction: '열심히 하겠습니다!☺️',
		specifications: [
			['React', `#E0E6FF`],
			['TypeScript', `#E4F9D0`],
		],
	},
	{
		nickName: 'yeom',
		imageUrl:
			'https://s3-alpha-sig.figma.com/img/ee6f/b8ee/ccb283f80561bee0a48bce0fd80eb82f?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J8Pq6GETzgjxFhFqQ6bK6M9LJyxbg6JvlRwN7m2t5UsLhaJhteMJHP1RP9Fj6JiyNOeS4FBniM0BhM-dtcufUh53R0~69wlZVjUM7ptTZjI3MIgdweB3YXJQqU2Cc2XxNzJVy9Ck8b92YMRdFv80OJ-oYM0twD5gdAV7nOWEZbemjYmfSaQmFSiyBqwLvUIIQHeiZ0jY7384ipkln0XxbIjyl-XS95JbaNh5ijnPRY-BcBYPSZBAytTnuskFi7YeoAypX0rUgiiVmswA5MMWuh4YO5UE9nPb7SF~7Ubao9MHrcQYn6N3mHTNGV2VD6QEgqi9NZQ6fUH6fOF2RAHFig__',
		email: 'jiwon@kw.ac.kr',
		phone: '',
		authority: '멤버',
		role: ['프론트엔드', '#EAF7FF'],
		task: '프론트엔드 개발자',
		school: '광운대학교',
		introduction: '열심히 하겠습니다!☺️',
		specifications: [
			['React', `#E0E6FF`],
			['TypeScript', `#E4F9D0`],
		],
	},
	{
		nickName: 'songminkyu',
		imageUrl: '',
		email: 'jiwon@kw.ac.kr',
		phone: '',
		authority: '멤버',
		role: ['백엔드', '#E0E6FF'],
		task: '백엔드 개발자',
		school: '광운대학교',
		introduction: '열심히 하겠습니다!☺️',
		specifications: [
			['Spring', `#E0E6FF`],
			['Java', `#E4F9D0`],
		],
	},
	{
		nickName: 'Goder',
		imageUrl: '',
		email: 'jiwon@kw.ac.kr',
		phone: '',
		authority: '멤버',
		role: ['백엔드', '#E0E6FF'],
		task: '백엔드 개발자',
		school: '광운대학교',
		introduction: '열심히 하겠습니다!☺️',
		specifications: [
			['Spring', `#E0E6FF`],
			['Java', `#E4F9D0`],
		],
	},
];

const MEMBER_PROFILE_DEFAULT_ICON = (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='1 1 45 45'>
		<path
			d='M23.2472 46.625C35.8793 46.625 46.1195 36.3835 46.1195 23.75C46.1195 11.1165 35.8793 0.875 23.2472 0.875C10.6152 0.875 0.375 11.1165 0.375 23.75C0.375 36.3835 10.6152 46.625 23.2472 46.625Z'
			fill='#D9D9D9'
		/>
		<ellipse cx='23.0149' cy='20.6407' rx='6.94064' ry='6.94149' fill='#878787' />
		<mask id='mask0_2884_2397' maskUnits='userSpaceOnUse' x='0' y='1'>
			<ellipse cx='23.259' cy='23.75' rx='22.4972' ry='22.5' fill='#D9D9D9' />
		</mask>
		<g mask='url(#mask0_2884_2397)'>
			<ellipse cx='23.2566' cy='44.3346' rx='14.8386' ry='14.8404' fill='#878787' />
		</g>
	</svg>
);

const MEMBER_PLUS_ICON = (
	<svg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 11 11'>
		<rect y='4.7207' width='10.5' height='1.05' rx='0.525' />
		<rect x='5.77344' width='10.5' height='1.05' rx='0.525' transform='rotate(90 5.77344 0)' />
	</svg>
);

const MEMBER_PLUS_CARD = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='100%'
		height='13.5rem'
		viewBox='0 0 230 138'
		fill='none'
	>
		<rect
			x='0.375'
			y='1.125'
			width='99%'
			height='100%'
			rx='7.125'
			fill='#FDFDFD'
			stroke='#CDCDCD'
			strokeWidth='0.75'
			strokeDasharray='9 9'
		/>
		<g opacity='0.8'>
			<rect x='104.25' y='67.4961' width='15' height='1.5' rx='0.75' fill='#373F41' />
			<rect
				x='112.492'
				y='60.75'
				width='15'
				height='1.5'
				rx='0.75'
				transform='rotate(90 112.492 60.75)'
				fill='#373F41'
			/>
		</g>
	</svg>
);

const MEMBER_BOTTOM_ARROW_ICON = (
	<svg xmlns='http://www.w3.org/2000/svg' width='13' height='8' viewBox='0 0 13 8' fill='none'>
		<path
			d='M1 1.25L5.78223 6.6103C6.08434 6.94893 6.61564 6.94377 6.91112 6.59933L11.5 1.25'
			stroke='#373F41'
			strokeWidth='1'
			strokeLinecap='round'
		/>
	</svg>
);

const MemberTest = ({ id }: Member) => {
	const memberTemp: MeeTeamMember = {
		nickName: '송지원',
		imageUrl:
			'https://s3-alpha-sig.figma.com/img/3d31/266c/b4e2b4773a0682af9a42fabb250a9d02?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TktynfgbHdnilaMCkMMl5PICIApL8Bk1Vmhez9IYih8JfPbQ3akPmgpK8y0T9kBLNSx6mx6TuOd7d8WOCblUl1PIlrRlfvMPPb5GjFiP0l8321tgRCTQFfjnl8m1SM9Ux789Rv7q7SAFin9GdTWBcb6E1SgfdBY8oKAthbBKl2o0ekcXA5bmrEjdZAMUe1zVO289tyXCYJWBIEVM7NStSCYJW3vy1OQroHr7THPma8mow-8wj9bOR0prlQIPdazKjlBeDVxI2j4gxam1ifGFla~J8WhN3edDGbK4uyMqxiLX6R53PwZx1LhOPdsdL6LEGTk4TWrXqQlddaKGe0hxyA__',
		email: 'jiwon@kw.ac.kr',
		phone: '',
		authority: '리더',
		role: ['디자인', '#F7E8FB'],
		task: '디자이너',
		school: '세종대학교',
		introduction: '열심히 하겠습니다!☺️',
		specifications: [['Figma', `#E0E6FF`]],
		id: id,
	};

	return (
		<div className='member' id={id}>
			<MemberCard member={memberTemp} />
			<div className='delete' id={id}>
				x
			</div>
		</div>
	);
};

export {
	memberList,
	MEMBER_PROFILE_DEFAULT_ICON,
	MEMBER_PLUS_ICON,
	MEMBER_PLUS_CARD,
	MEMBER_BOTTOM_ARROW_ICON,
	MemberTest,
};
