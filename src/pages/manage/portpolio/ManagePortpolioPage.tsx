import React from 'react';
import { Filter, PortpolioCard } from '../../../components';
import S from './ManagePortpolio.styled';

const ManagePortpolioPage = () => {
	const noRecruit: boolean = true;
	return (
		<S.ManagePortpolioPage>
			<Filter noRecruit={noRecruit} />
			<h1>📁 완성된 포트폴리오</h1>
			<span className='description'>
				핀을 클릭하여 프로필에서 보이고 싶은 나의 밋팀을 선택할 수 있습니다.
			</span>
			<div className='container-contents'>
				<PortpolioCard />
				<PortpolioCard />
				<PortpolioCard />
				<PortpolioCard />
			</div>
		</S.ManagePortpolioPage>
	);
};

export default ManagePortpolioPage;
