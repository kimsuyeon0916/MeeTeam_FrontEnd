import { EndPoint } from './endPoint';
import { axiosInstance, axiosAuthInstance } from './axiosInstance';
import { signUp, certificateSchool, checkExist, checkDuplicateNickname } from './auth/auth';
import { readProfile } from './user/Profile';

export {
	EndPoint,
	axiosInstance,
	axiosAuthInstance,
	signUp,
	certificateSchool,
	checkExist,
  checkDuplicateNickname,
	readProfile,
};
