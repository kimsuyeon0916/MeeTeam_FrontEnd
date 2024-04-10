import React from 'react';
import S from './PortfolioInformation.styled';
import SkillTag from '../../skills/SkillTag';
import { Skill } from '../../../types';
import { format } from 'date-fns';

interface PortfolioInformation {
	field?: string;
	role?: string;
	startDate?: string;
	endDate?: string;
	proceedType?: string;
	skills?: Skill[];
}

const PortfolioInformation = ({
	field,
	role,
	startDate,
	endDate,
	proceedType,
	skills,
}: PortfolioInformation) => {
	return (
		<S.PortfolioInformationLayout>
			<S.PortfolioInformationGrid>
				<S.PortfolioInformationRow>
					<h5>분야</h5>
					{field}
				</S.PortfolioInformationRow>
				<S.PortfolioInformationRow>
					<h5>역할</h5>
					{role}
				</S.PortfolioInformationRow>
				<S.PortfolioInformationRow>
					<h5>진행기간</h5>
					{format(new Date(startDate), 'yy년 MM월 dd일')} -{' '}
					{format(new Date(endDate), 'yy년 MM월 dd일')}
				</S.PortfolioInformationRow>
				<S.PortfolioInformationRow>
					<h5>진행방식</h5>
					{proceedType}
				</S.PortfolioInformationRow>
			</S.PortfolioInformationGrid>
			<S.PortfolioInformationRow>
				<h5>스킬</h5>
				<S.PortfolioInformationRow $gap='1.6rem'>
					{skills?.map(({ ...props }, index) => <SkillTag key={index} {...props} />)}
				</S.PortfolioInformationRow>
			</S.PortfolioInformationRow>
		</S.PortfolioInformationLayout>
	);
};

export default PortfolioInformation;
