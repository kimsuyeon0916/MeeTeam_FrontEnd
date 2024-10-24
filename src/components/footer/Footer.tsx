import React, { useEffect, useState } from 'react';
import S from './Footer.styled';

const Footer = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 600);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<S.Footer>
			<section className='wrapper'>
				<section className='wrapper-logo'>
					<section className='container-logo'>
						<img
							className='logo'
							src='/logo_typo_large.webp'
							srcSet='/logo_typo_small.webp 600w,  /logo_typo_medium.webp 900w, /logo_typo_large.webp 1280w'
							alt='/logo_typo'
							decoding='async'
						/>
					</section>
					{isMobile && (
						<section className='wrapper-menu'>
							<h5
								onClick={() =>
									window.open(
										'https://www.notion.so/e4b205e0f9f54e0685766ba2795b043e?pvs=4',
										'_blank'
									)
								}
							>
								서비스이용약관
							</h5>
							<h5
								onClick={() =>
									window.open(
										'https://www.notion.so/10e6ef13aebb42e5b87d4bd873eef04f?pvs=4',
										'_blank'
									)
								}
							>
								개인정보처리방침
							</h5>
							<h5 onClick={() => window.open('https://forms.gle/CVVDm4gnF21GpwM78', '_blank')}>
								피드백주기
							</h5>
						</section>
					)}
					<section className='container-copyright'>
						<span className='copyright'>Contact meeteam@naver.com</span>
						<span className='copyright'>Copyright ©Meeteam. All rights reserved.</span>
					</section>
				</section>
				{!isMobile && (
					<section className='wrapper-menu'>
						<h5
							onClick={() =>
								window.open(
									'https://www.notion.so/e4b205e0f9f54e0685766ba2795b043e?pvs=4',
									'_blank'
								)
							}
						>
							서비스이용약관
						</h5>
						<h5
							onClick={() =>
								window.open(
									'https://www.notion.so/10e6ef13aebb42e5b87d4bd873eef04f?pvs=4',
									'_blank'
								)
							}
						>
							개인정보처리방침
						</h5>
						<h5 onClick={() => window.open('https://forms.gle/CVVDm4gnF21GpwM78', '_blank')}>
							피드백주기
						</h5>
					</section>
				)}
			</section>
		</S.Footer>
	);
};

export default Footer;
