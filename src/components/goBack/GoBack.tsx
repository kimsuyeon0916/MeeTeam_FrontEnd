import React from 'react';
import S from './GoBack.styled';
import { useNavigate } from 'react-router-dom';

const GoBack = () => {
	const navigate = useNavigate();

	return (
		<>
			<S.GoBackButton
				type='button'
				onClick={() => {
					navigate(-1);
				}}
			/>
		</>
	);
};

export default GoBack;
