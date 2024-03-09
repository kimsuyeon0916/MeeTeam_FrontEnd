import React from 'react';
import { RecruitDescription } from '../../../../types';
import S from './RecruitDescription.styled';

const RecruitDescription = ({ content }: RecruitDescription) => {
	return (
		<S.RecruitDescription>
			<h3>상세내용</h3>
			<hr />
			<section>
				<p>{content}</p>
			</section>
		</S.RecruitDescription>
	);
};

export default RecruitDescription;
