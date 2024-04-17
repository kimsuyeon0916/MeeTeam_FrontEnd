import React from 'react';
import S from './RecruitDescription.styled';
import DOMPurify from 'dompurify';

const RecruitDescription = ({ content }: { content: string }) => {
	return (
		<S.RecruitDescription>
			<h3>상세내용</h3>
			<hr />
			<section
				className='container-contents'
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(String(content)),
				}}
			></section>
		</S.RecruitDescription>
	);
};

export default RecruitDescription;
