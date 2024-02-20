import styled from 'styled-components';

const ManageMeeTeamPage = styled.div`
	.container-status {
		display: flex;
		margin-top: 3.83rem;

		.status {
			width: 10.575rem;
			height: 4.95rem;
			display: flex;
			justify-content: center;
			align-items: center;
			color: var(--Light-Black, var(--text-color-2, #373f41));
			font-family: Pretendard;
			font-size: 1.8rem;
			font-style: normal;
			font-weight: 400;
			line-height: 1.35rem; /* 75% */
			letter-spacing: 0.015rem;
			cursor: pointer;
		}
		.current {
			border-bottom: 0.3rem solid #5877fc;
		}
		.not_current {
			border-bottom: 0.3rem solid transparent;
		}
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

const S = { ManageMeeTeamPage };

export default S;
