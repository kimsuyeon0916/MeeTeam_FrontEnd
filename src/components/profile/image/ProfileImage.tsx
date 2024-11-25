import React, { useEffect, useRef, useState } from 'react';
import S from './ProfileImage.styled';
import { AddProfile, DefaultProfileImage } from '../../../assets';
import { useNavigate } from 'react-router';
import { Image } from '../../../types';
import { useSetRecoilState } from 'recoil';
import { uploadImageState } from '../../../atom';

interface ProfileImage {
	isEditable?: boolean;
	userId?: string;
	size: string;
	url?: string;
}

const ProfileImage = ({ isEditable, userId, size, url }: ProfileImage) => {
	const navigate = useNavigate();
	const navigateProfile = (event: React.MouseEvent<HTMLDivElement>) => {
		if (userId) {
			event.stopPropagation();
			navigate(`/profile/${userId}`);
		}
	};

	const [image, setImage] = useState<Image | null>({ url: url });
	const setUploadImage = useSetRecoilState(uploadImageState);

	useEffect(() => {
		setImage({ url: url });
	}, [url]);

	const inputRef = useRef<HTMLInputElement>(null);

	const addImage = () => {
		inputRef.current?.click();
	};

	const changeImage = (event: React.BaseSyntheticEvent) => {
		const image = event.target?.files[0];
		const urlReader = new FileReader();
		urlReader.readAsDataURL(image);
		urlReader.onload = () => {
			const newImage = {
				fileName: image.name,
				url: urlReader.result,
				file: image,
			} as Image;
			setImage(newImage);
			setUploadImage(newImage);
		};
	};

	return (
		<S.ProfileImageLayout>
			<S.ProfileImageWrapper
				$size={size}
				$url={image?.url ? true : false}
				onClick={isEditable ? addImage : navigateProfile}
			>
				<S.ProfileImage src={image?.url ?? DefaultProfileImage} alt='프로필이미지' />
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

export default React.memo(ProfileImage);
