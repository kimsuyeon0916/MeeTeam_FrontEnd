import styled, { keyframes } from 'styled-components';

interface IManageRecruitPage {
	isOn?: boolean;
}

const ManageRecruitPage = styled.div<IManageRecruitPage>`
	margin-top: 3.83rem;

	.container-status {
		display: flex;

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

	.container {
		display: flex;
		flex-direction: column;
		gap: 1.8rem;
		margin-top: 3.9rem;

		.container-recruits {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 80.55rem;
			height: 9rem;
			flex-shrink: 0;
			border-radius: 0.75rem;
			border: 1.125px solid var(--main-2, #5f5cec);
			background: #f9f9f9;
			padding: 0 1.8rem;
			box-sizing: border-box;
		}

		.container-recruits_info {
			display: flex;
			flex-direction: column;

			.container-tags {
				display: flex;
				gap: 0.68rem;
			}

			.container-title {
				color: #000;
				text-align: center;
				font-family: Apple SD Gothic Neo;
				font-size: 1.8rem;
				font-style: normal;
				font-weight: 400;
				line-height: 4.2rem; /* 233.333% */
				letter-spacing: 0.015rem;
			}
		}
	}
`;

const S = { ManageRecruitPage };

export default S;
