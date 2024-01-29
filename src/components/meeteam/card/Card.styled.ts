import styled from 'styled-components';

const Card = styled.div`
	position: relative;
	width: 25.65rem;
	height: 13.5rem;
	flex-shrink: 0;
	border-radius: 0.75rem;
	cursor: pointer;

	.tag-container {
		position: relative;

		img {
			width: 100%;
			height: 100%;
			border-radius: 0.75rem;
		}
	}
`;

const PortpolioCard = styled.div`
	.container-content {
		position: relative;

		.icon-pin {
			position: absolute;
			font-size: 3rem;
			color: #eb4d4b;
			top: 0.5rem;
			right: 0.5rem;
			cursor: pointer;
			z-index: 400;
		}
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
`;

const S = { Card, PortpolioCard };

export default S;
