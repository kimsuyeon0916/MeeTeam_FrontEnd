import React, { useState } from 'react';
import {
	InputContainer,
	Subtitle,
	MeeteamTag,
	InputRole,
	InputRoleForm,
} from '../../../../components';
import S from './RecruitInfoWrapper.styled';
import { useRecoilValue } from 'recoil';
import { useValid } from '../../../../hooks';
import { recruitInputState } from '../../../../atom';
import { Role } from '../../../../types';

const RecruitInfoWrapper = () => {
	const [userRoleList, setUserRoleList] = useState<Role[]>([]);
	const formData = useRecoilValue(recruitInputState);
	const { validMessage, isValid } = useValid(formData);

	const deleteObj = (id: string) => {
		setUserRoleList(prev => prev.filter(elem => elem.role.name !== id));
	};
	return (
		<S.RecruitInfoWrapper>
			<section className='container'>
				<article className='container__info'>
					<InputContainer />
				</article>
				<article className='container__tag'>
					<Subtitle>{'태그'}</Subtitle>
					<MeeteamTag />
					{isValid.isSubmitted && !isValid.isTag && <p>{validMessage.tag}</p>}
				</article>
				<article className='container__role'>
					<Subtitle>{'역할'}</Subtitle>
					<section className='wrapper'>
						<InputRoleForm userRoleList={userRoleList} setUserRoleList={setUserRoleList} />
						<article className='container-role__list'>
							{userRoleList.map((userRole, index) => (
								<InputRole
									key={userRole.role.name}
									role={userRole.role.name}
									count={Number(userRole.count)}
									skill={userRole.skill}
									onDelete={() => deleteObj(userRole.role.name)}
									id={userRole.role.name}
								/>
							))}
						</article>
					</section>
				</article>
			</section>
		</S.RecruitInfoWrapper>
	);
};

export default RecruitInfoWrapper;
