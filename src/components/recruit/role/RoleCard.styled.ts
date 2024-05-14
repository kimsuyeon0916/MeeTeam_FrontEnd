import styled from 'styled-components';

const RoleCard = styled.article`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 26rem;
	border-radius: 1rem;
	border: 0.075rem solid #d3d3d3;
	background: #fff;
	padding: 1.8rem 2rem;
	box-sizing: border-box;
	box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
	gap: 1.6rem;

	.container-role__info {
		width: 100%;
		height: 8.7rem;
		height: 100%;

		.container-skill__tags {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			margin-top: 1.2rem;
			gap: 0.8rem;
		}

		.no-skills {
			width: 100%;
			display: flex;
			height: 9.4rem;
			justify-content: center;
			align-items: center;
			gap: 0.8rem;
			flex-wrap: wrap;
			border-radius: 1.2rem;
			background: #f6f6f6;
			margin-top: -0.4rem;
		}

		.no-skills__description {
			color: #8e8e8e;
		}
	}

	h4 {
		color: #373f41;
		font-size: 1.4rem;
		font-weight: 600;
		line-height: 1.7rem;
		letter-spacing: 0.0028rem;
	}

	.t2 {
		color: #151515;
		font-size: 1.2rem;
	}

	hr {
		width: 100%;
		height: 0.075rem;
		background: #d3d3d3;
		border: none;
	}

	.container-role__current {
		width: 100%;
		.apply-info {
			display: flex;
			gap: 6.16rem;
			margin-top: 1.24rem;
			margin-bottom: 1.6rem;
			width: 100%;
			justify-content: space-between;

			.people {
				display: flex;
				align-items: center;
				gap: 2rem;
				font-size: 1.2rem;
				line-height: 1.4rem;
				letter-spacing: 0.0024rem;

				span:nth-child(1) {
					color: #8e8e8e;
					font-weight: 500;
				}
				span:nth-child(2) {
					color: #373f41;
					font-weight: 600;
				}
			}
		}

		.progress-bar {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 90%;

			span {
				color: #373f41;
				font-size: 1rem;
				line-height: 1.2rem;
				letter-spacing: 0.002rem;
				margin-left: 2rem;
			}
		}
	}
`;

const S = { RoleCard };

export default S;
