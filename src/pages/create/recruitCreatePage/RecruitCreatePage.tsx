import React, { useEffect, useRef, useState } from 'react';
import S from './RecruitCreatePage.styled';
import { DateSelect, DeadlineSelect, MeeteamTag } from '../../../components/index';
import RecruitInfoWrapper from './wrappers/RecruitInfoWrapper';
import RecruitPostWrapper from './wrappers/RecruitPostWrapper';
import { useMutation } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { recruitInputState, validState } from '../../../atom';
import { postingRecruit } from '../../../api';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import { modules } from '../../../utils';
import { XBtn, Plus } from '../../../assets';
import { Role } from '../../../types';

const descriptions = [
	'함께할 멤버들에게 알릴 기본 정보들을 기입해주세요!',
	'기본 정보를 기반으로 구인글을 제공할 수 있습니다.',
];

const introductions = [
	'게시될 구인글을 작성해주세요!',
	'어떤 방식으로 진행하고 싶은지 구체적으로 작성해주세요.',
];

const RecruitCreatePage = () => {
	const navigate = useNavigate();
	const [info, setInfo] = useRecoilState(recruitInputState);
	const [isSubmit, setIsSubmit] = useRecoilState(validState);
	const [posting, setPosting] = useState('');
	const quillRef = useRef<ReactQuill | null>(null);
	const [userRole, setUserRole] = useState<Role>({
		id: 0,
		role: {
			id: null,
			name: '',
		},
		count: '',
		skill: [],
	});

	const onClickCancel = () => {
		// 모달창 띄워서 한 번 더 확인시키고 이동하기
		// navigate('/');
	};

	const uploadPost = useMutation({
		mutationFn: () => postingRecruit(info),
	});

	const onChangeContents = (contents: string) => {
		setPosting(contents);
		setInfo({ ...info, contents: contents });
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setIsSubmit(prev => ({
			...prev,
			isSubmitted: true,
		}));

		uploadPost.mutate(info as any);
		// navigate(`/recruit/${uploadPost}`);
	};

	return (
		<S.RecruitCreatePage>
			<section className='container-introduction'>
				<h2>함께할 멤버들에게 알려줄 정보들을 작성해주세요.</h2>
				<h4>
					작성하신 구인글 정보들은 구인게시판을 통해 미래의 멤버들에게 보여집니다. 알려주고 싶은
					정보들을 자유롭게 작성해보세요!
				</h4>
			</section>
			<hr className='under-intro' />
			<section className='container-basic'>
				<section className='subtitle'>
					<h4>기본 정보</h4>
				</section>
				<section className='container-basic__inputs'>
					<article className='inputs-title'>
						<span className='input-subtitle'>구인글 제목 *</span>
						<input type='text' placeholder='40자 이내로 제목을 작성해주세요.' />
					</article>
					<article className='inputs-deadline'>
						<span className='input-subtitle'>구인글 마감일</span>
						<DeadlineSelect />
					</article>
					<article className='inputs-scope-category'>
						<section className='container-scope'>
							<span className='input-subtitle'>범위 *</span>
							<section className='radio-btns'>
								<section className='radio-btn'>
									<input className='radio-input' type='radio' id='inside' name='scope' />
									<label htmlFor='inside'>교내</label>
								</section>
								<section className='radio-btn'>
									<input className='radio-input' type='radio' id='outside' name='scope' />
									<label htmlFor='outside'>교외</label>
								</section>
							</section>
						</section>
						<section className='container-category'>
							<span className='input-subtitle'>유형 *</span>
							<section className='radio-btns'>
								<section className='radio-btn'>
									<input className='radio-input' type='radio' id='project' name='category' />
									<label htmlFor='project'>프로젝트</label>
								</section>
								<section className='radio-btn'>
									<input className='radio-input' type='radio' id='study' name='category' />
									<label htmlFor='study'>스터디</label>
								</section>
								<section className='radio-btn'>
									<input className='radio-input' type='radio' id='contest' name='category' />
									<label htmlFor='contest'>공모전</label>
								</section>
							</section>
						</section>
					</article>
					<article className='inputs-dates'>
						<span className='input-subtitle'>진행 기간 *</span>
						<section className='container-dates'>
							<div className='start-date'>
								<DateSelect />
							</div>
							<div className='end-date'>
								<DateSelect />
							</div>
						</section>
					</article>
					<article className='inputs-procedure'>
						<span className='input-subtitle'>진행방식 *</span>
						<section className='radio-btns'>
							<section className='radio-btn'>
								<input className='radio-input' type='radio' id='offline' name='procedure' />
								<label htmlFor='offline'>오프라인</label>
							</section>
							<section className='radio-btn'>
								<input className='radio-input' type='radio' id='online' name='procedure' />
								<label htmlFor='online'>온라인</label>
							</section>
							<section className='radio-btn'>
								<input className='radio-input' type='radio' id='any' name='procedure' />
								<label htmlFor='any'>상관없음</label>
							</section>
						</section>
					</article>
					<article className='inputs-course'>
						<span className='input-subtitle'>수업 *</span>
						<section className='intro'>
							<span className='description'>
								수업이신 경우 오른쪽의 “수업” 체크박스를 눌러주세요.
							</span>
							<section>
								<input type='checkbox' id='course' />
								<label className='course-label' htmlFor='course'>
									수업
								</label>
							</section>
						</section>
						<section className='wrapper-inputs'>
							<section className='container-inputs'>
								<input type='text' placeholder='수업명' disabled />
							</section>
							<section className='container-inputs'>
								<input type='text' placeholder='교수명' disabled />
							</section>
						</section>
					</article>
				</section>
			</section>
			<hr className='under-info' />
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
					/>
				</section>
			</section>
			<hr className='under-info' />
			<section className='container-roles'>
				<section className='subtitle'>
					<h4>모집 역할</h4>
				</section>
				<section className='container-roles__control'>
					<article className='inputs'>
						<input className='role-input' type='text' placeholder='역할' />
						<input className='count-input' type='text' placeholder='인원' />
						<section className='container-skills'>
							{userRole.skill.map((tagItem, index) => {
								return (
									<article className='container-tags' key={index}>
										<span>{tagItem}</span>
										<button type='button'>
											<img src={XBtn} id={index.toString()} />
										</button>
									</article>
								);
							})}
							<input
								type='text'
								className='skills-input'
								placeholder={'해당 역할의 보유 스킬을 검색해주세요.'}
							/>
						</section>
					</article>
					<article className='add-btn'>
						<button type='button'>
							<img src={Plus} />
						</button>
					</article>
				</section>
			</section>
			<hr className='under-info' />
			<section className='container-tags'>
				<section className='subtitle'>
					<h4>태그</h4>
				</section>
				<section className='container-tags__inputs'>
					<MeeteamTag />
				</section>
			</section>
			<hr className='under-info' />
			<section className='container-btns'>
				<button type='button' className='cancel-btn'>
					취소
				</button>
				<button type='submit' className='submit-btn'>
					등록
				</button>
			</section>
		</S.RecruitCreatePage>
	);
};

export default RecruitCreatePage;
