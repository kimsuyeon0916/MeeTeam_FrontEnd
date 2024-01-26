import React from 'react';
import S from './Setting.styled';
import { EssentialInformation } from '../../..';

const Setting = () => {
	return (
		<S.SettingLayout>
			<EssentialInformation />
			<S.SettingArticle>
				<h2 className='main--big-text'>공개 범위</h2>
				<div>해당 밋팀의 공개 범위를 설정해주세요!</div>
				<S.SettingButton>공개로 설정하기</S.SettingButton>
			</S.SettingArticle>
			<S.SettingArticle>
				<h2 className='main--big-text'>밋팀 삭제</h2>
				<div>해당 밋팀을 삭제하고 싶으시면 "밋팀 삭제"을 눌러주세요.</div>
				<S.SettingButton $color='#FF6A6A'>밋팀 삭제</S.SettingButton>
			</S.SettingArticle>
		</S.SettingLayout>
	);
};

export default Setting;
