import React from 'react';
import S from './Menu.styled';
import { useRecoilState } from 'recoil';
import { contentState } from '../../../atom';

const Menu = () => {
	const [content, setContent] = useRecoilState(contentState);

	const clickedHandler: React.MouseEventHandler<HTMLButtonElement> = e => {
		const button = e.target as HTMLButtonElement;
		if (!button.textContent) {
			throw new Error('No Content');
		}
		setContent(button.textContent);
	};

	const menuList = ['대시보드', '밋팀', '멤버', '구인 현황', '설정'] as const;
	type menuType = (typeof menuList)[number];

	const checkColorChange = (currentMenu: menuType) => currentMenu === content;

	return (
		<S.MenuRow>
			{menuList.map((currentMenu, index) => (
				<S.MenuBox onClick={clickedHandler} $color={checkColorChange(currentMenu)} key={index}>
					{currentMenu}
				</S.MenuBox>
			))}
		</S.MenuRow>
	);
};

export default Menu;
