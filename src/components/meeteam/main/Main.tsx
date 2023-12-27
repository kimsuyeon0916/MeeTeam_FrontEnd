import React from 'react';
import S from './Main.sytled';
import { Information, Member, Setting, DashBoard, Recruitment } from '../..';

const Main = (props: { content: string }) => {
	type ComponentProps = {
		[key: string]: JSX.Element;
	};

	const selectComponent: ComponentProps = {
		대시보드: <DashBoard />,
		밋팀: <Information />,
		멤버: <Member />,
		'구인 현황': <Recruitment />,
		설정: <Setting />,
	};

	return <S.MainLayout>{props.content && selectComponent[props.content]}</S.MainLayout>;
};

export default Main;
