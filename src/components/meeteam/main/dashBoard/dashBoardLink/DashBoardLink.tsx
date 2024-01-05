import React from 'react';
import S from './DashBoardLink.styled';
import { linkList, linkPlusIcon, linkShortCutsButton } from '../../link/linkList';
import { useRecoilState } from 'recoil';
import { contentState } from '../../../../../atom';
import { statusRightArrowIcon } from '../../../..';

const DashBoardLink = () => {
	const [content, setContent] = useRecoilState(contentState);

	const checkRegistration = () => {
		if (linkList.find(element => element.link !== ``) === undefined) {
			return false;
		}
		return true;
	};

	return (
		<S.DashBoardLinkLayout>
			<div className='main__row'>
				<h2 className='main--big-text'>링크</h2>
				{checkRegistration() && (
					<S.DashBoardLinkPlusButton type='button' onClick={() => setContent('밋팀')}>
						{linkPlusIcon}
					</S.DashBoardLinkPlusButton>
				)}
			</div>
			{checkRegistration() ? (
				<>
					<div className='dash-board-link__box'>
						등록된 링크가 없어요.
						<div className='dash-board-link__box--small-text'>
							멤버들과 연락할 수 있는 링크를 등록해주세요!
						</div>
					</div>
					<S.DashBoardLinkRegisterButton type='button' onClick={() => setContent('밋팀')}>
						연락수단 등록하기
						{statusRightArrowIcon}
					</S.DashBoardLinkRegisterButton>
				</>
			) : (
				linkList
					.filter(element => element.link !== ``)
					.map((element, index) => (
						<div className='link__row' key={index}>
							<S.DashBoardLinkImageIcon src={element.icon} />
							<a href={element.link} target='_blank' rel='noreferrer noopener'>
								{element.title}
							</a>
							<a href={element.link} target='_blank' rel='noreferrer noopener'>
								{linkShortCutsButton}
							</a>
						</div>
					))
			)}
		</S.DashBoardLinkLayout>
	);
};

export default DashBoardLink;
