import React from 'react';
import S from '../applyClose/ApplyClose.styled';
import { useSetRecoilState } from 'recoil';
import { recruitPostingDeleteModalState } from '../../../../../atom';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { deletePostingRecruit } from '../../../../../service';

const PostingDelete = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const pageNumber = Number(id);
	const setIsDelete = useSetRecoilState(recruitPostingDeleteModalState);

	const deletePosting = useMutation({
		mutationFn: (pageNum: number) => deletePostingRecruit(pageNum),
		onSuccess: () => {
			navigate('/');
			setIsDelete(false);
		},
	});

	const onClickCancel = () => {
		setIsDelete(false);
	};

	const onClickDelete = () => {
		if (id) {
			deletePosting.mutate(pageNumber);
		}
	};
	return (
		<S.ApplyClose>
			<h3>구인글 삭제</h3>
			<section className='description'>
				<span className='body2-medium'>삭제된 구인글은 더 이상</span>
				<span className='body2-medium'>게시판에서 확인할 수 없습니다.</span>
				<span className='body2-medium'>해당 구인글을 완전히 삭제할까요?</span>
			</section>
			<section className='btn-container'>
				<button className='cancel btn-txt' onClick={onClickCancel}>
					취소
				</button>
				<button className='confirm btn-txt' onClick={onClickDelete}>
					삭제
				</button>
			</section>
		</S.ApplyClose>
	);
};

export default PostingDelete;
