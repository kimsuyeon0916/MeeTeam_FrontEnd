import React from 'react';
import { Edit, TrashCan } from '../../../../assets';
import { useSetRecoilState } from 'recoil';
import { applyCloseModalState, waitModalState } from '../../../../atom';

interface WriterFooter {
	onClickEditPage: () => void;
}

const WriterFooter = ({ onClickEditPage }: WriterFooter) => {
	const setIsClose = useSetRecoilState(applyCloseModalState);
	const setIsWait = useSetRecoilState(waitModalState);

	const onClickClose = () => {
		setIsClose(true);
	};

	const onClickDelete = () => {
		setIsWait(true);
	};
	return (
		<>
			<button type='button' className='btn-edit' onClick={onClickEditPage}>
				<img src={Edit} />
			</button>
			<button type='button' className='btn-delete' onClick={onClickDelete}>
				<img src={TrashCan} />
			</button>
			<button type='button' className='btn-navigate_appliers'>
				신청자 보러가기
			</button>
			<button type='button' className='btn-close' onClick={onClickClose}>
				마감하기
			</button>
		</>
	);
};

export default WriterFooter;
