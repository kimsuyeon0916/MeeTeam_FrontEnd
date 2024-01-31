import React, { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Upload } from '../../../assets';
import { modules } from '../../../utils/index';
import { Subtitle, Dot, InfoItem, MeeteamTag } from '../../../components';
import { areaState, categoryState, dateState, fieldState } from '../../../atom';
import S from './OutputCreatePage.styled';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const OutputCreatePage = () => {
	const navigate = useNavigate();
	const constraintsRef = useRef(null);
	const quillRef = useRef<ReactQuill | null>(null);
	const area = useRecoilValue(areaState);
	const field = useRecoilValue(fieldState);
	const category = useRecoilValue(categoryState);
	const [startDate, endDate] = useRecoilValue(dateState);
	const [images, setImages] = useState(['Image 1', 'Image 2', 'Image 3', 'Image 4', 'Image 5']);
	const [teamName, setTeamName] = useState<string>('');
	const [imgFile, setImgFile] = useState<string>('');
	const [isHover, setIsHover] = useState<boolean>(false);
	const [file, setFile] = useState<string>('');
	const [fileName, setFileName] = useState<string>('');

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

	const onClickCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
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

	const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files !== null) {
			console.log(event);
			setFileName(event.target.files[0].name);
			const selectedFiles = event.target.files as FileList;
			setFile(URL.createObjectURL(selectedFiles?.[0]));
		}
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// 밋팀 팀명 글자수 검사
		if (teamName.length === 0) {
			setIsValidName({ validName: false, validMessage: '* 밋팀 이름을 입력해주세요.' });
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

	const handleMouseOver = () => {
		setIsHover(true);
	};

	const handleMouseOut = () => {
		setIsHover(false);
	};

	const onClickPreview = () => {
		navigate('preview');
	};

	const handleDragEnd = () => {};
	const handleDragLeave = () => {
		console.log('hi');
	};

	const onClickLinkAdd = () => {};

	return (
		<S.OutputCreatePage>
			<div className='procedure'>
				<div className='procedure__subtitle'>산출물 등록</div>
				<div className='procedure__intro'>
					<p>산출물에 대한 정보를 입력하시고 소개해주세요.</p>
				</div>
			</div>
			<div className='wrapper'>
				<form onSubmit={handleSubmit} id='submit'>
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
							</div>
						</div>
						<div className='container__tag'>
							<div>
								<Subtitle>{'밋팀 태그'}</Subtitle>
							</div>
							<div>
								<MeeteamTag tags={['React', 'Node.js', 'Spring']} />
							</div>
						</div>
						<div className='container__intro'>
							<div>
								<Subtitle>{'소개글'}</Subtitle>
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
									<img
										className='uploaded-img'
										src={imgFile ? imgFile : 'https://ifh.cc/g/YO5Z7z.jpg'}
									/>
									{isHover && (
										<div className='icon-upload'>
											<img className='icon' src={Upload} />
										</div>
									)}
								</label>
							</div>
						</div>
						<div className='container__outputs'>
							<div>
								<Subtitle>{'산출물 이미지'}</Subtitle>
								<p className='description'>
									{'이미지들은 드래그를 통해 순서를 변경할 수 있습니다.'}
								</p>
							</div>
							<div className='container__outputs--images' ref={constraintsRef}>
								{images.map((image, index) => (
									<div draggable='true' className='image' onDragLeave={handleDragLeave}>
										{image}
									</div>
								))}
							</div>
						</div>
						<div className='container__links'>
							<div>
								<Subtitle>{'링크'}</Subtitle>
								<p>
									깃헙, 노션으로 작성한 포트폴리오, 구글 드라이브 파일 등 작업 성과를 보여줄 수 있는
									링크가 있다면 작성해주세요.
								</p>
							</div>
							<div className='container__links--wrapper'>
								<button type='button' className='btn-add' onClick={onClickLinkAdd}>
									+ 추가
								</button>
								<div className='links'>
									<ul>
										<li className='link'>
											<div className='link-item'>
												<div className='link-item__dropdown'>
													<select id='link_name' name='link_name'>
														<option value='0'>Link</option>
														<option value='1'>github</option>
														<option value='2'>notion</option>
														<option value='3'>Google Drive</option>
													</select>
												</div>
												<div className='link-item__input'>
													<div>
														<input placeholder='링크를 입력해주세요.' className='link-address' />
													</div>
													<div>
														<input
															placeholder='링크 설명'
															value='링크 설명'
															className='link-description'
														/>
													</div>
												</div>
												<button>x</button>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div className='container__controller'>
				<button type='button' onClick={onClickPreview}>
					미리보기
				</button>
				<button type='button' onClick={onClickCancel}>
					취소
				</button>
				<button type='submit' form='submit'>
					등록하기
				</button>
			</div>
		</S.OutputCreatePage>
	);
};

export default OutputCreatePage;
