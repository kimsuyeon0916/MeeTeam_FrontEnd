import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atom';

const PrivateRouter = () => {
	const writerId = sessionStorage.getItem('writerId');
	const userInfo = useRecoilValue(userState);

	return writerId === userInfo?.userId ? <Outlet /> : <Navigate to={'/'} />;
};

export default PrivateRouter;
