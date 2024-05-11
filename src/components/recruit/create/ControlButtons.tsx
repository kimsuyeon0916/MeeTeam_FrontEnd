import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { resetFormData } from '../../../utils';

const ControlButtons = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const cancelHandler = () => {
		if (location.pathname.includes('edit')) {
			navigate(-1);
		} else {
			navigate('/');
		}
		resetFormData();
	};

	return (
		<section className='container-btns'>
			<button type='button' className='cancel-btn' onClick={cancelHandler}>
				취소
			</button>
			<button type='submit' className='submit-btn'>
				{location.pathname.includes('edit') ? '저장' : '등록'}
			</button>
		</section>
	);
};

export default ControlButtons;
