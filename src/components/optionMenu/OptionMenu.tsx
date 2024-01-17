import React from 'react';
import S from './OptionMenu.styled';
import { Option } from '../kebabMenu/KebabMenu';

interface Modal {
	modalRef?: React.ForwardedRef<HTMLDivElement>;
	options: Option[];
}

const OptionMenu = ({ modalRef, options }: Modal) => {
	return (
		<div>
			<S.OptionMenuLayout>
				{options.map((option, index) => (
					<S.OptionMenuItem key={index} onClick={option.optionClickHandler}>
						{option.title}
					</S.OptionMenuItem>
				))}
			</S.OptionMenuLayout>
		</div>
	);
};

export default OptionMenu;
