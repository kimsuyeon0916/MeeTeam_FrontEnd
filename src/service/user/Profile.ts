import { EndPoint, axiosAuthInstance } from '..';
import { User } from '../../types';

export const readProfile = async (userId: string) => {
	try {
		const response = await axiosAuthInstance.get<User>(EndPoint.PROFILE.read(userId));

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};
