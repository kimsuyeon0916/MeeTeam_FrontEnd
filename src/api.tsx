import axios from 'axios';

export const postingRecruit = async (formData: any) => {
	const formId = await axios
		.post('http://3.38.78.128/recruitment/post', formData)
		.then(response => {
			return response.data;
		})
		.catch(error => {
			console.log(error);
		});
	return formId;
};

export const getSearchKeyword = async (keyword: string) => {
	const response = await axios.get(`http://3.38.78.128/role/search?keyword=${keyword}&limit=5`);
	return response.data;
};
