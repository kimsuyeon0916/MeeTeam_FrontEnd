import React, { useState } from 'react';
import S from './AccountSetting.styled';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Email } from '../../../assets';

const AccountSetting = () => {
	const [dropdown, setDropdown] = useState({
		account: false,
		withdraw: false,
	});

	const accountHandler = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
		setDropdown(prev => ({
			...prev,
			account: !prev.account,
		}));
	};

	const withdrawHandler = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
		setDropdown(prev => ({
			...prev,
			withdraw: !prev.withdraw,
		}));
	};

	const inputClickHandler = (event: React.MouseEvent<HTMLInputElement>) => {
		event.stopPropagation();
	};

	const inputSectionHandler = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
	};

	return (
		<S.AccountSettingStyled>
			<h2>계정 설정</h2>
			<hr className='title-underbar' />
			<section className='wrapper-menu'>
				<article className='container' onClick={accountHandler}>
					<section className='container-account'>
						<section className='container-account__title'>
							<h4>계정 정보</h4>
							<span className='body1-medium description'>
								밋팀과 연결된 계정 정보를 설정할 수 있습니다.
							</span>
						</section>
						<section>{dropdown.account ? <SlArrowUp /> : <SlArrowDown />}</section>
					</section>
					{dropdown.account && (
						<section className='container-hidden'>
							<hr />
							<section className='container-hidden__content'>
								<section className='container-title'>
									<span className='body1-medium'>대표 메일 </span>
									<span className='body1-medium red'>(*이메일 변경 후 재인증 필요)</span>
								</section>
								<section className='container-hidden__mail'>
									<article className='container-mail' onClick={inputSectionHandler}>
										<img src={Email} />
										<input onClick={inputClickHandler} />
									</article>
									<button type='button' className='btn-save txt-big'>
										저장
									</button>
								</section>
							</section>
						</section>
					)}
				</article>
				<article className='container' onClick={withdrawHandler}>
					<section className='container-account'>
						<section className='container-account__title'>
							<h4 className='red'>회원 탈퇴</h4>
							<span className='body1-medium description'>개인 정보와 설정이 모두 삭제됩니다.</span>
						</section>
						<section>{dropdown.withdraw ? <SlArrowUp /> : <SlArrowDown />}</section>
					</section>
					{dropdown.withdraw && (
						<section className='container-hidden'>
							<hr />
							<section className='container-hidden__withdraw'>
								<span className='body1-medium semi-bold'>탈퇴 시 유의사항</span>
								<ul className='container-list'>
									<li className='body1-medium paragraph'>
										계정 탈퇴 시, 밋팀의 서비스에서 모두 탈퇴됩니다.
									</li>
									<li className='body1-medium paragraph'>
										탈퇴 시 계정과 관련된 모든 권한이 사라지며 복구할 수 없습니다.
									</li>
									<li className='body1-medium paragraph'>
										서비스를 이용하며 남긴 리뷰와 게시글은 삭제됩니다.
									</li>
									<li className='body1-medium paragraph'>
										탈퇴 후 동일한 메일로 재가입이 가능하나, 탈퇴한 계정과 연동되지 않습니다.
									</li>
									<li className='body1-medium paragraph'>
										탈퇴 후 연동된 소셜 계정 정보도 사라지며 소셜 로그인으로 기존 계정 이용이
										불가능합니다.
									</li>
								</ul>
							</section>
							<section className='container-btn'>
								<button type='button' className='btn-withdraw txt-big withdraw'>
									회원탈퇴
								</button>
							</section>
						</section>
					)}
				</article>
			</section>
			<section className='wrapper-personal'>
				<span>개인정보 처리방침</span>
				<span className='icon'>
					<RiArrowRightSLine />
				</span>
			</section>
		</S.AccountSettingStyled>
	);
};

export default AccountSetting;
