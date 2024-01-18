import styled from 'styled-components';
import Main from '../../Main.styled';

const ApplicantViewLayout = styled(Main.MainArticle)`
	display: flex;
	flex-direction: column;
	font-size: 1.5rem;
	font-weight: 500;
	color: #151515;

	.applicant-view__column {
		display: flex;
		flex-direction: column;
		row-gap: 1.8rem;
		padding: 2.4rem 3.75rem;
		padding-top: 0rem;
	}

	.application-view__grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 1.8rem;
		row-gap: 1.8rem;
	}

	.application-view__card-column {
		display: flex;
		flex-direction: column;
		row-gap: 1.8rem;
	}
`;

const ApplicantViewHeader = styled.header`
	display: flex;
	align-items: center;
	padding: 2.4rem 2.55rem;
`;

const ApplicantViewRoleBox = styled.div<{ $color?: string }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.75rem 2.55rem;
	border-radius: 0.3rem;
	background: ${props => props.$color};
	cursor: pointer;
`;

const S = { ApplicantViewLayout, ApplicantViewHeader, ApplicantViewRoleBox };

export default S;
