import React from 'react';
import S from './MyActivityManagePage.styled';
import { ScrollToTop } from '../../utils';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components';

const MyActivityWrapper = () => {
	const activityMenu = [
		{
			name: '초대받은 밋팀',
			path: 'invited',
		},
		{
			name: '좋아요한 밋팀',
			path: 'like',
		},
	];
	return (
		<S.MyActivityWrapper>
			<Sidebar menus={activityMenu} title={'내 활동'} />
			<main>
				<ScrollToTop />
				<Outlet />
			</main>
		</S.MyActivityWrapper>
	);
};

export default MyActivityWrapper;
