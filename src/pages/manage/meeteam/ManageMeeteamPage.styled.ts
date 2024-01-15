import styled from 'styled-components';

const ManageMeeTeamPage = styled.div`
	.container-status {
		display: flex;
		gap: 2.1rem;
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

		.content {
			width: 25.65rem;
			height: 13.5rem;
			flex-shrink: 0;
			border-radius: 0.75rem;
			background: rgba(0, 0, 0, 0.15);
			cursor: pointer;
		}
	}
`;

const S = { ManageMeeTeamPage };

export default S;
