interface Color {
	title: string;
	color: string;
}

const colorChart: Color[] = [
	{
		title: '교내',
		color: '#FCEFAA',
	},
	{
		title: '프로젝트',
		color: '#EEECFF',
	},
	{
		title: '오프라인',
		color: '#E2E2E2',
	},
	{
		title: '개발',
		color: '#EAF7FF',
	},
	{
		title: '응소실',
		color: '#EAF7FF',
	},
	{
		title: 'Spring',
		color: '#E4F9D0',
	},
	{
		title: 'C#',
		color: '#E0E6FF',
	},
	{
		title: 'Window Form',
		color: '#F7E8FB',
	},
];

const ColorMatching = (content: string) => {
	const color = colorChart.find(chart => chart.title === content)?.color;
	if (color === undefined) return '#FFFFFF';
	return color;
};

export default ColorMatching;
