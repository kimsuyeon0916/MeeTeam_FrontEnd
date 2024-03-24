import { InputState } from '../../types';
import { axiosAuthInstance } from '..';
import { EndPoint } from '..';

export const postingRecruit = async (formData: InputState) => {
	try {
		const id = await axiosAuthInstance.post(EndPoint.POSTING.post, formData);
		return id;
	} catch (error) {
		console.error(error);
	}
};
