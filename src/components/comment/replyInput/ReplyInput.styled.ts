import styled from 'styled-components';

const ReplyInput = styled.div`
	width: 100%;

	.wrapper {
		display: flex;
		gap: 1rem;
		width: 100%;
		margin: 1rem 2rem 1.6rem 0;

		.user-input__icon {
			display: flex;
			margin-left: -0.45rem;
		}

		.user-input__container {
			display: flex;
			justify-content: space-between;
			width: 100%;
			position: relative;
			margin-right: 4.8rem;

			.reply-input {
				width: 100%;
				box-sizing: border-box;
				height: 3.75rem;
				border-radius: 0.75rem;
				border: 0.75px solid #bebebe;
				background: #fff;
				outline: none;
				padding-left: 1.3rem;
			}
		}
	}

	.btn-container {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin: 0 4.8rem 1.6rem 0;
		gap: 1.2rem;

		.txt-small {
			color: #f7faff;
			font-size: 1.4rem;
			line-height: 1.7rem;
			letter-spacing: 0.0028rem;
		}

		button {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 3.6rem;
			padding: 1.2rem 2rem;
			border-radius: 0.6rem;
		}

		.cancel-btn {
			color: #373f41;
			border: 1px solid #e3e3e3;
			background: #fff;
		}

		.reply-btn {
			background: #5877fc;
		}
	}
`;

const S = { ReplyInput };

export default S;
