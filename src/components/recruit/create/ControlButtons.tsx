import React from 'react';
import { useLocation } from 'react-router-dom';

const ControlButtons = () => {
	const location = useLocation();

	return (
		<section className='container-btns'>
			<button type='button' className='cancel-btn'>
				취소
			</button>
			<button type='submit' className='submit-btn'>
				{location.pathname.includes('edit') ? '저장' : '등록'}
			</button>
		</section>
	);
};

export default ControlButtons;
