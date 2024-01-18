import React from 'react';
import S from './Setting.styled';
import { EssentialInformation } from '../../..';

const Setting = () => {
	return (
		<S.SettingLayout>
			<EssentialInformation />
			<S.SettingArticle>
				<h2 className='main--big-text'>공개 범위</h2>
				<div>아직까지 함께 할 사람들을 못찾았다면? 함께 할 사람들을 찾을 수 있습니다!</div>
				<S.SettingButton>공개로 설정하기</S.SettingButton>
			</S.SettingArticle>
			<S.SettingArticle>
				<h2 className='main--big-text'>밋팀 중단</h2>
				<div>아직까지 함께 할 사람들을 못찾았다면? 함께 할 사람들을 찾을 수 있습니다!</div>
				<S.SettingButton $color='#FF6A6A'>밋팀 중단</S.SettingButton>
			</S.SettingArticle>
		</S.SettingLayout>
	);
};

export default Setting;
