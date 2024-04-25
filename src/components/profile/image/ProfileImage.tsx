import React, { useRef, useState } from 'react';
import S from './ProfileImage.styled';
import { AddProfile, DefaultProfileImage } from '../../../assets';
import { useNavigate } from 'react-router';
import { Image } from '../../../types';

interface ProfileImage {
	isEditable?: boolean;
	userId: string;
	size: string;
	url?: string;
}

const ProfileImage = ({ isEditable, userId, size, url }: ProfileImage) => {
	const navigate = useNavigate();
	const navigateProfile = () => {
		navigate(`/profile/${userId}`);
	};

	const inputRef = useRef<HTMLInputElement>(null);
	const addImage = () => {
		inputRef.current?.click();
	};

	const [uploadImage, setUploadImage] = useState<Image>({ fileName: '프로필사진', url: url });

	const changeImage = (event: React.BaseSyntheticEvent) => {
		const image = event.target?.files[0];

		let newImage: Image = {
			fileName: image.name,
		};

		const binaryReader = new FileReader();
		binaryReader.readAsArrayBuffer(image);
		binaryReader.onload = () => {
			newImage = { ...newImage, binary: binaryReader.result as ArrayBuffer };
		};

		const urlReader = new FileReader();
		urlReader.readAsDataURL(image);
		urlReader.onload = () => {
			newImage = { ...newImage, url: urlReader.result as string };
			setUploadImage(newImage);
		};
	};

	return (
		<S.ProfileImageLayout>
			<S.ProfileImageWrapper
				$size={size}
				$url={uploadImage?.url ? true : false}
				onClick={isEditable ? addImage : navigateProfile}
			>
				<S.ProfileImage src={uploadImage?.url ?? DefaultProfileImage} alt='프로필이미지' />
			</S.ProfileImageWrapper>
			{isEditable && (
				<>
					<S.ProfileAddIcon onClick={addImage} src={AddProfile} alt='프로필이미지 추가' />
					<S.ProfileImageInput ref={inputRef} type='file' accept='image/*' onChange={changeImage} />
				</>
			)}
		</S.ProfileImageLayout>
	);
};

export default ProfileImage;
