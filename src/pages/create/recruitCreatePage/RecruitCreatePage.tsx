import React from 'react';
import S from './RecruitCreatePage.styled';
import {
	BasicInformation,
	ControlButtons,
	Description,
	DetailedInformation,
	RecruitRole,
	RecruitTags,
} from '../../../components/index';
import { useMutation } from '@tanstack/react-query';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { recruitInputState, validState } from '../../../atom';
import { editPostingRecruit, postingRecruit } from '../../../service/recruit/posting';
import { useLocation, useNavigate } from 'react-router-dom';
import { EditPosting, InputState } from '../../../types';

const RecruitCreatePage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const setIsSubmit = useSetRecoilState(validState);
	const formData = useRecoilValue<InputState>(recruitInputState);
	const validCheck = useRecoilValue(validState);

	const uploadPost = useMutation({
		mutationFn: (formData: InputState) => postingRecruit(formData),
		onSuccess: () => {
			navigate(`/recruit/${uploadPost.data}`);
		},
	});

	const editPost = useMutation({
		mutationFn: ({ pageNum, formData }: EditPosting) => editPostingRecruit({ pageNum, formData }),
	});

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setIsSubmit(prev => ({
			...prev,
			isSubmitted: true,
		}));

		const postAvailable =
			validCheck.isCategory &&
			validCheck.isDeadline &&
			validCheck.isProcedure &&
			validCheck.isScope &&
			validCheck.isTag &&
			validCheck.isTitle;

		if (postAvailable && location.pathname.includes('create')) {
			uploadPost.mutate(formData);
		}
	};

	return (
		<S.RecruitCreatePage>
			<form onSubmit={handleSubmit}>
				<Description />
				<BasicInformation />
				<DetailedInformation />
				<RecruitRole />
				<RecruitTags />
				<ControlButtons />
			</form>
		</S.RecruitCreatePage>
	);
};

export default RecruitCreatePage;
