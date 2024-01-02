import { NavLink } from 'react-router-dom';
import S from './Sidebar.styled';

const Sidebar = () => {
	const menus = [
		{ name: '전체 밋팀 관리', path: '' },
		{ name: '구인 글 관리', path: 'recruit' },
		{ name: '포트폴리오 관리', path: 'portpolio' },
	];
	return (
		<S.Sidebar>
			<div className='sidebar'>
				<div>
					<h1>밋팀 관리</h1>
				</div>
				<div className='sidebar-li'>
					{menus.map((menu, index) => {
						return (
							<NavLink className='link' to={menu.path} key={index}>
								{menu.name}
							</NavLink>
						);
					})}
				</div>
			</div>
		</S.Sidebar>
	);
};

export default Sidebar;
