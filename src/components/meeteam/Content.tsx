import React, { useEffect } from 'react';
import { Menu, Main } from '..';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { contentState, preUrlState } from '../../atom';
import { useLocation } from 'react-router-dom';

const Content = () => {
	const setContent = useSetRecoilState(contentState);

	const preUrl = useRecoilValue(preUrlState);

	const location = useLocation();

	useEffect(() => {
		if (preUrl !== location.pathname) {
			setContent('대시보드');
		}
	}, []);

	return (
		<>
			<Menu />
			<Main />
		</>
	);
};

export default Content;
