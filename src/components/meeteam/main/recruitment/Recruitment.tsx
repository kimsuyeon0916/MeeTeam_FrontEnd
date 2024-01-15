import React from 'react';
import S from './Recruitment.styeld';
import {
	ApplicantView,
	RecruitmentInformation,
	RecruitmentDeadLine,
	recruitmentInformation,
} from '../../..';
import { useRecoilState } from 'recoil';
import { recruitmentState } from '../../../../atom';

const Recruitment = () => {
	const [recruitment, setRecruitment] = useRecoilState(recruitmentState);

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
