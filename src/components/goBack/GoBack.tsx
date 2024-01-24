import React from 'react';
import S from './GoBack.styled';
import { useNavigate } from 'react-router-dom';

const GoBack = () => {
	const navigate = useNavigate();

	const clickHandler = () => {
		window.sessionStorage.removeItem('contentState');
		navigate(-1);
	};

	return (
		<>
			<S.GoBackButton type='button' onClick={clickHandler} />
		</>
	);
};

export default GoBack;
