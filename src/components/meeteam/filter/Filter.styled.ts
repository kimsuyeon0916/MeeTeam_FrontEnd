import styled from 'styled-components';

interface IFilter {
	$checked: boolean;
}

const Filter = styled.div`
	display: flex;
	margin-top: 4.65rem;
	.container-filter_area {
		display: flex;
		align-items: center;
		margin-right: 2.6rem;
		.area {
			display: flex;
			width: 8.5rem;
			height: 3.5rem;
			padding: 0.75rem;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 0.75rem;
			flex-shrink: 0;
			border-radius: 7.5rem;
			background-color: #fcefaa;
			color: #000;
			font-family: Apple SD Gothic Neo;
			font-size: 1.6rem;
			font-style: normal;
			font-weight: 400;
			line-height: 2.1rem; /* 100% */
			letter-spacing: 0.015rem;
			cursor: pointer;
		}

		.out {
			background-color: #f3f5ff;
		}

		.no {
			background-color: #fff;
		}
	}
	.container-filter_menu {
		display: flex;
		gap: 1.5rem;
	}
	.container-checkbox {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-left: 2.03rem;

		input {
			display: flex;
			align-items: center;
			transform: scale(1.1);
		}

		label {
			display: flex;
			margin-left: 0.2rem;
			padding-top: 0.2rem;
			align-items: center;
			color: var(--text-color-2, #373f41);
			font-family: Pretendard;
			font-size: 1.35rem;
			font-style: normal;
			font-weight: 400;
			line-height: 1.35rem; /* 100% */
			letter-spacing: 0.015rem;
			box-sizing: border-box;
		}
	}
`;

const S = { Filter };

export default S;
