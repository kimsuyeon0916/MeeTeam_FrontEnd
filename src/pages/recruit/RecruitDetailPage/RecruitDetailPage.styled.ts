import styled from 'styled-components';

const RecruitDetailPage = styled.section`
	width: clamp(33.33%, 108rem, 66.66%);
	margin: 0 auto;
	margin-top: 3.38rem;
	margin-bottom: 3.38rem;
	background-color: #fff;
	overflow: hidden;

	h3 {
		color: #151515;
		font-size: 2rem;
		font-weight: 600;
		line-height: 2.4rem;
		letter-spacing: 0.004rem;
	}

	.wrapper-roles {
		margin-top: 8rem;
		width: 110%;
		overflow: hidden;

		.scroll {
			width: 100%;
			overflow-x: scroll;

			&::-webkit-scrollbar {
				display: none;
			}
		}

		.container-roles {
			width: 130%;
			margin-top: 1.98rem;
			display: flex;
			gap: 1.6rem;
			background-color: #fff;
		}
	}

	.tag {
		display: flex;
		padding: 0.6rem 0.8rem;
		justify-content: center;
		align-items: center;
		gap: 0.75rem;
		box-sizing: border-box;
		border-radius: 1.5rem;
		background: #e0e6ff;
	}

	.wrapper-tags {
		margin-top: 8rem;
		display: flex;
		flex-direction: column;

		.container-tags {
			margin-top: 2rem;
			display: flex;
			flex-wrap: wrap;
			gap: 1.6rem;

			span {
				height: 3.2rem;
				color: #151515;
				font-size: 1.4rem;
				font-weight: 600;
				line-height: 1.7rem;
				letter-spacing: 0.0028rem;
				padding: 0.8rem 1rem;
			}
		}
	}

	.wrapper-btn {
		margin-top: 8rem;
		display: flex;
		justify-content: center;

		button {
			height: 4.8rem;
			padding: 1.2rem 3.2rem;
			justify-content: center;
			align-items: center;
			border-radius: 0.6rem;
			border: 0.15rem solid #e3e3e3;
			background: #fff;
			font-size: 1.6rem;
			color: #373f41;
		}
	}

	.wrapper-comments {
		.container-title {
			display: flex;
			align-items: flex-end;
			gap: 0.4rem;
			span {
				color: #5877fc;
				font-size: 1.2rem;
				font-weight: 600;
				line-height: 1.4rem;
			}
		}

		hr {
			margin-top: 1.18rem;
			background: #e3e3e3;
			border: none;
			height: 0.075rem;
		}

		.container-comments {
			padding: 1.6rem 3rem;
			box-sizing: border-box;
		}
	}
`;

const Footer = styled.footer`
	position: fixed;
	bottom: 0rem;
	width: 100%;
	height: 8.4rem;
	border-top: 0.075rem solid #e3e3e3;
	border-bottom: 0.075rem solid #e3e3e3;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: center;

	.container-btn {
		display: flex;
		gap: 1.6rem;

		button:nth-child(1) {
			height: 4.8rem;
			padding: 1.2rem 3.2rem;
			border-radius: 0.6rem;
			border: 1.5px solid #e3e3e3;
			background: #fff;
		}

		button:nth-child(2) {
			height: 4.8rem;
			padding: 1.2rem 7.2rem;
			border-radius: 0.6rem;
		}

		.close {
			background: #f85858;
			color: #fff;
		}

		.apply {
			border-radius: 0.8rem;
			background: linear-gradient(90deg, #6091f0 0%, #723dff 100%);
			color: #fff;
		}
	}
`;

const S = {
	RecruitDetailPage,
	Footer,
};

export default S;
