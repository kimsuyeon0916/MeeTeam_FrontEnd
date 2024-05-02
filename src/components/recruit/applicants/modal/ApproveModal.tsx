import React from 'react';
import S from './Modal.styled';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { applicantHolder, applicantModalState } from '../../../../atom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { approveApplicant } from '../../../../service/recruit/applicant';
import { ApplicantsList } from '../../../../types';

interface ApproveModal {
	pageNum: number;
	openChatLink: string;
}

const ApproveModal = ({ pageNum, openChatLink }: ApproveModal) => {
	const [checkList, setCheckList] = useRecoilState(applicantHolder);
	const setApplicantModalState = useSetRecoilState(applicantModalState);
	const queryClient = useQueryClient();

	const approved = useMutation({
		mutationFn: ({ pageNum, applicantIds }: ApplicantsList) =>
			approveApplicant({ pageNum, applicantIds }),
		onSuccess: () => {
			setCheckList([]);
			setApplicantModalState({ approve: false, refuse: false });
			queryClient.invalidateQueries({ queryKey: ['applicantsList'] });
		},
	});

	const cancelHandler = () => {
		setApplicantModalState({ approve: false, refuse: false });
	};
	const approveHandler = () => {
		approved.mutate({ pageNum, applicantIds: checkList });
	};
	return (
		<S.ApproveModal>
			<section className='wrapper-info'>
				<h3>신청 승인</h3>
				<section className='container-description'>
					<span className='body2-medium'>승인한 신청자에게</span>
					<span className='body2-medium'>오픈채팅방 링크를 이메일로 전송합니다.</span>
					<span className='body2-medium'>선택하신 신청자를 승인할까요?</span>
				</section>
			</section>
			<section className='container-link'>
				<span className='link body1-medium'>{openChatLink}</span>
			</section>
			<section className='container-btn'>
				<button className='cancel txt-small' type='button' onClick={cancelHandler}>
					다시 생각할게요.
				</button>
				<button className='approve txt-small' type='submit' onClick={approveHandler}>
					네, 승인합니다.
				</button>
			</section>
		</S.ApproveModal>
	);
};

export default ApproveModal;
