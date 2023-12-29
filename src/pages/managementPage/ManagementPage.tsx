import React, { useState, useEffect } from 'react';
import { RequiredInformation, Menu, Main, Title } from '../../components';
import { GoBack } from '../../utils';
import S from './ManagementPage.styled';

const ManagementPage = () => {
	const [content, setContent] = useState('대시보드');
	const clickedHandler: React.MouseEventHandler<HTMLButtonElement> = e => {
		const button = e.target as HTMLButtonElement;
		if (!button.textContent) {
			throw new Error('No Content');
		}
		setContent(button.textContent);
	};

	const [title, setTitle] = useState('MeeTeam');
	const [status, setStatus] = useState('진행중');
	useEffect(() => {
		setStatus(status);
	}, [status]);

	return (
		<>
			<S.ManagementPageRow>
				<GoBack />
				<Title title={title} status={status} />
			</S.ManagementPageRow>
			<RequiredInformation />
			<Menu menu={content} clickedHandler={clickedHandler} />
			<Main content={content} />
		</>
	);
};

export default ManagementPage;
