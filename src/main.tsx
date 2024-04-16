import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
	MainPage,
	RecruitPage,
	GalaryPage,
	RecruitCreatePage,
	RecruitDetailPage,
	SignInPage,
	SchoolCertificationPage,
	NicknameSettingPage,
	SignUpPage,
	PassWordFindingPage,
	ProfileDetailsPage,
	ProfileEditPage,
	ApplierManagePage,
	RecruitManageWrapper,
	RecruitPostingBookmark,
	RecruitPostingApply,
	RecruitMyPostings,
} from './pages/index.ts';
import './globalStyle.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '',
				element: <MainPage />,
			},
			{
				path: 'recruitment/postings/search',
				element: <RecruitPage />,
			},
			{
				path: 'recruitment/postings/:id',
				element: <RecruitDetailPage />,
			},
			{
				path: '/recruitment/applicants',
				element: <ApplierManagePage />,
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
					{ path: '', element: <SignUpPage /> },
					{ path: 'school?', element: <SchoolCertificationPage /> },
					{ path: 'nickname', element: <NicknameSettingPage /> },
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
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
