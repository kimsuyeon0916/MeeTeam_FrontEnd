import styled from 'styled-components';

const Header = styled.div`
	.header {
		display: flex;
		height: 6.75rem;
		justify-content: space-between;
		align-items: center;
		flex-shrink: 0;
		background-color: #f0f0f0;
	}

	.header__logo {
		display: flex;
		width: 10.79338rem;
		height: 1.29563rem;
		justify-content: flex-end;
		align-items: center;
		flex-shrink: 0;
		margin-left: 14.88rem;
		cursor: pointer;

		.header__logo--bridge {
			left: 14.5rem;
			top: 2.6rem;
		}
	}

	.header__navigation {
		display: flex;
		width: 40%;
		justify-content: flex-start;
		align-items: center;
		gap: 4.5rem;

		.header__navigation--navi-text {
			color: #515565;
			font-family: Inter;
			font-size: 1.5rem;
			font-style: normal;
			font-weight: 600;
			line-height: normal;
			cursor: pointer;
		}
		.here {
			color: #5f5cec;
			transition: 0.2s;
		}
	}

	.header__menu {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-right: 5%;
		width: 15%;
		gap: 7%;

		.header__menu--search {
			display: flex;
			justify-content: center;
			align-items: center;
			color: #121212;
			font-size: 2.6rem;
			font-weight: 200;
			cursor: pointer;
		}

		.header__menu--alarm {
			display: flex;
			justify-content: center;
			align-items: center;
			color: #121212;
			font-size: 2.6rem;
			font-weight: 300;
			cursor: pointer;
		}

		.header__menu--my {
			display: flex;
			justify-content: center;
			width: 3rem;
			height: 3rem;
			border: 2px solid #000;
			border-radius: 50%;
			font-size: 2.6rem;
			cursor: pointer;
		}
	}
`;

const S = { Header };

export default S;
