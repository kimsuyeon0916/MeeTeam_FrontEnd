import React, { useState, useEffect } from 'react';
import { RequiredInformation, Title, Content } from '../../components';
import { GoBack } from '../../components';
import S from './ManagementPage.styled';

const ManagementPage = () => {
	const [title, setTitle] = useState('MeeTeam');
	const [status, setStatus] = useState('진행중');

	return (
		<>
			<S.ManagementPageRow>
				<GoBack />
				<Title title={title} status={status} />
			</S.ManagementPageRow>
			<RequiredInformation />
			<Content />
		</>
	);
};

export default ManagementPage;
