import styled from 'styled-components';

const CommentInput = styled.div`
	.user-input {
		display: flex;
		gap: 2.1rem;

		.user-input__icon {
			width: 3.15rem;
			height: 3.15rem;
			flex-shrink: 0;
		}

		.user-input__container {
			display: flex;
			gap: 1rem;
			margin: 0 auto;

			input {
				width: 85.15rem;
				height: 3.75rem;
				flex-shrink: 0;
				border-radius: 0.75rem;
				border: 0.75px solid #bebebe;
				background: #fff;
				outline: none;
				padding-left: 1.3rem;
			}

			button {
				display: flex;
				width: 6.7rem;
				height: 3.75rem;
				padding: 0.75rem;
				justify-content: center;
				align-items: center;
				gap: 0.75rem;
				flex-shrink: 0;
				border-radius: 0.6rem;
				background: var(--main-color, #5877fc);
				border: none;
				outline: none;
				color: #fff;
				cursor: pointer;
			}
		}
	}
`;

const S = { CommentInput };

export default S;
