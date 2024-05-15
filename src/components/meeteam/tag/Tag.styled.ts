import styled from 'styled-components';

interface TagInfo {
	$recruit?: boolean;
	$proceed?: boolean;
	type?: string;
}

const Tag = styled.div<TagInfo>`
	display: flex;
	width: 5.55rem;
	height: 2.4rem;
	padding: 0.75rem;
	justify-content: center;
	align-items: center;
	gap: 0.75rem;
	border-radius: 0.6rem;
	background-color: ${props => {
		if (props.$recruit) {
			return `linear-gradient(270deg, rgba(95, 92, 236, 0.76) -6.3%, #d85cec 101.52%)`;
		}
		if (props.$proceed) {
			return `linear-gradient(90deg, #4E99EF -6.72%, #723DFF 107.8%)`;
		}
		if (props.type == '스터디') {
			return `#4cd137`;
		}
		if (props.type == '프로젝트') {
			return `#00a8ff`;
		} else {
			return `#eeecff`;
		}
	}};
	color: ${props => (props.$recruit ? '#fff' : props.$proceed ? '#fff' : '#373f41;')};
	font-size: 1.1rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.35rem;
	letter-spacing: 0.015rem;
`;

const S = { Tag };

export default S;
