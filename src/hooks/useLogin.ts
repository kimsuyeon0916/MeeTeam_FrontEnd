import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { loginState } from '../atom';

// 임시
const useLogin = () => {
	const isLogin = useRecoilValue(loginState);

	return { isLogin };
};

export default useLogin;
