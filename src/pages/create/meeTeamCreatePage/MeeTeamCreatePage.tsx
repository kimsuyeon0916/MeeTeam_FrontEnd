import React, { useRef, useState } from 'react';
import { Plus, Upload } from '../../../assets';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modules } from '../../../utils/index';
import {
	Subtitle,
	Dot,
	InfoItem,
	MeeteamTag,
	MemberInviteModal,
	MemberTest,
} from '../../../components';
import {
	areaState,
	categoryState,
	dateState,
	fieldState,
	memberListState,
	memberModalState,
} from '../../../atom';
import S from './MeeTeamCreatePage.styled';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';

const MeeTeamCreatePage = () => {
	const navigate = useNavigate();
	const area = useRecoilValue(areaState);
	const field = useRecoilValue(fieldState);
	const category = useRecoilValue(categoryState);
	const quillRef = useRef<ReactQuill | null>(null);
	const imgRef = useRef<HTMLInputElement | null>(null);

	const [teamName, setTeamName] = useState<string>('');
	const [startDate, endDate] = useRecoilValue(dateState);
	const [imgFile, setImgFile] = useState<string>('');
	const [isHover, setIsHover] = useState<boolean>(false);
	const [isChecked, setIsChecked] = useState<boolean>(false);
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

	const onClickCancel = () => {
		// 모달창 띄워서 한 번 더 확인시키고 이동하기
		// navigate('/');
	};

	const onChangeTeamName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTeamName(event.target.value);
		setIsValidName({ validName: true, validMessage: '' });
	};

	const onChangeImg = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files !== null) {
			const selectedFiles = event.target.files[0];
			const reader = new FileReader();
			reader.readAsDataURL(selectedFiles);

			return new Promise<void>(resolve => {
				reader.onload = () => {
					setImgFile(reader.result as any);
					resolve();
				};
			});
		}
	};

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
		// navigate('/manage/meeteam');
	};

	const onClickTestAdd = () => {
		let temp = [...memberList];
		temp.push((<MemberTest id={(temp.length - 1).toString()} />) as any);
		setMemberList(temp);
		setModalOpen(false);
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
								<input type='file' accept='image/*' id='meeteamImg' onChange={onChangeImg} />
								<label
									className='file-label'
									htmlFor='meeteamImg'
									onMouseOver={handleMouseOver}
									onMouseOut={handleMouseOut}
								>
									<img src={imgFile ? imgFile : 'https://ifh.cc/g/YO5Z7z.jpg'} />
									{isHover && (
										<div className='icon-upload'>
											<img className='icon' src={Upload} />
										</div>
									)}
								</label>
							</div>
						</div>
						<div className='container__member'>
							<div className='container__member-title'>
								<Subtitle>{'멤버'}</Subtitle>
								<button
									type='button'
									onClick={() => {
										setModalOpen(prev => !prev);
									}}
								>
									멤버 초대 +
								</button>
							</div>
							{modalOpen && <MemberInviteModal onClick={onClickTestAdd} />}
							<div className='container__member-area'>
								{memberList.map((e, index) => (
									<MemberTest key={index} id={index.toString()} />
								))}
								<button
									type='button'
									onClick={() => {
										setModalOpen(prev => !prev);
									}}
									className='container__member-area__element'
								>
									<img src={Plus} />
								</button>
							</div>
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
