import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClosedFooter = () => {
	const navigate = useNavigate();
	const onClickToList = () => {
		navigate('/');
	};

	return (
		<>
			<button type='button' className='btn-list btn-txt__big' onClick={onClickToList}>
				목록보기
			</button>
			<button type='button' className='btn-closed btn-txt__big' disabled>
				구인이 종료되었습니다.
			</button>
		</>
	);
};

export default ClosedFooter;
