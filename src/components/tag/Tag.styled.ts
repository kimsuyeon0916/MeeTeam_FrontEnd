import styled from 'styled-components';

const Tag = styled.div`
	height: 70px;

	.tag__box {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		min-height: 50px;
		width: 97.5%;
		padding: 0 10px;
		border-radius: 0.75rem;
		border: 0.75px solid #e3e3e3;
		background-color: #fff;
		box-sizing: border-box;

		&:focus-within {
			border-color: #00a8ff;
		}

		.tag__item {
			/* display: flex;
			align-items: center;
			justify-content: space-between; */
			display: inline-flex;
			height: 3.15rem;
			padding: 0.75rem 1.125rem;
			justify-content: center;
			align-items: center;
			gap: 0.75rem;
			flex-shrink: 0;
			margin: 5px;
			border-radius: 7.5rem;
			background: #e0e6ff;
			color: #000;
			font-size: 13px;

			button {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 15px;
				height: 15px;
				margin-left: 5px;
				background-color: white;
				border-radius: 50%;
				color: #54a0ff;
				border: none;
			}
		}

		input {
			display: inline-flex;
			min-width: 200px;
			background: transparent;
			border: none;
			outline: none;
			cursor: text;
		}
	}
`;

const S = { Tag };

export default S;
