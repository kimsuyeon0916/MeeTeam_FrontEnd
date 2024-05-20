import React from 'react';
import S from './WarnRoleDelete.styled';
import { useSetRecoilState } from 'recoil';
import { warnRoleDeleteModalState } from '../../../../../atom';

const WarnRoleDelete = ({ id }: { id: string }) => {
	const setWarnRoleDeleteState = useSetRecoilState(warnRoleDeleteModalState);

	const onClickConfirm = () => {
		// navigate(`/recruitment/applicants/${id}`);
		setWarnRoleDeleteState(false);
	};

	return (
		<S.WarnRoleDelete>
			<h3>역할을 삭제할 수 없어요!</h3>
			<section className='description'>
				<span className='body2-medium'>신청자가 존재하는 역할은 삭제할 수 없습니다.</span>
				<span className='body2-medium'>신청자 관리페이지로 이동해</span>
				<span className='body2-medium'>신청자를 승인 혹은 거절해주세요.</span>
			</section>
			<section className='btn-container'>
				<button className='confirm btn-txt' onClick={onClickConfirm}>
					확인
				</button>
			</section>
		</S.WarnRoleDelete>
	);
};

export default WarnRoleDelete;
