import React from 'react';

const RecruitTag = () => {
	return (
		<article className='wrapper-tags'>
			<h3>태그</h3>
			<section className='container-tags'>
				{tempTags.map(tag => (
					<span className='tag'>{tag}</span>
				))}
			</section>
		</article>
	);
};

export default RecruitTag;
