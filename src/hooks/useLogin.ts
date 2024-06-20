import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { loginState, userState } from '../atom';
import secureLocalStorage from 'react-secure-storage';

const ACCESS_TOKEN_KEY = import.meta.env.VITE_ACCESS_TOKEN_KEY;

const useLogin = () => {
	const [isLogin, setIsLogin] = useRecoilState(loginState);
	const user = useRecoilValue(userState);

	useEffect(() => {
		const token = secureLocalStorage.getItem(ACCESS_TOKEN_KEY);
		if (!token || !user) {
			setIsLogin(false);
		}
	}, [user, ACCESS_TOKEN_KEY]);
	return { isLogin };
};

export default useLogin;
