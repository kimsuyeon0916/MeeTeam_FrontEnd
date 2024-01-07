import React, { useState, useRef } from 'react';
import S from './MeeteamInformation.styled';
import { Option, modules, formats } from '../../../../../utils';
import { meeteamInformation, BOTTOM_ARROW_ICON, TOP_ARROW_BUTTON } from '../../../../index';

const MeeteamInformation = () => {
	const optionList = [
		{
			title: '편집',
			optionClickHandler: () => setEditMode(true),
		},
	];

	const quillRef = useRef(null);
	const [editMode, setEditMode] = useState(false);

	const [fold, setFold] = useState(true);

	return (
		<form>
			<S.MeeteamInformationLayout $fold={fold} $editMode={editMode}>
				<S.MeeteamInformationHeader>
					<h2 className='main--big-text'>밋팀 정보</h2>
					{editMode ? '' : <Option options={optionList} />}
				</S.MeeteamInformationHeader>
				<div className='meeteam-information__column'>
					<label className='meeteam-information__row'>
						<span className='meeteam-information__label'>제목</span>
						{editMode ? (
							<S.MeeteamInformationInput
								type='text'
								placeholder='밋팀 제목을 입력해주세요.'
								defaultValue={meeteamInformation.title}
							/>
						) : (
							<S.MeeteamInformationBox>{meeteamInformation.title}</S.MeeteamInformationBox>
						)}
					</label>
					<label className='meeteam-information__row'>
						<span className='meeteam-information__label'>소개</span>
						{editMode ? (
							<S.MeeteamInformationEditor
								ref={quillRef}
								placeholder='밋팀 소개를 입력해주세요.'
								value={meeteamInformation.content}
								modules={modules}
								formats={formats}
							/>
						) : (
							<S.MeeteamInformationBox $fold={fold}>
								{meeteamInformation.content}
							</S.MeeteamInformationBox>
						)}
					</label>
				</div>
				{editMode ? (
					<div className='meeteam-information__button-row'>
						<S.MeeteamInformationCancelButton type='button' onClick={() => setEditMode(false)}>
							취소
						</S.MeeteamInformationCancelButton>
						<S.MeeteamInformationSaveButton type='submit' onClick={() => setEditMode(false)}>
							저장하기
						</S.MeeteamInformationSaveButton>
					</div>
				) : (
					<S.MeeteamInformationViewButton type='button' onClick={() => setFold(!fold)}>
						{fold ? BOTTOM_ARROW_ICON : TOP_ARROW_BUTTON}
					</S.MeeteamInformationViewButton>
				)}
			</S.MeeteamInformationLayout>
		</form>
	);
};

export default MeeteamInformation;
