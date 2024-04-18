import React, { useState } from 'react';
import S from './ApplicantView.styled';
import { SMALL_BOTTOM_ARROW_ICON, SMALL_TOP_ARROW_BUTTON, applicantList } from '../../../..';

const ApplicantView = () => {
	const decideUniqueRoles = () => {
		return Array.from(
			new Set(applicantList.map(applicant => JSON.stringify(applicant.role))),
			json => JSON.parse(json)
		).sort();
	};

	const countApplicants = (role: string) => {
		return applicantList.filter(applicant => applicant.role?.[0] === role).length;
	};

	const [fold, setFold] = useState(new Array(decideUniqueRoles.length).fill(false));

	const clickHandler = (index: number) => {
		const updateFold = [...fold];
		updateFold[index] = !updateFold[index];
		setFold([...updateFold]);
	};

	const decideApplicants = (role: string[]) => {
		return applicantList.filter(applicant => applicant.role?.toString() === role.toString());
	};

	return (
		<S.ApplicantViewLayout>
			<S.ApplicantViewHeader>
				<h2 className='main--big-text'>신청자 목록</h2>
			</S.ApplicantViewHeader>
			<ul className='applicant-view__column'>
				{decideUniqueRoles().map((role, index) => (
					<li className='application-view__card-column' key={index}>
						<S.ApplicantViewRoleBox
							$color={role?.[1]}
							key={index}
							onClick={() => clickHandler(index)}
						>
							{role?.[0] + ` (${countApplicants(role?.[0])}명)`}
							{fold[index] ? SMALL_BOTTOM_ARROW_ICON : SMALL_TOP_ARROW_BUTTON}
						</S.ApplicantViewRoleBox>
						{!fold[index] && (
							<div className='application-view__grid'>
								{/* {decideApplicants(role).map((applicant, index) => (
									<ApplicantCard applicant={applicant} key={index} />
								))} */}
							</div>
						)}
					</li>
				))}
			</ul>
		</S.ApplicantViewLayout>
	);
};

export default ApplicantView;
