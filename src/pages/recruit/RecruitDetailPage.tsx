import React from 'react';
import SRecruit from './RecruitDetailPage.styled';
import { useLocation } from 'react-router-dom';
import { Tag } from '../../components';
import ColorMatching from '../../utils/ColorMatching';

interface RequiredInformation {
	title: string;
	content: string;
}

const RecruitDetailPage = () => {
	const location = useLocation();

	const informationList: RequiredInformation[] = [
		{
			title: '범위',
			content: '교내',
		},
		{
			title: '유형',
			content: '프로젝트',
		},
		{
			title: '진행',
			content: '오프라인',
		},
		{
			title: '분야',
			content: '개발',
		},
		{
			title: '기간',
			content: '23.10.23 - 24.02.14',
		},
		{
			title: '태그',
			content: '응소실,Spring,C#,Window Form',
		},
	];

	const CONTENT =
		'밋팀(Meeteam)은 나 자신을 의미하는 Me, 팀을 의미하는 Team, 만남을 의미하는 Meet이 합쳐진 단어입니다. 대학생들의 보다 원활한 팀프로젝트를 위해 기획하게 되었으며, 그 외에 포토폴리오로서의 기능까지 생각하고 있습니다! 이를 위해 함께 멋진 서비스를 완성할 웹 디자이너를 찾고 있어요!';

	const isRound = (title: string) => {
		const roundTitles = ['유형', '진행'];

		if (roundTitles.includes(title)) {
			return false;
		}
		return true;
	};

	return (
		<SRecruit.RecruitDetailPage>
			<div className='container'>
				<div className='container-left'>
					<div className='container-info'>
						<div>
							<div className='container-info__title'>
								<h1>[커뮤니티 웹 서비스 프로젝트] 디자이너 모집</h1>
								<Tag $recruit={true} $proceed={false} />
							</div>
							<div className='container-info__writer'>
								<div className='profile-img'></div>
								<div>{'김민지'}</div>
							</div>
						</div>
						<div className='container-required__info'>
							{informationList.map((information, index) => (
								<SRecruit.RequiredInformationItem key={index}>
									<SRecruit.RequiredInformationHead>
										{information.title}
									</SRecruit.RequiredInformationHead>
									<div className='required-information__row'>
										{information.content.split(',').map((content, index) => (
											<SRecruit.RequiredInformationSpan
												$isRound={isRound(information.title)}
												$color={ColorMatching(content)}
												key={index}
											>
												{content}
											</SRecruit.RequiredInformationSpan>
										))}
									</div>
								</SRecruit.RequiredInformationItem>
							))}
						</div>
						<div className='container-introduction'>
							<h4>구인 글</h4>
							<p>{CONTENT}</p>
						</div>
					</div>
					<div className='container-current'></div>
					<div className='container-tags'></div>
				</div>
				<div className='container-right'>
					<div className='container-apply'></div>
					<div className='container-recommend'></div>
				</div>
			</div>
			<div className='container-comments'></div>
		</SRecruit.RecruitDetailPage>
	);
};

export default RecruitDetailPage;
