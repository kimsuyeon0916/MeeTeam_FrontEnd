const addClassToEmptyPTags = (html: string) => {
	const parser = new DOMParser();
	const doc = parser.parseFromString(html, 'text/html');
	const pTags = doc.getElementsByTagName('p');

	for (let i = 0; i < pTags.length; i++) {
		if (pTags[i].innerHTML === '&nbsp;') {
			pTags[i].classList.add('empty-p');
		}
	}

	return doc.body.innerHTML;
};

export default addClassToEmptyPTags;
