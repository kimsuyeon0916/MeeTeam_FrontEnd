import styled from 'styled-components';

const DateSelect = styled.div`
	margin-top: 0.9rem;
	.date-picker {
		height: 4.875rem;
		padding: 1.8rem 2.1rem 1.8rem 2.1rem;
		border-radius: 8px;
		cursor: pointer;
		margin-top: 5px;
		outline: none;
		box-sizing: border-box;
		border-radius: 0.75rem;
		border: 0.1rem solid #e3e3e3;
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
		width: 100%;
		height: 4.875rem;
	}

	.react-datepicker__input-container {
		display: flex;
		align-items: center;
		svg {
			width: 2rem;
			height: 2rem;
			position: absolute;
			right: 1rem;
		}
		input {
			width: 100%;
			height: 4.8rem;
			padding: 1.2rem 1.6rem;
			box-sizing: border-box;
			border-radius: 0.7581rem;
			border: 0.1rem solid #e3e3e3;
			background: #fff;
			color: #8e8e8e;
			font-size: 1.6rem;
			line-height: 1.9rem;
			letter-spacing: 0.0032rem;
		}
	}

	.react-datepicker__month-container {
		width: 100%;
	}
	.react-datepicker-popper {
		z-index: 105;
	}
	.react-datepicker {
		font-size: 1.2rem;
		background-color: #fff;
		color: #000;
		border: 1px solid #bcd7fe;
		border-radius: 0.3rem;
		display: inline-block;
		position: relative;
		width: 100%;
	}
	.react-datepicker__header {
		text-align: center;
		background-color: #fff;
		border-bottom: 1px solid #bcd7fe;
		border-top-left-radius: 0.75rem;
		border-top-right-radius: 0.75rem;
		padding: 8px 0;
		position: relative;
	}
	.react-datepicker__year-read-view--down-arrow,
	.react-datepicker__month-read-view--down-arrow,
	.react-datepicker__month-year-read-view--down-arrow,
	.react-datepicker__navigation-icon::before {
		border-color: #fff;
		border-style: solid;
		border-width: 3px 3px 0 0;
		content: '';
		display: block;
		height: 9px;
		position: absolute;
		top: 6px;
		width: 9px;
	}
`;

const S = { DateSelect };

export default S;
