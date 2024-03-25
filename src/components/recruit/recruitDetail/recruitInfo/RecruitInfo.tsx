import React from 'react';
import { RecruitInfo } from '../../../../types';
import S from './RecruitInfo.styled';

const RecruitInfo = ({
	deadline,
	period,
	scope,
	courseName,
	category,
	proceedType,
	courseProfessor,
	dDay,
}: RecruitInfo) => {
	const translateValue = (value: string) => {
		switch (value) {
			case 'PROJECT':
				return '프로젝트';
			case 'STUDY':
				return '스터디';
			case 'ON_LINE':
				return '온라인';
			case 'OFF_LINE':
				return '오프라인';
			case 'ON_CAMPUS':
				return '교내';
			case 'OFF_CAMPUS':
				return '교외';
			default:
				return value;
		}
	};
	return (
		<S.RecruitInfo className='wrapper-info'>
			<section className='container-info'>
				<section className='subtitles'>
					<span>구인마감</span>
					<span>범위</span>
					<span>진행기간</span>
					<span>수업명</span>
				</section>
				<section className='values'>
					<section>
						<span>{deadline}</span>
						<span>{`마감 ${dDay}일 전`}</span>
					</section>
					<span>{translateValue(scope)}</span>
					<span>{period}</span>
					<span>{courseName ? courseName : '-'}</span>
				</section>
			</section>
			<section className='container-info'>
				<section className='subtitles'>
					<span>유형</span>
					<span>진행방식</span>
					<span>교수명</span>
				</section>
				<section className='values'>
					<span>{translateValue(category)}</span>
					<span>{translateValue(proceedType)}</span>
					<span>{courseProfessor !== null ? courseProfessor : '-'}</span>
				</section>
			</section>
		</S.RecruitInfo>
	);
};

export default RecruitInfo;
