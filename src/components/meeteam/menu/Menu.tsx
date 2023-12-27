import React from 'react';
import S from './Menu.styled';

const Menu = (props: {
	menu: string;
	clickedHandler: React.MouseEventHandler<HTMLButtonElement>;
}) => {
	const menuList = ['대시보드', '밋팀', '멤버', '구인 현황', '설정'] as const;
	type menuType = (typeof menuList)[number];

	const checkColorChange = (currentMenu: menuType) => currentMenu === props.menu;

	return (
		<S.MenuRow>
			{menuList.map((currentMenu, index) => (
				<S.MenuBox
					onClick={props.clickedHandler}
					$color={checkColorChange(currentMenu)}
					key={index}
				>
					{currentMenu}
				</S.MenuBox>
			))}
		</S.MenuRow>
	);
};

export default Menu;
