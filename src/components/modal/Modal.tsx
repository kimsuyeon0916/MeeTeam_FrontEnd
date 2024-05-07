import React from 'react';
import S from './Modal.styled';
import { DefaultBtn, PrimaryBtn } from '../index';

interface Modal {
	title: string;
	content: string;
	defaultBtn: Button;
	primaryBtn: Button;
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
					<div>
						<DefaultBtn
							title={defaultBtn.title}
							type='button'
							handleClick={defaultBtn.handleClick}
						/>
					</div>
					<div>
						<PrimaryBtn
							title={primaryBtn.title}
							type='button'
							handleClick={primaryBtn.handleClick}
						/>
					</div>
				</S.ModalRow>
			</S.ModalContainer>
		</S.ModalLayout>
	);
};

export default Modal;