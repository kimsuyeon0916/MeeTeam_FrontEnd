import styled from 'styled-components';

const Sidebar = styled.article`
	height: 19rem;
	margin-right: 5.22rem;
	margin-top: 12.9rem;
	border-radius: 0.8rem;
	border: 1px solid #e3e3e3;
	background: #fff;

	.sidebar-container {
		width: 17rem;
		padding: 2.8rem 2.8rem;
		box-sizing: border-box;

		.sidebar-container_title {
			h1 {
				color: #151515;
				font-size: 1.6rem;
				font-weight: 600;
				line-height: 1.9rem;
				letter-spacing: 0.0032rem;
			}
		}

		.sidebar-container_list {
			display: flex;
			flex-direction: column;
			gap: 2rem;
			margin-top: 2rem;

			.normal {
				color: #8e8e8e;
				font-size: 1.4rem;
				font-weight: 400;
				line-height: 1.7rem;
				letter-spacing: 0.0028rem;
				text-decoration: none;
			}

			.active {
				color: #558bf1;
				font-size: 1.4rem;
				font-weight: 400;
				line-height: 1.7rem;
				letter-spacing: 0.0028rem;
				text-decoration: none;
			}
		}
	}
`;

const S = { Sidebar };

export default S;
