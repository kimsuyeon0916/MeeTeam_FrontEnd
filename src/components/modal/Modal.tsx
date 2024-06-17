import React from 'react';
import S from './Modal.styled';
import { DefaultBtn, PrimaryBtn } from '../index';

interface Modal {
	title: string;
	content: string;
	primaryBtn: Button;
	defaultBtn?: Button;
}

interface Button {
	title: string;
	handleClick: () => void;
}

const Modal = ({ title, content, defaultBtn, primaryBtn }: Modal) => {
	return (
		<S.ModalLayout>
			<S.ModalContainer>
				<S.ModalTitle>{title}</S.ModalTitle>
				<S.ModalContent>{content}</S.ModalContent>
				<S.ModalRow $gap='1.6rem'>
					{defaultBtn && (
						<div>
							<DefaultBtn type='button' {...defaultBtn} />
						</div>
					)}
					<div>
						<PrimaryBtn type='button' {...primaryBtn} />
					</div>
				</S.ModalRow>
			</S.ModalContainer>
		</S.ModalLayout>
	);
};

export default Modal;
