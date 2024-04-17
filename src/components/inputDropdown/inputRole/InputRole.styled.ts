import styled from 'styled-components';

const InputRole = styled.article`
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 0.8rem;
	padding: 1.6rem 2rem;
	align-items: center;
	box-sizing: border-box;
	border-radius: 1rem;
	background: #f8fafb;

	.body1-medium {
		color: #373f41;
		font-size: 1.6rem;
		line-height: 1.9rem;
		letter-spacing: 0.0032rem;
	}

	.no-skill {
		color: #8e8e8e;
	}

	.inputs {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		gap: 0.8rem;
		position: relative;

		.role {
			width: 12.8rem;
		}

		.count {
			width: 4rem;
		}

		.container-skills {
			width: 80%;
			position: relative;
			height: 4.2rem;
			display: flex;
			align-items: center;
			flex-wrap: nowrap;
			padding: 0 1.3rem;
			box-sizing: border-box;
			border-radius: 0.75rem;
			overflow-x: scroll;
			overflow-y: hidden;

			&::-webkit-scrollbar {
				display: none;
			}

			.tags {
				display: inline-flex;
				height: 2.15rem;
				padding: 1.5rem 1.125rem 1.5rem 1.125rem;
				justify-content: center;
				align-items: center;
				margin: 5px;
				border-radius: 1.5rem;
				background: #e0e6ff;
				color: #373f41;
				font-size: 1.2rem;
				font-weight: 400;
				line-height: 1.8rem;
				letter-spacing: 0.02rem;
				box-sizing: border-box;
			}
		}
	}

	.add-btn {
		width: 2.2rem;
		height: 2.2rem;
		border-radius: 0.75rem;
		background: transparent;
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			width: 2.2rem;
		}
	}
`;

const S = { InputRole };

export default S;
