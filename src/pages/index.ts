import MainPage from './MainPage';
import RecruitPage from './recruit/recruitPage/RecruitPage';
import GalaryPage from './GalaryPage';
import RecruitCreatePage from './create/recruitCreatePage/RecruitCreatePage';
import SignInPage from './account/signIn/SignInPage';
import SignUpPage from './account/signUp/SignUpPage';
import RecruitDetailPage from './recruit/recruitDetailPage/RecruitDetailPage';
import SchoolCertificationPage from './account/schoolCertification/SchoolCertificationPage';
import { SCHOOL_CERTIFICATION_DATA } from './account/schoolCertification/SchoolCertificationData';
import { SIGN_UP_DATA } from './account/signUp/SignUpData';
import NicknameSettingPage from './account/nicknameSetting/NicknameSettingPage';
import type { Account, User } from './account/signUp/SignUpData';
import PassWordFindingPage from './account/passWordFindingPage/PassWordFindingPage';
import { PASSWORD_DATA } from './account/passWordFindingPage/PassWordData';
import ProfileEditPage from './profile/edit/ProfileEditPage';
import PROFILE_EDIT_DATA from './profile/edit/ProfileEditData';
import { portfolioData } from './portfolio/portfolioData';
import PortfolioDetailsPage from './portfolio/details/PortfolioDetailsPage';
import ApplierManagePage from './recruit/applierManagePage/ApplierManagePage';
import RecruitManageWrapper from './recruit/recruitManagePage/RecruitManageWrapper';
import RecruitPostingBookmark from './recruit/recruitManagePage/RecruitPostingBookmark';
import ProfileDetailsPage from './profile/details/ProfileDetailsPage';
import { userData } from './profile/userData';
import RecruitPostingApply from './recruit/recruitManagePage/RecruitPostingApply';
import RecruitMyPostings from './recruit/recruitManagePage/RecruitMyPostings';
import CompleteSignUpPage from './account/complete/CompleteSignUpPage';
import PortfolioManagementPage from './portfolio/management/PortfolioManagmentPage';

export {
	MainPage,
	RecruitPage,
	GalaryPage,
	RecruitCreatePage,
	SignInPage,
	SignUpPage,
	SchoolCertificationPage,
	SCHOOL_CERTIFICATION_DATA,
	User,
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
	ProfileEditPage,
	PROFILE_EDIT_DATA,
	portfolioData,
	PortfolioDetailsPage,
	ApplierManagePage,
	RecruitPostingApply,
	RecruitMyPostings,
	CompleteSignUpPage,
	PortfolioManagementPage,
};
