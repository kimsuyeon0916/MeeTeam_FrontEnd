import React from 'react';
import S from './Modal.styled';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { applicantHolder, applicantModalState } from '../../../../atom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { refusedApplicant } from '../../../../service/recruit/applicant';
import { ApplicantsList } from '../../../../types';

interface RefuseModal {
	pageNum: number;
}

const RefuseModal = ({ pageNum }: RefuseModal) => {
	const [checkList, setCheckList] = useRecoilState(applicantHolder);
	const setApplicantModalState = useSetRecoilState(applicantModalState);
	const queryClient = useQueryClient();

	const refused = useMutation({
		mutationFn: ({ pageNum, applicantIds }: ApplicantsList) =>
			refusedApplicant({ pageNum, applicantIds }),
		onSuccess: () => {
			setCheckList([]);
			setApplicantModalState({ approve: false, refuse: false });
			queryClient.invalidateQueries({ queryKey: ['applicantsList'] });
		},
	});
	const cancelHandler = () => {
		setApplicantModalState({ approve: false, refuse: false });
	};
	const refuseHandler = () => {
		refused.mutate({ pageNum, applicantIds: checkList });
	};
	return (
		<S.Modal>
			<section className='wrapper-info'>
				<h3>신청 거절</h3>
				<section className='container-description'>
					<span className='body2-medium'>거절한 신청자는 더 이상</span>
					<span className='body2-medium'>신청자 관리 페이지에서 확인할 수 없습니다.</span>
					<span className='body2-medium'>선택하신 신청자를 거절할까요?</span>
				</section>
			</section>
			<section className='container-btn'>
				<button className='cancel txt-small' type='button' onClick={cancelHandler}>
					다시 생각할게요.
				</button>
				<button className='refuse txt-small' type='submit' onClick={refuseHandler}>
					네, 거절합니다.
				</button>
			</section>
		</S.Modal>
	);
};

export default RefuseModal;
