import React from 'react';
import S from './ApplyInfomation.styled';
import { useRecoilState } from 'recoil';
import { applyStepState } from '../../../../atom';

const ApplyInfomation = () => {
	const [step, setStep] = useRecoilState(applyStepState);
	const onClickStep = () => {
		setStep(prev => prev + 1);
	};
	return (
		<S.ApplyInformation>
			<div className='container-apply__member'>
				<div>
					<span className='type'>리더</span>
					<div className='leader-info'>
						<div className='leader-info__icon'></div>
						<div className='leader-info__name'>
							<span>김민지</span>
							<span>평점: 4.8</span>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div className='container-apply__deadline'>
				<span>마감일</span>
				<span>{'23.10.16(7일 남음)'}</span>
			</div>
			<div className='container-apply__buttons'>
				<button type='button'>북마크하기</button>
				<button type='button' onClick={onClickStep}>
					팀 신청하기
				</button>
			</div>
		</S.ApplyInformation>
	);
};

export default ApplyInfomation;
