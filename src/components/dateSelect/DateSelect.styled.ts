import styled from 'styled-components';

const DateSelect = styled.div`
	.date-picker {
		width: 40.125rem;
		height: 4.875rem;
		padding: 1.8rem 2.1rem 1.8rem 2.1rem;
		border-radius: 8px;
		cursor: pointer;
		margin-top: 5px;
		outline: none;
		box-sizing: border-box;
		border-radius: 0.75rem;
		border: 0.75px solid #e3e3e3;
		background: #fff;
		color: #0e0e0e;
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.35rem; /* 90% */
		letter-spacing: 0.015rem;
	}

	.react-datepicker-wrapper {
		position: relative;
		height: 4.875rem;
	}

	.react-datepicker__input-container {
		display: flex;
		align-items: center;
	}

	.react-datepicker__close-icon {
		cursor: pointer;
		background-color: transparent;
		border: 0;
		outline: 0;
		padding: 0 1.5rem 0 0;
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		display: table-cell;
		vertical-align: middle;

		&::after {
			content: '⌵';
			background-color: transparent;
			color: #49c181;
			font-size: 2.1rem;
		}
	}
`;

const S = { DateSelect };

export default S;
