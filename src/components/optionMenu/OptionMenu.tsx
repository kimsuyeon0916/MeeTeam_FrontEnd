import React from 'react';
import S from './OptionMenu.styled';
import { Option } from '../kebabMenu/KebabMenu';

interface Modal {
	modalRef?: React.ForwardedRef<HTMLDivElement>;
	options: Option[];
	onClickMenu?: () => void;
}

const OptionMenu = ({ modalRef, options, onClickMenu }: Modal) => {
	const onClickOption = (func: any) => {
		if (onClickMenu) {
			onClickMenu();
		}
		func();
	};

	return (
		<div>
			<S.OptionMenuLayout>
				{options.map((option, index) => (
					<S.OptionMenuItem
						key={index}
						onClick={() => onClickOption(option.optionClickHandler as any)}
					>
						{option.title}
					</S.OptionMenuItem>
				))}
			</S.OptionMenuLayout>
		</div>
	);
};

export default OptionMenu;
