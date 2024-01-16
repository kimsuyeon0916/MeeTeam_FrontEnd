import React from 'react';
import S from './Recruitment.styeld';
import {
	ApplicantView,
	RecruitmentInformation,
	RecruitmentDeadLine,
	recruitmentInformation,
} from '../../..';
import { useRecoilValue } from 'recoil';
import { recruitmentState } from '../../../../atom';

const Recruitment = () => {
	const recruitment = useRecoilValue(recruitmentState);

	return (
		<S.RecruitmentLayout>
			<RecruitmentDeadLine />
			{recruitmentInformation.title !== '' ? (
				<>
					<RecruitmentInformation />
					<ApplicantView />{' '}
				</>
			) : recruitment ? (
				<RecruitmentInformation />
			) : (
				''
			)}
		</S.RecruitmentLayout>
	);
};

export default Recruitment;
