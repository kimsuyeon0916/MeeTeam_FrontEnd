import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ControlButtons = () => {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<section className='container-btns'>
			<button type='button' className='cancel-btn' onClick={() => navigate(-1)}>
				취소
			</button>
			<button type='submit' className='submit-btn'>
				{location.pathname.includes('edit') ? '저장' : '등록'}
			</button>
		</section>
	);
};

export default ControlButtons;
