import React, { useState } from 'react';
import S from './TabMenu.styled';

interface TabMenu {
	readonly tabList: string[];
}

const TabMenu = ({ tabList }: TabMenu) => {
	const [tab, setTab] = useState(tabList[0]);

	const clickedHandler: React.MouseEventHandler<HTMLLIElement> = e => {
		const tab = e.target as HTMLButtonElement;
		if (!tab.textContent) {
			throw new Error('No Content');
		}
		setTab(tab.textContent);
	};

	return (
		<S.TabMenuLayout>
			<S.TabMenuList>
				{tabList.map((currentTab, index) => (
					<S.TabMenuItem onClick={clickedHandler} $clicked={currentTab === tab} key={index}>
						{currentTab}
					</S.TabMenuItem>
				))}
			</S.TabMenuList>
			<S.TabMenuLine />
		</S.TabMenuLayout>
	);
};

export default TabMenu;
