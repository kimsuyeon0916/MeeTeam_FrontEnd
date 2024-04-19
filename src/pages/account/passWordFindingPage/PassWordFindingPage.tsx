import React, { useState } from 'react';
import S from './PassWordFindingPage.styled';
import { PASSWORD_DATA } from './PassWordData';

const PassWordFindingPage = () => {
	const title = `비밀번호를 잊어버리셨나요?\n이메일을 입력해주세요`;

	const [email, setEmail] = useState('');

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setEmail(() => value);
	};

	return (
		<S.PassWordFindingPageLayout>
			<header className='account__header'>
				<h1>{title}</h1>
			</header>
			<S.PassWordFindingPageForm>
				{PASSWORD_DATA.map(
					({ type, placeholder, name }, index) =>
						name === 'email' && (
							<label className='account__label' key={index}>
								<input
									className='account__input'
									type={type}
									placeholder={placeholder}
									name={name}
									value={email}
									onChange={e => changeHandler(e)}
								/>
							</label>
						)
				)}
				<S.PassWordFindingPageButton type='submit' value='passWordFinding'>
					확인
				</S.PassWordFindingPageButton>
			</S.PassWordFindingPageForm>
		</S.PassWordFindingPageLayout>
	);
};

export default PassWordFindingPage;
