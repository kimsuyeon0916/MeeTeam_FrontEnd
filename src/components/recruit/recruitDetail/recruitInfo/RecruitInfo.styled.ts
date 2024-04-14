import styled from 'styled-components';

const RecruitInfo = styled.article`
	margin-top: 4rem;
	border-radius: 1rem;
	border: 0.075rem solid #e3e3e3;
	background: #fff;
	display: flex;
	padding: 4.8rem 9.8rem;
	box-sizing: border-box;
	gap: 16rem;

	.container-info {
		display: flex;
		align-items: flex-end;
		gap: 4.2rem;
		line-height: 1.9rem;
		letter-spacing: 0.0032rem;
		font-size: 1.6rem;

		.subtitles {
			display: flex;
			flex-direction: column;
			color: #8e8e8e;
			gap: 4rem;
		}

		.values {
			display: flex;
			flex-direction: column;
			color: #373f41;
			font-weight: 600;
			gap: 4rem;

			section {
				display: flex;
				align-items: center;
				gap: 2rem;

				.recruiting {
					color: #5877fc;
				}

				.closed {
					display: flex;
					/* padding: 0.4rem 0.8rem; */
					justify-content: center;
					align-items: center;
					border-radius: 1.5rem;
					border: #8e8e8e;
					background: #e3e3e3;
					color: #8e8e8e;
				}
			}
		}
	}
`;

const S = { RecruitInfo };

export default S;
