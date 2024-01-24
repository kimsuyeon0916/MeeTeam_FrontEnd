import styled from 'styled-components';
import signIn from '../signIn/SignInPage.styled';
const SchoolCertificationLayout = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 7.5rem;
	align-items: center;
	justify-content: center;
	margin: 15rem auto;
	letter-spacing: 0.015rem;
	font-weight: 400;
	color: var(--text-color-2, #373f41);
	font-size: 1.5rem;

	.school-certification__header {
		position: relative;
		display: flex;
		line-height: 4.2rem;
		color: var(--text-color, #151515);
		font-size: 2.7rem;
	}

	b {
		font-weight: 600;
	}
`;

const SchoolCertificationPageForm = styled.form`
	display: flex;
	flex-direction: column;
	row-gap: 10rem;

	.school-certification_form-row {
		display: flex;
		flex-direction: column;
		row-gap: 1.35rem;
		width: 34.8rem;
	}

	.school-certification__label {
		display: flex;
		flex-direction: column;
		row-gap: 0.81rem;
	}

	.school-certification__input {
		all: unset;
		display: flex;
		flex: 1;
		align-items: center;
		padding: 1.5rem;
		border-radius: 0.75rem;
		border: 0.75px solid var(--box_stroke, #e3e3e3);
		background: #f9f9f9;
		cursor: text;
	}
`;

const SchoolCertificationButton = styled(signIn.SignInPageButton)`
	width: 16.5rem;
	margin: 0 auto;
`;

const S = { SchoolCertificationLayout, SchoolCertificationPageForm, SchoolCertificationButton };

export default S;
