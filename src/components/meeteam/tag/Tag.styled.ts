import styled from 'styled-components';

const Tag = styled.div`
	.tag {
		display: flex;
		width: 5.55rem;
		height: 2.4rem;
		padding: 0.75rem;
		justify-content: center;
		align-items: center;
		gap: 0.75rem;
		border-radius: 0.6rem;
		background: #eeecff;
		color: var(--Light-Black, var(--text-color-2, #373f41));
		font-family: Apple SD Gothic Neo;
		font-size: 1.1rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.35rem; /* 112.5% */
		letter-spacing: 0.015rem;
	}
	.recruit {
		color: #fff;
		border-radius: 0.6rem;
		background: linear-gradient(270deg, rgba(95, 92, 236, 0.76) -6.3%, #d85cec 101.52%);
	}
`;

const S = { Tag };

export default S;
