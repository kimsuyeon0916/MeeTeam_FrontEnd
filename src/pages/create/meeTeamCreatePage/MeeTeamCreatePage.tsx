import React, { useRef, useState, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { modules } from '../../../utils/index';
import { Subtitle, Dot, InfoItem, MeeteamTag, AddButton } from '../../../components';
import { areaState, categoryState, dateState, fieldState } from '../../../atom';
import S from './MeeTeamCreatePage.styled';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const MeeTeamCreatePage = () => {
	// const navigate = useNavigate();
	const area = useRecoilValue(areaState);
	const field = useRecoilValue(fieldState);
	const category = useRecoilValue(categoryState);
	const quillRef = useRef<ReactQuill | null>(null);
	const [memberList, setMemberList] = useState([]);
	const copyMemberList = [...memberList];
	const [teamName, setTeamName] = useState<string>('');
	const [startDate, endDate] = useRecoilValue(dateState);
	const [file, setFile] = useState<string>('');
	const [fileName, setFileName] = useState<string>('');
	const [isHover, setIsHover] = useState<boolean>(false);

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

	const onClickMember = () => {
		// let updatedMemberList = [...memberList];
		// updatedMemberList.push(<MemberSelect id={memberList.length} />);
		// setMemberList(updatedMemberList);
	};

	const onClickDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (event.target instanceof Element) {
			const deletedIndex = Number(event.target.id);
			copyMemberList.splice(deletedIndex, 1);
			setMemberList(copyMemberList);
		}
	};

	const onClickCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
		// 모달창 띄워서 한 번 더 확인시키고 이동하기
		// navigate('/');
	};

	const onChangeTeamName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setTeamName(event.target.value);
		setIsValidName({ validName: true, validMessage: '' });
	}, []);

	const onChangeImg = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files !== null) {
			setFileName(event.target.files[0].name);
			const selectedFiles = event.target.files as FileList;
			setFile(URL.createObjectURL(selectedFiles?.[0]));
		}
	}, []);

	const handleMouseOver = () => {
		setIsHover(true);
	};

	const handleMouseOut = () => {
		setIsHover(false);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// 밋팀 팀명 글자수 검사
		if (teamName.length === 0) {
			setIsValidName({ validName: false, validMessage: '* 밋팀명을 입력해주세요.' });
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

		// 밋팀 기간 검사
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
	};

	return (
		<S.MeeTeamCreatePage>
			<div className='procedure'>
				<div className='procedure__subtitle'>새 밋팀 생성</div>
				<div className='procedure__intro'>
					<p>밋팀에 대한 정보를 입력하시고 소개해주세요.</p>
				</div>
			</div>
			<div className='wrapper'>
				<form onSubmit={handleSubmit}>
					<div className='container'>
						<div className='container__teamname'>
							<div className='container__teamname-subtitle'>
								<Subtitle>{'밋팀 이름'}</Subtitle>
								<Dot />
							</div>
							<div className='container__teamname-input'>
								<input
									placeholder='밋팀 이름을 입력해주세요.'
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
										<InfoItem isDot='true' title='범위' optionData={['교내', '교외']} type='범위' />
										{!isValidArea.validArea && <p>{isValidArea.validMessage}</p>}
									</div>
									<div>
										<InfoItem isDot='true' title='분야' optionData={['개발']} type='분야' />
										{!isValidField.validField && <p>{isValidField.validMessage}</p>}
									</div>
								</div>
								<div className='container__info-select'>
									<div>
										<InfoItem
											isDot='true'
											title='유형'
											optionData={['프로젝트', '스터디']}
											type='유형'
										/>
										{!isValidCategory.validCategory && <p>{isValidCategory.validMessage}</p>}
									</div>
									<div>
										<InfoItem isDot='false' title='진행 방식' optionData={['온라인', '오프라인']} />
									</div>
								</div>
								<div className='container__info-select'>
									<div>
										<InfoItem isDot='true' title='기간' optionData={[]} type='기간' />
										{!isValidDate.validDate && <p>{isValidDate.validMessage}</p>}
									</div>
									<div className='fix'>
										<InfoItem isDot='false' title='공개 여부' optionData={['공개', '비공개']} />
									</div>
								</div>
								<div className='container__info-select'>
									<div>
										<div className='title-info'>
											<Subtitle>{'수업'}</Subtitle>
											<span className='description'>수업인 경우에 체크해주세요.</span>
											<span className='description-check'>수업 선택</span>
											<input type='checkbox' />
										</div>
										<div className='container-course'>
											<input type='text' placeholder='수업명' />
											<input type='text' placeholder='교수명' />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='container__tag'>
							<div>
								<Subtitle>{'밋팀 태그'}</Subtitle>
							</div>
							<div>
								<MeeteamTag />
							</div>
						</div>
						<div className='container__intro'>
							<div>
								<Subtitle>{'밋팀 소개'}</Subtitle>
							</div>
							<div>
								<ReactQuill className='editor' ref={quillRef} theme='snow' modules={modules} />
							</div>
						</div>
						<div className='container__img'>
							<div>
								<Subtitle>{'커버 이미지'}</Subtitle>
							</div>
							<div className='container__img-input'>
								<input
									type='file'
									accept='image/*'
									id='meeteamImg'
									placeholder='이미지를 업로드해주세요.'
									onChange={onChangeImg}
								/>
								<label
									className={`file-label ${file ? 'haveFile' : ''}`}
									htmlFor='meeteamImg'
									onMouseOver={handleMouseOver}
									onMouseOut={handleMouseOut}
								>
									<img src='https://ifh.cc/g/YO5Z7z.jpg' />
									{isHover && (
										<div className='icon-upload'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='99'
												height='99'
												viewBox='0 0 99 99'
												fill='none'
												className='icon'
											>
												<path
													d='M66 49.5L49.5 33M49.5 33L33 49.5M49.5 33V66M90.75 49.5C90.75 72.2817 72.2817 90.75 49.5 90.75C26.7183 90.75 8.25 72.2817 8.25 49.5C8.25 26.7183 26.7183 8.25 49.5 8.25C72.2817 8.25 90.75 26.7183 90.75 49.5Z'
													stroke='white'
													stroke-width='5'
													stroke-linecap='round'
													stroke-linejoin='round'
												/>
											</svg>
										</div>
									)}
								</label>
							</div>
						</div>
						<div className='container__member'>
							<div className='container__member-title'>
								<Subtitle>{'멤버'}</Subtitle>
								<button type='button'>멤버 초대 +</button>
							</div>
							<div className='container__member-area'>
								{/* {memberList.map((memberItem, index) => {
									return (
										<div className='controll' key={index}>
											{React.cloneElement(memberItem, { key: index })}
											<button id={index.toString()}>초대</button>
											<button onClick={onClickDelete} id={index.toString()}>
												삭제
											</button>
										</div>
									);
								})} */}
								<div className='container__member-area__element'></div>
							</div>
							{/* <div className='container__member-add'>
								{memberList.length !== 6 && (
									<div className='addition' onClick={onClickMember}>
										<AddButton />
									</div>
								)}
							</div> */}
						</div>
						<div className='container__controller'>
							<button onClick={onClickCancel}>취소</button>
							<button type='submit'>생성하기</button>
						</div>
					</div>
				</form>
			</div>
		</S.MeeTeamCreatePage>
	);
};

export default MeeTeamCreatePage;
