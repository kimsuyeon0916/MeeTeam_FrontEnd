import React from 'react';
import { useNavigate } from 'react-router-dom';
import S from './LinkToList.styled';
import { previousLocationState } from '../../../../atom';
import { useRecoilValue } from 'recoil';

const LinkToList = () => {
	const navigate = useNavigate();
	const previousLocation = useRecoilValue(previousLocationState);

	return (
		<S.LinkToList>
			<button
				type='button'
				onClick={() => {
					navigate(`${previousLocation}`);
				}}
			>
				목록보기
			</button>
		</S.LinkToList>
	);
};

export default LinkToList;
