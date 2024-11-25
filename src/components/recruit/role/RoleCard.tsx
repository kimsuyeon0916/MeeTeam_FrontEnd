import React from 'react';
import S from './RoleCard.styled';
import { Progress } from '../..';
import { RoleInfo } from '../../../types';

const RoleCard = ({ roleName, skills, recruitCount, applicantCount, recruitedCount }: RoleInfo) => {
	return (
		<S.RoleCard>
			<section className='container-role__info'>
				<h4>{roleName}</h4>
				<section className='container-skill__tags'>
					{skills.map((skill, index) => (
						<span className='tag' key={index}>
							{skill.name}
						</span>
					))}
					{skills.length === 0 && (
						<section className='no-skills'>
							<span className='no-skills__description t2'>입력된 기술들이 없습니다!</span>
						</section>
					)}
				</section>
			</section>
			<hr />
			<section className='container-role__current'>
				<h4>현황</h4>
				<section className='apply-info'>
					<section className='people'>
						<span>모집인원</span>
						<span>{recruitCount}</span>
					</section>
					<section className='people'>
						<span>지원자 수</span>
						<span>{applicantCount}</span>
					</section>
				</section>
				<section className='progress-bar'>
					<Progress denominator={recruitCount} numerator={recruitedCount} />
					<span>{`현재 ${recruitCount}명 중 ${recruitedCount}명이 모였습니다!`}</span>
				</section>
			</section>
		</S.RoleCard>
	);
};

export default RoleCard;
