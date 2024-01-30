import styled from 'styled-components';

const MyActivityWrapper = styled.div`
	width: clamp(45%, 108rem, 75%);
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
			font-family: Apple SD Gothic Neo;
			font-size: 2rem;
			font-style: normal;
			font-weight: 500;
			line-height: 4.2rem; /* 200% */
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
			-webkit-line-clamp: 2; /* 두 줄을 표시하도록 설정 */
			-webkit-box-orient: vertical;
			word-break: break-word;
			color: var(--Light-Black, var(--text-color-2, #373f41));
			text-overflow: ellipsis;
			font-family: Pretendard;
			font-size: 1.5rem;
			font-style: normal;
			font-weight: 400;
			line-height: 130%; /* 2.145rem */
			letter-spacing: 0.015rem;
			cursor: pointer;
			transition: 0.2s; /* hover 효과를 부드럽게 만들기 위한 트랜지션 */

			&:hover {
				color: #5877fc; /* hover 시의 색상 */
				text-decoration: underline; /* hover 시에 밑줄 표시 */
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
			color: var(--Light-Black, var(--text-color-2, #373f41));
			font-family: Apple SD Gothic Neo;
			font-size: 2rem;
			font-style: normal;
			font-weight: 500;
			line-height: 4.2rem; /* 200% */
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
			-webkit-line-clamp: 2; /* 두 줄을 표시하도록 설정 */
			-webkit-box-orient: vertical;
			word-break: break-word;
			color: var(--Light-Black, var(--text-color-2, #373f41));
			text-overflow: ellipsis;
			font-family: Pretendard;
			font-size: 1.5rem;
			font-style: normal;
			font-weight: 400;
			line-height: 130%; /* 2.145rem */
			letter-spacing: 0.015rem;
			cursor: pointer;
			transition: 0.2s; /* hover 효과를 부드럽게 만들기 위한 트랜지션 */

			&:hover {
				color: #5877fc; /* hover 시의 색상 */
				text-decoration: underline; /* hover 시에 밑줄 표시 */
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
			}

			.title {
				margin-top: 0.5rem;
				width: 25.65rem;
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp: 2; /* 두 줄을 표시하도록 설정 */
				-webkit-box-orient: vertical;
				word-break: break-word;
				color: var(--Light-Black, var(--text-color-2, #373f41));
				text-overflow: ellipsis;
				font-family: Pretendard;
				font-size: 1.5rem;
				font-style: normal;
				font-weight: 400;
				line-height: 130%; /* 2.145rem */
				letter-spacing: 0.015rem;
				cursor: pointer;
				transition: 0.2s; /* hover 효과를 부드럽게 만들기 위한 트랜지션 */

				&:hover {
					color: #5877fc; /* hover 시의 색상 */
					text-decoration: underline; /* hover 시에 밑줄 표시 */
				}
			}
		}
	}
`;

const S = { MyActivityManagePage, MyActivityWrapper, MyActivityInvited, MyActivityLike };

export default S;
