import styled from 'styled-components';

const LinkToList = styled.article`
	margin-top: 8rem;
	display: flex;
	justify-content: center;

	button {
		height: 4.8rem;
		padding: 1.2rem 3.2rem;
		justify-content: center;
		align-items: center;
		border-radius: 0.6rem;
		border: 1px solid #e3e3e3;
		background: #fff;
		font-size: 1.6rem;
		color: #373f41;

		&:hover {
			border: 1px solid #373f41;
			transition: 0.2s ease-in-out;
		}

		&:active {
			border: 1px solid #373f41;
			background: #747b7f;
			color: #ffffff;
			transition: 0.2s ease-in-out;
		}
	}
`;

const S = { LinkToList };

export default S;
