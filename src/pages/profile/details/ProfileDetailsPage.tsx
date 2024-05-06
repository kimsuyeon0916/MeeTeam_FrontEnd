import React, { useEffect } from 'react';
import S from '../Profile.styled';
import {
	DefaultBtn,
	LinkDetails,
	PortfolioCard,
	ProfileImage,
	SkillTag,
} from '../../../components';
import { useReadProfile } from '../../../hooks';
import { useParams, useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { userState } from '../../../atom';
import { BlackEmail, BlackPhone } from '../../../assets';

const ProfileDetailsPage = () => {
	const [userInfo, setUserState] = useRecoilState(userState);

	const { userId } = useParams() as { userId: string };
	const { data: user, isSuccess } = useReadProfile(userId);

	useEffect(() => {
		if (isSuccess) {
			userInfo?.userId === userId && setUserState({ ...user, userId }); // 본인인지 아닌지 확인 로직 필요
		}
	}, [isSuccess]);

	const navigate = useNavigate();

	return (
		isSuccess && (
			<S.ProfileLayout>
				<S.ProfileHeader>
					<ProfileImage userId={userId} size='14rem' url={user?.imageUrl} />
					<S.ProfileColumn>
						<div className='profile-header__row'>
							<h2>{user?.nickname}</h2>
							<h3>{user?.isUserNamePublic && user?.userName}</h3>
						</div>
						<h4>{user?.interest}</h4>
						<h6>{user?.introduction}</h6>
					</S.ProfileColumn>
					{userInfo?.userId === userId && (
						<DefaultBtn type='button' title='편집' handleClick={() => navigate('/profile/edit')} />
					)}
				</S.ProfileHeader>

				<S.ProfileColumn $gap='5rem'>
					<S.ProfileArticle>
						<S.ProfileTitle>자기 소개</S.ProfileTitle>
						<div>{user?.aboutMe}</div>
						<hr />
					</S.ProfileArticle>

					<S.ProfileArticle>
						<S.ProfileTitle>연락 수단</S.ProfileTitle>
						<S.ProfileColumn $gap='2.4rem'>
							{user?.phone?.isPublic && (
								<S.ProfileColumn>
									<S.ProfileSmallText>연락처</S.ProfileSmallText>
									<S.ProfileRow $gap='1rem'>
										<img src={BlackPhone} alt='링크 아이콘' />
										<div>{user?.phone?.content ?? '-'}</div>
									</S.ProfileRow>
								</S.ProfileColumn>
							)}
							<S.ProfileColumn $gap='1.2rem'>
								{(user?.universityEmail?.isDefault
									? user?.universityEmail?.isPublic
									: user?.subEmail?.isPublic) && (
									<S.ProfileColumn>
										<S.ProfileSmallText $color='#5877FC'>대표 메일</S.ProfileSmallText>
										<S.ProfileRow $gap='1rem'>
											<img src={BlackEmail} alt='링크 아이콘' />
											{user?.universityEmail?.isDefault ? (
												<div>{user?.universityEmail?.content ?? '-'}</div>
											) : (
												<div>{user?.subEmail?.content ?? '-'}</div>
											)}
										</S.ProfileRow>
									</S.ProfileColumn>
								)}
								{(!user?.universityEmail?.isDefault
									? user?.universityEmail?.isPublic
									: user?.subEmail?.isPublic) && (
									<S.ProfileColumn>
										<S.ProfileSmallText>이메일</S.ProfileSmallText>
										<S.ProfileRow $gap='1rem'>
											<img src={BlackEmail} alt='링크 아이콘' />
											{!user?.universityEmail?.isDefault ? (
												<div>{user?.universityEmail?.content ?? '-'}</div>
											) : (
												<div>{user?.subEmail?.content ?? '-'}</div>
											)}
										</S.ProfileRow>
									</S.ProfileColumn>
								)}
							</S.ProfileColumn>
						</S.ProfileColumn>
						<hr />
					</S.ProfileArticle>

					<S.ProfileArticle>
						<S.ProfileTitle>교육</S.ProfileTitle>
						<div>
							<S.ProfileSmallText>{user?.year}년도 입학</S.ProfileSmallText>
							<S.ProfileRow>
								<S.ProfileColumn $gap='1.5rem'>
									<h4>{user?.university}</h4>
								</S.ProfileColumn>
								<S.ProfileColumn $gap='1.5rem'>
									<S.ProfileRow $gap='1.5rem'>
										학과
										<span>{user?.department}</span>
									</S.ProfileRow>
									<S.ProfileRow $gap='1.5rem'>
										학점
										<span>{user?.gpa ? `${user?.gpa}/${user?.maxGpa}` : '-'}</span>
									</S.ProfileRow>
								</S.ProfileColumn>
							</S.ProfileRow>
						</div>
						<hr />
					</S.ProfileArticle>

					<S.ProfileArticle>
						<S.ProfileTitle>스킬</S.ProfileTitle>
						<S.ProfileRow $gap='1.05rem'>
							{user?.skills?.map(({ ...props }, index) => <SkillTag key={index} {...props} />)}
						</S.ProfileRow>
						<hr />
					</S.ProfileArticle>

					<S.ProfileArticle>
						<S.ProfileTitle>수상/활동</S.ProfileTitle>
						<S.ProfileColumn $gap='2.4rem'>
							{user?.awards?.map(({ title, startDate, endDate, description }, index) => (
								<S.ProfileColumn key={index}>
									<S.ProfileSmallText>
										{startDate} ~ {endDate}
									</S.ProfileSmallText>
									<S.ProfileRow $gap='1.05rem'>
										<S.ProfileColumn $gap='1.5rem'>
											<h4>{title}</h4>
										</S.ProfileColumn>
										<S.ProfileColumn $gap='1.5rem'>{description}</S.ProfileColumn>
									</S.ProfileRow>
									{index + 1 !== user?.awards?.length && <hr />}
								</S.ProfileColumn>
							))}
						</S.ProfileColumn>
						<hr />
					</S.ProfileArticle>

					<S.ProfileArticle>
						<S.ProfileTitle>링크</S.ProfileTitle>
						<S.ProfileColumn>
							{user?.links?.map((link, index) => (
								<S.ProfileRow key={index} $gap='3.65rem'>
									<LinkDetails {...link} />
								</S.ProfileRow>
							))}
						</S.ProfileColumn>
						<hr />
					</S.ProfileArticle>

					<S.ProfileArticle>
						<S.ProfileTitle>포트폴리오</S.ProfileTitle>
						<S.ProfileGrid>
							{user?.portfolios &&
								user?.portfolios.map(({ ...props }, index) => (
									<PortfolioCard key={index} {...props} />
								))}
						</S.ProfileGrid>
						<hr />
					</S.ProfileArticle>
				</S.ProfileColumn>
			</S.ProfileLayout>
		)
	);
};

export default ProfileDetailsPage;
