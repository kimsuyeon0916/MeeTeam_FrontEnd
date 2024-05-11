import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../atom';

// 임시
const useLogin = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const userInfo = useRecoilValue(userState);

	const login = () => {
		if (userInfo?.isLogin) {
			setIsLoggedIn(true);
		}
	};

	useEffect(() => {
		if (userInfo?.isLogin) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, [userInfo?.isLogin]);

	return { login, isLoggedIn };
};

export default useLogin;
