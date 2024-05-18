import React, { useState } from 'react';
import S from './AccountSetting.styled';
import { SlArrowDown } from 'react-icons/sl';
import { RiArrowRightSLine } from 'react-icons/ri';

const AccountSetting = () => {
	const [dropdown, setDropdown] = useState({
		account: false,
		withdraw: false,
	});

	const onClickAccount = () => {
		setDropdown(prev => ({
			...prev,
			account: !prev.account,
		}));
	};
	return (
		<S.AccountSettingStyled>
			<h2>계정 설정</h2>
			<hr className='title-underbar' />
			<section className='wrapper-menu'>
				<article className='container' onClick={onClickAccount}>
					<section className='container-account'>
						<section className='container-account__title'>
							<h4>계정 정보</h4>
							<span>밋팀과 연결된 계정 정보를 설정할 수 있습니다.</span>
						</section>
						<section>
							<SlArrowDown />
						</section>
					</section>
					{dropdown.account && (
						<section className='container-hidden'>
							<hr />
						</section>
					)}
				</article>
				<article className='container'>
					<section className='container-account__title'>
						<h4 className='red'>회원 탈퇴</h4>
						<span>개인 정보와 설정이 모두 삭제됩니다.</span>
					</section>
					<section>
						<SlArrowDown />
					</section>
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
