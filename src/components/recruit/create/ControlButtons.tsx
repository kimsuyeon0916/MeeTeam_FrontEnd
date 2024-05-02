import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { recruitInputState } from '../../../atom';
import { simpleDate } from '../../../utils';

const ControlButtons = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const setFormData = useSetRecoilState(recruitInputState);

	const resetFormData = () => {
		setFormData({
			scope: '',
			category: '',
			fieldId: 1,
			deadline: simpleDate(new Date()),
			proceedType: '',
			proceedingStart: simpleDate(new Date()),
			proceedingEnd: simpleDate(new Date()),
			courseTag: {
				isCourse: false,
				courseTagName: '',
				courseProfessor: '',
			},
			recruitmentRoles: [],
			tags: [],
			title: '',
			content: '',
		});
	};

	const cancelHandler = () => {
		resetFormData();
		navigate('/');
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
