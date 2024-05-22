import React, { useRef } from 'react';
import S from './RecruitRolesForm.styled';
import { recruitInputState, warnRoleDeleteModalState } from '../../../../atom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { InputRoleForm } from '../../../index';
import { useParams } from 'react-router-dom';
import { RecruitApplicantsList } from '../../../../types';
import { BluePlus } from '../../../../assets';

const RecruitRoleForm = ({ applicantsList }: RecruitApplicantsList) => {
	const { id } = useParams();
	const pageNum = Number(id);
	const childRef = useRef<{ handleAddRole: () => void }>(null);
	const [info, setInfo] = useRecoilState(recruitInputState);
	const setWarnRoleDeleteState = useSetRecoilState(warnRoleDeleteModalState);

	const deleteObj = (id: number | null) => {
		const roleToDelete = applicantsList?.find(role => role.roleId === id);

		if (roleToDelete) {
			if (roleToDelete.applicantCount === 0) {
				setInfo(prev => ({
					...prev,
					recruitmentRoles: prev.recruitmentRoles?.filter(elem => elem.roleId !== id),
				}));
			} else {
				setWarnRoleDeleteState(true);
			}
		} else {
			setInfo(prev => ({
				...prev,
				recruitmentRoles: prev.recruitmentRoles?.filter(elem => elem.roleId !== id),
			}));
		}
	};

	const addHandler = () => {
		if (childRef.current) {
			childRef.current.handleAddRole();
		}
	};

	return (
		<S.RecruitRoles>
			<section className='container-roles'>
				<section className='subtitle'>
					<h4>모집 역할</h4>
				</section>
				<section className='wrapper-roles'>
					<span className='input-subtitle'>
						최소 1개에서 최대 10개까지 역할을 입력하세요. <span>*</span>
					</span>
					<InputRoleForm ref={childRef} />
					<article className='container-role__list'>
						{info.recruitmentRoles.map(userRole => (
							<InputRoleForm
								key={userRole.roleId}
								role={userRole.roleName}
								count={Number(userRole.count)}
								skills={userRole.skills}
								onDelete={() => deleteObj(userRole.roleId)}
								id={userRole.roleId}
							/>
						))}
					</article>
					<article className='wrapper-btn__add'>
						<img src={BluePlus} />
						<button type='button' className='btn-add h5' onClick={addHandler}>
							역할 추가
						</button>
					</article>
				</section>
			</section>
			<hr className='under-info' />
		</S.RecruitRoles>
	);
};

export default RecruitRoleForm;
