import styled from 'styled-components';

const RecruitInfoWrapper = styled.section`
	width: 100%;
	margin-top: 2rem;
	padding-bottom: 0.5rem;
	border-radius: 0.5rem;

	.container {
		width: 100%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 5rem;
	}

	.container__info {
	}

	.container__tag {
	}

	.container__role {
		width: 100%;
		.container-role__input {
			width: 100%;
			display: flex;
			justify-content: center;
			gap: 1.63rem;
			margin-top: 1.2rem;

			.input {
				width: 100%;
				height: 5.6rem;
				display: flex;
				gap: 1.63rem;
				padding: 0;
				align-items: center;
				.role {
					width: 100%;
					height: 100%;
					padding: 0;
				}
				.count {
					width: 80%;
					height: 100%;
					padding: 0;
				}
				.skills {
					width: 100%;
					height: 100%;
					padding: 0;
				}
			}

			.add-btn {
				width: 5.6rem;
				height: 5.6rem;
				button {
					width: 5.6rem;
					height: 5.6rem;
				}
			}
		}
	}
`;

const S = { RecruitInfoWrapper };

export default S;
