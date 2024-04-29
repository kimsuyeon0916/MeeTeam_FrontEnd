import React, { useState } from 'react';
import { UnfilledBookmark, FilledBookmark } from '../../../../assets';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { applyModalState, applyCancelModalState, needLoginModalState } from '../../../../atom';
import { calculateDate } from '../../../../utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { cancelApply } from '../../../../service';
import { useBookmark, useLogin } from '../../../../hooks';
import { useDelBookmark } from '../../../../hooks/useBookMark';
import { NeedLogin } from '../../../index';

interface ApplierData {
	deadline: string;
	isApplied: boolean;
	isBookmarked: boolean;
}

const ApplierFooter = ({ deadline, isApplied, isBookmarked }: ApplierData) => {
	const { id } = useParams();
	const pageNum = Number(id);
	const { isLoggedIn } = useLogin();
	const setIsModal = useSetRecoilState(applyModalState);
	const diffDate = calculateDate(deadline);
	const queryClient = useQueryClient();
	const [needLoginModal, setNeedLoginModal] = useRecoilState(needLoginModalState);

	const { mutate: bookmarked } = useBookmark({ queryKey: 'detailedPage' });
	const { mutate: unBookmarked } = useDelBookmark({ queryKey: 'detailedPage' });

	const cancelApplyTeam = useMutation({
		mutationFn: (pageNum: number) => cancelApply(pageNum),
	});
	const setIsCancel = useSetRecoilState(applyCancelModalState);

	const onClickApply = () => {
		if (isLoggedIn) {
			setIsModal(true);
		} else {
			setNeedLoginModal({ isOpen: true, type: 'RECRUIT_APPLY' });
		}
	};

	const onClickCancel = () => {
		cancelApplyTeam.mutate(pageNum, {
			onSuccess: () => {
				setIsCancel(true);
				queryClient.invalidateQueries({ queryKey: ['detailedPage'] });
			},
		});
	};

	const onClickBookmark = () => {
		if (!isLoggedIn) {
			setNeedLoginModal({ isOpen: true, type: 'BOOKMARK' });
			return;
		}
		if (!isBookmarked) {
			bookmarked(pageNum);
		} else {
			unBookmarked(pageNum);
		}
	};

	return (
		<>
			<button type='button' className='btn-bookmark' onClick={onClickBookmark}>
				<img src={isBookmarked ? FilledBookmark : UnfilledBookmark} />
				<span>북마크</span>
			</button>
			{isApplied ? (
				<button type='button' className='apply' onClick={onClickApply}>
					<span>신청하기 {Number(diffDate) < 8 && Number(diffDate) > 0 && `D-${diffDate}`}</span>
				</button>
			) : (
				<button type='button' className='cancel' onClick={onClickCancel}>
					<span>신청취소</span>
				</button>
			)}
		</>
	);
};

export default ApplierFooter;
