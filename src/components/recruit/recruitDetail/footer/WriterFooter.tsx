import React from 'react';
import { Edit, TrashCan } from '../../../../assets';
import { useSetRecoilState } from 'recoil';
import { applyCloseModalState } from '../../../../atom';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { deletePostingRecruit } from '../../../../service';

interface WriterFooter {
	isWriter: boolean;
	pageNum: number;
	onClickEditPage: () => void;
}

const WriterFooter = ({ isWriter, pageNum, onClickEditPage }: WriterFooter) => {
	const navigate = useNavigate();
	const setIsClose = useSetRecoilState(applyCloseModalState);
	sessionStorage.setItem('isWriter', isWriter.toString());

	const deletePosting = useMutation({
		mutationFn: (pageNum: number) => deletePostingRecruit(pageNum),
		onSuccess: () => {
			navigate('/');
		},
	});

	const onClickClose = () => {
		setIsClose(true);
	};

	const onClickDelete = () => {
		deletePosting.mutate(pageNum);
	};

	const onClickApplicant = () => {
		navigate(`/recruitment/applicants/${pageNum}`);
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
