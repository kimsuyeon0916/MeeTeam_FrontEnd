import React from 'react';
import S from './RecruitDescription.styled';
import DOMPurify from 'dompurify';

const RecruitDescription = ({ content }: { content: string }) => {
	function addClassToEmptyPTags(html: string): string {
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, 'text/html');
		const pTags = doc.getElementsByTagName('p');

		for (let i = 0; i < pTags.length; i++) {
			if (pTags[i].innerHTML === '&nbsp;') {
				pTags[i].classList.add('empty-p');
			}
		}

		return doc.body.innerHTML;
	}

	const processedContent = addClassToEmptyPTags(content);

	return (
		<S.RecruitDescription>
			<h3>상세내용</h3>
			<hr />
			<section
				className='container-contents'
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(String(processedContent)),
				}}
			></section>
		</S.RecruitDescription>
	);
};

export default RecruitDescription;
