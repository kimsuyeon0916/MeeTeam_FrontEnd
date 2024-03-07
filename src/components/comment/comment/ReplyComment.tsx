import React, { useState } from 'react';
import S from './ReplyComment.styled';
import { Icon, KebabMenu } from '../..';
import { Comment } from '../../../types';

const ReplyComment = ({
	id,
	nickname,
	content,
	deleteComment,
	isWriter,
	createAt,
	profileImg,
}: Comment) => {
	const isLogin = true; // 임시 코드
	const [value, setValue] = useState<string>(content);
	const [showKebab, setShowKebab] = useState<boolean>(true);
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const isValid = isLogin && nickname === 'yeom' && showKebab;
	const optionLists = [
		{
			title: '수정',
			optionClickHandler: () => {
				setIsEdit(true);
				setShowKebab(false);
			},
		},
		{
			title: '삭제',
			optionClickHandler: () => {
				setShowKebab(false);
				if (deleteComment) {
					deleteComment(id);
				}
			},
		},
	];

	const editComment = () => {
		setIsEdit(false);
		setShowKebab(true);
	};

	const onChangeEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const onKeyPressEdit = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const target = event.currentTarget;
		if (target.value.length !== 0 && event.key === 'Enter') {
			event.preventDefault();
			editComment();
		}
	};
	return (
		<S.ReplyComment>
			<section className='wrapper'>
				<section className='container'>
					<div className='comment-icon'>
						<Icon />
					</div>
					{!isEdit ? (
						<div className='comment-info'>
							<span>{nickname}</span>
							<span>{value}</span>
						</div>
					) : (
						<>
							<input
								type='text'
								className='input-edit'
								placeholder='댓글 입력'
								value={value}
								onChange={onChangeEdit}
								onKeyPress={onKeyPressEdit}
							/>
							<button type='button' onClick={editComment} className='reply-btn'>
								수정
							</button>
						</>
					)}
				</section>
				{isValid && <KebabMenu options={optionLists} />}
			</section>
		</S.ReplyComment>
	);
};

export default ReplyComment;
