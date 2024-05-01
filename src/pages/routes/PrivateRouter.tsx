import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRouter = () => {
	const isAuth = sessionStorage.getItem('isWriter');
	return isAuth === 'true' ? <Outlet /> : <Navigate to={'/'} />;
};

export default PrivateRouter;
