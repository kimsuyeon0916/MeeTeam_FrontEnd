import { EndPoint } from './endPoint';
import { axiosInstance, axiosAuthInstance } from './axiosInstance';
import {
	checkExist,
	signUp,
	certificateSchool,
	checkDuplicateNickname,
	readUniversityList,
	readDepartmentList,
} from './auth/auth';
import { readProfile, updateProfile } from './user/Profile';
import { readSkillList, readRoleList } from './search/search';
import { readPortfolioList } from './portfolio/portfolio';
import { getPostingData, getApplyData, applyRole, closeRecruitPost } from './recruit/detail';
import {
	postingRecruit,
	getRoleKeyword,
	getSkillKeyword,
	getCourseKeyword,
	getProfessorKeyword,
	getTagKeyword,
	editPostingRecruit,
} from './recruit/posting';
import { getApplicantsList } from './recruit/applicant';

export {
	EndPoint,
	axiosInstance,
	axiosAuthInstance,
	checkExist,
	signUp,
	certificateSchool,
	checkDuplicateNickname,
	readUniversityList,
	readDepartmentList,
	readProfile,
	updateProfile,
	readSkillList,
	readRoleList,
	readPortfolioList,
	getPostingData,
	getApplyData,
	applyRole,
	postingRecruit,
	getRoleKeyword,
	getSkillKeyword,
	getCourseKeyword,
	getProfessorKeyword,
	getTagKeyword,
	closeRecruitPost,
	editPostingRecruit,
	getApplicantsList,
};
