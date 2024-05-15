import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { loginState } from '../atom';

// 임시
const useLogin = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const isLogin = useRecoilValue(loginState);

	useEffect(() => {
		if (isLogin) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, [isLogin]);

	return { isLoggedIn };
};

export default useLogin;
