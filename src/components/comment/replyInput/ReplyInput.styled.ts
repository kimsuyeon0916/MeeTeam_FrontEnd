import styled from 'styled-components';

const ReplyInput = styled.div`
	display: flex;
	gap: 2rem;
	margin-left: 5rem;
	margin-top: 2rem;
	margin: 2rem 0 2rem 5rem;

	.user-input__icon {
		display: flex;
		width: 2.5rem;
	}

	.user-input__container {
		display: flex;
		width: 86%;

		.reply-input {
			width: 100%;
			box-sizing: border-box;
			height: 3.75rem;
			flex-shrink: 0;
			border-radius: 0.75rem;
			border: 0.75px solid #bebebe;
			background: #fff;
			outline: none;
			padding-left: 1.3rem;
		}

		.reply-btn {
			display: flex;
			width: 6.7rem;
			height: 3.75rem;
			padding: 0.75rem;
			justify-content: center;
			align-items: center;
			gap: 0.75rem;
			flex-shrink: 0;
			border-radius: 0.6rem;
			background: #000;
			border: none;
			outline: none;
			color: #fff;
			margin-left: 1rem;
			cursor: pointer;
		}
	}
`;

const S = { ReplyInput };

export default S;
