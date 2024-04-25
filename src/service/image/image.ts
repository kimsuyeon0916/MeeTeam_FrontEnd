import { ImageResponse } from '../../types';
import { axiosAuthInstance } from '../axiosInstance';
import { EndPoint } from '../endPoint';

export const readImagePresignedUrl = async (fileName: string) => {
	try {
		const response = await axiosAuthInstance.get<ImageResponse>(EndPoint.UPLOAD_IMAGE.profile, {
			params: {
				'file-name': fileName,
			},
		});

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};
