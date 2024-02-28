import { useMutation } from '@tanstack/react-query';
import { SetterOrUpdater } from 'recoil';
import { checkExist, signUp, certificateSchool } from '../service';
import { User } from '../types';

const ACCESS_TOKEN_KEY = import.meta.env.VITE_ACCESS_TOKEN_KEY;

const PLATFORM_ID = import.meta.env.VITE_PLATFORM_ID;

interface AuthProps {
	onSuccess?: () => void;
	setUserState?: SetterOrUpdater<User | null>;
}

/**
 * @description 네이버 연동 여부 체크 API를 호출하는 hook입니다.
 * 기존 회원인 경우 access token 을 로컬 스토리지에 저장합니다. 그리고 메인 페이지로 이동합니다.
 * 회원이 아닌 경우, platformId 를 로컬 스토리지에 저장합니다. 그리고 회원가입 페이지로 이동합니다.
 */
export const useCheckExist = ({ onSuccess, setUserState }: AuthProps = {}) => {
	return useMutation({
		mutationFn: checkExist,
		onSuccess: data => {
			if (data?.accessToken) {
				setUserState?.(data.user);
			}
			if (data?.platformId) {
				localStorage.setItem(PLATFORM_ID, data.platformId);
			}
			onSuccess?.();
		},
	});
};

/**
 * @description 네이버 연동 회원가입 API를 호출하는 hook입니다. 성공 시 access token을 로컬 스토리지에 저장합니다.
 */
export const useNaverSignUp = ({ onSuccess, setUserState }: AuthProps = {}) => {
	return useMutation({
		mutationFn: signUp,
		onSuccess: data => {
			if (data?.accessToken) {
				localStorage.removeItem(PLATFORM_ID);
				localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
				setUserState?.(data.user);
				onSuccess?.();
			}
		},
	});
};

/**
 * @description 학사 인증 API를 호출하는 hook입니다. 학사 인증 이메일을 전송합니다.
 */
export const useCertificateSchool = ({ onSuccess }: AuthProps = {}) => {
	return useMutation({
		mutationFn: certificateSchool,
		onSuccess: () => {
			onSuccess?.();
		},
	});
};
