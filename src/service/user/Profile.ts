import { EndPoint, axiosAuthInstance } from '..';

export const readProfile = async (nickname: string) => {
	try {
		const response = await axiosAuthInstance.get(EndPoint.PROFILE.read(nickname));

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};
