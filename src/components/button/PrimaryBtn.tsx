import React from 'react';
import S from './Button.styled';

interface Button {
	type: 'button' | 'submit';
	title: string;
	disabled?: boolean;
	small?: boolean;
	handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const PrimaryBtn = ({ type, title, disabled, small, handleClick }: Button) => {
	return (
		<S.PrimaryButtonLayout
			type={type}
			disabled={disabled}
			$disabled={disabled}
			$small={small}
			onClick={handleClick}
		>
			{title}
		</S.PrimaryButtonLayout>
	);
};

export default PrimaryBtn;
