import React, { useEffect, useState, useRef } from 'react';
import S from './Header.styled';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { DropdownArrow, Logo, LogoName } from '../../assets';
import { ProfileImage, WaitModal } from '..';
import { useLogin } from '../../hooks';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { recruitFilterState, userState, waitModalState } from '../../atom';
import { fixModalBackground } from '../../utils';

const Header = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const location = useLocation();
	const { isLoggedIn, logout } = useLogin();
	const userInfo = useRecoilValue(userState);
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const [openDrop, setOpenDrop] = useState<boolean>(false);
	const setFilterState = useSetRecoilState(recruitFilterState);
	const [isWait, setIsWait] = useRecoilState(waitModalState);
	const [isHere, setIsHere] = useState({
		recruit: false,
		galary: false,
		inform: false,
	});

	const goRecruit = () => {
		navigate('/');
		setFilterState({
			scope: null,
			category: null,
			field: null,
			skill: [],
			role: [],
			tag: [],
			keyword: '',
			course: null,
			professor: null,
		});
	};
	const goGalary = () => {
		setIsWait(true);
	};
	const goInformationUse = () => {
		setIsWait(true);
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
		if (location.pathname === `/recruitment/postings/${id}` || location.pathname === '/') {
			setIsHere({ recruit: true, galary: false, inform: false });
		}
		if (location.pathname === '/galary') {
			setIsHere({ recruit: false, galary: true, inform: false });
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

	useEffect(() => {
		fixModalBackground(isWait);
	}, [isWait]);

	return (
		<S.Header $isLogin={isLoggedIn}>
			<div className='header'>
				<section className='header-leftside'>
					<div className='header__logo' onClick={goRecruit}>
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
				</section>
				<section>
					<div className='header__menu'>
						<span className='header__nickname body2-semibold'>
							{isLoggedIn && `안녕하세요, ${userInfo?.nickname}님!`}
						</span>
						<div className='header__menu--my' ref={dropdownRef}>
							<section onClick={onClickMy}>
								{isLoggedIn ? (
									<article className='icon-container'>
										<div className='icon-border'>
											{userInfo?.userId && <ProfileImage userId={userInfo?.userId} size='3rem' />}
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
											navigate(`/profile/${userInfo?.userId}`);
										}}
									>
										프로필
									</div>
									<div
										className='menu'
										onClick={() => {
											setOpenDrop(false);
											navigate('/'); // 임시 설정
										}}
									>
										포트폴리오
									</div>
									<div
										className='menu'
										onClick={() => {
											setOpenDrop(false);
											navigate('/management/bookmark');
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
				</section>
			</div>
			{isWait && (
				<section className='modal-background'>
					<WaitModal />
				</section>
			)}
		</S.Header>
	);
};

export default Header;
