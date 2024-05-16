import styled from 'styled-components';

const Footer = styled.article`
	display: flex;
	justify-content: space-between;
	padding: 8rem clamp(10%, 24rem, 20%);
	// padding: 8rem 24rem;
	font-family: Pretendard;
	background: #f6f6f6;
	height: 31.7rem;

	h3 {
		color: #373f41;
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 0.4rem;
	}

	.wrapper-logo {
		.container-logo {
			display: flex;
			align-items: center;
		}

		.logo {
			width: 3.9514rem;
			height: 4.424rem;
			flex-shrink: 0;
		}

		.logo-name {
			width: 4.9949rem;
			height: 3.008rem;
			flex-shrink: 0;
			margin-left: 1.05rem;
		}
	}

	.container-menu {
		display: flex;
		gap: 6rem;

		.container-menu__column {
			display: flex;
			flex-direction: column;
			gap: 1.6rem;
		}
	}

	.menu {
		color: #8e8e8e;
		font-size: 1.6rem;
		font-weight: 600;
		cursor: pointer;
	}
`;

const S = { Footer };

export default S;
