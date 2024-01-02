import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ManagePage = () => {
	const menus = [
		{ name: '전체 밋팀 관리', path: '' },
		{ name: '구인 글 관리', path: 'recruit' },
		{ name: '포트폴리오 관리', path: 'portpolio' },
	];
	return (
		<SManagePage>
			<div className='sidebar'>
				<div>
					<h1>밋팀 관리</h1>
				</div>
				<div className='sidebar-li'>
					{menus.map((menu, index) => {
						return (
							<NavLink to={menu.path} key={index} style={{ color: 'gray', textDecoration: 'none' }}>
								{menu.name}
							</NavLink>
						);
					})}
				</div>
			</div>
			<div className='content'></div>
		</SManagePage>
	);
};

export default ManagePage;

const SManagePage = styled.div`
	width: clamp(45%, 108rem, 75%);
	margin: 0 auto;
	display: flex;

	.sidebar {
		width: 23rem;
		height: 100vh;
		border: 1px solid pink;

		.sidebar-li {
			display: flex;
			flex-direction: column;
		}
	}

	.content {
		width: 100%;
		height: 100vh;
		border: 1px solid red;
	}
`;
