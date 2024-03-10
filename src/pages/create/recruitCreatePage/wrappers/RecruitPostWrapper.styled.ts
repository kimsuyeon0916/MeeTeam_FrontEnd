import styled from 'styled-components';

const RecruitPostWrapper = styled.section`
	.title {
		display: flex;
		flex-direction: column;
		margin-top: 4rem;

		input {
			width: 48%;
			height: 4.875rem;
			flex-shrink: 0;
			border-radius: 0.75rem;
			border: 0.1rem solid #e3e3e3;
			background: #fff;
			outline: none;
			padding-left: 2.1rem;
			box-sizing: border-box;
			margin-top: 1.2rem;
		}
	}

	.container__intro {
		margin-top: 4rem;
		div:nth-child(1) {
			margin-top: 1.2rem;
			.editor {
				background-color: #fff;
				border-radius: 0.1rem;
			}
		}

		.ql-container.ql-snow {
			border: 0.1rem solid #e3e3e3;
			border-bottom-right-radius: 0.75rem;
			border-bottom-left-radius: 0.75rem;
			height: 30.825rem;
		}

		.ql-toolbar.ql-snow {
			border: 0.75px solid #e3e3e3;
			border-top-right-radius: 0.75rem;
			border-top-left-radius: 0.75rem;
			box-sizing: border-box;
			font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
			padding: 0.8rem;
		}
	}

	.validation-msg {
		color: red;
		margin-top: 1rem;
		font-size: 1.2rem;
	}
`;

const S = { RecruitPostWrapper };

export default S;
