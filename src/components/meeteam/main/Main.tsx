import React from 'react';
import S from './Main.sytled';
import { Information, Member, WorkRegistration, Setting } from '../..';

const Main = (props: { content: string }) => {
	type ComponentProps = {
		[key: string]: JSX.Element;
	};

	const selectComponent: ComponentProps = {
		'📁 정보': <Information />,
		'👥 멤버': <Member />,
		'📁 작업물 등록': <WorkRegistration />,
		'⚙️ 설정': <Setting />,
	};

	return <S.MainLayout>{props.content && selectComponent[props.content]}</S.MainLayout>;
};

export default Main;
