import React, { useState, useRef, useEffect } from 'react';
import S from './ApplyModal.styled';
import { useSetRecoilState } from 'recoil';
import { applyUserInfo, applyModalState, applyStepState } from '../../../../atom';
import { DropdownArrow } from '../../../../assets';
import { useQuery } from '@tanstack/react-query';
import { getApplyData } from '../../../../service';
import { useParams } from 'react-router-dom';

const ApplyModal = () => {
	const { id } = useParams();
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const setIsModal = useSetRecoilState(applyModalState);
	const setApplyStep = useSetRecoilState(applyStepState);
	const setUserInfo = useSetRecoilState(applyUserInfo);

	const [isChecked, setIsChecked] = useState<boolean>(false);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [value, setValue] = useState<string>('신청 역할을 선택해주세요.');
	const isValid = isChecked && value !== '신청 역할을 선택해주세요.';

	const { data, isLoading } = useQuery({
		queryKey: ['applyInfoNumber', Number(id)],
		queryFn: () => getApplyData(Number(id)),
	});

	const onClickCheckbox = () => {
		setIsChecked(prev => !prev);
	};
	const onClickConfirm = () => {
		if (isValid) {
			setUserInfo(prev => ({ ...prev, message: textAreaRef.current?.value }));
			setApplyStep(prev => prev + 1);
		}
	};

	const onClickOption = (event: React.MouseEvent<HTMLLIElement>) => {
		const { innerText } = event.target as HTMLElement;
		setValue(innerText);
		setUserInfo(prev => ({
			...prev,
			role: { applyRoleId: +(event.target as HTMLLIElement).id, name: innerText },
		}));
	};

	useEffect(() => {
		if (data) {
			setUserInfo(prev => ({
				...prev,
				name: data.name,
				score: data.score,
				universityName: data.universityName,
				departmentName: data.departmentName,
				year: data.year,
				email: data.email,
			}));
		}
	}, [data]);

	return (
		<S.Modal $isChecked={isValid} $isValue={value !== '신청 역할을 선택해주세요.'}>
			<article>
				<h1>신청 정보</h1>
				<section className='description'>
					<span className='description-subtitle'>멤버들에게 내 정보를 공개할 수 있나요?</span>
					<span className='description-subinfo'>
						정보 공개 동의 시, 내 정보가 멤버들에게 보이며 팀매칭에 유리해집니다.
					</span>
					<article className='agreement'>
						<input type='checkbox' id='agree' onClick={onClickCheckbox} checked={isChecked} />
						<label htmlFor='agree' className='agreement-word'>
							개인정보 열람 동의
						</label>
					</article>
				</section>
			</article>
			<article className='container-user__info'>
				<section className='container-subtitle'>
					<h3>내 정보</h3>
					{isChecked && (
						<span className='body2-medium writing'>
							추후 <span className='highlighted'>대표메일</span>을 통해 결과를 알려드립니다.
						</span>
					)}
				</section>
				{isLoading ? (
					<section className='user-info'>사용자 정보를 불러오고 있습니다...</section>
				) : (
					<section className='user-info'>
						<section className='user-info__section responsive-top'>
							<section>
								<span>이름</span>
								<span>학교</span>
								<span>학과</span>
								<span>이메일</span>
							</section>
							<section>
								<span className='value'>{data?.name}</span>
								<span className='value'>{data?.universityName}</span>
								<span className='value'>{data?.departmentName}</span>
								<span className='value'>{data?.email}</span>
							</section>
						</section>
						<section className='user-info__section'>
							<section>
								<span>학점</span>
								<span>입학년도</span>
							</section>
							<section>
								<span className='value'>{data?.score === 0 ? '-' : data?.score}</span>
								<span className='value'>{data?.year}</span>
							</section>
						</section>
					</section>
				)}
			</article>
			<article className='container-role'>
				<article className='container-select__box' onClick={() => setIsOpen(prev => !prev)}>
					<span className='value'>{value}</span>
					{isOpen && (
						<ul>
							{data?.recruitmentRoles.map(role => (
								<li key={role.id} onClick={onClickOption} id={role.id.toString()}>
									{role.name}
								</li>
							))}
						</ul>
					)}
					<img src={DropdownArrow} />
				</article>
			</article>
			<article className='container-message'>
				<textarea placeholder='전할 말을 20자 이내로 입력해주세요.' ref={textAreaRef} />
			</article>
			<article className='container-buttons'>
				<button type='button' className='cancel' onClick={() => setIsModal(false)}>
					취소하기
				</button>
				<button className='confirm' type='button' onClick={onClickConfirm}>
					다음
				</button>
			</article>
		</S.Modal>
	);
};

export default ApplyModal;
