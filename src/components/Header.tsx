import React from 'react';
import styled from 'styled-components';
import { BiSearch, BiBell, BiUser } from 'react-icons/bi';

const Header = () => {
	return (
		<SHeader>
			<div className='header'>
				<div className='header__logo'>LOGO</div>
				<div className='header__navigation'>
					<div className='header__navigation--navi-text'>구인 밋팀</div>
					<div className='header__navigation--navi-text'>밋팀 갤러리</div>
					<div className='header__navigation--navi-text'>멤버</div>
					<div className='header__navigation--navi-text'>이용안내</div>
				</div>
				<div className='header__menu'>
					<div className='header__menu--search'>
						<BiSearch />
					</div>
					<div className='header__menu--alarm'>
						<BiBell />
					</div>
					<div className='header__menu--my'>
						<BiUser />
					</div>
				</div>
			</div>
		</SHeader>
	);
};

export default Header;

const SHeader = styled.div`
	.header {
		display: flex;
		height: 90px;
		justify-content: space-between;
		align-items: center;
		flex-shrink: 0;
		background-color: #f0f0f0;
	}

	.header__logo {
		display: flex;
		width: 70px;
		height: 32px;
		justify-content: flex-end;
		align-items: center;
		flex-shrink: 0;
		font-size: 30px;
		margin-left: 15%;
		cursor: pointer;
	}

	.header__navigation {
		display: flex;
		width: 40%;
		justify-content: flex-start;
		align-items: center;
		gap: 10%;

		.header__navigation--navi-text {
			color: #515565;
			font-family: Inter;
			font-size: 20px;
			font-style: normal;
			font-weight: 600;
			line-height: normal;
			cursor: pointer;
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
			font-size: 26px;
			cursor: pointer;
		}

		.header__menu--alarm {
			display: flex;
			justify-content: center;
			align-items: center;
			color: #121212;
			font-size: 26px;
			cursor: pointer;
		}

		.header__menu--my {
			width: 26px;
			height: 26px;
			border: 2px solid #000;
			border-radius: 50%;
			font-size: 26px;
			cursor: pointer;
		}
	}
`;
