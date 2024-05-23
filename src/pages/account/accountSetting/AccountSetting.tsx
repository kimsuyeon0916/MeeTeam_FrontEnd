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
									<article className='container-mail'>
										<img src={Email} />
										<input onClick={inputClickHandler} />
									</article>
									<button type='button'>저장</button>
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
								<p className='body1-medium paragraph'>
									서비스에 만족하지 못하셨나요? 탈퇴하기 전에 먼저 개선 요청을 해보시는 건 어떨까요?
								</p>
								<p className='body1-medium'>
									그래도 탈퇴하시겠다면 탈퇴 전에 아래 유의사항을 꼭 읽어주세요!
								</p>
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
