import React, { useState } from 'react';
import S from './Link.styled';
import { KebabMenu, linkList, LINK_SHORTCUTS_BUTTON } from '../../..';
import { CopyClipBoard } from '../../../../utils';

const MeeteamLink = () => {
	const optionList = [
		{
			title: '편집', // 해당 옵션 이름 부여
			optionClickHandler: () => setEditMode(true), // 해당 핸들러 대입
		},
	];

	const [editMode, setEditMode] = useState(false);

	const copyLinkIcon: string =
		'https://s3-alpha-sig.figma.com/img/05ef/6744/dbc3fa3693c319737315c7eb7568b0a5?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jFAAgsBEHGI2YKE6NHhi7FTrA2b~u~juWVyopEsGZGuJSVhQ8MWcqY-Re~dEsFr55y3P4Hrw6sJKpzHF~HcWqd3q-caE~b1a7TAMX45gbdhrghV5A2jZP78bqtHr78nEmomwTRSmpAegNFWHnH0Gl7Nu9W01SFuuJdTmSGckrB8901Jfi1yuZeL1RT8T-N-FL7ME0H6xf-o-6WX8MdMytZctVF7qvLgUyPrOXE4NwJhnsMvHeZ~OKsfYy2SUx8gEjvh9OLXKQzS9WF9kEHrLj-F6lPdODyLPpbTU6vJzuTkqVadqPSP1R0NKeh8hOGgmLQy7FnebopbQTJp9kDGwEQ__';

	return (
		<S.LinkForm>
			<S.LinkLayout>
				<header className='main__row'>
					<h2 className='main--big-text'>링크</h2>
					{editMode ? (
						<div className='link__button-row'>
							<S.LinkCancelButton type='button' onClick={() => setEditMode(false)}>
								취소
							</S.LinkCancelButton>
							<S.LinkSaveButton type='submit' onClick={() => setEditMode(false)}>
								저장
							</S.LinkSaveButton>
						</div>
					) : (
						<KebabMenu options={optionList} />
					)}
				</header>
				{(editMode ? linkList : linkList.filter(element => element.link !== ``)).map(
					(element, index) => (
						<div className='link__row' key={index}>
							<S.LinkImageIcon src={element.icon} alt={element.title + ` 아이콘`} />
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
								<span className='link__icon'>
									<S.LinkCopyIcon
										src={copyLinkIcon}
										alt={element.title + ` 클립보드 복사`}
										onClick={() => CopyClipBoard(element.link)}
									/>
								</span>
							) : (
								<a
									className='link__icon'
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
		</S.LinkForm>
	);
};

export default MeeteamLink;
