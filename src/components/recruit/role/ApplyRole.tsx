import React from 'react';
import S from './ApplyRole.styled';
import Progress from '../../progressBar/Progress';

const ApplyRole = () => {
	return (
		<S.RoleCurrentCard>
			<section className='container-role__info'>
				<span className='body2-semibold'>{'기획자'} 현황</span>
			</section>
			<section className='container-role__current'>
				<section className='apply-info'>
					<section className='people'>
						<span>모집인원</span>
						<span>{4}</span>
					</section>
					<section className='people'>
						<span>합류 인원</span>
						<span>{2}</span>
					</section>
				</section>
				<section className='progress-bar'>
					<Progress denominator={4} numerator={2} />
					<span>{`현재 ${4}명 중 ${2}명이 모였습니다!`}</span>
				</section>
			</section>
		</S.RoleCurrentCard>
	);
};

export default ApplyRole;
