import styled from 'styled-components';

const RecruitInfoWrapper = styled.section`
	width: 100%;
	padding-bottom: 0.5rem;
	border-radius: 0.5rem;

	.container {
		width: 100%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.container__info {
	}

	.container__tag {
	}

	.container__role {
		width: 100%;
		box-sizing: border-box;

		.wrapper {
			box-sizing: border-box;
		}

		.container-role__list {
			margin-top: 2.7rem;
		}
	}
`;

const S = { RecruitInfoWrapper };

export default S;
