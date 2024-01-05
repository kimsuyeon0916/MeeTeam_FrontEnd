import React, { useState } from 'react';
import S from './Link.styled';
import { linkList, linkBottomArrowIcon, linkShortCutsButton } from './linkList';
import { Option } from '../../../../utils';

const Link = () => {
	const optionList = [
		{
			title: '편집', // 해당 옵션 이름 부여
			optionClickHandler: () => setEditMode(true), // 해당 핸들러 대입
		},
	];

	const [editMode, setEditMode] = useState(false);

	const copyLinkIcon: string =
		'https://s3-alpha-sig.figma.com/img/05ef/6744/dbc3fa3693c319737315c7eb7568b0a5?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hcpN-~UN7asKyK-Q8KZPWiQD6MzsrFEm6Bi3QQaTcRJVTQ9GIo56SBIBmKm97NDEmP8IWE~gCxkttWulIgS-UoMyNDTkbhj1G~ngiVzp4MdD89jkVOSHb~U2o2TaTFStQh~JRqN2cB2PtNYDSb43BPNxzSPxZxnBs1cEFG0zFy~1Fs7bNoUViEzacBxzqjoQx7qfNuaxklw4-89T~r~HfSUyRbZph77B~sTu0EyO74jjFqUbCoUFgIJHBtg6X48g4Dz3lh8GLOmF8y~sYe2M2Ag~VMsq1ONLh41wN7~nOH3s-5v0WD2Cn78eYpQMOiiWYo48E5zd3lgb2sTQiYANhg__';

	const copyClipBoardHandler = async (url: string) => {
		try {
			await navigator.clipboard.writeText(url);
			alert('클립보드에 링크가 복사되었습니다!');
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<form>
			<S.LinkLayout>
				<div className='main__row'>
					<h2 className='main--big-text'>링크</h2>
					{editMode ? (
						<S.LinkSaveButton type='submit' onClick={() => setEditMode(false)}>
							저장하기
						</S.LinkSaveButton>
					) : (
						<Option options={optionList} />
					)}
				</div>
				{(editMode ? linkList : linkList.filter(element => element.link !== ``)).map(
					(element, index) => (
						<div className='link__row' key={index}>
							<S.LinkImageIcon src={element.icon} />
							{editMode && linkBottomArrowIcon}
							{editMode ? (
								<S.LinkInput type='url' defaultValue={element.link} />
							) : (
								<a href={element.link} target='_blank' rel='noreferrer noopener'>
									{element.link}
								</a>
							)}
							{editMode ? (
								<S.LinkCopyIcon
									src={copyLinkIcon}
									onClick={() => copyClipBoardHandler(element.link)}
								/>
							) : (
								<a href={element.link} target='_blank' rel='noreferrer noopener'>
									{linkShortCutsButton}
								</a>
							)}
						</div>
					)
				)}
			</S.LinkLayout>
		</form>
	);
};

export default Link;
