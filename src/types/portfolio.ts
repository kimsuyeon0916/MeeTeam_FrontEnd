import { Link, Skill } from './index';

export interface Portfolio {
	id: string;
	mainImageUrl?: string;
	title: string;
	field: string;
	role: string;
	pinOrder: string;
	pinned: boolean;
}

export interface PortfolioDetails {
	zipFileUrl: string;
	fileOrder: string[];
	title: string;
	description: string;
	startDate: string;
	endDate: string;
	field: string;
	role: string;
	proceedType: string;
	skills: Skill[];
	content: string;
	links: Link[];
	otherPortfolios: Portfolio[];
	isWriter: boolean;
}
