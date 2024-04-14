import React, { useEffect, useState } from 'react';

// 임시
const useLogin = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const token = localStorage.getItem('ACCESS_TOKEN_KEY');

	const login = () => {
		if (token) {
			setIsLoggedIn(true);
		}
	};

	const logout = () => {
		setIsLoggedIn(false);
		localStorage.removeItem('ACCESS_TOKEN_KEY');
	};

	useEffect(() => {
		if (token) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, [token]);

	return { login, logout, isLoggedIn };
};

export default useLogin;
