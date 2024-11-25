import React from 'react';
import S from './Button.styled';

interface Button {
	type: 'button' | 'submit';
	title: string;
	icon?: string;
	disabled?: boolean;
	small?: boolean;
	handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const DefaultBtn = ({ type, title, icon, disabled, small, handleClick }: Button) => {
	return (
		<S.DefaultButtonLayout
			type={type}
			disabled={disabled}
			$disabled={disabled}
			$small={small}
			onClick={handleClick}
		>
			{icon && <img src={icon} alt='아이콘' />}
			{title}
		</S.DefaultButtonLayout>
	);
};

export default DefaultBtn;
