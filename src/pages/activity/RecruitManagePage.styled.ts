import styled from 'styled-components';

const MyActivityWrapper = styled.div`
	width: clamp(45%, 96rem, 75%);
	margin: 0 auto;
	display: flex;
	main {
		width: 100%;
	}
`;

const MyActivityInvited = styled.div`
	margin-top: 6rem;
	.container-contents {
		margin-top: 3rem;
		display: flex;
		flex-direction: column;
		margin-bottom: 5rem;

		.subtitle {
			color: var(--Light-Black, var(--text-color-2, #373f41));
			font-size: 2rem;
			font-style: normal;
			font-weight: 500;
			line-height: 4.2rem;
			letter-spacing: 0.015rem;
		}

		.contents {
			display: grid;
			margin: 0 auto;
			gap: 1.8rem;
			margin-top: 0.9rem;
			grid-template-columns: repeat(3, 1fr);
		}

		.title {
			margin-top: 0.5rem;
			width: 25.65rem;
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			word-break: break-word;
			color: #373f41;
			text-overflow: ellipsis;
			font-size: 1.5rem;
			font-style: normal;
			font-weight: 400;
			line-height: 130%;
			letter-spacing: 0.015rem;
			cursor: pointer;
			transition: 0.2s;

			&:hover {
				color: #5877fc;
				text-decoration: underline;
			}
		}
	}
`;

const MyActivityLike = styled.div`
	margin-top: 6rem;
	.container-contents {
		margin-top: 3rem;
		display: flex;
		flex-direction: column;
		margin-bottom: 5rem;

		.subtitle {
			color: #373f41;
			font-size: 2rem;
			font-style: normal;
			font-weight: 500;
			line-height: 4.2rem;
			letter-spacing: 0.015rem;
		}

		.contents {
			display: grid;
			margin: 0 auto;
			gap: 1.8rem;
			margin-top: 0.9rem;
			grid-template-columns: repeat(3, 1fr);
		}

		.title {
			margin-top: 0.5rem;
			width: 25.65rem;
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			word-break: break-word;
			color: #373f41;
			text-overflow: ellipsis;
			font-size: 1.5rem;
			font-style: normal;
			font-weight: 400;
			line-height: 130%;
			letter-spacing: 0.015rem;
			cursor: pointer;
			transition: 0.2s;

			&:hover {
				color: #5877fc;
				text-decoration: underline;
			}
		}
	}
`;

const MyActivityRecruit = styled.article`
	margin-top: 8rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	h2 {
		color: #151515;
		font-size: 2.4rem;
		font-weight: 700;
		line-height: 2.9rem;
		letter-spacing: 0.0048rem;
	}

	.body1 {
		color: #373f41;
		text-align: center;
		font-size: 1.6rem;
		font-weight: 600;
		line-height: 1.9rem;
		letter-spacing: 0.0032rem;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;

		.container-filter {
			width: 100%;
			height: 2.85rem;
			border-bottom: 1px solid #8e8e8e;

			.menu {
				width: 11.6rem;
				height: 3.6rem;
				padding: 0.85rem 4.4rem;
				box-sizing: border-box;
				border-radius: 0.4rem 0.4rem 0rem 0rem;
				border-top: 1px solid #8e8e8e;
				border-right: 1px solid#8e8e8e;
				border-left: 1px solid #8e8e8e;
				border-bottom: 1px solid #8e8e8e;
				background: #f6f6f6;
				cursor: pointer;
			}

			.active {
				border-top: 1px solid #373f41;
				border-right: 1px solid #373f41;
				border-left: 1px solid #373f41;
				border-bottom: 1px solid #fff;
				background: #fff;
				z-index: 101;
			}
		}
	}
`;

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
				color: #373f41;
				font-size: 2rem;
				font-style: normal;
				font-weight: 500;
				line-height: 4.2rem;
				letter-spacing: 0.015rem;
			}

			.contents {
				display: flex;
				margin: 0 auto;
				gap: 1.8rem;
			}

			.title {
				margin-top: 0.5rem;
				width: 25.65rem;
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				word-break: break-word;
				color: #373f41;
				text-overflow: ellipsis;
				font-size: 1.5rem;
				font-style: normal;
				font-weight: 400;
				line-height: 130%;
				letter-spacing: 0.015rem;
				cursor: pointer;
				transition: 0.2s;

				&:hover {
					color: #5877fc;
					text-decoration: underline;
				}
			}
		}
	}
`;

const S = {
	MyActivityManagePage,
	MyActivityWrapper,
	MyActivityInvited,
	MyActivityLike,
	MyActivityRecruit,
};

export default S;
