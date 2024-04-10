import MainPage from './MainPage';
import RecruitPage from './recruit/recruitPage/RecruitPage';
import GalaryPage from './GalaryPage';
import RecruitCreatePage from './create/recruitCreatePage/RecruitCreatePage';
import OutputCreatePage from './create/outputCreatePage/OutputCreatePage';
import SignInPage from './account/signIn/SignInPage';
import SignUpPage from './account/signUp/SignUpPage';
import SchoolCertificationPage from './account/schoolCertification/SchoolCertificationPage';
import { SCHOOL_CERTIFICATION_DATA } from './account/schoolCertification/SchoolCertificationData';
import { INPUT_VALIDATION } from './account/validation';
import { SIGN_UP_DATA } from './account/signUp/SignUpData';
import NicknameSettingPage from './account/signUp/nicknameSetting/NicknameSettingPage';
import type { Account, User } from './account/signUp/SignUpData';
import PassWordFindingPage from './account/passWordFindingPage/PassWordFindingPage';
import { PASSWORD_DATA } from './account/passWordFindingPage/PassWordData';
import RecruitDetailPage from './recruit/recruitDetailPage/RecruitDetailPage';
import MyActivityManagePage from './activity/MyActivityManagePage';
import MyActivityInvited from './activity/MyActivityInvited';
import MyActivityWrapper from './activity/MyActivityWrapper';
import MyActivityLike from './activity/MyActivityLike';
import MyActivityApply from './activity/MyActivityApply';
import MyActivityBookmark from './activity/MyActivityBookmark';
import ProfileDetailsPage from './profile/ProfileDetailsPage';
import { userData } from './profile/userData';

export {
	MainPage,
	RecruitPage,
	GalaryPage,
	RecruitCreatePage,
	OutputCreatePage,
	SignInPage,
	SignUpPage,
	SchoolCertificationPage,
	SCHOOL_CERTIFICATION_DATA,
	User,
	INPUT_VALIDATION,
	SIGN_UP_DATA,
	NicknameSettingPage,
	Account,
	PassWordFindingPage,
	PASSWORD_DATA,
	RecruitDetailPage,
	MyActivityManagePage,
	MyActivityInvited,
	MyActivityWrapper,
	MyActivityLike,
	MyActivityApply,
	MyActivityBookmark,
	ProfileDetailsPage,
	userData,
};
