import React from 'react';
import S from './Button.styled';

interface Button {
	small?: boolean;
	title?: string;
	handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const DefaultBtn = ({ small, title, handleClick }: Button) => {
	return (
		<S.DefaultButtonLayout type='button' $small={small} onClick={handleClick}>
			{title}
		</S.DefaultButtonLayout>
	);
};

export default DefaultBtn;
