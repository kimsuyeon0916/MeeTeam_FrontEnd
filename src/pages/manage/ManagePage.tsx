import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import { ScrollToTop } from '../../utils';

const ManagePage = () => {
	return (
		<div>
			<Sidebar />
			<main>
				<ScrollToTop />
				<Outlet />
			</main>
		</div>
	);
};

export default ManagePage;
