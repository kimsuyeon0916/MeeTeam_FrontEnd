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
import { readPortfolio, createPortfolio, updatePortfolio } from './portfolio/portfolio';
import { readImagePresignedUrl, readImageListPresignedUrl } from './image/image';

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
	readPortfolio,
	createPortfolio,
	updatePortfolio,
	readImagePresignedUrl,
	readImageListPresignedUrl,
};
