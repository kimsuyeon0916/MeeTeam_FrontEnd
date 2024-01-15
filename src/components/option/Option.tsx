import React, { useState, useRef, useEffect } from 'react';
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

	useEffect(() => {
		const outSideClickHandler = (e: MouseEvent) => {
			const target = e.target as HTMLDivElement;
			console.log(target);
			console.log(modalRef);

			if (showModal && modalRef.current && !modalRef.current.contains(target)) {
				setShowModal(false);
			}
		};

		document.addEventListener('click', outSideClickHandler);
		return () => document.removeEventListener('click', outSideClickHandler);
	}, [showModal]);

	const optionClickHandler = () => {
		setShowModal(prev => !prev);
	};

	return (
		<S.OptionLayout ref={modalRef}>
			<OptionIcon onClick={optionClickHandler} />
			{showModal && <OptionModal options={props.options} />}
		</S.OptionLayout>
	);
};

export default Option;
