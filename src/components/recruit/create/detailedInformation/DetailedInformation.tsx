import React, { useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { useRecoilState } from 'recoil';
import { modules } from '../../../../utils';
import { recruitInputState } from '../../../../atom';
import S from './DetailedInformation.styled';
import { useValid } from '../../../../hooks';
import 'react-quill/dist/quill.snow.css';

const DetailedInformation = () => {
	const quillRef = useRef<ReactQuill | null>(null);
	const [formData, setFormData] = useRecoilState(recruitInputState);
	const { validMessage, isValid } = useValid(formData);

	const preventInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
		// 입력을 허용하지 않을 키 코드를 배열에 정의합니다.
		const forbiddenKeys = ['"', "'"];

		// 입력 이벤트가 허용되지 않는 키를 누르면 이벤트를 취소합니다.
		if (forbiddenKeys.includes(event.key)) {
			event.preventDefault();
		}
	};

	const onChangeContents = (contents: string) => {
		const sanitizedContent = contents.replace(/ class="[^"]*ql-indent-1[^"]*"/g, '');
		setFormData({ ...formData, content: sanitizedContent });
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
						value={formData.content}
						onKeyDown={preventInput}
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
