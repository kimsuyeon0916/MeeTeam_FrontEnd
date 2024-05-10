import React from 'react';
import S from './WarnRoleDelete.styled';
import { useSetRecoilState } from 'recoil';
import { warnRoleDeleteModalState } from '../../../../../atom';
import { useNavigate } from 'react-router-dom';

const WarnRoleDelete = ({ id }: { id: string }) => {
	const navigate = useNavigate();
	const setWarnRoleDeleteState = useSetRecoilState(warnRoleDeleteModalState);
	const onClickBack = () => {
		setWarnRoleDeleteState(false);
	};

	const onClickConfirm = () => {
		navigate(`/recruitment/applicants/${id}`);
		setWarnRoleDeleteState(false);
	};

	return (
		<S.WarnRoleDelete>
			<h3>역할을 삭제할 수 없어요!</h3>
			<section className='description'>
				<span className='body2-medium'>해당 역할에 신청자가 존재합니다.</span>
				<span className='body2-medium'>신청자를 거절한 후에 역할을 삭제할 수 있습니다.</span>
				<span className='body2-medium'>신청자를 거절할까요?</span>
			</section>
			<section className='btn-container'>
				<button className='cancel btn-txt' onClick={onClickBack}>
					취소하기
				</button>
				<button className='confirm btn-txt' onClick={onClickConfirm}>
					거절하러 가기
				</button>
			</section>
		</S.WarnRoleDelete>
	);
};

export default WarnRoleDelete;
