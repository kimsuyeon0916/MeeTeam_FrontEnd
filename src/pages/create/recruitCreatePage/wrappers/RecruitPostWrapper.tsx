import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { modules } from '../../../../utils/index';
import { Subtitle } from '../../../../components';
import S from './RecruitPostWrapper.styled';
import { useRecoilState } from 'recoil';
import { recruitInputState } from '../../../../atom';

const RecruitPostWrapper = () => {
	const quillRef = useRef<ReactQuill | null>(null);
	const [info, setInfo] = useRecoilState(recruitInputState);
	const [posting, setPosting] = useState({
		title: '',
		contents: '',
	});

	const onChangeContents = (contents: string) => {
		setPosting({ ...posting, contents: contents });
		setInfo({ ...info, contents: contents });
	};

	const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
		const titleValue = event.target.value;
		setPosting({ ...posting, title: titleValue });
		setInfo({ ...info, title: titleValue });
	};

	return (
		<S.RecruitPostWrapper>
			<article className='title'>
				<Subtitle>{'제목'}</Subtitle>
				<input type='text' placeholder='제목을 입력해주세요' onChange={onChangeTitle} />
			</article>
			<article className='container__intro'>
				<Subtitle>{'구인글'}</Subtitle>
				<section>
					<ReactQuill
						className='editor'
						ref={quillRef}
						theme='snow'
						modules={modules}
						onChange={onChangeContents}
					/>
				</section>
			</article>
		</S.RecruitPostWrapper>
	);
};

export default RecruitPostWrapper;
