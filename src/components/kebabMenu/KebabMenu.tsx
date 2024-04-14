import React, { useState, useRef, useEffect } from 'react';
import { KebabMenuIcon, OptionMenu } from '..';
import S from './KebabMenu.styled';

interface Option {
	title: string;
	optionClickHandler: (e: React.MouseEvent<HTMLLIElement>) => void;
}

export type { Option };

const KebabMenu = ({ options }: { options: Option[] }) => {
	const [showModal, setShowModal] = useState(false);

	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const outSideClickHandler = (e: MouseEvent) => {
			const target = e.target as HTMLDivElement;
			if (showModal && modalRef.current && !modalRef.current.contains(target)) {
				setShowModal(false);
			}
		};

		document.addEventListener('click', outSideClickHandler);
		return () => document.removeEventListener('click', outSideClickHandler);
	}, [showModal, modalRef.current]);

	const onClickMenu = () => {
		setShowModal(prev => !prev);
	};

	return (
		<S.KebabMenuLayout ref={modalRef}>
			<KebabMenuIcon onClick={onClickMenu} />
			{showModal && <OptionMenu options={options} modalRef={modalRef} onClickMenu={onClickMenu} />}
		</S.KebabMenuLayout>
	);
};

export default KebabMenu;
