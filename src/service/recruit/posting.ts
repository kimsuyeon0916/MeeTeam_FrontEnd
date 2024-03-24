import { InputState } from '../../types';
import { axiosInstance } from '..';
import { EndPoint } from '..';

export const postingRecruit = async (formData: InputState) => {
	try {
		const id = await axiosInstance.post(EndPoint.POSTING.post, formData);
		return id;
	} catch (error) {
		console.error(error);
	}
};
