import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components';
import { ScrollToTop } from '../../utils';
import S from './IntegratedManagePage.styled';

const IntegratedManagePage = () => {
	const manageMenus = [
		{ name: '전체 밋팀 관리', path: 'meeteam' },
		{ name: '구인글 관리', path: 'recruit' },
		{ name: '포트폴리오 관리', path: 'portpolio' },
	];
	return (
		<S.ManagePage>
			<Sidebar menus={manageMenus} />
			<main>
				<ScrollToTop />
				<Outlet />
			</main>
		</S.ManagePage>
	);
};

export default IntegratedManagePage;
