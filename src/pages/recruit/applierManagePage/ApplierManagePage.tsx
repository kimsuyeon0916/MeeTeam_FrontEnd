import React, { useState, useEffect } from 'react';
import S from './ApplierManagePage.styled';
import { DropdownArrow, LinkIcon } from '../../../assets';
import { ApplicantCard, ApplyRole, Dropdown } from '../../../components';
import { useQuery } from '@tanstack/react-query';
import { getApplicantsList } from '../../../service';
import { useRecoilValue } from 'recoil';
import { applicantHolder, applicantPageNum } from '../../../atom';
import { getRecruitInfo } from '../../../service/recruit/applicant';

const ApplierManagePage = () => {
	const pageNum = useRecoilValue(applicantPageNum);
	const [isOpenChat, setIsOpenChat] = useState(false);
	const [linkUrl, setLinkUrl] = useState<string>('');
	const role = null;
	const checkList = useRecoilValue(applicantHolder);
	const { data: applicantList, isSuccess: listSuccess } = useQuery({
		queryKey: ['applicantsList', { pageNum, role }],
		queryFn: () => getApplicantsList({ pageNum, role }),
	});

	const { data: recruitManageInfo, isSuccess: manageSuccess } = useQuery({
		queryKey: ['recruitManageInfo'],
		queryFn: () => getRecruitInfo(pageNum),
	});

	const onClickSetting = () => {
		setIsOpenChat(prev => !prev);
	};

	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLinkUrl(event.target.value);
	};

	console.log(recruitManageInfo);

	return (
		<S.ApplierManagePage $isChecked={checkList.length !== 0}>
			<article className='wrapper-applicants'>
				{manageSuccess && (
					<section className='container-title'>
						<h1>{recruitManageInfo?.title}</h1>
						<h4 className='page-link'>구인글 바로가기 ⟩</h4>
					</section>
				)}
				<section className='container-link'>
					<h4>오픈채팅방 설정</h4>
					<span className='body1-medium'>멤버를 초대할 오픈채팅방 주소를 설정해보세요!</span>
					<article className='input-link'>
						{!isOpenChat ? (
							<section className='container-input__link'>
								<img src={LinkIcon} />
								<span className='body1-medium input-prev'>
									{!linkUrl ? '오픈채팅방 주소를 입력해주세요.' : linkUrl}
								</span>
							</section>
						) : (
							<input
								type='text'
								className='input-chat body1-medium'
								placeholder='오픈채팅방 주소를 입력해주세요.'
								value={linkUrl}
								onChange={onChangeInput}
							/>
						)}
						<button type='button' className='btn-setting text-small' onClick={onClickSetting}>
							{isOpenChat ? '저장' : '설정'}
						</button>
					</article>
				</section>
				<section className='container-applicants'>
					<section className='header-applicants'>
						<section className='header-title'>
							<h4>신청자 관리</h4>
							<span className='body1-medium'>
								○○님의 구인글에 신청한 (유저명)입니다. 다양한 정보들을 확인하고 멤버로 영입해보세요!
							</span>
						</section>
						<section className='header-control'>
							<Dropdown data={['프론트엔드', '백엔드']} initialData='역할' />
							<section className='btn-container'>
								<button className='text-big refused'>거절</button>
								<button className='text-big approved'>승인</button>
							</section>
						</section>
						<hr className='header-border' />
					</section>
					<section className='list-applicants'>
						{listSuccess &&
							applicantList &&
							applicantList.map(info => (
								<ApplicantCard
									key={info.applicantId}
									applicantId={info.applicantId}
									applyRoleName={info.applyRoleName}
									departmentName={info.departmentName}
									message={info.message}
									name={info.name}
									nickname={info.nickname}
									profileImg={info.profileImg}
									score={info.score}
									universityName={info.universityName}
									userId={info.userId}
									year={info.year}
								/>
							))}
					</section>
				</section>
			</article>
			<article className='current-recruit'>
				<section className='container-title'>
					<span className='body1-semibold'>모집 현황</span>
					<img src={DropdownArrow} />
				</section>
				<section className='container-roles'>
					<ApplyRole />
					<ApplyRole />
					<ApplyRole />
					<ApplyRole />
				</section>
			</article>
		</S.ApplierManagePage>
	);
};

export default ApplierManagePage;
