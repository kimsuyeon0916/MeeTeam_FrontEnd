import React, { useRef, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Subtitle, Dot, InputDropdown, MeeteamTag, TitleAndIntro } from '../../../components/index';
import {
	scopeRecruitState,
	fieldRecruitState,
	dateRecruitState,
	deadlineState,
	categoryRecruitState,
	memberListState,
	memberModalState,
} from '../../../atom';
import { modules } from '../../../utils/index';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import S from './RecruitCreatePage.styled';
import MemberTest from '../../../components/meeteam/main/member/MemberTest';

const descriptions = [
	'함께할 멤버들에게 알릴 기본 정보들을 기입해주세요!',
	'기본 정보를 기반으로 구인글을 제공할 수 있습니다.',
];

const RecruitCreatePage = () => {
	const scope = useRecoilValue(scopeRecruitState);
	const field = useRecoilValue(fieldRecruitState);
	const category = useRecoilValue(categoryRecruitState);
	const deadline = useRecoilValue(deadlineState);

	const quillRef = useRef<ReactQuill | null>(null);

	const [title, setTitle] = useState<string>('');
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const [startDate, endDate] = useRecoilValue(dateRecruitState);
	const [memberList, setMemberList] = useRecoilState(memberListState);
	const [modalOpen, setModalOpen] = useRecoilState<boolean>(memberModalState);

	const [isValidTitle, setIsValidTitle] = useState({
		validTitle: false,
		validMessage: '',
	});
	const [isValidArea, setIsValidArea] = useState({
		validArea: false,
		validMessage: '',
	});
	const [isValidField, setIsValidField] = useState({
		validField: false,
		validMessage: '',
	});
	const [isValidCategory, setIsValidCategory] = useState({
		validCategory: false,
		validMessage: '',
	});
	const [isValidDate, setIsValidDate] = useState({
		validDate: false,
		validMessage: '',
	});
	const [isValidDeadline, setIsValidDeadline] = useState({
		validDeadline: false,
		validMessage: '',
	});

	const onClickCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
		// 모달창 띄워서 한 번 더 확인시키고 이동하기
		// navigate('/');
	};

	const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
		setIsValidTitle({ validTitle: true, validMessage: '' });
	};

	const onClickTestAdd = () => {
		let temp = [...memberList];
		temp.push((<MemberTest id={(temp.length - 1).toString()} />) as any);
		setMemberList(temp);
		setModalOpen(false);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// 구인 글 제목 글자수 검사
		if (title.length === 0) {
			setIsValidTitle({ validTitle: false, validMessage: '* 구인 글 제목을 입력해주세요.' });
		}
		if (title.length !== 0) {
			setIsValidTitle({ validTitle: true, validMessage: '' });
		}

		// 밋팀 범위 검사
		if (scope === '') {
			setIsValidArea({ validArea: false, validMessage: '* 범위를 선택해주세요.' });
		}
		if (scope !== '') {
			setIsValidArea({ validArea: true, validMessage: '' });
		}

		// 밋팀 분야 검사
		if (field === '') {
			setIsValidField({ validField: false, validMessage: '* 분야를 선택해주세요.' });
		}
		if (field !== '') {
			setIsValidField({ validField: true, validMessage: '' });
		}

		// 밋팀 유형 검사
		if (category === '') {
			setIsValidCategory({ validCategory: false, validMessage: '* 유형을 선택해주세요.' });
		}
		if (category !== '') {
			setIsValidCategory({ validCategory: true, validMessage: '' });
		}

		// 기간 검사
		if (endDate < new Date()) {
			setIsValidDate({
				validDate: false,
				validMessage: '* 날짜를 다시 설정해주세요.',
			});
		}
		if (endDate > new Date()) {
			setIsValidDate({
				validDate: true,
				validMessage: '',
			});
		}

		// 구인 마감일 검사
		if (deadline < new Date()) {
			setIsValidDeadline({
				validDeadline: false,
				validMessage: '* 날짜를 다시 설정해주세요.',
			});
		}
		if (deadline > new Date()) {
			setIsValidDeadline({
				validDeadline: true,
				validMessage: '',
			});
		}
	};
	return (
		<S.RecruitCreatePage>
			<TitleAndIntro title='구인글 작성' descriptions={descriptions} />
			<div className='wrapper'>
				<form onSubmit={handleSubmit} id='submit'>
					<div className='container'>
						<div className='container__info'>
							<div className='info-wrapper'>
								<div className='container__info-select'>
									<div>
										<InputDropdown
											isDot='true'
											title='범위'
											optionData={['교내', '교외']}
											type='범위'
											key='area'
										/>
										{!isValidArea.validArea && <p>{isValidArea.validMessage}</p>}
									</div>
									<div>
										<InputDropdown
											isDot='true'
											title='분야'
											optionData={['개발']}
											type='분야'
											key='field'
										/>
										{!isValidField.validField && <p>{isValidField.validMessage}</p>}
									</div>
								</div>
								<div className='container__info-select'>
									<div>
										<InputDropdown
											isDot='true'
											title='유형'
											optionData={['프로젝트', '스터디']}
											type='유형'
											key='category'
										/>
										{!isValidCategory.validCategory && <p>{isValidCategory.validMessage}</p>}
									</div>
									<div>
										<InputDropdown
											isDot='false'
											title='진행 방식'
											optionData={['온라인', '오프라인']}
											key='process'
										/>
									</div>
								</div>
								<div className='container__info-select'>
									<div>
										<InputDropdown
											isDot='true'
											title='기간'
											optionData={[]}
											type='기간'
											key='period'
										/>
										{!isValidDate.validDate && <p>{isValidDate.validMessage}</p>}
									</div>
									<div className='fix'>
										<InputDropdown
											isDot='false'
											title='공개 여부'
											optionData={['공개', '비공개']}
											key='open'
										/>
									</div>
								</div>
								<div className='container__info-select'>
									<div>
										<div className='title-info'>
											<Subtitle>{'수업'}</Subtitle>
											<span className='description'>수업인 경우에 체크해주세요.</span>
											<span className='description-check'>수업 선택</span>
											<input type='checkbox' onClick={() => setIsChecked(prev => !prev)} />
										</div>
										<div className='container-course'>
											<input
												type='text'
												placeholder='수업명'
												className={!isChecked ? 'disable' : ''}
												disabled={!isChecked ? true : false}
											/>
											<input
												type='text'
												placeholder='교수명'
												className={!isChecked ? 'disable' : ''}
												disabled={!isChecked ? true : false}
											/>
										</div>
									</div>
								</div>
								<div className='container__info-select'>
									<div>
										<InputDropdown
											isDot='true'
											title='구인 마감일'
											optionData={[]}
											type='구인 마감일'
											key='deadline'
										/>
										{!isValidDeadline.validDeadline && <p>{isValidDeadline.validMessage}</p>}
									</div>
								</div>
							</div>
						</div>
						<div className='container__tag'>
							<div>
								<Subtitle>{'구인 태그'}</Subtitle>
							</div>
							<div>
								<MeeteamTag />
							</div>
						</div>
						<div className='container__intro'>
							<div>
								<Subtitle>{'구인글'}</Subtitle>
							</div>
							<div>
								<ReactQuill className='editor' ref={quillRef} theme='snow' modules={modules} />
							</div>
						</div>
					</div>
				</form>
			</div>
			<div className='container__controller'>
				<button onClick={onClickCancel}>취소</button>
				<button type='submit' form='submit'>
					등록하기
				</button>
			</div>
		</S.RecruitCreatePage>
	);
};

export default RecruitCreatePage;
