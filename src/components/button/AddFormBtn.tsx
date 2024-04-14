import React from 'react';
import S from './Button.styled';
import { BluePlus } from '../../assets';

interface AddFormBtn {
	title: string;
	handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const AddFormBtn = ({ title, handleClick }: AddFormBtn) => {
	return (
		<S.FormButtonLayout type='button' onClick={handleClick}>
			<img src={BluePlus} alt='addButton' />
			{title}
		</S.FormButtonLayout>
	);
};

export default AddFormBtn;
