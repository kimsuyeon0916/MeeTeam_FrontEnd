import React from 'react';
import S from './OpenChatModal.styled';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchFirstAccess } from '../../../../service/recruit/applicant';

const OpenChatModal = (pageNum: { pageNum: number }) => {
	const queryClient = useQueryClient();
	const tutorialAccess = useMutation({
		mutationFn: (pageNum: number) => patchFirstAccess(pageNum),
	});

	const onClickConfirm = () => {
		tutorialAccess.mutate(Number(pageNum), {
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey: ['recruitManageInfo'] });
			},
		});
	};

	return (
		<S.TutorialModal>
			<h3>오픈채팅방을 설정해보세요!</h3>
			<section className='description'>
				<span className='body2-medium'>오픈채팅방 주소를 설정하시면</span>
				<span className='body2-medium'>신청자의 이메일로 주소를 전송해드립니다.</span>
				<span className='body2-medium'>함께하고 싶은 신청자를 오픈채팅방으로 초대해보세요!</span>
			</section>
			<section className='btn-container'>
				<button className='confirm btn-txt' onClick={onClickConfirm}>
					네, 확인했어요!
				</button>
			</section>
		</S.TutorialModal>
	);
};

export default OpenChatModal;
