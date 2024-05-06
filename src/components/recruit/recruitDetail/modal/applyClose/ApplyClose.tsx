import React from 'react';
import S from './ApplyClose.styled';
import { useSetRecoilState } from 'recoil';
import { applyCloseModalState } from '../../../../../atom';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { closeRecruitPost } from '../../../../../service';

const ApplyClose = () => {
	const { id } = useParams();
	const pageNumber = Number(id);
	const setIsClose = useSetRecoilState(applyCloseModalState);
	const queryClient = useQueryClient();
	const close = useMutation({
		mutationFn: (pageNumber: number) => closeRecruitPost(pageNumber),
		onSuccess: () => {
			setIsClose(false);
			queryClient.invalidateQueries({ queryKey: ['detailedPage'] });
		},
	});

	const onClickCancel = () => {
		setIsClose(false);
	};

	const onClickClose = () => {
		if (id) {
			close.mutate(pageNumber);
		}
	};
	return (
		<S.ApplyClose>
			<h3>구인글 마감</h3>
			<section className='description'>
				<span className='body2-medium'>마감된 구인글은 더 이상</span>
				<span className='body2-medium'>신청자를 받을 수 없습니다.</span>
				<span className='body2-medium'>해당 구인글을 모집 마감할까요?</span>
			</section>
			<section className='btn-container'>
				<button className='cancel btn-txt' onClick={onClickCancel}>
					취소
				</button>
				<button className='confirm btn-txt' onClick={onClickClose}>
					마감
				</button>
			</section>
		</S.ApplyClose>
	);
};

export default ApplyClose;
