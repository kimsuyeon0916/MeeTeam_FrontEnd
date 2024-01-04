import React from 'react';
import S from './OptionModal.styled';
import { optionProps } from '../Option';

interface modalProps {
	modalRef: React.ForwardedRef<HTMLDivElement>;
	outSideClickHandler: (e: React.MouseEvent<HTMLElement>) => void;
	options: optionProps[];
}

const OptionModal = ({ modalRef, outSideClickHandler, options }: modalProps) => {
	return (
		<div ref={modalRef} onClick={e => outSideClickHandler(e)}>
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
