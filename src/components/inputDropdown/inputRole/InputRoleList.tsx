import React from 'react';
import { Role } from '../../../types';
import InputRole from './InputRole';

const InputRoleList = ({ userRoleList }: Role[]) => {
	const deleteObj = (id: number) => {
		setUserRoleList(prev => prev.filter(v => v.id !== id));
	};
	return (
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
	);
};

export default InputRoleList;
