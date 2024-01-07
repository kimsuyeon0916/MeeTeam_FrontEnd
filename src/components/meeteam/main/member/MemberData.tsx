import React from 'react';

interface memberProps {
	nickName: string;
	imageUrl: string;
	profileUrl: '';
	authority: string;
	role: string;
	task: string;
	school: string;
	introduction: string;
	specifications: string[];
}
export type { memberProps };

const memberList: memberProps[] = [
	{
		nickName: '송지원',
		imageUrl:
			'https://s3-alpha-sig.figma.com/img/3d31/266c/b4e2b4773a0682af9a42fabb250a9d02?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qC5PZhbiAkagPfqIoP~LJjgNXrXUmiGKYu4BeXB3UqsGJrSaUHSjylp0AW9e5oePJFWkIcnLPVoMAepsA5gaqJ3Z~uMuA1EqbG2QzL3d-gv2IE1j5596L6nnqsZPSWA0p7L9mnh0O8AD5ZcE3t9Z8BUWEbFhrlCqTnDWyUG2tAn9MnvocmeLofGFfPumyYvTEFmgZXblig~dZ5zuioR4iTjbwkSJewkIPFUMOyClEjNmMDHFzl-gGZnqQOcPBkTMCzJw30MP6NaxQKPrBzLtgYIYikKyt2xSl3N0msk-l1yKrMHb2xN4Ib0D806GlCdibaulPgqXrIHKXU4SCzm94A__',
		profileUrl: '',
		authority: '리더',
		role: '디자이너',
		task: '디자인',
		school: '세종대학교',
		introduction: '열심히 하겠습니다!☺️',
		specifications: ['Figma'],
	},
	{
		nickName: '김수연',
		imageUrl:
			'https://s3-alpha-sig.figma.com/img/af42/75de/a21e2b04d7b7aaec5f28132b3d92997e?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wh~7CHTxJSGxEGT70Jwm6sAtY0br4uNK2bn0GoE9SXSBdYnIldlh~uZdkgIMxfOP2vsnbGWJLzwY3CZJ05Iv45xcS14cZ0JHszSshCJCAXXpS7zgIi07Ze8dMg~kuEfEk8PFJzUrFv~gxoS7q0YocLDawN~lzUVzt1vLywF3qvOE0SUNVC~4b83ZzeIlPXK-AyyulaXz2O8c6-LsOufMw0jyAgp~-DoxRUeqrVlQmtBzOtJtPPcD2X94diA4sggeLWmro63a0hOP0i9XbIMO8JR8hV8-Y7mcLuvp-PmcvPW7AFFWKLGaQZ8eeuupuQ7bHzD8H7TctLk4gEVyGDHQDA__',
		profileUrl: '',
		authority: '멤버',
		role: '프론트엔드 개발자',
		task: '프론트엔드 개발',
		school: '광운대학교',
		introduction: '열심히 하겠습니다!☺️',
		specifications: ['React', 'TypeScript'],
	},
	{
		nickName: '염승준',
		imageUrl:
			'https://s3-alpha-sig.figma.com/img/ee6f/b8ee/ccb283f80561bee0a48bce0fd80eb82f?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DqaRWlFp~vdpXFfivzPdz137DbYaNx6cUJsZASVSaAEifuNa5r2UthE42d3oGoUYQEjPqFGR0XwdMydHfyiYUZCpXPzW4HBf1cDP0uCPdzktfGE~nCknyO5kGZs9XK4X~34riyA2Qu3KjM6giZ5ANGqIkL7i1vAqFGfHFPHmXaYrYoA57zSLuMlOxAR4qMhgqDrGveOWTmMcgJ5YjpER7cfKNax1A4IPquoabeancCk4wO8VQIfqOHJYe6YOYeX3jPQ95mWpcrF97NyIrJYpKCQFLI~~cm2XZf2sW7SaDsIZoyRD6gIjZSPmoaNgBSRCX6In8Kd6b0wra82v~oWBog__',
		profileUrl: '',
		authority: '멤버',
		role: '프론트엔드 개발자',
		task: '프론트엔드 개발',
		school: '광운대학교',
		introduction: '열심히 하겠습니다!☺️',
		specifications: ['React', 'TypeScript'],
	},
	{
		nickName: '송민규',
		imageUrl: '',
		profileUrl: '',
		authority: '멤버',
		role: '백엔드 개발자',
		task: '백엔드 개발',
		school: '광운대학교',
		introduction: '열심히 하겠습니다!☺️',
		specifications: ['Spring', 'Java'],
	},
	{
		nickName: '나부겸',
		imageUrl: '',
		profileUrl: '',
		authority: '멤버',
		role: '백엔드 개발자',
		task: '백엔드 개발',
		school: '광운대학교',
		introduction: '열심히 하겠습니다!☺️',
		specifications: ['Spring', 'Java'],
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
	<svg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 11 11' fill='none'>
		<rect y='4.7207' width='10.5' height='1.05' rx='0.525' fill='#373F41' />
		<rect
			x='5.77344'
			width='10.5'
			height='1.05'
			rx='0.525'
			transform='rotate(90 5.77344 0)'
			fill='#373F41'
		/>
	</svg>
);

export { memberList, MEMBER_PROFILE_DEFAULT_ICON, MEMBER_PLUS_ICON };
