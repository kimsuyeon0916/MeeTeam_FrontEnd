import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
	RecruitPage,
	GalaryPage,
	RecruitCreatePage,
	RecruitDetailPage,
	SignInPage,
	SchoolCertificationPage,
	NicknameSettingPage,
	PassWordFindingPage,
	ProfileDetailsPage,
	ProfileEditPage,
	PortfolioDetailsPage,
	ApplierManagePage,
	RecruitManageWrapper,
	RecruitPostingBookmark,
	RecruitPostingApply,
	RecruitMyPostings,
	CompleteSignUpPage,
	PrivateRouter,
} from './pages/index.ts';
import './globalStyle.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '', // 일단 메인페이지가 생성되기 전까지 해당 url을 사용할 예정입니다.
				element: <RecruitPage />,
			},
			{
				path: 'recruitment/postings/:id',
				element: <RecruitDetailPage />,
			},
			{
				path: '/recruitment/applicants/:id',
				element: <PrivateRouter />,
				children: [{ path: '', element: <ApplierManagePage /> }],
			},
			{
				path: 'galary',
				element: <GalaryPage />,
			},
			{
				path: 'signin',
				element: <SignInPage />,
			},
			{
				path: 'find/password',
				element: <PassWordFindingPage />,
			},
			{
				path: 'signup',
				children: [
					{ path: 'school?', element: <SchoolCertificationPage /> },
					{ path: 'nickname', element: <NicknameSettingPage /> },
					{ path: 'complete', element: <CompleteSignUpPage /> },
				],
			},
			{
				path: 'management',
				element: <RecruitManageWrapper />,
				children: [
					{
						path: 'bookmark',
						element: <RecruitPostingBookmark />,
					},
					{
						path: 'applied',
						element: <RecruitPostingApply />,
					},
					{
						path: 'my-post',
						element: <RecruitMyPostings />,
					},
				],
			},
			{
				path: 'recruitment/postings',
				element: <RecruitCreatePage />,
			},
			{
				path: 'edit/recruit',
				element: <RecruitCreatePage />,
			},
			{
				path: 'profile/:userId?',
				element: <ProfileDetailsPage />,
			},
			{
				path: 'profile/edit',
				element: <ProfileEditPage />,
			},
			{
				path: 'portfolio/:portfolioId?',
				element: <PortfolioDetailsPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
