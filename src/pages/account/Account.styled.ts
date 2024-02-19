import styled from 'styled-components';

const AccountLayout = styled.div`
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

	.account__header {
		position: relative;
		display: flex;
		line-height: 4.2rem;
		color: var(--text-color, #151515);
		font-size: 2.7rem;
	}
`;

const AccountForm = styled.form`
	display: flex;
	flex-direction: column;
	row-gap: 10rem;
	width: 34.8rem;

	.account__label {
		display: flex;
		flex-direction: column;
		row-gap: 0.81rem;

		&:focus-within {
			color: var(--main-color, #5877fc);
		}
	}

	.account__input {
		all: unset;
		display: flex;
		flex: 1;
		align-items: center;
		padding: 1.5rem;
		border-radius: 0.75rem;
		border: 0.15rem solid var(--box_stroke, #e3e3e3);
		// background: #f9f9f9;
		cursor: text;
		caret-color: var(--main-color, #5877fc);

		&:focus {
			color: var(--text-color-2, #373f41);
			border-color: var(--main-color, #5877fc);
		}
	}

	.account__form-row {
		display: flex;
		flex-direction: column;
		row-gap: 1.5rem;
		width: 34.8rem;
	}

	.account_input-validation {
		font-size: 1.2rem;
		color: var(--main-color, #747b7f);
	}
`;

const AccountButton = styled.button`
	all: unset;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 0.45rem;
	height: 4.875rem;
	border-radius: 7.5rem;
	background: var(--main-color, #5877fc);
	color: #fff;
	font-size: 1.5rem;
	font-weight: 500;
	line-height: 1.35rem;
	cursor: pointer;
`;

const S = { AccountLayout, AccountForm, AccountButton };

export default S;
