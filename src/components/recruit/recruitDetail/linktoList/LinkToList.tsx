import React from 'react';
import { useNavigate } from 'react-router-dom';
import S from './LinkToList.styled';

const LinkToList = () => {
	const navigate = useNavigate();

	return (
		<S.LinkToList>
			<button
				type='button'
				onClick={() => {
					navigate('/recruitment/postings/search');
				}}
			>
				목록보기
			</button>
		</S.LinkToList>
	);
};

export default LinkToList;
