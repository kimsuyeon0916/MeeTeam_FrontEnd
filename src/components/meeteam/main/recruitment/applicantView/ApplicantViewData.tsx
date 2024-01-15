import React from 'react';

interface Applicant {
	nickName: string;
	imageUrl: string;
	name: string;
	email: string;
	role?: string[];
	school: string;
	rate: number;
	year: number;
	comment: string;
	isBookmark?: boolean;
}
export type { Applicant };

const applicantList: Applicant[] = [
	{
		nickName: '지원투',
		imageUrl:
			'https://s3-alpha-sig.figma.com/img/3d31/266c/b4e2b4773a0682af9a42fabb250a9d02?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qC5PZhbiAkagPfqIoP~LJjgNXrXUmiGKYu4BeXB3UqsGJrSaUHSjylp0AW9e5oePJFWkIcnLPVoMAepsA5gaqJ3Z~uMuA1EqbG2QzL3d-gv2IE1j5596L6nnqsZPSWA0p7L9mnh0O8AD5ZcE3t9Z8BUWEbFhrlCqTnDWyUG2tAn9MnvocmeLofGFfPumyYvTEFmgZXblig~dZ5zuioR4iTjbwkSJewkIPFUMOyClEjNmMDHFzl-gGZnqQOcPBkTMCzJw30MP6NaxQKPrBzLtgYIYikKyt2xSl3N0msk-l1yKrMHb2xN4Ib0D806GlCdibaulPgqXrIHKXU4SCzm94A__',
		name: '송지원',
		email: 'jiwon@kw.ac.kr',
		role: ['디자인', '#F7E8FB'],
		school: '세종대학교',
		rate: 4.5,
		year: 18,
		comment: '웹 디자이너로 프로젝트를 같이 하고싶습니다!',
		isBookmark: true,
	},
	{
		nickName: 'suyeonee',
		imageUrl:
			'https://s3-alpha-sig.figma.com/img/af42/75de/a21e2b04d7b7aaec5f28132b3d92997e?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wh~7CHTxJSGxEGT70Jwm6sAtY0br4uNK2bn0GoE9SXSBdYnIldlh~uZdkgIMxfOP2vsnbGWJLzwY3CZJ05Iv45xcS14cZ0JHszSshCJCAXXpS7zgIi07Ze8dMg~kuEfEk8PFJzUrFv~gxoS7q0YocLDawN~lzUVzt1vLywF3qvOE0SUNVC~4b83ZzeIlPXK-AyyulaXz2O8c6-LsOufMw0jyAgp~-DoxRUeqrVlQmtBzOtJtPPcD2X94diA4sggeLWmro63a0hOP0i9XbIMO8JR8hV8-Y7mcLuvp-PmcvPW7AFFWKLGaQZ8eeuupuQ7bHzD8H7TctLk4gEVyGDHQDA__',
		name: '김수연',
		email: 'jiwon@kw.ac.kr',
		role: ['프론트엔드', '#EAF7FF'],
		school: '광운대학교',
		rate: 4.5,
		year: 21,
		comment: '프론트로 프로젝트를 같이 하고싶습니다!',
		isBookmark: true,
	},
	{
		nickName: 'yeom',

		imageUrl:
			'https://s3-alpha-sig.figma.com/img/ee6f/b8ee/ccb283f80561bee0a48bce0fd80eb82f?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DqaRWlFp~vdpXFfivzPdz137DbYaNx6cUJsZASVSaAEifuNa5r2UthE42d3oGoUYQEjPqFGR0XwdMydHfyiYUZCpXPzW4HBf1cDP0uCPdzktfGE~nCknyO5kGZs9XK4X~34riyA2Qu3KjM6giZ5ANGqIkL7i1vAqFGfHFPHmXaYrYoA57zSLuMlOxAR4qMhgqDrGveOWTmMcgJ5YjpER7cfKNax1A4IPquoabeancCk4wO8VQIfqOHJYe6YOYeX3jPQ95mWpcrF97NyIrJYpKCQFLI~~cm2XZf2sW7SaDsIZoyRD6gIjZSPmoaNgBSRCX6In8Kd6b0wra82v~oWBog__',
		name: '염승준',
		email: 'jiwon@kw.ac.kr',
		role: ['프론트엔드', '#EAF7FF'],
		school: '광운대학교',
		rate: 4.5,
		year: 19,
		comment: '프론트로 프로젝트를 같이 하고싶습니다!',
		isBookmark: true,
	},
	{
		nickName: 'songminkyu',
		name: '송민규',
		imageUrl: '',
		email: 'jiwon@kw.ac.kr',
		role: ['백엔드', '#E0E6FF'],
		school: '광운대학교',
		rate: 4.5,
		year: 18,
		comment: '백엔드로 프로젝트를 같이 하고싶습니다!',
		isBookmark: false,
	},
	{
		nickName: 'Goder',
		name: '나부겸',
		imageUrl: '',
		email: 'jiwon@kw.ac.kr',
		role: ['백엔드', '#E0E6FF'],
		school: '광운대학교',
		rate: 4.5,
		year: 19,
		comment: '백엔드로 프로젝트를 같이 하고싶습니다!',
		isBookmark: false,
	},
];

const SMALL_BOTTOM_ARROW_ICON = (
	<svg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none'>
		<path
			d='M1.25 1.25L6.43241 6.6716C6.7318 6.98481 7.23355 6.9799 7.52675 6.66089L12.5 1.25'
			stroke='#373F41'
			strokeWidth='1.5'
			strokeLinecap='round'
		/>
	</svg>
);

const SMALL_TOP_ARROW_BUTTON = (
	<svg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none'>
		<path
			d='M12.5 7.25L7.31759 1.8284C7.0182 1.51519 6.51645 1.5201 6.22324 1.83911L1.25 7.25'
			stroke='#373F41'
			strokeWidth='1.5'
			strokeLinecap='round'
		/>
	</svg>
);

export { applicantList, SMALL_BOTTOM_ARROW_ICON, SMALL_TOP_ARROW_BUTTON };
