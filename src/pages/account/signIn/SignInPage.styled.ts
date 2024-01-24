import styled from 'styled-components';
import Account from '../Account.styled';

const SignInPageLayout = styled(Account.AccountLayout)`
	row-gap: 0;
	width: 34.8rem;

	.sign-in__header {
		display: flex;
		line-height: 4.2rem;
		margin-bottom: 4.49rem;
		color: var(--text-color-2, #151515);
		font-size: 2.7rem;
	}

	.sign-in__button-row {
		display: flex;
		flex-direction: row;
		column-gap: 1rem;
		margin-right: auto;
		margin-top: 1.5rem;
	}

	.sign-in__button {
		all: unset;
		font-size: 1.2rem;
		cursor: pointer;
	}

	.sign-in__social-login-marker {
		display: flex;
		flex-direction: row;
		align-items: center;
		column-gap: 0.68rem;
		margin-top: 3rem;
		font-size: 1.2rem;
	}

	.sign-in__social-login-column {
		display: flex;
		flex-direction: column;
		row-gap: 1.5rem;
	}

	.sign_in__vertical {
		all: unset;
		display: flex;
		width: 0.15rem;
		height: 1.35rem;
		background: #d9d9d9;
	}

	.sign_in__horizon {
		all: unset;
		display: flex;
		width: 12.525rem;
		height: 0.15rem;
		background: #d9d9d9;
	}
`;

const SignInPageForm = styled(Account.AccountForm)`
	display: flex;
	flex-direction: column;
	row-gap: 1.35rem;
	width: 100%;

	.sign-in__label {
		display: flex;
	}

	.sign-in__label--auto-sign-in {
		display: flex;
		flex-direction: row;
		column-gap: 0.6rem;
		font-size: 1.35rem;
	}

	.sign-in__input--auto-sign-in {
		display: flex;
		margin: 0;
		cursor: pointer;
	}
`;

const SignInPageButton = styled(Account.AccountButton)``;

const SignInPageNaverButton = styled(SignInPageButton)`
	position: relative;
	display: flex;
	width: 100%;
	background: #03c75a;
	margin-top: 0;
	border-radius: 0.45rem;

	.sign-in__naver-icon {
		position: absolute;
		display: flex;
		height: 4.875rem;
		left: 0;
	}
`;

const S = { SignInPageLayout, SignInPageForm, SignInPageButton, SignInPageNaverButton };

export default S;
