import React from 'react';
import S from './Button.styled';

interface Button {
	small?: boolean;
	title?: string;
	handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const PrimaryBtn = ({ small, title, handleClick }: Button) => {
	return (
		<S.PrimaryButtonLayout type='button' $small={small} onClick={handleClick}>
			{title}
		</S.PrimaryButtonLayout>
	);
};

export default PrimaryBtn;
