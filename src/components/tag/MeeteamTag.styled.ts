import styled from 'styled-components';

const MeeteamTag = styled.div`
	height: auto;
	position: relative;

	.body1-medium {
		color: #8e8e8e;
		font-size: 1.6rem;
		line-height: 1.9rem;
		letter-spacing: 0.0032rem;
	}

	.txt2 {
		color: #151515;
		font-size: 1.2rem;
		line-height: 1.4rem;
		letter-spacing: 0.0024rem;
	}

	.tag__box {
		position: relative;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		min-height: 4.875rem;
		width: 100%;
		border-radius: 1rem;
		border: 1px solid #e3e3e3;
		background-color: #fff;
		box-sizing: border-box;
		z-index: 101;

		&:focus-within {
			border-color: #5877fc;
		}

		&:hover {
			border: 1px solid #5877fc;
			transition: 0.2s ease-in-out;
		}

		.icon-search {
			position: absolute;
			right: 2rem;
		}

		.tag-input {
			width: 100%;
			display: inline-flex;
			background: transparent;
			border: none;
			outline: none;
			cursor: text;
			padding: 0.5rem 0 0.5rem 1.6rem;
		}
	}

	.tags-selected {
		display: flex;
		margin-top: 2rem;
		gap: 1rem;
	}

	.tag__item {
		display: flex;
		padding: 0.6rem 0.8rem;
		justify-content: center;
		align-items: center;
		gap: 0.6rem;
		border-radius: 1.5rem;
		background: #e0e6ff;
	}

	.btn-delete {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		background-color: transparent;
		color: #54a0ff;
		border: none;

		img {
			width: 1.4rem;
		}
	}

	.option {
		color: #8e8e8e;
		cursor: pointer;
	}

	.tag-dropdown {
		position: absolute;
		width: 100%;
		border-radius: 0.75rem;
		border: 0.75px solid #e7e7e7;
		background: #fff;
		box-shadow: 0px 2.25px 15px 0px rgba(0, 0, 0, 0.1);
		top: 110%;
		right: 0rem;
		display: flex;
		padding-top: 2rem;
		padding-left: 2.5rem;
		z-index: 102;
		display: flex;
		flex-direction: column;
		padding: 1.2rem 1.6rem;
		gap: 1.2rem;
	}

	.no-result {
		display: flex;
		width: 100%;
		height: 16.7rem;
		padding: 1.2rem 1.6rem;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.8rem;

		.container-btn {
			margin-top: 2rem;
			display: flex;
			align-items: center;
			gap: 0.8rem;
		}

		.btn-create {
			display: flex;
			padding: 0.6rem 0.8rem;
			justify-content: center;
			align-items: center;
			gap: 0.75rem;
			border-radius: 1.5rem;
			border: 1px solid #e0e6ff;
			background: #fff;
			cursor: pointer;
		}
	}
`;

const S = { MeeteamTag };

export default S;
