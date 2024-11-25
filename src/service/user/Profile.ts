import { EndPoint, axiosAuthInstance } from '..';
import { User, UpdateProfilePayload, UserReponse } from '../../types';

export const readProfile = async (userId: string) => {
	try {
		const response = await axiosAuthInstance.get<User>(EndPoint.PROFILE.read(userId));

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const updateProfile = async (profile: UpdateProfilePayload) => {
	try {
		const response = await axiosAuthInstance.put<string>(EndPoint.PROFILE.update, {
			...profile,
		});

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const readProfileImage = async () => {
	try {
		const response = await axiosAuthInstance.get<UserReponse>(EndPoint.PROFILE.image);

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};
