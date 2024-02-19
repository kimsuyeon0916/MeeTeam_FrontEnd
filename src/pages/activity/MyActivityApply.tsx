import React from 'react';
import S from './MyActivityManagePage.styled';
import { ManageRecruitCard } from '../../components/index';
import { RecruitInformation } from '../../components/recruit/ManageRecruitCard';

const data: RecruitInformation[] = [
	{
		title: '[커뮤니티 웹 서비스 프로젝트] 디자이너 모집',
		type: '프로젝트',
		$recruit: true,
		$proceed: false,
	},
	{
		title: '[중고차 거래 서비스 프로젝트] 웹 개발자 모집',
		type: '프로젝트',
		$recruit: true,
		$proceed: false,
	},
	{
		title: '[자바스크립트 스터디] 스터디 인원 모집',
		type: '스터디',
		$recruit: false,
		$proceed: true,
	},
];

const MyActivityApply = () => {
	return (
		<S.MyActivityRecruit>
			<div className='container'>
				{data.map((e, index) => (
					<ManageRecruitCard
						title={e.title}
						type={e.type}
						$recruit={e.$recruit}
						$proceed={e.$proceed}
						key={index}
					/>
				))}
			</div>
		</S.MyActivityRecruit>
	);
};

export default MyActivityApply;
