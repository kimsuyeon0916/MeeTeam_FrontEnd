import styled from 'styled-components';

const InputRole = styled.article`
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 1.63rem;
	margin-top: 1.2rem;
	align-items: center;
	box-sizing: border-box;

	.inputs {
		width: 100%;
		height: 4.2rem;
		display: flex;
		gap: 1.63rem;
		align-items: center;
		box-sizing: border-box;
	}

	.input {
		height: 4.2rem;
		border-radius: 0.75rem;
		border: 0.1rem solid #e3e3e3;
		background: #fff;
		outline: none;
		padding: 0 1.3rem;
		box-sizing: border-box;
		padding-left: 2.1rem;
		font-size: 1.5rem;
	}

	.input-role {
		width: 64%;
	}

	.input-count {
		width: 38%;
	}

	input[type='number']::-webkit-outer-spin-button,
	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	.container-skills {
		width: 100%;
		position: relative;
		height: 4.2rem;
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		padding: 0 1.3rem;
		box-sizing: border-box;
		border: 0.1rem solid #e3e3e3;
		border-radius: 0.75rem;
		overflow-x: scroll;
		overflow-y: hidden;

		&::-webkit-scrollbar {
			display: none;
		}

		.skills-input {
			display: inline-flex;
			min-width: 25rem;
			padding: 0;
			height: 4.875rem;
			border: none;
			outline: none;
			font-size: 1.5rem;
			background: transparent;
			outline: none;
			padding-left: 1.3rem;
			box-sizing: border-box;
		}

		.container-tags {
			display: inline-flex;
			height: 2.15rem;
			padding: 1.5rem 1.125rem 1.5rem 1.125rem;
			justify-content: center;
			align-items: center;
			flex-shrink: 0;
			margin: 5px;
			border-radius: 7.5rem;
			background: #e0e6ff;
			color: #373f41;
			font-size: 1.5rem;
			font-style: normal;
			font-weight: 400;
			line-height: 1.8rem;
			letter-spacing: 0.02rem;
			box-sizing: border-box;
		}

		button {
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: transparent;
			margin-left: 5px;
			border-radius: 50%;
			color: #54a0ff;
			border: none;
			box-sizing: border-box;
			cursor: pointer;

			img {
				width: 2rem;
				box-sizing: border-box;
			}
		}
	}

	.add-btn {
		width: 4.2rem;
		height: 4.2rem;

		button {
			width: 4.2rem;
			height: 4.2rem;
			border-radius: 0.75rem;
			background: #fff;
			border: 0.1rem solid #e3e3e3;
			display: flex;
			justify-content: center;
			align-items: center;

			img {
				width: 2rem;
			}
		}
	}
`;

const S = { InputRole };

export default S;
