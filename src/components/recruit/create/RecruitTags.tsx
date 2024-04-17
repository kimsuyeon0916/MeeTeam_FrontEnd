import React from 'react';
import { MeeteamTag } from '../../index';
import { useValid } from '../../../hooks';
import { useRecoilValue } from 'recoil';
import { recruitInputState } from '../../../atom';

const RecruitTags = () => {
	const formData = useRecoilValue(recruitInputState);
	const { validMessage, isValid } = useValid(formData);
	return (
		<>
			<section className='container-tags'>
				<section className='subtitle'>
					<h4>태그</h4>
				</section>
				<section className='container-tags__inputs'>
					<MeeteamTag />
					{isValid.isSubmitted && !isValid.isTag && (
						<p className='valid-msg is-tag'>{validMessage.tag}</p>
					)}
				</section>
			</section>
			<hr className='under-info' />
		</>
	);
};

export default RecruitTags;
