import React from 'react';
import { MeeteamTag } from '../../index';
import { useRecoilValue } from 'recoil';
import { recruitInputState } from '../../../atom';

const RecruitTags = () => {
	const formData = useRecoilValue(recruitInputState);
	return (
		<>
			<section className='container-tags'>
				<section className='subtitle'>
					<h4>태그</h4>
				</section>
				<section className='container-tags__inputs'>
					<MeeteamTag />
				</section>
			</section>
			<hr className='under-info' />
		</>
	);
};

export default RecruitTags;
