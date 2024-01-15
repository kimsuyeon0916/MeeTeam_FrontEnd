import styled from 'styled-components';

const RecruitDetailPage = styled.div`
	width: clamp(45%, 108rem, 75%);
	margin: 0 auto;
	margin-top: 3.38rem;
	margin-bottom: 3.38rem;

	.container {
		display: flex;
		gap: 1.5rem;

		.container-left {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
			width: 71.4rem;

			.container-info {
				height: 54rem;
				border-radius: 0.75rem;
				border: 1.5px solid #eeecff;
				background: #fff;
			}
			.container-current {
				height: 26.1rem;
				flex-shrink: 0;
				border-radius: 0.75rem;
				border: 1.5px solid #eeecff;
				background: #fff;
			}
			.container-tags {
				height: 7.88rem;
				flex-shrink: 0;
				border-radius: 0.75rem;
				border: 1.5px solid #eeecff;
				background: #fff;
			}
		}

		.container-right {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
			width: 34.8rem;

			.container-apply {
				height: 33.6rem;
				border-radius: 0.75rem;
				border: 0.75px solid #dcdcdc;
				background: #f9f9f9;
			}
			.container-recommend {
				height: 24rem;
				flex-shrink: 0;
				border-radius: 0.75rem;
				border: 0.75px solid #dcdcdc;
				background: #f6f6f6;
			}
		}
	}
	.container-comments {
		width: 100%;
		height: 23.25rem;
		flex-shrink: 0;
		border-radius: 0.75rem;
		border: 1.5px solid #bcd7ff;
		background: #f7faff;
		margin-top: 1.5rem;
	}
`;

const S = { RecruitDetailPage };

export default S;
