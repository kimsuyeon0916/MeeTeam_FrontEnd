import React, { useState } from 'react';
import S from './ProgressStatus.styled';
import { statusList, statusDoneIcon, statusRightArrowIcon } from './StatusIcon';
import { useRecoilState } from 'recoil';
import { contentState } from '../../../atom';

const ProgressStatus = () => {
	const [content, setContent] = useRecoilState(contentState);

	const [currentStatus, setCurrentStatus] = useState(
		statusList.find(status => status.done === false)
	);

	return (
		<S.ProgressStatusLayout>
			<div className='main__row'>
				{currentStatus && (
					<>
						<h2 className='main--big-text'>{currentStatus.message}</h2>
						<S.ProgressStatusButton type='button' onClick={() => setContent(currentStatus.content)}>
							{currentStatus.buttonName}
							{statusRightArrowIcon}
						</S.ProgressStatusButton>
					</>
				)}
			</div>
			<div className='progress-status__row'>
				{statusList.map((status, index) => (
					<div className='progress-status__row' key={index}>
						<S.ProgressStatusColumn $isCurrent={status === currentStatus}>
							<span>{status.icon}</span>
							<h3>{status.title}</h3>
							<S.ProgressStatusIcon>{status.done && statusDoneIcon}</S.ProgressStatusIcon>
						</S.ProgressStatusColumn>
						{index !== 3 && statusRightArrowIcon}
					</div>
				))}
			</div>
		</S.ProgressStatusLayout>
	);
};

export default ProgressStatus;
