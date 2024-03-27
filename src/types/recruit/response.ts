export interface TitleInfo {
	title?: string;
	descriptions?: string[];
}

export interface OptionList {
	options: string[];
	isScope?: boolean;
	isCategory?: boolean;
}

export interface Option {
	children: string;
	isScope?: boolean;
	isCategory?: boolean;
}

export interface Keyword {
	id: number;
	name: string;
}
