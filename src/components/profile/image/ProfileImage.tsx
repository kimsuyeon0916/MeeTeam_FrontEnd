import React, { useRef, useState } from 'react';
import S from './ProfileImage.styled';
import { AddProfile, DefaultProfileImage } from '../../../assets';
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { imageNameState } from '../../../atom';

interface ProfileImage {
	isEditable?: boolean;
	nickname: string;
	size: string;
	url?: string;
}

const ProfileImage = ({ isEditable, nickname, size, url }: ProfileImage) => {
	const navigate = useNavigate();
	const navigateProfile = () => {
		navigate(`/profile/${nickname}`);
	};

	const inputRef = useRef<HTMLInputElement>(null);
	const addImage = () => {
		inputRef.current?.click();
	};

	const [imageSrc, setImageSrc] = useState<string | null>(url ? url : null);
	const setImageNameState = useSetRecoilState(imageNameState);

	const changeImage = (event: React.BaseSyntheticEvent) => {
		const uploadImage = event.target?.files[0];
		setImageNameState(uploadImage.name);

		const reader = new FileReader();
		reader.readAsDataURL(uploadImage);
		reader.onload = () => setImageSrc(reader.result as string);
	};

	return (
		<S.ProfileImageLayout>
			<S.ProfileImageWrapper
				$size={size}
				$url={imageSrc ? true : false}
				onClick={isEditable ? addImage : navigateProfile}
			>
				<S.ProfileImage src={imageSrc ? imageSrc : DefaultProfileImage} alt='프로필이미지' />
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
