import React, { useState } from 'react';
import S from './ProgressStatus.styled';
import { statusList, statusDoneIcon, statusRightArrowIcon, statusCloseIcon } from './StatusIcon';

const ProgressStatus = () => {
	const [currentStatus, setCurrentStatus] = useState(
		statusList.find(status => status.done === false)
	);

	return (
		<S.ProgressStatusLayout>
			<div className='main__row'>
				<h2 className='main--big-text'>{currentStatus.content}</h2>
				<S.ProgressStatusButton>연락 수단 등록하기{statusRightArrowIcon}</S.ProgressStatusButton>
				{statusCloseIcon}
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
