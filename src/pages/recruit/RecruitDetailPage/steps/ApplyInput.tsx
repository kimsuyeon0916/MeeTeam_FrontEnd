import React from 'react';
import { Icon } from '../../../../components';
import S from './ApplyInput.styled';
import { useRecoilState } from 'recoil';
import { applyStepState } from '../../../../atom';

const ApplyInput = () => {
	const [step, setStep] = useRecoilState(applyStepState);
	const onClickStep = () => {
		setStep(prev => prev + 1);
	};
	return (
		<S.ApplyInput>
			<div className='container-apply__form'>
				<span className='container-apply__form-title'>신청 정보</span>
				<div className='container-apply__form-my'>
					<Icon />
					<span>{'송유진'}</span>
				</div>
				<div className='container-apply__form-input'>
					<div className='container-apply__roles'>역할 선택</div>
					<input
						className='container-apply__words'
						placeholder='전할 말을 20자 이내로 입력해주세요.'
						maxLength={20}
					/>
				</div>
				<div className='container-apply__form-warn'>
					<span>멤버들에게 내 정보 공개할 수 있나요?</span>
					<span>정보 공개 동의 시, 팀매칭에 유리합니다.</span>
					<div className='container-checkbox'>
						<input type='checkbox' />
						<label>개인 정보 열람 동의</label>
					</div>
				</div>
				<button className='container-apply__form-button' type='button' onClick={onClickStep}>
					제출하기
				</button>
			</div>
		</S.ApplyInput>
	);
};

export default ApplyInput;
