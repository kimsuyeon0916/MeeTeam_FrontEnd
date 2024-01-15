import React, { useState, useRef } from 'react';
import S from './SubInformation.styled';
import { Option, modules, formats } from '../../../../../utils';
import { recruitmentInformation, BOTTOM_ARROW_ICON, TOP_ARROW_BUTTON } from '../../../../index';

const RecruitmentInformation = () => {
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
			<S.SubInformationLayout $fold={fold} $editMode={editMode}>
				<S.SubInformationHeader>
					<h2 className='main--big-text'>구인 글</h2>
					{editMode ? '' : <Option options={optionList} />}
				</S.SubInformationHeader>
				<div className='sub-information__column'>
					<label className='sub-information__row'>
						<span className='sub-information__label'>제목</span>
						{editMode ? (
							<S.SubInformationInput
								type='text'
								placeholder='구인 글 제목을 입력해주세요.'
								defaultValue={recruitmentInformation.title}
							/>
						) : (
							<S.SubInformationBox>{recruitmentInformation.title}</S.SubInformationBox>
						)}
					</label>
					<label className='sub-information__row'>
						<span className='sub-information__label'>소개</span>
						{editMode ? (
							<S.SubInformationEditor
								ref={quillRef}
								placeholder='구인 글 소개를 입력해주세요.'
								value={recruitmentInformation.content}
								modules={modules}
								formats={formats}
							/>
						) : (
							<S.SubInformationBox $fold={fold}>
								{recruitmentInformation.content}
							</S.SubInformationBox>
						)}
					</label>
				</div>
				{editMode ? (
					<div className='sub-information__button-row'>
						<S.SubInformationCancelButton type='button' onClick={() => setEditMode(false)}>
							취소
						</S.SubInformationCancelButton>
						<S.SubInformationSaveButton type='submit' onClick={() => setEditMode(false)}>
							저장하기
						</S.SubInformationSaveButton>
					</div>
				) : (
					<S.SubInformationViewButton type='button' onClick={() => setFold(!fold)}>
						{fold ? BOTTOM_ARROW_ICON : TOP_ARROW_BUTTON}
					</S.SubInformationViewButton>
				)}
			</S.SubInformationLayout>
		</form>
	);
};

export default RecruitmentInformation;
