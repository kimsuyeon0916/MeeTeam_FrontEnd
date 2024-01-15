import React from 'react';
import S from './OptionModal.styled';
import { optionProps } from '../option/Option';

interface modalProps {
	modalRef?: React.ForwardedRef<HTMLDivElement>;
	options: optionProps[];
}

const OptionModal = ({ modalRef, options }: modalProps) => {
	return (
		<div>
			<S.OptionModalLayout>
				{options.map((option, index) => (
					<S.OptionModalItem key={index} onClick={option.optionClickHandler}>
						{option.title}
					</S.OptionModalItem>
				))}
			</S.OptionModalLayout>
		</div>
	);
};

export default OptionModal;
