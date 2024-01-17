import React, { useState } from 'react';
import S from './ProgressStatus.styled';
import { statusList, STATUS_DONE_ICON, STATUS_RIGHT_ARROW_ICON } from './StatusData';
import { useSetRecoilState } from 'recoil';
import { contentState } from '../../../atom';
import { useNavigate } from 'react-router-dom';

const ProgressStatus = () => {
	const setContent = useSetRecoilState(contentState);
	const navigate = useNavigate();

	const [currentStatus, setCurrentStatus] = useState(
		statusList.find(status => status.done === false)
	);

	const changeContent = () => {
		if (currentStatus?.content === '산출물') {
			navigate('/create/output');
			return;
		}
		currentStatus && setContent(currentStatus?.content);
	};

	const rightArrowCount = statusList.length - 1;

	return (
		<S.ProgressStatusLayout>
			<header className='main__row'>
				{currentStatus && (
					<>
						<h2 className='main--big-text'>{currentStatus.message}</h2>
						<S.ProgressStatusButton type='button' onClick={changeContent}>
							{currentStatus.buttonName}
							{STATUS_RIGHT_ARROW_ICON}
						</S.ProgressStatusButton>
					</>
				)}
			</header>
			<div className='progress-status__row'>
				{statusList.map((status, index) => (
					<div className='progress-status__row' key={index}>
						<S.ProgressStatusColumn $isCurrent={status === currentStatus}>
							<span>{status.icon}</span>
							<h3>{status.title}</h3>
							<S.ProgressStatusIcon>{status.done && STATUS_DONE_ICON}</S.ProgressStatusIcon>
						</S.ProgressStatusColumn>
						{index !== rightArrowCount && STATUS_RIGHT_ARROW_ICON}
					</div>
				))}
			</div>
		</S.ProgressStatusLayout>
	);
};

export default ProgressStatus;
