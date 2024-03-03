import React from 'react';
import S from './RecruitCreatePage.styled';
import { TitleAndIntro } from '../../../components/index';
import RecruitInfoWrapper from './wrappers/RecruitInfoWrapper';
import RecruitPostWrapper from './wrappers/RecruitPostWrapper';
import { useMutation } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { recruitInputState } from '../../../atom';
import { postingRecruit } from '../../../api';
import { useNavigate } from 'react-router-dom';

const descriptions = [
	'함께할 멤버들에게 알릴 기본 정보들을 기입해주세요!',
	'기본 정보를 기반으로 구인글을 제공할 수 있습니다.',
];

const introductions = [
	'게시될 구인글을 작성해주세요!',
	'어떤 방식으로 진행하고 싶은지 구체적으로 작성해주세요.',
];

const RecruitCreatePage = () => {
	const navigate = useNavigate();
	const recruitFormData = useRecoilValue(recruitInputState);
	const onClickCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
		// 모달창 띄워서 한 번 더 확인시키고 이동하기
		// navigate('/');
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const uploadPost = useMutation({
			mutationFn: () => postingRecruit(recruitFormData),
		});
		navigate(`/recruit/${uploadPost}`);
	};
	return (
		<S.RecruitCreatePage>
			<TitleAndIntro title='구인글 작성' descriptions={descriptions} />
			<hr />
			<form onSubmit={handleSubmit} id='submit'>
				<RecruitInfoWrapper />
				<TitleAndIntro descriptions={introductions} />
				<hr />
				<RecruitPostWrapper />
			</form>
			<div className='container__controller'>
				<button onClick={onClickCancel}>취소</button>
				<button type='submit' form='submit'>
					등록
				</button>
			</div>
		</S.RecruitCreatePage>
	);
};

export default RecruitCreatePage;
