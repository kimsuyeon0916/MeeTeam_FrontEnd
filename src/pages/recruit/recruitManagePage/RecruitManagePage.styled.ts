import styled from 'styled-components';

const RecruitManageWrapper = styled.div`
	width: clamp(45%, 96rem, 75%);
	margin: 0 auto;
	display: flex;
	main {
		width: 100%;
	}
`;

const RecruitManage = styled.article`
	margin-top: 8rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	h2 {
		color: #151515;
		font-size: 2.4rem;
		font-weight: 700;
		line-height: 2.9rem;
		letter-spacing: 0.0048rem;
	}

	.body1 {
		color: #373f41;
		text-align: center;
		font-size: 1.6rem;
		font-weight: 600;
		line-height: 1.9rem;
		letter-spacing: 0.0032rem;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;

		.container-menu {
			width: 100%;
			height: 2.85rem;
			border-bottom: 1px solid #8e8e8e;

			.menu {
				width: 11.6rem;
				height: 3.6rem;
				padding: 0.85rem 4.4rem;
				box-sizing: border-box;
				border-radius: 0.4rem 0.4rem 0rem 0rem;
				border-top: 1px solid #8e8e8e;
				border-right: 1px solid#8e8e8e;
				border-left: 1px solid #8e8e8e;
				border-bottom: 1px solid #8e8e8e;
				background: #f6f6f6;
				cursor: pointer;
			}

			.active {
				border-top: 1px solid #373f41;
				border-right: 1px solid #373f41;
				border-left: 1px solid #373f41;
				border-bottom: 1px solid #fff;
				background: #fff;
			}
		}

		.container-dropdown {
			display: flex;
			justify-content: flex-end;
			margin-top: 2rem;
			gap: 1.6rem;
		}

		.container-contents {
			margin-top: 3.25rem;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(4, auto);
			gap: 3.2rem 3.2rem;
		}
	}
`;

const S = {
	RecruitManageWrapper,
	RecruitManage,
};

export default S;
