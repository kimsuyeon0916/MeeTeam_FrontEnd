import React from 'react';
import { Icon } from '../..';
import { CommentInputFunctions } from '../../../types';
import S from './CommentInput.styled';

const CommentInput = ({
	contents,
	addComment,
	onKeyPress,
	onChangeHandler,
	onClickInput,
}: CommentInputFunctions) => {
	const isLogin = true; // 임시 코드

	return (
		<S.CommentInput>
			<article className='user-input'>
				<section className='user-input__icon'>
					<Icon />
				</section>
				<section className='user-input__container'>
					<input
						type='text'
						onKeyPress={onKeyPress}
						value={contents}
						onChange={onChangeHandler}
						onClick={onClickInput}
						placeholder={isLogin ? '댓글 추가...' : '로그인이 필요합니다.'}
					/>
					<button type='button' onClick={addComment}>
						댓글
					</button>
				</section>
			</article>
		</S.CommentInput>
	);
};

export default CommentInput;
