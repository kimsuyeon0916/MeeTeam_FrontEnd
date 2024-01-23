import styled from 'styled-components';

const ManagePortpolioPage = styled.div`
	margin-top: 5.92rem;

	h1 {
		color: var(--Light-Black, var(--text-color-2, #373f41));
		font-family: Apple SD Gothic Neo;
		font-size: 2.1rem;
		font-style: normal;
		font-weight: 400;
		line-height: 4.2rem; /* 200% */
		letter-spacing: 0.015rem;
		margin-top: 3.22rem;
	}

	.container-contents {
		display: grid;
		margin-top: 1.65rem;
		grid-template-columns: repeat(3, 1fr);
		row-gap: 1.5rem;
		column-gap: 1.5rem;

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

const S = { ManagePortpolioPage };

export default S;
