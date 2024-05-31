import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../atom';

const PrivateRouter = () => {
	const isLogin = useRecoilValue(loginState);

	return isLogin ? <Outlet /> : <Navigate to='/signin' />;
};

export default PrivateRouter;
