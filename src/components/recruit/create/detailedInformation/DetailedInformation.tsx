import React, { useRef, useState } from 'react';
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

	const extractEmojis = (text: any) => {
		const regex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/gu;
		return text.match(regex) || [];
	};

	const onChangeContents = (contents: any) => {
		const emojis = extractEmojis(contents);
		let updatedContent = contents;

		emojis.forEach((emoji: any) => {
			const unicodeEmoji =
				emoji.length === 1
					? emoji.codePointAt(0).toString(16)
					: `${emoji.codePointAt(0).toString(16)}-${emoji.codePointAt(2).toString(16)}`;
			updatedContent = updatedContent.replace(emoji, `{{${unicodeEmoji}}}`);
		});

		console.log(contents);

		console.log(updatedContent);

		setFormData({ ...formData, content: updatedContent });
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
