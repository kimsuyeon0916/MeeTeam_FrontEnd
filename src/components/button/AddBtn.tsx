import React from 'react';
import S from './Button.styled';
import { Add } from '../../assets';

const AddBtn = ({ handleClick }: { handleClick: React.MouseEventHandler<HTMLButtonElement> }) => {
	return (
		<S.IconButtonLayout type='button' $add={true} onClick={handleClick}>
			<img src={Add} alt='addButton' />
		</S.IconButtonLayout>
	);
};

export default AddBtn;
