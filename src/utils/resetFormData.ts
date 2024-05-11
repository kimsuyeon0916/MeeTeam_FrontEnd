import { useEffect } from 'react';
import { recruitInputState } from '../atom';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import simpleDate from './simpleDate';
import { SAFE_DEFAULT_VALUE } from '../constant';

const resetFormData = () => {
	const [formData, setFormData] = useRecoilState(recruitInputState);
	const location = useLocation();

	useEffect(() => {
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
			content: SAFE_DEFAULT_VALUE,
		});
	}, [location.pathname]);
};

export default resetFormData;
