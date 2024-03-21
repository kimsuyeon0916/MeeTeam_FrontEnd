import axios from 'axios';

export const postingRecruit = (formData: any) => {
	const formId = axios
		.post('http://3.38.78.128/recruitment/post', formData)
		.then(response => {
			return response.data;
		})
		.catch(error => {
			console.log(error);
		});
	return formId;
};
