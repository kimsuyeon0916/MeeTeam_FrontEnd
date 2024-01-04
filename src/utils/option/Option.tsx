import React, { useState, useRef } from 'react';
import { OptionIcon, OptionModal } from '..';
import S from './Option.styled';

interface optionProps {
	title: string;
	optionClickHandler: (e: React.MouseEvent<HTMLLIElement>) => void;
}
export type { optionProps };

const Option = (props: { options: optionProps[] }) => {
	const [showModal, setShowModal] = useState(false);

	const modalRef = useRef<HTMLDivElement>(null);

	const outSideClickHandler = (e: React.MouseEvent<HTMLElement>) => {
		if (modalRef.current === e.target) {
			setShowModal(false);
		}
	};

	const optionClickHandler = () => {
		setShowModal(true);
	};

	return (
		<S.OptionLayout>
			<OptionIcon onClick={optionClickHandler} />
			{showModal && (
				<OptionModal
					modalRef={modalRef}
					outSideClickHandler={outSideClickHandler}
					options={props.options}
				/>
			)}
		</S.OptionLayout>
	);
};

export default Option;
