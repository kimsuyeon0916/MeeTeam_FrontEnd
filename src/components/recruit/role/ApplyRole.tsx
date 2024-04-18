import React from 'react';
import S from './ApplyRole.styled';
import Progress from '../../progressBar/Progress';

interface ApplyRoleInfo {
	approvedMemberCount: number;
	recruitMemberCount: number;
	roleName: string;
}

const ApplyRole = ({ approvedMemberCount, recruitMemberCount, roleName }: ApplyRoleInfo) => {
	return (
		<S.RoleCurrentCard>
			<section className='container-role__info'>
				<span className='body2-semibold'>{roleName} 현황</span>
			</section>
			<section className='container-role__current'>
				<section className='apply-info'>
					<section className='people'>
						<span>모집인원</span>
						<span>{recruitMemberCount}</span>
					</section>
					<section className='people'>
						<span>합류 인원</span>
						<span>{approvedMemberCount}</span>
					</section>
				</section>
				<section className='progress-bar'>
					<Progress denominator={recruitMemberCount} numerator={approvedMemberCount} />
					<span>{`현재 ${recruitMemberCount}명 중 ${approvedMemberCount}명이 모였습니다!`}</span>
				</section>
			</section>
		</S.RoleCurrentCard>
	);
};

export default ApplyRole;
