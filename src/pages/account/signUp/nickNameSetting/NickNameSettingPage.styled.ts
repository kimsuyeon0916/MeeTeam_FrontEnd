import styled from 'styled-components';
import SignIn from '../../signIn/SignInPage.styled';

const NickNameSettingPageLayout = styled.div`
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

	.nick-name-setting__header {
		position: relative;
		display: flex;
		line-height: 4.2rem;
		color: var(--text-color, #151515);
		font-size: 2.7rem;
	}

	h1 {
		text-align: center;
		white-space: pre-wrap;
	}
`;

const NickNameSettingPageForm = styled.form`
	display: flex;
	flex-direction: column;
	row-gap: 10.5rem;
	width: 34.8rem;

	.nick-name-setting__label {
		display: flex;
		flex-direction: column;
		row-gap: 0.81rem;
	}

	.nick-name-setting__input {
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

const NickNameSettingButton = styled(SignIn.SignInPageButton)`
	width: 16.5rem;
	margin: 0 auto;
`;

const S = { NickNameSettingPageLayout, NickNameSettingPageForm, NickNameSettingButton };

export default S;
