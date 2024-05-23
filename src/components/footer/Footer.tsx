import React from 'react';
import S from './Footer.styled';
import { LogoFooter, LogoName } from '../../assets';

const Footer = () => {
	return (
		<S.Footer>
			<section className='wrapper'>
				<section className='wrapper-logo'>
					<section className='container-logo'>
						<img className='logo' src={LogoFooter} />
						<img className='logo-name' src={LogoName} />
					</section>
					<section className='container-copyright'>
						<span className='copyright'>Contact meeteam@naver.com</span>
						<span className='copyright'>Copyright ©Meeteam. All rights reserved.</span>
					</section>
				</section>
				<section className='wrapper-menu'>
					<h5>서비스이용약관</h5>
					<h5>개인정보처리방침</h5>
					<h5 onClick={() => window.open('https://forms.gle/CVVDm4gnF21GpwM78', '_blank')}>
						피드백주기
					</h5>
				</section>
			</section>
		</S.Footer>
	);
};

export default Footer;
