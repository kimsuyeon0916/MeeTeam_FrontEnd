import React from 'react';
import S from './Information.styled';
import MeeteamInformation from './subInformation/MeeteamInformation';
import { Issue, Link } from '../../..';

const Information = () => {
	return (
		<S.InformationLayout>
			<MeeteamInformation />
			<div className='information__grid'>
				<Issue type={`밋팀`} />
				<Link />
			</div>
		</S.InformationLayout>
	);
};

export default Information;
