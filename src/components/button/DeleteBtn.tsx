import React from 'react';
import S from './Button.styled';
import { Delete } from '../../assets';

const DeleteBtn = ({
	handleClick,
}: {
	handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
	return (
		<S.ButtonLayout type='button' $add={false} onClick={handleClick}>
			<img src={Delete} alt='deleteButton' />
		</S.ButtonLayout>
	);
};

export default DeleteBtn;
