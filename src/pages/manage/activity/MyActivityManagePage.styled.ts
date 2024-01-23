import styled from 'styled-components';

const MyActivityManagePage = styled.div`
	margin-top: 6rem;
	.container-contents {
		margin-top: 3rem;
		display: flex;
		flex-direction: column;
		gap: 3.75rem;
		margin-bottom: 5rem;

		.container-contents__row {
			.subtitle {
				color: var(--Light-Black, var(--text-color-2, #373f41));
				font-family: Apple SD Gothic Neo;
				font-size: 2rem;
				font-style: normal;
				font-weight: 500;
				line-height: 4.2rem; /* 200% */
				letter-spacing: 0.015rem;
			}

			.contents {
				display: flex;
				margin: 0 auto;
				gap: 1.8rem;

				.content {
					display: flex;
					flex-direction: column;
					width: 25.65rem;
					height: 18.375rem;
					flex-shrink: 0;
					border-radius: 0.75rem;
					border: 0.1rem solid #dcdcdc;
					background: #f9f9f9;
					padding: 1.35rem 1.5rem 1.8rem 1.5rem;
					cursor: pointer;
					box-sizing: border-box;

					&:hover {
						transition: 0.4s;
						border: 0.1rem solid #5877fc;
					}

					.content-tags {
						display: flex;
						justify-content: space-between;

						.tags {
							display: flex;
							gap: 0.6rem;

							div:nth-child(1) {
								display: flex;
								width: 4.05rem;
								height: 2.4rem;
								padding: 0.75rem;
								justify-content: center;
								align-items: center;
								gap: 0.75rem;
								border-radius: 0.6rem;
								background: var(--main-color, #5877fc);
								color: #fff;
								font-family: Apple SD Gothic Neo;
								font-size: 1.2rem;
								font-style: normal;
								font-weight: 400;
								line-height: 1.35rem; /* 112.5% */
								letter-spacing: 0.015rem;
							}

							div:nth-child(2) {
								display: flex;
								width: 5.55rem;
								height: 2.4rem;
								padding: 0.75rem;
								justify-content: center;
								align-items: center;
								gap: 0.75rem;
								border-radius: 0.6rem;
								background: #e4e1ff;
								color: var(--Light-Black, var(--text-color-2, #373f41));
								font-family: Apple SD Gothic Neo;
								font-size: 1.1rem;
								font-style: normal;
								font-weight: 400;
								line-height: 1.35rem; /* 112.5% */
								letter-spacing: 0.015rem;
							}
						}
					}

					.content-title {
						height: 4.8rem;
						flex-shrink: 0;
						margin-top: 1.65rem;
						/* overflow: hidden; */
						color: var(--Light-Black, var(--text-color-2, #373f41));
						text-overflow: ellipsis;
						/* white-space: nowrap; */
						font-family: Apple SD Gothic Neo;
						font-size: 1.65rem;
						font-style: normal;
						font-weight: 400;
						line-height: 130%; /* 2.145rem */
						letter-spacing: 0.015rem;
					}

					.content-info {
						display: flex;
						margin-top: 5rem;
						justify-content: space-between;

						div {
							color: var(--Light-Black, var(--text-color-2, #373f41));
							font-family: Apple SD Gothic Neo;
							font-size: 1.2rem;
							font-style: normal;
							font-weight: 400;
							line-height: 1.35rem; /* 112.5% */
							letter-spacing: 0.015rem;
						}
					}
				}
			}
		}
	}
`;

const S = { MyActivityManagePage };

export default S;
