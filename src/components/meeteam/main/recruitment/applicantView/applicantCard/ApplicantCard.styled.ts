import styled from 'styled-components';

const ApplicantCardLayout = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 2.25rem 2.7rem;
	border-radius: 0.75rem;
	border: 0.075rem solid #cdcdcd;
	background: #fdfdfd;
	color: var(--text-color, #000);
	font-size: 0.9rem;
	font-style: normal;
	font-weight: 400;
	letter-spacing: 0.015rem;

	.applicant-card__profile-column {
		display: flex;
		flex-direction: column;
		row-gap: 0.6rem;
		align-items: center;
	}

	.applicant-card__small-text {
		font-size: 0.6rem;
		color: #858585;
	}

	.applicant-card__information-column {
		display: flex;
		flex-direction: column;
		row-gap: 0.75rem;
	}

	.applicant-card__information-row {
		display: flex;
		flex-direction: row;
		align-items: center;
		line-height: 1.08rem;
	}

	.applicant-card__label-title {
		display: flex;
		font-weight: 500;
	}

	.applicant-card__informaion-content {
		display: flex;
		flex: 3 1 0;
		text-overflow: ellipsis;
		overflow: hidden;
		word-break: break-word;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.applicant-card__label-row {
		display: flex;
		flex-direction: row;
		column-gap: 0.3rem;
		align-items: center;
		flex: 1 1 0;
	}

	.applicant-card__button-column {
		display: flex;
		flex-direction: column;
		row-gap: 0.3rem;
		margin-top: auto;
	}

	.applicant-card__button-row {
		display: flex;
		flex-direction: row;
		column-gap: 0.3rem;
	}
`;

const ApplicantCardBookMarkButton = styled.button`
	all: unset;
	position: absolute;
	top: 0.9rem;
	right: 0.9rem;
	cursor: pointer;
`;

const ApplicantCardApproveButton = styled.button`
	all: unset;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.75rem 1rem;
	border-radius: 0.3rem;
	background: var(--main-color, #5877fc);
	font-size: 1.2rem;
	color: #fff;
	cursor: pointer;
`;

const ApplicantCardRefuseButton = styled(ApplicantCardApproveButton)`
	background: #ededed;
	color: #000;
`;

const ApplicantCardProfileView = styled(ApplicantCardRefuseButton)`
	background: transparent;
	color: #000;
	border-radius: 0.3rem;
	border: 0.075rem solid rgba(95, 92, 236, 0.8);
`;

const S = {
	ApplicantCardLayout,
	ApplicantCardBookMarkButton,
	ApplicantCardApproveButton,
	ApplicantCardRefuseButton,
	ApplicantCardProfileView,
};

export default S;
