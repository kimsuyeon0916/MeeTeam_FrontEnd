import styled from 'styled-components';

const RecruitOptions = styled.article`
	margin-top: 0.9rem;
	display: flex;
	align-items: center;
	gap: 1.6rem;

	.option {
		border-radius: 1rem;
		border: 1px solid #e3e3e3;
		background: #fff;
		color: #8e8e8e;
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: 0.02rem;
		padding: 1.2rem 2.4rem;
		cursor: pointer;
	}

	.highlighted {
		background-color: #e0e6ff;
		color: #000;
	}
`;

const S = { RecruitOptions };

export default S;
