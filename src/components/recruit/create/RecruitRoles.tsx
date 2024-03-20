import React, { useState } from 'react';
import { Role } from '../../../types';
import { XBtn, Plus } from '../../../assets';

const RecruitRoles = () => {
	const [userRole, setUserRole] = useState<Role>({
		id: 0,
		role: {
			id: null,
			name: '',
		},
		count: '',
		skill: [],
	});
	return (
		<>
			<section className='container-roles'>
				<section className='subtitle'>
					<h4>모집 역할</h4>
				</section>
				<section className='container-roles__control'>
					<article className='inputs'>
						<input className='role-input' type='text' placeholder='역할' />
						<input className='count-input' type='text' placeholder='인원' />
						<section className='container-skills'>
							{userRole.skill.map((tagItem, index) => {
								return (
									<article className='container-tags' key={index}>
										<span>{tagItem}</span>
										<button type='button'>
											<img src={XBtn} id={index.toString()} />
										</button>
									</article>
								);
							})}
							<input
								type='text'
								className='skills-input'
								placeholder={'해당 역할의 보유 스킬을 검색해주세요.'}
							/>
						</section>
					</article>
					<article className='add-btn'>
						<button type='button'>
							<img src={Plus} />
						</button>
					</article>
				</section>
			</section>
			<hr className='under-info' />
		</>
	);
};

export default RecruitRoles;
