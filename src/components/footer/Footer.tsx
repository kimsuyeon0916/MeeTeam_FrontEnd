import React from 'react';
import S from './Footer.styled';
import { LogoFooter, LogoName } from '../../assets';

const Footer = () => {
	return (
		<S.Footer>
			<section className='wrapper-logo'>
				<section className='container-logo'>
					<img className='logo' src={LogoFooter} />
					<img className='logo-name' src={LogoName} />
				</section>
			</section>
			<section className='container-menu'>
				<section className='container-menu__column'>
					<h3>바로가기</h3>
					<span className='menu'>구인</span>
					<span className='menu'>밋팀</span>
					<span className='menu'>포트폴리오</span>
				</section>
				<section className='container-menu__column'>
					<h3>이용안내</h3>
					<span className='menu'>공지사항</span>
					<span className='menu'>FAQ</span>
				</section>
				<section className='container-menu__column'>
					<h3>서비스약관</h3>
					<span className='menu'>서비스이용약관</span>
					<span className='menu'>개인정보처리방침</span>
				</section>
			</section>
		</S.Footer>
	);
};

export default Footer;
