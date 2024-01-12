import React, { useState } from 'react';
import S from './Link.styled';
import { linkList, LINK_BOTTOM_ARROW_ICON, LINK_SHORTCUTS_BUTTON } from './LinkData';
import { Option, CopyClipBoard } from '../../../../utils';

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

	return (
		<form>
			<S.LinkLayout>
				<header className='main__row'>
					<h2 className='main--big-text'>링크</h2>
					{editMode ? (
						<div className='link__button-row'>
							<S.LinkCancelButton type='button' onClick={() => setEditMode(false)}>
								취소
							</S.LinkCancelButton>
							<S.LinkSaveButton type='submit' onClick={() => setEditMode(false)}>
								저장하기
							</S.LinkSaveButton>
						</div>
					) : (
						<Option options={optionList} />
					)}
				</header>
				{(editMode ? linkList : linkList.filter(element => element.link !== ``)).map(
					(element, index) => (
						<div className='link__row' key={index}>
							<S.LinkImageIcon src={element.icon} alt={element.title + ` 아이콘`} />
							{editMode && LINK_BOTTOM_ARROW_ICON}
							{editMode ? (
								<S.LinkInput type='url' defaultValue={element.link} />
							) : (
								<S.LinkAnchor
									href={element.link}
									title={element.title}
									target='_blank'
									rel='noreferrer noopener'
								>
									{element.link}
								</S.LinkAnchor>
							)}
							{editMode ? (
								<S.LinkCopyIcon
									src={copyLinkIcon}
									alt={element.title}
									onClick={() => CopyClipBoard(element.link)}
								/>
							) : (
								<a
									href={element.link}
									target='_blank'
									title={element.title}
									rel='noreferrer noopener'
								>
									{LINK_SHORTCUTS_BUTTON}
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
