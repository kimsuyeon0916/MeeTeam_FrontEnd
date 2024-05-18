import React from 'react';
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atom';
import NotFound from '../notFound/NotFound';

const PrivateRouter = () => {
	const writerId = sessionStorage.getItem('writerId');
	const userInfo = useRecoilValue(userState);

	return writerId === userInfo?.userId ? <Outlet /> : <NotFound />;
};

export default PrivateRouter;
