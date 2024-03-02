import React, { useState } from 'react';
import {
	InputContainer,
	Subtitle,
	MeeteamTag,
	InputRole,
	InputRoleForm,
} from '../../../../components';
import S from './RecruitInfoWrapper.styled';

interface Role {
	id: number;
	role: string;
	count: string;
	skill: string[];
}

const RecruitInfoWrapper = () => {
	const [userRoleList, setUserRoleList] = useState<Role[]>([]);

	const deleteObj = (id: number) => {
		setUserRoleList(prev => prev.filter(v => v.id !== id));
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
				</article>
				<article className='container__role'>
					<Subtitle>{'역할'}</Subtitle>
					<section className='wrapper'>
						<InputRoleForm userRoleList={userRoleList} setUserRoleList={setUserRoleList} />
						<article className='container-role__list'>
							{userRoleList.map((userRole, index) => (
								<InputRole
									key={index}
									role={userRole.role}
									count={userRole.count}
									skill={userRole.skill}
									onDelete={() => deleteObj(index)}
									id={index}
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
