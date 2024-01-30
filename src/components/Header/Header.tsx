import React, { useEffect, useState, useRef } from 'react';
import S from './Header.styled';
import { BiSearch, BiBell, BiUser } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom';
import { preUrlState } from '../../atom';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { MeeteamLogo, CREATE_ICON } from '../../assets';

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const alarmRef = useRef<HTMLDivElement | null>(null);
	const [openDrop, setOpenDrop] = useState<boolean>(false);
	const [openDropAlarm, setOpenDropAlarm] = useState<boolean>(false);
	const [newAlarm, setNewAlarm] = useState<boolean>(true);
	const [isHere, setIsHere] = useState({
		recruit: false,
		galary: false,
		member: false,
		inform: false,
	});

	const goHome = () => {
		navigate('/');
	};
	const goRecruit = () => {
		navigate('/recruit');
	};
	const goGalary = () => {
		navigate('/galary');
	};
	const goMember = () => {
		navigate('/member');
	};
	const goInformationUse = () => {
		navigate('/information');
	};

	const setPreUrl = useSetRecoilState(preUrlState);
	const currentUrl = useRecoilValue(preUrlState);

	useEffect(() => {
		if (location.pathname === '/recruit/:recruitId?' || location.pathname === '/recruit') {
			setIsHere({ recruit: true, galary: false, member: false, inform: false });
		}
		if (location.pathname === '/galary') {
			setIsHere({ recruit: false, galary: true, member: false, inform: false });
		}
		if (location.pathname === '/member') {
			setIsHere({ recruit: false, galary: false, member: true, inform: false });
		}
		if (location.pathname === '/information') {
			setIsHere({ recruit: false, galary: false, member: false, inform: true });
		}
		setPreUrl(location.pathname);
	}, [location]);

	useEffect(() => {
		const outsideClick = (event: MouseEvent) => {
			const { target } = event;
			if (openDrop && dropdownRef.current && !dropdownRef.current.contains(target as Node)) {
				setOpenDrop(false);
			}
			if (openDropAlarm && alarmRef.current && !alarmRef.current.contains(target as Node)) {
				setOpenDropAlarm(false);
			}
		};
		document.addEventListener('mousedown', outsideClick);
		return () => {
			document.removeEventListener('mousedown', outsideClick);
		};
	}, [openDrop, openDropAlarm]);

	return (
		<S.Header>
			<div className='header'>
				<div className='header__logo' onClick={goHome}>
					<img src={MeeteamLogo} />
				</div>
				<div className='header__navigation'>
					<div
						className={`header__navigation--navi-text ${isHere.recruit ? 'here' : ''}`}
						onClick={goRecruit}
					>
						구인 밋팀
					</div>
					<div
						className={`header__navigation--navi-text ${isHere.galary ? 'here' : ''}`}
						onClick={goGalary}
					>
						밋팀 갤러리
					</div>
					<div
						className={`header__navigation--navi-text ${isHere.member ? 'here' : ''}`}
						onClick={goMember}
					>
						멤버
					</div>
					<div
						className={`header__navigation--navi-text ${isHere.inform ? 'here' : ''}`}
						onClick={goInformationUse}
					>
						이용안내
					</div>
				</div>
				<div className='header__menu'>
					<div className='header__menu--search'>
						<BiSearch />
					</div>
					<div className='header__menu--alarm' ref={alarmRef}>
						<div
							className='icon'
							onClick={() => {
								setOpenDropAlarm(prev => !prev);
								setNewAlarm(false);
							}}
						>
							<BiBell />
						</div>
						{newAlarm && <div className='dot'></div>}
						{openDropAlarm && (
							<div className='alarm-dropdown'>
								<div className='message apply'>
									<span>
										팀 신청이 도착했어요.
										<div className='dot2'></div>
									</span>
									<span>{'>'}</span>
								</div>
								<hr />
								<div className='message issue'>
									<span>1일 전</span>
									<span>00님이 민지님을 팔로우 하기 시작했습니다.</span>
								</div>
							</div>
						)}
					</div>
					<div className='header__menu--create' onClick={() => navigate('/create/meeteam')}>
						{CREATE_ICON}
					</div>
					<div className='header__menu--my' ref={dropdownRef}>
						<div className='icon' onClick={() => setOpenDrop(prev => !prev)}>
							<BiUser />
						</div>
						{openDrop && (
							<div className='dropdown'>
								<div
									className='menu'
									onClick={() => {
										setOpenDrop(false);
										navigate('/profile');
									}}
								>
									프로필 설정
								</div>
								<div
									className='menu'
									onClick={() => {
										setOpenDrop(false);
										navigate('/activity/invited');
									}}
								>
									내 활동
								</div>
								<div
									className='menu'
									onClick={() => {
										setOpenDrop(false);
										navigate('/manage/meeteam');
									}}
								>
									밋팀 관리
								</div>
								<div
									className='menu'
									onClick={() => {
										setOpenDrop(false);
										navigate('/account');
									}}
								>
									계정 관리
								</div>
								<div className='menu'>로그아웃</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</S.Header>
	);
};

export default Header;
