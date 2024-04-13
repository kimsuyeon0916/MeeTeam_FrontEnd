import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import { useRecoilState } from 'recoil';
import { modules } from '../../../../utils';
import { recruitInputState } from '../../../../atom';
import S from './DetailedInformation.styled';

const DetailedInformation = () => {
	const quillRef = useRef<ReactQuill | null>(null);
	const [info, setInfo] = useRecoilState(recruitInputState);
	const [posting, setPosting] = useState(info.content);

	const onChangeContents = (contents: string) => {
		setPosting(contents);
		setInfo({ ...info, content: contents });
	};

	return (
		<S.DetailedInformation>
			<section className='container-details'>
				<section className='subtitle'>
					<h4>상세 내용</h4>
				</section>
				<section className='container-details__editor'>
					<span className='intro'>
						미래의 멤버들에게 보여줄 자세한 내용을 자유롭게 작성해주세요. *
					</span>
					<ReactQuill
						className='editor'
						ref={quillRef}
						theme='snow'
						modules={modules}
						onChange={onChangeContents}
						value={posting}
					/>
				</section>
			</section>
			<hr className='under-info' />
		</S.DetailedInformation>
	);
};

export default DetailedInformation;
