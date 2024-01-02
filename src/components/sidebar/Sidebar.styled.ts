import styled from 'styled-components';

const Sidebar = styled.div`
	.sidebar {
		width: 23rem;
		height: 100vh;
		border: 1px solid pink;

		.sidebar-li {
			display: flex;
			flex-direction: column;

			.link {
				color: 'gray';
				text-decoration: none;
			}

			a:visited {
				color: #000;
				text-decoration: none;
			}

			a.active {
				color: red;
				text-decoration: none;
			}
		}
	}
`;

const S = { Sidebar };

export default S;
