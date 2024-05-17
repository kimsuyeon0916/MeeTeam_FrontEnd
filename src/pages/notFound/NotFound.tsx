import React from 'react';
import S from './NotFound.styled';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<S.NotFound>
			<img />
			<section className='container-title'>
				<h1>죄송합니다.</h1>
				<h1>요청하신 페이지는 찾을 수 없습니다.</h1>
			</section>
			<span className='body1-semibold'>
				입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주세요.
			</span>
			<button type='button' className='txt-big' onClick={() => navigate('/')}>
				홈으로 돌아가기
			</button>
			<span
				className='faq'
				onClick={() => window.open('https://forms.gle/CVVDm4gnF21GpwM78', '_blank')}
			>
				문제가 해결되지 않나요?
			</span>
		</S.NotFound>
	);
};

export default NotFound;
