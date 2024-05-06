import React from 'react';
import S from './ApplyCancel.styled';
import { useSetRecoilState } from 'recoil';
import { applyCancelModalState } from '../../../../../atom';
import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { cancelApply } from '../../../../../service';

interface ApplyCancel {
	pageNum: number;
}

const ApplyCancel = ({ pageNum }: ApplyCancel) => {
	const queryClient = useQueryClient();
	const setIsCancel = useSetRecoilState(applyCancelModalState);

	const cancelApplyTeam = useMutation({
		mutationFn: (pageNum: number) => cancelApply(pageNum),
	});

	const onClickBack = () => {
		setIsCancel(false);
	};

	const onClickConfirm = () => {
		cancelApplyTeam.mutate(pageNum, {
			onSuccess: () => {
				setIsCancel(false);
				queryClient.invalidateQueries({ queryKey: ['detailedPage'] });
			},
		});
	};
	return (
		<S.ApplyCancel>
			<h3>신청취소</h3>
			<section className='description'>
				<span className='body2-medium'>신청 취소한 구인글은 더 이상</span>
				<span className='body2-medium'>신청한 구인글 관리에서 보실 수 없습니다.</span>
				<span className='body2-medium'>해당 구인글의 신청을 취소할까요?</span>
			</section>
			<section className='btn-container'>
				<button className='cancel btn-txt' onClick={onClickBack}>
					다시 생각할게요.
				</button>
				<button className='confirm btn-txt' onClick={onClickConfirm}>
					네, 취소합니다.
				</button>
			</section>
		</S.ApplyCancel>
	);
};

export default ApplyCancel;
