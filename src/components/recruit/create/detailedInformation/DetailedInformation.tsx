import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import { useRecoilState } from 'recoil';
import { modules } from '../../../../utils';
import { recruitInputState } from '../../../../atom';
import S from './DetailedInformation.styled';
import { useValid } from '../../../../hooks';

const DetailedInformation = () => {
	const quillRef = useRef<ReactQuill | null>(null);
	const [formData, setFormData] = useRecoilState(recruitInputState);
	const [posting, setPosting] = useState(formData.content);
	const { validMessage, isValid } = useValid(formData);

	const onChangeContents = (contents: string) => {
		setPosting(contents);
		setFormData({ ...formData, content: contents });
	};

	return (
		<S.DetailedInformation>
			<section className='container-details'>
				<section className='subtitle'>
					<h4>상세 내용</h4>
				</section>
				<section className='container-details__editor'>
					<span className='intro'>
						미래의 멤버들에게 보여줄 자세한 내용을 자유롭게 작성해주세요.
						<span className='necessary'> *</span>
					</span>
					<ReactQuill
						className='editor'
						ref={quillRef}
						theme='snow'
						modules={modules}
						onChange={onChangeContents}
						value={posting}
					/>
					{isValid.isSubmitted && !isValid.isContent && (
						<p className='valid-msg'>{validMessage.content}</p>
					)}
				</section>
			</section>
			<hr className='under-info' />
		</S.DetailedInformation>
	);
};

export default DetailedInformation;
