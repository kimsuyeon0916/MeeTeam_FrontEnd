import React, { useState, useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Exit } from '../../../assets';
import { memberModalState } from '../../../atom';
import { Subtitle } from '../..';
import SMember from './MemberInviteModal.styled';

interface MemberInvite {
	onClick: () => void;
}

const MemberInviteModal = ({ onClick }: MemberInvite) => {
	const [modalOpen, setModalOpen] = useRecoilState<boolean>(memberModalState);
	const modalRef = useRef<HTMLDivElement | null>(null);
	const [modalDropdown, setModalDropdown] = useState<boolean>(false);
	const modalDropdownRef = useRef<HTMLDivElement | null>(null);

	const roles: string[] = ['프론트엔드 개발자', '백엔드 개발자', '디자이너', '기획자'];
	const [currentRole, setCurrentRole] = useState<string>('프론트엔드 개발자');

	const onClickRole = (event: React.MouseEvent<HTMLElement>) => {
		const { innerText } = event.target as HTMLElement;
		setCurrentRole(innerText);
	};

	useEffect(() => {
		const outsideClick = (event: MouseEvent) => {
			const { target } = event;
			if (
				modalDropdown &&
				modalDropdownRef.current &&
				!modalDropdownRef.current.contains(target as Node)
			) {
				setModalDropdown(false);
			}

			if (modalOpen && modalRef.current && !modalRef.current.contains(target as Node)) {
				setModalOpen(false);
			}
		};
		document.addEventListener('mousedown', outsideClick);
		return () => {
			document.removeEventListener('mousedown', outsideClick);
		};
	}, [modalDropdownRef.current, modalDropdown, modalRef.current, modalOpen]);

	return (
		<SMember.MemberInviteModal
			ref={modalRef}
			onClick={e => {
				if (e.target === modalRef.current) {
					setModalOpen(false);
				}
			}}
		>
			<div className='container-modal'>
				<div className='container-modal__top'>
					<Subtitle>{'멤버 초대'}</Subtitle>
					<button
						className='exit'
						type='button'
						onClick={() => {
							setModalOpen(prev => !prev);
						}}
					>
						<img src={Exit} />
					</button>
				</div>
				<div className='container-modal__search'>
					<span>멤버</span>
					<input placeholder='유저를 검색해주세요.' />
				</div>
				<div className='container-modal__role'>
					<span>역할</span>
					<div
						className='dropdown-header'
						onClick={() => {
							setModalDropdown(prev => !prev);
						}}
						ref={modalDropdownRef}
					>
						<label>{currentRole}</label>
						{modalDropdown && (
							<div className='dropdown'>
								{roles.map((role, index) => (
									<span key={index} onClick={onClickRole}>
										{role}
									</span>
								))}
							</div>
						)}
					</div>
				</div>
				<div className='container-modal__button'>
					<button type='button' className='button-invite' onClick={onClick}>
						초대하기
					</button>
				</div>
			</div>
		</SMember.MemberInviteModal>
	);
};

export default MemberInviteModal;
