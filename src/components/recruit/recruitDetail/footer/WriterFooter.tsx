import React from 'react';
import { Edit, TrashCan } from '../../../../assets';
import { useSetRecoilState } from 'recoil';
import { applicantPageNum, applyCloseModalState, waitModalState } from '../../../../atom';
import { useNavigate } from 'react-router-dom';

interface WriterFooter {
	pageNum: number;
	onClickEditPage: () => void;
}

const WriterFooter = ({ pageNum, onClickEditPage }: WriterFooter) => {
	const navigate = useNavigate();
	const setIsClose = useSetRecoilState(applyCloseModalState);
	const setIsWait = useSetRecoilState(waitModalState);
	const setPageNum = useSetRecoilState(applicantPageNum);

	const onClickClose = () => {
		setIsClose(true);
	};

	const onClickDelete = () => {
		setIsWait(true);
	};

	const onClickApplicant = () => {
		setPageNum(pageNum);
		navigate('/recruitment/applicants');
	};
	return (
		<>
			<button type='button' className='btn-edit' onClick={onClickEditPage}>
				<img src={Edit} />
			</button>
			<button type='button' className='btn-delete' onClick={onClickDelete}>
				<img src={TrashCan} />
			</button>
			<button type='button' className='btn-navigate_appliers' onClick={onClickApplicant}>
				신청자 보러가기
			</button>
			<button type='button' className='btn-close' onClick={onClickClose}>
				마감하기
			</button>
		</>
	);
};

export default WriterFooter;
