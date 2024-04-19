import React from 'react';
import S from './Main.styled';
import { Information, Member, Setting, DashBoard, Recruitment } from '../..';
import { useRecoilValue } from 'recoil';
import { contentState } from '../../../atom';

const Main = () => {
	const content = useRecoilValue(contentState);

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

	return <S.MainLayout>{content && selectComponent[content]}</S.MainLayout>;
};

export default Main;
