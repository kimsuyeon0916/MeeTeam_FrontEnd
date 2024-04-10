import React, { useEffect, useState, useRef } from 'react';
import S from './Header.styled';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { DropdownArrow, Logo, LogoName } from '../../assets';
import { ProfileImage } from '..';
import { useLogin } from '../../hooks';

const Header = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const location = useLocation();
	const { isLoggedIn, logout } = useLogin();
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const [openDrop, setOpenDrop] = useState<boolean>(false);
	const [isHere, setIsHere] = useState({
		recruit: false,
		galary: false,
		inform: false,
	});

	const goRecruit = () => {
		navigate('/recruitment/postings/search');
	};
	const goGalary = () => {
		navigate('/galary');
	};
	const goInformationUse = () => {
		navigate('/information');
	};

	const onClickMy = () => {
		if (!isLoggedIn) {
			navigate('/signin');
		} else {
			setOpenDrop(prev => !prev);
		}
	};

	const onClickLogout = () => {
		logout();
		setOpenDrop(false);
	};

	useEffect(() => {
		if (
			location.pathname === `/recruitment/postings/${id}` ||
			location.pathname === '/recruitment/postings/search'
		) {
			setIsHere({ recruit: true, galary: false, inform: false });
		}
		if (location.pathname === '/galary') {
			setIsHere({ recruit: false, galary: true, inform: false });
		}
		if (location.pathname === '/information') {
			setIsHere({ recruit: false, galary: false, inform: true });
		}
	}, [location]);

	useEffect(() => {
		const outsideClick = (event: MouseEvent) => {
			const { target } = event;
			if (openDrop && dropdownRef.current && !dropdownRef.current.contains(target as Node)) {
				setOpenDrop(false);
			}
		};
		document.addEventListener('mousedown', outsideClick);
		return () => {
			document.removeEventListener('mousedown', outsideClick);
		};
	}, [openDrop]);

	return (
		<S.Header>
			<div className='header'>
				<div className='header__logo'>
					<img className='logo' src={Logo} />
					<img className='logo-name' src={LogoName} />
					{isLoggedIn && <span className='university'>광운대학교</span>}
				</div>
				<div className='header__navigation'>
					<div
						className={`header__navigation--navi-text ${isHere.recruit ? 'here' : ''}`}
						onClick={goRecruit}
					>
						구인게시판
					</div>
					<div
						className={`header__navigation--navi-text ${isHere.galary ? 'here' : ''}`}
						onClick={goGalary}
					>
						밋팀갤러리
					</div>
					<div
						className={`header__navigation--navi-text ${isHere.inform ? 'here' : ''}`}
						onClick={goInformationUse}
					>
						이용안내
					</div>
				</div>
				<div className='header__menu'>
					<div className='header__menu--my' ref={dropdownRef}>
						<section onClick={onClickMy}>
							{isLoggedIn ? (
								<article className='icon-container'>
									<div className='icon-border'>
										<ProfileImage url='' size='3rem' />
									</div>
									<img src={DropdownArrow} />
								</article>
							) : (
								<span className='login'>로그인</span>
							)}
						</section>
						{openDrop && (
							<div className='dropdown'>
								<div
									className='menu'
									onClick={() => {
										setOpenDrop(false);
										navigate(`/profile/johnyeom24`);
									}}
								>
									프로필
								</div>
								<div
									className='menu'
									onClick={() => {
										setOpenDrop(false);
										navigate('/manage/meeteam');
									}}
								>
									구인글 관리
									<hr />
								</div>
								<div className='menu logout' onClick={onClickLogout}>
									로그아웃
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</S.Header>
	);
};

export default Header;
