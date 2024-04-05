import React, { useEffect } from 'react';
import S from '../Profile.styled';
import { PortfolioCard, ProfileImage, SkillTag } from '../../../components';
import { useReadProfile } from '../../../hooks';
import { useParams } from 'react-router';
import { useRecoilState } from 'recoil';
import { userState } from '../../../atom';

const ProfileDetailsPage = () => {
	const [userInfo, setUserState] = useRecoilState(userState);

	const { userId } = useParams() as { userId: string };
	const { data: user, isSuccess } = useReadProfile(userId);

	useEffect(() => {
		if (isSuccess) {
			userInfo?.userId === userId && setUserState({ ...user, userId }); // 본인인지 아닌지 확인 로직 필요
		}
	}, [isSuccess]);

	return (
		<S.ProfileLayout>
			<S.ProfileHeader>
				<ProfileImage nickname={user?.nickname as string} size='14rem' url={user?.imageUrl} />
				<S.ProfileColumn>
					<div className='profile-header__row'>
						<h2>{user?.nickname}</h2>
						<h3>{user?.userName}</h3>
					</div>
					<h4>{user?.interest}</h4>
					<h6>{user?.introduction}</h6>
				</S.ProfileColumn>
			</S.ProfileHeader>

			<S.ProfileColumn $gap='5rem'>
				<S.ProfileArticle>
					<S.ProfileTitle>자기 소개</S.ProfileTitle>
					<div>{user?.aboutMe}</div>
					<hr />
				</S.ProfileArticle>

				<S.ProfileArticle>
					<S.ProfileTitle>연락 수단</S.ProfileTitle>
					<S.ProfileColumn $gap='1rem'>
						{user?.universityEmail?.isPublic && <div>{user?.universityEmail?.content}</div>}
						{user?.subEmail?.isPublic && <div>{user?.subEmail?.content}</div>}
						{user?.phone?.isPublic && <div>{user?.phone?.content}</div>}
					</S.ProfileColumn>
					<hr />
				</S.ProfileArticle>

				<S.ProfileArticle>
					<S.ProfileTitle>교육</S.ProfileTitle>
					<div>
						<S.ProfileDate>{user?.year}년도 입학</S.ProfileDate>
						<S.ProfileRow>
							<S.ProfileColumn $gap='1.5rem'>
								<h4>{user?.university}</h4>
							</S.ProfileColumn>
							<S.ProfileColumn $gap='1.5rem'>
								<div>{user?.department}</div>
								<div>
									{user?.gpa}/{user?.maxGpa}
								</div>
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
								<S.ProfileDate>
									{startDate} ~ {endDate}
								</S.ProfileDate>
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
						{user?.links?.map(({ url, description }, index) => (
							<S.ProfileRow key={index} $gap='3.65rem'>
								<span>{description}</span>
								<a href={url} target='_blank' title={description} rel='noreferrer noopener'>
									{url}
								</a>
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
	);
};

export default ProfileDetailsPage;
