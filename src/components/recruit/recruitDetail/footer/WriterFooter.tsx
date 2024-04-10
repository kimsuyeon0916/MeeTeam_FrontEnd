import React from 'react';
import { Edit, TrashCan } from '../../../../assets';
import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { editRecruitPost } from '../../../../service';

const WriterFooter = () => {
	const { id } = useParams();
	const pageNumber = Number(id);
	const closeRecruitment = useMutation({
		mutationFn: (pageNumber: number) => editRecruitPost(pageNumber),
	});

	const onClickClose = () => {
		if (id) {
			closeRecruitment.mutate(pageNumber);
		}
	};
	return (
		<>
			<button type='button' className='btn-edit'>
				<img src={Edit} />
			</button>
			<button type='button' className='btn-delete'>
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
