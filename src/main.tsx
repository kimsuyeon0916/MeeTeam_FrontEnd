import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
	MainPage,
	RecruitPage,
	GalaryPage,
	RecruitCreatePage,
	OutputCreatePage,
	RecruitDetailPage,
	SignInPage,
	SchoolCertificationPage,
	NicknameSettingPage,
	SignUpPage,
	PassWordFindingPage,
	ProfileDetailsPage,
	ApplierManagePage,
} from './pages/index.ts';
import './globalStyle.css';
import { useRecoilValue } from 'recoil';
import { applicantPageNum } from './atom.tsx';

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
				path: 'recruit',
				element: <RecruitPage />,
			},
			{
				path: 'recruit/:id',
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
				path: 'create/recruit',
				element: <RecruitCreatePage />,
			},
			{
				path: 'edit/recruit',
				element: <RecruitCreatePage />,
			},
			{
				path: 'create/output',
				element: <OutputCreatePage />,
			},
			{
				path: 'profile/:nickname?',
				element: <ProfileDetailsPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
