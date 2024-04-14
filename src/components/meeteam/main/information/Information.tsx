import React from 'react';
import S from './Information.styled';
import MeeteamInformation from './subInformation/MeeteamInformation';
import { Issue, MeeteamLink } from '../../..';

const Information = () => {
	return (
		<S.InformationLayout>
			<MeeteamInformation />
			<div className='information__grid'>
				<Issue type='밋팀' />
				<MeeteamLink />
			</div>
		</S.InformationLayout>
	);
};

export default Information;
