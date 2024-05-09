import React from 'react';
import { Edit, TrashCan } from '../../../../assets';
import { useSetRecoilState } from 'recoil';
import { applyCloseModalState, recruitPostingDeleteModalState } from '../../../../atom';
import { useNavigate } from 'react-router-dom';

interface WriterFooter {
	writerId: string;
	pageNum: number;
	onClickEditPage: () => void;
}

const WriterFooter = ({ writerId, pageNum, onClickEditPage }: WriterFooter) => {
	const navigate = useNavigate();
	const setIsClose = useSetRecoilState(applyCloseModalState);
	const setIsDelete = useSetRecoilState(recruitPostingDeleteModalState);
	sessionStorage.setItem('writerId', writerId);

	const onClickClose = () => {
		setIsClose(true);
	};

	const onClickDelete = () => {
		setIsDelete(true);
	};

	const onClickApplicant = () => {
		navigate(`/recruitment/applicants/${pageNum}`);
	};
	return (
		<>
			<button type='button' className='btn-edit default' onClick={onClickEditPage}>
				<img src={Edit} />
			</button>
			<button type='button' className='btn-delete default' onClick={onClickDelete}>
				<img src={TrashCan} />
			</button>
			<button
				type='button'
				className='btn-navigate_appliers btn-txt__big'
				onClick={onClickApplicant}
			>
				신청자 보러가기
			</button>
			<button type='button' className='btn-close btn-txt__big' onClick={onClickClose}>
				마감하기
			</button>
		</>
	);
};

export default WriterFooter;
