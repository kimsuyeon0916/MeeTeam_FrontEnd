import React from 'react';
import S from './RecruitDetailPage.styled';
import { useLocation } from 'react-router-dom';

const RecruitDetailPage = () => {
	const location = useLocation();
	console.log(location);
	return (
		<S.RecruitDetailPage>
			<div className='container'>
				<div className='container-left'>
					<div className='container-info'></div>
					<div className='container-current'></div>
					<div className='container-tags'></div>
				</div>
				<div className='container-right'>
					<div className='container-apply'></div>
					<div className='container-recommend'></div>
				</div>
			</div>
			<div className='container-comments'></div>
		</S.RecruitDetailPage>
	);
};

export default RecruitDetailPage;
