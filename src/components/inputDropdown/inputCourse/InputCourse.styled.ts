import styled from 'styled-components';

const InputCourse = styled.section`
	.title-info {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.description {
			color: #8e8e8e;
			font-size: 1.4rem;
			font-style: normal;
			font-weight: 400;
			line-height: 1.35rem;
			letter-spacing: 0.015rem;
			margin-left: 2rem;
		}

		article:nth-child(2) {
			display: flex;
			align-items: center;

			.description-check {
				color: #373f41;
				font-size: 1.35rem;
				font-style: normal;
				font-weight: 400;
				line-height: 1.35rem;
				letter-spacing: 0.015rem;
			}
			input {
				margin-bottom: 0.6rem;
			}
		}
	}

	.course {
		width: 100%;
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

	.disable {
		background-color: #e3e3e3;
		border: 0.1rem solid #8e8e8e;
	}
`;

const InputProfessor = styled.section`
	.temp {
		height: 2.35rem;
	}

	.course {
		width: 100%;
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

	.disable {
		background-color: #e3e3e3;
		border: 0.1rem solid #8e8e8e;
	}
`;

const S = { InputCourse, InputProfessor };

export default S;
