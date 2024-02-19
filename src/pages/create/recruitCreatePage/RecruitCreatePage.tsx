import React, { useRef, useState, useCallback } from 'react';
import { Plus } from '../../../assets';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
	Subtitle,
	Dot,
	InputDropdown,
	MeeteamTag,
	MemberInviteModal,
} from '../../../components/index';
import {
	areaRecruitState,
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

const RecruitCreatePage = () => {
	const area = useRecoilValue(areaRecruitState);
	const field = useRecoilValue(fieldRecruitState);
	const category = useRecoilValue(categoryRecruitState);
	const deadline = useRecoilValue(deadlineState);
	const quillRef = useRef<ReactQuill | null>(null);

	const [teamName, setTeamName] = useState<string>('');
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const [startDate, endDate] = useRecoilValue(dateRecruitState);
	const [memberList, setMemberList] = useRecoilState(memberListState);
	const [modalOpen, setModalOpen] = useRecoilState<boolean>(memberModalState);

	const [isValidName, setIsValidName] = useState({
		validName: false,
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

	const onChangeTeamName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTeamName(event.target.value);
		setIsValidName({ validName: true, validMessage: '' });
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
		if (teamName.length === 0) {
			setIsValidName({ validName: false, validMessage: '* 구인 글 제목을 입력해주세요.' });
		}
		if (teamName.length !== 0) {
			setIsValidName({ validName: true, validMessage: '' });
		}

		// 밋팀 범위 검사
		if (area === '') {
			setIsValidArea({ validArea: false, validMessage: '* 범위를 선택해주세요.' });
		}
		if (area !== '') {
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
			<div className='procedure'>
				<div className='procedure__subtitle'>구인글 작성</div>
				<div className='procedure__intro'>
					<p>구인에 대한 정보를 입력하시고 소개해주세요.</p>
				</div>
			</div>
			<div className='wrapper'>
				<form onSubmit={handleSubmit} id='submit'>
					<div className='container'>
						<div className='container__teamname'>
							<div className='container__teamname-subtitle'>
								<Subtitle>{'구인글 제목'}</Subtitle>
								<Dot />
							</div>
							<div className='container__teamname-input'>
								<input
									placeholder='구인 글의 제목을 입력해주세요.'
									type='text'
									onChange={onChangeTeamName}
									maxLength={20}
								/>
							</div>
							<span className='teamname-length'>
								{teamName.length > 20 ? 20 : teamName.length} / 20
							</span>
							{!isValidName.validName && <p>{isValidName.validMessage}</p>}
						</div>
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
