import React from 'react';
import S from './NaverLogin.styled';

const NaverLogin = ({ naverRef }: { naverRef?: React.ForwardedRef<HTMLButtonElement> }) => {
	return <S.NaverLoginButton ref={naverRef} id='naverIdLogin' />;
};

export default NaverLogin;
