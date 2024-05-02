import { ImageResponse } from '../../types';
import { axiosAuthInstance, axiosInstance } from '../axiosInstance';
import { EndPoint } from '../endPoint';

interface UploadImageFile {
	presignedUrl: string;
	imageFile: File;
}

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

export const readImageListPresignedUrl = async ({
	fileName,
	portfolioId,
}: {
	fileName: string;
	portfolioId?: string;
}) => {
	try {
		const response = await axiosAuthInstance.get<ImageResponse[]>(EndPoint.UPLOAD_IMAGE.portfolio, {
			params: {
				'file-name': fileName,
				portfolio: portfolioId,
			},
		});

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const uploadImageFile = async ({ presignedUrl, imageFile }: UploadImageFile) => {
	try {
		const response = await axiosInstance.put(presignedUrl, imageFile, {
			headers: {
				'Content-Type': imageFile.type,
			},
		});

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};
