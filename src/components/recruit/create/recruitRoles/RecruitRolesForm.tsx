import React, { useState } from 'react';
import S from './RecruitRolesForm.styled';
import { recruitInputState } from '../../../../atom';
import { useRecoilState } from 'recoil';
import { InputRole, InputRoleForm } from '../../../index';
import { useValid } from '../../../../hooks';

const RecruitRoleForm = () => {
	const [info, setInfo] = useRecoilState(recruitInputState);
	const { validMessage, isValid } = useValid(info);

	const deleteObj = (id: number | null) => {
		setInfo(prev => ({
			...prev,
			recruitmentRoles: prev.recruitmentRoles?.filter(elem => elem.roleId !== id),
		}));
	};

	console.log(info);

	return (
		<S.RecruitRoles>
			<section className='container-roles'>
				<section className='subtitle'>
					<h4>모집 역할</h4>
				</section>
				<section className='wrapper-roles'>
					<InputRoleForm />
					<article className='container-role__list'>
						{info.recruitmentRoles.map(userRole => (
							<InputRole
								key={userRole.roleId}
								role={userRole.roleName as any}
								count={Number(userRole.count)}
								skill={userRole.skills?.map(e => e.name) as any}
								onDelete={() => deleteObj(userRole.roleId)}
								id={userRole.roleId}
							/>
						))}
					</article>
					{isValid.isSubmitted && !isValid.isRole && (
						<p className='valid-msg'>{validMessage.recruitRole}</p>
					)}
				</section>
			</section>
			<hr className='under-info' />
		</S.RecruitRoles>
	);
};

export default RecruitRoleForm;
