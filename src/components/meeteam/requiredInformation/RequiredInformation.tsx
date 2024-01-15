import React from 'react';
import S from './RequiredInformation.styled';
import { ColorMatching } from '../../../utils';

const RequiredInformation = () => {
	interface RequiredInformation {
		title: string;
		content: string;
	}
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

	const isRound = (title: string) => {
		const roundTitles = ['유형', '진행'];

		if (roundTitles.includes(title)) {
			return false;
		}
		return true;
	};

	return (
		<S.RequiredInformationGrid>
			{informationList.map((information, index) => (
				<S.RequiredInformationItem key={index}>
					<S.RequiredInformationHead>{information.title}</S.RequiredInformationHead>
					<div className='required-information__row'>
						{information.content.split(',').map((content, index) => (
							<S.RequiredInformationSpan
								$isRound={isRound(information.title)}
								$color={ColorMatching(content)}
								key={index}
							>
								{content}
							</S.RequiredInformationSpan>
						))}
					</div>
				</S.RequiredInformationItem>
			))}
		</S.RequiredInformationGrid>
	);
};

export default RequiredInformation;
