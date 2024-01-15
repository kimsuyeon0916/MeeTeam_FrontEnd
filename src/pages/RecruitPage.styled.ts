import styled from 'styled-components';

const RecruitPage = styled.div`
	width: clamp(45%, 108rem, 75%);
	margin: 0 auto;

	.container-filter_area {
		display: flex;
		margin-right: 2.6rem;
		margin-top: 2.3rem;
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
			font-size: 1.5rem;
			font-style: normal;
			font-weight: 400;
			line-height: 2.1rem; /* 100% */
			letter-spacing: 0.015rem;
			cursor: pointer;
		}

		.no {
			background-color: #fff;
		}
	}

	.container-filter_menu {
		display: flex;
		gap: 1.65rem;
		margin-top: 2.02rem;
	}
	.sep {
		width: 0.3rem;
		height: 3.225rem;
		flex-shrink: 0;
		background-color: #d9d9d9;
	}
	.dropdown-spec {
		display: flex;
		margin-left: 3rem;
		gap: 1.65rem;
	}

	hr {
		margin-top: 2.32rem;
		margin-bottom: 2.32rem;
		background: #ababab;
		height: 0.75px;
		border: 0;
	}
`;

const S = { RecruitPage };

export default S;
