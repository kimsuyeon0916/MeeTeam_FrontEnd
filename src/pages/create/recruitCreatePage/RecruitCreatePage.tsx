import React from 'react';
import S from './RecruitCreatePage.styled';
import {
	BasicInformation,
	ControlButtons,
	Description,
	DetailedInformation,
	RecruitRoles,
} from '../../../components/index';
import { useMutation } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { recruitInputState, validState } from '../../../atom';
import { postingRecruit } from '../../../service/recruit/posting';
import { useNavigate } from 'react-router-dom';
import RecruitTags from '../../../components/recruit/create/RecruitTags';
import { InputState } from '../../../types';

const RecruitCreatePage = () => {
	const navigate = useNavigate();
	const [isSubmit, setIsSubmit] = useRecoilState(validState);
	const [formData, setFormData] = useRecoilState<InputState>(recruitInputState);

	const uploadPost = useMutation({
		mutationFn: (formData: any) => postingRecruit(formData),
	});

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setIsSubmit(prev => ({
			...prev,
			isSubmitted: true,
		}));

		uploadPost.mutate(formData as any);
		// console.log(uploadPost);
		// navigate(`/recruit/${uploadPost}`);
	};

	return (
		<S.RecruitCreatePage>
			<form onSubmit={handleSubmit}>
				<Description />
				<BasicInformation />
				<DetailedInformation />
				<RecruitRoles />
				<RecruitTags />
				<ControlButtons />
			</form>
		</S.RecruitCreatePage>
	);
};

export default RecruitCreatePage;
