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
import RecruitManageWrapper from './recruit/recruitManagePage/RecruitManageWrapper';
import RecruitPostingBookmark from './recruit/recruitManagePage/RecruitPostingBookmark';
import ProfileDetailsPage from './profile/ProfileDetailsPage';
import { userData } from './profile/userData';
import RecruitPostingApply from './recruit/recruitManagePage/RecruitPostingApply';
import RecruitMyPostings from './recruit/recruitManagePage/RecruitMyPostings';

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
	RecruitManageWrapper,
	RecruitPostingBookmark,
	ProfileDetailsPage,
	userData,
	RecruitPostingApply,
	RecruitMyPostings,
};
