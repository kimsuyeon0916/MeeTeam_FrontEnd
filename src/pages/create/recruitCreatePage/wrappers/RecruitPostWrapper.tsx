import React, { useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { modules } from '../../../../utils/index';
import { Subtitle } from '../../../../components';
import S from './RecruitPostWrapper.styled';

const RecruitPostWrapper = () => {
	const quillRef = useRef<ReactQuill | null>(null);

	return (
		<S.RecruitPostWrapper>
			<article className='title'>
				<Subtitle>{'제목'}</Subtitle>
				<input type='text' placeholder='제목을 입력해주세요' />
			</article>
			<article className='container__intro'>
				<Subtitle>{'구인글'}</Subtitle>
				<div>
					<ReactQuill className='editor' ref={quillRef} theme='snow' modules={modules} />
				</div>
			</article>
		</S.RecruitPostWrapper>
	);
};

export default RecruitPostWrapper;
